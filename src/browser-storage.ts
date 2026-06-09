import type { Session } from './generate.js';
import type { ReviseSession } from './revise-types.js';

export const CHARACTER_SESSION_KEY = 'charCreator';
export const REVISE_SESSIONS_KEY = 'charCreator_reviseSessions';

type LocalForageLike = {
  getItem<T>(key: string): Promise<T | null>;
  setItem<T>(key: string, value: T): Promise<T>;
  removeItem(key: string): Promise<void>;
};

type LegacyStorageLike = Pick<Storage, 'getItem' | 'removeItem'>;

export interface StorageLoadResult<T> {
  value: T | null;
  migrated: boolean;
  recovered: boolean;
  error?: unknown;
}

export interface StorageSaveResult {
  persisted: boolean;
  error?: unknown;
}

const getStorage = (): LocalForageLike => SillyTavern.libs.localforage as LocalForageLike;

const parseLegacyValue = <T>(rawValue: string | null): { value: T | null; recovered: boolean; error?: unknown } => {
  if (!rawValue) {
    return { value: null, recovered: false };
  }

  try {
    return { value: JSON.parse(rawValue) as T, recovered: false };
  } catch (error) {
    return { value: null, recovered: true, error };
  }
};

const loadWithLegacyMigration = async <T>(
  key: string,
  storage: LocalForageLike,
  legacyStorage: LegacyStorageLike,
): Promise<StorageLoadResult<T>> => {
  try {
    const storedValue = await storage.getItem<T>(key);
    if (storedValue !== null) {
      return { value: storedValue, migrated: false, recovered: false };
    }

    const legacy = parseLegacyValue<T>(legacyStorage.getItem(key));
    if (legacy.value === null) {
      if (legacy.recovered) {
        legacyStorage.removeItem(key);
      }
      return { value: null, migrated: false, recovered: legacy.recovered, error: legacy.error };
    }

    await storage.setItem(key, legacy.value);
    legacyStorage.removeItem(key);
    return { value: legacy.value, migrated: true, recovered: legacy.recovered };
  } catch (error) {
    return { value: null, migrated: false, recovered: true, error };
  }
};

const saveValue = async <T>(
  key: string,
  value: T,
  storage: LocalForageLike = getStorage(),
): Promise<StorageSaveResult> => {
  try {
    await storage.setItem(key, value);
    return { persisted: true };
  } catch (error) {
    return { persisted: false, error };
  }
};

export const loadCharacterSession = (
  storage: LocalForageLike = getStorage(),
  legacyStorage: LegacyStorageLike = localStorage,
): Promise<StorageLoadResult<Partial<Session>>> =>
  loadWithLegacyMigration<Partial<Session>>(CHARACTER_SESSION_KEY, storage, legacyStorage);

export const saveCharacterSession = (
  session: Session,
  storage: LocalForageLike = getStorage(),
): Promise<StorageSaveResult> => saveValue(CHARACTER_SESSION_KEY, session, storage);

export const loadReviseSessions = (
  storage: LocalForageLike = getStorage(),
  legacyStorage: LegacyStorageLike = localStorage,
): Promise<StorageLoadResult<ReviseSession[]>> =>
  loadWithLegacyMigration<ReviseSession[]>(REVISE_SESSIONS_KEY, storage, legacyStorage);

export const saveReviseSessions = (
  sessions: ReviseSession[],
  storage: LocalForageLike = getStorage(),
): Promise<StorageSaveResult> => saveValue(REVISE_SESSIONS_KEY, sessions, storage);
