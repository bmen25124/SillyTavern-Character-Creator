import { renderStoryString as G2, persona_description_positions as ev } from "../../../../power-user.js";
import { parseMesExamples as V2, baseChatReplace as Y2, chat_metadata as Ls, getMaxContextSize as X2, name1 as _r, name2 as Qr, this_chid as Ht, extension_prompt_types as Ca, depth_prompt_role_default as $2, depth_prompt_depth_default as Q2 } from "../../../../../script.js";
import { createWorldInfoEntry as K2, world_info_include_names as J2, wi_anchor_position as W2, world_names as tv } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as e_, formatInstructModeSystemPrompt as t_ } from "../../../../instruct-mode.js";
import { appendFileContent as n_ } from "../../../../chats.js";
import { setOpenAIMessages as r_, setOpenAIMessageExamples as a_, formatWorldInfo as i_, getPromptPosition as s_, getPromptRole as l_, prepareOpenAIMessages as o_ } from "../../../../openai.js";
import { metadata_keys as Ps } from "../../../../authors-note.js";
import { getGroupDepthPrompts as u_, selected_group as Un } from "../../../../group-chats.js";
import { getRegexedString as c_, regex_placement as nv } from "../../../regex/engine.js";
import { removeFromArray as rv, runAfterAnimation as f_ } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as wi, fixToastrForDialogs as Vf } from "../../../../popup.js";
import av from "../../../../../lib/dialog-polyfill.esm.js";
function n0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Yf = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iv;
function d_() {
  if (iv) return Is;
  iv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, o, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      u = {};
      for (var p in o)
        p !== "key" && (u[p] = o[p]);
    } else u = o;
    return o = u.ref, {
      $$typeof: t,
      type: s,
      key: d,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return Is.Fragment = r, Is.jsx = i, Is.jsxs = i, Is;
}
var sv;
function h_() {
  return sv || (sv = 1, Yf.exports = d_()), Yf.exports;
}
var A = h_(), Xf = { exports: {} }, je = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv;
function p_() {
  if (lv) return je;
  lv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function b(j) {
    return j === null || typeof j != "object" ? null : (j = _ && j[_] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var v = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, f = Object.assign, S = {};
  function E(j, K, ae) {
    this.props = j, this.context = K, this.refs = S, this.updater = ae || v;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(j, K) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, K, "setState");
  }, E.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function O() {
  }
  O.prototype = E.prototype;
  function w(j, K, ae) {
    this.props = j, this.context = K, this.refs = S, this.updater = ae || v;
  }
  var D = w.prototype = new O();
  D.constructor = w, f(D, E.prototype), D.isPureReactComponent = !0;
  var x = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(j, K, ae, se, le, Ie) {
    return ae = Ie.ref, {
      $$typeof: t,
      type: j,
      key: K,
      ref: ae !== void 0 ? ae : null,
      props: Ie
    };
  }
  function q(j, K) {
    return k(
      j.type,
      K,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function G(j) {
    return typeof j == "object" && j !== null && j.$$typeof === t;
  }
  function B(j) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ae) {
      return K[ae];
    });
  }
  var V = /\/+/g;
  function $(j, K) {
    return typeof j == "object" && j !== null && j.key != null ? B("" + j.key) : K.toString(36);
  }
  function oe() {
  }
  function fe(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(oe, oe) : (j.status = "pending", j.then(
          function(K) {
            j.status === "pending" && (j.status = "fulfilled", j.value = K);
          },
          function(K) {
            j.status === "pending" && (j.status = "rejected", j.reason = K);
          }
        )), j.status) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function me(j, K, ae, se, le) {
    var Ie = typeof j;
    (Ie === "undefined" || Ie === "boolean") && (j = null);
    var Y = !1;
    if (j === null) Y = !0;
    else
      switch (Ie) {
        case "bigint":
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case t:
            case r:
              Y = !0;
              break;
            case y:
              return Y = j._init, me(
                Y(j._payload),
                K,
                ae,
                se,
                le
              );
          }
      }
    if (Y)
      return le = le(j), Y = se === "" ? "." + $(j, 0) : se, x(le) ? (ae = "", Y != null && (ae = Y.replace(V, "$&/") + "/"), me(le, K, ae, "", function(Ve) {
        return Ve;
      })) : le != null && (G(le) && (le = q(
        le,
        ae + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(
          V,
          "$&/"
        ) + "/") + Y
      )), K.push(le)), 1;
    Y = 0;
    var ge = se === "" ? "." : se + ":";
    if (x(j))
      for (var ye = 0; ye < j.length; ye++)
        se = j[ye], Ie = ge + $(se, ye), Y += me(
          se,
          K,
          ae,
          Ie,
          le
        );
    else if (ye = b(j), typeof ye == "function")
      for (j = ye.call(j), ye = 0; !(se = j.next()).done; )
        se = se.value, Ie = ge + $(se, ye++), Y += me(
          se,
          K,
          ae,
          Ie,
          le
        );
    else if (Ie === "object") {
      if (typeof j.then == "function")
        return me(
          fe(j),
          K,
          ae,
          se,
          le
        );
      throw K = String(j), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Y;
  }
  function U(j, K, ae) {
    if (j == null) return j;
    var se = [], le = 0;
    return me(j, se, "", "", function(Ie) {
      return K.call(ae, Ie, le++);
    }), se;
  }
  function te(j) {
    if (j._status === -1) {
      var K = j._result;
      K = K(), K.then(
        function(ae) {
          (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ae);
        },
        function(ae) {
          (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ae);
        }
      ), j._status === -1 && (j._status = 0, j._result = K);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var ue = typeof reportError == "function" ? reportError : function(j) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
        error: j
      });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", j);
      return;
    }
    console.error(j);
  };
  function Le() {
  }
  return je.Children = {
    map: U,
    forEach: function(j, K, ae) {
      U(
        j,
        function() {
          K.apply(this, arguments);
        },
        ae
      );
    },
    count: function(j) {
      var K = 0;
      return U(j, function() {
        K++;
      }), K;
    },
    toArray: function(j) {
      return U(j, function(K) {
        return K;
      }) || [];
    },
    only: function(j) {
      if (!G(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  }, je.Component = E, je.Fragment = i, je.Profiler = o, je.PureComponent = w, je.StrictMode = s, je.Suspense = h, je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, je.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return T.H.useMemoCache(j);
    }
  }, je.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, je.cloneElement = function(j, K, ae) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var se = f({}, j.props), le = j.key, Ie = void 0;
    if (K != null)
      for (Y in K.ref !== void 0 && (Ie = void 0), K.key !== void 0 && (le = "" + K.key), K)
        !M.call(K, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && K.ref === void 0 || (se[Y] = K[Y]);
    var Y = arguments.length - 2;
    if (Y === 1) se.children = ae;
    else if (1 < Y) {
      for (var ge = Array(Y), ye = 0; ye < Y; ye++)
        ge[ye] = arguments[ye + 2];
      se.children = ge;
    }
    return k(j.type, le, void 0, void 0, Ie, se);
  }, je.createContext = function(j) {
    return j = {
      $$typeof: d,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: u,
      _context: j
    }, j;
  }, je.createElement = function(j, K, ae) {
    var se, le = {}, Ie = null;
    if (K != null)
      for (se in K.key !== void 0 && (Ie = "" + K.key), K)
        M.call(K, se) && se !== "key" && se !== "__self" && se !== "__source" && (le[se] = K[se]);
    var Y = arguments.length - 2;
    if (Y === 1) le.children = ae;
    else if (1 < Y) {
      for (var ge = Array(Y), ye = 0; ye < Y; ye++)
        ge[ye] = arguments[ye + 2];
      le.children = ge;
    }
    if (j && j.defaultProps)
      for (se in Y = j.defaultProps, Y)
        le[se] === void 0 && (le[se] = Y[se]);
    return k(j, Ie, void 0, void 0, null, le);
  }, je.createRef = function() {
    return { current: null };
  }, je.forwardRef = function(j) {
    return { $$typeof: p, render: j };
  }, je.isValidElement = G, je.lazy = function(j) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: j },
      _init: te
    };
  }, je.memo = function(j, K) {
    return {
      $$typeof: g,
      type: j,
      compare: K === void 0 ? null : K
    };
  }, je.startTransition = function(j) {
    var K = T.T, ae = {};
    T.T = ae;
    try {
      var se = j(), le = T.S;
      le !== null && le(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Le, ue);
    } catch (Ie) {
      ue(Ie);
    } finally {
      T.T = K;
    }
  }, je.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, je.use = function(j) {
    return T.H.use(j);
  }, je.useActionState = function(j, K, ae) {
    return T.H.useActionState(j, K, ae);
  }, je.useCallback = function(j, K) {
    return T.H.useCallback(j, K);
  }, je.useContext = function(j) {
    return T.H.useContext(j);
  }, je.useDebugValue = function() {
  }, je.useDeferredValue = function(j, K) {
    return T.H.useDeferredValue(j, K);
  }, je.useEffect = function(j, K, ae) {
    var se = T.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, K);
  }, je.useId = function() {
    return T.H.useId();
  }, je.useImperativeHandle = function(j, K, ae) {
    return T.H.useImperativeHandle(j, K, ae);
  }, je.useInsertionEffect = function(j, K) {
    return T.H.useInsertionEffect(j, K);
  }, je.useLayoutEffect = function(j, K) {
    return T.H.useLayoutEffect(j, K);
  }, je.useMemo = function(j, K) {
    return T.H.useMemo(j, K);
  }, je.useOptimistic = function(j, K) {
    return T.H.useOptimistic(j, K);
  }, je.useReducer = function(j, K, ae) {
    return T.H.useReducer(j, K, ae);
  }, je.useRef = function(j) {
    return T.H.useRef(j);
  }, je.useState = function(j) {
    return T.H.useState(j);
  }, je.useSyncExternalStore = function(j, K, ae) {
    return T.H.useSyncExternalStore(
      j,
      K,
      ae
    );
  }, je.useTransition = function() {
    return T.H.useTransition();
  }, je.version = "19.1.1", je;
}
var ov;
function $d() {
  return ov || (ov = 1, Xf.exports = p_()), Xf.exports;
}
var ee = $d();
const pu = /* @__PURE__ */ n0(ee);
var $f = { exports: {} }, Bs = {}, Qf = { exports: {} }, Kf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function m_() {
  return uv || (uv = 1, (function(t) {
    function r(U, te) {
      var ue = U.length;
      U.push(te);
      e: for (; 0 < ue; ) {
        var Le = ue - 1 >>> 1, j = U[Le];
        if (0 < o(j, te))
          U[Le] = te, U[ue] = j, ue = Le;
        else break e;
      }
    }
    function i(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var te = U[0], ue = U.pop();
      if (ue !== te) {
        U[0] = ue;
        e: for (var Le = 0, j = U.length, K = j >>> 1; Le < K; ) {
          var ae = 2 * (Le + 1) - 1, se = U[ae], le = ae + 1, Ie = U[le];
          if (0 > o(se, ue))
            le < j && 0 > o(Ie, se) ? (U[Le] = Ie, U[le] = ue, Le = le) : (U[Le] = se, U[ae] = ue, Le = ae);
          else if (le < j && 0 > o(Ie, ue))
            U[Le] = Ie, U[le] = ue, Le = le;
          else break e;
        }
      }
      return te;
    }
    function o(U, te) {
      var ue = U.sortIndex - te.sortIndex;
      return ue !== 0 ? ue : U.id - te.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var d = Date, p = d.now();
      t.unstable_now = function() {
        return d.now() - p;
      };
    }
    var h = [], g = [], y = 1, _ = null, b = 3, v = !1, f = !1, S = !1, E = !1, O = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function x(U) {
      for (var te = i(g); te !== null; ) {
        if (te.callback === null) s(g);
        else if (te.startTime <= U)
          s(g), te.sortIndex = te.expirationTime, r(h, te);
        else break;
        te = i(g);
      }
    }
    function T(U) {
      if (S = !1, x(U), !f)
        if (i(h) !== null)
          f = !0, M || (M = !0, $());
        else {
          var te = i(g);
          te !== null && me(T, te.startTime - U);
        }
    }
    var M = !1, k = -1, q = 5, G = -1;
    function B() {
      return E ? !0 : !(t.unstable_now() - G < q);
    }
    function V() {
      if (E = !1, M) {
        var U = t.unstable_now();
        G = U;
        var te = !0;
        try {
          e: {
            f = !1, S && (S = !1, w(k), k = -1), v = !0;
            var ue = b;
            try {
              t: {
                for (x(U), _ = i(h); _ !== null && !(_.expirationTime > U && B()); ) {
                  var Le = _.callback;
                  if (typeof Le == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var j = Le(
                      _.expirationTime <= U
                    );
                    if (U = t.unstable_now(), typeof j == "function") {
                      _.callback = j, x(U), te = !0;
                      break t;
                    }
                    _ === i(h) && s(h), x(U);
                  } else s(h);
                  _ = i(h);
                }
                if (_ !== null) te = !0;
                else {
                  var K = i(g);
                  K !== null && me(
                    T,
                    K.startTime - U
                  ), te = !1;
                }
              }
              break e;
            } finally {
              _ = null, b = ue, v = !1;
            }
            te = void 0;
          }
        } finally {
          te ? $() : M = !1;
        }
      }
    }
    var $;
    if (typeof D == "function")
      $ = function() {
        D(V);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), fe = oe.port2;
      oe.port1.onmessage = V, $ = function() {
        fe.postMessage(null);
      };
    } else
      $ = function() {
        O(V, 0);
      };
    function me(U, te) {
      k = O(function() {
        U(t.unstable_now());
      }, te);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, t.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < U ? Math.floor(1e3 / U) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(U) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = b;
      }
      var ue = b;
      b = te;
      try {
        return U();
      } finally {
        b = ue;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
    }, t.unstable_runWithPriority = function(U, te) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var ue = b;
      b = U;
      try {
        return te();
      } finally {
        b = ue;
      }
    }, t.unstable_scheduleCallback = function(U, te, ue) {
      var Le = t.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? Le + ue : Le) : ue = Le, U) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = ue + j, U = {
        id: y++,
        callback: te,
        priorityLevel: U,
        startTime: ue,
        expirationTime: j,
        sortIndex: -1
      }, ue > Le ? (U.sortIndex = ue, r(g, U), i(h) === null && U === i(g) && (S ? (w(k), k = -1) : S = !0, me(T, ue - Le))) : (U.sortIndex = j, r(h, U), f || v || (f = !0, M || (M = !0, $()))), U;
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(U) {
      var te = b;
      return function() {
        var ue = b;
        b = te;
        try {
          return U.apply(this, arguments);
        } finally {
          b = ue;
        }
      };
    };
  })(Kf)), Kf;
}
var cv;
function g_() {
  return cv || (cv = 1, Qf.exports = m_()), Qf.exports;
}
var Jf = { exports: {} }, Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fv;
function v_() {
  if (fv) return Bt;
  fv = 1;
  var t = $d();
  function r(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + h + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var s = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function u(h, g, y) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: _ == null ? null : "" + _,
      children: h,
      containerInfo: g,
      implementation: y
    };
  }
  var d = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, g) {
    if (h === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Bt.createPortal = function(h, g) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(h, g, null, y);
  }, Bt.flushSync = function(h) {
    var g = d.T, y = s.p;
    try {
      if (d.T = null, s.p = 2, h) return h();
    } finally {
      d.T = g, s.p = y, s.d.f();
    }
  }, Bt.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(h, g));
  }, Bt.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Bt.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var y = g.as, _ = p(y, g.crossOrigin), b = typeof g.integrity == "string" ? g.integrity : void 0, v = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      y === "style" ? s.d.S(
        h,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: _,
          integrity: b,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: b,
        fetchPriority: v,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Bt.preinitModule = function(h, g) {
    if (typeof h == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var y = p(
            g.as,
            g.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(h);
  }, Bt.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var y = g.as, _ = p(y, g.crossOrigin);
      s.d.L(h, y, {
        crossOrigin: _,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Bt.preloadModule = function(h, g) {
    if (typeof h == "string")
      if (g) {
        var y = p(g.as, g.crossOrigin);
        s.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(h);
  }, Bt.requestFormReset = function(h) {
    s.d.r(h);
  }, Bt.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, Bt.useFormState = function(h, g, y) {
    return d.H.useFormState(h, g, y);
  }, Bt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, Bt.version = "19.1.1", Bt;
}
var dv;
function r0() {
  if (dv) return Jf.exports;
  dv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Jf.exports = v_(), Jf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function y_() {
  if (hv) return Bs;
  hv = 1;
  var t = g_(), r = $d(), i = r0();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var n = e, a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (a = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var a = e, l = n; ; ) {
      var c = a.return;
      if (c === null) break;
      var m = c.alternate;
      if (m === null) {
        if (l = c.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (c.child === m.child) {
        for (m = c.child; m; ) {
          if (m === a) return p(c), e;
          if (m === l) return p(c), n;
          m = m.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) a = c, l = m;
      else {
        for (var C = !1, N = c.child; N; ) {
          if (N === a) {
            C = !0, a = c, l = m;
            break;
          }
          if (N === l) {
            C = !0, l = c, a = m;
            break;
          }
          N = N.sibling;
        }
        if (!C) {
          for (N = m.child; N; ) {
            if (N === a) {
              C = !0, a = m, l = c;
              break;
            }
            if (N === l) {
              C = !0, l = m, a = c;
              break;
            }
            N = N.sibling;
          }
          if (!C) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : n;
  }
  function g(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = g(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), D = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), V = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case f:
        return "Fragment";
      case E:
        return "Profiler";
      case S:
        return "StrictMode";
      case T:
        return "Suspense";
      case M:
        return "SuspenseList";
      case G:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case x:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : fe(e.type) || "Memo";
        case q:
          n = e._payload, e = e._init;
          try {
            return fe(e(n));
          } catch {
          }
      }
    return null;
  }
  var me = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Le = [], j = -1;
  function K(e) {
    return { current: e };
  }
  function ae(e) {
    0 > j || (e.current = Le[j], Le[j] = null, j--);
  }
  function se(e, n) {
    j++, Le[j] = e.current, e.current = n;
  }
  var le = K(null), Ie = K(null), Y = K(null), ge = K(null);
  function ye(e, n) {
    switch (se(Y, n), se(Ie, e), se(le, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Og(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Og(n), e = Ng(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ae(le), se(le, e);
  }
  function Ve() {
    ae(le), ae(Ie), ae(Y);
  }
  function at(e) {
    e.memoizedState !== null && se(ge, e);
    var n = le.current, a = Ng(n, e.type);
    n !== a && (se(Ie, e), se(le, a));
  }
  function ze(e) {
    Ie.current === e && (ae(le), ae(Ie)), ge.current === e && (ae(ge), Ms._currentValue = ue);
  }
  var P = Object.prototype.hasOwnProperty, re = t.unstable_scheduleCallback, ne = t.unstable_cancelCallback, be = t.unstable_shouldYield, Ce = t.unstable_requestPaint, ve = t.unstable_now, Me = t.unstable_getCurrentPriorityLevel, Xe = t.unstable_ImmediatePriority, de = t.unstable_UserBlockingPriority, he = t.unstable_NormalPriority, De = t.unstable_LowPriority, Re = t.unstable_IdlePriority, it = t.log, Ar = t.unstable_setDisableYieldValue, tr = null, mt = null;
  function Fn(e) {
    if (typeof it == "function" && Ar(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(tr, e);
      } catch {
      }
  }
  var qt = Math.clz32 ? Math.clz32 : sa, yn = Math.log, ia = Math.LN2;
  function sa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yn(e) / ia | 0) | 0;
  }
  var nr = 256, Zn = 4194304;
  function bn(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ft(e, n, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, m = e.suspendedLanes, C = e.pingedLanes;
    e = e.warmLanes;
    var N = l & 134217727;
    return N !== 0 ? (l = N & ~m, l !== 0 ? c = bn(l) : (C &= N, C !== 0 ? c = bn(C) : a || (a = N & ~e, a !== 0 && (c = bn(a))))) : (N = l & ~m, N !== 0 ? c = bn(N) : C !== 0 ? c = bn(C) : a || (a = l & ~e, a !== 0 && (c = bn(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & m) === 0 && (m = c & -c, a = n & -n, m >= a || m === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function Yt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function dl(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ba() {
    var e = nr;
    return nr <<= 1, (nr & 4194048) === 0 && (nr = 256), e;
  }
  function dh() {
    var e = Zn;
    return Zn <<= 1, (Zn & 62914560) === 0 && (Zn = 4194304), e;
  }
  function ju(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Hi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function R1(e, n, a, l, c, m) {
    var C = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var N = e.entanglements, R = e.expirationTimes, H = e.hiddenUpdates;
    for (a = C & ~a; 0 < a; ) {
      var X = 31 - qt(a), J = 1 << X;
      N[X] = 0, R[X] = -1;
      var F = H[X];
      if (F !== null)
        for (H[X] = null, X = 0; X < F.length; X++) {
          var Z = F[X];
          Z !== null && (Z.lane &= -536870913);
        }
      a &= ~J;
    }
    l !== 0 && hh(e, l, 0), m !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(C & ~n));
  }
  function hh(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - qt(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function ph(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var l = 31 - qt(a), c = 1 << l;
      c & n | e[l] & n && (e[l] |= n), a &= ~c;
    }
  }
  function zu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Lu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function mh() {
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Xg(e.type));
  }
  function j1(e, n) {
    var a = te.p;
    try {
      return te.p = e, n();
    } finally {
      te.p = a;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + Tr, Xt = "__reactProps$" + Tr, Ua = "__reactContainer$" + Tr, Pu = "__reactEvents$" + Tr, z1 = "__reactListeners$" + Tr, L1 = "__reactHandles$" + Tr, gh = "__reactResources$" + Tr, qi = "__reactMarker$" + Tr;
  function Iu(e) {
    delete e[Pt], delete e[Xt], delete e[Pu], delete e[z1], delete e[L1];
  }
  function Ha(e) {
    var n = e[Pt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ua] || a[Pt]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = Rg(e); e !== null; ) {
            if (a = e[Pt]) return a;
            e = Rg(e);
          }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function qa(e) {
    if (e = e[Pt] || e[Ua]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Fi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Fa(e) {
    var n = e[gh];
    return n || (n = e[gh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ot(e) {
    e[qi] = !0;
  }
  var vh = /* @__PURE__ */ new Set(), yh = {};
  function la(e, n) {
    Za(e, n), Za(e + "Capture", n);
  }
  function Za(e, n) {
    for (yh[e] = n, e = 0; e < n.length; e++)
      vh.add(n[e]);
  }
  var P1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), bh = {}, _h = {};
  function I1(e) {
    return P.call(_h, e) ? !0 : P.call(bh, e) ? !1 : P1.test(e) ? _h[e] = !0 : (bh[e] = !0, !1);
  }
  function hl(e, n, a) {
    if (I1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function pl(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function rr(e, n, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + l);
    }
  }
  var Bu, Sh;
  function Ga(e) {
    if (Bu === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        Bu = n && n[1] || "", Sh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Bu + e + Sh;
  }
  var Uu = !1;
  function Hu(e, n) {
    if (!e || Uu) return "";
    Uu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (Z) {
                  var F = Z;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch (Z) {
                  F = Z;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                F = Z;
              }
              (J = e()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && F && typeof Z.stack == "string")
              return [Z.stack, F.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var m = l.DetermineComponentFrameRoot(), C = m[0], N = m[1];
      if (C && N) {
        var R = C.split(`
`), H = N.split(`
`);
        for (c = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; c < H.length && !H[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (l === R.length || c === H.length)
          for (l = R.length - 1, c = H.length - 1; 1 <= l && 0 <= c && R[l] !== H[c]; )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (R[l] !== H[c]) {
            if (l !== 1 || c !== 1)
              do
                if (l--, c--, 0 > c || R[l] !== H[c]) {
                  var X = `
` + R[l].replace(" at new ", " at ");
                  return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      Uu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ga(a) : "";
  }
  function B1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(e.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return Hu(e.type, !1);
      case 11:
        return Hu(e.type.render, !1);
      case 1:
        return Hu(e.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function xh(e) {
    try {
      var n = "";
      do
        n += B1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function _n(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Eh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function U1(e) {
    var n = Eh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), l = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, m = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(C) {
          l = "" + C, m.call(this, C);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(C) {
          l = "" + C;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function ml(e) {
    e._valueTracker || (e._valueTracker = U1(e));
  }
  function Ch(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), l = "";
    return e && (l = Eh(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (n.setValue(e), !0) : !1;
  }
  function gl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var H1 = /[\n"\\]/g;
  function Sn(e) {
    return e.replace(
      H1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function qu(e, n, a, l, c, m, C, N) {
    e.name = "", C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? e.type = C : e.removeAttribute("type"), n != null ? C === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + _n(n)) : e.value !== "" + _n(n) && (e.value = "" + _n(n)) : C !== "submit" && C !== "reset" || e.removeAttribute("value"), n != null ? Fu(e, C, _n(n)) : a != null ? Fu(e, C, _n(a)) : l != null && e.removeAttribute("value"), c == null && m != null && (e.defaultChecked = !!m), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.name = "" + _n(N) : e.removeAttribute("name");
  }
  function wh(e, n, a, l, c, m, C, N) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.type = m), n != null || a != null) {
      if (!(m !== "submit" && m !== "reset" || n != null))
        return;
      a = a != null ? "" + _n(a) : "", n = n != null ? "" + _n(n) : a, N || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = N ? e.checked : !!l, e.defaultChecked = !!l, C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" && (e.name = C);
  }
  function Fu(e, n, a) {
    n === "number" && gl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Va(e, n, a, l) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < a.length; c++)
        n["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = n.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + _n(a), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ah(e, n, a) {
    if (n != null && (n = "" + _n(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + _n(a) : "";
  }
  function Th(e, n, a, l) {
    if (n == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (me(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), n = a;
    }
    a = _n(n), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
  }
  function Ya(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var q1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Oh(e, n, a) {
    var l = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, a) : typeof a != "number" || a === 0 || q1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function Nh(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in n)
        l = n[c], n.hasOwnProperty(c) && a[c] !== l && Oh(e, c, l);
    } else
      for (var m in n)
        n.hasOwnProperty(m) && Oh(e, m, n[m]);
  }
  function Zu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var F1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Z1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vl(e) {
    return Z1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Gu = null;
  function Vu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, $a = null;
  function Dh(e) {
    var n = qa(e);
    if (n && (e = n.stateNode)) {
      var a = e[Xt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (qu(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), n = a.name, a.type === "radio" && n != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Sn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var l = a[n];
              if (l !== e && l.form === e.form) {
                var c = l[Xt] || null;
                if (!c) throw Error(s(90));
                qu(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (n = 0; n < a.length; n++)
              l = a[n], l.form === e.form && Ch(l);
          }
          break e;
        case "textarea":
          Ah(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Va(e, !!a.multiple, n, !1);
      }
    }
  }
  var Yu = !1;
  function Mh(e, n, a) {
    if (Yu) return e(n, a);
    Yu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Yu = !1, (Xa !== null || $a !== null) && (no(), Xa && (n = Xa, e = $a, $a = Xa = null, Dh(n), e)))
        for (n = 0; n < e.length; n++) Dh(e[n]);
    }
  }
  function Zi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Xt] || null;
    if (l === null) return null;
    a = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        s(231, n, typeof a)
      );
    return a;
  }
  var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (ar)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function() {
          Xu = !0;
        }
      }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      Xu = !1;
    }
  var Or = null, $u = null, yl = null;
  function kh() {
    if (yl) return yl;
    var e, n = $u, a = n.length, l, c = "value" in Or ? Or.value : Or.textContent, m = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var C = a - e;
    for (l = 1; l <= C && n[a - l] === c[m - l]; l++) ;
    return yl = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function bl(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _l() {
    return !0;
  }
  function Rh() {
    return !1;
  }
  function $t(e) {
    function n(a, l, c, m, C) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in e)
        e.hasOwnProperty(N) && (a = e[N], this[N] = a ? a(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? _l : Rh, this.isPropagationStopped = Rh, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _l);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _l);
      },
      persist: function() {
      },
      isPersistent: _l
    }), n;
  }
  var oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Sl = $t(oa), Vi = y({}, oa, { view: 0, detail: 0 }), G1 = $t(Vi), Qu, Ku, Yi, xl = y({}, Vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Wu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? (Qu = e.screenX - Yi.screenX, Ku = e.screenY - Yi.screenY) : Ku = Qu = 0, Yi = e), Qu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ku;
    }
  }), jh = $t(xl), V1 = y({}, xl, { dataTransfer: 0 }), Y1 = $t(V1), X1 = y({}, Vi, { relatedTarget: 0 }), Ju = $t(X1), $1 = y({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Q1 = $t($1), K1 = y({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), J1 = $t(K1), W1 = y({}, oa, { data: 0 }), zh = $t(W1), eb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, tb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, nb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function rb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = nb[e]) ? !!n[e] : !1;
  }
  function Wu() {
    return rb;
  }
  var ab = y({}, Vi, {
    key: function(e) {
      if (e.key) {
        var n = eb[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = bl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wu,
    charCode: function(e) {
      return e.type === "keypress" ? bl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? bl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ib = $t(ab), sb = y({}, xl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Lh = $t(sb), lb = y({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wu
  }), ob = $t(lb), ub = y({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), cb = $t(ub), fb = y({}, xl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), db = $t(fb), hb = y({}, oa, {
    newState: 0,
    oldState: 0
  }), pb = $t(hb), mb = [9, 13, 27, 32], ec = ar && "CompositionEvent" in window, Xi = null;
  ar && "documentMode" in document && (Xi = document.documentMode);
  var gb = ar && "TextEvent" in window && !Xi, Ph = ar && (!ec || Xi && 8 < Xi && 11 >= Xi), Ih = " ", Bh = !1;
  function Uh(e, n) {
    switch (e) {
      case "keyup":
        return mb.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Hh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qa = !1;
  function vb(e, n) {
    switch (e) {
      case "compositionend":
        return Hh(n);
      case "keypress":
        return n.which !== 32 ? null : (Bh = !0, Ih);
      case "textInput":
        return e = n.data, e === Ih && Bh ? null : e;
      default:
        return null;
    }
  }
  function yb(e, n) {
    if (Qa)
      return e === "compositionend" || !ec && Uh(e, n) ? (e = kh(), yl = $u = Or = null, Qa = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Ph && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var bb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function qh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!bb[e.type] : n === "textarea";
  }
  function Fh(e, n, a, l) {
    Xa ? $a ? $a.push(l) : $a = [l] : Xa = l, n = oo(n, "onChange"), 0 < n.length && (a = new Sl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: n }));
  }
  var $i = null, Qi = null;
  function _b(e) {
    Eg(e, 0);
  }
  function El(e) {
    var n = Fi(e);
    if (Ch(n)) return e;
  }
  function Zh(e, n) {
    if (e === "change") return n;
  }
  var Gh = !1;
  if (ar) {
    var tc;
    if (ar) {
      var nc = "oninput" in document;
      if (!nc) {
        var Vh = document.createElement("div");
        Vh.setAttribute("oninput", "return;"), nc = typeof Vh.oninput == "function";
      }
      tc = nc;
    } else tc = !1;
    Gh = tc && (!document.documentMode || 9 < document.documentMode);
  }
  function Yh() {
    $i && ($i.detachEvent("onpropertychange", Xh), Qi = $i = null);
  }
  function Xh(e) {
    if (e.propertyName === "value" && El(Qi)) {
      var n = [];
      Fh(
        n,
        Qi,
        e,
        Vu(e)
      ), Mh(_b, n);
    }
  }
  function Sb(e, n, a) {
    e === "focusin" ? (Yh(), $i = n, Qi = a, $i.attachEvent("onpropertychange", Xh)) : e === "focusout" && Yh();
  }
  function xb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return El(Qi);
  }
  function Eb(e, n) {
    if (e === "click") return El(n);
  }
  function Cb(e, n) {
    if (e === "input" || e === "change")
      return El(n);
  }
  function wb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var sn = typeof Object.is == "function" ? Object.is : wb;
  function Ki(e, n) {
    if (sn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!P.call(n, c) || !sn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function $h(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Qh(e, n) {
    var a = $h(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= n && l >= n)
          return { node: a, offset: n - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = $h(a);
    }
  }
  function Kh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Kh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Jh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = gl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = gl(e.document);
    }
    return n;
  }
  function rc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Ab = ar && "documentMode" in document && 11 >= document.documentMode, Ka = null, ac = null, Ji = null, ic = !1;
  function Wh(e, n, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ic || Ka == null || Ka !== gl(l) || (l = Ka, "selectionStart" in l && rc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ji && Ki(Ji, l) || (Ji = l, l = oo(ac, "onSelect"), 0 < l.length && (n = new Sl(
      "onSelect",
      "select",
      null,
      n,
      a
    ), e.push({ event: n, listeners: l }), n.target = Ka)));
  }
  function ua(e, n) {
    var a = {};
    return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
  }
  var Ja = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, sc = {}, ep = {};
  ar && (ep = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function ca(e) {
    if (sc[e]) return sc[e];
    if (!Ja[e]) return e;
    var n = Ja[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in ep)
        return sc[e] = n[a];
    return e;
  }
  var tp = ca("animationend"), np = ca("animationiteration"), rp = ca("animationstart"), Tb = ca("transitionrun"), Ob = ca("transitionstart"), Nb = ca("transitioncancel"), ap = ca("transitionend"), ip = /* @__PURE__ */ new Map(), lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lc.push("scrollEnd");
  function jn(e, n) {
    ip.set(e, n), la(n, [e]);
  }
  var sp = /* @__PURE__ */ new WeakMap();
  function xn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = sp.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: xh(n)
      }, sp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: xh(n)
    };
  }
  var En = [], Wa = 0, oc = 0;
  function Cl() {
    for (var e = Wa, n = oc = Wa = 0; n < e; ) {
      var a = En[n];
      En[n++] = null;
      var l = En[n];
      En[n++] = null;
      var c = En[n];
      En[n++] = null;
      var m = En[n];
      if (En[n++] = null, l !== null && c !== null) {
        var C = l.pending;
        C === null ? c.next = c : (c.next = C.next, C.next = c), l.pending = c;
      }
      m !== 0 && lp(a, c, m);
    }
  }
  function wl(e, n, a, l) {
    En[Wa++] = e, En[Wa++] = n, En[Wa++] = a, En[Wa++] = l, oc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function uc(e, n, a, l) {
    return wl(e, n, a, l), Al(e);
  }
  function ei(e, n) {
    return wl(e, null, null, n), Al(e);
  }
  function lp(e, n, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var c = !1, m = e.return; m !== null; )
      m.childLanes |= a, l = m.alternate, l !== null && (l.childLanes |= a), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (c = !0)), e = m, m = m.return;
    return e.tag === 3 ? (m = e.stateNode, c && n !== null && (c = 31 - qt(a), e = m.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = a | 536870912), m) : null;
  }
  function Al(e) {
    if (50 < Es)
      throw Es = 0, gf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ti = {};
  function Db(e, n, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, n, a, l) {
    return new Db(e, n, a, l);
  }
  function cc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ir(e, n) {
    var a = e.alternate;
    return a === null ? (a = ln(
      e.tag,
      n,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function op(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Tl(e, n, a, l, c, m) {
    var C = 0;
    if (l = e, typeof e == "function") cc(e) && (C = 1);
    else if (typeof e == "string")
      C = k2(
        e,
        a,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case G:
          return e = ln(31, a, n, c), e.elementType = G, e.lanes = m, e;
        case f:
          return fa(a.children, c, m, n);
        case S:
          C = 8, c |= 24;
          break;
        case E:
          return e = ln(12, a, n, c | 2), e.elementType = E, e.lanes = m, e;
        case T:
          return e = ln(13, a, n, c), e.elementType = T, e.lanes = m, e;
        case M:
          return e = ln(19, a, n, c), e.elementType = M, e.lanes = m, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case D:
                C = 10;
                break e;
              case w:
                C = 9;
                break e;
              case x:
                C = 11;
                break e;
              case k:
                C = 14;
                break e;
              case q:
                C = 16, l = null;
                break e;
            }
          C = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = ln(C, a, n, c), n.elementType = e, n.type = l, n.lanes = m, n;
  }
  function fa(e, n, a, l) {
    return e = ln(7, e, l, n), e.lanes = a, e;
  }
  function fc(e, n, a) {
    return e = ln(6, e, null, n), e.lanes = a, e;
  }
  function dc(e, n, a) {
    return n = ln(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = a, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var ni = [], ri = 0, Ol = null, Nl = 0, Cn = [], wn = 0, da = null, sr = 1, lr = "";
  function ha(e, n) {
    ni[ri++] = Nl, ni[ri++] = Ol, Ol = e, Nl = n;
  }
  function up(e, n, a) {
    Cn[wn++] = sr, Cn[wn++] = lr, Cn[wn++] = da, da = e;
    var l = sr;
    e = lr;
    var c = 32 - qt(l) - 1;
    l &= ~(1 << c), a += 1;
    var m = 32 - qt(n) + c;
    if (30 < m) {
      var C = c - c % 5;
      m = (l & (1 << C) - 1).toString(32), l >>= C, c -= C, sr = 1 << 32 - qt(n) + c | a << c | l, lr = m + e;
    } else
      sr = 1 << m | a << c | l, lr = e;
  }
  function hc(e) {
    e.return !== null && (ha(e, 1), up(e, 1, 0));
  }
  function pc(e) {
    for (; e === Ol; )
      Ol = ni[--ri], ni[ri] = null, Nl = ni[--ri], ni[ri] = null;
    for (; e === da; )
      da = Cn[--wn], Cn[wn] = null, lr = Cn[--wn], Cn[wn] = null, sr = Cn[--wn], Cn[wn] = null;
  }
  var Zt = null, dt = null, Ye = !1, pa = null, Gn = !1, mc = Error(s(519));
  function ma(e) {
    var n = Error(s(418, ""));
    throw ts(xn(n, e)), mc;
  }
  function cp(e) {
    var n = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (n[Pt] = e, n[Xt] = l, a) {
      case "dialog":
        He("cancel", n), He("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        He("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ws.length; a++)
          He(ws[a], n);
        break;
      case "source":
        He("error", n);
        break;
      case "img":
      case "image":
      case "link":
        He("error", n), He("load", n);
        break;
      case "details":
        He("toggle", n);
        break;
      case "input":
        He("invalid", n), wh(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), ml(n);
        break;
      case "select":
        He("invalid", n);
        break;
      case "textarea":
        He("invalid", n), Th(n, l.value, l.defaultValue, l.children), ml(n);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Tg(n.textContent, a) ? (l.popover != null && (He("beforetoggle", n), He("toggle", n)), l.onScroll != null && He("scroll", n), l.onScrollEnd != null && He("scrollend", n), l.onClick != null && (n.onclick = uo), n = !0) : n = !1, n || ma(e);
  }
  function fp(e) {
    for (Zt = e.return; Zt; )
      switch (Zt.tag) {
        case 5:
        case 13:
          Gn = !1;
          return;
        case 27:
        case 3:
          Gn = !0;
          return;
        default:
          Zt = Zt.return;
      }
  }
  function Wi(e) {
    if (e !== Zt) return !1;
    if (!Ye) return fp(e), Ye = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || kf(e.type, e.memoizedProps)), a = !a), a && dt && ma(e), fp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                dt = Ln(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        dt = null;
      }
    } else
      n === 27 ? (n = dt, Zr(e.type) ? (e = Lf, Lf = null, dt = e) : dt = n) : dt = Zt ? Ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    dt = Zt = null, Ye = !1;
  }
  function dp() {
    var e = pa;
    return e !== null && (Jt === null ? Jt = e : Jt.push.apply(
      Jt,
      e
    ), pa = null), e;
  }
  function ts(e) {
    pa === null ? pa = [e] : pa.push(e);
  }
  var gc = K(null), ga = null, or = null;
  function Nr(e, n, a) {
    se(gc, n._currentValue), n._currentValue = a;
  }
  function ur(e) {
    e._currentValue = gc.current, ae(gc);
  }
  function vc(e, n, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function yc(e, n, a, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var m = c.dependencies;
      if (m !== null) {
        var C = c.child;
        m = m.firstContext;
        e: for (; m !== null; ) {
          var N = m;
          m = c;
          for (var R = 0; R < n.length; R++)
            if (N.context === n[R]) {
              m.lanes |= a, N = m.alternate, N !== null && (N.lanes |= a), vc(
                m.return,
                a,
                e
              ), l || (C = null);
              break e;
            }
          m = N.next;
        }
      } else if (c.tag === 18) {
        if (C = c.return, C === null) throw Error(s(341));
        C.lanes |= a, m = C.alternate, m !== null && (m.lanes |= a), vc(C, a, e), C = null;
      } else C = c.child;
      if (C !== null) C.return = c;
      else
        for (C = c; C !== null; ) {
          if (C === e) {
            C = null;
            break;
          }
          if (c = C.sibling, c !== null) {
            c.return = C.return, C = c;
            break;
          }
          C = C.return;
        }
      c = C;
    }
  }
  function ns(e, n, a, l) {
    e = null;
    for (var c = n, m = !1; c !== null; ) {
      if (!m) {
        if ((c.flags & 524288) !== 0) m = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var C = c.alternate;
        if (C === null) throw Error(s(387));
        if (C = C.memoizedProps, C !== null) {
          var N = c.type;
          sn(c.pendingProps.value, C.value) || (e !== null ? e.push(N) : e = [N]);
        }
      } else if (c === ge.current) {
        if (C = c.alternate, C === null) throw Error(s(387));
        C.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ms) : e = [Ms]);
      }
      c = c.return;
    }
    e !== null && yc(
      n,
      e,
      a,
      l
    ), n.flags |= 262144;
  }
  function Dl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!sn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function va(e) {
    ga = e, or = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function It(e) {
    return hp(ga, e);
  }
  function Ml(e, n) {
    return ga === null && va(e), hp(e, n);
  }
  function hp(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, or === null) {
      if (e === null) throw Error(s(308));
      or = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else or = or.next = n;
    return a;
  }
  var Mb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, kb = t.unstable_scheduleCallback, Rb = t.unstable_NormalPriority, Ct = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function bc() {
    return {
      controller: new Mb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rs(e) {
    e.refCount--, e.refCount === 0 && kb(Rb, function() {
      e.controller.abort();
    });
  }
  var as = null, _c = 0, ai = 0, ii = null;
  function jb(e, n) {
    if (as === null) {
      var a = as = [];
      _c = 0, ai = Ef(), ii = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return _c++, n.then(pp, pp), n;
  }
  function pp() {
    if (--_c === 0 && as !== null) {
      ii !== null && (ii.status = "fulfilled");
      var e = as;
      as = null, ai = 0, ii = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function zb(e, n) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var c = 0; c < a.length; c++) (0, a[c])(n);
      },
      function(c) {
        for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++)
          (0, a[c])(void 0);
      }
    ), l;
  }
  var mp = U.S;
  U.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && jb(e, n), mp !== null && mp(e, n);
  };
  var ya = K(null);
  function Sc() {
    var e = ya.current;
    return e !== null ? e : nt.pooledCache;
  }
  function kl(e, n) {
    n === null ? se(ya, ya.current) : se(ya, n.pool);
  }
  function gp() {
    var e = Sc();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var is = Error(s(460)), vp = Error(s(474)), Rl = Error(s(542)), xc = { then: function() {
  } };
  function yp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function jl() {
  }
  function bp(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(jl, jl), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Sp(e), e;
      default:
        if (typeof n.status == "string") n.then(jl, jl);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = n, e.status = "pending", e.then(
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Sp(e), e;
        }
        throw ss = n, is;
    }
  }
  var ss = null;
  function _p() {
    if (ss === null) throw Error(s(459));
    var e = ss;
    return ss = null, e;
  }
  function Sp(e) {
    if (e === is || e === Rl)
      throw Error(s(483));
  }
  var Dr = !1;
  function Ec(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Cc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Mr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function kr(e, n, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, ($e & 2) !== 0) {
      var c = l.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), l.pending = n, n = Al(e), lp(e, null, a), n;
    }
    return wl(e, l, n, a), Al(e);
  }
  function ls(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, a |= l, n.lanes = a, ph(e, a);
    }
  }
  function wc(e, n) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var c = null, m = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var C = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          m === null ? c = m = C : m = m.next = C, a = a.next;
        } while (a !== null);
        m === null ? c = m = n : m = m.next = n;
      } else c = m = n;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: m,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
  }
  var Ac = !1;
  function os() {
    if (Ac) {
      var e = ii;
      if (e !== null) throw e;
    }
  }
  function us(e, n, a, l) {
    Ac = !1;
    var c = e.updateQueue;
    Dr = !1;
    var m = c.firstBaseUpdate, C = c.lastBaseUpdate, N = c.shared.pending;
    if (N !== null) {
      c.shared.pending = null;
      var R = N, H = R.next;
      R.next = null, C === null ? m = H : C.next = H, C = R;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, N = X.lastBaseUpdate, N !== C && (N === null ? X.firstBaseUpdate = H : N.next = H, X.lastBaseUpdate = R));
    }
    if (m !== null) {
      var J = c.baseState;
      C = 0, X = H = R = null, N = m;
      do {
        var F = N.lane & -536870913, Z = F !== N.lane;
        if (Z ? (Ze & F) === F : (l & F) === F) {
          F !== 0 && F === ai && (Ac = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: null,
            next: null
          });
          e: {
            var we = e, xe = N;
            F = n;
            var We = a;
            switch (xe.tag) {
              case 1:
                if (we = xe.payload, typeof we == "function") {
                  J = we.call(We, J, F);
                  break e;
                }
                J = we;
                break e;
              case 3:
                we.flags = we.flags & -65537 | 128;
              case 0:
                if (we = xe.payload, F = typeof we == "function" ? we.call(We, J, F) : we, F == null) break e;
                J = y({}, J, F);
                break e;
              case 2:
                Dr = !0;
            }
          }
          F = N.callback, F !== null && (e.flags |= 64, Z && (e.flags |= 8192), Z = c.callbacks, Z === null ? c.callbacks = [F] : Z.push(F));
        } else
          Z = {
            lane: F,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          }, X === null ? (H = X = Z, R = J) : X = X.next = Z, C |= F;
        if (N = N.next, N === null) {
          if (N = c.shared.pending, N === null)
            break;
          Z = N, N = Z.next, Z.next = null, c.lastBaseUpdate = Z, c.shared.pending = null;
        }
      } while (!0);
      X === null && (R = J), c.baseState = R, c.firstBaseUpdate = H, c.lastBaseUpdate = X, m === null && (c.shared.lanes = 0), Ur |= C, e.lanes = C, e.memoizedState = J;
    }
  }
  function xp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function Ep(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        xp(a[e], n);
  }
  var si = K(null), zl = K(0);
  function Cp(e, n) {
    e = gr, se(zl, e), se(si, n), gr = e | n.baseLanes;
  }
  function Tc() {
    se(zl, gr), se(si, si.current);
  }
  function Oc() {
    gr = zl.current, ae(si), ae(zl);
  }
  var Rr = 0, Pe = null, Ke = null, bt = null, Ll = !1, li = !1, ba = !1, Pl = 0, cs = 0, oi = null, Lb = 0;
  function gt() {
    throw Error(s(321));
  }
  function Nc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!sn(e[a], n[a])) return !1;
    return !0;
  }
  function Dc(e, n, a, l, c, m) {
    return Rr = m, Pe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, U.H = e === null || e.memoizedState === null ? lm : om, ba = !1, m = a(l, c), ba = !1, li && (m = Ap(
      n,
      a,
      l,
      c
    )), wp(e), m;
  }
  function wp(e) {
    U.H = Fl;
    var n = Ke !== null && Ke.next !== null;
    if (Rr = 0, bt = Ke = Pe = null, Ll = !1, cs = 0, oi = null, n) throw Error(s(300));
    e === null || Nt || (e = e.dependencies, e !== null && Dl(e) && (Nt = !0));
  }
  function Ap(e, n, a, l) {
    Pe = e;
    var c = 0;
    do {
      if (li && (oi = null), cs = 0, li = !1, 25 <= c) throw Error(s(301));
      if (c += 1, bt = Ke = null, e.updateQueue != null) {
        var m = e.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      U.H = Fb, m = n(a, l);
    } while (li);
    return m;
  }
  function Pb() {
    var e = U.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? fs(n) : n, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (Pe.flags |= 1024), n;
  }
  function Mc() {
    var e = Pl !== 0;
    return Pl = 0, e;
  }
  function kc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Rc(e) {
    if (Ll) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Ll = !1;
    }
    Rr = 0, bt = Ke = Pe = null, li = !1, cs = Pl = 0, oi = null;
  }
  function Qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bt === null ? Pe.memoizedState = bt = e : bt = bt.next = e, bt;
  }
  function _t() {
    if (Ke === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = bt === null ? Pe.memoizedState : bt.next;
    if (n !== null)
      bt = n, Ke = e;
    else {
      if (e === null)
        throw Pe.alternate === null ? Error(s(467)) : Error(s(310));
      Ke = e, e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }, bt === null ? Pe.memoizedState = bt = e : bt = bt.next = e;
    }
    return bt;
  }
  function jc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fs(e) {
    var n = cs;
    return cs += 1, oi === null && (oi = []), e = bp(oi, e, n), n = Pe, (bt === null ? n.memoizedState : bt.next) === null && (n = n.alternate, U.H = n === null || n.memoizedState === null ? lm : om), e;
  }
  function Il(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return fs(e);
      if (e.$$typeof === D) return It(e);
    }
    throw Error(s(438, String(e)));
  }
  function zc(e) {
    var n = null, a = Pe.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var l = Pe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = jc(), Pe.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), l = 0; l < e; l++)
        a[l] = B;
    return n.index++, a;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Bl(e) {
    var n = _t();
    return Lc(n, Ke, e);
  }
  function Lc(e, n, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var c = e.baseQueue, m = l.pending;
    if (m !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = m.next, m.next = C;
      }
      n.baseQueue = c = m, l.pending = null;
    }
    if (m = e.baseState, c === null) e.memoizedState = m;
    else {
      n = c.next;
      var N = C = null, R = null, H = n, X = !1;
      do {
        var J = H.lane & -536870913;
        if (J !== H.lane ? (Ze & J) === J : (Rr & J) === J) {
          var F = H.revertLane;
          if (F === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), J === ai && (X = !0);
          else if ((Rr & F) === F) {
            H = H.next, F === ai && (X = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, R === null ? (N = R = J, C = m) : R = R.next = J, Pe.lanes |= F, Ur |= F;
          J = H.action, ba && a(m, J), m = H.hasEagerState ? H.eagerState : a(m, J);
        } else
          F = {
            lane: J,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, R === null ? (N = R = F, C = m) : R = R.next = F, Pe.lanes |= J, Ur |= J;
        H = H.next;
      } while (H !== null && H !== n);
      if (R === null ? C = m : R.next = N, !sn(m, e.memoizedState) && (Nt = !0, X && (a = ii, a !== null)))
        throw a;
      e.memoizedState = m, e.baseState = C, e.baseQueue = R, l.lastRenderedState = m;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Pc(e) {
    var n = _t(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, m = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var C = c = c.next;
      do
        m = e(m, C.action), C = C.next;
      while (C !== c);
      sn(m, n.memoizedState) || (Nt = !0), n.memoizedState = m, n.baseQueue === null && (n.baseState = m), a.lastRenderedState = m;
    }
    return [m, l];
  }
  function Tp(e, n, a) {
    var l = Pe, c = _t(), m = Ye;
    if (m) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var C = !sn(
      (Ke || c).memoizedState,
      a
    );
    C && (c.memoizedState = a, Nt = !0), c = c.queue;
    var N = Dp.bind(null, l, c, e);
    if (ds(2048, 8, N, [e]), c.getSnapshot !== n || C || bt !== null && bt.memoizedState.tag & 1) {
      if (l.flags |= 2048, ui(
        9,
        Ul(),
        Np.bind(
          null,
          l,
          c,
          a,
          n
        ),
        null
      ), nt === null) throw Error(s(349));
      m || (Rr & 124) !== 0 || Op(l, n, a);
    }
    return a;
  }
  function Op(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = Pe.updateQueue, n === null ? (n = jc(), Pe.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function Np(e, n, a, l) {
    n.value = a, n.getSnapshot = l, Mp(n) && kp(e);
  }
  function Dp(e, n, a) {
    return a(function() {
      Mp(n) && kp(e);
    });
  }
  function Mp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !sn(e, a);
    } catch {
      return !0;
    }
  }
  function kp(e) {
    var n = ei(e, 2);
    n !== null && dn(n, e, 2);
  }
  function Ic(e) {
    var n = Qt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ba) {
        Fn(!0);
        try {
          a();
        } finally {
          Fn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e
    }, n;
  }
  function Rp(e, n, a, l) {
    return e.baseState = a, Lc(
      e,
      Ke,
      typeof l == "function" ? l : cr
    );
  }
  function Ib(e, n, a, l, c) {
    if (ql(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var m = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(C) {
          m.listeners.push(C);
        }
      };
      U.T !== null ? a(!0) : m.isTransition = !1, l(m), a = n.pending, a === null ? (m.next = n.pending = m, jp(n, m)) : (m.next = a.next, n.pending = a.next = m);
    }
  }
  function jp(e, n) {
    var a = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var m = U.T, C = {};
      U.T = C;
      try {
        var N = a(c, l), R = U.S;
        R !== null && R(C, N), zp(e, n, N);
      } catch (H) {
        Bc(e, n, H);
      } finally {
        U.T = m;
      }
    } else
      try {
        m = a(c, l), zp(e, n, m);
      } catch (H) {
        Bc(e, n, H);
      }
  }
  function zp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Lp(e, n, l);
      },
      function(l) {
        return Bc(e, n, l);
      }
    ) : Lp(e, n, a);
  }
  function Lp(e, n, a) {
    n.status = "fulfilled", n.value = a, Pp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, jp(e, a)));
  }
  function Bc(e, n, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = a, Pp(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Pp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Ip(e, n) {
    return n;
  }
  function Bp(e, n) {
    if (Ye) {
      var a = nt.formState;
      if (a !== null) {
        e: {
          var l = Pe;
          if (Ye) {
            if (dt) {
              t: {
                for (var c = dt, m = Gn; c.nodeType !== 8; ) {
                  if (!m) {
                    c = null;
                    break t;
                  }
                  if (c = Ln(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                m = c.data, c = m === "F!" || m === "F" ? c : null;
              }
              if (c) {
                dt = Ln(
                  c.nextSibling
                ), l = c.data === "F!";
                break e;
              }
            }
            ma(l);
          }
          l = !1;
        }
        l && (n = a[0]);
      }
    }
    return a = Qt(), a.memoizedState = a.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ip,
      lastRenderedState: n
    }, a.queue = l, a = am.bind(
      null,
      Pe,
      l
    ), l.dispatch = a, l = Ic(!1), m = Zc.bind(
      null,
      Pe,
      !1,
      l.queue
    ), l = Qt(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = Ib.bind(
      null,
      Pe,
      c,
      m,
      a
    ), c.dispatch = a, l.memoizedState = e, [n, a, !1];
  }
  function Up(e) {
    var n = _t();
    return Hp(n, Ke, e);
  }
  function Hp(e, n, a) {
    if (n = Lc(
      e,
      n,
      Ip
    )[0], e = Bl(cr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = fs(n);
      } catch (C) {
        throw C === is ? Rl : C;
      }
    else l = n;
    n = _t();
    var c = n.queue, m = c.dispatch;
    return a !== n.memoizedState && (Pe.flags |= 2048, ui(
      9,
      Ul(),
      Bb.bind(null, c, a),
      null
    )), [l, m, e];
  }
  function Bb(e, n) {
    e.action = n;
  }
  function qp(e) {
    var n = _t(), a = Ke;
    if (a !== null)
      return Hp(n, a, e);
    _t(), n = n.memoizedState, a = _t();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [n, l, !1];
  }
  function ui(e, n, a, l) {
    return e = { tag: e, create: a, deps: l, inst: n, next: null }, n = Pe.updateQueue, n === null && (n = jc(), Pe.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Ul() {
    return { destroy: void 0, resource: void 0 };
  }
  function Fp() {
    return _t().memoizedState;
  }
  function Hl(e, n, a, l) {
    var c = Qt();
    l = l === void 0 ? null : l, Pe.flags |= e, c.memoizedState = ui(
      1 | n,
      Ul(),
      a,
      l
    );
  }
  function ds(e, n, a, l) {
    var c = _t();
    l = l === void 0 ? null : l;
    var m = c.memoizedState.inst;
    Ke !== null && l !== null && Nc(l, Ke.memoizedState.deps) ? c.memoizedState = ui(n, m, a, l) : (Pe.flags |= e, c.memoizedState = ui(
      1 | n,
      m,
      a,
      l
    ));
  }
  function Zp(e, n) {
    Hl(8390656, 8, e, n);
  }
  function Gp(e, n) {
    ds(2048, 8, e, n);
  }
  function Vp(e, n) {
    return ds(4, 2, e, n);
  }
  function Yp(e, n) {
    return ds(4, 4, e, n);
  }
  function Xp(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function() {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function $p(e, n, a) {
    a = a != null ? a.concat([e]) : null, ds(4, 4, Xp.bind(null, n, e), a);
  }
  function Uc() {
  }
  function Qp(e, n) {
    var a = _t();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    return n !== null && Nc(n, l[1]) ? l[0] : (a.memoizedState = [e, n], e);
  }
  function Kp(e, n) {
    var a = _t();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    if (n !== null && Nc(n, l[1]))
      return l[0];
    if (l = e(), ba) {
      Fn(!0);
      try {
        e();
      } finally {
        Fn(!1);
      }
    }
    return a.memoizedState = [l, n], l;
  }
  function Hc(e, n, a) {
    return a === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = eg(), Pe.lanes |= e, Ur |= e, a);
  }
  function Jp(e, n, a, l) {
    return sn(a, n) ? a : si.current !== null ? (e = Hc(e, a, l), sn(e, n) || (Nt = !0), e) : (Rr & 42) === 0 ? (Nt = !0, e.memoizedState = a) : (e = eg(), Pe.lanes |= e, Ur |= e, n);
  }
  function Wp(e, n, a, l, c) {
    var m = te.p;
    te.p = m !== 0 && 8 > m ? m : 8;
    var C = U.T, N = {};
    U.T = N, Zc(e, !1, n, a);
    try {
      var R = c(), H = U.S;
      if (H !== null && H(N, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var X = zb(
          R,
          l
        );
        hs(
          e,
          n,
          X,
          fn(e)
        );
      } else
        hs(
          e,
          n,
          l,
          fn(e)
        );
    } catch (J) {
      hs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: J },
        fn()
      );
    } finally {
      te.p = m, U.T = C;
    }
  }
  function Ub() {
  }
  function qc(e, n, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = em(e).queue;
    Wp(
      e,
      c,
      n,
      ue,
      a === null ? Ub : function() {
        return tm(e), a(l);
      }
    );
  }
  function em(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: ue
      },
      next: null
    };
    var a = {};
    return n.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function tm(e) {
    var n = em(e).next.queue;
    hs(e, n, {}, fn());
  }
  function Fc() {
    return It(Ms);
  }
  function nm() {
    return _t().memoizedState;
  }
  function rm() {
    return _t().memoizedState;
  }
  function Hb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = fn();
          e = Mr(a);
          var l = kr(n, e, a);
          l !== null && (dn(l, n, a), ls(l, n, a)), n = { cache: bc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function qb(e, n, a) {
    var l = fn();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ql(e) ? im(n, a) : (a = uc(e, n, a, l), a !== null && (dn(a, e, l), sm(a, n, l)));
  }
  function am(e, n, a) {
    var l = fn();
    hs(e, n, a, l);
  }
  function hs(e, n, a, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ql(e)) im(n, c);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = n.lastRenderedReducer, m !== null))
        try {
          var C = n.lastRenderedState, N = m(C, a);
          if (c.hasEagerState = !0, c.eagerState = N, sn(N, C))
            return wl(e, n, c, 0), nt === null && Cl(), !1;
        } catch {
        } finally {
        }
      if (a = uc(e, n, c, l), a !== null)
        return dn(a, e, l), sm(a, n, l), !0;
    }
    return !1;
  }
  function Zc(e, n, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ef(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ql(e)) {
      if (n) throw Error(s(479));
    } else
      n = uc(
        e,
        a,
        l,
        2
      ), n !== null && dn(n, e, 2);
  }
  function ql(e) {
    var n = e.alternate;
    return e === Pe || n !== null && n === Pe;
  }
  function im(e, n) {
    li = Ll = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function sm(e, n, a) {
    if ((a & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, a |= l, n.lanes = a, ph(e, a);
    }
  }
  var Fl = {
    readContext: It,
    use: Il,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  }, lm = {
    readContext: It,
    use: Il,
    useCallback: function(e, n) {
      return Qt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: It,
    useEffect: Zp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Hl(
        4194308,
        4,
        Xp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return Hl(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Hl(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = Qt();
      n = n === void 0 ? null : n;
      var l = e();
      if (ba) {
        Fn(!0);
        try {
          e();
        } finally {
          Fn(!1);
        }
      }
      return a.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, a) {
      var l = Qt();
      if (a !== void 0) {
        var c = a(n);
        if (ba) {
          Fn(!0);
          try {
            a(n);
          } finally {
            Fn(!1);
          }
        }
      } else c = n;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = qb.bind(
        null,
        Pe,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = Qt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Ic(e);
      var n = e.queue, a = am.bind(null, Pe, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Uc,
    useDeferredValue: function(e, n) {
      var a = Qt();
      return Hc(a, e, n);
    },
    useTransition: function() {
      var e = Ic(!1);
      return e = Wp.bind(
        null,
        Pe,
        e.queue,
        !0,
        !1
      ), Qt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var l = Pe, c = Qt();
      if (Ye) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), nt === null)
          throw Error(s(349));
        (Ze & 124) !== 0 || Op(l, n, a);
      }
      c.memoizedState = a;
      var m = { value: a, getSnapshot: n };
      return c.queue = m, Zp(Dp.bind(null, l, m, e), [
        e
      ]), l.flags |= 2048, ui(
        9,
        Ul(),
        Np.bind(
          null,
          l,
          m,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Qt(), n = nt.identifierPrefix;
      if (Ye) {
        var a = lr, l = sr;
        a = (l & ~(1 << 32 - qt(l) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Pl++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Lb++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Fc,
    useFormState: Bp,
    useActionState: Bp,
    useOptimistic: function(e) {
      var n = Qt();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = a, n = Zc.bind(
        null,
        Pe,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: zc,
    useCacheRefresh: function() {
      return Qt().memoizedState = Hb.bind(
        null,
        Pe
      );
    }
  }, om = {
    readContext: It,
    use: Il,
    useCallback: Qp,
    useContext: It,
    useEffect: Gp,
    useImperativeHandle: $p,
    useInsertionEffect: Vp,
    useLayoutEffect: Yp,
    useMemo: Kp,
    useReducer: Bl,
    useRef: Fp,
    useState: function() {
      return Bl(cr);
    },
    useDebugValue: Uc,
    useDeferredValue: function(e, n) {
      var a = _t();
      return Jp(
        a,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Bl(cr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : fs(e),
        n
      ];
    },
    useSyncExternalStore: Tp,
    useId: nm,
    useHostTransitionStatus: Fc,
    useFormState: Up,
    useActionState: Up,
    useOptimistic: function(e, n) {
      var a = _t();
      return Rp(a, Ke, e, n);
    },
    useMemoCache: zc,
    useCacheRefresh: rm
  }, Fb = {
    readContext: It,
    use: Il,
    useCallback: Qp,
    useContext: It,
    useEffect: Gp,
    useImperativeHandle: $p,
    useInsertionEffect: Vp,
    useLayoutEffect: Yp,
    useMemo: Kp,
    useReducer: Pc,
    useRef: Fp,
    useState: function() {
      return Pc(cr);
    },
    useDebugValue: Uc,
    useDeferredValue: function(e, n) {
      var a = _t();
      return Ke === null ? Hc(a, e, n) : Jp(
        a,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Pc(cr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : fs(e),
        n
      ];
    },
    useSyncExternalStore: Tp,
    useId: nm,
    useHostTransitionStatus: Fc,
    useFormState: qp,
    useActionState: qp,
    useOptimistic: function(e, n) {
      var a = _t();
      return Ke !== null ? Rp(a, Ke, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: zc,
    useCacheRefresh: rm
  }, ci = null, ps = 0;
  function Zl(e) {
    var n = ps;
    return ps += 1, ci === null && (ci = []), bp(ci, e, n);
  }
  function ms(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Gl(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function um(e) {
    var n = e._init;
    return n(e._payload);
  }
  function cm(e) {
    function n(L, z) {
      if (e) {
        var I = L.deletions;
        I === null ? (L.deletions = [z], L.flags |= 16) : I.push(z);
      }
    }
    function a(L, z) {
      if (!e) return null;
      for (; z !== null; )
        n(L, z), z = z.sibling;
      return null;
    }
    function l(L) {
      for (var z = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? z.set(L.key, L) : z.set(L.index, L), L = L.sibling;
      return z;
    }
    function c(L, z) {
      return L = ir(L, z), L.index = 0, L.sibling = null, L;
    }
    function m(L, z, I) {
      return L.index = I, e ? (I = L.alternate, I !== null ? (I = I.index, I < z ? (L.flags |= 67108866, z) : I) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function C(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function N(L, z, I, Q) {
      return z === null || z.tag !== 6 ? (z = fc(I, L.mode, Q), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function R(L, z, I, Q) {
      var ce = I.type;
      return ce === f ? X(
        L,
        z,
        I.props.children,
        Q,
        I.key
      ) : z !== null && (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === q && um(ce) === z.type) ? (z = c(z, I.props), ms(z, I), z.return = L, z) : (z = Tl(
        I.type,
        I.key,
        I.props,
        null,
        L.mode,
        Q
      ), ms(z, I), z.return = L, z);
    }
    function H(L, z, I, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== I.containerInfo || z.stateNode.implementation !== I.implementation ? (z = dc(I, L.mode, Q), z.return = L, z) : (z = c(z, I.children || []), z.return = L, z);
    }
    function X(L, z, I, Q, ce) {
      return z === null || z.tag !== 7 ? (z = fa(
        I,
        L.mode,
        Q,
        ce
      ), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function J(L, z, I) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = fc(
          "" + z,
          L.mode,
          I
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return I = Tl(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              I
            ), ms(I, z), I.return = L, I;
          case v:
            return z = dc(
              z,
              L.mode,
              I
            ), z.return = L, z;
          case q:
            var Q = z._init;
            return z = Q(z._payload), J(L, z, I);
        }
        if (me(z) || $(z))
          return z = fa(
            z,
            L.mode,
            I,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return J(L, Zl(z), I);
        if (z.$$typeof === D)
          return J(
            L,
            Ml(L, z),
            I
          );
        Gl(L, z);
      }
      return null;
    }
    function F(L, z, I, Q) {
      var ce = z !== null ? z.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return ce !== null ? null : N(L, z, "" + I, Q);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            return I.key === ce ? R(L, z, I, Q) : null;
          case v:
            return I.key === ce ? H(L, z, I, Q) : null;
          case q:
            return ce = I._init, I = ce(I._payload), F(L, z, I, Q);
        }
        if (me(I) || $(I))
          return ce !== null ? null : X(L, z, I, Q, null);
        if (typeof I.then == "function")
          return F(
            L,
            z,
            Zl(I),
            Q
          );
        if (I.$$typeof === D)
          return F(
            L,
            z,
            Ml(L, I),
            Q
          );
        Gl(L, I);
      }
      return null;
    }
    function Z(L, z, I, Q, ce) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return L = L.get(I) || null, N(z, L, "" + Q, ce);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case b:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, R(z, L, Q, ce);
          case v:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, H(z, L, Q, ce);
          case q:
            var Be = Q._init;
            return Q = Be(Q._payload), Z(
              L,
              z,
              I,
              Q,
              ce
            );
        }
        if (me(Q) || $(Q))
          return L = L.get(I) || null, X(z, L, Q, ce, null);
        if (typeof Q.then == "function")
          return Z(
            L,
            z,
            I,
            Zl(Q),
            ce
          );
        if (Q.$$typeof === D)
          return Z(
            L,
            z,
            I,
            Ml(z, Q),
            ce
          );
        Gl(z, Q);
      }
      return null;
    }
    function we(L, z, I, Q) {
      for (var ce = null, Be = null, pe = z, Ee = z = 0, Mt = null; pe !== null && Ee < I.length; Ee++) {
        pe.index > Ee ? (Mt = pe, pe = null) : Mt = pe.sibling;
        var Ge = F(
          L,
          pe,
          I[Ee],
          Q
        );
        if (Ge === null) {
          pe === null && (pe = Mt);
          break;
        }
        e && pe && Ge.alternate === null && n(L, pe), z = m(Ge, z, Ee), Be === null ? ce = Ge : Be.sibling = Ge, Be = Ge, pe = Mt;
      }
      if (Ee === I.length)
        return a(L, pe), Ye && ha(L, Ee), ce;
      if (pe === null) {
        for (; Ee < I.length; Ee++)
          pe = J(L, I[Ee], Q), pe !== null && (z = m(
            pe,
            z,
            Ee
          ), Be === null ? ce = pe : Be.sibling = pe, Be = pe);
        return Ye && ha(L, Ee), ce;
      }
      for (pe = l(pe); Ee < I.length; Ee++)
        Mt = Z(
          pe,
          L,
          Ee,
          I[Ee],
          Q
        ), Mt !== null && (e && Mt.alternate !== null && pe.delete(
          Mt.key === null ? Ee : Mt.key
        ), z = m(
          Mt,
          z,
          Ee
        ), Be === null ? ce = Mt : Be.sibling = Mt, Be = Mt);
      return e && pe.forEach(function($r) {
        return n(L, $r);
      }), Ye && ha(L, Ee), ce;
    }
    function xe(L, z, I, Q) {
      if (I == null) throw Error(s(151));
      for (var ce = null, Be = null, pe = z, Ee = z = 0, Mt = null, Ge = I.next(); pe !== null && !Ge.done; Ee++, Ge = I.next()) {
        pe.index > Ee ? (Mt = pe, pe = null) : Mt = pe.sibling;
        var $r = F(L, pe, Ge.value, Q);
        if ($r === null) {
          pe === null && (pe = Mt);
          break;
        }
        e && pe && $r.alternate === null && n(L, pe), z = m($r, z, Ee), Be === null ? ce = $r : Be.sibling = $r, Be = $r, pe = Mt;
      }
      if (Ge.done)
        return a(L, pe), Ye && ha(L, Ee), ce;
      if (pe === null) {
        for (; !Ge.done; Ee++, Ge = I.next())
          Ge = J(L, Ge.value, Q), Ge !== null && (z = m(Ge, z, Ee), Be === null ? ce = Ge : Be.sibling = Ge, Be = Ge);
        return Ye && ha(L, Ee), ce;
      }
      for (pe = l(pe); !Ge.done; Ee++, Ge = I.next())
        Ge = Z(pe, L, Ee, Ge.value, Q), Ge !== null && (e && Ge.alternate !== null && pe.delete(Ge.key === null ? Ee : Ge.key), z = m(Ge, z, Ee), Be === null ? ce = Ge : Be.sibling = Ge, Be = Ge);
      return e && pe.forEach(function(Z2) {
        return n(L, Z2);
      }), Ye && ha(L, Ee), ce;
    }
    function We(L, z, I, Q) {
      if (typeof I == "object" && I !== null && I.type === f && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case b:
            e: {
              for (var ce = I.key; z !== null; ) {
                if (z.key === ce) {
                  if (ce = I.type, ce === f) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), Q = c(
                        z,
                        I.props.children
                      ), Q.return = L, L = Q;
                      break e;
                    }
                  } else if (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === q && um(ce) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), Q = c(z, I.props), ms(Q, I), Q.return = L, L = Q;
                    break e;
                  }
                  a(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              I.type === f ? (Q = fa(
                I.props.children,
                L.mode,
                Q,
                I.key
              ), Q.return = L, L = Q) : (Q = Tl(
                I.type,
                I.key,
                I.props,
                null,
                L.mode,
                Q
              ), ms(Q, I), Q.return = L, L = Q);
            }
            return C(L);
          case v:
            e: {
              for (ce = I.key; z !== null; ) {
                if (z.key === ce)
                  if (z.tag === 4 && z.stateNode.containerInfo === I.containerInfo && z.stateNode.implementation === I.implementation) {
                    a(
                      L,
                      z.sibling
                    ), Q = c(z, I.children || []), Q.return = L, L = Q;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              Q = dc(I, L.mode, Q), Q.return = L, L = Q;
            }
            return C(L);
          case q:
            return ce = I._init, I = ce(I._payload), We(
              L,
              z,
              I,
              Q
            );
        }
        if (me(I))
          return we(
            L,
            z,
            I,
            Q
          );
        if ($(I)) {
          if (ce = $(I), typeof ce != "function") throw Error(s(150));
          return I = ce.call(I), xe(
            L,
            z,
            I,
            Q
          );
        }
        if (typeof I.then == "function")
          return We(
            L,
            z,
            Zl(I),
            Q
          );
        if (I.$$typeof === D)
          return We(
            L,
            z,
            Ml(L, I),
            Q
          );
        Gl(L, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint" ? (I = "" + I, z !== null && z.tag === 6 ? (a(L, z.sibling), Q = c(z, I), Q.return = L, L = Q) : (a(L, z), Q = fc(I, L.mode, Q), Q.return = L, L = Q), C(L)) : a(L, z);
    }
    return function(L, z, I, Q) {
      try {
        ps = 0;
        var ce = We(
          L,
          z,
          I,
          Q
        );
        return ci = null, ce;
      } catch (pe) {
        if (pe === is || pe === Rl) throw pe;
        var Be = ln(29, pe, null, L.mode);
        return Be.lanes = Q, Be.return = L, Be;
      } finally {
      }
    };
  }
  var fi = cm(!0), fm = cm(!1), An = K(null), Vn = null;
  function jr(e) {
    var n = e.alternate;
    se(wt, wt.current & 1), se(An, e), Vn === null && (n === null || si.current !== null || n.memoizedState !== null) && (Vn = e);
  }
  function dm(e) {
    if (e.tag === 22) {
      if (se(wt, wt.current), se(An, e), Vn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Vn = e);
      }
    } else zr();
  }
  function zr() {
    se(wt, wt.current), se(An, An.current);
  }
  function fr(e) {
    ae(An), Vn === e && (Vn = null), ae(wt);
  }
  var wt = K(0);
  function Vl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || zf(a)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function Gc(e, n, a, l) {
    n = e.memoizedState, a = a(l, n), a = a == null ? n : y({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Vc = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var l = fn(), c = Mr(l);
      c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (dn(n, e, l), ls(n, e, l));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var l = fn(), c = Mr(l);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (dn(n, e, l), ls(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = fn(), l = Mr(a);
      l.tag = 2, n != null && (l.callback = n), n = kr(e, l, a), n !== null && (dn(n, e, a), ls(n, e, a));
    }
  };
  function hm(e, n, a, l, c, m, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, m, C) : n.prototype && n.prototype.isPureReactComponent ? !Ki(a, l) || !Ki(c, m) : !0;
  }
  function pm(e, n, a, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, l), n.state !== e && Vc.enqueueReplaceState(n, n.state, null);
  }
  function _a(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var l in n)
        l !== "ref" && (a[l] = n[l]);
    }
    if (e = e.defaultProps) {
      a === n && (a = y({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var Yl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function mm(e) {
    Yl(e);
  }
  function gm(e) {
    console.error(e);
  }
  function vm(e) {
    Yl(e);
  }
  function Xl(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function ym(e, n, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Yc(e, n, a) {
    return a = Mr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Xl(e, n);
    }, a;
  }
  function bm(e) {
    return e = Mr(e), e.tag = 3, e;
  }
  function _m(e, n, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var m = l.value;
      e.payload = function() {
        return c(m);
      }, e.callback = function() {
        ym(n, a, l);
      };
    }
    var C = a.stateNode;
    C !== null && typeof C.componentDidCatch == "function" && (e.callback = function() {
      ym(n, a, l), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var N = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: N !== null ? N : ""
      });
    });
  }
  function Zb(e, n, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = a.alternate, n !== null && ns(
        n,
        a,
        c,
        !0
      ), a = An.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Vn === null ? yf() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === xc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), _f(e, l, c)), !1;
          case 22:
            return a.flags |= 65536, l === xc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), _f(e, l, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return _f(e, l, c), yf(), !1;
    }
    if (Ye)
      return n = An.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== mc && (e = Error(s(422), { cause: l }), ts(xn(e, a)))) : (l !== mc && (n = Error(s(423), {
        cause: l
      }), ts(
        xn(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = xn(l, a), c = Yc(
        e.stateNode,
        l,
        c
      ), wc(e, c), ht !== 4 && (ht = 2)), !1;
    var m = Error(s(520), { cause: l });
    if (m = xn(m, a), xs === null ? xs = [m] : xs.push(m), ht !== 4 && (ht = 2), n === null) return !0;
    l = xn(l, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Yc(a.stateNode, l, e), wc(a, e), !1;
        case 1:
          if (n = a.type, m = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Hr === null || !Hr.has(m))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = bm(c), _m(
              c,
              e,
              a,
              l
            ), wc(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Sm = Error(s(461)), Nt = !1;
  function kt(e, n, a, l) {
    n.child = e === null ? fm(n, null, a, l) : fi(
      n,
      e.child,
      a,
      l
    );
  }
  function xm(e, n, a, l, c) {
    a = a.render;
    var m = n.ref;
    if ("ref" in l) {
      var C = {};
      for (var N in l)
        N !== "ref" && (C[N] = l[N]);
    } else C = l;
    return va(n), l = Dc(
      e,
      n,
      a,
      C,
      m,
      c
    ), N = Mc(), e !== null && !Nt ? (kc(e, n, c), dr(e, n, c)) : (Ye && N && hc(n), n.flags |= 1, kt(e, n, l, c), n.child);
  }
  function Em(e, n, a, l, c) {
    if (e === null) {
      var m = a.type;
      return typeof m == "function" && !cc(m) && m.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = m, Cm(
        e,
        n,
        m,
        l,
        c
      )) : (e = Tl(
        a.type,
        null,
        l,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (m = e.child, !tf(e, c)) {
      var C = m.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ki, a(C, l) && e.ref === n.ref)
        return dr(e, n, c);
    }
    return n.flags |= 1, e = ir(m, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Cm(e, n, a, l, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (Ki(m, l) && e.ref === n.ref)
        if (Nt = !1, n.pendingProps = l = m, tf(e, c))
          (e.flags & 131072) !== 0 && (Nt = !0);
        else
          return n.lanes = e.lanes, dr(e, n, c);
    }
    return Xc(
      e,
      n,
      a,
      l,
      c
    );
  }
  function wm(e, n, a) {
    var l = n.pendingProps, c = l.children, m = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (l = m !== null ? m.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, m = 0; c !== null; )
            m = m | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = m & ~l;
        } else n.childLanes = 0, n.child = null;
        return Am(
          e,
          n,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && kl(
          n,
          m !== null ? m.cachePool : null
        ), m !== null ? Cp(n, m) : Tc(), dm(n);
      else
        return n.lanes = n.childLanes = 536870912, Am(
          e,
          n,
          m !== null ? m.baseLanes | a : a,
          a
        );
    } else
      m !== null ? (kl(n, m.cachePool), Cp(n, m), zr(), n.memoizedState = null) : (e !== null && kl(n, null), Tc(), zr());
    return kt(e, n, c, a), n.child;
  }
  function Am(e, n, a, l) {
    var c = Sc();
    return c = c === null ? null : { parent: Ct._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && kl(n, null), Tc(), dm(n), e !== null && ns(e, n, l, !0), null;
  }
  function $l(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Xc(e, n, a, l, c) {
    return va(n), a = Dc(
      e,
      n,
      a,
      l,
      void 0,
      c
    ), l = Mc(), e !== null && !Nt ? (kc(e, n, c), dr(e, n, c)) : (Ye && l && hc(n), n.flags |= 1, kt(e, n, a, c), n.child);
  }
  function Tm(e, n, a, l, c, m) {
    return va(n), n.updateQueue = null, a = Ap(
      n,
      l,
      a,
      c
    ), wp(e), l = Mc(), e !== null && !Nt ? (kc(e, n, m), dr(e, n, m)) : (Ye && l && hc(n), n.flags |= 1, kt(e, n, a, m), n.child);
  }
  function Om(e, n, a, l, c) {
    if (va(n), n.stateNode === null) {
      var m = ti, C = a.contextType;
      typeof C == "object" && C !== null && (m = It(C)), m = new a(l, m), n.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Vc, n.stateNode = m, m._reactInternals = n, m = n.stateNode, m.props = l, m.state = n.memoizedState, m.refs = {}, Ec(n), C = a.contextType, m.context = typeof C == "object" && C !== null ? It(C) : ti, m.state = n.memoizedState, C = a.getDerivedStateFromProps, typeof C == "function" && (Gc(
        n,
        a,
        C,
        l
      ), m.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (C = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), C !== m.state && Vc.enqueueReplaceState(m, m.state, null), us(n, l, m, c), os(), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      m = n.stateNode;
      var N = n.memoizedProps, R = _a(a, N);
      m.props = R;
      var H = m.context, X = a.contextType;
      C = ti, typeof X == "object" && X !== null && (C = It(X));
      var J = a.getDerivedStateFromProps;
      X = typeof J == "function" || typeof m.getSnapshotBeforeUpdate == "function", N = n.pendingProps !== N, X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (N || H !== C) && pm(
        n,
        m,
        l,
        C
      ), Dr = !1;
      var F = n.memoizedState;
      m.state = F, us(n, l, m, c), os(), H = n.memoizedState, N || F !== H || Dr ? (typeof J == "function" && (Gc(
        n,
        a,
        J,
        l
      ), H = n.memoizedState), (R = Dr || hm(
        n,
        a,
        R,
        l,
        F,
        H,
        C
      )) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = H), m.props = l, m.state = H, m.context = C, l = R) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      m = n.stateNode, Cc(e, n), C = n.memoizedProps, X = _a(a, C), m.props = X, J = n.pendingProps, F = m.context, H = a.contextType, R = ti, typeof H == "object" && H !== null && (R = It(H)), N = a.getDerivedStateFromProps, (H = typeof N == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== J || F !== R) && pm(
        n,
        m,
        l,
        R
      ), Dr = !1, F = n.memoizedState, m.state = F, us(n, l, m, c), os();
      var Z = n.memoizedState;
      C !== J || F !== Z || Dr || e !== null && e.dependencies !== null && Dl(e.dependencies) ? (typeof N == "function" && (Gc(
        n,
        a,
        N,
        l
      ), Z = n.memoizedState), (X = Dr || hm(
        n,
        a,
        X,
        l,
        F,
        Z,
        R
      ) || e !== null && e.dependencies !== null && Dl(e.dependencies)) ? (H || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(l, Z, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        l,
        Z,
        R
      )), typeof m.componentDidUpdate == "function" && (n.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = Z), m.props = l, m.state = Z, m.context = R, l = X) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return m = l, $l(e, n), l = (n.flags & 128) !== 0, m || l ? (m = n.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : m.render(), n.flags |= 1, e !== null && l ? (n.child = fi(
      n,
      e.child,
      null,
      c
    ), n.child = fi(
      n,
      null,
      a,
      c
    )) : kt(e, n, a, c), n.memoizedState = m.state, e = n.child) : e = dr(
      e,
      n,
      c
    ), e;
  }
  function Nm(e, n, a, l) {
    return es(), n.flags |= 256, kt(e, n, a, l), n.child;
  }
  var $c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc(e) {
    return { baseLanes: e, cachePool: gp() };
  }
  function Kc(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Tn), e;
  }
  function Dm(e, n, a) {
    var l = n.pendingProps, c = !1, m = (n.flags & 128) !== 0, C;
    if ((C = m) || (C = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), C && (c = !0, n.flags &= -129), C = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ye) {
        if (c ? jr(n) : zr(), Ye) {
          var N = dt, R;
          if (R = N) {
            e: {
              for (R = N, N = Gn; R.nodeType !== 8; ) {
                if (!N) {
                  N = null;
                  break e;
                }
                if (R = Ln(
                  R.nextSibling
                ), R === null) {
                  N = null;
                  break e;
                }
              }
              N = R;
            }
            N !== null ? (n.memoizedState = {
              dehydrated: N,
              treeContext: da !== null ? { id: sr, overflow: lr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = ln(
              18,
              null,
              null,
              0
            ), R.stateNode = N, R.return = n, n.child = R, Zt = n, dt = null, R = !0) : R = !1;
          }
          R || ma(n);
        }
        if (N = n.memoizedState, N !== null && (N = N.dehydrated, N !== null))
          return zf(N) ? n.lanes = 32 : n.lanes = 536870912, null;
        fr(n);
      }
      return N = l.children, l = l.fallback, c ? (zr(), c = n.mode, N = Ql(
        { mode: "hidden", children: N },
        c
      ), l = fa(
        l,
        c,
        a,
        null
      ), N.return = n, l.return = n, N.sibling = l, n.child = N, c = n.child, c.memoizedState = Qc(a), c.childLanes = Kc(
        e,
        C,
        a
      ), n.memoizedState = $c, l) : (jr(n), Jc(n, N));
    }
    if (R = e.memoizedState, R !== null && (N = R.dehydrated, N !== null)) {
      if (m)
        n.flags & 256 ? (jr(n), n.flags &= -257, n = Wc(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (zr(), n.child = e.child, n.flags |= 128, n = null) : (zr(), c = l.fallback, N = n.mode, l = Ql(
          { mode: "visible", children: l.children },
          N
        ), c = fa(
          c,
          N,
          a,
          null
        ), c.flags |= 2, l.return = n, c.return = n, l.sibling = c, n.child = l, fi(
          n,
          e.child,
          null,
          a
        ), l = n.child, l.memoizedState = Qc(a), l.childLanes = Kc(
          e,
          C,
          a
        ), n.memoizedState = $c, n = c);
      else if (jr(n), zf(N)) {
        if (C = N.nextSibling && N.nextSibling.dataset, C) var H = C.dgst;
        C = H, l = Error(s(419)), l.stack = "", l.digest = C, ts({ value: l, source: null, stack: null }), n = Wc(
          e,
          n,
          a
        );
      } else if (Nt || ns(e, n, a, !1), C = (a & e.childLanes) !== 0, Nt || C) {
        if (C = nt, C !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : zu(l), l = (l & (C.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== R.retryLane))
          throw R.retryLane = l, ei(e, l), dn(C, e, l), Sm;
        N.data === "$?" || yf(), n = Wc(
          e,
          n,
          a
        );
      } else
        N.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = R.treeContext, dt = Ln(
          N.nextSibling
        ), Zt = n, Ye = !0, pa = null, Gn = !1, e !== null && (Cn[wn++] = sr, Cn[wn++] = lr, Cn[wn++] = da, sr = e.id, lr = e.overflow, da = n), n = Jc(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (zr(), c = l.fallback, N = n.mode, R = e.child, H = R.sibling, l = ir(R, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = R.subtreeFlags & 65011712, H !== null ? c = ir(H, c) : (c = fa(
      c,
      N,
      a,
      null
    ), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, N = e.child.memoizedState, N === null ? N = Qc(a) : (R = N.cachePool, R !== null ? (H = Ct._currentValue, R = R.parent !== H ? { parent: H, pool: H } : R) : R = gp(), N = {
      baseLanes: N.baseLanes | a,
      cachePool: R
    }), c.memoizedState = N, c.childLanes = Kc(
      e,
      C,
      a
    ), n.memoizedState = $c, l) : (jr(n), a = e.child, e = a.sibling, a = ir(a, {
      mode: "visible",
      children: l.children
    }), a.return = n, a.sibling = null, e !== null && (C = n.deletions, C === null ? (n.deletions = [e], n.flags |= 16) : C.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Jc(e, n) {
    return n = Ql(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Ql(e, n) {
    return e = ln(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Wc(e, n, a) {
    return fi(n, e.child, null, a), e = Jc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Mm(e, n, a) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), vc(e.return, n, a);
  }
  function ef(e, n, a, l, c) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: c
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = a, m.tailMode = c);
  }
  function km(e, n, a) {
    var l = n.pendingProps, c = l.revealOrder, m = l.tail;
    if (kt(e, n, l.children, a), l = wt.current, (l & 2) !== 0)
      l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Mm(e, a, n);
          else if (e.tag === 19)
            Mm(e, a, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      l &= 1;
    }
    switch (se(wt, l), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Vl(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), ef(
          n,
          !1,
          c,
          a,
          m
        );
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Vl(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        ef(
          n,
          !0,
          a,
          null,
          m
        );
        break;
      case "together":
        ef(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function dr(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), Ur |= n.lanes, (a & n.childLanes) === 0)
      if (e !== null) {
        if (ns(
          e,
          n,
          a,
          !1
        ), (a & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(s(153));
    if (n.child !== null) {
      for (e = n.child, a = ir(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ir(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function tf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Dl(e)));
  }
  function Gb(e, n, a) {
    switch (n.tag) {
      case 3:
        ye(n, n.stateNode.containerInfo), Nr(n, Ct, e.memoizedState.cache), es();
        break;
      case 27:
      case 5:
        at(n);
        break;
      case 4:
        ye(n, n.stateNode.containerInfo);
        break;
      case 10:
        Nr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (jr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Dm(e, n, a) : (jr(n), e = dr(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        jr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (l = (a & n.childLanes) !== 0, l || (ns(
          e,
          n,
          a,
          !1
        ), l = (a & n.childLanes) !== 0), c) {
          if (l)
            return km(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(wt, wt.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, wm(e, n, a);
      case 24:
        Nr(n, Ct, e.memoizedState.cache);
    }
    return dr(e, n, a);
  }
  function Rm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Nt = !0;
      else {
        if (!tf(e, a) && (n.flags & 128) === 0)
          return Nt = !1, Gb(
            e,
            n,
            a
          );
        Nt = (e.flags & 131072) !== 0;
      }
    else
      Nt = !1, Ye && (n.flags & 1048576) !== 0 && up(n, Nl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType, c = l._init;
          if (l = c(l._payload), n.type = l, typeof l == "function")
            cc(l) ? (e = _a(l, e), n.tag = 1, n = Om(
              null,
              n,
              l,
              e,
              a
            )) : (n.tag = 0, n = Xc(
              null,
              n,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (c = l.$$typeof, c === x) {
                n.tag = 11, n = xm(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = Em(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = fe(l) || l, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Xc(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 1:
        return l = n.type, c = _a(
          l,
          n.pendingProps
        ), Om(
          e,
          n,
          l,
          c,
          a
        );
      case 3:
        e: {
          if (ye(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = n.pendingProps;
          var m = n.memoizedState;
          c = m.element, Cc(e, n), us(n, l, null, a);
          var C = n.memoizedState;
          if (l = C.cache, Nr(n, Ct, l), l !== m.cache && yc(
            n,
            [Ct],
            a,
            !0
          ), os(), l = C.element, m.isDehydrated)
            if (m = {
              element: l,
              isDehydrated: !1,
              cache: C.cache
            }, n.updateQueue.baseState = m, n.memoizedState = m, n.flags & 256) {
              n = Nm(
                e,
                n,
                l,
                a
              );
              break e;
            } else if (l !== c) {
              c = xn(
                Error(s(424)),
                n
              ), ts(c), n = Nm(
                e,
                n,
                l,
                a
              );
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (dt = Ln(e.firstChild), Zt = n, Ye = !0, pa = null, Gn = !0, a = fm(
                n,
                null,
                l,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (es(), l === c) {
              n = dr(
                e,
                n,
                a
              );
              break e;
            }
            kt(
              e,
              n,
              l,
              a
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return $l(e, n), e === null ? (a = Pg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Ye || (a = n.type, e = n.pendingProps, l = co(
          Y.current
        ).createElement(a), l[Pt] = n, l[Xt] = e, jt(l, a, e), Ot(l), n.stateNode = l) : n.memoizedState = Pg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return at(n), e === null && Ye && (l = n.stateNode = jg(
          n.type,
          n.pendingProps,
          Y.current
        ), Zt = n, Gn = !0, c = dt, Zr(n.type) ? (Lf = c, dt = Ln(
          l.firstChild
        )) : dt = c), kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), $l(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ye && ((c = l = dt) && (l = b2(
          l,
          n.type,
          n.pendingProps,
          Gn
        ), l !== null ? (n.stateNode = l, Zt = n, dt = Ln(
          l.firstChild
        ), Gn = !1, c = !0) : c = !1), c || ma(n)), at(n), c = n.type, m = n.pendingProps, C = e !== null ? e.memoizedProps : null, l = m.children, kf(c, m) ? l = null : C !== null && kf(c, C) && (n.flags |= 32), n.memoizedState !== null && (c = Dc(
          e,
          n,
          Pb,
          null,
          null,
          a
        ), Ms._currentValue = c), $l(e, n), kt(e, n, l, a), n.child;
      case 6:
        return e === null && Ye && ((e = a = dt) && (a = _2(
          a,
          n.pendingProps,
          Gn
        ), a !== null ? (n.stateNode = a, Zt = n, dt = null, e = !0) : e = !1), e || ma(n)), null;
      case 13:
        return Dm(e, n, a);
      case 4:
        return ye(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = fi(
          n,
          null,
          l,
          a
        ) : kt(
          e,
          n,
          l,
          a
        ), n.child;
      case 11:
        return xm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 7:
        return kt(
          e,
          n,
          n.pendingProps,
          a
        ), n.child;
      case 8:
        return kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 12:
        return kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 10:
        return l = n.pendingProps, Nr(n, n.type, l.value), kt(
          e,
          n,
          l.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, l = n.pendingProps.children, va(n), c = It(c), l = l(c), n.flags |= 1, kt(e, n, l, a), n.child;
      case 14:
        return Em(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return Cm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return km(e, n, a);
      case 31:
        return l = n.pendingProps, a = n.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = Ql(
          l,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = ir(e.child, l), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return wm(e, n, a);
      case 24:
        return va(n), l = It(Ct), e === null ? (c = Sc(), c === null && (c = nt, m = bc(), c.pooledCache = m, m.refCount++, m !== null && (c.pooledCacheLanes |= a), c = m), n.memoizedState = {
          parent: l,
          cache: c
        }, Ec(n), Nr(n, Ct, c)) : ((e.lanes & a) !== 0 && (Cc(e, n), us(n, null, null, a), os()), c = e.memoizedState, m = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Nr(n, Ct, l)) : (l = m.cache, Nr(n, Ct, l), l !== c.cache && yc(
          n,
          [Ct],
          a,
          !0
        ))), kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  function hr(e) {
    e.flags |= 4;
  }
  function jm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !qg(n)) {
      if (n = An.current, n !== null && ((Ze & 4194048) === Ze ? Vn !== null : (Ze & 62914560) !== Ze && (Ze & 536870912) === 0 || n !== Vn))
        throw ss = xc, vp;
      e.flags |= 8192;
    }
  }
  function Kl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? dh() : 536870912, e.lanes |= n, mi |= n);
  }
  function gs(e, n) {
    if (!Ye)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function ut(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (n)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, n;
  }
  function Vb(e, n, a) {
    var l = n.pendingProps;
    switch (pc(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ut(n), null;
      case 1:
        return ut(n), null;
      case 3:
        return a = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), ur(Ct), Ve(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Wi(n) ? hr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, dp())), ut(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (hr(n), a !== null ? (ut(n), jm(n, a)) : (ut(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (hr(n), ut(n), jm(n, a)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== l && hr(n), ut(n), n.flags &= -16777217), null;
      case 27:
        ze(n), a = Y.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          e = le.current, Wi(n) ? cp(n) : (e = jg(c, l, a), n.stateNode = e, hr(n));
        }
        return ut(n), null;
      case 5:
        if (ze(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          if (e = le.current, Wi(n))
            cp(n);
          else {
            switch (c = co(
              Y.current
            ), e) {
              case 1:
                e = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? c.createElement("select", { is: l.is }) : c.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? c.createElement(a, { is: l.is }) : c.createElement(a);
                }
            }
            e[Pt] = n, e[Xt] = l;
            e: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === n) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            n.stateNode = e;
            e: switch (jt(e, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && hr(n);
          }
        }
        return ut(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = Y.current, Wi(n)) {
            if (e = n.stateNode, a = n.memoizedProps, l = null, c = Zt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            e[Pt] = n, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Tg(e.nodeValue, a)), e || ma(n);
          } else
            e = co(e).createTextNode(
              l
            ), e[Pt] = n, n.stateNode = e;
        }
        return ut(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Wi(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Pt] = n;
            } else
              es(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), c = !1;
          } else
            c = dp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (fr(n), n) : (fr(n), null);
        }
        if (fr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = n.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var m = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (m = l.memoizedState.cachePool.pool), m !== c && (l.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Kl(n, n.updateQueue), ut(n), null;
      case 4:
        return Ve(), e === null && Tf(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return ur(n.type), ut(n), null;
      case 19:
        if (ae(wt), c = n.memoizedState, c === null) return ut(n), null;
        if (l = (n.flags & 128) !== 0, m = c.rendering, m === null)
          if (l) gs(c, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (m = Vl(e), m !== null) {
                  for (n.flags |= 128, gs(c, !1), e = m.updateQueue, n.updateQueue = e, Kl(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    op(a, e), a = a.sibling;
                  return se(
                    wt,
                    wt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && ve() > eo && (n.flags |= 128, l = !0, gs(c, !1), n.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Vl(m), e !== null) {
              if (n.flags |= 128, l = !0, e = e.updateQueue, n.updateQueue = e, Kl(n, e), gs(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Ye)
                return ut(n), null;
            } else
              2 * ve() - c.renderingStartTime > eo && a !== 536870912 && (n.flags |= 128, l = !0, gs(c, !1), n.lanes = 4194304);
          c.isBackwards ? (m.sibling = n.child, n.child = m) : (e = c.last, e !== null ? e.sibling = m : n.child = m, c.last = m);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = ve(), n.sibling = null, e = wt.current, se(wt, l ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return fr(n), Oc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), a = n.updateQueue, a !== null && Kl(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), e !== null && ae(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), ur(Ct), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Yb(e, n) {
    switch (pc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return ur(Ct), Ve(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ze(n), null;
      case 13:
        if (fr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          es();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ae(wt), null;
      case 4:
        return Ve(), null;
      case 10:
        return ur(n.type), null;
      case 22:
      case 23:
        return fr(n), Oc(), e !== null && ae(ya), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return ur(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zm(e, n) {
    switch (pc(n), n.tag) {
      case 3:
        ur(Ct), Ve();
        break;
      case 26:
      case 27:
      case 5:
        ze(n);
        break;
      case 4:
        Ve();
        break;
      case 13:
        fr(n);
        break;
      case 19:
        ae(wt);
        break;
      case 10:
        ur(n.type);
        break;
      case 22:
      case 23:
        fr(n), Oc(), e !== null && ae(ya);
        break;
      case 24:
        ur(Ct);
    }
  }
  function vs(e, n) {
    try {
      var a = n.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var m = a.create, C = a.inst;
            l = m(), C.destroy = l;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (N) {
      tt(n, n.return, N);
    }
  }
  function Lr(e, n, a) {
    try {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var m = c.next;
        l = m;
        do {
          if ((l.tag & e) === e) {
            var C = l.inst, N = C.destroy;
            if (N !== void 0) {
              C.destroy = void 0, c = n;
              var R = a, H = N;
              try {
                H();
              } catch (X) {
                tt(
                  c,
                  R,
                  X
                );
              }
            }
          }
          l = l.next;
        } while (l !== m);
      }
    } catch (X) {
      tt(n, n.return, X);
    }
  }
  function Lm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        Ep(n, a);
      } catch (l) {
        tt(e, e.return, l);
      }
    }
  }
  function Pm(e, n, a) {
    a.props = _a(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      tt(e, n, l);
    }
  }
  function ys(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (c) {
      tt(e, n, c);
    }
  }
  function Yn(e, n) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          tt(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          tt(e, n, c);
        }
      else a.current = null;
  }
  function Im(e) {
    var n = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (c) {
      tt(e, e.return, c);
    }
  }
  function nf(e, n, a) {
    try {
      var l = e.stateNode;
      p2(l, e.type, a, n), l[Xt] = n;
    } catch (c) {
      tt(e, e.return, c);
    }
  }
  function Bm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function rf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function af(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = uo));
    else if (l !== 4 && (l === 27 && Zr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (af(e, n, a), e = e.sibling; e !== null; )
        af(e, n, a), e = e.sibling;
  }
  function Jl(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Zr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Jl(e, n, a), e = e.sibling; e !== null; )
        Jl(e, n, a), e = e.sibling;
  }
  function Um(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      jt(n, l, a), n[Pt] = e, n[Xt] = a;
    } catch (m) {
      tt(e, e.return, m);
    }
  }
  var pr = !1, vt = !1, sf = !1, Hm = typeof WeakSet == "function" ? WeakSet : Set, Dt = null;
  function Xb(e, n) {
    if (e = e.containerInfo, Df = vo, e = Jh(e), rc(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var c = l.anchorOffset, m = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, m.nodeType;
            } catch {
              a = null;
              break e;
            }
            var C = 0, N = -1, R = -1, H = 0, X = 0, J = e, F = null;
            t: for (; ; ) {
              for (var Z; J !== a || c !== 0 && J.nodeType !== 3 || (N = C + c), J !== m || l !== 0 && J.nodeType !== 3 || (R = C + l), J.nodeType === 3 && (C += J.nodeValue.length), (Z = J.firstChild) !== null; )
                F = J, J = Z;
              for (; ; ) {
                if (J === e) break t;
                if (F === a && ++H === c && (N = C), F === m && ++X === l && (R = C), (Z = J.nextSibling) !== null) break;
                J = F, F = J.parentNode;
              }
              J = Z;
            }
            a = N === -1 || R === -1 ? null : { start: N, end: R };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Mf = { focusedElem: e, selectionRange: a }, vo = !1, Dt = n; Dt !== null; )
      if (n = Dt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Dt = e;
      else
        for (; Dt !== null; ) {
          switch (n = Dt, m = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && m !== null) {
                e = void 0, a = n, c = m.memoizedProps, m = m.memoizedState, l = a.stateNode;
                try {
                  var we = _a(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    we,
                    m
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (xe) {
                  tt(
                    a,
                    a.return,
                    xe
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9)
                  jf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, Dt = e;
            break;
          }
          Dt = n.return;
        }
  }
  function qm(e, n, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, a), l & 4 && vs(5, a);
        break;
      case 1:
        if (Pr(e, a), l & 4)
          if (e = a.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (C) {
              tt(a, a.return, C);
            }
          else {
            var c = _a(
              a.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (C) {
              tt(
                a,
                a.return,
                C
              );
            }
          }
        l & 64 && Lm(a), l & 512 && ys(a, a.return);
        break;
      case 3:
        if (Pr(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (n = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            Ep(e, n);
          } catch (C) {
            tt(a, a.return, C);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Um(a);
      case 26:
      case 5:
        Pr(e, a), n === null && l & 4 && Im(a), l & 512 && ys(a, a.return);
        break;
      case 12:
        Pr(e, a);
        break;
      case 13:
        Pr(e, a), l & 4 && Gm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = r2.bind(
          null,
          a
        ), S2(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || pr, !l) {
          n = n !== null && n.memoizedState !== null || vt, c = pr;
          var m = vt;
          pr = l, (vt = n) && !m ? Ir(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), pr = c, vt = m;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, a);
    }
  }
  function Fm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Fm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Iu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, Kt = !1;
  function mr(e, n, a) {
    for (a = a.child; a !== null; )
      Zm(e, n, a), a = a.sibling;
  }
  function Zm(e, n, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(tr, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        vt || Yn(a, n), mr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        vt || Yn(a, n);
        var l = st, c = Kt;
        Zr(a.type) && (st = a.stateNode, Kt = !1), mr(
          e,
          n,
          a
        ), Ts(a.stateNode), st = l, Kt = c;
        break;
      case 5:
        vt || Yn(a, n);
      case 6:
        if (l = st, c = Kt, st = null, mr(
          e,
          n,
          a
        ), st = l, Kt = c, st !== null)
          if (Kt)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(a.stateNode);
            } catch (m) {
              tt(
                a,
                n,
                m
              );
            }
          else
            try {
              st.removeChild(a.stateNode);
            } catch (m) {
              tt(
                a,
                n,
                m
              );
            }
        break;
      case 18:
        st !== null && (Kt ? (e = st, kg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), zs(e)) : kg(st, a.stateNode));
        break;
      case 4:
        l = st, c = Kt, st = a.stateNode.containerInfo, Kt = !0, mr(
          e,
          n,
          a
        ), st = l, Kt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || Lr(2, a, n), vt || Lr(4, a, n), mr(
          e,
          n,
          a
        );
        break;
      case 1:
        vt || (Yn(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && Pm(
          a,
          n,
          l
        )), mr(
          e,
          n,
          a
        );
        break;
      case 21:
        mr(
          e,
          n,
          a
        );
        break;
      case 22:
        vt = (l = vt) || a.memoizedState !== null, mr(
          e,
          n,
          a
        ), vt = l;
        break;
      default:
        mr(
          e,
          n,
          a
        );
    }
  }
  function Gm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zs(e);
      } catch (a) {
        tt(n, n.return, a);
      }
  }
  function $b(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Hm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Hm()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function lf(e, n) {
    var a = $b(e);
    n.forEach(function(l) {
      var c = a2.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function on(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], m = e, C = n, N = C;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 27:
              if (Zr(N.type)) {
                st = N.stateNode, Kt = !1;
                break e;
              }
              break;
            case 5:
              st = N.stateNode, Kt = !1;
              break e;
            case 3:
            case 4:
              st = N.stateNode.containerInfo, Kt = !0;
              break e;
          }
          N = N.return;
        }
        if (st === null) throw Error(s(160));
        Zm(m, C, c), st = null, Kt = !1, m = c.alternate, m !== null && (m.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Vm(n, e), n = n.sibling;
  }
  var zn = null;
  function Vm(e, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        on(n, e), un(e), l & 4 && (Lr(3, e, e.return), vs(3, e), Lr(5, e, e.return));
        break;
      case 1:
        on(n, e), un(e), l & 512 && (vt || a === null || Yn(a, a.return)), l & 64 && pr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = zn;
        if (on(n, e), un(e), l & 512 && (vt || a === null || Yn(a, a.return)), l & 4) {
          var m = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      m = c.getElementsByTagName("title")[0], (!m || m[qi] || m[Pt] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = c.createElement(l), c.head.insertBefore(
                        m,
                        c.querySelector("head > title")
                      )), jt(m, l, a), m[Pt] = e, Ot(m), l = m;
                      break e;
                    case "link":
                      var C = Ug(
                        "link",
                        "href",
                        c
                      ).get(l + (a.href || ""));
                      if (C) {
                        for (var N = 0; N < C.length; N++)
                          if (m = C[N], m.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && m.getAttribute("rel") === (a.rel == null ? null : a.rel) && m.getAttribute("title") === (a.title == null ? null : a.title) && m.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      m = c.createElement(l), jt(m, l, a), c.head.appendChild(m);
                      break;
                    case "meta":
                      if (C = Ug(
                        "meta",
                        "content",
                        c
                      ).get(l + (a.content || ""))) {
                        for (N = 0; N < C.length; N++)
                          if (m = C[N], m.getAttribute("content") === (a.content == null ? null : "" + a.content) && m.getAttribute("name") === (a.name == null ? null : a.name) && m.getAttribute("property") === (a.property == null ? null : a.property) && m.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && m.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            C.splice(N, 1);
                            break t;
                          }
                      }
                      m = c.createElement(l), jt(m, l, a), c.head.appendChild(m);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  m[Pt] = e, Ot(m), l = m;
                }
                e.stateNode = l;
              } else
                Hg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Bg(
                c,
                l,
                e.memoizedProps
              );
          else
            m !== l ? (m === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : m.count--, l === null ? Hg(
              c,
              e.type,
              e.stateNode
            ) : Bg(
              c,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && nf(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        on(n, e), un(e), l & 512 && (vt || a === null || Yn(a, a.return)), a !== null && l & 4 && nf(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (on(n, e), un(e), l & 512 && (vt || a === null || Yn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ya(c, "");
          } catch (Z) {
            tt(e, e.return, Z);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, nf(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), l & 1024 && (sf = !0);
        break;
      case 6:
        if (on(n, e), un(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (Z) {
            tt(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (po = null, c = zn, zn = fo(n.containerInfo), on(n, e), zn = c, un(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            zs(n.containerInfo);
          } catch (Z) {
            tt(e, e.return, Z);
          }
        sf && (sf = !1, Ym(e));
        break;
      case 4:
        l = zn, zn = fo(
          e.stateNode.containerInfo
        ), on(n, e), un(e), zn = l;
        break;
      case 12:
        on(n, e), un(e);
        break;
      case 13:
        on(n, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hf = ve()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, lf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = a !== null && a.memoizedState !== null, H = pr, X = vt;
        if (pr = H || c, vt = X || R, on(n, e), vt = X, pr = H, un(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || R || pr || vt || Sa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                R = a = n;
                try {
                  if (m = R.stateNode, c)
                    C = m.style, typeof C.setProperty == "function" ? C.setProperty("display", "none", "important") : C.display = "none";
                  else {
                    N = R.stateNode;
                    var J = R.memoizedProps.style, F = J != null && J.hasOwnProperty("display") ? J.display : null;
                    N.style.display = F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Z) {
                  tt(R, R.return, Z);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = c ? "" : R.memoizedProps;
                } catch (Z) {
                  tt(R, R.return, Z);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              a === n && (a = null), n = n.return;
            }
            a === n && (a = null), n.sibling.return = n.return, n = n.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, lf(e, a))));
        break;
      case 19:
        on(n, e), un(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, lf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        on(n, e), un(e);
    }
  }
  function un(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Bm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, m = rf(e);
            Jl(e, m, c);
            break;
          case 5:
            var C = a.stateNode;
            a.flags & 32 && (Ya(C, ""), a.flags &= -33);
            var N = rf(e);
            Jl(e, N, C);
            break;
          case 3:
          case 4:
            var R = a.stateNode.containerInfo, H = rf(e);
            af(
              e,
              H,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (X) {
        tt(e, e.return, X);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Ym(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Ym(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        qm(e, n.alternate, n), n = n.sibling;
  }
  function Sa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Lr(4, n, n.return), Sa(n);
          break;
        case 1:
          Yn(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Pm(
            n,
            n.return,
            a
          ), Sa(n);
          break;
        case 27:
          Ts(n.stateNode);
        case 26:
        case 5:
          Yn(n, n.return), Sa(n);
          break;
        case 22:
          n.memoizedState === null && Sa(n);
          break;
        case 30:
          Sa(n);
          break;
        default:
          Sa(n);
      }
      e = e.sibling;
    }
  }
  function Ir(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate, c = e, m = n, C = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            c,
            m,
            a
          ), vs(4, m);
          break;
        case 1:
          if (Ir(
            c,
            m,
            a
          ), l = m, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              tt(l, l.return, H);
            }
          if (l = m, c = l.updateQueue, c !== null) {
            var N = l.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  xp(R[c], N);
            } catch (H) {
              tt(l, l.return, H);
            }
          }
          a && C & 64 && Lm(m), ys(m, m.return);
          break;
        case 27:
          Um(m);
        case 26:
        case 5:
          Ir(
            c,
            m,
            a
          ), a && l === null && C & 4 && Im(m), ys(m, m.return);
          break;
        case 12:
          Ir(
            c,
            m,
            a
          );
          break;
        case 13:
          Ir(
            c,
            m,
            a
          ), a && C & 4 && Gm(c, m);
          break;
        case 22:
          m.memoizedState === null && Ir(
            c,
            m,
            a
          ), ys(m, m.return);
          break;
        case 30:
          break;
        default:
          Ir(
            c,
            m,
            a
          );
      }
      n = n.sibling;
    }
  }
  function of(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && rs(a));
  }
  function uf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e));
  }
  function Xn(e, n, a, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Xm(
          e,
          n,
          a,
          l
        ), n = n.sibling;
  }
  function Xm(e, n, a, l) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && vs(9, n);
        break;
      case 1:
        Xn(
          e,
          n,
          a,
          l
        );
        break;
      case 3:
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e)));
        break;
      case 12:
        if (c & 2048) {
          Xn(
            e,
            n,
            a,
            l
          ), e = n.stateNode;
          try {
            var m = n.memoizedProps, C = m.id, N = m.onPostCommit;
            typeof N == "function" && N(
              C,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (R) {
            tt(n, n.return, R);
          }
        } else
          Xn(
            e,
            n,
            a,
            l
          );
        break;
      case 13:
        Xn(
          e,
          n,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        m = n.stateNode, C = n.alternate, n.memoizedState !== null ? m._visibility & 2 ? Xn(
          e,
          n,
          a,
          l
        ) : bs(e, n) : m._visibility & 2 ? Xn(
          e,
          n,
          a,
          l
        ) : (m._visibility |= 2, di(
          e,
          n,
          a,
          l,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && of(C, n);
        break;
      case 24:
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && uf(n.alternate, n);
        break;
      default:
        Xn(
          e,
          n,
          a,
          l
        );
    }
  }
  function di(e, n, a, l, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var m = e, C = n, N = a, R = l, H = C.flags;
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          di(
            m,
            C,
            N,
            R,
            c
          ), vs(8, C);
          break;
        case 23:
          break;
        case 22:
          var X = C.stateNode;
          C.memoizedState !== null ? X._visibility & 2 ? di(
            m,
            C,
            N,
            R,
            c
          ) : bs(
            m,
            C
          ) : (X._visibility |= 2, di(
            m,
            C,
            N,
            R,
            c
          )), c && H & 2048 && of(
            C.alternate,
            C
          );
          break;
        case 24:
          di(
            m,
            C,
            N,
            R,
            c
          ), c && H & 2048 && uf(C.alternate, C);
          break;
        default:
          di(
            m,
            C,
            N,
            R,
            c
          );
      }
      n = n.sibling;
    }
  }
  function bs(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e, l = n, c = l.flags;
        switch (l.tag) {
          case 22:
            bs(a, l), c & 2048 && of(
              l.alternate,
              l
            );
            break;
          case 24:
            bs(a, l), c & 2048 && uf(l.alternate, l);
            break;
          default:
            bs(a, l);
        }
        n = n.sibling;
      }
  }
  var _s = 8192;
  function hi(e) {
    if (e.subtreeFlags & _s)
      for (e = e.child; e !== null; )
        $m(e), e = e.sibling;
  }
  function $m(e) {
    switch (e.tag) {
      case 26:
        hi(e), e.flags & _s && e.memoizedState !== null && j2(
          zn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        hi(e);
        break;
      case 3:
      case 4:
        var n = zn;
        zn = fo(e.stateNode.containerInfo), hi(e), zn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = _s, _s = 16777216, hi(e), _s = n) : hi(e));
        break;
      default:
        hi(e);
    }
  }
  function Qm(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Ss(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          Dt = l, Jm(
            l,
            e
          );
        }
      Qm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Km(e), e = e.sibling;
  }
  function Km(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ss(e), e.flags & 2048 && Lr(9, e, e.return);
        break;
      case 3:
        Ss(e);
        break;
      case 12:
        Ss(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Wl(e)) : Ss(e);
        break;
      default:
        Ss(e);
    }
  }
  function Wl(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          Dt = l, Jm(
            l,
            e
          );
        }
      Qm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, n, n.return), Wl(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Wl(n));
          break;
        default:
          Wl(n);
      }
      e = e.sibling;
    }
  }
  function Jm(e, n) {
    for (; Dt !== null; ) {
      var a = Dt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          rs(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Dt = l;
      else
        e: for (a = e; Dt !== null; ) {
          l = Dt;
          var c = l.sibling, m = l.return;
          if (Fm(l), l === a) {
            Dt = null;
            break e;
          }
          if (c !== null) {
            c.return = m, Dt = c;
            break e;
          }
          Dt = m;
        }
    }
  }
  var Qb = {
    getCacheForType: function(e) {
      var n = It(Ct), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, Kb = typeof WeakMap == "function" ? WeakMap : Map, $e = 0, nt = null, Ue = null, Ze = 0, Qe = 0, cn = null, Br = !1, pi = !1, cf = !1, gr = 0, ht = 0, Ur = 0, xa = 0, ff = 0, Tn = 0, mi = 0, xs = null, Jt = null, df = !1, hf = 0, eo = 1 / 0, to = null, Hr = null, Rt = 0, qr = null, gi = null, vi = 0, pf = 0, mf = null, Wm = null, Es = 0, gf = null;
  function fn() {
    if (($e & 2) !== 0 && Ze !== 0)
      return Ze & -Ze;
    if (U.T !== null) {
      var e = ai;
      return e !== 0 ? e : Ef();
    }
    return mh();
  }
  function eg() {
    Tn === 0 && (Tn = (Ze & 536870912) === 0 || Ye ? Ba() : 536870912);
    var e = An.current;
    return e !== null && (e.flags |= 32), Tn;
  }
  function dn(e, n, a) {
    (e === nt && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null) && (yi(e, 0), Fr(
      e,
      Ze,
      Tn,
      !1
    )), Hi(e, a), (($e & 2) === 0 || e !== nt) && (e === nt && (($e & 2) === 0 && (xa |= a), ht === 4 && Fr(
      e,
      Ze,
      Tn,
      !1
    )), $n(e));
  }
  function tg(e, n, a) {
    if (($e & 6) !== 0) throw Error(s(327));
    var l = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Yt(e, n), c = l ? e2(e, n) : bf(e, n, !0), m = l;
    do {
      if (c === 0) {
        pi && !l && Fr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, m && !Jb(a)) {
          c = bf(e, n, !1), m = !1;
          continue;
        }
        if (c === 2) {
          if (m = n, e.errorRecoveryDisabledLanes & m)
            var C = 0;
          else
            C = e.pendingLanes & -536870913, C = C !== 0 ? C : C & 536870912 ? 536870912 : 0;
          if (C !== 0) {
            n = C;
            e: {
              var N = e;
              c = xs;
              var R = N.current.memoizedState.isDehydrated;
              if (R && (yi(N, C).flags |= 256), C = bf(
                N,
                C,
                !1
              ), C !== 2) {
                if (cf && !R) {
                  N.errorRecoveryDisabledLanes |= m, xa |= m, c = 4;
                  break e;
                }
                m = Jt, Jt = c, m !== null && (Jt === null ? Jt = m : Jt.push.apply(
                  Jt,
                  m
                ));
              }
              c = C;
            }
            if (m = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          yi(e, 0), Fr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, m = c, m) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Fr(
                l,
                n,
                Tn,
                !Br
              );
              break e;
            case 2:
              Jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = hf + 300 - ve(), 10 < c)) {
            if (Fr(
              l,
              n,
              Tn,
              !Br
            ), Ft(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Dg(
              ng.bind(
                null,
                l,
                a,
                Jt,
                to,
                df,
                n,
                Tn,
                xa,
                mi,
                Br,
                m,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          ng(
            l,
            a,
            Jt,
            to,
            df,
            n,
            Tn,
            xa,
            mi,
            Br,
            m,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    $n(e);
  }
  function ng(e, n, a, l, c, m, C, N, R, H, X, J, F, Z) {
    if (e.timeoutHandle = -1, J = n.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (Ds = { stylesheets: null, count: 0, unsuspend: R2 }, $m(n), J = z2(), J !== null)) {
      e.cancelPendingCommit = J(
        ug.bind(
          null,
          e,
          n,
          m,
          a,
          l,
          c,
          C,
          N,
          R,
          X,
          1,
          F,
          Z
        )
      ), Fr(e, m, C, !H);
      return;
    }
    ug(
      e,
      n,
      m,
      a,
      l,
      c,
      C,
      N,
      R
    );
  }
  function Jb(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var c = a[l], m = c.getSnapshot;
          c = c.value;
          try {
            if (!sn(m(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = n.child, n.subtreeFlags & 16384 && a !== null)
        a.return = n, n = a;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Fr(e, n, a, l) {
    n &= ~ff, n &= ~xa, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var m = 31 - qt(c), C = 1 << m;
      l[m] = -1, c &= ~C;
    }
    a !== 0 && hh(e, a, n);
  }
  function no() {
    return ($e & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function vf() {
    if (Ue !== null) {
      if (Qe === 0)
        var e = Ue.return;
      else
        e = Ue, or = ga = null, Rc(e), ci = null, ps = 0, e = Ue;
      for (; e !== null; )
        zm(e.alternate, e), e = e.return;
      Ue = null;
    }
  }
  function yi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, g2(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), vf(), nt = e, Ue = a = ir(e.current, null), Ze = n, Qe = 0, cn = null, Br = !1, pi = Yt(e, n), cf = !1, mi = Tn = ff = xa = Ur = ht = 0, Jt = xs = null, df = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - qt(l), m = 1 << c;
        n |= e[c], l &= ~m;
      }
    return gr = n, Cl(), a;
  }
  function rg(e, n) {
    Pe = null, U.H = Fl, n === is || n === Rl ? (n = _p(), Qe = 3) : n === vp ? (n = _p(), Qe = 4) : Qe = n === Sm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, cn = n, Ue === null && (ht = 1, Xl(
      e,
      xn(n, e.current)
    ));
  }
  function ag() {
    var e = U.H;
    return U.H = Fl, e === null ? Fl : e;
  }
  function ig() {
    var e = U.A;
    return U.A = Qb, e;
  }
  function yf() {
    ht = 4, Br || (Ze & 4194048) !== Ze && An.current !== null || (pi = !0), (Ur & 134217727) === 0 && (xa & 134217727) === 0 || nt === null || Fr(
      nt,
      Ze,
      Tn,
      !1
    );
  }
  function bf(e, n, a) {
    var l = $e;
    $e |= 2;
    var c = ag(), m = ig();
    (nt !== e || Ze !== n) && (to = null, yi(e, n)), n = !1;
    var C = ht;
    e: do
      try {
        if (Qe !== 0 && Ue !== null) {
          var N = Ue, R = cn;
          switch (Qe) {
            case 8:
              vf(), C = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              An.current === null && (n = !0);
              var H = Qe;
              if (Qe = 0, cn = null, bi(e, N, R, H), a && pi) {
                C = 0;
                break e;
              }
              break;
            default:
              H = Qe, Qe = 0, cn = null, bi(e, N, R, H);
          }
        }
        Wb(), C = ht;
        break;
      } catch (X) {
        rg(e, X);
      }
    while (!0);
    return n && e.shellSuspendCounter++, or = ga = null, $e = l, U.H = c, U.A = m, Ue === null && (nt = null, Ze = 0, Cl()), C;
  }
  function Wb() {
    for (; Ue !== null; ) sg(Ue);
  }
  function e2(e, n) {
    var a = $e;
    $e |= 2;
    var l = ag(), c = ig();
    nt !== e || Ze !== n ? (to = null, eo = ve() + 500, yi(e, n)) : pi = Yt(
      e,
      n
    );
    e: do
      try {
        if (Qe !== 0 && Ue !== null) {
          n = Ue;
          var m = cn;
          t: switch (Qe) {
            case 1:
              Qe = 0, cn = null, bi(e, n, m, 1);
              break;
            case 2:
            case 9:
              if (yp(m)) {
                Qe = 0, cn = null, lg(n);
                break;
              }
              n = function() {
                Qe !== 2 && Qe !== 9 || nt !== e || (Qe = 7), $n(e);
              }, m.then(n, n);
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              yp(m) ? (Qe = 0, cn = null, lg(n)) : (Qe = 0, cn = null, bi(e, n, m, 7));
              break;
            case 5:
              var C = null;
              switch (Ue.tag) {
                case 26:
                  C = Ue.memoizedState;
                case 5:
                case 27:
                  var N = Ue;
                  if (!C || qg(C)) {
                    Qe = 0, cn = null;
                    var R = N.sibling;
                    if (R !== null) Ue = R;
                    else {
                      var H = N.return;
                      H !== null ? (Ue = H, ro(H)) : Ue = null;
                    }
                    break t;
                  }
              }
              Qe = 0, cn = null, bi(e, n, m, 5);
              break;
            case 6:
              Qe = 0, cn = null, bi(e, n, m, 6);
              break;
            case 8:
              vf(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        t2();
        break;
      } catch (X) {
        rg(e, X);
      }
    while (!0);
    return or = ga = null, U.H = l, U.A = c, $e = a, Ue !== null ? 0 : (nt = null, Ze = 0, Cl(), ht);
  }
  function t2() {
    for (; Ue !== null && !be(); )
      sg(Ue);
  }
  function sg(e) {
    var n = Rm(e.alternate, e, gr);
    e.memoizedProps = e.pendingProps, n === null ? ro(e) : Ue = n;
  }
  function lg(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Tm(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ze
        );
        break;
      case 11:
        n = Tm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ze
        );
        break;
      case 5:
        Rc(n);
      default:
        zm(a, n), n = Ue = op(n, gr), n = Rm(a, n, gr);
    }
    e.memoizedProps = e.pendingProps, n === null ? ro(e) : Ue = n;
  }
  function bi(e, n, a, l) {
    or = ga = null, Rc(n), ci = null, ps = 0;
    var c = n.return;
    try {
      if (Zb(
        e,
        c,
        n,
        a,
        Ze
      )) {
        ht = 1, Xl(
          e,
          xn(a, e.current)
        ), Ue = null;
        return;
      }
    } catch (m) {
      if (c !== null) throw Ue = c, m;
      ht = 1, Xl(
        e,
        xn(a, e.current)
      ), Ue = null;
      return;
    }
    n.flags & 32768 ? (Ye || l === 1 ? e = !0 : pi || (Ze & 536870912) !== 0 ? e = !1 : (Br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = An.current, l !== null && l.tag === 13 && (l.flags |= 16384))), og(n, e)) : ro(n);
  }
  function ro(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        og(
          n,
          Br
        );
        return;
      }
      e = n.return;
      var a = Vb(
        n.alternate,
        n,
        gr
      );
      if (a !== null) {
        Ue = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ue = n;
        return;
      }
      Ue = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function og(e, n) {
    do {
      var a = Yb(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ue = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        Ue = e;
        return;
      }
      Ue = e = a;
    } while (e !== null);
    ht = 6, Ue = null;
  }
  function ug(e, n, a, l, c, m, C, N, R) {
    e.cancelPendingCommit = null;
    do
      ao();
    while (Rt !== 0);
    if (($e & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (m = n.lanes | n.childLanes, m |= oc, R1(
        e,
        a,
        m,
        C,
        N,
        R
      ), e === nt && (Ue = nt = null, Ze = 0), gi = n, qr = e, vi = a, pf = m, mf = c, Wm = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, i2(he, function() {
        return pg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = U.T, U.T = null, c = te.p, te.p = 2, C = $e, $e |= 4;
        try {
          Xb(e, n, a);
        } finally {
          $e = C, te.p = c, U.T = l;
        }
      }
      Rt = 1, cg(), fg(), dg();
    }
  }
  function cg() {
    if (Rt === 1) {
      Rt = 0;
      var e = qr, n = gi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var l = te.p;
        te.p = 2;
        var c = $e;
        $e |= 4;
        try {
          Vm(n, e);
          var m = Mf, C = Jh(e.containerInfo), N = m.focusedElem, R = m.selectionRange;
          if (C !== N && N && N.ownerDocument && Kh(
            N.ownerDocument.documentElement,
            N
          )) {
            if (R !== null && rc(N)) {
              var H = R.start, X = R.end;
              if (X === void 0 && (X = H), "selectionStart" in N)
                N.selectionStart = H, N.selectionEnd = Math.min(
                  X,
                  N.value.length
                );
              else {
                var J = N.ownerDocument || document, F = J && J.defaultView || window;
                if (F.getSelection) {
                  var Z = F.getSelection(), we = N.textContent.length, xe = Math.min(R.start, we), We = R.end === void 0 ? xe : Math.min(R.end, we);
                  !Z.extend && xe > We && (C = We, We = xe, xe = C);
                  var L = Qh(
                    N,
                    xe
                  ), z = Qh(
                    N,
                    We
                  );
                  if (L && z && (Z.rangeCount !== 1 || Z.anchorNode !== L.node || Z.anchorOffset !== L.offset || Z.focusNode !== z.node || Z.focusOffset !== z.offset)) {
                    var I = J.createRange();
                    I.setStart(L.node, L.offset), Z.removeAllRanges(), xe > We ? (Z.addRange(I), Z.extend(z.node, z.offset)) : (I.setEnd(z.node, z.offset), Z.addRange(I));
                  }
                }
              }
            }
            for (J = [], Z = N; Z = Z.parentNode; )
              Z.nodeType === 1 && J.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof N.focus == "function" && N.focus(), N = 0; N < J.length; N++) {
              var Q = J[N];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          vo = !!Df, Mf = Df = null;
        } finally {
          $e = c, te.p = l, U.T = a;
        }
      }
      e.current = n, Rt = 2;
    }
  }
  function fg() {
    if (Rt === 2) {
      Rt = 0;
      var e = qr, n = gi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = U.T, U.T = null;
        var l = te.p;
        te.p = 2;
        var c = $e;
        $e |= 4;
        try {
          qm(e, n.alternate, n);
        } finally {
          $e = c, te.p = l, U.T = a;
        }
      }
      Rt = 3;
    }
  }
  function dg() {
    if (Rt === 4 || Rt === 3) {
      Rt = 0, Ce();
      var e = qr, n = gi, a = vi, l = Wm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Rt = 5 : (Rt = 0, gi = qr = null, hg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), Lu(a), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            tr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = U.T, c = te.p, te.p = 2, U.T = null;
        try {
          for (var m = e.onRecoverableError, C = 0; C < l.length; C++) {
            var N = l[C];
            m(N.value, {
              componentStack: N.stack
            });
          }
        } finally {
          U.T = n, te.p = c;
        }
      }
      (vi & 3) !== 0 && ao(), $n(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === gf ? Es++ : (Es = 0, gf = e) : Es = 0, Cs(0);
    }
  }
  function hg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, rs(n)));
  }
  function ao(e) {
    return cg(), fg(), dg(), pg();
  }
  function pg() {
    if (Rt !== 5) return !1;
    var e = qr, n = pf;
    pf = 0;
    var a = Lu(vi), l = U.T, c = te.p;
    try {
      te.p = 32 > a ? 32 : a, U.T = null, a = mf, mf = null;
      var m = qr, C = vi;
      if (Rt = 0, gi = qr = null, vi = 0, ($e & 6) !== 0) throw Error(s(331));
      var N = $e;
      if ($e |= 4, Km(m.current), Xm(
        m,
        m.current,
        C,
        a
      ), $e = N, Cs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(tr, m);
        } catch {
        }
      return !0;
    } finally {
      te.p = c, U.T = l, hg(e, n);
    }
  }
  function mg(e, n, a) {
    n = xn(a, n), n = Yc(e.stateNode, n, 2), e = kr(e, n, 2), e !== null && (Hi(e, 2), $n(e));
  }
  function tt(e, n, a) {
    if (e.tag === 3)
      mg(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          mg(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Hr === null || !Hr.has(l))) {
            e = xn(a, e), a = bm(2), l = kr(n, a, 2), l !== null && (_m(
              a,
              l,
              n,
              e
            ), Hi(l, 2), $n(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function _f(e, n, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Kb();
      var c = /* @__PURE__ */ new Set();
      l.set(n, c);
    } else
      c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c));
    c.has(a) || (cf = !0, c.add(a), e = n2.bind(null, e, n, a), n.then(e, e));
  }
  function n2(e, n, a) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, nt === e && (Ze & a) === a && (ht === 4 || ht === 3 && (Ze & 62914560) === Ze && 300 > ve() - hf ? ($e & 2) === 0 && yi(e, 0) : ff |= a, mi === Ze && (mi = 0)), $n(e);
  }
  function gg(e, n) {
    n === 0 && (n = dh()), e = ei(e, n), e !== null && (Hi(e, n), $n(e));
  }
  function r2(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), gg(e, a);
  }
  function a2(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(n), gg(e, a);
  }
  function i2(e, n) {
    return re(e, n);
  }
  var io = null, _i = null, Sf = !1, so = !1, xf = !1, Ea = 0;
  function $n(e) {
    e !== _i && e.next === null && (_i === null ? io = _i = e : _i = _i.next = e), so = !0, Sf || (Sf = !0, l2());
  }
  function Cs(e, n) {
    if (!xf && so) {
      xf = !0;
      do
        for (var a = !1, l = io; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var m = 0;
            else {
              var C = l.suspendedLanes, N = l.pingedLanes;
              m = (1 << 31 - qt(42 | e) + 1) - 1, m &= c & ~(C & ~N), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (a = !0, _g(l, m));
          } else
            m = Ze, m = Ft(
              l,
              l === nt ? m : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (m & 3) === 0 || Yt(l, m) || (a = !0, _g(l, m));
          l = l.next;
        }
      while (a);
      xf = !1;
    }
  }
  function s2() {
    vg();
  }
  function vg() {
    so = Sf = !1;
    var e = 0;
    Ea !== 0 && (m2() && (e = Ea), Ea = 0);
    for (var n = ve(), a = null, l = io; l !== null; ) {
      var c = l.next, m = yg(l, n);
      m === 0 ? (l.next = null, a === null ? io = c : a.next = c, c === null && (_i = a)) : (a = l, (e !== 0 || (m & 3) !== 0) && (so = !0)), l = c;
    }
    Cs(e);
  }
  function yg(e, n) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
      var C = 31 - qt(m), N = 1 << C, R = c[C];
      R === -1 ? ((N & a) === 0 || (N & l) !== 0) && (c[C] = dl(N, n)) : R <= n && (e.expiredLanes |= N), m &= ~N;
    }
    if (n = nt, a = Ze, a = Ft(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === n && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && ne(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Yt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (l !== null && ne(l), Lu(a)) {
        case 2:
        case 8:
          a = de;
          break;
        case 32:
          a = he;
          break;
        case 268435456:
          a = Re;
          break;
        default:
          a = he;
      }
      return l = bg.bind(null, e), a = re(a, l), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return l !== null && l !== null && ne(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function bg(e, n) {
    if (Rt !== 0 && Rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (ao() && e.callbackNode !== a)
      return null;
    var l = Ze;
    return l = Ft(
      e,
      e === nt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (tg(e, l, n), yg(e, ve()), e.callbackNode != null && e.callbackNode === a ? bg.bind(null, e) : null);
  }
  function _g(e, n) {
    if (ao()) return null;
    tg(e, n, !0);
  }
  function l2() {
    v2(function() {
      ($e & 6) !== 0 ? re(
        Xe,
        s2
      ) : vg();
    });
  }
  function Ef() {
    return Ea === 0 && (Ea = Ba()), Ea;
  }
  function Sg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vl("" + e);
  }
  function xg(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function o2(e, n, a, l, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var m = Sg(
        (c[Xt] || null).action
      ), C = l.submitter;
      C && (n = (n = C[Xt] || null) ? Sg(n.formAction) : C.getAttribute("formAction"), n !== null && (m = n, C = null));
      var N = new Sl(
        "action",
        "action",
        null,
        l,
        c
      );
      e.push({
        event: N,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ea !== 0) {
                  var R = C ? xg(c, C) : new FormData(c);
                  qc(
                    a,
                    {
                      pending: !0,
                      data: R,
                      method: c.method,
                      action: m
                    },
                    null,
                    R
                  );
                }
              } else
                typeof m == "function" && (N.preventDefault(), R = C ? xg(c, C) : new FormData(c), qc(
                  a,
                  {
                    pending: !0,
                    data: R,
                    method: c.method,
                    action: m
                  },
                  m,
                  R
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Cf = 0; Cf < lc.length; Cf++) {
    var wf = lc[Cf], u2 = wf.toLowerCase(), c2 = wf[0].toUpperCase() + wf.slice(1);
    jn(
      u2,
      "on" + c2
    );
  }
  jn(tp, "onAnimationEnd"), jn(np, "onAnimationIteration"), jn(rp, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(Tb, "onTransitionRun"), jn(Ob, "onTransitionStart"), jn(Nb, "onTransitionCancel"), jn(ap, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), la(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), la(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), la("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), la(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), f2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ws)
  );
  function Eg(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], c = l.event;
      l = l.listeners;
      e: {
        var m = void 0;
        if (n)
          for (var C = l.length - 1; 0 <= C; C--) {
            var N = l[C], R = N.instance, H = N.currentTarget;
            if (N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = H;
            try {
              m(c);
            } catch (X) {
              Yl(X);
            }
            c.currentTarget = null, m = R;
          }
        else
          for (C = 0; C < l.length; C++) {
            if (N = l[C], R = N.instance, H = N.currentTarget, N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = H;
            try {
              m(c);
            } catch (X) {
              Yl(X);
            }
            c.currentTarget = null, m = R;
          }
      }
    }
  }
  function He(e, n) {
    var a = n[Pu];
    a === void 0 && (a = n[Pu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Cg(n, e, 2, !1), a.add(l));
  }
  function Af(e, n, a) {
    var l = 0;
    n && (l |= 4), Cg(
      a,
      e,
      l,
      n
    );
  }
  var lo = "_reactListening" + Math.random().toString(36).slice(2);
  function Tf(e) {
    if (!e[lo]) {
      e[lo] = !0, vh.forEach(function(a) {
        a !== "selectionchange" && (f2.has(a) || Af(a, !1, e), Af(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[lo] || (n[lo] = !0, Af("selectionchange", !1, n));
    }
  }
  function Cg(e, n, a, l) {
    switch (Xg(n)) {
      case 2:
        var c = I2;
        break;
      case 8:
        c = B2;
        break;
      default:
        c = Hf;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Xu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Of(e, n, a, l, c) {
    var m = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var C = l.tag;
        if (C === 3 || C === 4) {
          var N = l.stateNode.containerInfo;
          if (N === c) break;
          if (C === 4)
            for (C = l.return; C !== null; ) {
              var R = C.tag;
              if ((R === 3 || R === 4) && C.stateNode.containerInfo === c)
                return;
              C = C.return;
            }
          for (; N !== null; ) {
            if (C = Ha(N), C === null) return;
            if (R = C.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              l = m = C;
              continue e;
            }
            N = N.parentNode;
          }
        }
        l = l.return;
      }
    Mh(function() {
      var H = m, X = Vu(a), J = [];
      e: {
        var F = ip.get(e);
        if (F !== void 0) {
          var Z = Sl, we = e;
          switch (e) {
            case "keypress":
              if (bl(a) === 0) break e;
            case "keydown":
            case "keyup":
              Z = ib;
              break;
            case "focusin":
              we = "focus", Z = Ju;
              break;
            case "focusout":
              we = "blur", Z = Ju;
              break;
            case "beforeblur":
            case "afterblur":
              Z = Ju;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = jh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Y1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = ob;
              break;
            case tp:
            case np:
            case rp:
              Z = Q1;
              break;
            case ap:
              Z = cb;
              break;
            case "scroll":
            case "scrollend":
              Z = G1;
              break;
            case "wheel":
              Z = db;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = J1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Lh;
              break;
            case "toggle":
            case "beforetoggle":
              Z = pb;
          }
          var xe = (n & 4) !== 0, We = !xe && (e === "scroll" || e === "scrollend"), L = xe ? F !== null ? F + "Capture" : null : F;
          xe = [];
          for (var z = H, I; z !== null; ) {
            var Q = z;
            if (I = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || I === null || L === null || (Q = Zi(z, L), Q != null && xe.push(
              As(z, Q, I)
            )), We) break;
            z = z.return;
          }
          0 < xe.length && (F = new Z(
            F,
            we,
            null,
            a,
            X
          ), J.push({ event: F, listeners: xe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", F && a !== Gu && (we = a.relatedTarget || a.fromElement) && (Ha(we) || we[Ua]))
            break e;
          if ((Z || F) && (F = X.window === X ? X : (F = X.ownerDocument) ? F.defaultView || F.parentWindow : window, Z ? (we = a.relatedTarget || a.toElement, Z = H, we = we ? Ha(we) : null, we !== null && (We = u(we), xe = we.tag, we !== We || xe !== 5 && xe !== 27 && xe !== 6) && (we = null)) : (Z = null, we = H), Z !== we)) {
            if (xe = jh, Q = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (xe = Lh, Q = "onPointerLeave", L = "onPointerEnter", z = "pointer"), We = Z == null ? F : Fi(Z), I = we == null ? F : Fi(we), F = new xe(
              Q,
              z + "leave",
              Z,
              a,
              X
            ), F.target = We, F.relatedTarget = I, Q = null, Ha(X) === H && (xe = new xe(
              L,
              z + "enter",
              we,
              a,
              X
            ), xe.target = I, xe.relatedTarget = We, Q = xe), We = Q, Z && we)
              t: {
                for (xe = Z, L = we, z = 0, I = xe; I; I = Si(I))
                  z++;
                for (I = 0, Q = L; Q; Q = Si(Q))
                  I++;
                for (; 0 < z - I; )
                  xe = Si(xe), z--;
                for (; 0 < I - z; )
                  L = Si(L), I--;
                for (; z--; ) {
                  if (xe === L || L !== null && xe === L.alternate)
                    break t;
                  xe = Si(xe), L = Si(L);
                }
                xe = null;
              }
            else xe = null;
            Z !== null && wg(
              J,
              F,
              Z,
              xe,
              !1
            ), we !== null && We !== null && wg(
              J,
              We,
              we,
              xe,
              !0
            );
          }
        }
        e: {
          if (F = H ? Fi(H) : window, Z = F.nodeName && F.nodeName.toLowerCase(), Z === "select" || Z === "input" && F.type === "file")
            var ce = Zh;
          else if (qh(F))
            if (Gh)
              ce = Cb;
            else {
              ce = xb;
              var Be = Sb;
            }
          else
            Z = F.nodeName, !Z || Z.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? H && Zu(H.elementType) && (ce = Zh) : ce = Eb;
          if (ce && (ce = ce(e, H))) {
            Fh(
              J,
              ce,
              a,
              X
            );
            break e;
          }
          Be && Be(e, F, H), e === "focusout" && H && F.type === "number" && H.memoizedProps.value != null && Fu(F, "number", F.value);
        }
        switch (Be = H ? Fi(H) : window, e) {
          case "focusin":
            (qh(Be) || Be.contentEditable === "true") && (Ka = Be, ac = H, Ji = null);
            break;
          case "focusout":
            Ji = ac = Ka = null;
            break;
          case "mousedown":
            ic = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ic = !1, Wh(J, a, X);
            break;
          case "selectionchange":
            if (Ab) break;
          case "keydown":
          case "keyup":
            Wh(J, a, X);
        }
        var pe;
        if (ec)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          Qa ? Uh(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Ph && a.locale !== "ko" && (Qa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Qa && (pe = kh()) : (Or = X, $u = "value" in Or ? Or.value : Or.textContent, Qa = !0)), Be = oo(H, Ee), 0 < Be.length && (Ee = new zh(
          Ee,
          e,
          null,
          a,
          X
        ), J.push({ event: Ee, listeners: Be }), pe ? Ee.data = pe : (pe = Hh(a), pe !== null && (Ee.data = pe)))), (pe = gb ? vb(e, a) : yb(e, a)) && (Ee = oo(H, "onBeforeInput"), 0 < Ee.length && (Be = new zh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          X
        ), J.push({
          event: Be,
          listeners: Ee
        }), Be.data = pe)), o2(
          J,
          e,
          H,
          a,
          X
        );
      }
      Eg(J, n);
    });
  }
  function As(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function oo(e, n) {
    for (var a = n + "Capture", l = []; e !== null; ) {
      var c = e, m = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || m === null || (c = Zi(e, a), c != null && l.unshift(
        As(e, c, m)
      ), c = Zi(e, n), c != null && l.push(
        As(e, c, m)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Si(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function wg(e, n, a, l, c) {
    for (var m = n._reactName, C = []; a !== null && a !== l; ) {
      var N = a, R = N.alternate, H = N.stateNode;
      if (N = N.tag, R !== null && R === l) break;
      N !== 5 && N !== 26 && N !== 27 || H === null || (R = H, c ? (H = Zi(a, m), H != null && C.unshift(
        As(a, H, R)
      )) : c || (H = Zi(a, m), H != null && C.push(
        As(a, H, R)
      ))), a = a.return;
    }
    C.length !== 0 && e.push({ event: n, listeners: C });
  }
  var d2 = /\r\n?/g, h2 = /\u0000|\uFFFD/g;
  function Ag(e) {
    return (typeof e == "string" ? e : "" + e).replace(d2, `
`).replace(h2, "");
  }
  function Tg(e, n) {
    return n = Ag(n), Ag(e) === n;
  }
  function uo() {
  }
  function Je(e, n, a, l, c, m) {
    switch (a) {
      case "children":
        typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Ya(e, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Ya(e, "" + l);
        break;
      case "className":
        pl(e, "class", l);
        break;
      case "tabIndex":
        pl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pl(e, a, l);
        break;
      case "style":
        Nh(e, l, m);
        break;
      case "data":
        if (n !== "object") {
          pl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = vl("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof m == "function" && (a === "formAction" ? (n !== "input" && Je(e, n, "name", c.name, c, null), Je(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Je(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Je(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Je(e, n, "encType", c.encType, c, null), Je(e, n, "method", c.method, c, null), Je(e, n, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = vl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = uo);
        break;
      case "onScroll":
        l != null && He("scroll", e);
        break;
      case "onScrollEnd":
        l != null && He("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = vl("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        He("beforetoggle", e), He("toggle", e), hl(e, "popover", l);
        break;
      case "xlinkActuate":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        hl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = F1.get(a) || a, hl(e, a, l));
    }
  }
  function Nf(e, n, a, l, c, m) {
    switch (a) {
      case "style":
        Nh(e, l, m);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Ya(e, l) : (typeof l == "number" || typeof l == "bigint") && Ya(e, "" + l);
        break;
      case "onScroll":
        l != null && He("scroll", e);
        break;
      case "onScrollEnd":
        l != null && He("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = uo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!yh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), m = e[Xt] || null, m = m != null ? m[a] : null, typeof m == "function" && e.removeEventListener(n, m, c), typeof l == "function")) {
              typeof m != "function" && m !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, l, c);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : hl(e, a, l);
          }
    }
  }
  function jt(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        He("error", e), He("load", e);
        var l = !1, c = !1, m;
        for (m in a)
          if (a.hasOwnProperty(m)) {
            var C = a[m];
            if (C != null)
              switch (m) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  Je(e, n, m, C, a, null);
              }
          }
        c && Je(e, n, "srcSet", a.srcSet, a, null), l && Je(e, n, "src", a.src, a, null);
        return;
      case "input":
        He("invalid", e);
        var N = m = C = c = null, R = null, H = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var X = a[l];
            if (X != null)
              switch (l) {
                case "name":
                  c = X;
                  break;
                case "type":
                  C = X;
                  break;
                case "checked":
                  R = X;
                  break;
                case "defaultChecked":
                  H = X;
                  break;
                case "value":
                  m = X;
                  break;
                case "defaultValue":
                  N = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(s(137, n));
                  break;
                default:
                  Je(e, n, l, X, a, null);
              }
          }
        wh(
          e,
          m,
          N,
          R,
          H,
          C,
          c,
          !1
        ), ml(e);
        return;
      case "select":
        He("invalid", e), l = C = m = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (N = a[c], N != null))
            switch (c) {
              case "value":
                m = N;
                break;
              case "defaultValue":
                C = N;
                break;
              case "multiple":
                l = N;
              default:
                Je(e, n, c, N, a, null);
            }
        n = m, a = C, e.multiple = !!l, n != null ? Va(e, !!l, n, !1) : a != null && Va(e, !!l, a, !0);
        return;
      case "textarea":
        He("invalid", e), m = c = l = null;
        for (C in a)
          if (a.hasOwnProperty(C) && (N = a[C], N != null))
            switch (C) {
              case "value":
                l = N;
                break;
              case "defaultValue":
                c = N;
                break;
              case "children":
                m = N;
                break;
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(91));
                break;
              default:
                Je(e, n, C, N, a, null);
            }
        Th(e, l, c, m), ml(e);
        return;
      case "option":
        for (R in a)
          if (a.hasOwnProperty(R) && (l = a[R], l != null))
            switch (R) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Je(e, n, R, l, a, null);
            }
        return;
      case "dialog":
        He("beforetoggle", e), He("toggle", e), He("cancel", e), He("close", e);
        break;
      case "iframe":
      case "object":
        He("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ws.length; l++)
          He(ws[l], e);
        break;
      case "image":
        He("error", e), He("load", e);
        break;
      case "details":
        He("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        He("error", e), He("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (H in a)
          if (a.hasOwnProperty(H) && (l = a[H], l != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                Je(e, n, H, l, a, null);
            }
        return;
      default:
        if (Zu(n)) {
          for (X in a)
            a.hasOwnProperty(X) && (l = a[X], l !== void 0 && Nf(
              e,
              n,
              X,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (N in a)
      a.hasOwnProperty(N) && (l = a[N], l != null && Je(e, n, N, l, a, null));
  }
  function p2(e, n, a, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, m = null, C = null, N = null, R = null, H = null, X = null;
        for (Z in a) {
          var J = a[Z];
          if (a.hasOwnProperty(Z) && J != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = J;
              default:
                l.hasOwnProperty(Z) || Je(e, n, Z, null, l, J);
            }
        }
        for (var F in l) {
          var Z = l[F];
          if (J = a[F], l.hasOwnProperty(F) && (Z != null || J != null))
            switch (F) {
              case "type":
                m = Z;
                break;
              case "name":
                c = Z;
                break;
              case "checked":
                H = Z;
                break;
              case "defaultChecked":
                X = Z;
                break;
              case "value":
                C = Z;
                break;
              case "defaultValue":
                N = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                Z !== J && Je(
                  e,
                  n,
                  F,
                  Z,
                  l,
                  J
                );
            }
        }
        qu(
          e,
          C,
          N,
          R,
          H,
          X,
          m,
          c
        );
        return;
      case "select":
        Z = C = N = F = null;
        for (m in a)
          if (R = a[m], a.hasOwnProperty(m) && R != null)
            switch (m) {
              case "value":
                break;
              case "multiple":
                Z = R;
              default:
                l.hasOwnProperty(m) || Je(
                  e,
                  n,
                  m,
                  null,
                  l,
                  R
                );
            }
        for (c in l)
          if (m = l[c], R = a[c], l.hasOwnProperty(c) && (m != null || R != null))
            switch (c) {
              case "value":
                F = m;
                break;
              case "defaultValue":
                N = m;
                break;
              case "multiple":
                C = m;
              default:
                m !== R && Je(
                  e,
                  n,
                  c,
                  m,
                  l,
                  R
                );
            }
        n = N, a = C, l = Z, F != null ? Va(e, !!a, F, !1) : !!l != !!a && (n != null ? Va(e, !!a, n, !0) : Va(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        Z = F = null;
        for (N in a)
          if (c = a[N], a.hasOwnProperty(N) && c != null && !l.hasOwnProperty(N))
            switch (N) {
              case "value":
                break;
              case "children":
                break;
              default:
                Je(e, n, N, null, l, c);
            }
        for (C in l)
          if (c = l[C], m = a[C], l.hasOwnProperty(C) && (c != null || m != null))
            switch (C) {
              case "value":
                F = c;
                break;
              case "defaultValue":
                Z = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== m && Je(e, n, C, c, l, m);
            }
        Ah(e, F, Z);
        return;
      case "option":
        for (var we in a)
          if (F = a[we], a.hasOwnProperty(we) && F != null && !l.hasOwnProperty(we))
            switch (we) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Je(
                  e,
                  n,
                  we,
                  null,
                  l,
                  F
                );
            }
        for (R in l)
          if (F = l[R], Z = a[R], l.hasOwnProperty(R) && F !== Z && (F != null || Z != null))
            switch (R) {
              case "selected":
                e.selected = F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                Je(
                  e,
                  n,
                  R,
                  F,
                  l,
                  Z
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var xe in a)
          F = a[xe], a.hasOwnProperty(xe) && F != null && !l.hasOwnProperty(xe) && Je(e, n, xe, null, l, F);
        for (H in l)
          if (F = l[H], Z = a[H], l.hasOwnProperty(H) && F !== Z && (F != null || Z != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                Je(
                  e,
                  n,
                  H,
                  F,
                  l,
                  Z
                );
            }
        return;
      default:
        if (Zu(n)) {
          for (var We in a)
            F = a[We], a.hasOwnProperty(We) && F !== void 0 && !l.hasOwnProperty(We) && Nf(
              e,
              n,
              We,
              void 0,
              l,
              F
            );
          for (X in l)
            F = l[X], Z = a[X], !l.hasOwnProperty(X) || F === Z || F === void 0 && Z === void 0 || Nf(
              e,
              n,
              X,
              F,
              l,
              Z
            );
          return;
        }
    }
    for (var L in a)
      F = a[L], a.hasOwnProperty(L) && F != null && !l.hasOwnProperty(L) && Je(e, n, L, null, l, F);
    for (J in l)
      F = l[J], Z = a[J], !l.hasOwnProperty(J) || F === Z || F == null && Z == null || Je(e, n, J, F, l, Z);
  }
  var Df = null, Mf = null;
  function co(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Og(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ng(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function kf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Rf = null;
  function m2() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Rf ? !1 : (Rf = e, !0) : (Rf = null, !1);
  }
  var Dg = typeof setTimeout == "function" ? setTimeout : void 0, g2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Mg = typeof Promise == "function" ? Promise : void 0, v2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mg < "u" ? function(e) {
    return Mg.resolve(null).then(e).catch(y2);
  } : Dg;
  function y2(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function kg(e, n) {
    var a = n, l = 0, c = 0;
    do {
      var m = a.nextSibling;
      if (e.removeChild(a), m && m.nodeType === 8)
        if (a = m.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var C = e.ownerDocument;
            if (a & 1 && Ts(C.documentElement), a & 2 && Ts(C.body), a & 4)
              for (a = C.head, Ts(a), C = a.firstChild; C; ) {
                var N = C.nextSibling, R = C.nodeName;
                C[qi] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && C.rel.toLowerCase() === "stylesheet" || a.removeChild(C), C = N;
              }
          }
          if (c === 0) {
            e.removeChild(m), zs(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = m;
    } while (a);
    zs(n);
  }
  function jf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jf(a), Iu(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function b2(e, n, a, l) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[qi])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (m = e.getAttribute("rel"), m === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (m !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (m = e.getAttribute("src"), (m !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && m && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var m = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === m)
          return e;
      } else return e;
      if (e = Ln(e.nextSibling), e === null) break;
    }
    return null;
  }
  function _2(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Ln(e.nextSibling), e === null)) return null;
    return e;
  }
  function zf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function S2(e, n) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      n();
    else {
      var l = function() {
        n(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Ln(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var Lf = null;
  function Rg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function jg(e, n, a) {
    switch (n = co(a), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Ts(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Iu(e);
  }
  var On = /* @__PURE__ */ new Map(), zg = /* @__PURE__ */ new Set();
  function fo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vr = te.d;
  te.d = {
    f: x2,
    r: E2,
    D: C2,
    C: w2,
    L: A2,
    m: T2,
    X: N2,
    S: O2,
    M: D2
  };
  function x2() {
    var e = vr.f(), n = no();
    return e || n;
  }
  function E2(e) {
    var n = qa(e);
    n !== null && n.tag === 5 && n.type === "form" ? tm(n) : vr.r(e);
  }
  var xi = typeof document > "u" ? null : document;
  function Lg(e, n, a) {
    var l = xi;
    if (l && typeof n == "string" && n) {
      var c = Sn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), zg.has(c) || (zg.add(c), e = { rel: e, crossOrigin: a, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), jt(n, "link", e), Ot(n), l.head.appendChild(n)));
    }
  }
  function C2(e) {
    vr.D(e), Lg("dns-prefetch", e, null);
  }
  function w2(e, n) {
    vr.C(e, n), Lg("preconnect", e, n);
  }
  function A2(e, n, a) {
    vr.L(e, n, a);
    var l = xi;
    if (l && e && n) {
      var c = 'link[rel="preload"][as="' + Sn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + Sn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + Sn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + Sn(e) + '"]';
      var m = c;
      switch (n) {
        case "style":
          m = Ei(e);
          break;
        case "script":
          m = Ci(e);
      }
      On.has(m) || (e = y(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), On.set(m, e), l.querySelector(c) !== null || n === "style" && l.querySelector(Os(m)) || n === "script" && l.querySelector(Ns(m)) || (n = l.createElement("link"), jt(n, "link", e), Ot(n), l.head.appendChild(n)));
    }
  }
  function T2(e, n) {
    vr.m(e, n);
    var a = xi;
    if (a && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + Sn(l) + '"][href="' + Sn(e) + '"]', m = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = Ci(e);
      }
      if (!On.has(m) && (e = y({ rel: "modulepreload", href: e }, n), On.set(m, e), a.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ns(m)))
              return;
        }
        l = a.createElement("link"), jt(l, "link", e), Ot(l), a.head.appendChild(l);
      }
    }
  }
  function O2(e, n, a) {
    vr.S(e, n, a);
    var l = xi;
    if (l && e) {
      var c = Fa(l).hoistableStyles, m = Ei(e);
      n = n || "default";
      var C = c.get(m);
      if (!C) {
        var N = { loading: 0, preload: null };
        if (C = l.querySelector(
          Os(m)
        ))
          N.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = On.get(m)) && Pf(e, a);
          var R = C = l.createElement("link");
          Ot(R), jt(R, "link", e), R._p = new Promise(function(H, X) {
            R.onload = H, R.onerror = X;
          }), R.addEventListener("load", function() {
            N.loading |= 1;
          }), R.addEventListener("error", function() {
            N.loading |= 2;
          }), N.loading |= 4, ho(C, n, l);
        }
        C = {
          type: "stylesheet",
          instance: C,
          count: 1,
          state: N
        }, c.set(m, C);
      }
    }
  }
  function N2(e, n) {
    vr.X(e, n);
    var a = xi;
    if (a && e) {
      var l = Fa(a).hoistableScripts, c = Ci(e), m = l.get(c);
      m || (m = a.querySelector(Ns(c)), m || (e = y({ src: e, async: !0 }, n), (n = On.get(c)) && If(e, n), m = a.createElement("script"), Ot(m), jt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function D2(e, n) {
    vr.M(e, n);
    var a = xi;
    if (a && e) {
      var l = Fa(a).hoistableScripts, c = Ci(e), m = l.get(c);
      m || (m = a.querySelector(Ns(c)), m || (e = y({ src: e, async: !0, type: "module" }, n), (n = On.get(c)) && If(e, n), m = a.createElement("script"), Ot(m), jt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function Pg(e, n, a, l) {
    var c = (c = Y.current) ? fo(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ei(a.href), a = Fa(
          c
        ).hoistableStyles, l = a.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ei(a.href);
          var m = Fa(
            c
          ).hoistableStyles, C = m.get(e);
          if (C || (c = c.ownerDocument || c, C = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(e, C), (m = c.querySelector(
            Os(e)
          )) && !m._p && (C.instance = m, C.state.loading = 5), On.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, On.set(e, a), m || M2(
            c,
            e,
            a,
            C.state
          ))), n && l === null)
            throw Error(s(528, ""));
          return C;
        }
        if (n && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ci(a), a = Fa(
          c
        ).hoistableScripts, l = a.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Ei(e) {
    return 'href="' + Sn(e) + '"';
  }
  function Os(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ig(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function M2(e, n, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = e.createElement("link"), l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    }), jt(n, "link", a), Ot(n), e.head.appendChild(n));
  }
  function Ci(e) {
    return '[src="' + Sn(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function Bg(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Sn(a.href) + '"]'
          );
          if (l)
            return n.instance = l, Ot(l), l;
          var c = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Ot(l), jt(l, "style", c), ho(l, a.precedence, e), n.instance = l;
        case "stylesheet":
          c = Ei(a.href);
          var m = e.querySelector(
            Os(c)
          );
          if (m)
            return n.state.loading |= 4, n.instance = m, Ot(m), m;
          l = Ig(a), (c = On.get(c)) && Pf(l, c), m = (e.ownerDocument || e).createElement("link"), Ot(m);
          var C = m;
          return C._p = new Promise(function(N, R) {
            C.onload = N, C.onerror = R;
          }), jt(m, "link", l), n.state.loading |= 4, ho(m, a.precedence, e), n.instance = m;
        case "script":
          return m = Ci(a.src), (c = e.querySelector(
            Ns(m)
          )) ? (n.instance = c, Ot(c), c) : (l = a, (c = On.get(m)) && (l = y({}, a), If(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Ot(c), jt(c, "link", l), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, ho(l, a.precedence, e));
    return n.instance;
  }
  function ho(e, n, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = l.length ? l[l.length - 1] : null, m = c, C = 0; C < l.length; C++) {
      var N = l[C];
      if (N.dataset.precedence === n) m = N;
      else if (m !== c) break;
    }
    m ? m.parentNode.insertBefore(e, m.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Pf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function If(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var po = null;
  function Ug(e, n, a) {
    if (po === null) {
      var l = /* @__PURE__ */ new Map(), c = po = /* @__PURE__ */ new Map();
      c.set(a, l);
    } else
      c = po, l = c.get(a), l || (l = /* @__PURE__ */ new Map(), c.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var m = a[c];
      if (!(m[qi] || m[Pt] || e === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var C = m.getAttribute(n) || "";
        C = e + C;
        var N = l.get(C);
        N ? N.push(m) : l.set(C, [m]);
      }
    }
    return l;
  }
  function Hg(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function k2(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function qg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ds = null;
  function R2() {
  }
  function j2(e, n, a) {
    if (Ds === null) throw Error(s(475));
    var l = Ds;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ei(a.href), m = e.querySelector(
          Os(c)
        );
        if (m) {
          e = m._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = mo.bind(l), e.then(l, l)), n.state.loading |= 4, n.instance = m, Ot(m);
          return;
        }
        m = e.ownerDocument || e, a = Ig(a), (c = On.get(c)) && Pf(a, c), m = m.createElement("link"), Ot(m);
        var C = m;
        C._p = new Promise(function(N, R) {
          C.onload = N, C.onerror = R;
        }), jt(m, "link", a), n.instance = m;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++, n = mo.bind(l), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function z2() {
    if (Ds === null) throw Error(s(475));
    var e = Ds;
    return e.stylesheets && e.count === 0 && Bf(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Bf(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function mo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Bf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var go = null;
  function Bf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, go = /* @__PURE__ */ new Map(), n.forEach(L2, e), go = null, mo.call(e));
  }
  function L2(e, n) {
    if (!(n.state.loading & 4)) {
      var a = go.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), go.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < c.length; m++) {
          var C = c[m];
          (C.nodeName === "LINK" || C.getAttribute("media") !== "not all") && (a.set(C.dataset.precedence, C), l = C);
        }
        l && a.set(null, l);
      }
      c = n.instance, C = c.getAttribute("data-precedence"), m = a.get(C) || l, m === l && a.set(null, c), a.set(C, c), this.count++, l = mo.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), m ? m.parentNode.insertBefore(c, m.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ms = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function P2(e, n, a, l, c, m, C, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ju(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ju(0), this.hiddenUpdates = ju(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = m, this.onRecoverableError = C, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fg(e, n, a, l, c, m, C, N, R, H, X, J) {
    return e = new P2(
      e,
      n,
      a,
      C,
      N,
      R,
      H,
      J
    ), n = 1, m === !0 && (n |= 24), m = ln(3, null, null, n), e.current = m, m.stateNode = e, n = bc(), n.refCount++, e.pooledCache = n, n.refCount++, m.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: n
    }, Ec(m), e;
  }
  function Zg(e) {
    return e ? (e = ti, e) : ti;
  }
  function Gg(e, n, a, l, c, m) {
    c = Zg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Mr(n), l.payload = { element: a }, m = m === void 0 ? null : m, m !== null && (l.callback = m), a = kr(e, l, n), a !== null && (dn(a, e, n), ls(a, e, n));
  }
  function Vg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Uf(e, n) {
    Vg(e, n), (e = e.alternate) && Vg(e, n);
  }
  function Yg(e) {
    if (e.tag === 13) {
      var n = ei(e, 67108864);
      n !== null && dn(n, e, 67108864), Uf(e, 67108864);
    }
  }
  var vo = !0;
  function I2(e, n, a, l) {
    var c = U.T;
    U.T = null;
    var m = te.p;
    try {
      te.p = 2, Hf(e, n, a, l);
    } finally {
      te.p = m, U.T = c;
    }
  }
  function B2(e, n, a, l) {
    var c = U.T;
    U.T = null;
    var m = te.p;
    try {
      te.p = 8, Hf(e, n, a, l);
    } finally {
      te.p = m, U.T = c;
    }
  }
  function Hf(e, n, a, l) {
    if (vo) {
      var c = qf(l);
      if (c === null)
        Of(
          e,
          n,
          l,
          yo,
          a
        ), $g(e, l);
      else if (H2(
        c,
        e,
        n,
        a,
        l
      ))
        l.stopPropagation();
      else if ($g(e, l), n & 4 && -1 < U2.indexOf(e)) {
        for (; c !== null; ) {
          var m = qa(c);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var C = bn(m.pendingLanes);
                  if (C !== 0) {
                    var N = m;
                    for (N.pendingLanes |= 2, N.entangledLanes |= 2; C; ) {
                      var R = 1 << 31 - qt(C);
                      N.entanglements[1] |= R, C &= ~R;
                    }
                    $n(m), ($e & 6) === 0 && (eo = ve() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                N = ei(m, 2), N !== null && dn(N, m, 2), no(), Uf(m, 2);
            }
          if (m = qf(l), m === null && Of(
            e,
            n,
            l,
            yo,
            a
          ), m === c) break;
          c = m;
        }
        c !== null && l.stopPropagation();
      } else
        Of(
          e,
          n,
          l,
          null,
          a
        );
    }
  }
  function qf(e) {
    return e = Vu(e), Ff(e);
  }
  var yo = null;
  function Ff(e) {
    if (yo = null, e = Ha(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (e = d(n), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return yo = e, null;
  }
  function Xg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Me()) {
          case Xe:
            return 2;
          case de:
            return 8;
          case he:
          case De:
            return 32;
          case Re:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zf = !1, Gr = null, Vr = null, Yr = null, ks = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new Map(), Xr = [], U2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function $g(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Vr = null;
        break;
      case "mouseover":
      case "mouseout":
        Yr = null;
        break;
      case "pointerover":
      case "pointerout":
        ks.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rs.delete(n.pointerId);
    }
  }
  function js(e, n, a, l, c, m) {
    return e === null || e.nativeEvent !== m ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: m,
      targetContainers: [c]
    }, n !== null && (n = qa(n), n !== null && Yg(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function H2(e, n, a, l, c) {
    switch (n) {
      case "focusin":
        return Gr = js(
          Gr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "dragenter":
        return Vr = js(
          Vr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "mouseover":
        return Yr = js(
          Yr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "pointerover":
        var m = c.pointerId;
        return ks.set(
          m,
          js(
            ks.get(m) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return m = c.pointerId, Rs.set(
          m,
          js(
            Rs.get(m) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
    }
    return !1;
  }
  function Qg(e) {
    var n = Ha(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = d(a), n !== null) {
            e.blockedOn = n, j1(e.priority, function() {
              if (a.tag === 13) {
                var l = fn();
                l = zu(l);
                var c = ei(a, l);
                c !== null && dn(c, a, l), Uf(a, l);
              }
            });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function bo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = qf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Gu = l, a.target.dispatchEvent(l), Gu = null;
      } else
        return n = qa(a), n !== null && Yg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function Kg(e, n, a) {
    bo(e) && a.delete(n);
  }
  function q2() {
    Zf = !1, Gr !== null && bo(Gr) && (Gr = null), Vr !== null && bo(Vr) && (Vr = null), Yr !== null && bo(Yr) && (Yr = null), ks.forEach(Kg), Rs.forEach(Kg);
  }
  function _o(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Zf || (Zf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      q2
    )));
  }
  var So = null;
  function Jg(e) {
    So !== e && (So = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        So === e && (So = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], l = e[n + 1], c = e[n + 2];
          if (typeof l != "function") {
            if (Ff(l || a) === null)
              continue;
            break;
          }
          var m = qa(a);
          m !== null && (e.splice(n, 3), n -= 3, qc(
            m,
            {
              pending: !0,
              data: c,
              method: a.method,
              action: l
            },
            l,
            c
          ));
        }
      }
    ));
  }
  function zs(e) {
    function n(R) {
      return _o(R, e);
    }
    Gr !== null && _o(Gr, e), Vr !== null && _o(Vr, e), Yr !== null && _o(Yr, e), ks.forEach(n), Rs.forEach(n);
    for (var a = 0; a < Xr.length; a++) {
      var l = Xr[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Xr.length && (a = Xr[0], a.blockedOn === null); )
      Qg(a), a.blockedOn === null && Xr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], m = a[l + 1], C = c[Xt] || null;
        if (typeof m == "function")
          C || Jg(a);
        else if (C) {
          var N = null;
          if (m && m.hasAttribute("formAction")) {
            if (c = m, C = m[Xt] || null)
              N = C.formAction;
            else if (Ff(c) !== null) continue;
          } else N = C.action;
          typeof N == "function" ? a[l + 1] = N : (a.splice(l, 3), l -= 3), Jg(a);
        }
      }
  }
  function Gf(e) {
    this._internalRoot = e;
  }
  xo.prototype.render = Gf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, l = fn();
    Gg(a, l, e, n, null, null);
  }, xo.prototype.unmount = Gf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Gg(e.current, 2, null, e, null, null), no(), n[Ua] = null;
    }
  };
  function xo(e) {
    this._internalRoot = e;
  }
  xo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = mh();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < Xr.length && n !== 0 && n < Xr[a].priority; a++) ;
      Xr.splice(a, 0, e), a === 0 && Qg(e);
    }
  };
  var Wg = r.version;
  if (Wg !== "19.1.1")
    throw Error(
      s(
        527,
        Wg,
        "19.1.1"
      )
    );
  te.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var F2 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Eo.isDisabled && Eo.supportsFiber)
      try {
        tr = Eo.inject(
          F2
        ), mt = Eo;
      } catch {
      }
  }
  return Bs.createRoot = function(e, n) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = mm, m = gm, C = vm, N = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (C = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (N = n.unstable_transitionCallbacks)), n = Fg(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      c,
      m,
      C,
      N,
      null
    ), e[Ua] = n.current, Tf(e), new Gf(n);
  }, Bs.hydrateRoot = function(e, n, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", m = mm, C = gm, N = vm, R = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (m = a.onUncaughtError), a.onCaughtError !== void 0 && (C = a.onCaughtError), a.onRecoverableError !== void 0 && (N = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (R = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), n = Fg(
      e,
      1,
      !0,
      n,
      a ?? null,
      l,
      c,
      m,
      C,
      N,
      R,
      H
    ), n.context = Zg(null), a = n.current, l = fn(), l = zu(l), c = Mr(l), c.callback = null, kr(a, c, l), a = l, n.current.lanes = a, Hi(n, a), $n(n), e[Ua] = n.current, Tf(e), new xo(n);
  }, Bs.version = "19.1.1", Bs;
}
var pv;
function b_() {
  if (pv) return $f.exports;
  pv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), $f.exports = y_(), $f.exports;
}
var __ = b_();
const mv = /* @__PURE__ */ n0(__);
var S_ = Object.defineProperty, x_ = (t, r, i) => r in t ? S_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, E_ = (t, r, i) => x_(t, r + "", i);
class a0 extends Error {
  constructor(r, i) {
    super(r), E_(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function C_(t, r) {
  const i = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(t)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const o = i.getRequestHeaders();
  delete o["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: o,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new a0(u.statusText, u);
  await i.getCharacters();
}
async function w_(t, r) {
  var i;
  const s = SillyTavern.getContext();
  if (!t.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  t == null || delete t.json_data, (i = t?.data) == null || delete i.json_data;
  const o = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: o,
    body: JSON.stringify(t),
    cache: "no-cache"
  });
  if (!u.ok) {
    const d = await u.json().catch(() => ({ message: u.statusText }));
    throw new a0(d.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var A_ = Object.defineProperty, T_ = (t, r, i) => r in t ? A_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, gv = (t, r, i) => T_(t, typeof r != "symbol" ? r + "" : r, i);
class i0 {
  constructor(r, i) {
    gv(this, "settingsKey"), gv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(r = {}) {
    const { strategy: i = "recursive" } = r, s = this.defaultSettings.version, o = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], d = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: o ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!u)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), d;
    const p = {
      ...d,
      oldSettings: structuredClone(u),
      version: {
        changed: !1,
        old: u.version,
        new: u.version
      },
      formatVersion: {
        changed: !1,
        old: u.formatVersion,
        new: u.formatVersion
      }
    };
    if (i === "recursive") {
      let h = function(g, y) {
        let _ = !1;
        for (const b of Object.keys(y))
          g[b] === void 0 ? (g[b] = y[b], _ = !0) : typeof y[b] == "object" && y[b] !== null && (g[b] = g[b] || {}, h(g[b], y[b]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let h = structuredClone(u), g = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let _ = i.find((b) => b.from === g);
          if (_ && _.to > g)
            h = await _.action(h), g = _.to, h.formatVersion = _.to, y = !0;
          else
            for (const b of i)
              if (b.from === "*" && b.to > g && g !== b.to) {
                h = await b.action(h), g = b.to, h.formatVersion = b.to, y = !0;
                break;
              }
        } while (y);
        if (g !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const _ = this.defaultSettings.version;
          _ && (h.version = _);
        }
        if (p.formatVersion.changed) {
          for (const _ of Object.keys(u))
            delete u[_];
          Object.assign(u, h), this.saveSettings();
        }
      } catch (y) {
        throw console.error("Failed to apply version changes:", y), new Error(`Version migration failed: ${y instanceof Error ? y.message : y}`, {
          cause: y
        });
      }
    }
    return p.newSettings = u, p;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, i) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = i, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function Er(t) {
  return Array.isArray ? Array.isArray(t) : o0(t) === "[object Array]";
}
function O_(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function N_(t) {
  return t == null ? "" : O_(t);
}
function Jn(t) {
  return typeof t == "string";
}
function s0(t) {
  return typeof t == "number";
}
function D_(t) {
  return t === !0 || t === !1 || M_(t) && o0(t) == "[object Boolean]";
}
function l0(t) {
  return typeof t == "object";
}
function M_(t) {
  return l0(t) && t !== null;
}
function gn(t) {
  return t != null;
}
function Wf(t) {
  return !t.trim().length;
}
function o0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const k_ = "Incorrect 'index' type", R_ = (t) => `Invalid value for key ${t}`, j_ = (t) => `Pattern length exceeds max of ${t}.`, z_ = (t) => `Missing ${t} property in key`, L_ = (t) => `Property 'weight' in key '${t}' must be a positive integer`, vv = Object.prototype.hasOwnProperty;
class P_ {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = u0(s);
      this._keys.push(o), this._keyMap[o.id] = o, i += o.weight;
    }), this._keys.forEach((s) => {
      s.weight /= i;
    });
  }
  get(r) {
    return this._keyMap[r];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function u0(t) {
  let r = null, i = null, s = null, o = 1, u = null;
  if (Jn(t) || Er(t))
    s = t, r = yv(t), i = Ed(t);
  else {
    if (!vv.call(t, "name"))
      throw new Error(z_("name"));
    const d = t.name;
    if (s = d, vv.call(t, "weight") && (o = t.weight, o <= 0))
      throw new Error(L_(d));
    r = yv(d), i = Ed(d), u = t.getFn;
  }
  return { path: r, id: i, weight: o, src: s, getFn: u };
}
function yv(t) {
  return Er(t) ? t : t.split(".");
}
function Ed(t) {
  return Er(t) ? t.join(".") : t;
}
function I_(t, r) {
  let i = [], s = !1;
  const o = (u, d, p) => {
    if (gn(u))
      if (!d[p])
        i.push(u);
      else {
        let h = d[p];
        const g = u[h];
        if (!gn(g))
          return;
        if (p === d.length - 1 && (Jn(g) || s0(g) || D_(g)))
          i.push(N_(g));
        else if (Er(g)) {
          s = !0;
          for (let y = 0, _ = g.length; y < _; y += 1)
            o(g[y], d, p + 1);
        } else d.length && o(g, d, p + 1);
      }
  };
  return o(t, Jn(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const B_ = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, U_ = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (t, r) => t.score === r.score ? t.idx < r.idx ? -1 : 1 : t.score < r.score ? -1 : 1
}, H_ = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, q_ = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: I_,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Ne = {
  ...U_,
  ...B_,
  ...H_,
  ...q_
};
const F_ = /[^ ]+/g;
function Z_(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(F_).length;
      if (i.has(u))
        return i.get(u);
      const d = 1 / Math.pow(u, 0.5 * t), p = parseFloat(Math.round(d * s) / s);
      return i.set(u, p), p;
    },
    clear() {
      i.clear();
    }
  };
}
class Qd {
  constructor({
    getFn: r = Ne.getFn,
    fieldNormWeight: i = Ne.fieldNormWeight
  } = {}) {
    this.norm = Z_(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((i, s) => {
      this._keysMap[i.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Jn(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    Jn(r) ? this._addString(r, i) : this._addObject(r, i);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let i = r, s = this.size(); i < s; i += 1)
      this.records[i].i -= 1;
  }
  getValueForItemAtKeyId(r, i) {
    return r[this._keysMap[i]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, i) {
    if (!gn(r) || Wf(r))
      return;
    let s = {
      v: r,
      i,
      n: this.norm.get(r)
    };
    this.records.push(s);
  }
  _addObject(r, i) {
    let s = { i, $: {} };
    this.keys.forEach((o, u) => {
      let d = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (gn(d)) {
        if (Er(d)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: d }];
          for (; h.length; ) {
            const { nestedArrIndex: g, value: y } = h.pop();
            if (gn(y))
              if (Jn(y) && !Wf(y)) {
                let _ = {
                  v: y,
                  i: g,
                  n: this.norm.get(y)
                };
                p.push(_);
              } else Er(y) && y.forEach((_, b) => {
                h.push({
                  nestedArrIndex: b,
                  value: _
                });
              });
          }
          s.$[u] = p;
        } else if (Jn(d) && !Wf(d)) {
          let p = {
            v: d,
            n: this.norm.get(d)
          };
          s.$[u] = p;
        }
      }
    }), this.records.push(s);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function c0(t, r, { getFn: i = Ne.getFn, fieldNormWeight: s = Ne.fieldNormWeight } = {}) {
  const o = new Qd({ getFn: i, fieldNormWeight: s });
  return o.setKeys(t.map(u0)), o.setSources(r), o.create(), o;
}
function G_(t, { getFn: r = Ne.getFn, fieldNormWeight: i = Ne.fieldNormWeight } = {}) {
  const { keys: s, records: o } = t, u = new Qd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function Co(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = Ne.distance,
  ignoreLocation: u = Ne.ignoreLocation
} = {}) {
  const d = r / t.length;
  if (u)
    return d;
  const p = Math.abs(s - i);
  return o ? d + p / o : p ? 1 : d;
}
function V_(t = [], r = Ne.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let d = t.length; u < d; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Da = 32;
function Y_(t, r, i, {
  location: s = Ne.location,
  distance: o = Ne.distance,
  threshold: u = Ne.threshold,
  findAllMatches: d = Ne.findAllMatches,
  minMatchCharLength: p = Ne.minMatchCharLength,
  includeMatches: h = Ne.includeMatches,
  ignoreLocation: g = Ne.ignoreLocation
} = {}) {
  if (r.length > Da)
    throw new Error(j_(Da));
  const y = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let v = u, f = b;
  const S = p > 1 || h, E = S ? Array(_) : [];
  let O;
  for (; (O = t.indexOf(r, f)) > -1; ) {
    let k = Co(r, {
      currentLocation: O,
      expectedLocation: b,
      distance: o,
      ignoreLocation: g
    });
    if (v = Math.min(k, v), f = O + y, S) {
      let q = 0;
      for (; q < y; )
        E[O + q] = 1, q += 1;
    }
  }
  f = -1;
  let w = [], D = 1, x = y + _;
  const T = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let q = 0, G = x;
    for (; q < G; )
      Co(r, {
        errors: k,
        currentLocation: b + G,
        expectedLocation: b,
        distance: o,
        ignoreLocation: g
      }) <= v ? q = G : x = G, G = Math.floor((x - q) / 2 + q);
    x = G;
    let B = Math.max(1, b - G + 1), V = d ? _ : Math.min(b + G, _) + y, $ = Array(V + 2);
    $[V + 1] = (1 << k) - 1;
    for (let fe = V; fe >= B; fe -= 1) {
      let me = fe - 1, U = i[t.charAt(me)];
      if (S && (E[me] = +!!U), $[fe] = ($[fe + 1] << 1 | 1) & U, k && ($[fe] |= (w[fe + 1] | w[fe]) << 1 | 1 | w[fe + 1]), $[fe] & T && (D = Co(r, {
        errors: k,
        currentLocation: me,
        expectedLocation: b,
        distance: o,
        ignoreLocation: g
      }), D <= v)) {
        if (v = D, f = me, f <= b)
          break;
        B = Math.max(1, 2 * b - f);
      }
    }
    if (Co(r, {
      errors: k + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: o,
      ignoreLocation: g
    }) > v)
      break;
    w = $;
  }
  const M = {
    isMatch: f >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (S) {
    const k = V_(E, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function X_(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const o = t.charAt(i);
    r[o] = (r[o] || 0) | 1 << s - i - 1;
  }
  return r;
}
const mu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class f0 {
  constructor(r, {
    location: i = Ne.location,
    threshold: s = Ne.threshold,
    distance: o = Ne.distance,
    includeMatches: u = Ne.includeMatches,
    findAllMatches: d = Ne.findAllMatches,
    minMatchCharLength: p = Ne.minMatchCharLength,
    isCaseSensitive: h = Ne.isCaseSensitive,
    ignoreDiacritics: g = Ne.ignoreDiacritics,
    ignoreLocation: y = Ne.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: d,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: y
    }, r = h ? r : r.toLowerCase(), r = g ? mu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (v, f) => {
      this.chunks.push({
        pattern: v,
        alphabet: X_(v),
        startIndex: f
      });
    }, b = this.pattern.length;
    if (b > Da) {
      let v = 0;
      const f = b % Da, S = b - f;
      for (; v < S; )
        _(this.pattern.substr(v, Da), v), v += Da;
      if (f) {
        const E = b - Da;
        _(this.pattern.substr(E), E);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? mu(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return o && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: u,
      distance: d,
      threshold: p,
      findAllMatches: h,
      minMatchCharLength: g,
      ignoreLocation: y
    } = this.options;
    let _ = [], b = 0, v = !1;
    this.chunks.forEach(({ pattern: S, alphabet: E, startIndex: O }) => {
      const { isMatch: w, score: D, indices: x } = Y_(r, S, E, {
        location: u + O,
        distance: d,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: g,
        includeMatches: o,
        ignoreLocation: y
      });
      w && (v = !0), b += D, w && x && (_ = [..._, ...x]);
    });
    let f = {
      isMatch: v,
      score: v ? b / this.chunks.length : 1
    };
    return v && o && (f.indices = _), f;
  }
}
class na {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return bv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return bv(r, this.singleRegex);
  }
  search() {
  }
}
function bv(t, r) {
  const i = t.match(r);
  return i ? i[1] : null;
}
class $_ extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(r) {
    const i = r === this.pattern;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Q_ extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(r) {
    const s = r.indexOf(this.pattern) === -1;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class K_ extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(r) {
    const i = r.startsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class J_ extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(r) {
    const i = !r.startsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class W_ extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(r) {
    const i = r.endsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class eS extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(r) {
    const i = !r.endsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class d0 extends na {
  constructor(r, {
    location: i = Ne.location,
    threshold: s = Ne.threshold,
    distance: o = Ne.distance,
    includeMatches: u = Ne.includeMatches,
    findAllMatches: d = Ne.findAllMatches,
    minMatchCharLength: p = Ne.minMatchCharLength,
    isCaseSensitive: h = Ne.isCaseSensitive,
    ignoreDiacritics: g = Ne.ignoreDiacritics,
    ignoreLocation: y = Ne.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new f0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: d,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: y
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(r) {
    return this._bitapSearch.searchIn(r);
  }
}
class h0 extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(r) {
    let i = 0, s;
    const o = [], u = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, i)) > -1; )
      i = s + u, o.push([s, i - 1]);
    const d = !!o.length;
    return {
      isMatch: d,
      score: d ? 0 : 1,
      indices: o
    };
  }
}
const Cd = [
  $_,
  h0,
  K_,
  J_,
  eS,
  W_,
  Q_,
  d0
], _v = Cd.length, tS = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, nS = "|";
function rS(t, r = {}) {
  return t.split(nS).map((i) => {
    let s = i.trim().split(tS).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, d = s.length; u < d; u += 1) {
      const p = s[u];
      let h = !1, g = -1;
      for (; !h && ++g < _v; ) {
        const y = Cd[g];
        let _ = y.isMultiMatch(p);
        _ && (o.push(new y(_, r)), h = !0);
      }
      if (!h)
        for (g = -1; ++g < _v; ) {
          const y = Cd[g];
          let _ = y.isSingleMatch(p);
          if (_) {
            o.push(new y(_, r));
            break;
          }
        }
    }
    return o;
  });
}
const aS = /* @__PURE__ */ new Set([d0.type, h0.type]);
class iS {
  constructor(r, {
    isCaseSensitive: i = Ne.isCaseSensitive,
    ignoreDiacritics: s = Ne.ignoreDiacritics,
    includeMatches: o = Ne.includeMatches,
    minMatchCharLength: u = Ne.minMatchCharLength,
    ignoreLocation: d = Ne.ignoreLocation,
    findAllMatches: p = Ne.findAllMatches,
    location: h = Ne.location,
    threshold: g = Ne.threshold,
    distance: y = Ne.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: d,
      location: h,
      threshold: g,
      distance: y
    }, r = i ? r : r.toLowerCase(), r = s ? mu(r) : r, this.pattern = r, this.query = rS(this.pattern, this.options);
  }
  static condition(r, i) {
    return i.useExtendedSearch;
  }
  searchIn(r) {
    const i = this.query;
    if (!i)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: s, isCaseSensitive: o, ignoreDiacritics: u } = this.options;
    r = o ? r : r.toLowerCase(), r = u ? mu(r) : r;
    let d = 0, p = [], h = 0;
    for (let g = 0, y = i.length; g < y; g += 1) {
      const _ = i[g];
      p.length = 0, d = 0;
      for (let b = 0, v = _.length; b < v; b += 1) {
        const f = _[b], { isMatch: S, indices: E, score: O } = f.search(r);
        if (S) {
          if (d += 1, h += O, s) {
            const w = f.constructor.type;
            aS.has(w) ? p = [...p, ...E] : p.push(E);
          }
        } else {
          h = 0, d = 0, p.length = 0;
          break;
        }
      }
      if (d) {
        let b = {
          isMatch: !0,
          score: h / d
        };
        return s && (b.indices = p), b;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const wd = [];
function sS(...t) {
  wd.push(...t);
}
function Ad(t, r) {
  for (let i = 0, s = wd.length; i < s; i += 1) {
    let o = wd[i];
    if (o.condition(t, r))
      return new o(t, r);
  }
  return new f0(t, r);
}
const gu = {
  AND: "$and",
  OR: "$or"
}, Td = {
  PATH: "$path",
  PATTERN: "$val"
}, Od = (t) => !!(t[gu.AND] || t[gu.OR]), lS = (t) => !!t[Td.PATH], oS = (t) => !Er(t) && l0(t) && !Od(t), Sv = (t) => ({
  [gu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function p0(t, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const d = lS(o);
    if (!d && u.length > 1 && !Od(o))
      return s(Sv(o));
    if (oS(o)) {
      const h = d ? o[Td.PATH] : u[0], g = d ? o[Td.PATTERN] : o[h];
      if (!Jn(g))
        throw new Error(R_(h));
      const y = {
        keyId: Ed(h),
        pattern: g
      };
      return i && (y.searcher = Ad(g, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const g = o[h];
      Er(g) && g.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return Od(t) || (t = Sv(t)), s(t);
}
function uS(t, { ignoreFieldNorm: r = Ne.ignoreFieldNorm }) {
  t.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: o, norm: u, score: d }) => {
      const p = o ? o.weight : null;
      s *= Math.pow(
        d === 0 && p ? Number.EPSILON : d,
        (p || 1) * (r ? 1 : u)
      );
    }), i.score = s;
  });
}
function cS(t, r) {
  const i = t.matches;
  r.matches = [], gn(i) && i.forEach((s) => {
    if (!gn(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: u } = s;
    let d = {
      indices: o,
      value: u
    };
    s.key && (d.key = s.key.src), s.idx > -1 && (d.refIndex = s.idx), r.matches.push(d);
  });
}
function fS(t, r) {
  r.score = t.score;
}
function dS(t, r, {
  includeMatches: i = Ne.includeMatches,
  includeScore: s = Ne.includeScore
} = {}) {
  const o = [];
  return i && o.push(cS), s && o.push(fS), t.map((u) => {
    const { idx: d } = u, p = {
      item: r[d],
      refIndex: d
    };
    return o.length && o.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Bi {
  constructor(r, i = {}, s) {
    this.options = { ...Ne, ...i }, this.options.useExtendedSearch, this._keyStore = new P_(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Qd))
      throw new Error(k_);
    this._myIndex = i || c0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    gn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const i = [];
    for (let s = 0, o = this._docs.length; s < o; s += 1) {
      const u = this._docs[s];
      r(u, s) && (this.removeAt(s), s -= 1, o -= 1, i.push(u));
    }
    return i;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: i = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: o,
      shouldSort: u,
      sortFn: d,
      ignoreFieldNorm: p
    } = this.options;
    let h = Jn(r) ? Jn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return uS(h, { ignoreFieldNorm: p }), u && h.sort(d), s0(i) && i > -1 && (h = h.slice(0, i)), dS(h, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = Ad(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: d, n: p }) => {
      if (!gn(u))
        return;
      const { isMatch: h, score: g, indices: y } = i.searchIn(u);
      h && o.push({
        item: u,
        idx: d,
        matches: [{ score: g, value: u, norm: p, indices: y }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = p0(r, this.options), s = (p, h, g) => {
      if (!p.children) {
        const { keyId: _, searcher: b } = p, v = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: b
        });
        return v && v.length ? [
          {
            idx: g,
            item: h,
            matches: v
          }
        ] : [];
      }
      const y = [];
      for (let _ = 0, b = p.children.length; _ < b; _ += 1) {
        const v = p.children[_], f = s(v, h, g);
        if (f.length)
          y.push(...f);
        else if (p.operator === gu.AND)
          return [];
      }
      return y;
    }, o = this._myIndex.records, u = {}, d = [];
    return o.forEach(({ $: p, i: h }) => {
      if (gn(p)) {
        let g = s(i, p, h);
        g.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, d.push(u[h])), g.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), d;
  }
  _searchObjectList(r) {
    const i = Ad(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: d, i: p }) => {
      if (!gn(d))
        return;
      let h = [];
      s.forEach((g, y) => {
        h.push(
          ...this._findMatches({
            key: g,
            value: d[y],
            searcher: i
          })
        );
      }), h.length && u.push({
        idx: p,
        item: d,
        matches: h
      });
    }), u;
  }
  _findMatches({ key: r, value: i, searcher: s }) {
    if (!gn(i))
      return [];
    let o = [];
    if (Er(i))
      i.forEach(({ v: u, i: d, n: p }) => {
        if (!gn(u))
          return;
        const { isMatch: h, score: g, indices: y } = s.searchIn(u);
        h && o.push({
          score: g,
          key: r,
          value: u,
          idx: d,
          norm: p,
          indices: y
        });
      });
    else {
      const { v: u, n: d } = i, { isMatch: p, score: h, indices: g } = s.searchIn(u);
      p && o.push({ score: h, key: r, value: u, norm: d, indices: g });
    }
    return o;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = c0;
Bi.parseIndex = G_;
Bi.config = Ne;
Bi.parseQuery = p0;
sS(iS);
var hS = Object.defineProperty, pS = (t, r, i) => r in t ? hS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, mS = (t, r, i) => pS(t, r + "", i);
let gS = class {
  constructor() {
    mS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var i;
    const s = this.requestMap.get(r);
    if (s) {
      if (s.abortController)
        try {
          s.abortController.abort();
        } catch {
        }
      (i = s.options) != null && i.onFinish && await s.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, i) {
    var s;
    const o = SillyTavern.getContext(), u = o.uuidv4(), d = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: i?.abortController,
      isStream: d,
      options: i
    }), d)
      try {
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        i != null && i.onStart && await i.onStart(u);
        let h;
        for await (const g of p())
          h = g, i != null && i.onEntry && await i.onEntry(u, g);
        i != null && i.onFinish && await i.onFinish(u, h);
      } catch (p) {
        i != null && i.onFinish && await i.onFinish(u, void 0, p);
      } finally {
        this.requestMap.delete(u);
      }
    else
      try {
        i != null && i.onStart && await i.onStart(u);
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(u) && (i != null && i.onEntry && await i.onEntry(u, p), i != null && i.onFinish && await i.onFinish(u, p));
      } catch (p) {
        i != null && i.onFinish && await i.onFinish(u, void 0, p);
      } finally {
        this.requestMap.delete(u);
      }
    return u;
  }
  getActiveRequest(r) {
    var i;
    return (i = this.requestMap.get(r)) == null ? void 0 : i.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [i, s] of this.requestMap)
      r.set(i, s.abortController);
    return r;
  }
};
async function vS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function Oe(t, r, { escapeHtml: i = !0 } = {}) {
  await vS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function ed(t) {
  return X2(t);
}
function xv(t, r) {
  return V2(t, r);
}
function wo(t, r, i) {
  return Y2(t, r, i);
}
function yS(t, r, i) {
  return e_(t, r, i);
}
function bS(t, r) {
  return t_(t, r);
}
function _S(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return G2(t, { customStoryString: r, customInstructSettings: i });
}
function wa(t) {
  return l_(t);
}
function SS() {
  return {
    prompt: Ls[Ps.prompt],
    interval: Ls[Ps.interval],
    position: Ls[Ps.position],
    depth: Ls[Ps.depth],
    role: Ls[Ps.role]
  };
}
function xS(t, r) {
  return u_(t, r);
}
function ES({
  name2: t,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: o,
  worldInfoAfter: u,
  bias: d,
  type: p,
  quietPrompt: h,
  quietImage: g,
  extensionPrompts: y,
  cyclePrompt: _,
  systemPromptOverride: b,
  jailbreakPromptOverride: v,
  personaDescription: f,
  messages: S,
  messageExamples: E
}, O) {
  return o_(
    {
      name2: t,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: o,
      worldInfoAfter: u,
      bias: d,
      type: p,
      quietPrompt: h,
      quietImage: g,
      cyclePrompt: _,
      systemPromptOverride: b,
      jailbreakPromptOverride: v,
      personaDescription: f,
      extensionPrompts: y,
      messages: S,
      messageExamples: E
    },
    O
  );
}
function CS(t) {
  return r_(t);
}
function wS(t) {
  return a_(t);
}
function AS(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: d
}) {
  return c_(t, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: u, depth: d });
}
async function TS(t, r) {
  return await n_(t, r);
}
function Ev(t, {
  wiFormat: r
} = {}) {
  return i_(t, { wiFormat: r });
}
function Us(t) {
  return s_(t);
}
function OS(t, r) {
  return K2(t, r);
}
class NS {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const i = Math.ceil(r.length / 4);
    return new Array(i).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var DS = Object.defineProperty, MS = (t, r, i) => r in t ? DS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, Ao = (t, r, i) => MS(t, typeof r != "symbol" ? r + "" : r, i);
class kS {
  constructor(r) {
    Ao(this, "messages", []), Ao(this, "tokenizer"), Ao(this, "maxContext"), Ao(this, "currentTokenCount", 0), this.tokenizer = new NS(), this.maxContext = r;
  }
  getTokenCount(r) {
    var i, s;
    return r.content ? ((s = (i = r.source) == null ? void 0 : i.extra) == null ? void 0 : s.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const i = this.getTokenCount(r);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += i, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const i = this.getTokenCount(r);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += i, !0);
  }
  addMany(r) {
    const i = r.filter((p) => p.content), s = i.map((p) => this.getTokenCount(p)), o = s.reduce((p, h) => p + h, 0);
    if (this.currentTokenCount + o <= this.maxContext)
      return this.messages.push(...i), this.currentTokenCount += o, !0;
    let u = 0;
    const d = [];
    for (let p = i.length - 1; p >= 0; p--) {
      const h = i[p], g = s[p];
      if (this.currentTokenCount + u + g <= this.maxContext)
        d.unshift(h), u += g;
      else
        break;
    }
    return d.length > 0 && (this.messages.push(...d), this.currentTokenCount += u), d.length === i.length;
  }
  insert(r, i) {
    if (!i.content) return !0;
    const s = this.getTokenCount(i);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.splice(r, 0, i), this.currentTokenCount += s, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function m0(t, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: d,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: g,
  ignoreWorldInfo: y,
  messageIndexesBetween: _
} = {}) {
  var b, v, f, S, E, O, w, D, x, T, M, k, q, G;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const B = SillyTavern.getContext();
  let { description: V, personality: $, persona: oe, scenario: fe, mesExamples: me, system: U, jailbreak: te } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : B.getCharacterCardFields({
    chid: r
  });
  const ue = t === "textgenerationwebui" ? (b = B.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, Le = !!(ue != null && ue.enabled);
  let j = xv(me, Le);
  function K() {
    var de, he;
    if (typeof d == "number")
      return d;
    if (!d || d === "active" || !i)
      return ed();
    if (typeof d == "number")
      return d;
    let De;
    if (t === "textgenerationwebui") {
      const Re = (de = B.getPresetManager("textgenerationwebui")) == null ? void 0 : de.getCompletionPresetByName(i);
      De = Re?.max_length;
    } else {
      const Re = (he = B.getPresetManager("openai")) == null ? void 0 : he.getCompletionPresetByName(i);
      De = Re?.openai_max_context;
    }
    return typeof De == "number" ? De : ed();
  }
  let ae = [];
  const se = K();
  if (se <= 0)
    return { result: [], warnings: ae };
  const le = new kS(se), Ie = B.ToolManager.isToolCallingSupported(), Y = _?.start ?? 0, ge = _ != null && _.end ? _.end + 1 : void 0;
  let ye = Y === -1 && ge === 0 ? [] : B.chat.slice(Y, ge).filter((de) => {
    var he;
    return !de.is_system || Ie && Array.isArray((he = de.extra) == null ? void 0 : he.tool_invocations);
  });
  ye = await Promise.all(
    ye.map(async (de, he) => {
      var De, Re;
      let it = de.mes, Ar = de.is_user ? nv.USER_INPUT : nv.AI_OUTPUT, tr = { isPrompt: !0, depth: ye.length - he - 1 }, mt = AS(it, Ar, tr);
      return mt = await TS(de, mt), (De = de?.extra) != null && De.append_title && (Re = de?.extra) != null && Re.title && (mt = `${mt}

${de.extra.title}`), {
        ...de,
        mes: mt,
        index: he
      };
    })
  );
  const Ve = ye.map((de) => J2 ? `${de.name}: ${de.mes}` : de.mes).reverse(), { worldInfoString: at, worldInfoBefore: ze, worldInfoAfter: P, worldInfoExamples: re, worldInfoDepth: ne, anBefore: be, anAfter: Ce } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await B.getWorldInfoPrompt(Ve, se, !1);
  for (const de of re) {
    const he = de.content;
    if (he.length === 0)
      continue;
    const De = wo(he, _r, Qr), Re = xv(De, Le);
    de.position === W2.before ? j.unshift(...Re) : j.push(...Re);
  }
  function ve() {
    const de = [];
    for (let he = ye.length - 1; he >= 0; he--) {
      const De = ye[he], Re = De.name === "System" && !De.is_user ? "system" : De.is_user ? "user" : "assistant";
      de.unshift({
        role: Re,
        content: p && Re != "system" ? `${De.name}: ${De.mes}` : De.mes,
        source: De
      });
    }
    le.addMany(de);
  }
  if (t === "textgenerationwebui") {
    const de = [...j];
    j && (j = yS(j, _r, Qr));
    const he = (v = B.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    he && (U = B.powerUserSettings.prefer_character_prompt && U ? U : wo(he.content, _r, Qr), U = Le ? bS(
      B.substituteParams(U, _r, Qr, he.content),
      ue
    ) : U);
    const De = {
      description: V,
      personality: $,
      persona: B.powerUserSettings.persona_description_position == ev.IN_PROMPT ? oe : "",
      scenario: fe,
      system: U,
      char: Qr,
      user: _r,
      wiBefore: ze,
      wiAfter: P,
      loreBefore: ze,
      loreAfter: P,
      mesExamples: j.join(""),
      mesExamplesRaw: de.join("")
    }, Re = (f = B.getPresetManager("context")) == null ? void 0 : f.getCompletionPresetByName(o);
    let it = _S(De, {
      customInstructSettings: ue,
      customStoryString: Re?.story_string
    });
    it && le.add({ role: "system", content: it, ignoreInstruct: !0 }), ve();
  } else {
    let de = function(Ft) {
      const Yt = yn.find((Ba) => Ba.identifier === Ft);
      if (Yt)
        return Yt;
      const dl = it.prompts.find((Ba) => Ba.identifier === Ft);
      if (dl)
        return dl;
    }, he = CS(ye), De = wS(j);
    async function Re() {
      let [Ft, Yt] = await ES(
        {
          name2: Qr,
          charDescription: V,
          charPersonality: $,
          Scenario: fe,
          worldInfoBefore: ze,
          worldInfoAfter: P,
          extensionPrompts: B.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: te,
          personaDescription: oe,
          messages: he,
          messageExamples: De
        },
        !1
      );
      le.addMany(Ft);
    }
    if (!i)
      return ae.push("No preset name provided. Using default preset."), await Re(), { result: le.getMessages(), warnings: ae };
    const it = (S = B.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(i);
    if (!it)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ae.push(`Preset not found: ${i}. Using current preset.`), Re(), { result: le.getMessages(), warnings: ae };
    let Ar = (E = it.prompt_order) == null ? void 0 : E.find((Ft) => Ft.character_id === Ht);
    if (!Ar && it.prompt_order && it.prompt_order.length > 0 && (Ar = it.prompt_order[it.prompt_order.length - 1]), !Ar)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ae.push(`No prompt order found for preset: ${i}. Using current preset.`), Re(), { result: le.getMessages(), warnings: ae };
    const tr = fe && it.scenario_format ? B.substituteParams(it.scenario_format) : "", mt = $ && it.personality_format ? B.substituteParams(it.personality_format) : "", Fn = B.substituteParams(it.group_nudge_prompt), qt = it.impersonation_prompt ? B.substituteParams(it.impersonation_prompt) : "", yn = [];
    y || yn.push(
      {
        role: "system",
        content: Ev(ze, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Ev(P, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || yn.push(
      { role: "system", content: V, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: tr, identifier: "scenario" }
    ), yn.push(
      { role: "system", content: qt, identifier: "impersonate" },
      { role: "system", content: Fn, identifier: "groupNudge" }
    );
    const ia = B.extensionPrompts["1_memory"];
    ia && ia.value && yn.push({
      role: wa(ia.role),
      content: ia.value,
      identifier: "summary",
      position: Us(ia.position)
    });
    const sa = B.extensionPrompts["2_floating_prompt"];
    !g && sa && sa.value && yn.push({
      role: wa(sa.role),
      content: sa.value,
      identifier: "authorsNote",
      position: Us(sa.position)
    });
    const nr = B.extensionPrompts["3_vectors"];
    nr && nr.value && yn.push({
      role: "system",
      content: nr.value,
      identifier: "vectorsMemory",
      position: Us(nr.position)
    });
    const Zn = B.extensionPrompts["4_vectors_data_bank"];
    Zn && Zn.value && yn.push({
      role: wa(Zn.role),
      content: Zn.value,
      identifier: "vectorsDataBank",
      position: Us(Zn.position)
    });
    const bn = B.extensionPrompts.chromadb;
    bn && bn.value && yn.push({
      role: "system",
      content: bn.value,
      identifier: "smartContext",
      position: Us(bn.position)
    }), !h && B.powerUserSettings.persona_description && B.powerUserSettings.persona_description_position === ev.IN_PROMPT && yn.push({
      role: "system",
      content: B.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ar.order.forEach((Ft) => {
      if (!Ft.enabled)
        return;
      const Yt = de(Ft.identifier);
      if (Yt && Yt.content) {
        le.add({
          role: Yt.role ?? "system",
          content: B.substituteParams(Yt.content)
        });
        return;
      }
      Ft.identifier === "chatHistory" && ve();
    });
  }
  const Me = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const de in B.extensionPrompts)
    if (Object.hasOwn(B.extensionPrompts, de)) {
      const he = B.extensionPrompts[de];
      if (Me.includes(de) || !B.extensionPrompts[de].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(he.position) || typeof he.filter == "function" && !await he.filter()) continue;
      const De = {
        role: wa(he.role) ?? "system",
        content: he.value
      };
      if (he.position === Ca.BEFORE_PROMPT)
        le.insert(he.depth, De);
      else if (he.position === Ca.IN_PROMPT) {
        const Re = le.getMessages();
        le.insert(Re.length - he.depth, De);
      }
    }
  for (const de of ne) {
    const he = le.getMessages();
    le.insert(he.length - de.depth, {
      role: wa(de.role),
      content: de.entries.join(`
`)
    });
  }
  if (!h) {
    const de = xS(Un, Number(Ht));
    if (Un && Array.isArray(de) && de.length > 0)
      de.filter((he) => he.text).forEach((he, De) => {
        const Re = le.getMessages();
        le.insert(Re.length - he.depth, { role: he.role, content: he.text });
      });
    else {
      const he = wo(
        (T = (x = (D = (w = (O = B.characters[Ht]) == null ? void 0 : O.data) == null ? void 0 : w.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : x.prompt) == null ? void 0 : T.trim(),
        _r,
        Qr
      ) || "";
      if (he) {
        const De = Q2, Re = ((G = (q = (k = (M = B.characters[Ht]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : q.depth_prompt) == null ? void 0 : G.role) ?? $2, it = le.getMessages();
        le.insert(it.length - De, {
          role: wa(Re),
          content: he
        });
      }
    }
  }
  let Xe = -1;
  if (!g) {
    const de = SS();
    if (de.prompt) {
      de.prompt = wo(de.prompt, _r, Qr);
      const he = { role: wa(de.role), content: de.prompt };
      switch (de.position) {
        case Ca.IN_PROMPT:
          le.insert(1, he), Xe = 1;
          break;
        case Ca.IN_CHAT:
          Xe = le.getMessages().length - de.depth, le.insert(Xe, he);
          break;
        case Ca.BEFORE_PROMPT:
          le.addFront(he), Xe = 0;
          break;
      }
    }
  }
  return Xe >= 0 && (be.length > 0 && (le.insert(Xe, { role: "system", content: be.join(`
`) }), Xe++), Ce.length > 0 && le.insert(Xe + 1, { role: "system", content: Ce.join(`
`) })), { result: le.getMessages(), warnings: ae };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Cv(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function er(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Cv(Object(i), !0).forEach(function(s) {
      RS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Cv(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function uu(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? uu = function(r) {
    return typeof r;
  } : uu = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, uu(t);
}
function RS(t, r, i) {
  return r in t ? Object.defineProperty(t, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = i, t;
}
function Cr() {
  return Cr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, Cr.apply(this, arguments);
}
function jS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (i[o] = t[o]);
  return i;
}
function zS(t, r) {
  if (t == null) return {};
  var i = jS(t, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var LS = "1.15.6";
function xr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var wr = xr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ll = xr(/Edge/i), wv = xr(/firefox/i), Ws = xr(/safari/i) && !xr(/chrome/i) && !xr(/android/i), Kd = xr(/iP(ad|od|hone)/i), g0 = xr(/chrome/i) && xr(/android/i), v0 = {
  capture: !1,
  passive: !1
};
function Fe(t, r, i) {
  t.addEventListener(r, i, !wr && v0);
}
function qe(t, r, i) {
  t.removeEventListener(r, i, !wr && v0);
}
function vu(t, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(r);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(r);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function y0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Bn(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && vu(t, r) : vu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = y0(t));
  }
  return null;
}
var Av = /\s+/g;
function pn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Av, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(Av, " ");
    }
}
function Ae(t, r, i) {
  var s = t && t.style;
  if (s) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (i = t.currentStyle), r === void 0 ? i : i[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function zi(t, r) {
  var i = "";
  if (typeof t == "string")
    i = t;
  else
    do {
      var s = Ae(t, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (t = t.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function b0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), o = 0, u = s.length;
    if (i)
      for (; o < u; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function Wn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function xt(t, r, i, s, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, d, p, h, g, y, _;
    if (t !== window && t.parentNode && t !== Wn() ? (u = t.getBoundingClientRect(), d = u.top, p = u.left, h = u.bottom, g = u.right, y = u.height, _ = u.width) : (d = 0, p = 0, h = window.innerHeight, g = window.innerWidth, y = window.innerHeight, _ = window.innerWidth), (r || i) && t !== window && (o = o || t.parentNode, !wr))
      do
        if (o && o.getBoundingClientRect && (Ae(o, "transform") !== "none" || i && Ae(o, "position") !== "static")) {
          var b = o.getBoundingClientRect();
          d -= b.top + parseInt(Ae(o, "border-top-width")), p -= b.left + parseInt(Ae(o, "border-left-width")), h = d + u.height, g = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && t !== window) {
      var v = zi(o || t), f = v && v.a, S = v && v.d;
      v && (d /= S, p /= f, _ /= f, y /= S, h = d + y, g = p + _);
    }
    return {
      top: d,
      left: p,
      bottom: h,
      right: g,
      width: _,
      height: y
    };
  }
}
function Tv(t, r, i) {
  for (var s = ta(t, !0), o = xt(t)[r]; s; ) {
    var u = xt(s)[i], d = void 0;
    if (d = o >= u, !d) return s;
    if (s === Wn()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Ii(t, r, i, s) {
  for (var o = 0, u = 0, d = t.children; u < d.length; ) {
    if (d[u].style.display !== "none" && d[u] !== Te.ghost && (s || d[u] !== Te.dragged) && Bn(d[u], i.draggable, t, !1)) {
      if (o === r)
        return d[u];
      o++;
    }
    u++;
  }
  return null;
}
function Jd(t, r) {
  for (var i = t.lastElementChild; i && (i === Te.ghost || Ae(i, "display") === "none" || r && !vu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function Dn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Te.clone && (!r || vu(t, r)) && i++;
  return i;
}
function Ov(t) {
  var r = 0, i = 0, s = Wn();
  if (t)
    do {
      var o = zi(t), u = o.a, d = o.d;
      r += t.scrollLeft * u, i += t.scrollTop * d;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function PS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function ta(t, r) {
  if (!t || !t.getBoundingClientRect) return Wn();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = Ae(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return Wn();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return Wn();
}
function IS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function td(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var el;
function _0(t, r) {
  return function() {
    if (!el) {
      var i = arguments, s = this;
      i.length === 1 ? t.call(s, i[0]) : t.apply(s, i), el = setTimeout(function() {
        el = void 0;
      }, r);
    }
  };
}
function BS() {
  clearTimeout(el), el = void 0;
}
function S0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function x0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function E0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(o) {
    var u, d, p, h;
    if (!(!Bn(o, r.draggable, t, !1) || o.animated || o === i)) {
      var g = xt(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((d = s.top) !== null && d !== void 0 ? d : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var nn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function US() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(Ae(o, "display") === "none" || o === Te.ghost)) {
            t.push({
              target: o,
              rect: xt(o)
            });
            var u = er({}, t[t.length - 1].rect);
            if (o.thisAnimationDuration) {
              var d = zi(o, !0);
              d && (u.top -= d.f, u.left -= d.e);
            }
            o.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      t.push(s);
    },
    removeAnimationState: function(s) {
      t.splice(PS(t, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, d = 0;
      t.forEach(function(p) {
        var h = 0, g = p.target, y = g.fromRect, _ = xt(g), b = g.prevFromRect, v = g.prevToRect, f = p.rect, S = zi(g, !0);
        S && (_.top -= S.f, _.left -= S.e), g.toRect = _, g.thisAnimationDuration && td(b, _) && !td(y, _) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - _.top) / (f.left - _.left) === (y.top - _.top) / (y.left - _.left) && (h = qS(f, b, v, o.options)), td(_, y) || (g.prevFromRect = y, g.prevToRect = _, h || (h = o.options.animation), o.animate(g, f, _, h)), h && (u = !0, d = Math.max(d, h), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, h), g.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, d) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, o, u, d) {
      if (d) {
        Ae(s, "transition", ""), Ae(s, "transform", "");
        var p = zi(this.el), h = p && p.a, g = p && p.d, y = (o.left - u.left) / (h || 1), _ = (o.top - u.top) / (g || 1);
        s.animatingX = !!y, s.animatingY = !!_, Ae(s, "transform", "translate3d(" + y + "px," + _ + "px,0)"), this.forRepaintDummy = HS(s), Ae(s, "transition", "transform " + d + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ae(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Ae(s, "transition", ""), Ae(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, d);
      }
    }
  };
}
function HS(t) {
  return t.offsetWidth;
}
function qS(t, r, i, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var Ai = [], nd = {
  initializeByDefault: !0
}, ol = {
  mount: function(r) {
    for (var i in nd)
      nd.hasOwnProperty(i) && !(i in r) && (r[i] = nd[i]);
    Ai.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ai.push(r);
  },
  pluginEvent: function(r, i, s) {
    var o = this;
    this.eventCanceled = !1, s.cancel = function() {
      o.eventCanceled = !0;
    };
    var u = r + "Global";
    Ai.forEach(function(d) {
      i[d.pluginName] && (i[d.pluginName][u] && i[d.pluginName][u](er({
        sortable: i
      }, s)), i.options[d.pluginName] && i[d.pluginName][r] && i[d.pluginName][r](er({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    Ai.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var g = new p(r, i, r.options);
        g.sortable = r, g.options = r.options, r[h] = g, Cr(s, g.defaults);
      }
    });
    for (var u in r.options)
      if (r.options.hasOwnProperty(u)) {
        var d = this.modifyOption(r, u, r.options[u]);
        typeof d < "u" && (r.options[u] = d);
      }
  },
  getEventProperties: function(r, i) {
    var s = {};
    return Ai.forEach(function(o) {
      typeof o.eventProperties == "function" && Cr(s, o.eventProperties.call(i[o.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var o;
    return Ai.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (o = u.optionListeners[i].call(r[u.pluginName], s));
    }), o;
  }
};
function FS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, o = t.targetEl, u = t.cloneEl, d = t.toEl, p = t.fromEl, h = t.oldIndex, g = t.newIndex, y = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, v = t.putSortable, f = t.extraEventProperties;
  if (r = r || i && i[nn], !!r) {
    var S, E = r.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !wr && !ll ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = d || i, S.from = p || i, S.item = o || i, S.clone = u, S.oldIndex = h, S.newIndex = g, S.oldDraggableIndex = y, S.newDraggableIndex = _, S.originalEvent = b, S.pullMode = v ? v.lastPutMode : void 0;
    var w = er(er({}, f), ol.getEventProperties(s, r));
    for (var D in w)
      S[D] = w[D];
    i && i.dispatchEvent(S), E[O] && E[O].call(r, S);
  }
}
var ZS = ["evt"], Wt = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = zS(s, ZS);
  ol.pluginEvent.bind(Te)(r, i, er({
    dragEl: ie,
    parentEl: pt,
    ghostEl: ke,
    rootEl: lt,
    nextEl: Oa,
    lastDownEl: cu,
    cloneEl: ct,
    cloneHidden: ea,
    dragStarted: $s,
    putSortable: zt,
    activeSortable: Te.active,
    originalEvent: o,
    oldIndex: Ri,
    oldDraggableIndex: tl,
    newIndex: mn,
    newDraggableIndex: Wr,
    hideGhostForTarget: T0,
    unhideGhostForTarget: O0,
    cloneNowHidden: function() {
      ea = !0;
    },
    cloneNowShown: function() {
      ea = !1;
    },
    dispatchSortableEvent: function(p) {
      Gt({
        sortable: i,
        name: p,
        originalEvent: o
      });
    }
  }, u));
};
function Gt(t) {
  FS(er({
    putSortable: zt,
    cloneEl: ct,
    targetEl: ie,
    rootEl: lt,
    oldIndex: Ri,
    oldDraggableIndex: tl,
    newIndex: mn,
    newDraggableIndex: Wr
  }, t));
}
var ie, pt, ke, lt, Oa, cu, ct, ea, Ri, mn, tl, Wr, To, zt, ki = !1, yu = !1, bu = [], Aa, Pn, rd, ad, Nv, Dv, $s, Ti, nl, rl = !1, Oo = !1, fu, Ut, id = [], Nd = !1, _u = [], Nu = typeof document < "u", No = Kd, Mv = ll || wr ? "cssFloat" : "float", GS = Nu && !g0 && !Kd && "draggable" in document.createElement("div"), C0 = (function() {
  if (Nu) {
    if (wr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), w0 = function(r, i) {
  var s = Ae(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Ii(r, 0, i), d = Ii(r, 1, i), p = u && Ae(u), h = d && Ae(d), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + xt(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + xt(d).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return d && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= o && s[Mv] === "none" || d && s[Mv] === "none" && g + y > o) ? "vertical" : "horizontal";
}, VS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, d = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, g = s ? i.width : i.height;
  return o === p || u === h || o + d / 2 === p + g / 2;
}, YS = function(r, i) {
  var s;
  return bu.some(function(o) {
    var u = o[nn].options.emptyInsertThreshold;
    if (!(!u || Jd(o))) {
      var d = xt(o), p = r >= d.left - u && r <= d.right + u, h = i >= d.top - u && i <= d.bottom + u;
      if (p && h)
        return s = o;
    }
  }), s;
}, A0 = function(r) {
  function i(u, d) {
    return function(p, h, g, y) {
      var _ = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (d || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (d && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, h, g, y), d)(p, h, g, y);
      var b = (d ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === b || u.join && u.indexOf(b) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || uu(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, T0 = function() {
  !C0 && ke && Ae(ke, "display", "none");
}, O0 = function() {
  !C0 && ke && Ae(ke, "display", "");
};
Nu && !g0 && document.addEventListener("click", function(t) {
  if (yu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), yu = !1, !1;
}, !0);
var Ta = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var i = YS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[nn]._onDragOver(s);
    }
  }
}, XS = function(r) {
  ie && ie.parentNode[nn]._isOutsideThisEl(r.target);
};
function Te(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Cr({}, r), t[nn] = this;
  var i = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return w0(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(d, p) {
      d.setData("Text", p.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Te.supportPointer !== !1 && "PointerEvent" in window && (!Ws || Kd),
    emptyInsertThreshold: 5
  };
  ol.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  A0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : GS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Fe(t, "pointerdown", this._onTapStart) : (Fe(t, "mousedown", this._onTapStart), Fe(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Fe(t, "dragover", this), Fe(t, "dragenter", this)), bu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, US());
}
Te.prototype = /** @lends Sortable.prototype */
{
  constructor: Te,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ti = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, d = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = o.filter;
      if (nx(s), !ie && !(/mousedown|pointerdown/.test(d) && r.button !== 0 || o.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Ws && h && h.tagName.toUpperCase() === "SELECT") && (h = Bn(h, o.draggable, s, !1), !(h && h.animated) && cu !== h)) {
        if (Ri = Dn(h), tl = Dn(h, o.draggable), typeof y == "function") {
          if (y.call(this, r, h, this)) {
            Gt({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), Wt("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(_) {
          if (_ = Bn(g, _.trim(), s, !1), _)
            return Gt({
              sortable: i,
              rootEl: _,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), Wt("filter", i, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Bn(g, o.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, d = o.options, p = u.ownerDocument, h;
    if (s && !ie && s.parentNode === u) {
      var g = xt(s);
      if (lt = u, ie = s, pt = ie.parentNode, Oa = ie.nextSibling, cu = s, To = d.group, Te.dragged = ie, Aa = {
        target: ie,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Nv = Aa.clientX - g.left, Dv = Aa.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ie.style["will-change"] = "all", h = function() {
        if (Wt("delayEnded", o, {
          evt: r
        }), Te.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !wv && o.nativeDraggable && (ie.draggable = !0), o._triggerDragStart(r, i), Gt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), pn(ie, d.chosenClass, !0);
      }, d.ignore.split(",").forEach(function(y) {
        b0(ie, y.trim(), sd);
      }), Fe(p, "dragover", Ta), Fe(p, "mousemove", Ta), Fe(p, "touchmove", Ta), d.supportPointer ? (Fe(p, "pointerup", o._onDrop), !this.nativeDraggable && Fe(p, "pointercancel", o._onDrop)) : (Fe(p, "mouseup", o._onDrop), Fe(p, "touchend", o._onDrop), Fe(p, "touchcancel", o._onDrop)), wv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), Wt("delayStart", this, {
        evt: r
      }), d.delay && (!d.delayOnTouchOnly || i) && (!this.nativeDraggable || !(ll || wr))) {
        if (Te.eventCanceled) {
          this._onDrop();
          return;
        }
        d.supportPointer ? (Fe(p, "pointerup", o._disableDelayedDrag), Fe(p, "pointercancel", o._disableDelayedDrag)) : (Fe(p, "mouseup", o._disableDelayedDrag), Fe(p, "touchend", o._disableDelayedDrag), Fe(p, "touchcancel", o._disableDelayedDrag)), Fe(p, "mousemove", o._delayedDragTouchMoveHandler), Fe(p, "touchmove", o._delayedDragTouchMoveHandler), d.supportPointer && Fe(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(h, d.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && sd(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    qe(r, "mouseup", this._disableDelayedDrag), qe(r, "touchend", this._disableDelayedDrag), qe(r, "touchcancel", this._disableDelayedDrag), qe(r, "pointerup", this._disableDelayedDrag), qe(r, "pointercancel", this._disableDelayedDrag), qe(r, "mousemove", this._delayedDragTouchMoveHandler), qe(r, "touchmove", this._delayedDragTouchMoveHandler), qe(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Fe(document, "pointermove", this._onTouchMove) : i ? Fe(document, "touchmove", this._onTouchMove) : Fe(document, "mousemove", this._onTouchMove) : (Fe(ie, "dragend", this), Fe(lt, "dragstart", this._onDragStart));
    try {
      document.selection ? du(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (ki = !1, lt && ie) {
      Wt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Fe(document, "dragover", XS);
      var s = this.options;
      !r && pn(ie, s.dragClass, !1), pn(ie, s.ghostClass, !0), Te.active = this, r && this._appendGhost(), Gt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Pn) {
      this._lastX = Pn.clientX, this._lastY = Pn.clientY, T0();
      for (var r = document.elementFromPoint(Pn.clientX, Pn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Pn.clientX, Pn.clientY), r !== i); )
        i = r;
      if (ie.parentNode[nn]._isOutsideThisEl(r), i)
        do {
          if (i[nn]) {
            var s = void 0;
            if (s = i[nn]._onDragOver({
              clientX: Pn.clientX,
              clientY: Pn.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = y0(i));
      O0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, d = ke && zi(ke, !0), p = ke && d && d.a, h = ke && d && d.d, g = No && Ut && Ov(Ut), y = (u.clientX - Aa.clientX + o.x) / (p || 1) + (g ? g[0] - id[0] : 0) / (p || 1), _ = (u.clientY - Aa.clientY + o.y) / (h || 1) + (g ? g[1] - id[1] : 0) / (h || 1);
      if (!Te.active && !ki) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (ke) {
        d ? (d.e += y - (rd || 0), d.f += _ - (ad || 0)) : d = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: _
        };
        var b = "matrix(".concat(d.a, ",").concat(d.b, ",").concat(d.c, ",").concat(d.d, ",").concat(d.e, ",").concat(d.f, ")");
        Ae(ke, "webkitTransform", b), Ae(ke, "mozTransform", b), Ae(ke, "msTransform", b), Ae(ke, "transform", b), rd = y, ad = _, Pn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ke) {
      var r = this.options.fallbackOnBody ? document.body : lt, i = xt(ie, !0, No, !0, r), s = this.options;
      if (No) {
        for (Ut = r; Ae(Ut, "position") === "static" && Ae(Ut, "transform") === "none" && Ut !== document; )
          Ut = Ut.parentNode;
        Ut !== document.body && Ut !== document.documentElement ? (Ut === document && (Ut = Wn()), i.top += Ut.scrollTop, i.left += Ut.scrollLeft) : Ut = Wn(), id = Ov(Ut);
      }
      ke = ie.cloneNode(!0), pn(ke, s.ghostClass, !1), pn(ke, s.fallbackClass, !0), pn(ke, s.dragClass, !0), Ae(ke, "transition", ""), Ae(ke, "transform", ""), Ae(ke, "box-sizing", "border-box"), Ae(ke, "margin", 0), Ae(ke, "top", i.top), Ae(ke, "left", i.left), Ae(ke, "width", i.width), Ae(ke, "height", i.height), Ae(ke, "opacity", "0.8"), Ae(ke, "position", No ? "absolute" : "fixed"), Ae(ke, "zIndex", "100000"), Ae(ke, "pointerEvents", "none"), Te.ghost = ke, r.appendChild(ke), Ae(ke, "transform-origin", Nv / parseInt(ke.style.width) * 100 + "% " + Dv / parseInt(ke.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (Wt("dragStart", this, {
      evt: r
    }), Te.eventCanceled) {
      this._onDrop();
      return;
    }
    Wt("setupClone", this), Te.eventCanceled || (ct = x0(ie), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), pn(ct, this.options.chosenClass, !1), Te.clone = ct), s.cloneId = du(function() {
      Wt("clone", s), !Te.eventCanceled && (s.options.removeCloneOnHide || lt.insertBefore(ct, ie), s._hideClone(), Gt({
        sortable: s,
        name: "clone"
      }));
    }), !i && pn(ie, u.dragClass, !0), i ? (yu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (qe(document, "mouseup", s._onDrop), qe(document, "touchend", s._onDrop), qe(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, ie)), Fe(document, "drop", s), Ae(ie, "transform", "translateZ(0)")), ki = !0, s._dragStartId = du(s._dragStarted.bind(s, i, r)), Fe(document, "selectstart", s), $s = !0, window.getSelection().removeAllRanges(), Ws && Ae(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, d, p = this.options, h = p.group, g = Te.active, y = To === h, _ = p.sort, b = zt || g, v, f = this, S = !1;
    if (Nd) return;
    function E(ue, Le) {
      Wt(ue, f, er({
        evt: r,
        isOwner: y,
        axis: v ? "vertical" : "horizontal",
        revert: d,
        dragRect: o,
        targetRect: u,
        canSort: _,
        fromSortable: b,
        target: s,
        completed: w,
        onMove: function(K, ae) {
          return Do(lt, i, ie, o, K, xt(K), r, ae);
        },
        changed: D
      }, Le));
    }
    function O() {
      E("dragOverAnimationCapture"), f.captureAnimationState(), f !== b && b.captureAnimationState();
    }
    function w(ue) {
      return E("dragOverCompleted", {
        insertion: ue
      }), ue && (y ? g._hideClone() : g._showClone(f), f !== b && (pn(ie, zt ? zt.options.ghostClass : g.options.ghostClass, !1), pn(ie, p.ghostClass, !0)), zt !== f && f !== Te.active ? zt = f : f === Te.active && zt && (zt = null), b === f && (f._ignoreWhileAnimating = s), f.animateAll(function() {
        E("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === i && !s.animated) && (Ti = null), !p.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[nn]._isOutsideThisEl(r.target), !ue && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      mn = Dn(ie), Wr = Dn(ie, p.draggable), Gt({
        sortable: f,
        name: "change",
        toEl: i,
        newIndex: mn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Bn(s, p.draggable, i, !0), E("dragOver"), Te.eventCanceled) return S;
    if (ie.contains(r.target) || s.animated && s.animatingX && s.animatingY || f._ignoreWhileAnimating === s)
      return w(!1);
    if (yu = !1, g && !p.disabled && (y ? _ || (d = pt !== lt) : zt === this || (this.lastPutMode = To.checkPull(this, g, ie, r)) && h.checkPut(this, g, ie, r))) {
      if (v = this._getDirection(r, s) === "vertical", o = xt(ie), E("dragOverValid"), Te.eventCanceled) return S;
      if (d)
        return pt = lt, O(), this._hideClone(), E("revert"), Te.eventCanceled || (Oa ? lt.insertBefore(ie, Oa) : lt.appendChild(ie)), w(!0);
      var x = Jd(i, p.draggable);
      if (!x || JS(r, v, this) && !x.animated) {
        if (x === ie)
          return w(!1);
        if (x && i === r.target && (s = x), s && (u = xt(s)), Do(lt, i, ie, o, s, u, r, !!s) !== !1)
          return O(), x && x.nextSibling ? i.insertBefore(ie, x.nextSibling) : i.appendChild(ie), pt = i, D(), w(!0);
      } else if (x && KS(r, v, this)) {
        var T = Ii(i, 0, p, !0);
        if (T === ie)
          return w(!1);
        if (s = T, u = xt(s), Do(lt, i, ie, o, s, u, r, !1) !== !1)
          return O(), i.insertBefore(ie, T), pt = i, D(), w(!0);
      } else if (s.parentNode === i) {
        u = xt(s);
        var M = 0, k, q = ie.parentNode !== i, G = !VS(ie.animated && ie.toRect || o, s.animated && s.toRect || u, v), B = v ? "top" : "left", V = Tv(s, "top", "top") || Tv(ie, "top", "top"), $ = V ? V.scrollTop : void 0;
        Ti !== s && (k = u[B], rl = !1, Oo = !G && p.invertSwap || q), M = WS(r, s, u, v, G ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, Oo, Ti === s);
        var oe;
        if (M !== 0) {
          var fe = Dn(ie);
          do
            fe -= M, oe = pt.children[fe];
          while (oe && (Ae(oe, "display") === "none" || oe === ke));
        }
        if (M === 0 || oe === s)
          return w(!1);
        Ti = s, nl = M;
        var me = s.nextElementSibling, U = !1;
        U = M === 1;
        var te = Do(lt, i, ie, o, s, u, r, U);
        if (te !== !1)
          return (te === 1 || te === -1) && (U = te === 1), Nd = !0, setTimeout(QS, 30), O(), U && !me ? i.appendChild(ie) : s.parentNode.insertBefore(ie, U ? me : s), V && S0(V, 0, $ - V.scrollTop), pt = ie.parentNode, k !== void 0 && !Oo && (fu = Math.abs(k - xt(s)[B])), D(), w(!0);
      }
      if (i.contains(ie))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    qe(document, "mousemove", this._onTouchMove), qe(document, "touchmove", this._onTouchMove), qe(document, "pointermove", this._onTouchMove), qe(document, "dragover", Ta), qe(document, "mousemove", Ta), qe(document, "touchmove", Ta);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    qe(r, "mouseup", this._onDrop), qe(r, "touchend", this._onDrop), qe(r, "pointerup", this._onDrop), qe(r, "pointercancel", this._onDrop), qe(r, "touchcancel", this._onDrop), qe(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (mn = Dn(ie), Wr = Dn(ie, s.draggable), Wt("drop", this, {
      evt: r
    }), pt = ie && ie.parentNode, mn = Dn(ie), Wr = Dn(ie, s.draggable), Te.eventCanceled) {
      this._nulling();
      return;
    }
    ki = !1, Oo = !1, rl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Dd(this.cloneId), Dd(this._dragStartId), this.nativeDraggable && (qe(document, "drop", this), qe(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ws && Ae(document.body, "user-select", ""), Ae(ie, "transform", ""), r && ($s && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), ke && ke.parentNode && ke.parentNode.removeChild(ke), (lt === pt || zt && zt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), ie && (this.nativeDraggable && qe(ie, "dragend", this), sd(ie), ie.style["will-change"] = "", $s && !ki && pn(ie, zt ? zt.options.ghostClass : this.options.ghostClass, !1), pn(ie, this.options.chosenClass, !1), Gt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), lt !== pt ? (mn >= 0 && (Gt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Gt({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), zt && zt.save()) : mn !== Ri && mn >= 0 && (Gt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Gt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Te.active && ((mn == null || mn === -1) && (mn = Ri, Wr = tl), Gt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Wt("nulling", this), lt = ie = pt = ke = Oa = ct = cu = ea = Aa = Pn = $s = mn = Wr = Ri = tl = Ti = nl = zt = To = Te.dragged = Te.ghost = Te.clone = Te.active = null, _u.forEach(function(r) {
      r.checked = !0;
    }), _u.length = rd = ad = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(r), $S(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var r = [], i, s = this.el.children, o = 0, u = s.length, d = this.options; o < u; o++)
      i = s[o], Bn(i, d.draggable, this.el, !1) && r.push(i.getAttribute(d.dataIdAttr) || tx(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, o = this.el;
    this.toArray().forEach(function(u, d) {
      var p = o.children[d];
      Bn(p, this.options.draggable, o, !1) && (s[u] = p);
    }, this), i && this.captureAnimationState(), r.forEach(function(u) {
      s[u] && (o.removeChild(s[u]), o.appendChild(s[u]));
    }), i && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(r, i) {
    return Bn(r, i || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, i) {
    var s = this.options;
    if (i === void 0)
      return s[r];
    var o = ol.modifyOption(this, r, i);
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && A0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Wt("destroy", this);
    var r = this.el;
    r[nn] = null, qe(r, "mousedown", this._onTapStart), qe(r, "touchstart", this._onTapStart), qe(r, "pointerdown", this._onTapStart), this.nativeDraggable && (qe(r, "dragover", this), qe(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), bu.splice(bu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (Wt("hideClone", this), Te.eventCanceled) return;
      Ae(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (Wt("showClone", this), Te.eventCanceled) return;
      ie.parentNode == lt && !this.options.group.revertClone ? lt.insertBefore(ct, ie) : Oa ? lt.insertBefore(ct, Oa) : lt.appendChild(ct), this.options.group.revertClone && this.animate(ie, ct), Ae(ct, "display", ""), ea = !1;
    }
  }
};
function $S(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Do(t, r, i, s, o, u, d, p) {
  var h, g = t[nn], y = g.options.onMove, _;
  return window.CustomEvent && !wr && !ll ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = o || r, h.relatedRect = u || xt(r), h.willInsertAfter = p, h.originalEvent = d, t.dispatchEvent(h), y && (_ = y.call(g, h, d)), _;
}
function sd(t) {
  t.draggable = !1;
}
function QS() {
  Nd = !1;
}
function KS(t, r, i) {
  var s = xt(Ii(i.el, 0, i.options, !0)), o = E0(i.el, i.options, ke), u = 10;
  return r ? t.clientX < o.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < o.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function JS(t, r, i) {
  var s = xt(Jd(i.el, i.options.draggable)), o = E0(i.el, i.options, ke), u = 10;
  return r ? t.clientX > o.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > o.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function WS(t, r, i, s, o, u, d, p) {
  var h = s ? t.clientY : t.clientX, g = s ? i.height : i.width, y = s ? i.top : i.left, _ = s ? i.bottom : i.right, b = !1;
  if (!d) {
    if (p && fu < g * o) {
      if (!rl && (nl === 1 ? h > y + g * u / 2 : h < _ - g * u / 2) && (rl = !0), rl)
        b = !0;
      else if (nl === 1 ? h < y + fu : h > _ - fu)
        return -nl;
    } else if (h > y + g * (1 - o) / 2 && h < _ - g * (1 - o) / 2)
      return ex(r);
  }
  return b = b || d, b && (h < y + g * u / 2 || h > _ - g * u / 2) ? h > y + g / 2 ? 1 : -1 : 0;
}
function ex(t) {
  return Dn(ie) < Dn(t) ? 1 : -1;
}
function tx(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function nx(t) {
  _u.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && _u.push(s);
  }
}
function du(t) {
  return setTimeout(t, 0);
}
function Dd(t) {
  return clearTimeout(t);
}
Nu && Fe(document, "touchmove", function(t) {
  (Te.active || ki) && t.cancelable && t.preventDefault();
});
Te.utils = {
  on: Fe,
  off: qe,
  css: Ae,
  find: b0,
  is: function(r, i) {
    return !!Bn(r, i, r, !1);
  },
  extend: IS,
  throttle: _0,
  closest: Bn,
  toggleClass: pn,
  clone: x0,
  index: Dn,
  nextTick: du,
  cancelNextTick: Dd,
  detectDirection: w0,
  getChild: Ii,
  expando: nn
};
Te.get = function(t) {
  return t[nn];
};
Te.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Te.utils = er(er({}, Te.utils), s.utils)), ol.mount(s);
  });
};
Te.create = function(t, r) {
  return new Te(t, r);
};
Te.version = LS;
var St = [], Qs, Md, kd = !1, ld, od, Su, Ks;
function rx() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  }
  return t.prototype = {
    dragStarted: function(i) {
      var s = i.originalEvent;
      this.sortable.nativeDraggable ? Fe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Fe(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Fe(document, "touchmove", this._handleFallbackAutoScroll) : Fe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? qe(document, "dragover", this._handleAutoScroll) : (qe(document, "pointermove", this._handleFallbackAutoScroll), qe(document, "touchmove", this._handleFallbackAutoScroll), qe(document, "mousemove", this._handleFallbackAutoScroll)), kv(), hu(), BS();
    },
    nulling: function() {
      Su = Md = Qs = kd = Ks = ld = od = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, u = (i.touches ? i.touches[0] : i).clientX, d = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, d);
      if (Su = i, s || this.options.forceAutoScrollFallback || ll || wr || Ws) {
        ud(i, this.options, p, s);
        var h = ta(p, !0);
        kd && (!Ks || u !== ld || d !== od) && (Ks && kv(), Ks = setInterval(function() {
          var g = ta(document.elementFromPoint(u, d), !0);
          g !== h && (h = g, hu()), ud(i, o.options, g, s);
        }, 10), ld = u, od = d);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === Wn()) {
          hu();
          return;
        }
        ud(i, this.options, ta(p, !1), !1);
      }
    }
  }, Cr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function hu() {
  St.forEach(function(t) {
    clearInterval(t.pid);
  }), St = [];
}
function kv() {
  clearInterval(Ks);
}
var ud = _0(function(t, r, i, s) {
  if (r.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, d = r.scrollSensitivity, p = r.scrollSpeed, h = Wn(), g = !1, y;
    Md !== i && (Md = i, hu(), Qs = r.scroll, y = r.scrollFn, Qs === !0 && (Qs = ta(i, !0)));
    var _ = 0, b = Qs;
    do {
      var v = b, f = xt(v), S = f.top, E = f.bottom, O = f.left, w = f.right, D = f.width, x = f.height, T = void 0, M = void 0, k = v.scrollWidth, q = v.scrollHeight, G = Ae(v), B = v.scrollLeft, V = v.scrollTop;
      v === h ? (T = D < k && (G.overflowX === "auto" || G.overflowX === "scroll" || G.overflowX === "visible"), M = x < q && (G.overflowY === "auto" || G.overflowY === "scroll" || G.overflowY === "visible")) : (T = D < k && (G.overflowX === "auto" || G.overflowX === "scroll"), M = x < q && (G.overflowY === "auto" || G.overflowY === "scroll"));
      var $ = T && (Math.abs(w - o) <= d && B + D < k) - (Math.abs(O - o) <= d && !!B), oe = M && (Math.abs(E - u) <= d && V + x < q) - (Math.abs(S - u) <= d && !!V);
      if (!St[_])
        for (var fe = 0; fe <= _; fe++)
          St[fe] || (St[fe] = {});
      (St[_].vx != $ || St[_].vy != oe || St[_].el !== v) && (St[_].el = v, St[_].vx = $, St[_].vy = oe, clearInterval(St[_].pid), ($ != 0 || oe != 0) && (g = !0, St[_].pid = setInterval((function() {
        s && this.layer === 0 && Te.active._onTouchMove(Su);
        var me = St[this.layer].vy ? St[this.layer].vy * p : 0, U = St[this.layer].vx ? St[this.layer].vx * p : 0;
        typeof y == "function" && y.call(Te.dragged.parentNode[nn], U, me, t, Su, St[this.layer].el) !== "continue" || S0(St[this.layer].el, U, me);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== h && (b = ta(b, !1)));
    kd = g;
  }
}, 30), N0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, d = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var g = s || u;
    p();
    var y = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, _ = document.elementFromPoint(y.clientX, y.clientY);
    h(), g && !g.el.contains(_) && (d("spill"), this.onSpill({
      dragEl: o,
      putSortable: s
    }));
  }
};
function Wd() {
}
Wd.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var o = Ii(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: N0
};
Cr(Wd, {
  pluginName: "revertOnSpill"
});
function eh() {
}
eh.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: N0
};
Cr(eh, {
  pluginName: "removeOnSpill"
});
Te.mount(new rx());
Te.mount(eh, Wd);
async function ax({
  entry: t,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: s = !1,
  operation: o = "auto"
}) {
  const u = SillyTavern.getContext(), d = await u.loadWorldInfo(r);
  if (!d)
    throw new Error("Failed to load world info");
  const p = Object.values(d.entries), h = p.length > 0 ? p[p.length - 1] : void 0;
  let g;
  if (o === "update" || o === "auto") {
    const _ = Object.values(d.entries).find((b) => b.uid === t.uid);
    if (_)
      (o === "auto" || o === "update") && (g = _);
    else if (o === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = g ? "update" : "add";
  if (!g) {
    if (g = OS(r, d), !g)
      throw new Error("Failed to create entry");
    if (h) {
      const _ = g.uid;
      Object.assign(g, h), g.uid = _;
    }
  }
  return g.key = t.key, g.content = t.content, g.comment = t.comment, i || await u.saveWorldInfo(r, d), s || u.reloadWorldInfoEditor(r, !0), {
    entry: g,
    operation: y
  };
}
const Rd = `=======

A character card is the blueprint for your AI. Its purpose is to provide a clear, consistent, and compelling set of instructions that guide the AI's personality, behavior, and speech. A well-crafted card is the difference between a forgettable bot and an immersive, believable character.

This guide is structured into two parts:
1.  **Core Identity:** The essential fields that define who your character is.
2.  **Interaction & Context:** The fields that define how the user will interact with them.

---

### Part 1: Core Identity - Defining Who The Character Is

These fields build the foundation of your character's being.

#### 1. Name
The character's primary identifier. It sets the first impression.

*   **Purpose**: To give the AI and user a clear reference point.
*   **Best Practices**:
    *   **Be Evocative**: A name like "Sergeant Rex 'Ironclad' Jones" tells a story. "Bob" does not.
    *   **Prioritize Clarity**: Avoid names that are difficult to spell or pronounce, as the AI may misuse them.
*   **Example**:
    *   **Strong**: "Kaelen, the Whisperwood Scout"
    *   **Weak**: "Xy'zth'gor"

#### 2. Description (The "At-a-Glance" Summary)
This is a concise paragraph that gives the AI a holistic "mental image" of the character. It should blend their most critical physical and personality traits into a single snapshot.

*   **Purpose**: To provide a quick, high-level summary the AI can reference for appearance, demeanor, and key details.
*   **Structure**:
    1.  **Appearance**: Start with their most defining physical features.
    2.  **Demeanor**: Describe their general personality and how they carry themselves.
    3.  **A Key Quirk**: End with a unique detail that makes them memorable.
*   **Example**:
    > A tall, graceful woman with bronze hair and startling green eyes, carrying herself with the quiet dignity of a noble and the focused intensity of a warrior. A member of a secretive matriarchal order, she is a master of subtle influence and a formidable political strategist. Though her exterior is composed and serene, she is fiercely protective of those she loves.

#### 3. Personality (The "Rulebook" for Behavior)
While the **Description** is a summary, this field contains direct, explicit instructions for the AI. It defines the character's internal thoughts, motivations, and behavioral rules in detail.

*   **Purpose**: To eliminate ambiguity and give the AI a clear, actionable set of traits to follow.
*   **Best Practices**:
    *   Use clear, declarative sentences to define the character's core rules.
    *   Focus on core motivations, deep-seated fears, and moral alignment.
    *   Avoid contradictions (e.g., describing a character as both "Patient" and "Impulsive") to ensure the AI's behavior remains consistent.
*   **Example**:
    > A supreme pragmatist who believes a functioning society is more important than a moral one. Masterfully manipulative, he remains several steps ahead of allies and enemies alike, viewing people as pieces on a chessboard to be positioned for the city's greater good. He abhors chaos and inefficiency above all else, maintaining a calm, detached, and unnervingly still demeanor that forces others to fill the silence. He never raises his voice, preferring to convey threats with quiet, measured words.

---

### Part 2: Interaction & Context - Setting the Stage

These fields define the environment and the way your character communicates.

#### 4. Scenario (The "Where, When, and Why")
This sets the scene for the interaction, providing the context that frames the roleplay.

*   **Purpose**: To establish the setting, the timeline, and the initial relationship between the character and the user.
*   **What to Include**:
    *   **Location**: Where is the interaction taking place?
    *   **Context**: What is happening?
    *   **Relationship**: How do {{char}} and {{user}} know each other?
*   **Example**:
    > The setting is a grimy, unsupervised slum in a sprawling metropolis, a place where illegal commerce thrives. The sky is the color of a dead television channel. {{char}} is a "console cowboy," a disgraced data thief whose nervous system was damaged as punishment for stealing from an employer. {{user}} is a mysterious mercenary who has tracked {{char}} down to offer a cure in exchange for one last, impossible job.

#### 5. First Message (The Opening Hook)
This is the character's opening line. It's the single most important field for establishing tone, voice, and immediate engagement.

*   **Purpose**: To kick off the roleplay with a compelling hook that embodies the character's personality.
*   **Key Elements**:
    1.  **Action**: Start with a physical action to ground the scene.
    2.  **Dialogue**: Write a line that reveals their personality.
    3.  **A Hook**: End with something that prompts a response.
*   **Example**:
    > *{{char}} calmly watches the spinning ceiling fan, the smoke from his cigarette curling into the stagnant air. He doesn't meet {{user}}'s eyes, instead focusing on the condensation on his glass.* "They're just questions. It's a test, designed to provoke an emotional response. Shall we continue?"

#### 6. Example Dialogue (The Voice & Style Guide)
This is a "style guide" that teaches the AI *how* your character speaks, thinks, and formats their responses.

*   **Purpose**: To provide a clear template for the character's speech patterns, vocabulary, and interaction style.
*   **Structure**:
    *   Use {{user}} and {{char}} to create 2-3 short exchanges.
    *   Showcase a range of emotions.
    *   Mix dialogue with actions (in asterisks) to demonstrate their body language.
*   **Example**:
    \`\`\`
    {{user}}: "What makes you think your plan will work?"
    {{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."

    {{user}}: "I'm not sure I can do this."
    {{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let's protect it together."
    \`\`\`

#### 7. Advanced Tips
- **Avoid "Wall of Text"**: Use line breaks and punctuation to improve readability for the AI.

=======`, jd = `{{#if characters}}
## Selected Characters for Context
{{#each characters}}
### {{this.name}}
{{#if this.description}}
#### Description
{{this.description}}
{{/if}}
{{#if this.personality}}
#### Personality
{{this.personality}}
{{/if}}
{{#if this.scenario}}
#### Scenario
{{this.scenario}}
{{/if}}
{{#if this.first_mes}}
#### First Message
{{this.first_mes}}
{{/if}}
{{#if this.mes_example}}
#### Example Dialogue
{{this.mes_example}}
{{/if}}
{{#if this.data.alternate_greetings}}
#### Alternate Greetings
{{#each this.data.alternate_greetings}}
### {{add @index 1}}
{{this}}
{{/each}}
{{/if}}

{{/each}}
{{/if}}`, ix = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, sx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, lx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, th = "{{activeFormatInstructions}}", D0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, M0 = `### {{character.name}}
- **Description:** {{#if character.description}}{{character.description}}{{else}}*Not provided*{{/if}}
- **Personality:** {{#if character.personality}}{{character.personality}}{{else}}*Not provided*{{/if}}
- **Scenario:** {{#if character.scenario}}{{character.scenario}}{{else}}*Not provided*{{/if}}
- **First Message:** {{#if character.first_mes}}{{character.first_mes}}{{else}}*Not provided*{{/if}}
- **Example Dialogue:**
  {{#if character.mes_example}}{{character.mes_example}}{{else}}*Not provided*{{/if}}
- **Alternate Greetings:**
  {{#if character.alternate_greetings}}
  {{#each character.alternate_greetings}}
  **{{add @index 1}}:** {{this}}
  {{/each}}
  {{else}}*Not provided*{{/if}}`, al = `{{#is_not_empty fields}}
=== CURRENT CHARACTER FIELD VALUES ===
{{#is_not_empty fields.core}}
**Core Fields:**
{{#each fields.core as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.alternate_greetings}}
**Alternate Greetings:**
{{#each fields.alternate_greetings as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.draft}}
**Draft Fields:**
{{#each fields.draft as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}
{{/is_not_empty}}`, ox = `## User's Persona Description
name: {{user}}
{{persona}}`, nh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, ux = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", cx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", fx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, k0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", dx = k0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", hx = "[" + k0 + "][" + dx + "]*", px = new RegExp("^" + hx + "$");
function R0(t, r) {
  const i = [];
  let s = r.exec(t);
  for (; s; ) {
    const o = [];
    o.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let d = 0; d < u; d++)
      o.push(s[d]);
    i.push(o), s = r.exec(t);
  }
  return i;
}
const rh = function(t) {
  const r = px.exec(t);
  return !(r === null || typeof r > "u");
};
function mx(t) {
  return typeof t < "u";
}
const gx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function j0(t, r) {
  r = Object.assign({}, gx, r);
  const i = [];
  let s = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = jv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let d = u;
      if (u++, t[u] === "!") {
        u = zv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !Cx(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", yt("InvalidTag", _, Vt(t, u));
        }
        const g = bx(t, u);
        if (g === !1)
          return yt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Vt(t, u));
        let y = g.value;
        if (u = g.index, y[y.length - 1] === "/") {
          const _ = u - y.length;
          y = y.substring(0, y.length - 1);
          const b = Lv(y, r);
          if (b === !0)
            s = !0;
          else
            return yt(b.err.code, b.err.msg, Vt(t, _ + b.err.line));
        } else if (p)
          if (g.tagClosed) {
            if (y.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Vt(t, d));
            if (i.length === 0)
              return yt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Vt(t, d));
            {
              const _ = i.pop();
              if (h !== _.tagName) {
                let b = Vt(t, _.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + h + "'.",
                  Vt(t, d)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Vt(t, u));
        else {
          const _ = Lv(y, r);
          if (_ !== !0)
            return yt(_.err.code, _.err.msg, Vt(t, u - y.length + _.err.line));
          if (o === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Vt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: d }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = zv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = jv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = xx(t, u);
            if (_ == -1)
              return yt("InvalidChar", "char '&' is not expected.", Vt(t, u));
            u = _;
          } else if (o === !0 && !Rv(t[u]))
            return yt("InvalidXml", "Extra text at the end", Vt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Rv(t[u]))
        continue;
      return yt("InvalidChar", "char '" + t[u] + "' is not expected.", Vt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Vt(t, i[0].tagStartPos));
    if (i.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Rv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function jv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Vt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function zv(t, r) {
  if (t.length > r + 5 && t[r + 1] === "-" && t[r + 2] === "-") {
    for (r += 3; r < t.length; r++)
      if (t[r] === "-" && t[r + 1] === "-" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (t.length > r + 8 && t[r + 1] === "D" && t[r + 2] === "O" && t[r + 3] === "C" && t[r + 4] === "T" && t[r + 5] === "Y" && t[r + 6] === "P" && t[r + 7] === "E") {
    let i = 1;
    for (r += 8; r < t.length; r++)
      if (t[r] === "<")
        i++;
      else if (t[r] === ">" && (i--, i === 0))
        break;
  } else if (t.length > r + 9 && t[r + 1] === "[" && t[r + 2] === "C" && t[r + 3] === "D" && t[r + 4] === "A" && t[r + 5] === "T" && t[r + 6] === "A" && t[r + 7] === "[") {
    for (r += 8; r < t.length; r++)
      if (t[r] === "]" && t[r + 1] === "]" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const vx = '"', yx = "'";
function bx(t, r) {
  let i = "", s = "", o = !1;
  for (; r < t.length; r++) {
    if (t[r] === vx || t[r] === yx)
      s === "" ? s = t[r] : s !== t[r] || (s = "");
    else if (t[r] === ">" && s === "") {
      o = !0;
      break;
    }
    i += t[r];
  }
  return s !== "" ? !1 : {
    value: i,
    index: r,
    tagClosed: o
  };
}
const _x = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Lv(t, r) {
  const i = R0(t, _x), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Hs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Hs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Hs(i[o]));
    const u = i[o][2];
    if (!Ex(u))
      return yt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Hs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + u + "' is repeated.", Hs(i[o]));
  }
  return !0;
}
function Sx(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function xx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, Sx(t, r);
  let i = 0;
  for (; r < t.length; r++, i++)
    if (!(t[r].match(/\w/) && i < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(t, r, i) {
  return {
    err: {
      code: t,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function Ex(t) {
  return rh(t);
}
function Cx(t) {
  return rh(t);
}
function Vt(t, r) {
  const i = t.substring(0, r).split(/\r?\n/);
  return {
    line: i.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: i[i.length - 1].length + 1
  };
}
function Hs(t) {
  return t.startIndex + t[1].length;
}
const wx = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(t, r) {
    return r;
  },
  attributeValueProcessor: function(t, r) {
    return r;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(t, r, i) {
    return t;
  }
  // skipEmptyListItem: false
}, Ax = function(t) {
  return Object.assign({}, wx, t);
};
class qs {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, i) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: i });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function Tx(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, d = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (o && Dx(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = Ox(t, r + 1), h.indexOf("&") === -1 && (i[jx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (o && Mx(t, r)) r += 8;
        else if (o && kx(t, r)) r += 8;
        else if (o && Rx(t, r)) r += 9;
        else if (Nx) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, d = "";
      } else if (t[r] === ">") {
        if (u ? t[r - 1] === "-" && t[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else t[r] === "[" ? o = !0 : d += t[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: i, i: r };
}
function Ox(t, r) {
  let i = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    i += t[r];
  if (i = i.trim(), i.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = t[r++];
  let o = "";
  for (; r < t.length && t[r] !== s; r++)
    o += t[r];
  return [i, o, r];
}
function Nx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Dx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Mx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function kx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Rx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function jx(t) {
  if (rh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const zx = /^[-+]?0x[a-fA-F0-9]+$/, Lx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Px = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Ix(t, r = {}) {
  if (r = Object.assign({}, Px, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && zx.test(i))
    return Ux(i, 16);
  if (i.search(/[eE]/) !== -1) {
    const s = i.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (s) {
      if (r.leadingZeros)
        i = (s[1] || "") + s[3];
      else if (!(s[2] === "0" && s[3][0] === ".")) return t;
      return r.eNotation ? Number(i) : t;
    } else
      return t;
  } else {
    const s = Lx.exec(i);
    if (s) {
      const o = s[1], u = s[2];
      let d = Bx(s[3]);
      if (!r.leadingZeros && u.length > 0 && o && i[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !o && i[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(i), h = "" + p;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? p : t : i.indexOf(".") !== -1 ? h === "0" && d === "" || h === d || o && h === "-" + d ? p : t : u ? d === h || o + d === h ? p : t : i === h || i === o + h ? p : t;
      }
    } else
      return t;
  }
}
function Bx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Ux(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Hx(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class qx {
  constructor(r) {
    this.options = r, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (i, s) => String.fromCodePoint(Number.parseInt(s, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (i, s) => String.fromCodePoint(Number.parseInt(s, 16)) }
    }, this.addExternalEntities = Fx, this.parseXml = Xx, this.parseTextData = Zx, this.resolveNameSpace = Gx, this.buildAttributesMap = Yx, this.isItStopNode = Jx, this.replaceEntitiesValue = Qx, this.readStopNodeData = eE, this.saveTextToParentTag = Kx, this.addChild = $x, this.ignoreAttributesFn = Hx(this.options.ignoreAttributes);
  }
}
function Fx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function Zx(t, r, i, s, o, u, d) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    d || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, o, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Ld(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Ld(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Gx(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const Vx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Yx(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = R0(t, Vx), o = s.length, u = {};
    for (let d = 0; d < o; d++) {
      const p = this.resolveNameSpace(s[d][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[d][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[g] = h : typeof y != typeof h || y !== h ? u[g] = y : u[g] = Ld(
            h,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[g] = !0);
    }
    if (!Object.keys(u).length)
      return;
    if (this.options.attributesGroupName) {
      const d = {};
      return d[this.options.attributesGroupName] = u, d;
    }
    return u;
  }
}
const Xx = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new qs("!xml");
  let i = r, s = "", o = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = ka(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, o));
        const g = o.substring(o.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let y = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (y = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = o.lastIndexOf("."), o = o.substring(0, y), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = zd(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, o), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new qs(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, o, p.tagName)), this.addChild(i, h, o);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = ka(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, o), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = Tx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = ka(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, o);
        let g = this.parseTextData(h, i.tagname, o, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = zd(t, u, this.options.removeNSPrefix), h = p.tagName;
        const g = p.rawTagName;
        let y = p.tagExp, _ = p.attrExpPresent, b = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const v = i;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), h !== r.tagname && (o += o ? "." + h : h), this.isItStopNode(this.options.stopNodes, o, h)) {
          let f = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const E = this.readStopNodeData(t, g, b + 1);
            if (!E) throw new Error(`Unexpected end of ${g}`);
            u = E.i, f = E.tagContent;
          }
          const S = new qs(h);
          h !== y && _ && (S[":@"] = this.buildAttributesMap(y, o, h)), f && (f = this.parseTextData(f, h, o, !0, _, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, f), this.addChild(i, S, o);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const f = new qs(h);
            h !== y && _ && (f[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(i, f, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const f = new qs(h);
            this.tagsNodeStack.push(i), h !== y && _ && (f[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(i, f, o), i = f;
          }
          s = "", u = b;
        }
      }
    else
      s += t[u];
  return r.child;
};
function $x(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const Qx = function(t) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const i = this.docTypeEntities[r];
      t = t.replace(i.regx, i.val);
    }
    for (let r in this.lastEntities) {
      const i = this.lastEntities[r];
      t = t.replace(i.regex, i.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const i = this.htmlEntities[r];
        t = t.replace(i.regex, i.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function Kx(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function Jx(t, r, i) {
  const s = "*." + i;
  for (const o in t) {
    const u = t[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function Wx(t, r, i = ">") {
  let s, o = "";
  for (let u = r; u < t.length; u++) {
    let d = t[u];
    if (s)
      d === s && (s = "");
    else if (d === '"' || d === "'")
      s = d;
    else if (d === i[0])
      if (i[1]) {
        if (t[u + 1] === i[1])
          return {
            data: o,
            index: u
          };
      } else
        return {
          data: o,
          index: u
        };
    else d === "	" && (d = " ");
    o += d;
  }
}
function ka(t, r, i, s) {
  const o = t.indexOf(r, i);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function zd(t, r, i, s = ">") {
  const o = Wx(t, r + 1, s);
  if (!o) return;
  let u = o.data;
  const d = o.index, p = u.search(/\s/);
  let h = u, g = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = h;
  if (i) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), g = h !== o.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: d,
    attrExpPresent: g,
    rawTagName: y
  };
}
function eE(t, r, i) {
  const s = i;
  let o = 1;
  for (; i < t.length; i++)
    if (t[i] === "<")
      if (t[i + 1] === "/") {
        const u = ka(t, ">", i, `${r} is not closed`);
        if (t.substring(i + 2, u).trim() === r && (o--, o === 0))
          return {
            tagContent: t.substring(s, i),
            i: u
          };
        i = u;
      } else if (t[i + 1] === "?")
        i = ka(t, "?>", i + 1, "StopNode is not closed.");
      else if (t.substr(i + 1, 3) === "!--")
        i = ka(t, "-->", i + 3, "StopNode is not closed.");
      else if (t.substr(i + 1, 2) === "![")
        i = ka(t, "]]>", i, "StopNode is not closed.") - 2;
      else {
        const u = zd(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function Ld(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Ix(t, i);
  } else
    return mx(t) ? t : "";
}
function tE(t, r) {
  return z0(t, r);
}
function z0(t, r, i) {
  let s;
  const o = {};
  for (let u = 0; u < t.length; u++) {
    const d = t[u], p = nE(d);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = d[p] : s += "" + d[p];
    else {
      if (p === void 0)
        continue;
      if (d[p]) {
        let g = z0(d[p], r, h);
        const y = aE(g, r);
        d[":@"] ? rE(g, d[":@"], h, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(g)) : r.isArray(p, h, y) ? o[p] = [g] : o[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function nE(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function rE(t, r, i, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let d = 0; d < u; d++) {
      const p = o[d];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function aE(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class L0 {
  constructor(r) {
    this.externalEntities = {}, this.options = Ax(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, i) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (i) {
      i === !0 && (i = {});
      const u = j0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new qx(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : tE(o, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, i) {
    if (i.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (i === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = i;
  }
}
const iE = {
  validate: j0
}, sE = new L0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
}), lE = new L0({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0,
  parseTagValue: !1
});
function Pv(t, r) {
  if (r?.type === "string" && typeof t != "string")
    return String(t);
  if ((r?.type === "integer" || r?.type === "number") && typeof t == "string" && t.trim() !== "") {
    const i = Number(t);
    return Number.isFinite(i) ? i : t;
  }
  return r?.type === "boolean" && (t === "true" || t === "false") ? t === "true" : t;
}
function Pd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const i in r.properties) {
      if (!t.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let o = t[i];
      s.type === "array" && !Array.isArray(o) && (typeof o == "object" && o !== null && Object.keys(o).length === 1 && "item" in o && !s.items?.properties?.item && (o = o.item), o = Array.isArray(o) ? o : [o]), s.type === "array" && (o = o.filter((u) => u !== ""), t[i] = o), s.type === "object" && typeof o == "object" && o !== null ? Pd(o, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(o) && o.forEach((u) => Pd(u, s.items)), s.type === "array" ? t[i] = o.map((u) => Pv(u, s.items)) : t[i] = Pv(o, s);
    }
}
function oE(t) {
  return t.split(/(<!\[CDATA\[[\s\S]*?\]\]>)/).map((r, i) => i % 2 === 1 ? r : r.replace(/&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)/g, "&amp;")).join("");
}
function uE(t) {
  const r = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let i, s = null;
  for (; (i = r.exec(t)) !== null; )
    s = i[1].trim();
  return s;
}
function Ra(t) {
  if (t == null)
    return "";
  if (typeof t != "object")
    return String(t).trim();
  if ("#text" in t)
    return Ra(t["#text"]);
  if ("response" in t)
    return Ra(t.response);
  if ("message" in t)
    return Ra(t.message);
  const r = Object.values(t)[0];
  return Ra(r);
}
function P0(t, r, i = {}) {
  let o = uE(t) ?? t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          o = oE(o);
          const p = iE.validate(o);
          if (p !== !0)
            throw new Error(`Model response is not valid XML: ${p.err.msg}`);
        }
        let u = (i.schema ? lE : sE).parse(o);
        if (u.root)
          u = u.root;
        else if (u.response)
          return Ra(u.response);
        return i.schema ? (Pd(u, i.schema), u) : Ra(u);
      case "json":
        const d = JSON.parse(o);
        return i.schema ? d : Ra(d);
      case "none":
        return o;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (u) {
    if (r !== "none" && !i.schema) {
      const d = o.match(/<response>([\s\S]*)/);
      if (d) return d[1].replace(/<\/[\s\S]*$/, "").trim();
      const p = o.match(/"response":\s*"([\s\S]*)/);
      if (p) return p[1].replace(/"\s*}\s*$/, "");
    }
    throw console.error(`Error parsing response in format '${r}':`, u), console.error("Raw content received:", t), r === "xml" ? u.message.startsWith("Model response is not valid XML:") ? u : new Error(`Model response is not valid XML: ${u.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${u.message}`);
  }
}
function Iv(t, r) {
  const i = t.trim();
  switch (r) {
    case "xml":
      return `<response>${i}`;
    case "json":
      return `{
  "response": "${i.replace(/"/g, '\\"')}`;
    // Basic escaping
    case "none":
      return i;
    default:
      throw new Error(`Unsupported format specified: ${r}`);
  }
}
var Mo = { exports: {} }, ko = { exports: {} }, In = {}, en = {}, Bv;
function rn() {
  if (Bv) return en;
  Bv = 1, en.__esModule = !0, en.extend = o, en.indexOf = h, en.escapeExpression = g, en.isEmpty = y, en.createFrame = _, en.blockParams = b, en.appendContextPath = v;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, i = /[&<>"'`=]/;
  function s(f) {
    return t[f];
  }
  function o(f) {
    for (var S = 1; S < arguments.length; S++)
      for (var E in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], E) && (f[E] = arguments[S][E]);
    return f;
  }
  var u = Object.prototype.toString;
  en.toString = u;
  var d = function(S) {
    return typeof S == "function";
  };
  d(/x/) && (en.isFunction = d = function(f) {
    return typeof f == "function" && u.call(f) === "[object Function]";
  }), en.isFunction = d;
  var p = Array.isArray || function(f) {
    return f && typeof f == "object" ? u.call(f) === "[object Array]" : !1;
  };
  en.isArray = p;
  function h(f, S) {
    for (var E = 0, O = f.length; E < O; E++)
      if (f[E] === S)
        return E;
    return -1;
  }
  function g(f) {
    if (typeof f != "string") {
      if (f && f.toHTML)
        return f.toHTML();
      if (f == null)
        return "";
      if (!f)
        return f + "";
      f = "" + f;
    }
    return i.test(f) ? f.replace(r, s) : f;
  }
  function y(f) {
    return !f && f !== 0 ? !0 : !!(p(f) && f.length === 0);
  }
  function _(f) {
    var S = o({}, f);
    return S._parent = f, S;
  }
  function b(f, S) {
    return f.path = S, f;
  }
  function v(f, S) {
    return (f ? f + "." : "") + S;
  }
  return en;
}
var Ro = { exports: {} }, Uv;
function qn() {
  return Uv || (Uv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var d = u && u.loc, p = void 0, h = void 0, g = void 0, y = void 0;
      d && (p = d.start.line, h = d.end.line, g = d.start.column, y = d.end.column, o += " - " + p + ":" + g);
      for (var _ = Error.prototype.constructor.call(this, o), b = 0; b < i.length; b++)
        this[i[b]] = _[i[b]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        d && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: y,
          enumerable: !0
        })) : (this.column = g, this.endColumn = y));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(Ro, Ro.exports)), Ro.exports;
}
var Fs = {}, jo = { exports: {} }, Hv;
function cE() {
  return Hv || (Hv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = rn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(o, u) {
        var d = u.inverse, p = u.fn;
        if (o === !0)
          return p(this);
        if (o === !1 || o == null)
          return d(this);
        if (i.isArray(o))
          return o.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(o, u)) : d(this);
        if (u.data && u.ids) {
          var h = i.createFrame(u.data);
          h.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return p(o, u);
      });
    }, t.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var zo = { exports: {} }, qv;
function fE() {
  return qv || (qv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var s = rn(), o = qn(), u = i(o);
    r.default = function(d) {
      d.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var g = h.fn, y = h.inverse, _ = 0, b = "", v = void 0, f = void 0;
        h.data && h.ids && (f = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (v = s.createFrame(h.data));
        function S(x, T, M) {
          v && (v.key = x, v.index = T, v.first = T === 0, v.last = !!M, f && (v.contextPath = f + x)), b = b + g(p[x], {
            data: v,
            blockParams: s.blockParams([p[x], x], [f + x, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var E = p.length; _ < E; _++)
              _ in p && S(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var O = [], w = p[Symbol.iterator](), D = w.next(); !D.done; D = w.next())
              O.push(D.value);
            p = O;
            for (var E = p.length; _ < E; _++)
              S(_, _, _ === p.length - 1);
          } else
            (function() {
              var x = void 0;
              Object.keys(p).forEach(function(T) {
                x !== void 0 && S(x, _ - 1), x = T, _++;
              }), x !== void 0 && S(x, _ - 1, !0);
            })();
        return _ === 0 && (b = y(this)), b;
      });
    }, t.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var Lo = { exports: {} }, Fv;
function dE() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = qn(), o = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Po = { exports: {} }, Zv;
function hE() {
  return Zv || (Zv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var s = rn(), o = qn(), u = i(o);
    r.default = function(d) {
      d.registerHelper("if", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(p) && (p = p.call(this)), !h.hash.includeZero && !p || s.isEmpty(p) ? h.inverse(this) : h.fn(this);
      }), d.registerHelper("unless", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return d.helpers.if.call(this, p, {
          fn: h.inverse,
          inverse: h.fn,
          hash: h.hash
        });
      });
    }, t.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Io = { exports: {} }, Gv;
function pE() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], o = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var d = 1;
        o.hash.level != null ? d = o.hash.level : o.data && o.data.level != null && (d = o.data.level), s[0] = d, i.log.apply(i, s);
      });
    }, t.exports = r.default;
  })(Io, Io.exports)), Io.exports;
}
var Bo = { exports: {} }, Vv;
function mE() {
  return Vv || (Vv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, t.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var Uo = { exports: {} }, Yv;
function gE() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var s = rn(), o = qn(), u = i(o);
    r.default = function(d) {
      d.registerHelper("with", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var g = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var y = h.data;
        return h.data && h.ids && (y = s.createFrame(h.data), y.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), g(p, {
          data: y,
          blockParams: s.blockParams([p], [y && y.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Xv;
function I0() {
  if (Xv) return Fs;
  Xv = 1, Fs.__esModule = !0, Fs.registerDefaultHelpers = S, Fs.moveHelperToHooks = E;
  function t(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = cE(), i = t(r), s = fE(), o = t(s), u = dE(), d = t(u), p = hE(), h = t(p), g = pE(), y = t(g), _ = mE(), b = t(_), v = gE(), f = t(v);
  function S(O) {
    i.default(O), o.default(O), d.default(O), h.default(O), y.default(O), b.default(O), f.default(O);
  }
  function E(O, w, D) {
    O.helpers[w] && (O.hooks[w] = O.helpers[w], D || delete O.helpers[w]);
  }
  return Fs;
}
var Ho = {}, qo = { exports: {} }, $v;
function vE() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    var i = rn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, d, p) {
        var h = o;
        return u.partials || (u.partials = {}, h = function(g, y) {
          var _ = d.partials;
          d.partials = i.extend({}, _, u.partials);
          var b = o(g, y);
          return d.partials = _, b;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(qo, qo.exports)), qo.exports;
}
var Qv;
function yE() {
  if (Qv) return Ho;
  Qv = 1, Ho.__esModule = !0, Ho.registerDefaultDecorators = s;
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = vE(), i = t(r);
  function s(o) {
    i.default(o);
  }
  return Ho;
}
var Fo = { exports: {} }, Kv;
function B0() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = rn(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(u) {
        if (typeof u == "string") {
          var d = i.indexOf(s.methodMap, u.toLowerCase());
          d >= 0 ? u = d : u = parseInt(u, 10);
        }
        return u;
      },
      // Can be overridden in the host environment
      log: function(u) {
        if (u = s.lookupLevel(u), typeof console < "u" && s.lookupLevel(s.level) <= u) {
          var d = s.methodMap[u];
          console[d] || (d = "log");
          for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
            h[g - 1] = arguments[g];
          console[d].apply(console, h);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Fo, Fo.exports)), Fo.exports;
}
var Oi = {}, Zo = {}, Jv;
function bE() {
  if (Jv) return Zo;
  Jv = 1, Zo.__esModule = !0, Zo.createNewLookupObject = r;
  var t = rn();
  function r() {
    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Zo;
}
var Wv;
function U0() {
  if (Wv) return Oi;
  Wv = 1, Oi.__esModule = !0, Oi.createProtoAccessControl = u, Oi.resultIsAllowed = d, Oi.resetLoggedProperties = g;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = bE(), i = B0(), s = t(i), o = /* @__PURE__ */ Object.create(null);
  function u(y) {
    var _ = /* @__PURE__ */ Object.create(null);
    _.constructor = !1, _.__defineGetter__ = !1, _.__defineSetter__ = !1, _.__lookupGetter__ = !1;
    var b = /* @__PURE__ */ Object.create(null);
    return b.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(b, y.allowedProtoProperties),
        defaultValue: y.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(_, y.allowedProtoMethods),
        defaultValue: y.allowProtoMethodsByDefault
      }
    };
  }
  function d(y, _, b) {
    return p(typeof y == "function" ? _.methods : _.properties, b);
  }
  function p(y, _) {
    return y.whitelist[_] !== void 0 ? y.whitelist[_] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (h(_), !1);
  }
  function h(y) {
    o[y] !== !0 && (o[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(o).forEach(function(y) {
      delete o[y];
    });
  }
  return Oi;
}
var ey;
function ah() {
  if (ey) return In;
  ey = 1, In.__esModule = !0, In.HandlebarsEnvironment = f;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = rn(), i = qn(), s = t(i), o = I0(), u = yE(), d = B0(), p = t(d), h = U0(), g = "4.7.8";
  In.VERSION = g;
  var y = 8;
  In.COMPILER_REVISION = y;
  var _ = 7;
  In.LAST_COMPATIBLE_COMPILER_REVISION = _;
  var b = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  In.REVISION_CHANGES = b;
  var v = "[object Object]";
  function f(E, O, w) {
    this.helpers = E || {}, this.partials = O || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  f.prototype = {
    constructor: f,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(O, w) {
      if (r.toString.call(O) === v) {
        if (w)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, O);
      } else
        this.helpers[O] = w;
    },
    unregisterHelper: function(O) {
      delete this.helpers[O];
    },
    registerPartial: function(O, w) {
      if (r.toString.call(O) === v)
        r.extend(this.partials, O);
      else {
        if (typeof w > "u")
          throw new s.default('Attempting to register a partial called "' + O + '" as undefined');
        this.partials[O] = w;
      }
    },
    unregisterPartial: function(O) {
      delete this.partials[O];
    },
    registerDecorator: function(O, w) {
      if (r.toString.call(O) === v) {
        if (w)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, O);
      } else
        this.decorators[O] = w;
    },
    unregisterDecorator: function(O) {
      delete this.decorators[O];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      h.resetLoggedProperties();
    }
  };
  var S = p.default.log;
  return In.log = S, In.createFrame = r.createFrame, In.logger = p.default, In;
}
var Go = { exports: {} }, ty;
function _E() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, t.exports = r.default;
  })(Go, Go.exports)), Go.exports;
}
var yr = {}, Vo = {}, ny;
function SE() {
  if (ny) return Vo;
  ny = 1, Vo.__esModule = !0, Vo.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Vo;
}
var ry;
function xE() {
  if (ry) return yr;
  ry = 1, yr.__esModule = !0, yr.checkRevision = y, yr.template = _, yr.wrapProgram = b, yr.resolvePartial = v, yr.invokePartial = f, yr.noop = S;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function r(x) {
    if (x && x.__esModule)
      return x;
    var T = {};
    if (x != null)
      for (var M in x)
        Object.prototype.hasOwnProperty.call(x, M) && (T[M] = x[M]);
    return T.default = x, T;
  }
  var i = rn(), s = r(i), o = qn(), u = t(o), d = ah(), p = I0(), h = SE(), g = U0();
  function y(x) {
    var T = x && x[0] || 1, M = d.COMPILER_REVISION;
    if (!(T >= d.LAST_COMPATIBLE_COMPILER_REVISION && T <= d.COMPILER_REVISION))
      if (T < d.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = d.REVISION_CHANGES[M], q = d.REVISION_CHANGES[T];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + q + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + x[1] + ").");
  }
  function _(x, T) {
    if (!T)
      throw new u.default("No environment passed to template");
    if (!x || !x.main)
      throw new u.default("Unknown template object: " + typeof x);
    x.main.decorator = x.main_d, T.VM.checkRevision(x.compiler);
    var M = x.compiler && x.compiler[0] === 7;
    function k(B, V, $) {
      $.hash && (V = s.extend({}, V, $.hash), $.ids && ($.ids[0] = !0)), B = T.VM.resolvePartial.call(this, B, V, $);
      var oe = s.extend({}, $, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = T.VM.invokePartial.call(this, B, V, oe);
      if (fe == null && T.compile && ($.partials[$.name] = T.compile(B, x.compilerOptions, T), fe = $.partials[$.name](V, oe)), fe != null) {
        if ($.indent) {
          for (var me = fe.split(`
`), U = 0, te = me.length; U < te && !(!me[U] && U + 1 === te); U++)
            me[U] = $.indent + me[U];
          fe = me.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + $.name + " could not be compiled when running in runtime-only mode");
    }
    var q = {
      strict: function(V, $, oe) {
        if (!V || !($ in V))
          throw new u.default('"' + $ + '" not defined in ' + V, {
            loc: oe
          });
        return q.lookupProperty(V, $);
      },
      lookupProperty: function(V, $) {
        var oe = V[$];
        if (oe == null || Object.prototype.hasOwnProperty.call(V, $) || g.resultIsAllowed(oe, q.protoAccessControl, $))
          return oe;
      },
      lookup: function(V, $) {
        for (var oe = V.length, fe = 0; fe < oe; fe++) {
          var me = V[fe] && q.lookupProperty(V[fe], $);
          if (me != null)
            return V[fe][$];
        }
      },
      lambda: function(V, $) {
        return typeof V == "function" ? V.call($) : V;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(V) {
        var $ = x[V];
        return $.decorator = x[V + "_d"], $;
      },
      programs: [],
      program: function(V, $, oe, fe, me) {
        var U = this.programs[V], te = this.fn(V);
        return $ || me || fe || oe ? U = b(this, V, te, $, oe, fe, me) : U || (U = this.programs[V] = b(this, V, te)), U;
      },
      data: function(V, $) {
        for (; V && $--; )
          V = V._parent;
        return V;
      },
      mergeIfNeeded: function(V, $) {
        var oe = V || $;
        return V && $ && V !== $ && (oe = s.extend({}, $, V)), oe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: T.VM.noop,
      compilerInfo: x.compiler
    };
    function G(B) {
      var V = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = V.data;
      G._setup(V), !V.partial && x.useData && ($ = E(B, $));
      var oe = void 0, fe = x.useBlockParams ? [] : void 0;
      x.useDepths && (V.depths ? oe = B != V.depths[0] ? [B].concat(V.depths) : V.depths : oe = [B]);
      function me(U) {
        return "" + x.main(q, U, q.helpers, q.partials, $, fe, oe);
      }
      return me = O(x.main, me, q, V.depths || [], $, fe), me(B, V);
    }
    return G.isTop = !0, G._setup = function(B) {
      if (B.partial)
        q.protoAccessControl = B.protoAccessControl, q.helpers = B.helpers, q.partials = B.partials, q.decorators = B.decorators, q.hooks = B.hooks;
      else {
        var V = s.extend({}, T.helpers, B.helpers);
        w(V, q), q.helpers = V, x.usePartial && (q.partials = q.mergeIfNeeded(B.partials, T.partials)), (x.usePartial || x.useDecorators) && (q.decorators = s.extend({}, T.decorators, B.decorators)), q.hooks = {}, q.protoAccessControl = g.createProtoAccessControl(B);
        var $ = B.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(q, "helperMissing", $), p.moveHelperToHooks(q, "blockHelperMissing", $);
      }
    }, G._child = function(B, V, $, oe) {
      if (x.useBlockParams && !$)
        throw new u.default("must pass block params");
      if (x.useDepths && !oe)
        throw new u.default("must pass parent depths");
      return b(q, B, x[B], V, 0, $, oe);
    }, G;
  }
  function b(x, T, M, k, q, G, B) {
    function V($) {
      var oe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = B;
      return B && $ != B[0] && !($ === x.nullContext && B[0] === null) && (fe = [$].concat(B)), M(x, $, x.helpers, x.partials, oe.data || k, G && [oe.blockParams].concat(G), fe);
    }
    return V = O(M, V, x, B, k, G), V.program = T, V.depth = B ? B.length : 0, V.blockParams = q || 0, V;
  }
  function v(x, T, M) {
    return x ? !x.call && !M.name && (M.name = x, x = M.partials[x]) : M.name === "@partial-block" ? x = M.data["partial-block"] : x = M.partials[M.name], x;
  }
  function f(x, T, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var q = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = d.createFrame(M.data);
      var G = M.fn;
      q = M.data["partial-block"] = function(V) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = d.createFrame($.data), $.data["partial-block"] = k, G(V, $);
      }, G.partials && (M.partials = s.extend({}, M.partials, G.partials));
    })(), x === void 0 && q && (x = q), x === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (x instanceof Function)
      return x(T, M);
  }
  function S() {
    return "";
  }
  function E(x, T) {
    return (!T || !("root" in T)) && (T = T ? d.createFrame(T) : {}, T.root = x), T;
  }
  function O(x, T, M, k, q, G) {
    if (x.decorator) {
      var B = {};
      T = x.decorator(T, B, M, k && k[0], q, G, k), s.extend(T, B);
    }
    return T;
  }
  function w(x, T) {
    Object.keys(x).forEach(function(M) {
      var k = x[M];
      x[M] = D(k, T);
    });
  }
  function D(x, T) {
    var M = T.lookupProperty;
    return h.wrapHelper(x, function(k) {
      return s.extend({ lookupProperty: M }, k);
    });
  }
  return yr;
}
var Yo = { exports: {} }, ay;
function H0() {
  return ay || (ay = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var s = globalThis.Handlebars;
      i.noConflict = function() {
        return globalThis.Handlebars === i && (globalThis.Handlebars = s), i;
      };
    }, t.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var iy;
function EE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function s(w) {
      if (w && w.__esModule)
        return w;
      var D = {};
      if (w != null)
        for (var x in w)
          Object.prototype.hasOwnProperty.call(w, x) && (D[x] = w[x]);
      return D.default = w, D;
    }
    var o = ah(), u = s(o), d = _E(), p = i(d), h = qn(), g = i(h), y = rn(), _ = s(y), b = xE(), v = s(b), f = H0(), S = i(f);
    function E() {
      var w = new u.HandlebarsEnvironment();
      return _.extend(w, u), w.SafeString = p.default, w.Exception = g.default, w.Utils = _, w.escapeExpression = _.escapeExpression, w.VM = v, w.template = function(D) {
        return v.template(D, w);
      }, w;
    }
    var O = E();
    O.create = E, S.default(O), O.default = O, r.default = O, t.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var Xo = { exports: {} }, sy;
function q0() {
  return sy || (sy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(o) {
          return o.type === "SubExpression" || (o.type === "MustacheStatement" || o.type === "BlockStatement") && !!(o.params && o.params.length || o.hash);
        },
        scopedId: function(o) {
          return /^\.|this\b/.test(o.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(o) {
          return o.parts.length === 1 && !i.helpers.scopedId(o) && !o.depth;
        }
      }
    };
    r.default = i, t.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var Ni = {}, $o = { exports: {} }, ly;
function CE() {
  return ly || (ly = 1, (function(t, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, h, g, y, _, b, v) {
          var f = b.length - 1;
          switch (_) {
            case 1:
              return b[f - 1];
            case 2:
              this.$ = y.prepareProgram(b[f]);
              break;
            case 3:
              this.$ = b[f];
              break;
            case 4:
              this.$ = b[f];
              break;
            case 5:
              this.$ = b[f];
              break;
            case 6:
              this.$ = b[f];
              break;
            case 7:
              this.$ = b[f];
              break;
            case 8:
              this.$ = b[f];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(b[f]),
                strip: y.stripFlags(b[f], b[f]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: b[f],
                value: b[f],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(b[f - 2], b[f - 1], b[f], this._$);
              break;
            case 12:
              this.$ = { path: b[f - 3], params: b[f - 2], hash: b[f - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(b[f - 3], b[f - 2], b[f - 1], b[f], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(b[f - 3], b[f - 2], b[f - 1], b[f], !0, this._$);
              break;
            case 15:
              this.$ = { open: b[f - 5], path: b[f - 4], params: b[f - 3], hash: b[f - 2], blockParams: b[f - 1], strip: y.stripFlags(b[f - 5], b[f]) };
              break;
            case 16:
              this.$ = { path: b[f - 4], params: b[f - 3], hash: b[f - 2], blockParams: b[f - 1], strip: y.stripFlags(b[f - 5], b[f]) };
              break;
            case 17:
              this.$ = { path: b[f - 4], params: b[f - 3], hash: b[f - 2], blockParams: b[f - 1], strip: y.stripFlags(b[f - 5], b[f]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(b[f - 1], b[f - 1]), program: b[f] };
              break;
            case 19:
              var S = y.prepareBlock(b[f - 2], b[f - 1], b[f], b[f], !1, this._$), E = y.prepareProgram([S], b[f - 1].loc);
              E.chained = !0, this.$ = { strip: b[f - 2].strip, program: E, chain: !0 };
              break;
            case 20:
              this.$ = b[f];
              break;
            case 21:
              this.$ = { path: b[f - 1], strip: y.stripFlags(b[f - 2], b[f]) };
              break;
            case 22:
              this.$ = y.prepareMustache(b[f - 3], b[f - 2], b[f - 1], b[f - 4], y.stripFlags(b[f - 4], b[f]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(b[f - 3], b[f - 2], b[f - 1], b[f - 4], y.stripFlags(b[f - 4], b[f]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: b[f - 3],
                params: b[f - 2],
                hash: b[f - 1],
                indent: "",
                strip: y.stripFlags(b[f - 4], b[f]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(b[f - 2], b[f - 1], b[f], this._$);
              break;
            case 26:
              this.$ = { path: b[f - 3], params: b[f - 2], hash: b[f - 1], strip: y.stripFlags(b[f - 4], b[f]) };
              break;
            case 27:
              this.$ = b[f];
              break;
            case 28:
              this.$ = b[f];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: b[f - 3],
                params: b[f - 2],
                hash: b[f - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: b[f], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(b[f - 2]), value: b[f], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(b[f - 1]);
              break;
            case 33:
              this.$ = b[f];
              break;
            case 34:
              this.$ = b[f];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: b[f], original: b[f], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(b[f]), original: Number(b[f]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: b[f] === "true", original: b[f] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = b[f];
              break;
            case 41:
              this.$ = b[f];
              break;
            case 42:
              this.$ = y.preparePath(!0, b[f], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, b[f], this._$);
              break;
            case 44:
              b[f - 2].push({ part: y.id(b[f]), original: b[f], separator: b[f - 1] }), this.$ = b[f - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(b[f]), original: b[f] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              b[f - 1].push(b[f]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              b[f - 1].push(b[f]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              b[f - 1].push(b[f]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              b[f - 1].push(b[f]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              b[f - 1].push(b[f]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              b[f - 1].push(b[f]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              b[f - 1].push(b[f]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              b[f - 1].push(b[f]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              b[f - 1].push(b[f]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              b[f - 1].push(b[f]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              b[f - 1].push(b[f]);
              break;
            case 98:
              this.$ = [b[f]];
              break;
            case 99:
              b[f - 1].push(b[f]);
              break;
            case 100:
              this.$ = [b[f]];
              break;
            case 101:
              b[f - 1].push(b[f]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, h) {
          throw new Error(p);
        },
        parse: function(p) {
          var h = this, g = [0], y = [null], _ = [], b = this.table, v = "", f = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          _.push(E);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var oe;
            return oe = h.lexer.lex() || 1, typeof oe != "number" && (oe = h.symbols_[oe] || oe), oe;
          }
          for (var D, x, T, M, k = {}, q, G, B, V; ; ) {
            if (x = g[g.length - 1], this.defaultActions[x] ? T = this.defaultActions[x] : ((D === null || typeof D > "u") && (D = w()), T = b[x] && b[x][D]), typeof T > "u" || !T.length || !T[0]) {
              var $ = "";
              {
                V = [];
                for (q in b[x]) this.terminals_[q] && q > 2 && V.push("'" + this.terminals_[q] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (f + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + V.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : $ = "Parse error on line " + (f + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: E, expected: V });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + x + ", token: " + D);
            switch (T[0]) {
              case 1:
                g.push(D), y.push(this.lexer.yytext), _.push(this.lexer.yylloc), g.push(T[1]), D = null, S = this.lexer.yyleng, v = this.lexer.yytext, f = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (G = this.productions_[T[1]][1], k.$ = y[y.length - G], k._$ = { first_line: _[_.length - (G || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (G || 1)].first_column, last_column: _[_.length - 1].last_column }, O && (k._$.range = [_[_.length - (G || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(k, v, S, f, this.yy, T[1], y, _), typeof M < "u")
                  return M;
                G && (g = g.slice(0, -1 * G * 2), y = y.slice(0, -1 * G), _ = _.slice(0, -1 * G)), g.push(this.productions_[T[1]][0]), y.push(k.$), _.push(k._$), B = b[g[g.length - 2]][g[g.length - 1]], g.push(B);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, o = (function() {
        var d = {
          EOF: 1,
          parseError: function(h, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, g);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var g = h.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var g = h.length, y = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
            var b = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: y ? (y.length === _.length ? this.yylloc.first_column : 0) + _[_.length - y.length].length - y[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - g]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(h) {
            this.unput(this.match.slice(h));
          },
          pastInput: function() {
            var h = this.matched.substr(0, this.matched.length - this.match.length);
            return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var h = this.match;
            return h.length < 20 && (h += this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var h = this.pastInput(), g = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, g, y, _, b;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), f = 0; f < v.length && (y = this._input.match(this.rules[v[f]]), !(y && (!g || y[0].length > g[0].length) && (g = y, _ = f, !this.options.flex))); f++)
              ;
            return g ? (b = g[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], h = this.performAction.call(this, this.yy, this, v[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var h = this.next();
            return typeof h < "u" ? h : this.lex();
          },
          begin: function(h) {
            this.conditionStack.push(h);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(h) {
            this.begin(h);
          }
        };
        return d.options = {}, d.performAction = function(h, g, y, _) {
          function b(v, f) {
            return g.yytext = g.yytext.substring(v, g.yyleng - f + v);
          }
          switch (y) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (b(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (b(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (b(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(g.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return g.yytext = b(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = b(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return g.yytext = g.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, d.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], d.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, d;
      })();
      s.lexer = o;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = i, t.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var Qo = { exports: {} }, Ko = { exports: {} }, oy;
function F0() {
  return oy || (oy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = qn(), o = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(y, _) {
        var b = this.accept(y[_]);
        if (this.mutating) {
          if (b && !u.prototype[b.type])
            throw new o.default('Unexpected node type "' + b.type + '" found when accepting ' + _ + " on " + y.type);
          y[_] = b;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(y, _) {
        if (this.acceptKey(y, _), !y[_])
          throw new o.default(y.type + " requires " + _);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(y) {
        for (var _ = 0, b = y.length; _ < b; _++)
          this.acceptKey(y, _), y[_] || (y.splice(_, 1), _--, b--);
      },
      accept: function(y) {
        if (y) {
          if (!this[y.type])
            throw new o.default("Unknown type: " + y.type, y);
          this.current && this.parents.unshift(this.current), this.current = y;
          var _ = this[y.type](y);
          if (this.current = this.parents.shift(), !this.mutating || _)
            return _;
          if (_ !== !1)
            return y;
        }
      },
      Program: function(y) {
        this.acceptArray(y.body);
      },
      MustacheStatement: d,
      Decorator: d,
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: h,
      PartialBlockStatement: function(y) {
        h.call(this, y), this.acceptKey(y, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: d,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(y) {
        this.acceptArray(y.pairs);
      },
      HashPair: function(y) {
        this.acceptRequired(y, "value");
      }
    };
    function d(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function p(g) {
      d.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function h(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, t.exports = r.default;
  })(Ko, Ko.exports)), Ko.exports;
}
var uy;
function wE() {
  return uy || (uy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = F0(), o = i(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new o.default(), u.prototype.Program = function(y) {
      var _ = !this.options.ignoreStandalone, b = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, f = 0, S = v.length; f < S; f++) {
        var E = v[f], O = this.accept(E);
        if (O) {
          var w = d(v, f, b), D = p(v, f, b), x = O.openStandalone && w, T = O.closeStandalone && D, M = O.inlineStandalone && w && D;
          O.close && h(v, f, !0), O.open && g(v, f, !0), _ && M && (h(v, f), g(v, f) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(v[f - 1].original)[1])), _ && x && (h((E.program || E.inverse).body), g(v, f)), _ && T && (h(v, f), g((E.inverse || E.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var _ = y.program || y.inverse, b = y.program && y.inverse, v = b, f = b;
      if (b && b.chained)
        for (v = b.body[0].program; f.chained; )
          f = f.body[f.body.length - 1].program;
      var S = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: d((v || _).body)
      };
      if (y.openStrip.close && h(_.body, null, !0), b) {
        var E = y.inverseStrip;
        E.open && g(_.body, null, !0), E.close && h(v.body, null, !0), y.closeStrip.open && g(f.body, null, !0), !this.options.ignoreStandalone && d(_.body) && p(v.body) && (g(_.body), h(v.body));
      } else y.closeStrip.open && g(_.body, null, !0);
      return S;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(y) {
      return y.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(y) {
      var _ = y.strip || {};
      return {
        inlineStandalone: !0,
        open: _.open,
        close: _.close
      };
    };
    function d(y, _, b) {
      _ === void 0 && (_ = y.length);
      var v = y[_ - 1], f = y[_ - 2];
      if (!v)
        return b;
      if (v.type === "ContentStatement")
        return (f || !b ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function p(y, _, b) {
      _ === void 0 && (_ = -1);
      var v = y[_ + 1], f = y[_ + 2];
      if (!v)
        return b;
      if (v.type === "ContentStatement")
        return (f || !b ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function h(y, _, b) {
      var v = y[_ == null ? 0 : _ + 1];
      if (!(!v || v.type !== "ContentStatement" || !b && v.rightStripped)) {
        var f = v.value;
        v.value = v.value.replace(b ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== f;
      }
    }
    function g(y, _, b) {
      var v = y[_ == null ? y.length - 1 : _ - 1];
      if (!(!v || v.type !== "ContentStatement" || !b && v.leftStripped)) {
        var f = v.value;
        return v.value = v.value.replace(b ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== f, v.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var hn = {}, cy;
function AE() {
  if (cy) return hn;
  cy = 1, hn.__esModule = !0, hn.SourceLocation = o, hn.id = u, hn.stripFlags = d, hn.stripComment = p, hn.preparePath = h, hn.prepareMustache = g, hn.prepareRawBlock = y, hn.prepareBlock = _, hn.prepareProgram = b, hn.preparePartialBlock = v;
  function t(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var r = qn(), i = t(r);
  function s(f, S) {
    if (S = S.path ? S.path.original : S, f.path.original !== S) {
      var E = { loc: f.path.loc };
      throw new i.default(f.path.original + " doesn't match " + S, E);
    }
  }
  function o(f, S) {
    this.source = f, this.start = {
      line: S.first_line,
      column: S.first_column
    }, this.end = {
      line: S.last_line,
      column: S.last_column
    };
  }
  function u(f) {
    return /^\[.*\]$/.test(f) ? f.substring(1, f.length - 1) : f;
  }
  function d(f, S) {
    return {
      open: f.charAt(2) === "~",
      close: S.charAt(S.length - 3) === "~"
    };
  }
  function p(f) {
    return f.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(f, S, E) {
    E = this.locInfo(E);
    for (var O = f ? "@" : "", w = [], D = 0, x = 0, T = S.length; x < T; x++) {
      var M = S[x].part, k = S[x].original !== M;
      if (O += (S[x].separator || "") + M, !k && (M === ".." || M === "." || M === "this")) {
        if (w.length > 0)
          throw new i.default("Invalid path: " + O, { loc: E });
        M === ".." && D++;
      } else
        w.push(M);
    }
    return {
      type: "PathExpression",
      data: f,
      depth: D,
      parts: w,
      original: O,
      loc: E
    };
  }
  function g(f, S, E, O, w, D) {
    var x = O.charAt(3) || O.charAt(2), T = x !== "{" && x !== "&", M = /\*/.test(O);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: f,
      params: S,
      hash: E,
      escaped: T,
      strip: w,
      loc: this.locInfo(D)
    };
  }
  function y(f, S, E, O) {
    s(f, E), O = this.locInfo(O);
    var w = {
      type: "Program",
      body: S,
      strip: {},
      loc: O
    };
    return {
      type: "BlockStatement",
      path: f.path,
      params: f.params,
      hash: f.hash,
      program: w,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function _(f, S, E, O, w, D) {
    O && O.path && s(f, O);
    var x = /\*/.test(f.open);
    S.blockParams = f.blockParams;
    var T = void 0, M = void 0;
    if (E) {
      if (x)
        throw new i.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = O.strip), M = E.strip, T = E.program;
    }
    return w && (w = T, T = S, S = w), {
      type: x ? "DecoratorBlock" : "BlockStatement",
      path: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      inverse: T,
      openStrip: f.strip,
      inverseStrip: M,
      closeStrip: O && O.strip,
      loc: this.locInfo(D)
    };
  }
  function b(f, S) {
    if (!S && f.length) {
      var E = f[0].loc, O = f[f.length - 1].loc;
      E && O && (S = {
        source: E.source,
        start: {
          line: E.start.line,
          column: E.start.column
        },
        end: {
          line: O.end.line,
          column: O.end.column
        }
      });
    }
    return {
      type: "Program",
      body: f,
      strip: {},
      loc: S
    };
  }
  function v(f, S, E, O) {
    return s(f, E), {
      type: "PartialBlockStatement",
      name: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      openStrip: f.strip,
      closeStrip: E && E.strip,
      loc: this.locInfo(O)
    };
  }
  return hn;
}
var fy;
function TE() {
  if (fy) return Ni;
  fy = 1, Ni.__esModule = !0, Ni.parseWithoutProcessing = y, Ni.parse = _;
  function t(b) {
    if (b && b.__esModule)
      return b;
    var v = {};
    if (b != null)
      for (var f in b)
        Object.prototype.hasOwnProperty.call(b, f) && (v[f] = b[f]);
    return v.default = b, v;
  }
  function r(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var i = CE(), s = r(i), o = wE(), u = r(o), d = AE(), p = t(d), h = rn();
  Ni.parser = s.default;
  var g = {};
  h.extend(g, p);
  function y(b, v) {
    if (b.type === "Program")
      return b;
    s.default.yy = g, g.locInfo = function(S) {
      return new g.SourceLocation(v && v.srcName, S);
    };
    var f = s.default.parse(b);
    return f;
  }
  function _(b, v) {
    var f = y(b, v), S = new u.default(v);
    return S.accept(f);
  }
  return Ni;
}
var Di = {}, dy;
function OE() {
  if (dy) return Di;
  dy = 1, Di.__esModule = !0, Di.Compiler = p, Di.precompile = h, Di.compile = g;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = qn(), i = t(r), s = rn(), o = q0(), u = t(o), d = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(v) {
      var f = this.opcodes.length;
      if (v.opcodes.length !== f)
        return !1;
      for (var S = 0; S < f; S++) {
        var E = this.opcodes[S], O = v.opcodes[S];
        if (E.opcode !== O.opcode || !y(E.args, O.args))
          return !1;
      }
      f = this.children.length;
      for (var S = 0; S < f; S++)
        if (!this.children[S].equals(v.children[S]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(v, f) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = f, this.stringParams = f.stringParams, this.trackIds = f.trackIds, f.blockParams = f.blockParams || [], f.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, f.knownHelpers), this.accept(v);
    },
    compileProgram: function(v) {
      var f = new this.compiler(), S = f.compile(v, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[E] = S, this.useDepths = this.useDepths || S.useDepths, E;
    },
    accept: function(v) {
      if (!this[v.type])
        throw new i.default("Unknown type: " + v.type, v);
      this.sourceNode.unshift(v);
      var f = this[v.type](v);
      return this.sourceNode.shift(), f;
    },
    Program: function(v) {
      this.options.blockParams.unshift(v.blockParams);
      for (var f = v.body, S = f.length, E = 0; E < S; E++)
        this.accept(f[E]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      _(v);
      var f = v.program, S = v.inverse;
      f = f && this.compileProgram(f), S = S && this.compileProgram(S);
      var E = this.classifySexpr(v);
      E === "helper" ? this.helperSexpr(v, f, S) : E === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, f, S), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var f = v.program && this.compileProgram(v.program), S = this.setupFullMustacheParams(v, f, void 0), E = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, E.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var f = v.program;
      f && (f = this.compileProgram(v.program));
      var S = v.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, v);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = v.name.original, O = v.name.type === "SubExpression";
      O && this.accept(v.name), this.setupFullMustacheParams(v, f, void 0, !0);
      var w = v.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", O, E, w), this.opcode("append");
    },
    PartialBlockStatement: function(v) {
      this.PartialStatement(v);
    },
    MustacheStatement: function(v) {
      this.SubExpression(v), v.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(v) {
      this.DecoratorBlock(v);
    },
    ContentStatement: function(v) {
      v.value && this.opcode("appendContent", v.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(v) {
      _(v);
      var f = this.classifySexpr(v);
      f === "simple" ? this.simpleSexpr(v) : f === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, f, S) {
      var E = v.path, O = E.parts[0], w = f != null || S != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", f), this.opcode("pushProgram", S), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", O, w);
    },
    simpleSexpr: function(v) {
      var f = v.path;
      f.strict = !0, this.accept(f), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, f, S) {
      var E = this.setupFullMustacheParams(v, f, S), O = v.path, w = O.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", E.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + w, v);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", E.length, O.original, u.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(v) {
      this.addDepth(v.depth), this.opcode("getContext", v.depth);
      var f = v.parts[0], S = u.default.helpers.scopedId(v), E = !v.depth && !S && this.blockParamIndex(f);
      E ? this.opcode("lookupBlockParam", E, v.parts) : f ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, S) : this.opcode("pushContext");
    },
    StringLiteral: function(v) {
      this.opcode("pushString", v.value);
    },
    NumberLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    BooleanLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(v) {
      var f = v.pairs, S = 0, E = f.length;
      for (this.opcode("pushHash"); S < E; S++)
        this.pushParam(f[S].value);
      for (; S--; )
        this.opcode("assignToHash", f[S].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(v) {
      this.opcodes.push({
        opcode: v,
        args: d.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(v) {
      v && (this.useDepths = !0);
    },
    classifySexpr: function(v) {
      var f = u.default.helpers.simpleId(v.path), S = f && !!this.blockParamIndex(v.path.parts[0]), E = !S && u.default.helpers.helperExpression(v), O = !S && (E || f);
      if (O && !E) {
        var w = v.path.parts[0], D = this.options;
        D.knownHelpers[w] ? E = !0 : D.knownHelpersOnly && (O = !1);
      }
      return E ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var f = 0, S = v.length; f < S; f++)
        this.pushParam(v[f]);
    },
    pushParam: function(v) {
      var f = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        f.replace && (f = f.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", f, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (S = this.blockParamIndex(v.parts[0])), S) {
            var E = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, E);
          } else
            f = v.original || f, f.replace && (f = f.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, f);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, f, S, E) {
      var O = v.params;
      return this.pushParams(O), this.opcode("pushProgram", f), this.opcode("pushProgram", S), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", E), O;
    },
    blockParamIndex: function(v) {
      for (var f = 0, S = this.options.blockParams.length; f < S; f++) {
        var E = this.options.blockParams[f], O = E && s.indexOf(E, v);
        if (E && O >= 0)
          return [f, O];
      }
    }
  };
  function h(b, v, f) {
    if (b == null || typeof b != "string" && b.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = f.parse(b, v), E = new f.Compiler().compile(S, v);
    return new f.JavaScriptCompiler().compile(E, v);
  }
  function g(b, v, f) {
    if (v === void 0 && (v = {}), b == null || typeof b != "string" && b.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + b);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = void 0;
    function E() {
      var w = f.parse(b, v), D = new f.Compiler().compile(w, v), x = new f.JavaScriptCompiler().compile(D, v, void 0, !0);
      return f.template(x);
    }
    function O(w, D) {
      return S || (S = E()), S.call(this, w, D);
    }
    return O._setup = function(w) {
      return S || (S = E()), S._setup(w);
    }, O._child = function(w, D, x, T) {
      return S || (S = E()), S._child(w, D, x, T);
    }, O;
  }
  function y(b, v) {
    if (b === v)
      return !0;
    if (s.isArray(b) && s.isArray(v) && b.length === v.length) {
      for (var f = 0; f < b.length; f++)
        if (!y(b[f], v[f]))
          return !1;
      return !0;
    }
  }
  function _(b) {
    if (!b.path.parts) {
      var v = b.path;
      b.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [v.original + ""],
        original: v.original + "",
        loc: v.loc
      };
    }
  }
  return Di;
}
var Jo = { exports: {} }, Wo = { exports: {} }, Zs = {}, cd = {}, eu = {}, tu = {}, hy;
function NE() {
  if (hy) return tu;
  hy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return tu.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, tu.decode = function(r) {
    var i = 65, s = 90, o = 97, u = 122, d = 48, p = 57, h = 43, g = 47, y = 26, _ = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + y : d <= r && r <= p ? r - d + _ : r == h ? 62 : r == g ? 63 : -1;
  }, tu;
}
var py;
function Z0() {
  if (py) return eu;
  py = 1;
  var t = NE(), r = 5, i = 1 << r, s = i - 1, o = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function d(p) {
    var h = (p & 1) === 1, g = p >> 1;
    return h ? -g : g;
  }
  return eu.encode = function(h) {
    var g = "", y, _ = u(h);
    do
      y = _ & s, _ >>>= r, _ > 0 && (y |= o), g += t.encode(y);
    while (_ > 0);
    return g;
  }, eu.decode = function(h, g, y) {
    var _ = h.length, b = 0, v = 0, f, S;
    do {
      if (g >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = t.decode(h.charCodeAt(g++)), S === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(g - 1));
      f = !!(S & o), S &= s, b = b + (S << v), v += r;
    } while (f);
    y.value = d(b), y.rest = g;
  }, eu;
}
var fd = {}, my;
function ul() {
  return my || (my = 1, (function(t) {
    function r(x, T, M) {
      if (T in x)
        return x[T];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + T + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(x) {
      var T = x.match(i);
      return T ? {
        scheme: T[1],
        auth: T[2],
        host: T[3],
        port: T[4],
        path: T[5]
      } : null;
    }
    t.urlParse = o;
    function u(x) {
      var T = "";
      return x.scheme && (T += x.scheme + ":"), T += "//", x.auth && (T += x.auth + "@"), x.host && (T += x.host), x.port && (T += ":" + x.port), x.path && (T += x.path), T;
    }
    t.urlGenerate = u;
    function d(x) {
      var T = x, M = o(x);
      if (M) {
        if (!M.path)
          return x;
        T = M.path;
      }
      for (var k = t.isAbsolute(T), q = T.split(/\/+/), G, B = 0, V = q.length - 1; V >= 0; V--)
        G = q[V], G === "." ? q.splice(V, 1) : G === ".." ? B++ : B > 0 && (G === "" ? (q.splice(V + 1, B), B = 0) : (q.splice(V, 2), B--));
      return T = q.join("/"), T === "" && (T = k ? "/" : "."), M ? (M.path = T, u(M)) : T;
    }
    t.normalize = d;
    function p(x, T) {
      x === "" && (x = "."), T === "" && (T = ".");
      var M = o(T), k = o(x);
      if (k && (x = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || T.match(s))
        return T;
      if (k && !k.host && !k.path)
        return k.host = T, u(k);
      var q = T.charAt(0) === "/" ? T : d(x.replace(/\/+$/, "") + "/" + T);
      return k ? (k.path = q, u(k)) : q;
    }
    t.join = p, t.isAbsolute = function(x) {
      return x.charAt(0) === "/" || i.test(x);
    };
    function h(x, T) {
      x === "" && (x = "."), x = x.replace(/\/$/, "");
      for (var M = 0; T.indexOf(x + "/") !== 0; ) {
        var k = x.lastIndexOf("/");
        if (k < 0 || (x = x.slice(0, k), x.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++M;
      }
      return Array(M + 1).join("../") + T.substr(x.length + 1);
    }
    t.relative = h;
    var g = (function() {
      var x = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in x);
    })();
    function y(x) {
      return x;
    }
    function _(x) {
      return v(x) ? "$" + x : x;
    }
    t.toSetString = g ? y : _;
    function b(x) {
      return v(x) ? x.slice(1) : x;
    }
    t.fromSetString = g ? y : b;
    function v(x) {
      if (!x)
        return !1;
      var T = x.length;
      if (T < 9 || x.charCodeAt(T - 1) !== 95 || x.charCodeAt(T - 2) !== 95 || x.charCodeAt(T - 3) !== 111 || x.charCodeAt(T - 4) !== 116 || x.charCodeAt(T - 5) !== 111 || x.charCodeAt(T - 6) !== 114 || x.charCodeAt(T - 7) !== 112 || x.charCodeAt(T - 8) !== 95 || x.charCodeAt(T - 9) !== 95)
        return !1;
      for (var M = T - 10; M >= 0; M--)
        if (x.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function f(x, T, M) {
      var k = E(x.source, T.source);
      return k !== 0 || (k = x.originalLine - T.originalLine, k !== 0) || (k = x.originalColumn - T.originalColumn, k !== 0 || M) || (k = x.generatedColumn - T.generatedColumn, k !== 0) || (k = x.generatedLine - T.generatedLine, k !== 0) ? k : E(x.name, T.name);
    }
    t.compareByOriginalPositions = f;
    function S(x, T, M) {
      var k = x.generatedLine - T.generatedLine;
      return k !== 0 || (k = x.generatedColumn - T.generatedColumn, k !== 0 || M) || (k = E(x.source, T.source), k !== 0) || (k = x.originalLine - T.originalLine, k !== 0) || (k = x.originalColumn - T.originalColumn, k !== 0) ? k : E(x.name, T.name);
    }
    t.compareByGeneratedPositionsDeflated = S;
    function E(x, T) {
      return x === T ? 0 : x === null ? 1 : T === null ? -1 : x > T ? 1 : -1;
    }
    function O(x, T) {
      var M = x.generatedLine - T.generatedLine;
      return M !== 0 || (M = x.generatedColumn - T.generatedColumn, M !== 0) || (M = E(x.source, T.source), M !== 0) || (M = x.originalLine - T.originalLine, M !== 0) || (M = x.originalColumn - T.originalColumn, M !== 0) ? M : E(x.name, T.name);
    }
    t.compareByGeneratedPositionsInflated = O;
    function w(x) {
      return JSON.parse(x.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = w;
    function D(x, T, M) {
      if (T = T || "", x && (x[x.length - 1] !== "/" && T[0] !== "/" && (x += "/"), T = x + T), M) {
        var k = o(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var q = k.path.lastIndexOf("/");
          q >= 0 && (k.path = k.path.substring(0, q + 1));
        }
        T = p(u(k), T);
      }
      return d(T);
    }
    t.computeSourceURL = D;
  })(fd)), fd;
}
var dd = {}, gy;
function G0() {
  if (gy) return dd;
  gy = 1;
  var t = ul(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, d) {
    for (var p = new s(), h = 0, g = u.length; h < g; h++)
      p.add(u[h], d);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, d) {
    var p = i ? u : t.toSetString(u), h = i ? this.has(u) : r.call(this._set, p), g = this._array.length;
    (!h || d) && this._array.push(u), h || (i ? this._set.set(u, g) : this._set[p] = g);
  }, s.prototype.has = function(u) {
    if (i)
      return this._set.has(u);
    var d = t.toSetString(u);
    return r.call(this._set, d);
  }, s.prototype.indexOf = function(u) {
    if (i) {
      var d = this._set.get(u);
      if (d >= 0)
        return d;
    } else {
      var p = t.toSetString(u);
      if (r.call(this._set, p))
        return this._set[p];
    }
    throw new Error('"' + u + '" is not in the set.');
  }, s.prototype.at = function(u) {
    if (u >= 0 && u < this._array.length)
      return this._array[u];
    throw new Error("No element indexed by " + u);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, dd.ArraySet = s, dd;
}
var hd = {}, vy;
function DE() {
  if (vy) return hd;
  vy = 1;
  var t = ul();
  function r(s, o) {
    var u = s.generatedLine, d = o.generatedLine, p = s.generatedColumn, h = o.generatedColumn;
    return d > u || d == u && h >= p || t.compareByGeneratedPositionsInflated(s, o) <= 0;
  }
  function i() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return i.prototype.unsortedForEach = function(o, u) {
    this._array.forEach(o, u);
  }, i.prototype.add = function(o) {
    r(this._last, o) ? (this._last = o, this._array.push(o)) : (this._sorted = !1, this._array.push(o));
  }, i.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, hd.MappingList = i, hd;
}
var yy;
function V0() {
  if (yy) return cd;
  yy = 1;
  var t = Z0(), r = ul(), i = G0().ArraySet, s = DE().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(d) {
    var p = d.sourceRoot, h = new o({
      file: d.file,
      sourceRoot: p
    });
    return d.eachMapping(function(g) {
      var y = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (y.source = g.source, p != null && (y.source = r.relative(p, y.source)), y.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (y.name = g.name)), h.addMapping(y);
    }), d.sources.forEach(function(g) {
      var y = g;
      p !== null && (y = r.relative(p, g)), h._sources.has(y) || h._sources.add(y);
      var _ = d.sourceContentFor(g);
      _ != null && h.setSourceContent(g, _);
    }), h;
  }, o.prototype.addMapping = function(d) {
    var p = r.getArg(d, "generated"), h = r.getArg(d, "original", null), g = r.getArg(d, "source", null), y = r.getArg(d, "name", null);
    this._skipValidation || this._validateMapping(p, h, g, y), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: g,
      name: y
    });
  }, o.prototype.setSourceContent = function(d, p) {
    var h = d;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(d, p, h) {
    var g = p;
    if (p == null) {
      if (d.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = d.file;
    }
    var y = this._sourceRoot;
    y != null && (g = r.relative(y, g));
    var _ = new i(), b = new i();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === g && v.originalLine != null) {
        var f = d.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        f.source != null && (v.source = f.source, h != null && (v.source = r.join(h, v.source)), y != null && (v.source = r.relative(y, v.source)), v.originalLine = f.line, v.originalColumn = f.column, f.name != null && (v.name = f.name));
      }
      var S = v.source;
      S != null && !_.has(S) && _.add(S);
      var E = v.name;
      E != null && !b.has(E) && b.add(E);
    }, this), this._sources = _, this._names = b, d.sources.forEach(function(v) {
      var f = d.sourceContentFor(v);
      f != null && (h != null && (v = r.join(h, v)), y != null && (v = r.relative(y, v)), this.setSourceContent(v, f));
    }, this);
  }, o.prototype._validateMapping = function(d, p, h, g) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(d && "line" in d && "column" in d && d.line > 0 && d.column >= 0 && !p && !h && !g)) {
      if (d && "line" in d && "column" in d && p && "line" in p && "column" in p && d.line > 0 && d.column >= 0 && p.line > 0 && p.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: d,
        source: h,
        original: p,
        name: g
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var d = 0, p = 1, h = 0, g = 0, y = 0, _ = 0, b = "", v, f, S, E, O = this._mappings.toArray(), w = 0, D = O.length; w < D; w++) {
      if (f = O[w], v = "", f.generatedLine !== p)
        for (d = 0; f.generatedLine !== p; )
          v += ";", p++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(f, O[w - 1]))
          continue;
        v += ",";
      }
      v += t.encode(f.generatedColumn - d), d = f.generatedColumn, f.source != null && (E = this._sources.indexOf(f.source), v += t.encode(E - _), _ = E, v += t.encode(f.originalLine - 1 - g), g = f.originalLine - 1, v += t.encode(f.originalColumn - h), h = f.originalColumn, f.name != null && (S = this._names.indexOf(f.name), v += t.encode(S - y), y = S)), b += v;
    }
    return b;
  }, o.prototype._generateSourcesContent = function(d, p) {
    return d.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var g = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var d = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (d.file = this._file), this._sourceRoot != null && (d.sourceRoot = this._sourceRoot), this._sourcesContents && (d.sourcesContent = this._generateSourcesContent(d.sources, d.sourceRoot)), d;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, cd.SourceMapGenerator = o, cd;
}
var Gs = {}, pd = {}, by;
function ME() {
  return by || (by = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, o, u, d, p) {
      var h = Math.floor((s - i) / 2) + i, g = d(o, u[h], !0);
      return g === 0 ? h : g > 0 ? s - h > 1 ? r(h, s, o, u, d, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - i > 1 ? r(i, h, o, u, d, p) : p == t.LEAST_UPPER_BOUND ? h : i < 0 ? -1 : i;
    }
    t.search = function(s, o, u, d) {
      if (o.length === 0)
        return -1;
      var p = r(
        -1,
        o.length,
        s,
        o,
        u,
        d || t.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(o[p], o[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(pd)), pd;
}
var md = {}, _y;
function kE() {
  if (_y) return md;
  _y = 1;
  function t(s, o, u) {
    var d = s[o];
    s[o] = s[u], s[u] = d;
  }
  function r(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function i(s, o, u, d) {
    if (u < d) {
      var p = r(u, d), h = u - 1;
      t(s, p, d);
      for (var g = s[d], y = u; y < d; y++)
        o(s[y], g) <= 0 && (h += 1, t(s, h, y));
      t(s, h + 1, y);
      var _ = h + 1;
      i(s, o, u, _ - 1), i(s, o, _ + 1, d);
    }
  }
  return md.quickSort = function(s, o) {
    i(s, o, 0, s.length - 1);
  }, md;
}
var Sy;
function RE() {
  if (Sy) return Gs;
  Sy = 1;
  var t = ul(), r = ME(), i = G0().ArraySet, s = Z0(), o = kE().quickSort;
  function u(g, y) {
    var _ = g;
    return typeof g == "string" && (_ = t.parseSourceMapInput(g)), _.sections != null ? new h(_, y) : new d(_, y);
  }
  u.fromSourceMap = function(g, y) {
    return d.fromSourceMap(g, y);
  }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), u.prototype._charIsMappingSeparator = function(y, _) {
    var b = y.charAt(_);
    return b === ";" || b === ",";
  }, u.prototype._parseMappings = function(y, _) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(y, _, b) {
    var v = _ || null, f = b || u.GENERATED_ORDER, S;
    switch (f) {
      case u.GENERATED_ORDER:
        S = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
        S = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var E = this.sourceRoot;
    S.map(function(O) {
      var w = O.source === null ? null : this._sources.at(O.source);
      return w = t.computeSourceURL(E, w, this._sourceMapURL), {
        source: w,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
      };
    }, this).forEach(y, v);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var _ = t.getArg(y, "line"), b = {
      source: t.getArg(y, "source"),
      originalLine: _,
      originalColumn: t.getArg(y, "column", 0)
    };
    if (b.source = this._findSourceIndex(b.source), b.source < 0)
      return [];
    var v = [], f = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (f >= 0) {
      var S = this._originalMappings[f];
      if (y.column === void 0)
        for (var E = S.originalLine; S && S.originalLine === E; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
      else
        for (var O = S.originalColumn; S && S.originalLine === _ && S.originalColumn == O; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
    }
    return v;
  }, Gs.SourceMapConsumer = u;
  function d(g, y) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var b = t.getArg(_, "version"), v = t.getArg(_, "sources"), f = t.getArg(_, "names", []), S = t.getArg(_, "sourceRoot", null), E = t.getArg(_, "sourcesContent", null), O = t.getArg(_, "mappings"), w = t.getArg(_, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    S && (S = t.normalize(S)), v = v.map(String).map(t.normalize).map(function(D) {
      return S && t.isAbsolute(S) && t.isAbsolute(D) ? t.relative(S, D) : D;
    }), this._names = i.fromArray(f.map(String), !0), this._sources = i.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(S, D, y);
    }), this.sourceRoot = S, this.sourcesContent = E, this._mappings = O, this._sourceMapURL = y, this.file = w;
  }
  d.prototype = Object.create(u.prototype), d.prototype.consumer = u, d.prototype._findSourceIndex = function(g) {
    var y = g;
    if (this.sourceRoot != null && (y = t.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == g)
        return _;
    return -1;
  }, d.fromSourceMap = function(y, _) {
    var b = Object.create(d.prototype), v = b._names = i.fromArray(y._names.toArray(), !0), f = b._sources = i.fromArray(y._sources.toArray(), !0);
    b.sourceRoot = y._sourceRoot, b.sourcesContent = y._generateSourcesContent(
      b._sources.toArray(),
      b.sourceRoot
    ), b.file = y._file, b._sourceMapURL = _, b._absoluteSources = b._sources.toArray().map(function(M) {
      return t.computeSourceURL(b.sourceRoot, M, _);
    });
    for (var S = y._mappings.toArray().slice(), E = b.__generatedMappings = [], O = b.__originalMappings = [], w = 0, D = S.length; w < D; w++) {
      var x = S[w], T = new p();
      T.generatedLine = x.generatedLine, T.generatedColumn = x.generatedColumn, x.source && (T.source = f.indexOf(x.source), T.originalLine = x.originalLine, T.originalColumn = x.originalColumn, x.name && (T.name = v.indexOf(x.name)), O.push(T)), E.push(T);
    }
    return o(b.__originalMappings, t.compareByOriginalPositions), b;
  }, d.prototype._version = 3, Object.defineProperty(d.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  d.prototype._parseMappings = function(y, _) {
    for (var b = 1, v = 0, f = 0, S = 0, E = 0, O = 0, w = y.length, D = 0, x = {}, T = {}, M = [], k = [], q, G, B, V, $; D < w; )
      if (y.charAt(D) === ";")
        b++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (q = new p(), q.generatedLine = b, V = D; V < w && !this._charIsMappingSeparator(y, V); V++)
          ;
        if (G = y.slice(D, V), B = x[G], B)
          D += G.length;
        else {
          for (B = []; D < V; )
            s.decode(y, D, T), $ = T.value, D = T.rest, B.push($);
          if (B.length === 2)
            throw new Error("Found a source, but no line and column");
          if (B.length === 3)
            throw new Error("Found a source and line, but no column");
          x[G] = B;
        }
        q.generatedColumn = v + B[0], v = q.generatedColumn, B.length > 1 && (q.source = E + B[1], E += B[1], q.originalLine = f + B[2], f = q.originalLine, q.originalLine += 1, q.originalColumn = S + B[3], S = q.originalColumn, B.length > 4 && (q.name = O + B[4], O += B[4])), k.push(q), typeof q.originalLine == "number" && M.push(q);
      }
    o(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, d.prototype._findMapping = function(y, _, b, v, f, S) {
    if (y[b] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[b]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
    return r.search(y, _, f, S);
  }, d.prototype.computeColumnSpans = function() {
    for (var y = 0; y < this._generatedMappings.length; ++y) {
      var _ = this._generatedMappings[y];
      if (y + 1 < this._generatedMappings.length) {
        var b = this._generatedMappings[y + 1];
        if (_.generatedLine === b.generatedLine) {
          _.lastGeneratedColumn = b.generatedColumn - 1;
          continue;
        }
      }
      _.lastGeneratedColumn = 1 / 0;
    }
  }, d.prototype.originalPositionFor = function(y) {
    var _ = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, b = this._findMapping(
      _,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var v = this._generatedMappings[b];
      if (v.generatedLine === _.generatedLine) {
        var f = t.getArg(v, "source", null);
        f !== null && (f = this._sources.at(f), f = t.computeSourceURL(this.sourceRoot, f, this._sourceMapURL));
        var S = t.getArg(v, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: f,
          line: t.getArg(v, "originalLine", null),
          column: t.getArg(v, "originalColumn", null),
          name: S
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, d.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(y) {
      return y == null;
    }) : !1;
  }, d.prototype.sourceContentFor = function(y, _) {
    if (!this.sourcesContent)
      return null;
    var b = this._findSourceIndex(y);
    if (b >= 0)
      return this.sourcesContent[b];
    var v = y;
    this.sourceRoot != null && (v = t.relative(this.sourceRoot, v));
    var f;
    if (this.sourceRoot != null && (f = t.urlParse(this.sourceRoot))) {
      var S = v.replace(/^file:\/\//, "");
      if (f.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!f.path || f.path == "/") && this._sources.has("/" + v))
        return this.sourcesContent[this._sources.indexOf("/" + v)];
    }
    if (_)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, d.prototype.generatedPositionFor = function(y) {
    var _ = t.getArg(y, "source");
    if (_ = this._findSourceIndex(_), _ < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var b = {
      source: _,
      originalLine: t.getArg(y, "line"),
      originalColumn: t.getArg(y, "column")
    }, v = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var f = this._originalMappings[v];
      if (f.source === b.source)
        return {
          line: t.getArg(f, "generatedLine", null),
          column: t.getArg(f, "generatedColumn", null),
          lastColumn: t.getArg(f, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Gs.BasicSourceMapConsumer = d;
  function h(g, y) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var b = t.getArg(_, "version"), v = t.getArg(_, "sections");
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    this._sources = new i(), this._names = new i();
    var f = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = t.getArg(S, "offset"), O = t.getArg(E, "line"), w = t.getArg(E, "column");
      if (O < f.line || O === f.line && w < f.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return f = E, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: w + 1
        },
        consumer: new u(t.getArg(S, "map"), y)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var g = [], y = 0; y < this._sections.length; y++)
        for (var _ = 0; _ < this._sections[y].consumer.sources.length; _++)
          g.push(this._sections[y].consumer.sources[_]);
      return g;
    }
  }), h.prototype.originalPositionFor = function(y) {
    var _ = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, b = r.search(
      _,
      this._sections,
      function(f, S) {
        var E = f.generatedLine - S.generatedOffset.generatedLine;
        return E || f.generatedColumn - S.generatedOffset.generatedColumn;
      }
    ), v = this._sections[b];
    return v ? v.consumer.originalPositionFor({
      line: _.generatedLine - (v.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (v.generatedOffset.generatedLine === _.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
      bias: y.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(y, _) {
    for (var b = 0; b < this._sections.length; b++) {
      var v = this._sections[b], f = v.consumer.sourceContentFor(y, !0);
      if (f)
        return f;
    }
    if (_)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(y) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var b = this._sections[_];
      if (b.consumer._findSourceIndex(t.getArg(y, "source")) !== -1) {
        var v = b.consumer.generatedPositionFor(y);
        if (v) {
          var f = {
            line: v.line + (b.generatedOffset.generatedLine - 1),
            column: v.column + (b.generatedOffset.generatedLine === v.line ? b.generatedOffset.generatedColumn - 1 : 0)
          };
          return f;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(y, _) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var b = 0; b < this._sections.length; b++)
      for (var v = this._sections[b], f = v.consumer._generatedMappings, S = 0; S < f.length; S++) {
        var E = f[S], O = v.consumer._sources.at(E.source);
        O = t.computeSourceURL(v.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var w = null;
        E.name && (w = v.consumer._names.at(E.name), this._names.add(w), w = this._names.indexOf(w));
        var D = {
          source: O,
          generatedLine: E.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: E.generatedColumn + (v.generatedOffset.generatedLine === E.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: E.originalLine,
          originalColumn: E.originalColumn,
          name: w
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
  }, Gs.IndexedSourceMapConsumer = h, Gs;
}
var gd = {}, xy;
function jE() {
  if (xy) return gd;
  xy = 1;
  var t = V0().SourceMapGenerator, r = ul(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(d, p, h, g, y) {
    this.children = [], this.sourceContents = {}, this.line = d ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[o] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(p, h, g) {
    var y = new u(), _ = p.split(i), b = 0, v = function() {
      var w = x(), D = x() || "";
      return w + D;
      function x() {
        return b < _.length ? _[b++] : void 0;
      }
    }, f = 1, S = 0, E = null;
    return h.eachMapping(function(w) {
      if (E !== null)
        if (f < w.generatedLine)
          O(E, v()), f++, S = 0;
        else {
          var D = _[b] || "", x = D.substr(0, w.generatedColumn - S);
          _[b] = D.substr(w.generatedColumn - S), S = w.generatedColumn, O(E, x), E = w;
          return;
        }
      for (; f < w.generatedLine; )
        y.add(v()), f++;
      if (S < w.generatedColumn) {
        var D = _[b] || "";
        y.add(D.substr(0, w.generatedColumn)), _[b] = D.substr(w.generatedColumn), S = w.generatedColumn;
      }
      E = w;
    }, this), b < _.length && (E && O(E, v()), y.add(_.splice(b).join(""))), h.sources.forEach(function(w) {
      var D = h.sourceContentFor(w);
      D != null && (g != null && (w = r.join(g, w)), y.setSourceContent(w, D));
    }), y;
    function O(w, D) {
      if (w === null || w.source === void 0)
        y.add(D);
      else {
        var x = g ? r.join(g, w.source) : w.source;
        y.add(new u(
          w.originalLine,
          w.originalColumn,
          x,
          D,
          w.name
        ));
      }
    }
  }, u.prototype.add = function(p) {
    if (Array.isArray(p))
      p.forEach(function(h) {
        this.add(h);
      }, this);
    else if (p[o] || typeof p == "string")
      p && this.children.push(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.prepend = function(p) {
    if (Array.isArray(p))
      for (var h = p.length - 1; h >= 0; h--)
        this.prepend(p[h]);
    else if (p[o] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var h, g = 0, y = this.children.length; g < y; g++)
      h = this.children[g], h[o] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, g, y = this.children.length;
    if (y > 0) {
      for (h = [], g = 0; g < y - 1; g++)
        h.push(this.children[g]), h.push(p);
      h.push(this.children[g]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(p, h) {
    var g = this.children[this.children.length - 1];
    return g[o] ? g.replaceRight(p, h) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, g = this.children.length; h < g; h++)
      this.children[h][o] && this.children[h].walkSourceContents(p);
    for (var y = Object.keys(this.sourceContents), h = 0, g = y.length; h < g; h++)
      p(r.fromSetString(y[h]), this.sourceContents[y[h]]);
  }, u.prototype.toString = function() {
    var p = "";
    return this.walk(function(h) {
      p += h;
    }), p;
  }, u.prototype.toStringWithSourceMap = function(p) {
    var h = {
      code: "",
      line: 1,
      column: 0
    }, g = new t(p), y = !1, _ = null, b = null, v = null, f = null;
    return this.walk(function(S, E) {
      h.code += S, E.source !== null && E.line !== null && E.column !== null ? ((_ !== E.source || b !== E.line || v !== E.column || f !== E.name) && g.addMapping({
        source: E.source,
        original: {
          line: E.line,
          column: E.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: E.name
      }), _ = E.source, b = E.line, v = E.column, f = E.name, y = !0) : y && (g.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, y = !1);
      for (var O = 0, w = S.length; O < w; O++)
        S.charCodeAt(O) === s ? (h.line++, h.column = 0, O + 1 === w ? (_ = null, y = !1) : y && g.addMapping({
          source: E.source,
          original: {
            line: E.line,
            column: E.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: E.name
        })) : h.column++;
    }), this.walkSourceContents(function(S, E) {
      g.setSourceContent(S, E);
    }), { code: h.code, map: g };
  }, gd.SourceNode = u, gd;
}
var Ey;
function zE() {
  return Ey || (Ey = 1, Zs.SourceMapGenerator = V0().SourceMapGenerator, Zs.SourceMapConsumer = RE().SourceMapConsumer, Zs.SourceNode = jE().SourceNode), Zs;
}
var Cy;
function LE() {
  return Cy || (Cy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = rn(), s = void 0;
    try {
      var o = zE();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(p, h, g, y) {
      this.src = "", y && this.add(y);
    }, s.prototype = {
      add: function(h) {
        i.isArray(h) && (h = h.join("")), this.src += h;
      },
      prepend: function(h) {
        i.isArray(h) && (h = h.join("")), this.src = h + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(p, h, g) {
      if (i.isArray(p)) {
        for (var y = [], _ = 0, b = p.length; _ < b; _++)
          y.push(h.wrap(p[_], g));
        return y;
      } else if (typeof p == "boolean" || typeof p == "number")
        return p + "";
      return p;
    }
    function d(p) {
      this.srcFile = p, this.source = [];
    }
    d.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(h, g) {
        this.source.unshift(this.wrap(h, g));
      },
      push: function(h, g) {
        this.source.push(this.wrap(h, g));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(g) {
          h.add(["  ", g, `
`]);
        }), h;
      },
      each: function(h) {
        for (var g = 0, y = this.source.length; g < y; g++)
          h(this.source[g]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, g), new s(g.start.line, g.start.column, this.srcFile, h));
      },
      functionCall: function(h, g, y) {
        return y = this.generateList(y), this.wrap([h, g ? "." + g + "(" : "(", y, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var g = this, y = [];
        Object.keys(h).forEach(function(b) {
          var v = u(h[b], g);
          v !== "undefined" && y.push([g.quotedString(b), ":", v]);
        });
        var _ = this.generateList(y);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(h) {
        for (var g = this.empty(), y = 0, _ = h.length; y < _; y++)
          y && g.add(","), g.add(u(h[y], this));
        return g;
      },
      generateArray: function(h) {
        var g = this.generateList(h);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = d, t.exports = r.default;
  })(Wo, Wo.exports)), Wo.exports;
}
var wy;
function PE() {
  return wy || (wy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = ah(), o = qn(), u = i(o), d = rn(), p = LE(), h = i(p);
    function g(b) {
      this.value = b;
    }
    function y() {
    }
    y.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(v, f) {
        return this.internalNameLookup(v, f);
      },
      depthedLookup: function(v) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(v), ")"];
      },
      compilerInfo: function() {
        var v = s.COMPILER_REVISION, f = s.REVISION_CHANGES[v];
        return [v, f];
      },
      appendToBuffer: function(v, f, S) {
        return d.isArray(v) || (v = [v]), v = this.source.wrap(v, f), this.environment.isSimple ? ["return ", v, ";"] : S ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, f) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(f), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, f, S, E) {
        this.environment = v, this.options = f, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, f), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
        var O = v.opcodes, w = void 0, D = void 0, x = void 0, T = void 0;
        for (x = 0, T = O.length; x < T; x++)
          w = O[x], this.source.currentLocation = w.loc, D = D || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), E ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(E);
        if (this.isChild)
          return M;
        var k = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var q = this.context, G = q.programs, B = q.decorators;
        for (x = 0, T = G.length; x < T; x++)
          G[x] && (k[x] = G[x], B[x] && (k[x + "_d"] = B[x], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), E ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), f.srcName ? (k = k.toStringWithSourceMap({ file: f.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var f = this, S = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (S += ", " + E.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(x) {
          var T = f.aliases[x];
          T.children && T.referenceCount > 1 && (S += ", alias" + ++O + "=" + x, T.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var D = this.mergeSource(S);
        return v ? (w.push(D), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(v) {
        var f = this.environment.isSimple, S = !this.forceBuffer, E = void 0, O = void 0, w = void 0, D = void 0;
        return this.source.each(function(x) {
          x.appendToBuffer ? (w ? x.prepend("  + ") : w = x, D = x) : (w && (O ? w.prepend("buffer += ") : E = !0, D.add(";"), w = D = void 0), O = !0, f || (S = !1));
        }), S ? w ? (w.prepend("return "), D.add(";")) : O || this.source.push('return "";') : (v += ", buffer = " + (E ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), v && this.source.prepend("var " + v.substring(2) + (E ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(v) {
        var f = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(v, 0, S);
        var E = this.popStack();
        S.splice(1, 0, E), this.push(this.source.functionCall(f, "call", S));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var v = this.aliasable("container.hooks.blockHelperMissing"), f = [this.contextName(0)];
        this.setupHelperArgs("", 0, f, !0), this.flushInline();
        var S = this.topStack();
        f.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(v, "call", f), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(v) {
        this.pendingContent ? v = this.pendingContent + v : this.pendingLocation = this.source.currentLocation, this.pendingContent = v;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(f) {
            return [" != null ? ", f, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var v = this.popStack();
          this.pushSource(["if (", v, " != null) { ", this.appendToBuffer(v, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(v) {
        this.lastContext = v;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(v, f, S, E) {
        var O = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[O++])) : this.pushContext(), this.resolvePath("context", v, O, f, S);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(v, f) {
        this.useBlockParams = !0, this.push(["blockParams[", v[0], "][", v[1], "]"]), this.resolvePath("context", f, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(v, f, S) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", f, 0, !0, S);
      },
      resolvePath: function(v, f, S, E, O) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && O, this, f, S, v));
          return;
        }
        for (var D = f.length; S < D; S++)
          this.replaceStack(function(x) {
            var T = w.nameLookup(x, f[S], v);
            return E ? [" && ", T] : [" != null ? ", T, " : ", x];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(v, f) {
        this.pushContext(), this.pushString(f), f !== "SubExpression" && (typeof v == "string" ? this.pushString(v) : this.pushStackLiteral(v));
      },
      emptyHash: function(v) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(v ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var v = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(v.ids)), this.stringParams && (this.push(this.objectLiteral(v.contexts)), this.push(this.objectLiteral(v.types))), this.push(this.objectLiteral(v.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(v) {
        this.pushStackLiteral(this.quotedString(v));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(v) {
        this.pushStackLiteral(v);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(v) {
        v != null ? this.pushStackLiteral(this.programExpression(v)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(v, f) {
        var S = this.nameLookup("decorators", f, "decorator"), E = this.setupHelperArgs(f, v);
        this.decorators.push(["fn = ", this.decorators.functionCall(S, "", ["fn", "props", "container", E]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(v, f, S) {
        var E = this.popStack(), O = this.setupHelper(v, f), w = [];
        S && w.push(O.name), w.push(E), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(w, "||"), ")"], x = this.source.functionCall(D, "call", O.callParams);
        this.push(x);
      },
      itemsSeparatedBy: function(v, f) {
        var S = [];
        S.push(v[0]);
        for (var E = 1; E < v.length; E++)
          S.push(f, v[E]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, f) {
        var S = this.setupHelper(v, f);
        this.push(this.source.functionCall(S.name, "call", S.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(v, f) {
        this.useRegister("helper");
        var S = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, v, f), O = this.lastHelper = this.nameLookup("helpers", v, "helper"), w = ["(", "(helper = ", O, " || ", S, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, f, S) {
        var E = [], O = this.setupParams(f, 1, E);
        v && (f = this.popStack(), delete O.name), S && (O.indent = JSON.stringify(S)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", v ? E.unshift(f) : E.unshift(this.nameLookup("partials", f, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), E.push(O), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var f = this.popStack(), S = void 0, E = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (E = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[v] = S), E && (w.types[v] = E), O && (w.ids[v] = O), w.values[v] = f;
      },
      pushId: function(v, f, S) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + f[0] + "].path[" + f[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : v === "PathExpression" ? this.pushString(f) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, f) {
        for (var S = v.children, E = void 0, O = void 0, w = 0, D = S.length; w < D; w++) {
          E = S[w], O = new this.compiler();
          var x = this.matchExistingProgram(E);
          if (x == null) {
            this.context.programs.push("");
            var T = this.context.programs.length;
            E.index = T, E.name = "program" + T, this.context.programs[T] = O.compile(E, f, this.context, !this.precompile), this.context.decorators[T] = O.decorators, this.context.environments[T] = E, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
          } else
            E.index = x.index, E.name = "program" + x.index, this.useDepths = this.useDepths || x.useDepths, this.useBlockParams = this.useBlockParams || x.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var f = 0, S = this.context.environments.length; f < S; f++) {
          var E = this.context.environments[f];
          if (E && E.equals(v))
            return E;
        }
      },
      programExpression: function(v) {
        var f = this.environment.children[v], S = [f.index, "data", f.blockParams];
        return (this.useBlockParams || this.useDepths) && S.push("blockParams"), this.useDepths && S.push("depths"), "container.program(" + S.join(", ") + ")";
      },
      useRegister: function(v) {
        this.registers[v] || (this.registers[v] = !0, this.registers.list.push(v));
      },
      push: function(v) {
        return v instanceof g || (v = this.source.wrap(v)), this.inlineStack.push(v), v;
      },
      pushStackLiteral: function(v) {
        this.push(new g(v));
      },
      pushSource: function(v) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), v && this.source.push(v);
      },
      replaceStack: function(v) {
        var f = ["("], S = void 0, E = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof g)
          S = [w.value], f = ["(", S], O = !0;
        else {
          E = !0;
          var D = this.incrStack();
          f = ["((", this.push(D), " = ", w, ")"], S = this.topStack();
        }
        var x = v.call(this, S);
        O || this.popStack(), E && this.stackSlot--, this.push(f.concat(x, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var v = this.inlineStack;
        this.inlineStack = [];
        for (var f = 0, S = v.length; f < S; f++) {
          var E = v[f];
          if (E instanceof g)
            this.compileStack.push(E);
          else {
            var O = this.incrStack();
            this.pushSource([O, " = ", E, ";"]), this.compileStack.push(O);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(v) {
        var f = this.isInline(), S = (f ? this.inlineStack : this.compileStack).pop();
        if (!v && S instanceof g)
          return S.value;
        if (!f) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
      },
      topStack: function() {
        var v = this.isInline() ? this.inlineStack : this.compileStack, f = v[v.length - 1];
        return f instanceof g ? f.value : f;
      },
      contextName: function(v) {
        return this.useDepths && v ? "depths[" + v + "]" : "depth" + v;
      },
      quotedString: function(v) {
        return this.source.quotedString(v);
      },
      objectLiteral: function(v) {
        return this.source.objectLiteral(v);
      },
      aliasable: function(v) {
        var f = this.aliases[v];
        return f ? (f.referenceCount++, f) : (f = this.aliases[v] = this.source.wrap(v), f.aliasable = !0, f.referenceCount = 1, f);
      },
      setupHelper: function(v, f, S) {
        var E = [], O = this.setupHelperArgs(f, v, E, S), w = this.nameLookup("helpers", f, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: O,
          name: w,
          callParams: [D].concat(E)
        };
      },
      setupParams: function(v, f, S) {
        var E = {}, O = [], w = [], D = [], x = !S, T = void 0;
        x && (S = []), E.name = this.quotedString(v), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (E.fn = k || "container.noop", E.inverse = M || "container.noop");
        for (var q = f; q--; )
          T = this.popStack(), S[q] = T, this.trackIds && (D[q] = this.popStack()), this.stringParams && (w[q] = this.popStack(), O[q] = this.popStack());
        return x && (E.args = this.source.generateArray(S)), this.trackIds && (E.ids = this.source.generateArray(D)), this.stringParams && (E.types = this.source.generateArray(w), E.contexts = this.source.generateArray(O)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(v, f, S, E) {
        var O = this.setupParams(v, f, S);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), E ? (this.useRegister("options"), S.push("options"), ["options=", O]) : S ? (S.push(O), "") : O;
      }
    }, (function() {
      for (var b = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, f = 0, S = b.length; f < S; f++)
        v[b[f]] = !0;
    })(), y.isValidJavaScriptVariableName = function(b) {
      return !y.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b);
    };
    function _(b, v, f, S, E) {
      var O = v.popStack(), w = f.length;
      for (b && w--; S < w; S++)
        O = v.nameLookup(O, f[S], E);
      return b ? [v.aliasable("container.strict"), "(", O, ", ", v.quotedString(f[S]), ", ", JSON.stringify(v.source.currentLocation), " )"] : O;
    }
    r.default = y, t.exports = r.default;
  })(Jo, Jo.exports)), Jo.exports;
}
var Ay;
function IE() {
  return Ay || (Ay = 1, (function(t, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = EE(), o = i(s), u = q0(), d = i(u), p = TE(), h = OE(), g = PE(), y = i(g), _ = F0(), b = i(_), v = H0(), f = i(v), S = o.default.create;
    function E() {
      var w = S();
      return w.compile = function(D, x) {
        return h.compile(D, x, w);
      }, w.precompile = function(D, x) {
        return h.precompile(D, x, w);
      }, w.AST = d.default, w.Compiler = h.Compiler, w.JavaScriptCompiler = y.default, w.Parser = p.parser, w.parse = p.parse, w.parseWithoutProcessing = p.parseWithoutProcessing, w;
    }
    var O = E();
    O.create = E, f.default(O), O.Visitor = b.default, O.default = O, r.default = O, t.exports = r.default;
  })(Mo, Mo.exports)), Mo.exports;
}
var tn = IE();
function Ui(t, r) {
  tn.helpers[t] || tn.registerHelper(t, r);
}
Ui("add", (t, r) => Number(t) + Number(r));
Ui("join", (t, r) => Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "");
Ui("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
Ui("indent", (t, r) => {
  const i = " ".repeat(Math.max(0, Number(t) || 0));
  return String(r ?? "").split(`
`).join(`
${i}`);
});
Ui("json", (t) => JSON.stringify(t));
Ui(
  "xmlEscape",
  (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const Qn = SillyTavern.getContext(), Kn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Sr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new i0("dumb", {}).getSettings();
async function BE({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: o,
  allCharacters: u,
  entriesGroupByWorldName: d,
  promptSettings: p,
  formatDescription: h,
  mainContextList: g,
  includeUserMacro: y,
  maxResponseToken: _,
  targetField: b,
  outputFormat: v
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const f = Qn.extensionSettings.connectionManager?.profiles?.find((M) => M.id === t);
  if (!f)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const S = f.api ? Qn.CONNECT_API_MAP[f.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${f.name}".`);
  const E = {};
  E.char = o.fields.name.value ?? "{{char}}", E.user = y && _r ? _r : "{{user}}", E.persona = "{{persona}}", E.targetField = b, E.userInstructions = tn.compile(r.trim(), { noEscape: !0 })(E), E.fieldSpecificInstructions = tn.compile(
    o.draftFields[b]?.prompt ?? o.fields[b]?.prompt,
    { noEscape: !0 }
  )({
    ...E,
    char: b === "mes_example" ? "{{char}}" : E.char,
    user: b === "mes_example" ? "{{user}}" : E.user
  }), E.activeFormatInstructions = tn.compile(h.content, { noEscape: !0 })(
    E
  );
  {
    const M = [];
    o.selectedCharacterIndexes.forEach((k) => {
      const q = parseInt(k), G = u[q];
      G && M.push(G);
    }), E.characters = M;
  }
  {
    const M = {};
    Object.entries(d).filter(
      ([k, q]) => q.length > 0 && o.selectedWorldNames.includes(k) && q.some((G) => !G.disable)
    ).forEach(([k, q]) => {
      M[k] = q.filter((G) => !G.disable);
    }), E.lorebooks = M;
  }
  {
    const M = {}, k = {}, q = {}, G = b.startsWith("alternate_greetings_"), B = Lt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([$, oe]) => {
      let fe = !1;
      if (B) {
        const me = $.startsWith("alternate_greetings_");
        G ? fe = me && $ !== b || $ === "first_mes" : fe = me;
      }
      if (!fe) {
        const me = tn.compile(oe.value, { noEscape: !0 })({
          ...E,
          char: $ === "mes_example" ? "{{char}}" : E.char,
          user: $ === "mes_example" ? "{{user}}" : E.user
        });
        Kn.includes($) ? M[oe.label] = me : $.startsWith("alternate_greetings_") && (k[$] = me);
      }
    }), Object.entries(o.draftFields || {}).forEach(([$, oe]) => {
      q[oe.label] = tn.compile(oe.value, { noEscape: !0 })(E);
    });
    const V = {};
    Object.keys(M).length > 0 && (V.core = M), Object.keys(k).length > 0 && (V.alternate_greetings = k), Object.keys(q).length > 0 && (V.draft = q), E.fields = V;
  }
  const O = [];
  {
    for (const M of g) {
      if (M.promptName === "chatHistory") {
        const B = await m0(S, i);
        if (B.warnings && B.warnings.length > 0)
          for (const V of B.warnings)
            Oe("warning", V);
        O.push(...B.result);
        continue;
      }
      let k = structuredClone(E);
      M.promptName === "stDescription" && (k.char = "{{char}}", k.user = "{{user}}");
      const q = p[M.promptName];
      if (!q)
        continue;
      const G = {
        role: M.role,
        content: tn.compile(q.content, { noEscape: !0 })(k)
      };
      G.content = G.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), G.content = G.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), G.content = Qn.substituteParams(G.content), G.content = G.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), G.content = G.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), G.content && O.push(G);
    }
    s && O.push({
      role: "assistant",
      content: Iv(s, v)
    });
  }
  const w = await Qn.ConnectionManagerRequestService.sendRequest(
    t,
    O,
    _
  ), D = s ? Iv(s, v) + w.content : w.content, x = P0(D, v);
  let T;
  if (typeof x == "string")
    T = x;
  else if (typeof x == "object" && x !== null)
    if ("response" in x && typeof x.response == "string")
      T = x.response;
    else {
      const M = Object.values(x)[0];
      T = M ? String(M) : "";
    }
  else
    T = "";
  return T;
}
const Ma = "SillyTavern-Character-Creator", Y0 = "0.3.0", UE = "F_1.10", HE = {
  EXTENSION: "charCreator"
}, nu = [
  "stDescription",
  "charDefinitions",
  "lorebookDefinitions",
  "xmlFormat",
  "jsonFormat",
  "noneFormat",
  "worldInfoCharDefinition",
  "existingFieldDefinitions",
  "taskDescription",
  "outputFormatInstructions",
  "personaDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription"
], et = {
  stDescription: Rd,
  charDefinitions: jd,
  lorebookDefinitions: D0,
  xmlFormat: ix,
  jsonFormat: sx,
  noneFormat: lx,
  worldInfoCharDefinition: M0,
  existingFieldDefinitions: al,
  taskDescription: nh,
  outputFormatInstructions: th,
  personaDescription: ox,
  reviseJsonPrompt: ux,
  reviseXmlPrompt: cx,
  reviseTaskDescription: fx
}, X0 = {
  version: Y0,
  formatVersion: UE,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  outputFormat: "xml",
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "last",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    existingFields: !0,
    worldInfo: !0,
    persona: !0,
    dontSendOtherGreetings: !1
  },
  defaultPromptEngineeringMode: "native",
  // Updated prompts structure
  prompts: {
    stDescription: {
      content: et.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: et.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: et.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: et.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: et.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: et.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: et.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: al,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: nh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: th,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: et.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: et.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: et.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: et.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    }
  },
  // Generic Prompt Presets
  promptPreset: "default",
  promptPresets: {
    default: {
      content: "Generate the field content based on the chat history and existing character details. Be creative but consistent."
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          enabled: !0,
          promptName: "chatHistory",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "stDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "charDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "lorebookDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "existingFieldDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "personaDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "outputFormatInstructions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "taskDescription",
          role: "user"
        }
      ]
    }
  },
  // World Info
  showSaveAsWorldInfoEntry: {
    show: !1
  }
};
function Id(t) {
  const i = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((o, u) => {
    const d = o.replace(/^\d+/, "");
    if (d) {
      const p = s ? `${d[0].toUpperCase()}${d.slice(1).toLowerCase()}` : d.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
const Lt = new i0(HE.EXTENSION, X0);
async function qE() {
  return new Promise((t, r) => {
    Lt.initializeSettings({
      strategy: [
        {
          from: "*",
          to: "F_1.4",
          action(i) {
            return {
              profileId: i?.profileId ?? "",
              maxContextType: i?.maxContextType ?? "profile",
              maxContextValue: i?.maxContextValue ?? 16384,
              maxResponseToken: i?.maxResponseToken ?? 1024,
              outputFormat: i?.outputFormat ?? "xml",
              contextToSend: {
                ...i?.contextToSend,
                persona: !0
              },
              // Updated prompts structure
              prompts: {
                stDescription: {
                  content: et.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: et.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: et.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: et.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: et.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: et.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: et.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: al,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: nh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: th,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: et.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Generic Prompt Presets
              promptPreset: i?.default ?? "default",
              promptPresets: i?.promptPresets ?? {
                default: {
                  content: "Generate the field content based on the chat history and existing character details. Be creative but consistent."
                }
              },
              mainContextTemplatePreset: "default",
              mainContextTemplatePresets: {
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              },
              // World Info
              showSaveAsWorldInfoEntry: i?.showSaveAsWorldInfoEntry ?? {
                show: i?.showSaveAsWorldInfoEntry.show ?? !1
              }
            };
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(i) {
            return {
              ...i,
              // Update persona
              prompts: {
                ...i?.prompts,
                personaDescription: {
                  content: et.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Reset default main context
              mainContextTemplatePresets: {
                ...i?.mainContextTemplatePresets,
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              }
            };
          }
        },
        {
          from: "F_1.5",
          to: "F_1.6",
          async action(i) {
            return await Oe("info", `[${Ma}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: et.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: et.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: et.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: al,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                }
              }
            };
          }
        },
        {
          from: "F_1.6",
          to: "F_1.7",
          async action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Rd), s;
          }
        },
        {
          from: "F_1.7",
          to: "F_1.8",
          action(i) {
            const s = {
              ...i,
              defaultPromptEngineeringMode: "native"
            };
            return s.prompts || (s.prompts = {}), s.prompts.reviseJsonPrompt = {
              content: et.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: et.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: et.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = jd), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = D0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = al), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Rd), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = jd), i.prompts.worldInfoCharDefinition.isDefault && (s.prompts.worldInfoCharDefinition.content = M0), s;
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Ma}] Error initializing settings:`, i), Oe("error", `[${Ma}] Failed to initialize settings: ${i.message}`), Qn.Popup.show.confirm(
        `[${Ma}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Lt.resetSettings(), Oe("success", `[${Ma}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const Se = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("button", { className: o, ...s, children: t });
}, FE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = ee.useMemo(() => {
    const d = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && d.push("text_pole"), d.push(r), d.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const d = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: d, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...o }),
      t && /* @__PURE__ */ A.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: s, className: u, ...o });
}, xu = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("select", { className: o, ...s, children: t });
}, kn = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: o, ...s, children: t });
};
var ZE = r0(), vn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(vn || {}), Jr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Jr || {});
const GE = SillyTavern.getContext(), Li = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var d;
  const p = ee.useRef(null), h = ee.useRef(null), [g, y] = ee.useState(!1), [_, b] = ee.useState(null), v = ee.useRef(GE.uuidv4()), f = ee.useRef({
    id: v.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ee.useEffect(() => {
    const w = p.current;
    if (!w) return;
    const D = (x) => {
      x.preventDefault(), o || S(Jr.CANCELLED);
    };
    return w.addEventListener("cancel", D), f.current.dlg = w, f.current.mainInput = h.current, wi.util.popups.push(f.current), w.showModal || (w.classList.add("poly_dialog"), av.registerDialog(w), new ResizeObserver((x) => {
      for (const T of x)
        av.reposition(T.target);
    }).observe(w)), w.showModal(), Vf(), () => {
      rv(wi.util.popups, f.current), Vf(), w.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (w) => {
    var D, x;
    let T = w;
    if (r === vn.INPUT && (w >= Jr.AFFIRMATIVE ? T = (D = h.current) == null ? void 0 : D.value : w === Jr.NEGATIVE ? T = !1 : w === Jr.CANCELLED ? T = null : T = !1), (x = s.customInputs) != null && x.length) {
      const k = new Map(
        s.customInputs.map((q) => {
          var G;
          const B = (G = p.current) == null ? void 0 : G.querySelector(`#${q.id}`);
          return [B.id, B.checked];
        })
      );
      f.current.inputResults = k;
    }
    if (f.current.result = w, f.current.value = T, s.onClosing && !await s.onClosing(f.current)) {
      y(!0), f.current.value = void 0, f.current.result = void 0, f.current.inputResults = void 0;
      return;
    }
    y(!1), wi.util.lastResult = {
      value: T,
      result: w,
      inputResults: f.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), Vf(), f_(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(f.current), rv(wi.util.popups, f.current), wi.util.popups.length > 0) {
        const q = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), G = q?.getAttribute("data-id"), B = wi.util.popups.find((V) => V.id === G);
        B && B.lastFocus && B.lastFocus.focus();
      }
      u(T);
    }));
  }, E = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (b(w.target), f.current.lastFocus = w.target);
  }, O = async (w) => {
  };
  return ZE.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const w = ["popup"];
          return s.wide && w.push("wide_dialogue_popup"), s.wider && w.push("wider_dialogue_popup"), s.large && w.push("large_dialogue_popup"), s.transparent && w.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), s.animation && w.push(`popup--animation-${s.animation}`), w.join(" ");
        })(),
        "data-id": v.current,
        onKeyDown: O,
        onFocus: E,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: t }),
          r === vn.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: h,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: i,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ A.jsx("div", { className: "popup-inputs", children: s.customInputs.map((w) => /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: w.id, children: [
            /* @__PURE__ */ A.jsx("input", { type: "checkbox", id: w.id, defaultChecked: w.defaultState }),
            /* @__PURE__ */ A.jsx("span", { "data-i18n": w.label, children: w.label }),
            w.tooltip && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: w.tooltip,
                "data-i18n": `[title]${w.tooltip}`
              }
            )
          ] }, w.id)) }),
          r !== vn.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (d = s.customButtons) == null ? void 0 : d.map((w, D) => {
              const x = typeof w == "string" ? { text: w, result: D + 2 } : w;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${x.classes ?? ""}`,
                  "data-result": x.result,
                  onClick: () => {
                    var T;
                    (T = x.action) == null || T.call(x), S(x.result ?? D + 2);
                  },
                  "data-i18n": x.text,
                  children: x.text
                },
                D
              );
            }),
            r !== vn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Jr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== vn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Jr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === vn.DISPLAY && /* @__PURE__ */ A.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => S(Jr.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, Vs = (t, r, i) => {
  if (!t || !t.api)
    return !1;
  const s = i[t.api];
  if (!s || !Object.hasOwn(r, s.selected))
    return !1;
  switch (s.selected) {
    case "openai":
      return !!s.source;
    case "textgenerationwebui":
      return !!s.type;
  }
  return !1;
}, br = SillyTavern.getContext(), $0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: d
}) => {
  const [p, h] = ee.useState(t ?? ""), [g, y] = ee.useState(Date.now()), { isEnabled: _, profiles: b, connectApiMap: v } = ee.useMemo(() => {
    var E, O;
    return (E = br.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = br.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: br.CONNECT_API_MAP
    };
  }, [g]);
  ee.useEffect(() => {
    if (!_) return;
    const E = (D) => {
      Vs(D, r, v) && (y(Date.now()), o?.(D));
    }, O = (D, x) => {
      const T = Vs(D, r, v), M = Vs(x, r, v);
      (T || M) && y(Date.now()), u?.(D, x), p === D.id && !M && (h(""), s?.(void 0));
    }, w = (D) => {
      Vs(D, r, v) && (y(Date.now()), d?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return br.eventSource.on("CONNECTION_PROFILE_CREATED", E), br.eventSource.on("CONNECTION_PROFILE_UPDATED", O), br.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      br.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), br.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), br.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [_, p, r, v, s, o, u, d]);
  const f = ee.useMemo(() => {
    if (!_) return [];
    const E = b.filter((w) => Vs(w, r, v)), O = {};
    for (const [w, D] of Object.entries(r))
      O[w] = { label: D, profiles: [] };
    for (const w of E) {
      const D = v[w.api];
      O[D.selected] && O[D.selected].profiles.push(w);
    }
    for (const w of Object.values(O))
      w.profiles.sort((D, x) => (D.name ?? "").localeCompare(x.name ?? ""));
    return Object.values(O).filter((w) => w.profiles.length > 0);
  }, [_, b, r, v]), S = ee.useCallback(
    (E) => {
      const O = E.target.value;
      h(O);
      const w = b.find((D) => D.id === O);
      s?.(w);
    },
    [b, s]
  );
  return _ ? /* @__PURE__ */ A.jsxs(xu, { value: p, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: i }),
    f.map((E) => /* @__PURE__ */ A.jsx("optgroup", { label: E.label, children: E.profiles.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.id, children: O.name }, O.id)) }, E.label))
  ] }) : /* @__PURE__ */ A.jsx(xu, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, VE = pu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: d }) => {
    const {
      id: p,
      label: h,
      enabled: g,
      canDelete: y = !0,
      canToggle: _ = !0,
      showSelect: b = !0,
      canSelect: v = !0,
      selectOptions: f = [],
      selectValue: S
    } = t, E = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ A.jsxs("li", { className: "sortable-list-item", style: E, "data-id": p, children: [
      /* @__PURE__ */ A.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ A.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: h
        }
      ),
      s && b && v && /* @__PURE__ */ A.jsx(
        xu,
        {
          value: S,
          onChange: (D) => d(p, D.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: f.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : f.map((D) => /* @__PURE__ */ A.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!b || !v) && /* @__PURE__ */ A.jsx("span", { style: w }),
      r && _ && /* @__PURE__ */ A.jsx(
        Se,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(p)
        }
      ),
      r && !_ && /* @__PURE__ */ A.jsx("span", { style: w }),
      i && y && /* @__PURE__ */ A.jsx(
        Se,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...O,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(p)
        }
      ),
      i && !y && /* @__PURE__ */ A.jsx("span", { style: { ...w, marginRight: 0 } })
    ] });
  }
), YE = ({
  items: t,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: u = {}
}) => {
  const d = ee.useRef(null), p = ee.useRef(null);
  ee.useEffect(() => (d.current && (p.current = Te.create(d.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...u,
    onEnd: (_) => {
      const { oldIndex: b, newIndex: v } = _;
      if (b === void 0 || v === void 0 || b === v)
        return;
      const f = Array.from(t), [S] = f.splice(b, 1);
      f.splice(v, 0, S), r(f);
    }
  })), () => {
    var _;
    (_ = p.current) == null || _.destroy(), p.current = null;
  }), [t, r, u]);
  const h = (_) => {
    r(t.map((b) => b.id === _ ? { ...b, enabled: !b.enabled } : b));
  }, g = (_) => {
    r(t.filter((b) => b.id !== _));
  }, y = (_, b) => {
    r(t.map((v) => v.id === _ ? { ...v, selectValue: b } : v));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: d, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ A.jsx(
    VE,
    {
      item: _,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: h,
      onDelete: g,
      onSelectChange: y
    },
    _.id
  )) });
}, ru = ({
  items: t,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: o = !1,
  multiple: u = !0,
  disabled: d = !1,
  onBeforeSelection: p,
  enableSearch: h = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: _,
  inputClasses: b,
  containerClasses: v
}) => {
  const [f, S] = ee.useState(!1), [E, O] = ee.useState(""), w = ee.useRef(null);
  ee.useEffect(() => {
    const k = (q) => {
      w.current && !w.current.contains(q.target) && S(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), ee.useEffect(() => {
    f || O("");
  }, [f]);
  const D = ee.useMemo(() => {
    if (!h) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Bi(t, k);
  }, [t, h, _]), x = ee.useMemo(() => !h || !E.trim() || !D ? t : D.search(E.trim()).map((k) => k.item), [t, E, h, D]), T = async (k) => {
    let q;
    u ? q = r.includes(k) ? r.filter((G) => G !== k) : [...r, k] : q = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, q))) && (i(q), o && S(!1));
  }, M = ee.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((q) => q.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: w,
      className: `fancy-dropdown-container ${v ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: d ? 0.6 : 1,
        pointerEvents: d ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !d && S(!f),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ A.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
              /* @__PURE__ */ A.jsx("i", { className: `fas ${f ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        f && /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              h && /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ A.jsx(
                    FE,
                    {
                      type: "text",
                      placeholder: g,
                      value: E,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: x.length > 0 ? x.map((k) => /* @__PURE__ */ A.jsx(
                XE,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: T
                },
                k.value
              )) : /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: y
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, XE = pu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, o] = ee.useState(!1);
  return /* @__PURE__ */ A.jsxs(
    "li",
    {
      onClick: () => i(t.value),
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : s ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ A.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), vd = SillyTavern.getContext(), Eu = ({
  value: t,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: o,
  onItemsChange: u,
  enableCreate: d = !1,
  enableRename: p = !1,
  enableDelete: h = !1,
  onCreate: g,
  onRename: y,
  onDelete: _,
  buttons: b
}) => {
  const v = ee.useMemo(() => r.find((w) => w.value === t), [r, t]), f = ee.useCallback((w) => w ? i.includes(w) : !1, [i]), S = async () => {
    const w = await vd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const D = w.trim();
    if (r.some((T) => T.value === D)) {
      await Oe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let x = { value: D, label: D };
    if (g) {
      const T = await Promise.resolve(g(D));
      if (!T.confirmed) return;
      T.value && (typeof T.value == "string" ? x = { value: T.value, label: T.value } : x = T.value);
    }
    u([...r, x]), o(x.value, t);
  }, E = async () => {
    if (!v) {
      await Oe("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (f(v.value)) {
      await Oe("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await vd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!w || w.trim() === "" || w.trim() === v.value) return;
    const D = w.trim();
    if (r.some((M) => M.value === D)) {
      await Oe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let x = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(v.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? x = { value: M.value, label: M.value } : x = M.value);
    }
    const T = r.map((M) => M.value === v.value ? x : M);
    u(T), o(x.value, t);
  }, O = async () => {
    var w;
    if (!v) {
      await Oe("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (f(v.value)) {
      await Oe("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await vd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || _ && !await Promise.resolve(_(v.value)))
      return;
    const D = r.findIndex((M) => M.value === v.value), x = r.filter((M) => M.value !== v.value);
    u(x);
    let T;
    if (x.length > 0) {
      const M = Math.min(D, x.length - 1);
      T = (w = x[M]) == null ? void 0 : w.value;
    }
    o(T, t);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(xu, { value: t ?? "", onChange: (w) => o(w.target.value, t), children: r.map((w) => /* @__PURE__ */ A.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    d && /* @__PURE__ */ A.jsx(
      Se,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      Se,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: E,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      Se,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((w) => /* @__PURE__ */ A.jsx(
      Se,
      {
        className: w.icon,
        title: w.title,
        onClick: w.onClick,
        disabled: w.disabled,
        "data-i18n": w.i18n ? `[title]${w.i18n}` : void 0
      },
      w.key
    ))
  ] });
}, Q0 = () => {
  const [, t] = ee.useState(0);
  return ee.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, yd = SillyTavern.getContext(), $E = () => {
  const t = Q0(), r = Lt.getSettings(), [i, s] = ee.useState(nu[0]), o = ee.useCallback(
    (x) => {
      const T = Lt.getSettings();
      x(T), Lt.saveSettings(), t();
    },
    [t]
  ), u = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((x) => ({ value: x, label: x })),
    [r.mainContextTemplatePresets]
  ), d = ee.useMemo(
    () => Object.entries(r.prompts).map(([x, T]) => ({
      value: x,
      label: `${T.label} (${x})`
    })),
    [r.prompts]
  ), p = ee.useMemo(() => {
    const x = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return x ? x.prompts.map((T) => {
      const M = r.prompts[T.promptName], k = M ? `${M.label} (${T.promptName})` : T.promptName;
      return {
        id: T.promptName,
        label: k,
        enabled: T.enabled,
        selectValue: T.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), h = (x) => {
    o((T) => {
      T.mainContextTemplatePreset = x ?? "default";
    });
  }, g = (x) => {
    o((T) => {
      const M = {};
      x.forEach((k) => {
        M[k.value] = T.mainContextTemplatePresets[k.value] ?? structuredClone(
          T.mainContextTemplatePresets[T.mainContextTemplatePreset] ?? T.mainContextTemplatePresets.default
        );
      }), T.mainContextTemplatePresets = M;
    });
  }, y = (x) => {
    o((T) => {
      const M = x.map((G) => ({
        promptName: G.id,
        enabled: G.enabled,
        role: G.selectValue ?? "user"
      })), k = {
        ...T.mainContextTemplatePresets[T.mainContextTemplatePreset],
        prompts: M
      }, q = {
        ...T.mainContextTemplatePresets,
        [T.mainContextTemplatePreset]: k
      };
      T.mainContextTemplatePresets = q;
    });
  }, _ = async () => {
    await yd.Popup.show.confirm("Restore default", "Are you sure?") && o((T) => {
      T.mainContextTemplatePresets = {
        ...T.mainContextTemplatePresets,
        default: structuredClone(X0.mainContextTemplatePresets.default)
      }, T.mainContextTemplatePreset === "default" ? t() : T.mainContextTemplatePreset = "default";
    });
  }, b = (x) => {
    o((T) => {
      const M = x.map((B) => B.value);
      Object.keys(T.prompts).filter((B) => !M.includes(B)).forEach((B) => {
        Object.values(T.mainContextTemplatePresets).forEach((V) => {
          V.prompts = V.prompts.filter(($) => $.promptName !== B);
        });
      });
      const G = {};
      x.forEach((B) => {
        G[B.value] = T.prompts[B.value] ?? { content: "", isDefault: !1, label: B.label };
      }), T.prompts = G;
    });
  }, v = (x) => {
    const T = Id(x);
    return T ? r.prompts[T] ? (Oe("error", `Prompt name already exists: ${T}`), { confirmed: !1 }) : (o((M) => {
      M.prompts = {
        ...M.prompts,
        [T]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: x }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([q, G]) => [
          q,
          {
            ...G,
            prompts: [...G.prompts, { enabled: !0, promptName: T, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(T), { confirmed: !0, value: T }) : (Oe("error", `Invalid prompt name: ${x}`), { confirmed: !1 });
  }, f = (x, T) => {
    const M = Id(T);
    return M ? r.prompts[M] ? (Oe("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (o((k) => {
      const { [x]: q, ...G } = k.prompts;
      k.prompts = {
        ...G,
        [M]: { ...q, label: T }
      };
      const B = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([V, $]) => [
          V,
          {
            ...$,
            prompts: $.prompts.map((oe) => oe.promptName === x ? { ...oe, promptName: M } : oe)
          }
        ])
      );
      k.mainContextTemplatePresets = B;
    }), s(M), { confirmed: !0, value: M }) : (Oe("error", `Invalid prompt name: ${T}`), { confirmed: !1 });
  }, S = (x) => {
    const T = x.target.value;
    o((M) => {
      const k = M.prompts[i];
      k && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...k,
          // Copy existing properties
          content: T,
          isDefault: nu.includes(i) ? et[i] === T : !1
        }
      });
    });
  }, E = async () => {
    const x = r.prompts[i];
    if (!x) return Oe("warning", "No prompt selected.");
    await yd.Popup.show.confirm("Restore Default", `Restore default for "${x.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: et[i]
        }
      };
    });
  }, O = async () => {
    await yd.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Lt.resetSettings(), t(), Oe("success", "Settings have been reset."));
  }, w = r.prompts[i], D = nu.includes(i);
  return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ A.jsx(
          Se,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Eu,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: h,
          onItemsChange: g,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        YE,
        {
          items: p,
          onItemsChange: y,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Prompt Templates" }),
        D && /* @__PURE__ */ A.jsx(
          Se,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Eu,
        {
          label: "Prompt",
          items: d,
          value: i,
          readOnlyValues: nu,
          onChange: (x) => s(x ?? ""),
          onItemsChange: b,
          onCreate: v,
          onRename: f,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx(
        kn,
        {
          value: w?.content ?? "",
          onChange: S,
          placeholder: "Edit the selected prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ A.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (x) => o((T) => {
            T.showSaveAsWorldInfoEntry.show = x.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(Se, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, Ty = ({
  fieldId: t,
  label: r,
  value: i,
  prompt: s,
  large: o = !1,
  rows: u = 3,
  promptEnabled: d = !0,
  isDraft: p = !1,
  isGenerating: h = !1,
  onValueChange: g,
  onPromptChange: y,
  onGenerate: _,
  onContinue: b,
  onClear: v,
  onCompare: f,
  onDelete: S,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ A.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ A.jsx("label", { children: r }),
  /* @__PURE__ */ A.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ A.jsx(kn, { value: i, onChange: (O) => g(t, O.target.value), rows: u }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ A.jsx(Se, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ A.jsx(Se, { onClick: () => b(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ A.jsx(Se, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ A.jsx(Se, { onClick: () => E(t), title: "Revise with AI chat", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && f && /* @__PURE__ */ A.jsx(Se, { onClick: () => f(t), title: "Compare with loaded character", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ A.jsx(Se, { onClick: () => S(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  d && /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ A.jsx(
    kn,
    {
      value: s,
      onChange: (O) => y(t, O.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), QE = SillyTavern.getContext(), KE = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [d, p] = ee.useState(0);
  ee.useEffect(() => {
    d >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, d]);
  const h = () => {
    const b = [...t, { value: "", prompt: "" }];
    r(b), p(b.length - 1);
  }, g = async () => {
    if (t.length === 0) return;
    if (await QE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = t.filter((f, S) => S !== d);
      r(v);
    }
  }, y = (b, v, f) => {
    const S = [...t];
    S[b][v] = f, r(S);
  }, _ = t[d];
  return /* @__PURE__ */ A.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ A.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ A.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((b, v) => /* @__PURE__ */ A.jsxs(
            Se,
            {
              onClick: () => p(v),
              className: `menu_button ${v === d ? "active" : ""}`,
              children: [
                "Greeting ",
                v + 1
              ]
            },
            v
          ))
        }
      ),
      /* @__PURE__ */ A.jsxs(Se, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ A.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ A.jsx(
          kn,
          {
            value: _?.value ?? "",
            onChange: (b) => y(d, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
          kn,
          {
            value: _?.prompt ?? "",
            onChange: (b) => y(d, "prompt", b.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ A.jsx(Se, { onClick: () => i(d), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ A.jsx(Se, { onClick: () => s(d), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ A.jsx(
          Se,
          {
            onClick: () => y(d, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ A.jsx(Se, { onClick: () => o(d), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ A.jsx(
          Se,
          {
            onClick: g,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var ra = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, i, s) {
      s === void 0 && (s = {});
      var o;
      typeof s == "function" ? (o = s, s = {}) : "callback" in s && (o = s.callback);
      var u = this.castInput(r, s), d = this.castInput(i, s), p = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(d, s));
      return this.diffWithOptionsObj(p, h, s, o);
    }, t.prototype.diffWithOptionsObj = function(r, i, s, o) {
      var u = this, d, p = function(x) {
        if (x = u.postProcess(x, s), o) {
          setTimeout(function() {
            o(x);
          }, 0);
          return;
        } else
          return x;
      }, h = i.length, g = r.length, y = 1, _ = h + g;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var b = (d = s.timeout) !== null && d !== void 0 ? d : 1 / 0, v = Date.now() + b, f = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(f[0], i, r, 0, s);
      if (f[0].oldPos + 1 >= g && S + 1 >= h)
        return p(this.buildValues(f[0].lastComponent, i, r));
      var E = -1 / 0, O = 1 / 0, w = function() {
        for (var x = Math.max(E, -y); x <= Math.min(O, y); x += 2) {
          var T = void 0, M = f[x - 1], k = f[x + 1];
          M && (f[x - 1] = void 0);
          var q = !1;
          if (k) {
            var G = k.oldPos - x;
            q = k && 0 <= G && G < h;
          }
          var B = M && M.oldPos + 1 < g;
          if (!q && !B) {
            f[x] = void 0;
            continue;
          }
          if (!B || q && M.oldPos < k.oldPos ? T = u.addToPath(k, !0, !1, 0, s) : T = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(T, i, r, x, s), T.oldPos + 1 >= g && S + 1 >= h)
            return p(u.buildValues(T.lastComponent, i, r)) || !0;
          f[x] = T, T.oldPos + 1 >= g && (O = Math.min(O, x - 1)), S + 1 >= h && (E = Math.max(E, x + 1));
        }
        y++;
      };
      if (o)
        (function x() {
          setTimeout(function() {
            if (y > _ || Date.now() > v)
              return o(void 0);
            w() || x();
          }, 0);
        })();
      else
        for (; y <= _ && Date.now() <= v; ) {
          var D = w();
          if (D)
            return D;
        }
    }, t.prototype.addToPath = function(r, i, s, o, u) {
      var d = r.lastComponent;
      return d && !u.oneChangePerToken && d.added === i && d.removed === s ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: d.count + 1, added: i, removed: s, previousComponent: d.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: i, removed: s, previousComponent: d }
      };
    }, t.prototype.extractCommon = function(r, i, s, o, u) {
      for (var d = i.length, p = s.length, h = r.oldPos, g = h - o, y = 0; g + 1 < d && h + 1 < p && this.equals(s[h + 1], i[g + 1], u); )
        g++, h++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, g;
    }, t.prototype.equals = function(r, i, s) {
      return s.comparator ? s.comparator(r, i) : r === i || !!s.ignoreCase && r.toLowerCase() === i.toLowerCase();
    }, t.prototype.removeEmpty = function(r) {
      for (var i = [], s = 0; s < r.length; s++)
        r[s] && i.push(r[s]);
      return i;
    }, t.prototype.castInput = function(r, i) {
      return r;
    }, t.prototype.tokenize = function(r, i) {
      return Array.from(r);
    }, t.prototype.join = function(r) {
      return r.join("");
    }, t.prototype.postProcess = function(r, i) {
      return r;
    }, Object.defineProperty(t.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.buildValues = function(r, i, s) {
      for (var o = [], u; r; )
        o.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      o.reverse();
      for (var d = o.length, p = 0, h = 0, g = 0; p < d; p++) {
        var y = o[p];
        if (y.removed)
          y.value = this.join(s.slice(g, g + y.count)), g += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var _ = i.slice(h, h + y.count);
            _ = _.map(function(b, v) {
              var f = s[g + v];
              return f.length > b.length ? f : b;
            }), y.value = this.join(_);
          } else
            y.value = this.join(i.slice(h, h + y.count));
          h += y.count, y.added || (g += y.count);
        }
      }
      return o;
    }, t;
  })()
), JE = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), WE = (
  /** @class */
  (function(t) {
    JE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(ra)
);
new WE();
function Oy(t, r) {
  var i;
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[i] != r[i])
      return t.slice(0, i);
  return t.slice(0, i);
}
function Ny(t, r) {
  var i;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[t.length - (i + 1)] != r[r.length - (i + 1)])
      return t.slice(-i);
  return t.slice(-i);
}
function Bd(t, r, i) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + t.slice(r.length);
}
function Ud(t, r, i) {
  if (!r)
    return t + i;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + i;
}
function Ys(t, r) {
  return Bd(t, r, "");
}
function au(t, r) {
  return Ud(t, r, "");
}
function Dy(t, r) {
  return r.slice(0, eC(t, r));
}
function eC(t, r) {
  var i = 0;
  t.length > r.length && (i = t.length - r.length);
  var s = r.length;
  t.length < r.length && (s = t.length);
  var o = Array(s), u = 0;
  o[0] = 0;
  for (var d = 1; d < s; d++) {
    for (r[d] == r[u] ? o[d] = o[u] : o[d] = u; u > 0 && r[d] != r[u]; )
      u = o[u];
    r[d] == r[u] && u++;
  }
  u = 0;
  for (var p = i; p < t.length; p++) {
    for (; u > 0 && t[p] != r[u]; )
      u = o[u];
    t[p] == r[u] && u++;
  }
  return u;
}
function Xs(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Kr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var K0 = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), Cu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", tC = new RegExp("[".concat(Cu, "]+|\\s+|[^").concat(Cu, "]"), "ug"), nC = (
  /** @class */
  (function(t) {
    K0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreCase && (i = i.toLowerCase(), s = s.toLowerCase()), i.trim() === s.trim();
    }, r.prototype.tokenize = function(i, s) {
      s === void 0 && (s = {});
      var o;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        o = Array.from(u.segment(i), function(h) {
          return h.segment;
        });
      } else
        o = i.match(tC) || [];
      var d = [], p = null;
      return o.forEach(function(h) {
        /\s/.test(h) ? p == null ? d.push(h) : d.push(d.pop() + h) : p != null && /\s/.test(p) ? d[d.length - 1] == p ? d.push(d.pop() + h) : d.push(p + h) : d.push(h), p = h;
      }), d;
    }, r.prototype.join = function(i) {
      return i.map(function(s, o) {
        return o == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var o = null, u = null, d = null;
      return i.forEach(function(p) {
        p.added ? u = p : p.removed ? d = p : ((u || d) && My(o, d, u, p), o = p, u = null, d = null);
      }), (u || d) && My(o, d, u, null), i;
    }, r;
  })(ra)
), rC = new nC();
function J0(t, r, i) {
  return rC.diff(t, r, i);
}
function My(t, r, i, s) {
  if (r && i) {
    var o = Kr(r.value), u = Xs(r.value), d = Kr(i.value), p = Xs(i.value);
    if (t) {
      var h = Oy(o, d);
      t.value = Ud(t.value, d, h), r.value = Ys(r.value, h), i.value = Ys(i.value, h);
    }
    if (s) {
      var g = Ny(u, p);
      s.value = Bd(s.value, p, g), r.value = au(r.value, g), i.value = au(i.value, g);
    }
  } else if (i) {
    if (t) {
      var y = Kr(i.value);
      i.value = i.value.substring(y.length);
    }
    if (s) {
      var y = Kr(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (t && s) {
    var _ = Kr(s.value), b = Kr(r.value), v = Xs(r.value), f = Oy(_, b);
    r.value = Ys(r.value, f);
    var S = Ny(Ys(_, f), v);
    r.value = au(r.value, S), s.value = Bd(s.value, _, S), t.value = Ud(t.value, _, _.slice(0, _.length - S.length));
  } else if (s) {
    var E = Kr(s.value), O = Xs(r.value), w = Dy(O, E);
    r.value = au(r.value, w);
  } else if (t) {
    var D = Xs(t.value), x = Kr(r.value), w = Dy(D, x);
    r.value = Ys(r.value, w);
  }
}
var aC = (
  /** @class */
  (function(t) {
    K0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(Cu, "]+|[^\\S\\n\\r]+|[^").concat(Cu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(ra)
);
new aC();
var iC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), sC = (
  /** @class */
  (function(t) {
    iC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = W0, i;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!o.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, i, s, o);
    }, r;
  })(ra)
);
new sC();
function W0(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var i = [], s = t.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var o = 0; o < s.length; o++) {
    var u = s[o];
    o % 2 && !r.newlineIsToken ? i[i.length - 1] += u : i.push(u);
  }
  return i;
}
var lC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), oC = (
  /** @class */
  (function(t) {
    lC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ra)
);
new oC();
var uC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), cC = (
  /** @class */
  (function(t) {
    uC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(ra)
);
new cC();
var fC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), dC = (
  /** @class */
  (function(t) {
    fC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = W0, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var o = s.undefinedReplacement, u = s.stringifyReplacer, d = u === void 0 ? function(p, h) {
        return typeof h > "u" ? o : h;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(Hd(i, null, null, d), null, "  ");
    }, r.prototype.equals = function(i, s, o) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(ra)
);
new dC();
function Hd(t, r, i, s, o) {
  r = r || [], i = i || [], s && (t = s(o === void 0 ? "" : o, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return i[u];
  var d;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), d = new Array(t.length), i.push(d), u = 0; u < t.length; u += 1)
      d[u] = Hd(t[u], r, i, s, String(u));
    return r.pop(), i.pop(), d;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), d = {}, i.push(d);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], d[h] = Hd(t[h], r, i, s, h);
    r.pop(), i.pop();
  } else
    d = t;
  return d;
}
var hC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), pC = (
  /** @class */
  (function(t) {
    hC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.slice();
    }, r.prototype.join = function(i) {
      return i;
    }, r.prototype.removeEmpty = function(i) {
      return i;
    }, r;
  })(ra)
);
new pC();
const mC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = ee.useMemo(() => {
    const o = J0(t, r);
    let u = "", d = "";
    return o.forEach((p) => {
      const g = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += g), p.removed || (d += g);
    }), { originalHtml: u, newHtml: d };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ A.jsxs("h3", { children: [
      "Compare Changes for: ",
      i
    ] }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ A.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ A.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.newHtml }
          }
        )
      ] })
    ] })
  ] });
};
function W(t, r, i) {
  function s(p, h) {
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
    for (const y in d.prototype)
      y in p || Object.defineProperty(p, y, { value: d.prototype[y].bind(p) });
    p._zod.constr = d, p._zod.def = h;
  }
  const o = i?.Parent ?? Object;
  class u extends o {
  }
  Object.defineProperty(u, "name", { value: t });
  function d(p) {
    var h;
    const g = i?.Parent ? new u() : this;
    s(g, p), (h = g._zod).deferred ?? (h.deferred = []);
    for (const y of g._zod.deferred)
      y();
    return g;
  }
  return Object.defineProperty(d, "init", { value: s }), Object.defineProperty(d, Symbol.hasInstance, {
    value: (p) => i?.Parent && p instanceof i.Parent ? !0 : p?._zod?.traits?.has(t)
  }), Object.defineProperty(d, "name", { value: t }), d;
}
class Pi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class e1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const t1 = {};
function za(t) {
  return t1;
}
function n1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function qd(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function ih(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function sh(t) {
  return t == null;
}
function lh(t) {
  const r = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, i);
}
function gC(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (o = Number.parseInt(h[1]));
  }
  const u = i > o ? i : o, d = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return d % p / 10 ** u;
}
const ky = Symbol("evaluating");
function rt(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== ky)
        return s === void 0 && (s = ky, s = i()), s;
    },
    set(o) {
      Object.defineProperty(t, r, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Pa(t, r, i) {
  Object.defineProperty(t, r, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ia(...t) {
  const r = {};
  for (const i of t) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function Ry(t) {
  return JSON.stringify(t);
}
const r1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function wu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const vC = ih(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function il(t) {
  if (wu(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(wu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function a1(t) {
  return il(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const yC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Du(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function aa(t, r, i) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || i?.parent) && (s._zod.parent = t), s;
}
function _e(t) {
  const r = t;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function bC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const _C = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function SC(t, r) {
  const i = t._zod.def, s = Ia(t._zod.def, {
    get shape() {
      const o = {};
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (o[u] = i.shape[u]);
      }
      return Pa(this, "shape", o), o;
    },
    checks: []
  });
  return aa(t, s);
}
function xC(t, r) {
  const i = t._zod.def, s = Ia(t._zod.def, {
    get shape() {
      const o = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete o[u];
      }
      return Pa(this, "shape", o), o;
    },
    checks: []
  });
  return aa(t, s);
}
function EC(t, r) {
  if (!il(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Ia(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return aa(t, o);
}
function CC(t, r) {
  if (!il(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Pa(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return aa(t, i);
}
function wC(t, r) {
  const i = Ia(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Pa(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return aa(t, i);
}
function AC(t, r, i) {
  const s = Ia(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const d in i) {
          if (!(d in o))
            throw new Error(`Unrecognized key: "${d}"`);
          i[d] && (u[d] = t ? new t({
            type: "optional",
            innerType: o[d]
          }) : o[d]);
        }
      else
        for (const d in o)
          u[d] = t ? new t({
            type: "optional",
            innerType: o[d]
          }) : o[d];
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return aa(r, s);
}
function TC(t, r, i) {
  const s = Ia(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const d in i) {
          if (!(d in u))
            throw new Error(`Unrecognized key: "${d}"`);
          i[d] && (u[d] = new t({
            type: "nonoptional",
            innerType: o[d]
          }));
        }
      else
        for (const d in o)
          u[d] = new t({
            type: "nonoptional",
            innerType: o[d]
          });
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return aa(r, s);
}
function ji(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = r; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function i1(t, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function iu(t) {
  return typeof t == "string" ? t : t?.message;
}
function La(t, r, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const o = iu(t.inst?._zod.def?.error?.(t)) ?? iu(r?.error?.(t)) ?? iu(i.customError?.(t)) ?? iu(i.localeError?.(t)) ?? "Invalid input";
    s.message = o;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function oh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function sl(...t) {
  const [r, i, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const s1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, qd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, l1 = W("$ZodError", s1), o1 = W("$ZodError", s1, { Parent: Error });
function OC(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of t.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function NC(t, r = (i) => i.message) {
  const i = { _errors: [] }, s = (o) => {
    for (const u of o.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((d) => s({ issues: d }));
      else if (u.code === "invalid_key")
        s({ issues: u.issues });
      else if (u.code === "invalid_element")
        s({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(r(u));
      else {
        let d = i, p = 0;
        for (; p < u.path.length; ) {
          const h = u.path[p];
          p === u.path.length - 1 ? (d[h] = d[h] || { _errors: [] }, d[h]._errors.push(r(u))) : d[h] = d[h] || { _errors: [] }, d = d[h], p++;
        }
      }
  };
  return s(t), i;
}
const uh = (t) => (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, d = r._zod.run({ value: i, issues: [] }, u);
  if (d instanceof Promise)
    throw new Pi();
  if (d.issues.length) {
    const p = new (o?.Err ?? t)(d.issues.map((h) => La(h, u, za())));
    throw r1(p, o?.callee), p;
  }
  return d.value;
}, ch = (t) => async (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let d = r._zod.run({ value: i, issues: [] }, u);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const p = new (o?.Err ?? t)(d.issues.map((h) => La(h, u, za())));
    throw r1(p, o?.callee), p;
  }
  return d.value;
}, Mu = (t) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, o);
  if (u instanceof Promise)
    throw new Pi();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? l1)(u.issues.map((d) => La(d, o, za())))
  } : { success: !0, data: u.value };
}, DC = /* @__PURE__ */ Mu(o1), ku = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((d) => La(d, o, za())))
  } : { success: !0, data: u.value };
}, MC = /* @__PURE__ */ ku(o1), kC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return uh(t)(r, i, o);
}, RC = (t) => (r, i, s) => uh(t)(r, i, s), jC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ch(t)(r, i, o);
}, zC = (t) => async (r, i, s) => ch(t)(r, i, s), LC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Mu(t)(r, i, o);
}, PC = (t) => (r, i, s) => Mu(t)(r, i, s), IC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ku(t)(r, i, o);
}, BC = (t) => async (r, i, s) => ku(t)(r, i, s), UC = /^[cC][^\s-]{8,}$/, HC = /^[0-9a-z]+$/, qC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, FC = /^[0-9a-vA-V]{20}$/, ZC = /^[A-Za-z0-9]{27}$/, GC = /^[a-zA-Z0-9_-]{21}$/, VC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, YC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, jy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, XC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, $C = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function QC() {
  return new RegExp($C, "u");
}
const KC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, JC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, WC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ew = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, tw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, u1 = /^[A-Za-z0-9_-]*$/, nw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, rw = /^\+(?:[0-9]){6,14}[0-9]$/, c1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", aw = /* @__PURE__ */ new RegExp(`^${c1}$`);
function f1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function iw(t) {
  return new RegExp(`^${f1(t)}$`);
}
function sw(t) {
  const r = f1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${c1}T(?:${s})$`);
}
const lw = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, ow = /^-?\d+$/, uw = /^-?\d+(?:\.\d+)?/, cw = /^[^A-Z]*$/, fw = /^[^a-z]*$/, an = /* @__PURE__ */ W("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), d1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, h1 = /* @__PURE__ */ W("$ZodCheckLessThan", (t, r) => {
  an.init(t, r);
  const i = d1[typeof r.value];
  t._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? o.maximum = r.value : o.exclusiveMaximum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: i,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), p1 = /* @__PURE__ */ W("$ZodCheckGreaterThan", (t, r) => {
  an.init(t, r);
  const i = d1[typeof r.value];
  t._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? o.minimum = r.value : o.exclusiveMinimum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: i,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), dw = /* @__PURE__ */ W("$ZodCheckMultipleOf", (t, r) => {
  an.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : gC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), hw = /* @__PURE__ */ W("$ZodCheckNumberFormat", (t, r) => {
  an.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, u] = _C[r.format];
  t._zod.onattach.push((d) => {
    const p = d._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = u, i && (p.pattern = ow);
  }), t._zod.check = (d) => {
    const p = d.value;
    if (i) {
      if (!Number.isInteger(p)) {
        d.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? d.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        }) : d.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        });
        return;
      }
    }
    p < o && d.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: t,
      continue: !r.abort
    }), p > u && d.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: u,
      inst: t
    });
  };
}), pw = /* @__PURE__ */ W("$ZodCheckMaxLength", (t, r) => {
  var i;
  an.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !sh(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length <= r.maximum)
      return;
    const d = oh(o);
    s.issues.push({
      origin: d,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), mw = /* @__PURE__ */ W("$ZodCheckMinLength", (t, r) => {
  var i;
  an.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !sh(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length >= r.minimum)
      return;
    const d = oh(o);
    s.issues.push({
      origin: d,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), gw = /* @__PURE__ */ W("$ZodCheckLengthEquals", (t, r) => {
  var i;
  an.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !sh(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), t._zod.check = (s) => {
    const o = s.value, u = o.length;
    if (u === r.length)
      return;
    const d = oh(o), p = u > r.length;
    s.issues.push({
      origin: d,
      ...p ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Ru = /* @__PURE__ */ W("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  an.init(t, r), t._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (i = t._zod).check ?? (i.check = (o) => {
    r.pattern.lastIndex = 0, !r.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: o.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), vw = /* @__PURE__ */ W("$ZodCheckRegex", (t, r) => {
  Ru.init(t, r), t._zod.check = (i) => {
    r.pattern.lastIndex = 0, !r.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: r.pattern.toString(),
      inst: t,
      continue: !r.abort
    });
  };
}), yw = /* @__PURE__ */ W("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = cw), Ru.init(t, r);
}), bw = /* @__PURE__ */ W("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = fw), Ru.init(t, r);
}), _w = /* @__PURE__ */ W("$ZodCheckIncludes", (t, r) => {
  an.init(t, r);
  const i = Du(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
  r.pattern = s, t._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (o) => {
    o.value.includes(r.includes, r.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: o.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Sw = /* @__PURE__ */ W("$ZodCheckStartsWith", (t, r) => {
  an.init(t, r);
  const i = new RegExp(`^${Du(r.prefix)}.*`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), t._zod.check = (s) => {
    s.value.startsWith(r.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), xw = /* @__PURE__ */ W("$ZodCheckEndsWith", (t, r) => {
  an.init(t, r);
  const i = new RegExp(`.*${Du(r.suffix)}$`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), t._zod.check = (s) => {
    s.value.endsWith(r.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Ew = /* @__PURE__ */ W("$ZodCheckOverwrite", (t, r) => {
  an.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class Cw {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const s = r.split(`
`).filter((d) => d), o = Math.min(...s.map((d) => d.length - d.trimStart().length)), u = s.map((d) => d.slice(o)).map((d) => " ".repeat(this.indent * 2) + d);
    for (const d of u)
      this.content.push(d);
  }
  compile() {
    const r = Function, i = this?.args, o = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...i, o.join(`
`));
  }
}
const ww = {
  major: 4,
  minor: 1,
  patch: 12
}, Et = /* @__PURE__ */ W("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = ww;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const o of s)
    for (const u of o._zod.onattach)
      u(t);
  if (s.length === 0)
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const o = (d, p, h) => {
      let g = ji(d), y;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(d))
            continue;
        } else if (g)
          continue;
        const b = d.issues.length, v = _._zod.check(d);
        if (v instanceof Promise && h?.async === !1)
          throw new Pi();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, d.issues.length !== b && (g || (g = ji(d, b)));
          });
        else {
          if (d.issues.length === b)
            continue;
          g || (g = ji(d, b));
        }
      }
      return y ? y.then(() => d) : d;
    }, u = (d, p, h) => {
      if (ji(d))
        return d.aborted = !0, d;
      const g = o(p, s, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Pi();
        return g.then((y) => t._zod.parse(y, h));
      }
      return t._zod.parse(g, h);
    };
    t._zod.run = (d, p) => {
      if (p.skipChecks)
        return t._zod.parse(d, p);
      if (p.direction === "backward") {
        const g = t._zod.parse({ value: d.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((y) => u(y, d, p)) : u(g, d, p);
      }
      const h = t._zod.parse(d, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Pi();
        return h.then((g) => o(g, s, p));
      }
      return o(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (o) => {
      try {
        const u = DC(t, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return MC(t, o).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), fh = /* @__PURE__ */ W("$ZodString", (t, r) => {
  Et.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? lw(t._zod.bag), t._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: t
    }), i;
  };
}), ot = /* @__PURE__ */ W("$ZodStringFormat", (t, r) => {
  Ru.init(t, r), fh.init(t, r);
}), Aw = /* @__PURE__ */ W("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = YC), ot.init(t, r);
}), Tw = /* @__PURE__ */ W("$ZodUUID", (t, r) => {
  if (r.version) {
    const s = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (s === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = jy(s));
  } else
    r.pattern ?? (r.pattern = jy());
  ot.init(t, r);
}), Ow = /* @__PURE__ */ W("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = XC), ot.init(t, r);
}), Nw = /* @__PURE__ */ W("$ZodURL", (t, r) => {
  ot.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: nw.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? i.value = o.href : i.value = s;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), Dw = /* @__PURE__ */ W("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = QC()), ot.init(t, r);
}), Mw = /* @__PURE__ */ W("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = GC), ot.init(t, r);
}), kw = /* @__PURE__ */ W("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = UC), ot.init(t, r);
}), Rw = /* @__PURE__ */ W("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = HC), ot.init(t, r);
}), jw = /* @__PURE__ */ W("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = qC), ot.init(t, r);
}), zw = /* @__PURE__ */ W("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = FC), ot.init(t, r);
}), Lw = /* @__PURE__ */ W("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = ZC), ot.init(t, r);
}), Pw = /* @__PURE__ */ W("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = sw(r)), ot.init(t, r);
}), Iw = /* @__PURE__ */ W("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = aw), ot.init(t, r);
}), Bw = /* @__PURE__ */ W("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = iw(r)), ot.init(t, r);
}), Uw = /* @__PURE__ */ W("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = VC), ot.init(t, r);
}), Hw = /* @__PURE__ */ W("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = KC), ot.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), qw = /* @__PURE__ */ W("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = JC), ot.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv6";
  }), t._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), Fw = /* @__PURE__ */ W("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = WC), ot.init(t, r);
}), Zw = /* @__PURE__ */ W("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = ew), ot.init(t, r), t._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [o, u] = s;
      if (!u)
        throw new Error();
      const d = Number(u);
      if (`${d}` !== u)
        throw new Error();
      if (d < 0 || d > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
});
function m1(t) {
  if (t === "")
    return !0;
  if (t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const Gw = /* @__PURE__ */ W("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = tw), ot.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    m1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function Vw(t) {
  if (!u1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return m1(i);
}
const Yw = /* @__PURE__ */ W("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = u1), ot.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    Vw(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Xw = /* @__PURE__ */ W("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = rw), ot.init(t, r);
});
function $w(t, r = null) {
  try {
    const i = t.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const o = JSON.parse(atob(s));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || r && (!("alg" in o) || o.alg !== r));
  } catch {
    return !1;
  }
}
const Qw = /* @__PURE__ */ W("$ZodJWT", (t, r) => {
  ot.init(t, r), t._zod.check = (i) => {
    $w(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), g1 = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  Et.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? uw, t._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const o = i.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return i;
    const u = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: t,
      ...u ? { received: u } : {}
    }), i;
  };
}), Kw = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  hw.init(t, r), g1.init(t, r);
}), Jw = /* @__PURE__ */ W("$ZodUnknown", (t, r) => {
  Et.init(t, r), t._zod.parse = (i) => i;
}), Ww = /* @__PURE__ */ W("$ZodNever", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function zy(t, r, i) {
  t.issues.length && r.issues.push(...i1(i, t.issues)), r.value[i] = t.value;
}
const e3 = /* @__PURE__ */ W("$ZodArray", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value;
    if (!Array.isArray(o))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: t
      }), i;
    i.value = Array(o.length);
    const u = [];
    for (let d = 0; d < o.length; d++) {
      const p = o[d], h = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((g) => zy(g, i, d))) : zy(h, i, d);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Au(t, r, i, s) {
  t.issues.length && r.issues.push(...i1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function v1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = bC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function y1(t, r, i, s, o, u) {
  const d = [], p = o.keySet, h = o.catchall._zod, g = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (g === "never") {
      d.push(y);
      continue;
    }
    const _ = h.run({ value: r[y], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => Au(b, i, y, r))) : Au(_, i, y, r);
  }
  return d.length && i.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const t3 = /* @__PURE__ */ W("$ZodObject", (t, r) => {
  if (Et.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const p = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const h = { ...p };
        return Object.defineProperty(r, "shape", {
          value: h
        }), h;
      }
    });
  }
  const s = ih(() => v1(r));
  rt(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const g in p) {
      const y = p[g]._zod;
      if (y.values) {
        h[g] ?? (h[g] = /* @__PURE__ */ new Set());
        for (const _ of y.values)
          h[g].add(_);
      }
    }
    return h;
  });
  const o = wu, u = r.catchall;
  let d;
  t._zod.parse = (p, h) => {
    d ?? (d = s.value);
    const g = p.value;
    if (!o(g))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: t
      }), p;
    p.value = {};
    const y = [], _ = d.shape;
    for (const b of d.keys) {
      const f = _[b]._zod.run({ value: g[b], issues: [] }, h);
      f instanceof Promise ? y.push(f.then((S) => Au(S, p, b, g))) : Au(f, p, b, g);
    }
    return u ? y1(y, g, p, h, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), n3 = /* @__PURE__ */ W("$ZodObjectJIT", (t, r) => {
  t3.init(t, r);
  const i = t._zod.parse, s = ih(() => v1(r)), o = (b) => {
    const v = new Cw(["shape", "payload", "ctx"]), f = s.value, S = (D) => {
      const x = Ry(D);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const D of f.keys)
      E[D] = `key_${O++}`;
    v.write("const newResult = {};");
    for (const D of f.keys) {
      const x = E[D], T = Ry(D);
      v.write(`const ${x} = ${S(D)};`), v.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        
        if (${x}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${x}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const w = v.compile();
    return (D, x) => w(b, D, x);
  };
  let u;
  const d = wu, p = !t1.jitless, g = p && vC.value, y = r.catchall;
  let _;
  t._zod.parse = (b, v) => {
    _ ?? (_ = s.value);
    const f = b.value;
    return d(f) ? p && g && v?.async === !1 && v.jitless !== !0 ? (u || (u = o(r.shape)), b = u(b, v), y ? y1([], f, b, v, _, t) : b) : i(b, v) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: t
    }), b);
  };
});
function Ly(t, r, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const o = t.filter((u) => !ji(u));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: t.map((u) => u.issues.map((d) => La(d, s, za())))
  }), r);
}
const r3 = /* @__PURE__ */ W("$ZodUnion", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), rt(t._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), rt(t._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), rt(t._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${o.map((u) => lh(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (o, u) => {
    if (i)
      return s(o, u);
    let d = !1;
    const p = [];
    for (const h of r.options) {
      const g = h._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (g instanceof Promise)
        p.push(g), d = !0;
      else {
        if (g.issues.length === 0)
          return g;
        p.push(g);
      }
    }
    return d ? Promise.all(p).then((h) => Ly(h, o, t, u)) : Ly(p, o, t, u);
  };
}), a3 = /* @__PURE__ */ W("$ZodIntersection", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), d = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || d instanceof Promise ? Promise.all([u, d]).then(([h, g]) => Py(i, h, g)) : Py(i, u, d);
  };
});
function Fd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (il(t) && il(r)) {
    const i = Object.keys(r), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), o = { ...t, ...r };
    for (const u of s) {
      const d = Fd(t[u], r[u]);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...d.mergeErrorPath]
        };
      o[u] = d.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], u = r[s], d = Fd(o, u);
      if (!d.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...d.mergeErrorPath]
        };
      i.push(d.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Py(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), ji(t))
    return t;
  const s = Fd(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const i3 = /* @__PURE__ */ W("$ZodEnum", (t, r) => {
  Et.init(t, r);
  const i = n1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((o) => yC.has(typeof o)).map((o) => typeof o == "string" ? Du(o) : o.toString()).join("|")})$`), t._zod.parse = (o, u) => {
    const d = o.value;
    return s.has(d) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: d,
      inst: t
    }), o;
  };
}), s3 = /* @__PURE__ */ W("$ZodTransform", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new e1(t.constructor.name);
    const o = r.transform(i.value, i);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((d) => (i.value = d, i));
    if (o instanceof Promise)
      throw new Pi();
    return i.value = o, i;
  };
});
function Iy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const l3 = /* @__PURE__ */ W("$ZodOptional", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${lh(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => Iy(u, i.value)) : Iy(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), o3 = /* @__PURE__ */ W("$ZodNullable", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${lh(i.source)}|null)$`) : void 0;
  }), rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), u3 = /* @__PURE__ */ W("$ZodDefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => By(u, r)) : By(o, r);
  };
});
function By(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const c3 = /* @__PURE__ */ W("$ZodPrefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), f3 = /* @__PURE__ */ W("$ZodNonOptional", (t, r) => {
  Et.init(t, r), rt(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => Uy(u, t)) : Uy(o, t);
  };
});
function Uy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const d3 = /* @__PURE__ */ W("$ZodCatch", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((d) => La(d, s, za()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((u) => La(u, s, za()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), h3 = /* @__PURE__ */ W("$ZodPipe", (t, r) => {
  Et.init(t, r), rt(t._zod, "values", () => r.in._zod.values), rt(t._zod, "optin", () => r.in._zod.optin), rt(t._zod, "optout", () => r.out._zod.optout), rt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(i, s);
      return u instanceof Promise ? u.then((d) => su(d, r.in, s)) : su(u, r.in, s);
    }
    const o = r.in._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => su(u, r.out, s)) : su(o, r.out, s);
  };
});
function su(t, r, i) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, i);
}
const p3 = /* @__PURE__ */ W("$ZodReadonly", (t, r) => {
  Et.init(t, r), rt(t._zod, "propValues", () => r.innerType._zod.propValues), rt(t._zod, "values", () => r.innerType._zod.values), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(Hy) : Hy(o);
  };
});
function Hy(t) {
  return t.value = Object.freeze(t.value), t;
}
const m3 = /* @__PURE__ */ W("$ZodCustom", (t, r) => {
  an.init(t, r), Et.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((u) => qy(u, i, s, t));
    qy(o, i, s, t);
  };
});
function qy(t, r, i, s) {
  if (!t) {
    const o = {
      code: "custom",
      input: i,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (o.params = s._zod.def.params), r.issues.push(sl(o));
  }
}
class b1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...i) {
    const s = i[0];
    if (this._map.set(r, s), s && typeof s == "object" && "id" in s) {
      if (this._idmap.has(s.id))
        throw new Error(`ID ${s.id} already exists in the registry`);
      this._idmap.set(s.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const i = this._map.get(r);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(r), this;
  }
  get(r) {
    const i = r._zod.parent;
    if (i) {
      const s = { ...this.get(i) ?? {} };
      delete s.id;
      const o = { ...s, ...this._map.get(r) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function g3() {
  return new b1();
}
const Js = /* @__PURE__ */ g3();
function v3(t, r) {
  return new t({
    type: "string",
    ..._e(r)
  });
}
function y3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function Fy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function b3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function _3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ..._e(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ..._e(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ..._e(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function A3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function D3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function M3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function k3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function R3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function z3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function L3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function P3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function I3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function B3(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ..._e(r)
  });
}
function U3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ..._e(r)
  });
}
function H3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ..._e(r)
  });
}
function q3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ..._e(r)
  });
}
function F3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ..._e(r)
  });
}
function Z3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ..._e(r)
  });
}
function G3(t) {
  return new t({
    type: "unknown"
  });
}
function V3(t, r) {
  return new t({
    type: "never",
    ..._e(r)
  });
}
function Zy(t, r) {
  return new h1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function bd(t, r) {
  return new h1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Gy(t, r) {
  return new p1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function _d(t, r) {
  return new p1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Vy(t, r) {
  return new dw({
    check: "multiple_of",
    ..._e(r),
    value: t
  });
}
function _1(t, r) {
  return new pw({
    check: "max_length",
    ..._e(r),
    maximum: t
  });
}
function Tu(t, r) {
  return new mw({
    check: "min_length",
    ..._e(r),
    minimum: t
  });
}
function S1(t, r) {
  return new gw({
    check: "length_equals",
    ..._e(r),
    length: t
  });
}
function Y3(t, r) {
  return new vw({
    check: "string_format",
    format: "regex",
    ..._e(r),
    pattern: t
  });
}
function X3(t) {
  return new yw({
    check: "string_format",
    format: "lowercase",
    ..._e(t)
  });
}
function $3(t) {
  return new bw({
    check: "string_format",
    format: "uppercase",
    ..._e(t)
  });
}
function Q3(t, r) {
  return new _w({
    check: "string_format",
    format: "includes",
    ..._e(r),
    includes: t
  });
}
function K3(t, r) {
  return new Sw({
    check: "string_format",
    format: "starts_with",
    ..._e(r),
    prefix: t
  });
}
function J3(t, r) {
  return new xw({
    check: "string_format",
    format: "ends_with",
    ..._e(r),
    suffix: t
  });
}
function cl(t) {
  return new Ew({
    check: "overwrite",
    tx: t
  });
}
function W3(t) {
  return cl((r) => r.normalize(t));
}
function e4() {
  return cl((t) => t.trim());
}
function t4() {
  return cl((t) => t.toLowerCase());
}
function n4() {
  return cl((t) => t.toUpperCase());
}
function r4(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ..._e(i)
  });
}
function a4(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ..._e(i)
  });
}
function i4(t) {
  const r = s4((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(sl(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(sl(o));
    }
  }, t(i.value, i)));
  return r;
}
function s4(t, r) {
  const i = new an({
    check: "custom",
    ..._e(r)
  });
  return i._zod.check = t, i;
}
class Yy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Js, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, i = { path: [], schemaPath: [] }) {
    var s;
    const o = r._zod.def, u = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, d = this.seen.get(r);
    if (d)
      return d.count++, i.schemaPath.includes(r) && (d.cycle = i.path), d.schema;
    const p = { schema: {}, count: 1, cycle: void 0, path: i.path };
    this.seen.set(r, p);
    const h = r._zod.toJSONSchema?.();
    if (h)
      p.schema = h;
    else {
      const _ = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, b = r._zod.parent;
      if (b)
        p.ref = b, this.process(b, _), this.seen.get(b).isParent = !0;
      else {
        const v = p.schema;
        switch (o.type) {
          case "string": {
            const f = v;
            f.type = "string";
            const { minimum: S, maximum: E, format: O, patterns: w, contentEncoding: D } = r._zod.bag;
            if (typeof S == "number" && (f.minLength = S), typeof E == "number" && (f.maxLength = E), O && (f.format = u[O] ?? O, f.format === "" && delete f.format), D && (f.contentEncoding = D), w && w.size > 0) {
              const x = [...w];
              x.length === 1 ? f.pattern = x[0].source : x.length > 1 && (p.schema.allOf = [
                ...x.map((T) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: T.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const f = v, { minimum: S, maximum: E, format: O, multipleOf: w, exclusiveMaximum: D, exclusiveMinimum: x } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? f.type = "integer" : f.type = "number", typeof x == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.minimum = x, f.exclusiveMinimum = !0) : f.exclusiveMinimum = x), typeof S == "number" && (f.minimum = S, typeof x == "number" && this.target !== "draft-4" && (x >= S ? delete f.minimum : delete f.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.maximum = D, f.exclusiveMaximum = !0) : f.exclusiveMaximum = D), typeof E == "number" && (f.maximum = E, typeof D == "number" && this.target !== "draft-4" && (D <= E ? delete f.maximum : delete f.exclusiveMaximum)), typeof w == "number" && (f.multipleOf = w);
            break;
          }
          case "boolean": {
            const f = v;
            f.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (v.type = "string", v.nullable = !0, v.enum = [null]) : v.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            v.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const f = v, { minimum: S, maximum: E } = r._zod.bag;
            typeof S == "number" && (f.minItems = S), typeof E == "number" && (f.maxItems = E), f.type = "array", f.items = this.process(o.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const f = v;
            f.type = "object", f.properties = {};
            const S = o.shape;
            for (const w in S)
              f.properties[w] = this.process(S[w], {
                ..._,
                path: [..._.path, "properties", w]
              });
            const E = new Set(Object.keys(S)), O = new Set([...E].filter((w) => {
              const D = o.shape[w]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            O.size > 0 && (f.required = Array.from(O)), o.catchall?._zod.def.type === "never" ? f.additionalProperties = !1 : o.catchall ? o.catchall && (f.additionalProperties = this.process(o.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (f.additionalProperties = !1);
            break;
          }
          case "union": {
            const f = v, S = o.options.map((E, O) => this.process(E, {
              ..._,
              path: [..._.path, "anyOf", O]
            }));
            f.anyOf = S;
            break;
          }
          case "intersection": {
            const f = v, S = this.process(o.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), E = this.process(o.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), O = (D) => "allOf" in D && Object.keys(D).length === 1, w = [
              ...O(S) ? S.allOf : [S],
              ...O(E) ? E.allOf : [E]
            ];
            f.allOf = w;
            break;
          }
          case "tuple": {
            const f = v;
            f.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = o.items.map((T, M) => this.process(T, {
              ..._,
              path: [..._.path, S, M]
            })), w = o.rest ? this.process(o.rest, {
              ..._,
              path: [..._.path, E, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (f.prefixItems = O, w && (f.items = w)) : this.target === "openapi-3.0" ? (f.items = {
              anyOf: O
            }, w && f.items.anyOf.push(w), f.minItems = O.length, w || (f.maxItems = O.length)) : (f.items = O, w && (f.additionalItems = w));
            const { minimum: D, maximum: x } = r._zod.bag;
            typeof D == "number" && (f.minItems = D), typeof x == "number" && (f.maxItems = x);
            break;
          }
          case "record": {
            const f = v;
            f.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (f.propertyNames = this.process(o.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), f.additionalProperties = this.process(o.valueType, {
              ..._,
              path: [..._.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const f = v, S = n1(o.entries);
            S.every((E) => typeof E == "number") && (f.type = "number"), S.every((E) => typeof E == "string") && (f.type = "string"), f.enum = S;
            break;
          }
          case "literal": {
            const f = v, S = [];
            for (const E of o.values)
              if (E === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof E == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                S.push(Number(E));
              } else
                S.push(E);
            if (S.length !== 0) if (S.length === 1) {
              const E = S[0];
              f.type = E === null ? "null" : typeof E, this.target === "draft-4" || this.target === "openapi-3.0" ? f.enum = [E] : f.const = E;
            } else
              S.every((E) => typeof E == "number") && (f.type = "number"), S.every((E) => typeof E == "string") && (f.type = "string"), S.every((E) => typeof E == "boolean") && (f.type = "string"), S.every((E) => E === null) && (f.type = "null"), f.enum = S;
            break;
          }
          case "file": {
            const f = v, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: O, mime: w } = r._zod.bag;
            E !== void 0 && (S.minLength = E), O !== void 0 && (S.maxLength = O), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(f, S)) : f.anyOf = w.map((D) => ({ ...S, contentMediaType: D })) : Object.assign(f, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const f = this.process(o.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, v.nullable = !0) : v.anyOf = [f, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "success": {
            const f = v;
            f.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, _), p.ref = o.innerType, v.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, _), p.ref = o.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, _), p.ref = o.innerType;
            let f;
            try {
              f = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = f;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const f = v, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            f.type = "string", f.pattern = S.source;
            break;
          }
          case "pipe": {
            const f = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(f, _), p.ref = f;
            break;
          }
          case "readonly": {
            this.process(o.innerType, _), p.ref = o.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "lazy": {
            const f = r._zod.innerType;
            this.process(f, _), p.ref = f;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const g = this.metadataRegistry.get(r);
    return g && Object.assign(p.schema, g), this.io === "input" && At(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, i) {
    const s = {
      cycles: i?.cycles ?? "ref",
      reused: i?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: i?.external ?? void 0
    }, o = this.seen.get(r);
    if (!o)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const u = (y) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const S = s.external.registry.get(y[0])?.id, E = s.external.uri ?? ((w) => w);
        if (S)
          return { ref: E(S) };
        const O = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = O, { defId: O, ref: `${E("__shared")}#/${_}/${O}` };
      }
      if (y[1] === o)
        return { ref: "#" };
      const v = `#/${_}/`, f = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: f, ref: v + f };
    }, d = (y) => {
      if (y[1].schema.$ref)
        return;
      const _ = y[1], { ref: b, defId: v } = u(y);
      _.def = { ..._.schema }, v && (_.defId = v);
      const f = _.schema;
      for (const S in f)
        delete f[S];
      f.$ref = b;
    };
    if (s.cycles === "throw")
      for (const y of this.seen.entries()) {
        const _ = y[1];
        if (_.cycle)
          throw new Error(`Cycle detected: #/${_.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const y of this.seen.entries()) {
      const _ = y[1];
      if (r === y[0]) {
        d(y);
        continue;
      }
      if (s.external) {
        const v = s.external.registry.get(y[0])?.id;
        if (r !== y[0] && v) {
          d(y);
          continue;
        }
      }
      if (this.metadataRegistry.get(y[0])?.id) {
        d(y);
        continue;
      }
      if (_.cycle) {
        d(y);
        continue;
      }
      if (_.count > 1 && s.reused === "ref") {
        d(y);
        continue;
      }
    }
    const p = (y, _) => {
      const b = this.seen.get(y), v = b.def ?? b.schema, f = { ...v };
      if (b.ref === null)
        return;
      const S = b.ref;
      if (b.ref = null, S) {
        p(S, _);
        const E = this.seen.get(S).schema;
        E.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(E)) : (Object.assign(v, E), Object.assign(v, f));
      }
      b.isParent || this.override({
        zodSchema: y,
        jsonSchema: v,
        path: b.path ?? []
      });
    };
    for (const y of [...this.seen.entries()].reverse())
      p(y[0], { target: this.target });
    const h = {};
    if (this.target === "draft-2020-12" ? h.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? h.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? h.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const y = s.external.registry.get(r)?.id;
      if (!y)
        throw new Error("Schema is missing an `id` property");
      h.$id = s.external.uri(y);
    }
    Object.assign(h, o.def);
    const g = s.external?.defs ?? {};
    for (const y of this.seen.entries()) {
      const _ = y[1];
      _.def && _.defId && (g[_.defId] = _.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? h.$defs = g : h.definitions = g);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function l4(t, r) {
  if (t instanceof b1) {
    const s = new Yy(r), o = {};
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      s.process(g);
    }
    const u = {}, d = {
      registry: t,
      uri: r?.uri,
      defs: o
    };
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      u[h] = s.emit(g, {
        ...r,
        external: d
      });
    }
    if (Object.keys(o).length > 0) {
      const p = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [p]: o
      };
    }
    return { schemas: u };
  }
  const i = new Yy(r);
  return i.process(t), i.emit(t, r);
}
function At(t, r) {
  const i = r ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(t))
    return !1;
  i.seen.add(t);
  const o = t._zod.def;
  switch (o.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return At(o.element, i);
    case "object": {
      for (const u in o.shape)
        if (At(o.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of o.options)
        if (At(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return At(o.left, i) || At(o.right, i);
    case "tuple": {
      for (const u of o.items)
        if (At(u, i))
          return !0;
      return !!(o.rest && At(o.rest, i));
    }
    case "record":
      return At(o.keyType, i) || At(o.valueType, i);
    case "map":
      return At(o.keyType, i) || At(o.valueType, i);
    case "set":
      return At(o.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return At(o.innerType, i);
    case "lazy":
      return At(o.getter(), i);
    case "default":
      return At(o.innerType, i);
    case "prefault":
      return At(o.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return At(o.in, i) || At(o.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const o4 = /* @__PURE__ */ W("ZodISODateTime", (t, r) => {
  Pw.init(t, r), ft.init(t, r);
});
function u4(t) {
  return B3(o4, t);
}
const c4 = /* @__PURE__ */ W("ZodISODate", (t, r) => {
  Iw.init(t, r), ft.init(t, r);
});
function f4(t) {
  return U3(c4, t);
}
const d4 = /* @__PURE__ */ W("ZodISOTime", (t, r) => {
  Bw.init(t, r), ft.init(t, r);
});
function h4(t) {
  return H3(d4, t);
}
const p4 = /* @__PURE__ */ W("ZodISODuration", (t, r) => {
  Uw.init(t, r), ft.init(t, r);
});
function m4(t) {
  return q3(p4, t);
}
const g4 = (t, r) => {
  l1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => NC(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => OC(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, qd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, qd, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return t.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Rn = W("ZodError", g4, {
  Parent: Error
}), v4 = /* @__PURE__ */ uh(Rn), y4 = /* @__PURE__ */ ch(Rn), b4 = /* @__PURE__ */ Mu(Rn), _4 = /* @__PURE__ */ ku(Rn), S4 = /* @__PURE__ */ kC(Rn), x4 = /* @__PURE__ */ RC(Rn), E4 = /* @__PURE__ */ jC(Rn), C4 = /* @__PURE__ */ zC(Rn), w4 = /* @__PURE__ */ LC(Rn), A4 = /* @__PURE__ */ PC(Rn), T4 = /* @__PURE__ */ IC(Rn), O4 = /* @__PURE__ */ BC(Rn), Tt = /* @__PURE__ */ W("ZodType", (t, r) => (Et.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Ia(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => aa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => v4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => b4(t, i, s), t.parseAsync = async (i, s) => y4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => _4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => S4(t, i, s), t.decode = (i, s) => x4(t, i, s), t.encodeAsync = async (i, s) => E4(t, i, s), t.decodeAsync = async (i, s) => C4(t, i, s), t.safeEncode = (i, s) => w4(t, i, s), t.safeDecode = (i, s) => A4(t, i, s), t.safeEncodeAsync = async (i, s) => T4(t, i, s), t.safeDecodeAsync = async (i, s) => O4(t, i, s), t.refine = (i, s) => t.check(vA(i, s)), t.superRefine = (i) => t.check(yA(i)), t.overwrite = (i) => t.check(cl(i)), t.optional = () => Ky(t), t.nullable = () => Jy(t), t.nullish = () => Ky(Jy(t)), t.nonoptional = (i) => cA(t, i), t.array = () => Hn(t), t.or = (i) => eA([t, i]), t.and = (i) => nA(t, i), t.transform = (i) => Wy(t, aA(i)), t.default = (i) => lA(t, i), t.prefault = (i) => uA(t, i), t.catch = (i) => dA(t, i), t.pipe = (i) => Wy(t, i), t.readonly = () => mA(t), t.describe = (i) => {
  const s = t.clone();
  return Js.add(s, { description: i }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return Js.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...i) => {
  if (i.length === 0)
    return Js.get(t);
  const s = t.clone();
  return Js.add(s, i[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), x1 = /* @__PURE__ */ W("_ZodString", (t, r) => {
  fh.init(t, r), Tt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(Y3(...s)), t.includes = (...s) => t.check(Q3(...s)), t.startsWith = (...s) => t.check(K3(...s)), t.endsWith = (...s) => t.check(J3(...s)), t.min = (...s) => t.check(Tu(...s)), t.max = (...s) => t.check(_1(...s)), t.length = (...s) => t.check(S1(...s)), t.nonempty = (...s) => t.check(Tu(1, ...s)), t.lowercase = (s) => t.check(X3(s)), t.uppercase = (s) => t.check($3(s)), t.trim = () => t.check(e4()), t.normalize = (...s) => t.check(W3(...s)), t.toLowerCase = () => t.check(t4()), t.toUpperCase = () => t.check(n4());
}), N4 = /* @__PURE__ */ W("ZodString", (t, r) => {
  fh.init(t, r), x1.init(t, r), t.email = (i) => t.check(y3(D4, i)), t.url = (i) => t.check(E3(M4, i)), t.jwt = (i) => t.check(I3(V4, i)), t.emoji = (i) => t.check(C3(k4, i)), t.guid = (i) => t.check(Fy(Xy, i)), t.uuid = (i) => t.check(b3(lu, i)), t.uuidv4 = (i) => t.check(_3(lu, i)), t.uuidv6 = (i) => t.check(S3(lu, i)), t.uuidv7 = (i) => t.check(x3(lu, i)), t.nanoid = (i) => t.check(w3(R4, i)), t.guid = (i) => t.check(Fy(Xy, i)), t.cuid = (i) => t.check(A3(j4, i)), t.cuid2 = (i) => t.check(T3(z4, i)), t.ulid = (i) => t.check(O3(L4, i)), t.base64 = (i) => t.check(z3(F4, i)), t.base64url = (i) => t.check(L3(Z4, i)), t.xid = (i) => t.check(N3(P4, i)), t.ksuid = (i) => t.check(D3(I4, i)), t.ipv4 = (i) => t.check(M3(B4, i)), t.ipv6 = (i) => t.check(k3(U4, i)), t.cidrv4 = (i) => t.check(R3(H4, i)), t.cidrv6 = (i) => t.check(j3(q4, i)), t.e164 = (i) => t.check(P3(G4, i)), t.datetime = (i) => t.check(u4(i)), t.date = (i) => t.check(f4(i)), t.time = (i) => t.check(h4(i)), t.duration = (i) => t.check(m4(i));
});
function Mn(t) {
  return v3(N4, t);
}
const ft = /* @__PURE__ */ W("ZodStringFormat", (t, r) => {
  ot.init(t, r), x1.init(t, r);
}), D4 = /* @__PURE__ */ W("ZodEmail", (t, r) => {
  Ow.init(t, r), ft.init(t, r);
}), Xy = /* @__PURE__ */ W("ZodGUID", (t, r) => {
  Aw.init(t, r), ft.init(t, r);
}), lu = /* @__PURE__ */ W("ZodUUID", (t, r) => {
  Tw.init(t, r), ft.init(t, r);
}), M4 = /* @__PURE__ */ W("ZodURL", (t, r) => {
  Nw.init(t, r), ft.init(t, r);
}), k4 = /* @__PURE__ */ W("ZodEmoji", (t, r) => {
  Dw.init(t, r), ft.init(t, r);
}), R4 = /* @__PURE__ */ W("ZodNanoID", (t, r) => {
  Mw.init(t, r), ft.init(t, r);
}), j4 = /* @__PURE__ */ W("ZodCUID", (t, r) => {
  kw.init(t, r), ft.init(t, r);
}), z4 = /* @__PURE__ */ W("ZodCUID2", (t, r) => {
  Rw.init(t, r), ft.init(t, r);
}), L4 = /* @__PURE__ */ W("ZodULID", (t, r) => {
  jw.init(t, r), ft.init(t, r);
}), P4 = /* @__PURE__ */ W("ZodXID", (t, r) => {
  zw.init(t, r), ft.init(t, r);
}), I4 = /* @__PURE__ */ W("ZodKSUID", (t, r) => {
  Lw.init(t, r), ft.init(t, r);
}), B4 = /* @__PURE__ */ W("ZodIPv4", (t, r) => {
  Hw.init(t, r), ft.init(t, r);
}), U4 = /* @__PURE__ */ W("ZodIPv6", (t, r) => {
  qw.init(t, r), ft.init(t, r);
}), H4 = /* @__PURE__ */ W("ZodCIDRv4", (t, r) => {
  Fw.init(t, r), ft.init(t, r);
}), q4 = /* @__PURE__ */ W("ZodCIDRv6", (t, r) => {
  Zw.init(t, r), ft.init(t, r);
}), F4 = /* @__PURE__ */ W("ZodBase64", (t, r) => {
  Gw.init(t, r), ft.init(t, r);
}), Z4 = /* @__PURE__ */ W("ZodBase64URL", (t, r) => {
  Yw.init(t, r), ft.init(t, r);
}), G4 = /* @__PURE__ */ W("ZodE164", (t, r) => {
  Xw.init(t, r), ft.init(t, r);
}), V4 = /* @__PURE__ */ W("ZodJWT", (t, r) => {
  Qw.init(t, r), ft.init(t, r);
}), E1 = /* @__PURE__ */ W("ZodNumber", (t, r) => {
  g1.init(t, r), Tt.init(t, r), t.gt = (s, o) => t.check(Gy(s, o)), t.gte = (s, o) => t.check(_d(s, o)), t.min = (s, o) => t.check(_d(s, o)), t.lt = (s, o) => t.check(Zy(s, o)), t.lte = (s, o) => t.check(bd(s, o)), t.max = (s, o) => t.check(bd(s, o)), t.int = (s) => t.check($y(s)), t.safe = (s) => t.check($y(s)), t.positive = (s) => t.check(Gy(0, s)), t.nonnegative = (s) => t.check(_d(0, s)), t.negative = (s) => t.check(Zy(0, s)), t.nonpositive = (s) => t.check(bd(0, s)), t.multipleOf = (s, o) => t.check(Vy(s, o)), t.step = (s, o) => t.check(Vy(s, o)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Ou(t) {
  return F3(E1, t);
}
const Y4 = /* @__PURE__ */ W("ZodNumberFormat", (t, r) => {
  Kw.init(t, r), E1.init(t, r);
});
function $y(t) {
  return Z3(Y4, t);
}
const X4 = /* @__PURE__ */ W("ZodUnknown", (t, r) => {
  Jw.init(t, r), Tt.init(t, r);
});
function Qy() {
  return G3(X4);
}
const $4 = /* @__PURE__ */ W("ZodNever", (t, r) => {
  Ww.init(t, r), Tt.init(t, r);
});
function Q4(t) {
  return V3($4, t);
}
const K4 = /* @__PURE__ */ W("ZodArray", (t, r) => {
  e3.init(t, r), Tt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(Tu(i, s)), t.nonempty = (i) => t.check(Tu(1, i)), t.max = (i, s) => t.check(_1(i, s)), t.length = (i, s) => t.check(S1(i, s)), t.unwrap = () => t.element;
});
function Hn(t, r) {
  return r4(K4, t, r);
}
const J4 = /* @__PURE__ */ W("ZodObject", (t, r) => {
  n3.init(t, r), Tt.init(t, r), rt(t, "shape", () => r.shape), t.keyof = () => Gd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Qy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Qy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: Q4() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => EC(t, i), t.safeExtend = (i) => CC(t, i), t.merge = (i) => wC(t, i), t.pick = (i) => SC(t, i), t.omit = (i) => xC(t, i), t.partial = (...i) => AC(C1, t, i[0]), t.required = (...i) => TC(w1, t, i[0]);
});
function ja(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ..._e(r)
  };
  return new J4(i);
}
const W4 = /* @__PURE__ */ W("ZodUnion", (t, r) => {
  r3.init(t, r), Tt.init(t, r), t.options = r.options;
});
function eA(t, r) {
  return new W4({
    type: "union",
    options: t,
    ..._e(r)
  });
}
const tA = /* @__PURE__ */ W("ZodIntersection", (t, r) => {
  a3.init(t, r), Tt.init(t, r);
});
function nA(t, r) {
  return new tA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Zd = /* @__PURE__ */ W("ZodEnum", (t, r) => {
  i3.init(t, r), Tt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  t.extract = (s, o) => {
    const u = {};
    for (const d of s)
      if (i.has(d))
        u[d] = r.entries[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new Zd({
      ...r,
      checks: [],
      ..._e(o),
      entries: u
    });
  }, t.exclude = (s, o) => {
    const u = { ...r.entries };
    for (const d of s)
      if (i.has(d))
        delete u[d];
      else
        throw new Error(`Key ${d} not found in enum`);
    return new Zd({
      ...r,
      checks: [],
      ..._e(o),
      entries: u
    });
  };
});
function Gd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Zd({
    type: "enum",
    entries: i,
    ..._e(r)
  });
}
const rA = /* @__PURE__ */ W("ZodTransform", (t, r) => {
  s3.init(t, r), Tt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new e1(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(sl(u, i.value, r));
      else {
        const d = u;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = i.value), d.inst ?? (d.inst = t), i.issues.push(sl(d));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((u) => (i.value = u, i)) : (i.value = o, i);
  };
});
function aA(t) {
  return new rA({
    type: "transform",
    transform: t
  });
}
const C1 = /* @__PURE__ */ W("ZodOptional", (t, r) => {
  l3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Ky(t) {
  return new C1({
    type: "optional",
    innerType: t
  });
}
const iA = /* @__PURE__ */ W("ZodNullable", (t, r) => {
  o3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Jy(t) {
  return new iA({
    type: "nullable",
    innerType: t
  });
}
const sA = /* @__PURE__ */ W("ZodDefault", (t, r) => {
  u3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function lA(t, r) {
  return new sA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : a1(r);
    }
  });
}
const oA = /* @__PURE__ */ W("ZodPrefault", (t, r) => {
  c3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function uA(t, r) {
  return new oA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : a1(r);
    }
  });
}
const w1 = /* @__PURE__ */ W("ZodNonOptional", (t, r) => {
  f3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function cA(t, r) {
  return new w1({
    type: "nonoptional",
    innerType: t,
    ..._e(r)
  });
}
const fA = /* @__PURE__ */ W("ZodCatch", (t, r) => {
  d3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function dA(t, r) {
  return new fA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const hA = /* @__PURE__ */ W("ZodPipe", (t, r) => {
  h3.init(t, r), Tt.init(t, r), t.in = r.in, t.out = r.out;
});
function Wy(t, r) {
  return new hA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const pA = /* @__PURE__ */ W("ZodReadonly", (t, r) => {
  p3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function mA(t) {
  return new pA({
    type: "readonly",
    innerType: t
  });
}
const gA = /* @__PURE__ */ W("ZodCustom", (t, r) => {
  m3.init(t, r), Tt.init(t, r);
});
function vA(t, r = {}) {
  return a4(gA, t, r);
}
function yA(t) {
  return i4(t);
}
const e0 = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Vd = "placeholder-chatHistory", bA = ja({
  justification: Mn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Mn().describe("The new, full content for the character field.")
}), _A = ja({
  field: Mn(),
  value: Mn()
}), SA = ja({
  index: Ou().int().positive(),
  value: Mn()
});
ja({
  justification: Mn(),
  fields_to_change: Hn(_A).optional(),
  draft_fields_to_remove: Hn(Mn()).optional(),
  greetings_to_add: Hn(Mn()).optional(),
  greetings_to_remove: Hn(Ou().int().positive()).optional(),
  greetings_to_change: Hn(SA).optional()
});
const xA = (t, r) => {
  const i = ja({
    index: Ou().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Mn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Mn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Hn(Mn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Hn(Ou().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Hn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const o = ja({
      field: Gd(t).describe("The unique ID of the field to change (core or draft)."),
      value: Mn().describe("The new content for the field.")
    });
    s.fields_to_change = Hn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Hn(Gd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ja(s);
};
function Sd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Yd(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Yd(s, r + 1)}${i}</item>
` : `${i}<item>${Sd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const o of Object.keys(t)) {
      const u = t[o];
      u !== null && typeof u == "object" ? s += `${i}<${o}>
${Yd(u, r + 1)}${i}</${o}>
` : s += `${i}<${o}>${Sd(u)}</${o}>
`;
    }
    return s;
  }
  return `${i}<value>${Sd(t)}</value>
`;
}
function EA(t, r) {
  const i = Na(t);
  return r === "xml" ? Yd(i).trim() : JSON.stringify(i, null, 2);
}
function CA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function wA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function t0(t, r) {
  let i = 0;
  return typeof t.minimum == "number" && i < t.minimum && (i = r ? Math.ceil(t.minimum) : t.minimum), typeof t.exclusiveMinimum == "number" && i <= t.exclusiveMinimum && (i = r ? Math.floor(t.exclusiveMinimum) + 1 : t.exclusiveMinimum + 1), typeof t.maximum == "number" && i > t.maximum && (i = r ? Math.floor(t.maximum) : t.maximum), typeof t.exclusiveMaximum == "number" && i >= t.exclusiveMaximum && (i = r ? Math.ceil(t.exclusiveMaximum) - 1 : t.exclusiveMaximum - 1), i;
}
function Na(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = CA(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Na(s);
  switch (wA(t.type)) {
    case "object": {
      const u = {}, d = t.properties || {};
      for (const p of Object.keys(d))
        u[p] = Na(d[p]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = Na(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [Na(u)];
    }
    case "string":
      switch (t.format) {
        case "date-time":
          return (/* @__PURE__ */ new Date(0)).toISOString();
        case "date":
          return "1970-01-01";
        case "time":
          return "00:00:00";
        case "email":
          return "user@example.com";
        case "uri":
        case "url":
          return "https://example.com";
        case "uuid":
          return "00000000-0000-0000-0000-000000000000";
        default:
          return t.title || t.description || "string";
      }
    case "integer":
      return t0(t, !0);
    case "number":
      return t0(t, !1);
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Na({ ...t, type: "object" }) : t.items ? Na({ ...t, type: "array" }) : null;
  }
}
const AA = new gS();
async function Xd(t, r, i, s, o, u) {
  const d = !s.json_schema && !1;
  return new Promise((p, h) => {
    const g = new AbortController(), y = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), AA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: d, signal: y },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (_, b, v) => y.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : v ? h(v) : b === void 0 && v === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (b || h(new Error("No data received from LLM")), v ? h(v) : p(b))
      }
    );
  });
}
async function TA(t, r, i, s) {
  const o = await Xd(t, r, i, {}, void 0, s);
  if (!o?.content)
    throw new Error("Plain request failed to return content.");
  return o.content;
}
async function OA(t, r, i, s, o, u, d) {
  const p = Lt.getSettings();
  let h, g;
  const y = l4(i);
  if (o === "native") {
    if (h = await Xd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y }
      },
      void 0,
      d
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const b = o, v = EA(y, b), f = JSON.stringify(y, null, 2), S = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = p.prompts[S]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const O = {
      example_response: v,
      schema: f
    };
    let w;
    try {
      w = tn.compile(E, { noEscape: !0, strict: !0 })(O);
    } catch (x) {
      const T = p.prompts[S]?.label ?? S;
      throw new Error(
        `Failed to render the "${T}" prompt template: ${x?.message ?? x}. Available variables: ${Object.keys(O).join(", ")}.`
      );
    }
    const D = { role: "system", content: w };
    if (h = await Xd(
      t,
      [...r, D],
      u,
      {},
      void 0,
      d
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = P0(h.content, b, { schema: y });
  }
  const _ = i.safeParse(g);
  if (!_.success) {
    const b = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", g), await Oe("error", b), new Error(b);
  }
  return _.data;
}
const A1 = ({ originalContent: t, newContent: r }) => {
  const i = ee.useMemo(() => {
    const s = J0(t, r);
    let o = "", u = "";
    return s.forEach((d) => {
      const p = d.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${d.added ? "color: green; background-color: #e6ffed;" : d.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      d.added || (o += g), d.removed || (u += g);
    }), { originalHtml: o, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, NA = ({ before: t, after: r }) => {
  const i = ee.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const d = t.fields[u], p = r.fields[u], h = d?.value ?? "", g = p?.value ?? "";
      h !== g && s.push({
        label: p?.label ?? d?.label ?? u,
        before: h,
        after: g
      });
    }), s;
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: o, after: u }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: s }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Before" }),
        /* @__PURE__ */ A.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ A.jsx(A1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, DA = ({ currentState: t, initialState: r }) => {
  const [i, s] = ee.useState(!1), { coreFields: o, alternateGreetings: u } = ee.useMemo(() => {
    const p = [], h = [];
    return Kn.forEach((g) => {
      t.fields[g] && p.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, y) => parseInt(g[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, g]) => h.push(g.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), d = ee.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const y = r.fields[g], _ = t.fields[g], b = y?.value ?? "", v = _?.value ?? "";
      b !== v && p.push({
        label: _?.label ?? y?.label ?? g,
        before: b,
        after: v
      });
    }), p;
  }, [r, t]);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: i, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: d.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : d.map(({ label: p, before: h, after: g }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: p }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Original" }),
        /* @__PURE__ */ A.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ A.jsx(A1, { originalContent: h, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: p, value: h }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: p }),
        /* @__PURE__ */ A.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, Mi = SillyTavern.getContext(), MA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => r.value), kA = (t, r, i, s) => {
  const o = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return o.fields[s] && (o.fields[s].value = u.response), o;
  }
  if (i === "global") {
    const u = r;
    let d = MA(o), p = !1;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        o.fields[h.field] ? o.fields[h.field].value = h.value : o.draftFields[h.field] && (o.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        o.draftFields[h] && delete o.draftFields[h];
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const h of u.greetings_to_change)
        h.index > 0 && h.index <= d.length && (d[h.index - 1] = h.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const h = new Set(u.greetings_to_remove.map((g) => g - 1));
      d = d.filter((g, y) => !h.has(y));
    }
    u.greetings_to_add?.length && (p = !0, d.push(...u.greetings_to_add)), p && (Object.keys(o.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete o.fields[h];
    }), d.forEach((h, g) => {
      const y = `alternate_greetings_${g + 1}`;
      o.fields[y] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${g + 1}`
      };
    }));
  }
  return o;
}, RA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, o] = ee.useState(() => structuredClone(t)), u = (_, b, v) => {
    const f = structuredClone(s), S = v ? "draftFields" : "fields";
    f[S][_] && (f[S][_].value = b), o(f);
  }, d = (_, b) => {
    const v = structuredClone(s), f = `alternate_greetings_${_ + 1}`;
    v.fields[f] && (v.fields[f].value = b), o(v);
  }, { coreFields: p, alternateGreetings: h, draftFields: g } = ee.useMemo(() => {
    const _ = [], b = [], v = [];
    return Kn.forEach((f) => {
      s.fields[f] && _.push({ id: f, label: s.fields[f].label, value: s.fields[f].value });
    }), Object.entries(s.fields).filter(([f]) => f.startsWith("alternate_greetings_")).sort((f, S) => parseInt(f[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, f]) => b.push(f.value)), Object.entries(s.draftFields).forEach(([f, S]) => {
      v.push({ id: f, label: S.label, value: S.value });
    }), { coreFields: _, alternateGreetings: b, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(Se, { onClick: y, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(Se, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: b }),
        /* @__PURE__ */ A.jsx(kn, { value: v, onChange: (f) => u(_, f.target.value, !1), rows: 4 })
      ] }, _)),
      g.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: b }),
          /* @__PURE__ */ A.jsx(kn, { value: v, onChange: (f) => u(_, f.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, b) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ A.jsx(kn, { value: _, onChange: (v) => d(b, v.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, jA = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [d, p] = ee.useState(t.messages), [h, g] = ee.useState(""), [y, _] = ee.useState(!1), [b, v] = ee.useState(null), [f, S] = ee.useState(!1), [E, O] = ee.useState(!1), [w, D] = ee.useState(null), [x, T] = ee.useState(""), M = ee.useRef(null), k = ee.useRef(null);
  ee.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [d]);
  const q = ee.useCallback(
    (Y, ge, ye) => {
      if (JSON.stringify(ye) === JSON.stringify(ge))
        return Y;
      const at = Lt.getSettings().prompts.existingFieldDefinitions;
      if (!at) return Y;
      const ze = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ye.fields), ...Object.keys(ge.fields)])).forEach((Ce) => {
        const ve = ye.fields[Ce]?.value ?? "", Me = ge.fields[Ce]?.value ?? "";
        if (ve !== Me) {
          const Xe = ge.fields[Ce];
          Xe && (Ce.startsWith("alternate_greetings_") ? ze.alternate_greetings[Xe.label] = Xe.value : Kn.includes(Ce) && (ze.core[Xe.label] = Xe.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ye.draftFields), ...Object.keys(ge.draftFields)])).forEach((Ce) => {
        const ve = ye.draftFields[Ce]?.value ?? "", Me = ge.draftFields[Ce]?.value ?? "";
        if (ve !== Me && ge.draftFields[Ce]) {
          const Xe = ge.draftFields[Ce];
          ze.draft[Xe.label] = Xe.value;
        }
      }), Object.keys(ze.core).length === 0 && Object.keys(ze.alternate_greetings).length === 0 && Object.keys(ze.draft).length === 0)
        return Y;
      const ne = { fields: ze };
      let be = tn.compile(at.content, { noEscape: !0 })(ne);
      if (be = Mi.substituteParams(be), be.trim()) {
        const Ce = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: be.trim(),
          isStateUpdate: !0
        };
        return [...Y, Ce];
      }
      return Y;
    },
    []
  ), G = ee.useCallback(
    async (Y, ge, ye, Ve) => {
      const at = Lt.getSettings();
      if (!t.profileId) {
        Oe("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), ye(), _(!0);
      try {
        const ze = [], P = Mi.extensionSettings.connectionManager?.profiles?.find(
          (Ce) => Ce.id === t.profileId
        ), re = P?.api ? Mi.CONNECT_API_MAP[P.api].selected : void 0;
        if (!re) {
          Oe("warning", "No API selected for this session.");
          return;
        }
        for (const Ce of Y)
          if (Ce.id === Vd) {
            if (Ht === void 0 && !Un) continue;
            const ve = await m0(re, u);
            ve.warnings?.length && ve.warnings.forEach((Me) => Oe("warning", Me)), ze.push(...ve.result);
          } else
            ze.push(Ce);
        const ne = Y.slice(0, Y.length - (ge ? 0 : 1)).reverse().find((Ce) => Ce.stateSnapshot)?.stateSnapshot ?? o, be = at.prompts.existingFieldDefinitions;
        if (be) {
          const Ce = {
            fields: {
              core: Object.fromEntries(
                Object.entries(ne.fields).filter(([Me]) => !Me.startsWith("alternate_greetings_")).map(([, Me]) => [Me.label, Me.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ne.fields).filter(([Me]) => Me.startsWith("alternate_greetings_")).map(([, Me]) => [Me.label, Me.value])
              ),
              draft: Object.fromEntries(Object.entries(ne.draftFields).map(([, Me]) => [Me.label, Me.value]))
            }
          };
          let ve = tn.compile(be.content, { noEscape: !0 })(Ce);
          if (ve = Mi.substituteParams(ve), ve.trim()) {
            const Me = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: ve.trim()
            }, Xe = ze.pop();
            ze.push(Me), Xe && ze.push(Xe);
          }
        }
        if (t.isReadonly) {
          ze.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const Ce = await TA(
            t.profileId,
            ze,
            at.maxResponseToken,
            k.current.signal
          ), ve = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ce
          }, Me = [...Y, ve];
          p(Me), s({ ...t, messages: Me });
        } else {
          const Ce = t.type === "field" ? bA : (() => {
            const De = [...Object.keys(ne.fields), ...Object.keys(ne.draftFields)], Re = Object.keys(ne.draftFields);
            return xA(De, Re);
          })(), Me = await OA(
            t.profileId,
            ze,
            Ce,
            t.type === "field" ? e0.FIELD : e0.GLOBAL,
            t.promptEngineeringMode,
            at.maxResponseToken,
            k.current.signal
          ), Xe = kA(ne, Me, t.type, t.targetFieldId), de = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Me.justification,
            stateSnapshot: Xe
          };
          let he = [...Y, de];
          he = q(he, Xe, ne), p(he), s({ ...t, messages: he });
        }
      } catch (ze) {
        ze.name === "AbortError" ? Oe("info", "Request was cancelled.") : (console.error("Revise request failed:", ze), Oe("error", `Request failed: ${ze.message}`)), Ve();
      } finally {
        _(!1), k.current = null;
      }
    },
    [t, s, o, u, q]
  ), B = ee.useCallback(async () => {
    if (!h.trim() || y) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, ge = d;
    G(
      [...d, Y],
      !1,
      () => {
        p([...d, Y]), g("");
      },
      () => p(ge)
    );
  }, [h, y, d, G]), V = ee.useCallback(async () => {
    if (y || d.length === 0) return;
    const Y = d;
    let ge = [...d];
    const ye = d.findLastIndex((Ve) => !Ve.isStateUpdate);
    ye > -1 && d[ye].role === "assistant" && (ge = d.slice(0, ye)), await G(
      ge,
      !0,
      () => p(ge),
      () => p(Y)
    );
  }, [y, d, G]), $ = () => {
    const Y = d.slice().reverse().find((ge) => ge.stateSnapshot)?.stateSnapshot ?? o;
    i(Y), r();
  }, oe = (Y) => {
    const ge = d.findIndex((at) => at.id === Y);
    if (ge === -1 || !d[ge].stateSnapshot) return;
    const ye = d[ge].stateSnapshot;
    let Ve = o;
    for (let at = ge - 1; at >= 0; at--)
      if (d[at].stateSnapshot) {
        Ve = d[at].stateSnapshot;
        break;
      }
    v({ before: Ve, after: ye });
  }, fe = () => {
    S(!0);
  }, me = (Y) => {
    D(Y.id), T(Y.content);
  }, U = () => {
    D(null), T("");
  }, te = async () => {
    if (!w) return;
    const Y = d.findIndex((P) => P.id === w);
    if (Y === -1 || !await Mi.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ye = d, Ve = d.slice(0, Y), at = { ...d[Y], content: x }, ze = [...Ve, at];
    U(), G(
      ze,
      !1,
      () => p(ze),
      () => p(ye)
    );
  }, ue = async (Y) => {
    const ge = d.findIndex((P) => P.id === Y);
    if (ge === -1) return;
    const Ve = !!d[ge].isInitial;
    if (!await Mi.Popup.show.confirm(
      "Delete Message",
      Ve ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ze;
    Ve ? ze = d.filter((P) => P.isInitial && P.id !== Y) : ze = d.slice(0, ge), p(ze), s({ ...t, messages: ze }), Oe("info", "Message history has been updated.");
  }, Le = d.filter((Y) => !Y.isStateUpdate), j = Le.filter((Y) => Y.isInitial), K = Le.filter((Y) => !Y.isInitial), ae = d.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? o, se = () => {
    O(!0);
  }, le = (Y) => {
    const ge = d.slice().reverse().find((at) => at.stateSnapshot)?.stateSnapshot ?? o, ye = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: Y
    };
    let Ve = [...d, ye];
    Ve = q(Ve, Y, ge), p(Ve), s({ ...t, messages: Ve }), O(!1);
  }, Ie = () => {
    k.current?.abort();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h2", { children: t.name }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (Y) => s({ ...t, isReadonly: Y.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ A.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ A.jsx(
          $0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (Y) => s({ ...t, profileId: Y?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (Y) => s({ ...t, promptEngineeringMode: Y.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(Se, { onClick: fe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(Se, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(Se, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(Se, { onClick: $, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-messages", children: [
      j.length > 0 && /* @__PURE__ */ A.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ A.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ A.jsx("div", { className: "initial-messages-content", children: j.map(
          (Y) => w === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ A.jsx(kn, { value: x, onChange: (ge) => T(ge.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(Se, { onClick: te, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(Se, { onClick: U, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) }),
            !y && Y.id !== Vd && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsxs(
                Se,
                {
                  className: "message-action-button",
                  onClick: () => me(Y),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ A.jsxs(
                Se,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ue(Y.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, Y.id)
        ) })
      ] }),
      K.map(
        (Y) => w === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(kn, { value: x, onChange: (ge) => T(ge.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(Se, { onClick: te, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(Se, { onClick: U, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${Y.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            Y.role === "user" && !Y.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              Se,
              {
                className: "message-action-button",
                onClick: () => me(Y),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            Y.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              Se,
              {
                className: "message-action-button",
                onClick: () => oe(Y.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ A.jsxs(
              Se,
              {
                className: "message-action-button danger_button",
                onClick: () => ue(Y.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role}`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) })
        ] }, Y.id)
      ),
      K.length > 0 && !y && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(Se, { onClick: V, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(Se, { onClick: Ie, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        kn,
        {
          value: h,
          onChange: (Y) => g(Y.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!w,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), B());
          }
        }
      ),
      /* @__PURE__ */ A.jsxs(Se, { onClick: B, disabled: y || !h.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(NA, { before: b.before, after: b.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    f && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(DA, { currentState: ae, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          RA,
          {
            initialState: ae,
            onSave: le,
            onClose: () => O(!1)
          }
        ),
        onComplete: () => O(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function T1(t, r = {}) {
  const i = t?.entries;
  if (!i)
    return [];
  const s = Array.isArray(i) ? i : Object.values(i);
  return r.includeDisabled ? s : s.filter((o) => !o.disable);
}
async function zA(t, r, i, s, o) {
  const u = Lt.getSettings(), d = u.mainContextTemplatePresets[i];
  if (!d)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], g = {
    ...{
      user: Qn.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: Qn.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => !v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, v]) => [v.label, v.value]))
    }
  };
  if (s.charCard) {
    const v = [];
    o.selectedCharacterIndexes.forEach((f) => {
      const S = Qn.characters[parseInt(f)];
      S && v.push(S);
    }), g.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      o.selectedWorldNames.map(async (f) => {
        const S = await Qn.loadWorldInfo(f);
        S && (v[f] = T1(S));
      })
    ), g.lorebooks = v;
  }
  for (const v of d.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || Ht === void 0 && !Un && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      p.push({
        id: Vd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(v.promptName))
      continue;
    const S = u.prompts[v.promptName];
    if (!S || S.content.includes("{{activeFormatInstructions}}"))
      continue;
    let E = "";
    E = tn.compile(S.content, { noEscape: !0 })(g), E = Qn.substituteParams(E), E.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: E.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = tn.compile(_, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: y
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: b,
    isInitial: !0
  }), p;
}
const O1 = "charCreator", N1 = "charCreator_reviseSessions", fl = () => SillyTavern.libs.localforage, LA = (t) => {
  if (!t)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(t), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, D1 = async (t, r, i) => {
  try {
    const s = await r.getItem(t);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const o = LA(i.getItem(t));
    return o.value === null ? (o.recovered && i.removeItem(t), { value: null, migrated: !1, recovered: o.recovered, error: o.error }) : (await r.setItem(t, o.value), i.removeItem(t), { value: o.value, migrated: !0, recovered: o.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, M1 = async (t, r, i = fl()) => {
  try {
    return await i.setItem(t, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, PA = (t = fl(), r = localStorage) => D1(O1, t, r), IA = (t, r = fl()) => M1(O1, t, r), BA = (t = fl(), r = localStorage) => D1(N1, t, r), UA = (t, r = fl()) => M1(N1, t, r), ou = SillyTavern.getContext(), HA = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [d, p] = ee.useState([]), [h, g] = ee.useState(null), [y, _] = ee.useState(!0);
  ee.useEffect(() => {
    let D = !0;
    return BA().then(({ value: x, recovered: T }) => {
      D && (p(Array.isArray(x) ? x : []), T && Oe("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((x) => {
      console.error("Failed to load revise sessions:", x), Oe("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      D && _(!1);
    }), () => {
      D = !1;
    };
  }, []);
  const b = ee.useMemo(() => d.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, x) => new Date(x.createdAt).getTime() - new Date(D.createdAt).getTime()), [d, t]), v = (D) => {
    p(D), UA(D).then((x) => {
      x.persisted || (console.warn("Failed to save revise sessions:", x.error), Oe("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, f = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", x = await ou.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (x)
      try {
        const T = Lt.getSettings();
        if (!T.profileId) {
          Oe("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = {
          id: `rs-${Date.now()}`,
          name: x,
          type: t.type,
          targetFieldId: t.fieldId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: [],
          // Will be populated next
          context: {
            mainContextTemplatePreset: T.mainContextTemplatePreset
          },
          profileId: T.profileId,
          promptEngineeringMode: T.defaultPromptEngineeringMode,
          isReadonly: !1
        }, k = await zA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          o,
          u
        );
        M.messages = k, g(M);
      } catch (T) {
        console.error("Failed to create session:", T), Oe("error", `Failed to create session: ${T.message}`);
      }
  }, S = (D) => {
    g(D);
  }, E = async (D) => {
    if (await ou.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const T = d.filter((M) => M.id !== D);
      v(T);
    }
  }, O = (D) => {
    const x = d.findIndex((M) => M.id === D.id), T = [...d];
    x !== -1 ? T[x] = D : T.push(D), v(T), g(D);
  };
  if (h) {
    const D = ou.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), x = {
      targetCharacterId: Ht,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Un,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, T = o.messages;
    switch (T.type) {
      case "none":
        x.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        x.messageIndexesBetween = { start: 0, end: T.first ?? 10 };
        break;
      case "last":
        const M = ou.chat?.length ?? 0, k = T.last ?? 10;
        x.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - k)
        };
        break;
      case "range":
        x.messageIndexesBetween = {
          start: T.range?.start ?? 0,
          end: T.range?.end ?? 10
        };
        break;
    }
    return Ht === void 0 && !Un && (x.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ A.jsx(
      jA,
      {
        session: h,
        onBack: () => g(null),
        onApply: i,
        onSessionUpdate: O,
        initialState: s,
        chatContextOptions: x
      }
    );
  }
  const w = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ A.jsx("div", { className: "popup_header", children: /* @__PURE__ */ A.jsxs("h2", { children: [
      'Revise Sessions for "',
      w,
      '"'
    ] }) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : b.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : b.map((D) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => S(D), children: [
        /* @__PURE__ */ A.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ A.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ A.jsx(Se, { className: "danger_button", onClick: () => E(D.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(Se, { onClick: f, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
function qA(t, r) {
  return {
    name: t.name?.value ?? "",
    description: t.description?.value ?? "",
    personality: t.personality?.value ?? "",
    scenario: t.scenario?.value ?? "",
    first_mes: t.first_mes?.value ?? "",
    mes_example: t.mes_example?.value ?? "",
    alternate_greetings: r.map((i) => i.value).filter(Boolean)
  };
}
function FA(t, r = []) {
  const i = new Set(t), s = r.filter((o) => o && !i.has(o));
  return [
    ...t.map((o) => ({ value: o, label: o })),
    ...s.map((o) => ({ value: o, label: `${o} (missing)` }))
  ];
}
const Nn = SillyTavern.getContext(), xd = () => ({
  selectedCharacterIndexes: Ht ? [String(Ht)] : [],
  selectedWorldNames: [],
  fields: Kn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Sr[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), ZA = {
  name: { label: Sr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Sr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Sr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Sr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Sr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Sr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, GA = () => {
  const t = Q0(), r = Lt.getSettings(), [i, s] = ee.useState(xd()), [o, u] = ee.useState([]), [d, p] = ee.useState(!0), [h, g] = ee.useState("core"), [y, _] = ee.useState([]), [b, v] = ee.useState([]), [f, S] = ee.useState(null), [E, O] = ee.useState(null), [w, D] = ee.useState(!1), [x, T] = ee.useState(null);
  ee.useEffect(() => {
    (async () => {
      p(!0), _(Nn.characters), v(tv);
      const re = (await PA()).value ?? {}, ne = xd();
      if (re.fields && (ne.fields = { ...ne.fields, ...re.fields }), re.draftFields && (ne.draftFields = re.draftFields), re.selectedCharacterIndexes && (ne.selectedCharacterIndexes = re.selectedCharacterIndexes), re.selectedWorldNames && (ne.selectedWorldNames = re.selectedWorldNames), re.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = re.lastLoadedCharacterId;
        const be = Nn.characters.find((Ce) => Ce.avatar === re.lastLoadedCharacterId);
        be && S(be);
      }
      s(ne), p(!1);
    })();
  }, []), ee.useEffect(() => {
    d || IA(i).then((P) => {
      P.persisted || (console.warn("Failed to save Character Creator session:", P.error), Oe("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [i, d]);
  const M = (P, re) => {
    Lt.getSettings()[P] = re, Lt.saveSettings(), t();
  }, k = (P, re) => {
    Lt.getSettings().contextToSend[P] = re, Lt.saveSettings(), t();
  }, q = ee.useCallback(
    (P, re, ne, be) => {
      s((Ce) => {
        const ve = be ? "draftFields" : "fields", Me = { ...Ce[ve] };
        return Me[P] || (Me[P] = { value: "", prompt: "", label: P }), Me[P][ne] = re, { ...Ce, [ve]: Me };
      });
    },
    []
  ), G = ee.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, re) => parseInt(P.split("_")[2]) - parseInt(re.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), B = ee.useCallback((P) => {
    s((re) => {
      const ne = { ...re.fields };
      return Object.keys(ne).forEach((be) => {
        be.startsWith("alternate_greetings_") && delete ne[be];
      }), P.forEach((be, Ce) => {
        const ve = `alternate_greetings_${Ce + 1}`;
        ne[ve] = { ...be, label: `Alternate Greeting ${Ce + 1}` };
      }), { ...re, fields: ne };
    });
  }, []), V = ee.useCallback(
    (P, re) => {
      q(P, "", "value", re);
    },
    [q]
  ), $ = ee.useCallback(
    async (P) => {
      await Nn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && s((ne) => {
        const be = { ...ne.draftFields };
        return delete be[P], { ...ne, draftFields: be };
      });
    },
    [i.draftFields]
  ), oe = ee.useCallback(async () => {
    const P = await Nn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const re = Id(P.trim());
    if (!re) return Oe("error", "Invalid field name.");
    if (i.draftFields[re] || Kn.includes(re))
      return Oe("warning", "Field name already exists.");
    s((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [re]: { value: "", prompt: "", label: P } }
    })), g("draft");
  }, [i.draftFields]), fe = (P) => {
    T({ type: "field", fieldId: P }), D(!0);
  }, me = () => {
    T({ type: "global" }), D(!0);
  }, U = (P) => {
    s((re) => ({
      ...re,
      fields: { ...re.fields, ...P.fields },
      draftFields: { ...re.draftFields, ...P.draftFields }
    })), Oe("success", "Changes from revise session applied."), D(!1);
  }, te = ee.useCallback(
    async (P, re) => {
      if (!r.profileId) return Oe("warning", "Please select a connection profile.");
      u((ne) => [...ne, P]);
      try {
        const ne = Nn.extensionSettings.connectionManager?.profiles?.find(
          (De) => De.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const be = {
          presetName: ne?.preset,
          contextName: ne?.context,
          instructName: ne?.instruct,
          targetCharacterId: Ht,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Un
        }, Ce = r.contextToSend.messages;
        switch (Ce.type) {
          case "none":
            be.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            be.messageIndexesBetween = { start: 0, end: Ce.first ?? 10 };
            break;
          case "last":
            const De = Nn.chat?.length ?? 0, Re = Ce.last ?? 10;
            be.messageIndexesBetween = {
              end: Math.max(0, De - 1),
              start: Math.max(0, De - Re)
            };
            break;
          case "range":
            be.messageIndexesBetween = {
              start: Ce.range?.start ?? 0,
              end: Ce.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        Ht === void 0 && !Un && (be.messageIndexesBetween = { start: -1, end: -1 });
        const ve = {};
        await Promise.all(
          tv.filter((De) => !ve[De]).map(async (De) => {
            const Re = await Nn.loadWorldInfo(De);
            Re && (ve[De] = T1(Re, { includeDisabled: !0 }));
          })
        );
        const Me = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete Me.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete Me.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete Me.lorebookDefinitions, r.contextToSend.existingFields || delete Me.existingFieldDefinitions, r.contextToSend.persona || delete Me.personaDescription, delete Me.worldInfoCharDefinition;
        const Xe = await BE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: be,
          continueFrom: re,
          session: i,
          allCharacters: y,
          entriesGroupByWorldName: ve,
          promptSettings: Me,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (De) => De.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P,
          outputFormat: r.outputFormat
        }), de = P.startsWith("alternate_greetings_"), he = !de && !Kn.includes(P);
        if (de) {
          const De = parseInt(P.split("_")[2]) - 1, Re = [...G];
          Re[De] && (Re[De].value = Xe), B(Re);
        } else
          q(P, Xe, "value", he);
      } catch (ne) {
        console.error(ne), Oe("error", ne.message || String(ne));
      } finally {
        u((ne) => ne.filter((be) => be !== P));
      }
    },
    [i, r, y, G, q, B]
  ), ue = ee.useCallback(async () => {
    await Nn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(xd()), S(null));
  }, []), Le = ee.useCallback(
    (P) => {
      if (!f) return Oe("warning", "Please load a character to compare against.");
      let re, ne, be;
      typeof P == "number" ? (re = G[P]?.value ?? "", ne = f.data?.alternate_greetings?.[P] ?? "", be = `Alternate Greeting ${P + 1}`) : (re = i.fields[P]?.value ?? "", ne = f[P] ?? f.data?.[P] ?? "", be = Sr[P]), O({ original: ne, current: re, fieldName: be });
    },
    [f, i.fields, G]
  ), j = ee.useCallback(
    async (P) => {
      const re = y[parseInt(P)];
      if (!re || Kn.some((ve) => i.fields[ve].value.trim() !== "") && !await Nn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const be = { ...i.fields };
      Kn.forEach((ve) => {
        be[ve] = { value: re[ve] ?? re.data?.[ve] ?? "", prompt: "", label: Sr[ve] };
      });
      const Ce = (re.data?.alternate_greetings ?? []).map((ve) => ({ value: ve, prompt: "" }));
      S(re), s((ve) => ({ ...ve, fields: be, lastLoadedCharacterId: re.avatar })), B(Ce);
    },
    [y, i.fields, B]
  ), K = ee.useCallback(async () => {
    if (Un) {
      Oe("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (Ht === void 0) {
      Oe("warning", "No character chat is currently open.");
      return;
    }
    await j(String(Ht));
  }, [j]), ae = () => G.map((P) => P.value).filter((P) => P.trim() !== ""), se = async () => {
    if (!i.fields.name.value) return Oe("warning", "Please provide a character name.");
    if (!await Nn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const re = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: ae(),
        tags: [],
        avatar: "none",
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      },
      avatar: "none",
      tags: [],
      spec: "chara_card_v3",
      spec_version: "3.0"
    };
    try {
      await C_(re, !0);
    } catch (ne) {
      Oe("error", `Failed to create character: ${ne.message}`);
    }
  }, le = async () => {
    if (!f) return Oe("warning", "Please load a character to override.");
    if (!await Nn.Popup.show.confirm(
      "Override Character",
      `Override "${f.name}"? This cannot be undone.`
    )) return;
    const re = {
      ...f,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: ae(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await w_(re, !0), Oe("success", `Character "${re.name}" updated!`);
    } catch (ne) {
      Oe("error", `Failed to override character: ${ne.message}`);
    }
  }, Ie = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: Y0 }, null, 2), re = new Blob([P], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(re), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, Y = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const re = P.files?.[0];
      if (re)
        try {
          const ne = await re.text(), be = JSON.parse(ne);
          if (!be.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Nn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((ve) => ({ ...ve, draftFields: be.draftFields })), Oe("success", "Draft fields imported."));
        } catch (ne) {
          Oe("error", `Import failed: ${ne.message}`);
        }
    }, P.click();
  }, ge = ee.useMemo(
    () => y.map((P, re) => ({ value: String(re), label: P.name })),
    [y]
  ), ye = ee.useMemo(
    () => b.map((P) => ({ value: P, label: P })),
    [b]
  ), Ve = ee.useMemo(
    () => FA(b, i.selectedWorldNames),
    [b, i.selectedWorldNames]
  ), at = ee.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), ze = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
    [r.mainContextTemplatePresets]
  );
  return d ? /* @__PURE__ */ A.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ A.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ A.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ A.jsx(
            $0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => M("profileId", P?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ A.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (P) => k("stDescription", P.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.persona,
                  onChange: (P) => k("persona", P.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Ht !== void 0 || Un) && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ A.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ A.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (P) => k("messages", {
                    ...r.contextToSend.messages,
                    type: P.target.value
                  }),
                  children: [
                    /* @__PURE__ */ A.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ A.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ A.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ A.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ A.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.first ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(P.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.last ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(P.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ A.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ A.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: r.contextToSend.messages.range?.start ?? 0,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(P.target.value) || 0
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ A.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: r.contextToSend.messages.range?.end ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(P.target.value) || 10 }
                    })
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.charCard,
                  onChange: (P) => k("charCard", P.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ A.jsx(
              ru,
              {
                items: ge,
                value: i.selectedCharacterIndexes,
                onChange: (P) => s((re) => ({ ...re, selectedCharacterIndexes: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.worldInfo,
                  onChange: (P) => k("worldInfo", P.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ A.jsx(
              ru,
              {
                items: Ve,
                value: i.selectedWorldNames,
                onChange: (P) => s((re) => ({ ...re, selectedWorldNames: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.existingFields,
                  onChange: (P) => k("existingFields", P.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.dontSendOtherGreetings,
                  onChange: (P) => k("dontSendOtherGreetings", P.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ A.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ A.jsx(
              Eu,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: ze,
                value: r.mainContextTemplatePreset,
                onChange: (P) => M("mainContextTemplatePreset", P ?? "default")
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ A.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (P) => M("maxContextType", P.target.value),
                children: [
                  /* @__PURE__ */ A.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ A.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ A.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ A.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (P) => M("maxContextValue", parseInt(P.target.value) || 16384)
            }
          ),
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ A.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (P) => M("maxResponseToken", parseInt(P.target.value) || 1024)
              }
            )
          ] }),
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ A.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (P) => M("outputFormat", P.target.value),
                children: [
                  /* @__PURE__ */ A.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ A.jsx(
            Eu,
            {
              label: "Prompt Preset",
              items: at,
              value: r.promptPreset,
              onChange: (P) => M("promptPreset", P ?? "default"),
              onItemsChange: (P) => M(
                "promptPresets",
                P.reduce(
                  (re, ne) => ({ ...re, [ne.value]: r.promptPresets[ne.value] ?? { content: "" } }),
                  {}
                )
              ),
              enableCreate: !0,
              enableDelete: !0,
              enableRename: !0,
              readOnlyValues: ["default"]
            }
          ),
          /* @__PURE__ */ A.jsx(
            kn,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (P) => M("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: P.target.value }
              }),
              rows: 4
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ A.jsx(
            Se,
            {
              onClick: me,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(Se, { onClick: se, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(Se, { onClick: le, disabled: !f, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            ru,
            {
              items: ye,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (P) => {
              },
              onBeforeSelection: async (P, re) => {
                if (!i.fields.name.value)
                  return Oe("warning", "Please enter a name first."), !1;
                const ne = re[0], Ce = tn.compile(r.prompts.worldInfoCharDefinition.content)({
                  character: qA(i.fields, G)
                }), ve = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: Ce,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await ax({ entry: ve, selectedWorldName: ne, operation: "add" }), Oe("success", `Entry added to ${ne}.`);
                } catch (Me) {
                  Oe("error", `Failed to add WI Entry: ${Me.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(Se, { onClick: ue, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx(
            Se,
            {
              onClick: K,
              title: "Load the character from the currently open chat",
              disabled: !!Un || Ht === void 0,
              children: "Current Char"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ A.jsx(
            ru,
            {
              items: ge,
              value: f ? [String(y.indexOf(f))] : [],
              onChange: (P) => j(P[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ A.jsx(
            Se,
            {
              onClick: () => g("core"),
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ A.jsx(
            Se,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsxs(Se, { onClick: oe, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ A.jsx(Se, { onClick: Ie, children: "Export" }),
            /* @__PURE__ */ A.jsx(Se, { onClick: Y, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            Kn.map((P) => {
              const re = ZA[P];
              return re ? /* @__PURE__ */ A.jsx(
                Ty,
                {
                  fieldId: P,
                  label: re.label,
                  value: i.fields[P]?.value ?? "",
                  prompt: i.fields[P]?.prompt ?? "",
                  large: re.large,
                  rows: re.rows,
                  promptEnabled: re.promptEnabled,
                  isGenerating: o.includes(P),
                  onValueChange: (ne, be) => q(ne, be, "value", !1),
                  onPromptChange: (ne, be) => q(ne, be, "prompt", !1),
                  onGenerate: te,
                  onContinue: (ne) => te(ne, i.fields[ne].value),
                  onClear: (ne) => V(ne, !1),
                  onCompare: Le,
                  onOpenReviseSessions: fe
                },
                P
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              KE,
              {
                greetings: G,
                onGreetingsChange: B,
                isGenerating: o.some((P) => P.startsWith("alternate_greetings_")),
                onGenerate: (P) => te(`alternate_greetings_${P + 1}`),
                onContinue: (P) => te(`alternate_greetings_${P + 1}`, G[P].value),
                onCompare: Le
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([P, re]) => /* @__PURE__ */ A.jsx(
              Ty,
              {
                fieldId: P,
                label: re.label,
                value: re.value,
                prompt: re.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(P),
                onValueChange: (ne, be) => q(ne, be, "value", !0),
                onPromptChange: (ne, be) => q(ne, be, "prompt", !0),
                onGenerate: te,
                onContinue: (ne) => te(ne, i.draftFields[ne].value),
                onClear: (ne) => V(ne, !0),
                onDelete: $
              },
              P
            ))
          ] })
        ] })
      ] })
    ] }),
    E && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          mC,
          {
            originalContent: E.original,
            newContent: E.current,
            fieldName: E.fieldName
          }
        ),
        onComplete: () => O(null),
        options: { wide: !0 }
      }
    ),
    w && x && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          HA,
          {
            target: x,
            onClose: () => D(!1),
            onApply: U,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => D(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, VA = () => {
  const [t, r] = ee.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ A.jsx(
    Li,
    {
      content: /* @__PURE__ */ A.jsx(GA, {}),
      type: vn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, k1 = SillyTavern.getContext();
async function YA() {
  const t = await k1.renderExtensionTemplateAsync(
    `third-party/${Ma}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), mv.createRoot(r).render(
    /* @__PURE__ */ A.jsx(pu.StrictMode, { children: /* @__PURE__ */ A.jsx($E, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), mv.createRoot(u).render(
    /* @__PURE__ */ A.jsx(pu.StrictMode, { children: /* @__PURE__ */ A.jsx(VA, {}) })
  ), o.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const g = h.firstChild;
    g && (p.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function XA() {
  return !!k1.ConnectionManagerRequestService;
}
XA() ? qE().then(() => {
  YA();
}) : Oe("error", `[${Ma}] Make sure ST is updated.`);
export {
  YA as init
};
