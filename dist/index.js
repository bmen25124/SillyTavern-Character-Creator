import { renderStoryString as I_, persona_description_positions as Wg } from "../../../../power-user.js";
import { parseMesExamples as B_, baseChatReplace as U_, chat_metadata as Ls, getMaxContextSize as H_, name1 as _r, name2 as Qr, this_chid as vn, extension_prompt_types as Ca, depth_prompt_role_default as q_, depth_prompt_depth_default as Z_ } from "../../../../../script.js";
import { createWorldInfoEntry as F_, world_info_include_names as G_, wi_anchor_position as V_, world_names as ev } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as Y_, formatInstructModeSystemPrompt as X_ } from "../../../../instruct-mode.js";
import { appendFileContent as $_ } from "../../../../chats.js";
import { setOpenAIMessages as Q_, setOpenAIMessageExamples as K_, formatWorldInfo as J_, getPromptPosition as W_, getPromptRole as eb, prepareOpenAIMessages as tb } from "../../../../openai.js";
import { metadata_keys as Ps } from "../../../../authors-note.js";
import { getGroupDepthPrompts as nb, selected_group as Sr } from "../../../../group-chats.js";
import { getRegexedString as rb, regex_placement as tv } from "../../../regex/engine.js";
import { removeFromArray as nv, runAfterAnimation as ab } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as wi, fixToastrForDialogs as Gf } from "../../../../popup.js";
import rv from "../../../../../lib/dialog-polyfill.esm.js";
function t0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Vf = { exports: {} }, Is = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av;
function ib() {
  if (av) return Is;
  av = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, o, u) {
    var h = null;
    if (u !== void 0 && (h = "" + u), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      u = {};
      for (var p in o)
        p !== "key" && (u[p] = o[p]);
    } else u = o;
    return o = u.ref, {
      $$typeof: t,
      type: s,
      key: h,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return Is.Fragment = r, Is.jsx = i, Is.jsxs = i, Is;
}
var iv;
function sb() {
  return iv || (iv = 1, Vf.exports = ib()), Vf.exports;
}
var A = sb(), Yf = { exports: {} }, Me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function lb() {
  if (sv) return Me;
  sv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
  function _(j) {
    return j === null || typeof j != "object" ? null : (j = b && j[b] || j["@@iterator"], typeof j == "function" ? j : null);
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
  function x(j, K, ae) {
    this.props = j, this.context = K, this.refs = S, this.updater = ae || v;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(j, K) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, K, "setState");
  }, x.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function O() {
  }
  O.prototype = x.prototype;
  function w(j, K, ae) {
    this.props = j, this.context = K, this.refs = S, this.updater = ae || v;
  }
  var D = w.prototype = new O();
  D.constructor = w, f(D, x.prototype), D.isPureReactComponent = !0;
  var E = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(j, K, ae, se, le, ze) {
    return ae = ze.ref, {
      $$typeof: t,
      type: j,
      key: K,
      ref: ae !== void 0 ? ae : null,
      props: ze
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
  function he(j) {
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
  function ge(j, K, ae, se, le) {
    var ze = typeof j;
    (ze === "undefined" || ze === "boolean") && (j = null);
    var Y = !1;
    if (j === null) Y = !0;
    else
      switch (ze) {
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
              return Y = j._init, ge(
                Y(j._payload),
                K,
                ae,
                se,
                le
              );
          }
      }
    if (Y)
      return le = le(j), Y = se === "" ? "." + $(j, 0) : se, E(le) ? (ae = "", Y != null && (ae = Y.replace(V, "$&/") + "/"), ge(le, K, ae, "", function(Ge) {
        return Ge;
      })) : le != null && (G(le) && (le = q(
        le,
        ae + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(
          V,
          "$&/"
        ) + "/") + Y
      )), K.push(le)), 1;
    Y = 0;
    var ye = se === "" ? "." : se + ":";
    if (E(j))
      for (var _e = 0; _e < j.length; _e++)
        se = j[_e], ze = ye + $(se, _e), Y += ge(
          se,
          K,
          ae,
          ze,
          le
        );
    else if (_e = _(j), typeof _e == "function")
      for (j = _e.call(j), _e = 0; !(se = j.next()).done; )
        se = se.value, ze = ye + $(se, _e++), Y += ge(
          se,
          K,
          ae,
          ze,
          le
        );
    else if (ze === "object") {
      if (typeof j.then == "function")
        return ge(
          he(j),
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
    return ge(j, se, "", "", function(ze) {
      return K.call(ae, ze, le++);
    }), se;
  }
  function ne(j) {
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
  var ce = typeof reportError == "function" ? reportError : function(j) {
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
  function Re() {
  }
  return Me.Children = {
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
  }, Me.Component = x, Me.Fragment = i, Me.Profiler = o, Me.PureComponent = w, Me.StrictMode = s, Me.Suspense = d, Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return T.H.useMemoCache(j);
    }
  }, Me.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, Me.cloneElement = function(j, K, ae) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var se = f({}, j.props), le = j.key, ze = void 0;
    if (K != null)
      for (Y in K.ref !== void 0 && (ze = void 0), K.key !== void 0 && (le = "" + K.key), K)
        !M.call(K, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && K.ref === void 0 || (se[Y] = K[Y]);
    var Y = arguments.length - 2;
    if (Y === 1) se.children = ae;
    else if (1 < Y) {
      for (var ye = Array(Y), _e = 0; _e < Y; _e++)
        ye[_e] = arguments[_e + 2];
      se.children = ye;
    }
    return k(j.type, le, void 0, void 0, ze, se);
  }, Me.createContext = function(j) {
    return j = {
      $$typeof: h,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: u,
      _context: j
    }, j;
  }, Me.createElement = function(j, K, ae) {
    var se, le = {}, ze = null;
    if (K != null)
      for (se in K.key !== void 0 && (ze = "" + K.key), K)
        M.call(K, se) && se !== "key" && se !== "__self" && se !== "__source" && (le[se] = K[se]);
    var Y = arguments.length - 2;
    if (Y === 1) le.children = ae;
    else if (1 < Y) {
      for (var ye = Array(Y), _e = 0; _e < Y; _e++)
        ye[_e] = arguments[_e + 2];
      le.children = ye;
    }
    if (j && j.defaultProps)
      for (se in Y = j.defaultProps, Y)
        le[se] === void 0 && (le[se] = Y[se]);
    return k(j, ze, void 0, void 0, null, le);
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(j) {
    return { $$typeof: p, render: j };
  }, Me.isValidElement = G, Me.lazy = function(j) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: j },
      _init: ne
    };
  }, Me.memo = function(j, K) {
    return {
      $$typeof: g,
      type: j,
      compare: K === void 0 ? null : K
    };
  }, Me.startTransition = function(j) {
    var K = T.T, ae = {};
    T.T = ae;
    try {
      var se = j(), le = T.S;
      le !== null && le(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Re, ce);
    } catch (ze) {
      ce(ze);
    } finally {
      T.T = K;
    }
  }, Me.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, Me.use = function(j) {
    return T.H.use(j);
  }, Me.useActionState = function(j, K, ae) {
    return T.H.useActionState(j, K, ae);
  }, Me.useCallback = function(j, K) {
    return T.H.useCallback(j, K);
  }, Me.useContext = function(j) {
    return T.H.useContext(j);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(j, K) {
    return T.H.useDeferredValue(j, K);
  }, Me.useEffect = function(j, K, ae) {
    var se = T.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, K);
  }, Me.useId = function() {
    return T.H.useId();
  }, Me.useImperativeHandle = function(j, K, ae) {
    return T.H.useImperativeHandle(j, K, ae);
  }, Me.useInsertionEffect = function(j, K) {
    return T.H.useInsertionEffect(j, K);
  }, Me.useLayoutEffect = function(j, K) {
    return T.H.useLayoutEffect(j, K);
  }, Me.useMemo = function(j, K) {
    return T.H.useMemo(j, K);
  }, Me.useOptimistic = function(j, K) {
    return T.H.useOptimistic(j, K);
  }, Me.useReducer = function(j, K, ae) {
    return T.H.useReducer(j, K, ae);
  }, Me.useRef = function(j) {
    return T.H.useRef(j);
  }, Me.useState = function(j) {
    return T.H.useState(j);
  }, Me.useSyncExternalStore = function(j, K, ae) {
    return T.H.useSyncExternalStore(
      j,
      K,
      ae
    );
  }, Me.useTransition = function() {
    return T.H.useTransition();
  }, Me.version = "19.1.1", Me;
}
var lv;
function Xh() {
  return lv || (lv = 1, Yf.exports = lb()), Yf.exports;
}
var te = Xh();
const du = /* @__PURE__ */ t0(te);
var Xf = { exports: {} }, Bs = {}, $f = { exports: {} }, Qf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ov;
function ob() {
  return ov || (ov = 1, (function(t) {
    function r(U, ne) {
      var ce = U.length;
      U.push(ne);
      e: for (; 0 < ce; ) {
        var Re = ce - 1 >>> 1, j = U[Re];
        if (0 < o(j, ne))
          U[Re] = ne, U[ce] = j, ce = Re;
        else break e;
      }
    }
    function i(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var ne = U[0], ce = U.pop();
      if (ce !== ne) {
        U[0] = ce;
        e: for (var Re = 0, j = U.length, K = j >>> 1; Re < K; ) {
          var ae = 2 * (Re + 1) - 1, se = U[ae], le = ae + 1, ze = U[le];
          if (0 > o(se, ce))
            le < j && 0 > o(ze, se) ? (U[Re] = ze, U[le] = ce, Re = le) : (U[Re] = se, U[ae] = ce, Re = ae);
          else if (le < j && 0 > o(ze, ce))
            U[Re] = ze, U[le] = ce, Re = le;
          else break e;
        }
      }
      return ne;
    }
    function o(U, ne) {
      var ce = U.sortIndex - ne.sortIndex;
      return ce !== 0 ? ce : U.id - ne.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var h = Date, p = h.now();
      t.unstable_now = function() {
        return h.now() - p;
      };
    }
    var d = [], g = [], y = 1, b = null, _ = 3, v = !1, f = !1, S = !1, x = !1, O = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function E(U) {
      for (var ne = i(g); ne !== null; ) {
        if (ne.callback === null) s(g);
        else if (ne.startTime <= U)
          s(g), ne.sortIndex = ne.expirationTime, r(d, ne);
        else break;
        ne = i(g);
      }
    }
    function T(U) {
      if (S = !1, E(U), !f)
        if (i(d) !== null)
          f = !0, M || (M = !0, $());
        else {
          var ne = i(g);
          ne !== null && ge(T, ne.startTime - U);
        }
    }
    var M = !1, k = -1, q = 5, G = -1;
    function B() {
      return x ? !0 : !(t.unstable_now() - G < q);
    }
    function V() {
      if (x = !1, M) {
        var U = t.unstable_now();
        G = U;
        var ne = !0;
        try {
          e: {
            f = !1, S && (S = !1, w(k), k = -1), v = !0;
            var ce = _;
            try {
              t: {
                for (E(U), b = i(d); b !== null && !(b.expirationTime > U && B()); ) {
                  var Re = b.callback;
                  if (typeof Re == "function") {
                    b.callback = null, _ = b.priorityLevel;
                    var j = Re(
                      b.expirationTime <= U
                    );
                    if (U = t.unstable_now(), typeof j == "function") {
                      b.callback = j, E(U), ne = !0;
                      break t;
                    }
                    b === i(d) && s(d), E(U);
                  } else s(d);
                  b = i(d);
                }
                if (b !== null) ne = !0;
                else {
                  var K = i(g);
                  K !== null && ge(
                    T,
                    K.startTime - U
                  ), ne = !1;
                }
              }
              break e;
            } finally {
              b = null, _ = ce, v = !1;
            }
            ne = void 0;
          }
        } finally {
          ne ? $() : M = !1;
        }
      }
    }
    var $;
    if (typeof D == "function")
      $ = function() {
        D(V);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), he = oe.port2;
      oe.port1.onmessage = V, $ = function() {
        he.postMessage(null);
      };
    } else
      $ = function() {
        O(V, 0);
      };
    function ge(U, ne) {
      k = O(function() {
        U(t.unstable_now());
      }, ne);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, t.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < U ? Math.floor(1e3 / U) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, t.unstable_next = function(U) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = _;
      }
      var ce = _;
      _ = ne;
      try {
        return U();
      } finally {
        _ = ce;
      }
    }, t.unstable_requestPaint = function() {
      x = !0;
    }, t.unstable_runWithPriority = function(U, ne) {
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
      var ce = _;
      _ = U;
      try {
        return ne();
      } finally {
        _ = ce;
      }
    }, t.unstable_scheduleCallback = function(U, ne, ce) {
      var Re = t.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? Re + ce : Re) : ce = Re, U) {
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
      return j = ce + j, U = {
        id: y++,
        callback: ne,
        priorityLevel: U,
        startTime: ce,
        expirationTime: j,
        sortIndex: -1
      }, ce > Re ? (U.sortIndex = ce, r(g, U), i(d) === null && U === i(g) && (S ? (w(k), k = -1) : S = !0, ge(T, ce - Re))) : (U.sortIndex = j, r(d, U), f || v || (f = !0, M || (M = !0, $()))), U;
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(U) {
      var ne = _;
      return function() {
        var ce = _;
        _ = ne;
        try {
          return U.apply(this, arguments);
        } finally {
          _ = ce;
        }
      };
    };
  })(Qf)), Qf;
}
var uv;
function ub() {
  return uv || (uv = 1, $f.exports = ob()), $f.exports;
}
var Kf = { exports: {} }, Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;
function cb() {
  if (cv) return Bt;
  cv = 1;
  var t = Xh();
  function r(d) {
    var g = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + d + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(d, g, y) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: d,
      containerInfo: g,
      implementation: y
    };
  }
  var h = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(d, g) {
    if (d === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Bt.createPortal = function(d, g) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(d, g, null, y);
  }, Bt.flushSync = function(d) {
    var g = h.T, y = s.p;
    try {
      if (h.T = null, s.p = 2, d) return d();
    } finally {
      h.T = g, s.p = y, s.d.f();
    }
  }, Bt.preconnect = function(d, g) {
    typeof d == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(d, g));
  }, Bt.prefetchDNS = function(d) {
    typeof d == "string" && s.d.D(d);
  }, Bt.preinit = function(d, g) {
    if (typeof d == "string" && g && typeof g.as == "string") {
      var y = g.as, b = p(y, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, v = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      y === "style" ? s.d.S(
        d,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: b,
          integrity: _,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(d, {
        crossOrigin: b,
        integrity: _,
        fetchPriority: v,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Bt.preinitModule = function(d, g) {
    if (typeof d == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var y = p(
            g.as,
            g.crossOrigin
          );
          s.d.M(d, {
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(d);
  }, Bt.preload = function(d, g) {
    if (typeof d == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var y = g.as, b = p(y, g.crossOrigin);
      s.d.L(d, y, {
        crossOrigin: b,
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
  }, Bt.preloadModule = function(d, g) {
    if (typeof d == "string")
      if (g) {
        var y = p(g.as, g.crossOrigin);
        s.d.m(d, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(d);
  }, Bt.requestFormReset = function(d) {
    s.d.r(d);
  }, Bt.unstable_batchedUpdates = function(d, g) {
    return d(g);
  }, Bt.useFormState = function(d, g, y) {
    return h.H.useFormState(d, g, y);
  }, Bt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Bt.version = "19.1.1", Bt;
}
var fv;
function n0() {
  if (fv) return Kf.exports;
  fv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Kf.exports = cb(), Kf.exports;
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
function fb() {
  if (hv) return Bs;
  hv = 1;
  var t = ub(), r = Xh(), i = n0();
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
  function h(e) {
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
  function d(e) {
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
  var y = Object.assign, b = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), D = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), V = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case f:
        return "Fragment";
      case x:
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
        case E:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : he(e.type) || "Memo";
        case q:
          n = e._payload, e = e._init;
          try {
            return he(e(n));
          } catch {
          }
      }
    return null;
  }
  var ge = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Re = [], j = -1;
  function K(e) {
    return { current: e };
  }
  function ae(e) {
    0 > j || (e.current = Re[j], Re[j] = null, j--);
  }
  function se(e, n) {
    j++, Re[j] = e.current, e.current = n;
  }
  var le = K(null), ze = K(null), Y = K(null), ye = K(null);
  function _e(e, n) {
    switch (se(Y, n), se(ze, e), se(le, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Tg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Tg(n), e = Og(n, e);
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
  function Ge() {
    ae(le), ae(ze), ae(Y);
  }
  function at(e) {
    e.memoizedState !== null && se(ye, e);
    var n = le.current, a = Og(n, e.type);
    n !== a && (se(ze, e), se(le, a));
  }
  function L(e) {
    ze.current === e && (ae(le), ae(ze)), ye.current === e && (ae(ye), Ms._currentValue = ce);
  }
  var ee = Object.prototype.hasOwnProperty, re = t.unstable_scheduleCallback, de = t.unstable_cancelCallback, Ve = t.unstable_shouldYield, ve = t.unstable_requestPaint, Oe = t.unstable_now, qe = t.unstable_getCurrentPriorityLevel, Xe = t.unstable_ImmediatePriority, pe = t.unstable_UserBlockingPriority, ue = t.unstable_NormalPriority, ke = t.unstable_LowPriority, Ze = t.unstable_IdlePriority, it = t.log, Ar = t.unstable_setDisableYieldValue, er = null, mt = null;
  function qn(e) {
    if (typeof it == "function" && Ar(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(er, e);
      } catch {
      }
  }
  var Ht = Math.clz32 ? Math.clz32 : sa, yn = Math.log, ia = Math.LN2;
  function sa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yn(e) / ia | 0) | 0;
  }
  var tr = 256, Zn = 4194304;
  function _n(e) {
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
  function qt(e, n, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, m = e.suspendedLanes, C = e.pingedLanes;
    e = e.warmLanes;
    var N = l & 134217727;
    return N !== 0 ? (l = N & ~m, l !== 0 ? c = _n(l) : (C &= N, C !== 0 ? c = _n(C) : a || (a = N & ~e, a !== 0 && (c = _n(a))))) : (N = l & ~m, N !== 0 ? c = _n(N) : C !== 0 ? c = _n(C) : a || (a = l & ~e, a !== 0 && (c = _n(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & m) === 0 && (m = c & -c, a = n & -n, m >= a || m === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function Vt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function fl(e, n) {
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
    var e = tr;
    return tr <<= 1, (tr & 4194048) === 0 && (tr = 256), e;
  }
  function fd() {
    var e = Zn;
    return Zn <<= 1, (Zn & 62914560) === 0 && (Zn = 4194304), e;
  }
  function Ru(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Hi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function A1(e, n, a, l, c, m) {
    var C = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var N = e.entanglements, R = e.expirationTimes, H = e.hiddenUpdates;
    for (a = C & ~a; 0 < a; ) {
      var X = 31 - Ht(a), J = 1 << X;
      N[X] = 0, R[X] = -1;
      var Z = H[X];
      if (Z !== null)
        for (H[X] = null, X = 0; X < Z.length; X++) {
          var F = Z[X];
          F !== null && (F.lane &= -536870913);
        }
      a &= ~J;
    }
    l !== 0 && hd(e, l, 0), m !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(C & ~n));
  }
  function hd(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - Ht(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function dd(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var l = 31 - Ht(a), c = 1 << l;
      c & n | e[l] & n && (e[l] |= n), a &= ~c;
    }
  }
  function ju(e) {
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
  function zu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function pd() {
    var e = ne.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yg(e.type));
  }
  function T1(e, n) {
    var a = ne.p;
    try {
      return ne.p = e, n();
    } finally {
      ne.p = a;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Pt = "__reactFiber$" + Tr, Yt = "__reactProps$" + Tr, Ua = "__reactContainer$" + Tr, Lu = "__reactEvents$" + Tr, O1 = "__reactListeners$" + Tr, N1 = "__reactHandles$" + Tr, md = "__reactResources$" + Tr, qi = "__reactMarker$" + Tr;
  function Pu(e) {
    delete e[Pt], delete e[Yt], delete e[Lu], delete e[O1], delete e[N1];
  }
  function Ha(e) {
    var n = e[Pt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ua] || a[Pt]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = kg(e); e !== null; ) {
            if (a = e[Pt]) return a;
            e = kg(e);
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
  function Zi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Za(e) {
    var n = e[md];
    return n || (n = e[md] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ot(e) {
    e[qi] = !0;
  }
  var gd = /* @__PURE__ */ new Set(), vd = {};
  function la(e, n) {
    Fa(e, n), Fa(e + "Capture", n);
  }
  function Fa(e, n) {
    for (vd[e] = n, e = 0; e < n.length; e++)
      gd.add(n[e]);
  }
  var D1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), yd = {}, _d = {};
  function M1(e) {
    return ee.call(_d, e) ? !0 : ee.call(yd, e) ? !1 : D1.test(e) ? _d[e] = !0 : (yd[e] = !0, !1);
  }
  function hl(e, n, a) {
    if (M1(n))
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
  function dl(e, n, a) {
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
  function nr(e, n, a, l) {
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
  var Iu, bd;
  function Ga(e) {
    if (Iu === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        Iu = n && n[1] || "", bd = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Iu + e + bd;
  }
  var Bu = !1;
  function Uu(e, n) {
    if (!e || Bu) return "";
    Bu = !0;
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
                } catch (F) {
                  var Z = F;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch (F) {
                  Z = F;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                Z = F;
              }
              (J = e()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (F) {
            if (F && Z && typeof F.stack == "string")
              return [F.stack, Z.stack];
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
      Bu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ga(a) : "";
  }
  function k1(e) {
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
        return Uu(e.type, !1);
      case 11:
        return Uu(e.type.render, !1);
      case 1:
        return Uu(e.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function Sd(e) {
    try {
      var n = "";
      do
        n += k1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function bn(e) {
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
  function xd(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function R1(e) {
    var n = xd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
  function pl(e) {
    e._valueTracker || (e._valueTracker = R1(e));
  }
  function Ed(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), l = "";
    return e && (l = xd(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (n.setValue(e), !0) : !1;
  }
  function ml(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var j1 = /[\n"\\]/g;
  function Sn(e) {
    return e.replace(
      j1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hu(e, n, a, l, c, m, C, N) {
    e.name = "", C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? e.type = C : e.removeAttribute("type"), n != null ? C === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + bn(n)) : e.value !== "" + bn(n) && (e.value = "" + bn(n)) : C !== "submit" && C !== "reset" || e.removeAttribute("value"), n != null ? qu(e, C, bn(n)) : a != null ? qu(e, C, bn(a)) : l != null && e.removeAttribute("value"), c == null && m != null && (e.defaultChecked = !!m), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.name = "" + bn(N) : e.removeAttribute("name");
  }
  function Cd(e, n, a, l, c, m, C, N) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.type = m), n != null || a != null) {
      if (!(m !== "submit" && m !== "reset" || n != null))
        return;
      a = a != null ? "" + bn(a) : "", n = n != null ? "" + bn(n) : a, N || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = N ? e.checked : !!l, e.defaultChecked = !!l, C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" && (e.name = C);
  }
  function qu(e, n, a) {
    n === "number" && ml(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Va(e, n, a, l) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < a.length; c++)
        n["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = n.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + bn(a), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function wd(e, n, a) {
    if (n != null && (n = "" + bn(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + bn(a) : "";
  }
  function Ad(e, n, a, l) {
    if (n == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (ge(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), n = a;
    }
    a = bn(n), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
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
  var z1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Td(e, n, a) {
    var l = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, a) : typeof a != "number" || a === 0 || z1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function Od(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in n)
        l = n[c], n.hasOwnProperty(c) && a[c] !== l && Td(e, c, l);
    } else
      for (var m in n)
        n.hasOwnProperty(m) && Td(e, m, n[m]);
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
  var L1 = /* @__PURE__ */ new Map([
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
  ]), P1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gl(e) {
    return P1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Fu = null;
  function Gu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, $a = null;
  function Nd(e) {
    var n = qa(e);
    if (n && (e = n.stateNode)) {
      var a = e[Yt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Hu(
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
                var c = l[Yt] || null;
                if (!c) throw Error(s(90));
                Hu(
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
              l = a[n], l.form === e.form && Ed(l);
          }
          break e;
        case "textarea":
          wd(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Va(e, !!a.multiple, n, !1);
      }
    }
  }
  var Vu = !1;
  function Dd(e, n, a) {
    if (Vu) return e(n, a);
    Vu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Vu = !1, (Xa !== null || $a !== null) && (to(), Xa && (n = Xa, e = $a, $a = Xa = null, Nd(n), e)))
        for (n = 0; n < e.length; n++) Nd(e[n]);
    }
  }
  function Fi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Yt] || null;
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
  var rr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yu = !1;
  if (rr)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function() {
          Yu = !0;
        }
      }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      Yu = !1;
    }
  var Or = null, Xu = null, vl = null;
  function Md() {
    if (vl) return vl;
    var e, n = Xu, a = n.length, l, c = "value" in Or ? Or.value : Or.textContent, m = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var C = a - e;
    for (l = 1; l <= C && n[a - l] === c[m - l]; l++) ;
    return vl = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function yl(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _l() {
    return !0;
  }
  function kd() {
    return !1;
  }
  function Xt(e) {
    function n(a, l, c, m, C) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in e)
        e.hasOwnProperty(N) && (a = e[N], this[N] = a ? a(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? _l : kd, this.isPropagationStopped = kd, this;
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
  }, bl = Xt(oa), Vi = y({}, oa, { view: 0, detail: 0 }), I1 = Xt(Vi), $u, Qu, Yi, Sl = y({}, Vi, {
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
    getModifierState: Ju,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? ($u = e.screenX - Yi.screenX, Qu = e.screenY - Yi.screenY) : Qu = $u = 0, Yi = e), $u);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Qu;
    }
  }), Rd = Xt(Sl), B1 = y({}, Sl, { dataTransfer: 0 }), U1 = Xt(B1), H1 = y({}, Vi, { relatedTarget: 0 }), Ku = Xt(H1), q1 = y({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Z1 = Xt(q1), F1 = y({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), G1 = Xt(F1), V1 = y({}, oa, { data: 0 }), jd = Xt(V1), Y1 = {
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
  }, X1 = {
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
  }, $1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Q1(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = $1[e]) ? !!n[e] : !1;
  }
  function Ju() {
    return Q1;
  }
  var K1 = y({}, Vi, {
    key: function(e) {
      if (e.key) {
        var n = Y1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = yl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? X1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ju,
    charCode: function(e) {
      return e.type === "keypress" ? yl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? yl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), J1 = Xt(K1), W1 = y({}, Sl, {
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
  }), zd = Xt(W1), e2 = y({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju
  }), t2 = Xt(e2), n2 = y({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), r2 = Xt(n2), a2 = y({}, Sl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), i2 = Xt(a2), s2 = y({}, oa, {
    newState: 0,
    oldState: 0
  }), l2 = Xt(s2), o2 = [9, 13, 27, 32], Wu = rr && "CompositionEvent" in window, Xi = null;
  rr && "documentMode" in document && (Xi = document.documentMode);
  var u2 = rr && "TextEvent" in window && !Xi, Ld = rr && (!Wu || Xi && 8 < Xi && 11 >= Xi), Pd = " ", Id = !1;
  function Bd(e, n) {
    switch (e) {
      case "keyup":
        return o2.indexOf(n.keyCode) !== -1;
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
  function Ud(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qa = !1;
  function c2(e, n) {
    switch (e) {
      case "compositionend":
        return Ud(n);
      case "keypress":
        return n.which !== 32 ? null : (Id = !0, Pd);
      case "textInput":
        return e = n.data, e === Pd && Id ? null : e;
      default:
        return null;
    }
  }
  function f2(e, n) {
    if (Qa)
      return e === "compositionend" || !Wu && Bd(e, n) ? (e = Md(), vl = Xu = Or = null, Qa = !1, e) : null;
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
        return Ld && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var h2 = {
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
  function Hd(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!h2[e.type] : n === "textarea";
  }
  function qd(e, n, a, l) {
    Xa ? $a ? $a.push(l) : $a = [l] : Xa = l, n = lo(n, "onChange"), 0 < n.length && (a = new bl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: n }));
  }
  var $i = null, Qi = null;
  function d2(e) {
    xg(e, 0);
  }
  function xl(e) {
    var n = Zi(e);
    if (Ed(n)) return e;
  }
  function Zd(e, n) {
    if (e === "change") return n;
  }
  var Fd = !1;
  if (rr) {
    var ec;
    if (rr) {
      var tc = "oninput" in document;
      if (!tc) {
        var Gd = document.createElement("div");
        Gd.setAttribute("oninput", "return;"), tc = typeof Gd.oninput == "function";
      }
      ec = tc;
    } else ec = !1;
    Fd = ec && (!document.documentMode || 9 < document.documentMode);
  }
  function Vd() {
    $i && ($i.detachEvent("onpropertychange", Yd), Qi = $i = null);
  }
  function Yd(e) {
    if (e.propertyName === "value" && xl(Qi)) {
      var n = [];
      qd(
        n,
        Qi,
        e,
        Gu(e)
      ), Dd(d2, n);
    }
  }
  function p2(e, n, a) {
    e === "focusin" ? (Vd(), $i = n, Qi = a, $i.attachEvent("onpropertychange", Yd)) : e === "focusout" && Vd();
  }
  function m2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return xl(Qi);
  }
  function g2(e, n) {
    if (e === "click") return xl(n);
  }
  function v2(e, n) {
    if (e === "input" || e === "change")
      return xl(n);
  }
  function y2(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var an = typeof Object.is == "function" ? Object.is : y2;
  function Ki(e, n) {
    if (an(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!ee.call(n, c) || !an(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function Xd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $d(e, n) {
    var a = Xd(e);
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
      a = Xd(a);
    }
  }
  function Qd(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Qd(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Kd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = ml(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = ml(e.document);
    }
    return n;
  }
  function nc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var _2 = rr && "documentMode" in document && 11 >= document.documentMode, Ka = null, rc = null, Ji = null, ac = !1;
  function Jd(e, n, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ac || Ka == null || Ka !== ml(l) || (l = Ka, "selectionStart" in l && nc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ji && Ki(Ji, l) || (Ji = l, l = lo(rc, "onSelect"), 0 < l.length && (n = new bl(
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
  }, ic = {}, Wd = {};
  rr && (Wd = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function ca(e) {
    if (ic[e]) return ic[e];
    if (!Ja[e]) return e;
    var n = Ja[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in Wd)
        return ic[e] = n[a];
    return e;
  }
  var ep = ca("animationend"), tp = ca("animationiteration"), np = ca("animationstart"), b2 = ca("transitionrun"), S2 = ca("transitionstart"), x2 = ca("transitioncancel"), rp = ca("transitionend"), ap = /* @__PURE__ */ new Map(), sc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  sc.push("scrollEnd");
  function jn(e, n) {
    ap.set(e, n), la(n, [e]);
  }
  var ip = /* @__PURE__ */ new WeakMap();
  function xn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = ip.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: Sd(n)
      }, ip.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Sd(n)
    };
  }
  var En = [], Wa = 0, lc = 0;
  function El() {
    for (var e = Wa, n = lc = Wa = 0; n < e; ) {
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
      m !== 0 && sp(a, c, m);
    }
  }
  function Cl(e, n, a, l) {
    En[Wa++] = e, En[Wa++] = n, En[Wa++] = a, En[Wa++] = l, lc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function oc(e, n, a, l) {
    return Cl(e, n, a, l), wl(e);
  }
  function ei(e, n) {
    return Cl(e, null, null, n), wl(e);
  }
  function sp(e, n, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var c = !1, m = e.return; m !== null; )
      m.childLanes |= a, l = m.alternate, l !== null && (l.childLanes |= a), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (c = !0)), e = m, m = m.return;
    return e.tag === 3 ? (m = e.stateNode, c && n !== null && (c = 31 - Ht(a), e = m.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = a | 536870912), m) : null;
  }
  function wl(e) {
    if (50 < Es)
      throw Es = 0, mf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ti = {};
  function E2(e, n, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function sn(e, n, a, l) {
    return new E2(e, n, a, l);
  }
  function uc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ar(e, n) {
    var a = e.alternate;
    return a === null ? (a = sn(
      e.tag,
      n,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function lp(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Al(e, n, a, l, c, m) {
    var C = 0;
    if (l = e, typeof e == "function") uc(e) && (C = 1);
    else if (typeof e == "string")
      C = w_(
        e,
        a,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case G:
          return e = sn(31, a, n, c), e.elementType = G, e.lanes = m, e;
        case f:
          return fa(a.children, c, m, n);
        case S:
          C = 8, c |= 24;
          break;
        case x:
          return e = sn(12, a, n, c | 2), e.elementType = x, e.lanes = m, e;
        case T:
          return e = sn(13, a, n, c), e.elementType = T, e.lanes = m, e;
        case M:
          return e = sn(19, a, n, c), e.elementType = M, e.lanes = m, e;
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
              case E:
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
    return n = sn(C, a, n, c), n.elementType = e, n.type = l, n.lanes = m, n;
  }
  function fa(e, n, a, l) {
    return e = sn(7, e, l, n), e.lanes = a, e;
  }
  function cc(e, n, a) {
    return e = sn(6, e, null, n), e.lanes = a, e;
  }
  function fc(e, n, a) {
    return n = sn(
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
  var ni = [], ri = 0, Tl = null, Ol = 0, Cn = [], wn = 0, ha = null, ir = 1, sr = "";
  function da(e, n) {
    ni[ri++] = Ol, ni[ri++] = Tl, Tl = e, Ol = n;
  }
  function op(e, n, a) {
    Cn[wn++] = ir, Cn[wn++] = sr, Cn[wn++] = ha, ha = e;
    var l = ir;
    e = sr;
    var c = 32 - Ht(l) - 1;
    l &= ~(1 << c), a += 1;
    var m = 32 - Ht(n) + c;
    if (30 < m) {
      var C = c - c % 5;
      m = (l & (1 << C) - 1).toString(32), l >>= C, c -= C, ir = 1 << 32 - Ht(n) + c | a << c | l, sr = m + e;
    } else
      ir = 1 << m | a << c | l, sr = e;
  }
  function hc(e) {
    e.return !== null && (da(e, 1), op(e, 1, 0));
  }
  function dc(e) {
    for (; e === Tl; )
      Tl = ni[--ri], ni[ri] = null, Ol = ni[--ri], ni[ri] = null;
    for (; e === ha; )
      ha = Cn[--wn], Cn[wn] = null, sr = Cn[--wn], Cn[wn] = null, ir = Cn[--wn], Cn[wn] = null;
  }
  var Zt = null, ht = null, Ye = !1, pa = null, Fn = !1, pc = Error(s(519));
  function ma(e) {
    var n = Error(s(418, ""));
    throw ts(xn(n, e)), pc;
  }
  function up(e) {
    var n = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (n[Pt] = e, n[Yt] = l, a) {
      case "dialog":
        Ie("cancel", n), Ie("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ie("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ws.length; a++)
          Ie(ws[a], n);
        break;
      case "source":
        Ie("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ie("error", n), Ie("load", n);
        break;
      case "details":
        Ie("toggle", n);
        break;
      case "input":
        Ie("invalid", n), Cd(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), pl(n);
        break;
      case "select":
        Ie("invalid", n);
        break;
      case "textarea":
        Ie("invalid", n), Ad(n, l.value, l.defaultValue, l.children), pl(n);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Ag(n.textContent, a) ? (l.popover != null && (Ie("beforetoggle", n), Ie("toggle", n)), l.onScroll != null && Ie("scroll", n), l.onScrollEnd != null && Ie("scrollend", n), l.onClick != null && (n.onclick = oo), n = !0) : n = !1, n || ma(e);
  }
  function cp(e) {
    for (Zt = e.return; Zt; )
      switch (Zt.tag) {
        case 5:
        case 13:
          Fn = !1;
          return;
        case 27:
        case 3:
          Fn = !0;
          return;
        default:
          Zt = Zt.return;
      }
  }
  function Wi(e) {
    if (e !== Zt) return !1;
    if (!Ye) return cp(e), Ye = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Mf(e.type, e.memoizedProps)), a = !a), a && ht && ma(e), cp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                ht = Ln(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        ht = null;
      }
    } else
      n === 27 ? (n = ht, Fr(e.type) ? (e = zf, zf = null, ht = e) : ht = n) : ht = Zt ? Ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    ht = Zt = null, Ye = !1;
  }
  function fp() {
    var e = pa;
    return e !== null && (Kt === null ? Kt = e : Kt.push.apply(
      Kt,
      e
    ), pa = null), e;
  }
  function ts(e) {
    pa === null ? pa = [e] : pa.push(e);
  }
  var mc = K(null), ga = null, lr = null;
  function Nr(e, n, a) {
    se(mc, n._currentValue), n._currentValue = a;
  }
  function or(e) {
    e._currentValue = mc.current, ae(mc);
  }
  function gc(e, n, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function vc(e, n, a, l) {
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
              m.lanes |= a, N = m.alternate, N !== null && (N.lanes |= a), gc(
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
        C.lanes |= a, m = C.alternate, m !== null && (m.lanes |= a), gc(C, a, e), C = null;
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
          an(c.pendingProps.value, C.value) || (e !== null ? e.push(N) : e = [N]);
        }
      } else if (c === ye.current) {
        if (C = c.alternate, C === null) throw Error(s(387));
        C.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ms) : e = [Ms]);
      }
      c = c.return;
    }
    e !== null && vc(
      n,
      e,
      a,
      l
    ), n.flags |= 262144;
  }
  function Nl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!an(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function va(e) {
    ga = e, lr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function It(e) {
    return hp(ga, e);
  }
  function Dl(e, n) {
    return ga === null && va(e), hp(e, n);
  }
  function hp(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, lr === null) {
      if (e === null) throw Error(s(308));
      lr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else lr = lr.next = n;
    return a;
  }
  var C2 = typeof AbortController < "u" ? AbortController : function() {
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
  }, w2 = t.unstable_scheduleCallback, A2 = t.unstable_NormalPriority, Ct = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yc() {
    return {
      controller: new C2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rs(e) {
    e.refCount--, e.refCount === 0 && w2(A2, function() {
      e.controller.abort();
    });
  }
  var as = null, _c = 0, ai = 0, ii = null;
  function T2(e, n) {
    if (as === null) {
      var a = as = [];
      _c = 0, ai = xf(), ii = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return _c++, n.then(dp, dp), n;
  }
  function dp() {
    if (--_c === 0 && as !== null) {
      ii !== null && (ii.status = "fulfilled");
      var e = as;
      as = null, ai = 0, ii = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function O2(e, n) {
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
  var pp = U.S;
  U.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && T2(e, n), pp !== null && pp(e, n);
  };
  var ya = K(null);
  function bc() {
    var e = ya.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Ml(e, n) {
    n === null ? se(ya, ya.current) : se(ya, n.pool);
  }
  function mp() {
    var e = bc();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var is = Error(s(460)), gp = Error(s(474)), kl = Error(s(542)), Sc = { then: function() {
  } };
  function vp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Rl() {
  }
  function yp(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Rl, Rl), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, bp(e), e;
      default:
        if (typeof n.status == "string") n.then(Rl, Rl);
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
            throw e = n.reason, bp(e), e;
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
  function bp(e) {
    if (e === is || e === kl)
      throw Error(s(483));
  }
  var Dr = !1;
  function xc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ec(e, n) {
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
      return c === null ? n.next = n : (n.next = c.next, c.next = n), l.pending = n, n = wl(e), sp(e, null, a), n;
    }
    return Cl(e, l, n, a), wl(e);
  }
  function ls(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, a |= l, n.lanes = a, dd(e, a);
    }
  }
  function Cc(e, n) {
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
  var wc = !1;
  function os() {
    if (wc) {
      var e = ii;
      if (e !== null) throw e;
    }
  }
  function us(e, n, a, l) {
    wc = !1;
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
        var Z = N.lane & -536870913, F = Z !== N.lane;
        if (F ? (He & Z) === Z : (l & Z) === Z) {
          Z !== 0 && Z === ai && (wc = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: null,
            next: null
          });
          e: {
            var Ce = e, Se = N;
            Z = n;
            var We = a;
            switch (Se.tag) {
              case 1:
                if (Ce = Se.payload, typeof Ce == "function") {
                  J = Ce.call(We, J, Z);
                  break e;
                }
                J = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = Se.payload, Z = typeof Ce == "function" ? Ce.call(We, J, Z) : Ce, Z == null) break e;
                J = y({}, J, Z);
                break e;
              case 2:
                Dr = !0;
            }
          }
          Z = N.callback, Z !== null && (e.flags |= 64, F && (e.flags |= 8192), F = c.callbacks, F === null ? c.callbacks = [Z] : F.push(Z));
        } else
          F = {
            lane: Z,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          }, X === null ? (H = X = F, R = J) : X = X.next = F, C |= Z;
        if (N = N.next, N === null) {
          if (N = c.shared.pending, N === null)
            break;
          F = N, N = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      X === null && (R = J), c.baseState = R, c.firstBaseUpdate = H, c.lastBaseUpdate = X, m === null && (c.shared.lanes = 0), Ur |= C, e.lanes = C, e.memoizedState = J;
    }
  }
  function Sp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function xp(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Sp(a[e], n);
  }
  var si = K(null), jl = K(0);
  function Ep(e, n) {
    e = mr, se(jl, e), se(si, n), mr = e | n.baseLanes;
  }
  function Ac() {
    se(jl, mr), se(si, si.current);
  }
  function Tc() {
    mr = jl.current, ae(si), ae(jl);
  }
  var Rr = 0, je = null, Ke = null, _t = null, zl = !1, li = !1, _a = !1, Ll = 0, cs = 0, oi = null, N2 = 0;
  function gt() {
    throw Error(s(321));
  }
  function Oc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!an(e[a], n[a])) return !1;
    return !0;
  }
  function Nc(e, n, a, l, c, m) {
    return Rr = m, je = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, U.H = e === null || e.memoizedState === null ? sm : lm, _a = !1, m = a(l, c), _a = !1, li && (m = wp(
      n,
      a,
      l,
      c
    )), Cp(e), m;
  }
  function Cp(e) {
    U.H = ql;
    var n = Ke !== null && Ke.next !== null;
    if (Rr = 0, _t = Ke = je = null, zl = !1, cs = 0, oi = null, n) throw Error(s(300));
    e === null || Nt || (e = e.dependencies, e !== null && Nl(e) && (Nt = !0));
  }
  function wp(e, n, a, l) {
    je = e;
    var c = 0;
    do {
      if (li && (oi = null), cs = 0, li = !1, 25 <= c) throw Error(s(301));
      if (c += 1, _t = Ke = null, e.updateQueue != null) {
        var m = e.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      U.H = L2, m = n(a, l);
    } while (li);
    return m;
  }
  function D2() {
    var e = U.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? fs(n) : n, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (je.flags |= 1024), n;
  }
  function Dc() {
    var e = Ll !== 0;
    return Ll = 0, e;
  }
  function Mc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function kc(e) {
    if (zl) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      zl = !1;
    }
    Rr = 0, _t = Ke = je = null, li = !1, cs = Ll = 0, oi = null;
  }
  function $t() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return _t === null ? je.memoizedState = _t = e : _t = _t.next = e, _t;
  }
  function bt() {
    if (Ke === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = _t === null ? je.memoizedState : _t.next;
    if (n !== null)
      _t = n, Ke = e;
    else {
      if (e === null)
        throw je.alternate === null ? Error(s(467)) : Error(s(310));
      Ke = e, e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }, _t === null ? je.memoizedState = _t = e : _t = _t.next = e;
    }
    return _t;
  }
  function Rc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fs(e) {
    var n = cs;
    return cs += 1, oi === null && (oi = []), e = yp(oi, e, n), n = je, (_t === null ? n.memoizedState : _t.next) === null && (n = n.alternate, U.H = n === null || n.memoizedState === null ? sm : lm), e;
  }
  function Pl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return fs(e);
      if (e.$$typeof === D) return It(e);
    }
    throw Error(s(438, String(e)));
  }
  function jc(e) {
    var n = null, a = je.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var l = je.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = Rc(), je.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), l = 0; l < e; l++)
        a[l] = B;
    return n.index++, a;
  }
  function ur(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Il(e) {
    var n = bt();
    return zc(n, Ke, e);
  }
  function zc(e, n, a) {
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
        if (J !== H.lane ? (He & J) === J : (Rr & J) === J) {
          var Z = H.revertLane;
          if (Z === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), J === ai && (X = !0);
          else if ((Rr & Z) === Z) {
            H = H.next, Z === ai && (X = !0);
            continue;
          } else
            J = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, R === null ? (N = R = J, C = m) : R = R.next = J, je.lanes |= Z, Ur |= Z;
          J = H.action, _a && a(m, J), m = H.hasEagerState ? H.eagerState : a(m, J);
        } else
          Z = {
            lane: J,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, R === null ? (N = R = Z, C = m) : R = R.next = Z, je.lanes |= J, Ur |= J;
        H = H.next;
      } while (H !== null && H !== n);
      if (R === null ? C = m : R.next = N, !an(m, e.memoizedState) && (Nt = !0, X && (a = ii, a !== null)))
        throw a;
      e.memoizedState = m, e.baseState = C, e.baseQueue = R, l.lastRenderedState = m;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Lc(e) {
    var n = bt(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, m = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var C = c = c.next;
      do
        m = e(m, C.action), C = C.next;
      while (C !== c);
      an(m, n.memoizedState) || (Nt = !0), n.memoizedState = m, n.baseQueue === null && (n.baseState = m), a.lastRenderedState = m;
    }
    return [m, l];
  }
  function Ap(e, n, a) {
    var l = je, c = bt(), m = Ye;
    if (m) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var C = !an(
      (Ke || c).memoizedState,
      a
    );
    C && (c.memoizedState = a, Nt = !0), c = c.queue;
    var N = Np.bind(null, l, c, e);
    if (hs(2048, 8, N, [e]), c.getSnapshot !== n || C || _t !== null && _t.memoizedState.tag & 1) {
      if (l.flags |= 2048, ui(
        9,
        Bl(),
        Op.bind(
          null,
          l,
          c,
          a,
          n
        ),
        null
      ), nt === null) throw Error(s(349));
      m || (Rr & 124) !== 0 || Tp(l, n, a);
    }
    return a;
  }
  function Tp(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = je.updateQueue, n === null ? (n = Rc(), je.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function Op(e, n, a, l) {
    n.value = a, n.getSnapshot = l, Dp(n) && Mp(e);
  }
  function Np(e, n, a) {
    return a(function() {
      Dp(n) && Mp(e);
    });
  }
  function Dp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !an(e, a);
    } catch {
      return !0;
    }
  }
  function Mp(e) {
    var n = ei(e, 2);
    n !== null && fn(n, e, 2);
  }
  function Pc(e) {
    var n = $t();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), _a) {
        qn(!0);
        try {
          a();
        } finally {
          qn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ur,
      lastRenderedState: e
    }, n;
  }
  function kp(e, n, a, l) {
    return e.baseState = a, zc(
      e,
      Ke,
      typeof l == "function" ? l : ur
    );
  }
  function M2(e, n, a, l, c) {
    if (Hl(e)) throw Error(s(485));
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
      U.T !== null ? a(!0) : m.isTransition = !1, l(m), a = n.pending, a === null ? (m.next = n.pending = m, Rp(n, m)) : (m.next = a.next, n.pending = a.next = m);
    }
  }
  function Rp(e, n) {
    var a = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var m = U.T, C = {};
      U.T = C;
      try {
        var N = a(c, l), R = U.S;
        R !== null && R(C, N), jp(e, n, N);
      } catch (H) {
        Ic(e, n, H);
      } finally {
        U.T = m;
      }
    } else
      try {
        m = a(c, l), jp(e, n, m);
      } catch (H) {
        Ic(e, n, H);
      }
  }
  function jp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        zp(e, n, l);
      },
      function(l) {
        return Ic(e, n, l);
      }
    ) : zp(e, n, a);
  }
  function zp(e, n, a) {
    n.status = "fulfilled", n.value = a, Lp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Rp(e, a)));
  }
  function Ic(e, n, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = a, Lp(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Lp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Pp(e, n) {
    return n;
  }
  function Ip(e, n) {
    if (Ye) {
      var a = nt.formState;
      if (a !== null) {
        e: {
          var l = je;
          if (Ye) {
            if (ht) {
              t: {
                for (var c = ht, m = Fn; c.nodeType !== 8; ) {
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
                ht = Ln(
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
    return a = $t(), a.memoizedState = a.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pp,
      lastRenderedState: n
    }, a.queue = l, a = rm.bind(
      null,
      je,
      l
    ), l.dispatch = a, l = Pc(!1), m = Zc.bind(
      null,
      je,
      !1,
      l.queue
    ), l = $t(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = M2.bind(
      null,
      je,
      c,
      m,
      a
    ), c.dispatch = a, l.memoizedState = e, [n, a, !1];
  }
  function Bp(e) {
    var n = bt();
    return Up(n, Ke, e);
  }
  function Up(e, n, a) {
    if (n = zc(
      e,
      n,
      Pp
    )[0], e = Il(ur)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = fs(n);
      } catch (C) {
        throw C === is ? kl : C;
      }
    else l = n;
    n = bt();
    var c = n.queue, m = c.dispatch;
    return a !== n.memoizedState && (je.flags |= 2048, ui(
      9,
      Bl(),
      k2.bind(null, c, a),
      null
    )), [l, m, e];
  }
  function k2(e, n) {
    e.action = n;
  }
  function Hp(e) {
    var n = bt(), a = Ke;
    if (a !== null)
      return Up(n, a, e);
    bt(), n = n.memoizedState, a = bt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [n, l, !1];
  }
  function ui(e, n, a, l) {
    return e = { tag: e, create: a, deps: l, inst: n, next: null }, n = je.updateQueue, n === null && (n = Rc(), je.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Bl() {
    return { destroy: void 0, resource: void 0 };
  }
  function qp() {
    return bt().memoizedState;
  }
  function Ul(e, n, a, l) {
    var c = $t();
    l = l === void 0 ? null : l, je.flags |= e, c.memoizedState = ui(
      1 | n,
      Bl(),
      a,
      l
    );
  }
  function hs(e, n, a, l) {
    var c = bt();
    l = l === void 0 ? null : l;
    var m = c.memoizedState.inst;
    Ke !== null && l !== null && Oc(l, Ke.memoizedState.deps) ? c.memoizedState = ui(n, m, a, l) : (je.flags |= e, c.memoizedState = ui(
      1 | n,
      m,
      a,
      l
    ));
  }
  function Zp(e, n) {
    Ul(8390656, 8, e, n);
  }
  function Fp(e, n) {
    hs(2048, 8, e, n);
  }
  function Gp(e, n) {
    return hs(4, 2, e, n);
  }
  function Vp(e, n) {
    return hs(4, 4, e, n);
  }
  function Yp(e, n) {
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
  function Xp(e, n, a) {
    a = a != null ? a.concat([e]) : null, hs(4, 4, Yp.bind(null, n, e), a);
  }
  function Bc() {
  }
  function $p(e, n) {
    var a = bt();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    return n !== null && Oc(n, l[1]) ? l[0] : (a.memoizedState = [e, n], e);
  }
  function Qp(e, n) {
    var a = bt();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    if (n !== null && Oc(n, l[1]))
      return l[0];
    if (l = e(), _a) {
      qn(!0);
      try {
        e();
      } finally {
        qn(!1);
      }
    }
    return a.memoizedState = [l, n], l;
  }
  function Uc(e, n, a) {
    return a === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Wm(), je.lanes |= e, Ur |= e, a);
  }
  function Kp(e, n, a, l) {
    return an(a, n) ? a : si.current !== null ? (e = Uc(e, a, l), an(e, n) || (Nt = !0), e) : (Rr & 42) === 0 ? (Nt = !0, e.memoizedState = a) : (e = Wm(), je.lanes |= e, Ur |= e, n);
  }
  function Jp(e, n, a, l, c) {
    var m = ne.p;
    ne.p = m !== 0 && 8 > m ? m : 8;
    var C = U.T, N = {};
    U.T = N, Zc(e, !1, n, a);
    try {
      var R = c(), H = U.S;
      if (H !== null && H(N, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var X = O2(
          R,
          l
        );
        ds(
          e,
          n,
          X,
          cn(e)
        );
      } else
        ds(
          e,
          n,
          l,
          cn(e)
        );
    } catch (J) {
      ds(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: J },
        cn()
      );
    } finally {
      ne.p = m, U.T = C;
    }
  }
  function R2() {
  }
  function Hc(e, n, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Wp(e).queue;
    Jp(
      e,
      c,
      n,
      ce,
      a === null ? R2 : function() {
        return em(e), a(l);
      }
    );
  }
  function Wp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ur,
        lastRenderedState: ce
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
        lastRenderedReducer: ur,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function em(e) {
    var n = Wp(e).next.queue;
    ds(e, n, {}, cn());
  }
  function qc() {
    return It(Ms);
  }
  function tm() {
    return bt().memoizedState;
  }
  function nm() {
    return bt().memoizedState;
  }
  function j2(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = cn();
          e = Mr(a);
          var l = kr(n, e, a);
          l !== null && (fn(l, n, a), ls(l, n, a)), n = { cache: yc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function z2(e, n, a) {
    var l = cn();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Hl(e) ? am(n, a) : (a = oc(e, n, a, l), a !== null && (fn(a, e, l), im(a, n, l)));
  }
  function rm(e, n, a) {
    var l = cn();
    ds(e, n, a, l);
  }
  function ds(e, n, a, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Hl(e)) am(n, c);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = n.lastRenderedReducer, m !== null))
        try {
          var C = n.lastRenderedState, N = m(C, a);
          if (c.hasEagerState = !0, c.eagerState = N, an(N, C))
            return Cl(e, n, c, 0), nt === null && El(), !1;
        } catch {
        } finally {
        }
      if (a = oc(e, n, c, l), a !== null)
        return fn(a, e, l), im(a, n, l), !0;
    }
    return !1;
  }
  function Zc(e, n, a, l) {
    if (l = {
      lane: 2,
      revertLane: xf(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Hl(e)) {
      if (n) throw Error(s(479));
    } else
      n = oc(
        e,
        a,
        l,
        2
      ), n !== null && fn(n, e, 2);
  }
  function Hl(e) {
    var n = e.alternate;
    return e === je || n !== null && n === je;
  }
  function am(e, n) {
    li = zl = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function im(e, n, a) {
    if ((a & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, a |= l, n.lanes = a, dd(e, a);
    }
  }
  var ql = {
    readContext: It,
    use: Pl,
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
  }, sm = {
    readContext: It,
    use: Pl,
    useCallback: function(e, n) {
      return $t().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: It,
    useEffect: Zp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Ul(
        4194308,
        4,
        Yp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return Ul(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Ul(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = $t();
      n = n === void 0 ? null : n;
      var l = e();
      if (_a) {
        qn(!0);
        try {
          e();
        } finally {
          qn(!1);
        }
      }
      return a.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, a) {
      var l = $t();
      if (a !== void 0) {
        var c = a(n);
        if (_a) {
          qn(!0);
          try {
            a(n);
          } finally {
            qn(!1);
          }
        }
      } else c = n;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = z2.bind(
        null,
        je,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = $t();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Pc(e);
      var n = e.queue, a = rm.bind(null, je, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var a = $t();
      return Uc(a, e, n);
    },
    useTransition: function() {
      var e = Pc(!1);
      return e = Jp.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), $t().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var l = je, c = $t();
      if (Ye) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), nt === null)
          throw Error(s(349));
        (He & 124) !== 0 || Tp(l, n, a);
      }
      c.memoizedState = a;
      var m = { value: a, getSnapshot: n };
      return c.queue = m, Zp(Np.bind(null, l, m, e), [
        e
      ]), l.flags |= 2048, ui(
        9,
        Bl(),
        Op.bind(
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
      var e = $t(), n = nt.identifierPrefix;
      if (Ye) {
        var a = sr, l = ir;
        a = (l & ~(1 << 32 - Ht(l) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Ll++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = N2++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: qc,
    useFormState: Ip,
    useActionState: Ip,
    useOptimistic: function(e) {
      var n = $t();
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
        je,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: jc,
    useCacheRefresh: function() {
      return $t().memoizedState = j2.bind(
        null,
        je
      );
    }
  }, lm = {
    readContext: It,
    use: Pl,
    useCallback: $p,
    useContext: It,
    useEffect: Fp,
    useImperativeHandle: Xp,
    useInsertionEffect: Gp,
    useLayoutEffect: Vp,
    useMemo: Qp,
    useReducer: Il,
    useRef: qp,
    useState: function() {
      return Il(ur);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var a = bt();
      return Kp(
        a,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Il(ur)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : fs(e),
        n
      ];
    },
    useSyncExternalStore: Ap,
    useId: tm,
    useHostTransitionStatus: qc,
    useFormState: Bp,
    useActionState: Bp,
    useOptimistic: function(e, n) {
      var a = bt();
      return kp(a, Ke, e, n);
    },
    useMemoCache: jc,
    useCacheRefresh: nm
  }, L2 = {
    readContext: It,
    use: Pl,
    useCallback: $p,
    useContext: It,
    useEffect: Fp,
    useImperativeHandle: Xp,
    useInsertionEffect: Gp,
    useLayoutEffect: Vp,
    useMemo: Qp,
    useReducer: Lc,
    useRef: qp,
    useState: function() {
      return Lc(ur);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var a = bt();
      return Ke === null ? Uc(a, e, n) : Kp(
        a,
        Ke.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Lc(ur)[0], n = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : fs(e),
        n
      ];
    },
    useSyncExternalStore: Ap,
    useId: tm,
    useHostTransitionStatus: qc,
    useFormState: Hp,
    useActionState: Hp,
    useOptimistic: function(e, n) {
      var a = bt();
      return Ke !== null ? kp(a, Ke, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: jc,
    useCacheRefresh: nm
  }, ci = null, ps = 0;
  function Zl(e) {
    var n = ps;
    return ps += 1, ci === null && (ci = []), yp(ci, e, n);
  }
  function ms(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Fl(e, n) {
    throw n.$$typeof === b ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function om(e) {
    var n = e._init;
    return n(e._payload);
  }
  function um(e) {
    function n(P, z) {
      if (e) {
        var I = P.deletions;
        I === null ? (P.deletions = [z], P.flags |= 16) : I.push(z);
      }
    }
    function a(P, z) {
      if (!e) return null;
      for (; z !== null; )
        n(P, z), z = z.sibling;
      return null;
    }
    function l(P) {
      for (var z = /* @__PURE__ */ new Map(); P !== null; )
        P.key !== null ? z.set(P.key, P) : z.set(P.index, P), P = P.sibling;
      return z;
    }
    function c(P, z) {
      return P = ar(P, z), P.index = 0, P.sibling = null, P;
    }
    function m(P, z, I) {
      return P.index = I, e ? (I = P.alternate, I !== null ? (I = I.index, I < z ? (P.flags |= 67108866, z) : I) : (P.flags |= 67108866, z)) : (P.flags |= 1048576, z);
    }
    function C(P) {
      return e && P.alternate === null && (P.flags |= 67108866), P;
    }
    function N(P, z, I, Q) {
      return z === null || z.tag !== 6 ? (z = cc(I, P.mode, Q), z.return = P, z) : (z = c(z, I), z.return = P, z);
    }
    function R(P, z, I, Q) {
      var fe = I.type;
      return fe === f ? X(
        P,
        z,
        I.props.children,
        Q,
        I.key
      ) : z !== null && (z.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === q && om(fe) === z.type) ? (z = c(z, I.props), ms(z, I), z.return = P, z) : (z = Al(
        I.type,
        I.key,
        I.props,
        null,
        P.mode,
        Q
      ), ms(z, I), z.return = P, z);
    }
    function H(P, z, I, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== I.containerInfo || z.stateNode.implementation !== I.implementation ? (z = fc(I, P.mode, Q), z.return = P, z) : (z = c(z, I.children || []), z.return = P, z);
    }
    function X(P, z, I, Q, fe) {
      return z === null || z.tag !== 7 ? (z = fa(
        I,
        P.mode,
        Q,
        fe
      ), z.return = P, z) : (z = c(z, I), z.return = P, z);
    }
    function J(P, z, I) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = cc(
          "" + z,
          P.mode,
          I
        ), z.return = P, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case _:
            return I = Al(
              z.type,
              z.key,
              z.props,
              null,
              P.mode,
              I
            ), ms(I, z), I.return = P, I;
          case v:
            return z = fc(
              z,
              P.mode,
              I
            ), z.return = P, z;
          case q:
            var Q = z._init;
            return z = Q(z._payload), J(P, z, I);
        }
        if (ge(z) || $(z))
          return z = fa(
            z,
            P.mode,
            I,
            null
          ), z.return = P, z;
        if (typeof z.then == "function")
          return J(P, Zl(z), I);
        if (z.$$typeof === D)
          return J(
            P,
            Dl(P, z),
            I
          );
        Fl(P, z);
      }
      return null;
    }
    function Z(P, z, I, Q) {
      var fe = z !== null ? z.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return fe !== null ? null : N(P, z, "" + I, Q);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case _:
            return I.key === fe ? R(P, z, I, Q) : null;
          case v:
            return I.key === fe ? H(P, z, I, Q) : null;
          case q:
            return fe = I._init, I = fe(I._payload), Z(P, z, I, Q);
        }
        if (ge(I) || $(I))
          return fe !== null ? null : X(P, z, I, Q, null);
        if (typeof I.then == "function")
          return Z(
            P,
            z,
            Zl(I),
            Q
          );
        if (I.$$typeof === D)
          return Z(
            P,
            z,
            Dl(P, I),
            Q
          );
        Fl(P, I);
      }
      return null;
    }
    function F(P, z, I, Q, fe) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return P = P.get(I) || null, N(z, P, "" + Q, fe);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case _:
            return P = P.get(
              Q.key === null ? I : Q.key
            ) || null, R(z, P, Q, fe);
          case v:
            return P = P.get(
              Q.key === null ? I : Q.key
            ) || null, H(z, P, Q, fe);
          case q:
            var Le = Q._init;
            return Q = Le(Q._payload), F(
              P,
              z,
              I,
              Q,
              fe
            );
        }
        if (ge(Q) || $(Q))
          return P = P.get(I) || null, X(z, P, Q, fe, null);
        if (typeof Q.then == "function")
          return F(
            P,
            z,
            I,
            Zl(Q),
            fe
          );
        if (Q.$$typeof === D)
          return F(
            P,
            z,
            I,
            Dl(z, Q),
            fe
          );
        Fl(z, Q);
      }
      return null;
    }
    function Ce(P, z, I, Q) {
      for (var fe = null, Le = null, me = z, Ee = z = 0, Mt = null; me !== null && Ee < I.length; Ee++) {
        me.index > Ee ? (Mt = me, me = null) : Mt = me.sibling;
        var Fe = Z(
          P,
          me,
          I[Ee],
          Q
        );
        if (Fe === null) {
          me === null && (me = Mt);
          break;
        }
        e && me && Fe.alternate === null && n(P, me), z = m(Fe, z, Ee), Le === null ? fe = Fe : Le.sibling = Fe, Le = Fe, me = Mt;
      }
      if (Ee === I.length)
        return a(P, me), Ye && da(P, Ee), fe;
      if (me === null) {
        for (; Ee < I.length; Ee++)
          me = J(P, I[Ee], Q), me !== null && (z = m(
            me,
            z,
            Ee
          ), Le === null ? fe = me : Le.sibling = me, Le = me);
        return Ye && da(P, Ee), fe;
      }
      for (me = l(me); Ee < I.length; Ee++)
        Mt = F(
          me,
          P,
          Ee,
          I[Ee],
          Q
        ), Mt !== null && (e && Mt.alternate !== null && me.delete(
          Mt.key === null ? Ee : Mt.key
        ), z = m(
          Mt,
          z,
          Ee
        ), Le === null ? fe = Mt : Le.sibling = Mt, Le = Mt);
      return e && me.forEach(function($r) {
        return n(P, $r);
      }), Ye && da(P, Ee), fe;
    }
    function Se(P, z, I, Q) {
      if (I == null) throw Error(s(151));
      for (var fe = null, Le = null, me = z, Ee = z = 0, Mt = null, Fe = I.next(); me !== null && !Fe.done; Ee++, Fe = I.next()) {
        me.index > Ee ? (Mt = me, me = null) : Mt = me.sibling;
        var $r = Z(P, me, Fe.value, Q);
        if ($r === null) {
          me === null && (me = Mt);
          break;
        }
        e && me && $r.alternate === null && n(P, me), z = m($r, z, Ee), Le === null ? fe = $r : Le.sibling = $r, Le = $r, me = Mt;
      }
      if (Fe.done)
        return a(P, me), Ye && da(P, Ee), fe;
      if (me === null) {
        for (; !Fe.done; Ee++, Fe = I.next())
          Fe = J(P, Fe.value, Q), Fe !== null && (z = m(Fe, z, Ee), Le === null ? fe = Fe : Le.sibling = Fe, Le = Fe);
        return Ye && da(P, Ee), fe;
      }
      for (me = l(me); !Fe.done; Ee++, Fe = I.next())
        Fe = F(me, P, Ee, Fe.value, Q), Fe !== null && (e && Fe.alternate !== null && me.delete(Fe.key === null ? Ee : Fe.key), z = m(Fe, z, Ee), Le === null ? fe = Fe : Le.sibling = Fe, Le = Fe);
      return e && me.forEach(function(P_) {
        return n(P, P_);
      }), Ye && da(P, Ee), fe;
    }
    function We(P, z, I, Q) {
      if (typeof I == "object" && I !== null && I.type === f && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case _:
            e: {
              for (var fe = I.key; z !== null; ) {
                if (z.key === fe) {
                  if (fe = I.type, fe === f) {
                    if (z.tag === 7) {
                      a(
                        P,
                        z.sibling
                      ), Q = c(
                        z,
                        I.props.children
                      ), Q.return = P, P = Q;
                      break e;
                    }
                  } else if (z.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === q && om(fe) === z.type) {
                    a(
                      P,
                      z.sibling
                    ), Q = c(z, I.props), ms(Q, I), Q.return = P, P = Q;
                    break e;
                  }
                  a(P, z);
                  break;
                } else n(P, z);
                z = z.sibling;
              }
              I.type === f ? (Q = fa(
                I.props.children,
                P.mode,
                Q,
                I.key
              ), Q.return = P, P = Q) : (Q = Al(
                I.type,
                I.key,
                I.props,
                null,
                P.mode,
                Q
              ), ms(Q, I), Q.return = P, P = Q);
            }
            return C(P);
          case v:
            e: {
              for (fe = I.key; z !== null; ) {
                if (z.key === fe)
                  if (z.tag === 4 && z.stateNode.containerInfo === I.containerInfo && z.stateNode.implementation === I.implementation) {
                    a(
                      P,
                      z.sibling
                    ), Q = c(z, I.children || []), Q.return = P, P = Q;
                    break e;
                  } else {
                    a(P, z);
                    break;
                  }
                else n(P, z);
                z = z.sibling;
              }
              Q = fc(I, P.mode, Q), Q.return = P, P = Q;
            }
            return C(P);
          case q:
            return fe = I._init, I = fe(I._payload), We(
              P,
              z,
              I,
              Q
            );
        }
        if (ge(I))
          return Ce(
            P,
            z,
            I,
            Q
          );
        if ($(I)) {
          if (fe = $(I), typeof fe != "function") throw Error(s(150));
          return I = fe.call(I), Se(
            P,
            z,
            I,
            Q
          );
        }
        if (typeof I.then == "function")
          return We(
            P,
            z,
            Zl(I),
            Q
          );
        if (I.$$typeof === D)
          return We(
            P,
            z,
            Dl(P, I),
            Q
          );
        Fl(P, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint" ? (I = "" + I, z !== null && z.tag === 6 ? (a(P, z.sibling), Q = c(z, I), Q.return = P, P = Q) : (a(P, z), Q = cc(I, P.mode, Q), Q.return = P, P = Q), C(P)) : a(P, z);
    }
    return function(P, z, I, Q) {
      try {
        ps = 0;
        var fe = We(
          P,
          z,
          I,
          Q
        );
        return ci = null, fe;
      } catch (me) {
        if (me === is || me === kl) throw me;
        var Le = sn(29, me, null, P.mode);
        return Le.lanes = Q, Le.return = P, Le;
      } finally {
      }
    };
  }
  var fi = um(!0), cm = um(!1), An = K(null), Gn = null;
  function jr(e) {
    var n = e.alternate;
    se(wt, wt.current & 1), se(An, e), Gn === null && (n === null || si.current !== null || n.memoizedState !== null) && (Gn = e);
  }
  function fm(e) {
    if (e.tag === 22) {
      if (se(wt, wt.current), se(An, e), Gn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Gn = e);
      }
    } else zr();
  }
  function zr() {
    se(wt, wt.current), se(An, An.current);
  }
  function cr(e) {
    ae(An), Gn === e && (Gn = null), ae(wt);
  }
  var wt = K(0);
  function Gl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || jf(a)))
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
  function Fc(e, n, a, l) {
    n = e.memoizedState, a = a(l, n), a = a == null ? n : y({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Gc = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var l = cn(), c = Mr(l);
      c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (fn(n, e, l), ls(n, e, l));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var l = cn(), c = Mr(l);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (fn(n, e, l), ls(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = cn(), l = Mr(a);
      l.tag = 2, n != null && (l.callback = n), n = kr(e, l, a), n !== null && (fn(n, e, a), ls(n, e, a));
    }
  };
  function hm(e, n, a, l, c, m, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, m, C) : n.prototype && n.prototype.isPureReactComponent ? !Ki(a, l) || !Ki(c, m) : !0;
  }
  function dm(e, n, a, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, l), n.state !== e && Gc.enqueueReplaceState(n, n.state, null);
  }
  function ba(e, n) {
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
  var Vl = typeof reportError == "function" ? reportError : function(e) {
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
  function pm(e) {
    Vl(e);
  }
  function mm(e) {
    console.error(e);
  }
  function gm(e) {
    Vl(e);
  }
  function Yl(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function vm(e, n, a) {
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
  function Vc(e, n, a) {
    return a = Mr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Yl(e, n);
    }, a;
  }
  function ym(e) {
    return e = Mr(e), e.tag = 3, e;
  }
  function _m(e, n, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var m = l.value;
      e.payload = function() {
        return c(m);
      }, e.callback = function() {
        vm(n, a, l);
      };
    }
    var C = a.stateNode;
    C !== null && typeof C.componentDidCatch == "function" && (e.callback = function() {
      vm(n, a, l), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var N = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: N !== null ? N : ""
      });
    });
  }
  function P2(e, n, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = a.alternate, n !== null && ns(
        n,
        a,
        c,
        !0
      ), a = An.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Gn === null ? vf() : a.alternate === null && dt === 0 && (dt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === Sc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), _f(e, l, c)), !1;
          case 22:
            return a.flags |= 65536, l === Sc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), _f(e, l, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return _f(e, l, c), vf(), !1;
    }
    if (Ye)
      return n = An.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== pc && (e = Error(s(422), { cause: l }), ts(xn(e, a)))) : (l !== pc && (n = Error(s(423), {
        cause: l
      }), ts(
        xn(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = xn(l, a), c = Vc(
        e.stateNode,
        l,
        c
      ), Cc(e, c), dt !== 4 && (dt = 2)), !1;
    var m = Error(s(520), { cause: l });
    if (m = xn(m, a), xs === null ? xs = [m] : xs.push(m), dt !== 4 && (dt = 2), n === null) return !0;
    l = xn(l, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Vc(a.stateNode, l, e), Cc(a, e), !1;
        case 1:
          if (n = a.type, m = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Hr === null || !Hr.has(m))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = ym(c), _m(
              c,
              e,
              a,
              l
            ), Cc(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var bm = Error(s(461)), Nt = !1;
  function kt(e, n, a, l) {
    n.child = e === null ? cm(n, null, a, l) : fi(
      n,
      e.child,
      a,
      l
    );
  }
  function Sm(e, n, a, l, c) {
    a = a.render;
    var m = n.ref;
    if ("ref" in l) {
      var C = {};
      for (var N in l)
        N !== "ref" && (C[N] = l[N]);
    } else C = l;
    return va(n), l = Nc(
      e,
      n,
      a,
      C,
      m,
      c
    ), N = Dc(), e !== null && !Nt ? (Mc(e, n, c), fr(e, n, c)) : (Ye && N && hc(n), n.flags |= 1, kt(e, n, l, c), n.child);
  }
  function xm(e, n, a, l, c) {
    if (e === null) {
      var m = a.type;
      return typeof m == "function" && !uc(m) && m.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = m, Em(
        e,
        n,
        m,
        l,
        c
      )) : (e = Al(
        a.type,
        null,
        l,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (m = e.child, !ef(e, c)) {
      var C = m.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ki, a(C, l) && e.ref === n.ref)
        return fr(e, n, c);
    }
    return n.flags |= 1, e = ar(m, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Em(e, n, a, l, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (Ki(m, l) && e.ref === n.ref)
        if (Nt = !1, n.pendingProps = l = m, ef(e, c))
          (e.flags & 131072) !== 0 && (Nt = !0);
        else
          return n.lanes = e.lanes, fr(e, n, c);
    }
    return Yc(
      e,
      n,
      a,
      l,
      c
    );
  }
  function Cm(e, n, a) {
    var l = n.pendingProps, c = l.children, m = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (l = m !== null ? m.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, m = 0; c !== null; )
            m = m | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = m & ~l;
        } else n.childLanes = 0, n.child = null;
        return wm(
          e,
          n,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ml(
          n,
          m !== null ? m.cachePool : null
        ), m !== null ? Ep(n, m) : Ac(), fm(n);
      else
        return n.lanes = n.childLanes = 536870912, wm(
          e,
          n,
          m !== null ? m.baseLanes | a : a,
          a
        );
    } else
      m !== null ? (Ml(n, m.cachePool), Ep(n, m), zr(), n.memoizedState = null) : (e !== null && Ml(n, null), Ac(), zr());
    return kt(e, n, c, a), n.child;
  }
  function wm(e, n, a, l) {
    var c = bc();
    return c = c === null ? null : { parent: Ct._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && Ml(n, null), Ac(), fm(n), e !== null && ns(e, n, l, !0), null;
  }
  function Xl(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Yc(e, n, a, l, c) {
    return va(n), a = Nc(
      e,
      n,
      a,
      l,
      void 0,
      c
    ), l = Dc(), e !== null && !Nt ? (Mc(e, n, c), fr(e, n, c)) : (Ye && l && hc(n), n.flags |= 1, kt(e, n, a, c), n.child);
  }
  function Am(e, n, a, l, c, m) {
    return va(n), n.updateQueue = null, a = wp(
      n,
      l,
      a,
      c
    ), Cp(e), l = Dc(), e !== null && !Nt ? (Mc(e, n, m), fr(e, n, m)) : (Ye && l && hc(n), n.flags |= 1, kt(e, n, a, m), n.child);
  }
  function Tm(e, n, a, l, c) {
    if (va(n), n.stateNode === null) {
      var m = ti, C = a.contextType;
      typeof C == "object" && C !== null && (m = It(C)), m = new a(l, m), n.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Gc, n.stateNode = m, m._reactInternals = n, m = n.stateNode, m.props = l, m.state = n.memoizedState, m.refs = {}, xc(n), C = a.contextType, m.context = typeof C == "object" && C !== null ? It(C) : ti, m.state = n.memoizedState, C = a.getDerivedStateFromProps, typeof C == "function" && (Fc(
        n,
        a,
        C,
        l
      ), m.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (C = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), C !== m.state && Gc.enqueueReplaceState(m, m.state, null), us(n, l, m, c), os(), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      m = n.stateNode;
      var N = n.memoizedProps, R = ba(a, N);
      m.props = R;
      var H = m.context, X = a.contextType;
      C = ti, typeof X == "object" && X !== null && (C = It(X));
      var J = a.getDerivedStateFromProps;
      X = typeof J == "function" || typeof m.getSnapshotBeforeUpdate == "function", N = n.pendingProps !== N, X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (N || H !== C) && dm(
        n,
        m,
        l,
        C
      ), Dr = !1;
      var Z = n.memoizedState;
      m.state = Z, us(n, l, m, c), os(), H = n.memoizedState, N || Z !== H || Dr ? (typeof J == "function" && (Fc(
        n,
        a,
        J,
        l
      ), H = n.memoizedState), (R = Dr || hm(
        n,
        a,
        R,
        l,
        Z,
        H,
        C
      )) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = H), m.props = l, m.state = H, m.context = C, l = R) : (typeof m.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      m = n.stateNode, Ec(e, n), C = n.memoizedProps, X = ba(a, C), m.props = X, J = n.pendingProps, Z = m.context, H = a.contextType, R = ti, typeof H == "object" && H !== null && (R = It(H)), N = a.getDerivedStateFromProps, (H = typeof N == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== J || Z !== R) && dm(
        n,
        m,
        l,
        R
      ), Dr = !1, Z = n.memoizedState, m.state = Z, us(n, l, m, c), os();
      var F = n.memoizedState;
      C !== J || Z !== F || Dr || e !== null && e.dependencies !== null && Nl(e.dependencies) ? (typeof N == "function" && (Fc(
        n,
        a,
        N,
        l
      ), F = n.memoizedState), (X = Dr || hm(
        n,
        a,
        X,
        l,
        Z,
        F,
        R
      ) || e !== null && e.dependencies !== null && Nl(e.dependencies)) ? (H || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(l, F, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        l,
        F,
        R
      )), typeof m.componentDidUpdate == "function" && (n.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = F), m.props = l, m.state = F, m.context = R, l = X) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return m = l, Xl(e, n), l = (n.flags & 128) !== 0, m || l ? (m = n.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : m.render(), n.flags |= 1, e !== null && l ? (n.child = fi(
      n,
      e.child,
      null,
      c
    ), n.child = fi(
      n,
      null,
      a,
      c
    )) : kt(e, n, a, c), n.memoizedState = m.state, e = n.child) : e = fr(
      e,
      n,
      c
    ), e;
  }
  function Om(e, n, a, l) {
    return es(), n.flags |= 256, kt(e, n, a, l), n.child;
  }
  var Xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $c(e) {
    return { baseLanes: e, cachePool: mp() };
  }
  function Qc(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Tn), e;
  }
  function Nm(e, n, a) {
    var l = n.pendingProps, c = !1, m = (n.flags & 128) !== 0, C;
    if ((C = m) || (C = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), C && (c = !0, n.flags &= -129), C = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ye) {
        if (c ? jr(n) : zr(), Ye) {
          var N = ht, R;
          if (R = N) {
            e: {
              for (R = N, N = Fn; R.nodeType !== 8; ) {
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
              treeContext: ha !== null ? { id: ir, overflow: sr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = sn(
              18,
              null,
              null,
              0
            ), R.stateNode = N, R.return = n, n.child = R, Zt = n, ht = null, R = !0) : R = !1;
          }
          R || ma(n);
        }
        if (N = n.memoizedState, N !== null && (N = N.dehydrated, N !== null))
          return jf(N) ? n.lanes = 32 : n.lanes = 536870912, null;
        cr(n);
      }
      return N = l.children, l = l.fallback, c ? (zr(), c = n.mode, N = $l(
        { mode: "hidden", children: N },
        c
      ), l = fa(
        l,
        c,
        a,
        null
      ), N.return = n, l.return = n, N.sibling = l, n.child = N, c = n.child, c.memoizedState = $c(a), c.childLanes = Qc(
        e,
        C,
        a
      ), n.memoizedState = Xc, l) : (jr(n), Kc(n, N));
    }
    if (R = e.memoizedState, R !== null && (N = R.dehydrated, N !== null)) {
      if (m)
        n.flags & 256 ? (jr(n), n.flags &= -257, n = Jc(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (zr(), n.child = e.child, n.flags |= 128, n = null) : (zr(), c = l.fallback, N = n.mode, l = $l(
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
        ), l = n.child, l.memoizedState = $c(a), l.childLanes = Qc(
          e,
          C,
          a
        ), n.memoizedState = Xc, n = c);
      else if (jr(n), jf(N)) {
        if (C = N.nextSibling && N.nextSibling.dataset, C) var H = C.dgst;
        C = H, l = Error(s(419)), l.stack = "", l.digest = C, ts({ value: l, source: null, stack: null }), n = Jc(
          e,
          n,
          a
        );
      } else if (Nt || ns(e, n, a, !1), C = (a & e.childLanes) !== 0, Nt || C) {
        if (C = nt, C !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : ju(l), l = (l & (C.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== R.retryLane))
          throw R.retryLane = l, ei(e, l), fn(C, e, l), bm;
        N.data === "$?" || vf(), n = Jc(
          e,
          n,
          a
        );
      } else
        N.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = R.treeContext, ht = Ln(
          N.nextSibling
        ), Zt = n, Ye = !0, pa = null, Fn = !1, e !== null && (Cn[wn++] = ir, Cn[wn++] = sr, Cn[wn++] = ha, ir = e.id, sr = e.overflow, ha = n), n = Kc(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (zr(), c = l.fallback, N = n.mode, R = e.child, H = R.sibling, l = ar(R, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = R.subtreeFlags & 65011712, H !== null ? c = ar(H, c) : (c = fa(
      c,
      N,
      a,
      null
    ), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, N = e.child.memoizedState, N === null ? N = $c(a) : (R = N.cachePool, R !== null ? (H = Ct._currentValue, R = R.parent !== H ? { parent: H, pool: H } : R) : R = mp(), N = {
      baseLanes: N.baseLanes | a,
      cachePool: R
    }), c.memoizedState = N, c.childLanes = Qc(
      e,
      C,
      a
    ), n.memoizedState = Xc, l) : (jr(n), a = e.child, e = a.sibling, a = ar(a, {
      mode: "visible",
      children: l.children
    }), a.return = n, a.sibling = null, e !== null && (C = n.deletions, C === null ? (n.deletions = [e], n.flags |= 16) : C.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Kc(e, n) {
    return n = $l(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function $l(e, n) {
    return e = sn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Jc(e, n, a) {
    return fi(n, e.child, null, a), e = Kc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Dm(e, n, a) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), gc(e.return, n, a);
  }
  function Wc(e, n, a, l, c) {
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
  function Mm(e, n, a) {
    var l = n.pendingProps, c = l.revealOrder, m = l.tail;
    if (kt(e, n, l.children, a), l = wt.current, (l & 2) !== 0)
      l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Dm(e, a, n);
          else if (e.tag === 19)
            Dm(e, a, n);
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
          e = a.alternate, e !== null && Gl(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), Wc(
          n,
          !1,
          c,
          a,
          m
        );
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Gl(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        Wc(
          n,
          !0,
          a,
          null,
          m
        );
        break;
      case "together":
        Wc(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function fr(e, n, a) {
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
      for (e = n.child, a = ar(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ar(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function ef(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Nl(e)));
  }
  function I2(e, n, a) {
    switch (n.tag) {
      case 3:
        _e(n, n.stateNode.containerInfo), Nr(n, Ct, e.memoizedState.cache), es();
        break;
      case 27:
      case 5:
        at(n);
        break;
      case 4:
        _e(n, n.stateNode.containerInfo);
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
          return l.dehydrated !== null ? (jr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Nm(e, n, a) : (jr(n), e = fr(
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
            return Mm(
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
        return n.lanes = 0, Cm(e, n, a);
      case 24:
        Nr(n, Ct, e.memoizedState.cache);
    }
    return fr(e, n, a);
  }
  function km(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Nt = !0;
      else {
        if (!ef(e, a) && (n.flags & 128) === 0)
          return Nt = !1, I2(
            e,
            n,
            a
          );
        Nt = (e.flags & 131072) !== 0;
      }
    else
      Nt = !1, Ye && (n.flags & 1048576) !== 0 && op(n, Ol, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType, c = l._init;
          if (l = c(l._payload), n.type = l, typeof l == "function")
            uc(l) ? (e = ba(l, e), n.tag = 1, n = Tm(
              null,
              n,
              l,
              e,
              a
            )) : (n.tag = 0, n = Yc(
              null,
              n,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (c = l.$$typeof, c === E) {
                n.tag = 11, n = Sm(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = xm(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = he(l) || l, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Yc(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 1:
        return l = n.type, c = ba(
          l,
          n.pendingProps
        ), Tm(
          e,
          n,
          l,
          c,
          a
        );
      case 3:
        e: {
          if (_e(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = n.pendingProps;
          var m = n.memoizedState;
          c = m.element, Ec(e, n), us(n, l, null, a);
          var C = n.memoizedState;
          if (l = C.cache, Nr(n, Ct, l), l !== m.cache && vc(
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
              n = Om(
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
              ), ts(c), n = Om(
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
              for (ht = Ln(e.firstChild), Zt = n, Ye = !0, pa = null, Fn = !0, a = cm(
                n,
                null,
                l,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (es(), l === c) {
              n = fr(
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
        return Xl(e, n), e === null ? (a = Lg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Ye || (a = n.type, e = n.pendingProps, l = uo(
          Y.current
        ).createElement(a), l[Pt] = n, l[Yt] = e, jt(l, a, e), Ot(l), n.stateNode = l) : n.memoizedState = Lg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return at(n), e === null && Ye && (l = n.stateNode = Rg(
          n.type,
          n.pendingProps,
          Y.current
        ), Zt = n, Fn = !0, c = ht, Fr(n.type) ? (zf = c, ht = Ln(
          l.firstChild
        )) : ht = c), kt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Xl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ye && ((c = l = ht) && (l = h_(
          l,
          n.type,
          n.pendingProps,
          Fn
        ), l !== null ? (n.stateNode = l, Zt = n, ht = Ln(
          l.firstChild
        ), Fn = !1, c = !0) : c = !1), c || ma(n)), at(n), c = n.type, m = n.pendingProps, C = e !== null ? e.memoizedProps : null, l = m.children, Mf(c, m) ? l = null : C !== null && Mf(c, C) && (n.flags |= 32), n.memoizedState !== null && (c = Nc(
          e,
          n,
          D2,
          null,
          null,
          a
        ), Ms._currentValue = c), Xl(e, n), kt(e, n, l, a), n.child;
      case 6:
        return e === null && Ye && ((e = a = ht) && (a = d_(
          a,
          n.pendingProps,
          Fn
        ), a !== null ? (n.stateNode = a, Zt = n, ht = null, e = !0) : e = !1), e || ma(n)), null;
      case 13:
        return Nm(e, n, a);
      case 4:
        return _e(
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
        return Sm(
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
        return xm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return Em(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return Mm(e, n, a);
      case 31:
        return l = n.pendingProps, a = n.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = $l(
          l,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = ar(e.child, l), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return Cm(e, n, a);
      case 24:
        return va(n), l = It(Ct), e === null ? (c = bc(), c === null && (c = nt, m = yc(), c.pooledCache = m, m.refCount++, m !== null && (c.pooledCacheLanes |= a), c = m), n.memoizedState = {
          parent: l,
          cache: c
        }, xc(n), Nr(n, Ct, c)) : ((e.lanes & a) !== 0 && (Ec(e, n), us(n, null, null, a), os()), c = e.memoizedState, m = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Nr(n, Ct, l)) : (l = m.cache, Nr(n, Ct, l), l !== c.cache && vc(
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
  function Rm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Hg(n)) {
      if (n = An.current, n !== null && ((He & 4194048) === He ? Gn !== null : (He & 62914560) !== He && (He & 536870912) === 0 || n !== Gn))
        throw ss = Sc, gp;
      e.flags |= 8192;
    }
  }
  function Ql(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? fd() : 536870912, e.lanes |= n, mi |= n);
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
  function B2(e, n, a) {
    var l = n.pendingProps;
    switch (dc(n), n.tag) {
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
        return a = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), or(Ct), Ge(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Wi(n) ? hr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, fp())), ut(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (hr(n), a !== null ? (ut(n), Rm(n, a)) : (ut(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (hr(n), ut(n), Rm(n, a)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== l && hr(n), ut(n), n.flags &= -16777217), null;
      case 27:
        L(n), a = Y.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          e = le.current, Wi(n) ? up(n) : (e = Rg(c, l, a), n.stateNode = e, hr(n));
        }
        return ut(n), null;
      case 5:
        if (L(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          if (e = le.current, Wi(n))
            up(n);
          else {
            switch (c = uo(
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
            e[Pt] = n, e[Yt] = l;
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
            e[Pt] = n, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Ag(e.nodeValue, a)), e || ma(n);
          } else
            e = uo(e).createTextNode(
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
            c = fp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (cr(n), n) : (cr(n), null);
        }
        if (cr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = n.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var m = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (m = l.memoizedState.cachePool.pool), m !== c && (l.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Ql(n, n.updateQueue), ut(n), null;
      case 4:
        return Ge(), e === null && Af(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return or(n.type), ut(n), null;
      case 19:
        if (ae(wt), c = n.memoizedState, c === null) return ut(n), null;
        if (l = (n.flags & 128) !== 0, m = c.rendering, m === null)
          if (l) gs(c, !1);
          else {
            if (dt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (m = Gl(e), m !== null) {
                  for (n.flags |= 128, gs(c, !1), e = m.updateQueue, n.updateQueue = e, Ql(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    lp(a, e), a = a.sibling;
                  return se(
                    wt,
                    wt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && Oe() > Wl && (n.flags |= 128, l = !0, gs(c, !1), n.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Gl(m), e !== null) {
              if (n.flags |= 128, l = !0, e = e.updateQueue, n.updateQueue = e, Ql(n, e), gs(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Ye)
                return ut(n), null;
            } else
              2 * Oe() - c.renderingStartTime > Wl && a !== 536870912 && (n.flags |= 128, l = !0, gs(c, !1), n.lanes = 4194304);
          c.isBackwards ? (m.sibling = n.child, n.child = m) : (e = c.last, e !== null ? e.sibling = m : n.child = m, c.last = m);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Oe(), n.sibling = null, e = wt.current, se(wt, l ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return cr(n), Tc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), a = n.updateQueue, a !== null && Ql(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), e !== null && ae(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), or(Ct), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function U2(e, n) {
    switch (dc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return or(Ct), Ge(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return L(n), null;
      case 13:
        if (cr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          es();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ae(wt), null;
      case 4:
        return Ge(), null;
      case 10:
        return or(n.type), null;
      case 22:
      case 23:
        return cr(n), Tc(), e !== null && ae(ya), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return or(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jm(e, n) {
    switch (dc(n), n.tag) {
      case 3:
        or(Ct), Ge();
        break;
      case 26:
      case 27:
      case 5:
        L(n);
        break;
      case 4:
        Ge();
        break;
      case 13:
        cr(n);
        break;
      case 19:
        ae(wt);
        break;
      case 10:
        or(n.type);
        break;
      case 22:
      case 23:
        cr(n), Tc(), e !== null && ae(ya);
        break;
      case 24:
        or(Ct);
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
  function zm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        xp(n, a);
      } catch (l) {
        tt(e, e.return, l);
      }
    }
  }
  function Lm(e, n, a) {
    a.props = ba(
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
  function Vn(e, n) {
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
  function Pm(e) {
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
  function tf(e, n, a) {
    try {
      var l = e.stateNode;
      l_(l, e.type, a, n), l[Yt] = n;
    } catch (c) {
      tt(e, e.return, c);
    }
  }
  function Im(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fr(e.type) || e.tag === 4;
  }
  function nf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Im(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function rf(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = oo));
    else if (l !== 4 && (l === 27 && Fr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (rf(e, n, a), e = e.sibling; e !== null; )
        rf(e, n, a), e = e.sibling;
  }
  function Kl(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Fr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Kl(e, n, a), e = e.sibling; e !== null; )
        Kl(e, n, a), e = e.sibling;
  }
  function Bm(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      jt(n, l, a), n[Pt] = e, n[Yt] = a;
    } catch (m) {
      tt(e, e.return, m);
    }
  }
  var dr = !1, vt = !1, af = !1, Um = typeof WeakSet == "function" ? WeakSet : Set, Dt = null;
  function H2(e, n) {
    if (e = e.containerInfo, Nf = go, e = Kd(e), nc(e)) {
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
            var C = 0, N = -1, R = -1, H = 0, X = 0, J = e, Z = null;
            t: for (; ; ) {
              for (var F; J !== a || c !== 0 && J.nodeType !== 3 || (N = C + c), J !== m || l !== 0 && J.nodeType !== 3 || (R = C + l), J.nodeType === 3 && (C += J.nodeValue.length), (F = J.firstChild) !== null; )
                Z = J, J = F;
              for (; ; ) {
                if (J === e) break t;
                if (Z === a && ++H === c && (N = C), Z === m && ++X === l && (R = C), (F = J.nextSibling) !== null) break;
                J = Z, Z = J.parentNode;
              }
              J = F;
            }
            a = N === -1 || R === -1 ? null : { start: N, end: R };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Df = { focusedElem: e, selectionRange: a }, go = !1, Dt = n; Dt !== null; )
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
                  var Ce = ba(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Ce,
                    m
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Se) {
                  tt(
                    a,
                    a.return,
                    Se
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Rf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rf(e);
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
  function Hm(e, n, a) {
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
            var c = ba(
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
        l & 64 && zm(a), l & 512 && ys(a, a.return);
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
            xp(e, n);
          } catch (C) {
            tt(a, a.return, C);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Bm(a);
      case 26:
      case 5:
        Pr(e, a), n === null && l & 4 && Pm(a), l & 512 && ys(a, a.return);
        break;
      case 12:
        Pr(e, a);
        break;
      case 13:
        Pr(e, a), l & 4 && Fm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Q2.bind(
          null,
          a
        ), p_(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || dr, !l) {
          n = n !== null && n.memoizedState !== null || vt, c = dr;
          var m = vt;
          dr = l, (vt = n) && !m ? Ir(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), dr = c, vt = m;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, a);
    }
  }
  function qm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, qm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Pu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, Qt = !1;
  function pr(e, n, a) {
    for (a = a.child; a !== null; )
      Zm(e, n, a), a = a.sibling;
  }
  function Zm(e, n, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(er, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        vt || Vn(a, n), pr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        vt || Vn(a, n);
        var l = st, c = Qt;
        Fr(a.type) && (st = a.stateNode, Qt = !1), pr(
          e,
          n,
          a
        ), Ts(a.stateNode), st = l, Qt = c;
        break;
      case 5:
        vt || Vn(a, n);
      case 6:
        if (l = st, c = Qt, st = null, pr(
          e,
          n,
          a
        ), st = l, Qt = c, st !== null)
          if (Qt)
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
        st !== null && (Qt ? (e = st, Mg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), zs(e)) : Mg(st, a.stateNode));
        break;
      case 4:
        l = st, c = Qt, st = a.stateNode.containerInfo, Qt = !0, pr(
          e,
          n,
          a
        ), st = l, Qt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || Lr(2, a, n), vt || Lr(4, a, n), pr(
          e,
          n,
          a
        );
        break;
      case 1:
        vt || (Vn(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && Lm(
          a,
          n,
          l
        )), pr(
          e,
          n,
          a
        );
        break;
      case 21:
        pr(
          e,
          n,
          a
        );
        break;
      case 22:
        vt = (l = vt) || a.memoizedState !== null, pr(
          e,
          n,
          a
        ), vt = l;
        break;
      default:
        pr(
          e,
          n,
          a
        );
    }
  }
  function Fm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zs(e);
      } catch (a) {
        tt(n, n.return, a);
      }
  }
  function q2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Um()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Um()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function sf(e, n) {
    var a = q2(e);
    n.forEach(function(l) {
      var c = K2.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function ln(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], m = e, C = n, N = C;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 27:
              if (Fr(N.type)) {
                st = N.stateNode, Qt = !1;
                break e;
              }
              break;
            case 5:
              st = N.stateNode, Qt = !1;
              break e;
            case 3:
            case 4:
              st = N.stateNode.containerInfo, Qt = !0;
              break e;
          }
          N = N.return;
        }
        if (st === null) throw Error(s(160));
        Zm(m, C, c), st = null, Qt = !1, m = c.alternate, m !== null && (m.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Gm(n, e), n = n.sibling;
  }
  var zn = null;
  function Gm(e, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(n, e), on(e), l & 4 && (Lr(3, e, e.return), vs(3, e), Lr(5, e, e.return));
        break;
      case 1:
        ln(n, e), on(e), l & 512 && (vt || a === null || Vn(a, a.return)), l & 64 && dr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = zn;
        if (ln(n, e), on(e), l & 512 && (vt || a === null || Vn(a, a.return)), l & 4) {
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
                      var C = Bg(
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
                      if (C = Bg(
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
                Ug(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ig(
                c,
                l,
                e.memoizedProps
              );
          else
            m !== l ? (m === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : m.count--, l === null ? Ug(
              c,
              e.type,
              e.stateNode
            ) : Ig(
              c,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && tf(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        ln(n, e), on(e), l & 512 && (vt || a === null || Vn(a, a.return)), a !== null && l & 4 && tf(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (ln(n, e), on(e), l & 512 && (vt || a === null || Vn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ya(c, "");
          } catch (F) {
            tt(e, e.return, F);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, tf(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), l & 1024 && (af = !0);
        break;
      case 6:
        if (ln(n, e), on(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (F) {
            tt(e, e.return, F);
          }
        }
        break;
      case 3:
        if (ho = null, c = zn, zn = co(n.containerInfo), ln(n, e), zn = c, on(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            zs(n.containerInfo);
          } catch (F) {
            tt(e, e.return, F);
          }
        af && (af = !1, Vm(e));
        break;
      case 4:
        l = zn, zn = co(
          e.stateNode.containerInfo
        ), ln(n, e), on(e), zn = l;
        break;
      case 12:
        ln(n, e), on(e);
        break;
      case 13:
        ln(n, e), on(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hf = Oe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, sf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = a !== null && a.memoizedState !== null, H = dr, X = vt;
        if (dr = H || c, vt = X || R, ln(n, e), vt = X, dr = H, on(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || R || dr || vt || Sa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                R = a = n;
                try {
                  if (m = R.stateNode, c)
                    C = m.style, typeof C.setProperty == "function" ? C.setProperty("display", "none", "important") : C.display = "none";
                  else {
                    N = R.stateNode;
                    var J = R.memoizedProps.style, Z = J != null && J.hasOwnProperty("display") ? J.display : null;
                    N.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (F) {
                  tt(R, R.return, F);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = c ? "" : R.memoizedProps;
                } catch (F) {
                  tt(R, R.return, F);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, sf(e, a))));
        break;
      case 19:
        ln(n, e), on(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, sf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(n, e), on(e);
    }
  }
  function on(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Im(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, m = nf(e);
            Kl(e, m, c);
            break;
          case 5:
            var C = a.stateNode;
            a.flags & 32 && (Ya(C, ""), a.flags &= -33);
            var N = nf(e);
            Kl(e, N, C);
            break;
          case 3:
          case 4:
            var R = a.stateNode.containerInfo, H = nf(e);
            rf(
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
  function Vm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Vm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Hm(e, n.alternate, n), n = n.sibling;
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
          Vn(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Lm(
            n,
            n.return,
            a
          ), Sa(n);
          break;
        case 27:
          Ts(n.stateNode);
        case 26:
        case 5:
          Vn(n, n.return), Sa(n);
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
                  Sp(R[c], N);
            } catch (H) {
              tt(l, l.return, H);
            }
          }
          a && C & 64 && zm(m), ys(m, m.return);
          break;
        case 27:
          Bm(m);
        case 26:
        case 5:
          Ir(
            c,
            m,
            a
          ), a && l === null && C & 4 && Pm(m), ys(m, m.return);
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
          ), a && C & 4 && Fm(c, m);
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
  function lf(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && rs(a));
  }
  function of(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e));
  }
  function Yn(e, n, a, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ym(
          e,
          n,
          a,
          l
        ), n = n.sibling;
  }
  function Ym(e, n, a, l) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Yn(
          e,
          n,
          a,
          l
        ), c & 2048 && vs(9, n);
        break;
      case 1:
        Yn(
          e,
          n,
          a,
          l
        );
        break;
      case 3:
        Yn(
          e,
          n,
          a,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e)));
        break;
      case 12:
        if (c & 2048) {
          Yn(
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
          Yn(
            e,
            n,
            a,
            l
          );
        break;
      case 13:
        Yn(
          e,
          n,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        m = n.stateNode, C = n.alternate, n.memoizedState !== null ? m._visibility & 2 ? Yn(
          e,
          n,
          a,
          l
        ) : _s(e, n) : m._visibility & 2 ? Yn(
          e,
          n,
          a,
          l
        ) : (m._visibility |= 2, hi(
          e,
          n,
          a,
          l,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && lf(C, n);
        break;
      case 24:
        Yn(
          e,
          n,
          a,
          l
        ), c & 2048 && of(n.alternate, n);
        break;
      default:
        Yn(
          e,
          n,
          a,
          l
        );
    }
  }
  function hi(e, n, a, l, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var m = e, C = n, N = a, R = l, H = C.flags;
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          hi(
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
          C.memoizedState !== null ? X._visibility & 2 ? hi(
            m,
            C,
            N,
            R,
            c
          ) : _s(
            m,
            C
          ) : (X._visibility |= 2, hi(
            m,
            C,
            N,
            R,
            c
          )), c && H & 2048 && lf(
            C.alternate,
            C
          );
          break;
        case 24:
          hi(
            m,
            C,
            N,
            R,
            c
          ), c && H & 2048 && of(C.alternate, C);
          break;
        default:
          hi(
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
  function _s(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e, l = n, c = l.flags;
        switch (l.tag) {
          case 22:
            _s(a, l), c & 2048 && lf(
              l.alternate,
              l
            );
            break;
          case 24:
            _s(a, l), c & 2048 && of(l.alternate, l);
            break;
          default:
            _s(a, l);
        }
        n = n.sibling;
      }
  }
  var bs = 8192;
  function di(e) {
    if (e.subtreeFlags & bs)
      for (e = e.child; e !== null; )
        Xm(e), e = e.sibling;
  }
  function Xm(e) {
    switch (e.tag) {
      case 26:
        di(e), e.flags & bs && e.memoizedState !== null && T_(
          zn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(e);
        break;
      case 3:
      case 4:
        var n = zn;
        zn = co(e.stateNode.containerInfo), di(e), zn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = bs, bs = 16777216, di(e), bs = n) : di(e));
        break;
      default:
        di(e);
    }
  }
  function $m(e) {
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
          Dt = l, Km(
            l,
            e
          );
        }
      $m(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Qm(e), e = e.sibling;
  }
  function Qm(e) {
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
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Jl(e)) : Ss(e);
        break;
      default:
        Ss(e);
    }
  }
  function Jl(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          Dt = l, Km(
            l,
            e
          );
        }
      $m(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, n, n.return), Jl(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Jl(n));
          break;
        default:
          Jl(n);
      }
      e = e.sibling;
    }
  }
  function Km(e, n) {
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
          if (qm(l), l === a) {
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
  var Z2 = {
    getCacheForType: function(e) {
      var n = It(Ct), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, F2 = typeof WeakMap == "function" ? WeakMap : Map, $e = 0, nt = null, Pe = null, He = 0, Qe = 0, un = null, Br = !1, pi = !1, uf = !1, mr = 0, dt = 0, Ur = 0, xa = 0, cf = 0, Tn = 0, mi = 0, xs = null, Kt = null, ff = !1, hf = 0, Wl = 1 / 0, eo = null, Hr = null, Rt = 0, qr = null, gi = null, vi = 0, df = 0, pf = null, Jm = null, Es = 0, mf = null;
  function cn() {
    if (($e & 2) !== 0 && He !== 0)
      return He & -He;
    if (U.T !== null) {
      var e = ai;
      return e !== 0 ? e : xf();
    }
    return pd();
  }
  function Wm() {
    Tn === 0 && (Tn = (He & 536870912) === 0 || Ye ? Ba() : 536870912);
    var e = An.current;
    return e !== null && (e.flags |= 32), Tn;
  }
  function fn(e, n, a) {
    (e === nt && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null) && (yi(e, 0), Zr(
      e,
      He,
      Tn,
      !1
    )), Hi(e, a), (($e & 2) === 0 || e !== nt) && (e === nt && (($e & 2) === 0 && (xa |= a), dt === 4 && Zr(
      e,
      He,
      Tn,
      !1
    )), Xn(e));
  }
  function eg(e, n, a) {
    if (($e & 6) !== 0) throw Error(s(327));
    var l = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Vt(e, n), c = l ? Y2(e, n) : yf(e, n, !0), m = l;
    do {
      if (c === 0) {
        pi && !l && Zr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, m && !G2(a)) {
          c = yf(e, n, !1), m = !1;
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
              if (R && (yi(N, C).flags |= 256), C = yf(
                N,
                C,
                !1
              ), C !== 2) {
                if (uf && !R) {
                  N.errorRecoveryDisabledLanes |= m, xa |= m, c = 4;
                  break e;
                }
                m = Kt, Kt = c, m !== null && (Kt === null ? Kt = m : Kt.push.apply(
                  Kt,
                  m
                ));
              }
              c = C;
            }
            if (m = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          yi(e, 0), Zr(e, n, 0, !0);
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
              Zr(
                l,
                n,
                Tn,
                !Br
              );
              break e;
            case 2:
              Kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = hf + 300 - Oe(), 10 < c)) {
            if (Zr(
              l,
              n,
              Tn,
              !Br
            ), qt(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Ng(
              tg.bind(
                null,
                l,
                a,
                Kt,
                eo,
                ff,
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
          tg(
            l,
            a,
            Kt,
            eo,
            ff,
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
    Xn(e);
  }
  function tg(e, n, a, l, c, m, C, N, R, H, X, J, Z, F) {
    if (e.timeoutHandle = -1, J = n.subtreeFlags, (J & 8192 || (J & 16785408) === 16785408) && (Ds = { stylesheets: null, count: 0, unsuspend: A_ }, Xm(n), J = O_(), J !== null)) {
      e.cancelPendingCommit = J(
        og.bind(
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
          Z,
          F
        )
      ), Zr(e, m, C, !H);
      return;
    }
    og(
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
  function G2(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var c = a[l], m = c.getSnapshot;
          c = c.value;
          try {
            if (!an(m(), c)) return !1;
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
  function Zr(e, n, a, l) {
    n &= ~cf, n &= ~xa, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var m = 31 - Ht(c), C = 1 << m;
      l[m] = -1, c &= ~C;
    }
    a !== 0 && hd(e, a, n);
  }
  function to() {
    return ($e & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function gf() {
    if (Pe !== null) {
      if (Qe === 0)
        var e = Pe.return;
      else
        e = Pe, lr = ga = null, kc(e), ci = null, ps = 0, e = Pe;
      for (; e !== null; )
        jm(e.alternate, e), e = e.return;
      Pe = null;
    }
  }
  function yi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, u_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), gf(), nt = e, Pe = a = ar(e.current, null), He = n, Qe = 0, un = null, Br = !1, pi = Vt(e, n), uf = !1, mi = Tn = cf = xa = Ur = dt = 0, Kt = xs = null, ff = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - Ht(l), m = 1 << c;
        n |= e[c], l &= ~m;
      }
    return mr = n, El(), a;
  }
  function ng(e, n) {
    je = null, U.H = ql, n === is || n === kl ? (n = _p(), Qe = 3) : n === gp ? (n = _p(), Qe = 4) : Qe = n === bm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, un = n, Pe === null && (dt = 1, Yl(
      e,
      xn(n, e.current)
    ));
  }
  function rg() {
    var e = U.H;
    return U.H = ql, e === null ? ql : e;
  }
  function ag() {
    var e = U.A;
    return U.A = Z2, e;
  }
  function vf() {
    dt = 4, Br || (He & 4194048) !== He && An.current !== null || (pi = !0), (Ur & 134217727) === 0 && (xa & 134217727) === 0 || nt === null || Zr(
      nt,
      He,
      Tn,
      !1
    );
  }
  function yf(e, n, a) {
    var l = $e;
    $e |= 2;
    var c = rg(), m = ag();
    (nt !== e || He !== n) && (eo = null, yi(e, n)), n = !1;
    var C = dt;
    e: do
      try {
        if (Qe !== 0 && Pe !== null) {
          var N = Pe, R = un;
          switch (Qe) {
            case 8:
              gf(), C = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              An.current === null && (n = !0);
              var H = Qe;
              if (Qe = 0, un = null, _i(e, N, R, H), a && pi) {
                C = 0;
                break e;
              }
              break;
            default:
              H = Qe, Qe = 0, un = null, _i(e, N, R, H);
          }
        }
        V2(), C = dt;
        break;
      } catch (X) {
        ng(e, X);
      }
    while (!0);
    return n && e.shellSuspendCounter++, lr = ga = null, $e = l, U.H = c, U.A = m, Pe === null && (nt = null, He = 0, El()), C;
  }
  function V2() {
    for (; Pe !== null; ) ig(Pe);
  }
  function Y2(e, n) {
    var a = $e;
    $e |= 2;
    var l = rg(), c = ag();
    nt !== e || He !== n ? (eo = null, Wl = Oe() + 500, yi(e, n)) : pi = Vt(
      e,
      n
    );
    e: do
      try {
        if (Qe !== 0 && Pe !== null) {
          n = Pe;
          var m = un;
          t: switch (Qe) {
            case 1:
              Qe = 0, un = null, _i(e, n, m, 1);
              break;
            case 2:
            case 9:
              if (vp(m)) {
                Qe = 0, un = null, sg(n);
                break;
              }
              n = function() {
                Qe !== 2 && Qe !== 9 || nt !== e || (Qe = 7), Xn(e);
              }, m.then(n, n);
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              vp(m) ? (Qe = 0, un = null, sg(n)) : (Qe = 0, un = null, _i(e, n, m, 7));
              break;
            case 5:
              var C = null;
              switch (Pe.tag) {
                case 26:
                  C = Pe.memoizedState;
                case 5:
                case 27:
                  var N = Pe;
                  if (!C || Hg(C)) {
                    Qe = 0, un = null;
                    var R = N.sibling;
                    if (R !== null) Pe = R;
                    else {
                      var H = N.return;
                      H !== null ? (Pe = H, no(H)) : Pe = null;
                    }
                    break t;
                  }
              }
              Qe = 0, un = null, _i(e, n, m, 5);
              break;
            case 6:
              Qe = 0, un = null, _i(e, n, m, 6);
              break;
            case 8:
              gf(), dt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        X2();
        break;
      } catch (X) {
        ng(e, X);
      }
    while (!0);
    return lr = ga = null, U.H = l, U.A = c, $e = a, Pe !== null ? 0 : (nt = null, He = 0, El(), dt);
  }
  function X2() {
    for (; Pe !== null && !Ve(); )
      ig(Pe);
  }
  function ig(e) {
    var n = km(e.alternate, e, mr);
    e.memoizedProps = e.pendingProps, n === null ? no(e) : Pe = n;
  }
  function sg(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Am(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          He
        );
        break;
      case 11:
        n = Am(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          He
        );
        break;
      case 5:
        kc(n);
      default:
        jm(a, n), n = Pe = lp(n, mr), n = km(a, n, mr);
    }
    e.memoizedProps = e.pendingProps, n === null ? no(e) : Pe = n;
  }
  function _i(e, n, a, l) {
    lr = ga = null, kc(n), ci = null, ps = 0;
    var c = n.return;
    try {
      if (P2(
        e,
        c,
        n,
        a,
        He
      )) {
        dt = 1, Yl(
          e,
          xn(a, e.current)
        ), Pe = null;
        return;
      }
    } catch (m) {
      if (c !== null) throw Pe = c, m;
      dt = 1, Yl(
        e,
        xn(a, e.current)
      ), Pe = null;
      return;
    }
    n.flags & 32768 ? (Ye || l === 1 ? e = !0 : pi || (He & 536870912) !== 0 ? e = !1 : (Br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = An.current, l !== null && l.tag === 13 && (l.flags |= 16384))), lg(n, e)) : no(n);
  }
  function no(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        lg(
          n,
          Br
        );
        return;
      }
      e = n.return;
      var a = B2(
        n.alternate,
        n,
        mr
      );
      if (a !== null) {
        Pe = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        Pe = n;
        return;
      }
      Pe = n = e;
    } while (n !== null);
    dt === 0 && (dt = 5);
  }
  function lg(e, n) {
    do {
      var a = U2(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Pe = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        Pe = e;
        return;
      }
      Pe = e = a;
    } while (e !== null);
    dt = 6, Pe = null;
  }
  function og(e, n, a, l, c, m, C, N, R) {
    e.cancelPendingCommit = null;
    do
      ro();
    while (Rt !== 0);
    if (($e & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (m = n.lanes | n.childLanes, m |= lc, A1(
        e,
        a,
        m,
        C,
        N,
        R
      ), e === nt && (Pe = nt = null, He = 0), gi = n, qr = e, vi = a, df = m, pf = c, Jm = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, J2(ue, function() {
        return dg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = U.T, U.T = null, c = ne.p, ne.p = 2, C = $e, $e |= 4;
        try {
          H2(e, n, a);
        } finally {
          $e = C, ne.p = c, U.T = l;
        }
      }
      Rt = 1, ug(), cg(), fg();
    }
  }
  function ug() {
    if (Rt === 1) {
      Rt = 0;
      var e = qr, n = gi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var l = ne.p;
        ne.p = 2;
        var c = $e;
        $e |= 4;
        try {
          Gm(n, e);
          var m = Df, C = Kd(e.containerInfo), N = m.focusedElem, R = m.selectionRange;
          if (C !== N && N && N.ownerDocument && Qd(
            N.ownerDocument.documentElement,
            N
          )) {
            if (R !== null && nc(N)) {
              var H = R.start, X = R.end;
              if (X === void 0 && (X = H), "selectionStart" in N)
                N.selectionStart = H, N.selectionEnd = Math.min(
                  X,
                  N.value.length
                );
              else {
                var J = N.ownerDocument || document, Z = J && J.defaultView || window;
                if (Z.getSelection) {
                  var F = Z.getSelection(), Ce = N.textContent.length, Se = Math.min(R.start, Ce), We = R.end === void 0 ? Se : Math.min(R.end, Ce);
                  !F.extend && Se > We && (C = We, We = Se, Se = C);
                  var P = $d(
                    N,
                    Se
                  ), z = $d(
                    N,
                    We
                  );
                  if (P && z && (F.rangeCount !== 1 || F.anchorNode !== P.node || F.anchorOffset !== P.offset || F.focusNode !== z.node || F.focusOffset !== z.offset)) {
                    var I = J.createRange();
                    I.setStart(P.node, P.offset), F.removeAllRanges(), Se > We ? (F.addRange(I), F.extend(z.node, z.offset)) : (I.setEnd(z.node, z.offset), F.addRange(I));
                  }
                }
              }
            }
            for (J = [], F = N; F = F.parentNode; )
              F.nodeType === 1 && J.push({
                element: F,
                left: F.scrollLeft,
                top: F.scrollTop
              });
            for (typeof N.focus == "function" && N.focus(), N = 0; N < J.length; N++) {
              var Q = J[N];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          go = !!Nf, Df = Nf = null;
        } finally {
          $e = c, ne.p = l, U.T = a;
        }
      }
      e.current = n, Rt = 2;
    }
  }
  function cg() {
    if (Rt === 2) {
      Rt = 0;
      var e = qr, n = gi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = U.T, U.T = null;
        var l = ne.p;
        ne.p = 2;
        var c = $e;
        $e |= 4;
        try {
          Hm(e, n.alternate, n);
        } finally {
          $e = c, ne.p = l, U.T = a;
        }
      }
      Rt = 3;
    }
  }
  function fg() {
    if (Rt === 4 || Rt === 3) {
      Rt = 0, ve();
      var e = qr, n = gi, a = vi, l = Jm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Rt = 5 : (Rt = 0, gi = qr = null, hg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), zu(a), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            er,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = U.T, c = ne.p, ne.p = 2, U.T = null;
        try {
          for (var m = e.onRecoverableError, C = 0; C < l.length; C++) {
            var N = l[C];
            m(N.value, {
              componentStack: N.stack
            });
          }
        } finally {
          U.T = n, ne.p = c;
        }
      }
      (vi & 3) !== 0 && ro(), Xn(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === mf ? Es++ : (Es = 0, mf = e) : Es = 0, Cs(0);
    }
  }
  function hg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, rs(n)));
  }
  function ro(e) {
    return ug(), cg(), fg(), dg();
  }
  function dg() {
    if (Rt !== 5) return !1;
    var e = qr, n = df;
    df = 0;
    var a = zu(vi), l = U.T, c = ne.p;
    try {
      ne.p = 32 > a ? 32 : a, U.T = null, a = pf, pf = null;
      var m = qr, C = vi;
      if (Rt = 0, gi = qr = null, vi = 0, ($e & 6) !== 0) throw Error(s(331));
      var N = $e;
      if ($e |= 4, Qm(m.current), Ym(
        m,
        m.current,
        C,
        a
      ), $e = N, Cs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(er, m);
        } catch {
        }
      return !0;
    } finally {
      ne.p = c, U.T = l, hg(e, n);
    }
  }
  function pg(e, n, a) {
    n = xn(a, n), n = Vc(e.stateNode, n, 2), e = kr(e, n, 2), e !== null && (Hi(e, 2), Xn(e));
  }
  function tt(e, n, a) {
    if (e.tag === 3)
      pg(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          pg(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Hr === null || !Hr.has(l))) {
            e = xn(a, e), a = ym(2), l = kr(n, a, 2), l !== null && (_m(
              a,
              l,
              n,
              e
            ), Hi(l, 2), Xn(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function _f(e, n, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new F2();
      var c = /* @__PURE__ */ new Set();
      l.set(n, c);
    } else
      c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c));
    c.has(a) || (uf = !0, c.add(a), e = $2.bind(null, e, n, a), n.then(e, e));
  }
  function $2(e, n, a) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, nt === e && (He & a) === a && (dt === 4 || dt === 3 && (He & 62914560) === He && 300 > Oe() - hf ? ($e & 2) === 0 && yi(e, 0) : cf |= a, mi === He && (mi = 0)), Xn(e);
  }
  function mg(e, n) {
    n === 0 && (n = fd()), e = ei(e, n), e !== null && (Hi(e, n), Xn(e));
  }
  function Q2(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), mg(e, a);
  }
  function K2(e, n) {
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
    l !== null && l.delete(n), mg(e, a);
  }
  function J2(e, n) {
    return re(e, n);
  }
  var ao = null, bi = null, bf = !1, io = !1, Sf = !1, Ea = 0;
  function Xn(e) {
    e !== bi && e.next === null && (bi === null ? ao = bi = e : bi = bi.next = e), io = !0, bf || (bf = !0, e_());
  }
  function Cs(e, n) {
    if (!Sf && io) {
      Sf = !0;
      do
        for (var a = !1, l = ao; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var m = 0;
            else {
              var C = l.suspendedLanes, N = l.pingedLanes;
              m = (1 << 31 - Ht(42 | e) + 1) - 1, m &= c & ~(C & ~N), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (a = !0, _g(l, m));
          } else
            m = He, m = qt(
              l,
              l === nt ? m : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (m & 3) === 0 || Vt(l, m) || (a = !0, _g(l, m));
          l = l.next;
        }
      while (a);
      Sf = !1;
    }
  }
  function W2() {
    gg();
  }
  function gg() {
    io = bf = !1;
    var e = 0;
    Ea !== 0 && (o_() && (e = Ea), Ea = 0);
    for (var n = Oe(), a = null, l = ao; l !== null; ) {
      var c = l.next, m = vg(l, n);
      m === 0 ? (l.next = null, a === null ? ao = c : a.next = c, c === null && (bi = a)) : (a = l, (e !== 0 || (m & 3) !== 0) && (io = !0)), l = c;
    }
    Cs(e);
  }
  function vg(e, n) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
      var C = 31 - Ht(m), N = 1 << C, R = c[C];
      R === -1 ? ((N & a) === 0 || (N & l) !== 0) && (c[C] = fl(N, n)) : R <= n && (e.expiredLanes |= N), m &= ~N;
    }
    if (n = nt, a = He, a = qt(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === n && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && de(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Vt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (l !== null && de(l), zu(a)) {
        case 2:
        case 8:
          a = pe;
          break;
        case 32:
          a = ue;
          break;
        case 268435456:
          a = Ze;
          break;
        default:
          a = ue;
      }
      return l = yg.bind(null, e), a = re(a, l), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return l !== null && l !== null && de(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function yg(e, n) {
    if (Rt !== 0 && Rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (ro() && e.callbackNode !== a)
      return null;
    var l = He;
    return l = qt(
      e,
      e === nt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (eg(e, l, n), vg(e, Oe()), e.callbackNode != null && e.callbackNode === a ? yg.bind(null, e) : null);
  }
  function _g(e, n) {
    if (ro()) return null;
    eg(e, n, !0);
  }
  function e_() {
    c_(function() {
      ($e & 6) !== 0 ? re(
        Xe,
        W2
      ) : gg();
    });
  }
  function xf() {
    return Ea === 0 && (Ea = Ba()), Ea;
  }
  function bg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : gl("" + e);
  }
  function Sg(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function t_(e, n, a, l, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var m = bg(
        (c[Yt] || null).action
      ), C = l.submitter;
      C && (n = (n = C[Yt] || null) ? bg(n.formAction) : C.getAttribute("formAction"), n !== null && (m = n, C = null));
      var N = new bl(
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
                  var R = C ? Sg(c, C) : new FormData(c);
                  Hc(
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
                typeof m == "function" && (N.preventDefault(), R = C ? Sg(c, C) : new FormData(c), Hc(
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
  for (var Ef = 0; Ef < sc.length; Ef++) {
    var Cf = sc[Ef], n_ = Cf.toLowerCase(), r_ = Cf[0].toUpperCase() + Cf.slice(1);
    jn(
      n_,
      "on" + r_
    );
  }
  jn(ep, "onAnimationEnd"), jn(tp, "onAnimationIteration"), jn(np, "onAnimationStart"), jn("dblclick", "onDoubleClick"), jn("focusin", "onFocus"), jn("focusout", "onBlur"), jn(b2, "onTransitionRun"), jn(S2, "onTransitionStart"), jn(x2, "onTransitionCancel"), jn(rp, "onTransitionEnd"), Fa("onMouseEnter", ["mouseout", "mouseover"]), Fa("onMouseLeave", ["mouseout", "mouseover"]), Fa("onPointerEnter", ["pointerout", "pointerover"]), Fa("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  ), a_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ws)
  );
  function xg(e, n) {
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
              Vl(X);
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
              Vl(X);
            }
            c.currentTarget = null, m = R;
          }
      }
    }
  }
  function Ie(e, n) {
    var a = n[Lu];
    a === void 0 && (a = n[Lu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Eg(n, e, 2, !1), a.add(l));
  }
  function wf(e, n, a) {
    var l = 0;
    n && (l |= 4), Eg(
      a,
      e,
      l,
      n
    );
  }
  var so = "_reactListening" + Math.random().toString(36).slice(2);
  function Af(e) {
    if (!e[so]) {
      e[so] = !0, gd.forEach(function(a) {
        a !== "selectionchange" && (a_.has(a) || wf(a, !1, e), wf(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[so] || (n[so] = !0, wf("selectionchange", !1, n));
    }
  }
  function Eg(e, n, a, l) {
    switch (Yg(n)) {
      case 2:
        var c = M_;
        break;
      case 8:
        c = k_;
        break;
      default:
        c = Uf;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Yu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Tf(e, n, a, l, c) {
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
    Dd(function() {
      var H = m, X = Gu(a), J = [];
      e: {
        var Z = ap.get(e);
        if (Z !== void 0) {
          var F = bl, Ce = e;
          switch (e) {
            case "keypress":
              if (yl(a) === 0) break e;
            case "keydown":
            case "keyup":
              F = J1;
              break;
            case "focusin":
              Ce = "focus", F = Ku;
              break;
            case "focusout":
              Ce = "blur", F = Ku;
              break;
            case "beforeblur":
            case "afterblur":
              F = Ku;
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
              F = Rd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = U1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = t2;
              break;
            case ep:
            case tp:
            case np:
              F = Z1;
              break;
            case rp:
              F = r2;
              break;
            case "scroll":
            case "scrollend":
              F = I1;
              break;
            case "wheel":
              F = i2;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = G1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = zd;
              break;
            case "toggle":
            case "beforetoggle":
              F = l2;
          }
          var Se = (n & 4) !== 0, We = !Se && (e === "scroll" || e === "scrollend"), P = Se ? Z !== null ? Z + "Capture" : null : Z;
          Se = [];
          for (var z = H, I; z !== null; ) {
            var Q = z;
            if (I = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || I === null || P === null || (Q = Fi(z, P), Q != null && Se.push(
              As(z, Q, I)
            )), We) break;
            z = z.return;
          }
          0 < Se.length && (Z = new F(
            Z,
            Ce,
            null,
            a,
            X
          ), J.push({ event: Z, listeners: Se }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", Z && a !== Fu && (Ce = a.relatedTarget || a.fromElement) && (Ha(Ce) || Ce[Ua]))
            break e;
          if ((F || Z) && (Z = X.window === X ? X : (Z = X.ownerDocument) ? Z.defaultView || Z.parentWindow : window, F ? (Ce = a.relatedTarget || a.toElement, F = H, Ce = Ce ? Ha(Ce) : null, Ce !== null && (We = u(Ce), Se = Ce.tag, Ce !== We || Se !== 5 && Se !== 27 && Se !== 6) && (Ce = null)) : (F = null, Ce = H), F !== Ce)) {
            if (Se = Rd, Q = "onMouseLeave", P = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Se = zd, Q = "onPointerLeave", P = "onPointerEnter", z = "pointer"), We = F == null ? Z : Zi(F), I = Ce == null ? Z : Zi(Ce), Z = new Se(
              Q,
              z + "leave",
              F,
              a,
              X
            ), Z.target = We, Z.relatedTarget = I, Q = null, Ha(X) === H && (Se = new Se(
              P,
              z + "enter",
              Ce,
              a,
              X
            ), Se.target = I, Se.relatedTarget = We, Q = Se), We = Q, F && Ce)
              t: {
                for (Se = F, P = Ce, z = 0, I = Se; I; I = Si(I))
                  z++;
                for (I = 0, Q = P; Q; Q = Si(Q))
                  I++;
                for (; 0 < z - I; )
                  Se = Si(Se), z--;
                for (; 0 < I - z; )
                  P = Si(P), I--;
                for (; z--; ) {
                  if (Se === P || P !== null && Se === P.alternate)
                    break t;
                  Se = Si(Se), P = Si(P);
                }
                Se = null;
              }
            else Se = null;
            F !== null && Cg(
              J,
              Z,
              F,
              Se,
              !1
            ), Ce !== null && We !== null && Cg(
              J,
              We,
              Ce,
              Se,
              !0
            );
          }
        }
        e: {
          if (Z = H ? Zi(H) : window, F = Z.nodeName && Z.nodeName.toLowerCase(), F === "select" || F === "input" && Z.type === "file")
            var fe = Zd;
          else if (Hd(Z))
            if (Fd)
              fe = v2;
            else {
              fe = m2;
              var Le = p2;
            }
          else
            F = Z.nodeName, !F || F.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? H && Zu(H.elementType) && (fe = Zd) : fe = g2;
          if (fe && (fe = fe(e, H))) {
            qd(
              J,
              fe,
              a,
              X
            );
            break e;
          }
          Le && Le(e, Z, H), e === "focusout" && H && Z.type === "number" && H.memoizedProps.value != null && qu(Z, "number", Z.value);
        }
        switch (Le = H ? Zi(H) : window, e) {
          case "focusin":
            (Hd(Le) || Le.contentEditable === "true") && (Ka = Le, rc = H, Ji = null);
            break;
          case "focusout":
            Ji = rc = Ka = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ac = !1, Jd(J, a, X);
            break;
          case "selectionchange":
            if (_2) break;
          case "keydown":
          case "keyup":
            Jd(J, a, X);
        }
        var me;
        if (Wu)
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
          Qa ? Bd(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Ld && a.locale !== "ko" && (Qa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Qa && (me = Md()) : (Or = X, Xu = "value" in Or ? Or.value : Or.textContent, Qa = !0)), Le = lo(H, Ee), 0 < Le.length && (Ee = new jd(
          Ee,
          e,
          null,
          a,
          X
        ), J.push({ event: Ee, listeners: Le }), me ? Ee.data = me : (me = Ud(a), me !== null && (Ee.data = me)))), (me = u2 ? c2(e, a) : f2(e, a)) && (Ee = lo(H, "onBeforeInput"), 0 < Ee.length && (Le = new jd(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          X
        ), J.push({
          event: Le,
          listeners: Ee
        }), Le.data = me)), t_(
          J,
          e,
          H,
          a,
          X
        );
      }
      xg(J, n);
    });
  }
  function As(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function lo(e, n) {
    for (var a = n + "Capture", l = []; e !== null; ) {
      var c = e, m = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || m === null || (c = Fi(e, a), c != null && l.unshift(
        As(e, c, m)
      ), c = Fi(e, n), c != null && l.push(
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
  function Cg(e, n, a, l, c) {
    for (var m = n._reactName, C = []; a !== null && a !== l; ) {
      var N = a, R = N.alternate, H = N.stateNode;
      if (N = N.tag, R !== null && R === l) break;
      N !== 5 && N !== 26 && N !== 27 || H === null || (R = H, c ? (H = Fi(a, m), H != null && C.unshift(
        As(a, H, R)
      )) : c || (H = Fi(a, m), H != null && C.push(
        As(a, H, R)
      ))), a = a.return;
    }
    C.length !== 0 && e.push({ event: n, listeners: C });
  }
  var i_ = /\r\n?/g, s_ = /\u0000|\uFFFD/g;
  function wg(e) {
    return (typeof e == "string" ? e : "" + e).replace(i_, `
`).replace(s_, "");
  }
  function Ag(e, n) {
    return n = wg(n), wg(e) === n;
  }
  function oo() {
  }
  function Je(e, n, a, l, c, m) {
    switch (a) {
      case "children":
        typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Ya(e, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Ya(e, "" + l);
        break;
      case "className":
        dl(e, "class", l);
        break;
      case "tabIndex":
        dl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        dl(e, a, l);
        break;
      case "style":
        Od(e, l, m);
        break;
      case "data":
        if (n !== "object") {
          dl(e, "data", l);
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
        l = gl("" + l), e.setAttribute(a, l);
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
        l = gl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = oo);
        break;
      case "onScroll":
        l != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ie("scrollend", e);
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
        a = gl("" + l), e.setAttributeNS(
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
        Ie("beforetoggle", e), Ie("toggle", e), hl(e, "popover", l);
        break;
      case "xlinkActuate":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        nr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        nr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        nr(
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = L1.get(a) || a, hl(e, a, l));
    }
  }
  function Of(e, n, a, l, c, m) {
    switch (a) {
      case "style":
        Od(e, l, m);
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
        l != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ie("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = oo);
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
        if (!vd.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), m = e[Yt] || null, m = m != null ? m[a] : null, typeof m == "function" && e.removeEventListener(n, m, c), typeof l == "function")) {
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
        Ie("error", e), Ie("load", e);
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
        Ie("invalid", e);
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
        Cd(
          e,
          m,
          N,
          R,
          H,
          C,
          c,
          !1
        ), pl(e);
        return;
      case "select":
        Ie("invalid", e), l = C = m = null;
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
        Ie("invalid", e), m = c = l = null;
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
        Ad(e, l, c, m), pl(e);
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
        Ie("beforetoggle", e), Ie("toggle", e), Ie("cancel", e), Ie("close", e);
        break;
      case "iframe":
      case "object":
        Ie("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ws.length; l++)
          Ie(ws[l], e);
        break;
      case "image":
        Ie("error", e), Ie("load", e);
        break;
      case "details":
        Ie("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ie("error", e), Ie("load", e);
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
            a.hasOwnProperty(X) && (l = a[X], l !== void 0 && Of(
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
  function l_(e, n, a, l) {
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
        for (F in a) {
          var J = a[F];
          if (a.hasOwnProperty(F) && J != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = J;
              default:
                l.hasOwnProperty(F) || Je(e, n, F, null, l, J);
            }
        }
        for (var Z in l) {
          var F = l[Z];
          if (J = a[Z], l.hasOwnProperty(Z) && (F != null || J != null))
            switch (Z) {
              case "type":
                m = F;
                break;
              case "name":
                c = F;
                break;
              case "checked":
                H = F;
                break;
              case "defaultChecked":
                X = F;
                break;
              case "value":
                C = F;
                break;
              case "defaultValue":
                N = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                F !== J && Je(
                  e,
                  n,
                  Z,
                  F,
                  l,
                  J
                );
            }
        }
        Hu(
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
        F = C = N = Z = null;
        for (m in a)
          if (R = a[m], a.hasOwnProperty(m) && R != null)
            switch (m) {
              case "value":
                break;
              case "multiple":
                F = R;
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
                Z = m;
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
        n = N, a = C, l = F, Z != null ? Va(e, !!a, Z, !1) : !!l != !!a && (n != null ? Va(e, !!a, n, !0) : Va(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        F = Z = null;
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
                Z = c;
                break;
              case "defaultValue":
                F = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== m && Je(e, n, C, c, l, m);
            }
        wd(e, Z, F);
        return;
      case "option":
        for (var Ce in a)
          if (Z = a[Ce], a.hasOwnProperty(Ce) && Z != null && !l.hasOwnProperty(Ce))
            switch (Ce) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Je(
                  e,
                  n,
                  Ce,
                  null,
                  l,
                  Z
                );
            }
        for (R in l)
          if (Z = l[R], F = a[R], l.hasOwnProperty(R) && Z !== F && (Z != null || F != null))
            switch (R) {
              case "selected":
                e.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                Je(
                  e,
                  n,
                  R,
                  Z,
                  l,
                  F
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
        for (var Se in a)
          Z = a[Se], a.hasOwnProperty(Se) && Z != null && !l.hasOwnProperty(Se) && Je(e, n, Se, null, l, Z);
        for (H in l)
          if (Z = l[H], F = a[H], l.hasOwnProperty(H) && Z !== F && (Z != null || F != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                Je(
                  e,
                  n,
                  H,
                  Z,
                  l,
                  F
                );
            }
        return;
      default:
        if (Zu(n)) {
          for (var We in a)
            Z = a[We], a.hasOwnProperty(We) && Z !== void 0 && !l.hasOwnProperty(We) && Of(
              e,
              n,
              We,
              void 0,
              l,
              Z
            );
          for (X in l)
            Z = l[X], F = a[X], !l.hasOwnProperty(X) || Z === F || Z === void 0 && F === void 0 || Of(
              e,
              n,
              X,
              Z,
              l,
              F
            );
          return;
        }
    }
    for (var P in a)
      Z = a[P], a.hasOwnProperty(P) && Z != null && !l.hasOwnProperty(P) && Je(e, n, P, null, l, Z);
    for (J in l)
      Z = l[J], F = a[J], !l.hasOwnProperty(J) || Z === F || Z == null && F == null || Je(e, n, J, Z, l, F);
  }
  var Nf = null, Df = null;
  function uo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Tg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Og(e, n) {
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
  function Mf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var kf = null;
  function o_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === kf ? !1 : (kf = e, !0) : (kf = null, !1);
  }
  var Ng = typeof setTimeout == "function" ? setTimeout : void 0, u_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Dg = typeof Promise == "function" ? Promise : void 0, c_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dg < "u" ? function(e) {
    return Dg.resolve(null).then(e).catch(f_);
  } : Ng;
  function f_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fr(e) {
    return e === "head";
  }
  function Mg(e, n) {
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
  function Rf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rf(a), Pu(a);
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
  function h_(e, n, a, l) {
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
  function d_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Ln(e.nextSibling), e === null)) return null;
    return e;
  }
  function jf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function p_(e, n) {
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
  var zf = null;
  function kg(e) {
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
  function Rg(e, n, a) {
    switch (n = uo(a), e) {
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
    Pu(e);
  }
  var On = /* @__PURE__ */ new Map(), jg = /* @__PURE__ */ new Set();
  function co(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var gr = ne.d;
  ne.d = {
    f: m_,
    r: g_,
    D: v_,
    C: y_,
    L: __,
    m: b_,
    X: x_,
    S: S_,
    M: E_
  };
  function m_() {
    var e = gr.f(), n = to();
    return e || n;
  }
  function g_(e) {
    var n = qa(e);
    n !== null && n.tag === 5 && n.type === "form" ? em(n) : gr.r(e);
  }
  var xi = typeof document > "u" ? null : document;
  function zg(e, n, a) {
    var l = xi;
    if (l && typeof n == "string" && n) {
      var c = Sn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), jg.has(c) || (jg.add(c), e = { rel: e, crossOrigin: a, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), jt(n, "link", e), Ot(n), l.head.appendChild(n)));
    }
  }
  function v_(e) {
    gr.D(e), zg("dns-prefetch", e, null);
  }
  function y_(e, n) {
    gr.C(e, n), zg("preconnect", e, n);
  }
  function __(e, n, a) {
    gr.L(e, n, a);
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
  function b_(e, n) {
    gr.m(e, n);
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
  function S_(e, n, a) {
    gr.S(e, n, a);
    var l = xi;
    if (l && e) {
      var c = Za(l).hoistableStyles, m = Ei(e);
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
          ), (a = On.get(m)) && Lf(e, a);
          var R = C = l.createElement("link");
          Ot(R), jt(R, "link", e), R._p = new Promise(function(H, X) {
            R.onload = H, R.onerror = X;
          }), R.addEventListener("load", function() {
            N.loading |= 1;
          }), R.addEventListener("error", function() {
            N.loading |= 2;
          }), N.loading |= 4, fo(C, n, l);
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
  function x_(e, n) {
    gr.X(e, n);
    var a = xi;
    if (a && e) {
      var l = Za(a).hoistableScripts, c = Ci(e), m = l.get(c);
      m || (m = a.querySelector(Ns(c)), m || (e = y({ src: e, async: !0 }, n), (n = On.get(c)) && Pf(e, n), m = a.createElement("script"), Ot(m), jt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function E_(e, n) {
    gr.M(e, n);
    var a = xi;
    if (a && e) {
      var l = Za(a).hoistableScripts, c = Ci(e), m = l.get(c);
      m || (m = a.querySelector(Ns(c)), m || (e = y({ src: e, async: !0, type: "module" }, n), (n = On.get(c)) && Pf(e, n), m = a.createElement("script"), Ot(m), jt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function Lg(e, n, a, l) {
    var c = (c = Y.current) ? co(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ei(a.href), a = Za(
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
          var m = Za(
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
          }, On.set(e, a), m || C_(
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
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ci(a), a = Za(
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
  function Pg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function C_(e, n, a, l) {
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
  function Ig(e, n, a) {
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
          ), Ot(l), jt(l, "style", c), fo(l, a.precedence, e), n.instance = l;
        case "stylesheet":
          c = Ei(a.href);
          var m = e.querySelector(
            Os(c)
          );
          if (m)
            return n.state.loading |= 4, n.instance = m, Ot(m), m;
          l = Pg(a), (c = On.get(c)) && Lf(l, c), m = (e.ownerDocument || e).createElement("link"), Ot(m);
          var C = m;
          return C._p = new Promise(function(N, R) {
            C.onload = N, C.onerror = R;
          }), jt(m, "link", l), n.state.loading |= 4, fo(m, a.precedence, e), n.instance = m;
        case "script":
          return m = Ci(a.src), (c = e.querySelector(
            Ns(m)
          )) ? (n.instance = c, Ot(c), c) : (l = a, (c = On.get(m)) && (l = y({}, a), Pf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Ot(c), jt(c, "link", l), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, fo(l, a.precedence, e));
    return n.instance;
  }
  function fo(e, n, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = l.length ? l[l.length - 1] : null, m = c, C = 0; C < l.length; C++) {
      var N = l[C];
      if (N.dataset.precedence === n) m = N;
      else if (m !== c) break;
    }
    m ? m.parentNode.insertBefore(e, m.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Lf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Pf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var ho = null;
  function Bg(e, n, a) {
    if (ho === null) {
      var l = /* @__PURE__ */ new Map(), c = ho = /* @__PURE__ */ new Map();
      c.set(a, l);
    } else
      c = ho, l = c.get(a), l || (l = /* @__PURE__ */ new Map(), c.set(a, l));
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
  function Ug(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function w_(e, n, a) {
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
  function Hg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ds = null;
  function A_() {
  }
  function T_(e, n, a) {
    if (Ds === null) throw Error(s(475));
    var l = Ds;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ei(a.href), m = e.querySelector(
          Os(c)
        );
        if (m) {
          e = m._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = po.bind(l), e.then(l, l)), n.state.loading |= 4, n.instance = m, Ot(m);
          return;
        }
        m = e.ownerDocument || e, a = Pg(a), (c = On.get(c)) && Lf(a, c), m = m.createElement("link"), Ot(m);
        var C = m;
        C._p = new Promise(function(N, R) {
          C.onload = N, C.onerror = R;
        }), jt(m, "link", a), n.instance = m;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++, n = po.bind(l), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function O_() {
    if (Ds === null) throw Error(s(475));
    var e = Ds;
    return e.stylesheets && e.count === 0 && If(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && If(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function po() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) If(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var mo = null;
  function If(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, mo = /* @__PURE__ */ new Map(), n.forEach(N_, e), mo = null, po.call(e));
  }
  function N_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = mo.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), mo.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < c.length; m++) {
          var C = c[m];
          (C.nodeName === "LINK" || C.getAttribute("media") !== "not all") && (a.set(C.dataset.precedence, C), l = C);
        }
        l && a.set(null, l);
      }
      c = n.instance, C = c.getAttribute("data-precedence"), m = a.get(C) || l, m === l && a.set(null, c), a.set(C, c), this.count++, l = po.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), m ? m.parentNode.insertBefore(c, m.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ms = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function D_(e, n, a, l, c, m, C, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ru(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ru(0), this.hiddenUpdates = Ru(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = m, this.onRecoverableError = C, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qg(e, n, a, l, c, m, C, N, R, H, X, J) {
    return e = new D_(
      e,
      n,
      a,
      C,
      N,
      R,
      H,
      J
    ), n = 1, m === !0 && (n |= 24), m = sn(3, null, null, n), e.current = m, m.stateNode = e, n = yc(), n.refCount++, e.pooledCache = n, n.refCount++, m.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: n
    }, xc(m), e;
  }
  function Zg(e) {
    return e ? (e = ti, e) : ti;
  }
  function Fg(e, n, a, l, c, m) {
    c = Zg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Mr(n), l.payload = { element: a }, m = m === void 0 ? null : m, m !== null && (l.callback = m), a = kr(e, l, n), a !== null && (fn(a, e, n), ls(a, e, n));
  }
  function Gg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Bf(e, n) {
    Gg(e, n), (e = e.alternate) && Gg(e, n);
  }
  function Vg(e) {
    if (e.tag === 13) {
      var n = ei(e, 67108864);
      n !== null && fn(n, e, 67108864), Bf(e, 67108864);
    }
  }
  var go = !0;
  function M_(e, n, a, l) {
    var c = U.T;
    U.T = null;
    var m = ne.p;
    try {
      ne.p = 2, Uf(e, n, a, l);
    } finally {
      ne.p = m, U.T = c;
    }
  }
  function k_(e, n, a, l) {
    var c = U.T;
    U.T = null;
    var m = ne.p;
    try {
      ne.p = 8, Uf(e, n, a, l);
    } finally {
      ne.p = m, U.T = c;
    }
  }
  function Uf(e, n, a, l) {
    if (go) {
      var c = Hf(l);
      if (c === null)
        Tf(
          e,
          n,
          l,
          vo,
          a
        ), Xg(e, l);
      else if (j_(
        c,
        e,
        n,
        a,
        l
      ))
        l.stopPropagation();
      else if (Xg(e, l), n & 4 && -1 < R_.indexOf(e)) {
        for (; c !== null; ) {
          var m = qa(c);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var C = _n(m.pendingLanes);
                  if (C !== 0) {
                    var N = m;
                    for (N.pendingLanes |= 2, N.entangledLanes |= 2; C; ) {
                      var R = 1 << 31 - Ht(C);
                      N.entanglements[1] |= R, C &= ~R;
                    }
                    Xn(m), ($e & 6) === 0 && (Wl = Oe() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                N = ei(m, 2), N !== null && fn(N, m, 2), to(), Bf(m, 2);
            }
          if (m = Hf(l), m === null && Tf(
            e,
            n,
            l,
            vo,
            a
          ), m === c) break;
          c = m;
        }
        c !== null && l.stopPropagation();
      } else
        Tf(
          e,
          n,
          l,
          null,
          a
        );
    }
  }
  function Hf(e) {
    return e = Gu(e), qf(e);
  }
  var vo = null;
  function qf(e) {
    if (vo = null, e = Ha(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (e = h(n), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return vo = e, null;
  }
  function Yg(e) {
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
        switch (qe()) {
          case Xe:
            return 2;
          case pe:
            return 8;
          case ue:
          case ke:
            return 32;
          case Ze:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zf = !1, Gr = null, Vr = null, Yr = null, ks = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new Map(), Xr = [], R_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Xg(e, n) {
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
    }, n !== null && (n = qa(n), n !== null && Vg(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function j_(e, n, a, l, c) {
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
  function $g(e) {
    var n = Ha(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = h(a), n !== null) {
            e.blockedOn = n, T1(e.priority, function() {
              if (a.tag === 13) {
                var l = cn();
                l = ju(l);
                var c = ei(a, l);
                c !== null && fn(c, a, l), Bf(a, l);
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
  function yo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Hf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Fu = l, a.target.dispatchEvent(l), Fu = null;
      } else
        return n = qa(a), n !== null && Vg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function Qg(e, n, a) {
    yo(e) && a.delete(n);
  }
  function z_() {
    Zf = !1, Gr !== null && yo(Gr) && (Gr = null), Vr !== null && yo(Vr) && (Vr = null), Yr !== null && yo(Yr) && (Yr = null), ks.forEach(Qg), Rs.forEach(Qg);
  }
  function _o(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Zf || (Zf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      z_
    )));
  }
  var bo = null;
  function Kg(e) {
    bo !== e && (bo = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        bo === e && (bo = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], l = e[n + 1], c = e[n + 2];
          if (typeof l != "function") {
            if (qf(l || a) === null)
              continue;
            break;
          }
          var m = qa(a);
          m !== null && (e.splice(n, 3), n -= 3, Hc(
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
      $g(a), a.blockedOn === null && Xr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], m = a[l + 1], C = c[Yt] || null;
        if (typeof m == "function")
          C || Kg(a);
        else if (C) {
          var N = null;
          if (m && m.hasAttribute("formAction")) {
            if (c = m, C = m[Yt] || null)
              N = C.formAction;
            else if (qf(c) !== null) continue;
          } else N = C.action;
          typeof N == "function" ? a[l + 1] = N : (a.splice(l, 3), l -= 3), Kg(a);
        }
      }
  }
  function Ff(e) {
    this._internalRoot = e;
  }
  So.prototype.render = Ff.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, l = cn();
    Fg(a, l, e, n, null, null);
  }, So.prototype.unmount = Ff.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Fg(e.current, 2, null, e, null, null), to(), n[Ua] = null;
    }
  };
  function So(e) {
    this._internalRoot = e;
  }
  So.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = pd();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < Xr.length && n !== 0 && n < Xr[a].priority; a++) ;
      Xr.splice(a, 0, e), a === 0 && $g(e);
    }
  };
  var Jg = r.version;
  if (Jg !== "19.1.1")
    throw Error(
      s(
        527,
        Jg,
        "19.1.1"
      )
    );
  ne.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = d(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var L_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xo.isDisabled && xo.supportsFiber)
      try {
        er = xo.inject(
          L_
        ), mt = xo;
      } catch {
      }
  }
  return Bs.createRoot = function(e, n) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = pm, m = mm, C = gm, N = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (C = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (N = n.unstable_transitionCallbacks)), n = qg(
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
    ), e[Ua] = n.current, Af(e), new Ff(n);
  }, Bs.hydrateRoot = function(e, n, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", m = pm, C = mm, N = gm, R = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (m = a.onUncaughtError), a.onCaughtError !== void 0 && (C = a.onCaughtError), a.onRecoverableError !== void 0 && (N = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (R = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), n = qg(
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
    ), n.context = Zg(null), a = n.current, l = cn(), l = ju(l), c = Mr(l), c.callback = null, kr(a, c, l), a = l, n.current.lanes = a, Hi(n, a), Xn(n), e[Ua] = n.current, Af(e), new So(n);
  }, Bs.version = "19.1.1", Bs;
}
var dv;
function hb() {
  if (dv) return Xf.exports;
  dv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Xf.exports = fb(), Xf.exports;
}
var db = hb();
const pv = /* @__PURE__ */ t0(db);
var pb = Object.defineProperty, mb = (t, r, i) => r in t ? pb(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, gb = (t, r, i) => mb(t, r + "", i);
class r0 extends Error {
  constructor(r, i) {
    super(r), gb(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function vb(t, r) {
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
    throw new r0(u.statusText, u);
  await i.getCharacters();
}
async function yb(t, r) {
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
    const h = await u.json().catch(() => ({ message: u.statusText }));
    throw new r0(h.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var _b = Object.defineProperty, bb = (t, r, i) => r in t ? _b(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, mv = (t, r, i) => bb(t, typeof r != "symbol" ? r + "" : r, i);
class a0 {
  constructor(r, i) {
    mv(this, "settingsKey"), mv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
    const { strategy: i = "recursive" } = r, s = this.defaultSettings.version, o = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], h = {
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
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), h;
    const p = {
      ...h,
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
      let d = function(g, y) {
        let b = !1;
        for (const _ of Object.keys(y))
          g[_] === void 0 ? (g[_] = y[_], b = !0) : typeof y[_] == "object" && y[_] !== null && (g[_] = g[_] || {}, d(g[_], y[_]) && (b = !0));
        return b;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (d(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let d = structuredClone(u), g = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let b = i.find((_) => _.from === g);
          if (b && b.to > g)
            d = await b.action(d), g = b.to, d.formatVersion = b.to, y = !0;
          else
            for (const _ of i)
              if (_.from === "*" && _.to > g && g !== _.to) {
                d = await _.action(d), g = _.to, d.formatVersion = _.to, y = !0;
                break;
              }
        } while (y);
        if (g !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const b = this.defaultSettings.version;
          b && (d.version = b);
        }
        if (p.formatVersion.changed) {
          for (const b of Object.keys(u))
            delete u[b];
          Object.assign(u, d), this.saveSettings();
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
  return Array.isArray ? Array.isArray(t) : l0(t) === "[object Array]";
}
function Sb(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function xb(t) {
  return t == null ? "" : Sb(t);
}
function Kn(t) {
  return typeof t == "string";
}
function i0(t) {
  return typeof t == "number";
}
function Eb(t) {
  return t === !0 || t === !1 || Cb(t) && l0(t) == "[object Boolean]";
}
function s0(t) {
  return typeof t == "object";
}
function Cb(t) {
  return s0(t) && t !== null;
}
function mn(t) {
  return t != null;
}
function Jf(t) {
  return !t.trim().length;
}
function l0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const wb = "Incorrect 'index' type", Ab = (t) => `Invalid value for key ${t}`, Tb = (t) => `Pattern length exceeds max of ${t}.`, Ob = (t) => `Missing ${t} property in key`, Nb = (t) => `Property 'weight' in key '${t}' must be a positive integer`, gv = Object.prototype.hasOwnProperty;
class Db {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = o0(s);
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
function o0(t) {
  let r = null, i = null, s = null, o = 1, u = null;
  if (Kn(t) || Er(t))
    s = t, r = vv(t), i = xh(t);
  else {
    if (!gv.call(t, "name"))
      throw new Error(Ob("name"));
    const h = t.name;
    if (s = h, gv.call(t, "weight") && (o = t.weight, o <= 0))
      throw new Error(Nb(h));
    r = vv(h), i = xh(h), u = t.getFn;
  }
  return { path: r, id: i, weight: o, src: s, getFn: u };
}
function vv(t) {
  return Er(t) ? t : t.split(".");
}
function xh(t) {
  return Er(t) ? t.join(".") : t;
}
function Mb(t, r) {
  let i = [], s = !1;
  const o = (u, h, p) => {
    if (mn(u))
      if (!h[p])
        i.push(u);
      else {
        let d = h[p];
        const g = u[d];
        if (!mn(g))
          return;
        if (p === h.length - 1 && (Kn(g) || i0(g) || Eb(g)))
          i.push(xb(g));
        else if (Er(g)) {
          s = !0;
          for (let y = 0, b = g.length; y < b; y += 1)
            o(g[y], h, p + 1);
        } else h.length && o(g, h, p + 1);
      }
  };
  return o(t, Kn(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const kb = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, Rb = {
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
}, jb = {
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
}, zb = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: Mb,
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
var Te = {
  ...Rb,
  ...kb,
  ...jb,
  ...zb
};
const Lb = /[^ ]+/g;
function Pb(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(Lb).length;
      if (i.has(u))
        return i.get(u);
      const h = 1 / Math.pow(u, 0.5 * t), p = parseFloat(Math.round(h * s) / s);
      return i.set(u, p), p;
    },
    clear() {
      i.clear();
    }
  };
}
class $h {
  constructor({
    getFn: r = Te.getFn,
    fieldNormWeight: i = Te.fieldNormWeight
  } = {}) {
    this.norm = Pb(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, Kn(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    Kn(r) ? this._addString(r, i) : this._addObject(r, i);
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
    if (!mn(r) || Jf(r))
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
      let h = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (mn(h)) {
        if (Er(h)) {
          let p = [];
          const d = [{ nestedArrIndex: -1, value: h }];
          for (; d.length; ) {
            const { nestedArrIndex: g, value: y } = d.pop();
            if (mn(y))
              if (Kn(y) && !Jf(y)) {
                let b = {
                  v: y,
                  i: g,
                  n: this.norm.get(y)
                };
                p.push(b);
              } else Er(y) && y.forEach((b, _) => {
                d.push({
                  nestedArrIndex: _,
                  value: b
                });
              });
          }
          s.$[u] = p;
        } else if (Kn(h) && !Jf(h)) {
          let p = {
            v: h,
            n: this.norm.get(h)
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
function u0(t, r, { getFn: i = Te.getFn, fieldNormWeight: s = Te.fieldNormWeight } = {}) {
  const o = new $h({ getFn: i, fieldNormWeight: s });
  return o.setKeys(t.map(o0)), o.setSources(r), o.create(), o;
}
function Ib(t, { getFn: r = Te.getFn, fieldNormWeight: i = Te.fieldNormWeight } = {}) {
  const { keys: s, records: o } = t, u = new $h({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function Eo(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = Te.distance,
  ignoreLocation: u = Te.ignoreLocation
} = {}) {
  const h = r / t.length;
  if (u)
    return h;
  const p = Math.abs(s - i);
  return o ? h + p / o : p ? 1 : h;
}
function Bb(t = [], r = Te.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let h = t.length; u < h; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Da = 32;
function Ub(t, r, i, {
  location: s = Te.location,
  distance: o = Te.distance,
  threshold: u = Te.threshold,
  findAllMatches: h = Te.findAllMatches,
  minMatchCharLength: p = Te.minMatchCharLength,
  includeMatches: d = Te.includeMatches,
  ignoreLocation: g = Te.ignoreLocation
} = {}) {
  if (r.length > Da)
    throw new Error(Tb(Da));
  const y = r.length, b = t.length, _ = Math.max(0, Math.min(s, b));
  let v = u, f = _;
  const S = p > 1 || d, x = S ? Array(b) : [];
  let O;
  for (; (O = t.indexOf(r, f)) > -1; ) {
    let k = Eo(r, {
      currentLocation: O,
      expectedLocation: _,
      distance: o,
      ignoreLocation: g
    });
    if (v = Math.min(k, v), f = O + y, S) {
      let q = 0;
      for (; q < y; )
        x[O + q] = 1, q += 1;
    }
  }
  f = -1;
  let w = [], D = 1, E = y + b;
  const T = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let q = 0, G = E;
    for (; q < G; )
      Eo(r, {
        errors: k,
        currentLocation: _ + G,
        expectedLocation: _,
        distance: o,
        ignoreLocation: g
      }) <= v ? q = G : E = G, G = Math.floor((E - q) / 2 + q);
    E = G;
    let B = Math.max(1, _ - G + 1), V = h ? b : Math.min(_ + G, b) + y, $ = Array(V + 2);
    $[V + 1] = (1 << k) - 1;
    for (let he = V; he >= B; he -= 1) {
      let ge = he - 1, U = i[t.charAt(ge)];
      if (S && (x[ge] = +!!U), $[he] = ($[he + 1] << 1 | 1) & U, k && ($[he] |= (w[he + 1] | w[he]) << 1 | 1 | w[he + 1]), $[he] & T && (D = Eo(r, {
        errors: k,
        currentLocation: ge,
        expectedLocation: _,
        distance: o,
        ignoreLocation: g
      }), D <= v)) {
        if (v = D, f = ge, f <= _)
          break;
        B = Math.max(1, 2 * _ - f);
      }
    }
    if (Eo(r, {
      errors: k + 1,
      currentLocation: _,
      expectedLocation: _,
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
    const k = Bb(x, p);
    k.length ? d && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function Hb(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const o = t.charAt(i);
    r[o] = (r[o] || 0) | 1 << s - i - 1;
  }
  return r;
}
const pu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class c0 {
  constructor(r, {
    location: i = Te.location,
    threshold: s = Te.threshold,
    distance: o = Te.distance,
    includeMatches: u = Te.includeMatches,
    findAllMatches: h = Te.findAllMatches,
    minMatchCharLength: p = Te.minMatchCharLength,
    isCaseSensitive: d = Te.isCaseSensitive,
    ignoreDiacritics: g = Te.ignoreDiacritics,
    ignoreLocation: y = Te.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: h,
      minMatchCharLength: p,
      isCaseSensitive: d,
      ignoreDiacritics: g,
      ignoreLocation: y
    }, r = d ? r : r.toLowerCase(), r = g ? pu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const b = (v, f) => {
      this.chunks.push({
        pattern: v,
        alphabet: Hb(v),
        startIndex: f
      });
    }, _ = this.pattern.length;
    if (_ > Da) {
      let v = 0;
      const f = _ % Da, S = _ - f;
      for (; v < S; )
        b(this.pattern.substr(v, Da), v), v += Da;
      if (f) {
        const x = _ - Da;
        b(this.pattern.substr(x), x);
      }
    } else
      b(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? pu(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return o && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: u,
      distance: h,
      threshold: p,
      findAllMatches: d,
      minMatchCharLength: g,
      ignoreLocation: y
    } = this.options;
    let b = [], _ = 0, v = !1;
    this.chunks.forEach(({ pattern: S, alphabet: x, startIndex: O }) => {
      const { isMatch: w, score: D, indices: E } = Ub(r, S, x, {
        location: u + O,
        distance: h,
        threshold: p,
        findAllMatches: d,
        minMatchCharLength: g,
        includeMatches: o,
        ignoreLocation: y
      });
      w && (v = !0), _ += D, w && E && (b = [...b, ...E]);
    });
    let f = {
      isMatch: v,
      score: v ? _ / this.chunks.length : 1
    };
    return v && o && (f.indices = b), f;
  }
}
class na {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return yv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return yv(r, this.singleRegex);
  }
  search() {
  }
}
function yv(t, r) {
  const i = t.match(r);
  return i ? i[1] : null;
}
class qb extends na {
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
class Zb extends na {
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
class Fb extends na {
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
class Gb extends na {
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
class Vb extends na {
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
class Yb extends na {
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
class f0 extends na {
  constructor(r, {
    location: i = Te.location,
    threshold: s = Te.threshold,
    distance: o = Te.distance,
    includeMatches: u = Te.includeMatches,
    findAllMatches: h = Te.findAllMatches,
    minMatchCharLength: p = Te.minMatchCharLength,
    isCaseSensitive: d = Te.isCaseSensitive,
    ignoreDiacritics: g = Te.ignoreDiacritics,
    ignoreLocation: y = Te.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new c0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: h,
      minMatchCharLength: p,
      isCaseSensitive: d,
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
    const h = !!o.length;
    return {
      isMatch: h,
      score: h ? 0 : 1,
      indices: o
    };
  }
}
const Eh = [
  qb,
  h0,
  Fb,
  Gb,
  Yb,
  Vb,
  Zb,
  f0
], _v = Eh.length, Xb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, $b = "|";
function Qb(t, r = {}) {
  return t.split($b).map((i) => {
    let s = i.trim().split(Xb).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, h = s.length; u < h; u += 1) {
      const p = s[u];
      let d = !1, g = -1;
      for (; !d && ++g < _v; ) {
        const y = Eh[g];
        let b = y.isMultiMatch(p);
        b && (o.push(new y(b, r)), d = !0);
      }
      if (!d)
        for (g = -1; ++g < _v; ) {
          const y = Eh[g];
          let b = y.isSingleMatch(p);
          if (b) {
            o.push(new y(b, r));
            break;
          }
        }
    }
    return o;
  });
}
const Kb = /* @__PURE__ */ new Set([f0.type, h0.type]);
class Jb {
  constructor(r, {
    isCaseSensitive: i = Te.isCaseSensitive,
    ignoreDiacritics: s = Te.ignoreDiacritics,
    includeMatches: o = Te.includeMatches,
    minMatchCharLength: u = Te.minMatchCharLength,
    ignoreLocation: h = Te.ignoreLocation,
    findAllMatches: p = Te.findAllMatches,
    location: d = Te.location,
    threshold: g = Te.threshold,
    distance: y = Te.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: h,
      location: d,
      threshold: g,
      distance: y
    }, r = i ? r : r.toLowerCase(), r = s ? pu(r) : r, this.pattern = r, this.query = Qb(this.pattern, this.options);
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
    r = o ? r : r.toLowerCase(), r = u ? pu(r) : r;
    let h = 0, p = [], d = 0;
    for (let g = 0, y = i.length; g < y; g += 1) {
      const b = i[g];
      p.length = 0, h = 0;
      for (let _ = 0, v = b.length; _ < v; _ += 1) {
        const f = b[_], { isMatch: S, indices: x, score: O } = f.search(r);
        if (S) {
          if (h += 1, d += O, s) {
            const w = f.constructor.type;
            Kb.has(w) ? p = [...p, ...x] : p.push(x);
          }
        } else {
          d = 0, h = 0, p.length = 0;
          break;
        }
      }
      if (h) {
        let _ = {
          isMatch: !0,
          score: d / h
        };
        return s && (_.indices = p), _;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Ch = [];
function Wb(...t) {
  Ch.push(...t);
}
function wh(t, r) {
  for (let i = 0, s = Ch.length; i < s; i += 1) {
    let o = Ch[i];
    if (o.condition(t, r))
      return new o(t, r);
  }
  return new c0(t, r);
}
const mu = {
  AND: "$and",
  OR: "$or"
}, Ah = {
  PATH: "$path",
  PATTERN: "$val"
}, Th = (t) => !!(t[mu.AND] || t[mu.OR]), eS = (t) => !!t[Ah.PATH], tS = (t) => !Er(t) && s0(t) && !Th(t), bv = (t) => ({
  [mu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function d0(t, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const h = eS(o);
    if (!h && u.length > 1 && !Th(o))
      return s(bv(o));
    if (tS(o)) {
      const d = h ? o[Ah.PATH] : u[0], g = h ? o[Ah.PATTERN] : o[d];
      if (!Kn(g))
        throw new Error(Ab(d));
      const y = {
        keyId: xh(d),
        pattern: g
      };
      return i && (y.searcher = wh(g, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((d) => {
      const g = o[d];
      Er(g) && g.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return Th(t) || (t = bv(t)), s(t);
}
function nS(t, { ignoreFieldNorm: r = Te.ignoreFieldNorm }) {
  t.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: o, norm: u, score: h }) => {
      const p = o ? o.weight : null;
      s *= Math.pow(
        h === 0 && p ? Number.EPSILON : h,
        (p || 1) * (r ? 1 : u)
      );
    }), i.score = s;
  });
}
function rS(t, r) {
  const i = t.matches;
  r.matches = [], mn(i) && i.forEach((s) => {
    if (!mn(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: u } = s;
    let h = {
      indices: o,
      value: u
    };
    s.key && (h.key = s.key.src), s.idx > -1 && (h.refIndex = s.idx), r.matches.push(h);
  });
}
function aS(t, r) {
  r.score = t.score;
}
function iS(t, r, {
  includeMatches: i = Te.includeMatches,
  includeScore: s = Te.includeScore
} = {}) {
  const o = [];
  return i && o.push(rS), s && o.push(aS), t.map((u) => {
    const { idx: h } = u, p = {
      item: r[h],
      refIndex: h
    };
    return o.length && o.forEach((d) => {
      d(u, p);
    }), p;
  });
}
class Bi {
  constructor(r, i = {}, s) {
    this.options = { ...Te, ...i }, this.options.useExtendedSearch, this._keyStore = new Db(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof $h))
      throw new Error(wb);
    this._myIndex = i || u0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    mn(r) && (this._docs.push(r), this._myIndex.add(r));
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
      sortFn: h,
      ignoreFieldNorm: p
    } = this.options;
    let d = Kn(r) ? Kn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return nS(d, { ignoreFieldNorm: p }), u && d.sort(h), i0(i) && i > -1 && (d = d.slice(0, i)), iS(d, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = wh(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: h, n: p }) => {
      if (!mn(u))
        return;
      const { isMatch: d, score: g, indices: y } = i.searchIn(u);
      d && o.push({
        item: u,
        idx: h,
        matches: [{ score: g, value: u, norm: p, indices: y }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = d0(r, this.options), s = (p, d, g) => {
      if (!p.children) {
        const { keyId: b, searcher: _ } = p, v = this._findMatches({
          key: this._keyStore.get(b),
          value: this._myIndex.getValueForItemAtKeyId(d, b),
          searcher: _
        });
        return v && v.length ? [
          {
            idx: g,
            item: d,
            matches: v
          }
        ] : [];
      }
      const y = [];
      for (let b = 0, _ = p.children.length; b < _; b += 1) {
        const v = p.children[b], f = s(v, d, g);
        if (f.length)
          y.push(...f);
        else if (p.operator === mu.AND)
          return [];
      }
      return y;
    }, o = this._myIndex.records, u = {}, h = [];
    return o.forEach(({ $: p, i: d }) => {
      if (mn(p)) {
        let g = s(i, p, d);
        g.length && (u[d] || (u[d] = { idx: d, item: p, matches: [] }, h.push(u[d])), g.forEach(({ matches: y }) => {
          u[d].matches.push(...y);
        }));
      }
    }), h;
  }
  _searchObjectList(r) {
    const i = wh(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: h, i: p }) => {
      if (!mn(h))
        return;
      let d = [];
      s.forEach((g, y) => {
        d.push(
          ...this._findMatches({
            key: g,
            value: h[y],
            searcher: i
          })
        );
      }), d.length && u.push({
        idx: p,
        item: h,
        matches: d
      });
    }), u;
  }
  _findMatches({ key: r, value: i, searcher: s }) {
    if (!mn(i))
      return [];
    let o = [];
    if (Er(i))
      i.forEach(({ v: u, i: h, n: p }) => {
        if (!mn(u))
          return;
        const { isMatch: d, score: g, indices: y } = s.searchIn(u);
        d && o.push({
          score: g,
          key: r,
          value: u,
          idx: h,
          norm: p,
          indices: y
        });
      });
    else {
      const { v: u, n: h } = i, { isMatch: p, score: d, indices: g } = s.searchIn(u);
      p && o.push({ score: d, key: r, value: u, norm: h, indices: g });
    }
    return o;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = u0;
Bi.parseIndex = Ib;
Bi.config = Te;
Bi.parseQuery = d0;
Wb(Jb);
var sS = Object.defineProperty, lS = (t, r, i) => r in t ? sS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, oS = (t, r, i) => lS(t, r + "", i);
let uS = class {
  constructor() {
    oS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
    const o = SillyTavern.getContext(), u = o.uuidv4(), h = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: i?.abortController,
      isStream: h,
      options: i
    }), h)
      try {
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        i != null && i.onStart && await i.onStart(u);
        let d;
        for await (const g of p())
          d = g, i != null && i.onEntry && await i.onEntry(u, g);
        i != null && i.onFinish && await i.onFinish(u, d);
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
async function cS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function De(t, r, { escapeHtml: i = !0 } = {}) {
  await cS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function Wf(t) {
  return H_(t);
}
function Sv(t, r) {
  return B_(t, r);
}
function Co(t, r, i) {
  return U_(t, r, i);
}
function fS(t, r, i) {
  return Y_(t, r, i);
}
function hS(t, r) {
  return X_(t, r);
}
function dS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return I_(t, { customStoryString: r, customInstructSettings: i });
}
function wa(t) {
  return eb(t);
}
function pS() {
  return {
    prompt: Ls[Ps.prompt],
    interval: Ls[Ps.interval],
    position: Ls[Ps.position],
    depth: Ls[Ps.depth],
    role: Ls[Ps.role]
  };
}
function mS(t, r) {
  return nb(t, r);
}
function gS({
  name2: t,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: o,
  worldInfoAfter: u,
  bias: h,
  type: p,
  quietPrompt: d,
  quietImage: g,
  extensionPrompts: y,
  cyclePrompt: b,
  systemPromptOverride: _,
  jailbreakPromptOverride: v,
  personaDescription: f,
  messages: S,
  messageExamples: x
}, O) {
  return tb(
    {
      name2: t,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: o,
      worldInfoAfter: u,
      bias: h,
      type: p,
      quietPrompt: d,
      quietImage: g,
      cyclePrompt: b,
      systemPromptOverride: _,
      jailbreakPromptOverride: v,
      personaDescription: f,
      extensionPrompts: y,
      messages: S,
      messageExamples: x
    },
    O
  );
}
function vS(t) {
  return Q_(t);
}
function yS(t) {
  return K_(t);
}
function _S(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: h
}) {
  return rb(t, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: u, depth: h });
}
async function bS(t, r) {
  return await $_(t, r);
}
function xv(t, {
  wiFormat: r
} = {}) {
  return J_(t, { wiFormat: r });
}
function Us(t) {
  return W_(t);
}
function SS(t, r) {
  return F_(t, r);
}
class xS {
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
var ES = Object.defineProperty, CS = (t, r, i) => r in t ? ES(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, wo = (t, r, i) => CS(t, typeof r != "symbol" ? r + "" : r, i);
class wS {
  constructor(r) {
    wo(this, "messages", []), wo(this, "tokenizer"), wo(this, "maxContext"), wo(this, "currentTokenCount", 0), this.tokenizer = new xS(), this.maxContext = r;
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
    const i = r.filter((p) => p.content), s = i.map((p) => this.getTokenCount(p)), o = s.reduce((p, d) => p + d, 0);
    if (this.currentTokenCount + o <= this.maxContext)
      return this.messages.push(...i), this.currentTokenCount += o, !0;
    let u = 0;
    const h = [];
    for (let p = i.length - 1; p >= 0; p--) {
      const d = i[p], g = s[p];
      if (this.currentTokenCount + u + g <= this.maxContext)
        h.unshift(d), u += g;
      else
        break;
    }
    return h.length > 0 && (this.messages.push(...h), this.currentTokenCount += u), h.length === i.length;
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
async function p0(t, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: h,
  includeNames: p,
  ignoreCharacterFields: d,
  ignoreAuthorNote: g,
  ignoreWorldInfo: y,
  messageIndexesBetween: b
} = {}) {
  var _, v, f, S, x, O, w, D, E, T, M, k, q, G;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const B = SillyTavern.getContext();
  let { description: V, personality: $, persona: oe, scenario: he, mesExamples: ge, system: U, jailbreak: ne } = d ? {
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
  const ce = t === "textgenerationwebui" ? (_ = B.getPresetManager("instruct")) == null ? void 0 : _.getCompletionPresetByName(s) : void 0, Re = !!(ce != null && ce.enabled);
  let j = Sv(ge, Re);
  function K() {
    var pe, ue;
    if (typeof h == "number")
      return h;
    if (!h || h === "active" || !i)
      return Wf();
    if (typeof h == "number")
      return h;
    let ke;
    if (t === "textgenerationwebui") {
      const Ze = (pe = B.getPresetManager("textgenerationwebui")) == null ? void 0 : pe.getCompletionPresetByName(i);
      ke = Ze?.max_length;
    } else {
      const Ze = (ue = B.getPresetManager("openai")) == null ? void 0 : ue.getCompletionPresetByName(i);
      ke = Ze?.openai_max_context;
    }
    return typeof ke == "number" ? ke : Wf();
  }
  let ae = [];
  const se = K();
  if (se <= 0)
    return { result: [], warnings: ae };
  const le = new wS(se), ze = B.ToolManager.isToolCallingSupported(), Y = b?.start ?? 0, ye = b != null && b.end ? b.end + 1 : void 0;
  let _e = Y === -1 && ye === 0 ? [] : B.chat.slice(Y, ye).filter((pe) => {
    var ue;
    return !pe.is_system || ze && Array.isArray((ue = pe.extra) == null ? void 0 : ue.tool_invocations);
  });
  _e = await Promise.all(
    _e.map(async (pe, ue) => {
      var ke, Ze;
      let it = pe.mes, Ar = pe.is_user ? tv.USER_INPUT : tv.AI_OUTPUT, er = { isPrompt: !0, depth: _e.length - ue - 1 }, mt = _S(it, Ar, er);
      return mt = await bS(pe, mt), (ke = pe?.extra) != null && ke.append_title && (Ze = pe?.extra) != null && Ze.title && (mt = `${mt}

${pe.extra.title}`), {
        ...pe,
        mes: mt,
        index: ue
      };
    })
  );
  const Ge = _e.map((pe) => G_ ? `${pe.name}: ${pe.mes}` : pe.mes).reverse(), { worldInfoString: at, worldInfoBefore: L, worldInfoAfter: ee, worldInfoExamples: re, worldInfoDepth: de, anBefore: Ve, anAfter: ve } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await B.getWorldInfoPrompt(Ge, se, !1);
  for (const pe of re) {
    const ue = pe.content;
    if (ue.length === 0)
      continue;
    const ke = Co(ue, _r, Qr), Ze = Sv(ke, Re);
    pe.position === V_.before ? j.unshift(...Ze) : j.push(...Ze);
  }
  function Oe() {
    const pe = [];
    for (let ue = _e.length - 1; ue >= 0; ue--) {
      const ke = _e[ue], Ze = ke.name === "System" && !ke.is_user ? "system" : ke.is_user ? "user" : "assistant";
      pe.unshift({
        role: Ze,
        content: p && Ze != "system" ? `${ke.name}: ${ke.mes}` : ke.mes,
        source: ke
      });
    }
    le.addMany(pe);
  }
  if (t === "textgenerationwebui") {
    const pe = [...j];
    j && (j = fS(j, _r, Qr));
    const ue = (v = B.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    ue && (U = B.powerUserSettings.prefer_character_prompt && U ? U : Co(ue.content, _r, Qr), U = Re ? hS(
      B.substituteParams(U, _r, Qr, ue.content),
      ce
    ) : U);
    const ke = {
      description: V,
      personality: $,
      persona: B.powerUserSettings.persona_description_position == Wg.IN_PROMPT ? oe : "",
      scenario: he,
      system: U,
      char: Qr,
      user: _r,
      wiBefore: L,
      wiAfter: ee,
      loreBefore: L,
      loreAfter: ee,
      mesExamples: j.join(""),
      mesExamplesRaw: pe.join("")
    }, Ze = (f = B.getPresetManager("context")) == null ? void 0 : f.getCompletionPresetByName(o);
    let it = dS(ke, {
      customInstructSettings: ce,
      customStoryString: Ze?.story_string
    });
    it && le.add({ role: "system", content: it, ignoreInstruct: !0 }), Oe();
  } else {
    let pe = function(qt) {
      const Vt = yn.find((Ba) => Ba.identifier === qt);
      if (Vt)
        return Vt;
      const fl = it.prompts.find((Ba) => Ba.identifier === qt);
      if (fl)
        return fl;
    }, ue = vS(_e), ke = yS(j);
    async function Ze() {
      let [qt, Vt] = await gS(
        {
          name2: Qr,
          charDescription: V,
          charPersonality: $,
          Scenario: he,
          worldInfoBefore: L,
          worldInfoAfter: ee,
          extensionPrompts: B.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: ne,
          personaDescription: oe,
          messages: ue,
          messageExamples: ke
        },
        !1
      );
      le.addMany(qt);
    }
    if (!i)
      return ae.push("No preset name provided. Using default preset."), await Ze(), { result: le.getMessages(), warnings: ae };
    const it = (S = B.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(i);
    if (!it)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ae.push(`Preset not found: ${i}. Using current preset.`), Ze(), { result: le.getMessages(), warnings: ae };
    let Ar = (x = it.prompt_order) == null ? void 0 : x.find((qt) => qt.character_id === vn);
    if (!Ar && it.prompt_order && it.prompt_order.length > 0 && (Ar = it.prompt_order[it.prompt_order.length - 1]), !Ar)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ae.push(`No prompt order found for preset: ${i}. Using current preset.`), Ze(), { result: le.getMessages(), warnings: ae };
    const er = he && it.scenario_format ? B.substituteParams(it.scenario_format) : "", mt = $ && it.personality_format ? B.substituteParams(it.personality_format) : "", qn = B.substituteParams(it.group_nudge_prompt), Ht = it.impersonation_prompt ? B.substituteParams(it.impersonation_prompt) : "", yn = [];
    y || yn.push(
      {
        role: "system",
        content: xv(L, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: xv(ee, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), d || yn.push(
      { role: "system", content: V, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: er, identifier: "scenario" }
    ), yn.push(
      { role: "system", content: Ht, identifier: "impersonate" },
      { role: "system", content: qn, identifier: "groupNudge" }
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
    const tr = B.extensionPrompts["3_vectors"];
    tr && tr.value && yn.push({
      role: "system",
      content: tr.value,
      identifier: "vectorsMemory",
      position: Us(tr.position)
    });
    const Zn = B.extensionPrompts["4_vectors_data_bank"];
    Zn && Zn.value && yn.push({
      role: wa(Zn.role),
      content: Zn.value,
      identifier: "vectorsDataBank",
      position: Us(Zn.position)
    });
    const _n = B.extensionPrompts.chromadb;
    _n && _n.value && yn.push({
      role: "system",
      content: _n.value,
      identifier: "smartContext",
      position: Us(_n.position)
    }), !d && B.powerUserSettings.persona_description && B.powerUserSettings.persona_description_position === Wg.IN_PROMPT && yn.push({
      role: "system",
      content: B.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ar.order.forEach((qt) => {
      if (!qt.enabled)
        return;
      const Vt = pe(qt.identifier);
      if (Vt && Vt.content) {
        le.add({
          role: Vt.role ?? "system",
          content: B.substituteParams(Vt.content)
        });
        return;
      }
      qt.identifier === "chatHistory" && Oe();
    });
  }
  const qe = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const pe in B.extensionPrompts)
    if (Object.hasOwn(B.extensionPrompts, pe)) {
      const ue = B.extensionPrompts[pe];
      if (qe.includes(pe) || !B.extensionPrompts[pe].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(ue.position) || typeof ue.filter == "function" && !await ue.filter()) continue;
      const ke = {
        role: wa(ue.role) ?? "system",
        content: ue.value
      };
      if (ue.position === Ca.BEFORE_PROMPT)
        le.insert(ue.depth, ke);
      else if (ue.position === Ca.IN_PROMPT) {
        const Ze = le.getMessages();
        le.insert(Ze.length - ue.depth, ke);
      }
    }
  for (const pe of de) {
    const ue = le.getMessages();
    le.insert(ue.length - pe.depth, {
      role: wa(pe.role),
      content: pe.entries.join(`
`)
    });
  }
  if (!d) {
    const pe = mS(Sr, Number(vn));
    if (Sr && Array.isArray(pe) && pe.length > 0)
      pe.filter((ue) => ue.text).forEach((ue, ke) => {
        const Ze = le.getMessages();
        le.insert(Ze.length - ue.depth, { role: ue.role, content: ue.text });
      });
    else {
      const ue = Co(
        (T = (E = (D = (w = (O = B.characters[vn]) == null ? void 0 : O.data) == null ? void 0 : w.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : T.trim(),
        _r,
        Qr
      ) || "";
      if (ue) {
        const ke = Z_, Ze = ((G = (q = (k = (M = B.characters[vn]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : q.depth_prompt) == null ? void 0 : G.role) ?? q_, it = le.getMessages();
        le.insert(it.length - ke, {
          role: wa(Ze),
          content: ue
        });
      }
    }
  }
  let Xe = -1;
  if (!g) {
    const pe = pS();
    if (pe.prompt) {
      pe.prompt = Co(pe.prompt, _r, Qr);
      const ue = { role: wa(pe.role), content: pe.prompt };
      switch (pe.position) {
        case Ca.IN_PROMPT:
          le.insert(1, ue), Xe = 1;
          break;
        case Ca.IN_CHAT:
          Xe = le.getMessages().length - pe.depth, le.insert(Xe, ue);
          break;
        case Ca.BEFORE_PROMPT:
          le.addFront(ue), Xe = 0;
          break;
      }
    }
  }
  return Xe >= 0 && (Ve.length > 0 && (le.insert(Xe, { role: "system", content: Ve.join(`
`) }), Xe++), ve.length > 0 && le.insert(Xe + 1, { role: "system", content: ve.join(`
`) })), { result: le.getMessages(), warnings: ae };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Ev(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function Wn(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ev(Object(i), !0).forEach(function(s) {
      AS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ev(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function ou(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ou = function(r) {
    return typeof r;
  } : ou = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ou(t);
}
function AS(t, r, i) {
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
function TS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (i[o] = t[o]);
  return i;
}
function OS(t, r) {
  if (t == null) return {};
  var i = TS(t, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var NS = "1.15.6";
function xr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var wr = xr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ll = xr(/Edge/i), Cv = xr(/firefox/i), Ws = xr(/safari/i) && !xr(/chrome/i) && !xr(/android/i), Qh = xr(/iP(ad|od|hone)/i), m0 = xr(/chrome/i) && xr(/android/i), g0 = {
  capture: !1,
  passive: !1
};
function Ue(t, r, i) {
  t.addEventListener(r, i, !wr && g0);
}
function Be(t, r, i) {
  t.removeEventListener(r, i, !wr && g0);
}
function gu(t, r) {
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
function v0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Bn(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && gu(t, r) : gu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = v0(t));
  }
  return null;
}
var wv = /\s+/g;
function dn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(wv, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(wv, " ");
    }
}
function we(t, r, i) {
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
      var s = we(t, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (t = t.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function y0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), o = 0, u = s.length;
    if (i)
      for (; o < u; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function Jn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function xt(t, r, i, s, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, h, p, d, g, y, b;
    if (t !== window && t.parentNode && t !== Jn() ? (u = t.getBoundingClientRect(), h = u.top, p = u.left, d = u.bottom, g = u.right, y = u.height, b = u.width) : (h = 0, p = 0, d = window.innerHeight, g = window.innerWidth, y = window.innerHeight, b = window.innerWidth), (r || i) && t !== window && (o = o || t.parentNode, !wr))
      do
        if (o && o.getBoundingClientRect && (we(o, "transform") !== "none" || i && we(o, "position") !== "static")) {
          var _ = o.getBoundingClientRect();
          h -= _.top + parseInt(we(o, "border-top-width")), p -= _.left + parseInt(we(o, "border-left-width")), d = h + u.height, g = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && t !== window) {
      var v = zi(o || t), f = v && v.a, S = v && v.d;
      v && (h /= S, p /= f, b /= f, y /= S, d = h + y, g = p + b);
    }
    return {
      top: h,
      left: p,
      bottom: d,
      right: g,
      width: b,
      height: y
    };
  }
}
function Av(t, r, i) {
  for (var s = ta(t, !0), o = xt(t)[r]; s; ) {
    var u = xt(s)[i], h = void 0;
    if (h = o >= u, !h) return s;
    if (s === Jn()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Ii(t, r, i, s) {
  for (var o = 0, u = 0, h = t.children; u < h.length; ) {
    if (h[u].style.display !== "none" && h[u] !== Ae.ghost && (s || h[u] !== Ae.dragged) && Bn(h[u], i.draggable, t, !1)) {
      if (o === r)
        return h[u];
      o++;
    }
    u++;
  }
  return null;
}
function Kh(t, r) {
  for (var i = t.lastElementChild; i && (i === Ae.ghost || we(i, "display") === "none" || r && !gu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function Dn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Ae.clone && (!r || gu(t, r)) && i++;
  return i;
}
function Tv(t) {
  var r = 0, i = 0, s = Jn();
  if (t)
    do {
      var o = zi(t), u = o.a, h = o.d;
      r += t.scrollLeft * u, i += t.scrollTop * h;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function DS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function ta(t, r) {
  if (!t || !t.getBoundingClientRect) return Jn();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = we(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return Jn();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return Jn();
}
function MS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function eh(t, r) {
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
function kS() {
  clearTimeout(el), el = void 0;
}
function b0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function S0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function x0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(o) {
    var u, h, p, d;
    if (!(!Bn(o, r.draggable, t, !1) || o.animated || o === i)) {
      var g = xt(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((h = s.top) !== null && h !== void 0 ? h : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((d = s.bottom) !== null && d !== void 0 ? d : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var tn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function RS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(we(o, "display") === "none" || o === Ae.ghost)) {
            t.push({
              target: o,
              rect: xt(o)
            });
            var u = Wn({}, t[t.length - 1].rect);
            if (o.thisAnimationDuration) {
              var h = zi(o, !0);
              h && (u.top -= h.f, u.left -= h.e);
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
      t.splice(DS(t, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, h = 0;
      t.forEach(function(p) {
        var d = 0, g = p.target, y = g.fromRect, b = xt(g), _ = g.prevFromRect, v = g.prevToRect, f = p.rect, S = zi(g, !0);
        S && (b.top -= S.f, b.left -= S.e), g.toRect = b, g.thisAnimationDuration && eh(_, b) && !eh(y, b) && // Make sure animatingRect is on line between toRect & fromRect
        (f.top - b.top) / (f.left - b.left) === (y.top - b.top) / (y.left - b.left) && (d = zS(f, _, v, o.options)), eh(b, y) || (g.prevFromRect = y, g.prevToRect = b, d || (d = o.options.animation), o.animate(g, f, b, d)), d && (u = !0, h = Math.max(h, d), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, d), g.thisAnimationDuration = d);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, h) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, o, u, h) {
      if (h) {
        we(s, "transition", ""), we(s, "transform", "");
        var p = zi(this.el), d = p && p.a, g = p && p.d, y = (o.left - u.left) / (d || 1), b = (o.top - u.top) / (g || 1);
        s.animatingX = !!y, s.animatingY = !!b, we(s, "transform", "translate3d(" + y + "px," + b + "px,0)"), this.forRepaintDummy = jS(s), we(s, "transition", "transform " + h + "ms" + (this.options.easing ? " " + this.options.easing : "")), we(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          we(s, "transition", ""), we(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, h);
      }
    }
  };
}
function jS(t) {
  return t.offsetWidth;
}
function zS(t, r, i, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var Ai = [], th = {
  initializeByDefault: !0
}, ol = {
  mount: function(r) {
    for (var i in th)
      th.hasOwnProperty(i) && !(i in r) && (r[i] = th[i]);
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
    Ai.forEach(function(h) {
      i[h.pluginName] && (i[h.pluginName][u] && i[h.pluginName][u](Wn({
        sortable: i
      }, s)), i.options[h.pluginName] && i[h.pluginName][r] && i[h.pluginName][r](Wn({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    Ai.forEach(function(p) {
      var d = p.pluginName;
      if (!(!r.options[d] && !p.initializeByDefault)) {
        var g = new p(r, i, r.options);
        g.sortable = r, g.options = r.options, r[d] = g, Cr(s, g.defaults);
      }
    });
    for (var u in r.options)
      if (r.options.hasOwnProperty(u)) {
        var h = this.modifyOption(r, u, r.options[u]);
        typeof h < "u" && (r.options[u] = h);
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
function LS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, o = t.targetEl, u = t.cloneEl, h = t.toEl, p = t.fromEl, d = t.oldIndex, g = t.newIndex, y = t.oldDraggableIndex, b = t.newDraggableIndex, _ = t.originalEvent, v = t.putSortable, f = t.extraEventProperties;
  if (r = r || i && i[tn], !!r) {
    var S, x = r.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !wr && !ll ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = h || i, S.from = p || i, S.item = o || i, S.clone = u, S.oldIndex = d, S.newIndex = g, S.oldDraggableIndex = y, S.newDraggableIndex = b, S.originalEvent = _, S.pullMode = v ? v.lastPutMode : void 0;
    var w = Wn(Wn({}, f), ol.getEventProperties(s, r));
    for (var D in w)
      S[D] = w[D];
    i && i.dispatchEvent(S), x[O] && x[O].call(r, S);
  }
}
var PS = ["evt"], Jt = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = OS(s, PS);
  ol.pluginEvent.bind(Ae)(r, i, Wn({
    dragEl: ie,
    parentEl: pt,
    ghostEl: Ne,
    rootEl: lt,
    nextEl: Oa,
    lastDownEl: uu,
    cloneEl: ct,
    cloneHidden: ea,
    dragStarted: $s,
    putSortable: zt,
    activeSortable: Ae.active,
    originalEvent: o,
    oldIndex: Ri,
    oldDraggableIndex: tl,
    newIndex: pn,
    newDraggableIndex: Wr,
    hideGhostForTarget: A0,
    unhideGhostForTarget: T0,
    cloneNowHidden: function() {
      ea = !0;
    },
    cloneNowShown: function() {
      ea = !1;
    },
    dispatchSortableEvent: function(p) {
      Ft({
        sortable: i,
        name: p,
        originalEvent: o
      });
    }
  }, u));
};
function Ft(t) {
  LS(Wn({
    putSortable: zt,
    cloneEl: ct,
    targetEl: ie,
    rootEl: lt,
    oldIndex: Ri,
    oldDraggableIndex: tl,
    newIndex: pn,
    newDraggableIndex: Wr
  }, t));
}
var ie, pt, Ne, lt, Oa, uu, ct, ea, Ri, pn, tl, Wr, Ao, zt, ki = !1, vu = !1, yu = [], Aa, Pn, nh, rh, Ov, Nv, $s, Ti, nl, rl = !1, To = !1, cu, Ut, ah = [], Oh = !1, _u = [], Ou = typeof document < "u", Oo = Qh, Dv = ll || wr ? "cssFloat" : "float", IS = Ou && !m0 && !Qh && "draggable" in document.createElement("div"), E0 = (function() {
  if (Ou) {
    if (wr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), C0 = function(r, i) {
  var s = we(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Ii(r, 0, i), h = Ii(r, 1, i), p = u && we(u), d = h && we(h), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + xt(u).width, y = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + xt(h).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var b = p.float === "left" ? "left" : "right";
    return h && (d.clear === "both" || d.clear === b) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= o && s[Dv] === "none" || h && s[Dv] === "none" && g + y > o) ? "vertical" : "horizontal";
}, BS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, h = s ? r.width : r.height, p = s ? i.left : i.top, d = s ? i.right : i.bottom, g = s ? i.width : i.height;
  return o === p || u === d || o + h / 2 === p + g / 2;
}, US = function(r, i) {
  var s;
  return yu.some(function(o) {
    var u = o[tn].options.emptyInsertThreshold;
    if (!(!u || Kh(o))) {
      var h = xt(o), p = r >= h.left - u && r <= h.right + u, d = i >= h.top - u && i <= h.bottom + u;
      if (p && d)
        return s = o;
    }
  }), s;
}, w0 = function(r) {
  function i(u, h) {
    return function(p, d, g, y) {
      var b = p.options.group.name && d.options.group.name && p.options.group.name === d.options.group.name;
      if (u == null && (h || b))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (h && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, d, g, y), h)(p, d, g, y);
      var _ = (h ? p : d).options.group.name;
      return u === !0 || typeof u == "string" && u === _ || u.join && u.indexOf(_) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || ou(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, A0 = function() {
  !E0 && Ne && we(Ne, "display", "none");
}, T0 = function() {
  !E0 && Ne && we(Ne, "display", "");
};
Ou && !m0 && document.addEventListener("click", function(t) {
  if (vu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), vu = !1, !1;
}, !0);
var Ta = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var i = US(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[tn]._onDragOver(s);
    }
  }
}, HS = function(r) {
  ie && ie.parentNode[tn]._isOutsideThisEl(r.target);
};
function Ae(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Cr({}, r), t[tn] = this;
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
      return C0(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(h, p) {
      h.setData("Text", p.textContent);
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
    supportPointer: Ae.supportPointer !== !1 && "PointerEvent" in window && (!Ws || Qh),
    emptyInsertThreshold: 5
  };
  ol.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  w0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : IS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ue(t, "pointerdown", this._onTapStart) : (Ue(t, "mousedown", this._onTapStart), Ue(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ue(t, "dragover", this), Ue(t, "dragenter", this)), yu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, RS());
}
Ae.prototype = /** @lends Sortable.prototype */
{
  constructor: Ae,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ti = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, h = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, d = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || d, y = o.filter;
      if ($S(s), !ie && !(/mousedown|pointerdown/.test(h) && r.button !== 0 || o.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Ws && d && d.tagName.toUpperCase() === "SELECT") && (d = Bn(d, o.draggable, s, !1), !(d && d.animated) && uu !== d)) {
        if (Ri = Dn(d), tl = Dn(d, o.draggable), typeof y == "function") {
          if (y.call(this, r, d, this)) {
            Ft({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: d,
              toEl: s,
              fromEl: s
            }), Jt("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(b) {
          if (b = Bn(g, b.trim(), s, !1), b)
            return Ft({
              sortable: i,
              rootEl: b,
              name: "filter",
              targetEl: d,
              fromEl: s,
              toEl: s
            }), Jt("filter", i, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Bn(g, o.handle, s, !1) || this._prepareDragStart(r, p, d);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, h = o.options, p = u.ownerDocument, d;
    if (s && !ie && s.parentNode === u) {
      var g = xt(s);
      if (lt = u, ie = s, pt = ie.parentNode, Oa = ie.nextSibling, uu = s, Ao = h.group, Ae.dragged = ie, Aa = {
        target: ie,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Ov = Aa.clientX - g.left, Nv = Aa.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ie.style["will-change"] = "all", d = function() {
        if (Jt("delayEnded", o, {
          evt: r
        }), Ae.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Cv && o.nativeDraggable && (ie.draggable = !0), o._triggerDragStart(r, i), Ft({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), dn(ie, h.chosenClass, !0);
      }, h.ignore.split(",").forEach(function(y) {
        y0(ie, y.trim(), ih);
      }), Ue(p, "dragover", Ta), Ue(p, "mousemove", Ta), Ue(p, "touchmove", Ta), h.supportPointer ? (Ue(p, "pointerup", o._onDrop), !this.nativeDraggable && Ue(p, "pointercancel", o._onDrop)) : (Ue(p, "mouseup", o._onDrop), Ue(p, "touchend", o._onDrop), Ue(p, "touchcancel", o._onDrop)), Cv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), Jt("delayStart", this, {
        evt: r
      }), h.delay && (!h.delayOnTouchOnly || i) && (!this.nativeDraggable || !(ll || wr))) {
        if (Ae.eventCanceled) {
          this._onDrop();
          return;
        }
        h.supportPointer ? (Ue(p, "pointerup", o._disableDelayedDrag), Ue(p, "pointercancel", o._disableDelayedDrag)) : (Ue(p, "mouseup", o._disableDelayedDrag), Ue(p, "touchend", o._disableDelayedDrag), Ue(p, "touchcancel", o._disableDelayedDrag)), Ue(p, "mousemove", o._delayedDragTouchMoveHandler), Ue(p, "touchmove", o._delayedDragTouchMoveHandler), h.supportPointer && Ue(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(d, h.delay);
      } else
        d();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && ih(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Be(r, "mouseup", this._disableDelayedDrag), Be(r, "touchend", this._disableDelayedDrag), Be(r, "touchcancel", this._disableDelayedDrag), Be(r, "pointerup", this._disableDelayedDrag), Be(r, "pointercancel", this._disableDelayedDrag), Be(r, "mousemove", this._delayedDragTouchMoveHandler), Be(r, "touchmove", this._delayedDragTouchMoveHandler), Be(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ue(document, "pointermove", this._onTouchMove) : i ? Ue(document, "touchmove", this._onTouchMove) : Ue(document, "mousemove", this._onTouchMove) : (Ue(ie, "dragend", this), Ue(lt, "dragstart", this._onDragStart));
    try {
      document.selection ? fu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (ki = !1, lt && ie) {
      Jt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ue(document, "dragover", HS);
      var s = this.options;
      !r && dn(ie, s.dragClass, !1), dn(ie, s.ghostClass, !0), Ae.active = this, r && this._appendGhost(), Ft({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Pn) {
      this._lastX = Pn.clientX, this._lastY = Pn.clientY, A0();
      for (var r = document.elementFromPoint(Pn.clientX, Pn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Pn.clientX, Pn.clientY), r !== i); )
        i = r;
      if (ie.parentNode[tn]._isOutsideThisEl(r), i)
        do {
          if (i[tn]) {
            var s = void 0;
            if (s = i[tn]._onDragOver({
              clientX: Pn.clientX,
              clientY: Pn.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = v0(i));
      T0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, h = Ne && zi(Ne, !0), p = Ne && h && h.a, d = Ne && h && h.d, g = Oo && Ut && Tv(Ut), y = (u.clientX - Aa.clientX + o.x) / (p || 1) + (g ? g[0] - ah[0] : 0) / (p || 1), b = (u.clientY - Aa.clientY + o.y) / (d || 1) + (g ? g[1] - ah[1] : 0) / (d || 1);
      if (!Ae.active && !ki) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Ne) {
        h ? (h.e += y - (nh || 0), h.f += b - (rh || 0)) : h = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: b
        };
        var _ = "matrix(".concat(h.a, ",").concat(h.b, ",").concat(h.c, ",").concat(h.d, ",").concat(h.e, ",").concat(h.f, ")");
        we(Ne, "webkitTransform", _), we(Ne, "mozTransform", _), we(Ne, "msTransform", _), we(Ne, "transform", _), nh = y, rh = b, Pn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ne) {
      var r = this.options.fallbackOnBody ? document.body : lt, i = xt(ie, !0, Oo, !0, r), s = this.options;
      if (Oo) {
        for (Ut = r; we(Ut, "position") === "static" && we(Ut, "transform") === "none" && Ut !== document; )
          Ut = Ut.parentNode;
        Ut !== document.body && Ut !== document.documentElement ? (Ut === document && (Ut = Jn()), i.top += Ut.scrollTop, i.left += Ut.scrollLeft) : Ut = Jn(), ah = Tv(Ut);
      }
      Ne = ie.cloneNode(!0), dn(Ne, s.ghostClass, !1), dn(Ne, s.fallbackClass, !0), dn(Ne, s.dragClass, !0), we(Ne, "transition", ""), we(Ne, "transform", ""), we(Ne, "box-sizing", "border-box"), we(Ne, "margin", 0), we(Ne, "top", i.top), we(Ne, "left", i.left), we(Ne, "width", i.width), we(Ne, "height", i.height), we(Ne, "opacity", "0.8"), we(Ne, "position", Oo ? "absolute" : "fixed"), we(Ne, "zIndex", "100000"), we(Ne, "pointerEvents", "none"), Ae.ghost = Ne, r.appendChild(Ne), we(Ne, "transform-origin", Ov / parseInt(Ne.style.width) * 100 + "% " + Nv / parseInt(Ne.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (Jt("dragStart", this, {
      evt: r
    }), Ae.eventCanceled) {
      this._onDrop();
      return;
    }
    Jt("setupClone", this), Ae.eventCanceled || (ct = S0(ie), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), dn(ct, this.options.chosenClass, !1), Ae.clone = ct), s.cloneId = fu(function() {
      Jt("clone", s), !Ae.eventCanceled && (s.options.removeCloneOnHide || lt.insertBefore(ct, ie), s._hideClone(), Ft({
        sortable: s,
        name: "clone"
      }));
    }), !i && dn(ie, u.dragClass, !0), i ? (vu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Be(document, "mouseup", s._onDrop), Be(document, "touchend", s._onDrop), Be(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, ie)), Ue(document, "drop", s), we(ie, "transform", "translateZ(0)")), ki = !0, s._dragStartId = fu(s._dragStarted.bind(s, i, r)), Ue(document, "selectstart", s), $s = !0, window.getSelection().removeAllRanges(), Ws && we(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, h, p = this.options, d = p.group, g = Ae.active, y = Ao === d, b = p.sort, _ = zt || g, v, f = this, S = !1;
    if (Oh) return;
    function x(ce, Re) {
      Jt(ce, f, Wn({
        evt: r,
        isOwner: y,
        axis: v ? "vertical" : "horizontal",
        revert: h,
        dragRect: o,
        targetRect: u,
        canSort: b,
        fromSortable: _,
        target: s,
        completed: w,
        onMove: function(K, ae) {
          return No(lt, i, ie, o, K, xt(K), r, ae);
        },
        changed: D
      }, Re));
    }
    function O() {
      x("dragOverAnimationCapture"), f.captureAnimationState(), f !== _ && _.captureAnimationState();
    }
    function w(ce) {
      return x("dragOverCompleted", {
        insertion: ce
      }), ce && (y ? g._hideClone() : g._showClone(f), f !== _ && (dn(ie, zt ? zt.options.ghostClass : g.options.ghostClass, !1), dn(ie, p.ghostClass, !0)), zt !== f && f !== Ae.active ? zt = f : f === Ae.active && zt && (zt = null), _ === f && (f._ignoreWhileAnimating = s), f.animateAll(function() {
        x("dragOverAnimationComplete"), f._ignoreWhileAnimating = null;
      }), f !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === i && !s.animated) && (Ti = null), !p.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[tn]._isOutsideThisEl(r.target), !ce && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      pn = Dn(ie), Wr = Dn(ie, p.draggable), Ft({
        sortable: f,
        name: "change",
        toEl: i,
        newIndex: pn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Bn(s, p.draggable, i, !0), x("dragOver"), Ae.eventCanceled) return S;
    if (ie.contains(r.target) || s.animated && s.animatingX && s.animatingY || f._ignoreWhileAnimating === s)
      return w(!1);
    if (vu = !1, g && !p.disabled && (y ? b || (h = pt !== lt) : zt === this || (this.lastPutMode = Ao.checkPull(this, g, ie, r)) && d.checkPut(this, g, ie, r))) {
      if (v = this._getDirection(r, s) === "vertical", o = xt(ie), x("dragOverValid"), Ae.eventCanceled) return S;
      if (h)
        return pt = lt, O(), this._hideClone(), x("revert"), Ae.eventCanceled || (Oa ? lt.insertBefore(ie, Oa) : lt.appendChild(ie)), w(!0);
      var E = Kh(i, p.draggable);
      if (!E || GS(r, v, this) && !E.animated) {
        if (E === ie)
          return w(!1);
        if (E && i === r.target && (s = E), s && (u = xt(s)), No(lt, i, ie, o, s, u, r, !!s) !== !1)
          return O(), E && E.nextSibling ? i.insertBefore(ie, E.nextSibling) : i.appendChild(ie), pt = i, D(), w(!0);
      } else if (E && FS(r, v, this)) {
        var T = Ii(i, 0, p, !0);
        if (T === ie)
          return w(!1);
        if (s = T, u = xt(s), No(lt, i, ie, o, s, u, r, !1) !== !1)
          return O(), i.insertBefore(ie, T), pt = i, D(), w(!0);
      } else if (s.parentNode === i) {
        u = xt(s);
        var M = 0, k, q = ie.parentNode !== i, G = !BS(ie.animated && ie.toRect || o, s.animated && s.toRect || u, v), B = v ? "top" : "left", V = Av(s, "top", "top") || Av(ie, "top", "top"), $ = V ? V.scrollTop : void 0;
        Ti !== s && (k = u[B], rl = !1, To = !G && p.invertSwap || q), M = VS(r, s, u, v, G ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, To, Ti === s);
        var oe;
        if (M !== 0) {
          var he = Dn(ie);
          do
            he -= M, oe = pt.children[he];
          while (oe && (we(oe, "display") === "none" || oe === Ne));
        }
        if (M === 0 || oe === s)
          return w(!1);
        Ti = s, nl = M;
        var ge = s.nextElementSibling, U = !1;
        U = M === 1;
        var ne = No(lt, i, ie, o, s, u, r, U);
        if (ne !== !1)
          return (ne === 1 || ne === -1) && (U = ne === 1), Oh = !0, setTimeout(ZS, 30), O(), U && !ge ? i.appendChild(ie) : s.parentNode.insertBefore(ie, U ? ge : s), V && b0(V, 0, $ - V.scrollTop), pt = ie.parentNode, k !== void 0 && !To && (cu = Math.abs(k - xt(s)[B])), D(), w(!0);
      }
      if (i.contains(ie))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Be(document, "mousemove", this._onTouchMove), Be(document, "touchmove", this._onTouchMove), Be(document, "pointermove", this._onTouchMove), Be(document, "dragover", Ta), Be(document, "mousemove", Ta), Be(document, "touchmove", Ta);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Be(r, "mouseup", this._onDrop), Be(r, "touchend", this._onDrop), Be(r, "pointerup", this._onDrop), Be(r, "pointercancel", this._onDrop), Be(r, "touchcancel", this._onDrop), Be(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (pn = Dn(ie), Wr = Dn(ie, s.draggable), Jt("drop", this, {
      evt: r
    }), pt = ie && ie.parentNode, pn = Dn(ie), Wr = Dn(ie, s.draggable), Ae.eventCanceled) {
      this._nulling();
      return;
    }
    ki = !1, To = !1, rl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Nh(this.cloneId), Nh(this._dragStartId), this.nativeDraggable && (Be(document, "drop", this), Be(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ws && we(document.body, "user-select", ""), we(ie, "transform", ""), r && ($s && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Ne && Ne.parentNode && Ne.parentNode.removeChild(Ne), (lt === pt || zt && zt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), ie && (this.nativeDraggable && Be(ie, "dragend", this), ih(ie), ie.style["will-change"] = "", $s && !ki && dn(ie, zt ? zt.options.ghostClass : this.options.ghostClass, !1), dn(ie, this.options.chosenClass, !1), Ft({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), lt !== pt ? (pn >= 0 && (Ft({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Ft({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), zt && zt.save()) : pn !== Ri && pn >= 0 && (Ft({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Ae.active && ((pn == null || pn === -1) && (pn = Ri, Wr = tl), Ft({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Jt("nulling", this), lt = ie = pt = Ne = Oa = ct = uu = ea = Aa = Pn = $s = pn = Wr = Ri = tl = Ti = nl = zt = Ao = Ae.dragged = Ae.ghost = Ae.clone = Ae.active = null, _u.forEach(function(r) {
      r.checked = !0;
    }), _u.length = nh = rh = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(r), qS(r));
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
    for (var r = [], i, s = this.el.children, o = 0, u = s.length, h = this.options; o < u; o++)
      i = s[o], Bn(i, h.draggable, this.el, !1) && r.push(i.getAttribute(h.dataIdAttr) || XS(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, o = this.el;
    this.toArray().forEach(function(u, h) {
      var p = o.children[h];
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
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && w0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Jt("destroy", this);
    var r = this.el;
    r[tn] = null, Be(r, "mousedown", this._onTapStart), Be(r, "touchstart", this._onTapStart), Be(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Be(r, "dragover", this), Be(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), yu.splice(yu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (Jt("hideClone", this), Ae.eventCanceled) return;
      we(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (Jt("showClone", this), Ae.eventCanceled) return;
      ie.parentNode == lt && !this.options.group.revertClone ? lt.insertBefore(ct, ie) : Oa ? lt.insertBefore(ct, Oa) : lt.appendChild(ct), this.options.group.revertClone && this.animate(ie, ct), we(ct, "display", ""), ea = !1;
    }
  }
};
function qS(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function No(t, r, i, s, o, u, h, p) {
  var d, g = t[tn], y = g.options.onMove, b;
  return window.CustomEvent && !wr && !ll ? d = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (d = document.createEvent("Event"), d.initEvent("move", !0, !0)), d.to = r, d.from = t, d.dragged = i, d.draggedRect = s, d.related = o || r, d.relatedRect = u || xt(r), d.willInsertAfter = p, d.originalEvent = h, t.dispatchEvent(d), y && (b = y.call(g, d, h)), b;
}
function ih(t) {
  t.draggable = !1;
}
function ZS() {
  Oh = !1;
}
function FS(t, r, i) {
  var s = xt(Ii(i.el, 0, i.options, !0)), o = x0(i.el, i.options, Ne), u = 10;
  return r ? t.clientX < o.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < o.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function GS(t, r, i) {
  var s = xt(Kh(i.el, i.options.draggable)), o = x0(i.el, i.options, Ne), u = 10;
  return r ? t.clientX > o.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > o.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function VS(t, r, i, s, o, u, h, p) {
  var d = s ? t.clientY : t.clientX, g = s ? i.height : i.width, y = s ? i.top : i.left, b = s ? i.bottom : i.right, _ = !1;
  if (!h) {
    if (p && cu < g * o) {
      if (!rl && (nl === 1 ? d > y + g * u / 2 : d < b - g * u / 2) && (rl = !0), rl)
        _ = !0;
      else if (nl === 1 ? d < y + cu : d > b - cu)
        return -nl;
    } else if (d > y + g * (1 - o) / 2 && d < b - g * (1 - o) / 2)
      return YS(r);
  }
  return _ = _ || h, _ && (d < y + g * u / 2 || d > b - g * u / 2) ? d > y + g / 2 ? 1 : -1 : 0;
}
function YS(t) {
  return Dn(ie) < Dn(t) ? 1 : -1;
}
function XS(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function $S(t) {
  _u.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && _u.push(s);
  }
}
function fu(t) {
  return setTimeout(t, 0);
}
function Nh(t) {
  return clearTimeout(t);
}
Ou && Ue(document, "touchmove", function(t) {
  (Ae.active || ki) && t.cancelable && t.preventDefault();
});
Ae.utils = {
  on: Ue,
  off: Be,
  css: we,
  find: y0,
  is: function(r, i) {
    return !!Bn(r, i, r, !1);
  },
  extend: MS,
  throttle: _0,
  closest: Bn,
  toggleClass: dn,
  clone: S0,
  index: Dn,
  nextTick: fu,
  cancelNextTick: Nh,
  detectDirection: C0,
  getChild: Ii,
  expando: tn
};
Ae.get = function(t) {
  return t[tn];
};
Ae.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Ae.utils = Wn(Wn({}, Ae.utils), s.utils)), ol.mount(s);
  });
};
Ae.create = function(t, r) {
  return new Ae(t, r);
};
Ae.version = NS;
var St = [], Qs, Dh, Mh = !1, sh, lh, bu, Ks;
function QS() {
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
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ue(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Ue(document, "touchmove", this._handleFallbackAutoScroll) : Ue(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Be(document, "dragover", this._handleAutoScroll) : (Be(document, "pointermove", this._handleFallbackAutoScroll), Be(document, "touchmove", this._handleFallbackAutoScroll), Be(document, "mousemove", this._handleFallbackAutoScroll)), Mv(), hu(), kS();
    },
    nulling: function() {
      bu = Dh = Qs = Mh = Ks = sh = lh = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, u = (i.touches ? i.touches[0] : i).clientX, h = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, h);
      if (bu = i, s || this.options.forceAutoScrollFallback || ll || wr || Ws) {
        oh(i, this.options, p, s);
        var d = ta(p, !0);
        Mh && (!Ks || u !== sh || h !== lh) && (Ks && Mv(), Ks = setInterval(function() {
          var g = ta(document.elementFromPoint(u, h), !0);
          g !== d && (d = g, hu()), oh(i, o.options, g, s);
        }, 10), sh = u, lh = h);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === Jn()) {
          hu();
          return;
        }
        oh(i, this.options, ta(p, !1), !1);
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
function Mv() {
  clearInterval(Ks);
}
var oh = _0(function(t, r, i, s) {
  if (r.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, h = r.scrollSensitivity, p = r.scrollSpeed, d = Jn(), g = !1, y;
    Dh !== i && (Dh = i, hu(), Qs = r.scroll, y = r.scrollFn, Qs === !0 && (Qs = ta(i, !0)));
    var b = 0, _ = Qs;
    do {
      var v = _, f = xt(v), S = f.top, x = f.bottom, O = f.left, w = f.right, D = f.width, E = f.height, T = void 0, M = void 0, k = v.scrollWidth, q = v.scrollHeight, G = we(v), B = v.scrollLeft, V = v.scrollTop;
      v === d ? (T = D < k && (G.overflowX === "auto" || G.overflowX === "scroll" || G.overflowX === "visible"), M = E < q && (G.overflowY === "auto" || G.overflowY === "scroll" || G.overflowY === "visible")) : (T = D < k && (G.overflowX === "auto" || G.overflowX === "scroll"), M = E < q && (G.overflowY === "auto" || G.overflowY === "scroll"));
      var $ = T && (Math.abs(w - o) <= h && B + D < k) - (Math.abs(O - o) <= h && !!B), oe = M && (Math.abs(x - u) <= h && V + E < q) - (Math.abs(S - u) <= h && !!V);
      if (!St[b])
        for (var he = 0; he <= b; he++)
          St[he] || (St[he] = {});
      (St[b].vx != $ || St[b].vy != oe || St[b].el !== v) && (St[b].el = v, St[b].vx = $, St[b].vy = oe, clearInterval(St[b].pid), ($ != 0 || oe != 0) && (g = !0, St[b].pid = setInterval((function() {
        s && this.layer === 0 && Ae.active._onTouchMove(bu);
        var ge = St[this.layer].vy ? St[this.layer].vy * p : 0, U = St[this.layer].vx ? St[this.layer].vx * p : 0;
        typeof y == "function" && y.call(Ae.dragged.parentNode[tn], U, ge, t, bu, St[this.layer].el) !== "continue" || b0(St[this.layer].el, U, ge);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (r.bubbleScroll && _ !== d && (_ = ta(_, !1)));
    Mh = g;
  }
}, 30), O0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, h = r.dispatchSortableEvent, p = r.hideGhostForTarget, d = r.unhideGhostForTarget;
  if (i) {
    var g = s || u;
    p();
    var y = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, b = document.elementFromPoint(y.clientX, y.clientY);
    d(), g && !g.el.contains(b) && (h("spill"), this.onSpill({
      dragEl: o,
      putSortable: s
    }));
  }
};
function Jh() {
}
Jh.prototype = {
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
  drop: O0
};
Cr(Jh, {
  pluginName: "revertOnSpill"
});
function Wh() {
}
Wh.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: O0
};
Cr(Wh, {
  pluginName: "removeOnSpill"
});
Ae.mount(new QS());
Ae.mount(Wh, Jh);
async function KS({
  entry: t,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: s = !1,
  operation: o = "auto"
}) {
  const u = SillyTavern.getContext(), h = await u.loadWorldInfo(r);
  if (!h)
    throw new Error("Failed to load world info");
  const p = Object.values(h.entries), d = p.length > 0 ? p[p.length - 1] : void 0;
  let g;
  if (o === "update" || o === "auto") {
    const b = Object.values(h.entries).find((_) => _.uid === t.uid);
    if (b)
      (o === "auto" || o === "update") && (g = b);
    else if (o === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = g ? "update" : "add";
  if (!g) {
    if (g = SS(r, h), !g)
      throw new Error("Failed to create entry");
    if (d) {
      const b = g.uid;
      Object.assign(g, d), g.uid = b;
    }
  }
  return g.key = t.key, g.content = t.content, g.comment = t.comment, i || await u.saveWorldInfo(r, h), s || u.reloadWorldInfoEditor(r, !0), {
    entry: g,
    operation: y
  };
}
const kh = `=======

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

=======`, Rh = `{{#if characters}}
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
{{/if}}`, JS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, WS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, ex = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, ed = "{{activeFormatInstructions}}", N0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, D0 = `### {{character.name}}
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
{{/is_not_empty}}`, tx = `## User's Persona Description
name: {{user}}
{{persona}}`, td = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, nx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", rx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", ax = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, M0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ix = M0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", sx = "[" + M0 + "][" + ix + "]*", lx = new RegExp("^" + sx + "$");
function k0(t, r) {
  const i = [];
  let s = r.exec(t);
  for (; s; ) {
    const o = [];
    o.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let h = 0; h < u; h++)
      o.push(s[h]);
    i.push(o), s = r.exec(t);
  }
  return i;
}
const nd = function(t) {
  const r = lx.exec(t);
  return !(r === null || typeof r > "u");
};
function ox(t) {
  return typeof t < "u";
}
const ux = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function R0(t, r) {
  r = Object.assign({}, ux, r);
  const i = [];
  let s = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Rv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let h = u;
      if (u++, t[u] === "!") {
        u = jv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let d = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          d += t[u];
        if (d = d.trim(), d[d.length - 1] === "/" && (d = d.substring(0, d.length - 1), u--), !vx(d)) {
          let b;
          return d.trim().length === 0 ? b = "Invalid space after '<'." : b = "Tag '" + d + "' is an invalid name.", yt("InvalidTag", b, Gt(t, u));
        }
        const g = hx(t, u);
        if (g === !1)
          return yt("InvalidAttr", "Attributes for '" + d + "' have open quote.", Gt(t, u));
        let y = g.value;
        if (u = g.index, y[y.length - 1] === "/") {
          const b = u - y.length;
          y = y.substring(0, y.length - 1);
          const _ = zv(y, r);
          if (_ === !0)
            s = !0;
          else
            return yt(_.err.code, _.err.msg, Gt(t, b + _.err.line));
        } else if (p)
          if (g.tagClosed) {
            if (y.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + d + "' can't have attributes or invalid starting.", Gt(t, h));
            if (i.length === 0)
              return yt("InvalidTag", "Closing tag '" + d + "' has not been opened.", Gt(t, h));
            {
              const b = i.pop();
              if (d !== b.tagName) {
                let _ = Gt(t, b.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + b.tagName + "' (opened in line " + _.line + ", col " + _.col + ") instead of closing tag '" + d + "'.",
                  Gt(t, h)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + d + "' doesn't have proper closing.", Gt(t, u));
        else {
          const b = zv(y, r);
          if (b !== !0)
            return yt(b.err.code, b.err.msg, Gt(t, u - y.length + b.err.line));
          if (o === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Gt(t, u));
          r.unpairedTags.indexOf(d) !== -1 || i.push({ tagName: d, tagStartPos: h }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = jv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Rv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const b = mx(t, u);
            if (b == -1)
              return yt("InvalidChar", "char '&' is not expected.", Gt(t, u));
            u = b;
          } else if (o === !0 && !kv(t[u]))
            return yt("InvalidXml", "Extra text at the end", Gt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (kv(t[u]))
        continue;
      return yt("InvalidChar", "char '" + t[u] + "' is not expected.", Gt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Gt(t, i[0].tagStartPos));
    if (i.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function kv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Rv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Gt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function jv(t, r) {
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
const cx = '"', fx = "'";
function hx(t, r) {
  let i = "", s = "", o = !1;
  for (; r < t.length; r++) {
    if (t[r] === cx || t[r] === fx)
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
const dx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function zv(t, r) {
  const i = k0(t, dx), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Hs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Hs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Hs(i[o]));
    const u = i[o][2];
    if (!gx(u))
      return yt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Hs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + u + "' is repeated.", Hs(i[o]));
  }
  return !0;
}
function px(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function mx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, px(t, r);
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
function gx(t) {
  return nd(t);
}
function vx(t) {
  return nd(t);
}
function Gt(t, r) {
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
const yx = {
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
}, _x = function(t) {
  return Object.assign({}, yx, t);
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
function bx(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, h = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (o && Ex(t, r)) {
          r += 7;
          let p, d;
          [p, d, r] = Sx(t, r + 1), d.indexOf("&") === -1 && (i[Tx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: d
          });
        } else if (o && Cx(t, r)) r += 8;
        else if (o && wx(t, r)) r += 8;
        else if (o && Ax(t, r)) r += 9;
        else if (xx) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, h = "";
      } else if (t[r] === ">") {
        if (u ? t[r - 1] === "-" && t[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else t[r] === "[" ? o = !0 : h += t[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: i, i: r };
}
function Sx(t, r) {
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
function xx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Ex(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Cx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function wx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Ax(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Tx(t) {
  if (nd(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Ox = /^[-+]?0x[a-fA-F0-9]+$/, Nx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Dx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Mx(t, r = {}) {
  if (r = Object.assign({}, Dx, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && Ox.test(i))
    return Rx(i, 16);
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
    const s = Nx.exec(i);
    if (s) {
      const o = s[1], u = s[2];
      let h = kx(s[3]);
      if (!r.leadingZeros && u.length > 0 && o && i[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !o && i[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(i), d = "" + p;
        return d.search(/[eE]/) !== -1 ? r.eNotation ? p : t : i.indexOf(".") !== -1 ? d === "0" && h === "" || d === h || o && d === "-" + h ? p : t : u ? h === d || o + h === d ? p : t : i === d || i === o + d ? p : t;
      }
    } else
      return t;
  }
}
function kx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Rx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function jx(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class zx {
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
    }, this.addExternalEntities = Lx, this.parseXml = Hx, this.parseTextData = Px, this.resolveNameSpace = Ix, this.buildAttributesMap = Ux, this.isItStopNode = Gx, this.replaceEntitiesValue = Zx, this.readStopNodeData = Yx, this.saveTextToParentTag = Fx, this.addChild = qx, this.ignoreAttributesFn = jx(this.options.ignoreAttributes);
  }
}
function Lx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function Px(t, r, i, s, o, u, h) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    h || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, o, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? zh(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? zh(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Ix(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const Bx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Ux(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = k0(t, Bx), o = s.length, u = {};
    for (let h = 0; h < o; h++) {
      const p = this.resolveNameSpace(s[h][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let d = s[h][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), d !== void 0) {
          this.options.trimValues && (d = d.trim()), d = this.replaceEntitiesValue(d);
          const y = this.options.attributeValueProcessor(p, d, r);
          y == null ? u[g] = d : typeof y != typeof d || y !== d ? u[g] = y : u[g] = zh(
            d,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[g] = !0);
    }
    if (!Object.keys(u).length)
      return;
    if (this.options.attributesGroupName) {
      const h = {};
      return h[this.options.attributesGroupName] = u, h;
    }
    return u;
  }
}
const Hx = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new qs("!xml");
  let i = r, s = "", o = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = ka(t, ">", u, "Closing Tag is not closed.");
        let d = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const b = d.indexOf(":");
          b !== -1 && (d = d.substr(b + 1));
        }
        this.options.transformTagName && (d = this.options.transformTagName(d)), i && (s = this.saveTextToParentTag(s, i, o));
        const g = o.substring(o.lastIndexOf(".") + 1);
        if (d && this.options.unpairedTags.indexOf(d) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${d}>`);
        let y = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (y = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = o.lastIndexOf("."), o = o.substring(0, y), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = jh(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, o), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const d = new qs(p.tagName);
          d.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (d[":@"] = this.buildAttributesMap(p.tagExp, o, p.tagName)), this.addChild(i, d, o);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = ka(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const d = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, o), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: d }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = bx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = ka(t, "]]>", u, "CDATA is not closed.") - 2, d = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, o);
        let g = this.parseTextData(d, i.tagname, o, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: d }]) : i.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = jh(t, u, this.options.removeNSPrefix), d = p.tagName;
        const g = p.rawTagName;
        let y = p.tagExp, b = p.attrExpPresent, _ = p.closeIndex;
        this.options.transformTagName && (d = this.options.transformTagName(d)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const v = i;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), d !== r.tagname && (o += o ? "." + d : d), this.isItStopNode(this.options.stopNodes, o, d)) {
          let f = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), o = o.substr(0, o.length - 1), y = d) : y = y.substr(0, y.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(d) !== -1)
            u = p.closeIndex;
          else {
            const x = this.readStopNodeData(t, g, _ + 1);
            if (!x) throw new Error(`Unexpected end of ${g}`);
            u = x.i, f = x.tagContent;
          }
          const S = new qs(d);
          d !== y && b && (S[":@"] = this.buildAttributesMap(y, o, d)), f && (f = this.parseTextData(f, d, o, !0, b, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, f), this.addChild(i, S, o);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), o = o.substr(0, o.length - 1), y = d) : y = y.substr(0, y.length - 1), this.options.transformTagName && (d = this.options.transformTagName(d));
            const f = new qs(d);
            d !== y && b && (f[":@"] = this.buildAttributesMap(y, o, d)), this.addChild(i, f, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const f = new qs(d);
            this.tagsNodeStack.push(i), d !== y && b && (f[":@"] = this.buildAttributesMap(y, o, d)), this.addChild(i, f, o), i = f;
          }
          s = "", u = _;
        }
      }
    else
      s += t[u];
  return r.child;
};
function qx(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const Zx = function(t) {
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
function Fx(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function Gx(t, r, i) {
  const s = "*." + i;
  for (const o in t) {
    const u = t[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function Vx(t, r, i = ">") {
  let s, o = "";
  for (let u = r; u < t.length; u++) {
    let h = t[u];
    if (s)
      h === s && (s = "");
    else if (h === '"' || h === "'")
      s = h;
    else if (h === i[0])
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
    else h === "	" && (h = " ");
    o += h;
  }
}
function ka(t, r, i, s) {
  const o = t.indexOf(r, i);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function jh(t, r, i, s = ">") {
  const o = Vx(t, r + 1, s);
  if (!o) return;
  let u = o.data;
  const h = o.index, p = u.search(/\s/);
  let d = u, g = !0;
  p !== -1 && (d = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = d;
  if (i) {
    const b = d.indexOf(":");
    b !== -1 && (d = d.substr(b + 1), g = d !== o.data.substr(b + 1));
  }
  return {
    tagName: d,
    tagExp: u,
    closeIndex: h,
    attrExpPresent: g,
    rawTagName: y
  };
}
function Yx(t, r, i) {
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
        const u = jh(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function zh(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Mx(t, i);
  } else
    return ox(t) ? t : "";
}
function Xx(t, r) {
  return j0(t, r);
}
function j0(t, r, i) {
  let s;
  const o = {};
  for (let u = 0; u < t.length; u++) {
    const h = t[u], p = $x(h);
    let d = "";
    if (i === void 0 ? d = p : d = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = h[p] : s += "" + h[p];
    else {
      if (p === void 0)
        continue;
      if (h[p]) {
        let g = j0(h[p], r, d);
        const y = Kx(g, r);
        h[":@"] ? Qx(g, h[":@"], d, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(g)) : r.isArray(p, d, y) ? o[p] = [g] : o[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function $x(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function Qx(t, r, i, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let h = 0; h < u; h++) {
      const p = o[h];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function Kx(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class Jx {
  constructor(r) {
    this.externalEntities = {}, this.options = _x(r);
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
      const u = R0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new zx(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : Xx(o, this.options);
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
const Wx = {
  validate: R0
}, eE = new Jx({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Lh(t, r) {
  if (!(!r || !t || !r.properties))
    for (const i in r.properties) {
      if (!t.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let o = t[i];
      s.type === "array" && !Array.isArray(o) && (o = [o], t[i] = o), s.type === "object" && typeof o == "object" && o !== null ? Lh(o, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(o) && o.forEach((u) => Lh(u, s.items)), s.type === "string" && typeof o != "string" ? t[i] = String(o) : s.type === "array" && s.items?.type === "string" && Array.isArray(o) && (t[i] = o.map(String));
    }
}
function tE(t) {
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
function z0(t, r, i = {}) {
  let o = tE(t) ?? t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const p = Wx.validate(o);
          if (p !== !0)
            throw new Error(`Model response is not valid XML: ${p.err.msg}`);
        }
        let u = eE.parse(o);
        if (u.root)
          u = u.root;
        else if (u.response)
          return Ra(u.response);
        return i.schema ? (Lh(u, i.schema), u) : Ra(u);
      case "json":
        const h = JSON.parse(o);
        return i.schema ? h : Ra(h);
      case "none":
        return o;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (u) {
    if (r !== "none" && !i.schema) {
      const h = o.match(/<response>([\s\S]*)/);
      if (h) return h[1].replace(/<\/[\s\S]*$/, "").trim();
      const p = o.match(/"response":\s*"([\s\S]*)/);
      if (p) return p[1].replace(/"\s*}\s*$/, "");
    }
    throw console.error(`Error parsing response in format '${r}':`, u), console.error("Raw content received:", t), r === "xml" ? u.message.startsWith("Model response is not valid XML:") ? u : new Error(`Model response is not valid XML: ${u.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${u.message}`);
  }
}
function Lv(t, r) {
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
var Do = { exports: {} }, Mo = { exports: {} }, In = {}, Wt = {}, Pv;
function nn() {
  if (Pv) return Wt;
  Pv = 1, Wt.__esModule = !0, Wt.extend = o, Wt.indexOf = d, Wt.escapeExpression = g, Wt.isEmpty = y, Wt.createFrame = b, Wt.blockParams = _, Wt.appendContextPath = v;
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
      for (var x in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], x) && (f[x] = arguments[S][x]);
    return f;
  }
  var u = Object.prototype.toString;
  Wt.toString = u;
  var h = function(S) {
    return typeof S == "function";
  };
  h(/x/) && (Wt.isFunction = h = function(f) {
    return typeof f == "function" && u.call(f) === "[object Function]";
  }), Wt.isFunction = h;
  var p = Array.isArray || function(f) {
    return f && typeof f == "object" ? u.call(f) === "[object Array]" : !1;
  };
  Wt.isArray = p;
  function d(f, S) {
    for (var x = 0, O = f.length; x < O; x++)
      if (f[x] === S)
        return x;
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
  function b(f) {
    var S = o({}, f);
    return S._parent = f, S;
  }
  function _(f, S) {
    return f.path = S, f;
  }
  function v(f, S) {
    return (f ? f + "." : "") + S;
  }
  return Wt;
}
var ko = { exports: {} }, Iv;
function Hn() {
  return Iv || (Iv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var h = u && u.loc, p = void 0, d = void 0, g = void 0, y = void 0;
      h && (p = h.start.line, d = h.end.line, g = h.start.column, y = h.end.column, o += " - " + p + ":" + g);
      for (var b = Error.prototype.constructor.call(this, o), _ = 0; _ < i.length; _++)
        this[i[_]] = b[i[_]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        h && (this.lineNumber = p, this.endLineNumber = d, Object.defineProperty ? (Object.defineProperty(this, "column", {
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
  })(ko, ko.exports)), ko.exports;
}
var Zs = {}, Ro = { exports: {} }, Bv;
function nE() {
  return Bv || (Bv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = nn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(o, u) {
        var h = u.inverse, p = u.fn;
        if (o === !0)
          return p(this);
        if (o === !1 || o == null)
          return h(this);
        if (i.isArray(o))
          return o.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(o, u)) : h(this);
        if (u.data && u.ids) {
          var d = i.createFrame(u.data);
          d.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: d };
        }
        return p(o, u);
      });
    }, t.exports = r.default;
  })(Ro, Ro.exports)), Ro.exports;
}
var jo = { exports: {} }, Uv;
function rE() {
  return Uv || (Uv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var s = nn(), o = Hn(), u = i(o);
    r.default = function(h) {
      h.registerHelper("each", function(p, d) {
        if (!d)
          throw new u.default("Must pass iterator to #each");
        var g = d.fn, y = d.inverse, b = 0, _ = "", v = void 0, f = void 0;
        d.data && d.ids && (f = s.appendContextPath(d.data.contextPath, d.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), d.data && (v = s.createFrame(d.data));
        function S(E, T, M) {
          v && (v.key = E, v.index = T, v.first = T === 0, v.last = !!M, f && (v.contextPath = f + E)), _ = _ + g(p[E], {
            data: v,
            blockParams: s.blockParams([p[E], E], [f + E, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var x = p.length; b < x; b++)
              b in p && S(b, b, b === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var O = [], w = p[Symbol.iterator](), D = w.next(); !D.done; D = w.next())
              O.push(D.value);
            p = O;
            for (var x = p.length; b < x; b++)
              S(b, b, b === p.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(p).forEach(function(T) {
                E !== void 0 && S(E, b - 1), E = T, b++;
              }), E !== void 0 && S(E, b - 1, !0);
            })();
        return b === 0 && (_ = y(this)), _;
      });
    }, t.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var zo = { exports: {} }, Hv;
function aE() {
  return Hv || (Hv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Hn(), o = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var Lo = { exports: {} }, qv;
function iE() {
  return qv || (qv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var s = nn(), o = Hn(), u = i(o);
    r.default = function(h) {
      h.registerHelper("if", function(p, d) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(p) && (p = p.call(this)), !d.hash.includeZero && !p || s.isEmpty(p) ? d.inverse(this) : d.fn(this);
      }), h.registerHelper("unless", function(p, d) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return h.helpers.if.call(this, p, {
          fn: d.inverse,
          inverse: d.fn,
          hash: d.hash
        });
      });
    }, t.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Po = { exports: {} }, Zv;
function sE() {
  return Zv || (Zv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], o = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var h = 1;
        o.hash.level != null ? h = o.hash.level : o.data && o.data.level != null && (h = o.data.level), s[0] = h, i.log.apply(i, s);
      });
    }, t.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Io = { exports: {} }, Fv;
function lE() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, t.exports = r.default;
  })(Io, Io.exports)), Io.exports;
}
var Bo = { exports: {} }, Gv;
function oE() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var s = nn(), o = Hn(), u = i(o);
    r.default = function(h) {
      h.registerHelper("with", function(p, d) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var g = d.fn;
        if (s.isEmpty(p))
          return d.inverse(this);
        var y = d.data;
        return d.data && d.ids && (y = s.createFrame(d.data), y.contextPath = s.appendContextPath(d.data.contextPath, d.ids[0])), g(p, {
          data: y,
          blockParams: s.blockParams([p], [y && y.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var Vv;
function L0() {
  if (Vv) return Zs;
  Vv = 1, Zs.__esModule = !0, Zs.registerDefaultHelpers = S, Zs.moveHelperToHooks = x;
  function t(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = nE(), i = t(r), s = rE(), o = t(s), u = aE(), h = t(u), p = iE(), d = t(p), g = sE(), y = t(g), b = lE(), _ = t(b), v = oE(), f = t(v);
  function S(O) {
    i.default(O), o.default(O), h.default(O), d.default(O), y.default(O), _.default(O), f.default(O);
  }
  function x(O, w, D) {
    O.helpers[w] && (O.hooks[w] = O.helpers[w], D || delete O.helpers[w]);
  }
  return Zs;
}
var Uo = {}, Ho = { exports: {} }, Yv;
function uE() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = nn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, h, p) {
        var d = o;
        return u.partials || (u.partials = {}, d = function(g, y) {
          var b = h.partials;
          h.partials = i.extend({}, b, u.partials);
          var _ = o(g, y);
          return h.partials = b, _;
        }), u.partials[p.args[0]] = p.fn, d;
      });
    }, t.exports = r.default;
  })(Ho, Ho.exports)), Ho.exports;
}
var Xv;
function cE() {
  if (Xv) return Uo;
  Xv = 1, Uo.__esModule = !0, Uo.registerDefaultDecorators = s;
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = uE(), i = t(r);
  function s(o) {
    i.default(o);
  }
  return Uo;
}
var qo = { exports: {} }, $v;
function P0() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    var i = nn(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(u) {
        if (typeof u == "string") {
          var h = i.indexOf(s.methodMap, u.toLowerCase());
          h >= 0 ? u = h : u = parseInt(u, 10);
        }
        return u;
      },
      // Can be overridden in the host environment
      log: function(u) {
        if (u = s.lookupLevel(u), typeof console < "u" && s.lookupLevel(s.level) <= u) {
          var h = s.methodMap[u];
          console[h] || (h = "log");
          for (var p = arguments.length, d = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
            d[g - 1] = arguments[g];
          console[h].apply(console, d);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(qo, qo.exports)), qo.exports;
}
var Oi = {}, Zo = {}, Qv;
function fE() {
  if (Qv) return Zo;
  Qv = 1, Zo.__esModule = !0, Zo.createNewLookupObject = r;
  var t = nn();
  function r() {
    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Zo;
}
var Kv;
function I0() {
  if (Kv) return Oi;
  Kv = 1, Oi.__esModule = !0, Oi.createProtoAccessControl = u, Oi.resultIsAllowed = h, Oi.resetLoggedProperties = g;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = fE(), i = P0(), s = t(i), o = /* @__PURE__ */ Object.create(null);
  function u(y) {
    var b = /* @__PURE__ */ Object.create(null);
    b.constructor = !1, b.__defineGetter__ = !1, b.__defineSetter__ = !1, b.__lookupGetter__ = !1;
    var _ = /* @__PURE__ */ Object.create(null);
    return _.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(_, y.allowedProtoProperties),
        defaultValue: y.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(b, y.allowedProtoMethods),
        defaultValue: y.allowProtoMethodsByDefault
      }
    };
  }
  function h(y, b, _) {
    return p(typeof y == "function" ? b.methods : b.properties, _);
  }
  function p(y, b) {
    return y.whitelist[b] !== void 0 ? y.whitelist[b] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (d(b), !1);
  }
  function d(y) {
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
var Jv;
function rd() {
  if (Jv) return In;
  Jv = 1, In.__esModule = !0, In.HandlebarsEnvironment = f;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = nn(), i = Hn(), s = t(i), o = L0(), u = cE(), h = P0(), p = t(h), d = I0(), g = "4.7.8";
  In.VERSION = g;
  var y = 8;
  In.COMPILER_REVISION = y;
  var b = 7;
  In.LAST_COMPATIBLE_COMPILER_REVISION = b;
  var _ = {
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
  In.REVISION_CHANGES = _;
  var v = "[object Object]";
  function f(x, O, w) {
    this.helpers = x || {}, this.partials = O || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
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
      d.resetLoggedProperties();
    }
  };
  var S = p.default.log;
  return In.log = S, In.createFrame = r.createFrame, In.logger = p.default, In;
}
var Fo = { exports: {} }, Wv;
function hE() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, t.exports = r.default;
  })(Fo, Fo.exports)), Fo.exports;
}
var vr = {}, Go = {}, ey;
function dE() {
  if (ey) return Go;
  ey = 1, Go.__esModule = !0, Go.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Go;
}
var ty;
function pE() {
  if (ty) return vr;
  ty = 1, vr.__esModule = !0, vr.checkRevision = y, vr.template = b, vr.wrapProgram = _, vr.resolvePartial = v, vr.invokePartial = f, vr.noop = S;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function r(E) {
    if (E && E.__esModule)
      return E;
    var T = {};
    if (E != null)
      for (var M in E)
        Object.prototype.hasOwnProperty.call(E, M) && (T[M] = E[M]);
    return T.default = E, T;
  }
  var i = nn(), s = r(i), o = Hn(), u = t(o), h = rd(), p = L0(), d = dE(), g = I0();
  function y(E) {
    var T = E && E[0] || 1, M = h.COMPILER_REVISION;
    if (!(T >= h.LAST_COMPATIBLE_COMPILER_REVISION && T <= h.COMPILER_REVISION))
      if (T < h.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = h.REVISION_CHANGES[M], q = h.REVISION_CHANGES[T];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + q + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function b(E, T) {
    if (!T)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, T.VM.checkRevision(E.compiler);
    var M = E.compiler && E.compiler[0] === 7;
    function k(B, V, $) {
      $.hash && (V = s.extend({}, V, $.hash), $.ids && ($.ids[0] = !0)), B = T.VM.resolvePartial.call(this, B, V, $);
      var oe = s.extend({}, $, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), he = T.VM.invokePartial.call(this, B, V, oe);
      if (he == null && T.compile && ($.partials[$.name] = T.compile(B, E.compilerOptions, T), he = $.partials[$.name](V, oe)), he != null) {
        if ($.indent) {
          for (var ge = he.split(`
`), U = 0, ne = ge.length; U < ne && !(!ge[U] && U + 1 === ne); U++)
            ge[U] = $.indent + ge[U];
          he = ge.join(`
`);
        }
        return he;
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
        for (var oe = V.length, he = 0; he < oe; he++) {
          var ge = V[he] && q.lookupProperty(V[he], $);
          if (ge != null)
            return V[he][$];
        }
      },
      lambda: function(V, $) {
        return typeof V == "function" ? V.call($) : V;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(V) {
        var $ = E[V];
        return $.decorator = E[V + "_d"], $;
      },
      programs: [],
      program: function(V, $, oe, he, ge) {
        var U = this.programs[V], ne = this.fn(V);
        return $ || ge || he || oe ? U = _(this, V, ne, $, oe, he, ge) : U || (U = this.programs[V] = _(this, V, ne)), U;
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
      compilerInfo: E.compiler
    };
    function G(B) {
      var V = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = V.data;
      G._setup(V), !V.partial && E.useData && ($ = x(B, $));
      var oe = void 0, he = E.useBlockParams ? [] : void 0;
      E.useDepths && (V.depths ? oe = B != V.depths[0] ? [B].concat(V.depths) : V.depths : oe = [B]);
      function ge(U) {
        return "" + E.main(q, U, q.helpers, q.partials, $, he, oe);
      }
      return ge = O(E.main, ge, q, V.depths || [], $, he), ge(B, V);
    }
    return G.isTop = !0, G._setup = function(B) {
      if (B.partial)
        q.protoAccessControl = B.protoAccessControl, q.helpers = B.helpers, q.partials = B.partials, q.decorators = B.decorators, q.hooks = B.hooks;
      else {
        var V = s.extend({}, T.helpers, B.helpers);
        w(V, q), q.helpers = V, E.usePartial && (q.partials = q.mergeIfNeeded(B.partials, T.partials)), (E.usePartial || E.useDecorators) && (q.decorators = s.extend({}, T.decorators, B.decorators)), q.hooks = {}, q.protoAccessControl = g.createProtoAccessControl(B);
        var $ = B.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(q, "helperMissing", $), p.moveHelperToHooks(q, "blockHelperMissing", $);
      }
    }, G._child = function(B, V, $, oe) {
      if (E.useBlockParams && !$)
        throw new u.default("must pass block params");
      if (E.useDepths && !oe)
        throw new u.default("must pass parent depths");
      return _(q, B, E[B], V, 0, $, oe);
    }, G;
  }
  function _(E, T, M, k, q, G, B) {
    function V($) {
      var oe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], he = B;
      return B && $ != B[0] && !($ === E.nullContext && B[0] === null) && (he = [$].concat(B)), M(E, $, E.helpers, E.partials, oe.data || k, G && [oe.blockParams].concat(G), he);
    }
    return V = O(M, V, E, B, k, G), V.program = T, V.depth = B ? B.length : 0, V.blockParams = q || 0, V;
  }
  function v(E, T, M) {
    return E ? !E.call && !M.name && (M.name = E, E = M.partials[E]) : M.name === "@partial-block" ? E = M.data["partial-block"] : E = M.partials[M.name], E;
  }
  function f(E, T, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var q = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = h.createFrame(M.data);
      var G = M.fn;
      q = M.data["partial-block"] = function(V) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = h.createFrame($.data), $.data["partial-block"] = k, G(V, $);
      }, G.partials && (M.partials = s.extend({}, M.partials, G.partials));
    })(), E === void 0 && q && (E = q), E === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (E instanceof Function)
      return E(T, M);
  }
  function S() {
    return "";
  }
  function x(E, T) {
    return (!T || !("root" in T)) && (T = T ? h.createFrame(T) : {}, T.root = E), T;
  }
  function O(E, T, M, k, q, G) {
    if (E.decorator) {
      var B = {};
      T = E.decorator(T, B, M, k && k[0], q, G, k), s.extend(T, B);
    }
    return T;
  }
  function w(E, T) {
    Object.keys(E).forEach(function(M) {
      var k = E[M];
      E[M] = D(k, T);
    });
  }
  function D(E, T) {
    var M = T.lookupProperty;
    return d.wrapHelper(E, function(k) {
      return s.extend({ lookupProperty: M }, k);
    });
  }
  return vr;
}
var Vo = { exports: {} }, ny;
function B0() {
  return ny || (ny = 1, (function(t, r) {
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
  })(Vo, Vo.exports)), Vo.exports;
}
var ry;
function mE() {
  return ry || (ry = 1, (function(t, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function s(w) {
      if (w && w.__esModule)
        return w;
      var D = {};
      if (w != null)
        for (var E in w)
          Object.prototype.hasOwnProperty.call(w, E) && (D[E] = w[E]);
      return D.default = w, D;
    }
    var o = rd(), u = s(o), h = hE(), p = i(h), d = Hn(), g = i(d), y = nn(), b = s(y), _ = pE(), v = s(_), f = B0(), S = i(f);
    function x() {
      var w = new u.HandlebarsEnvironment();
      return b.extend(w, u), w.SafeString = p.default, w.Exception = g.default, w.Utils = b, w.escapeExpression = b.escapeExpression, w.VM = v, w.template = function(D) {
        return v.template(D, w);
      }, w;
    }
    var O = x();
    O.create = x, S.default(O), O.default = O, r.default = O, t.exports = r.default;
  })(Mo, Mo.exports)), Mo.exports;
}
var Yo = { exports: {} }, ay;
function U0() {
  return ay || (ay = 1, (function(t, r) {
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
  })(Yo, Yo.exports)), Yo.exports;
}
var Ni = {}, Xo = { exports: {} }, iy;
function gE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, d, g, y, b, _, v) {
          var f = _.length - 1;
          switch (b) {
            case 1:
              return _[f - 1];
            case 2:
              this.$ = y.prepareProgram(_[f]);
              break;
            case 3:
              this.$ = _[f];
              break;
            case 4:
              this.$ = _[f];
              break;
            case 5:
              this.$ = _[f];
              break;
            case 6:
              this.$ = _[f];
              break;
            case 7:
              this.$ = _[f];
              break;
            case 8:
              this.$ = _[f];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(_[f]),
                strip: y.stripFlags(_[f], _[f]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: _[f],
                value: _[f],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(_[f - 2], _[f - 1], _[f], this._$);
              break;
            case 12:
              this.$ = { path: _[f - 3], params: _[f - 2], hash: _[f - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(_[f - 3], _[f - 2], _[f - 1], _[f], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(_[f - 3], _[f - 2], _[f - 1], _[f], !0, this._$);
              break;
            case 15:
              this.$ = { open: _[f - 5], path: _[f - 4], params: _[f - 3], hash: _[f - 2], blockParams: _[f - 1], strip: y.stripFlags(_[f - 5], _[f]) };
              break;
            case 16:
              this.$ = { path: _[f - 4], params: _[f - 3], hash: _[f - 2], blockParams: _[f - 1], strip: y.stripFlags(_[f - 5], _[f]) };
              break;
            case 17:
              this.$ = { path: _[f - 4], params: _[f - 3], hash: _[f - 2], blockParams: _[f - 1], strip: y.stripFlags(_[f - 5], _[f]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(_[f - 1], _[f - 1]), program: _[f] };
              break;
            case 19:
              var S = y.prepareBlock(_[f - 2], _[f - 1], _[f], _[f], !1, this._$), x = y.prepareProgram([S], _[f - 1].loc);
              x.chained = !0, this.$ = { strip: _[f - 2].strip, program: x, chain: !0 };
              break;
            case 20:
              this.$ = _[f];
              break;
            case 21:
              this.$ = { path: _[f - 1], strip: y.stripFlags(_[f - 2], _[f]) };
              break;
            case 22:
              this.$ = y.prepareMustache(_[f - 3], _[f - 2], _[f - 1], _[f - 4], y.stripFlags(_[f - 4], _[f]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(_[f - 3], _[f - 2], _[f - 1], _[f - 4], y.stripFlags(_[f - 4], _[f]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: _[f - 3],
                params: _[f - 2],
                hash: _[f - 1],
                indent: "",
                strip: y.stripFlags(_[f - 4], _[f]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(_[f - 2], _[f - 1], _[f], this._$);
              break;
            case 26:
              this.$ = { path: _[f - 3], params: _[f - 2], hash: _[f - 1], strip: y.stripFlags(_[f - 4], _[f]) };
              break;
            case 27:
              this.$ = _[f];
              break;
            case 28:
              this.$ = _[f];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: _[f - 3],
                params: _[f - 2],
                hash: _[f - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: _[f], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(_[f - 2]), value: _[f], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(_[f - 1]);
              break;
            case 33:
              this.$ = _[f];
              break;
            case 34:
              this.$ = _[f];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: _[f], original: _[f], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(_[f]), original: Number(_[f]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: _[f] === "true", original: _[f] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = _[f];
              break;
            case 41:
              this.$ = _[f];
              break;
            case 42:
              this.$ = y.preparePath(!0, _[f], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, _[f], this._$);
              break;
            case 44:
              _[f - 2].push({ part: y.id(_[f]), original: _[f], separator: _[f - 1] }), this.$ = _[f - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(_[f]), original: _[f] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              _[f - 1].push(_[f]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              _[f - 1].push(_[f]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              _[f - 1].push(_[f]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              _[f - 1].push(_[f]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              _[f - 1].push(_[f]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              _[f - 1].push(_[f]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              _[f - 1].push(_[f]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              _[f - 1].push(_[f]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              _[f - 1].push(_[f]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              _[f - 1].push(_[f]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              _[f - 1].push(_[f]);
              break;
            case 98:
              this.$ = [_[f]];
              break;
            case 99:
              _[f - 1].push(_[f]);
              break;
            case 100:
              this.$ = [_[f]];
              break;
            case 101:
              _[f - 1].push(_[f]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, d) {
          throw new Error(p);
        },
        parse: function(p) {
          var d = this, g = [0], y = [null], b = [], _ = this.table, v = "", f = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          b.push(x);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var oe;
            return oe = d.lexer.lex() || 1, typeof oe != "number" && (oe = d.symbols_[oe] || oe), oe;
          }
          for (var D, E, T, M, k = {}, q, G, B, V; ; ) {
            if (E = g[g.length - 1], this.defaultActions[E] ? T = this.defaultActions[E] : ((D === null || typeof D > "u") && (D = w()), T = _[E] && _[E][D]), typeof T > "u" || !T.length || !T[0]) {
              var $ = "";
              {
                V = [];
                for (q in _[E]) this.terminals_[q] && q > 2 && V.push("'" + this.terminals_[q] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (f + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + V.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : $ = "Parse error on line " + (f + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: x, expected: V });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + D);
            switch (T[0]) {
              case 1:
                g.push(D), y.push(this.lexer.yytext), b.push(this.lexer.yylloc), g.push(T[1]), D = null, S = this.lexer.yyleng, v = this.lexer.yytext, f = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (G = this.productions_[T[1]][1], k.$ = y[y.length - G], k._$ = { first_line: b[b.length - (G || 1)].first_line, last_line: b[b.length - 1].last_line, first_column: b[b.length - (G || 1)].first_column, last_column: b[b.length - 1].last_column }, O && (k._$.range = [b[b.length - (G || 1)].range[0], b[b.length - 1].range[1]]), M = this.performAction.call(k, v, S, f, this.yy, T[1], y, b), typeof M < "u")
                  return M;
                G && (g = g.slice(0, -1 * G * 2), y = y.slice(0, -1 * G), b = b.slice(0, -1 * G)), g.push(this.productions_[T[1]][0]), y.push(k.$), b.push(k._$), B = _[g[g.length - 2]][g[g.length - 1]], g.push(B);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, o = (function() {
        var h = {
          EOF: 1,
          parseError: function(d, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(d, g);
            else
              throw new Error(d);
          },
          setInput: function(d) {
            return this._input = d, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var d = this._input[0];
            this.yytext += d, this.yyleng++, this.offset++, this.match += d, this.matched += d;
            var g = d.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), d;
          },
          unput: function(d) {
            var g = d.length, y = d.split(/(?:\r\n?|\n)/g);
            this._input = d + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var b = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
            var _ = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: y ? (y.length === b.length ? this.yylloc.first_column : 0) + b[b.length - y.length].length - y[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [_[0], _[0] + this.yyleng - g]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(d) {
            this.unput(this.match.slice(d));
          },
          pastInput: function() {
            var d = this.matched.substr(0, this.matched.length - this.match.length);
            return (d.length > 20 ? "..." : "") + d.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var d = this.match;
            return d.length < 20 && (d += this._input.substr(0, 20 - d.length)), (d.substr(0, 20) + (d.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var d = this.pastInput(), g = new Array(d.length + 1).join("-");
            return d + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var d, g, y, b, _;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), f = 0; f < v.length && (y = this._input.match(this.rules[v[f]]), !(y && (!g || y[0].length > g[0].length) && (g = y, b = f, !this.options.flex))); f++)
              ;
            return g ? (_ = g[0].match(/(?:\r\n?|\n).*/g), _ && (this.yylineno += _.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: _ ? _[_.length - 1].length - _[_.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], d = this.performAction.call(this, this.yy, this, v[b], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), d || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var d = this.next();
            return typeof d < "u" ? d : this.lex();
          },
          begin: function(d) {
            this.conditionStack.push(d);
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
          pushState: function(d) {
            this.begin(d);
          }
        };
        return h.options = {}, h.performAction = function(d, g, y, b) {
          function _(v, f) {
            return g.yytext = g.yytext.substring(v, g.yyleng - f + v);
          }
          switch (y) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (_(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (_(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (_(5, 9), "END_RAW_BLOCK");
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
              return g.yytext = _(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = _(1, 2).replace(/\\'/g, "'"), 80;
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
        }, h.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], h.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, h;
      })();
      s.lexer = o;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = i, t.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var $o = { exports: {} }, Qo = { exports: {} }, sy;
function H0() {
  return sy || (sy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = Hn(), o = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(y, b) {
        var _ = this.accept(y[b]);
        if (this.mutating) {
          if (_ && !u.prototype[_.type])
            throw new o.default('Unexpected node type "' + _.type + '" found when accepting ' + b + " on " + y.type);
          y[b] = _;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(y, b) {
        if (this.acceptKey(y, b), !y[b])
          throw new o.default(y.type + " requires " + b);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(y) {
        for (var b = 0, _ = y.length; b < _; b++)
          this.acceptKey(y, b), y[b] || (y.splice(b, 1), b--, _--);
      },
      accept: function(y) {
        if (y) {
          if (!this[y.type])
            throw new o.default("Unknown type: " + y.type, y);
          this.current && this.parents.unshift(this.current), this.current = y;
          var b = this[y.type](y);
          if (this.current = this.parents.shift(), !this.mutating || b)
            return b;
          if (b !== !1)
            return y;
        }
      },
      Program: function(y) {
        this.acceptArray(y.body);
      },
      MustacheStatement: h,
      Decorator: h,
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: d,
      PartialBlockStatement: function(y) {
        d.call(this, y), this.acceptKey(y, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: h,
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
    function h(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function p(g) {
      h.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function d(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, t.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var ly;
function vE() {
  return ly || (ly = 1, (function(t, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = H0(), o = i(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new o.default(), u.prototype.Program = function(y) {
      var b = !this.options.ignoreStandalone, _ = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, f = 0, S = v.length; f < S; f++) {
        var x = v[f], O = this.accept(x);
        if (O) {
          var w = h(v, f, _), D = p(v, f, _), E = O.openStandalone && w, T = O.closeStandalone && D, M = O.inlineStandalone && w && D;
          O.close && d(v, f, !0), O.open && g(v, f, !0), b && M && (d(v, f), g(v, f) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(v[f - 1].original)[1])), b && E && (d((x.program || x.inverse).body), g(v, f)), b && T && (d(v, f), g((x.inverse || x.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var b = y.program || y.inverse, _ = y.program && y.inverse, v = _, f = _;
      if (_ && _.chained)
        for (v = _.body[0].program; f.chained; )
          f = f.body[f.body.length - 1].program;
      var S = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(b.body),
        closeStandalone: h((v || b).body)
      };
      if (y.openStrip.close && d(b.body, null, !0), _) {
        var x = y.inverseStrip;
        x.open && g(b.body, null, !0), x.close && d(v.body, null, !0), y.closeStrip.open && g(f.body, null, !0), !this.options.ignoreStandalone && h(b.body) && p(v.body) && (g(b.body), d(v.body));
      } else y.closeStrip.open && g(b.body, null, !0);
      return S;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(y) {
      return y.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(y) {
      var b = y.strip || {};
      return {
        inlineStandalone: !0,
        open: b.open,
        close: b.close
      };
    };
    function h(y, b, _) {
      b === void 0 && (b = y.length);
      var v = y[b - 1], f = y[b - 2];
      if (!v)
        return _;
      if (v.type === "ContentStatement")
        return (f || !_ ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function p(y, b, _) {
      b === void 0 && (b = -1);
      var v = y[b + 1], f = y[b + 2];
      if (!v)
        return _;
      if (v.type === "ContentStatement")
        return (f || !_ ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function d(y, b, _) {
      var v = y[b == null ? 0 : b + 1];
      if (!(!v || v.type !== "ContentStatement" || !_ && v.rightStripped)) {
        var f = v.value;
        v.value = v.value.replace(_ ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== f;
      }
    }
    function g(y, b, _) {
      var v = y[b == null ? y.length - 1 : b - 1];
      if (!(!v || v.type !== "ContentStatement" || !_ && v.leftStripped)) {
        var f = v.value;
        return v.value = v.value.replace(_ ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== f, v.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var hn = {}, oy;
function yE() {
  if (oy) return hn;
  oy = 1, hn.__esModule = !0, hn.SourceLocation = o, hn.id = u, hn.stripFlags = h, hn.stripComment = p, hn.preparePath = d, hn.prepareMustache = g, hn.prepareRawBlock = y, hn.prepareBlock = b, hn.prepareProgram = _, hn.preparePartialBlock = v;
  function t(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var r = Hn(), i = t(r);
  function s(f, S) {
    if (S = S.path ? S.path.original : S, f.path.original !== S) {
      var x = { loc: f.path.loc };
      throw new i.default(f.path.original + " doesn't match " + S, x);
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
  function h(f, S) {
    return {
      open: f.charAt(2) === "~",
      close: S.charAt(S.length - 3) === "~"
    };
  }
  function p(f) {
    return f.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function d(f, S, x) {
    x = this.locInfo(x);
    for (var O = f ? "@" : "", w = [], D = 0, E = 0, T = S.length; E < T; E++) {
      var M = S[E].part, k = S[E].original !== M;
      if (O += (S[E].separator || "") + M, !k && (M === ".." || M === "." || M === "this")) {
        if (w.length > 0)
          throw new i.default("Invalid path: " + O, { loc: x });
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
      loc: x
    };
  }
  function g(f, S, x, O, w, D) {
    var E = O.charAt(3) || O.charAt(2), T = E !== "{" && E !== "&", M = /\*/.test(O);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: f,
      params: S,
      hash: x,
      escaped: T,
      strip: w,
      loc: this.locInfo(D)
    };
  }
  function y(f, S, x, O) {
    s(f, x), O = this.locInfo(O);
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
  function b(f, S, x, O, w, D) {
    O && O.path && s(f, O);
    var E = /\*/.test(f.open);
    S.blockParams = f.blockParams;
    var T = void 0, M = void 0;
    if (x) {
      if (E)
        throw new i.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = O.strip), M = x.strip, T = x.program;
    }
    return w && (w = T, T = S, S = w), {
      type: E ? "DecoratorBlock" : "BlockStatement",
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
  function _(f, S) {
    if (!S && f.length) {
      var x = f[0].loc, O = f[f.length - 1].loc;
      x && O && (S = {
        source: x.source,
        start: {
          line: x.start.line,
          column: x.start.column
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
  function v(f, S, x, O) {
    return s(f, x), {
      type: "PartialBlockStatement",
      name: f.path,
      params: f.params,
      hash: f.hash,
      program: S,
      openStrip: f.strip,
      closeStrip: x && x.strip,
      loc: this.locInfo(O)
    };
  }
  return hn;
}
var uy;
function _E() {
  if (uy) return Ni;
  uy = 1, Ni.__esModule = !0, Ni.parseWithoutProcessing = y, Ni.parse = b;
  function t(_) {
    if (_ && _.__esModule)
      return _;
    var v = {};
    if (_ != null)
      for (var f in _)
        Object.prototype.hasOwnProperty.call(_, f) && (v[f] = _[f]);
    return v.default = _, v;
  }
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var i = gE(), s = r(i), o = vE(), u = r(o), h = yE(), p = t(h), d = nn();
  Ni.parser = s.default;
  var g = {};
  d.extend(g, p);
  function y(_, v) {
    if (_.type === "Program")
      return _;
    s.default.yy = g, g.locInfo = function(S) {
      return new g.SourceLocation(v && v.srcName, S);
    };
    var f = s.default.parse(_);
    return f;
  }
  function b(_, v) {
    var f = y(_, v), S = new u.default(v);
    return S.accept(f);
  }
  return Ni;
}
var Di = {}, cy;
function bE() {
  if (cy) return Di;
  cy = 1, Di.__esModule = !0, Di.Compiler = p, Di.precompile = d, Di.compile = g;
  function t(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = Hn(), i = t(r), s = nn(), o = U0(), u = t(o), h = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(v) {
      var f = this.opcodes.length;
      if (v.opcodes.length !== f)
        return !1;
      for (var S = 0; S < f; S++) {
        var x = this.opcodes[S], O = v.opcodes[S];
        if (x.opcode !== O.opcode || !y(x.args, O.args))
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
      var f = new this.compiler(), S = f.compile(v, this.options), x = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[x] = S, this.useDepths = this.useDepths || S.useDepths, x;
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
      for (var f = v.body, S = f.length, x = 0; x < S; x++)
        this.accept(f[x]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      b(v);
      var f = v.program, S = v.inverse;
      f = f && this.compileProgram(f), S = S && this.compileProgram(S);
      var x = this.classifySexpr(v);
      x === "helper" ? this.helperSexpr(v, f, S) : x === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, f, S), this.opcode("pushProgram", f), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var f = v.program && this.compileProgram(v.program), S = this.setupFullMustacheParams(v, f, void 0), x = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, x.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var f = v.program;
      f && (f = this.compileProgram(v.program));
      var S = v.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, v);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var x = v.name.original, O = v.name.type === "SubExpression";
      O && this.accept(v.name), this.setupFullMustacheParams(v, f, void 0, !0);
      var w = v.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", O, x, w), this.opcode("append");
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
      b(v);
      var f = this.classifySexpr(v);
      f === "simple" ? this.simpleSexpr(v) : f === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, f, S) {
      var x = v.path, O = x.parts[0], w = f != null || S != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", f), this.opcode("pushProgram", S), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", O, w);
    },
    simpleSexpr: function(v) {
      var f = v.path;
      f.strict = !0, this.accept(f), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, f, S) {
      var x = this.setupFullMustacheParams(v, f, S), O = v.path, w = O.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", x.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + w, v);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", x.length, O.original, u.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(v) {
      this.addDepth(v.depth), this.opcode("getContext", v.depth);
      var f = v.parts[0], S = u.default.helpers.scopedId(v), x = !v.depth && !S && this.blockParamIndex(f);
      x ? this.opcode("lookupBlockParam", x, v.parts) : f ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, S) : this.opcode("pushContext");
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
      var f = v.pairs, S = 0, x = f.length;
      for (this.opcode("pushHash"); S < x; S++)
        this.pushParam(f[S].value);
      for (; S--; )
        this.opcode("assignToHash", f[S].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(v) {
      this.opcodes.push({
        opcode: v,
        args: h.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(v) {
      v && (this.useDepths = !0);
    },
    classifySexpr: function(v) {
      var f = u.default.helpers.simpleId(v.path), S = f && !!this.blockParamIndex(v.path.parts[0]), x = !S && u.default.helpers.helperExpression(v), O = !S && (x || f);
      if (O && !x) {
        var w = v.path.parts[0], D = this.options;
        D.knownHelpers[w] ? x = !0 : D.knownHelpersOnly && (O = !1);
      }
      return x ? "helper" : O ? "ambiguous" : "simple";
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
            var x = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, x);
          } else
            f = v.original || f, f.replace && (f = f.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, f);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, f, S, x) {
      var O = v.params;
      return this.pushParams(O), this.opcode("pushProgram", f), this.opcode("pushProgram", S), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", x), O;
    },
    blockParamIndex: function(v) {
      for (var f = 0, S = this.options.blockParams.length; f < S; f++) {
        var x = this.options.blockParams[f], O = x && s.indexOf(x, v);
        if (x && O >= 0)
          return [f, O];
      }
    }
  };
  function d(_, v, f) {
    if (_ == null || typeof _ != "string" && _.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + _);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = f.parse(_, v), x = new f.Compiler().compile(S, v);
    return new f.JavaScriptCompiler().compile(x, v);
  }
  function g(_, v, f) {
    if (v === void 0 && (v = {}), _ == null || typeof _ != "string" && _.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + _);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = void 0;
    function x() {
      var w = f.parse(_, v), D = new f.Compiler().compile(w, v), E = new f.JavaScriptCompiler().compile(D, v, void 0, !0);
      return f.template(E);
    }
    function O(w, D) {
      return S || (S = x()), S.call(this, w, D);
    }
    return O._setup = function(w) {
      return S || (S = x()), S._setup(w);
    }, O._child = function(w, D, E, T) {
      return S || (S = x()), S._child(w, D, E, T);
    }, O;
  }
  function y(_, v) {
    if (_ === v)
      return !0;
    if (s.isArray(_) && s.isArray(v) && _.length === v.length) {
      for (var f = 0; f < _.length; f++)
        if (!y(_[f], v[f]))
          return !1;
      return !0;
    }
  }
  function b(_) {
    if (!_.path.parts) {
      var v = _.path;
      _.path = {
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
var Ko = { exports: {} }, Jo = { exports: {} }, Fs = {}, uh = {}, Wo = {}, eu = {}, fy;
function SE() {
  if (fy) return eu;
  fy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return eu.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, eu.decode = function(r) {
    var i = 65, s = 90, o = 97, u = 122, h = 48, p = 57, d = 43, g = 47, y = 26, b = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + y : h <= r && r <= p ? r - h + b : r == d ? 62 : r == g ? 63 : -1;
  }, eu;
}
var hy;
function q0() {
  if (hy) return Wo;
  hy = 1;
  var t = SE(), r = 5, i = 1 << r, s = i - 1, o = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function h(p) {
    var d = (p & 1) === 1, g = p >> 1;
    return d ? -g : g;
  }
  return Wo.encode = function(d) {
    var g = "", y, b = u(d);
    do
      y = b & s, b >>>= r, b > 0 && (y |= o), g += t.encode(y);
    while (b > 0);
    return g;
  }, Wo.decode = function(d, g, y) {
    var b = d.length, _ = 0, v = 0, f, S;
    do {
      if (g >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = t.decode(d.charCodeAt(g++)), S === -1)
        throw new Error("Invalid base64 digit: " + d.charAt(g - 1));
      f = !!(S & o), S &= s, _ = _ + (S << v), v += r;
    } while (f);
    y.value = h(_), y.rest = g;
  }, Wo;
}
var ch = {}, dy;
function ul() {
  return dy || (dy = 1, (function(t) {
    function r(E, T, M) {
      if (T in E)
        return E[T];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + T + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(E) {
      var T = E.match(i);
      return T ? {
        scheme: T[1],
        auth: T[2],
        host: T[3],
        port: T[4],
        path: T[5]
      } : null;
    }
    t.urlParse = o;
    function u(E) {
      var T = "";
      return E.scheme && (T += E.scheme + ":"), T += "//", E.auth && (T += E.auth + "@"), E.host && (T += E.host), E.port && (T += ":" + E.port), E.path && (T += E.path), T;
    }
    t.urlGenerate = u;
    function h(E) {
      var T = E, M = o(E);
      if (M) {
        if (!M.path)
          return E;
        T = M.path;
      }
      for (var k = t.isAbsolute(T), q = T.split(/\/+/), G, B = 0, V = q.length - 1; V >= 0; V--)
        G = q[V], G === "." ? q.splice(V, 1) : G === ".." ? B++ : B > 0 && (G === "" ? (q.splice(V + 1, B), B = 0) : (q.splice(V, 2), B--));
      return T = q.join("/"), T === "" && (T = k ? "/" : "."), M ? (M.path = T, u(M)) : T;
    }
    t.normalize = h;
    function p(E, T) {
      E === "" && (E = "."), T === "" && (T = ".");
      var M = o(T), k = o(E);
      if (k && (E = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || T.match(s))
        return T;
      if (k && !k.host && !k.path)
        return k.host = T, u(k);
      var q = T.charAt(0) === "/" ? T : h(E.replace(/\/+$/, "") + "/" + T);
      return k ? (k.path = q, u(k)) : q;
    }
    t.join = p, t.isAbsolute = function(E) {
      return E.charAt(0) === "/" || i.test(E);
    };
    function d(E, T) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var M = 0; T.indexOf(E + "/") !== 0; ) {
        var k = E.lastIndexOf("/");
        if (k < 0 || (E = E.slice(0, k), E.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++M;
      }
      return Array(M + 1).join("../") + T.substr(E.length + 1);
    }
    t.relative = d;
    var g = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function y(E) {
      return E;
    }
    function b(E) {
      return v(E) ? "$" + E : E;
    }
    t.toSetString = g ? y : b;
    function _(E) {
      return v(E) ? E.slice(1) : E;
    }
    t.fromSetString = g ? y : _;
    function v(E) {
      if (!E)
        return !1;
      var T = E.length;
      if (T < 9 || E.charCodeAt(T - 1) !== 95 || E.charCodeAt(T - 2) !== 95 || E.charCodeAt(T - 3) !== 111 || E.charCodeAt(T - 4) !== 116 || E.charCodeAt(T - 5) !== 111 || E.charCodeAt(T - 6) !== 114 || E.charCodeAt(T - 7) !== 112 || E.charCodeAt(T - 8) !== 95 || E.charCodeAt(T - 9) !== 95)
        return !1;
      for (var M = T - 10; M >= 0; M--)
        if (E.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function f(E, T, M) {
      var k = x(E.source, T.source);
      return k !== 0 || (k = E.originalLine - T.originalLine, k !== 0) || (k = E.originalColumn - T.originalColumn, k !== 0 || M) || (k = E.generatedColumn - T.generatedColumn, k !== 0) || (k = E.generatedLine - T.generatedLine, k !== 0) ? k : x(E.name, T.name);
    }
    t.compareByOriginalPositions = f;
    function S(E, T, M) {
      var k = E.generatedLine - T.generatedLine;
      return k !== 0 || (k = E.generatedColumn - T.generatedColumn, k !== 0 || M) || (k = x(E.source, T.source), k !== 0) || (k = E.originalLine - T.originalLine, k !== 0) || (k = E.originalColumn - T.originalColumn, k !== 0) ? k : x(E.name, T.name);
    }
    t.compareByGeneratedPositionsDeflated = S;
    function x(E, T) {
      return E === T ? 0 : E === null ? 1 : T === null ? -1 : E > T ? 1 : -1;
    }
    function O(E, T) {
      var M = E.generatedLine - T.generatedLine;
      return M !== 0 || (M = E.generatedColumn - T.generatedColumn, M !== 0) || (M = x(E.source, T.source), M !== 0) || (M = E.originalLine - T.originalLine, M !== 0) || (M = E.originalColumn - T.originalColumn, M !== 0) ? M : x(E.name, T.name);
    }
    t.compareByGeneratedPositionsInflated = O;
    function w(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = w;
    function D(E, T, M) {
      if (T = T || "", E && (E[E.length - 1] !== "/" && T[0] !== "/" && (E += "/"), T = E + T), M) {
        var k = o(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var q = k.path.lastIndexOf("/");
          q >= 0 && (k.path = k.path.substring(0, q + 1));
        }
        T = p(u(k), T);
      }
      return h(T);
    }
    t.computeSourceURL = D;
  })(ch)), ch;
}
var fh = {}, py;
function Z0() {
  if (py) return fh;
  py = 1;
  var t = ul(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, h) {
    for (var p = new s(), d = 0, g = u.length; d < g; d++)
      p.add(u[d], h);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, h) {
    var p = i ? u : t.toSetString(u), d = i ? this.has(u) : r.call(this._set, p), g = this._array.length;
    (!d || h) && this._array.push(u), d || (i ? this._set.set(u, g) : this._set[p] = g);
  }, s.prototype.has = function(u) {
    if (i)
      return this._set.has(u);
    var h = t.toSetString(u);
    return r.call(this._set, h);
  }, s.prototype.indexOf = function(u) {
    if (i) {
      var h = this._set.get(u);
      if (h >= 0)
        return h;
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
  }, fh.ArraySet = s, fh;
}
var hh = {}, my;
function xE() {
  if (my) return hh;
  my = 1;
  var t = ul();
  function r(s, o) {
    var u = s.generatedLine, h = o.generatedLine, p = s.generatedColumn, d = o.generatedColumn;
    return h > u || h == u && d >= p || t.compareByGeneratedPositionsInflated(s, o) <= 0;
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
  }, hh.MappingList = i, hh;
}
var gy;
function F0() {
  if (gy) return uh;
  gy = 1;
  var t = q0(), r = ul(), i = Z0().ArraySet, s = xE().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(h) {
    var p = h.sourceRoot, d = new o({
      file: h.file,
      sourceRoot: p
    });
    return h.eachMapping(function(g) {
      var y = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (y.source = g.source, p != null && (y.source = r.relative(p, y.source)), y.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (y.name = g.name)), d.addMapping(y);
    }), h.sources.forEach(function(g) {
      var y = g;
      p !== null && (y = r.relative(p, g)), d._sources.has(y) || d._sources.add(y);
      var b = h.sourceContentFor(g);
      b != null && d.setSourceContent(g, b);
    }), d;
  }, o.prototype.addMapping = function(h) {
    var p = r.getArg(h, "generated"), d = r.getArg(h, "original", null), g = r.getArg(h, "source", null), y = r.getArg(h, "name", null);
    this._skipValidation || this._validateMapping(p, d, g, y), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: d != null && d.line,
      originalColumn: d != null && d.column,
      source: g,
      name: y
    });
  }, o.prototype.setSourceContent = function(h, p) {
    var d = h;
    this._sourceRoot != null && (d = r.relative(this._sourceRoot, d)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(d)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(d)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(h, p, d) {
    var g = p;
    if (p == null) {
      if (h.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = h.file;
    }
    var y = this._sourceRoot;
    y != null && (g = r.relative(y, g));
    var b = new i(), _ = new i();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === g && v.originalLine != null) {
        var f = h.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        f.source != null && (v.source = f.source, d != null && (v.source = r.join(d, v.source)), y != null && (v.source = r.relative(y, v.source)), v.originalLine = f.line, v.originalColumn = f.column, f.name != null && (v.name = f.name));
      }
      var S = v.source;
      S != null && !b.has(S) && b.add(S);
      var x = v.name;
      x != null && !_.has(x) && _.add(x);
    }, this), this._sources = b, this._names = _, h.sources.forEach(function(v) {
      var f = h.sourceContentFor(v);
      f != null && (d != null && (v = r.join(d, v)), y != null && (v = r.relative(y, v)), this.setSourceContent(v, f));
    }, this);
  }, o.prototype._validateMapping = function(h, p, d, g) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(h && "line" in h && "column" in h && h.line > 0 && h.column >= 0 && !p && !d && !g)) {
      if (h && "line" in h && "column" in h && p && "line" in p && "column" in p && h.line > 0 && h.column >= 0 && p.line > 0 && p.column >= 0 && d)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: h,
        source: d,
        original: p,
        name: g
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var h = 0, p = 1, d = 0, g = 0, y = 0, b = 0, _ = "", v, f, S, x, O = this._mappings.toArray(), w = 0, D = O.length; w < D; w++) {
      if (f = O[w], v = "", f.generatedLine !== p)
        for (h = 0; f.generatedLine !== p; )
          v += ";", p++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(f, O[w - 1]))
          continue;
        v += ",";
      }
      v += t.encode(f.generatedColumn - h), h = f.generatedColumn, f.source != null && (x = this._sources.indexOf(f.source), v += t.encode(x - b), b = x, v += t.encode(f.originalLine - 1 - g), g = f.originalLine - 1, v += t.encode(f.originalColumn - d), d = f.originalColumn, f.name != null && (S = this._names.indexOf(f.name), v += t.encode(S - y), y = S)), _ += v;
    }
    return _;
  }, o.prototype._generateSourcesContent = function(h, p) {
    return h.map(function(d) {
      if (!this._sourcesContents)
        return null;
      p != null && (d = r.relative(p, d));
      var g = r.toSetString(d);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var h = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (h.file = this._file), this._sourceRoot != null && (h.sourceRoot = this._sourceRoot), this._sourcesContents && (h.sourcesContent = this._generateSourcesContent(h.sources, h.sourceRoot)), h;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, uh.SourceMapGenerator = o, uh;
}
var Gs = {}, dh = {}, vy;
function EE() {
  return vy || (vy = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, o, u, h, p) {
      var d = Math.floor((s - i) / 2) + i, g = h(o, u[d], !0);
      return g === 0 ? d : g > 0 ? s - d > 1 ? r(d, s, o, u, h, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : d : d - i > 1 ? r(i, d, o, u, h, p) : p == t.LEAST_UPPER_BOUND ? d : i < 0 ? -1 : i;
    }
    t.search = function(s, o, u, h) {
      if (o.length === 0)
        return -1;
      var p = r(
        -1,
        o.length,
        s,
        o,
        u,
        h || t.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(o[p], o[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(dh)), dh;
}
var ph = {}, yy;
function CE() {
  if (yy) return ph;
  yy = 1;
  function t(s, o, u) {
    var h = s[o];
    s[o] = s[u], s[u] = h;
  }
  function r(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function i(s, o, u, h) {
    if (u < h) {
      var p = r(u, h), d = u - 1;
      t(s, p, h);
      for (var g = s[h], y = u; y < h; y++)
        o(s[y], g) <= 0 && (d += 1, t(s, d, y));
      t(s, d + 1, y);
      var b = d + 1;
      i(s, o, u, b - 1), i(s, o, b + 1, h);
    }
  }
  return ph.quickSort = function(s, o) {
    i(s, o, 0, s.length - 1);
  }, ph;
}
var _y;
function wE() {
  if (_y) return Gs;
  _y = 1;
  var t = ul(), r = EE(), i = Z0().ArraySet, s = q0(), o = CE().quickSort;
  function u(g, y) {
    var b = g;
    return typeof g == "string" && (b = t.parseSourceMapInput(g)), b.sections != null ? new d(b, y) : new h(b, y);
  }
  u.fromSourceMap = function(g, y) {
    return h.fromSourceMap(g, y);
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
  }), u.prototype._charIsMappingSeparator = function(y, b) {
    var _ = y.charAt(b);
    return _ === ";" || _ === ",";
  }, u.prototype._parseMappings = function(y, b) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(y, b, _) {
    var v = b || null, f = _ || u.GENERATED_ORDER, S;
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
    var x = this.sourceRoot;
    S.map(function(O) {
      var w = O.source === null ? null : this._sources.at(O.source);
      return w = t.computeSourceURL(x, w, this._sourceMapURL), {
        source: w,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
      };
    }, this).forEach(y, v);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var b = t.getArg(y, "line"), _ = {
      source: t.getArg(y, "source"),
      originalLine: b,
      originalColumn: t.getArg(y, "column", 0)
    };
    if (_.source = this._findSourceIndex(_.source), _.source < 0)
      return [];
    var v = [], f = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (f >= 0) {
      var S = this._originalMappings[f];
      if (y.column === void 0)
        for (var x = S.originalLine; S && S.originalLine === x; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
      else
        for (var O = S.originalColumn; S && S.originalLine === b && S.originalColumn == O; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++f];
    }
    return v;
  }, Gs.SourceMapConsumer = u;
  function h(g, y) {
    var b = g;
    typeof g == "string" && (b = t.parseSourceMapInput(g));
    var _ = t.getArg(b, "version"), v = t.getArg(b, "sources"), f = t.getArg(b, "names", []), S = t.getArg(b, "sourceRoot", null), x = t.getArg(b, "sourcesContent", null), O = t.getArg(b, "mappings"), w = t.getArg(b, "file", null);
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    S && (S = t.normalize(S)), v = v.map(String).map(t.normalize).map(function(D) {
      return S && t.isAbsolute(S) && t.isAbsolute(D) ? t.relative(S, D) : D;
    }), this._names = i.fromArray(f.map(String), !0), this._sources = i.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(S, D, y);
    }), this.sourceRoot = S, this.sourcesContent = x, this._mappings = O, this._sourceMapURL = y, this.file = w;
  }
  h.prototype = Object.create(u.prototype), h.prototype.consumer = u, h.prototype._findSourceIndex = function(g) {
    var y = g;
    if (this.sourceRoot != null && (y = t.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var b;
    for (b = 0; b < this._absoluteSources.length; ++b)
      if (this._absoluteSources[b] == g)
        return b;
    return -1;
  }, h.fromSourceMap = function(y, b) {
    var _ = Object.create(h.prototype), v = _._names = i.fromArray(y._names.toArray(), !0), f = _._sources = i.fromArray(y._sources.toArray(), !0);
    _.sourceRoot = y._sourceRoot, _.sourcesContent = y._generateSourcesContent(
      _._sources.toArray(),
      _.sourceRoot
    ), _.file = y._file, _._sourceMapURL = b, _._absoluteSources = _._sources.toArray().map(function(M) {
      return t.computeSourceURL(_.sourceRoot, M, b);
    });
    for (var S = y._mappings.toArray().slice(), x = _.__generatedMappings = [], O = _.__originalMappings = [], w = 0, D = S.length; w < D; w++) {
      var E = S[w], T = new p();
      T.generatedLine = E.generatedLine, T.generatedColumn = E.generatedColumn, E.source && (T.source = f.indexOf(E.source), T.originalLine = E.originalLine, T.originalColumn = E.originalColumn, E.name && (T.name = v.indexOf(E.name)), O.push(T)), x.push(T);
    }
    return o(_.__originalMappings, t.compareByOriginalPositions), _;
  }, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  h.prototype._parseMappings = function(y, b) {
    for (var _ = 1, v = 0, f = 0, S = 0, x = 0, O = 0, w = y.length, D = 0, E = {}, T = {}, M = [], k = [], q, G, B, V, $; D < w; )
      if (y.charAt(D) === ";")
        _++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (q = new p(), q.generatedLine = _, V = D; V < w && !this._charIsMappingSeparator(y, V); V++)
          ;
        if (G = y.slice(D, V), B = E[G], B)
          D += G.length;
        else {
          for (B = []; D < V; )
            s.decode(y, D, T), $ = T.value, D = T.rest, B.push($);
          if (B.length === 2)
            throw new Error("Found a source, but no line and column");
          if (B.length === 3)
            throw new Error("Found a source and line, but no column");
          E[G] = B;
        }
        q.generatedColumn = v + B[0], v = q.generatedColumn, B.length > 1 && (q.source = x + B[1], x += B[1], q.originalLine = f + B[2], f = q.originalLine, q.originalLine += 1, q.originalColumn = S + B[3], S = q.originalColumn, B.length > 4 && (q.name = O + B[4], O += B[4])), k.push(q), typeof q.originalLine == "number" && M.push(q);
      }
    o(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, h.prototype._findMapping = function(y, b, _, v, f, S) {
    if (y[_] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[_]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
    return r.search(y, b, f, S);
  }, h.prototype.computeColumnSpans = function() {
    for (var y = 0; y < this._generatedMappings.length; ++y) {
      var b = this._generatedMappings[y];
      if (y + 1 < this._generatedMappings.length) {
        var _ = this._generatedMappings[y + 1];
        if (b.generatedLine === _.generatedLine) {
          b.lastGeneratedColumn = _.generatedColumn - 1;
          continue;
        }
      }
      b.lastGeneratedColumn = 1 / 0;
    }
  }, h.prototype.originalPositionFor = function(y) {
    var b = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, _ = this._findMapping(
      b,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (_ >= 0) {
      var v = this._generatedMappings[_];
      if (v.generatedLine === b.generatedLine) {
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
  }, h.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(y) {
      return y == null;
    }) : !1;
  }, h.prototype.sourceContentFor = function(y, b) {
    if (!this.sourcesContent)
      return null;
    var _ = this._findSourceIndex(y);
    if (_ >= 0)
      return this.sourcesContent[_];
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
    if (b)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(y) {
    var b = t.getArg(y, "source");
    if (b = this._findSourceIndex(b), b < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var _ = {
      source: b,
      originalLine: t.getArg(y, "line"),
      originalColumn: t.getArg(y, "column")
    }, v = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var f = this._originalMappings[v];
      if (f.source === _.source)
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
  }, Gs.BasicSourceMapConsumer = h;
  function d(g, y) {
    var b = g;
    typeof g == "string" && (b = t.parseSourceMapInput(g));
    var _ = t.getArg(b, "version"), v = t.getArg(b, "sections");
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    this._sources = new i(), this._names = new i();
    var f = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var x = t.getArg(S, "offset"), O = t.getArg(x, "line"), w = t.getArg(x, "column");
      if (O < f.line || O === f.line && w < f.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return f = x, {
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
  return d.prototype = Object.create(u.prototype), d.prototype.constructor = u, d.prototype._version = 3, Object.defineProperty(d.prototype, "sources", {
    get: function() {
      for (var g = [], y = 0; y < this._sections.length; y++)
        for (var b = 0; b < this._sections[y].consumer.sources.length; b++)
          g.push(this._sections[y].consumer.sources[b]);
      return g;
    }
  }), d.prototype.originalPositionFor = function(y) {
    var b = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, _ = r.search(
      b,
      this._sections,
      function(f, S) {
        var x = f.generatedLine - S.generatedOffset.generatedLine;
        return x || f.generatedColumn - S.generatedOffset.generatedColumn;
      }
    ), v = this._sections[_];
    return v ? v.consumer.originalPositionFor({
      line: b.generatedLine - (v.generatedOffset.generatedLine - 1),
      column: b.generatedColumn - (v.generatedOffset.generatedLine === b.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
      bias: y.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, d.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, d.prototype.sourceContentFor = function(y, b) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var v = this._sections[_], f = v.consumer.sourceContentFor(y, !0);
      if (f)
        return f;
    }
    if (b)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, d.prototype.generatedPositionFor = function(y) {
    for (var b = 0; b < this._sections.length; b++) {
      var _ = this._sections[b];
      if (_.consumer._findSourceIndex(t.getArg(y, "source")) !== -1) {
        var v = _.consumer.generatedPositionFor(y);
        if (v) {
          var f = {
            line: v.line + (_.generatedOffset.generatedLine - 1),
            column: v.column + (_.generatedOffset.generatedLine === v.line ? _.generatedOffset.generatedColumn - 1 : 0)
          };
          return f;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, d.prototype._parseMappings = function(y, b) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var _ = 0; _ < this._sections.length; _++)
      for (var v = this._sections[_], f = v.consumer._generatedMappings, S = 0; S < f.length; S++) {
        var x = f[S], O = v.consumer._sources.at(x.source);
        O = t.computeSourceURL(v.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var w = null;
        x.name && (w = v.consumer._names.at(x.name), this._names.add(w), w = this._names.indexOf(w));
        var D = {
          source: O,
          generatedLine: x.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (v.generatedOffset.generatedLine === x.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: w
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
  }, Gs.IndexedSourceMapConsumer = d, Gs;
}
var mh = {}, by;
function AE() {
  if (by) return mh;
  by = 1;
  var t = F0().SourceMapGenerator, r = ul(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(h, p, d, g, y) {
    this.children = [], this.sourceContents = {}, this.line = h ?? null, this.column = p ?? null, this.source = d ?? null, this.name = y ?? null, this[o] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(p, d, g) {
    var y = new u(), b = p.split(i), _ = 0, v = function() {
      var w = E(), D = E() || "";
      return w + D;
      function E() {
        return _ < b.length ? b[_++] : void 0;
      }
    }, f = 1, S = 0, x = null;
    return d.eachMapping(function(w) {
      if (x !== null)
        if (f < w.generatedLine)
          O(x, v()), f++, S = 0;
        else {
          var D = b[_] || "", E = D.substr(0, w.generatedColumn - S);
          b[_] = D.substr(w.generatedColumn - S), S = w.generatedColumn, O(x, E), x = w;
          return;
        }
      for (; f < w.generatedLine; )
        y.add(v()), f++;
      if (S < w.generatedColumn) {
        var D = b[_] || "";
        y.add(D.substr(0, w.generatedColumn)), b[_] = D.substr(w.generatedColumn), S = w.generatedColumn;
      }
      x = w;
    }, this), _ < b.length && (x && O(x, v()), y.add(b.splice(_).join(""))), d.sources.forEach(function(w) {
      var D = d.sourceContentFor(w);
      D != null && (g != null && (w = r.join(g, w)), y.setSourceContent(w, D));
    }), y;
    function O(w, D) {
      if (w === null || w.source === void 0)
        y.add(D);
      else {
        var E = g ? r.join(g, w.source) : w.source;
        y.add(new u(
          w.originalLine,
          w.originalColumn,
          E,
          D,
          w.name
        ));
      }
    }
  }, u.prototype.add = function(p) {
    if (Array.isArray(p))
      p.forEach(function(d) {
        this.add(d);
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
      for (var d = p.length - 1; d >= 0; d--)
        this.prepend(p[d]);
    else if (p[o] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var d, g = 0, y = this.children.length; g < y; g++)
      d = this.children[g], d[o] ? d.walk(p) : d !== "" && p(d, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var d, g, y = this.children.length;
    if (y > 0) {
      for (d = [], g = 0; g < y - 1; g++)
        d.push(this.children[g]), d.push(p);
      d.push(this.children[g]), this.children = d;
    }
    return this;
  }, u.prototype.replaceRight = function(p, d) {
    var g = this.children[this.children.length - 1];
    return g[o] ? g.replaceRight(p, d) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(p, d) : this.children.push("".replace(p, d)), this;
  }, u.prototype.setSourceContent = function(p, d) {
    this.sourceContents[r.toSetString(p)] = d;
  }, u.prototype.walkSourceContents = function(p) {
    for (var d = 0, g = this.children.length; d < g; d++)
      this.children[d][o] && this.children[d].walkSourceContents(p);
    for (var y = Object.keys(this.sourceContents), d = 0, g = y.length; d < g; d++)
      p(r.fromSetString(y[d]), this.sourceContents[y[d]]);
  }, u.prototype.toString = function() {
    var p = "";
    return this.walk(function(d) {
      p += d;
    }), p;
  }, u.prototype.toStringWithSourceMap = function(p) {
    var d = {
      code: "",
      line: 1,
      column: 0
    }, g = new t(p), y = !1, b = null, _ = null, v = null, f = null;
    return this.walk(function(S, x) {
      d.code += S, x.source !== null && x.line !== null && x.column !== null ? ((b !== x.source || _ !== x.line || v !== x.column || f !== x.name) && g.addMapping({
        source: x.source,
        original: {
          line: x.line,
          column: x.column
        },
        generated: {
          line: d.line,
          column: d.column
        },
        name: x.name
      }), b = x.source, _ = x.line, v = x.column, f = x.name, y = !0) : y && (g.addMapping({
        generated: {
          line: d.line,
          column: d.column
        }
      }), b = null, y = !1);
      for (var O = 0, w = S.length; O < w; O++)
        S.charCodeAt(O) === s ? (d.line++, d.column = 0, O + 1 === w ? (b = null, y = !1) : y && g.addMapping({
          source: x.source,
          original: {
            line: x.line,
            column: x.column
          },
          generated: {
            line: d.line,
            column: d.column
          },
          name: x.name
        })) : d.column++;
    }), this.walkSourceContents(function(S, x) {
      g.setSourceContent(S, x);
    }), { code: d.code, map: g };
  }, mh.SourceNode = u, mh;
}
var Sy;
function TE() {
  return Sy || (Sy = 1, Fs.SourceMapGenerator = F0().SourceMapGenerator, Fs.SourceMapConsumer = wE().SourceMapConsumer, Fs.SourceNode = AE().SourceNode), Fs;
}
var xy;
function OE() {
  return xy || (xy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = nn(), s = void 0;
    try {
      var o = TE();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(p, d, g, y) {
      this.src = "", y && this.add(y);
    }, s.prototype = {
      add: function(d) {
        i.isArray(d) && (d = d.join("")), this.src += d;
      },
      prepend: function(d) {
        i.isArray(d) && (d = d.join("")), this.src = d + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(p, d, g) {
      if (i.isArray(p)) {
        for (var y = [], b = 0, _ = p.length; b < _; b++)
          y.push(d.wrap(p[b], g));
        return y;
      } else if (typeof p == "boolean" || typeof p == "number")
        return p + "";
      return p;
    }
    function h(p) {
      this.srcFile = p, this.source = [];
    }
    h.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(d, g) {
        this.source.unshift(this.wrap(d, g));
      },
      push: function(d, g) {
        this.source.push(this.wrap(d, g));
      },
      merge: function() {
        var d = this.empty();
        return this.each(function(g) {
          d.add(["  ", g, `
`]);
        }), d;
      },
      each: function(d) {
        for (var g = 0, y = this.source.length; g < y; g++)
          d(this.source[g]);
      },
      empty: function() {
        var d = this.currentLocation || { start: {} };
        return new s(d.start.line, d.start.column, this.srcFile);
      },
      wrap: function(d) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return d instanceof s ? d : (d = u(d, this, g), new s(g.start.line, g.start.column, this.srcFile, d));
      },
      functionCall: function(d, g, y) {
        return y = this.generateList(y), this.wrap([d, g ? "." + g + "(" : "(", y, ")"]);
      },
      quotedString: function(d) {
        return '"' + (d + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(d) {
        var g = this, y = [];
        Object.keys(d).forEach(function(_) {
          var v = u(d[_], g);
          v !== "undefined" && y.push([g.quotedString(_), ":", v]);
        });
        var b = this.generateList(y);
        return b.prepend("{"), b.add("}"), b;
      },
      generateList: function(d) {
        for (var g = this.empty(), y = 0, b = d.length; y < b; y++)
          y && g.add(","), g.add(u(d[y], this));
        return g;
      },
      generateArray: function(d) {
        var g = this.generateList(d);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = h, t.exports = r.default;
  })(Jo, Jo.exports)), Jo.exports;
}
var Ey;
function NE() {
  return Ey || (Ey = 1, (function(t, r) {
    r.__esModule = !0;
    function i(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var s = rd(), o = Hn(), u = i(o), h = nn(), p = OE(), d = i(p);
    function g(_) {
      this.value = _;
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
        return h.isArray(v) || (v = [v]), v = this.source.wrap(v, f), this.environment.isSimple ? ["return ", v, ";"] : S ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, f) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(f), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, f, S, x) {
        this.environment = v, this.options = f, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !x, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, f), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
        var O = v.opcodes, w = void 0, D = void 0, E = void 0, T = void 0;
        for (E = 0, T = O.length; E < T; E++)
          w = O[E], this.source.currentLocation = w.loc, D = D || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), x ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(x);
        if (this.isChild)
          return M;
        var k = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var q = this.context, G = q.programs, B = q.decorators;
        for (E = 0, T = G.length; E < T; E++)
          G[E] && (k[E] = G[E], B[E] && (k[E + "_d"] = B[E], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), x ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), f.srcName ? (k = k.toStringWithSourceMap({ file: f.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new d.default(this.options.srcName), this.decorators = new d.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var f = this, S = "", x = this.stackVars.concat(this.registers.list);
        x.length > 0 && (S += ", " + x.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var T = f.aliases[E];
          T.children && T.referenceCount > 1 && (S += ", alias" + ++O + "=" + E, T.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var D = this.mergeSource(S);
        return v ? (w.push(D), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(v) {
        var f = this.environment.isSimple, S = !this.forceBuffer, x = void 0, O = void 0, w = void 0, D = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (w ? E.prepend("  + ") : w = E, D = E) : (w && (O ? w.prepend("buffer += ") : x = !0, D.add(";"), w = D = void 0), O = !0, f || (S = !1));
        }), S ? w ? (w.prepend("return "), D.add(";")) : O || this.source.push('return "";') : (v += ", buffer = " + (x ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), v && this.source.prepend("var " + v.substring(2) + (x ? "" : `;
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
        var x = this.popStack();
        S.splice(1, 0, x), this.push(this.source.functionCall(f, "call", S));
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
      lookupOnContext: function(v, f, S, x) {
        var O = 0;
        !x && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[O++])) : this.pushContext(), this.resolvePath("context", v, O, f, S);
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
      resolvePath: function(v, f, S, x, O) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(b(this.options.strict && O, this, f, S, v));
          return;
        }
        for (var D = f.length; S < D; S++)
          this.replaceStack(function(E) {
            var T = w.nameLookup(E, f[S], v);
            return x ? [" && ", T] : [" != null ? ", T, " : ", E];
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
        var S = this.nameLookup("decorators", f, "decorator"), x = this.setupHelperArgs(f, v);
        this.decorators.push(["fn = ", this.decorators.functionCall(S, "", ["fn", "props", "container", x]), " || fn;"]);
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
        var x = this.popStack(), O = this.setupHelper(v, f), w = [];
        S && w.push(O.name), w.push(x), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(w, "||"), ")"], E = this.source.functionCall(D, "call", O.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(v, f) {
        var S = [];
        S.push(v[0]);
        for (var x = 1; x < v.length; x++)
          S.push(f, v[x]);
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
        var x = this.setupHelper(0, v, f), O = this.lastHelper = this.nameLookup("helpers", v, "helper"), w = ["(", "(helper = ", O, " || ", S, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, x.paramsInit ? ["),(", x.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", x.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, f, S) {
        var x = [], O = this.setupParams(f, 1, x);
        v && (f = this.popStack(), delete O.name), S && (O.indent = JSON.stringify(S)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", v ? x.unshift(f) : x.unshift(this.nameLookup("partials", f, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), x.push(O), this.push(this.source.functionCall("container.invokePartial", "", x));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var f = this.popStack(), S = void 0, x = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (x = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[v] = S), x && (w.types[v] = x), O && (w.ids[v] = O), w.values[v] = f;
      },
      pushId: function(v, f, S) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + f[0] + "].path[" + f[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : v === "PathExpression" ? this.pushString(f) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, f) {
        for (var S = v.children, x = void 0, O = void 0, w = 0, D = S.length; w < D; w++) {
          x = S[w], O = new this.compiler();
          var E = this.matchExistingProgram(x);
          if (E == null) {
            this.context.programs.push("");
            var T = this.context.programs.length;
            x.index = T, x.name = "program" + T, this.context.programs[T] = O.compile(x, f, this.context, !this.precompile), this.context.decorators[T] = O.decorators, this.context.environments[T] = x, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
          } else
            x.index = E.index, x.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var f = 0, S = this.context.environments.length; f < S; f++) {
          var x = this.context.environments[f];
          if (x && x.equals(v))
            return x;
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
        var f = ["("], S = void 0, x = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof g)
          S = [w.value], f = ["(", S], O = !0;
        else {
          x = !0;
          var D = this.incrStack();
          f = ["((", this.push(D), " = ", w, ")"], S = this.topStack();
        }
        var E = v.call(this, S);
        O || this.popStack(), x && this.stackSlot--, this.push(f.concat(E, ")"));
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
          var x = v[f];
          if (x instanceof g)
            this.compileStack.push(x);
          else {
            var O = this.incrStack();
            this.pushSource([O, " = ", x, ";"]), this.compileStack.push(O);
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
        var x = [], O = this.setupHelperArgs(f, v, x, S), w = this.nameLookup("helpers", f, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: O,
          name: w,
          callParams: [D].concat(x)
        };
      },
      setupParams: function(v, f, S) {
        var x = {}, O = [], w = [], D = [], E = !S, T = void 0;
        E && (S = []), x.name = this.quotedString(v), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (x.fn = k || "container.noop", x.inverse = M || "container.noop");
        for (var q = f; q--; )
          T = this.popStack(), S[q] = T, this.trackIds && (D[q] = this.popStack()), this.stringParams && (w[q] = this.popStack(), O[q] = this.popStack());
        return E && (x.args = this.source.generateArray(S)), this.trackIds && (x.ids = this.source.generateArray(D)), this.stringParams && (x.types = this.source.generateArray(w), x.contexts = this.source.generateArray(O)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(v, f, S, x) {
        var O = this.setupParams(v, f, S);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), x ? (this.useRegister("options"), S.push("options"), ["options=", O]) : S ? (S.push(O), "") : O;
      }
    }, (function() {
      for (var _ = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, f = 0, S = _.length; f < S; f++)
        v[_[f]] = !0;
    })(), y.isValidJavaScriptVariableName = function(_) {
      return !y.RESERVED_WORDS[_] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(_);
    };
    function b(_, v, f, S, x) {
      var O = v.popStack(), w = f.length;
      for (_ && w--; S < w; S++)
        O = v.nameLookup(O, f[S], x);
      return _ ? [v.aliasable("container.strict"), "(", O, ", ", v.quotedString(f[S]), ", ", JSON.stringify(v.source.currentLocation), " )"] : O;
    }
    r.default = y, t.exports = r.default;
  })(Ko, Ko.exports)), Ko.exports;
}
var Cy;
function DE() {
  return Cy || (Cy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = mE(), o = i(s), u = U0(), h = i(u), p = _E(), d = bE(), g = NE(), y = i(g), b = H0(), _ = i(b), v = B0(), f = i(v), S = o.default.create;
    function x() {
      var w = S();
      return w.compile = function(D, E) {
        return d.compile(D, E, w);
      }, w.precompile = function(D, E) {
        return d.precompile(D, E, w);
      }, w.AST = h.default, w.Compiler = d.Compiler, w.JavaScriptCompiler = y.default, w.Parser = p.parser, w.parse = p.parse, w.parseWithoutProcessing = p.parseWithoutProcessing, w;
    }
    var O = x();
    O.create = x, f.default(O), O.Visitor = _.default, O.default = O, r.default = O, t.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var en = DE();
function Ui(t, r) {
  en.helpers[t] || en.registerHelper(t, r);
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
const $n = SillyTavern.getContext(), Qn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], br = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new a0("dumb", {}).getSettings();
async function ME({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: o,
  allCharacters: u,
  entriesGroupByWorldName: h,
  promptSettings: p,
  formatDescription: d,
  mainContextList: g,
  includeUserMacro: y,
  maxResponseToken: b,
  targetField: _,
  outputFormat: v
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const f = $n.extensionSettings.connectionManager?.profiles?.find((M) => M.id === t);
  if (!f)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const S = f.api ? $n.CONNECT_API_MAP[f.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${f.name}".`);
  const x = {};
  x.char = o.fields.name.value ?? "{{char}}", x.user = y && _r ? _r : "{{user}}", x.persona = "{{persona}}", x.targetField = _, x.userInstructions = en.compile(r.trim(), { noEscape: !0 })(x), x.fieldSpecificInstructions = en.compile(
    o.draftFields[_]?.prompt ?? o.fields[_]?.prompt,
    { noEscape: !0 }
  )({
    ...x,
    char: _ === "mes_example" ? "{{char}}" : x.char,
    user: _ === "mes_example" ? "{{user}}" : x.user
  }), x.activeFormatInstructions = en.compile(d.content, { noEscape: !0 })(
    x
  );
  {
    const M = [];
    o.selectedCharacterIndexes.forEach((k) => {
      const q = parseInt(k), G = u[q];
      G && M.push(G);
    }), x.characters = M;
  }
  {
    const M = {};
    Object.entries(h).filter(
      ([k, q]) => q.length > 0 && o.selectedWorldNames.includes(k) && q.some((G) => !G.disable)
    ).forEach(([k, q]) => {
      M[k] = q.filter((G) => !G.disable);
    }), x.lorebooks = M;
  }
  {
    const M = {}, k = {}, q = {}, G = _.startsWith("alternate_greetings_"), B = Lt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([$, oe]) => {
      let he = !1;
      if (B) {
        const ge = $.startsWith("alternate_greetings_");
        G ? he = ge && $ !== _ || $ === "first_mes" : he = ge;
      }
      if (!he) {
        const ge = en.compile(oe.value, { noEscape: !0 })({
          ...x,
          char: $ === "mes_example" ? "{{char}}" : x.char,
          user: $ === "mes_example" ? "{{user}}" : x.user
        });
        Qn.includes($) ? M[oe.label] = ge : $.startsWith("alternate_greetings_") && (k[$] = ge);
      }
    }), Object.entries(o.draftFields || {}).forEach(([$, oe]) => {
      q[oe.label] = en.compile(oe.value, { noEscape: !0 })(x);
    });
    const V = {};
    Object.keys(M).length > 0 && (V.core = M), Object.keys(k).length > 0 && (V.alternate_greetings = k), Object.keys(q).length > 0 && (V.draft = q), x.fields = V;
  }
  const O = [];
  {
    for (const M of g) {
      if (M.promptName === "chatHistory") {
        const B = await p0(S, i);
        if (B.warnings && B.warnings.length > 0)
          for (const V of B.warnings)
            De("warning", V);
        O.push(...B.result);
        continue;
      }
      let k = structuredClone(x);
      M.promptName === "stDescription" && (k.char = "{{char}}", k.user = "{{user}}");
      const q = p[M.promptName];
      if (!q)
        continue;
      const G = {
        role: M.role,
        content: en.compile(q.content, { noEscape: !0 })(k)
      };
      G.content = G.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), G.content = G.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), G.content = $n.substituteParams(G.content), G.content = G.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), G.content = G.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), G.content && O.push(G);
    }
    s && O.push({
      role: "assistant",
      content: Lv(s, v)
    });
  }
  const w = await $n.ConnectionManagerRequestService.sendRequest(
    t,
    O,
    b
  ), D = s ? Lv(s, v) + w.content : w.content, E = z0(D, v);
  let T;
  if (typeof E == "string")
    T = E;
  else if (typeof E == "object" && E !== null)
    if ("response" in E && typeof E.response == "string")
      T = E.response;
    else {
      const M = Object.values(E)[0];
      T = M ? String(M) : "";
    }
  else
    T = "";
  return T;
}
const Ma = "SillyTavern-Character-Creator", G0 = "0.3.0", kE = "F_1.10", RE = {
  EXTENSION: "charCreator"
}, tu = [
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
  stDescription: kh,
  charDefinitions: Rh,
  lorebookDefinitions: N0,
  xmlFormat: JS,
  jsonFormat: WS,
  noneFormat: ex,
  worldInfoCharDefinition: D0,
  existingFieldDefinitions: al,
  taskDescription: td,
  outputFormatInstructions: ed,
  personaDescription: tx,
  reviseJsonPrompt: nx,
  reviseXmlPrompt: rx,
  reviseTaskDescription: ax
}, V0 = {
  version: G0,
  formatVersion: kE,
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
      content: td,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: ed,
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
function Ph(t) {
  const i = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((o, u) => {
    const h = o.replace(/^\d+/, "");
    if (h) {
      const p = s ? `${h[0].toUpperCase()}${h.slice(1).toLowerCase()}` : h.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
const Lt = new a0(RE.EXTENSION, V0);
async function jE() {
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
                  content: td,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: ed,
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
            return await De("info", `[${Ma}] Added Alternate Greetings.`), {
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = kh), s;
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
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Rh), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = N0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = al), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = kh), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Rh), i.prompts.worldInfoCharDefinition.isDefault && (s.prompts.worldInfoCharDefinition.content = D0), s;
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Ma}] Error initializing settings:`, i), De("error", `[${Ma}] Failed to initialize settings: ${i.message}`), $n.Popup.show.confirm(
        `[${Ma}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Lt.resetSettings(), De("success", `[${Ma}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const xe = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("button", { className: o, ...s, children: t });
}, zE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = te.useMemo(() => {
    const h = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && h.push("text_pole"), h.push(r), h.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const h = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: h, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...o }),
      t && /* @__PURE__ */ A.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: s, className: u, ...o });
}, Su = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("select", { className: o, ...s, children: t });
}, kn = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: o, ...s, children: t });
};
var LE = n0(), gn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(gn || {}), Jr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Jr || {});
const PE = SillyTavern.getContext(), Li = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var h;
  const p = te.useRef(null), d = te.useRef(null), [g, y] = te.useState(!1), [b, _] = te.useState(null), v = te.useRef(PE.uuidv4()), f = te.useRef({
    id: v.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  te.useEffect(() => {
    const w = p.current;
    if (!w) return;
    const D = (E) => {
      E.preventDefault(), o || S(Jr.CANCELLED);
    };
    return w.addEventListener("cancel", D), f.current.dlg = w, f.current.mainInput = d.current, wi.util.popups.push(f.current), w.showModal || (w.classList.add("poly_dialog"), rv.registerDialog(w), new ResizeObserver((E) => {
      for (const T of E)
        rv.reposition(T.target);
    }).observe(w)), w.showModal(), Gf(), () => {
      nv(wi.util.popups, f.current), Gf(), w.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (w) => {
    var D, E;
    let T = w;
    if (r === gn.INPUT && (w >= Jr.AFFIRMATIVE ? T = (D = d.current) == null ? void 0 : D.value : w === Jr.NEGATIVE ? T = !1 : w === Jr.CANCELLED ? T = null : T = !1), (E = s.customInputs) != null && E.length) {
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
    M && (M.setAttribute("closing", ""), Gf(), ab(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(f.current), nv(wi.util.popups, f.current), wi.util.popups.length > 0) {
        const q = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), G = q?.getAttribute("data-id"), B = wi.util.popups.find((V) => V.id === G);
        B && B.lastFocus && B.lastFocus.focus();
      }
      u(T);
    }));
  }, x = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (_(w.target), f.current.lastFocus = w.target);
  }, O = async (w) => {
  };
  return LE.createPortal(
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
        onFocus: x,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: t }),
          r === gn.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: d,
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
          r !== gn.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (h = s.customButtons) == null ? void 0 : h.map((w, D) => {
              const E = typeof w == "string" ? { text: w, result: D + 2 } : w;
              return /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var T;
                    (T = E.action) == null || T.call(E), S(E.result ?? D + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                D
              );
            }),
            r !== gn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Jr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== gn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Jr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === gn.DISPLAY && /* @__PURE__ */ A.jsx(
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
}, yr = SillyTavern.getContext(), Y0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: h
}) => {
  const [p, d] = te.useState(t ?? ""), [g, y] = te.useState(Date.now()), { isEnabled: b, profiles: _, connectApiMap: v } = te.useMemo(() => {
    var x, O;
    return (x = yr.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = yr.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: yr.CONNECT_API_MAP
    };
  }, [g]);
  te.useEffect(() => {
    if (!b) return;
    const x = (D) => {
      Vs(D, r, v) && (y(Date.now()), o?.(D));
    }, O = (D, E) => {
      const T = Vs(D, r, v), M = Vs(E, r, v);
      (T || M) && y(Date.now()), u?.(D, E), p === D.id && !M && (d(""), s?.(void 0));
    }, w = (D) => {
      Vs(D, r, v) && (y(Date.now()), h?.(D), p === D.id && (d(""), s?.(void 0)));
    };
    return yr.eventSource.on("CONNECTION_PROFILE_CREATED", x), yr.eventSource.on("CONNECTION_PROFILE_UPDATED", O), yr.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      yr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), yr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), yr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [b, p, r, v, s, o, u, h]);
  const f = te.useMemo(() => {
    if (!b) return [];
    const x = _.filter((w) => Vs(w, r, v)), O = {};
    for (const [w, D] of Object.entries(r))
      O[w] = { label: D, profiles: [] };
    for (const w of x) {
      const D = v[w.api];
      O[D.selected] && O[D.selected].profiles.push(w);
    }
    for (const w of Object.values(O))
      w.profiles.sort((D, E) => (D.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(O).filter((w) => w.profiles.length > 0);
  }, [b, _, r, v]), S = te.useCallback(
    (x) => {
      const O = x.target.value;
      d(O);
      const w = _.find((D) => D.id === O);
      s?.(w);
    },
    [_, s]
  );
  return b ? /* @__PURE__ */ A.jsxs(Su, { value: p, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: i }),
    f.map((x) => /* @__PURE__ */ A.jsx("optgroup", { label: x.label, children: x.profiles.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.id, children: O.name }, O.id)) }, x.label))
  ] }) : /* @__PURE__ */ A.jsx(Su, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, IE = du.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: h }) => {
    const {
      id: p,
      label: d,
      enabled: g,
      canDelete: y = !0,
      canToggle: b = !0,
      showSelect: _ = !0,
      canSelect: v = !0,
      selectOptions: f = [],
      selectValue: S
    } = t, x = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ A.jsxs("li", { className: "sortable-list-item", style: x, "data-id": p, children: [
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
          children: d
        }
      ),
      s && _ && v && /* @__PURE__ */ A.jsx(
        Su,
        {
          value: S,
          onChange: (D) => h(p, D.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: f.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : f.map((D) => /* @__PURE__ */ A.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!_ || !v) && /* @__PURE__ */ A.jsx("span", { style: w }),
      r && b && /* @__PURE__ */ A.jsx(
        xe,
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
      r && !b && /* @__PURE__ */ A.jsx("span", { style: w }),
      i && y && /* @__PURE__ */ A.jsx(
        xe,
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
), BE = ({
  items: t,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: u = {}
}) => {
  const h = te.useRef(null), p = te.useRef(null);
  te.useEffect(() => (h.current && (p.current = Ae.create(h.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...u,
    onEnd: (b) => {
      const { oldIndex: _, newIndex: v } = b;
      if (_ === void 0 || v === void 0 || _ === v)
        return;
      const f = Array.from(t), [S] = f.splice(_, 1);
      f.splice(v, 0, S), r(f);
    }
  })), () => {
    var b;
    (b = p.current) == null || b.destroy(), p.current = null;
  }), [t, r, u]);
  const d = (b) => {
    r(t.map((_) => _.id === b ? { ..._, enabled: !_.enabled } : _));
  }, g = (b) => {
    r(t.filter((_) => _.id !== b));
  }, y = (b, _) => {
    r(t.map((v) => v.id === b ? { ...v, selectValue: _ } : v));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: h, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((b) => /* @__PURE__ */ A.jsx(
    IE,
    {
      item: b,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: d,
      onDelete: g,
      onSelectChange: y
    },
    b.id
  )) });
}, nu = ({
  items: t,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: o = !1,
  multiple: u = !0,
  disabled: h = !1,
  onBeforeSelection: p,
  enableSearch: d = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: b,
  inputClasses: _,
  containerClasses: v
}) => {
  const [f, S] = te.useState(!1), [x, O] = te.useState(""), w = te.useRef(null);
  te.useEffect(() => {
    const k = (q) => {
      w.current && !w.current.contains(q.target) && S(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), te.useEffect(() => {
    f || O("");
  }, [f]);
  const D = te.useMemo(() => {
    if (!d) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...b
    };
    return new Bi(t, k);
  }, [t, d, b]), E = te.useMemo(() => !d || !x.trim() || !D ? t : D.search(x.trim()).map((k) => k.item), [t, x, d, D]), T = async (k) => {
    let q;
    u ? q = r.includes(k) ? r.filter((G) => G !== k) : [...r, k] : q = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, q))) && (i(q), o && S(!1));
  }, M = te.useMemo(() => {
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
        opacity: h ? 0.6 : 1,
        pointerEvents: h ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !h && S(!f),
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
              d && /* @__PURE__ */ A.jsx(
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
                    zE,
                    {
                      type: "text",
                      placeholder: g,
                      value: x,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: _
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((k) => /* @__PURE__ */ A.jsx(
                UE,
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
}, UE = du.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, o] = te.useState(!1);
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
}), gh = SillyTavern.getContext(), xu = ({
  value: t,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: o,
  onItemsChange: u,
  enableCreate: h = !1,
  enableRename: p = !1,
  enableDelete: d = !1,
  onCreate: g,
  onRename: y,
  onDelete: b,
  buttons: _
}) => {
  const v = te.useMemo(() => r.find((w) => w.value === t), [r, t]), f = te.useCallback((w) => w ? i.includes(w) : !1, [i]), S = async () => {
    const w = await gh.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const D = w.trim();
    if (r.some((T) => T.value === D)) {
      await De("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (g) {
      const T = await Promise.resolve(g(D));
      if (!T.confirmed) return;
      T.value && (typeof T.value == "string" ? E = { value: T.value, label: T.value } : E = T.value);
    }
    u([...r, E]), o(E.value, t);
  }, x = async () => {
    if (!v) {
      await De("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (f(v.value)) {
      await De("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await gh.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!w || w.trim() === "" || w.trim() === v.value) return;
    const D = w.trim();
    if (r.some((M) => M.value === D)) {
      await De("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(v.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? E = { value: M.value, label: M.value } : E = M.value);
    }
    const T = r.map((M) => M.value === v.value ? E : M);
    u(T), o(E.value, t);
  }, O = async () => {
    var w;
    if (!v) {
      await De("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (f(v.value)) {
      await De("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await gh.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || b && !await Promise.resolve(b(v.value)))
      return;
    const D = r.findIndex((M) => M.value === v.value), E = r.filter((M) => M.value !== v.value);
    u(E);
    let T;
    if (E.length > 0) {
      const M = Math.min(D, E.length - 1);
      T = (w = E[M]) == null ? void 0 : w.value;
    }
    o(T, t);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(Su, { value: t ?? "", onChange: (w) => o(w.target.value, t), children: r.map((w) => /* @__PURE__ */ A.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    h && /* @__PURE__ */ A.jsx(
      xe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      xe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: x,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    d && /* @__PURE__ */ A.jsx(
      xe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    _?.map((w) => /* @__PURE__ */ A.jsx(
      xe,
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
}, X0 = () => {
  const [, t] = te.useState(0);
  return te.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, vh = SillyTavern.getContext(), HE = () => {
  const t = X0(), r = Lt.getSettings(), [i, s] = te.useState(tu[0]), o = te.useCallback(
    (E) => {
      const T = Lt.getSettings();
      E(T), Lt.saveSettings(), t();
    },
    [t]
  ), u = te.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [r.mainContextTemplatePresets]
  ), h = te.useMemo(
    () => Object.entries(r.prompts).map(([E, T]) => ({
      value: E,
      label: `${T.label} (${E})`
    })),
    [r.prompts]
  ), p = te.useMemo(() => {
    const E = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return E ? E.prompts.map((T) => {
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
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), d = (E) => {
    o((T) => {
      T.mainContextTemplatePreset = E ?? "default";
    });
  }, g = (E) => {
    o((T) => {
      const M = {};
      E.forEach((k) => {
        M[k.value] = T.mainContextTemplatePresets[k.value] ?? structuredClone(
          T.mainContextTemplatePresets[T.mainContextTemplatePreset] ?? T.mainContextTemplatePresets.default
        );
      }), T.mainContextTemplatePresets = M;
    });
  }, y = (E) => {
    o((T) => {
      const M = E.map((G) => ({
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
  }, b = async () => {
    await vh.Popup.show.confirm("Restore default", "Are you sure?") && o((T) => {
      T.mainContextTemplatePresets = {
        ...T.mainContextTemplatePresets,
        default: structuredClone(V0.mainContextTemplatePresets.default)
      }, T.mainContextTemplatePreset === "default" ? t() : T.mainContextTemplatePreset = "default";
    });
  }, _ = (E) => {
    o((T) => {
      const M = E.map((B) => B.value);
      Object.keys(T.prompts).filter((B) => !M.includes(B)).forEach((B) => {
        Object.values(T.mainContextTemplatePresets).forEach((V) => {
          V.prompts = V.prompts.filter(($) => $.promptName !== B);
        });
      });
      const G = {};
      E.forEach((B) => {
        G[B.value] = T.prompts[B.value] ?? { content: "", isDefault: !1, label: B.label };
      }), T.prompts = G;
    });
  }, v = (E) => {
    const T = Ph(E);
    return T ? r.prompts[T] ? (De("error", `Prompt name already exists: ${T}`), { confirmed: !1 }) : (o((M) => {
      M.prompts = {
        ...M.prompts,
        [T]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: E }
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
    }), s(T), { confirmed: !0, value: T }) : (De("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, f = (E, T) => {
    const M = Ph(T);
    return M ? r.prompts[M] ? (De("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (o((k) => {
      const { [E]: q, ...G } = k.prompts;
      k.prompts = {
        ...G,
        [M]: { ...q, label: T }
      };
      const B = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([V, $]) => [
          V,
          {
            ...$,
            prompts: $.prompts.map((oe) => oe.promptName === E ? { ...oe, promptName: M } : oe)
          }
        ])
      );
      k.mainContextTemplatePresets = B;
    }), s(M), { confirmed: !0, value: M }) : (De("error", `Invalid prompt name: ${T}`), { confirmed: !1 });
  }, S = (E) => {
    const T = E.target.value;
    o((M) => {
      const k = M.prompts[i];
      k && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...k,
          // Copy existing properties
          content: T,
          isDefault: tu.includes(i) ? et[i] === T : !1
        }
      });
    });
  }, x = async () => {
    const E = r.prompts[i];
    if (!E) return De("warning", "No prompt selected.");
    await vh.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: et[i]
        }
      };
    });
  }, O = async () => {
    await vh.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Lt.resetSettings(), t(), De("success", "Settings have been reset."));
  }, w = r.prompts[i], D = tu.includes(i);
  return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ A.jsx(
          xe,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: b
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        xu,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: d,
          onItemsChange: g,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        BE,
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
          xe,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: x
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        xu,
        {
          label: "Prompt",
          items: h,
          value: i,
          readOnlyValues: tu,
          onChange: (E) => s(E ?? ""),
          onItemsChange: _,
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
          onChange: (E) => o((T) => {
            T.showSaveAsWorldInfoEntry.show = E.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ A.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(xe, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, wy = ({
  fieldId: t,
  label: r,
  value: i,
  prompt: s,
  large: o = !1,
  rows: u = 3,
  promptEnabled: h = !0,
  isDraft: p = !1,
  isGenerating: d = !1,
  onValueChange: g,
  onPromptChange: y,
  onGenerate: b,
  onContinue: _,
  onClear: v,
  onCompare: f,
  onDelete: S,
  onOpenReviseSessions: x
}) => /* @__PURE__ */ A.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ A.jsx("label", { children: r }),
  /* @__PURE__ */ A.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ A.jsx(kn, { value: i, onChange: (O) => g(t, O.target.value), rows: u }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ A.jsx(xe, { onClick: () => b(t), disabled: d, title: "Generate field content", children: d ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ A.jsx(xe, { onClick: () => _(t), disabled: d, title: "Continue from current content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ A.jsx(xe, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" }) }),
      x && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ A.jsx(xe, { onClick: () => x(t), title: "Revise with AI chat", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && f && /* @__PURE__ */ A.jsx(xe, { onClick: () => f(t), title: "Compare with loaded character", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ A.jsx(xe, { onClick: () => S(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  h && /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ A.jsx(
    kn,
    {
      value: s,
      onChange: (O) => y(t, O.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), qE = SillyTavern.getContext(), ZE = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [h, p] = te.useState(0);
  te.useEffect(() => {
    h >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, h]);
  const d = () => {
    const _ = [...t, { value: "", prompt: "" }];
    r(_), p(_.length - 1);
  }, g = async () => {
    if (t.length === 0) return;
    if (await qE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = t.filter((f, S) => S !== h);
      r(v);
    }
  }, y = (_, v, f) => {
    const S = [...t];
    S[_][v] = f, r(S);
  }, b = t[h];
  return /* @__PURE__ */ A.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ A.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ A.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((_, v) => /* @__PURE__ */ A.jsxs(
            xe,
            {
              onClick: () => p(v),
              className: `menu_button ${v === h ? "active" : ""}`,
              children: [
                "Greeting ",
                v + 1
              ]
            },
            v
          ))
        }
      ),
      /* @__PURE__ */ A.jsxs(xe, { onClick: d, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ A.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ A.jsx(
          kn,
          {
            value: b?.value ?? "",
            onChange: (_) => y(h, "value", _.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
          kn,
          {
            value: b?.prompt ?? "",
            onChange: (_) => y(h, "prompt", _.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ A.jsx(xe, { onClick: () => i(h), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ A.jsx(xe, { onClick: () => s(h), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ A.jsx(
          xe,
          {
            onClick: () => y(h, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ A.jsx(xe, { onClick: () => o(h), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ A.jsx(
          xe,
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
      var u = this.castInput(r, s), h = this.castInput(i, s), p = this.removeEmpty(this.tokenize(u, s)), d = this.removeEmpty(this.tokenize(h, s));
      return this.diffWithOptionsObj(p, d, s, o);
    }, t.prototype.diffWithOptionsObj = function(r, i, s, o) {
      var u = this, h, p = function(E) {
        if (E = u.postProcess(E, s), o) {
          setTimeout(function() {
            o(E);
          }, 0);
          return;
        } else
          return E;
      }, d = i.length, g = r.length, y = 1, b = d + g;
      s.maxEditLength != null && (b = Math.min(b, s.maxEditLength));
      var _ = (h = s.timeout) !== null && h !== void 0 ? h : 1 / 0, v = Date.now() + _, f = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(f[0], i, r, 0, s);
      if (f[0].oldPos + 1 >= g && S + 1 >= d)
        return p(this.buildValues(f[0].lastComponent, i, r));
      var x = -1 / 0, O = 1 / 0, w = function() {
        for (var E = Math.max(x, -y); E <= Math.min(O, y); E += 2) {
          var T = void 0, M = f[E - 1], k = f[E + 1];
          M && (f[E - 1] = void 0);
          var q = !1;
          if (k) {
            var G = k.oldPos - E;
            q = k && 0 <= G && G < d;
          }
          var B = M && M.oldPos + 1 < g;
          if (!q && !B) {
            f[E] = void 0;
            continue;
          }
          if (!B || q && M.oldPos < k.oldPos ? T = u.addToPath(k, !0, !1, 0, s) : T = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(T, i, r, E, s), T.oldPos + 1 >= g && S + 1 >= d)
            return p(u.buildValues(T.lastComponent, i, r)) || !0;
          f[E] = T, T.oldPos + 1 >= g && (O = Math.min(O, E - 1)), S + 1 >= d && (x = Math.max(x, E + 1));
        }
        y++;
      };
      if (o)
        (function E() {
          setTimeout(function() {
            if (y > b || Date.now() > v)
              return o(void 0);
            w() || E();
          }, 0);
        })();
      else
        for (; y <= b && Date.now() <= v; ) {
          var D = w();
          if (D)
            return D;
        }
    }, t.prototype.addToPath = function(r, i, s, o, u) {
      var h = r.lastComponent;
      return h && !u.oneChangePerToken && h.added === i && h.removed === s ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: h.count + 1, added: i, removed: s, previousComponent: h.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: i, removed: s, previousComponent: h }
      };
    }, t.prototype.extractCommon = function(r, i, s, o, u) {
      for (var h = i.length, p = s.length, d = r.oldPos, g = d - o, y = 0; g + 1 < h && d + 1 < p && this.equals(s[d + 1], i[g + 1], u); )
        g++, d++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = d, g;
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
      for (var h = o.length, p = 0, d = 0, g = 0; p < h; p++) {
        var y = o[p];
        if (y.removed)
          y.value = this.join(s.slice(g, g + y.count)), g += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var b = i.slice(d, d + y.count);
            b = b.map(function(_, v) {
              var f = s[g + v];
              return f.length > _.length ? f : _;
            }), y.value = this.join(b);
          } else
            y.value = this.join(i.slice(d, d + y.count));
          d += y.count, y.added || (g += y.count);
        }
      }
      return o;
    }, t;
  })()
), FE = /* @__PURE__ */ (function() {
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
})(), GE = (
  /** @class */
  (function(t) {
    FE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(ra)
);
new GE();
function Ay(t, r) {
  var i;
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[i] != r[i])
      return t.slice(0, i);
  return t.slice(0, i);
}
function Ty(t, r) {
  var i;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[t.length - (i + 1)] != r[r.length - (i + 1)])
      return t.slice(-i);
  return t.slice(-i);
}
function Ih(t, r, i) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + t.slice(r.length);
}
function Bh(t, r, i) {
  if (!r)
    return t + i;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + i;
}
function Ys(t, r) {
  return Ih(t, r, "");
}
function ru(t, r) {
  return Bh(t, r, "");
}
function Oy(t, r) {
  return r.slice(0, VE(t, r));
}
function VE(t, r) {
  var i = 0;
  t.length > r.length && (i = t.length - r.length);
  var s = r.length;
  t.length < r.length && (s = t.length);
  var o = Array(s), u = 0;
  o[0] = 0;
  for (var h = 1; h < s; h++) {
    for (r[h] == r[u] ? o[h] = o[u] : o[h] = u; u > 0 && r[h] != r[u]; )
      u = o[u];
    r[h] == r[u] && u++;
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
var $0 = /* @__PURE__ */ (function() {
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
})(), Eu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", YE = new RegExp("[".concat(Eu, "]+|\\s+|[^").concat(Eu, "]"), "ug"), XE = (
  /** @class */
  (function(t) {
    $0(r, t);
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
        o = Array.from(u.segment(i), function(d) {
          return d.segment;
        });
      } else
        o = i.match(YE) || [];
      var h = [], p = null;
      return o.forEach(function(d) {
        /\s/.test(d) ? p == null ? h.push(d) : h.push(h.pop() + d) : p != null && /\s/.test(p) ? h[h.length - 1] == p ? h.push(h.pop() + d) : h.push(p + d) : h.push(d), p = d;
      }), h;
    }, r.prototype.join = function(i) {
      return i.map(function(s, o) {
        return o == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var o = null, u = null, h = null;
      return i.forEach(function(p) {
        p.added ? u = p : p.removed ? h = p : ((u || h) && Ny(o, h, u, p), o = p, u = null, h = null);
      }), (u || h) && Ny(o, h, u, null), i;
    }, r;
  })(ra)
), $E = new XE();
function Q0(t, r, i) {
  return $E.diff(t, r, i);
}
function Ny(t, r, i, s) {
  if (r && i) {
    var o = Kr(r.value), u = Xs(r.value), h = Kr(i.value), p = Xs(i.value);
    if (t) {
      var d = Ay(o, h);
      t.value = Bh(t.value, h, d), r.value = Ys(r.value, d), i.value = Ys(i.value, d);
    }
    if (s) {
      var g = Ty(u, p);
      s.value = Ih(s.value, p, g), r.value = ru(r.value, g), i.value = ru(i.value, g);
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
    var b = Kr(s.value), _ = Kr(r.value), v = Xs(r.value), f = Ay(b, _);
    r.value = Ys(r.value, f);
    var S = Ty(Ys(b, f), v);
    r.value = ru(r.value, S), s.value = Ih(s.value, b, S), t.value = Bh(t.value, b, b.slice(0, b.length - S.length));
  } else if (s) {
    var x = Kr(s.value), O = Xs(r.value), w = Oy(O, x);
    r.value = ru(r.value, w);
  } else if (t) {
    var D = Xs(t.value), E = Kr(r.value), w = Oy(D, E);
    r.value = Ys(r.value, w);
  }
}
var QE = (
  /** @class */
  (function(t) {
    $0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(Eu, "]+|[^\\S\\n\\r]+|[^").concat(Eu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(ra)
);
new QE();
var KE = /* @__PURE__ */ (function() {
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
})(), JE = (
  /** @class */
  (function(t) {
    KE(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = K0, i;
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
new JE();
function K0(t, r) {
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
var WE = /* @__PURE__ */ (function() {
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
})(), eC = (
  /** @class */
  (function(t) {
    WE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ra)
);
new eC();
var tC = /* @__PURE__ */ (function() {
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
})(), nC = (
  /** @class */
  (function(t) {
    tC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(ra)
);
new nC();
var rC = /* @__PURE__ */ (function() {
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
})(), aC = (
  /** @class */
  (function(t) {
    rC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = K0, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var o = s.undefinedReplacement, u = s.stringifyReplacer, h = u === void 0 ? function(p, d) {
        return typeof d > "u" ? o : d;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(Uh(i, null, null, h), null, "  ");
    }, r.prototype.equals = function(i, s, o) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(ra)
);
new aC();
function Uh(t, r, i, s, o) {
  r = r || [], i = i || [], s && (t = s(o === void 0 ? "" : o, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return i[u];
  var h;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), h = new Array(t.length), i.push(h), u = 0; u < t.length; u += 1)
      h[u] = Uh(t[u], r, i, s, String(u));
    return r.pop(), i.pop(), h;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), h = {}, i.push(h);
    var p = [], d;
    for (d in t)
      Object.prototype.hasOwnProperty.call(t, d) && p.push(d);
    for (p.sort(), u = 0; u < p.length; u += 1)
      d = p[u], h[d] = Uh(t[d], r, i, s, d);
    r.pop(), i.pop();
  } else
    h = t;
  return h;
}
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
new sC();
const lC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = te.useMemo(() => {
    const o = Q0(t, r);
    let u = "", h = "";
    return o.forEach((p) => {
      const g = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += g), p.removed || (h += g);
    }), { originalHtml: u, newHtml: h };
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
  function s(p, d) {
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, d);
    for (const y in h.prototype)
      y in p || Object.defineProperty(p, y, { value: h.prototype[y].bind(p) });
    p._zod.constr = h, p._zod.def = d;
  }
  const o = i?.Parent ?? Object;
  class u extends o {
  }
  Object.defineProperty(u, "name", { value: t });
  function h(p) {
    var d;
    const g = i?.Parent ? new u() : this;
    s(g, p), (d = g._zod).deferred ?? (d.deferred = []);
    for (const y of g._zod.deferred)
      y();
    return g;
  }
  return Object.defineProperty(h, "init", { value: s }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (p) => i?.Parent && p instanceof i.Parent ? !0 : p?._zod?.traits?.has(t)
  }), Object.defineProperty(h, "name", { value: t }), h;
}
class Pi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class J0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const W0 = {};
function za(t) {
  return W0;
}
function e1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function Hh(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function ad(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function id(t) {
  return t == null;
}
function sd(t) {
  const r = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, i);
}
function oC(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const d = s.match(/\d?e-(\d?)/);
    d?.[1] && (o = Number.parseInt(d[1]));
  }
  const u = i > o ? i : o, h = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return h % p / 10 ** u;
}
const Dy = Symbol("evaluating");
function rt(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Dy)
        return s === void 0 && (s = Dy, s = i()), s;
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
function My(t) {
  return JSON.stringify(t);
}
const t1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Cu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const uC = ad(() => {
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
  if (Cu(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(Cu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function n1(t) {
  return il(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const cC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Nu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function aa(t, r, i) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || i?.parent) && (s._zod.parent = t), s;
}
function be(t) {
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
function fC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const hC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function dC(t, r) {
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
function pC(t, r) {
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
function mC(t, r) {
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
function gC(t, r) {
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
function vC(t, r) {
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
function yC(t, r, i) {
  const s = Ia(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const h in i) {
          if (!(h in o))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (u[h] = t ? new t({
            type: "optional",
            innerType: o[h]
          }) : o[h]);
        }
      else
        for (const h in o)
          u[h] = t ? new t({
            type: "optional",
            innerType: o[h]
          }) : o[h];
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return aa(r, s);
}
function _C(t, r, i) {
  const s = Ia(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const h in i) {
          if (!(h in u))
            throw new Error(`Unrecognized key: "${h}"`);
          i[h] && (u[h] = new t({
            type: "nonoptional",
            innerType: o[h]
          }));
        }
      else
        for (const h in o)
          u[h] = new t({
            type: "nonoptional",
            innerType: o[h]
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
function r1(t, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function au(t) {
  return typeof t == "string" ? t : t?.message;
}
function La(t, r, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const o = au(t.inst?._zod.def?.error?.(t)) ?? au(r?.error?.(t)) ?? au(i.customError?.(t)) ?? au(i.localeError?.(t)) ?? "Invalid input";
    s.message = o;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function ld(t) {
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
const a1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Hh, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, i1 = W("$ZodError", a1), s1 = W("$ZodError", a1, { Parent: Error });
function bC(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of t.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function SC(t, r = (i) => i.message) {
  const i = { _errors: [] }, s = (o) => {
    for (const u of o.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((h) => s({ issues: h }));
      else if (u.code === "invalid_key")
        s({ issues: u.issues });
      else if (u.code === "invalid_element")
        s({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(r(u));
      else {
        let h = i, p = 0;
        for (; p < u.path.length; ) {
          const d = u.path[p];
          p === u.path.length - 1 ? (h[d] = h[d] || { _errors: [] }, h[d]._errors.push(r(u))) : h[d] = h[d] || { _errors: [] }, h = h[d], p++;
        }
      }
  };
  return s(t), i;
}
const od = (t) => (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, h = r._zod.run({ value: i, issues: [] }, u);
  if (h instanceof Promise)
    throw new Pi();
  if (h.issues.length) {
    const p = new (o?.Err ?? t)(h.issues.map((d) => La(d, u, za())));
    throw t1(p, o?.callee), p;
  }
  return h.value;
}, ud = (t) => async (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let h = r._zod.run({ value: i, issues: [] }, u);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const p = new (o?.Err ?? t)(h.issues.map((d) => La(d, u, za())));
    throw t1(p, o?.callee), p;
  }
  return h.value;
}, Du = (t) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, o);
  if (u instanceof Promise)
    throw new Pi();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? i1)(u.issues.map((h) => La(h, o, za())))
  } : { success: !0, data: u.value };
}, xC = /* @__PURE__ */ Du(s1), Mu = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((h) => La(h, o, za())))
  } : { success: !0, data: u.value };
}, EC = /* @__PURE__ */ Mu(s1), CC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return od(t)(r, i, o);
}, wC = (t) => (r, i, s) => od(t)(r, i, s), AC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ud(t)(r, i, o);
}, TC = (t) => async (r, i, s) => ud(t)(r, i, s), OC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Du(t)(r, i, o);
}, NC = (t) => (r, i, s) => Du(t)(r, i, s), DC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Mu(t)(r, i, o);
}, MC = (t) => async (r, i, s) => Mu(t)(r, i, s), kC = /^[cC][^\s-]{8,}$/, RC = /^[0-9a-z]+$/, jC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, zC = /^[0-9a-vA-V]{20}$/, LC = /^[A-Za-z0-9]{27}$/, PC = /^[a-zA-Z0-9_-]{21}$/, IC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, BC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ky = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, UC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, HC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function qC() {
  return new RegExp(HC, "u");
}
const ZC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, FC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, GC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, VC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, YC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, l1 = /^[A-Za-z0-9_-]*$/, XC = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, $C = /^\+(?:[0-9]){6,14}[0-9]$/, o1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", QC = /* @__PURE__ */ new RegExp(`^${o1}$`);
function u1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function KC(t) {
  return new RegExp(`^${u1(t)}$`);
}
function JC(t) {
  const r = u1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${o1}T(?:${s})$`);
}
const WC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, ew = /^-?\d+$/, tw = /^-?\d+(?:\.\d+)?/, nw = /^[^A-Z]*$/, rw = /^[^a-z]*$/, rn = /* @__PURE__ */ W("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), c1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, f1 = /* @__PURE__ */ W("$ZodCheckLessThan", (t, r) => {
  rn.init(t, r);
  const i = c1[typeof r.value];
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
}), h1 = /* @__PURE__ */ W("$ZodCheckGreaterThan", (t, r) => {
  rn.init(t, r);
  const i = c1[typeof r.value];
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
}), aw = /* @__PURE__ */ W("$ZodCheckMultipleOf", (t, r) => {
  rn.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : oC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), iw = /* @__PURE__ */ W("$ZodCheckNumberFormat", (t, r) => {
  rn.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, u] = hC[r.format];
  t._zod.onattach.push((h) => {
    const p = h._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = u, i && (p.pattern = ew);
  }), t._zod.check = (h) => {
    const p = h.value;
    if (i) {
      if (!Number.isInteger(p)) {
        h.issues.push({
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
        p > 0 ? h.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        }) : h.issues.push({
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
    p < o && h.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: t,
      continue: !r.abort
    }), p > u && h.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: u,
      inst: t
    });
  };
}), sw = /* @__PURE__ */ W("$ZodCheckMaxLength", (t, r) => {
  var i;
  rn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !id(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length <= r.maximum)
      return;
    const h = ld(o);
    s.issues.push({
      origin: h,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), lw = /* @__PURE__ */ W("$ZodCheckMinLength", (t, r) => {
  var i;
  rn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !id(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length >= r.minimum)
      return;
    const h = ld(o);
    s.issues.push({
      origin: h,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), ow = /* @__PURE__ */ W("$ZodCheckLengthEquals", (t, r) => {
  var i;
  rn.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !id(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), t._zod.check = (s) => {
    const o = s.value, u = o.length;
    if (u === r.length)
      return;
    const h = ld(o), p = u > r.length;
    s.issues.push({
      origin: h,
      ...p ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), ku = /* @__PURE__ */ W("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  rn.init(t, r), t._zod.onattach.push((o) => {
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
}), uw = /* @__PURE__ */ W("$ZodCheckRegex", (t, r) => {
  ku.init(t, r), t._zod.check = (i) => {
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
}), cw = /* @__PURE__ */ W("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = nw), ku.init(t, r);
}), fw = /* @__PURE__ */ W("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = rw), ku.init(t, r);
}), hw = /* @__PURE__ */ W("$ZodCheckIncludes", (t, r) => {
  rn.init(t, r);
  const i = Nu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
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
}), dw = /* @__PURE__ */ W("$ZodCheckStartsWith", (t, r) => {
  rn.init(t, r);
  const i = new RegExp(`^${Nu(r.prefix)}.*`);
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
}), pw = /* @__PURE__ */ W("$ZodCheckEndsWith", (t, r) => {
  rn.init(t, r);
  const i = new RegExp(`.*${Nu(r.suffix)}$`);
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
}), mw = /* @__PURE__ */ W("$ZodCheckOverwrite", (t, r) => {
  rn.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class gw {
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
`).filter((h) => h), o = Math.min(...s.map((h) => h.length - h.trimStart().length)), u = s.map((h) => h.slice(o)).map((h) => " ".repeat(this.indent * 2) + h);
    for (const h of u)
      this.content.push(h);
  }
  compile() {
    const r = Function, i = this?.args, o = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...i, o.join(`
`));
  }
}
const vw = {
  major: 4,
  minor: 1,
  patch: 12
}, Et = /* @__PURE__ */ W("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = vw;
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
    const o = (h, p, d) => {
      let g = ji(h), y;
      for (const b of p) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(h))
            continue;
        } else if (g)
          continue;
        const _ = h.issues.length, v = b._zod.check(h);
        if (v instanceof Promise && d?.async === !1)
          throw new Pi();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, h.issues.length !== _ && (g || (g = ji(h, _)));
          });
        else {
          if (h.issues.length === _)
            continue;
          g || (g = ji(h, _));
        }
      }
      return y ? y.then(() => h) : h;
    }, u = (h, p, d) => {
      if (ji(h))
        return h.aborted = !0, h;
      const g = o(p, s, d);
      if (g instanceof Promise) {
        if (d.async === !1)
          throw new Pi();
        return g.then((y) => t._zod.parse(y, d));
      }
      return t._zod.parse(g, d);
    };
    t._zod.run = (h, p) => {
      if (p.skipChecks)
        return t._zod.parse(h, p);
      if (p.direction === "backward") {
        const g = t._zod.parse({ value: h.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((y) => u(y, h, p)) : u(g, h, p);
      }
      const d = t._zod.parse(h, p);
      if (d instanceof Promise) {
        if (p.async === !1)
          throw new Pi();
        return d.then((g) => o(g, s, p));
      }
      return o(d, s, p);
    };
  }
  t["~standard"] = {
    validate: (o) => {
      try {
        const u = xC(t, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return EC(t, o).then((h) => h.success ? { value: h.data } : { issues: h.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), cd = /* @__PURE__ */ W("$ZodString", (t, r) => {
  Et.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? WC(t._zod.bag), t._zod.parse = (i, s) => {
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
  ku.init(t, r), cd.init(t, r);
}), yw = /* @__PURE__ */ W("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = BC), ot.init(t, r);
}), _w = /* @__PURE__ */ W("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = ky(s));
  } else
    r.pattern ?? (r.pattern = ky());
  ot.init(t, r);
}), bw = /* @__PURE__ */ W("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = UC), ot.init(t, r);
}), Sw = /* @__PURE__ */ W("$ZodURL", (t, r) => {
  ot.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: XC.source,
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
}), xw = /* @__PURE__ */ W("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = qC()), ot.init(t, r);
}), Ew = /* @__PURE__ */ W("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = PC), ot.init(t, r);
}), Cw = /* @__PURE__ */ W("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = kC), ot.init(t, r);
}), ww = /* @__PURE__ */ W("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = RC), ot.init(t, r);
}), Aw = /* @__PURE__ */ W("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = jC), ot.init(t, r);
}), Tw = /* @__PURE__ */ W("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = zC), ot.init(t, r);
}), Ow = /* @__PURE__ */ W("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = LC), ot.init(t, r);
}), Nw = /* @__PURE__ */ W("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = JC(r)), ot.init(t, r);
}), Dw = /* @__PURE__ */ W("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = QC), ot.init(t, r);
}), Mw = /* @__PURE__ */ W("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = KC(r)), ot.init(t, r);
}), kw = /* @__PURE__ */ W("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = IC), ot.init(t, r);
}), Rw = /* @__PURE__ */ W("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = ZC), ot.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), jw = /* @__PURE__ */ W("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = FC), ot.init(t, r), t._zod.onattach.push((i) => {
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
}), zw = /* @__PURE__ */ W("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = GC), ot.init(t, r);
}), Lw = /* @__PURE__ */ W("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = VC), ot.init(t, r), t._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [o, u] = s;
      if (!u)
        throw new Error();
      const h = Number(u);
      if (`${h}` !== u)
        throw new Error();
      if (h < 0 || h > 128)
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
function d1(t) {
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
const Pw = /* @__PURE__ */ W("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = YC), ot.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    d1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function Iw(t) {
  if (!l1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return d1(i);
}
const Bw = /* @__PURE__ */ W("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = l1), ot.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    Iw(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Uw = /* @__PURE__ */ W("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = $C), ot.init(t, r);
});
function Hw(t, r = null) {
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
const qw = /* @__PURE__ */ W("$ZodJWT", (t, r) => {
  ot.init(t, r), t._zod.check = (i) => {
    Hw(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), p1 = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  Et.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? tw, t._zod.parse = (i, s) => {
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
}), Zw = /* @__PURE__ */ W("$ZodNumber", (t, r) => {
  iw.init(t, r), p1.init(t, r);
}), Fw = /* @__PURE__ */ W("$ZodUnknown", (t, r) => {
  Et.init(t, r), t._zod.parse = (i) => i;
}), Gw = /* @__PURE__ */ W("$ZodNever", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function Ry(t, r, i) {
  t.issues.length && r.issues.push(...r1(i, t.issues)), r.value[i] = t.value;
}
const Vw = /* @__PURE__ */ W("$ZodArray", (t, r) => {
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
    for (let h = 0; h < o.length; h++) {
      const p = o[h], d = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      d instanceof Promise ? u.push(d.then((g) => Ry(g, i, h))) : Ry(d, i, h);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function wu(t, r, i, s) {
  t.issues.length && r.issues.push(...r1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function m1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = fC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function g1(t, r, i, s, o, u) {
  const h = [], p = o.keySet, d = o.catchall._zod, g = d.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (g === "never") {
      h.push(y);
      continue;
    }
    const b = d.run({ value: r[y], issues: [] }, s);
    b instanceof Promise ? t.push(b.then((_) => wu(_, i, y, r))) : wu(b, i, y, r);
  }
  return h.length && i.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const Yw = /* @__PURE__ */ W("$ZodObject", (t, r) => {
  if (Et.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const p = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const d = { ...p };
        return Object.defineProperty(r, "shape", {
          value: d
        }), d;
      }
    });
  }
  const s = ad(() => m1(r));
  rt(t._zod, "propValues", () => {
    const p = r.shape, d = {};
    for (const g in p) {
      const y = p[g]._zod;
      if (y.values) {
        d[g] ?? (d[g] = /* @__PURE__ */ new Set());
        for (const b of y.values)
          d[g].add(b);
      }
    }
    return d;
  });
  const o = Cu, u = r.catchall;
  let h;
  t._zod.parse = (p, d) => {
    h ?? (h = s.value);
    const g = p.value;
    if (!o(g))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: t
      }), p;
    p.value = {};
    const y = [], b = h.shape;
    for (const _ of h.keys) {
      const f = b[_]._zod.run({ value: g[_], issues: [] }, d);
      f instanceof Promise ? y.push(f.then((S) => wu(S, p, _, g))) : wu(f, p, _, g);
    }
    return u ? g1(y, g, p, d, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), Xw = /* @__PURE__ */ W("$ZodObjectJIT", (t, r) => {
  Yw.init(t, r);
  const i = t._zod.parse, s = ad(() => m1(r)), o = (_) => {
    const v = new gw(["shape", "payload", "ctx"]), f = s.value, S = (D) => {
      const E = My(D);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const D of f.keys)
      x[D] = `key_${O++}`;
    v.write("const newResult = {};");
    for (const D of f.keys) {
      const E = x[D], T = My(D);
      v.write(`const ${E} = ${S(D)};`), v.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        
        if (${E}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${E}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const w = v.compile();
    return (D, E) => w(_, D, E);
  };
  let u;
  const h = Cu, p = !W0.jitless, g = p && uC.value, y = r.catchall;
  let b;
  t._zod.parse = (_, v) => {
    b ?? (b = s.value);
    const f = _.value;
    return h(f) ? p && g && v?.async === !1 && v.jitless !== !0 ? (u || (u = o(r.shape)), _ = u(_, v), y ? g1([], f, _, v, b, t) : _) : i(_, v) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: t
    }), _);
  };
});
function jy(t, r, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const o = t.filter((u) => !ji(u));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: t.map((u) => u.issues.map((h) => La(h, s, za())))
  }), r);
}
const $w = /* @__PURE__ */ W("$ZodUnion", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), rt(t._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), rt(t._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), rt(t._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${o.map((u) => sd(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (o, u) => {
    if (i)
      return s(o, u);
    let h = !1;
    const p = [];
    for (const d of r.options) {
      const g = d._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (g instanceof Promise)
        p.push(g), h = !0;
      else {
        if (g.issues.length === 0)
          return g;
        p.push(g);
      }
    }
    return h ? Promise.all(p).then((d) => jy(d, o, t, u)) : jy(p, o, t, u);
  };
}), Qw = /* @__PURE__ */ W("$ZodIntersection", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), h = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || h instanceof Promise ? Promise.all([u, h]).then(([d, g]) => zy(i, d, g)) : zy(i, u, h);
  };
});
function qh(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (il(t) && il(r)) {
    const i = Object.keys(r), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), o = { ...t, ...r };
    for (const u of s) {
      const h = qh(t[u], r[u]);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...h.mergeErrorPath]
        };
      o[u] = h.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], u = r[s], h = qh(o, u);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...h.mergeErrorPath]
        };
      i.push(h.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function zy(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), ji(t))
    return t;
  const s = qh(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const Kw = /* @__PURE__ */ W("$ZodEnum", (t, r) => {
  Et.init(t, r);
  const i = e1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((o) => cC.has(typeof o)).map((o) => typeof o == "string" ? Nu(o) : o.toString()).join("|")})$`), t._zod.parse = (o, u) => {
    const h = o.value;
    return s.has(h) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: h,
      inst: t
    }), o;
  };
}), Jw = /* @__PURE__ */ W("$ZodTransform", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new J0(t.constructor.name);
    const o = r.transform(i.value, i);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((h) => (i.value = h, i));
    if (o instanceof Promise)
      throw new Pi();
    return i.value = o, i;
  };
});
function Ly(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const Ww = /* @__PURE__ */ W("$ZodOptional", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${sd(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => Ly(u, i.value)) : Ly(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), e3 = /* @__PURE__ */ W("$ZodNullable", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${sd(i.source)}|null)$`) : void 0;
  }), rt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), t3 = /* @__PURE__ */ W("$ZodDefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => Py(u, r)) : Py(o, r);
  };
});
function Py(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const n3 = /* @__PURE__ */ W("$ZodPrefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), r3 = /* @__PURE__ */ W("$ZodNonOptional", (t, r) => {
  Et.init(t, r), rt(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => Iy(u, t)) : Iy(o, t);
  };
});
function Iy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const a3 = /* @__PURE__ */ W("$ZodCatch", (t, r) => {
  Et.init(t, r), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), rt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((h) => La(h, s, za()))
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
}), i3 = /* @__PURE__ */ W("$ZodPipe", (t, r) => {
  Et.init(t, r), rt(t._zod, "values", () => r.in._zod.values), rt(t._zod, "optin", () => r.in._zod.optin), rt(t._zod, "optout", () => r.out._zod.optout), rt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(i, s);
      return u instanceof Promise ? u.then((h) => iu(h, r.in, s)) : iu(u, r.in, s);
    }
    const o = r.in._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => iu(u, r.out, s)) : iu(o, r.out, s);
  };
});
function iu(t, r, i) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, i);
}
const s3 = /* @__PURE__ */ W("$ZodReadonly", (t, r) => {
  Et.init(t, r), rt(t._zod, "propValues", () => r.innerType._zod.propValues), rt(t._zod, "values", () => r.innerType._zod.values), rt(t._zod, "optin", () => r.innerType._zod.optin), rt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(By) : By(o);
  };
});
function By(t) {
  return t.value = Object.freeze(t.value), t;
}
const l3 = /* @__PURE__ */ W("$ZodCustom", (t, r) => {
  rn.init(t, r), Et.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((u) => Uy(u, i, s, t));
    Uy(o, i, s, t);
  };
});
function Uy(t, r, i, s) {
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
class v1 {
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
function o3() {
  return new v1();
}
const Js = /* @__PURE__ */ o3();
function u3(t, r) {
  return new t({
    type: "string",
    ...be(r)
  });
}
function c3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function Hy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function f3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function h3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...be(r)
  });
}
function d3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...be(r)
  });
}
function p3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...be(r)
  });
}
function m3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function g3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function v3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function y3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function _3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function b3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function A3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function D3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...be(r)
  });
}
function M3(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...be(r)
  });
}
function k3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...be(r)
  });
}
function R3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...be(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...be(r)
  });
}
function z3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...be(r)
  });
}
function L3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...be(r)
  });
}
function P3(t) {
  return new t({
    type: "unknown"
  });
}
function I3(t, r) {
  return new t({
    type: "never",
    ...be(r)
  });
}
function qy(t, r) {
  return new f1({
    check: "less_than",
    ...be(r),
    value: t,
    inclusive: !1
  });
}
function yh(t, r) {
  return new f1({
    check: "less_than",
    ...be(r),
    value: t,
    inclusive: !0
  });
}
function Zy(t, r) {
  return new h1({
    check: "greater_than",
    ...be(r),
    value: t,
    inclusive: !1
  });
}
function _h(t, r) {
  return new h1({
    check: "greater_than",
    ...be(r),
    value: t,
    inclusive: !0
  });
}
function Fy(t, r) {
  return new aw({
    check: "multiple_of",
    ...be(r),
    value: t
  });
}
function y1(t, r) {
  return new sw({
    check: "max_length",
    ...be(r),
    maximum: t
  });
}
function Au(t, r) {
  return new lw({
    check: "min_length",
    ...be(r),
    minimum: t
  });
}
function _1(t, r) {
  return new ow({
    check: "length_equals",
    ...be(r),
    length: t
  });
}
function B3(t, r) {
  return new uw({
    check: "string_format",
    format: "regex",
    ...be(r),
    pattern: t
  });
}
function U3(t) {
  return new cw({
    check: "string_format",
    format: "lowercase",
    ...be(t)
  });
}
function H3(t) {
  return new fw({
    check: "string_format",
    format: "uppercase",
    ...be(t)
  });
}
function q3(t, r) {
  return new hw({
    check: "string_format",
    format: "includes",
    ...be(r),
    includes: t
  });
}
function Z3(t, r) {
  return new dw({
    check: "string_format",
    format: "starts_with",
    ...be(r),
    prefix: t
  });
}
function F3(t, r) {
  return new pw({
    check: "string_format",
    format: "ends_with",
    ...be(r),
    suffix: t
  });
}
function cl(t) {
  return new mw({
    check: "overwrite",
    tx: t
  });
}
function G3(t) {
  return cl((r) => r.normalize(t));
}
function V3() {
  return cl((t) => t.trim());
}
function Y3() {
  return cl((t) => t.toLowerCase());
}
function X3() {
  return cl((t) => t.toUpperCase());
}
function $3(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...be(i)
  });
}
function Q3(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...be(i)
  });
}
function K3(t) {
  const r = J3((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(sl(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(sl(o));
    }
  }, t(i.value, i)));
  return r;
}
function J3(t, r) {
  const i = new rn({
    check: "custom",
    ...be(r)
  });
  return i._zod.check = t, i;
}
class Gy {
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
    }, h = this.seen.get(r);
    if (h)
      return h.count++, i.schemaPath.includes(r) && (h.cycle = i.path), h.schema;
    const p = { schema: {}, count: 1, cycle: void 0, path: i.path };
    this.seen.set(r, p);
    const d = r._zod.toJSONSchema?.();
    if (d)
      p.schema = d;
    else {
      const b = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, _ = r._zod.parent;
      if (_)
        p.ref = _, this.process(_, b), this.seen.get(_).isParent = !0;
      else {
        const v = p.schema;
        switch (o.type) {
          case "string": {
            const f = v;
            f.type = "string";
            const { minimum: S, maximum: x, format: O, patterns: w, contentEncoding: D } = r._zod.bag;
            if (typeof S == "number" && (f.minLength = S), typeof x == "number" && (f.maxLength = x), O && (f.format = u[O] ?? O, f.format === "" && delete f.format), D && (f.contentEncoding = D), w && w.size > 0) {
              const E = [...w];
              E.length === 1 ? f.pattern = E[0].source : E.length > 1 && (p.schema.allOf = [
                ...E.map((T) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: T.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const f = v, { minimum: S, maximum: x, format: O, multipleOf: w, exclusiveMaximum: D, exclusiveMinimum: E } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? f.type = "integer" : f.type = "number", typeof E == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.minimum = E, f.exclusiveMinimum = !0) : f.exclusiveMinimum = E), typeof S == "number" && (f.minimum = S, typeof E == "number" && this.target !== "draft-4" && (E >= S ? delete f.minimum : delete f.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.maximum = D, f.exclusiveMaximum = !0) : f.exclusiveMaximum = D), typeof x == "number" && (f.maximum = x, typeof D == "number" && this.target !== "draft-4" && (D <= x ? delete f.maximum : delete f.exclusiveMaximum)), typeof w == "number" && (f.multipleOf = w);
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
            const f = v, { minimum: S, maximum: x } = r._zod.bag;
            typeof S == "number" && (f.minItems = S), typeof x == "number" && (f.maxItems = x), f.type = "array", f.items = this.process(o.element, { ...b, path: [...b.path, "items"] });
            break;
          }
          case "object": {
            const f = v;
            f.type = "object", f.properties = {};
            const S = o.shape;
            for (const w in S)
              f.properties[w] = this.process(S[w], {
                ...b,
                path: [...b.path, "properties", w]
              });
            const x = new Set(Object.keys(S)), O = new Set([...x].filter((w) => {
              const D = o.shape[w]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            O.size > 0 && (f.required = Array.from(O)), o.catchall?._zod.def.type === "never" ? f.additionalProperties = !1 : o.catchall ? o.catchall && (f.additionalProperties = this.process(o.catchall, {
              ...b,
              path: [...b.path, "additionalProperties"]
            })) : this.io === "output" && (f.additionalProperties = !1);
            break;
          }
          case "union": {
            const f = v, S = o.options.map((x, O) => this.process(x, {
              ...b,
              path: [...b.path, "anyOf", O]
            }));
            f.anyOf = S;
            break;
          }
          case "intersection": {
            const f = v, S = this.process(o.left, {
              ...b,
              path: [...b.path, "allOf", 0]
            }), x = this.process(o.right, {
              ...b,
              path: [...b.path, "allOf", 1]
            }), O = (D) => "allOf" in D && Object.keys(D).length === 1, w = [
              ...O(S) ? S.allOf : [S],
              ...O(x) ? x.allOf : [x]
            ];
            f.allOf = w;
            break;
          }
          case "tuple": {
            const f = v;
            f.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = o.items.map((T, M) => this.process(T, {
              ...b,
              path: [...b.path, S, M]
            })), w = o.rest ? this.process(o.rest, {
              ...b,
              path: [...b.path, x, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (f.prefixItems = O, w && (f.items = w)) : this.target === "openapi-3.0" ? (f.items = {
              anyOf: O
            }, w && f.items.anyOf.push(w), f.minItems = O.length, w || (f.maxItems = O.length)) : (f.items = O, w && (f.additionalItems = w));
            const { minimum: D, maximum: E } = r._zod.bag;
            typeof D == "number" && (f.minItems = D), typeof E == "number" && (f.maxItems = E);
            break;
          }
          case "record": {
            const f = v;
            f.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (f.propertyNames = this.process(o.keyType, {
              ...b,
              path: [...b.path, "propertyNames"]
            })), f.additionalProperties = this.process(o.valueType, {
              ...b,
              path: [...b.path, "additionalProperties"]
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
            const f = v, S = e1(o.entries);
            S.every((x) => typeof x == "number") && (f.type = "number"), S.every((x) => typeof x == "string") && (f.type = "string"), f.enum = S;
            break;
          }
          case "literal": {
            const f = v, S = [];
            for (const x of o.values)
              if (x === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof x == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                S.push(Number(x));
              } else
                S.push(x);
            if (S.length !== 0) if (S.length === 1) {
              const x = S[0];
              f.type = x === null ? "null" : typeof x, this.target === "draft-4" || this.target === "openapi-3.0" ? f.enum = [x] : f.const = x;
            } else
              S.every((x) => typeof x == "number") && (f.type = "number"), S.every((x) => typeof x == "string") && (f.type = "string"), S.every((x) => typeof x == "boolean") && (f.type = "string"), S.every((x) => x === null) && (f.type = "null"), f.enum = S;
            break;
          }
          case "file": {
            const f = v, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: x, maximum: O, mime: w } = r._zod.bag;
            x !== void 0 && (S.minLength = x), O !== void 0 && (S.maxLength = O), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(f, S)) : f.anyOf = w.map((D) => ({ ...S, contentMediaType: D })) : Object.assign(f, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const f = this.process(o.innerType, b);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, v.nullable = !0) : v.anyOf = [f, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "success": {
            const f = v;
            f.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, b), p.ref = o.innerType, v.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, b), p.ref = o.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, b), p.ref = o.innerType;
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
            this.process(f, b), p.ref = f;
            break;
          }
          case "readonly": {
            this.process(o.innerType, b), p.ref = o.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "lazy": {
            const f = r._zod.innerType;
            this.process(f, b), p.ref = f;
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
      const b = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const S = s.external.registry.get(y[0])?.id, x = s.external.uri ?? ((w) => w);
        if (S)
          return { ref: x(S) };
        const O = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = O, { defId: O, ref: `${x("__shared")}#/${b}/${O}` };
      }
      if (y[1] === o)
        return { ref: "#" };
      const v = `#/${b}/`, f = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: f, ref: v + f };
    }, h = (y) => {
      if (y[1].schema.$ref)
        return;
      const b = y[1], { ref: _, defId: v } = u(y);
      b.def = { ...b.schema }, v && (b.defId = v);
      const f = b.schema;
      for (const S in f)
        delete f[S];
      f.$ref = _;
    };
    if (s.cycles === "throw")
      for (const y of this.seen.entries()) {
        const b = y[1];
        if (b.cycle)
          throw new Error(`Cycle detected: #/${b.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const y of this.seen.entries()) {
      const b = y[1];
      if (r === y[0]) {
        h(y);
        continue;
      }
      if (s.external) {
        const v = s.external.registry.get(y[0])?.id;
        if (r !== y[0] && v) {
          h(y);
          continue;
        }
      }
      if (this.metadataRegistry.get(y[0])?.id) {
        h(y);
        continue;
      }
      if (b.cycle) {
        h(y);
        continue;
      }
      if (b.count > 1 && s.reused === "ref") {
        h(y);
        continue;
      }
    }
    const p = (y, b) => {
      const _ = this.seen.get(y), v = _.def ?? _.schema, f = { ...v };
      if (_.ref === null)
        return;
      const S = _.ref;
      if (_.ref = null, S) {
        p(S, b);
        const x = this.seen.get(S).schema;
        x.$ref && (b.target === "draft-7" || b.target === "draft-4" || b.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(x)) : (Object.assign(v, x), Object.assign(v, f));
      }
      _.isParent || this.override({
        zodSchema: y,
        jsonSchema: v,
        path: _.path ?? []
      });
    };
    for (const y of [...this.seen.entries()].reverse())
      p(y[0], { target: this.target });
    const d = {};
    if (this.target === "draft-2020-12" ? d.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? d.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? d.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const y = s.external.registry.get(r)?.id;
      if (!y)
        throw new Error("Schema is missing an `id` property");
      d.$id = s.external.uri(y);
    }
    Object.assign(d, o.def);
    const g = s.external?.defs ?? {};
    for (const y of this.seen.entries()) {
      const b = y[1];
      b.def && b.defId && (g[b.defId] = b.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? d.$defs = g : d.definitions = g);
    try {
      return JSON.parse(JSON.stringify(d));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function W3(t, r) {
  if (t instanceof v1) {
    const s = new Gy(r), o = {};
    for (const p of t._idmap.entries()) {
      const [d, g] = p;
      s.process(g);
    }
    const u = {}, h = {
      registry: t,
      uri: r?.uri,
      defs: o
    };
    for (const p of t._idmap.entries()) {
      const [d, g] = p;
      u[d] = s.emit(g, {
        ...r,
        external: h
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
  const i = new Gy(r);
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
const e4 = /* @__PURE__ */ W("ZodISODateTime", (t, r) => {
  Nw.init(t, r), ft.init(t, r);
});
function t4(t) {
  return M3(e4, t);
}
const n4 = /* @__PURE__ */ W("ZodISODate", (t, r) => {
  Dw.init(t, r), ft.init(t, r);
});
function r4(t) {
  return k3(n4, t);
}
const a4 = /* @__PURE__ */ W("ZodISOTime", (t, r) => {
  Mw.init(t, r), ft.init(t, r);
});
function i4(t) {
  return R3(a4, t);
}
const s4 = /* @__PURE__ */ W("ZodISODuration", (t, r) => {
  kw.init(t, r), ft.init(t, r);
});
function l4(t) {
  return j3(s4, t);
}
const o4 = (t, r) => {
  i1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => SC(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => bC(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, Hh, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, Hh, 2);
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
}, Rn = W("ZodError", o4, {
  Parent: Error
}), u4 = /* @__PURE__ */ od(Rn), c4 = /* @__PURE__ */ ud(Rn), f4 = /* @__PURE__ */ Du(Rn), h4 = /* @__PURE__ */ Mu(Rn), d4 = /* @__PURE__ */ CC(Rn), p4 = /* @__PURE__ */ wC(Rn), m4 = /* @__PURE__ */ AC(Rn), g4 = /* @__PURE__ */ TC(Rn), v4 = /* @__PURE__ */ OC(Rn), y4 = /* @__PURE__ */ NC(Rn), _4 = /* @__PURE__ */ DC(Rn), b4 = /* @__PURE__ */ MC(Rn), Tt = /* @__PURE__ */ W("ZodType", (t, r) => (Et.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Ia(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => aa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => u4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => f4(t, i, s), t.parseAsync = async (i, s) => c4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => h4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => d4(t, i, s), t.decode = (i, s) => p4(t, i, s), t.encodeAsync = async (i, s) => m4(t, i, s), t.decodeAsync = async (i, s) => g4(t, i, s), t.safeEncode = (i, s) => v4(t, i, s), t.safeDecode = (i, s) => y4(t, i, s), t.safeEncodeAsync = async (i, s) => _4(t, i, s), t.safeDecodeAsync = async (i, s) => b4(t, i, s), t.refine = (i, s) => t.check(uA(i, s)), t.superRefine = (i) => t.check(cA(i)), t.overwrite = (i) => t.check(cl(i)), t.optional = () => $y(t), t.nullable = () => Qy(t), t.nullish = () => $y(Qy(t)), t.nonoptional = (i) => nA(t, i), t.array = () => Un(t), t.or = (i) => V4([t, i]), t.and = (i) => X4(t, i), t.transform = (i) => Ky(t, Q4(i)), t.default = (i) => W4(t, i), t.prefault = (i) => tA(t, i), t.catch = (i) => aA(t, i), t.pipe = (i) => Ky(t, i), t.readonly = () => lA(t), t.describe = (i) => {
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
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), b1 = /* @__PURE__ */ W("_ZodString", (t, r) => {
  cd.init(t, r), Tt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(B3(...s)), t.includes = (...s) => t.check(q3(...s)), t.startsWith = (...s) => t.check(Z3(...s)), t.endsWith = (...s) => t.check(F3(...s)), t.min = (...s) => t.check(Au(...s)), t.max = (...s) => t.check(y1(...s)), t.length = (...s) => t.check(_1(...s)), t.nonempty = (...s) => t.check(Au(1, ...s)), t.lowercase = (s) => t.check(U3(s)), t.uppercase = (s) => t.check(H3(s)), t.trim = () => t.check(V3()), t.normalize = (...s) => t.check(G3(...s)), t.toLowerCase = () => t.check(Y3()), t.toUpperCase = () => t.check(X3());
}), S4 = /* @__PURE__ */ W("ZodString", (t, r) => {
  cd.init(t, r), b1.init(t, r), t.email = (i) => t.check(c3(x4, i)), t.url = (i) => t.check(m3(E4, i)), t.jwt = (i) => t.check(D3(I4, i)), t.emoji = (i) => t.check(g3(C4, i)), t.guid = (i) => t.check(Hy(Vy, i)), t.uuid = (i) => t.check(f3(su, i)), t.uuidv4 = (i) => t.check(h3(su, i)), t.uuidv6 = (i) => t.check(d3(su, i)), t.uuidv7 = (i) => t.check(p3(su, i)), t.nanoid = (i) => t.check(v3(w4, i)), t.guid = (i) => t.check(Hy(Vy, i)), t.cuid = (i) => t.check(y3(A4, i)), t.cuid2 = (i) => t.check(_3(T4, i)), t.ulid = (i) => t.check(b3(O4, i)), t.base64 = (i) => t.check(T3(z4, i)), t.base64url = (i) => t.check(O3(L4, i)), t.xid = (i) => t.check(S3(N4, i)), t.ksuid = (i) => t.check(x3(D4, i)), t.ipv4 = (i) => t.check(E3(M4, i)), t.ipv6 = (i) => t.check(C3(k4, i)), t.cidrv4 = (i) => t.check(w3(R4, i)), t.cidrv6 = (i) => t.check(A3(j4, i)), t.e164 = (i) => t.check(N3(P4, i)), t.datetime = (i) => t.check(t4(i)), t.date = (i) => t.check(r4(i)), t.time = (i) => t.check(i4(i)), t.duration = (i) => t.check(l4(i));
});
function Mn(t) {
  return u3(S4, t);
}
const ft = /* @__PURE__ */ W("ZodStringFormat", (t, r) => {
  ot.init(t, r), b1.init(t, r);
}), x4 = /* @__PURE__ */ W("ZodEmail", (t, r) => {
  bw.init(t, r), ft.init(t, r);
}), Vy = /* @__PURE__ */ W("ZodGUID", (t, r) => {
  yw.init(t, r), ft.init(t, r);
}), su = /* @__PURE__ */ W("ZodUUID", (t, r) => {
  _w.init(t, r), ft.init(t, r);
}), E4 = /* @__PURE__ */ W("ZodURL", (t, r) => {
  Sw.init(t, r), ft.init(t, r);
}), C4 = /* @__PURE__ */ W("ZodEmoji", (t, r) => {
  xw.init(t, r), ft.init(t, r);
}), w4 = /* @__PURE__ */ W("ZodNanoID", (t, r) => {
  Ew.init(t, r), ft.init(t, r);
}), A4 = /* @__PURE__ */ W("ZodCUID", (t, r) => {
  Cw.init(t, r), ft.init(t, r);
}), T4 = /* @__PURE__ */ W("ZodCUID2", (t, r) => {
  ww.init(t, r), ft.init(t, r);
}), O4 = /* @__PURE__ */ W("ZodULID", (t, r) => {
  Aw.init(t, r), ft.init(t, r);
}), N4 = /* @__PURE__ */ W("ZodXID", (t, r) => {
  Tw.init(t, r), ft.init(t, r);
}), D4 = /* @__PURE__ */ W("ZodKSUID", (t, r) => {
  Ow.init(t, r), ft.init(t, r);
}), M4 = /* @__PURE__ */ W("ZodIPv4", (t, r) => {
  Rw.init(t, r), ft.init(t, r);
}), k4 = /* @__PURE__ */ W("ZodIPv6", (t, r) => {
  jw.init(t, r), ft.init(t, r);
}), R4 = /* @__PURE__ */ W("ZodCIDRv4", (t, r) => {
  zw.init(t, r), ft.init(t, r);
}), j4 = /* @__PURE__ */ W("ZodCIDRv6", (t, r) => {
  Lw.init(t, r), ft.init(t, r);
}), z4 = /* @__PURE__ */ W("ZodBase64", (t, r) => {
  Pw.init(t, r), ft.init(t, r);
}), L4 = /* @__PURE__ */ W("ZodBase64URL", (t, r) => {
  Bw.init(t, r), ft.init(t, r);
}), P4 = /* @__PURE__ */ W("ZodE164", (t, r) => {
  Uw.init(t, r), ft.init(t, r);
}), I4 = /* @__PURE__ */ W("ZodJWT", (t, r) => {
  qw.init(t, r), ft.init(t, r);
}), S1 = /* @__PURE__ */ W("ZodNumber", (t, r) => {
  p1.init(t, r), Tt.init(t, r), t.gt = (s, o) => t.check(Zy(s, o)), t.gte = (s, o) => t.check(_h(s, o)), t.min = (s, o) => t.check(_h(s, o)), t.lt = (s, o) => t.check(qy(s, o)), t.lte = (s, o) => t.check(yh(s, o)), t.max = (s, o) => t.check(yh(s, o)), t.int = (s) => t.check(Yy(s)), t.safe = (s) => t.check(Yy(s)), t.positive = (s) => t.check(Zy(0, s)), t.nonnegative = (s) => t.check(_h(0, s)), t.negative = (s) => t.check(qy(0, s)), t.nonpositive = (s) => t.check(yh(0, s)), t.multipleOf = (s, o) => t.check(Fy(s, o)), t.step = (s, o) => t.check(Fy(s, o)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Tu(t) {
  return z3(S1, t);
}
const B4 = /* @__PURE__ */ W("ZodNumberFormat", (t, r) => {
  Zw.init(t, r), S1.init(t, r);
});
function Yy(t) {
  return L3(B4, t);
}
const U4 = /* @__PURE__ */ W("ZodUnknown", (t, r) => {
  Fw.init(t, r), Tt.init(t, r);
});
function Xy() {
  return P3(U4);
}
const H4 = /* @__PURE__ */ W("ZodNever", (t, r) => {
  Gw.init(t, r), Tt.init(t, r);
});
function q4(t) {
  return I3(H4, t);
}
const Z4 = /* @__PURE__ */ W("ZodArray", (t, r) => {
  Vw.init(t, r), Tt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(Au(i, s)), t.nonempty = (i) => t.check(Au(1, i)), t.max = (i, s) => t.check(y1(i, s)), t.length = (i, s) => t.check(_1(i, s)), t.unwrap = () => t.element;
});
function Un(t, r) {
  return $3(Z4, t, r);
}
const F4 = /* @__PURE__ */ W("ZodObject", (t, r) => {
  Xw.init(t, r), Tt.init(t, r), rt(t, "shape", () => r.shape), t.keyof = () => Fh(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Xy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Xy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: q4() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => mC(t, i), t.safeExtend = (i) => gC(t, i), t.merge = (i) => vC(t, i), t.pick = (i) => dC(t, i), t.omit = (i) => pC(t, i), t.partial = (...i) => yC(x1, t, i[0]), t.required = (...i) => _C(E1, t, i[0]);
});
function ja(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ...be(r)
  };
  return new F4(i);
}
const G4 = /* @__PURE__ */ W("ZodUnion", (t, r) => {
  $w.init(t, r), Tt.init(t, r), t.options = r.options;
});
function V4(t, r) {
  return new G4({
    type: "union",
    options: t,
    ...be(r)
  });
}
const Y4 = /* @__PURE__ */ W("ZodIntersection", (t, r) => {
  Qw.init(t, r), Tt.init(t, r);
});
function X4(t, r) {
  return new Y4({
    type: "intersection",
    left: t,
    right: r
  });
}
const Zh = /* @__PURE__ */ W("ZodEnum", (t, r) => {
  Kw.init(t, r), Tt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  t.extract = (s, o) => {
    const u = {};
    for (const h of s)
      if (i.has(h))
        u[h] = r.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new Zh({
      ...r,
      checks: [],
      ...be(o),
      entries: u
    });
  }, t.exclude = (s, o) => {
    const u = { ...r.entries };
    for (const h of s)
      if (i.has(h))
        delete u[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new Zh({
      ...r,
      checks: [],
      ...be(o),
      entries: u
    });
  };
});
function Fh(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Zh({
    type: "enum",
    entries: i,
    ...be(r)
  });
}
const $4 = /* @__PURE__ */ W("ZodTransform", (t, r) => {
  Jw.init(t, r), Tt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new J0(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(sl(u, i.value, r));
      else {
        const h = u;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = i.value), h.inst ?? (h.inst = t), i.issues.push(sl(h));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((u) => (i.value = u, i)) : (i.value = o, i);
  };
});
function Q4(t) {
  return new $4({
    type: "transform",
    transform: t
  });
}
const x1 = /* @__PURE__ */ W("ZodOptional", (t, r) => {
  Ww.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function $y(t) {
  return new x1({
    type: "optional",
    innerType: t
  });
}
const K4 = /* @__PURE__ */ W("ZodNullable", (t, r) => {
  e3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Qy(t) {
  return new K4({
    type: "nullable",
    innerType: t
  });
}
const J4 = /* @__PURE__ */ W("ZodDefault", (t, r) => {
  t3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function W4(t, r) {
  return new J4({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : n1(r);
    }
  });
}
const eA = /* @__PURE__ */ W("ZodPrefault", (t, r) => {
  n3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function tA(t, r) {
  return new eA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : n1(r);
    }
  });
}
const E1 = /* @__PURE__ */ W("ZodNonOptional", (t, r) => {
  r3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function nA(t, r) {
  return new E1({
    type: "nonoptional",
    innerType: t,
    ...be(r)
  });
}
const rA = /* @__PURE__ */ W("ZodCatch", (t, r) => {
  a3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function aA(t, r) {
  return new rA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const iA = /* @__PURE__ */ W("ZodPipe", (t, r) => {
  i3.init(t, r), Tt.init(t, r), t.in = r.in, t.out = r.out;
});
function Ky(t, r) {
  return new iA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const sA = /* @__PURE__ */ W("ZodReadonly", (t, r) => {
  s3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function lA(t) {
  return new sA({
    type: "readonly",
    innerType: t
  });
}
const oA = /* @__PURE__ */ W("ZodCustom", (t, r) => {
  l3.init(t, r), Tt.init(t, r);
});
function uA(t, r = {}) {
  return Q3(oA, t, r);
}
function cA(t) {
  return K3(t);
}
const Jy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Gh = "placeholder-chatHistory", fA = ja({
  justification: Mn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Mn().describe("The new, full content for the character field.")
}), hA = ja({
  field: Mn(),
  value: Mn()
}), dA = ja({
  index: Tu().int().positive(),
  value: Mn()
});
ja({
  justification: Mn(),
  fields_to_change: Un(hA).optional(),
  draft_fields_to_remove: Un(Mn()).optional(),
  greetings_to_add: Un(Mn()).optional(),
  greetings_to_remove: Un(Tu().int().positive()).optional(),
  greetings_to_change: Un(dA).optional()
});
const pA = (t, r) => {
  const i = ja({
    index: Tu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Mn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Mn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Un(Mn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Un(Tu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Un(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const o = ja({
      field: Fh(t).describe("The unique ID of the field to change (core or draft)."),
      value: Mn().describe("The new content for the field.")
    });
    s.fields_to_change = Un(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Un(Fh(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ja(s);
};
function bh(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Vh(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Vh(s, r + 1)}${i}</item>
` : `${i}<item>${bh(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const o of Object.keys(t)) {
      const u = t[o];
      u !== null && typeof u == "object" ? s += `${i}<${o}>
${Vh(u, r + 1)}${i}</${o}>
` : s += `${i}<${o}>${bh(u)}</${o}>
`;
    }
    return s;
  }
  return `${i}<value>${bh(t)}</value>
`;
}
function mA(t, r) {
  const i = Na(t);
  return r === "xml" ? Vh(i).trim() : JSON.stringify(i, null, 2);
}
function gA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function vA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Na(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = gA(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Na(s);
  switch (vA(t.type)) {
    case "object": {
      const u = {}, h = t.properties || {};
      for (const p of Object.keys(h))
        u[p] = Na(h[p]);
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
      return 0;
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Na({ ...t, type: "object" }) : t.items ? Na({ ...t, type: "array" }) : null;
  }
}
const yA = new uS();
async function Yh(t, r, i, s, o, u) {
  const h = !s.json_schema && !1;
  return new Promise((p, d) => {
    const g = new AbortController(), y = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), yA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: h, signal: y },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (b, _, v) => y.aborted ? d(new DOMException("Request aborted by user", "AbortError")) : v ? d(v) : _ === void 0 && v === void 0 ? d(new DOMException("Request aborted by user", "AbortError")) : (_ || d(new Error("No data received from LLM")), v ? d(v) : p(_))
      }
    );
  });
}
async function _A(t, r, i, s) {
  const o = await Yh(t, r, i, {}, void 0, s);
  if (!o?.content)
    throw new Error("Plain request failed to return content.");
  return o.content;
}
async function bA(t, r, i, s, o, u, h) {
  const p = Lt.getSettings();
  let d, g;
  const y = W3(i);
  if (o === "native") {
    if (d = await Yh(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y }
      },
      void 0,
      h
    ), !d?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof d.content == "string" ? JSON.parse(d.content) : d.content;
  } else {
    const _ = o, v = mA(y, _), f = JSON.stringify(y, null, 2), S = _ === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = p.prompts[S]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${_}" not found.`);
    const O = {
      example_response: v,
      schema: f
    }, D = { role: "system", content: en.compile(x, { noEscape: !0, strict: !0 })(O) };
    if (d = await Yh(
      t,
      [...r, D],
      u,
      {},
      void 0,
      h
    ), !d?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = z0(d.content, _, { schema: y });
  }
  const b = i.safeParse(g);
  if (!b.success) {
    const _ = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", b.error.issues), console.error("Raw content parsed:", g), await De("error", _), new Error(_);
  }
  return b.data;
}
const C1 = ({ originalContent: t, newContent: r }) => {
  const i = te.useMemo(() => {
    const s = Q0(t, r);
    let o = "", u = "";
    return s.forEach((h) => {
      const p = h.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${h.added ? "color: green; background-color: #e6ffed;" : h.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      h.added || (o += g), h.removed || (u += g);
    }), { originalHtml: o, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, SA = ({ before: t, after: r }) => {
  const i = te.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const h = t.fields[u], p = r.fields[u], d = h?.value ?? "", g = p?.value ?? "";
      d !== g && s.push({
        label: p?.label ?? h?.label ?? u,
        before: d,
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
      /* @__PURE__ */ A.jsx(C1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, xA = ({ currentState: t, initialState: r }) => {
  const [i, s] = te.useState(!1), { coreFields: o, alternateGreetings: u } = te.useMemo(() => {
    const p = [], d = [];
    return Qn.forEach((g) => {
      t.fields[g] && p.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, y) => parseInt(g[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, g]) => d.push(g.value)), { coreFields: p, alternateGreetings: d };
  }, [t]), h = te.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const y = r.fields[g], b = t.fields[g], _ = y?.value ?? "", v = b?.value ?? "";
      _ !== v && p.push({
        label: b?.label ?? y?.label ?? g,
        before: _,
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
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: h.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : h.map(({ label: p, before: d, after: g }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: p }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Original" }),
        /* @__PURE__ */ A.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ A.jsx(C1, { originalContent: d, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: p, value: d }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: p }),
        /* @__PURE__ */ A.jsx("div", { className: "state-value", children: d || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, d) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            d + 1
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, d))
      ] })
    ] }) })
  ] });
}, Mi = SillyTavern.getContext(), EA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => r.value), CA = (t, r, i, s) => {
  const o = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return o.fields[s] && (o.fields[s].value = u.response), o;
  }
  if (i === "global") {
    const u = r;
    let h = EA(o), p = !1;
    if (u.fields_to_change?.length)
      for (const d of u.fields_to_change)
        o.fields[d.field] ? o.fields[d.field].value = d.value : o.draftFields[d.field] && (o.draftFields[d.field].value = d.value);
    if (u.draft_fields_to_remove?.length)
      for (const d of u.draft_fields_to_remove)
        o.draftFields[d] && delete o.draftFields[d];
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const d of u.greetings_to_change)
        d.index > 0 && d.index <= h.length && (h[d.index - 1] = d.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const d = new Set(u.greetings_to_remove.map((g) => g - 1));
      h = h.filter((g, y) => !d.has(y));
    }
    u.greetings_to_add?.length && (p = !0, h.push(...u.greetings_to_add)), p && (Object.keys(o.fields).forEach((d) => {
      d.startsWith("alternate_greetings_") && delete o.fields[d];
    }), h.forEach((d, g) => {
      const y = `alternate_greetings_${g + 1}`;
      o.fields[y] = {
        value: d,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${g + 1}`
      };
    }));
  }
  return o;
}, wA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, o] = te.useState(() => structuredClone(t)), u = (b, _, v) => {
    const f = structuredClone(s), S = v ? "draftFields" : "fields";
    f[S][b] && (f[S][b].value = _), o(f);
  }, h = (b, _) => {
    const v = structuredClone(s), f = `alternate_greetings_${b + 1}`;
    v.fields[f] && (v.fields[f].value = _), o(v);
  }, { coreFields: p, alternateGreetings: d, draftFields: g } = te.useMemo(() => {
    const b = [], _ = [], v = [];
    return Qn.forEach((f) => {
      s.fields[f] && b.push({ id: f, label: s.fields[f].label, value: s.fields[f].value });
    }), Object.entries(s.fields).filter(([f]) => f.startsWith("alternate_greetings_")).sort((f, S) => parseInt(f[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, f]) => _.push(f.value)), Object.entries(s.draftFields).forEach(([f, S]) => {
      v.push({ id: f, label: S.label, value: S.value });
    }), { coreFields: b, alternateGreetings: _, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(xe, { onClick: y, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(xe, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: b, label: _, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: _ }),
        /* @__PURE__ */ A.jsx(kn, { value: v, onChange: (f) => u(b, f.target.value, !1), rows: 4 })
      ] }, b)),
      g.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: b, label: _, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: _ }),
          /* @__PURE__ */ A.jsx(kn, { value: v, onChange: (f) => u(b, f.target.value, !0), rows: 4 })
        ] }, b))
      ] }),
      d.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        d.map((b, _) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            _ + 1
          ] }),
          /* @__PURE__ */ A.jsx(kn, { value: b, onChange: (v) => h(_, v.target.value), rows: 4 })
        ] }, _))
      ] })
    ] })
  ] });
}, AA = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [h, p] = te.useState(t.messages), [d, g] = te.useState(""), [y, b] = te.useState(!1), [_, v] = te.useState(null), [f, S] = te.useState(!1), [x, O] = te.useState(!1), [w, D] = te.useState(null), [E, T] = te.useState(""), M = te.useRef(null), k = te.useRef(null);
  te.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [h]);
  const q = te.useCallback(
    (Y, ye, _e) => {
      if (JSON.stringify(_e) === JSON.stringify(ye))
        return Y;
      const at = Lt.getSettings().prompts.existingFieldDefinitions;
      if (!at) return Y;
      const L = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(_e.fields), ...Object.keys(ye.fields)])).forEach((ve) => {
        const Oe = _e.fields[ve]?.value ?? "", qe = ye.fields[ve]?.value ?? "";
        if (Oe !== qe) {
          const Xe = ye.fields[ve];
          Xe && (ve.startsWith("alternate_greetings_") ? L.alternate_greetings[Xe.label] = Xe.value : Qn.includes(ve) && (L.core[Xe.label] = Xe.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(_e.draftFields), ...Object.keys(ye.draftFields)])).forEach((ve) => {
        const Oe = _e.draftFields[ve]?.value ?? "", qe = ye.draftFields[ve]?.value ?? "";
        if (Oe !== qe && ye.draftFields[ve]) {
          const Xe = ye.draftFields[ve];
          L.draft[Xe.label] = Xe.value;
        }
      }), Object.keys(L.core).length === 0 && Object.keys(L.alternate_greetings).length === 0 && Object.keys(L.draft).length === 0)
        return Y;
      const de = { fields: L };
      let Ve = en.compile(at.content, { noEscape: !0 })(de);
      if (Ve = Mi.substituteParams(Ve), Ve.trim()) {
        const ve = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Ve.trim(),
          isStateUpdate: !0
        };
        return [...Y, ve];
      }
      return Y;
    },
    []
  ), G = te.useCallback(
    async (Y, ye, _e, Ge) => {
      const at = Lt.getSettings();
      if (!t.profileId) {
        De("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), _e(), b(!0);
      try {
        const L = [], ee = Mi.extensionSettings.connectionManager?.profiles?.find(
          (ve) => ve.id === t.profileId
        ), re = ee?.api ? Mi.CONNECT_API_MAP[ee.api].selected : void 0;
        if (!re) {
          De("warning", "No API selected for this session.");
          return;
        }
        for (const ve of Y)
          if (ve.id === Gh) {
            if (vn === void 0 && !Sr) continue;
            const Oe = await p0(re, u);
            Oe.warnings?.length && Oe.warnings.forEach((qe) => De("warning", qe)), L.push(...Oe.result);
          } else
            L.push(ve);
        const de = Y.slice(0, Y.length - (ye ? 0 : 1)).reverse().find((ve) => ve.stateSnapshot)?.stateSnapshot ?? o, Ve = at.prompts.existingFieldDefinitions;
        if (Ve) {
          const ve = {
            fields: {
              core: Object.fromEntries(
                Object.entries(de.fields).filter(([qe]) => !qe.startsWith("alternate_greetings_")).map(([, qe]) => [qe.label, qe.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(de.fields).filter(([qe]) => qe.startsWith("alternate_greetings_")).map(([, qe]) => [qe.label, qe.value])
              ),
              draft: Object.fromEntries(Object.entries(de.draftFields).map(([, qe]) => [qe.label, qe.value]))
            }
          };
          let Oe = en.compile(Ve.content, { noEscape: !0 })(ve);
          if (Oe = Mi.substituteParams(Oe), Oe.trim()) {
            const qe = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: Oe.trim()
            }, Xe = L.pop();
            L.push(qe), Xe && L.push(Xe);
          }
        }
        if (t.isReadonly) {
          L.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const ve = await _A(
            t.profileId,
            L,
            at.maxResponseToken,
            k.current.signal
          ), Oe = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: ve
          }, qe = [...Y, Oe];
          p(qe), s({ ...t, messages: qe });
        } else {
          const ve = t.type === "field" ? fA : (() => {
            const ke = [...Object.keys(de.fields), ...Object.keys(de.draftFields)], Ze = Object.keys(de.draftFields);
            return pA(ke, Ze);
          })(), qe = await bA(
            t.profileId,
            L,
            ve,
            t.type === "field" ? Jy.FIELD : Jy.GLOBAL,
            t.promptEngineeringMode,
            at.maxResponseToken,
            k.current.signal
          ), Xe = CA(de, qe, t.type, t.targetFieldId), pe = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: qe.justification,
            stateSnapshot: Xe
          };
          let ue = [...Y, pe];
          ue = q(ue, Xe, de), p(ue), s({ ...t, messages: ue });
        }
      } catch (L) {
        L.name === "AbortError" ? De("info", "Request was cancelled.") : (console.error("Revise request failed:", L), De("error", `Request failed: ${L.message}`)), Ge();
      } finally {
        b(!1), k.current = null;
      }
    },
    [t, s, o, u, q]
  ), B = te.useCallback(async () => {
    if (!d.trim() || y) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: d.trim() }, ye = h;
    G(
      [...h, Y],
      !1,
      () => {
        p([...h, Y]), g("");
      },
      () => p(ye)
    );
  }, [d, y, h, G]), V = te.useCallback(async () => {
    if (y || h.length === 0) return;
    const Y = h;
    let ye = [...h];
    const _e = h.findLastIndex((Ge) => !Ge.isStateUpdate);
    _e > -1 && h[_e].role === "assistant" && (ye = h.slice(0, _e)), await G(
      ye,
      !0,
      () => p(ye),
      () => p(Y)
    );
  }, [y, h, G]), $ = () => {
    const Y = h.slice().reverse().find((ye) => ye.stateSnapshot)?.stateSnapshot ?? o;
    i(Y), r();
  }, oe = (Y) => {
    const ye = h.findIndex((at) => at.id === Y);
    if (ye === -1 || !h[ye].stateSnapshot) return;
    const _e = h[ye].stateSnapshot;
    let Ge = o;
    for (let at = ye - 1; at >= 0; at--)
      if (h[at].stateSnapshot) {
        Ge = h[at].stateSnapshot;
        break;
      }
    v({ before: Ge, after: _e });
  }, he = () => {
    S(!0);
  }, ge = (Y) => {
    D(Y.id), T(Y.content);
  }, U = () => {
    D(null), T("");
  }, ne = async () => {
    if (!w) return;
    const Y = h.findIndex((ee) => ee.id === w);
    if (Y === -1 || !await Mi.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const _e = h, Ge = h.slice(0, Y), at = { ...h[Y], content: E }, L = [...Ge, at];
    U(), G(
      L,
      !1,
      () => p(L),
      () => p(_e)
    );
  }, ce = async (Y) => {
    const ye = h.findIndex((ee) => ee.id === Y);
    if (ye === -1) return;
    const Ge = !!h[ye].isInitial;
    if (!await Mi.Popup.show.confirm(
      "Delete Message",
      Ge ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let L;
    Ge ? L = h.filter((ee) => ee.isInitial && ee.id !== Y) : L = h.slice(0, ye), p(L), s({ ...t, messages: L }), De("info", "Message history has been updated.");
  }, Re = h.filter((Y) => !Y.isStateUpdate), j = Re.filter((Y) => Y.isInitial), K = Re.filter((Y) => !Y.isInitial), ae = h.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? o, se = () => {
    O(!0);
  }, le = (Y) => {
    const ye = h.slice().reverse().find((at) => at.stateSnapshot)?.stateSnapshot ?? o, _e = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: Y
    };
    let Ge = [...h, _e];
    Ge = q(Ge, Y, ye), p(Ge), s({ ...t, messages: Ge }), O(!1);
  }, ze = () => {
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
          Y0,
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
        /* @__PURE__ */ A.jsx(xe, { onClick: he, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(xe, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(xe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(xe, { onClick: $, title: "Apply Changes and Close", children: [
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
            /* @__PURE__ */ A.jsx(kn, { value: E, onChange: (ye) => T(ye.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(xe, { onClick: ne, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(xe, { onClick: U, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) }),
            !y && Y.id !== Gh && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsxs(
                xe,
                {
                  className: "message-action-button",
                  onClick: () => ge(Y),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ A.jsxs(
                xe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ce(Y.id),
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
          /* @__PURE__ */ A.jsx(kn, { value: E, onChange: (ye) => T(ye.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(xe, { onClick: ne, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(xe, { onClick: U, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${Y.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            Y.role === "user" && !Y.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              xe,
              {
                className: "message-action-button",
                onClick: () => ge(Y),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            Y.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              xe,
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
              xe,
              {
                className: "message-action-button danger_button",
                onClick: () => ce(Y.id),
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
      K.length > 0 && !y && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(xe, { onClick: V, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(xe, { onClick: ze, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        kn,
        {
          value: d,
          onChange: (Y) => g(Y.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!w,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), B());
          }
        }
      ),
      /* @__PURE__ */ A.jsxs(xe, { onClick: B, disabled: y || !d.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    _ && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(SA, { before: _.before, after: _.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    f && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(xA, { currentState: ae, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    x && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          wA,
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
async function TA(t, r, i, s, o) {
  const u = Lt.getSettings(), h = u.mainContextTemplatePresets[i];
  if (!h)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], g = {
    ...{
      user: $n.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: $n.powerUserSettings.persona_description
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
      const S = $n.characters[parseInt(f)];
      S && v.push(S);
    }), g.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      o.selectedWorldNames.map(async (f) => {
        const S = await $n.loadWorldInfo(f);
        S && (v[f] = Object.values(S.entries).filter((x) => !x.disable));
      })
    ), g.lorebooks = v;
  }
  for (const v of h.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || vn === void 0 && !Sr && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      p.push({
        id: Gh,
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
    let x = "";
    x = en.compile(S.content, { noEscape: !0 })(g), x = $n.substituteParams(x), x.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: x.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", b = u.prompts.reviseTaskDescription.content, _ = en.compile(b, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: y
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: _,
    isInitial: !0
  }), p;
}
const lu = SillyTavern.getContext(), Wy = "charCreator_reviseSessions", OA = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [h, p] = te.useState([]), [d, g] = te.useState(null), [y, b] = te.useState(!0);
  te.useEffect(() => {
    const D = JSON.parse(localStorage.getItem(Wy) || "[]");
    p(D), b(!1);
  }, []);
  const _ = te.useMemo(() => h.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, E) => new Date(E.createdAt).getTime() - new Date(D.createdAt).getTime()), [h, t]), v = (D) => {
    localStorage.setItem(Wy, JSON.stringify(D)), p(D);
  }, f = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", E = await lu.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (E)
      try {
        const T = Lt.getSettings();
        if (!T.profileId) {
          De("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = {
          id: `rs-${Date.now()}`,
          name: E,
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
        }, k = await TA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          o,
          u
        );
        M.messages = k, g(M);
      } catch (T) {
        console.error("Failed to create session:", T), De("error", `Failed to create session: ${T.message}`);
      }
  }, S = (D) => {
    g(D);
  }, x = async (D) => {
    if (await lu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const T = h.filter((M) => M.id !== D);
      v(T);
    }
  }, O = (D) => {
    const E = h.findIndex((M) => M.id === D.id), T = [...h];
    E !== -1 ? T[E] = D : T.push(D), v(T), g(D);
  };
  if (d) {
    const D = lu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === d.profileId
    ), E = {
      targetCharacterId: vn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Sr,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, T = o.messages;
    switch (T.type) {
      case "none":
        E.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        E.messageIndexesBetween = { start: 0, end: T.first ?? 10 };
        break;
      case "last":
        const M = lu.chat?.length ?? 0, k = T.last ?? 10;
        E.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - k)
        };
        break;
      case "range":
        E.messageIndexesBetween = {
          start: T.range?.start ?? 0,
          end: T.range?.end ?? 10
        };
        break;
    }
    return vn === void 0 && !Sr && (E.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ A.jsx(
      AA,
      {
        session: d,
        onBack: () => g(null),
        onApply: i,
        onSessionUpdate: O,
        initialState: s,
        chatContextOptions: E
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
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : _.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : _.map((D) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => S(D), children: [
        /* @__PURE__ */ A.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ A.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ A.jsx(xe, { className: "danger_button", onClick: () => x(D.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(xe, { onClick: f, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
function NA(t, r) {
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
function DA(t, r = []) {
  const i = new Set(t), s = r.filter((o) => o && !i.has(o));
  return [
    ...t.map((o) => ({ value: o, label: o })),
    ...s.map((o) => ({ value: o, label: `${o} (missing)` }))
  ];
}
const Nn = SillyTavern.getContext(), e0 = "charCreator", Sh = () => ({
  selectedCharacterIndexes: vn ? [String(vn)] : [],
  selectedWorldNames: [],
  fields: Qn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: br[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), MA = {
  name: { label: br.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: br.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: br.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: br.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: br.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: br.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, kA = () => {
  const t = X0(), r = Lt.getSettings(), [i, s] = te.useState(Sh()), [o, u] = te.useState([]), [h, p] = te.useState(!0), [d, g] = te.useState("core"), [y, b] = te.useState([]), [_, v] = te.useState([]), [f, S] = te.useState(null), [x, O] = te.useState(null), [w, D] = te.useState(!1), [E, T] = te.useState(null);
  te.useEffect(() => {
    (async () => {
      p(!0), b(Nn.characters), v(ev);
      const ee = JSON.parse(localStorage.getItem(e0) ?? "{}"), re = Sh();
      if (ee.fields && (re.fields = { ...re.fields, ...ee.fields }), ee.draftFields && (re.draftFields = ee.draftFields), ee.selectedCharacterIndexes && (re.selectedCharacterIndexes = ee.selectedCharacterIndexes), ee.selectedWorldNames && (re.selectedWorldNames = ee.selectedWorldNames), ee.lastLoadedCharacterId) {
        re.lastLoadedCharacterId = ee.lastLoadedCharacterId;
        const de = Nn.characters.find((Ve) => Ve.avatar === ee.lastLoadedCharacterId);
        de && S(de);
      }
      s(re), p(!1);
    })();
  }, []), te.useEffect(() => {
    h || localStorage.setItem(e0, JSON.stringify(i));
  }, [i, h]);
  const M = (L, ee) => {
    Lt.getSettings()[L] = ee, Lt.saveSettings(), t();
  }, k = (L, ee) => {
    Lt.getSettings().contextToSend[L] = ee, Lt.saveSettings(), t();
  }, q = te.useCallback(
    (L, ee, re, de) => {
      s((Ve) => {
        const ve = de ? "draftFields" : "fields", Oe = { ...Ve[ve] };
        return Oe[L] || (Oe[L] = { value: "", prompt: "", label: L }), Oe[L][re] = ee, { ...Ve, [ve]: Oe };
      });
    },
    []
  ), G = te.useMemo(
    () => Object.keys(i.fields).filter((L) => L.startsWith("alternate_greetings_")).sort((L, ee) => parseInt(L.split("_")[2]) - parseInt(ee.split("_")[2])).map((L) => i.fields[L]),
    [i.fields]
  ), B = te.useCallback((L) => {
    s((ee) => {
      const re = { ...ee.fields };
      return Object.keys(re).forEach((de) => {
        de.startsWith("alternate_greetings_") && delete re[de];
      }), L.forEach((de, Ve) => {
        const ve = `alternate_greetings_${Ve + 1}`;
        re[ve] = { ...de, label: `Alternate Greeting ${Ve + 1}` };
      }), { ...ee, fields: re };
    });
  }, []), V = te.useCallback(
    (L, ee) => {
      q(L, "", "value", ee);
    },
    [q]
  ), $ = te.useCallback(
    async (L) => {
      await Nn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[L].label}"?`
      ) && s((re) => {
        const de = { ...re.draftFields };
        return delete de[L], { ...re, draftFields: de };
      });
    },
    [i.draftFields]
  ), oe = te.useCallback(async () => {
    const L = await Nn.Popup.show.input("Enter Draft Field Name", "");
    if (!L?.trim()) return;
    const ee = Ph(L.trim());
    if (!ee) return De("error", "Invalid field name.");
    if (i.draftFields[ee] || Qn.includes(ee))
      return De("warning", "Field name already exists.");
    s((re) => ({
      ...re,
      draftFields: { ...re.draftFields, [ee]: { value: "", prompt: "", label: L } }
    })), g("draft");
  }, [i.draftFields]), he = (L) => {
    T({ type: "field", fieldId: L }), D(!0);
  }, ge = () => {
    T({ type: "global" }), D(!0);
  }, U = (L) => {
    s((ee) => ({
      ...ee,
      fields: { ...ee.fields, ...L.fields },
      draftFields: { ...ee.draftFields, ...L.draftFields }
    })), De("success", "Changes from revise session applied."), D(!1);
  }, ne = te.useCallback(
    async (L, ee) => {
      if (!r.profileId) return De("warning", "Please select a connection profile.");
      u((re) => [...re, L]);
      try {
        const re = Nn.extensionSettings.connectionManager?.profiles?.find(
          (ue) => ue.id === r.profileId
        );
        if (!re) throw new Error("Connection profile not found.");
        const de = {
          presetName: re?.preset,
          contextName: re?.context,
          instructName: re?.instruct,
          targetCharacterId: vn,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Sr
        }, Ve = r.contextToSend.messages;
        switch (Ve.type) {
          case "none":
            de.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            de.messageIndexesBetween = { start: 0, end: Ve.first ?? 10 };
            break;
          case "last":
            const ue = Nn.chat?.length ?? 0, ke = Ve.last ?? 10;
            de.messageIndexesBetween = {
              end: Math.max(0, ue - 1),
              start: Math.max(0, ue - ke)
            };
            break;
          case "range":
            de.messageIndexesBetween = {
              start: Ve.range?.start ?? 0,
              end: Ve.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        vn === void 0 && !Sr && (de.messageIndexesBetween = { start: -1, end: -1 });
        const ve = {};
        await Promise.all(
          ev.filter((ue) => !ve[ue]).map(async (ue) => {
            const ke = await Nn.loadWorldInfo(ue);
            ke && (ve[ue] = Object.values(ke.entries));
          })
        );
        const Oe = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete Oe.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete Oe.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete Oe.lorebookDefinitions, r.contextToSend.existingFields || delete Oe.existingFieldDefinitions, r.contextToSend.persona || delete Oe.personaDescription, delete Oe.worldInfoCharDefinition;
        const qe = await ME({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: de,
          continueFrom: ee,
          session: i,
          allCharacters: y,
          entriesGroupByWorldName: ve,
          promptSettings: Oe,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (ue) => ue.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: L,
          outputFormat: r.outputFormat
        }), Xe = L.startsWith("alternate_greetings_"), pe = !Xe && !Qn.includes(L);
        if (Xe) {
          const ue = parseInt(L.split("_")[2]) - 1, ke = [...G];
          ke[ue] && (ke[ue].value = qe), B(ke);
        } else
          q(L, qe, "value", pe);
      } catch (re) {
        console.error(re), De("error", re.message || String(re));
      } finally {
        u((re) => re.filter((de) => de !== L));
      }
    },
    [i, r, y, G, q, B]
  ), ce = te.useCallback(async () => {
    await Nn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Sh()), S(null));
  }, []), Re = te.useCallback(
    (L) => {
      if (!f) return De("warning", "Please load a character to compare against.");
      let ee, re, de;
      typeof L == "number" ? (ee = G[L]?.value ?? "", re = f.data?.alternate_greetings?.[L] ?? "", de = `Alternate Greeting ${L + 1}`) : (ee = i.fields[L]?.value ?? "", re = f[L] ?? f.data?.[L] ?? "", de = br[L]), O({ original: re, current: ee, fieldName: de });
    },
    [f, i.fields, G]
  ), j = te.useCallback(
    async (L) => {
      const ee = y[parseInt(L)];
      if (!ee || Qn.some((ve) => i.fields[ve].value.trim() !== "") && !await Nn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const de = { ...i.fields };
      Qn.forEach((ve) => {
        de[ve] = { value: ee[ve] ?? ee.data?.[ve] ?? "", prompt: "", label: br[ve] };
      });
      const Ve = (ee.data?.alternate_greetings ?? []).map((ve) => ({ value: ve, prompt: "" }));
      S(ee), s((ve) => ({ ...ve, fields: de, lastLoadedCharacterId: ee.avatar })), B(Ve);
    },
    [y, i.fields, B]
  ), K = () => G.map((L) => L.value).filter((L) => L.trim() !== ""), ae = async () => {
    if (!i.fields.name.value) return De("warning", "Please provide a character name.");
    if (!await Nn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const ee = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: K(),
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
      await vb(ee, !0);
    } catch (re) {
      De("error", `Failed to create character: ${re.message}`);
    }
  }, se = async () => {
    if (!f) return De("warning", "Please load a character to override.");
    if (!await Nn.Popup.show.confirm(
      "Override Character",
      `Override "${f.name}"? This cannot be undone.`
    )) return;
    const ee = {
      ...f,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: K(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await yb(ee, !0), De("success", `Character "${ee.name}" updated!`);
    } catch (re) {
      De("error", `Failed to override character: ${re.message}`);
    }
  }, le = () => {
    const L = JSON.stringify({ draftFields: i.draftFields, version: G0 }, null, 2), ee = new Blob([L], { type: "application/json" }), re = document.createElement("a");
    re.href = URL.createObjectURL(ee), re.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, re.click(), URL.revokeObjectURL(re.href);
  }, ze = () => {
    const L = document.createElement("input");
    L.type = "file", L.accept = ".json", L.onchange = async () => {
      const ee = L.files?.[0];
      if (ee)
        try {
          const re = await ee.text(), de = JSON.parse(re);
          if (!de.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Nn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((ve) => ({ ...ve, draftFields: de.draftFields })), De("success", "Draft fields imported."));
        } catch (re) {
          De("error", `Import failed: ${re.message}`);
        }
    }, L.click();
  }, Y = te.useMemo(
    () => y.map((L, ee) => ({ value: String(ee), label: L.name })),
    [y]
  ), ye = te.useMemo(
    () => _.map((L) => ({ value: L, label: L })),
    [_]
  ), _e = te.useMemo(
    () => DA(_, i.selectedWorldNames),
    [_, i.selectedWorldNames]
  ), Ge = te.useMemo(
    () => Object.keys(r.promptPresets).map((L) => ({ value: L, label: L })),
    [r.promptPresets]
  ), at = te.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((L) => ({ value: L, label: L })),
    [r.mainContextTemplatePresets]
  );
  return h ? /* @__PURE__ */ A.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ A.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ A.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ A.jsx(
            Y0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (L) => M("profileId", L?.id ?? "")
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
                  onChange: (L) => k("stDescription", L.target.checked)
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
                  onChange: (L) => k("persona", L.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (vn !== void 0 || Sr) && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ A.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ A.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (L) => k("messages", {
                    ...r.contextToSend.messages,
                    type: L.target.value
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
                    onChange: (L) => k("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(L.target.value) || 10
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
                    onChange: (L) => k("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(L.target.value) || 10
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
                    onChange: (L) => k("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(L.target.value) || 0
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
                    onChange: (L) => k("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(L.target.value) || 10 }
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
                  onChange: (L) => k("charCard", L.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ A.jsx(
              nu,
              {
                items: Y,
                value: i.selectedCharacterIndexes,
                onChange: (L) => s((ee) => ({ ...ee, selectedCharacterIndexes: L })),
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
                  onChange: (L) => k("worldInfo", L.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ A.jsx(
              nu,
              {
                items: _e,
                value: i.selectedWorldNames,
                onChange: (L) => s((ee) => ({ ...ee, selectedWorldNames: L })),
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
                  onChange: (L) => k("existingFields", L.target.checked)
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
                  onChange: (L) => k("dontSendOtherGreetings", L.target.checked)
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
              xu,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: at,
                value: r.mainContextTemplatePreset,
                onChange: (L) => M("mainContextTemplatePreset", L ?? "default")
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
                onChange: (L) => M("maxContextType", L.target.value),
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
              onChange: (L) => M("maxContextValue", parseInt(L.target.value) || 16384)
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
                onChange: (L) => M("maxResponseToken", parseInt(L.target.value) || 1024)
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
                onChange: (L) => M("outputFormat", L.target.value),
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
            xu,
            {
              label: "Prompt Preset",
              items: Ge,
              value: r.promptPreset,
              onChange: (L) => M("promptPreset", L ?? "default"),
              onItemsChange: (L) => M(
                "promptPresets",
                L.reduce(
                  (ee, re) => ({ ...ee, [re.value]: r.promptPresets[re.value] ?? { content: "" } }),
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
              onChange: (L) => M("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: L.target.value }
              }),
              rows: 4
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ A.jsx(
            xe,
            {
              onClick: ge,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(xe, { onClick: ae, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(xe, { onClick: se, disabled: !f, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            nu,
            {
              items: ye,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (L) => {
              },
              onBeforeSelection: async (L, ee) => {
                if (!i.fields.name.value)
                  return De("warning", "Please enter a name first."), !1;
                const re = ee[0], Ve = en.compile(r.prompts.worldInfoCharDefinition.content)({
                  character: NA(i.fields, G)
                }), ve = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: Ve,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await KS({ entry: ve, selectedWorldName: re, operation: "add" }), De("success", `Entry added to ${re}.`);
                } catch (Oe) {
                  De("error", `Failed to add WI Entry: ${Oe.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(xe, { onClick: ce, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ A.jsx(
            nu,
            {
              items: Y,
              value: f ? [String(y.indexOf(f))] : [],
              onChange: (L) => j(L[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ A.jsx(
            xe,
            {
              onClick: () => g("core"),
              className: `menu_button tab-button ${d === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ A.jsx(
            xe,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${d === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "right-aligned", children: d === "draft" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsxs(xe, { onClick: oe, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ A.jsx(xe, { onClick: le, children: "Export" }),
            /* @__PURE__ */ A.jsx(xe, { onClick: ze, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          d === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            Qn.map((L) => {
              const ee = MA[L];
              return ee ? /* @__PURE__ */ A.jsx(
                wy,
                {
                  fieldId: L,
                  label: ee.label,
                  value: i.fields[L]?.value ?? "",
                  prompt: i.fields[L]?.prompt ?? "",
                  large: ee.large,
                  rows: ee.rows,
                  promptEnabled: ee.promptEnabled,
                  isGenerating: o.includes(L),
                  onValueChange: (re, de) => q(re, de, "value", !1),
                  onPromptChange: (re, de) => q(re, de, "prompt", !1),
                  onGenerate: ne,
                  onContinue: (re) => ne(re, i.fields[re].value),
                  onClear: (re) => V(re, !1),
                  onCompare: Re,
                  onOpenReviseSessions: he
                },
                L
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              ZE,
              {
                greetings: G,
                onGreetingsChange: B,
                isGenerating: o.some((L) => L.startsWith("alternate_greetings_")),
                onGenerate: (L) => ne(`alternate_greetings_${L + 1}`),
                onContinue: (L) => ne(`alternate_greetings_${L + 1}`, G[L].value),
                onCompare: Re
              }
            )
          ] }),
          d === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([L, ee]) => /* @__PURE__ */ A.jsx(
              wy,
              {
                fieldId: L,
                label: ee.label,
                value: ee.value,
                prompt: ee.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(L),
                onValueChange: (re, de) => q(re, de, "value", !0),
                onPromptChange: (re, de) => q(re, de, "prompt", !0),
                onGenerate: ne,
                onContinue: (re) => ne(re, i.draftFields[re].value),
                onClear: (re) => V(re, !0),
                onDelete: $
              },
              L
            ))
          ] })
        ] })
      ] })
    ] }),
    x && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          lC,
          {
            originalContent: x.original,
            newContent: x.current,
            fieldName: x.fieldName
          }
        ),
        onComplete: () => O(null),
        options: { wide: !0 }
      }
    ),
    w && E && /* @__PURE__ */ A.jsx(
      Li,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          OA,
          {
            target: E,
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
}, RA = () => {
  const [t, r] = te.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ A.jsx(
    Li,
    {
      content: /* @__PURE__ */ A.jsx(kA, {}),
      type: gn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, w1 = SillyTavern.getContext();
async function jA() {
  const t = await w1.renderExtensionTemplateAsync(
    `third-party/${Ma}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), pv.createRoot(r).render(
    /* @__PURE__ */ A.jsx(du.StrictMode, { children: /* @__PURE__ */ A.jsx(HE, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), pv.createRoot(u).render(
    /* @__PURE__ */ A.jsx(du.StrictMode, { children: /* @__PURE__ */ A.jsx(RA, {}) })
  ), o.forEach((p) => {
    if (!p) return;
    const d = document.createElement("div");
    d.innerHTML = s.trim();
    const g = d.firstChild;
    g && (p.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function zA() {
  return !!w1.ConnectionManagerRequestService;
}
zA() ? jE().then(() => {
  jA();
}) : De("error", `[${Ma}] Make sure ST is updated.`);
export {
  jA as init
};
