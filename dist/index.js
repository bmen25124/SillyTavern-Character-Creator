import { renderStoryString as z_, persona_description_positions as Xg } from "../../../../power-user.js";
import { parseMesExamples as L_, baseChatReplace as P_, chat_metadata as js, getMaxContextSize as I_, name1 as br, name2 as Qr, this_chid as vn, extension_prompt_types as Ca, depth_prompt_role_default as B_, depth_prompt_depth_default as U_ } from "../../../../../script.js";
import { createWorldInfoEntry as H_, world_info_include_names as q_, wi_anchor_position as Z_, world_names as $g } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as F_, formatInstructModeSystemPrompt as G_ } from "../../../../instruct-mode.js";
import { appendFileContent as V_ } from "../../../../chats.js";
import { setOpenAIMessages as Y_, setOpenAIMessageExamples as X_, formatWorldInfo as $_, getPromptPosition as Q_, getPromptRole as K_, prepareOpenAIMessages as J_ } from "../../../../openai.js";
import { metadata_keys as zs } from "../../../../authors-note.js";
import { getGroupDepthPrompts as W_, selected_group as Er } from "../../../../group-chats.js";
import { getRegexedString as eb, regex_placement as Qg } from "../../../regex/engine.js";
import { removeFromArray as Kg, runAfterAnimation as tb } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ci, fixToastrForDialogs as Zf } from "../../../../popup.js";
import Jg from "../../../../../lib/dialog-polyfill.esm.js";
function Ky(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ff = { exports: {} }, Ls = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wg;
function nb() {
  if (Wg) return Ls;
  Wg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, o, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      u = {};
      for (var p in o)
        p !== "key" && (u[p] = o[p]);
    } else u = o;
    return o = u.ref, {
      $$typeof: n,
      type: s,
      key: f,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return Ls.Fragment = r, Ls.jsx = i, Ls.jsxs = i, Ls;
}
var ev;
function rb() {
  return ev || (ev = 1, Ff.exports = nb()), Ff.exports;
}
var A = rb(), Gf = { exports: {} }, Me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv;
function ab() {
  if (tv) return Me;
  tv = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
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
  }, d = Object.assign, S = {};
  function E(j, J, ae) {
    this.props = j, this.context = J, this.refs = S, this.updater = ae || v;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(j, J) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, J, "setState");
  }, E.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function O() {
  }
  O.prototype = E.prototype;
  function w(j, J, ae) {
    this.props = j, this.context = J, this.refs = S, this.updater = ae || v;
  }
  var D = w.prototype = new O();
  D.constructor = w, d(D, E.prototype), D.isPureReactComponent = !0;
  var x = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(j, J, ae, se, le, ze) {
    return ae = ze.ref, {
      $$typeof: n,
      type: j,
      key: J,
      ref: ae !== void 0 ? ae : null,
      props: ze
    };
  }
  function q(j, J) {
    return k(
      j.type,
      J,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function G(j) {
    return typeof j == "object" && j !== null && j.$$typeof === n;
  }
  function B(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ae) {
      return J[ae];
    });
  }
  var V = /\/+/g;
  function $(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? B("" + j.key) : J.toString(36);
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
          function(J) {
            j.status === "pending" && (j.status = "fulfilled", j.value = J);
          },
          function(J) {
            j.status === "pending" && (j.status = "rejected", j.reason = J);
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
  function me(j, J, ae, se, le) {
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
            case n:
            case r:
              Y = !0;
              break;
            case y:
              return Y = j._init, me(
                Y(j._payload),
                J,
                ae,
                se,
                le
              );
          }
      }
    if (Y)
      return le = le(j), Y = se === "" ? "." + $(j, 0) : se, x(le) ? (ae = "", Y != null && (ae = Y.replace(V, "$&/") + "/"), me(le, J, ae, "", function(Ve) {
        return Ve;
      })) : le != null && (G(le) && (le = q(
        le,
        ae + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(
          V,
          "$&/"
        ) + "/") + Y
      )), J.push(le)), 1;
    Y = 0;
    var ge = se === "" ? "." : se + ":";
    if (x(j))
      for (var ve = 0; ve < j.length; ve++)
        se = j[ve], ze = ge + $(se, ve), Y += me(
          se,
          J,
          ae,
          ze,
          le
        );
    else if (ve = _(j), typeof ve == "function")
      for (j = ve.call(j), ve = 0; !(se = j.next()).done; )
        se = se.value, ze = ge + $(se, ve++), Y += me(
          se,
          J,
          ae,
          ze,
          le
        );
    else if (ze === "object") {
      if (typeof j.then == "function")
        return me(
          he(j),
          J,
          ae,
          se,
          le
        );
      throw J = String(j), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Y;
  }
  function U(j, J, ae) {
    if (j == null) return j;
    var se = [], le = 0;
    return me(j, se, "", "", function(ze) {
      return J.call(ae, ze, le++);
    }), se;
  }
  function re(j) {
    if (j._status === -1) {
      var J = j._result;
      J = J(), J.then(
        function(ae) {
          (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ae);
        },
        function(ae) {
          (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ae);
        }
      ), j._status === -1 && (j._status = 0, j._result = J);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(j) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
        error: j
      });
      if (!window.dispatchEvent(J)) return;
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
    forEach: function(j, J, ae) {
      U(
        j,
        function() {
          J.apply(this, arguments);
        },
        ae
      );
    },
    count: function(j) {
      var J = 0;
      return U(j, function() {
        J++;
      }), J;
    },
    toArray: function(j) {
      return U(j, function(J) {
        return J;
      }) || [];
    },
    only: function(j) {
      if (!G(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  }, Me.Component = E, Me.Fragment = i, Me.Profiler = o, Me.PureComponent = w, Me.StrictMode = s, Me.Suspense = h, Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return T.H.useMemoCache(j);
    }
  }, Me.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, Me.cloneElement = function(j, J, ae) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var se = d({}, j.props), le = j.key, ze = void 0;
    if (J != null)
      for (Y in J.ref !== void 0 && (ze = void 0), J.key !== void 0 && (le = "" + J.key), J)
        !M.call(J, Y) || Y === "key" || Y === "__self" || Y === "__source" || Y === "ref" && J.ref === void 0 || (se[Y] = J[Y]);
    var Y = arguments.length - 2;
    if (Y === 1) se.children = ae;
    else if (1 < Y) {
      for (var ge = Array(Y), ve = 0; ve < Y; ve++)
        ge[ve] = arguments[ve + 2];
      se.children = ge;
    }
    return k(j.type, le, void 0, void 0, ze, se);
  }, Me.createContext = function(j) {
    return j = {
      $$typeof: f,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: u,
      _context: j
    }, j;
  }, Me.createElement = function(j, J, ae) {
    var se, le = {}, ze = null;
    if (J != null)
      for (se in J.key !== void 0 && (ze = "" + J.key), J)
        M.call(J, se) && se !== "key" && se !== "__self" && se !== "__source" && (le[se] = J[se]);
    var Y = arguments.length - 2;
    if (Y === 1) le.children = ae;
    else if (1 < Y) {
      for (var ge = Array(Y), ve = 0; ve < Y; ve++)
        ge[ve] = arguments[ve + 2];
      le.children = ge;
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
      _init: re
    };
  }, Me.memo = function(j, J) {
    return {
      $$typeof: g,
      type: j,
      compare: J === void 0 ? null : J
    };
  }, Me.startTransition = function(j) {
    var J = T.T, ae = {};
    T.T = ae;
    try {
      var se = j(), le = T.S;
      le !== null && le(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Re, ce);
    } catch (ze) {
      ce(ze);
    } finally {
      T.T = J;
    }
  }, Me.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, Me.use = function(j) {
    return T.H.use(j);
  }, Me.useActionState = function(j, J, ae) {
    return T.H.useActionState(j, J, ae);
  }, Me.useCallback = function(j, J) {
    return T.H.useCallback(j, J);
  }, Me.useContext = function(j) {
    return T.H.useContext(j);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(j, J) {
    return T.H.useDeferredValue(j, J);
  }, Me.useEffect = function(j, J, ae) {
    var se = T.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, J);
  }, Me.useId = function() {
    return T.H.useId();
  }, Me.useImperativeHandle = function(j, J, ae) {
    return T.H.useImperativeHandle(j, J, ae);
  }, Me.useInsertionEffect = function(j, J) {
    return T.H.useInsertionEffect(j, J);
  }, Me.useLayoutEffect = function(j, J) {
    return T.H.useLayoutEffect(j, J);
  }, Me.useMemo = function(j, J) {
    return T.H.useMemo(j, J);
  }, Me.useOptimistic = function(j, J) {
    return T.H.useOptimistic(j, J);
  }, Me.useReducer = function(j, J, ae) {
    return T.H.useReducer(j, J, ae);
  }, Me.useRef = function(j) {
    return T.H.useRef(j);
  }, Me.useState = function(j) {
    return T.H.useState(j);
  }, Me.useSyncExternalStore = function(j, J, ae) {
    return T.H.useSyncExternalStore(
      j,
      J,
      ae
    );
  }, Me.useTransition = function() {
    return T.H.useTransition();
  }, Me.version = "19.1.1", Me;
}
var nv;
function Zd() {
  return nv || (nv = 1, Gf.exports = ab()), Gf.exports;
}
var te = Zd();
const fu = /* @__PURE__ */ Ky(te);
var Vf = { exports: {} }, Ps = {}, Yf = { exports: {} }, Xf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rv;
function ib() {
  return rv || (rv = 1, (function(n) {
    function r(U, re) {
      var ce = U.length;
      U.push(re);
      e: for (; 0 < ce; ) {
        var Re = ce - 1 >>> 1, j = U[Re];
        if (0 < o(j, re))
          U[Re] = re, U[ce] = j, ce = Re;
        else break e;
      }
    }
    function i(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var re = U[0], ce = U.pop();
      if (ce !== re) {
        U[0] = ce;
        e: for (var Re = 0, j = U.length, J = j >>> 1; Re < J; ) {
          var ae = 2 * (Re + 1) - 1, se = U[ae], le = ae + 1, ze = U[le];
          if (0 > o(se, ce))
            le < j && 0 > o(ze, se) ? (U[Re] = ze, U[le] = ce, Re = le) : (U[Re] = se, U[ae] = ce, Re = ae);
          else if (le < j && 0 > o(ze, ce))
            U[Re] = ze, U[le] = ce, Re = le;
          else break e;
        }
      }
      return re;
    }
    function o(U, re) {
      var ce = U.sortIndex - re.sortIndex;
      return ce !== 0 ? ce : U.id - re.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, p = f.now();
      n.unstable_now = function() {
        return f.now() - p;
      };
    }
    var h = [], g = [], y = 1, b = null, _ = 3, v = !1, d = !1, S = !1, E = !1, O = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function x(U) {
      for (var re = i(g); re !== null; ) {
        if (re.callback === null) s(g);
        else if (re.startTime <= U)
          s(g), re.sortIndex = re.expirationTime, r(h, re);
        else break;
        re = i(g);
      }
    }
    function T(U) {
      if (S = !1, x(U), !d)
        if (i(h) !== null)
          d = !0, M || (M = !0, $());
        else {
          var re = i(g);
          re !== null && me(T, re.startTime - U);
        }
    }
    var M = !1, k = -1, q = 5, G = -1;
    function B() {
      return E ? !0 : !(n.unstable_now() - G < q);
    }
    function V() {
      if (E = !1, M) {
        var U = n.unstable_now();
        G = U;
        var re = !0;
        try {
          e: {
            d = !1, S && (S = !1, w(k), k = -1), v = !0;
            var ce = _;
            try {
              t: {
                for (x(U), b = i(h); b !== null && !(b.expirationTime > U && B()); ) {
                  var Re = b.callback;
                  if (typeof Re == "function") {
                    b.callback = null, _ = b.priorityLevel;
                    var j = Re(
                      b.expirationTime <= U
                    );
                    if (U = n.unstable_now(), typeof j == "function") {
                      b.callback = j, x(U), re = !0;
                      break t;
                    }
                    b === i(h) && s(h), x(U);
                  } else s(h);
                  b = i(h);
                }
                if (b !== null) re = !0;
                else {
                  var J = i(g);
                  J !== null && me(
                    T,
                    J.startTime - U
                  ), re = !1;
                }
              }
              break e;
            } finally {
              b = null, _ = ce, v = !1;
            }
            re = void 0;
          }
        } finally {
          re ? $() : M = !1;
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
    function me(U, re) {
      k = O(function() {
        U(n.unstable_now());
      }, re);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, n.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < U ? Math.floor(1e3 / U) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, n.unstable_next = function(U) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = _;
      }
      var ce = _;
      _ = re;
      try {
        return U();
      } finally {
        _ = ce;
      }
    }, n.unstable_requestPaint = function() {
      E = !0;
    }, n.unstable_runWithPriority = function(U, re) {
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
        return re();
      } finally {
        _ = ce;
      }
    }, n.unstable_scheduleCallback = function(U, re, ce) {
      var Re = n.unstable_now();
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
        callback: re,
        priorityLevel: U,
        startTime: ce,
        expirationTime: j,
        sortIndex: -1
      }, ce > Re ? (U.sortIndex = ce, r(g, U), i(h) === null && U === i(g) && (S ? (w(k), k = -1) : S = !0, me(T, ce - Re))) : (U.sortIndex = j, r(h, U), d || v || (d = !0, M || (M = !0, $()))), U;
    }, n.unstable_shouldYield = B, n.unstable_wrapCallback = function(U) {
      var re = _;
      return function() {
        var ce = _;
        _ = re;
        try {
          return U.apply(this, arguments);
        } finally {
          _ = ce;
        }
      };
    };
  })(Xf)), Xf;
}
var av;
function sb() {
  return av || (av = 1, Yf.exports = ib()), Yf.exports;
}
var $f = { exports: {} }, It = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iv;
function lb() {
  if (iv) return It;
  iv = 1;
  var n = Zd();
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
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: h,
      containerInfo: g,
      implementation: y
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, g) {
    if (h === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, It.createPortal = function(h, g) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(h, g, null, y);
  }, It.flushSync = function(h) {
    var g = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = g, s.p = y, s.d.f();
    }
  }, It.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(h, g));
  }, It.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, It.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var y = g.as, b = p(y, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, v = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      y === "style" ? s.d.S(
        h,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: b,
          integrity: _,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(h, {
        crossOrigin: b,
        integrity: _,
        fetchPriority: v,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, It.preinitModule = function(h, g) {
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
  }, It.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var y = g.as, b = p(y, g.crossOrigin);
      s.d.L(h, y, {
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
  }, It.preloadModule = function(h, g) {
    if (typeof h == "string")
      if (g) {
        var y = p(g.as, g.crossOrigin);
        s.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(h);
  }, It.requestFormReset = function(h) {
    s.d.r(h);
  }, It.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, It.useFormState = function(h, g, y) {
    return f.H.useFormState(h, g, y);
  }, It.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, It.version = "19.1.1", It;
}
var sv;
function Jy() {
  if (sv) return $f.exports;
  sv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), $f.exports = lb(), $f.exports;
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
var lv;
function ob() {
  if (lv) return Ps;
  lv = 1;
  var n = sb(), r = Zd(), i = Jy();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = u(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
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
          if (m === l) return p(c), t;
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
    return a.stateNode.current === a ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = g(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, b = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), D = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), V = Symbol.iterator;
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
      case d:
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
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
        case q:
          t = e._payload, e = e._init;
          try {
            return he(e(t));
          } catch {
          }
      }
    return null;
  }
  var me = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Re = [], j = -1;
  function J(e) {
    return { current: e };
  }
  function ae(e) {
    0 > j || (e.current = Re[j], Re[j] = null, j--);
  }
  function se(e, t) {
    j++, Re[j] = e.current, e.current = t;
  }
  var le = J(null), ze = J(null), Y = J(null), ge = J(null);
  function ve(e, t) {
    switch (se(Y, t), se(ze, e), se(le, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Eg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Eg(t), e = xg(t, e);
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
    ae(le), ae(ze), ae(Y);
  }
  function P(e) {
    e.memoizedState !== null && se(ge, e);
    var t = le.current, a = xg(t, e.type);
    t !== a && (se(ze, e), se(le, a));
  }
  function K(e) {
    ze.current === e && (ae(le), ae(ze)), ge.current === e && (ae(ge), Ns._currentValue = ce);
  }
  var ne = Object.prototype.hasOwnProperty, Se = n.unstable_scheduleCallback, qe = n.unstable_cancelCallback, Pe = n.unstable_shouldYield, Ue = n.unstable_requestPaint, ht = n.unstable_now, rn = n.unstable_getCurrentPriorityLevel, rt = n.unstable_ImmediatePriority, ue = n.unstable_UserBlockingPriority, fe = n.unstable_NormalPriority, ke = n.unstable_LowPriority, Ne = n.unstable_IdlePriority, De = n.log, jn = n.unstable_setDisableYieldValue, tr = null, pt = null;
  function Zn(e) {
    if (typeof De == "function" && jn(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(tr, e);
      } catch {
      }
  }
  var Ht = Math.clz32 ? Math.clz32 : sa, yn = Math.log, ia = Math.LN2;
  function sa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yn(e) / ia | 0) | 0;
  }
  var nr = 256, Fn = 4194304;
  function _n(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
  function qt(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, m = e.suspendedLanes, C = e.pingedLanes;
    e = e.warmLanes;
    var N = l & 134217727;
    return N !== 0 ? (l = N & ~m, l !== 0 ? c = _n(l) : (C &= N, C !== 0 ? c = _n(C) : a || (a = N & ~e, a !== 0 && (c = _n(a))))) : (N = l & ~m, N !== 0 ? c = _n(N) : C !== 0 ? c = _n(C) : a || (a = l & ~e, a !== 0 && (c = _n(a)))), c === 0 ? 0 : t !== 0 && t !== c && (t & m) === 0 && (m = c & -c, a = t & -t, m >= a || m === 32 && (a & 4194048) !== 0) ? t : c;
  }
  function Vt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ul(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function Ia() {
    var e = nr;
    return nr <<= 1, (nr & 4194048) === 0 && (nr = 256), e;
  }
  function sh() {
    var e = Fn;
    return Fn <<= 1, (Fn & 62914560) === 0 && (Fn = 4194304), e;
  }
  function Mu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Bi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function x1(e, t, a, l, c, m) {
    var C = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var N = e.entanglements, R = e.expirationTimes, H = e.hiddenUpdates;
    for (a = C & ~a; 0 < a; ) {
      var X = 31 - Ht(a), W = 1 << X;
      N[X] = 0, R[X] = -1;
      var Z = H[X];
      if (Z !== null)
        for (H[X] = null, X = 0; X < Z.length; X++) {
          var F = Z[X];
          F !== null && (F.lane &= -536870913);
        }
      a &= ~W;
    }
    l !== 0 && lh(e, l, 0), m !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(C & ~t));
  }
  function lh(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Ht(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function oh(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - Ht(a), c = 1 << l;
      c & t | e[l] & t && (e[l] |= t), a &= ~c;
    }
  }
  function ku(e) {
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
  function Ru(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function uh() {
    var e = re.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : qg(e.type));
  }
  function C1(e, t) {
    var a = re.p;
    try {
      return re.p = e, t();
    } finally {
      re.p = a;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + Tr, Yt = "__reactProps$" + Tr, Ba = "__reactContainer$" + Tr, ju = "__reactEvents$" + Tr, w1 = "__reactListeners$" + Tr, A1 = "__reactHandles$" + Tr, ch = "__reactResources$" + Tr, Ui = "__reactMarker$" + Tr;
  function zu(e) {
    delete e[Lt], delete e[Yt], delete e[ju], delete e[w1], delete e[A1];
  }
  function Ua(e) {
    var t = e[Lt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ba] || a[Lt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Tg(e); e !== null; ) {
            if (a = e[Lt]) return a;
            e = Tg(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ha(e) {
    if (e = e[Lt] || e[Ba]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Hi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function qa(e) {
    var t = e[ch];
    return t || (t = e[ch] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Tt(e) {
    e[Ui] = !0;
  }
  var fh = /* @__PURE__ */ new Set(), dh = {};
  function la(e, t) {
    Za(e, t), Za(e + "Capture", t);
  }
  function Za(e, t) {
    for (dh[e] = t, e = 0; e < t.length; e++)
      fh.add(t[e]);
  }
  var T1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), hh = {}, ph = {};
  function O1(e) {
    return ne.call(ph, e) ? !0 : ne.call(hh, e) ? !1 : T1.test(e) ? ph[e] = !0 : (hh[e] = !0, !1);
  }
  function cl(e, t, a) {
    if (O1(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function fl(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function rr(e, t, a, l) {
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
      e.setAttributeNS(t, a, "" + l);
    }
  }
  var Lu, mh;
  function Fa(e) {
    if (Lu === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Lu = t && t[1] || "", mh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Lu + e + mh;
  }
  var Pu = !1;
  function Iu(e, t) {
    if (!e || Pu) return "";
    Pu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var W = function() {
                throw Error();
              };
              if (Object.defineProperty(W.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(W, []);
                } catch (F) {
                  var Z = F;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (F) {
                  Z = F;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                Z = F;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
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
      Pu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Fa(a) : "";
  }
  function N1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Fa(e.type);
      case 16:
        return Fa("Lazy");
      case 13:
        return Fa("Suspense");
      case 19:
        return Fa("SuspenseList");
      case 0:
      case 15:
        return Iu(e.type, !1);
      case 11:
        return Iu(e.type.render, !1);
      case 1:
        return Iu(e.type, !0);
      case 31:
        return Fa("Activity");
      default:
        return "";
    }
  }
  function gh(e) {
    try {
      var t = "";
      do
        t += N1(e), e = e.return;
      while (e);
      return t;
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
  function vh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function D1(e) {
    var t = vh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, m = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(C) {
          l = "" + C, m.call(this, C);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(C) {
          l = "" + C;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function dl(e) {
    e._valueTracker || (e._valueTracker = D1(e));
  }
  function yh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = vh(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var M1 = /[\n"\\]/g;
  function Sn(e) {
    return e.replace(
      M1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bu(e, t, a, l, c, m, C, N) {
    e.name = "", C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? e.type = C : e.removeAttribute("type"), t != null ? C === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + bn(t)) : e.value !== "" + bn(t) && (e.value = "" + bn(t)) : C !== "submit" && C !== "reset" || e.removeAttribute("value"), t != null ? Uu(e, C, bn(t)) : a != null ? Uu(e, C, bn(a)) : l != null && e.removeAttribute("value"), c == null && m != null && (e.defaultChecked = !!m), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.name = "" + bn(N) : e.removeAttribute("name");
  }
  function _h(e, t, a, l, c, m, C, N) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.type = m), t != null || a != null) {
      if (!(m !== "submit" && m !== "reset" || t != null))
        return;
      a = a != null ? "" + bn(a) : "", t = t != null ? "" + bn(t) : a, N || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = N ? e.checked : !!l, e.defaultChecked = !!l, C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" && (e.name = C);
  }
  function Uu(e, t, a) {
    t === "number" && hl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ga(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < a.length; c++)
        t["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = t.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + bn(a), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function bh(e, t, a) {
    if (t != null && (t = "" + bn(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + bn(a) : "";
  }
  function Sh(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (me(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = bn(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
  }
  function Va(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var k1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Eh(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || k1.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function xh(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in t)
        l = t[c], t.hasOwnProperty(c) && a[c] !== l && Eh(e, c, l);
    } else
      for (var m in t)
        t.hasOwnProperty(m) && Eh(e, m, t[m]);
  }
  function Hu(e) {
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
  var R1 = /* @__PURE__ */ new Map([
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
  ]), j1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pl(e) {
    return j1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var qu = null;
  function Zu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ya = null, Xa = null;
  function Ch(e) {
    var t = Ha(e);
    if (t && (e = t.stateNode)) {
      var a = e[Yt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Bu(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Sn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var c = l[Yt] || null;
                if (!c) throw Error(s(90));
                Bu(
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
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && yh(l);
          }
          break e;
        case "textarea":
          bh(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ga(e, !!a.multiple, t, !1);
      }
    }
  }
  var Fu = !1;
  function wh(e, t, a) {
    if (Fu) return e(t, a);
    Fu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Fu = !1, (Ya !== null || Xa !== null) && (Wl(), Ya && (t = Ya, e = Xa, Xa = Ya = null, Ch(t), e)))
        for (t = 0; t < e.length; t++) Ch(e[t]);
    }
  }
  function qi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Yt] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
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
        s(231, t, typeof a)
      );
    return a;
  }
  var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gu = !1;
  if (ar)
    try {
      var Zi = {};
      Object.defineProperty(Zi, "passive", {
        get: function() {
          Gu = !0;
        }
      }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
    } catch {
      Gu = !1;
    }
  var Or = null, Vu = null, ml = null;
  function Ah() {
    if (ml) return ml;
    var e, t = Vu, a = t.length, l, c = "value" in Or ? Or.value : Or.textContent, m = c.length;
    for (e = 0; e < a && t[e] === c[e]; e++) ;
    var C = a - e;
    for (l = 1; l <= C && t[a - l] === c[m - l]; l++) ;
    return ml = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function gl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vl() {
    return !0;
  }
  function Th() {
    return !1;
  }
  function Xt(e) {
    function t(a, l, c, m, C) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in e)
        e.hasOwnProperty(N) && (a = e[N], this[N] = a ? a(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? vl : Th, this.isPropagationStopped = Th, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vl);
      },
      persist: function() {
      },
      isPersistent: vl
    }), t;
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
  }, yl = Xt(oa), Fi = y({}, oa, { view: 0, detail: 0 }), z1 = Xt(Fi), Yu, Xu, Gi, _l = y({}, Fi, {
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
    getModifierState: Qu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? (Yu = e.screenX - Gi.screenX, Xu = e.screenY - Gi.screenY) : Xu = Yu = 0, Gi = e), Yu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Xu;
    }
  }), Oh = Xt(_l), L1 = y({}, _l, { dataTransfer: 0 }), P1 = Xt(L1), I1 = y({}, Fi, { relatedTarget: 0 }), $u = Xt(I1), B1 = y({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), U1 = Xt(B1), H1 = y({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), q1 = Xt(H1), Z1 = y({}, oa, { data: 0 }), Nh = Xt(Z1), F1 = {
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
  }, G1 = {
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
  }, V1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Y1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = V1[e]) ? !!t[e] : !1;
  }
  function Qu() {
    return Y1;
  }
  var X1 = y({}, Fi, {
    key: function(e) {
      if (e.key) {
        var t = F1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? G1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qu,
    charCode: function(e) {
      return e.type === "keypress" ? gl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), $1 = Xt(X1), Q1 = y({}, _l, {
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
  }), Dh = Xt(Q1), K1 = y({}, Fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qu
  }), J1 = Xt(K1), W1 = y({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), e2 = Xt(W1), t2 = y({}, _l, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), n2 = Xt(t2), r2 = y({}, oa, {
    newState: 0,
    oldState: 0
  }), a2 = Xt(r2), i2 = [9, 13, 27, 32], Ku = ar && "CompositionEvent" in window, Vi = null;
  ar && "documentMode" in document && (Vi = document.documentMode);
  var s2 = ar && "TextEvent" in window && !Vi, Mh = ar && (!Ku || Vi && 8 < Vi && 11 >= Vi), kh = " ", Rh = !1;
  function jh(e, t) {
    switch (e) {
      case "keyup":
        return i2.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $a = !1;
  function l2(e, t) {
    switch (e) {
      case "compositionend":
        return zh(t);
      case "keypress":
        return t.which !== 32 ? null : (Rh = !0, kh);
      case "textInput":
        return e = t.data, e === kh && Rh ? null : e;
      default:
        return null;
    }
  }
  function o2(e, t) {
    if ($a)
      return e === "compositionend" || !Ku && jh(e, t) ? (e = Ah(), ml = Vu = Or = null, $a = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Mh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var u2 = {
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
  function Lh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!u2[e.type] : t === "textarea";
  }
  function Ph(e, t, a, l) {
    Ya ? Xa ? Xa.push(l) : Xa = [l] : Ya = l, t = io(t, "onChange"), 0 < t.length && (a = new yl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Yi = null, Xi = null;
  function c2(e) {
    vg(e, 0);
  }
  function bl(e) {
    var t = Hi(e);
    if (yh(t)) return e;
  }
  function Ih(e, t) {
    if (e === "change") return t;
  }
  var Bh = !1;
  if (ar) {
    var Ju;
    if (ar) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var Uh = document.createElement("div");
        Uh.setAttribute("oninput", "return;"), Wu = typeof Uh.oninput == "function";
      }
      Ju = Wu;
    } else Ju = !1;
    Bh = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function Hh() {
    Yi && (Yi.detachEvent("onpropertychange", qh), Xi = Yi = null);
  }
  function qh(e) {
    if (e.propertyName === "value" && bl(Xi)) {
      var t = [];
      Ph(
        t,
        Xi,
        e,
        Zu(e)
      ), wh(c2, t);
    }
  }
  function f2(e, t, a) {
    e === "focusin" ? (Hh(), Yi = t, Xi = a, Yi.attachEvent("onpropertychange", qh)) : e === "focusout" && Hh();
  }
  function d2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bl(Xi);
  }
  function h2(e, t) {
    if (e === "click") return bl(t);
  }
  function p2(e, t) {
    if (e === "input" || e === "change")
      return bl(t);
  }
  function m2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var an = typeof Object.is == "function" ? Object.is : m2;
  function $i(e, t) {
    if (an(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!ne.call(t, c) || !an(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function Zh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fh(e, t) {
    var a = Zh(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
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
      a = Zh(a);
    }
  }
  function Gh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Vh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = hl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = hl(e.document);
    }
    return t;
  }
  function ec(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var g2 = ar && "documentMode" in document && 11 >= document.documentMode, Qa = null, tc = null, Qi = null, nc = !1;
  function Yh(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    nc || Qa == null || Qa !== hl(l) || (l = Qa, "selectionStart" in l && ec(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Qi && $i(Qi, l) || (Qi = l, l = io(tc, "onSelect"), 0 < l.length && (t = new yl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Qa)));
  }
  function ua(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ka = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, rc = {}, Xh = {};
  ar && (Xh = document.createElement("div").style, "AnimationEvent" in window || (delete Ka.animationend.animation, delete Ka.animationiteration.animation, delete Ka.animationstart.animation), "TransitionEvent" in window || delete Ka.transitionend.transition);
  function ca(e) {
    if (rc[e]) return rc[e];
    if (!Ka[e]) return e;
    var t = Ka[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Xh)
        return rc[e] = t[a];
    return e;
  }
  var $h = ca("animationend"), Qh = ca("animationiteration"), Kh = ca("animationstart"), v2 = ca("transitionrun"), y2 = ca("transitionstart"), _2 = ca("transitioncancel"), Jh = ca("transitionend"), Wh = /* @__PURE__ */ new Map(), ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ac.push("scrollEnd");
  function zn(e, t) {
    Wh.set(e, t), la(t, [e]);
  }
  var ep = /* @__PURE__ */ new WeakMap();
  function En(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = ep.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: gh(t)
      }, ep.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: gh(t)
    };
  }
  var xn = [], Ja = 0, ic = 0;
  function Sl() {
    for (var e = Ja, t = ic = Ja = 0; t < e; ) {
      var a = xn[t];
      xn[t++] = null;
      var l = xn[t];
      xn[t++] = null;
      var c = xn[t];
      xn[t++] = null;
      var m = xn[t];
      if (xn[t++] = null, l !== null && c !== null) {
        var C = l.pending;
        C === null ? c.next = c : (c.next = C.next, C.next = c), l.pending = c;
      }
      m !== 0 && tp(a, c, m);
    }
  }
  function El(e, t, a, l) {
    xn[Ja++] = e, xn[Ja++] = t, xn[Ja++] = a, xn[Ja++] = l, ic |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function sc(e, t, a, l) {
    return El(e, t, a, l), xl(e);
  }
  function Wa(e, t) {
    return El(e, null, null, t), xl(e);
  }
  function tp(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var c = !1, m = e.return; m !== null; )
      m.childLanes |= a, l = m.alternate, l !== null && (l.childLanes |= a), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (c = !0)), e = m, m = m.return;
    return e.tag === 3 ? (m = e.stateNode, c && t !== null && (c = 31 - Ht(a), e = m.hiddenUpdates, l = e[c], l === null ? e[c] = [t] : l.push(t), t.lane = a | 536870912), m) : null;
  }
  function xl(e) {
    if (50 < Ss)
      throw Ss = 0, hf = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ei = {};
  function b2(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function sn(e, t, a, l) {
    return new b2(e, t, a, l);
  }
  function lc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ir(e, t) {
    var a = e.alternate;
    return a === null ? (a = sn(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function np(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Cl(e, t, a, l, c, m) {
    var C = 0;
    if (l = e, typeof e == "function") lc(e) && (C = 1);
    else if (typeof e == "string")
      C = E_(
        e,
        a,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case G:
          return e = sn(31, a, t, c), e.elementType = G, e.lanes = m, e;
        case d:
          return fa(a.children, c, m, t);
        case S:
          C = 8, c |= 24;
          break;
        case E:
          return e = sn(12, a, t, c | 2), e.elementType = E, e.lanes = m, e;
        case T:
          return e = sn(13, a, t, c), e.elementType = T, e.lanes = m, e;
        case M:
          return e = sn(19, a, t, c), e.elementType = M, e.lanes = m, e;
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
    return t = sn(C, a, t, c), t.elementType = e, t.type = l, t.lanes = m, t;
  }
  function fa(e, t, a, l) {
    return e = sn(7, e, l, t), e.lanes = a, e;
  }
  function oc(e, t, a) {
    return e = sn(6, e, null, t), e.lanes = a, e;
  }
  function uc(e, t, a) {
    return t = sn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var ti = [], ni = 0, wl = null, Al = 0, Cn = [], wn = 0, da = null, sr = 1, lr = "";
  function ha(e, t) {
    ti[ni++] = Al, ti[ni++] = wl, wl = e, Al = t;
  }
  function rp(e, t, a) {
    Cn[wn++] = sr, Cn[wn++] = lr, Cn[wn++] = da, da = e;
    var l = sr;
    e = lr;
    var c = 32 - Ht(l) - 1;
    l &= ~(1 << c), a += 1;
    var m = 32 - Ht(t) + c;
    if (30 < m) {
      var C = c - c % 5;
      m = (l & (1 << C) - 1).toString(32), l >>= C, c -= C, sr = 1 << 32 - Ht(t) + c | a << c | l, lr = m + e;
    } else
      sr = 1 << m | a << c | l, lr = e;
  }
  function cc(e) {
    e.return !== null && (ha(e, 1), rp(e, 1, 0));
  }
  function fc(e) {
    for (; e === wl; )
      wl = ti[--ni], ti[ni] = null, Al = ti[--ni], ti[ni] = null;
    for (; e === da; )
      da = Cn[--wn], Cn[wn] = null, lr = Cn[--wn], Cn[wn] = null, sr = Cn[--wn], Cn[wn] = null;
  }
  var Zt = null, ct = null, Ye = !1, pa = null, Gn = !1, dc = Error(s(519));
  function ma(e) {
    var t = Error(s(418, ""));
    throw Wi(En(t, e)), dc;
  }
  function ap(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Lt] = e, t[Yt] = l, a) {
      case "dialog":
        Be("cancel", t), Be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xs.length; a++)
          Be(xs[a], t);
        break;
      case "source":
        Be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", t), Be("load", t);
        break;
      case "details":
        Be("toggle", t);
        break;
      case "input":
        Be("invalid", t), _h(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), dl(t);
        break;
      case "select":
        Be("invalid", t);
        break;
      case "textarea":
        Be("invalid", t), Sh(t, l.value, l.defaultValue, l.children), dl(t);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Sg(t.textContent, a) ? (l.popover != null && (Be("beforetoggle", t), Be("toggle", t)), l.onScroll != null && Be("scroll", t), l.onScrollEnd != null && Be("scrollend", t), l.onClick != null && (t.onclick = so), t = !0) : t = !1, t || ma(e);
  }
  function ip(e) {
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
  function Ki(e) {
    if (e !== Zt) return !1;
    if (!Ye) return ip(e), Ye = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Nf(e.type, e.memoizedProps)), a = !a), a && ct && ma(e), ip(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                ct = Pn(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        ct = null;
      }
    } else
      t === 27 ? (t = ct, Fr(e.type) ? (e = Rf, Rf = null, ct = e) : ct = t) : ct = Zt ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ji() {
    ct = Zt = null, Ye = !1;
  }
  function sp() {
    var e = pa;
    return e !== null && (Kt === null ? Kt = e : Kt.push.apply(
      Kt,
      e
    ), pa = null), e;
  }
  function Wi(e) {
    pa === null ? pa = [e] : pa.push(e);
  }
  var hc = J(null), ga = null, or = null;
  function Nr(e, t, a) {
    se(hc, t._currentValue), t._currentValue = a;
  }
  function ur(e) {
    e._currentValue = hc.current, ae(hc);
  }
  function pc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function mc(e, t, a, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var m = c.dependencies;
      if (m !== null) {
        var C = c.child;
        m = m.firstContext;
        e: for (; m !== null; ) {
          var N = m;
          m = c;
          for (var R = 0; R < t.length; R++)
            if (N.context === t[R]) {
              m.lanes |= a, N = m.alternate, N !== null && (N.lanes |= a), pc(
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
        C.lanes |= a, m = C.alternate, m !== null && (m.lanes |= a), pc(C, a, e), C = null;
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
  function es(e, t, a, l) {
    e = null;
    for (var c = t, m = !1; c !== null; ) {
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
      } else if (c === ge.current) {
        if (C = c.alternate, C === null) throw Error(s(387));
        C.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ns) : e = [Ns]);
      }
      c = c.return;
    }
    e !== null && mc(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Tl(e) {
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
    ga = e, or = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Pt(e) {
    return lp(ga, e);
  }
  function Ol(e, t) {
    return ga === null && va(e), lp(e, t);
  }
  function lp(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, or === null) {
      if (e === null) throw Error(s(308));
      or = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else or = or.next = t;
    return a;
  }
  var S2 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, E2 = n.unstable_scheduleCallback, x2 = n.unstable_NormalPriority, xt = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gc() {
    return {
      controller: new S2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ts(e) {
    e.refCount--, e.refCount === 0 && E2(x2, function() {
      e.controller.abort();
    });
  }
  var ns = null, vc = 0, ri = 0, ai = null;
  function C2(e, t) {
    if (ns === null) {
      var a = ns = [];
      vc = 0, ri = bf(), ai = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return vc++, t.then(op, op), t;
  }
  function op() {
    if (--vc === 0 && ns !== null) {
      ai !== null && (ai.status = "fulfilled");
      var e = ns;
      ns = null, ri = 0, ai = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function w2(e, t) {
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
        l.status = "fulfilled", l.value = t;
        for (var c = 0; c < a.length; c++) (0, a[c])(t);
      },
      function(c) {
        for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++)
          (0, a[c])(void 0);
      }
    ), l;
  }
  var up = U.S;
  U.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && C2(e, t), up !== null && up(e, t);
  };
  var ya = J(null);
  function yc() {
    var e = ya.current;
    return e !== null ? e : tt.pooledCache;
  }
  function Nl(e, t) {
    t === null ? se(ya, ya.current) : se(ya, t.pool);
  }
  function cp() {
    var e = yc();
    return e === null ? null : { parent: xt._currentValue, pool: e };
  }
  var rs = Error(s(460)), fp = Error(s(474)), Dl = Error(s(542)), _c = { then: function() {
  } };
  function dp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Ml() {
  }
  function hp(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Ml, Ml), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, mp(e), e;
      default:
        if (typeof t.status == "string") t.then(Ml, Ml);
        else {
          if (e = tt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var c = t;
                c.status = "fulfilled", c.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var c = t;
                c.status = "rejected", c.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, mp(e), e;
        }
        throw as = t, rs;
    }
  }
  var as = null;
  function pp() {
    if (as === null) throw Error(s(459));
    var e = as;
    return as = null, e;
  }
  function mp(e) {
    if (e === rs || e === Dl)
      throw Error(s(483));
  }
  var Dr = !1;
  function bc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Sc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
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
  function kr(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Xe & 2) !== 0) {
      var c = l.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, t = xl(e), tp(e, null, a), t;
    }
    return El(e, l, t, a), xl(e);
  }
  function is(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, oh(e, a);
    }
  }
  function Ec(e, t) {
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
        m === null ? c = m = t : m = m.next = t;
      } else c = m = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: m,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var xc = !1;
  function ss() {
    if (xc) {
      var e = ai;
      if (e !== null) throw e;
    }
  }
  function ls(e, t, a, l) {
    xc = !1;
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
      var W = c.baseState;
      C = 0, X = H = R = null, N = m;
      do {
        var Z = N.lane & -536870913, F = Z !== N.lane;
        if (F ? (Fe & Z) === Z : (l & Z) === Z) {
          Z !== 0 && Z === ri && (xc = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: null,
            next: null
          });
          e: {
            var xe = e, _e = N;
            Z = t;
            var Je = a;
            switch (_e.tag) {
              case 1:
                if (xe = _e.payload, typeof xe == "function") {
                  W = xe.call(Je, W, Z);
                  break e;
                }
                W = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = _e.payload, Z = typeof xe == "function" ? xe.call(Je, W, Z) : xe, Z == null) break e;
                W = y({}, W, Z);
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
          }, X === null ? (H = X = F, R = W) : X = X.next = F, C |= Z;
        if (N = N.next, N === null) {
          if (N = c.shared.pending, N === null)
            break;
          F = N, N = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      X === null && (R = W), c.baseState = R, c.firstBaseUpdate = H, c.lastBaseUpdate = X, m === null && (c.shared.lanes = 0), Ur |= C, e.lanes = C, e.memoizedState = W;
    }
  }
  function gp(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function vp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        gp(a[e], t);
  }
  var ii = J(null), kl = J(0);
  function yp(e, t) {
    e = gr, se(kl, e), se(ii, t), gr = e | t.baseLanes;
  }
  function Cc() {
    se(kl, gr), se(ii, ii.current);
  }
  function wc() {
    gr = kl.current, ae(ii), ae(kl);
  }
  var Rr = 0, je = null, Qe = null, yt = null, Rl = !1, si = !1, _a = !1, jl = 0, os = 0, li = null, A2 = 0;
  function mt() {
    throw Error(s(321));
  }
  function Ac(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!an(e[a], t[a])) return !1;
    return !0;
  }
  function Tc(e, t, a, l, c, m) {
    return Rr = m, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? tm : nm, _a = !1, m = a(l, c), _a = !1, si && (m = bp(
      t,
      a,
      l,
      c
    )), _p(e), m;
  }
  function _p(e) {
    U.H = Ul;
    var t = Qe !== null && Qe.next !== null;
    if (Rr = 0, yt = Qe = je = null, Rl = !1, os = 0, li = null, t) throw Error(s(300));
    e === null || Ot || (e = e.dependencies, e !== null && Tl(e) && (Ot = !0));
  }
  function bp(e, t, a, l) {
    je = e;
    var c = 0;
    do {
      if (si && (li = null), os = 0, si = !1, 25 <= c) throw Error(s(301));
      if (c += 1, yt = Qe = null, e.updateQueue != null) {
        var m = e.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      U.H = R2, m = t(a, l);
    } while (si);
    return m;
  }
  function T2() {
    var e = U.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? us(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (je.flags |= 1024), t;
  }
  function Oc() {
    var e = jl !== 0;
    return jl = 0, e;
  }
  function Nc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Dc(e) {
    if (Rl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Rl = !1;
    }
    Rr = 0, yt = Qe = je = null, si = !1, os = jl = 0, li = null;
  }
  function $t() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return yt === null ? je.memoizedState = yt = e : yt = yt.next = e, yt;
  }
  function _t() {
    if (Qe === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = yt === null ? je.memoizedState : yt.next;
    if (t !== null)
      yt = t, Qe = e;
    else {
      if (e === null)
        throw je.alternate === null ? Error(s(467)) : Error(s(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, yt === null ? je.memoizedState = yt = e : yt = yt.next = e;
    }
    return yt;
  }
  function Mc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function us(e) {
    var t = os;
    return os += 1, li === null && (li = []), e = hp(li, e, t), t = je, (yt === null ? t.memoizedState : yt.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? tm : nm), e;
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return us(e);
      if (e.$$typeof === D) return Pt(e);
    }
    throw Error(s(438, String(e)));
  }
  function kc(e) {
    var t = null, a = je.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = je.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Mc(), je.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = B;
    return t.index++, a;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ll(e) {
    var t = _t();
    return Rc(t, Qe, e);
  }
  function Rc(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var c = e.baseQueue, m = l.pending;
    if (m !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = m.next, m.next = C;
      }
      t.baseQueue = c = m, l.pending = null;
    }
    if (m = e.baseState, c === null) e.memoizedState = m;
    else {
      t = c.next;
      var N = C = null, R = null, H = t, X = !1;
      do {
        var W = H.lane & -536870913;
        if (W !== H.lane ? (Fe & W) === W : (Rr & W) === W) {
          var Z = H.revertLane;
          if (Z === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), W === ri && (X = !0);
          else if ((Rr & Z) === Z) {
            H = H.next, Z === ri && (X = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, R === null ? (N = R = W, C = m) : R = R.next = W, je.lanes |= Z, Ur |= Z;
          W = H.action, _a && a(m, W), m = H.hasEagerState ? H.eagerState : a(m, W);
        } else
          Z = {
            lane: W,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, R === null ? (N = R = Z, C = m) : R = R.next = Z, je.lanes |= W, Ur |= W;
        H = H.next;
      } while (H !== null && H !== t);
      if (R === null ? C = m : R.next = N, !an(m, e.memoizedState) && (Ot = !0, X && (a = ai, a !== null)))
        throw a;
      e.memoizedState = m, e.baseState = C, e.baseQueue = R, l.lastRenderedState = m;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function jc(e) {
    var t = _t(), a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, m = t.memoizedState;
    if (c !== null) {
      a.pending = null;
      var C = c = c.next;
      do
        m = e(m, C.action), C = C.next;
      while (C !== c);
      an(m, t.memoizedState) || (Ot = !0), t.memoizedState = m, t.baseQueue === null && (t.baseState = m), a.lastRenderedState = m;
    }
    return [m, l];
  }
  function Sp(e, t, a) {
    var l = je, c = _t(), m = Ye;
    if (m) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = t();
    var C = !an(
      (Qe || c).memoizedState,
      a
    );
    C && (c.memoizedState = a, Ot = !0), c = c.queue;
    var N = Cp.bind(null, l, c, e);
    if (cs(2048, 8, N, [e]), c.getSnapshot !== t || C || yt !== null && yt.memoizedState.tag & 1) {
      if (l.flags |= 2048, oi(
        9,
        Pl(),
        xp.bind(
          null,
          l,
          c,
          a,
          t
        ),
        null
      ), tt === null) throw Error(s(349));
      m || (Rr & 124) !== 0 || Ep(l, t, a);
    }
    return a;
  }
  function Ep(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = je.updateQueue, t === null ? (t = Mc(), je.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function xp(e, t, a, l) {
    t.value = a, t.getSnapshot = l, wp(t) && Ap(e);
  }
  function Cp(e, t, a) {
    return a(function() {
      wp(t) && Ap(e);
    });
  }
  function wp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !an(e, a);
    } catch {
      return !0;
    }
  }
  function Ap(e) {
    var t = Wa(e, 2);
    t !== null && fn(t, e, 2);
  }
  function zc(e) {
    var t = $t();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), _a) {
        Zn(!0);
        try {
          a();
        } finally {
          Zn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e
    }, t;
  }
  function Tp(e, t, a, l) {
    return e.baseState = a, Rc(
      e,
      Qe,
      typeof l == "function" ? l : cr
    );
  }
  function O2(e, t, a, l, c) {
    if (Bl(e)) throw Error(s(485));
    if (e = t.action, e !== null) {
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
      U.T !== null ? a(!0) : m.isTransition = !1, l(m), a = t.pending, a === null ? (m.next = t.pending = m, Op(t, m)) : (m.next = a.next, t.pending = a.next = m);
    }
  }
  function Op(e, t) {
    var a = t.action, l = t.payload, c = e.state;
    if (t.isTransition) {
      var m = U.T, C = {};
      U.T = C;
      try {
        var N = a(c, l), R = U.S;
        R !== null && R(C, N), Np(e, t, N);
      } catch (H) {
        Lc(e, t, H);
      } finally {
        U.T = m;
      }
    } else
      try {
        m = a(c, l), Np(e, t, m);
      } catch (H) {
        Lc(e, t, H);
      }
  }
  function Np(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Dp(e, t, l);
      },
      function(l) {
        return Lc(e, t, l);
      }
    ) : Dp(e, t, a);
  }
  function Dp(e, t, a) {
    t.status = "fulfilled", t.value = a, Mp(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Op(e, a)));
  }
  function Lc(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Mp(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Mp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function kp(e, t) {
    return t;
  }
  function Rp(e, t) {
    if (Ye) {
      var a = tt.formState;
      if (a !== null) {
        e: {
          var l = je;
          if (Ye) {
            if (ct) {
              t: {
                for (var c = ct, m = Gn; c.nodeType !== 8; ) {
                  if (!m) {
                    c = null;
                    break t;
                  }
                  if (c = Pn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                m = c.data, c = m === "F!" || m === "F" ? c : null;
              }
              if (c) {
                ct = Pn(
                  c.nextSibling
                ), l = c.data === "F!";
                break e;
              }
            }
            ma(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = $t(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kp,
      lastRenderedState: t
    }, a.queue = l, a = Jp.bind(
      null,
      je,
      l
    ), l.dispatch = a, l = zc(!1), m = Hc.bind(
      null,
      je,
      !1,
      l.queue
    ), l = $t(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = O2.bind(
      null,
      je,
      c,
      m,
      a
    ), c.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function jp(e) {
    var t = _t();
    return zp(t, Qe, e);
  }
  function zp(e, t, a) {
    if (t = Rc(
      e,
      t,
      kp
    )[0], e = Ll(cr)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = us(t);
      } catch (C) {
        throw C === rs ? Dl : C;
      }
    else l = t;
    t = _t();
    var c = t.queue, m = c.dispatch;
    return a !== t.memoizedState && (je.flags |= 2048, oi(
      9,
      Pl(),
      N2.bind(null, c, a),
      null
    )), [l, m, e];
  }
  function N2(e, t) {
    e.action = t;
  }
  function Lp(e) {
    var t = _t(), a = Qe;
    if (a !== null)
      return zp(t, a, e);
    _t(), t = t.memoizedState, a = _t();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function oi(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = je.updateQueue, t === null && (t = Mc(), je.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Pl() {
    return { destroy: void 0, resource: void 0 };
  }
  function Pp() {
    return _t().memoizedState;
  }
  function Il(e, t, a, l) {
    var c = $t();
    l = l === void 0 ? null : l, je.flags |= e, c.memoizedState = oi(
      1 | t,
      Pl(),
      a,
      l
    );
  }
  function cs(e, t, a, l) {
    var c = _t();
    l = l === void 0 ? null : l;
    var m = c.memoizedState.inst;
    Qe !== null && l !== null && Ac(l, Qe.memoizedState.deps) ? c.memoizedState = oi(t, m, a, l) : (je.flags |= e, c.memoizedState = oi(
      1 | t,
      m,
      a,
      l
    ));
  }
  function Ip(e, t) {
    Il(8390656, 8, e, t);
  }
  function Bp(e, t) {
    cs(2048, 8, e, t);
  }
  function Up(e, t) {
    return cs(4, 2, e, t);
  }
  function Hp(e, t) {
    return cs(4, 4, e, t);
  }
  function qp(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Zp(e, t, a) {
    a = a != null ? a.concat([e]) : null, cs(4, 4, qp.bind(null, t, e), a);
  }
  function Pc() {
  }
  function Fp(e, t) {
    var a = _t();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Ac(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Gp(e, t) {
    var a = _t();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Ac(t, l[1]))
      return l[0];
    if (l = e(), _a) {
      Zn(!0);
      try {
        e();
      } finally {
        Zn(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Ic(e, t, a) {
    return a === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Xm(), je.lanes |= e, Ur |= e, a);
  }
  function Vp(e, t, a, l) {
    return an(a, t) ? a : ii.current !== null ? (e = Ic(e, a, l), an(e, t) || (Ot = !0), e) : (Rr & 42) === 0 ? (Ot = !0, e.memoizedState = a) : (e = Xm(), je.lanes |= e, Ur |= e, t);
  }
  function Yp(e, t, a, l, c) {
    var m = re.p;
    re.p = m !== 0 && 8 > m ? m : 8;
    var C = U.T, N = {};
    U.T = N, Hc(e, !1, t, a);
    try {
      var R = c(), H = U.S;
      if (H !== null && H(N, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var X = w2(
          R,
          l
        );
        fs(
          e,
          t,
          X,
          cn(e)
        );
      } else
        fs(
          e,
          t,
          l,
          cn(e)
        );
    } catch (W) {
      fs(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: W },
        cn()
      );
    } finally {
      re.p = m, U.T = C;
    }
  }
  function D2() {
  }
  function Bc(e, t, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Xp(e).queue;
    Yp(
      e,
      c,
      t,
      ce,
      a === null ? D2 : function() {
        return $p(e), a(l);
      }
    );
  }
  function Xp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: ce
      },
      next: null
    };
    var a = {};
    return t.next = {
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
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function $p(e) {
    var t = Xp(e).next.queue;
    fs(e, t, {}, cn());
  }
  function Uc() {
    return Pt(Ns);
  }
  function Qp() {
    return _t().memoizedState;
  }
  function Kp() {
    return _t().memoizedState;
  }
  function M2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = cn();
          e = Mr(a);
          var l = kr(t, e, a);
          l !== null && (fn(l, t, a), is(l, t, a)), t = { cache: gc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function k2(e, t, a) {
    var l = cn();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bl(e) ? Wp(t, a) : (a = sc(e, t, a, l), a !== null && (fn(a, e, l), em(a, t, l)));
  }
  function Jp(e, t, a) {
    var l = cn();
    fs(e, t, a, l);
  }
  function fs(e, t, a, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Bl(e)) Wp(t, c);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = t.lastRenderedReducer, m !== null))
        try {
          var C = t.lastRenderedState, N = m(C, a);
          if (c.hasEagerState = !0, c.eagerState = N, an(N, C))
            return El(e, t, c, 0), tt === null && Sl(), !1;
        } catch {
        } finally {
        }
      if (a = sc(e, t, c, l), a !== null)
        return fn(a, e, l), em(a, t, l), !0;
    }
    return !1;
  }
  function Hc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: bf(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bl(e)) {
      if (t) throw Error(s(479));
    } else
      t = sc(
        e,
        a,
        l,
        2
      ), t !== null && fn(t, e, 2);
  }
  function Bl(e) {
    var t = e.alternate;
    return e === je || t !== null && t === je;
  }
  function Wp(e, t) {
    si = Rl = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function em(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, oh(e, a);
    }
  }
  var Ul = {
    readContext: Pt,
    use: zl,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useLayoutEffect: mt,
    useInsertionEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useSyncExternalStore: mt,
    useId: mt,
    useHostTransitionStatus: mt,
    useFormState: mt,
    useActionState: mt,
    useOptimistic: mt,
    useMemoCache: mt,
    useCacheRefresh: mt
  }, tm = {
    readContext: Pt,
    use: zl,
    useCallback: function(e, t) {
      return $t().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Pt,
    useEffect: Ip,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Il(
        4194308,
        4,
        qp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Il(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Il(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = $t();
      t = t === void 0 ? null : t;
      var l = e();
      if (_a) {
        Zn(!0);
        try {
          e();
        } finally {
          Zn(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = $t();
      if (a !== void 0) {
        var c = a(t);
        if (_a) {
          Zn(!0);
          try {
            a(t);
          } finally {
            Zn(!1);
          }
        }
      } else c = t;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = k2.bind(
        null,
        je,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = $t();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = zc(e);
      var t = e.queue, a = Jp.bind(null, je, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var a = $t();
      return Ic(a, e, t);
    },
    useTransition: function() {
      var e = zc(!1);
      return e = Yp.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), $t().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = je, c = $t();
      if (Ye) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = t(), tt === null)
          throw Error(s(349));
        (Fe & 124) !== 0 || Ep(l, t, a);
      }
      c.memoizedState = a;
      var m = { value: a, getSnapshot: t };
      return c.queue = m, Ip(Cp.bind(null, l, m, e), [
        e
      ]), l.flags |= 2048, oi(
        9,
        Pl(),
        xp.bind(
          null,
          l,
          m,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = $t(), t = tt.identifierPrefix;
      if (Ye) {
        var a = lr, l = sr;
        a = (l & ~(1 << 32 - Ht(l) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = jl++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = A2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Uc,
    useFormState: Rp,
    useActionState: Rp,
    useOptimistic: function(e) {
      var t = $t();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Hc.bind(
        null,
        je,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: kc,
    useCacheRefresh: function() {
      return $t().memoizedState = M2.bind(
        null,
        je
      );
    }
  }, nm = {
    readContext: Pt,
    use: zl,
    useCallback: Fp,
    useContext: Pt,
    useEffect: Bp,
    useImperativeHandle: Zp,
    useInsertionEffect: Up,
    useLayoutEffect: Hp,
    useMemo: Gp,
    useReducer: Ll,
    useRef: Pp,
    useState: function() {
      return Ll(cr);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var a = _t();
      return Vp(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ll(cr)[0], t = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        t
      ];
    },
    useSyncExternalStore: Sp,
    useId: Qp,
    useHostTransitionStatus: Uc,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(e, t) {
      var a = _t();
      return Tp(a, Qe, e, t);
    },
    useMemoCache: kc,
    useCacheRefresh: Kp
  }, R2 = {
    readContext: Pt,
    use: zl,
    useCallback: Fp,
    useContext: Pt,
    useEffect: Bp,
    useImperativeHandle: Zp,
    useInsertionEffect: Up,
    useLayoutEffect: Hp,
    useMemo: Gp,
    useReducer: jc,
    useRef: Pp,
    useState: function() {
      return jc(cr);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var a = _t();
      return Qe === null ? Ic(a, e, t) : Vp(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = jc(cr)[0], t = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        t
      ];
    },
    useSyncExternalStore: Sp,
    useId: Qp,
    useHostTransitionStatus: Uc,
    useFormState: Lp,
    useActionState: Lp,
    useOptimistic: function(e, t) {
      var a = _t();
      return Qe !== null ? Tp(a, Qe, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: kc,
    useCacheRefresh: Kp
  }, ui = null, ds = 0;
  function Hl(e) {
    var t = ds;
    return ds += 1, ui === null && (ui = []), hp(ui, e, t);
  }
  function hs(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ql(e, t) {
    throw t.$$typeof === b ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function rm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function am(e) {
    function t(L, z) {
      if (e) {
        var I = L.deletions;
        I === null ? (L.deletions = [z], L.flags |= 16) : I.push(z);
      }
    }
    function a(L, z) {
      if (!e) return null;
      for (; z !== null; )
        t(L, z), z = z.sibling;
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
      return z === null || z.tag !== 6 ? (z = oc(I, L.mode, Q), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function R(L, z, I, Q) {
      var de = I.type;
      return de === d ? X(
        L,
        z,
        I.props.children,
        Q,
        I.key
      ) : z !== null && (z.elementType === de || typeof de == "object" && de !== null && de.$$typeof === q && rm(de) === z.type) ? (z = c(z, I.props), hs(z, I), z.return = L, z) : (z = Cl(
        I.type,
        I.key,
        I.props,
        null,
        L.mode,
        Q
      ), hs(z, I), z.return = L, z);
    }
    function H(L, z, I, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== I.containerInfo || z.stateNode.implementation !== I.implementation ? (z = uc(I, L.mode, Q), z.return = L, z) : (z = c(z, I.children || []), z.return = L, z);
    }
    function X(L, z, I, Q, de) {
      return z === null || z.tag !== 7 ? (z = fa(
        I,
        L.mode,
        Q,
        de
      ), z.return = L, z) : (z = c(z, I), z.return = L, z);
    }
    function W(L, z, I) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = oc(
          "" + z,
          L.mode,
          I
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case _:
            return I = Cl(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              I
            ), hs(I, z), I.return = L, I;
          case v:
            return z = uc(
              z,
              L.mode,
              I
            ), z.return = L, z;
          case q:
            var Q = z._init;
            return z = Q(z._payload), W(L, z, I);
        }
        if (me(z) || $(z))
          return z = fa(
            z,
            L.mode,
            I,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return W(L, Hl(z), I);
        if (z.$$typeof === D)
          return W(
            L,
            Ol(L, z),
            I
          );
        ql(L, z);
      }
      return null;
    }
    function Z(L, z, I, Q) {
      var de = z !== null ? z.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return de !== null ? null : N(L, z, "" + I, Q);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case _:
            return I.key === de ? R(L, z, I, Q) : null;
          case v:
            return I.key === de ? H(L, z, I, Q) : null;
          case q:
            return de = I._init, I = de(I._payload), Z(L, z, I, Q);
        }
        if (me(I) || $(I))
          return de !== null ? null : X(L, z, I, Q, null);
        if (typeof I.then == "function")
          return Z(
            L,
            z,
            Hl(I),
            Q
          );
        if (I.$$typeof === D)
          return Z(
            L,
            z,
            Ol(L, I),
            Q
          );
        ql(L, I);
      }
      return null;
    }
    function F(L, z, I, Q, de) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return L = L.get(I) || null, N(z, L, "" + Q, de);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case _:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, R(z, L, Q, de);
          case v:
            return L = L.get(
              Q.key === null ? I : Q.key
            ) || null, H(z, L, Q, de);
          case q:
            var Le = Q._init;
            return Q = Le(Q._payload), F(
              L,
              z,
              I,
              Q,
              de
            );
        }
        if (me(Q) || $(Q))
          return L = L.get(I) || null, X(z, L, Q, de, null);
        if (typeof Q.then == "function")
          return F(
            L,
            z,
            I,
            Hl(Q),
            de
          );
        if (Q.$$typeof === D)
          return F(
            L,
            z,
            I,
            Ol(z, Q),
            de
          );
        ql(z, Q);
      }
      return null;
    }
    function xe(L, z, I, Q) {
      for (var de = null, Le = null, pe = z, Ee = z = 0, Dt = null; pe !== null && Ee < I.length; Ee++) {
        pe.index > Ee ? (Dt = pe, pe = null) : Dt = pe.sibling;
        var Ge = Z(
          L,
          pe,
          I[Ee],
          Q
        );
        if (Ge === null) {
          pe === null && (pe = Dt);
          break;
        }
        e && pe && Ge.alternate === null && t(L, pe), z = m(Ge, z, Ee), Le === null ? de = Ge : Le.sibling = Ge, Le = Ge, pe = Dt;
      }
      if (Ee === I.length)
        return a(L, pe), Ye && ha(L, Ee), de;
      if (pe === null) {
        for (; Ee < I.length; Ee++)
          pe = W(L, I[Ee], Q), pe !== null && (z = m(
            pe,
            z,
            Ee
          ), Le === null ? de = pe : Le.sibling = pe, Le = pe);
        return Ye && ha(L, Ee), de;
      }
      for (pe = l(pe); Ee < I.length; Ee++)
        Dt = F(
          pe,
          L,
          Ee,
          I[Ee],
          Q
        ), Dt !== null && (e && Dt.alternate !== null && pe.delete(
          Dt.key === null ? Ee : Dt.key
        ), z = m(
          Dt,
          z,
          Ee
        ), Le === null ? de = Dt : Le.sibling = Dt, Le = Dt);
      return e && pe.forEach(function($r) {
        return t(L, $r);
      }), Ye && ha(L, Ee), de;
    }
    function _e(L, z, I, Q) {
      if (I == null) throw Error(s(151));
      for (var de = null, Le = null, pe = z, Ee = z = 0, Dt = null, Ge = I.next(); pe !== null && !Ge.done; Ee++, Ge = I.next()) {
        pe.index > Ee ? (Dt = pe, pe = null) : Dt = pe.sibling;
        var $r = Z(L, pe, Ge.value, Q);
        if ($r === null) {
          pe === null && (pe = Dt);
          break;
        }
        e && pe && $r.alternate === null && t(L, pe), z = m($r, z, Ee), Le === null ? de = $r : Le.sibling = $r, Le = $r, pe = Dt;
      }
      if (Ge.done)
        return a(L, pe), Ye && ha(L, Ee), de;
      if (pe === null) {
        for (; !Ge.done; Ee++, Ge = I.next())
          Ge = W(L, Ge.value, Q), Ge !== null && (z = m(Ge, z, Ee), Le === null ? de = Ge : Le.sibling = Ge, Le = Ge);
        return Ye && ha(L, Ee), de;
      }
      for (pe = l(pe); !Ge.done; Ee++, Ge = I.next())
        Ge = F(pe, L, Ee, Ge.value, Q), Ge !== null && (e && Ge.alternate !== null && pe.delete(Ge.key === null ? Ee : Ge.key), z = m(Ge, z, Ee), Le === null ? de = Ge : Le.sibling = Ge, Le = Ge);
      return e && pe.forEach(function(j_) {
        return t(L, j_);
      }), Ye && ha(L, Ee), de;
    }
    function Je(L, z, I, Q) {
      if (typeof I == "object" && I !== null && I.type === d && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case _:
            e: {
              for (var de = I.key; z !== null; ) {
                if (z.key === de) {
                  if (de = I.type, de === d) {
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
                  } else if (z.elementType === de || typeof de == "object" && de !== null && de.$$typeof === q && rm(de) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), Q = c(z, I.props), hs(Q, I), Q.return = L, L = Q;
                    break e;
                  }
                  a(L, z);
                  break;
                } else t(L, z);
                z = z.sibling;
              }
              I.type === d ? (Q = fa(
                I.props.children,
                L.mode,
                Q,
                I.key
              ), Q.return = L, L = Q) : (Q = Cl(
                I.type,
                I.key,
                I.props,
                null,
                L.mode,
                Q
              ), hs(Q, I), Q.return = L, L = Q);
            }
            return C(L);
          case v:
            e: {
              for (de = I.key; z !== null; ) {
                if (z.key === de)
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
                else t(L, z);
                z = z.sibling;
              }
              Q = uc(I, L.mode, Q), Q.return = L, L = Q;
            }
            return C(L);
          case q:
            return de = I._init, I = de(I._payload), Je(
              L,
              z,
              I,
              Q
            );
        }
        if (me(I))
          return xe(
            L,
            z,
            I,
            Q
          );
        if ($(I)) {
          if (de = $(I), typeof de != "function") throw Error(s(150));
          return I = de.call(I), _e(
            L,
            z,
            I,
            Q
          );
        }
        if (typeof I.then == "function")
          return Je(
            L,
            z,
            Hl(I),
            Q
          );
        if (I.$$typeof === D)
          return Je(
            L,
            z,
            Ol(L, I),
            Q
          );
        ql(L, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint" ? (I = "" + I, z !== null && z.tag === 6 ? (a(L, z.sibling), Q = c(z, I), Q.return = L, L = Q) : (a(L, z), Q = oc(I, L.mode, Q), Q.return = L, L = Q), C(L)) : a(L, z);
    }
    return function(L, z, I, Q) {
      try {
        ds = 0;
        var de = Je(
          L,
          z,
          I,
          Q
        );
        return ui = null, de;
      } catch (pe) {
        if (pe === rs || pe === Dl) throw pe;
        var Le = sn(29, pe, null, L.mode);
        return Le.lanes = Q, Le.return = L, Le;
      } finally {
      }
    };
  }
  var ci = am(!0), im = am(!1), An = J(null), Vn = null;
  function jr(e) {
    var t = e.alternate;
    se(Ct, Ct.current & 1), se(An, e), Vn === null && (t === null || ii.current !== null || t.memoizedState !== null) && (Vn = e);
  }
  function sm(e) {
    if (e.tag === 22) {
      if (se(Ct, Ct.current), se(An, e), Vn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Vn = e);
      }
    } else zr();
  }
  function zr() {
    se(Ct, Ct.current), se(An, An.current);
  }
  function fr(e) {
    ae(An), Vn === e && (Vn = null), ae(Ct);
  }
  var Ct = J(0);
  function Zl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || kf(a)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function qc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : y({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Zc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = cn(), c = Mr(l);
      c.payload = t, a != null && (c.callback = a), t = kr(e, c, l), t !== null && (fn(t, e, l), is(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = cn(), c = Mr(l);
      c.tag = 1, c.payload = t, a != null && (c.callback = a), t = kr(e, c, l), t !== null && (fn(t, e, l), is(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = cn(), l = Mr(a);
      l.tag = 2, t != null && (l.callback = t), t = kr(e, l, a), t !== null && (fn(t, e, a), is(t, e, a));
    }
  };
  function lm(e, t, a, l, c, m, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, m, C) : t.prototype && t.prototype.isPureReactComponent ? !$i(a, l) || !$i(c, m) : !0;
  }
  function om(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Zc.enqueueReplaceState(t, t.state, null);
  }
  function ba(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = y({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var Fl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function um(e) {
    Fl(e);
  }
  function cm(e) {
    console.error(e);
  }
  function fm(e) {
    Fl(e);
  }
  function Gl(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function dm(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Fc(e, t, a) {
    return a = Mr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Gl(e, t);
    }, a;
  }
  function hm(e) {
    return e = Mr(e), e.tag = 3, e;
  }
  function pm(e, t, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var m = l.value;
      e.payload = function() {
        return c(m);
      }, e.callback = function() {
        dm(t, a, l);
      };
    }
    var C = a.stateNode;
    C !== null && typeof C.componentDidCatch == "function" && (e.callback = function() {
      dm(t, a, l), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var N = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: N !== null ? N : ""
      });
    });
  }
  function j2(e, t, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && es(
        t,
        a,
        c,
        !0
      ), a = An.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Vn === null ? mf() : a.alternate === null && ft === 0 && (ft = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === _c ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), vf(e, l, c)), !1;
          case 22:
            return a.flags |= 65536, l === _c ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), vf(e, l, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return vf(e, l, c), mf(), !1;
    }
    if (Ye)
      return t = An.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, l !== dc && (e = Error(s(422), { cause: l }), Wi(En(e, a)))) : (l !== dc && (t = Error(s(423), {
        cause: l
      }), Wi(
        En(t, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = En(l, a), c = Fc(
        e.stateNode,
        l,
        c
      ), Ec(e, c), ft !== 4 && (ft = 2)), !1;
    var m = Error(s(520), { cause: l });
    if (m = En(m, a), bs === null ? bs = [m] : bs.push(m), ft !== 4 && (ft = 2), t === null) return !0;
    l = En(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Fc(a.stateNode, l, e), Ec(a, e), !1;
        case 1:
          if (t = a.type, m = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Hr === null || !Hr.has(m))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = hm(c), pm(
              c,
              e,
              a,
              l
            ), Ec(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var mm = Error(s(461)), Ot = !1;
  function Mt(e, t, a, l) {
    t.child = e === null ? im(t, null, a, l) : ci(
      t,
      e.child,
      a,
      l
    );
  }
  function gm(e, t, a, l, c) {
    a = a.render;
    var m = t.ref;
    if ("ref" in l) {
      var C = {};
      for (var N in l)
        N !== "ref" && (C[N] = l[N]);
    } else C = l;
    return va(t), l = Tc(
      e,
      t,
      a,
      C,
      m,
      c
    ), N = Oc(), e !== null && !Ot ? (Nc(e, t, c), dr(e, t, c)) : (Ye && N && cc(t), t.flags |= 1, Mt(e, t, l, c), t.child);
  }
  function vm(e, t, a, l, c) {
    if (e === null) {
      var m = a.type;
      return typeof m == "function" && !lc(m) && m.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = m, ym(
        e,
        t,
        m,
        l,
        c
      )) : (e = Cl(
        a.type,
        null,
        l,
        t,
        t.mode,
        c
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (m = e.child, !Jc(e, c)) {
      var C = m.memoizedProps;
      if (a = a.compare, a = a !== null ? a : $i, a(C, l) && e.ref === t.ref)
        return dr(e, t, c);
    }
    return t.flags |= 1, e = ir(m, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ym(e, t, a, l, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if ($i(m, l) && e.ref === t.ref)
        if (Ot = !1, t.pendingProps = l = m, Jc(e, c))
          (e.flags & 131072) !== 0 && (Ot = !0);
        else
          return t.lanes = e.lanes, dr(e, t, c);
    }
    return Gc(
      e,
      t,
      a,
      l,
      c
    );
  }
  function _m(e, t, a) {
    var l = t.pendingProps, c = l.children, m = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = m !== null ? m.baseLanes | a : a, e !== null) {
          for (c = t.child = e.child, m = 0; c !== null; )
            m = m | c.lanes | c.childLanes, c = c.sibling;
          t.childLanes = m & ~l;
        } else t.childLanes = 0, t.child = null;
        return bm(
          e,
          t,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Nl(
          t,
          m !== null ? m.cachePool : null
        ), m !== null ? yp(t, m) : Cc(), sm(t);
      else
        return t.lanes = t.childLanes = 536870912, bm(
          e,
          t,
          m !== null ? m.baseLanes | a : a,
          a
        );
    } else
      m !== null ? (Nl(t, m.cachePool), yp(t, m), zr(), t.memoizedState = null) : (e !== null && Nl(t, null), Cc(), zr());
    return Mt(e, t, c, a), t.child;
  }
  function bm(e, t, a, l) {
    var c = yc();
    return c = c === null ? null : { parent: xt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && Nl(t, null), Cc(), sm(t), e !== null && es(e, t, l, !0), null;
  }
  function Vl(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Gc(e, t, a, l, c) {
    return va(t), a = Tc(
      e,
      t,
      a,
      l,
      void 0,
      c
    ), l = Oc(), e !== null && !Ot ? (Nc(e, t, c), dr(e, t, c)) : (Ye && l && cc(t), t.flags |= 1, Mt(e, t, a, c), t.child);
  }
  function Sm(e, t, a, l, c, m) {
    return va(t), t.updateQueue = null, a = bp(
      t,
      l,
      a,
      c
    ), _p(e), l = Oc(), e !== null && !Ot ? (Nc(e, t, m), dr(e, t, m)) : (Ye && l && cc(t), t.flags |= 1, Mt(e, t, a, m), t.child);
  }
  function Em(e, t, a, l, c) {
    if (va(t), t.stateNode === null) {
      var m = ei, C = a.contextType;
      typeof C == "object" && C !== null && (m = Pt(C)), m = new a(l, m), t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = Zc, t.stateNode = m, m._reactInternals = t, m = t.stateNode, m.props = l, m.state = t.memoizedState, m.refs = {}, bc(t), C = a.contextType, m.context = typeof C == "object" && C !== null ? Pt(C) : ei, m.state = t.memoizedState, C = a.getDerivedStateFromProps, typeof C == "function" && (qc(
        t,
        a,
        C,
        l
      ), m.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (C = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), C !== m.state && Zc.enqueueReplaceState(m, m.state, null), ls(t, l, m, c), ss(), m.state = t.memoizedState), typeof m.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      m = t.stateNode;
      var N = t.memoizedProps, R = ba(a, N);
      m.props = R;
      var H = m.context, X = a.contextType;
      C = ei, typeof X == "object" && X !== null && (C = Pt(X));
      var W = a.getDerivedStateFromProps;
      X = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function", N = t.pendingProps !== N, X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (N || H !== C) && om(
        t,
        m,
        l,
        C
      ), Dr = !1;
      var Z = t.memoizedState;
      m.state = Z, ls(t, l, m, c), ss(), H = t.memoizedState, N || Z !== H || Dr ? (typeof W == "function" && (qc(
        t,
        a,
        W,
        l
      ), H = t.memoizedState), (R = Dr || lm(
        t,
        a,
        R,
        l,
        Z,
        H,
        C
      )) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = H), m.props = l, m.state = H, m.context = C, l = R) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      m = t.stateNode, Sc(e, t), C = t.memoizedProps, X = ba(a, C), m.props = X, W = t.pendingProps, Z = m.context, H = a.contextType, R = ei, typeof H == "object" && H !== null && (R = Pt(H)), N = a.getDerivedStateFromProps, (H = typeof N == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== W || Z !== R) && om(
        t,
        m,
        l,
        R
      ), Dr = !1, Z = t.memoizedState, m.state = Z, ls(t, l, m, c), ss();
      var F = t.memoizedState;
      C !== W || Z !== F || Dr || e !== null && e.dependencies !== null && Tl(e.dependencies) ? (typeof N == "function" && (qc(
        t,
        a,
        N,
        l
      ), F = t.memoizedState), (X = Dr || lm(
        t,
        a,
        X,
        l,
        Z,
        F,
        R
      ) || e !== null && e.dependencies !== null && Tl(e.dependencies)) ? (H || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(l, F, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(
        l,
        F,
        R
      )), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = F), m.props = l, m.state = F, m.context = R, l = X) : (typeof m.componentDidUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && Z === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return m = l, Vl(e, t), l = (t.flags & 128) !== 0, m || l ? (m = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : m.render(), t.flags |= 1, e !== null && l ? (t.child = ci(
      t,
      e.child,
      null,
      c
    ), t.child = ci(
      t,
      null,
      a,
      c
    )) : Mt(e, t, a, c), t.memoizedState = m.state, e = t.child) : e = dr(
      e,
      t,
      c
    ), e;
  }
  function xm(e, t, a, l) {
    return Ji(), t.flags |= 256, Mt(e, t, a, l), t.child;
  }
  var Vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Yc(e) {
    return { baseLanes: e, cachePool: cp() };
  }
  function Xc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Tn), e;
  }
  function Cm(e, t, a) {
    var l = t.pendingProps, c = !1, m = (t.flags & 128) !== 0, C;
    if ((C = m) || (C = e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0), C && (c = !0, t.flags &= -129), C = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ye) {
        if (c ? jr(t) : zr(), Ye) {
          var N = ct, R;
          if (R = N) {
            e: {
              for (R = N, N = Gn; R.nodeType !== 8; ) {
                if (!N) {
                  N = null;
                  break e;
                }
                if (R = Pn(
                  R.nextSibling
                ), R === null) {
                  N = null;
                  break e;
                }
              }
              N = R;
            }
            N !== null ? (t.memoizedState = {
              dehydrated: N,
              treeContext: da !== null ? { id: sr, overflow: lr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = sn(
              18,
              null,
              null,
              0
            ), R.stateNode = N, R.return = t, t.child = R, Zt = t, ct = null, R = !0) : R = !1;
          }
          R || ma(t);
        }
        if (N = t.memoizedState, N !== null && (N = N.dehydrated, N !== null))
          return kf(N) ? t.lanes = 32 : t.lanes = 536870912, null;
        fr(t);
      }
      return N = l.children, l = l.fallback, c ? (zr(), c = t.mode, N = Yl(
        { mode: "hidden", children: N },
        c
      ), l = fa(
        l,
        c,
        a,
        null
      ), N.return = t, l.return = t, N.sibling = l, t.child = N, c = t.child, c.memoizedState = Yc(a), c.childLanes = Xc(
        e,
        C,
        a
      ), t.memoizedState = Vc, l) : (jr(t), $c(t, N));
    }
    if (R = e.memoizedState, R !== null && (N = R.dehydrated, N !== null)) {
      if (m)
        t.flags & 256 ? (jr(t), t.flags &= -257, t = Qc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (zr(), t.child = e.child, t.flags |= 128, t = null) : (zr(), c = l.fallback, N = t.mode, l = Yl(
          { mode: "visible", children: l.children },
          N
        ), c = fa(
          c,
          N,
          a,
          null
        ), c.flags |= 2, l.return = t, c.return = t, l.sibling = c, t.child = l, ci(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Yc(a), l.childLanes = Xc(
          e,
          C,
          a
        ), t.memoizedState = Vc, t = c);
      else if (jr(t), kf(N)) {
        if (C = N.nextSibling && N.nextSibling.dataset, C) var H = C.dgst;
        C = H, l = Error(s(419)), l.stack = "", l.digest = C, Wi({ value: l, source: null, stack: null }), t = Qc(
          e,
          t,
          a
        );
      } else if (Ot || es(e, t, a, !1), C = (a & e.childLanes) !== 0, Ot || C) {
        if (C = tt, C !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : ku(l), l = (l & (C.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== R.retryLane))
          throw R.retryLane = l, Wa(e, l), fn(C, e, l), mm;
        N.data === "$?" || mf(), t = Qc(
          e,
          t,
          a
        );
      } else
        N.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = R.treeContext, ct = Pn(
          N.nextSibling
        ), Zt = t, Ye = !0, pa = null, Gn = !1, e !== null && (Cn[wn++] = sr, Cn[wn++] = lr, Cn[wn++] = da, sr = e.id, lr = e.overflow, da = t), t = $c(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return c ? (zr(), c = l.fallback, N = t.mode, R = e.child, H = R.sibling, l = ir(R, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = R.subtreeFlags & 65011712, H !== null ? c = ir(H, c) : (c = fa(
      c,
      N,
      a,
      null
    ), c.flags |= 2), c.return = t, l.return = t, l.sibling = c, t.child = l, l = c, c = t.child, N = e.child.memoizedState, N === null ? N = Yc(a) : (R = N.cachePool, R !== null ? (H = xt._currentValue, R = R.parent !== H ? { parent: H, pool: H } : R) : R = cp(), N = {
      baseLanes: N.baseLanes | a,
      cachePool: R
    }), c.memoizedState = N, c.childLanes = Xc(
      e,
      C,
      a
    ), t.memoizedState = Vc, l) : (jr(t), a = e.child, e = a.sibling, a = ir(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (C = t.deletions, C === null ? (t.deletions = [e], t.flags |= 16) : C.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function $c(e, t) {
    return t = Yl(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Yl(e, t) {
    return e = sn(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Qc(e, t, a) {
    return ci(t, e.child, null, a), e = $c(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function wm(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), pc(e.return, t, a);
  }
  function Kc(e, t, a, l, c) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: c
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = a, m.tailMode = c);
  }
  function Am(e, t, a) {
    var l = t.pendingProps, c = l.revealOrder, m = l.tail;
    if (Mt(e, t, l.children, a), l = Ct.current, (l & 2) !== 0)
      l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && wm(e, a, t);
          else if (e.tag === 19)
            wm(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      l &= 1;
    }
    switch (se(Ct, l), c) {
      case "forwards":
        for (a = t.child, c = null; a !== null; )
          e = a.alternate, e !== null && Zl(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = t.child, t.child = null) : (c = a.sibling, a.sibling = null), Kc(
          t,
          !1,
          c,
          a,
          m
        );
        break;
      case "backwards":
        for (a = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Zl(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        Kc(
          t,
          !0,
          a,
          null,
          m
        );
        break;
      case "together":
        Kc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function dr(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Ur |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (es(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, a = ir(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ir(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Jc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Tl(e)));
  }
  function z2(e, t, a) {
    switch (t.tag) {
      case 3:
        ve(t, t.stateNode.containerInfo), Nr(t, xt, e.memoizedState.cache), Ji();
        break;
      case 27:
      case 5:
        P(t);
        break;
      case 4:
        ve(t, t.stateNode.containerInfo);
        break;
      case 10:
        Nr(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (jr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Cm(e, t, a) : (jr(t), e = dr(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        jr(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (es(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), c) {
          if (l)
            return Am(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(Ct, Ct.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, _m(e, t, a);
      case 24:
        Nr(t, xt, e.memoizedState.cache);
    }
    return dr(e, t, a);
  }
  function Tm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ot = !0;
      else {
        if (!Jc(e, a) && (t.flags & 128) === 0)
          return Ot = !1, z2(
            e,
            t,
            a
          );
        Ot = (e.flags & 131072) !== 0;
      }
    else
      Ot = !1, Ye && (t.flags & 1048576) !== 0 && rp(t, Al, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, c = l._init;
          if (l = c(l._payload), t.type = l, typeof l == "function")
            lc(l) ? (e = ba(l, e), t.tag = 1, t = Em(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = Gc(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (c = l.$$typeof, c === x) {
                t.tag = 11, t = gm(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              } else if (c === k) {
                t.tag = 14, t = vm(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = he(l) || l, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return Gc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, c = ba(
          l,
          t.pendingProps
        ), Em(
          e,
          t,
          l,
          c,
          a
        );
      case 3:
        e: {
          if (ve(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = t.pendingProps;
          var m = t.memoizedState;
          c = m.element, Sc(e, t), ls(t, l, null, a);
          var C = t.memoizedState;
          if (l = C.cache, Nr(t, xt, l), l !== m.cache && mc(
            t,
            [xt],
            a,
            !0
          ), ss(), l = C.element, m.isDehydrated)
            if (m = {
              element: l,
              isDehydrated: !1,
              cache: C.cache
            }, t.updateQueue.baseState = m, t.memoizedState = m, t.flags & 256) {
              t = xm(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== c) {
              c = En(
                Error(s(424)),
                t
              ), Wi(c), t = xm(
                e,
                t,
                l,
                a
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (ct = Pn(e.firstChild), Zt = t, Ye = !0, pa = null, Gn = !0, a = im(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ji(), l === c) {
              t = dr(
                e,
                t,
                a
              );
              break e;
            }
            Mt(
              e,
              t,
              l,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Vl(e, t), e === null ? (a = Mg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ye || (a = t.type, e = t.pendingProps, l = lo(
          Y.current
        ).createElement(a), l[Lt] = t, l[Yt] = e, Rt(l, a, e), Tt(l), t.stateNode = l) : t.memoizedState = Mg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return P(t), e === null && Ye && (l = t.stateNode = Og(
          t.type,
          t.pendingProps,
          Y.current
        ), Zt = t, Gn = !0, c = ct, Fr(t.type) ? (Rf = c, ct = Pn(
          l.firstChild
        )) : ct = c), Mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Vl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ye && ((c = l = ct) && (l = u_(
          l,
          t.type,
          t.pendingProps,
          Gn
        ), l !== null ? (t.stateNode = l, Zt = t, ct = Pn(
          l.firstChild
        ), Gn = !1, c = !0) : c = !1), c || ma(t)), P(t), c = t.type, m = t.pendingProps, C = e !== null ? e.memoizedProps : null, l = m.children, Nf(c, m) ? l = null : C !== null && Nf(c, C) && (t.flags |= 32), t.memoizedState !== null && (c = Tc(
          e,
          t,
          T2,
          null,
          null,
          a
        ), Ns._currentValue = c), Vl(e, t), Mt(e, t, l, a), t.child;
      case 6:
        return e === null && Ye && ((e = a = ct) && (a = c_(
          a,
          t.pendingProps,
          Gn
        ), a !== null ? (t.stateNode = a, Zt = t, ct = null, e = !0) : e = !1), e || ma(t)), null;
      case 13:
        return Cm(e, t, a);
      case 4:
        return ve(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ci(
          t,
          null,
          l,
          a
        ) : Mt(
          e,
          t,
          l,
          a
        ), t.child;
      case 11:
        return gm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Mt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Nr(t, t.type, l.value), Mt(
          e,
          t,
          l.children,
          a
        ), t.child;
      case 9:
        return c = t.type._context, l = t.pendingProps.children, va(t), c = Pt(c), l = l(c), t.flags |= 1, Mt(e, t, l, a), t.child;
      case 14:
        return vm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return ym(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Am(e, t, a);
      case 31:
        return l = t.pendingProps, a = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = Yl(
          l,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = ir(e.child, l), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return _m(e, t, a);
      case 24:
        return va(t), l = Pt(xt), e === null ? (c = yc(), c === null && (c = tt, m = gc(), c.pooledCache = m, m.refCount++, m !== null && (c.pooledCacheLanes |= a), c = m), t.memoizedState = {
          parent: l,
          cache: c
        }, bc(t), Nr(t, xt, c)) : ((e.lanes & a) !== 0 && (Sc(e, t), ls(t, null, null, a), ss()), c = e.memoizedState, m = t.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), Nr(t, xt, l)) : (l = m.cache, Nr(t, xt, l), l !== c.cache && mc(
          t,
          [xt],
          a,
          !0
        ))), Mt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function hr(e) {
    e.flags |= 4;
  }
  function Om(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Lg(t)) {
      if (t = An.current, t !== null && ((Fe & 4194048) === Fe ? Vn !== null : (Fe & 62914560) !== Fe && (Fe & 536870912) === 0 || t !== Vn))
        throw as = _c, fp;
      e.flags |= 8192;
    }
  }
  function Xl(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? sh() : 536870912, e.lanes |= t, pi |= t);
  }
  function ps(e, t) {
    if (!Ye)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function L2(e, t, a) {
    var l = t.pendingProps;
    switch (fc(t), t.tag) {
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
        return lt(t), null;
      case 1:
        return lt(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ur(xt), Ve(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ki(t) ? hr(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, sp())), lt(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (hr(t), a !== null ? (lt(t), Om(t, a)) : (lt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (hr(t), lt(t), Om(t, a)) : (lt(t), t.flags &= -16777217) : (e.memoizedProps !== l && hr(t), lt(t), t.flags &= -16777217), null;
      case 27:
        K(t), a = Y.current;
        var c = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && hr(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return lt(t), null;
          }
          e = le.current, Ki(t) ? ap(t) : (e = Og(c, l, a), t.stateNode = e, hr(t));
        }
        return lt(t), null;
      case 5:
        if (K(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && hr(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return lt(t), null;
          }
          if (e = le.current, Ki(t))
            ap(t);
          else {
            switch (c = lo(
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
            e[Lt] = t, e[Yt] = l;
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = e;
            e: switch (Rt(e, a, l), a) {
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
            e && hr(t);
          }
        }
        return lt(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && hr(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = Y.current, Ki(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, c = Zt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            e[Lt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Sg(e.nodeValue, a)), e || ma(t);
          } else
            e = lo(e).createTextNode(
              l
            ), e[Lt] = t, t.stateNode = e;
        }
        return lt(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Ki(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Lt] = t;
            } else
              Ji(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), c = !1;
          } else
            c = sp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (fr(t), t) : (fr(t), null);
        }
        if (fr(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = t.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var m = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (m = l.memoizedState.cachePool.pool), m !== c && (l.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Xl(t, t.updateQueue), lt(t), null;
      case 4:
        return Ve(), e === null && Cf(t.stateNode.containerInfo), lt(t), null;
      case 10:
        return ur(t.type), lt(t), null;
      case 19:
        if (ae(Ct), c = t.memoizedState, c === null) return lt(t), null;
        if (l = (t.flags & 128) !== 0, m = c.rendering, m === null)
          if (l) ps(c, !1);
          else {
            if (ft !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (m = Zl(e), m !== null) {
                  for (t.flags |= 128, ps(c, !1), e = m.updateQueue, t.updateQueue = e, Xl(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    np(a, e), a = a.sibling;
                  return se(
                    Ct,
                    Ct.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null && ht() > Kl && (t.flags |= 128, l = !0, ps(c, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Zl(m), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Xl(t, e), ps(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Ye)
                return lt(t), null;
            } else
              2 * ht() - c.renderingStartTime > Kl && a !== 536870912 && (t.flags |= 128, l = !0, ps(c, !1), t.lanes = 4194304);
          c.isBackwards ? (m.sibling = t.child, t.child = m) : (e = c.last, e !== null ? e.sibling = m : t.child = m, c.last = m);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = ht(), t.sibling = null, e = Ct.current, se(Ct, l ? e & 1 | 2 : e & 1), t) : (lt(t), null);
      case 22:
      case 23:
        return fr(t), wc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), a = t.updateQueue, a !== null && Xl(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && ae(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ur(xt), lt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function P2(e, t) {
    switch (fc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ur(xt), Ve(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return K(t), null;
      case 13:
        if (fr(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Ji();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ae(Ct), null;
      case 4:
        return Ve(), null;
      case 10:
        return ur(t.type), null;
      case 22:
      case 23:
        return fr(t), wc(), e !== null && ae(ya), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ur(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nm(e, t) {
    switch (fc(t), t.tag) {
      case 3:
        ur(xt), Ve();
        break;
      case 26:
      case 27:
      case 5:
        K(t);
        break;
      case 4:
        Ve();
        break;
      case 13:
        fr(t);
        break;
      case 19:
        ae(Ct);
        break;
      case 10:
        ur(t.type);
        break;
      case 22:
      case 23:
        fr(t), wc(), e !== null && ae(ya);
        break;
      case 24:
        ur(xt);
    }
  }
  function ms(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
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
      et(t, t.return, N);
    }
  }
  function Lr(e, t, a) {
    try {
      var l = t.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var m = c.next;
        l = m;
        do {
          if ((l.tag & e) === e) {
            var C = l.inst, N = C.destroy;
            if (N !== void 0) {
              C.destroy = void 0, c = t;
              var R = a, H = N;
              try {
                H();
              } catch (X) {
                et(
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
      et(t, t.return, X);
    }
  }
  function Dm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        vp(t, a);
      } catch (l) {
        et(e, e.return, l);
      }
    }
  }
  function Mm(e, t, a) {
    a.props = ba(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      et(e, t, l);
    }
  }
  function gs(e, t) {
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
      et(e, t, c);
    }
  }
  function Yn(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          et(e, t, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          et(e, t, c);
        }
      else a.current = null;
  }
  function km(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
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
      et(e, e.return, c);
    }
  }
  function Wc(e, t, a) {
    try {
      var l = e.stateNode;
      a_(l, e.type, a, t), l[Yt] = t;
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function Rm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fr(e.type) || e.tag === 4;
  }
  function ef(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function tf(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = so));
    else if (l !== 4 && (l === 27 && Fr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (tf(e, t, a), e = e.sibling; e !== null; )
        tf(e, t, a), e = e.sibling;
  }
  function $l(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Fr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for ($l(e, t, a), e = e.sibling; e !== null; )
        $l(e, t, a), e = e.sibling;
  }
  function jm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      Rt(t, l, a), t[Lt] = e, t[Yt] = a;
    } catch (m) {
      et(e, e.return, m);
    }
  }
  var pr = !1, gt = !1, nf = !1, zm = typeof WeakSet == "function" ? WeakSet : Set, Nt = null;
  function I2(e, t) {
    if (e = e.containerInfo, Tf = po, e = Vh(e), ec(e)) {
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
            var C = 0, N = -1, R = -1, H = 0, X = 0, W = e, Z = null;
            t: for (; ; ) {
              for (var F; W !== a || c !== 0 && W.nodeType !== 3 || (N = C + c), W !== m || l !== 0 && W.nodeType !== 3 || (R = C + l), W.nodeType === 3 && (C += W.nodeValue.length), (F = W.firstChild) !== null; )
                Z = W, W = F;
              for (; ; ) {
                if (W === e) break t;
                if (Z === a && ++H === c && (N = C), Z === m && ++X === l && (R = C), (F = W.nextSibling) !== null) break;
                W = Z, Z = W.parentNode;
              }
              W = F;
            }
            a = N === -1 || R === -1 ? null : { start: N, end: R };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Of = { focusedElem: e, selectionRange: a }, po = !1, Nt = t; Nt !== null; )
      if (t = Nt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Nt = e;
      else
        for (; Nt !== null; ) {
          switch (t = Nt, m = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && m !== null) {
                e = void 0, a = t, c = m.memoizedProps, m = m.memoizedState, l = a.stateNode;
                try {
                  var xe = ba(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    xe,
                    m
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (_e) {
                  et(
                    a,
                    a.return,
                    _e
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Mf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mf(e);
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
          if (e = t.sibling, e !== null) {
            e.return = t.return, Nt = e;
            break;
          }
          Nt = t.return;
        }
  }
  function Lm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, a), l & 4 && ms(5, a);
        break;
      case 1:
        if (Pr(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (C) {
              et(a, a.return, C);
            }
          else {
            var c = ba(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (C) {
              et(
                a,
                a.return,
                C
              );
            }
          }
        l & 64 && Dm(a), l & 512 && gs(a, a.return);
        break;
      case 3:
        if (Pr(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            vp(e, t);
          } catch (C) {
            et(a, a.return, C);
          }
        }
        break;
      case 27:
        t === null && l & 4 && jm(a);
      case 26:
      case 5:
        Pr(e, a), t === null && l & 4 && km(a), l & 512 && gs(a, a.return);
        break;
      case 12:
        Pr(e, a);
        break;
      case 13:
        Pr(e, a), l & 4 && Bm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Y2.bind(
          null,
          a
        ), f_(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || pr, !l) {
          t = t !== null && t.memoizedState !== null || gt, c = pr;
          var m = gt;
          pr = l, (gt = t) && !m ? Ir(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), pr = c, gt = m;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, a);
    }
  }
  function Pm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && zu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, Qt = !1;
  function mr(e, t, a) {
    for (a = a.child; a !== null; )
      Im(e, t, a), a = a.sibling;
  }
  function Im(e, t, a) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(tr, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        gt || Yn(a, t), mr(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        gt || Yn(a, t);
        var l = at, c = Qt;
        Fr(a.type) && (at = a.stateNode, Qt = !1), mr(
          e,
          t,
          a
        ), ws(a.stateNode), at = l, Qt = c;
        break;
      case 5:
        gt || Yn(a, t);
      case 6:
        if (l = at, c = Qt, at = null, mr(
          e,
          t,
          a
        ), at = l, Qt = c, at !== null)
          if (Qt)
            try {
              (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(a.stateNode);
            } catch (m) {
              et(
                a,
                t,
                m
              );
            }
          else
            try {
              at.removeChild(a.stateNode);
            } catch (m) {
              et(
                a,
                t,
                m
              );
            }
        break;
      case 18:
        at !== null && (Qt ? (e = at, Ag(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Rs(e)) : Ag(at, a.stateNode));
        break;
      case 4:
        l = at, c = Qt, at = a.stateNode.containerInfo, Qt = !0, mr(
          e,
          t,
          a
        ), at = l, Qt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        gt || Lr(2, a, t), gt || Lr(4, a, t), mr(
          e,
          t,
          a
        );
        break;
      case 1:
        gt || (Yn(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Mm(
          a,
          t,
          l
        )), mr(
          e,
          t,
          a
        );
        break;
      case 21:
        mr(
          e,
          t,
          a
        );
        break;
      case 22:
        gt = (l = gt) || a.memoizedState !== null, mr(
          e,
          t,
          a
        ), gt = l;
        break;
      default:
        mr(
          e,
          t,
          a
        );
    }
  }
  function Bm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Rs(e);
      } catch (a) {
        et(t, t.return, a);
      }
  }
  function B2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new zm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new zm()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function rf(e, t) {
    var a = B2(e);
    t.forEach(function(l) {
      var c = X2.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function ln(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], m = e, C = t, N = C;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 27:
              if (Fr(N.type)) {
                at = N.stateNode, Qt = !1;
                break e;
              }
              break;
            case 5:
              at = N.stateNode, Qt = !1;
              break e;
            case 3:
            case 4:
              at = N.stateNode.containerInfo, Qt = !0;
              break e;
          }
          N = N.return;
        }
        if (at === null) throw Error(s(160));
        Im(m, C, c), at = null, Qt = !1, m = c.alternate, m !== null && (m.return = null), c.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Um(t, e), t = t.sibling;
  }
  var Ln = null;
  function Um(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(t, e), on(e), l & 4 && (Lr(3, e, e.return), ms(3, e), Lr(5, e, e.return));
        break;
      case 1:
        ln(t, e), on(e), l & 512 && (gt || a === null || Yn(a, a.return)), l & 64 && pr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = Ln;
        if (ln(t, e), on(e), l & 512 && (gt || a === null || Yn(a, a.return)), l & 4) {
          var m = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      m = c.getElementsByTagName("title")[0], (!m || m[Ui] || m[Lt] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = c.createElement(l), c.head.insertBefore(
                        m,
                        c.querySelector("head > title")
                      )), Rt(m, l, a), m[Lt] = e, Tt(m), l = m;
                      break e;
                    case "link":
                      var C = jg(
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
                      m = c.createElement(l), Rt(m, l, a), c.head.appendChild(m);
                      break;
                    case "meta":
                      if (C = jg(
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
                      m = c.createElement(l), Rt(m, l, a), c.head.appendChild(m);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  m[Lt] = e, Tt(m), l = m;
                }
                e.stateNode = l;
              } else
                zg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Rg(
                c,
                l,
                e.memoizedProps
              );
          else
            m !== l ? (m === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : m.count--, l === null ? zg(
              c,
              e.type,
              e.stateNode
            ) : Rg(
              c,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Wc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        ln(t, e), on(e), l & 512 && (gt || a === null || Yn(a, a.return)), a !== null && l & 4 && Wc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (ln(t, e), on(e), l & 512 && (gt || a === null || Yn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Va(c, "");
          } catch (F) {
            et(e, e.return, F);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, Wc(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), l & 1024 && (nf = !0);
        break;
      case 6:
        if (ln(t, e), on(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (F) {
            et(e, e.return, F);
          }
        }
        break;
      case 3:
        if (co = null, c = Ln, Ln = oo(t.containerInfo), ln(t, e), Ln = c, on(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Rs(t.containerInfo);
          } catch (F) {
            et(e, e.return, F);
          }
        nf && (nf = !1, Hm(e));
        break;
      case 4:
        l = Ln, Ln = oo(
          e.stateNode.containerInfo
        ), ln(t, e), on(e), Ln = l;
        break;
      case 12:
        ln(t, e), on(e);
        break;
      case 13:
        ln(t, e), on(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (cf = ht()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, rf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = a !== null && a.memoizedState !== null, H = pr, X = gt;
        if (pr = H || c, gt = X || R, ln(t, e), gt = X, pr = H, on(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (a === null || R || pr || gt || Sa(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                R = a = t;
                try {
                  if (m = R.stateNode, c)
                    C = m.style, typeof C.setProperty == "function" ? C.setProperty("display", "none", "important") : C.display = "none";
                  else {
                    N = R.stateNode;
                    var W = R.memoizedProps.style, Z = W != null && W.hasOwnProperty("display") ? W.display : null;
                    N.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (F) {
                  et(R, R.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                R = t;
                try {
                  R.stateNode.nodeValue = c ? "" : R.memoizedProps;
                } catch (F) {
                  et(R, R.return, F);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, rf(e, a))));
        break;
      case 19:
        ln(t, e), on(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, rf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(t, e), on(e);
    }
  }
  function on(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Rm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, m = ef(e);
            $l(e, m, c);
            break;
          case 5:
            var C = a.stateNode;
            a.flags & 32 && (Va(C, ""), a.flags &= -33);
            var N = ef(e);
            $l(e, N, C);
            break;
          case 3:
          case 4:
            var R = a.stateNode.containerInfo, H = ef(e);
            tf(
              e,
              H,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (X) {
        et(e, e.return, X);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Hm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Lm(e, t.alternate, t), t = t.sibling;
  }
  function Sa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Lr(4, t, t.return), Sa(t);
          break;
        case 1:
          Yn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Mm(
            t,
            t.return,
            a
          ), Sa(t);
          break;
        case 27:
          ws(t.stateNode);
        case 26:
        case 5:
          Yn(t, t.return), Sa(t);
          break;
        case 22:
          t.memoizedState === null && Sa(t);
          break;
        case 30:
          Sa(t);
          break;
        default:
          Sa(t);
      }
      e = e.sibling;
    }
  }
  function Ir(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, c = e, m = t, C = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            c,
            m,
            a
          ), ms(4, m);
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
              et(l, l.return, H);
            }
          if (l = m, c = l.updateQueue, c !== null) {
            var N = l.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  gp(R[c], N);
            } catch (H) {
              et(l, l.return, H);
            }
          }
          a && C & 64 && Dm(m), gs(m, m.return);
          break;
        case 27:
          jm(m);
        case 26:
        case 5:
          Ir(
            c,
            m,
            a
          ), a && l === null && C & 4 && km(m), gs(m, m.return);
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
          ), a && C & 4 && Bm(c, m);
          break;
        case 22:
          m.memoizedState === null && Ir(
            c,
            m,
            a
          ), gs(m, m.return);
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
      t = t.sibling;
    }
  }
  function af(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && ts(a));
  }
  function sf(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ts(e));
  }
  function Xn(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        qm(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function qm(e, t, a, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xn(
          e,
          t,
          a,
          l
        ), c & 2048 && ms(9, t);
        break;
      case 1:
        Xn(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Xn(
          e,
          t,
          a,
          l
        ), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ts(e)));
        break;
      case 12:
        if (c & 2048) {
          Xn(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var m = t.memoizedProps, C = m.id, N = m.onPostCommit;
            typeof N == "function" && N(
              C,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (R) {
            et(t, t.return, R);
          }
        } else
          Xn(
            e,
            t,
            a,
            l
          );
        break;
      case 13:
        Xn(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        m = t.stateNode, C = t.alternate, t.memoizedState !== null ? m._visibility & 2 ? Xn(
          e,
          t,
          a,
          l
        ) : vs(e, t) : m._visibility & 2 ? Xn(
          e,
          t,
          a,
          l
        ) : (m._visibility |= 2, fi(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), c & 2048 && af(C, t);
        break;
      case 24:
        Xn(
          e,
          t,
          a,
          l
        ), c & 2048 && sf(t.alternate, t);
        break;
      default:
        Xn(
          e,
          t,
          a,
          l
        );
    }
  }
  function fi(e, t, a, l, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var m = e, C = t, N = a, R = l, H = C.flags;
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          fi(
            m,
            C,
            N,
            R,
            c
          ), ms(8, C);
          break;
        case 23:
          break;
        case 22:
          var X = C.stateNode;
          C.memoizedState !== null ? X._visibility & 2 ? fi(
            m,
            C,
            N,
            R,
            c
          ) : vs(
            m,
            C
          ) : (X._visibility |= 2, fi(
            m,
            C,
            N,
            R,
            c
          )), c && H & 2048 && af(
            C.alternate,
            C
          );
          break;
        case 24:
          fi(
            m,
            C,
            N,
            R,
            c
          ), c && H & 2048 && sf(C.alternate, C);
          break;
        default:
          fi(
            m,
            C,
            N,
            R,
            c
          );
      }
      t = t.sibling;
    }
  }
  function vs(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, c = l.flags;
        switch (l.tag) {
          case 22:
            vs(a, l), c & 2048 && af(
              l.alternate,
              l
            );
            break;
          case 24:
            vs(a, l), c & 2048 && sf(l.alternate, l);
            break;
          default:
            vs(a, l);
        }
        t = t.sibling;
      }
  }
  var ys = 8192;
  function di(e) {
    if (e.subtreeFlags & ys)
      for (e = e.child; e !== null; )
        Zm(e), e = e.sibling;
  }
  function Zm(e) {
    switch (e.tag) {
      case 26:
        di(e), e.flags & ys && e.memoizedState !== null && C_(
          Ln,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(e);
        break;
      case 3:
      case 4:
        var t = Ln;
        Ln = oo(e.stateNode.containerInfo), di(e), Ln = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = ys, ys = 16777216, di(e), ys = t) : di(e));
        break;
      default:
        di(e);
    }
  }
  function Fm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function _s(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          Nt = l, Vm(
            l,
            e
          );
        }
      Fm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Gm(e), e = e.sibling;
  }
  function Gm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _s(e), e.flags & 2048 && Lr(9, e, e.return);
        break;
      case 3:
        _s(e);
        break;
      case 12:
        _s(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ql(e)) : _s(e);
        break;
      default:
        _s(e);
    }
  }
  function Ql(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          Nt = l, Vm(
            l,
            e
          );
        }
      Fm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, t, t.return), Ql(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Ql(t));
          break;
        default:
          Ql(t);
      }
      e = e.sibling;
    }
  }
  function Vm(e, t) {
    for (; Nt !== null; ) {
      var a = Nt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ts(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Nt = l;
      else
        e: for (a = e; Nt !== null; ) {
          l = Nt;
          var c = l.sibling, m = l.return;
          if (Pm(l), l === a) {
            Nt = null;
            break e;
          }
          if (c !== null) {
            c.return = m, Nt = c;
            break e;
          }
          Nt = m;
        }
    }
  }
  var U2 = {
    getCacheForType: function(e) {
      var t = Pt(xt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, H2 = typeof WeakMap == "function" ? WeakMap : Map, Xe = 0, tt = null, Ie = null, Fe = 0, $e = 0, un = null, Br = !1, hi = !1, lf = !1, gr = 0, ft = 0, Ur = 0, Ea = 0, of = 0, Tn = 0, pi = 0, bs = null, Kt = null, uf = !1, cf = 0, Kl = 1 / 0, Jl = null, Hr = null, kt = 0, qr = null, mi = null, gi = 0, ff = 0, df = null, Ym = null, Ss = 0, hf = null;
  function cn() {
    if ((Xe & 2) !== 0 && Fe !== 0)
      return Fe & -Fe;
    if (U.T !== null) {
      var e = ri;
      return e !== 0 ? e : bf();
    }
    return uh();
  }
  function Xm() {
    Tn === 0 && (Tn = (Fe & 536870912) === 0 || Ye ? Ia() : 536870912);
    var e = An.current;
    return e !== null && (e.flags |= 32), Tn;
  }
  function fn(e, t, a) {
    (e === tt && ($e === 2 || $e === 9) || e.cancelPendingCommit !== null) && (vi(e, 0), Zr(
      e,
      Fe,
      Tn,
      !1
    )), Bi(e, a), ((Xe & 2) === 0 || e !== tt) && (e === tt && ((Xe & 2) === 0 && (Ea |= a), ft === 4 && Zr(
      e,
      Fe,
      Tn,
      !1
    )), $n(e));
  }
  function $m(e, t, a) {
    if ((Xe & 6) !== 0) throw Error(s(327));
    var l = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Vt(e, t), c = l ? F2(e, t) : gf(e, t, !0), m = l;
    do {
      if (c === 0) {
        hi && !l && Zr(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, m && !q2(a)) {
          c = gf(e, t, !1), m = !1;
          continue;
        }
        if (c === 2) {
          if (m = t, e.errorRecoveryDisabledLanes & m)
            var C = 0;
          else
            C = e.pendingLanes & -536870913, C = C !== 0 ? C : C & 536870912 ? 536870912 : 0;
          if (C !== 0) {
            t = C;
            e: {
              var N = e;
              c = bs;
              var R = N.current.memoizedState.isDehydrated;
              if (R && (vi(N, C).flags |= 256), C = gf(
                N,
                C,
                !1
              ), C !== 2) {
                if (lf && !R) {
                  N.errorRecoveryDisabledLanes |= m, Ea |= m, c = 4;
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
          vi(e, 0), Zr(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, m = c, m) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Zr(
                l,
                t,
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
          if ((t & 62914560) === t && (c = cf + 300 - ht(), 10 < c)) {
            if (Zr(
              l,
              t,
              Tn,
              !Br
            ), qt(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Cg(
              Qm.bind(
                null,
                l,
                a,
                Kt,
                Jl,
                uf,
                t,
                Tn,
                Ea,
                pi,
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
          Qm(
            l,
            a,
            Kt,
            Jl,
            uf,
            t,
            Tn,
            Ea,
            pi,
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
  function Qm(e, t, a, l, c, m, C, N, R, H, X, W, Z, F) {
    if (e.timeoutHandle = -1, W = t.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (Os = { stylesheets: null, count: 0, unsuspend: x_ }, Zm(t), W = w_(), W !== null)) {
      e.cancelPendingCommit = W(
        rg.bind(
          null,
          e,
          t,
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
    rg(
      e,
      t,
      m,
      a,
      l,
      c,
      C,
      N,
      R
    );
  }
  function q2(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var c = a[l], m = c.getSnapshot;
          c = c.value;
          try {
            if (!an(m(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Zr(e, t, a, l) {
    t &= ~of, t &= ~Ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var m = 31 - Ht(c), C = 1 << m;
      l[m] = -1, c &= ~C;
    }
    a !== 0 && lh(e, a, t);
  }
  function Wl() {
    return (Xe & 6) === 0 ? (Es(0), !1) : !0;
  }
  function pf() {
    if (Ie !== null) {
      if ($e === 0)
        var e = Ie.return;
      else
        e = Ie, or = ga = null, Dc(e), ui = null, ds = 0, e = Ie;
      for (; e !== null; )
        Nm(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function vi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, s_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), pf(), tt = e, Ie = a = ir(e.current, null), Fe = t, $e = 0, un = null, Br = !1, hi = Vt(e, t), lf = !1, pi = Tn = of = Ea = Ur = ft = 0, Kt = bs = null, uf = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var c = 31 - Ht(l), m = 1 << c;
        t |= e[c], l &= ~m;
      }
    return gr = t, Sl(), a;
  }
  function Km(e, t) {
    je = null, U.H = Ul, t === rs || t === Dl ? (t = pp(), $e = 3) : t === fp ? (t = pp(), $e = 4) : $e = t === mm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, un = t, Ie === null && (ft = 1, Gl(
      e,
      En(t, e.current)
    ));
  }
  function Jm() {
    var e = U.H;
    return U.H = Ul, e === null ? Ul : e;
  }
  function Wm() {
    var e = U.A;
    return U.A = U2, e;
  }
  function mf() {
    ft = 4, Br || (Fe & 4194048) !== Fe && An.current !== null || (hi = !0), (Ur & 134217727) === 0 && (Ea & 134217727) === 0 || tt === null || Zr(
      tt,
      Fe,
      Tn,
      !1
    );
  }
  function gf(e, t, a) {
    var l = Xe;
    Xe |= 2;
    var c = Jm(), m = Wm();
    (tt !== e || Fe !== t) && (Jl = null, vi(e, t)), t = !1;
    var C = ft;
    e: do
      try {
        if ($e !== 0 && Ie !== null) {
          var N = Ie, R = un;
          switch ($e) {
            case 8:
              pf(), C = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              An.current === null && (t = !0);
              var H = $e;
              if ($e = 0, un = null, yi(e, N, R, H), a && hi) {
                C = 0;
                break e;
              }
              break;
            default:
              H = $e, $e = 0, un = null, yi(e, N, R, H);
          }
        }
        Z2(), C = ft;
        break;
      } catch (X) {
        Km(e, X);
      }
    while (!0);
    return t && e.shellSuspendCounter++, or = ga = null, Xe = l, U.H = c, U.A = m, Ie === null && (tt = null, Fe = 0, Sl()), C;
  }
  function Z2() {
    for (; Ie !== null; ) eg(Ie);
  }
  function F2(e, t) {
    var a = Xe;
    Xe |= 2;
    var l = Jm(), c = Wm();
    tt !== e || Fe !== t ? (Jl = null, Kl = ht() + 500, vi(e, t)) : hi = Vt(
      e,
      t
    );
    e: do
      try {
        if ($e !== 0 && Ie !== null) {
          t = Ie;
          var m = un;
          t: switch ($e) {
            case 1:
              $e = 0, un = null, yi(e, t, m, 1);
              break;
            case 2:
            case 9:
              if (dp(m)) {
                $e = 0, un = null, tg(t);
                break;
              }
              t = function() {
                $e !== 2 && $e !== 9 || tt !== e || ($e = 7), $n(e);
              }, m.then(t, t);
              break e;
            case 3:
              $e = 7;
              break e;
            case 4:
              $e = 5;
              break e;
            case 7:
              dp(m) ? ($e = 0, un = null, tg(t)) : ($e = 0, un = null, yi(e, t, m, 7));
              break;
            case 5:
              var C = null;
              switch (Ie.tag) {
                case 26:
                  C = Ie.memoizedState;
                case 5:
                case 27:
                  var N = Ie;
                  if (!C || Lg(C)) {
                    $e = 0, un = null;
                    var R = N.sibling;
                    if (R !== null) Ie = R;
                    else {
                      var H = N.return;
                      H !== null ? (Ie = H, eo(H)) : Ie = null;
                    }
                    break t;
                  }
              }
              $e = 0, un = null, yi(e, t, m, 5);
              break;
            case 6:
              $e = 0, un = null, yi(e, t, m, 6);
              break;
            case 8:
              pf(), ft = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        G2();
        break;
      } catch (X) {
        Km(e, X);
      }
    while (!0);
    return or = ga = null, U.H = l, U.A = c, Xe = a, Ie !== null ? 0 : (tt = null, Fe = 0, Sl(), ft);
  }
  function G2() {
    for (; Ie !== null && !Pe(); )
      eg(Ie);
  }
  function eg(e) {
    var t = Tm(e.alternate, e, gr);
    e.memoizedProps = e.pendingProps, t === null ? eo(e) : Ie = t;
  }
  function tg(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Sm(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Fe
        );
        break;
      case 11:
        t = Sm(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Fe
        );
        break;
      case 5:
        Dc(t);
      default:
        Nm(a, t), t = Ie = np(t, gr), t = Tm(a, t, gr);
    }
    e.memoizedProps = e.pendingProps, t === null ? eo(e) : Ie = t;
  }
  function yi(e, t, a, l) {
    or = ga = null, Dc(t), ui = null, ds = 0;
    var c = t.return;
    try {
      if (j2(
        e,
        c,
        t,
        a,
        Fe
      )) {
        ft = 1, Gl(
          e,
          En(a, e.current)
        ), Ie = null;
        return;
      }
    } catch (m) {
      if (c !== null) throw Ie = c, m;
      ft = 1, Gl(
        e,
        En(a, e.current)
      ), Ie = null;
      return;
    }
    t.flags & 32768 ? (Ye || l === 1 ? e = !0 : hi || (Fe & 536870912) !== 0 ? e = !1 : (Br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = An.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ng(t, e)) : eo(t);
  }
  function eo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ng(
          t,
          Br
        );
        return;
      }
      e = t.return;
      var a = L2(
        t.alternate,
        t,
        gr
      );
      if (a !== null) {
        Ie = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ft === 0 && (ft = 5);
  }
  function ng(e, t) {
    do {
      var a = P2(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ie = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = a;
    } while (e !== null);
    ft = 6, Ie = null;
  }
  function rg(e, t, a, l, c, m, C, N, R) {
    e.cancelPendingCommit = null;
    do
      to();
    while (kt !== 0);
    if ((Xe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (m = t.lanes | t.childLanes, m |= ic, x1(
        e,
        a,
        m,
        C,
        N,
        R
      ), e === tt && (Ie = tt = null, Fe = 0), mi = t, qr = e, gi = a, ff = m, df = c, Ym = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $2(fe, function() {
        return og(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = U.T, U.T = null, c = re.p, re.p = 2, C = Xe, Xe |= 4;
        try {
          I2(e, t, a);
        } finally {
          Xe = C, re.p = c, U.T = l;
        }
      }
      kt = 1, ag(), ig(), sg();
    }
  }
  function ag() {
    if (kt === 1) {
      kt = 0;
      var e = qr, t = mi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var l = re.p;
        re.p = 2;
        var c = Xe;
        Xe |= 4;
        try {
          Um(t, e);
          var m = Of, C = Vh(e.containerInfo), N = m.focusedElem, R = m.selectionRange;
          if (C !== N && N && N.ownerDocument && Gh(
            N.ownerDocument.documentElement,
            N
          )) {
            if (R !== null && ec(N)) {
              var H = R.start, X = R.end;
              if (X === void 0 && (X = H), "selectionStart" in N)
                N.selectionStart = H, N.selectionEnd = Math.min(
                  X,
                  N.value.length
                );
              else {
                var W = N.ownerDocument || document, Z = W && W.defaultView || window;
                if (Z.getSelection) {
                  var F = Z.getSelection(), xe = N.textContent.length, _e = Math.min(R.start, xe), Je = R.end === void 0 ? _e : Math.min(R.end, xe);
                  !F.extend && _e > Je && (C = Je, Je = _e, _e = C);
                  var L = Fh(
                    N,
                    _e
                  ), z = Fh(
                    N,
                    Je
                  );
                  if (L && z && (F.rangeCount !== 1 || F.anchorNode !== L.node || F.anchorOffset !== L.offset || F.focusNode !== z.node || F.focusOffset !== z.offset)) {
                    var I = W.createRange();
                    I.setStart(L.node, L.offset), F.removeAllRanges(), _e > Je ? (F.addRange(I), F.extend(z.node, z.offset)) : (I.setEnd(z.node, z.offset), F.addRange(I));
                  }
                }
              }
            }
            for (W = [], F = N; F = F.parentNode; )
              F.nodeType === 1 && W.push({
                element: F,
                left: F.scrollLeft,
                top: F.scrollTop
              });
            for (typeof N.focus == "function" && N.focus(), N = 0; N < W.length; N++) {
              var Q = W[N];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          po = !!Tf, Of = Tf = null;
        } finally {
          Xe = c, re.p = l, U.T = a;
        }
      }
      e.current = t, kt = 2;
    }
  }
  function ig() {
    if (kt === 2) {
      kt = 0;
      var e = qr, t = mi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = U.T, U.T = null;
        var l = re.p;
        re.p = 2;
        var c = Xe;
        Xe |= 4;
        try {
          Lm(e, t.alternate, t);
        } finally {
          Xe = c, re.p = l, U.T = a;
        }
      }
      kt = 3;
    }
  }
  function sg() {
    if (kt === 4 || kt === 3) {
      kt = 0, Ue();
      var e = qr, t = mi, a = gi, l = Ym;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? kt = 5 : (kt = 0, mi = qr = null, lg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), Ru(a), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
        try {
          pt.onCommitFiberRoot(
            tr,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = U.T, c = re.p, re.p = 2, U.T = null;
        try {
          for (var m = e.onRecoverableError, C = 0; C < l.length; C++) {
            var N = l[C];
            m(N.value, {
              componentStack: N.stack
            });
          }
        } finally {
          U.T = t, re.p = c;
        }
      }
      (gi & 3) !== 0 && to(), $n(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === hf ? Ss++ : (Ss = 0, hf = e) : Ss = 0, Es(0);
    }
  }
  function lg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ts(t)));
  }
  function to(e) {
    return ag(), ig(), sg(), og();
  }
  function og() {
    if (kt !== 5) return !1;
    var e = qr, t = ff;
    ff = 0;
    var a = Ru(gi), l = U.T, c = re.p;
    try {
      re.p = 32 > a ? 32 : a, U.T = null, a = df, df = null;
      var m = qr, C = gi;
      if (kt = 0, mi = qr = null, gi = 0, (Xe & 6) !== 0) throw Error(s(331));
      var N = Xe;
      if (Xe |= 4, Gm(m.current), qm(
        m,
        m.current,
        C,
        a
      ), Xe = N, Es(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function")
        try {
          pt.onPostCommitFiberRoot(tr, m);
        } catch {
        }
      return !0;
    } finally {
      re.p = c, U.T = l, lg(e, t);
    }
  }
  function ug(e, t, a) {
    t = En(a, t), t = Fc(e.stateNode, t, 2), e = kr(e, t, 2), e !== null && (Bi(e, 2), $n(e));
  }
  function et(e, t, a) {
    if (e.tag === 3)
      ug(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ug(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Hr === null || !Hr.has(l))) {
            e = En(a, e), a = hm(2), l = kr(t, a, 2), l !== null && (pm(
              a,
              l,
              t,
              e
            ), Bi(l, 2), $n(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function vf(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new H2();
      var c = /* @__PURE__ */ new Set();
      l.set(t, c);
    } else
      c = l.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(t, c));
    c.has(a) || (lf = !0, c.add(a), e = V2.bind(null, e, t, a), t.then(e, e));
  }
  function V2(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, tt === e && (Fe & a) === a && (ft === 4 || ft === 3 && (Fe & 62914560) === Fe && 300 > ht() - cf ? (Xe & 2) === 0 && vi(e, 0) : of |= a, pi === Fe && (pi = 0)), $n(e);
  }
  function cg(e, t) {
    t === 0 && (t = sh()), e = Wa(e, t), e !== null && (Bi(e, t), $n(e));
  }
  function Y2(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), cg(e, a);
  }
  function X2(e, t) {
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
    l !== null && l.delete(t), cg(e, a);
  }
  function $2(e, t) {
    return Se(e, t);
  }
  var no = null, _i = null, yf = !1, ro = !1, _f = !1, xa = 0;
  function $n(e) {
    e !== _i && e.next === null && (_i === null ? no = _i = e : _i = _i.next = e), ro = !0, yf || (yf = !0, K2());
  }
  function Es(e, t) {
    if (!_f && ro) {
      _f = !0;
      do
        for (var a = !1, l = no; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var m = 0;
            else {
              var C = l.suspendedLanes, N = l.pingedLanes;
              m = (1 << 31 - Ht(42 | e) + 1) - 1, m &= c & ~(C & ~N), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (a = !0, pg(l, m));
          } else
            m = Fe, m = qt(
              l,
              l === tt ? m : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (m & 3) === 0 || Vt(l, m) || (a = !0, pg(l, m));
          l = l.next;
        }
      while (a);
      _f = !1;
    }
  }
  function Q2() {
    fg();
  }
  function fg() {
    ro = yf = !1;
    var e = 0;
    xa !== 0 && (i_() && (e = xa), xa = 0);
    for (var t = ht(), a = null, l = no; l !== null; ) {
      var c = l.next, m = dg(l, t);
      m === 0 ? (l.next = null, a === null ? no = c : a.next = c, c === null && (_i = a)) : (a = l, (e !== 0 || (m & 3) !== 0) && (ro = !0)), l = c;
    }
    Es(e);
  }
  function dg(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
      var C = 31 - Ht(m), N = 1 << C, R = c[C];
      R === -1 ? ((N & a) === 0 || (N & l) !== 0) && (c[C] = ul(N, t)) : R <= t && (e.expiredLanes |= N), m &= ~N;
    }
    if (t = tt, a = Fe, a = qt(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && ($e === 2 || $e === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && qe(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Vt(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && qe(l), Ru(a)) {
        case 2:
        case 8:
          a = ue;
          break;
        case 32:
          a = fe;
          break;
        case 268435456:
          a = Ne;
          break;
        default:
          a = fe;
      }
      return l = hg.bind(null, e), a = Se(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && qe(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function hg(e, t) {
    if (kt !== 0 && kt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (to() && e.callbackNode !== a)
      return null;
    var l = Fe;
    return l = qt(
      e,
      e === tt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : ($m(e, l, t), dg(e, ht()), e.callbackNode != null && e.callbackNode === a ? hg.bind(null, e) : null);
  }
  function pg(e, t) {
    if (to()) return null;
    $m(e, t, !0);
  }
  function K2() {
    l_(function() {
      (Xe & 6) !== 0 ? Se(
        rt,
        Q2
      ) : fg();
    });
  }
  function bf() {
    return xa === 0 && (xa = Ia()), xa;
  }
  function mg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pl("" + e);
  }
  function gg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function J2(e, t, a, l, c) {
    if (t === "submit" && a && a.stateNode === c) {
      var m = mg(
        (c[Yt] || null).action
      ), C = l.submitter;
      C && (t = (t = C[Yt] || null) ? mg(t.formAction) : C.getAttribute("formAction"), t !== null && (m = t, C = null));
      var N = new yl(
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
                if (xa !== 0) {
                  var R = C ? gg(c, C) : new FormData(c);
                  Bc(
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
                typeof m == "function" && (N.preventDefault(), R = C ? gg(c, C) : new FormData(c), Bc(
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
  for (var Sf = 0; Sf < ac.length; Sf++) {
    var Ef = ac[Sf], W2 = Ef.toLowerCase(), e_ = Ef[0].toUpperCase() + Ef.slice(1);
    zn(
      W2,
      "on" + e_
    );
  }
  zn($h, "onAnimationEnd"), zn(Qh, "onAnimationIteration"), zn(Kh, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(v2, "onTransitionRun"), zn(y2, "onTransitionStart"), zn(_2, "onTransitionCancel"), zn(Jh, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  var xs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), t_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xs)
  );
  function vg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], c = l.event;
      l = l.listeners;
      e: {
        var m = void 0;
        if (t)
          for (var C = l.length - 1; 0 <= C; C--) {
            var N = l[C], R = N.instance, H = N.currentTarget;
            if (N = N.listener, R !== m && c.isPropagationStopped())
              break e;
            m = N, c.currentTarget = H;
            try {
              m(c);
            } catch (X) {
              Fl(X);
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
              Fl(X);
            }
            c.currentTarget = null, m = R;
          }
      }
    }
  }
  function Be(e, t) {
    var a = t[ju];
    a === void 0 && (a = t[ju] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (yg(t, e, 2, !1), a.add(l));
  }
  function xf(e, t, a) {
    var l = 0;
    t && (l |= 4), yg(
      a,
      e,
      l,
      t
    );
  }
  var ao = "_reactListening" + Math.random().toString(36).slice(2);
  function Cf(e) {
    if (!e[ao]) {
      e[ao] = !0, fh.forEach(function(a) {
        a !== "selectionchange" && (t_.has(a) || xf(a, !1, e), xf(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ao] || (t[ao] = !0, xf("selectionchange", !1, t));
    }
  }
  function yg(e, t, a, l) {
    switch (qg(t)) {
      case 2:
        var c = O_;
        break;
      case 8:
        c = N_;
        break;
      default:
        c = If;
    }
    a = c.bind(
      null,
      t,
      a,
      e
    ), c = void 0, !Gu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, a, !0) : c !== void 0 ? e.addEventListener(t, a, {
      passive: c
    }) : e.addEventListener(t, a, !1);
  }
  function wf(e, t, a, l, c) {
    var m = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
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
            if (C = Ua(N), C === null) return;
            if (R = C.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              l = m = C;
              continue e;
            }
            N = N.parentNode;
          }
        }
        l = l.return;
      }
    wh(function() {
      var H = m, X = Zu(a), W = [];
      e: {
        var Z = Wh.get(e);
        if (Z !== void 0) {
          var F = yl, xe = e;
          switch (e) {
            case "keypress":
              if (gl(a) === 0) break e;
            case "keydown":
            case "keyup":
              F = $1;
              break;
            case "focusin":
              xe = "focus", F = $u;
              break;
            case "focusout":
              xe = "blur", F = $u;
              break;
            case "beforeblur":
            case "afterblur":
              F = $u;
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
              F = Oh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = P1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = J1;
              break;
            case $h:
            case Qh:
            case Kh:
              F = U1;
              break;
            case Jh:
              F = e2;
              break;
            case "scroll":
            case "scrollend":
              F = z1;
              break;
            case "wheel":
              F = n2;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = q1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Dh;
              break;
            case "toggle":
            case "beforetoggle":
              F = a2;
          }
          var _e = (t & 4) !== 0, Je = !_e && (e === "scroll" || e === "scrollend"), L = _e ? Z !== null ? Z + "Capture" : null : Z;
          _e = [];
          for (var z = H, I; z !== null; ) {
            var Q = z;
            if (I = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || I === null || L === null || (Q = qi(z, L), Q != null && _e.push(
              Cs(z, Q, I)
            )), Je) break;
            z = z.return;
          }
          0 < _e.length && (Z = new F(
            Z,
            xe,
            null,
            a,
            X
          ), W.push({ event: Z, listeners: _e }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", Z && a !== qu && (xe = a.relatedTarget || a.fromElement) && (Ua(xe) || xe[Ba]))
            break e;
          if ((F || Z) && (Z = X.window === X ? X : (Z = X.ownerDocument) ? Z.defaultView || Z.parentWindow : window, F ? (xe = a.relatedTarget || a.toElement, F = H, xe = xe ? Ua(xe) : null, xe !== null && (Je = u(xe), _e = xe.tag, xe !== Je || _e !== 5 && _e !== 27 && _e !== 6) && (xe = null)) : (F = null, xe = H), F !== xe)) {
            if (_e = Oh, Q = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (_e = Dh, Q = "onPointerLeave", L = "onPointerEnter", z = "pointer"), Je = F == null ? Z : Hi(F), I = xe == null ? Z : Hi(xe), Z = new _e(
              Q,
              z + "leave",
              F,
              a,
              X
            ), Z.target = Je, Z.relatedTarget = I, Q = null, Ua(X) === H && (_e = new _e(
              L,
              z + "enter",
              xe,
              a,
              X
            ), _e.target = I, _e.relatedTarget = Je, Q = _e), Je = Q, F && xe)
              t: {
                for (_e = F, L = xe, z = 0, I = _e; I; I = bi(I))
                  z++;
                for (I = 0, Q = L; Q; Q = bi(Q))
                  I++;
                for (; 0 < z - I; )
                  _e = bi(_e), z--;
                for (; 0 < I - z; )
                  L = bi(L), I--;
                for (; z--; ) {
                  if (_e === L || L !== null && _e === L.alternate)
                    break t;
                  _e = bi(_e), L = bi(L);
                }
                _e = null;
              }
            else _e = null;
            F !== null && _g(
              W,
              Z,
              F,
              _e,
              !1
            ), xe !== null && Je !== null && _g(
              W,
              Je,
              xe,
              _e,
              !0
            );
          }
        }
        e: {
          if (Z = H ? Hi(H) : window, F = Z.nodeName && Z.nodeName.toLowerCase(), F === "select" || F === "input" && Z.type === "file")
            var de = Ih;
          else if (Lh(Z))
            if (Bh)
              de = p2;
            else {
              de = d2;
              var Le = f2;
            }
          else
            F = Z.nodeName, !F || F.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? H && Hu(H.elementType) && (de = Ih) : de = h2;
          if (de && (de = de(e, H))) {
            Ph(
              W,
              de,
              a,
              X
            );
            break e;
          }
          Le && Le(e, Z, H), e === "focusout" && H && Z.type === "number" && H.memoizedProps.value != null && Uu(Z, "number", Z.value);
        }
        switch (Le = H ? Hi(H) : window, e) {
          case "focusin":
            (Lh(Le) || Le.contentEditable === "true") && (Qa = Le, tc = H, Qi = null);
            break;
          case "focusout":
            Qi = tc = Qa = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, Yh(W, a, X);
            break;
          case "selectionchange":
            if (g2) break;
          case "keydown":
          case "keyup":
            Yh(W, a, X);
        }
        var pe;
        if (Ku)
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
          $a ? jh(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Mh && a.locale !== "ko" && ($a || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && $a && (pe = Ah()) : (Or = X, Vu = "value" in Or ? Or.value : Or.textContent, $a = !0)), Le = io(H, Ee), 0 < Le.length && (Ee = new Nh(
          Ee,
          e,
          null,
          a,
          X
        ), W.push({ event: Ee, listeners: Le }), pe ? Ee.data = pe : (pe = zh(a), pe !== null && (Ee.data = pe)))), (pe = s2 ? l2(e, a) : o2(e, a)) && (Ee = io(H, "onBeforeInput"), 0 < Ee.length && (Le = new Nh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          X
        ), W.push({
          event: Le,
          listeners: Ee
        }), Le.data = pe)), J2(
          W,
          e,
          H,
          a,
          X
        );
      }
      vg(W, t);
    });
  }
  function Cs(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function io(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var c = e, m = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || m === null || (c = qi(e, a), c != null && l.unshift(
        Cs(e, c, m)
      ), c = qi(e, t), c != null && l.push(
        Cs(e, c, m)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function bi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _g(e, t, a, l, c) {
    for (var m = t._reactName, C = []; a !== null && a !== l; ) {
      var N = a, R = N.alternate, H = N.stateNode;
      if (N = N.tag, R !== null && R === l) break;
      N !== 5 && N !== 26 && N !== 27 || H === null || (R = H, c ? (H = qi(a, m), H != null && C.unshift(
        Cs(a, H, R)
      )) : c || (H = qi(a, m), H != null && C.push(
        Cs(a, H, R)
      ))), a = a.return;
    }
    C.length !== 0 && e.push({ event: t, listeners: C });
  }
  var n_ = /\r\n?/g, r_ = /\u0000|\uFFFD/g;
  function bg(e) {
    return (typeof e == "string" ? e : "" + e).replace(n_, `
`).replace(r_, "");
  }
  function Sg(e, t) {
    return t = bg(t), bg(e) === t;
  }
  function so() {
  }
  function Ke(e, t, a, l, c, m) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Va(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Va(e, "" + l);
        break;
      case "className":
        fl(e, "class", l);
        break;
      case "tabIndex":
        fl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fl(e, a, l);
        break;
      case "style":
        xh(e, l, m);
        break;
      case "data":
        if (t !== "object") {
          fl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = pl("" + l), e.setAttribute(a, l);
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
          typeof m == "function" && (a === "formAction" ? (t !== "input" && Ke(e, t, "name", c.name, c, null), Ke(
            e,
            t,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Ke(
            e,
            t,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Ke(
            e,
            t,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Ke(e, t, "encType", c.encType, c, null), Ke(e, t, "method", c.method, c, null), Ke(e, t, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = pl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = so);
        break;
      case "onScroll":
        l != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Be("scrollend", e);
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
        a = pl("" + l), e.setAttributeNS(
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
        Be("beforetoggle", e), Be("toggle", e), cl(e, "popover", l);
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
        cl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = R1.get(a) || a, cl(e, a, l));
    }
  }
  function Af(e, t, a, l, c, m) {
    switch (a) {
      case "style":
        xh(e, l, m);
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
        typeof l == "string" ? Va(e, l) : (typeof l == "number" || typeof l == "bigint") && Va(e, "" + l);
        break;
      case "onScroll":
        l != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Be("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = so);
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
        if (!dh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), t = a.slice(2, c ? a.length - 7 : void 0), m = e[Yt] || null, m = m != null ? m[a] : null, typeof m == "function" && e.removeEventListener(t, m, c), typeof l == "function")) {
              typeof m != "function" && m !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, c);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : cl(e, a, l);
          }
    }
  }
  function Rt(e, t, a) {
    switch (t) {
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
        Be("error", e), Be("load", e);
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
                  throw Error(s(137, t));
                default:
                  Ke(e, t, m, C, a, null);
              }
          }
        c && Ke(e, t, "srcSet", a.srcSet, a, null), l && Ke(e, t, "src", a.src, a, null);
        return;
      case "input":
        Be("invalid", e);
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
                    throw Error(s(137, t));
                  break;
                default:
                  Ke(e, t, l, X, a, null);
              }
          }
        _h(
          e,
          m,
          N,
          R,
          H,
          C,
          c,
          !1
        ), dl(e);
        return;
      case "select":
        Be("invalid", e), l = C = m = null;
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
                Ke(e, t, c, N, a, null);
            }
        t = m, a = C, e.multiple = !!l, t != null ? Ga(e, !!l, t, !1) : a != null && Ga(e, !!l, a, !0);
        return;
      case "textarea":
        Be("invalid", e), m = c = l = null;
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
                Ke(e, t, C, N, a, null);
            }
        Sh(e, l, c, m), dl(e);
        return;
      case "option":
        for (R in a)
          if (a.hasOwnProperty(R) && (l = a[R], l != null))
            switch (R) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ke(e, t, R, l, a, null);
            }
        return;
      case "dialog":
        Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
        break;
      case "iframe":
      case "object":
        Be("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < xs.length; l++)
          Be(xs[l], e);
        break;
      case "image":
        Be("error", e), Be("load", e);
        break;
      case "details":
        Be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", e), Be("load", e);
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
                throw Error(s(137, t));
              default:
                Ke(e, t, H, l, a, null);
            }
        return;
      default:
        if (Hu(t)) {
          for (X in a)
            a.hasOwnProperty(X) && (l = a[X], l !== void 0 && Af(
              e,
              t,
              X,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (N in a)
      a.hasOwnProperty(N) && (l = a[N], l != null && Ke(e, t, N, l, a, null));
  }
  function a_(e, t, a, l) {
    switch (t) {
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
          var W = a[F];
          if (a.hasOwnProperty(F) && W != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = W;
              default:
                l.hasOwnProperty(F) || Ke(e, t, F, null, l, W);
            }
        }
        for (var Z in l) {
          var F = l[Z];
          if (W = a[Z], l.hasOwnProperty(Z) && (F != null || W != null))
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
                  throw Error(s(137, t));
                break;
              default:
                F !== W && Ke(
                  e,
                  t,
                  Z,
                  F,
                  l,
                  W
                );
            }
        }
        Bu(
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
                l.hasOwnProperty(m) || Ke(
                  e,
                  t,
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
                m !== R && Ke(
                  e,
                  t,
                  c,
                  m,
                  l,
                  R
                );
            }
        t = N, a = C, l = F, Z != null ? Ga(e, !!a, Z, !1) : !!l != !!a && (t != null ? Ga(e, !!a, t, !0) : Ga(e, !!a, a ? [] : "", !1));
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
                Ke(e, t, N, null, l, c);
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
                c !== m && Ke(e, t, C, c, l, m);
            }
        bh(e, Z, F);
        return;
      case "option":
        for (var xe in a)
          if (Z = a[xe], a.hasOwnProperty(xe) && Z != null && !l.hasOwnProperty(xe))
            switch (xe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ke(
                  e,
                  t,
                  xe,
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
                Ke(
                  e,
                  t,
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
        for (var _e in a)
          Z = a[_e], a.hasOwnProperty(_e) && Z != null && !l.hasOwnProperty(_e) && Ke(e, t, _e, null, l, Z);
        for (H in l)
          if (Z = l[H], F = a[H], l.hasOwnProperty(H) && Z !== F && (Z != null || F != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, t));
                break;
              default:
                Ke(
                  e,
                  t,
                  H,
                  Z,
                  l,
                  F
                );
            }
        return;
      default:
        if (Hu(t)) {
          for (var Je in a)
            Z = a[Je], a.hasOwnProperty(Je) && Z !== void 0 && !l.hasOwnProperty(Je) && Af(
              e,
              t,
              Je,
              void 0,
              l,
              Z
            );
          for (X in l)
            Z = l[X], F = a[X], !l.hasOwnProperty(X) || Z === F || Z === void 0 && F === void 0 || Af(
              e,
              t,
              X,
              Z,
              l,
              F
            );
          return;
        }
    }
    for (var L in a)
      Z = a[L], a.hasOwnProperty(L) && Z != null && !l.hasOwnProperty(L) && Ke(e, t, L, null, l, Z);
    for (W in l)
      Z = l[W], F = a[W], !l.hasOwnProperty(W) || Z === F || Z == null && F == null || Ke(e, t, W, Z, l, F);
  }
  var Tf = null, Of = null;
  function lo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Eg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Nf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Df = null;
  function i_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Df ? !1 : (Df = e, !0) : (Df = null, !1);
  }
  var Cg = typeof setTimeout == "function" ? setTimeout : void 0, s_ = typeof clearTimeout == "function" ? clearTimeout : void 0, wg = typeof Promise == "function" ? Promise : void 0, l_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof wg < "u" ? function(e) {
    return wg.resolve(null).then(e).catch(o_);
  } : Cg;
  function o_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fr(e) {
    return e === "head";
  }
  function Ag(e, t) {
    var a = t, l = 0, c = 0;
    do {
      var m = a.nextSibling;
      if (e.removeChild(a), m && m.nodeType === 8)
        if (a = m.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var C = e.ownerDocument;
            if (a & 1 && ws(C.documentElement), a & 2 && ws(C.body), a & 4)
              for (a = C.head, ws(a), C = a.firstChild; C; ) {
                var N = C.nextSibling, R = C.nodeName;
                C[Ui] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && C.rel.toLowerCase() === "stylesheet" || a.removeChild(C), C = N;
              }
          }
          if (c === 0) {
            e.removeChild(m), Rs(t);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = m;
    } while (a);
    Rs(t);
  }
  function Mf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mf(a), zu(a);
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
  function u_(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ui])
          switch (t) {
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
      } else if (t === "input" && e.type === "hidden") {
        var m = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === m)
          return e;
      } else return e;
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function c_(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function kf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function f_(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Pn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Rf = null;
  function Tg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Og(e, t, a) {
    switch (t = lo(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function ws(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    zu(e);
  }
  var On = /* @__PURE__ */ new Map(), Ng = /* @__PURE__ */ new Set();
  function oo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vr = re.d;
  re.d = {
    f: d_,
    r: h_,
    D: p_,
    C: m_,
    L: g_,
    m: v_,
    X: __,
    S: y_,
    M: b_
  };
  function d_() {
    var e = vr.f(), t = Wl();
    return e || t;
  }
  function h_(e) {
    var t = Ha(e);
    t !== null && t.tag === 5 && t.type === "form" ? $p(t) : vr.r(e);
  }
  var Si = typeof document > "u" ? null : document;
  function Dg(e, t, a) {
    var l = Si;
    if (l && typeof t == "string" && t) {
      var c = Sn(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Ng.has(c) || (Ng.add(c), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(c) === null && (t = l.createElement("link"), Rt(t, "link", e), Tt(t), l.head.appendChild(t)));
    }
  }
  function p_(e) {
    vr.D(e), Dg("dns-prefetch", e, null);
  }
  function m_(e, t) {
    vr.C(e, t), Dg("preconnect", e, t);
  }
  function g_(e, t, a) {
    vr.L(e, t, a);
    var l = Si;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + Sn(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + Sn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + Sn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + Sn(e) + '"]';
      var m = c;
      switch (t) {
        case "style":
          m = Ei(e);
          break;
        case "script":
          m = xi(e);
      }
      On.has(m) || (e = y(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), On.set(m, e), l.querySelector(c) !== null || t === "style" && l.querySelector(As(m)) || t === "script" && l.querySelector(Ts(m)) || (t = l.createElement("link"), Rt(t, "link", e), Tt(t), l.head.appendChild(t)));
    }
  }
  function v_(e, t) {
    vr.m(e, t);
    var a = Si;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + Sn(l) + '"][href="' + Sn(e) + '"]', m = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = xi(e);
      }
      if (!On.has(m) && (e = y({ rel: "modulepreload", href: e }, t), On.set(m, e), a.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ts(m)))
              return;
        }
        l = a.createElement("link"), Rt(l, "link", e), Tt(l), a.head.appendChild(l);
      }
    }
  }
  function y_(e, t, a) {
    vr.S(e, t, a);
    var l = Si;
    if (l && e) {
      var c = qa(l).hoistableStyles, m = Ei(e);
      t = t || "default";
      var C = c.get(m);
      if (!C) {
        var N = { loading: 0, preload: null };
        if (C = l.querySelector(
          As(m)
        ))
          N.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = On.get(m)) && jf(e, a);
          var R = C = l.createElement("link");
          Tt(R), Rt(R, "link", e), R._p = new Promise(function(H, X) {
            R.onload = H, R.onerror = X;
          }), R.addEventListener("load", function() {
            N.loading |= 1;
          }), R.addEventListener("error", function() {
            N.loading |= 2;
          }), N.loading |= 4, uo(C, t, l);
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
  function __(e, t) {
    vr.X(e, t);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = xi(e), m = l.get(c);
      m || (m = a.querySelector(Ts(c)), m || (e = y({ src: e, async: !0 }, t), (t = On.get(c)) && zf(e, t), m = a.createElement("script"), Tt(m), Rt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function b_(e, t) {
    vr.M(e, t);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = xi(e), m = l.get(c);
      m || (m = a.querySelector(Ts(c)), m || (e = y({ src: e, async: !0, type: "module" }, t), (t = On.get(c)) && zf(e, t), m = a.createElement("script"), Tt(m), Rt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function Mg(e, t, a, l) {
    var c = (c = Y.current) ? oo(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ei(a.href), a = qa(
          c
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ei(a.href);
          var m = qa(
            c
          ).hoistableStyles, C = m.get(e);
          if (C || (c = c.ownerDocument || c, C = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(e, C), (m = c.querySelector(
            As(e)
          )) && !m._p && (C.instance = m, C.state.loading = 5), On.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, On.set(e, a), m || S_(
            c,
            e,
            a,
            C.state
          ))), t && l === null)
            throw Error(s(528, ""));
          return C;
        }
        if (t && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xi(a), a = qa(
          c
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Ei(e) {
    return 'href="' + Sn(e) + '"';
  }
  function As(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function kg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function S_(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Rt(t, "link", a), Tt(t), e.head.appendChild(t));
  }
  function xi(e) {
    return '[src="' + Sn(e) + '"]';
  }
  function Ts(e) {
    return "script[async]" + e;
  }
  function Rg(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Sn(a.href) + '"]'
          );
          if (l)
            return t.instance = l, Tt(l), l;
          var c = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Tt(l), Rt(l, "style", c), uo(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          c = Ei(a.href);
          var m = e.querySelector(
            As(c)
          );
          if (m)
            return t.state.loading |= 4, t.instance = m, Tt(m), m;
          l = kg(a), (c = On.get(c)) && jf(l, c), m = (e.ownerDocument || e).createElement("link"), Tt(m);
          var C = m;
          return C._p = new Promise(function(N, R) {
            C.onload = N, C.onerror = R;
          }), Rt(m, "link", l), t.state.loading |= 4, uo(m, a.precedence, e), t.instance = m;
        case "script":
          return m = xi(a.src), (c = e.querySelector(
            Ts(m)
          )) ? (t.instance = c, Tt(c), c) : (l = a, (c = On.get(m)) && (l = y({}, a), zf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Tt(c), Rt(c, "link", l), e.head.appendChild(c), t.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, uo(l, a.precedence, e));
    return t.instance;
  }
  function uo(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = l.length ? l[l.length - 1] : null, m = c, C = 0; C < l.length; C++) {
      var N = l[C];
      if (N.dataset.precedence === t) m = N;
      else if (m !== c) break;
    }
    m ? m.parentNode.insertBefore(e, m.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function jf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function zf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var co = null;
  function jg(e, t, a) {
    if (co === null) {
      var l = /* @__PURE__ */ new Map(), c = co = /* @__PURE__ */ new Map();
      c.set(a, l);
    } else
      c = co, l = c.get(a), l || (l = /* @__PURE__ */ new Map(), c.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var m = a[c];
      if (!(m[Ui] || m[Lt] || e === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var C = m.getAttribute(t) || "";
        C = e + C;
        var N = l.get(C);
        N ? N.push(m) : l.set(C, [m]);
      }
    }
    return l;
  }
  function zg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function E_(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Lg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Os = null;
  function x_() {
  }
  function C_(e, t, a) {
    if (Os === null) throw Error(s(475));
    var l = Os;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var c = Ei(a.href), m = e.querySelector(
          As(c)
        );
        if (m) {
          e = m._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = fo.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = m, Tt(m);
          return;
        }
        m = e.ownerDocument || e, a = kg(a), (c = On.get(c)) && jf(a, c), m = m.createElement("link"), Tt(m);
        var C = m;
        C._p = new Promise(function(N, R) {
          C.onload = N, C.onerror = R;
        }), Rt(m, "link", a), t.instance = m;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = fo.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function w_() {
    if (Os === null) throw Error(s(475));
    var e = Os;
    return e.stylesheets && e.count === 0 && Lf(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && Lf(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function fo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Lf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ho = null;
  function Lf(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ho = /* @__PURE__ */ new Map(), t.forEach(A_, e), ho = null, fo.call(e));
  }
  function A_(e, t) {
    if (!(t.state.loading & 4)) {
      var a = ho.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ho.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), m = 0; m < c.length; m++) {
          var C = c[m];
          (C.nodeName === "LINK" || C.getAttribute("media") !== "not all") && (a.set(C.dataset.precedence, C), l = C);
        }
        l && a.set(null, l);
      }
      c = t.instance, C = c.getAttribute("data-precedence"), m = a.get(C) || l, m === l && a.set(null, c), a.set(C, c), this.count++, l = fo.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), m ? m.parentNode.insertBefore(c, m.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ns = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function T_(e, t, a, l, c, m, C, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mu(0), this.hiddenUpdates = Mu(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = m, this.onRecoverableError = C, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Pg(e, t, a, l, c, m, C, N, R, H, X, W) {
    return e = new T_(
      e,
      t,
      a,
      C,
      N,
      R,
      H,
      W
    ), t = 1, m === !0 && (t |= 24), m = sn(3, null, null, t), e.current = m, m.stateNode = e, t = gc(), t.refCount++, e.pooledCache = t, t.refCount++, m.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, bc(m), e;
  }
  function Ig(e) {
    return e ? (e = ei, e) : ei;
  }
  function Bg(e, t, a, l, c, m) {
    c = Ig(c), l.context === null ? l.context = c : l.pendingContext = c, l = Mr(t), l.payload = { element: a }, m = m === void 0 ? null : m, m !== null && (l.callback = m), a = kr(e, l, t), a !== null && (fn(a, e, t), is(a, e, t));
  }
  function Ug(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Pf(e, t) {
    Ug(e, t), (e = e.alternate) && Ug(e, t);
  }
  function Hg(e) {
    if (e.tag === 13) {
      var t = Wa(e, 67108864);
      t !== null && fn(t, e, 67108864), Pf(e, 67108864);
    }
  }
  var po = !0;
  function O_(e, t, a, l) {
    var c = U.T;
    U.T = null;
    var m = re.p;
    try {
      re.p = 2, If(e, t, a, l);
    } finally {
      re.p = m, U.T = c;
    }
  }
  function N_(e, t, a, l) {
    var c = U.T;
    U.T = null;
    var m = re.p;
    try {
      re.p = 8, If(e, t, a, l);
    } finally {
      re.p = m, U.T = c;
    }
  }
  function If(e, t, a, l) {
    if (po) {
      var c = Bf(l);
      if (c === null)
        wf(
          e,
          t,
          l,
          mo,
          a
        ), Zg(e, l);
      else if (M_(
        c,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (Zg(e, l), t & 4 && -1 < D_.indexOf(e)) {
        for (; c !== null; ) {
          var m = Ha(c);
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
                    $n(m), (Xe & 6) === 0 && (Kl = ht() + 500, Es(0));
                  }
                }
                break;
              case 13:
                N = Wa(m, 2), N !== null && fn(N, m, 2), Wl(), Pf(m, 2);
            }
          if (m = Bf(l), m === null && wf(
            e,
            t,
            l,
            mo,
            a
          ), m === c) break;
          c = m;
        }
        c !== null && l.stopPropagation();
      } else
        wf(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Bf(e) {
    return e = Zu(e), Uf(e);
  }
  var mo = null;
  function Uf(e) {
    if (mo = null, e = Ua(e), e !== null) {
      var t = u(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return mo = e, null;
  }
  function qg(e) {
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
        switch (rn()) {
          case rt:
            return 2;
          case ue:
            return 8;
          case fe:
          case ke:
            return 32;
          case Ne:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hf = !1, Gr = null, Vr = null, Yr = null, Ds = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Xr = [], D_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Zg(e, t) {
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
        Ds.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ms.delete(t.pointerId);
    }
  }
  function ks(e, t, a, l, c, m) {
    return e === null || e.nativeEvent !== m ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: m,
      targetContainers: [c]
    }, t !== null && (t = Ha(t), t !== null && Hg(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function M_(e, t, a, l, c) {
    switch (t) {
      case "focusin":
        return Gr = ks(
          Gr,
          e,
          t,
          a,
          l,
          c
        ), !0;
      case "dragenter":
        return Vr = ks(
          Vr,
          e,
          t,
          a,
          l,
          c
        ), !0;
      case "mouseover":
        return Yr = ks(
          Yr,
          e,
          t,
          a,
          l,
          c
        ), !0;
      case "pointerover":
        var m = c.pointerId;
        return Ds.set(
          m,
          ks(
            Ds.get(m) || null,
            e,
            t,
            a,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return m = c.pointerId, Ms.set(
          m,
          ks(
            Ms.get(m) || null,
            e,
            t,
            a,
            l,
            c
          )
        ), !0;
    }
    return !1;
  }
  function Fg(e) {
    var t = Ua(e.target);
    if (t !== null) {
      var a = u(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, C1(e.priority, function() {
              if (a.tag === 13) {
                var l = cn();
                l = ku(l);
                var c = Wa(a, l);
                c !== null && fn(c, a, l), Pf(a, l);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function go(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Bf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        qu = l, a.target.dispatchEvent(l), qu = null;
      } else
        return t = Ha(a), t !== null && Hg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Gg(e, t, a) {
    go(e) && a.delete(t);
  }
  function k_() {
    Hf = !1, Gr !== null && go(Gr) && (Gr = null), Vr !== null && go(Vr) && (Vr = null), Yr !== null && go(Yr) && (Yr = null), Ds.forEach(Gg), Ms.forEach(Gg);
  }
  function vo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Hf || (Hf = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      k_
    )));
  }
  var yo = null;
  function Vg(e) {
    yo !== e && (yo = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        yo === e && (yo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], c = e[t + 2];
          if (typeof l != "function") {
            if (Uf(l || a) === null)
              continue;
            break;
          }
          var m = Ha(a);
          m !== null && (e.splice(t, 3), t -= 3, Bc(
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
  function Rs(e) {
    function t(R) {
      return vo(R, e);
    }
    Gr !== null && vo(Gr, e), Vr !== null && vo(Vr, e), Yr !== null && vo(Yr, e), Ds.forEach(t), Ms.forEach(t);
    for (var a = 0; a < Xr.length; a++) {
      var l = Xr[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Xr.length && (a = Xr[0], a.blockedOn === null); )
      Fg(a), a.blockedOn === null && Xr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], m = a[l + 1], C = c[Yt] || null;
        if (typeof m == "function")
          C || Vg(a);
        else if (C) {
          var N = null;
          if (m && m.hasAttribute("formAction")) {
            if (c = m, C = m[Yt] || null)
              N = C.formAction;
            else if (Uf(c) !== null) continue;
          } else N = C.action;
          typeof N == "function" ? a[l + 1] = N : (a.splice(l, 3), l -= 3), Vg(a);
        }
      }
  }
  function qf(e) {
    this._internalRoot = e;
  }
  _o.prototype.render = qf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var a = t.current, l = cn();
    Bg(a, l, e, t, null, null);
  }, _o.prototype.unmount = qf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bg(e.current, 2, null, e, null, null), Wl(), t[Ba] = null;
    }
  };
  function _o(e) {
    this._internalRoot = e;
  }
  _o.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = uh();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Xr.length && t !== 0 && t < Xr[a].priority; a++) ;
      Xr.splice(a, 0, e), a === 0 && Fg(e);
    }
  };
  var Yg = r.version;
  if (Yg !== "19.1.1")
    throw Error(
      s(
        527,
        Yg,
        "19.1.1"
      )
    );
  re.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var R_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bo.isDisabled && bo.supportsFiber)
      try {
        tr = bo.inject(
          R_
        ), pt = bo;
      } catch {
      }
  }
  return Ps.createRoot = function(e, t) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = um, m = cm, C = fm, N = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (m = t.onCaughtError), t.onRecoverableError !== void 0 && (C = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (N = t.unstable_transitionCallbacks)), t = Pg(
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
    ), e[Ba] = t.current, Cf(e), new qf(t);
  }, Ps.hydrateRoot = function(e, t, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", m = um, C = cm, N = fm, R = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (m = a.onUncaughtError), a.onCaughtError !== void 0 && (C = a.onCaughtError), a.onRecoverableError !== void 0 && (N = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (R = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), t = Pg(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      c,
      m,
      C,
      N,
      R,
      H
    ), t.context = Ig(null), a = t.current, l = cn(), l = ku(l), c = Mr(l), c.callback = null, kr(a, c, l), a = l, t.current.lanes = a, Bi(t, a), $n(t), e[Ba] = t.current, Cf(e), new _o(t);
  }, Ps.version = "19.1.1", Ps;
}
var ov;
function ub() {
  if (ov) return Vf.exports;
  ov = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Vf.exports = ob(), Vf.exports;
}
var cb = ub();
const uv = /* @__PURE__ */ Ky(cb);
var fb = Object.defineProperty, db = (n, r, i) => r in n ? fb(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, hb = (n, r, i) => db(n, r + "", i);
class Wy extends Error {
  constructor(r, i) {
    super(r), hb(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function pb(n, r) {
  const i = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(n)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const o = i.getRequestHeaders();
  delete o["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: o,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new Wy(u.statusText, u);
  await i.getCharacters();
}
async function mb(n, r) {
  var i;
  const s = SillyTavern.getContext();
  if (!n.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  n == null || delete n.json_data, (i = n?.data) == null || delete i.json_data;
  const o = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: o,
    body: JSON.stringify(n),
    cache: "no-cache"
  });
  if (!u.ok) {
    const f = await u.json().catch(() => ({ message: u.statusText }));
    throw new Wy(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var gb = Object.defineProperty, vb = (n, r, i) => r in n ? gb(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, cv = (n, r, i) => vb(n, typeof r != "symbol" ? r + "" : r, i);
class e0 {
  constructor(r, i) {
    cv(this, "settingsKey"), cv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
    const { strategy: i = "recursive" } = r, s = this.defaultSettings.version, o = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
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
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const p = {
      ...f,
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
        let b = !1;
        for (const _ of Object.keys(y))
          g[_] === void 0 ? (g[_] = y[_], b = !0) : typeof y[_] == "object" && y[_] !== null && (g[_] = g[_] || {}, h(g[_], y[_]) && (b = !0));
        return b;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let h = structuredClone(u), g = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let b = i.find((_) => _.from === g);
          if (b && b.to > g)
            h = await b.action(h), g = b.to, h.formatVersion = b.to, y = !0;
          else
            for (const _ of i)
              if (_.from === "*" && _.to > g && g !== _.to) {
                h = await _.action(h), g = _.to, h.formatVersion = _.to, y = !0;
                break;
              }
        } while (y);
        if (g !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const b = this.defaultSettings.version;
          b && (h.version = b);
        }
        if (p.formatVersion.changed) {
          for (const b of Object.keys(u))
            delete u[b];
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
function Cr(n) {
  return Array.isArray ? Array.isArray(n) : r0(n) === "[object Array]";
}
function yb(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function _b(n) {
  return n == null ? "" : yb(n);
}
function Jn(n) {
  return typeof n == "string";
}
function t0(n) {
  return typeof n == "number";
}
function bb(n) {
  return n === !0 || n === !1 || Sb(n) && r0(n) == "[object Boolean]";
}
function n0(n) {
  return typeof n == "object";
}
function Sb(n) {
  return n0(n) && n !== null;
}
function mn(n) {
  return n != null;
}
function Qf(n) {
  return !n.trim().length;
}
function r0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const Eb = "Incorrect 'index' type", xb = (n) => `Invalid value for key ${n}`, Cb = (n) => `Pattern length exceeds max of ${n}.`, wb = (n) => `Missing ${n} property in key`, Ab = (n) => `Property 'weight' in key '${n}' must be a positive integer`, fv = Object.prototype.hasOwnProperty;
class Tb {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = a0(s);
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
function a0(n) {
  let r = null, i = null, s = null, o = 1, u = null;
  if (Jn(n) || Cr(n))
    s = n, r = dv(n), i = bd(n);
  else {
    if (!fv.call(n, "name"))
      throw new Error(wb("name"));
    const f = n.name;
    if (s = f, fv.call(n, "weight") && (o = n.weight, o <= 0))
      throw new Error(Ab(f));
    r = dv(f), i = bd(f), u = n.getFn;
  }
  return { path: r, id: i, weight: o, src: s, getFn: u };
}
function dv(n) {
  return Cr(n) ? n : n.split(".");
}
function bd(n) {
  return Cr(n) ? n.join(".") : n;
}
function Ob(n, r) {
  let i = [], s = !1;
  const o = (u, f, p) => {
    if (mn(u))
      if (!f[p])
        i.push(u);
      else {
        let h = f[p];
        const g = u[h];
        if (!mn(g))
          return;
        if (p === f.length - 1 && (Jn(g) || t0(g) || bb(g)))
          i.push(_b(g));
        else if (Cr(g)) {
          s = !0;
          for (let y = 0, b = g.length; y < b; y += 1)
            o(g[y], f, p + 1);
        } else f.length && o(g, f, p + 1);
      }
  };
  return o(n, Jn(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const Nb = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, Db = {
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
  sortFn: (n, r) => n.score === r.score ? n.idx < r.idx ? -1 : 1 : n.score < r.score ? -1 : 1
}, Mb = {
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
}, kb = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: Ob,
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
var Ae = {
  ...Db,
  ...Nb,
  ...Mb,
  ...kb
};
const Rb = /[^ ]+/g;
function jb(n = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(Rb).length;
      if (i.has(u))
        return i.get(u);
      const f = 1 / Math.pow(u, 0.5 * n), p = parseFloat(Math.round(f * s) / s);
      return i.set(u, p), p;
    },
    clear() {
      i.clear();
    }
  };
}
class Fd {
  constructor({
    getFn: r = Ae.getFn,
    fieldNormWeight: i = Ae.fieldNormWeight
  } = {}) {
    this.norm = jb(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!mn(r) || Qf(r))
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
      let f = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (mn(f)) {
        if (Cr(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: g, value: y } = h.pop();
            if (mn(y))
              if (Jn(y) && !Qf(y)) {
                let b = {
                  v: y,
                  i: g,
                  n: this.norm.get(y)
                };
                p.push(b);
              } else Cr(y) && y.forEach((b, _) => {
                h.push({
                  nestedArrIndex: _,
                  value: b
                });
              });
          }
          s.$[u] = p;
        } else if (Jn(f) && !Qf(f)) {
          let p = {
            v: f,
            n: this.norm.get(f)
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
function i0(n, r, { getFn: i = Ae.getFn, fieldNormWeight: s = Ae.fieldNormWeight } = {}) {
  const o = new Fd({ getFn: i, fieldNormWeight: s });
  return o.setKeys(n.map(a0)), o.setSources(r), o.create(), o;
}
function zb(n, { getFn: r = Ae.getFn, fieldNormWeight: i = Ae.fieldNormWeight } = {}) {
  const { keys: s, records: o } = n, u = new Fd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function So(n, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = Ae.distance,
  ignoreLocation: u = Ae.ignoreLocation
} = {}) {
  const f = r / n.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return o ? f + p / o : p ? 1 : f;
}
function Lb(n = [], r = Ae.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let f = n.length; u < f; u += 1) {
    let p = n[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return n[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Da = 32;
function Pb(n, r, i, {
  location: s = Ae.location,
  distance: o = Ae.distance,
  threshold: u = Ae.threshold,
  findAllMatches: f = Ae.findAllMatches,
  minMatchCharLength: p = Ae.minMatchCharLength,
  includeMatches: h = Ae.includeMatches,
  ignoreLocation: g = Ae.ignoreLocation
} = {}) {
  if (r.length > Da)
    throw new Error(Cb(Da));
  const y = r.length, b = n.length, _ = Math.max(0, Math.min(s, b));
  let v = u, d = _;
  const S = p > 1 || h, E = S ? Array(b) : [];
  let O;
  for (; (O = n.indexOf(r, d)) > -1; ) {
    let k = So(r, {
      currentLocation: O,
      expectedLocation: _,
      distance: o,
      ignoreLocation: g
    });
    if (v = Math.min(k, v), d = O + y, S) {
      let q = 0;
      for (; q < y; )
        E[O + q] = 1, q += 1;
    }
  }
  d = -1;
  let w = [], D = 1, x = y + b;
  const T = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let q = 0, G = x;
    for (; q < G; )
      So(r, {
        errors: k,
        currentLocation: _ + G,
        expectedLocation: _,
        distance: o,
        ignoreLocation: g
      }) <= v ? q = G : x = G, G = Math.floor((x - q) / 2 + q);
    x = G;
    let B = Math.max(1, _ - G + 1), V = f ? b : Math.min(_ + G, b) + y, $ = Array(V + 2);
    $[V + 1] = (1 << k) - 1;
    for (let he = V; he >= B; he -= 1) {
      let me = he - 1, U = i[n.charAt(me)];
      if (S && (E[me] = +!!U), $[he] = ($[he + 1] << 1 | 1) & U, k && ($[he] |= (w[he + 1] | w[he]) << 1 | 1 | w[he + 1]), $[he] & T && (D = So(r, {
        errors: k,
        currentLocation: me,
        expectedLocation: _,
        distance: o,
        ignoreLocation: g
      }), D <= v)) {
        if (v = D, d = me, d <= _)
          break;
        B = Math.max(1, 2 * _ - d);
      }
    }
    if (So(r, {
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
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (S) {
    const k = Lb(E, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function Ib(n) {
  let r = {};
  for (let i = 0, s = n.length; i < s; i += 1) {
    const o = n.charAt(i);
    r[o] = (r[o] || 0) | 1 << s - i - 1;
  }
  return r;
}
const du = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class s0 {
  constructor(r, {
    location: i = Ae.location,
    threshold: s = Ae.threshold,
    distance: o = Ae.distance,
    includeMatches: u = Ae.includeMatches,
    findAllMatches: f = Ae.findAllMatches,
    minMatchCharLength: p = Ae.minMatchCharLength,
    isCaseSensitive: h = Ae.isCaseSensitive,
    ignoreDiacritics: g = Ae.ignoreDiacritics,
    ignoreLocation: y = Ae.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: y
    }, r = h ? r : r.toLowerCase(), r = g ? du(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const b = (v, d) => {
      this.chunks.push({
        pattern: v,
        alphabet: Ib(v),
        startIndex: d
      });
    }, _ = this.pattern.length;
    if (_ > Da) {
      let v = 0;
      const d = _ % Da, S = _ - d;
      for (; v < S; )
        b(this.pattern.substr(v, Da), v), v += Da;
      if (d) {
        const E = _ - Da;
        b(this.pattern.substr(E), E);
      }
    } else
      b(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? du(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return o && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: u,
      distance: f,
      threshold: p,
      findAllMatches: h,
      minMatchCharLength: g,
      ignoreLocation: y
    } = this.options;
    let b = [], _ = 0, v = !1;
    this.chunks.forEach(({ pattern: S, alphabet: E, startIndex: O }) => {
      const { isMatch: w, score: D, indices: x } = Pb(r, S, E, {
        location: u + O,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: g,
        includeMatches: o,
        ignoreLocation: y
      });
      w && (v = !0), _ += D, w && x && (b = [...b, ...x]);
    });
    let d = {
      isMatch: v,
      score: v ? _ / this.chunks.length : 1
    };
    return v && o && (d.indices = b), d;
  }
}
class na {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return hv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return hv(r, this.singleRegex);
  }
  search() {
  }
}
function hv(n, r) {
  const i = n.match(r);
  return i ? i[1] : null;
}
class Bb extends na {
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
class Ub extends na {
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
class Hb extends na {
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
class qb extends na {
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
class Zb extends na {
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
class Fb extends na {
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
class l0 extends na {
  constructor(r, {
    location: i = Ae.location,
    threshold: s = Ae.threshold,
    distance: o = Ae.distance,
    includeMatches: u = Ae.includeMatches,
    findAllMatches: f = Ae.findAllMatches,
    minMatchCharLength: p = Ae.minMatchCharLength,
    isCaseSensitive: h = Ae.isCaseSensitive,
    ignoreDiacritics: g = Ae.ignoreDiacritics,
    ignoreLocation: y = Ae.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new s0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
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
class o0 extends na {
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
    const f = !!o.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: o
    };
  }
}
const Sd = [
  Bb,
  o0,
  Hb,
  qb,
  Fb,
  Zb,
  Ub,
  l0
], pv = Sd.length, Gb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Vb = "|";
function Yb(n, r = {}) {
  return n.split(Vb).map((i) => {
    let s = i.trim().split(Gb).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, g = -1;
      for (; !h && ++g < pv; ) {
        const y = Sd[g];
        let b = y.isMultiMatch(p);
        b && (o.push(new y(b, r)), h = !0);
      }
      if (!h)
        for (g = -1; ++g < pv; ) {
          const y = Sd[g];
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
const Xb = /* @__PURE__ */ new Set([l0.type, o0.type]);
class $b {
  constructor(r, {
    isCaseSensitive: i = Ae.isCaseSensitive,
    ignoreDiacritics: s = Ae.ignoreDiacritics,
    includeMatches: o = Ae.includeMatches,
    minMatchCharLength: u = Ae.minMatchCharLength,
    ignoreLocation: f = Ae.ignoreLocation,
    findAllMatches: p = Ae.findAllMatches,
    location: h = Ae.location,
    threshold: g = Ae.threshold,
    distance: y = Ae.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: g,
      distance: y
    }, r = i ? r : r.toLowerCase(), r = s ? du(r) : r, this.pattern = r, this.query = Yb(this.pattern, this.options);
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
    r = o ? r : r.toLowerCase(), r = u ? du(r) : r;
    let f = 0, p = [], h = 0;
    for (let g = 0, y = i.length; g < y; g += 1) {
      const b = i[g];
      p.length = 0, f = 0;
      for (let _ = 0, v = b.length; _ < v; _ += 1) {
        const d = b[_], { isMatch: S, indices: E, score: O } = d.search(r);
        if (S) {
          if (f += 1, h += O, s) {
            const w = d.constructor.type;
            Xb.has(w) ? p = [...p, ...E] : p.push(E);
          }
        } else {
          h = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let _ = {
          isMatch: !0,
          score: h / f
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
const Ed = [];
function Qb(...n) {
  Ed.push(...n);
}
function xd(n, r) {
  for (let i = 0, s = Ed.length; i < s; i += 1) {
    let o = Ed[i];
    if (o.condition(n, r))
      return new o(n, r);
  }
  return new s0(n, r);
}
const hu = {
  AND: "$and",
  OR: "$or"
}, Cd = {
  PATH: "$path",
  PATTERN: "$val"
}, wd = (n) => !!(n[hu.AND] || n[hu.OR]), Kb = (n) => !!n[Cd.PATH], Jb = (n) => !Cr(n) && n0(n) && !wd(n), mv = (n) => ({
  [hu.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function u0(n, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const f = Kb(o);
    if (!f && u.length > 1 && !wd(o))
      return s(mv(o));
    if (Jb(o)) {
      const h = f ? o[Cd.PATH] : u[0], g = f ? o[Cd.PATTERN] : o[h];
      if (!Jn(g))
        throw new Error(xb(h));
      const y = {
        keyId: bd(h),
        pattern: g
      };
      return i && (y.searcher = xd(g, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const g = o[h];
      Cr(g) && g.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return wd(n) || (n = mv(n)), s(n);
}
function Wb(n, { ignoreFieldNorm: r = Ae.ignoreFieldNorm }) {
  n.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: o, norm: u, score: f }) => {
      const p = o ? o.weight : null;
      s *= Math.pow(
        f === 0 && p ? Number.EPSILON : f,
        (p || 1) * (r ? 1 : u)
      );
    }), i.score = s;
  });
}
function eS(n, r) {
  const i = n.matches;
  r.matches = [], mn(i) && i.forEach((s) => {
    if (!mn(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: u } = s;
    let f = {
      indices: o,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function tS(n, r) {
  r.score = n.score;
}
function nS(n, r, {
  includeMatches: i = Ae.includeMatches,
  includeScore: s = Ae.includeScore
} = {}) {
  const o = [];
  return i && o.push(eS), s && o.push(tS), n.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return o.length && o.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Ii {
  constructor(r, i = {}, s) {
    this.options = { ...Ae, ...i }, this.options.useExtendedSearch, this._keyStore = new Tb(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Fd))
      throw new Error(Eb);
    this._myIndex = i || i0(this.options.keys, this._docs, {
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
      sortFn: f,
      ignoreFieldNorm: p
    } = this.options;
    let h = Jn(r) ? Jn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return Wb(h, { ignoreFieldNorm: p }), u && h.sort(f), t0(i) && i > -1 && (h = h.slice(0, i)), nS(h, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = xd(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!mn(u))
        return;
      const { isMatch: h, score: g, indices: y } = i.searchIn(u);
      h && o.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: p, indices: y }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = u0(r, this.options), s = (p, h, g) => {
      if (!p.children) {
        const { keyId: b, searcher: _ } = p, v = this._findMatches({
          key: this._keyStore.get(b),
          value: this._myIndex.getValueForItemAtKeyId(h, b),
          searcher: _
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
      for (let b = 0, _ = p.children.length; b < _; b += 1) {
        const v = p.children[b], d = s(v, h, g);
        if (d.length)
          y.push(...d);
        else if (p.operator === hu.AND)
          return [];
      }
      return y;
    }, o = this._myIndex.records, u = {}, f = [];
    return o.forEach(({ $: p, i: h }) => {
      if (mn(p)) {
        let g = s(i, p, h);
        g.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), g.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = xd(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: f, i: p }) => {
      if (!mn(f))
        return;
      let h = [];
      s.forEach((g, y) => {
        h.push(
          ...this._findMatches({
            key: g,
            value: f[y],
            searcher: i
          })
        );
      }), h.length && u.push({
        idx: p,
        item: f,
        matches: h
      });
    }), u;
  }
  _findMatches({ key: r, value: i, searcher: s }) {
    if (!mn(i))
      return [];
    let o = [];
    if (Cr(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!mn(u))
          return;
        const { isMatch: h, score: g, indices: y } = s.searchIn(u);
        h && o.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: y
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: h, indices: g } = s.searchIn(u);
      p && o.push({ score: h, key: r, value: u, norm: f, indices: g });
    }
    return o;
  }
}
Ii.version = "7.1.0";
Ii.createIndex = i0;
Ii.parseIndex = zb;
Ii.config = Ae;
Ii.parseQuery = u0;
Qb($b);
var rS = Object.defineProperty, aS = (n, r, i) => r in n ? rS(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, iS = (n, r, i) => aS(n, r + "", i);
let sS = class {
  constructor() {
    iS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
    const o = SillyTavern.getContext(), u = o.uuidv4(), f = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: i?.abortController,
      isStream: f,
      options: i
    }), f)
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
async function lS(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function Oe(n, r, { escapeHtml: i = !0 } = {}) {
  await lS("echo", { severity: n, escapeHtml: (!!i).toString() }, r);
}
function Kf(n) {
  return I_(n);
}
function gv(n, r) {
  return L_(n, r);
}
function Eo(n, r, i) {
  return P_(n, r, i);
}
function oS(n, r, i) {
  return F_(n, r, i);
}
function uS(n, r) {
  return G_(n, r);
}
function cS(n, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return z_(n, { customStoryString: r, customInstructSettings: i });
}
function wa(n) {
  return K_(n);
}
function fS() {
  return {
    prompt: js[zs.prompt],
    interval: js[zs.interval],
    position: js[zs.position],
    depth: js[zs.depth],
    role: js[zs.role]
  };
}
function dS(n, r) {
  return W_(n, r);
}
function hS({
  name2: n,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: o,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: h,
  quietImage: g,
  extensionPrompts: y,
  cyclePrompt: b,
  systemPromptOverride: _,
  jailbreakPromptOverride: v,
  personaDescription: d,
  messages: S,
  messageExamples: E
}, O) {
  return J_(
    {
      name2: n,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: o,
      worldInfoAfter: u,
      bias: f,
      type: p,
      quietPrompt: h,
      quietImage: g,
      cyclePrompt: b,
      systemPromptOverride: _,
      jailbreakPromptOverride: v,
      personaDescription: d,
      extensionPrompts: y,
      messages: S,
      messageExamples: E
    },
    O
  );
}
function pS(n) {
  return Y_(n);
}
function mS(n) {
  return X_(n);
}
function gS(n, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: f
}) {
  return eb(n, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: u, depth: f });
}
async function vS(n, r) {
  return await V_(n, r);
}
function vv(n, {
  wiFormat: r
} = {}) {
  return $_(n, { wiFormat: r });
}
function Is(n) {
  return Q_(n);
}
function yS(n, r) {
  return H_(n, r);
}
class _S {
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
var bS = Object.defineProperty, SS = (n, r, i) => r in n ? bS(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, xo = (n, r, i) => SS(n, typeof r != "symbol" ? r + "" : r, i);
class ES {
  constructor(r) {
    xo(this, "messages", []), xo(this, "tokenizer"), xo(this, "maxContext"), xo(this, "currentTokenCount", 0), this.tokenizer = new _S(), this.maxContext = r;
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
    const f = [];
    for (let p = i.length - 1; p >= 0; p--) {
      const h = i[p], g = s[p];
      if (this.currentTokenCount + u + g <= this.maxContext)
        f.unshift(h), u += g;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += u), f.length === i.length;
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
async function c0(n, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: g,
  ignoreWorldInfo: y,
  messageIndexesBetween: b
} = {}) {
  var _, v, d, S, E, O, w, D, x, T, M, k, q, G;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const B = SillyTavern.getContext();
  let { description: V, personality: $, persona: oe, scenario: he, mesExamples: me, system: U, jailbreak: re } = h ? {
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
  const ce = n === "textgenerationwebui" ? (_ = B.getPresetManager("instruct")) == null ? void 0 : _.getCompletionPresetByName(s) : void 0, Re = !!(ce != null && ce.enabled);
  let j = gv(me, Re);
  function J() {
    var ue, fe;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return Kf();
    if (typeof f == "number")
      return f;
    let ke;
    if (n === "textgenerationwebui") {
      const Ne = (ue = B.getPresetManager("textgenerationwebui")) == null ? void 0 : ue.getCompletionPresetByName(i);
      ke = Ne?.max_length;
    } else {
      const Ne = (fe = B.getPresetManager("openai")) == null ? void 0 : fe.getCompletionPresetByName(i);
      ke = Ne?.openai_max_context;
    }
    return typeof ke == "number" ? ke : Kf();
  }
  let ae = [];
  const se = J();
  if (se <= 0)
    return { result: [], warnings: ae };
  const le = new ES(se), ze = B.ToolManager.isToolCallingSupported(), Y = b?.start ?? 0, ge = b != null && b.end ? b.end + 1 : void 0;
  let ve = Y === -1 && ge === 0 ? [] : B.chat.slice(Y, ge).filter((ue) => {
    var fe;
    return !ue.is_system || ze && Array.isArray((fe = ue.extra) == null ? void 0 : fe.tool_invocations);
  });
  ve = await Promise.all(
    ve.map(async (ue, fe) => {
      var ke, Ne;
      let De = ue.mes, jn = ue.is_user ? Qg.USER_INPUT : Qg.AI_OUTPUT, tr = { isPrompt: !0, depth: ve.length - fe - 1 }, pt = gS(De, jn, tr);
      return pt = await vS(ue, pt), (ke = ue?.extra) != null && ke.append_title && (Ne = ue?.extra) != null && Ne.title && (pt = `${pt}

${ue.extra.title}`), {
        ...ue,
        mes: pt,
        index: fe
      };
    })
  );
  const Ve = ve.map((ue) => q_ ? `${ue.name}: ${ue.mes}` : ue.mes).reverse(), { worldInfoString: P, worldInfoBefore: K, worldInfoAfter: ne, worldInfoExamples: Se, worldInfoDepth: qe, anBefore: Pe, anAfter: Ue } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await B.getWorldInfoPrompt(Ve, se, !1);
  for (const ue of Se) {
    const fe = ue.content;
    if (fe.length === 0)
      continue;
    const ke = Eo(fe, br, Qr), Ne = gv(ke, Re);
    ue.position === Z_.before ? j.unshift(...Ne) : j.push(...Ne);
  }
  function ht() {
    const ue = [];
    for (let fe = ve.length - 1; fe >= 0; fe--) {
      const ke = ve[fe], Ne = ke.name === "System" && !ke.is_user ? "system" : ke.is_user ? "user" : "assistant";
      ue.unshift({
        role: Ne,
        content: p && Ne != "system" ? `${ke.name}: ${ke.mes}` : ke.mes,
        source: ke
      });
    }
    le.addMany(ue);
  }
  if (n === "textgenerationwebui") {
    const ue = [...j];
    j && (j = oS(j, br, Qr));
    const fe = (v = B.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    fe && (U = B.powerUserSettings.prefer_character_prompt && U ? U : Eo(fe.content, br, Qr), U = Re ? uS(
      B.substituteParams(U, br, Qr, fe.content),
      ce
    ) : U);
    const ke = {
      description: V,
      personality: $,
      persona: B.powerUserSettings.persona_description_position == Xg.IN_PROMPT ? oe : "",
      scenario: he,
      system: U,
      char: Qr,
      user: br,
      wiBefore: K,
      wiAfter: ne,
      loreBefore: K,
      loreAfter: ne,
      mesExamples: j.join(""),
      mesExamplesRaw: ue.join("")
    }, Ne = (d = B.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(o);
    let De = cS(ke, {
      customInstructSettings: ce,
      customStoryString: Ne?.story_string
    });
    De && le.add({ role: "system", content: De, ignoreInstruct: !0 }), ht();
  } else {
    let ue = function(qt) {
      const Vt = yn.find((Ia) => Ia.identifier === qt);
      if (Vt)
        return Vt;
      const ul = De.prompts.find((Ia) => Ia.identifier === qt);
      if (ul)
        return ul;
    }, fe = pS(ve), ke = mS(j);
    async function Ne() {
      let [qt, Vt] = await hS(
        {
          name2: Qr,
          charDescription: V,
          charPersonality: $,
          Scenario: he,
          worldInfoBefore: K,
          worldInfoAfter: ne,
          extensionPrompts: B.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: re,
          personaDescription: oe,
          messages: fe,
          messageExamples: ke
        },
        !1
      );
      le.addMany(qt);
    }
    if (!i)
      return ae.push("No preset name provided. Using default preset."), await Ne(), { result: le.getMessages(), warnings: ae };
    const De = (S = B.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(i);
    if (!De)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ae.push(`Preset not found: ${i}. Using current preset.`), Ne(), { result: le.getMessages(), warnings: ae };
    let jn = (E = De.prompt_order) == null ? void 0 : E.find((qt) => qt.character_id === vn);
    if (!jn && De.prompt_order && De.prompt_order.length > 0 && (jn = De.prompt_order[0]), !jn)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ae.push(`No prompt order found for preset: ${i}. Using current preset.`), Ne(), { result: le.getMessages(), warnings: ae };
    const tr = he && De.scenario_format ? B.substituteParams(De.scenario_format) : "", pt = $ && De.personality_format ? B.substituteParams(De.personality_format) : "", Zn = B.substituteParams(De.group_nudge_prompt), Ht = De.impersonation_prompt ? B.substituteParams(De.impersonation_prompt) : "", yn = [];
    y || yn.push(
      {
        role: "system",
        content: vv(K, { wiFormat: De.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: vv(ne, { wiFormat: De.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || yn.push(
      { role: "system", content: V, identifier: "charDescription" },
      { role: "system", content: pt, identifier: "charPersonality" },
      { role: "system", content: tr, identifier: "scenario" }
    ), yn.push(
      { role: "system", content: Ht, identifier: "impersonate" },
      { role: "system", content: Zn, identifier: "groupNudge" }
    );
    const ia = B.extensionPrompts["1_memory"];
    ia && ia.value && yn.push({
      role: wa(ia.role),
      content: ia.value,
      identifier: "summary",
      position: Is(ia.position)
    });
    const sa = B.extensionPrompts["2_floating_prompt"];
    !g && sa && sa.value && yn.push({
      role: wa(sa.role),
      content: sa.value,
      identifier: "authorsNote",
      position: Is(sa.position)
    });
    const nr = B.extensionPrompts["3_vectors"];
    nr && nr.value && yn.push({
      role: "system",
      content: nr.value,
      identifier: "vectorsMemory",
      position: Is(nr.position)
    });
    const Fn = B.extensionPrompts["4_vectors_data_bank"];
    Fn && Fn.value && yn.push({
      role: wa(Fn.role),
      content: Fn.value,
      identifier: "vectorsDataBank",
      position: Is(Fn.position)
    });
    const _n = B.extensionPrompts.chromadb;
    _n && _n.value && yn.push({
      role: "system",
      content: _n.value,
      identifier: "smartContext",
      position: Is(_n.position)
    }), !h && B.powerUserSettings.persona_description && B.powerUserSettings.persona_description_position === Xg.IN_PROMPT && yn.push({
      role: "system",
      content: B.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), jn.order.forEach((qt) => {
      if (!qt.enabled)
        return;
      const Vt = ue(qt.identifier);
      if (Vt && Vt.content) {
        le.add({
          role: Vt.role ?? "system",
          content: B.substituteParams(Vt.content)
        });
        return;
      }
      qt.identifier === "chatHistory" && ht();
    });
  }
  const rn = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ue in B.extensionPrompts)
    if (Object.hasOwn(B.extensionPrompts, ue)) {
      const fe = B.extensionPrompts[ue];
      if (rn.includes(ue) || !B.extensionPrompts[ue].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(fe.position) || typeof fe.filter == "function" && !await fe.filter()) continue;
      const ke = {
        role: wa(fe.role) ?? "system",
        content: fe.value
      };
      if (fe.position === Ca.BEFORE_PROMPT)
        le.insert(fe.depth, ke);
      else if (fe.position === Ca.IN_PROMPT) {
        const Ne = le.getMessages();
        le.insert(Ne.length - fe.depth, ke);
      }
    }
  for (const ue of qe) {
    const fe = le.getMessages();
    le.insert(fe.length - ue.depth, {
      role: wa(ue.role),
      content: ue.entries.join(`
`)
    });
  }
  if (!h) {
    const ue = dS(Er, Number(vn));
    if (Er && Array.isArray(ue) && ue.length > 0)
      ue.filter((fe) => fe.text).forEach((fe, ke) => {
        const Ne = le.getMessages();
        le.insert(Ne.length - fe.depth, { role: fe.role, content: fe.text });
      });
    else {
      const fe = Eo(
        (T = (x = (D = (w = (O = B.characters[vn]) == null ? void 0 : O.data) == null ? void 0 : w.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : x.prompt) == null ? void 0 : T.trim(),
        br,
        Qr
      ) || "";
      if (fe) {
        const ke = U_, Ne = ((G = (q = (k = (M = B.characters[vn]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : q.depth_prompt) == null ? void 0 : G.role) ?? B_, De = le.getMessages();
        le.insert(De.length - ke, {
          role: wa(Ne),
          content: fe
        });
      }
    }
  }
  let rt = -1;
  if (!g) {
    const ue = fS();
    if (ue.prompt) {
      ue.prompt = Eo(ue.prompt, br, Qr);
      const fe = { role: wa(ue.role), content: ue.prompt };
      switch (ue.position) {
        case Ca.IN_PROMPT:
          le.insert(1, fe), rt = 1;
          break;
        case Ca.IN_CHAT:
          rt = le.getMessages().length - ue.depth, le.insert(rt, fe);
          break;
        case Ca.BEFORE_PROMPT:
          le.addFront(fe), rt = 0;
          break;
      }
    }
  }
  return rt >= 0 && (Pe.length > 0 && (le.insert(rt, { role: "system", content: Pe.join(`
`) }), rt++), Ue.length > 0 && le.insert(rt + 1, { role: "system", content: Ue.join(`
`) })), { result: le.getMessages(), warnings: ae };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function yv(n, r) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function er(n) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? yv(Object(i), !0).forEach(function(s) {
      xS(n, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : yv(Object(i)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return n;
}
function su(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? su = function(r) {
    return typeof r;
  } : su = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, su(n);
}
function xS(n, r, i) {
  return r in n ? Object.defineProperty(n, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = i, n;
}
function wr() {
  return wr = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
    }
    return n;
  }, wr.apply(this, arguments);
}
function CS(n, r) {
  if (n == null) return {};
  var i = {}, s = Object.keys(n), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (i[o] = n[o]);
  return i;
}
function wS(n, r) {
  if (n == null) return {};
  var i = CS(n, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (i[s] = n[s]);
  }
  return i;
}
var AS = "1.15.6";
function xr(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Ar = xr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), il = xr(/Edge/i), _v = xr(/firefox/i), Ks = xr(/safari/i) && !xr(/chrome/i) && !xr(/android/i), Gd = xr(/iP(ad|od|hone)/i), f0 = xr(/chrome/i) && xr(/android/i), d0 = {
  capture: !1,
  passive: !1
};
function Ze(n, r, i) {
  n.addEventListener(r, i, !Ar && d0);
}
function He(n, r, i) {
  n.removeEventListener(r, i, !Ar && d0);
}
function pu(n, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(r);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(r);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function h0(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Un(n, r, i, s) {
  if (n) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === i && pu(n, r) : pu(n, r)) || s && n === i)
        return n;
      if (n === i) break;
    } while (n = h0(n));
  }
  return null;
}
var bv = /\s+/g;
function hn(n, r, i) {
  if (n && r)
    if (n.classList)
      n.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + n.className + " ").replace(bv, " ").replace(" " + r + " ", " ");
      n.className = (s + (i ? " " + r : "")).replace(bv, " ");
    }
}
function Ce(n, r, i) {
  var s = n && n.style;
  if (s) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (i = n.currentStyle), r === void 0 ? i : i[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function ji(n, r) {
  var i = "";
  if (typeof n == "string")
    i = n;
  else
    do {
      var s = Ce(n, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (n = n.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function p0(n, r, i) {
  if (n) {
    var s = n.getElementsByTagName(r), o = 0, u = s.length;
    if (i)
      for (; o < u; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function Wn() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function St(n, r, i, s, o) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var u, f, p, h, g, y, b;
    if (n !== window && n.parentNode && n !== Wn() ? (u = n.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, g = u.right, y = u.height, b = u.width) : (f = 0, p = 0, h = window.innerHeight, g = window.innerWidth, y = window.innerHeight, b = window.innerWidth), (r || i) && n !== window && (o = o || n.parentNode, !Ar))
      do
        if (o && o.getBoundingClientRect && (Ce(o, "transform") !== "none" || i && Ce(o, "position") !== "static")) {
          var _ = o.getBoundingClientRect();
          f -= _.top + parseInt(Ce(o, "border-top-width")), p -= _.left + parseInt(Ce(o, "border-left-width")), h = f + u.height, g = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && n !== window) {
      var v = ji(o || n), d = v && v.a, S = v && v.d;
      v && (f /= S, p /= d, b /= d, y /= S, h = f + y, g = p + b);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: g,
      width: b,
      height: y
    };
  }
}
function Sv(n, r, i) {
  for (var s = ta(n, !0), o = St(n)[r]; s; ) {
    var u = St(s)[i], f = void 0;
    if (f = o >= u, !f) return s;
    if (s === Wn()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Pi(n, r, i, s) {
  for (var o = 0, u = 0, f = n.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== we.ghost && (s || f[u] !== we.dragged) && Un(f[u], i.draggable, n, !1)) {
      if (o === r)
        return f[u];
      o++;
    }
    u++;
  }
  return null;
}
function Vd(n, r) {
  for (var i = n.lastElementChild; i && (i === we.ghost || Ce(i, "display") === "none" || r && !pu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function Dn(n, r) {
  var i = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== we.clone && (!r || pu(n, r)) && i++;
  return i;
}
function Ev(n) {
  var r = 0, i = 0, s = Wn();
  if (n)
    do {
      var o = ji(n), u = o.a, f = o.d;
      r += n.scrollLeft * u, i += n.scrollTop * f;
    } while (n !== s && (n = n.parentNode));
  return [r, i];
}
function TS(n, r) {
  for (var i in n)
    if (n.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === n[i][s]) return Number(i);
    }
  return -1;
}
function ta(n, r) {
  if (!n || !n.getBoundingClientRect) return Wn();
  var i = n, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = Ce(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return Wn();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return Wn();
}
function OS(n, r) {
  if (n && r)
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  return n;
}
function Jf(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Js;
function m0(n, r) {
  return function() {
    if (!Js) {
      var i = arguments, s = this;
      i.length === 1 ? n.call(s, i[0]) : n.apply(s, i), Js = setTimeout(function() {
        Js = void 0;
      }, r);
    }
  };
}
function NS() {
  clearTimeout(Js), Js = void 0;
}
function g0(n, r, i) {
  n.scrollLeft += r, n.scrollTop += i;
}
function v0(n) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : i ? i(n).clone(!0)[0] : n.cloneNode(!0);
}
function y0(n, r, i) {
  var s = {};
  return Array.from(n.children).forEach(function(o) {
    var u, f, p, h;
    if (!(!Un(o, r.draggable, n, !1) || o.animated || o === i)) {
      var g = St(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var en = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function DS() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(Ce(o, "display") === "none" || o === we.ghost)) {
            n.push({
              target: o,
              rect: St(o)
            });
            var u = er({}, n[n.length - 1].rect);
            if (o.thisAnimationDuration) {
              var f = ji(o, !0);
              f && (u.top -= f.f, u.left -= f.e);
            }
            o.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      n.push(s);
    },
    removeAnimationState: function(s) {
      n.splice(TS(n, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, f = 0;
      n.forEach(function(p) {
        var h = 0, g = p.target, y = g.fromRect, b = St(g), _ = g.prevFromRect, v = g.prevToRect, d = p.rect, S = ji(g, !0);
        S && (b.top -= S.f, b.left -= S.e), g.toRect = b, g.thisAnimationDuration && Jf(_, b) && !Jf(y, b) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - b.top) / (d.left - b.left) === (y.top - b.top) / (y.left - b.left) && (h = kS(d, _, v, o.options)), Jf(b, y) || (g.prevFromRect = y, g.prevToRect = b, h || (h = o.options.animation), o.animate(g, d, b, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, h), g.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), n = [];
    },
    animate: function(s, o, u, f) {
      if (f) {
        Ce(s, "transition", ""), Ce(s, "transform", "");
        var p = ji(this.el), h = p && p.a, g = p && p.d, y = (o.left - u.left) / (h || 1), b = (o.top - u.top) / (g || 1);
        s.animatingX = !!y, s.animatingY = !!b, Ce(s, "transform", "translate3d(" + y + "px," + b + "px,0)"), this.forRepaintDummy = MS(s), Ce(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ce(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Ce(s, "transition", ""), Ce(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function MS(n) {
  return n.offsetWidth;
}
function kS(n, r, i, s) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var wi = [], Wf = {
  initializeByDefault: !0
}, sl = {
  mount: function(r) {
    for (var i in Wf)
      Wf.hasOwnProperty(i) && !(i in r) && (r[i] = Wf[i]);
    wi.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), wi.push(r);
  },
  pluginEvent: function(r, i, s) {
    var o = this;
    this.eventCanceled = !1, s.cancel = function() {
      o.eventCanceled = !0;
    };
    var u = r + "Global";
    wi.forEach(function(f) {
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](er({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](er({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    wi.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var g = new p(r, i, r.options);
        g.sortable = r, g.options = r.options, r[h] = g, wr(s, g.defaults);
      }
    });
    for (var u in r.options)
      if (r.options.hasOwnProperty(u)) {
        var f = this.modifyOption(r, u, r.options[u]);
        typeof f < "u" && (r.options[u] = f);
      }
  },
  getEventProperties: function(r, i) {
    var s = {};
    return wi.forEach(function(o) {
      typeof o.eventProperties == "function" && wr(s, o.eventProperties.call(i[o.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var o;
    return wi.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (o = u.optionListeners[i].call(r[u.pluginName], s));
    }), o;
  }
};
function RS(n) {
  var r = n.sortable, i = n.rootEl, s = n.name, o = n.targetEl, u = n.cloneEl, f = n.toEl, p = n.fromEl, h = n.oldIndex, g = n.newIndex, y = n.oldDraggableIndex, b = n.newDraggableIndex, _ = n.originalEvent, v = n.putSortable, d = n.extraEventProperties;
  if (r = r || i && i[en], !!r) {
    var S, E = r.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Ar && !il ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = f || i, S.from = p || i, S.item = o || i, S.clone = u, S.oldIndex = h, S.newIndex = g, S.oldDraggableIndex = y, S.newDraggableIndex = b, S.originalEvent = _, S.pullMode = v ? v.lastPutMode : void 0;
    var w = er(er({}, d), sl.getEventProperties(s, r));
    for (var D in w)
      S[D] = w[D];
    i && i.dispatchEvent(S), E[O] && E[O].call(r, S);
  }
}
var jS = ["evt"], Jt = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = wS(s, jS);
  sl.pluginEvent.bind(we)(r, i, er({
    dragEl: ie,
    parentEl: dt,
    ghostEl: Te,
    rootEl: it,
    nextEl: Oa,
    lastDownEl: lu,
    cloneEl: ot,
    cloneHidden: ea,
    dragStarted: Ys,
    putSortable: jt,
    activeSortable: we.active,
    originalEvent: o,
    oldIndex: ki,
    oldDraggableIndex: Ws,
    newIndex: pn,
    newDraggableIndex: Wr,
    hideGhostForTarget: E0,
    unhideGhostForTarget: x0,
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
function Ft(n) {
  RS(er({
    putSortable: jt,
    cloneEl: ot,
    targetEl: ie,
    rootEl: it,
    oldIndex: ki,
    oldDraggableIndex: Ws,
    newIndex: pn,
    newDraggableIndex: Wr
  }, n));
}
var ie, dt, Te, it, Oa, lu, ot, ea, ki, pn, Ws, Wr, Co, jt, Mi = !1, mu = !1, gu = [], Aa, In, ed, td, xv, Cv, Ys, Ai, el, tl = !1, wo = !1, ou, Bt, nd = [], Ad = !1, vu = [], Au = typeof document < "u", Ao = Gd, wv = il || Ar ? "cssFloat" : "float", zS = Au && !f0 && !Gd && "draggable" in document.createElement("div"), _0 = (function() {
  if (Au) {
    if (Ar)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), b0 = function(r, i) {
  var s = Ce(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Pi(r, 0, i), f = Pi(r, 1, i), p = u && Ce(u), h = f && Ce(f), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + St(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + St(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var b = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === b) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= o && s[wv] === "none" || f && s[wv] === "none" && g + y > o) ? "vertical" : "horizontal";
}, LS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, g = s ? i.width : i.height;
  return o === p || u === h || o + f / 2 === p + g / 2;
}, PS = function(r, i) {
  var s;
  return gu.some(function(o) {
    var u = o[en].options.emptyInsertThreshold;
    if (!(!u || Vd(o))) {
      var f = St(o), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = o;
    }
  }), s;
}, S0 = function(r) {
  function i(u, f) {
    return function(p, h, g, y) {
      var b = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || b))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, h, g, y), f)(p, h, g, y);
      var _ = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === _ || u.join && u.indexOf(_) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || su(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, E0 = function() {
  !_0 && Te && Ce(Te, "display", "none");
}, x0 = function() {
  !_0 && Te && Ce(Te, "display", "");
};
Au && !f0 && document.addEventListener("click", function(n) {
  if (mu)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), mu = !1, !1;
}, !0);
var Ta = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var i = PS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[en]._onDragOver(s);
    }
  }
}, IS = function(r) {
  ie && ie.parentNode[en]._isOutsideThisEl(r.target);
};
function we(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = wr({}, r), n[en] = this;
  var i = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return b0(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, p) {
      f.setData("Text", p.textContent);
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
    supportPointer: we.supportPointer !== !1 && "PointerEvent" in window && (!Ks || Gd),
    emptyInsertThreshold: 5
  };
  sl.initializePlugins(this, n, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  S0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : zS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ze(n, "pointerdown", this._onTapStart) : (Ze(n, "mousedown", this._onTapStart), Ze(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Ze(n, "dragover", this), Ze(n, "dragenter", this)), gu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), wr(this, DS());
}
we.prototype = /** @lends Sortable.prototype */
{
  constructor: we,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ai = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = o.filter;
      if (VS(s), !ie && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Ks && h && h.tagName.toUpperCase() === "SELECT") && (h = Un(h, o.draggable, s, !1), !(h && h.animated) && lu !== h)) {
        if (ki = Dn(h), Ws = Dn(h, o.draggable), typeof y == "function") {
          if (y.call(this, r, h, this)) {
            Ft({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), Jt("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(b) {
          if (b = Un(g, b.trim(), s, !1), b)
            return Ft({
              sortable: i,
              rootEl: b,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), Jt("filter", i, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Un(g, o.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, f = o.options, p = u.ownerDocument, h;
    if (s && !ie && s.parentNode === u) {
      var g = St(s);
      if (it = u, ie = s, dt = ie.parentNode, Oa = ie.nextSibling, lu = s, Co = f.group, we.dragged = ie, Aa = {
        target: ie,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, xv = Aa.clientX - g.left, Cv = Aa.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ie.style["will-change"] = "all", h = function() {
        if (Jt("delayEnded", o, {
          evt: r
        }), we.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !_v && o.nativeDraggable && (ie.draggable = !0), o._triggerDragStart(r, i), Ft({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), hn(ie, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        p0(ie, y.trim(), rd);
      }), Ze(p, "dragover", Ta), Ze(p, "mousemove", Ta), Ze(p, "touchmove", Ta), f.supportPointer ? (Ze(p, "pointerup", o._onDrop), !this.nativeDraggable && Ze(p, "pointercancel", o._onDrop)) : (Ze(p, "mouseup", o._onDrop), Ze(p, "touchend", o._onDrop), Ze(p, "touchcancel", o._onDrop)), _v && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), Jt("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(il || Ar))) {
        if (we.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ze(p, "pointerup", o._disableDelayedDrag), Ze(p, "pointercancel", o._disableDelayedDrag)) : (Ze(p, "mouseup", o._disableDelayedDrag), Ze(p, "touchend", o._disableDelayedDrag), Ze(p, "touchcancel", o._disableDelayedDrag)), Ze(p, "mousemove", o._delayedDragTouchMoveHandler), Ze(p, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && Ze(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && rd(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    He(r, "mouseup", this._disableDelayedDrag), He(r, "touchend", this._disableDelayedDrag), He(r, "touchcancel", this._disableDelayedDrag), He(r, "pointerup", this._disableDelayedDrag), He(r, "pointercancel", this._disableDelayedDrag), He(r, "mousemove", this._delayedDragTouchMoveHandler), He(r, "touchmove", this._delayedDragTouchMoveHandler), He(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ze(document, "pointermove", this._onTouchMove) : i ? Ze(document, "touchmove", this._onTouchMove) : Ze(document, "mousemove", this._onTouchMove) : (Ze(ie, "dragend", this), Ze(it, "dragstart", this._onDragStart));
    try {
      document.selection ? uu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Mi = !1, it && ie) {
      Jt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ze(document, "dragover", IS);
      var s = this.options;
      !r && hn(ie, s.dragClass, !1), hn(ie, s.ghostClass, !0), we.active = this, r && this._appendGhost(), Ft({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (In) {
      this._lastX = In.clientX, this._lastY = In.clientY, E0();
      for (var r = document.elementFromPoint(In.clientX, In.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(In.clientX, In.clientY), r !== i); )
        i = r;
      if (ie.parentNode[en]._isOutsideThisEl(r), i)
        do {
          if (i[en]) {
            var s = void 0;
            if (s = i[en]._onDragOver({
              clientX: In.clientX,
              clientY: In.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = h0(i));
      x0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Te && ji(Te, !0), p = Te && f && f.a, h = Te && f && f.d, g = Ao && Bt && Ev(Bt), y = (u.clientX - Aa.clientX + o.x) / (p || 1) + (g ? g[0] - nd[0] : 0) / (p || 1), b = (u.clientY - Aa.clientY + o.y) / (h || 1) + (g ? g[1] - nd[1] : 0) / (h || 1);
      if (!we.active && !Mi) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Te) {
        f ? (f.e += y - (ed || 0), f.f += b - (td || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: b
        };
        var _ = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Ce(Te, "webkitTransform", _), Ce(Te, "mozTransform", _), Ce(Te, "msTransform", _), Ce(Te, "transform", _), ed = y, td = b, In = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Te) {
      var r = this.options.fallbackOnBody ? document.body : it, i = St(ie, !0, Ao, !0, r), s = this.options;
      if (Ao) {
        for (Bt = r; Ce(Bt, "position") === "static" && Ce(Bt, "transform") === "none" && Bt !== document; )
          Bt = Bt.parentNode;
        Bt !== document.body && Bt !== document.documentElement ? (Bt === document && (Bt = Wn()), i.top += Bt.scrollTop, i.left += Bt.scrollLeft) : Bt = Wn(), nd = Ev(Bt);
      }
      Te = ie.cloneNode(!0), hn(Te, s.ghostClass, !1), hn(Te, s.fallbackClass, !0), hn(Te, s.dragClass, !0), Ce(Te, "transition", ""), Ce(Te, "transform", ""), Ce(Te, "box-sizing", "border-box"), Ce(Te, "margin", 0), Ce(Te, "top", i.top), Ce(Te, "left", i.left), Ce(Te, "width", i.width), Ce(Te, "height", i.height), Ce(Te, "opacity", "0.8"), Ce(Te, "position", Ao ? "absolute" : "fixed"), Ce(Te, "zIndex", "100000"), Ce(Te, "pointerEvents", "none"), we.ghost = Te, r.appendChild(Te), Ce(Te, "transform-origin", xv / parseInt(Te.style.width) * 100 + "% " + Cv / parseInt(Te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (Jt("dragStart", this, {
      evt: r
    }), we.eventCanceled) {
      this._onDrop();
      return;
    }
    Jt("setupClone", this), we.eventCanceled || (ot = v0(ie), ot.removeAttribute("id"), ot.draggable = !1, ot.style["will-change"] = "", this._hideClone(), hn(ot, this.options.chosenClass, !1), we.clone = ot), s.cloneId = uu(function() {
      Jt("clone", s), !we.eventCanceled && (s.options.removeCloneOnHide || it.insertBefore(ot, ie), s._hideClone(), Ft({
        sortable: s,
        name: "clone"
      }));
    }), !i && hn(ie, u.dragClass, !0), i ? (mu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (He(document, "mouseup", s._onDrop), He(document, "touchend", s._onDrop), He(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, ie)), Ze(document, "drop", s), Ce(ie, "transform", "translateZ(0)")), Mi = !0, s._dragStartId = uu(s._dragStarted.bind(s, i, r)), Ze(document, "selectstart", s), Ys = !0, window.getSelection().removeAllRanges(), Ks && Ce(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, f, p = this.options, h = p.group, g = we.active, y = Co === h, b = p.sort, _ = jt || g, v, d = this, S = !1;
    if (Ad) return;
    function E(ce, Re) {
      Jt(ce, d, er({
        evt: r,
        isOwner: y,
        axis: v ? "vertical" : "horizontal",
        revert: f,
        dragRect: o,
        targetRect: u,
        canSort: b,
        fromSortable: _,
        target: s,
        completed: w,
        onMove: function(J, ae) {
          return To(it, i, ie, o, J, St(J), r, ae);
        },
        changed: D
      }, Re));
    }
    function O() {
      E("dragOverAnimationCapture"), d.captureAnimationState(), d !== _ && _.captureAnimationState();
    }
    function w(ce) {
      return E("dragOverCompleted", {
        insertion: ce
      }), ce && (y ? g._hideClone() : g._showClone(d), d !== _ && (hn(ie, jt ? jt.options.ghostClass : g.options.ghostClass, !1), hn(ie, p.ghostClass, !0)), jt !== d && d !== we.active ? jt = d : d === we.active && jt && (jt = null), _ === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        E("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === i && !s.animated) && (Ai = null), !p.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[en]._isOutsideThisEl(r.target), !ce && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      pn = Dn(ie), Wr = Dn(ie, p.draggable), Ft({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: pn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Un(s, p.draggable, i, !0), E("dragOver"), we.eventCanceled) return S;
    if (ie.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return w(!1);
    if (mu = !1, g && !p.disabled && (y ? b || (f = dt !== it) : jt === this || (this.lastPutMode = Co.checkPull(this, g, ie, r)) && h.checkPut(this, g, ie, r))) {
      if (v = this._getDirection(r, s) === "vertical", o = St(ie), E("dragOverValid"), we.eventCanceled) return S;
      if (f)
        return dt = it, O(), this._hideClone(), E("revert"), we.eventCanceled || (Oa ? it.insertBefore(ie, Oa) : it.appendChild(ie)), w(!0);
      var x = Vd(i, p.draggable);
      if (!x || qS(r, v, this) && !x.animated) {
        if (x === ie)
          return w(!1);
        if (x && i === r.target && (s = x), s && (u = St(s)), To(it, i, ie, o, s, u, r, !!s) !== !1)
          return O(), x && x.nextSibling ? i.insertBefore(ie, x.nextSibling) : i.appendChild(ie), dt = i, D(), w(!0);
      } else if (x && HS(r, v, this)) {
        var T = Pi(i, 0, p, !0);
        if (T === ie)
          return w(!1);
        if (s = T, u = St(s), To(it, i, ie, o, s, u, r, !1) !== !1)
          return O(), i.insertBefore(ie, T), dt = i, D(), w(!0);
      } else if (s.parentNode === i) {
        u = St(s);
        var M = 0, k, q = ie.parentNode !== i, G = !LS(ie.animated && ie.toRect || o, s.animated && s.toRect || u, v), B = v ? "top" : "left", V = Sv(s, "top", "top") || Sv(ie, "top", "top"), $ = V ? V.scrollTop : void 0;
        Ai !== s && (k = u[B], tl = !1, wo = !G && p.invertSwap || q), M = ZS(r, s, u, v, G ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, wo, Ai === s);
        var oe;
        if (M !== 0) {
          var he = Dn(ie);
          do
            he -= M, oe = dt.children[he];
          while (oe && (Ce(oe, "display") === "none" || oe === Te));
        }
        if (M === 0 || oe === s)
          return w(!1);
        Ai = s, el = M;
        var me = s.nextElementSibling, U = !1;
        U = M === 1;
        var re = To(it, i, ie, o, s, u, r, U);
        if (re !== !1)
          return (re === 1 || re === -1) && (U = re === 1), Ad = !0, setTimeout(US, 30), O(), U && !me ? i.appendChild(ie) : s.parentNode.insertBefore(ie, U ? me : s), V && g0(V, 0, $ - V.scrollTop), dt = ie.parentNode, k !== void 0 && !wo && (ou = Math.abs(k - St(s)[B])), D(), w(!0);
      }
      if (i.contains(ie))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    He(document, "mousemove", this._onTouchMove), He(document, "touchmove", this._onTouchMove), He(document, "pointermove", this._onTouchMove), He(document, "dragover", Ta), He(document, "mousemove", Ta), He(document, "touchmove", Ta);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    He(r, "mouseup", this._onDrop), He(r, "touchend", this._onDrop), He(r, "pointerup", this._onDrop), He(r, "pointercancel", this._onDrop), He(r, "touchcancel", this._onDrop), He(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (pn = Dn(ie), Wr = Dn(ie, s.draggable), Jt("drop", this, {
      evt: r
    }), dt = ie && ie.parentNode, pn = Dn(ie), Wr = Dn(ie, s.draggable), we.eventCanceled) {
      this._nulling();
      return;
    }
    Mi = !1, wo = !1, tl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Td(this.cloneId), Td(this._dragStartId), this.nativeDraggable && (He(document, "drop", this), He(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ks && Ce(document.body, "user-select", ""), Ce(ie, "transform", ""), r && (Ys && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Te && Te.parentNode && Te.parentNode.removeChild(Te), (it === dt || jt && jt.lastPutMode !== "clone") && ot && ot.parentNode && ot.parentNode.removeChild(ot), ie && (this.nativeDraggable && He(ie, "dragend", this), rd(ie), ie.style["will-change"] = "", Ys && !Mi && hn(ie, jt ? jt.options.ghostClass : this.options.ghostClass, !1), hn(ie, this.options.chosenClass, !1), Ft({
      sortable: this,
      name: "unchoose",
      toEl: dt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), it !== dt ? (pn >= 0 && (Ft({
      rootEl: dt,
      name: "add",
      toEl: dt,
      fromEl: it,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "remove",
      toEl: dt,
      originalEvent: r
    }), Ft({
      rootEl: dt,
      name: "sort",
      toEl: dt,
      fromEl: it,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "sort",
      toEl: dt,
      originalEvent: r
    })), jt && jt.save()) : pn !== ki && pn >= 0 && (Ft({
      sortable: this,
      name: "update",
      toEl: dt,
      originalEvent: r
    }), Ft({
      sortable: this,
      name: "sort",
      toEl: dt,
      originalEvent: r
    })), we.active && ((pn == null || pn === -1) && (pn = ki, Wr = Ws), Ft({
      sortable: this,
      name: "end",
      toEl: dt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Jt("nulling", this), it = ie = dt = Te = Oa = ot = lu = ea = Aa = In = Ys = pn = Wr = ki = Ws = Ai = el = jt = Co = we.dragged = we.ghost = we.clone = we.active = null, vu.forEach(function(r) {
      r.checked = !0;
    }), vu.length = ed = td = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(r), BS(r));
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
    for (var r = [], i, s = this.el.children, o = 0, u = s.length, f = this.options; o < u; o++)
      i = s[o], Un(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || GS(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, o = this.el;
    this.toArray().forEach(function(u, f) {
      var p = o.children[f];
      Un(p, this.options.draggable, o, !1) && (s[u] = p);
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
    return Un(r, i || this.options.draggable, this.el, !1);
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
    var o = sl.modifyOption(this, r, i);
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && S0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Jt("destroy", this);
    var r = this.el;
    r[en] = null, He(r, "mousedown", this._onTapStart), He(r, "touchstart", this._onTapStart), He(r, "pointerdown", this._onTapStart), this.nativeDraggable && (He(r, "dragover", this), He(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), gu.splice(gu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (Jt("hideClone", this), we.eventCanceled) return;
      Ce(ot, "display", "none"), this.options.removeCloneOnHide && ot.parentNode && ot.parentNode.removeChild(ot), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (Jt("showClone", this), we.eventCanceled) return;
      ie.parentNode == it && !this.options.group.revertClone ? it.insertBefore(ot, ie) : Oa ? it.insertBefore(ot, Oa) : it.appendChild(ot), this.options.group.revertClone && this.animate(ie, ot), Ce(ot, "display", ""), ea = !1;
    }
  }
};
function BS(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function To(n, r, i, s, o, u, f, p) {
  var h, g = n[en], y = g.options.onMove, b;
  return window.CustomEvent && !Ar && !il ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = n, h.dragged = i, h.draggedRect = s, h.related = o || r, h.relatedRect = u || St(r), h.willInsertAfter = p, h.originalEvent = f, n.dispatchEvent(h), y && (b = y.call(g, h, f)), b;
}
function rd(n) {
  n.draggable = !1;
}
function US() {
  Ad = !1;
}
function HS(n, r, i) {
  var s = St(Pi(i.el, 0, i.options, !0)), o = y0(i.el, i.options, Te), u = 10;
  return r ? n.clientX < o.left - u || n.clientY < s.top && n.clientX < s.right : n.clientY < o.top - u || n.clientY < s.bottom && n.clientX < s.left;
}
function qS(n, r, i) {
  var s = St(Vd(i.el, i.options.draggable)), o = y0(i.el, i.options, Te), u = 10;
  return r ? n.clientX > o.right + u || n.clientY > s.bottom && n.clientX > s.left : n.clientY > o.bottom + u || n.clientX > s.right && n.clientY > s.top;
}
function ZS(n, r, i, s, o, u, f, p) {
  var h = s ? n.clientY : n.clientX, g = s ? i.height : i.width, y = s ? i.top : i.left, b = s ? i.bottom : i.right, _ = !1;
  if (!f) {
    if (p && ou < g * o) {
      if (!tl && (el === 1 ? h > y + g * u / 2 : h < b - g * u / 2) && (tl = !0), tl)
        _ = !0;
      else if (el === 1 ? h < y + ou : h > b - ou)
        return -el;
    } else if (h > y + g * (1 - o) / 2 && h < b - g * (1 - o) / 2)
      return FS(r);
  }
  return _ = _ || f, _ && (h < y + g * u / 2 || h > b - g * u / 2) ? h > y + g / 2 ? 1 : -1 : 0;
}
function FS(n) {
  return Dn(ie) < Dn(n) ? 1 : -1;
}
function GS(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function VS(n) {
  vu.length = 0;
  for (var r = n.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && vu.push(s);
  }
}
function uu(n) {
  return setTimeout(n, 0);
}
function Td(n) {
  return clearTimeout(n);
}
Au && Ze(document, "touchmove", function(n) {
  (we.active || Mi) && n.cancelable && n.preventDefault();
});
we.utils = {
  on: Ze,
  off: He,
  css: Ce,
  find: p0,
  is: function(r, i) {
    return !!Un(r, i, r, !1);
  },
  extend: OS,
  throttle: m0,
  closest: Un,
  toggleClass: hn,
  clone: v0,
  index: Dn,
  nextTick: uu,
  cancelNextTick: Td,
  detectDirection: b0,
  getChild: Pi,
  expando: en
};
we.get = function(n) {
  return n[en];
};
we.mount = function() {
  for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (we.utils = er(er({}, we.utils), s.utils)), sl.mount(s);
  });
};
we.create = function(n, r) {
  return new we(n, r);
};
we.version = AS;
var bt = [], Xs, Od, Nd = !1, ad, id, yu, $s;
function YS() {
  function n() {
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
  return n.prototype = {
    dragStarted: function(i) {
      var s = i.originalEvent;
      this.sortable.nativeDraggable ? Ze(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ze(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Ze(document, "touchmove", this._handleFallbackAutoScroll) : Ze(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : (He(document, "pointermove", this._handleFallbackAutoScroll), He(document, "touchmove", this._handleFallbackAutoScroll), He(document, "mousemove", this._handleFallbackAutoScroll)), Av(), cu(), NS();
    },
    nulling: function() {
      yu = Od = Xs = Nd = $s = ad = id = null, bt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (yu = i, s || this.options.forceAutoScrollFallback || il || Ar || Ks) {
        sd(i, this.options, p, s);
        var h = ta(p, !0);
        Nd && (!$s || u !== ad || f !== id) && ($s && Av(), $s = setInterval(function() {
          var g = ta(document.elementFromPoint(u, f), !0);
          g !== h && (h = g, cu()), sd(i, o.options, g, s);
        }, 10), ad = u, id = f);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === Wn()) {
          cu();
          return;
        }
        sd(i, this.options, ta(p, !1), !1);
      }
    }
  }, wr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function cu() {
  bt.forEach(function(n) {
    clearInterval(n.pid);
  }), bt = [];
}
function Av() {
  clearInterval($s);
}
var sd = m0(function(n, r, i, s) {
  if (r.scroll) {
    var o = (n.touches ? n.touches[0] : n).clientX, u = (n.touches ? n.touches[0] : n).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = Wn(), g = !1, y;
    Od !== i && (Od = i, cu(), Xs = r.scroll, y = r.scrollFn, Xs === !0 && (Xs = ta(i, !0)));
    var b = 0, _ = Xs;
    do {
      var v = _, d = St(v), S = d.top, E = d.bottom, O = d.left, w = d.right, D = d.width, x = d.height, T = void 0, M = void 0, k = v.scrollWidth, q = v.scrollHeight, G = Ce(v), B = v.scrollLeft, V = v.scrollTop;
      v === h ? (T = D < k && (G.overflowX === "auto" || G.overflowX === "scroll" || G.overflowX === "visible"), M = x < q && (G.overflowY === "auto" || G.overflowY === "scroll" || G.overflowY === "visible")) : (T = D < k && (G.overflowX === "auto" || G.overflowX === "scroll"), M = x < q && (G.overflowY === "auto" || G.overflowY === "scroll"));
      var $ = T && (Math.abs(w - o) <= f && B + D < k) - (Math.abs(O - o) <= f && !!B), oe = M && (Math.abs(E - u) <= f && V + x < q) - (Math.abs(S - u) <= f && !!V);
      if (!bt[b])
        for (var he = 0; he <= b; he++)
          bt[he] || (bt[he] = {});
      (bt[b].vx != $ || bt[b].vy != oe || bt[b].el !== v) && (bt[b].el = v, bt[b].vx = $, bt[b].vy = oe, clearInterval(bt[b].pid), ($ != 0 || oe != 0) && (g = !0, bt[b].pid = setInterval((function() {
        s && this.layer === 0 && we.active._onTouchMove(yu);
        var me = bt[this.layer].vy ? bt[this.layer].vy * p : 0, U = bt[this.layer].vx ? bt[this.layer].vx * p : 0;
        typeof y == "function" && y.call(we.dragged.parentNode[en], U, me, n, yu, bt[this.layer].el) !== "continue" || g0(bt[this.layer].el, U, me);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (r.bubbleScroll && _ !== h && (_ = ta(_, !1)));
    Nd = g;
  }
}, 30), C0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var g = s || u;
    p();
    var y = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, b = document.elementFromPoint(y.clientX, y.clientY);
    h(), g && !g.el.contains(b) && (f("spill"), this.onSpill({
      dragEl: o,
      putSortable: s
    }));
  }
};
function Yd() {
}
Yd.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var o = Pi(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: C0
};
wr(Yd, {
  pluginName: "revertOnSpill"
});
function Xd() {
}
Xd.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: C0
};
wr(Xd, {
  pluginName: "removeOnSpill"
});
we.mount(new YS());
we.mount(Xd, Yd);
async function XS({
  entry: n,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: s = !1,
  operation: o = "auto"
}) {
  const u = SillyTavern.getContext(), f = await u.loadWorldInfo(r);
  if (!f)
    throw new Error("Failed to load world info");
  const p = Object.values(f.entries), h = p.length > 0 ? p[p.length - 1] : void 0;
  let g;
  if (o === "update" || o === "auto") {
    const b = Object.values(f.entries).find((_) => _.uid === n.uid);
    if (b)
      (o === "auto" || o === "update") && (g = b);
    else if (o === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = g ? "update" : "add";
  if (!g) {
    if (g = yS(r, f), !g)
      throw new Error("Failed to create entry");
    if (h) {
      const b = g.uid;
      Object.assign(g, h), g.uid = b;
    }
  }
  return g.key = n.key, g.content = n.content, g.comment = n.comment, i || await u.saveWorldInfo(r, f), s || u.reloadWorldInfoEditor(r, !0), {
    entry: g,
    operation: y
  };
}
const w0 = `=======

When creating a **character card** in SillyTavern, you can define a structured profile to guide the AI's behavior and ensure consistency in roleplay or storytelling. Below are the common fields and their purposes, based on community templates and best practices:

---

### **1. Name**
**Purpose**:
The character's primary identifier. The AI uses this to reference the character in dialogue and narration.
**Key Tips**:
- Use a memorable name that reflects their role (e.g., "Zara the Shadowblade" implies stealth/combat).
- Avoid overly complex or ambiguous names (e.g., "Xy'lthraa" may confuse the AI).
**Example**:
\`"Seraphina Vale"\` (Elegant, hints at nobility) vs. \`"Rusty"\` (Casual, rugged).

---

### **2. Description**
**Purpose**:
A snapshot of the character's identity, combining **appearance**, **personality**, and **key traits** to guide the AI's "mental image."
**Structure**:
- **Appearance**: Physical traits (e.g., scars, clothing, species).
- **Personality**: Core demeanor (e.g., stoic, playful).
- **Mannerisms**: Unique habits (e.g., "taps fingers when lying").
**Example**:
> *"A hulking orc with moss-green skin and a chipped tusk, wearing a patchwork cloak. Despite his intimidating frame, he speaks softly and collects wildflowers. Secretly fears fire."*
**Tips**:
- Use vivid, concise language.
- Prioritize traits critical to roleplay (e.g., "blind in one eye" affects interactions).

---

### **3. Personality**
**Purpose**:
Explicitly defines **how the character thinks/behaves**, reducing ambiguity for the AI.
**What to Include**:
- Core traits (e.g., "optimistic", "paranoid").
- Motivations (e.g., "seeks revenge against the crown").
- Flaws (e.g., "impulsive", "overly trusting").
**Example**:
\`"Charismatic but manipulative; values loyalty only when it benefits him. Haunted by guilt over a failed rescue mission."\`
**Tips**:
- Use bullet points or short phrases for clarity.
- Avoid contradictions (e.g., "shy" vs. "loves public speaking").

---

### **4. Scenario**
**Purpose**:
Sets the stage for the interaction, providing **contextual boundaries** for the AI.
**What to Include**:
- **Location**: Where the scene takes place (e.g., "a smoky tavern").
- **Time**: Era or time-sensitive context (e.g., "during a solar eclipse").
- **Relationship**: Predefined ties to the user (e.g., "childhood rivals reunited").
**Example**:
\`"A cyberpunk night market in 2147. {{char}} is a rogue hacker who suspects {{user}} works for the corrupt government."\`
**Tips**:
- Use dynamic placeholders like \`{{user}}\` to personalize the scenario.

---

### **5. First Message - Alternate Greetings**
**Purpose**:
The character's **opening line**, critical for establishing tone, voice, and narrative momentum.
**Key Elements**:
- **Dialogue**: Shows speech style (formal, slang-heavy).
- **Actions**: Subtle body language (e.g., "crosses arms skeptically").
- **Hook**: Encourages user engagement (e.g., a question or mystery).
**Example**:
\`*{{char}} adjusts her gas mask, voice muffled.* "You're the third outsider this week. What makes you think you'll survive the Wastes?"\`
**Tips**:
- Avoid passive openings (e.g., "Hello, how can I help you?").
- Mirror the character's personality (e.g., a shy character might stammer).

---

### **6. Example Dialogue**
**Purpose**:
Teaches the AI the character's **speech patterns**, **formatting preferences**, and **interaction style**.
**Structure**:
- Use \`{{char}}\` and \`{{user}}\` placeholders.
- Mix dialogue and actions (e.g., \`*{{char}} smirks.* "You're bold. I like that."\`).
- Show range (e.g., anger, sarcasm, vulnerability).
**Example**:
\`\`\`
{{user}}: Why should I trust you?
{{char}}: *Pulls a dagger from her boot and twirls it.* "You shouldn't. But I'm your only way out of this alive."
\`\`\`
**Tips**:
- Include 3–5 varied exchanges.
- Match the character's voice (e.g., a poet might use metaphors).

---

### **7. Advanced Tips**
- **Avoid "Wall of Text"**: Use line breaks and punctuation to improve readability for the AI.

=======`, A0 = `{{#if characters}}
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
{{#if this.alternate_greetings}}
#### Alternate Greetings
{{#each this.alternate_greetings}}
### {{add @index 1}}
{{this}}
{{/each}}
{{/if}}

{{/each}}
{{/if}}`, $S = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, QS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, KS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, $d = "{{activeFormatInstructions}}", T0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, JS = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, nl = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, WS = `## User's Persona Description
name: {{user}}
{{persona}}`, Qd = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, eE = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", tE = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", nE = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, O0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", rE = O0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", aE = "[" + O0 + "][" + rE + "]*", iE = new RegExp("^" + aE + "$");
function N0(n, r) {
  const i = [];
  let s = r.exec(n);
  for (; s; ) {
    const o = [];
    o.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let f = 0; f < u; f++)
      o.push(s[f]);
    i.push(o), s = r.exec(n);
  }
  return i;
}
const Kd = function(n) {
  const r = iE.exec(n);
  return !(r === null || typeof r > "u");
};
function sE(n) {
  return typeof n < "u";
}
const lE = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function D0(n, r) {
  r = Object.assign({}, lE, r);
  const i = [];
  let s = !1, o = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let u = 0; u < n.length; u++)
    if (n[u] === "<" && n[u + 1] === "?") {
      if (u += 2, u = Ov(n, u), u.err) return u;
    } else if (n[u] === "<") {
      let f = u;
      if (u++, n[u] === "!") {
        u = Nv(n, u);
        continue;
      } else {
        let p = !1;
        n[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < n.length && n[u] !== ">" && n[u] !== " " && n[u] !== "	" && n[u] !== `
` && n[u] !== "\r"; u++)
          h += n[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !mE(h)) {
          let b;
          return h.trim().length === 0 ? b = "Invalid space after '<'." : b = "Tag '" + h + "' is an invalid name.", vt("InvalidTag", b, Gt(n, u));
        }
        const g = cE(n, u);
        if (g === !1)
          return vt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Gt(n, u));
        let y = g.value;
        if (u = g.index, y[y.length - 1] === "/") {
          const b = u - y.length;
          y = y.substring(0, y.length - 1);
          const _ = Dv(y, r);
          if (_ === !0)
            s = !0;
          else
            return vt(_.err.code, _.err.msg, Gt(n, b + _.err.line));
        } else if (p)
          if (g.tagClosed) {
            if (y.trim().length > 0)
              return vt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Gt(n, f));
            if (i.length === 0)
              return vt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Gt(n, f));
            {
              const b = i.pop();
              if (h !== b.tagName) {
                let _ = Gt(n, b.tagStartPos);
                return vt(
                  "InvalidTag",
                  "Expected closing tag '" + b.tagName + "' (opened in line " + _.line + ", col " + _.col + ") instead of closing tag '" + h + "'.",
                  Gt(n, f)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return vt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Gt(n, u));
        else {
          const b = Dv(y, r);
          if (b !== !0)
            return vt(b.err.code, b.err.msg, Gt(n, u - y.length + b.err.line));
          if (o === !0)
            return vt("InvalidXml", "Multiple possible root nodes found.", Gt(n, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < n.length; u++)
          if (n[u] === "<")
            if (n[u + 1] === "!") {
              u++, u = Nv(n, u);
              continue;
            } else if (n[u + 1] === "?") {
              if (u = Ov(n, ++u), u.err) return u;
            } else
              break;
          else if (n[u] === "&") {
            const b = hE(n, u);
            if (b == -1)
              return vt("InvalidChar", "char '&' is not expected.", Gt(n, u));
            u = b;
          } else if (o === !0 && !Tv(n[u]))
            return vt("InvalidXml", "Extra text at the end", Gt(n, u));
        n[u] === "<" && u--;
      }
    } else {
      if (Tv(n[u]))
        continue;
      return vt("InvalidChar", "char '" + n[u] + "' is not expected.", Gt(n, u));
    }
  if (s) {
    if (i.length == 1)
      return vt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Gt(n, i[0].tagStartPos));
    if (i.length > 0)
      return vt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return vt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Tv(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function Ov(n, r) {
  const i = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const s = n.substr(i, r - i);
      if (r > 5 && s === "xml")
        return vt("InvalidXml", "XML declaration allowed only at the start of the document.", Gt(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Nv(n, r) {
  if (n.length > r + 5 && n[r + 1] === "-" && n[r + 2] === "-") {
    for (r += 3; r < n.length; r++)
      if (n[r] === "-" && n[r + 1] === "-" && n[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (n.length > r + 8 && n[r + 1] === "D" && n[r + 2] === "O" && n[r + 3] === "C" && n[r + 4] === "T" && n[r + 5] === "Y" && n[r + 6] === "P" && n[r + 7] === "E") {
    let i = 1;
    for (r += 8; r < n.length; r++)
      if (n[r] === "<")
        i++;
      else if (n[r] === ">" && (i--, i === 0))
        break;
  } else if (n.length > r + 9 && n[r + 1] === "[" && n[r + 2] === "C" && n[r + 3] === "D" && n[r + 4] === "A" && n[r + 5] === "T" && n[r + 6] === "A" && n[r + 7] === "[") {
    for (r += 8; r < n.length; r++)
      if (n[r] === "]" && n[r + 1] === "]" && n[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const oE = '"', uE = "'";
function cE(n, r) {
  let i = "", s = "", o = !1;
  for (; r < n.length; r++) {
    if (n[r] === oE || n[r] === uE)
      s === "" ? s = n[r] : s !== n[r] || (s = "");
    else if (n[r] === ">" && s === "") {
      o = !0;
      break;
    }
    i += n[r];
  }
  return s !== "" ? !1 : {
    value: i,
    index: r,
    tagClosed: o
  };
}
const fE = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Dv(n, r) {
  const i = N0(n, fE), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return vt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Bs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return vt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Bs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return vt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Bs(i[o]));
    const u = i[o][2];
    if (!pE(u))
      return vt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Bs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return vt("InvalidAttr", "Attribute '" + u + "' is repeated.", Bs(i[o]));
  }
  return !0;
}
function dE(n, r) {
  let i = /\d/;
  for (n[r] === "x" && (r++, i = /[\da-fA-F]/); r < n.length; r++) {
    if (n[r] === ";")
      return r;
    if (!n[r].match(i))
      break;
  }
  return -1;
}
function hE(n, r) {
  if (r++, n[r] === ";")
    return -1;
  if (n[r] === "#")
    return r++, dE(n, r);
  let i = 0;
  for (; r < n.length; r++, i++)
    if (!(n[r].match(/\w/) && i < 20)) {
      if (n[r] === ";")
        break;
      return -1;
    }
  return r;
}
function vt(n, r, i) {
  return {
    err: {
      code: n,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function pE(n) {
  return Kd(n);
}
function mE(n) {
  return Kd(n);
}
function Gt(n, r) {
  const i = n.substring(0, r).split(/\r?\n/);
  return {
    line: i.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: i[i.length - 1].length + 1
  };
}
function Bs(n) {
  return n.startIndex + n[1].length;
}
const gE = {
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
  tagValueProcessor: function(n, r) {
    return r;
  },
  attributeValueProcessor: function(n, r) {
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
  updateTag: function(n, r, i) {
    return n;
  }
  // skipEmptyListItem: false
}, vE = function(n) {
  return Object.assign({}, gE, n);
};
class Us {
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
function yE(n, r) {
  const i = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, f = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !u) {
        if (o && SE(n, r)) {
          r += 7;
          let p, h;
          [p, h, r] = _E(n, r + 1), h.indexOf("&") === -1 && (i[wE(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (o && EE(n, r)) r += 8;
        else if (o && xE(n, r)) r += 8;
        else if (o && CE(n, r)) r += 9;
        else if (bE) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, f = "";
      } else if (n[r] === ">") {
        if (u ? n[r - 1] === "-" && n[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else n[r] === "[" ? o = !0 : f += n[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: i, i: r };
}
function _E(n, r) {
  let i = "";
  for (; r < n.length && n[r] !== "'" && n[r] !== '"'; r++)
    i += n[r];
  if (i = i.trim(), i.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = n[r++];
  let o = "";
  for (; r < n.length && n[r] !== s; r++)
    o += n[r];
  return [i, o, r];
}
function bE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function SE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function EE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function xE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function CE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function wE(n) {
  if (Kd(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const AE = /^[-+]?0x[a-fA-F0-9]+$/, TE = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, OE = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function NE(n, r = {}) {
  if (r = Object.assign({}, OE, r), !n || typeof n != "string") return n;
  let i = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return n;
  if (n === "0") return 0;
  if (r.hex && AE.test(i))
    return ME(i, 16);
  if (i.search(/[eE]/) !== -1) {
    const s = i.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (s) {
      if (r.leadingZeros)
        i = (s[1] || "") + s[3];
      else if (!(s[2] === "0" && s[3][0] === ".")) return n;
      return r.eNotation ? Number(i) : n;
    } else
      return n;
  } else {
    const s = TE.exec(i);
    if (s) {
      const o = s[1], u = s[2];
      let f = DE(s[3]);
      if (!r.leadingZeros && u.length > 0 && o && i[2] !== ".") return n;
      if (!r.leadingZeros && u.length > 0 && !o && i[1] !== ".") return n;
      if (r.leadingZeros && u === n) return 0;
      {
        const p = Number(i), h = "" + p;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? p : n : i.indexOf(".") !== -1 ? h === "0" && f === "" || h === f || o && h === "-" + f ? p : n : u ? f === h || o + f === h ? p : n : i === h || i === o + h ? p : n;
      }
    } else
      return n;
  }
}
function DE(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function ME(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function kE(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const i of n)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class RE {
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
    }, this.addExternalEntities = jE, this.parseXml = BE, this.parseTextData = zE, this.resolveNameSpace = LE, this.buildAttributesMap = IE, this.isItStopNode = ZE, this.replaceEntitiesValue = HE, this.readStopNodeData = GE, this.saveTextToParentTag = qE, this.addChild = UE, this.ignoreAttributesFn = kE(this.options.ignoreAttributes);
  }
}
function jE(n) {
  const r = Object.keys(n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: n[s]
    };
  }
}
function zE(n, r, i, s, o, u, f) {
  if (n !== void 0 && (this.options.trimValues && !s && (n = n.trim()), n.length > 0)) {
    f || (n = this.replaceEntitiesValue(n));
    const p = this.options.tagValueProcessor(r, n, i, o, u);
    return p == null ? n : typeof p != typeof n || p !== n ? p : this.options.trimValues ? Md(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? Md(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function LE(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), i = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = i + r[1]);
  }
  return n;
}
const PE = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function IE(n, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const s = N0(n, PE), o = s.length, u = {};
    for (let f = 0; f < o; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[g] = h : typeof y != typeof h || y !== h ? u[g] = y : u[g] = Md(
            h,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[g] = !0);
    }
    if (!Object.keys(u).length)
      return;
    if (this.options.attributesGroupName) {
      const f = {};
      return f[this.options.attributesGroupName] = u, f;
    }
    return u;
  }
}
const BE = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new Us("!xml");
  let i = r, s = "", o = "";
  for (let u = 0; u < n.length; u++)
    if (n[u] === "<")
      if (n[u + 1] === "/") {
        const p = ka(n, ">", u, "Closing Tag is not closed.");
        let h = n.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const b = h.indexOf(":");
          b !== -1 && (h = h.substr(b + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, o));
        const g = o.substring(o.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let y = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (y = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = o.lastIndexOf("."), o = o.substring(0, y), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (n[u + 1] === "?") {
        let p = Dd(n, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, o), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Us(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, o, p.tagName)), this.addChild(i, h, o);
        }
        u = p.closeIndex + 1;
      } else if (n.substr(u + 1, 3) === "!--") {
        const p = ka(n, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = n.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, o), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (n.substr(u + 1, 2) === "!D") {
        const p = yE(n, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (n.substr(u + 1, 2) === "![") {
        const p = ka(n, "]]>", u, "CDATA is not closed.") - 2, h = n.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, o);
        let g = this.parseTextData(h, i.tagname, o, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = Dd(n, u, this.options.removeNSPrefix), h = p.tagName;
        const g = p.rawTagName;
        let y = p.tagExp, b = p.attrExpPresent, _ = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const v = i;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), h !== r.tagname && (o += o ? "." + h : h), this.isItStopNode(this.options.stopNodes, o, h)) {
          let d = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const E = this.readStopNodeData(n, g, _ + 1);
            if (!E) throw new Error(`Unexpected end of ${g}`);
            u = E.i, d = E.tagContent;
          }
          const S = new Us(h);
          h !== y && b && (S[":@"] = this.buildAttributesMap(y, o, h)), d && (d = this.parseTextData(d, h, o, !0, b, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, d), this.addChild(i, S, o);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new Us(h);
            h !== y && b && (d[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(i, d, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const d = new Us(h);
            this.tagsNodeStack.push(i), h !== y && b && (d[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(i, d, o), i = d;
          }
          s = "", u = _;
        }
      }
    else
      s += n[u];
  return r.child;
};
function UE(n, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), n.addChild(r));
}
const HE = function(n) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const i = this.docTypeEntities[r];
      n = n.replace(i.regx, i.val);
    }
    for (let r in this.lastEntities) {
      const i = this.lastEntities[r];
      n = n.replace(i.regex, i.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const i = this.htmlEntities[r];
        n = n.replace(i.regex, i.val);
      }
    n = n.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return n;
};
function qE(n, r, i, s) {
  return n && (s === void 0 && (s = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function ZE(n, r, i) {
  const s = "*." + i;
  for (const o in n) {
    const u = n[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function FE(n, r, i = ">") {
  let s, o = "";
  for (let u = r; u < n.length; u++) {
    let f = n[u];
    if (s)
      f === s && (s = "");
    else if (f === '"' || f === "'")
      s = f;
    else if (f === i[0])
      if (i[1]) {
        if (n[u + 1] === i[1])
          return {
            data: o,
            index: u
          };
      } else
        return {
          data: o,
          index: u
        };
    else f === "	" && (f = " ");
    o += f;
  }
}
function ka(n, r, i, s) {
  const o = n.indexOf(r, i);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function Dd(n, r, i, s = ">") {
  const o = FE(n, r + 1, s);
  if (!o) return;
  let u = o.data;
  const f = o.index, p = u.search(/\s/);
  let h = u, g = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = h;
  if (i) {
    const b = h.indexOf(":");
    b !== -1 && (h = h.substr(b + 1), g = h !== o.data.substr(b + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: y
  };
}
function GE(n, r, i) {
  const s = i;
  let o = 1;
  for (; i < n.length; i++)
    if (n[i] === "<")
      if (n[i + 1] === "/") {
        const u = ka(n, ">", i, `${r} is not closed`);
        if (n.substring(i + 2, u).trim() === r && (o--, o === 0))
          return {
            tagContent: n.substring(s, i),
            i: u
          };
        i = u;
      } else if (n[i + 1] === "?")
        i = ka(n, "?>", i + 1, "StopNode is not closed.");
      else if (n.substr(i + 1, 3) === "!--")
        i = ka(n, "-->", i + 3, "StopNode is not closed.");
      else if (n.substr(i + 1, 2) === "![")
        i = ka(n, "]]>", i, "StopNode is not closed.") - 2;
      else {
        const u = Dd(n, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function Md(n, r, i) {
  if (r && typeof n == "string") {
    const s = n.trim();
    return s === "true" ? !0 : s === "false" ? !1 : NE(n, i);
  } else
    return sE(n) ? n : "";
}
function VE(n, r) {
  return M0(n, r);
}
function M0(n, r, i) {
  let s;
  const o = {};
  for (let u = 0; u < n.length; u++) {
    const f = n[u], p = YE(f);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let g = M0(f[p], r, h);
        const y = $E(g, r);
        f[":@"] ? XE(g, f[":@"], h, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(g)) : r.isArray(p, h, y) ? o[p] = [g] : o[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function YE(n) {
  const r = Object.keys(n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function XE(n, r, i, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let f = 0; f < u; f++) {
      const p = o[f];
      s.isArray(p, i + "." + p, !0, !0) ? n[p] = [r[p]] : n[p] = r[p];
    }
  }
}
function $E(n, r) {
  const { textNodeName: i } = r, s = Object.keys(n).length;
  return !!(s === 0 || s === 1 && (n[i] || typeof n[i] == "boolean" || n[i] === 0));
}
class QE {
  constructor(r) {
    this.externalEntities = {}, this.options = vE(r);
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
      const u = D0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new RE(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : VE(o, this.options);
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
const KE = {
  validate: D0
}, JE = new QE({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function kd(n, r) {
  if (!(!r || !n || !r.properties))
    for (const i in r.properties) {
      if (!n.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let o = n[i];
      s.type === "array" && !Array.isArray(o) && (o = [o], n[i] = o), s.type === "object" && typeof o == "object" && o !== null ? kd(o, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(o) && o.forEach((u) => kd(u, s.items)), s.type === "string" && typeof o != "string" ? n[i] = String(o) : s.type === "array" && s.items?.type === "string" && Array.isArray(o) && (n[i] = o.map(String));
    }
}
function k0(n, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, o = n.match(s);
  let u = o ? o[1].trim() : n.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const h = KE.validate(u);
          if (h !== !0)
            throw new Error(`Model response is not valid XML: ${h.err.msg}`);
        }
        let f = JE.parse(u);
        if (f.root)
          f = f.root;
        else if (f.response)
          return f.response;
        return i.schema && kd(f, i.schema), f;
      case "json":
        return JSON.parse(u);
      case "none":
        return u;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (f) {
    if (r !== "none" && !i.schema) {
      const p = u.match(/<response>([\s\S]*)/);
      if (p) return p[1];
      const h = u.match(/"response":\s*"([\s\S]*)/);
      return h ? h[1].replace(/"\s*}\s*$/, "") : u;
    }
    throw console.error(`Error parsing response in format '${r}':`, f), console.error("Raw content received:", n), r === "xml" ? f.message.startsWith("Model response is not valid XML:") ? f : new Error(`Model response is not valid XML: ${f.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${f.message}`);
  }
}
function Mv(n, r) {
  const i = n.trim();
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
var Oo = { exports: {} }, No = { exports: {} }, Bn = {}, Wt = {}, kv;
function tn() {
  if (kv) return Wt;
  kv = 1, Wt.__esModule = !0, Wt.extend = o, Wt.indexOf = h, Wt.escapeExpression = g, Wt.isEmpty = y, Wt.createFrame = b, Wt.blockParams = _, Wt.appendContextPath = v;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, i = /[&<>"'`=]/;
  function s(d) {
    return n[d];
  }
  function o(d) {
    for (var S = 1; S < arguments.length; S++)
      for (var E in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], E) && (d[E] = arguments[S][E]);
    return d;
  }
  var u = Object.prototype.toString;
  Wt.toString = u;
  var f = function(S) {
    return typeof S == "function";
  };
  f(/x/) && (Wt.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), Wt.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  Wt.isArray = p;
  function h(d, S) {
    for (var E = 0, O = d.length; E < O; E++)
      if (d[E] === S)
        return E;
    return -1;
  }
  function g(d) {
    if (typeof d != "string") {
      if (d && d.toHTML)
        return d.toHTML();
      if (d == null)
        return "";
      if (!d)
        return d + "";
      d = "" + d;
    }
    return i.test(d) ? d.replace(r, s) : d;
  }
  function y(d) {
    return !d && d !== 0 ? !0 : !!(p(d) && d.length === 0);
  }
  function b(d) {
    var S = o({}, d);
    return S._parent = d, S;
  }
  function _(d, S) {
    return d.path = S, d;
  }
  function v(d, S) {
    return (d ? d + "." : "") + S;
  }
  return Wt;
}
var Do = { exports: {} }, Rv;
function qn() {
  return Rv || (Rv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var f = u && u.loc, p = void 0, h = void 0, g = void 0, y = void 0;
      f && (p = f.start.line, h = f.end.line, g = f.start.column, y = f.end.column, o += " - " + p + ":" + g);
      for (var b = Error.prototype.constructor.call(this, o), _ = 0; _ < i.length; _++)
        this[i[_]] = b[i[_]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: y,
          enumerable: !0
        })) : (this.column = g, this.endColumn = y));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, n.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var Hs = {}, Mo = { exports: {} }, jv;
function WE() {
  return jv || (jv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = tn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(o, u) {
        var f = u.inverse, p = u.fn;
        if (o === !0)
          return p(this);
        if (o === !1 || o == null)
          return f(this);
        if (i.isArray(o))
          return o.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(o, u)) : f(this);
        if (u.data && u.ids) {
          var h = i.createFrame(u.data);
          h.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return p(o, u);
      });
    }, n.exports = r.default;
  })(Mo, Mo.exports)), Mo.exports;
}
var ko = { exports: {} }, zv;
function ex() {
  return zv || (zv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = tn(), o = qn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var g = h.fn, y = h.inverse, b = 0, _ = "", v = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (v = s.createFrame(h.data));
        function S(x, T, M) {
          v && (v.key = x, v.index = T, v.first = T === 0, v.last = !!M, d && (v.contextPath = d + x)), _ = _ + g(p[x], {
            data: v,
            blockParams: s.blockParams([p[x], x], [d + x, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var E = p.length; b < E; b++)
              b in p && S(b, b, b === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var O = [], w = p[Symbol.iterator](), D = w.next(); !D.done; D = w.next())
              O.push(D.value);
            p = O;
            for (var E = p.length; b < E; b++)
              S(b, b, b === p.length - 1);
          } else
            (function() {
              var x = void 0;
              Object.keys(p).forEach(function(T) {
                x !== void 0 && S(x, b - 1), x = T, b++;
              }), x !== void 0 && S(x, b - 1, !0);
            })();
        return b === 0 && (_ = y(this)), _;
      });
    }, n.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var Ro = { exports: {} }, Lv;
function tx() {
  return Lv || (Lv = 1, (function(n, r) {
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
    }, n.exports = r.default;
  })(Ro, Ro.exports)), Ro.exports;
}
var jo = { exports: {} }, Pv;
function nx() {
  return Pv || (Pv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = tn(), o = qn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("if", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(p) && (p = p.call(this)), !h.hash.includeZero && !p || s.isEmpty(p) ? h.inverse(this) : h.fn(this);
      }), f.registerHelper("unless", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, p, {
          fn: h.inverse,
          inverse: h.fn,
          hash: h.hash
        });
      });
    }, n.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var zo = { exports: {} }, Iv;
function rx() {
  return Iv || (Iv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], o = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        o.hash.level != null ? f = o.hash.level : o.data && o.data.level != null && (f = o.data.level), s[0] = f, i.log.apply(i, s);
      });
    }, n.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var Lo = { exports: {} }, Bv;
function ax() {
  return Bv || (Bv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, n.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Po = { exports: {} }, Uv;
function ix() {
  return Uv || (Uv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = tn(), o = qn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("with", function(p, h) {
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
    }, n.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Hv;
function R0() {
  if (Hv) return Hs;
  Hv = 1, Hs.__esModule = !0, Hs.registerDefaultHelpers = S, Hs.moveHelperToHooks = E;
  function n(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = WE(), i = n(r), s = ex(), o = n(s), u = tx(), f = n(u), p = nx(), h = n(p), g = rx(), y = n(g), b = ax(), _ = n(b), v = ix(), d = n(v);
  function S(O) {
    i.default(O), o.default(O), f.default(O), h.default(O), y.default(O), _.default(O), d.default(O);
  }
  function E(O, w, D) {
    O.helpers[w] && (O.hooks[w] = O.helpers[w], D || delete O.helpers[w]);
  }
  return Hs;
}
var Io = {}, Bo = { exports: {} }, qv;
function sx() {
  return qv || (qv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = tn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, f, p) {
        var h = o;
        return u.partials || (u.partials = {}, h = function(g, y) {
          var b = f.partials;
          f.partials = i.extend({}, b, u.partials);
          var _ = o(g, y);
          return f.partials = b, _;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, n.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var Zv;
function lx() {
  if (Zv) return Io;
  Zv = 1, Io.__esModule = !0, Io.registerDefaultDecorators = s;
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = sx(), i = n(r);
  function s(o) {
    i.default(o);
  }
  return Io;
}
var Uo = { exports: {} }, Fv;
function j0() {
  return Fv || (Fv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = tn(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(u) {
        if (typeof u == "string") {
          var f = i.indexOf(s.methodMap, u.toLowerCase());
          f >= 0 ? u = f : u = parseInt(u, 10);
        }
        return u;
      },
      // Can be overridden in the host environment
      log: function(u) {
        if (u = s.lookupLevel(u), typeof console < "u" && s.lookupLevel(s.level) <= u) {
          var f = s.methodMap[u];
          console[f] || (f = "log");
          for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
            h[g - 1] = arguments[g];
          console[f].apply(console, h);
        }
      }
    };
    r.default = s, n.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Ti = {}, Ho = {}, Gv;
function ox() {
  if (Gv) return Ho;
  Gv = 1, Ho.__esModule = !0, Ho.createNewLookupObject = r;
  var n = tn();
  function r() {
    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Ho;
}
var Vv;
function z0() {
  if (Vv) return Ti;
  Vv = 1, Ti.__esModule = !0, Ti.createProtoAccessControl = u, Ti.resultIsAllowed = f, Ti.resetLoggedProperties = g;
  function n(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = ox(), i = j0(), s = n(i), o = /* @__PURE__ */ Object.create(null);
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
  function f(y, b, _) {
    return p(typeof y == "function" ? b.methods : b.properties, _);
  }
  function p(y, b) {
    return y.whitelist[b] !== void 0 ? y.whitelist[b] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (h(b), !1);
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
  return Ti;
}
var Yv;
function Jd() {
  if (Yv) return Bn;
  Yv = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = d;
  function n(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = tn(), i = qn(), s = n(i), o = R0(), u = lx(), f = j0(), p = n(f), h = z0(), g = "4.7.8";
  Bn.VERSION = g;
  var y = 8;
  Bn.COMPILER_REVISION = y;
  var b = 7;
  Bn.LAST_COMPATIBLE_COMPILER_REVISION = b;
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
  Bn.REVISION_CHANGES = _;
  var v = "[object Object]";
  function d(E, O, w) {
    this.helpers = E || {}, this.partials = O || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
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
  return Bn.log = S, Bn.createFrame = r.createFrame, Bn.logger = p.default, Bn;
}
var qo = { exports: {} }, Xv;
function ux() {
  return Xv || (Xv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, n.exports = r.default;
  })(qo, qo.exports)), qo.exports;
}
var yr = {}, Zo = {}, $v;
function cx() {
  if ($v) return Zo;
  $v = 1, Zo.__esModule = !0, Zo.wrapHelper = n;
  function n(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Zo;
}
var Qv;
function fx() {
  if (Qv) return yr;
  Qv = 1, yr.__esModule = !0, yr.checkRevision = y, yr.template = b, yr.wrapProgram = _, yr.resolvePartial = v, yr.invokePartial = d, yr.noop = S;
  function n(x) {
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
  var i = tn(), s = r(i), o = qn(), u = n(o), f = Jd(), p = R0(), h = cx(), g = z0();
  function y(x) {
    var T = x && x[0] || 1, M = f.COMPILER_REVISION;
    if (!(T >= f.LAST_COMPATIBLE_COMPILER_REVISION && T <= f.COMPILER_REVISION))
      if (T < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], q = f.REVISION_CHANGES[T];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + q + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + x[1] + ").");
  }
  function b(x, T) {
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
      }), he = T.VM.invokePartial.call(this, B, V, oe);
      if (he == null && T.compile && ($.partials[$.name] = T.compile(B, x.compilerOptions, T), he = $.partials[$.name](V, oe)), he != null) {
        if ($.indent) {
          for (var me = he.split(`
`), U = 0, re = me.length; U < re && !(!me[U] && U + 1 === re); U++)
            me[U] = $.indent + me[U];
          he = me.join(`
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
          var me = V[he] && q.lookupProperty(V[he], $);
          if (me != null)
            return V[he][$];
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
      program: function(V, $, oe, he, me) {
        var U = this.programs[V], re = this.fn(V);
        return $ || me || he || oe ? U = _(this, V, re, $, oe, he, me) : U || (U = this.programs[V] = _(this, V, re)), U;
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
      var oe = void 0, he = x.useBlockParams ? [] : void 0;
      x.useDepths && (V.depths ? oe = B != V.depths[0] ? [B].concat(V.depths) : V.depths : oe = [B]);
      function me(U) {
        return "" + x.main(q, U, q.helpers, q.partials, $, he, oe);
      }
      return me = O(x.main, me, q, V.depths || [], $, he), me(B, V);
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
      return _(q, B, x[B], V, 0, $, oe);
    }, G;
  }
  function _(x, T, M, k, q, G, B) {
    function V($) {
      var oe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], he = B;
      return B && $ != B[0] && !($ === x.nullContext && B[0] === null) && (he = [$].concat(B)), M(x, $, x.helpers, x.partials, oe.data || k, G && [oe.blockParams].concat(G), he);
    }
    return V = O(M, V, x, B, k, G), V.program = T, V.depth = B ? B.length : 0, V.blockParams = q || 0, V;
  }
  function v(x, T, M) {
    return x ? !x.call && !M.name && (M.name = x, x = M.partials[x]) : M.name === "@partial-block" ? x = M.data["partial-block"] : x = M.partials[M.name], x;
  }
  function d(x, T, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var q = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = f.createFrame(M.data);
      var G = M.fn;
      q = M.data["partial-block"] = function(V) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = f.createFrame($.data), $.data["partial-block"] = k, G(V, $);
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
    return (!T || !("root" in T)) && (T = T ? f.createFrame(T) : {}, T.root = x), T;
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
var Fo = { exports: {} }, Kv;
function L0() {
  return Kv || (Kv = 1, (function(n, r) {
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
    }, n.exports = r.default;
  })(Fo, Fo.exports)), Fo.exports;
}
var Jv;
function dx() {
  return Jv || (Jv = 1, (function(n, r) {
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
    var o = Jd(), u = s(o), f = ux(), p = i(f), h = qn(), g = i(h), y = tn(), b = s(y), _ = fx(), v = s(_), d = L0(), S = i(d);
    function E() {
      var w = new u.HandlebarsEnvironment();
      return b.extend(w, u), w.SafeString = p.default, w.Exception = g.default, w.Utils = b, w.escapeExpression = b.escapeExpression, w.VM = v, w.template = function(D) {
        return v.template(D, w);
      }, w;
    }
    var O = E();
    O.create = E, S.default(O), O.default = O, r.default = O, n.exports = r.default;
  })(No, No.exports)), No.exports;
}
var Go = { exports: {} }, Wv;
function P0() {
  return Wv || (Wv = 1, (function(n, r) {
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
    r.default = i, n.exports = r.default;
  })(Go, Go.exports)), Go.exports;
}
var Oi = {}, Vo = { exports: {} }, ey;
function hx() {
  return ey || (ey = 1, (function(n, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, h, g, y, b, _, v) {
          var d = _.length - 1;
          switch (b) {
            case 1:
              return _[d - 1];
            case 2:
              this.$ = y.prepareProgram(_[d]);
              break;
            case 3:
              this.$ = _[d];
              break;
            case 4:
              this.$ = _[d];
              break;
            case 5:
              this.$ = _[d];
              break;
            case 6:
              this.$ = _[d];
              break;
            case 7:
              this.$ = _[d];
              break;
            case 8:
              this.$ = _[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(_[d]),
                strip: y.stripFlags(_[d], _[d]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: _[d],
                value: _[d],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(_[d - 2], _[d - 1], _[d], this._$);
              break;
            case 12:
              this.$ = { path: _[d - 3], params: _[d - 2], hash: _[d - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(_[d - 3], _[d - 2], _[d - 1], _[d], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(_[d - 3], _[d - 2], _[d - 1], _[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: _[d - 5], path: _[d - 4], params: _[d - 3], hash: _[d - 2], blockParams: _[d - 1], strip: y.stripFlags(_[d - 5], _[d]) };
              break;
            case 16:
              this.$ = { path: _[d - 4], params: _[d - 3], hash: _[d - 2], blockParams: _[d - 1], strip: y.stripFlags(_[d - 5], _[d]) };
              break;
            case 17:
              this.$ = { path: _[d - 4], params: _[d - 3], hash: _[d - 2], blockParams: _[d - 1], strip: y.stripFlags(_[d - 5], _[d]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(_[d - 1], _[d - 1]), program: _[d] };
              break;
            case 19:
              var S = y.prepareBlock(_[d - 2], _[d - 1], _[d], _[d], !1, this._$), E = y.prepareProgram([S], _[d - 1].loc);
              E.chained = !0, this.$ = { strip: _[d - 2].strip, program: E, chain: !0 };
              break;
            case 20:
              this.$ = _[d];
              break;
            case 21:
              this.$ = { path: _[d - 1], strip: y.stripFlags(_[d - 2], _[d]) };
              break;
            case 22:
              this.$ = y.prepareMustache(_[d - 3], _[d - 2], _[d - 1], _[d - 4], y.stripFlags(_[d - 4], _[d]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(_[d - 3], _[d - 2], _[d - 1], _[d - 4], y.stripFlags(_[d - 4], _[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: _[d - 3],
                params: _[d - 2],
                hash: _[d - 1],
                indent: "",
                strip: y.stripFlags(_[d - 4], _[d]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(_[d - 2], _[d - 1], _[d], this._$);
              break;
            case 26:
              this.$ = { path: _[d - 3], params: _[d - 2], hash: _[d - 1], strip: y.stripFlags(_[d - 4], _[d]) };
              break;
            case 27:
              this.$ = _[d];
              break;
            case 28:
              this.$ = _[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: _[d - 3],
                params: _[d - 2],
                hash: _[d - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: _[d], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(_[d - 2]), value: _[d], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(_[d - 1]);
              break;
            case 33:
              this.$ = _[d];
              break;
            case 34:
              this.$ = _[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: _[d], original: _[d], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(_[d]), original: Number(_[d]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: _[d] === "true", original: _[d] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = _[d];
              break;
            case 41:
              this.$ = _[d];
              break;
            case 42:
              this.$ = y.preparePath(!0, _[d], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, _[d], this._$);
              break;
            case 44:
              _[d - 2].push({ part: y.id(_[d]), original: _[d], separator: _[d - 1] }), this.$ = _[d - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(_[d]), original: _[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              _[d - 1].push(_[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              _[d - 1].push(_[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              _[d - 1].push(_[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              _[d - 1].push(_[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              _[d - 1].push(_[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              _[d - 1].push(_[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              _[d - 1].push(_[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              _[d - 1].push(_[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              _[d - 1].push(_[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              _[d - 1].push(_[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              _[d - 1].push(_[d]);
              break;
            case 98:
              this.$ = [_[d]];
              break;
            case 99:
              _[d - 1].push(_[d]);
              break;
            case 100:
              this.$ = [_[d]];
              break;
            case 101:
              _[d - 1].push(_[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, h) {
          throw new Error(p);
        },
        parse: function(p) {
          var h = this, g = [0], y = [null], b = [], _ = this.table, v = "", d = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          b.push(E);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var oe;
            return oe = h.lexer.lex() || 1, typeof oe != "number" && (oe = h.symbols_[oe] || oe), oe;
          }
          for (var D, x, T, M, k = {}, q, G, B, V; ; ) {
            if (x = g[g.length - 1], this.defaultActions[x] ? T = this.defaultActions[x] : ((D === null || typeof D > "u") && (D = w()), T = _[x] && _[x][D]), typeof T > "u" || !T.length || !T[0]) {
              var $ = "";
              {
                V = [];
                for (q in _[x]) this.terminals_[q] && q > 2 && V.push("'" + this.terminals_[q] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + V.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : $ = "Parse error on line " + (d + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: E, expected: V });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + x + ", token: " + D);
            switch (T[0]) {
              case 1:
                g.push(D), y.push(this.lexer.yytext), b.push(this.lexer.yylloc), g.push(T[1]), D = null, S = this.lexer.yyleng, v = this.lexer.yytext, d = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (G = this.productions_[T[1]][1], k.$ = y[y.length - G], k._$ = { first_line: b[b.length - (G || 1)].first_line, last_line: b[b.length - 1].last_line, first_column: b[b.length - (G || 1)].first_column, last_column: b[b.length - 1].last_column }, O && (k._$.range = [b[b.length - (G || 1)].range[0], b[b.length - 1].range[1]]), M = this.performAction.call(k, v, S, d, this.yy, T[1], y, b), typeof M < "u")
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
        var f = {
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
            var h, g, y, b, _;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), d = 0; d < v.length && (y = this._input.match(this.rules[v[d]]), !(y && (!g || y[0].length > g[0].length) && (g = y, b = d, !this.options.flex))); d++)
              ;
            return g ? (_ = g[0].match(/(?:\r\n?|\n).*/g), _ && (this.yylineno += _.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: _ ? _[_.length - 1].length - _[_.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], h = this.performAction.call(this, this.yy, this, v[b], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(h, g, y, b) {
          function _(v, d) {
            return g.yytext = g.yytext.substring(v, g.yyleng - d + v);
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
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      s.lexer = o;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = i, n.exports = r.default;
  })(Vo, Vo.exports)), Vo.exports;
}
var Yo = { exports: {} }, Xo = { exports: {} }, ty;
function I0() {
  return ty || (ty = 1, (function(n, r) {
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
      MustacheStatement: f,
      Decorator: f,
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
      SubExpression: f,
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
    function f(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function p(g) {
      f.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function h(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, n.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var ny;
function px() {
  return ny || (ny = 1, (function(n, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = I0(), o = i(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new o.default(), u.prototype.Program = function(y) {
      var b = !this.options.ignoreStandalone, _ = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, d = 0, S = v.length; d < S; d++) {
        var E = v[d], O = this.accept(E);
        if (O) {
          var w = f(v, d, _), D = p(v, d, _), x = O.openStandalone && w, T = O.closeStandalone && D, M = O.inlineStandalone && w && D;
          O.close && h(v, d, !0), O.open && g(v, d, !0), b && M && (h(v, d), g(v, d) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(v[d - 1].original)[1])), b && x && (h((E.program || E.inverse).body), g(v, d)), b && T && (h(v, d), g((E.inverse || E.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var b = y.program || y.inverse, _ = y.program && y.inverse, v = _, d = _;
      if (_ && _.chained)
        for (v = _.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var S = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(b.body),
        closeStandalone: f((v || b).body)
      };
      if (y.openStrip.close && h(b.body, null, !0), _) {
        var E = y.inverseStrip;
        E.open && g(b.body, null, !0), E.close && h(v.body, null, !0), y.closeStrip.open && g(d.body, null, !0), !this.options.ignoreStandalone && f(b.body) && p(v.body) && (g(b.body), h(v.body));
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
    function f(y, b, _) {
      b === void 0 && (b = y.length);
      var v = y[b - 1], d = y[b - 2];
      if (!v)
        return _;
      if (v.type === "ContentStatement")
        return (d || !_ ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function p(y, b, _) {
      b === void 0 && (b = -1);
      var v = y[b + 1], d = y[b + 2];
      if (!v)
        return _;
      if (v.type === "ContentStatement")
        return (d || !_ ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function h(y, b, _) {
      var v = y[b == null ? 0 : b + 1];
      if (!(!v || v.type !== "ContentStatement" || !_ && v.rightStripped)) {
        var d = v.value;
        v.value = v.value.replace(_ ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== d;
      }
    }
    function g(y, b, _) {
      var v = y[b == null ? y.length - 1 : b - 1];
      if (!(!v || v.type !== "ContentStatement" || !_ && v.leftStripped)) {
        var d = v.value;
        return v.value = v.value.replace(_ ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== d, v.leftStripped;
      }
    }
    r.default = u, n.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var dn = {}, ry;
function mx() {
  if (ry) return dn;
  ry = 1, dn.__esModule = !0, dn.SourceLocation = o, dn.id = u, dn.stripFlags = f, dn.stripComment = p, dn.preparePath = h, dn.prepareMustache = g, dn.prepareRawBlock = y, dn.prepareBlock = b, dn.prepareProgram = _, dn.preparePartialBlock = v;
  function n(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = qn(), i = n(r);
  function s(d, S) {
    if (S = S.path ? S.path.original : S, d.path.original !== S) {
      var E = { loc: d.path.loc };
      throw new i.default(d.path.original + " doesn't match " + S, E);
    }
  }
  function o(d, S) {
    this.source = d, this.start = {
      line: S.first_line,
      column: S.first_column
    }, this.end = {
      line: S.last_line,
      column: S.last_column
    };
  }
  function u(d) {
    return /^\[.*\]$/.test(d) ? d.substring(1, d.length - 1) : d;
  }
  function f(d, S) {
    return {
      open: d.charAt(2) === "~",
      close: S.charAt(S.length - 3) === "~"
    };
  }
  function p(d) {
    return d.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(d, S, E) {
    E = this.locInfo(E);
    for (var O = d ? "@" : "", w = [], D = 0, x = 0, T = S.length; x < T; x++) {
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
      data: d,
      depth: D,
      parts: w,
      original: O,
      loc: E
    };
  }
  function g(d, S, E, O, w, D) {
    var x = O.charAt(3) || O.charAt(2), T = x !== "{" && x !== "&", M = /\*/.test(O);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: d,
      params: S,
      hash: E,
      escaped: T,
      strip: w,
      loc: this.locInfo(D)
    };
  }
  function y(d, S, E, O) {
    s(d, E), O = this.locInfo(O);
    var w = {
      type: "Program",
      body: S,
      strip: {},
      loc: O
    };
    return {
      type: "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: w,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function b(d, S, E, O, w, D) {
    O && O.path && s(d, O);
    var x = /\*/.test(d.open);
    S.blockParams = d.blockParams;
    var T = void 0, M = void 0;
    if (E) {
      if (x)
        throw new i.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = O.strip), M = E.strip, T = E.program;
    }
    return w && (w = T, T = S, S = w), {
      type: x ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      inverse: T,
      openStrip: d.strip,
      inverseStrip: M,
      closeStrip: O && O.strip,
      loc: this.locInfo(D)
    };
  }
  function _(d, S) {
    if (!S && d.length) {
      var E = d[0].loc, O = d[d.length - 1].loc;
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
      body: d,
      strip: {},
      loc: S
    };
  }
  function v(d, S, E, O) {
    return s(d, E), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      openStrip: d.strip,
      closeStrip: E && E.strip,
      loc: this.locInfo(O)
    };
  }
  return dn;
}
var ay;
function gx() {
  if (ay) return Oi;
  ay = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = y, Oi.parse = b;
  function n(_) {
    if (_ && _.__esModule)
      return _;
    var v = {};
    if (_ != null)
      for (var d in _)
        Object.prototype.hasOwnProperty.call(_, d) && (v[d] = _[d]);
    return v.default = _, v;
  }
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var i = hx(), s = r(i), o = px(), u = r(o), f = mx(), p = n(f), h = tn();
  Oi.parser = s.default;
  var g = {};
  h.extend(g, p);
  function y(_, v) {
    if (_.type === "Program")
      return _;
    s.default.yy = g, g.locInfo = function(S) {
      return new g.SourceLocation(v && v.srcName, S);
    };
    var d = s.default.parse(_);
    return d;
  }
  function b(_, v) {
    var d = y(_, v), S = new u.default(v);
    return S.accept(d);
  }
  return Oi;
}
var Ni = {}, iy;
function vx() {
  if (iy) return Ni;
  iy = 1, Ni.__esModule = !0, Ni.Compiler = p, Ni.precompile = h, Ni.compile = g;
  function n(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = qn(), i = n(r), s = tn(), o = P0(), u = n(o), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(v) {
      var d = this.opcodes.length;
      if (v.opcodes.length !== d)
        return !1;
      for (var S = 0; S < d; S++) {
        var E = this.opcodes[S], O = v.opcodes[S];
        if (E.opcode !== O.opcode || !y(E.args, O.args))
          return !1;
      }
      d = this.children.length;
      for (var S = 0; S < d; S++)
        if (!this.children[S].equals(v.children[S]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(v, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(v);
    },
    compileProgram: function(v) {
      var d = new this.compiler(), S = d.compile(v, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[E] = S, this.useDepths = this.useDepths || S.useDepths, E;
    },
    accept: function(v) {
      if (!this[v.type])
        throw new i.default("Unknown type: " + v.type, v);
      this.sourceNode.unshift(v);
      var d = this[v.type](v);
      return this.sourceNode.shift(), d;
    },
    Program: function(v) {
      this.options.blockParams.unshift(v.blockParams);
      for (var d = v.body, S = d.length, E = 0; E < S; E++)
        this.accept(d[E]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      b(v);
      var d = v.program, S = v.inverse;
      d = d && this.compileProgram(d), S = S && this.compileProgram(S);
      var E = this.classifySexpr(v);
      E === "helper" ? this.helperSexpr(v, d, S) : E === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, d, S), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var d = v.program && this.compileProgram(v.program), S = this.setupFullMustacheParams(v, d, void 0), E = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, E.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var d = v.program;
      d && (d = this.compileProgram(v.program));
      var S = v.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, v);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = v.name.original, O = v.name.type === "SubExpression";
      O && this.accept(v.name), this.setupFullMustacheParams(v, d, void 0, !0);
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
      b(v);
      var d = this.classifySexpr(v);
      d === "simple" ? this.simpleSexpr(v) : d === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, d, S) {
      var E = v.path, O = E.parts[0], w = d != null || S != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", S), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", O, w);
    },
    simpleSexpr: function(v) {
      var d = v.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, d, S) {
      var E = this.setupFullMustacheParams(v, d, S), O = v.path, w = O.parts[0];
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
      var d = v.parts[0], S = u.default.helpers.scopedId(v), E = !v.depth && !S && this.blockParamIndex(d);
      E ? this.opcode("lookupBlockParam", E, v.parts) : d ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, S) : this.opcode("pushContext");
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
      var d = v.pairs, S = 0, E = d.length;
      for (this.opcode("pushHash"); S < E; S++)
        this.pushParam(d[S].value);
      for (; S--; )
        this.opcode("assignToHash", d[S].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(v) {
      this.opcodes.push({
        opcode: v,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(v) {
      v && (this.useDepths = !0);
    },
    classifySexpr: function(v) {
      var d = u.default.helpers.simpleId(v.path), S = d && !!this.blockParamIndex(v.path.parts[0]), E = !S && u.default.helpers.helperExpression(v), O = !S && (E || d);
      if (O && !E) {
        var w = v.path.parts[0], D = this.options;
        D.knownHelpers[w] ? E = !0 : D.knownHelpersOnly && (O = !1);
      }
      return E ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var d = 0, S = v.length; d < S; d++)
        this.pushParam(v[d]);
    },
    pushParam: function(v) {
      var d = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", d, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (S = this.blockParamIndex(v.parts[0])), S) {
            var E = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, E);
          } else
            d = v.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, d);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, d, S, E) {
      var O = v.params;
      return this.pushParams(O), this.opcode("pushProgram", d), this.opcode("pushProgram", S), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", E), O;
    },
    blockParamIndex: function(v) {
      for (var d = 0, S = this.options.blockParams.length; d < S; d++) {
        var E = this.options.blockParams[d], O = E && s.indexOf(E, v);
        if (E && O >= 0)
          return [d, O];
      }
    }
  };
  function h(_, v, d) {
    if (_ == null || typeof _ != "string" && _.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + _);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = d.parse(_, v), E = new d.Compiler().compile(S, v);
    return new d.JavaScriptCompiler().compile(E, v);
  }
  function g(_, v, d) {
    if (v === void 0 && (v = {}), _ == null || typeof _ != "string" && _.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + _);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = void 0;
    function E() {
      var w = d.parse(_, v), D = new d.Compiler().compile(w, v), x = new d.JavaScriptCompiler().compile(D, v, void 0, !0);
      return d.template(x);
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
  function y(_, v) {
    if (_ === v)
      return !0;
    if (s.isArray(_) && s.isArray(v) && _.length === v.length) {
      for (var d = 0; d < _.length; d++)
        if (!y(_[d], v[d]))
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
  return Ni;
}
var $o = { exports: {} }, Qo = { exports: {} }, qs = {}, ld = {}, Ko = {}, Jo = {}, sy;
function yx() {
  if (sy) return Jo;
  sy = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Jo.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Jo.decode = function(r) {
    var i = 65, s = 90, o = 97, u = 122, f = 48, p = 57, h = 43, g = 47, y = 26, b = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + y : f <= r && r <= p ? r - f + b : r == h ? 62 : r == g ? 63 : -1;
  }, Jo;
}
var ly;
function B0() {
  if (ly) return Ko;
  ly = 1;
  var n = yx(), r = 5, i = 1 << r, s = i - 1, o = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, g = p >> 1;
    return h ? -g : g;
  }
  return Ko.encode = function(h) {
    var g = "", y, b = u(h);
    do
      y = b & s, b >>>= r, b > 0 && (y |= o), g += n.encode(y);
    while (b > 0);
    return g;
  }, Ko.decode = function(h, g, y) {
    var b = h.length, _ = 0, v = 0, d, S;
    do {
      if (g >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = n.decode(h.charCodeAt(g++)), S === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(g - 1));
      d = !!(S & o), S &= s, _ = _ + (S << v), v += r;
    } while (d);
    y.value = f(_), y.rest = g;
  }, Ko;
}
var od = {}, oy;
function ll() {
  return oy || (oy = 1, (function(n) {
    function r(x, T, M) {
      if (T in x)
        return x[T];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + T + '" is a required argument.');
    }
    n.getArg = r;
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
    n.urlParse = o;
    function u(x) {
      var T = "";
      return x.scheme && (T += x.scheme + ":"), T += "//", x.auth && (T += x.auth + "@"), x.host && (T += x.host), x.port && (T += ":" + x.port), x.path && (T += x.path), T;
    }
    n.urlGenerate = u;
    function f(x) {
      var T = x, M = o(x);
      if (M) {
        if (!M.path)
          return x;
        T = M.path;
      }
      for (var k = n.isAbsolute(T), q = T.split(/\/+/), G, B = 0, V = q.length - 1; V >= 0; V--)
        G = q[V], G === "." ? q.splice(V, 1) : G === ".." ? B++ : B > 0 && (G === "" ? (q.splice(V + 1, B), B = 0) : (q.splice(V, 2), B--));
      return T = q.join("/"), T === "" && (T = k ? "/" : "."), M ? (M.path = T, u(M)) : T;
    }
    n.normalize = f;
    function p(x, T) {
      x === "" && (x = "."), T === "" && (T = ".");
      var M = o(T), k = o(x);
      if (k && (x = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || T.match(s))
        return T;
      if (k && !k.host && !k.path)
        return k.host = T, u(k);
      var q = T.charAt(0) === "/" ? T : f(x.replace(/\/+$/, "") + "/" + T);
      return k ? (k.path = q, u(k)) : q;
    }
    n.join = p, n.isAbsolute = function(x) {
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
    n.relative = h;
    var g = (function() {
      var x = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in x);
    })();
    function y(x) {
      return x;
    }
    function b(x) {
      return v(x) ? "$" + x : x;
    }
    n.toSetString = g ? y : b;
    function _(x) {
      return v(x) ? x.slice(1) : x;
    }
    n.fromSetString = g ? y : _;
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
    function d(x, T, M) {
      var k = E(x.source, T.source);
      return k !== 0 || (k = x.originalLine - T.originalLine, k !== 0) || (k = x.originalColumn - T.originalColumn, k !== 0 || M) || (k = x.generatedColumn - T.generatedColumn, k !== 0) || (k = x.generatedLine - T.generatedLine, k !== 0) ? k : E(x.name, T.name);
    }
    n.compareByOriginalPositions = d;
    function S(x, T, M) {
      var k = x.generatedLine - T.generatedLine;
      return k !== 0 || (k = x.generatedColumn - T.generatedColumn, k !== 0 || M) || (k = E(x.source, T.source), k !== 0) || (k = x.originalLine - T.originalLine, k !== 0) || (k = x.originalColumn - T.originalColumn, k !== 0) ? k : E(x.name, T.name);
    }
    n.compareByGeneratedPositionsDeflated = S;
    function E(x, T) {
      return x === T ? 0 : x === null ? 1 : T === null ? -1 : x > T ? 1 : -1;
    }
    function O(x, T) {
      var M = x.generatedLine - T.generatedLine;
      return M !== 0 || (M = x.generatedColumn - T.generatedColumn, M !== 0) || (M = E(x.source, T.source), M !== 0) || (M = x.originalLine - T.originalLine, M !== 0) || (M = x.originalColumn - T.originalColumn, M !== 0) ? M : E(x.name, T.name);
    }
    n.compareByGeneratedPositionsInflated = O;
    function w(x) {
      return JSON.parse(x.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = w;
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
      return f(T);
    }
    n.computeSourceURL = D;
  })(od)), od;
}
var ud = {}, uy;
function U0() {
  if (uy) return ud;
  uy = 1;
  var n = ll(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var p = new s(), h = 0, g = u.length; h < g; h++)
      p.add(u[h], f);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = i ? u : n.toSetString(u), h = i ? this.has(u) : r.call(this._set, p), g = this._array.length;
    (!h || f) && this._array.push(u), h || (i ? this._set.set(u, g) : this._set[p] = g);
  }, s.prototype.has = function(u) {
    if (i)
      return this._set.has(u);
    var f = n.toSetString(u);
    return r.call(this._set, f);
  }, s.prototype.indexOf = function(u) {
    if (i) {
      var f = this._set.get(u);
      if (f >= 0)
        return f;
    } else {
      var p = n.toSetString(u);
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
  }, ud.ArraySet = s, ud;
}
var cd = {}, cy;
function _x() {
  if (cy) return cd;
  cy = 1;
  var n = ll();
  function r(s, o) {
    var u = s.generatedLine, f = o.generatedLine, p = s.generatedColumn, h = o.generatedColumn;
    return f > u || f == u && h >= p || n.compareByGeneratedPositionsInflated(s, o) <= 0;
  }
  function i() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return i.prototype.unsortedForEach = function(o, u) {
    this._array.forEach(o, u);
  }, i.prototype.add = function(o) {
    r(this._last, o) ? (this._last = o, this._array.push(o)) : (this._sorted = !1, this._array.push(o));
  }, i.prototype.toArray = function() {
    return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, cd.MappingList = i, cd;
}
var fy;
function H0() {
  if (fy) return ld;
  fy = 1;
  var n = B0(), r = ll(), i = U0().ArraySet, s = _x().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new o({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(g) {
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
    }), f.sources.forEach(function(g) {
      var y = g;
      p !== null && (y = r.relative(p, g)), h._sources.has(y) || h._sources.add(y);
      var b = f.sourceContentFor(g);
      b != null && h.setSourceContent(g, b);
    }), h;
  }, o.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), g = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, g, y), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: g,
      name: y
    });
  }, o.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, p, h) {
    var g = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = f.file;
    }
    var y = this._sourceRoot;
    y != null && (g = r.relative(y, g));
    var b = new i(), _ = new i();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === g && v.originalLine != null) {
        var d = f.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        d.source != null && (v.source = d.source, h != null && (v.source = r.join(h, v.source)), y != null && (v.source = r.relative(y, v.source)), v.originalLine = d.line, v.originalColumn = d.column, d.name != null && (v.name = d.name));
      }
      var S = v.source;
      S != null && !b.has(S) && b.add(S);
      var E = v.name;
      E != null && !_.has(E) && _.add(E);
    }, this), this._sources = b, this._names = _, f.sources.forEach(function(v) {
      var d = f.sourceContentFor(v);
      d != null && (h != null && (v = r.join(h, v)), y != null && (v = r.relative(y, v)), this.setSourceContent(v, d));
    }, this);
  }, o.prototype._validateMapping = function(f, p, h, g) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !h && !g)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: h,
        original: p,
        name: g
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, g = 0, y = 0, b = 0, _ = "", v, d, S, E, O = this._mappings.toArray(), w = 0, D = O.length; w < D; w++) {
      if (d = O[w], v = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          v += ";", p++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, O[w - 1]))
          continue;
        v += ",";
      }
      v += n.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (E = this._sources.indexOf(d.source), v += n.encode(E - b), b = E, v += n.encode(d.originalLine - 1 - g), g = d.originalLine - 1, v += n.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (S = this._names.indexOf(d.name), v += n.encode(S - y), y = S)), _ += v;
    }
    return _;
  }, o.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var g = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, ld.SourceMapGenerator = o, ld;
}
var Zs = {}, fd = {}, dy;
function bx() {
  return dy || (dy = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(i, s, o, u, f, p) {
      var h = Math.floor((s - i) / 2) + i, g = f(o, u[h], !0);
      return g === 0 ? h : g > 0 ? s - h > 1 ? r(h, s, o, u, f, p) : p == n.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - i > 1 ? r(i, h, o, u, f, p) : p == n.LEAST_UPPER_BOUND ? h : i < 0 ? -1 : i;
    }
    n.search = function(s, o, u, f) {
      if (o.length === 0)
        return -1;
      var p = r(
        -1,
        o.length,
        s,
        o,
        u,
        f || n.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(o[p], o[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(fd)), fd;
}
var dd = {}, hy;
function Sx() {
  if (hy) return dd;
  hy = 1;
  function n(s, o, u) {
    var f = s[o];
    s[o] = s[u], s[u] = f;
  }
  function r(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function i(s, o, u, f) {
    if (u < f) {
      var p = r(u, f), h = u - 1;
      n(s, p, f);
      for (var g = s[f], y = u; y < f; y++)
        o(s[y], g) <= 0 && (h += 1, n(s, h, y));
      n(s, h + 1, y);
      var b = h + 1;
      i(s, o, u, b - 1), i(s, o, b + 1, f);
    }
  }
  return dd.quickSort = function(s, o) {
    i(s, o, 0, s.length - 1);
  }, dd;
}
var py;
function Ex() {
  if (py) return Zs;
  py = 1;
  var n = ll(), r = bx(), i = U0().ArraySet, s = B0(), o = Sx().quickSort;
  function u(g, y) {
    var b = g;
    return typeof g == "string" && (b = n.parseSourceMapInput(g)), b.sections != null ? new h(b, y) : new f(b, y);
  }
  u.fromSourceMap = function(g, y) {
    return f.fromSourceMap(g, y);
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
    var v = b || null, d = _ || u.GENERATED_ORDER, S;
    switch (d) {
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
      return w = n.computeSourceURL(E, w, this._sourceMapURL), {
        source: w,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
      };
    }, this).forEach(y, v);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var b = n.getArg(y, "line"), _ = {
      source: n.getArg(y, "source"),
      originalLine: b,
      originalColumn: n.getArg(y, "column", 0)
    };
    if (_.source = this._findSourceIndex(_.source), _.source < 0)
      return [];
    var v = [], d = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var S = this._originalMappings[d];
      if (y.column === void 0)
        for (var E = S.originalLine; S && S.originalLine === E; )
          v.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
      else
        for (var O = S.originalColumn; S && S.originalLine === b && S.originalColumn == O; )
          v.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
    }
    return v;
  }, Zs.SourceMapConsumer = u;
  function f(g, y) {
    var b = g;
    typeof g == "string" && (b = n.parseSourceMapInput(g));
    var _ = n.getArg(b, "version"), v = n.getArg(b, "sources"), d = n.getArg(b, "names", []), S = n.getArg(b, "sourceRoot", null), E = n.getArg(b, "sourcesContent", null), O = n.getArg(b, "mappings"), w = n.getArg(b, "file", null);
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    S && (S = n.normalize(S)), v = v.map(String).map(n.normalize).map(function(D) {
      return S && n.isAbsolute(S) && n.isAbsolute(D) ? n.relative(S, D) : D;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return n.computeSourceURL(S, D, y);
    }), this.sourceRoot = S, this.sourcesContent = E, this._mappings = O, this._sourceMapURL = y, this.file = w;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(g) {
    var y = g;
    if (this.sourceRoot != null && (y = n.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var b;
    for (b = 0; b < this._absoluteSources.length; ++b)
      if (this._absoluteSources[b] == g)
        return b;
    return -1;
  }, f.fromSourceMap = function(y, b) {
    var _ = Object.create(f.prototype), v = _._names = i.fromArray(y._names.toArray(), !0), d = _._sources = i.fromArray(y._sources.toArray(), !0);
    _.sourceRoot = y._sourceRoot, _.sourcesContent = y._generateSourcesContent(
      _._sources.toArray(),
      _.sourceRoot
    ), _.file = y._file, _._sourceMapURL = b, _._absoluteSources = _._sources.toArray().map(function(M) {
      return n.computeSourceURL(_.sourceRoot, M, b);
    });
    for (var S = y._mappings.toArray().slice(), E = _.__generatedMappings = [], O = _.__originalMappings = [], w = 0, D = S.length; w < D; w++) {
      var x = S[w], T = new p();
      T.generatedLine = x.generatedLine, T.generatedColumn = x.generatedColumn, x.source && (T.source = d.indexOf(x.source), T.originalLine = x.originalLine, T.originalColumn = x.originalColumn, x.name && (T.name = v.indexOf(x.name)), O.push(T)), E.push(T);
    }
    return o(_.__originalMappings, n.compareByOriginalPositions), _;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(y, b) {
    for (var _ = 1, v = 0, d = 0, S = 0, E = 0, O = 0, w = y.length, D = 0, x = {}, T = {}, M = [], k = [], q, G, B, V, $; D < w; )
      if (y.charAt(D) === ";")
        _++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (q = new p(), q.generatedLine = _, V = D; V < w && !this._charIsMappingSeparator(y, V); V++)
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
        q.generatedColumn = v + B[0], v = q.generatedColumn, B.length > 1 && (q.source = E + B[1], E += B[1], q.originalLine = d + B[2], d = q.originalLine, q.originalLine += 1, q.originalColumn = S + B[3], S = q.originalColumn, B.length > 4 && (q.name = O + B[4], O += B[4])), k.push(q), typeof q.originalLine == "number" && M.push(q);
      }
    o(k, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(M, n.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(y, b, _, v, d, S) {
    if (y[_] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[_]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
    return r.search(y, b, d, S);
  }, f.prototype.computeColumnSpans = function() {
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
  }, f.prototype.originalPositionFor = function(y) {
    var b = {
      generatedLine: n.getArg(y, "line"),
      generatedColumn: n.getArg(y, "column")
    }, _ = this._findMapping(
      b,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      n.compareByGeneratedPositionsDeflated,
      n.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (_ >= 0) {
      var v = this._generatedMappings[_];
      if (v.generatedLine === b.generatedLine) {
        var d = n.getArg(v, "source", null);
        d !== null && (d = this._sources.at(d), d = n.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var S = n.getArg(v, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: d,
          line: n.getArg(v, "originalLine", null),
          column: n.getArg(v, "originalColumn", null),
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
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(y) {
      return y == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(y, b) {
    if (!this.sourcesContent)
      return null;
    var _ = this._findSourceIndex(y);
    if (_ >= 0)
      return this.sourcesContent[_];
    var v = y;
    this.sourceRoot != null && (v = n.relative(this.sourceRoot, v));
    var d;
    if (this.sourceRoot != null && (d = n.urlParse(this.sourceRoot))) {
      var S = v.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + v))
        return this.sourcesContent[this._sources.indexOf("/" + v)];
    }
    if (b)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(y) {
    var b = n.getArg(y, "source");
    if (b = this._findSourceIndex(b), b < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var _ = {
      source: b,
      originalLine: n.getArg(y, "line"),
      originalColumn: n.getArg(y, "column")
    }, v = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      n.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var d = this._originalMappings[v];
      if (d.source === _.source)
        return {
          line: n.getArg(d, "generatedLine", null),
          column: n.getArg(d, "generatedColumn", null),
          lastColumn: n.getArg(d, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Zs.BasicSourceMapConsumer = f;
  function h(g, y) {
    var b = g;
    typeof g == "string" && (b = n.parseSourceMapInput(g));
    var _ = n.getArg(b, "version"), v = n.getArg(b, "sections");
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    this._sources = new i(), this._names = new i();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = n.getArg(S, "offset"), O = n.getArg(E, "line"), w = n.getArg(E, "column");
      if (O < d.line || O === d.line && w < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = E, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: w + 1
        },
        consumer: new u(n.getArg(S, "map"), y)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var g = [], y = 0; y < this._sections.length; y++)
        for (var b = 0; b < this._sections[y].consumer.sources.length; b++)
          g.push(this._sections[y].consumer.sources[b]);
      return g;
    }
  }), h.prototype.originalPositionFor = function(y) {
    var b = {
      generatedLine: n.getArg(y, "line"),
      generatedColumn: n.getArg(y, "column")
    }, _ = r.search(
      b,
      this._sections,
      function(d, S) {
        var E = d.generatedLine - S.generatedOffset.generatedLine;
        return E || d.generatedColumn - S.generatedOffset.generatedColumn;
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
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(y, b) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var v = this._sections[_], d = v.consumer.sourceContentFor(y, !0);
      if (d)
        return d;
    }
    if (b)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(y) {
    for (var b = 0; b < this._sections.length; b++) {
      var _ = this._sections[b];
      if (_.consumer._findSourceIndex(n.getArg(y, "source")) !== -1) {
        var v = _.consumer.generatedPositionFor(y);
        if (v) {
          var d = {
            line: v.line + (_.generatedOffset.generatedLine - 1),
            column: v.column + (_.generatedOffset.generatedLine === v.line ? _.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(y, b) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var _ = 0; _ < this._sections.length; _++)
      for (var v = this._sections[_], d = v.consumer._generatedMappings, S = 0; S < d.length; S++) {
        var E = d[S], O = v.consumer._sources.at(E.source);
        O = n.computeSourceURL(v.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
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
    o(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), o(this.__originalMappings, n.compareByOriginalPositions);
  }, Zs.IndexedSourceMapConsumer = h, Zs;
}
var hd = {}, my;
function xx() {
  if (my) return hd;
  my = 1;
  var n = H0().SourceMapGenerator, r = ll(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(f, p, h, g, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[o] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(p, h, g) {
    var y = new u(), b = p.split(i), _ = 0, v = function() {
      var w = x(), D = x() || "";
      return w + D;
      function x() {
        return _ < b.length ? b[_++] : void 0;
      }
    }, d = 1, S = 0, E = null;
    return h.eachMapping(function(w) {
      if (E !== null)
        if (d < w.generatedLine)
          O(E, v()), d++, S = 0;
        else {
          var D = b[_] || "", x = D.substr(0, w.generatedColumn - S);
          b[_] = D.substr(w.generatedColumn - S), S = w.generatedColumn, O(E, x), E = w;
          return;
        }
      for (; d < w.generatedLine; )
        y.add(v()), d++;
      if (S < w.generatedColumn) {
        var D = b[_] || "";
        y.add(D.substr(0, w.generatedColumn)), b[_] = D.substr(w.generatedColumn), S = w.generatedColumn;
      }
      E = w;
    }, this), _ < b.length && (E && O(E, v()), y.add(b.splice(_).join(""))), h.sources.forEach(function(w) {
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
    }, g = new n(p), y = !1, b = null, _ = null, v = null, d = null;
    return this.walk(function(S, E) {
      h.code += S, E.source !== null && E.line !== null && E.column !== null ? ((b !== E.source || _ !== E.line || v !== E.column || d !== E.name) && g.addMapping({
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
      }), b = E.source, _ = E.line, v = E.column, d = E.name, y = !0) : y && (g.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), b = null, y = !1);
      for (var O = 0, w = S.length; O < w; O++)
        S.charCodeAt(O) === s ? (h.line++, h.column = 0, O + 1 === w ? (b = null, y = !1) : y && g.addMapping({
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
  }, hd.SourceNode = u, hd;
}
var gy;
function Cx() {
  return gy || (gy = 1, qs.SourceMapGenerator = H0().SourceMapGenerator, qs.SourceMapConsumer = Ex().SourceMapConsumer, qs.SourceNode = xx().SourceNode), qs;
}
var vy;
function wx() {
  return vy || (vy = 1, (function(n, r) {
    r.__esModule = !0;
    var i = tn(), s = void 0;
    try {
      var o = Cx();
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
        for (var y = [], b = 0, _ = p.length; b < _; b++)
          y.push(h.wrap(p[b], g));
        return y;
      } else if (typeof p == "boolean" || typeof p == "number")
        return p + "";
      return p;
    }
    function f(p) {
      this.srcFile = p, this.source = [];
    }
    f.prototype = {
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
        Object.keys(h).forEach(function(_) {
          var v = u(h[_], g);
          v !== "undefined" && y.push([g.quotedString(_), ":", v]);
        });
        var b = this.generateList(y);
        return b.prepend("{"), b.add("}"), b;
      },
      generateList: function(h) {
        for (var g = this.empty(), y = 0, b = h.length; y < b; y++)
          y && g.add(","), g.add(u(h[y], this));
        return g;
      },
      generateArray: function(h) {
        var g = this.generateList(h);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, n.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var yy;
function Ax() {
  return yy || (yy = 1, (function(n, r) {
    r.__esModule = !0;
    function i(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var s = Jd(), o = qn(), u = i(o), f = tn(), p = wx(), h = i(p);
    function g(_) {
      this.value = _;
    }
    function y() {
    }
    y.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(v, d) {
        return this.internalNameLookup(v, d);
      },
      depthedLookup: function(v) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(v), ")"];
      },
      compilerInfo: function() {
        var v = s.COMPILER_REVISION, d = s.REVISION_CHANGES[v];
        return [v, d];
      },
      appendToBuffer: function(v, d, S) {
        return f.isArray(v) || (v = [v]), v = this.source.wrap(v, d), this.environment.isSimple ? ["return ", v, ";"] : S ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, d, S, E) {
        this.environment = v, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, d), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
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
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), E ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), d.srcName ? (k = k.toStringWithSourceMap({ file: d.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var d = this, S = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (S += ", " + E.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(x) {
          var T = d.aliases[x];
          T.children && T.referenceCount > 1 && (S += ", alias" + ++O + "=" + x, T.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var D = this.mergeSource(S);
        return v ? (w.push(D), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(v) {
        var d = this.environment.isSimple, S = !this.forceBuffer, E = void 0, O = void 0, w = void 0, D = void 0;
        return this.source.each(function(x) {
          x.appendToBuffer ? (w ? x.prepend("  + ") : w = x, D = x) : (w && (O ? w.prepend("buffer += ") : E = !0, D.add(";"), w = D = void 0), O = !0, d || (S = !1));
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
        var d = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(v, 0, S);
        var E = this.popStack();
        S.splice(1, 0, E), this.push(this.source.functionCall(d, "call", S));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var v = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var S = this.topStack();
        d.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(v, "call", d), "}"]);
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
          this.replaceStack(function(d) {
            return [" != null ? ", d, ' : ""'];
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
      lookupOnContext: function(v, d, S, E) {
        var O = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[O++])) : this.pushContext(), this.resolvePath("context", v, O, d, S);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(v, d) {
        this.useBlockParams = !0, this.push(["blockParams[", v[0], "][", v[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(v, d, S) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, S);
      },
      resolvePath: function(v, d, S, E, O) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(b(this.options.strict && O, this, d, S, v));
          return;
        }
        for (var D = d.length; S < D; S++)
          this.replaceStack(function(x) {
            var T = w.nameLookup(x, d[S], v);
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
      pushStringParam: function(v, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof v == "string" ? this.pushString(v) : this.pushStackLiteral(v));
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
      registerDecorator: function(v, d) {
        var S = this.nameLookup("decorators", d, "decorator"), E = this.setupHelperArgs(d, v);
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
      invokeHelper: function(v, d, S) {
        var E = this.popStack(), O = this.setupHelper(v, d), w = [];
        S && w.push(O.name), w.push(E), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(w, "||"), ")"], x = this.source.functionCall(D, "call", O.callParams);
        this.push(x);
      },
      itemsSeparatedBy: function(v, d) {
        var S = [];
        S.push(v[0]);
        for (var E = 1; E < v.length; E++)
          S.push(d, v[E]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, d) {
        var S = this.setupHelper(v, d);
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
      invokeAmbiguous: function(v, d) {
        this.useRegister("helper");
        var S = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, v, d), O = this.lastHelper = this.nameLookup("helpers", v, "helper"), w = ["(", "(helper = ", O, " || ", S, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, d, S) {
        var E = [], O = this.setupParams(d, 1, E);
        v && (d = this.popStack(), delete O.name), S && (O.indent = JSON.stringify(S)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", v ? E.unshift(d) : E.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), E.push(O), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var d = this.popStack(), S = void 0, E = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (E = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[v] = S), E && (w.types[v] = E), O && (w.ids[v] = O), w.values[v] = d;
      },
      pushId: function(v, d, S) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : v === "PathExpression" ? this.pushString(d) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, d) {
        for (var S = v.children, E = void 0, O = void 0, w = 0, D = S.length; w < D; w++) {
          E = S[w], O = new this.compiler();
          var x = this.matchExistingProgram(E);
          if (x == null) {
            this.context.programs.push("");
            var T = this.context.programs.length;
            E.index = T, E.name = "program" + T, this.context.programs[T] = O.compile(E, d, this.context, !this.precompile), this.context.decorators[T] = O.decorators, this.context.environments[T] = E, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
          } else
            E.index = x.index, E.name = "program" + x.index, this.useDepths = this.useDepths || x.useDepths, this.useBlockParams = this.useBlockParams || x.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var d = 0, S = this.context.environments.length; d < S; d++) {
          var E = this.context.environments[d];
          if (E && E.equals(v))
            return E;
        }
      },
      programExpression: function(v) {
        var d = this.environment.children[v], S = [d.index, "data", d.blockParams];
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
        var d = ["("], S = void 0, E = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof g)
          S = [w.value], d = ["(", S], O = !0;
        else {
          E = !0;
          var D = this.incrStack();
          d = ["((", this.push(D), " = ", w, ")"], S = this.topStack();
        }
        var x = v.call(this, S);
        O || this.popStack(), E && this.stackSlot--, this.push(d.concat(x, ")"));
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
        for (var d = 0, S = v.length; d < S; d++) {
          var E = v[d];
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
        var d = this.isInline(), S = (d ? this.inlineStack : this.compileStack).pop();
        if (!v && S instanceof g)
          return S.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
      },
      topStack: function() {
        var v = this.isInline() ? this.inlineStack : this.compileStack, d = v[v.length - 1];
        return d instanceof g ? d.value : d;
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
        var d = this.aliases[v];
        return d ? (d.referenceCount++, d) : (d = this.aliases[v] = this.source.wrap(v), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(v, d, S) {
        var E = [], O = this.setupHelperArgs(d, v, E, S), w = this.nameLookup("helpers", d, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: O,
          name: w,
          callParams: [D].concat(E)
        };
      },
      setupParams: function(v, d, S) {
        var E = {}, O = [], w = [], D = [], x = !S, T = void 0;
        x && (S = []), E.name = this.quotedString(v), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (E.fn = k || "container.noop", E.inverse = M || "container.noop");
        for (var q = d; q--; )
          T = this.popStack(), S[q] = T, this.trackIds && (D[q] = this.popStack()), this.stringParams && (w[q] = this.popStack(), O[q] = this.popStack());
        return x && (E.args = this.source.generateArray(S)), this.trackIds && (E.ids = this.source.generateArray(D)), this.stringParams && (E.types = this.source.generateArray(w), E.contexts = this.source.generateArray(O)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(v, d, S, E) {
        var O = this.setupParams(v, d, S);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), E ? (this.useRegister("options"), S.push("options"), ["options=", O]) : S ? (S.push(O), "") : O;
      }
    }, (function() {
      for (var _ = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, d = 0, S = _.length; d < S; d++)
        v[_[d]] = !0;
    })(), y.isValidJavaScriptVariableName = function(_) {
      return !y.RESERVED_WORDS[_] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(_);
    };
    function b(_, v, d, S, E) {
      var O = v.popStack(), w = d.length;
      for (_ && w--; S < w; S++)
        O = v.nameLookup(O, d[S], E);
      return _ ? [v.aliasable("container.strict"), "(", O, ", ", v.quotedString(d[S]), ", ", JSON.stringify(v.source.currentLocation), " )"] : O;
    }
    r.default = y, n.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var _y;
function Tx() {
  return _y || (_y = 1, (function(n, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = dx(), o = i(s), u = P0(), f = i(u), p = gx(), h = vx(), g = Ax(), y = i(g), b = I0(), _ = i(b), v = L0(), d = i(v), S = o.default.create;
    function E() {
      var w = S();
      return w.compile = function(D, x) {
        return h.compile(D, x, w);
      }, w.precompile = function(D, x) {
        return h.precompile(D, x, w);
      }, w.AST = f.default, w.Compiler = h.Compiler, w.JavaScriptCompiler = y.default, w.Parser = p.parser, w.parse = p.parse, w.parseWithoutProcessing = p.parseWithoutProcessing, w;
    }
    var O = E();
    O.create = E, d.default(O), O.Visitor = _.default, O.default = O, r.default = O, n.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Ut = Tx();
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
new e0("dumb", {}).getSettings();
async function Ox({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: o,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: h,
  mainContextList: g,
  includeUserMacro: y,
  maxResponseToken: b,
  targetField: _,
  outputFormat: v
}) {
  if (!n)
    throw new Error("No connection profile selected.");
  const d = Qn.extensionSettings.connectionManager?.profiles?.find((M) => M.id === n);
  if (!d)
    throw new Error(`Connection profile with ID "${n}" not found.`);
  const S = d.api ? Qn.CONNECT_API_MAP[d.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const E = {};
  E.char = o.fields.name.value ?? "{{char}}", E.user = y && br ? br : "{{user}}", E.persona = "{{persona}}", E.targetField = _, E.userInstructions = Ut.compile(r.trim(), { noEscape: !0 })(E), E.fieldSpecificInstructions = Ut.compile(
    o.draftFields[_]?.prompt ?? o.fields[_]?.prompt,
    { noEscape: !0 }
  )({
    ...E,
    char: _ === "mes_example" ? "{{char}}" : E.char,
    user: _ === "mes_example" ? "{{user}}" : E.user
  }), E.activeFormatInstructions = Ut.compile(h.content, { noEscape: !0 })(
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
    Object.entries(f).filter(
      ([k, q]) => q.length > 0 && o.selectedWorldNames.includes(k) && q.some((G) => !G.disable)
    ).forEach(([k, q]) => {
      M[k] = q.filter((G) => !G.disable);
    }), E.lorebooks = M;
  }
  {
    const M = {}, k = {}, q = {}, G = _.startsWith("alternate_greetings_"), B = zt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([$, oe]) => {
      let he = !1;
      if (B) {
        const me = $.startsWith("alternate_greetings_");
        G ? he = me && $ !== _ || $ === "first_mes" : he = me;
      }
      if (!he) {
        const me = Ut.compile(oe.value, { noEscape: !0 })({
          ...E,
          char: $ === "mes_example" ? "{{char}}" : E.char,
          user: $ === "mes_example" ? "{{user}}" : E.user
        });
        Kn.includes($) ? M[oe.label] = me : $.startsWith("alternate_greetings_") && (k[$] = me);
      }
    }), Object.entries(o.draftFields || {}).forEach(([$, oe]) => {
      q[oe.label] = Ut.compile(oe.value, { noEscape: !0 })(E);
    });
    const V = {};
    Object.keys(M).length > 0 && (V.core = M), Object.keys(k).length > 0 && (V.alternate_greetings = k), Object.keys(q).length > 0 && (V.draft = q), E.fields = V;
  }
  const O = [];
  {
    for (const M of g) {
      if (M.promptName === "chatHistory") {
        const B = await c0(S, i);
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
        content: Ut.compile(q.content, { noEscape: !0 })(k)
      };
      G.content = G.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), G.content = G.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), G.content = Qn.substituteParams(G.content), G.content = G.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), G.content = G.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), G.content && O.push(G);
    }
    s && O.push({
      role: "assistant",
      content: Mv(s, v)
    });
  }
  const w = await Qn.ConnectionManagerRequestService.sendRequest(
    n,
    O,
    b
  ), D = s ? Mv(s, v) + w.content : w.content, x = k0(D, v);
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
const Ma = "SillyTavern-Character-Creator", q0 = "0.3.0", Nx = "F_1.8", Dx = {
  EXTENSION: "charCreator"
}, Wo = [
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
], We = {
  stDescription: w0,
  charDefinitions: A0,
  lorebookDefinitions: T0,
  xmlFormat: $S,
  jsonFormat: QS,
  noneFormat: KS,
  worldInfoCharDefinition: JS,
  existingFieldDefinitions: nl,
  taskDescription: Qd,
  outputFormatInstructions: $d,
  personaDescription: WS,
  reviseJsonPrompt: eE,
  reviseXmlPrompt: tE,
  reviseTaskDescription: nE
}, Z0 = {
  version: q0,
  formatVersion: Nx,
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
      content: We.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: We.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: We.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: We.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: We.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: We.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: We.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: nl,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: Qd,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: $d,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: We.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: We.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: We.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: We.reviseTaskDescription,
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
function Rd(n) {
  const i = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((o, u) => {
    const f = o.replace(/^\d+/, "");
    if (f) {
      const p = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
const zt = new e0(Dx.EXTENSION, Z0);
async function Mx() {
  return new Promise((n, r) => {
    zt.initializeSettings({
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
                  content: We.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: We.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: We.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: We.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: We.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: We.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: We.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: nl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: Qd,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: $d,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: We.personaDescription,
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
                  content: We.personaDescription,
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
                  content: We.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: We.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: We.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: nl,
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = w0), s;
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
              content: We.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: We.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: We.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = A0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = T0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = nl), s;
          }
        }
      ]
    }).then((i) => {
      n();
    }).catch((i) => {
      console.error(`[${Ma}] Error initializing settings:`, i), Oe("error", `[${Ma}] Failed to initialize settings: ${i.message}`), Qn.Popup.show.confirm(
        `[${Ma}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (zt.resetSettings(), Oe("success", `[${Ma}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const be = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("button", { className: o, ...s, children: n });
}, kx = ({ label: n, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = te.useMemo(() => {
    const f = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const f = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ A.jsxs("label", { className: f, children: [
      /* @__PURE__ */ A.jsx("input", { type: "checkbox", ...o }),
      n && /* @__PURE__ */ A.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ A.jsx("input", { type: s, className: u, ...o });
}, _u = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("select", { className: o, ...s, children: n });
}, kn = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = te.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: o, ...s, children: n });
};
var Rx = Jy(), gn = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(gn || {}), Jr = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Jr || {});
const jx = SillyTavern.getContext(), zi = ({
  content: n,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var f;
  const p = te.useRef(null), h = te.useRef(null), [g, y] = te.useState(!1), [b, _] = te.useState(null), v = te.useRef(jx.uuidv4()), d = te.useRef({
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
    const D = (x) => {
      x.preventDefault(), o || S(Jr.CANCELLED);
    };
    return w.addEventListener("cancel", D), d.current.dlg = w, d.current.mainInput = h.current, Ci.util.popups.push(d.current), w.showModal || (w.classList.add("poly_dialog"), Jg.registerDialog(w), new ResizeObserver((x) => {
      for (const T of x)
        Jg.reposition(T.target);
    }).observe(w)), w.showModal(), Zf(), () => {
      Kg(Ci.util.popups, d.current), Zf(), w.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (w) => {
    var D, x;
    let T = w;
    if (r === gn.INPUT && (w >= Jr.AFFIRMATIVE ? T = (D = h.current) == null ? void 0 : D.value : w === Jr.NEGATIVE ? T = !1 : w === Jr.CANCELLED ? T = null : T = !1), (x = s.customInputs) != null && x.length) {
      const k = new Map(
        s.customInputs.map((q) => {
          var G;
          const B = (G = p.current) == null ? void 0 : G.querySelector(`#${q.id}`);
          return [B.id, B.checked];
        })
      );
      d.current.inputResults = k;
    }
    if (d.current.result = w, d.current.value = T, s.onClosing && !await s.onClosing(d.current)) {
      y(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    y(!1), Ci.util.lastResult = {
      value: T,
      result: w,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), Zf(), tb(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(d.current), Kg(Ci.util.popups, d.current), Ci.util.popups.length > 0) {
        const q = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), G = q?.getAttribute("data-id"), B = Ci.util.popups.find((V) => V.id === G);
        B && B.lastFocus && B.lastFocus.focus();
      }
      u(T);
    }));
  }, E = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (_(w.target), d.current.lastFocus = w.target);
  }, O = async (w) => {
  };
  return Rx.createPortal(
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
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: n }),
          r === gn.INPUT && /* @__PURE__ */ A.jsx(
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
          r !== gn.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((w, D) => {
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
}, Fs = (n, r, i) => {
  if (!n || !n.api)
    return !1;
  const s = i[n.api];
  if (!s || !Object.hasOwn(r, s.selected))
    return !1;
  switch (s.selected) {
    case "openai":
      return !!s.source;
    case "textgenerationwebui":
      return !!s.type;
  }
  return !1;
}, _r = SillyTavern.getContext(), F0 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = te.useState(n ?? ""), [g, y] = te.useState(Date.now()), { isEnabled: b, profiles: _, connectApiMap: v } = te.useMemo(() => {
    var E, O;
    return (E = _r.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = _r.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: _r.CONNECT_API_MAP
    };
  }, [g]);
  te.useEffect(() => {
    if (!b) return;
    const E = (D) => {
      Fs(D, r, v) && (y(Date.now()), o?.(D));
    }, O = (D, x) => {
      const T = Fs(D, r, v), M = Fs(x, r, v);
      (T || M) && y(Date.now()), u?.(D, x), p === D.id && !M && (h(""), s?.(void 0));
    }, w = (D) => {
      Fs(D, r, v) && (y(Date.now()), f?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return _r.eventSource.on("CONNECTION_PROFILE_CREATED", E), _r.eventSource.on("CONNECTION_PROFILE_UPDATED", O), _r.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      _r.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), _r.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), _r.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [b, p, r, v, s, o, u, f]);
  const d = te.useMemo(() => {
    if (!b) return [];
    const E = _.filter((w) => Fs(w, r, v)), O = {};
    for (const [w, D] of Object.entries(r))
      O[w] = { label: D, profiles: [] };
    for (const w of E) {
      const D = v[w.api];
      O[D.selected] && O[D.selected].profiles.push(w);
    }
    for (const w of Object.values(O))
      w.profiles.sort((D, x) => (D.name ?? "").localeCompare(x.name ?? ""));
    return Object.values(O).filter((w) => w.profiles.length > 0);
  }, [b, _, r, v]), S = te.useCallback(
    (E) => {
      const O = E.target.value;
      h(O);
      const w = _.find((D) => D.id === O);
      s?.(w);
    },
    [_, s]
  );
  return b ? /* @__PURE__ */ A.jsxs(_u, { value: p, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: i }),
    d.map((E) => /* @__PURE__ */ A.jsx("optgroup", { label: E.label, children: E.profiles.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.id, children: O.name }, O.id)) }, E.label))
  ] }) : /* @__PURE__ */ A.jsx(_u, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, zx = fu.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: g,
      canDelete: y = !0,
      canToggle: b = !0,
      showSelect: _ = !0,
      canSelect: v = !0,
      selectOptions: d = [],
      selectValue: S
    } = n, E = {
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
      s && _ && v && /* @__PURE__ */ A.jsx(
        _u,
        {
          value: S,
          onChange: (D) => f(p, D.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : d.map((D) => /* @__PURE__ */ A.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!_ || !v) && /* @__PURE__ */ A.jsx("span", { style: w }),
      r && b && /* @__PURE__ */ A.jsx(
        be,
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
        be,
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
), Lx = ({
  items: n,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: u = {}
}) => {
  const f = te.useRef(null), p = te.useRef(null);
  te.useEffect(() => (f.current && (p.current = we.create(f.current, {
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
      const d = Array.from(n), [S] = d.splice(_, 1);
      d.splice(v, 0, S), r(d);
    }
  })), () => {
    var b;
    (b = p.current) == null || b.destroy(), p.current = null;
  }), [n, r, u]);
  const h = (b) => {
    r(n.map((_) => _.id === b ? { ..._, enabled: !_.enabled } : _));
  }, g = (b) => {
    r(n.filter((_) => _.id !== b));
  }, y = (b, _) => {
    r(n.map((v) => v.id === b ? { ...v, selectValue: _ } : v));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((b) => /* @__PURE__ */ A.jsx(
    zx,
    {
      item: b,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: h,
      onDelete: g,
      onSelectChange: y
    },
    b.id
  )) });
}, eu = ({
  items: n,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: o = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: h = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: b,
  inputClasses: _,
  containerClasses: v
}) => {
  const [d, S] = te.useState(!1), [E, O] = te.useState(""), w = te.useRef(null);
  te.useEffect(() => {
    const k = (q) => {
      w.current && !w.current.contains(q.target) && S(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), te.useEffect(() => {
    d || O("");
  }, [d]);
  const D = te.useMemo(() => {
    if (!h) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...b
    };
    return new Ii(n, k);
  }, [n, h, b]), x = te.useMemo(() => !h || !E.trim() || !D ? n : D.search(E.trim()).map((k) => k.item), [n, E, h, D]), T = async (k) => {
    let q;
    u ? q = r.includes(k) ? r.filter((G) => G !== k) : [...r, k] : q = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, q))) && (i(q), o && S(!1));
  }, M = te.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = n.find((q) => q.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, s]);
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      ref: w,
      className: `fancy-dropdown-container ${v ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && S(!d),
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
              /* @__PURE__ */ A.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ A.jsxs(
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
                    kx,
                    {
                      type: "text",
                      placeholder: g,
                      value: E,
                      onChange: (k) => O(k.target.value),
                      autoFocus: !0,
                      className: _
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: x.length > 0 ? x.map((k) => /* @__PURE__ */ A.jsx(
                Px,
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
}, Px = fu.memo(({ item: n, isSelected: r, onClick: i }) => {
  const [s, o] = te.useState(!1);
  return /* @__PURE__ */ A.jsxs(
    "li",
    {
      onClick: () => i(n.value),
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
        /* @__PURE__ */ A.jsx("span", { children: n.label }),
        r && /* @__PURE__ */ A.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), pd = SillyTavern.getContext(), bu = ({
  value: n,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: o,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: h = !1,
  onCreate: g,
  onRename: y,
  onDelete: b,
  buttons: _
}) => {
  const v = te.useMemo(() => r.find((w) => w.value === n), [r, n]), d = te.useCallback((w) => w ? i.includes(w) : !1, [i]), S = async () => {
    const w = await pd.Popup.show.input(
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
    u([...r, x]), o(x.value, n);
  }, E = async () => {
    if (!v) {
      await Oe("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(v.value)) {
      await Oe("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await pd.Popup.show.input(
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
    u(T), o(x.value, n);
  }, O = async () => {
    var w;
    if (!v) {
      await Oe("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(v.value)) {
      await Oe("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await pd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || b && !await Promise.resolve(b(v.value)))
      return;
    const D = r.findIndex((M) => M.value === v.value), x = r.filter((M) => M.value !== v.value);
    u(x);
    let T;
    if (x.length > 0) {
      const M = Math.min(D, x.length - 1);
      T = (w = x[M]) == null ? void 0 : w.value;
    }
    o(T, n);
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ A.jsx(_u, { value: n ?? "", onChange: (w) => o(w.target.value, n), children: r.map((w) => /* @__PURE__ */ A.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    f && /* @__PURE__ */ A.jsx(
      be,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      be,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: E,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      be,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    _?.map((w) => /* @__PURE__ */ A.jsx(
      be,
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
}, G0 = () => {
  const [, n] = te.useState(0);
  return te.useCallback(() => {
    n((i) => i + 1);
  }, []);
}, md = SillyTavern.getContext(), Ix = () => {
  const n = G0(), r = zt.getSettings(), [i, s] = te.useState(Wo[0]), o = te.useCallback(
    (x) => {
      const T = zt.getSettings();
      x(T), zt.saveSettings(), n();
    },
    [n]
  ), u = te.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((x) => ({ value: x, label: x })),
    [r.mainContextTemplatePresets]
  ), f = te.useMemo(
    () => Object.entries(r.prompts).map(([x, T]) => ({
      value: x,
      label: `${T.label} (${x})`
    })),
    [r.prompts]
  ), p = te.useMemo(() => {
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
  }, b = async () => {
    await md.Popup.show.confirm("Restore default", "Are you sure?") && o((T) => {
      T.mainContextTemplatePresets = {
        ...T.mainContextTemplatePresets,
        default: structuredClone(Z0.mainContextTemplatePresets.default)
      }, T.mainContextTemplatePreset === "default" ? n() : T.mainContextTemplatePreset = "default";
    });
  }, _ = (x) => {
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
    const T = Rd(x);
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
  }, d = (x, T) => {
    const M = Rd(T);
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
          isDefault: Wo.includes(i) ? We[i] === T : !1
        }
      });
    });
  }, E = async () => {
    const x = r.prompts[i];
    if (!x) return Oe("warning", "No prompt selected.");
    await md.Popup.show.confirm("Restore Default", `Restore default for "${x.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: We[i]
        }
      };
    });
  }, O = async () => {
    await md.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (zt.resetSettings(), n(), Oe("success", "Settings have been reset."));
  }, w = r.prompts[i], D = Wo.includes(i);
  return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ A.jsx(
          be,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: b
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        bu,
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
        Lx,
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
          be,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        bu,
        {
          label: "Prompt",
          items: f,
          value: i,
          readOnlyValues: Wo,
          onChange: (x) => s(x ?? ""),
          onItemsChange: _,
          onCreate: v,
          onRename: d,
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
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(be, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, by = ({
  fieldId: n,
  label: r,
  value: i,
  prompt: s,
  large: o = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: h = !1,
  onValueChange: g,
  onPromptChange: y,
  onGenerate: b,
  onContinue: _,
  onClear: v,
  onCompare: d,
  onDelete: S,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ A.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ A.jsx("label", { children: r }),
  /* @__PURE__ */ A.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ A.jsx(kn, { value: i, onChange: (O) => g(n, O.target.value), rows: u }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ A.jsx(be, { onClick: () => b(n), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ A.jsx(be, { onClick: () => _(n), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ A.jsx(be, { onClick: () => v(n), title: "Clear field content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ A.jsx(be, { onClick: () => E(n), title: "Revise with AI chat", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ A.jsx(be, { onClick: () => d(n), title: "Compare with loaded character", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ A.jsx(be, { onClick: () => S(n), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ A.jsx(
    kn,
    {
      value: s,
      onChange: (O) => y(n, O.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), Bx = SillyTavern.getContext(), Ux = ({
  greetings: n,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [f, p] = te.useState(0);
  te.useEffect(() => {
    f >= n.length && n.length > 0 ? p(n.length - 1) : n.length === 0 && p(0);
  }, [n, f]);
  const h = () => {
    const _ = [...n, { value: "", prompt: "" }];
    r(_), p(_.length - 1);
  }, g = async () => {
    if (n.length === 0) return;
    if (await Bx.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = n.filter((d, S) => S !== f);
      r(v);
    }
  }, y = (_, v, d) => {
    const S = [...n];
    S[_][v] = d, r(S);
  }, b = n[f];
  return /* @__PURE__ */ A.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ A.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ A.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: n.map((_, v) => /* @__PURE__ */ A.jsxs(
            be,
            {
              onClick: () => p(v),
              className: `menu_button ${v === f ? "active" : ""}`,
              children: [
                "Greeting ",
                v + 1
              ]
            },
            v
          ))
        }
      ),
      /* @__PURE__ */ A.jsxs(be, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    n.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ A.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ A.jsx(
          kn,
          {
            value: b?.value ?? "",
            onChange: (_) => y(f, "value", _.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
          kn,
          {
            value: b?.prompt ?? "",
            onChange: (_) => y(f, "prompt", _.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ A.jsx(be, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ A.jsx(be, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ A.jsx(
          be,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ A.jsx(be, { onClick: () => o(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ A.jsx(
          be,
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
    function n() {
    }
    return n.prototype.diff = function(r, i, s) {
      s === void 0 && (s = {});
      var o;
      typeof s == "function" ? (o = s, s = {}) : "callback" in s && (o = s.callback);
      var u = this.castInput(r, s), f = this.castInput(i, s), p = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(p, h, s, o);
    }, n.prototype.diffWithOptionsObj = function(r, i, s, o) {
      var u = this, f, p = function(x) {
        if (x = u.postProcess(x, s), o) {
          setTimeout(function() {
            o(x);
          }, 0);
          return;
        } else
          return x;
      }, h = i.length, g = r.length, y = 1, b = h + g;
      s.maxEditLength != null && (b = Math.min(b, s.maxEditLength));
      var _ = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, v = Date.now() + _, d = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= g && S + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var E = -1 / 0, O = 1 / 0, w = function() {
        for (var x = Math.max(E, -y); x <= Math.min(O, y); x += 2) {
          var T = void 0, M = d[x - 1], k = d[x + 1];
          M && (d[x - 1] = void 0);
          var q = !1;
          if (k) {
            var G = k.oldPos - x;
            q = k && 0 <= G && G < h;
          }
          var B = M && M.oldPos + 1 < g;
          if (!q && !B) {
            d[x] = void 0;
            continue;
          }
          if (!B || q && M.oldPos < k.oldPos ? T = u.addToPath(k, !0, !1, 0, s) : T = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(T, i, r, x, s), T.oldPos + 1 >= g && S + 1 >= h)
            return p(u.buildValues(T.lastComponent, i, r)) || !0;
          d[x] = T, T.oldPos + 1 >= g && (O = Math.min(O, x - 1)), S + 1 >= h && (E = Math.max(E, x + 1));
        }
        y++;
      };
      if (o)
        (function x() {
          setTimeout(function() {
            if (y > b || Date.now() > v)
              return o(void 0);
            w() || x();
          }, 0);
        })();
      else
        for (; y <= b && Date.now() <= v; ) {
          var D = w();
          if (D)
            return D;
        }
    }, n.prototype.addToPath = function(r, i, s, o, u) {
      var f = r.lastComponent;
      return f && !u.oneChangePerToken && f.added === i && f.removed === s ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: f.count + 1, added: i, removed: s, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: i, removed: s, previousComponent: f }
      };
    }, n.prototype.extractCommon = function(r, i, s, o, u) {
      for (var f = i.length, p = s.length, h = r.oldPos, g = h - o, y = 0; g + 1 < f && h + 1 < p && this.equals(s[h + 1], i[g + 1], u); )
        g++, h++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, g;
    }, n.prototype.equals = function(r, i, s) {
      return s.comparator ? s.comparator(r, i) : r === i || !!s.ignoreCase && r.toLowerCase() === i.toLowerCase();
    }, n.prototype.removeEmpty = function(r) {
      for (var i = [], s = 0; s < r.length; s++)
        r[s] && i.push(r[s]);
      return i;
    }, n.prototype.castInput = function(r, i) {
      return r;
    }, n.prototype.tokenize = function(r, i) {
      return Array.from(r);
    }, n.prototype.join = function(r) {
      return r.join("");
    }, n.prototype.postProcess = function(r, i) {
      return r;
    }, Object.defineProperty(n.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.buildValues = function(r, i, s) {
      for (var o = [], u; r; )
        o.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      o.reverse();
      for (var f = o.length, p = 0, h = 0, g = 0; p < f; p++) {
        var y = o[p];
        if (y.removed)
          y.value = this.join(s.slice(g, g + y.count)), g += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var b = i.slice(h, h + y.count);
            b = b.map(function(_, v) {
              var d = s[g + v];
              return d.length > _.length ? d : _;
            }), y.value = this.join(b);
          } else
            y.value = this.join(i.slice(h, h + y.count));
          h += y.count, y.added || (g += y.count);
        }
      }
      return o;
    }, n;
  })()
), Hx = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), qx = (
  /** @class */
  (function(n) {
    Hx(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(ra)
);
new qx();
function Sy(n, r) {
  var i;
  for (i = 0; i < n.length && i < r.length; i++)
    if (n[i] != r[i])
      return n.slice(0, i);
  return n.slice(0, i);
}
function Ey(n, r) {
  var i;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < n.length && i < r.length; i++)
    if (n[n.length - (i + 1)] != r[r.length - (i + 1)])
      return n.slice(-i);
  return n.slice(-i);
}
function jd(n, r, i) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + n.slice(r.length);
}
function zd(n, r, i) {
  if (!r)
    return n + i;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + i;
}
function Gs(n, r) {
  return jd(n, r, "");
}
function tu(n, r) {
  return zd(n, r, "");
}
function xy(n, r) {
  return r.slice(0, Zx(n, r));
}
function Zx(n, r) {
  var i = 0;
  n.length > r.length && (i = n.length - r.length);
  var s = r.length;
  n.length < r.length && (s = n.length);
  var o = Array(s), u = 0;
  o[0] = 0;
  for (var f = 1; f < s; f++) {
    for (r[f] == r[u] ? o[f] = o[u] : o[f] = u; u > 0 && r[f] != r[u]; )
      u = o[u];
    r[f] == r[u] && u++;
  }
  u = 0;
  for (var p = i; p < n.length; p++) {
    for (; u > 0 && n[p] != r[u]; )
      u = o[u];
    n[p] == r[u] && u++;
  }
  return u;
}
function Vs(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Kr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var V0 = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), Su = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Fx = new RegExp("[".concat(Su, "]+|\\s+|[^").concat(Su, "]"), "ug"), Gx = (
  /** @class */
  (function(n) {
    V0(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
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
        o = i.match(Fx) || [];
      var f = [], p = null;
      return o.forEach(function(h) {
        /\s/.test(h) ? p == null ? f.push(h) : f.push(f.pop() + h) : p != null && /\s/.test(p) ? f[f.length - 1] == p ? f.push(f.pop() + h) : f.push(p + h) : f.push(h), p = h;
      }), f;
    }, r.prototype.join = function(i) {
      return i.map(function(s, o) {
        return o == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var o = null, u = null, f = null;
      return i.forEach(function(p) {
        p.added ? u = p : p.removed ? f = p : ((u || f) && Cy(o, f, u, p), o = p, u = null, f = null);
      }), (u || f) && Cy(o, f, u, null), i;
    }, r;
  })(ra)
), Vx = new Gx();
function Y0(n, r, i) {
  return Vx.diff(n, r, i);
}
function Cy(n, r, i, s) {
  if (r && i) {
    var o = Kr(r.value), u = Vs(r.value), f = Kr(i.value), p = Vs(i.value);
    if (n) {
      var h = Sy(o, f);
      n.value = zd(n.value, f, h), r.value = Gs(r.value, h), i.value = Gs(i.value, h);
    }
    if (s) {
      var g = Ey(u, p);
      s.value = jd(s.value, p, g), r.value = tu(r.value, g), i.value = tu(i.value, g);
    }
  } else if (i) {
    if (n) {
      var y = Kr(i.value);
      i.value = i.value.substring(y.length);
    }
    if (s) {
      var y = Kr(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (n && s) {
    var b = Kr(s.value), _ = Kr(r.value), v = Vs(r.value), d = Sy(b, _);
    r.value = Gs(r.value, d);
    var S = Ey(Gs(b, d), v);
    r.value = tu(r.value, S), s.value = jd(s.value, b, S), n.value = zd(n.value, b, b.slice(0, b.length - S.length));
  } else if (s) {
    var E = Kr(s.value), O = Vs(r.value), w = xy(O, E);
    r.value = tu(r.value, w);
  } else if (n) {
    var D = Vs(n.value), x = Kr(r.value), w = xy(D, x);
    r.value = Gs(r.value, w);
  }
}
var Yx = (
  /** @class */
  (function(n) {
    V0(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(Su, "]+|[^\\S\\n\\r]+|[^").concat(Su, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(ra)
);
new Yx();
var Xx = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), $x = (
  /** @class */
  (function(n) {
    Xx(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = X0, i;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!o.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), n.prototype.equals.call(this, i, s, o);
    }, r;
  })(ra)
);
new $x();
function X0(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var i = [], s = n.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var o = 0; o < s.length; o++) {
    var u = s[o];
    o % 2 && !r.newlineIsToken ? i[i.length - 1] += u : i.push(u);
  }
  return i;
}
var Qx = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), Kx = (
  /** @class */
  (function(n) {
    Qx(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ra)
);
new Kx();
var Jx = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), Wx = (
  /** @class */
  (function(n) {
    Jx(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(ra)
);
new Wx();
var eC = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), tC = (
  /** @class */
  (function(n) {
    eC(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = X0, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var o = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(p, h) {
        return typeof h > "u" ? o : h;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(Ld(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, o) {
      return n.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(ra)
);
new tC();
function Ld(n, r, i, s, o) {
  r = r || [], i = i || [], s && (n = s(o === void 0 ? "" : o, n));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === n)
      return i[u];
  var f;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), f = new Array(n.length), i.push(f), u = 0; u < n.length; u += 1)
      f[u] = Ld(n[u], r, i, s, String(u));
    return r.pop(), i.pop(), f;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), f = {}, i.push(f);
    var p = [], h;
    for (h in n)
      Object.prototype.hasOwnProperty.call(n, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = Ld(n[h], r, i, s, h);
    r.pop(), i.pop();
  } else
    f = n;
  return f;
}
var nC = /* @__PURE__ */ (function() {
  var n = function(r, i) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, n(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    n(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), rC = (
  /** @class */
  (function(n) {
    nC(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
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
new rC();
const aC = ({ originalContent: n, newContent: r, fieldName: i }) => {
  const s = te.useMemo(() => {
    const o = Y0(n, r);
    let u = "", f = "";
    return o.forEach((p) => {
      const g = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += g), p.removed || (f += g);
    }), { originalHtml: u, newHtml: f };
  }, [n, r]);
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
function ee(n, r, i) {
  function s(p, h) {
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(n), r(p, h);
    for (const y in f.prototype)
      y in p || Object.defineProperty(p, y, { value: f.prototype[y].bind(p) });
    p._zod.constr = f, p._zod.def = h;
  }
  const o = i?.Parent ?? Object;
  class u extends o {
  }
  Object.defineProperty(u, "name", { value: n });
  function f(p) {
    var h;
    const g = i?.Parent ? new u() : this;
    s(g, p), (h = g._zod).deferred ?? (h.deferred = []);
    for (const y of g._zod.deferred)
      y();
    return g;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (p) => i?.Parent && p instanceof i.Parent ? !0 : p?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class Li extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class $0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const Q0 = {};
function ja(n) {
  return Q0;
}
function K0(n) {
  const r = Object.values(n).filter((s) => typeof s == "number");
  return Object.entries(n).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function Pd(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Wd(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function eh(n) {
  return n == null;
}
function th(n) {
  const r = n.startsWith("^") ? 1 : 0, i = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, i);
}
function iC(n, r) {
  const i = (n.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (o = Number.parseInt(h[1]));
  }
  const u = i > o ? i : o, f = Number.parseInt(n.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const wy = Symbol("evaluating");
function nt(n, r, i) {
  let s;
  Object.defineProperty(n, r, {
    get() {
      if (s !== wy)
        return s === void 0 && (s = wy, s = i()), s;
    },
    set(o) {
      Object.defineProperty(n, r, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function La(n, r, i) {
  Object.defineProperty(n, r, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Pa(...n) {
  const r = {};
  for (const i of n) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function Ay(n) {
  return JSON.stringify(n);
}
const J0 = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Eu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const sC = Wd(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function rl(n) {
  if (Eu(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(Eu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function W0(n) {
  return rl(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const lC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Tu(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function aa(n, r, i) {
  const s = new n._zod.constr(r ?? n._zod.def);
  return (!r || i?.parent) && (s._zod.parent = n), s;
}
function ye(n) {
  const r = n;
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
function oC(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
const uC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function cC(n, r) {
  const i = n._zod.def, s = Pa(n._zod.def, {
    get shape() {
      const o = {};
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (o[u] = i.shape[u]);
      }
      return La(this, "shape", o), o;
    },
    checks: []
  });
  return aa(n, s);
}
function fC(n, r) {
  const i = n._zod.def, s = Pa(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape };
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete o[u];
      }
      return La(this, "shape", o), o;
    },
    checks: []
  });
  return aa(n, s);
}
function dC(n, r) {
  if (!rl(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = n._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Pa(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape, ...r };
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return aa(n, o);
}
function hC(n, r) {
  if (!rl(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...n._zod.def,
    get shape() {
      const s = { ...n._zod.def.shape, ...r };
      return La(this, "shape", s), s;
    },
    checks: n._zod.def.checks
  };
  return aa(n, i);
}
function pC(n, r) {
  const i = Pa(n._zod.def, {
    get shape() {
      const s = { ...n._zod.def.shape, ...r._zod.def.shape };
      return La(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return aa(n, i);
}
function mC(n, r, i) {
  const s = Pa(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const f in i) {
          if (!(f in o))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = n ? new n({
            type: "optional",
            innerType: o[f]
          }) : o[f]);
        }
      else
        for (const f in o)
          u[f] = n ? new n({
            type: "optional",
            innerType: o[f]
          }) : o[f];
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return aa(r, s);
}
function gC(n, r, i) {
  const s = Pa(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const f in i) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = new n({
            type: "nonoptional",
            innerType: o[f]
          }));
        }
      else
        for (const f in o)
          u[f] = new n({
            type: "nonoptional",
            innerType: o[f]
          });
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return aa(r, s);
}
function Ri(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let i = r; i < n.issues.length; i++)
    if (n.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function e1(n, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(n), i;
  });
}
function nu(n) {
  return typeof n == "string" ? n : n?.message;
}
function za(n, r, i) {
  const s = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const o = nu(n.inst?._zod.def?.error?.(n)) ?? nu(r?.error?.(n)) ?? nu(i.customError?.(n)) ?? nu(i.localeError?.(n)) ?? "Invalid input";
    s.message = o;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function nh(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function al(...n) {
  const [r, i, s] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const t1 = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, Pd, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, n1 = ee("$ZodError", t1), r1 = ee("$ZodError", t1, { Parent: Error });
function vC(n, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of n.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function yC(n, r = (i) => i.message) {
  const i = { _errors: [] }, s = (o) => {
    for (const u of o.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((f) => s({ issues: f }));
      else if (u.code === "invalid_key")
        s({ issues: u.issues });
      else if (u.code === "invalid_element")
        s({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(r(u));
      else {
        let f = i, p = 0;
        for (; p < u.path.length; ) {
          const h = u.path[p];
          p === u.path.length - 1 ? (f[h] = f[h] || { _errors: [] }, f[h]._errors.push(r(u))) : f[h] = f[h] || { _errors: [] }, f = f[h], p++;
        }
      }
  };
  return s(n), i;
}
const rh = (n) => (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new Li();
  if (f.issues.length) {
    const p = new (o?.Err ?? n)(f.issues.map((h) => za(h, u, ja())));
    throw J0(p, o?.callee), p;
  }
  return f.value;
}, ah = (n) => async (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (o?.Err ?? n)(f.issues.map((h) => za(h, u, ja())));
    throw J0(p, o?.callee), p;
  }
  return f.value;
}, Ou = (n) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, o);
  if (u instanceof Promise)
    throw new Li();
  return u.issues.length ? {
    success: !1,
    error: new (n ?? n1)(u.issues.map((f) => za(f, o, ja())))
  } : { success: !0, data: u.value };
}, _C = /* @__PURE__ */ Ou(r1), Nu = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new n(u.issues.map((f) => za(f, o, ja())))
  } : { success: !0, data: u.value };
}, bC = /* @__PURE__ */ Nu(r1), SC = (n) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return rh(n)(r, i, o);
}, EC = (n) => (r, i, s) => rh(n)(r, i, s), xC = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ah(n)(r, i, o);
}, CC = (n) => async (r, i, s) => ah(n)(r, i, s), wC = (n) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Ou(n)(r, i, o);
}, AC = (n) => (r, i, s) => Ou(n)(r, i, s), TC = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Nu(n)(r, i, o);
}, OC = (n) => async (r, i, s) => Nu(n)(r, i, s), NC = /^[cC][^\s-]{8,}$/, DC = /^[0-9a-z]+$/, MC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, kC = /^[0-9a-vA-V]{20}$/, RC = /^[A-Za-z0-9]{27}$/, jC = /^[a-zA-Z0-9_-]{21}$/, zC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, LC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ty = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, PC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, IC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function BC() {
  return new RegExp(IC, "u");
}
const UC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, HC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, qC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ZC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, FC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, a1 = /^[A-Za-z0-9_-]*$/, GC = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, VC = /^\+(?:[0-9]){6,14}[0-9]$/, i1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", YC = /* @__PURE__ */ new RegExp(`^${i1}$`);
function s1(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function XC(n) {
  return new RegExp(`^${s1(n)}$`);
}
function $C(n) {
  const r = s1({ precision: n.precision }), i = ["Z"];
  n.local && i.push(""), n.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${i1}T(?:${s})$`);
}
const QC = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, KC = /^-?\d+$/, JC = /^-?\d+(?:\.\d+)?/, WC = /^[^A-Z]*$/, e3 = /^[^a-z]*$/, nn = /* @__PURE__ */ ee("$ZodCheck", (n, r) => {
  var i;
  n._zod ?? (n._zod = {}), n._zod.def = r, (i = n._zod).onattach ?? (i.onattach = []);
}), l1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, o1 = /* @__PURE__ */ ee("$ZodCheckLessThan", (n, r) => {
  nn.init(n, r);
  const i = l1[typeof r.value];
  n._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? o.maximum = r.value : o.exclusiveMaximum = r.value);
  }), n._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: i,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), u1 = /* @__PURE__ */ ee("$ZodCheckGreaterThan", (n, r) => {
  nn.init(n, r);
  const i = l1[typeof r.value];
  n._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? o.minimum = r.value : o.exclusiveMinimum = r.value);
  }), n._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: i,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), t3 = /* @__PURE__ */ ee("$ZodCheckMultipleOf", (n, r) => {
  nn.init(n, r), n._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), n._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : iC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), n3 = /* @__PURE__ */ ee("$ZodCheckNumberFormat", (n, r) => {
  nn.init(n, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, u] = uC[r.format];
  n._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = u, i && (p.pattern = KC);
  }), n._zod.check = (f) => {
    const p = f.value;
    if (i) {
      if (!Number.isInteger(p)) {
        f.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? f.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: s,
          continue: !r.abort
        }) : f.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: s,
          continue: !r.abort
        });
        return;
      }
    }
    p < o && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: n,
      continue: !r.abort
    }), p > u && f.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: u,
      inst: n
    });
  };
}), r3 = /* @__PURE__ */ ee("$ZodCheckMaxLength", (n, r) => {
  var i;
  nn.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !eh(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (s._zod.bag.maximum = r.maximum);
  }), n._zod.check = (s) => {
    const o = s.value;
    if (o.length <= r.maximum)
      return;
    const f = nh(o);
    s.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: n,
      continue: !r.abort
    });
  };
}), a3 = /* @__PURE__ */ ee("$ZodCheckMinLength", (n, r) => {
  var i;
  nn.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !eh(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (s._zod.bag.minimum = r.minimum);
  }), n._zod.check = (s) => {
    const o = s.value;
    if (o.length >= r.minimum)
      return;
    const f = nh(o);
    s.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: n,
      continue: !r.abort
    });
  };
}), i3 = /* @__PURE__ */ ee("$ZodCheckLengthEquals", (n, r) => {
  var i;
  nn.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !eh(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), n._zod.check = (s) => {
    const o = s.value, u = o.length;
    if (u === r.length)
      return;
    const f = nh(o), p = u > r.length;
    s.issues.push({
      origin: f,
      ...p ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Du = /* @__PURE__ */ ee("$ZodCheckStringFormat", (n, r) => {
  var i, s;
  nn.init(n, r), n._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (i = n._zod).check ?? (i.check = (o) => {
    r.pattern.lastIndex = 0, !r.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: o.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: n,
      continue: !r.abort
    });
  }) : (s = n._zod).check ?? (s.check = () => {
  });
}), s3 = /* @__PURE__ */ ee("$ZodCheckRegex", (n, r) => {
  Du.init(n, r), n._zod.check = (i) => {
    r.pattern.lastIndex = 0, !r.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: r.pattern.toString(),
      inst: n,
      continue: !r.abort
    });
  };
}), l3 = /* @__PURE__ */ ee("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = WC), Du.init(n, r);
}), o3 = /* @__PURE__ */ ee("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = e3), Du.init(n, r);
}), u3 = /* @__PURE__ */ ee("$ZodCheckIncludes", (n, r) => {
  nn.init(n, r);
  const i = Tu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
  r.pattern = s, n._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (o) => {
    o.value.includes(r.includes, r.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: o.value,
      inst: n,
      continue: !r.abort
    });
  };
}), c3 = /* @__PURE__ */ ee("$ZodCheckStartsWith", (n, r) => {
  nn.init(n, r);
  const i = new RegExp(`^${Tu(r.prefix)}.*`);
  r.pattern ?? (r.pattern = i), n._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), n._zod.check = (s) => {
    s.value.startsWith(r.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), f3 = /* @__PURE__ */ ee("$ZodCheckEndsWith", (n, r) => {
  nn.init(n, r);
  const i = new RegExp(`.*${Tu(r.suffix)}$`);
  r.pattern ?? (r.pattern = i), n._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), n._zod.check = (s) => {
    s.value.endsWith(r.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), d3 = /* @__PURE__ */ ee("$ZodCheckOverwrite", (n, r) => {
  nn.init(n, r), n._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class h3 {
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
`).filter((f) => f), o = Math.min(...s.map((f) => f.length - f.trimStart().length)), u = s.map((f) => f.slice(o)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of u)
      this.content.push(f);
  }
  compile() {
    const r = Function, i = this?.args, o = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...i, o.join(`
`));
  }
}
const p3 = {
  major: 4,
  minor: 1,
  patch: 12
}, Et = /* @__PURE__ */ ee("$ZodType", (n, r) => {
  var i;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = p3;
  const s = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && s.unshift(n);
  for (const o of s)
    for (const u of o._zod.onattach)
      u(n);
  if (s.length === 0)
    (i = n._zod).deferred ?? (i.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const o = (f, p, h) => {
      let g = Ri(f), y;
      for (const b of p) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const _ = f.issues.length, v = b._zod.check(f);
        if (v instanceof Promise && h?.async === !1)
          throw new Li();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, f.issues.length !== _ && (g || (g = Ri(f, _)));
          });
        else {
          if (f.issues.length === _)
            continue;
          g || (g = Ri(f, _));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, p, h) => {
      if (Ri(f))
        return f.aborted = !0, f;
      const g = o(p, s, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Li();
        return g.then((y) => n._zod.parse(y, h));
      }
      return n._zod.parse(g, h);
    };
    n._zod.run = (f, p) => {
      if (p.skipChecks)
        return n._zod.parse(f, p);
      if (p.direction === "backward") {
        const g = n._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((y) => u(y, f, p)) : u(g, f, p);
      }
      const h = n._zod.parse(f, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Li();
        return h.then((g) => o(g, s, p));
      }
      return o(h, s, p);
    };
  }
  n["~standard"] = {
    validate: (o) => {
      try {
        const u = _C(n, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return bC(n, o).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ih = /* @__PURE__ */ ee("$ZodString", (n, r) => {
  Et.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? QC(n._zod.bag), n._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: n
    }), i;
  };
}), st = /* @__PURE__ */ ee("$ZodStringFormat", (n, r) => {
  Du.init(n, r), ih.init(n, r);
}), m3 = /* @__PURE__ */ ee("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = LC), st.init(n, r);
}), g3 = /* @__PURE__ */ ee("$ZodUUID", (n, r) => {
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
    r.pattern ?? (r.pattern = Ty(s));
  } else
    r.pattern ?? (r.pattern = Ty());
  st.init(n, r);
}), v3 = /* @__PURE__ */ ee("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = PC), st.init(n, r);
}), y3 = /* @__PURE__ */ ee("$ZodURL", (n, r) => {
  st.init(n, r), n._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: GC.source,
        input: i.value,
        inst: n,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: i.value,
        inst: n,
        continue: !r.abort
      })), r.normalize ? i.value = o.href : i.value = s;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), _3 = /* @__PURE__ */ ee("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = BC()), st.init(n, r);
}), b3 = /* @__PURE__ */ ee("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = jC), st.init(n, r);
}), S3 = /* @__PURE__ */ ee("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = NC), st.init(n, r);
}), E3 = /* @__PURE__ */ ee("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = DC), st.init(n, r);
}), x3 = /* @__PURE__ */ ee("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = MC), st.init(n, r);
}), C3 = /* @__PURE__ */ ee("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = kC), st.init(n, r);
}), w3 = /* @__PURE__ */ ee("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = RC), st.init(n, r);
}), A3 = /* @__PURE__ */ ee("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = $C(r)), st.init(n, r);
}), T3 = /* @__PURE__ */ ee("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = YC), st.init(n, r);
}), O3 = /* @__PURE__ */ ee("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = XC(r)), st.init(n, r);
}), N3 = /* @__PURE__ */ ee("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = zC), st.init(n, r);
}), D3 = /* @__PURE__ */ ee("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = UC), st.init(n, r), n._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), M3 = /* @__PURE__ */ ee("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = HC), st.init(n, r), n._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv6";
  }), n._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), k3 = /* @__PURE__ */ ee("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = qC), st.init(n, r);
}), R3 = /* @__PURE__ */ ee("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = ZC), st.init(n, r), n._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [o, u] = s;
      if (!u)
        throw new Error();
      const f = Number(u);
      if (`${f}` !== u)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
});
function c1(n) {
  if (n === "")
    return !0;
  if (n.length % 4 !== 0)
    return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
const j3 = /* @__PURE__ */ ee("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = FC), st.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (i) => {
    c1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function z3(n) {
  if (!a1.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return c1(i);
}
const L3 = /* @__PURE__ */ ee("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = a1), st.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (i) => {
    z3(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), P3 = /* @__PURE__ */ ee("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = VC), st.init(n, r);
});
function I3(n, r = null) {
  try {
    const i = n.split(".");
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
const B3 = /* @__PURE__ */ ee("$ZodJWT", (n, r) => {
  st.init(n, r), n._zod.check = (i) => {
    I3(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), f1 = /* @__PURE__ */ ee("$ZodNumber", (n, r) => {
  Et.init(n, r), n._zod.pattern = n._zod.bag.pattern ?? JC, n._zod.parse = (i, s) => {
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
      inst: n,
      ...u ? { received: u } : {}
    }), i;
  };
}), U3 = /* @__PURE__ */ ee("$ZodNumber", (n, r) => {
  n3.init(n, r), f1.init(n, r);
}), H3 = /* @__PURE__ */ ee("$ZodUnknown", (n, r) => {
  Et.init(n, r), n._zod.parse = (i) => i;
}), q3 = /* @__PURE__ */ ee("$ZodNever", (n, r) => {
  Et.init(n, r), n._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: n
  }), i);
});
function Oy(n, r, i) {
  n.issues.length && r.issues.push(...e1(i, n.issues)), r.value[i] = n.value;
}
const Z3 = /* @__PURE__ */ ee("$ZodArray", (n, r) => {
  Et.init(n, r), n._zod.parse = (i, s) => {
    const o = i.value;
    if (!Array.isArray(o))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: n
      }), i;
    i.value = Array(o.length);
    const u = [];
    for (let f = 0; f < o.length; f++) {
      const p = o[f], h = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((g) => Oy(g, i, f))) : Oy(h, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function xu(n, r, i, s) {
  n.issues.length && r.issues.push(...e1(i, n.issues)), n.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = n.value;
}
function d1(n) {
  const r = Object.keys(n.shape);
  for (const s of r)
    if (!n.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = oC(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function h1(n, r, i, s, o, u) {
  const f = [], p = o.keySet, h = o.catchall._zod, g = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (g === "never") {
      f.push(y);
      continue;
    }
    const b = h.run({ value: r[y], issues: [] }, s);
    b instanceof Promise ? n.push(b.then((_) => xu(_, i, y, r))) : xu(b, i, y, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), n.length ? Promise.all(n).then(() => i) : i;
}
const F3 = /* @__PURE__ */ ee("$ZodObject", (n, r) => {
  if (Et.init(n, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
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
  const s = Wd(() => d1(r));
  nt(n._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const g in p) {
      const y = p[g]._zod;
      if (y.values) {
        h[g] ?? (h[g] = /* @__PURE__ */ new Set());
        for (const b of y.values)
          h[g].add(b);
      }
    }
    return h;
  });
  const o = Eu, u = r.catchall;
  let f;
  n._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const g = p.value;
    if (!o(g))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: n
      }), p;
    p.value = {};
    const y = [], b = f.shape;
    for (const _ of f.keys) {
      const d = b[_]._zod.run({ value: g[_], issues: [] }, h);
      d instanceof Promise ? y.push(d.then((S) => xu(S, p, _, g))) : xu(d, p, _, g);
    }
    return u ? h1(y, g, p, h, s.value, n) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), G3 = /* @__PURE__ */ ee("$ZodObjectJIT", (n, r) => {
  F3.init(n, r);
  const i = n._zod.parse, s = Wd(() => d1(r)), o = (_) => {
    const v = new h3(["shape", "payload", "ctx"]), d = s.value, S = (D) => {
      const x = Ay(D);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const D of d.keys)
      E[D] = `key_${O++}`;
    v.write("const newResult = {};");
    for (const D of d.keys) {
      const x = E[D], T = Ay(D);
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
    return (D, x) => w(_, D, x);
  };
  let u;
  const f = Eu, p = !Q0.jitless, g = p && sC.value, y = r.catchall;
  let b;
  n._zod.parse = (_, v) => {
    b ?? (b = s.value);
    const d = _.value;
    return f(d) ? p && g && v?.async === !1 && v.jitless !== !0 ? (u || (u = o(r.shape)), _ = u(_, v), y ? h1([], d, _, v, b, n) : _) : i(_, v) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: n
    }), _);
  };
});
function Ny(n, r, i, s) {
  for (const u of n)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const o = n.filter((u) => !Ri(u));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: n.map((u) => u.issues.map((f) => za(f, s, ja())))
  }), r);
}
const V3 = /* @__PURE__ */ ee("$ZodUnion", (n, r) => {
  Et.init(n, r), nt(n._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), nt(n._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), nt(n._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), nt(n._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${o.map((u) => th(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  n._zod.parse = (o, u) => {
    if (i)
      return s(o, u);
    let f = !1;
    const p = [];
    for (const h of r.options) {
      const g = h._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (g instanceof Promise)
        p.push(g), f = !0;
      else {
        if (g.issues.length === 0)
          return g;
        p.push(g);
      }
    }
    return f ? Promise.all(p).then((h) => Ny(h, o, n, u)) : Ny(p, o, n, u);
  };
}), Y3 = /* @__PURE__ */ ee("$ZodIntersection", (n, r) => {
  Et.init(n, r), n._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), f = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, g]) => Dy(i, h, g)) : Dy(i, u, f);
  };
});
function Id(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (rl(n) && rl(r)) {
    const i = Object.keys(r), s = Object.keys(n).filter((u) => i.indexOf(u) !== -1), o = { ...n, ...r };
    for (const u of s) {
      const f = Id(n[u], r[u]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...f.mergeErrorPath]
        };
      o[u] = f.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(n) && Array.isArray(r)) {
    if (n.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < n.length; s++) {
      const o = n[s], u = r[s], f = Id(o, u);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...f.mergeErrorPath]
        };
      i.push(f.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Dy(n, r, i) {
  if (r.issues.length && n.issues.push(...r.issues), i.issues.length && n.issues.push(...i.issues), Ri(n))
    return n;
  const s = Id(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return n.value = s.data, n;
}
const X3 = /* @__PURE__ */ ee("$ZodEnum", (n, r) => {
  Et.init(n, r);
  const i = K0(r.entries), s = new Set(i);
  n._zod.values = s, n._zod.pattern = new RegExp(`^(${i.filter((o) => lC.has(typeof o)).map((o) => typeof o == "string" ? Tu(o) : o.toString()).join("|")})$`), n._zod.parse = (o, u) => {
    const f = o.value;
    return s.has(f) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: n
    }), o;
  };
}), $3 = /* @__PURE__ */ ee("$ZodTransform", (n, r) => {
  Et.init(n, r), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new $0(n.constructor.name);
    const o = r.transform(i.value, i);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((f) => (i.value = f, i));
    if (o instanceof Promise)
      throw new Li();
    return i.value = o, i;
  };
});
function My(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const Q3 = /* @__PURE__ */ ee("$ZodOptional", (n, r) => {
  Et.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", nt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), nt(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${th(i.source)})?$`) : void 0;
  }), n._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => My(u, i.value)) : My(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), K3 = /* @__PURE__ */ ee("$ZodNullable", (n, r) => {
  Et.init(n, r), nt(n._zod, "optin", () => r.innerType._zod.optin), nt(n._zod, "optout", () => r.innerType._zod.optout), nt(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${th(i.source)}|null)$`) : void 0;
  }), nt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), J3 = /* @__PURE__ */ ee("$ZodDefault", (n, r) => {
  Et.init(n, r), n._zod.optin = "optional", nt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => ky(u, r)) : ky(o, r);
  };
});
function ky(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const W3 = /* @__PURE__ */ ee("$ZodPrefault", (n, r) => {
  Et.init(n, r), n._zod.optin = "optional", nt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), ew = /* @__PURE__ */ ee("$ZodNonOptional", (n, r) => {
  Et.init(n, r), nt(n._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), n._zod.parse = (i, s) => {
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => Ry(u, n)) : Ry(o, n);
  };
});
function Ry(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const tw = /* @__PURE__ */ ee("$ZodCatch", (n, r) => {
  Et.init(n, r), nt(n._zod, "optin", () => r.innerType._zod.optin), nt(n._zod, "optout", () => r.innerType._zod.optout), nt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((f) => za(f, s, ja()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((u) => za(u, s, ja()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), nw = /* @__PURE__ */ ee("$ZodPipe", (n, r) => {
  Et.init(n, r), nt(n._zod, "values", () => r.in._zod.values), nt(n._zod, "optin", () => r.in._zod.optin), nt(n._zod, "optout", () => r.out._zod.optout), nt(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(i, s);
      return u instanceof Promise ? u.then((f) => ru(f, r.in, s)) : ru(u, r.in, s);
    }
    const o = r.in._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => ru(u, r.out, s)) : ru(o, r.out, s);
  };
});
function ru(n, r, i) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, i);
}
const rw = /* @__PURE__ */ ee("$ZodReadonly", (n, r) => {
  Et.init(n, r), nt(n._zod, "propValues", () => r.innerType._zod.propValues), nt(n._zod, "values", () => r.innerType._zod.values), nt(n._zod, "optin", () => r.innerType._zod.optin), nt(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(jy) : jy(o);
  };
});
function jy(n) {
  return n.value = Object.freeze(n.value), n;
}
const aw = /* @__PURE__ */ ee("$ZodCustom", (n, r) => {
  nn.init(n, r), Et.init(n, r), n._zod.parse = (i, s) => i, n._zod.check = (i) => {
    const s = i.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((u) => zy(u, i, s, n));
    zy(o, i, s, n);
  };
});
function zy(n, r, i, s) {
  if (!n) {
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
    s._zod.def.params && (o.params = s._zod.def.params), r.issues.push(al(o));
  }
}
class p1 {
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
function iw() {
  return new p1();
}
const Qs = /* @__PURE__ */ iw();
function sw(n, r) {
  return new n({
    type: "string",
    ...ye(r)
  });
}
function lw(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function Ly(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function ow(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function uw(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ye(r)
  });
}
function cw(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ye(r)
  });
}
function fw(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ye(r)
  });
}
function dw(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function hw(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function pw(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function mw(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function gw(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function vw(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function yw(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function _w(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function bw(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function Sw(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function Ew(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function xw(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function Cw(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function ww(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function Aw(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function Tw(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function Ow(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ye(r)
  });
}
function Nw(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...ye(r)
  });
}
function Dw(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ye(r)
  });
}
function Mw(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ye(r)
  });
}
function kw(n, r) {
  return new n({
    type: "number",
    checks: [],
    ...ye(r)
  });
}
function Rw(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ye(r)
  });
}
function jw(n) {
  return new n({
    type: "unknown"
  });
}
function zw(n, r) {
  return new n({
    type: "never",
    ...ye(r)
  });
}
function Py(n, r) {
  return new o1({
    check: "less_than",
    ...ye(r),
    value: n,
    inclusive: !1
  });
}
function gd(n, r) {
  return new o1({
    check: "less_than",
    ...ye(r),
    value: n,
    inclusive: !0
  });
}
function Iy(n, r) {
  return new u1({
    check: "greater_than",
    ...ye(r),
    value: n,
    inclusive: !1
  });
}
function vd(n, r) {
  return new u1({
    check: "greater_than",
    ...ye(r),
    value: n,
    inclusive: !0
  });
}
function By(n, r) {
  return new t3({
    check: "multiple_of",
    ...ye(r),
    value: n
  });
}
function m1(n, r) {
  return new r3({
    check: "max_length",
    ...ye(r),
    maximum: n
  });
}
function Cu(n, r) {
  return new a3({
    check: "min_length",
    ...ye(r),
    minimum: n
  });
}
function g1(n, r) {
  return new i3({
    check: "length_equals",
    ...ye(r),
    length: n
  });
}
function Lw(n, r) {
  return new s3({
    check: "string_format",
    format: "regex",
    ...ye(r),
    pattern: n
  });
}
function Pw(n) {
  return new l3({
    check: "string_format",
    format: "lowercase",
    ...ye(n)
  });
}
function Iw(n) {
  return new o3({
    check: "string_format",
    format: "uppercase",
    ...ye(n)
  });
}
function Bw(n, r) {
  return new u3({
    check: "string_format",
    format: "includes",
    ...ye(r),
    includes: n
  });
}
function Uw(n, r) {
  return new c3({
    check: "string_format",
    format: "starts_with",
    ...ye(r),
    prefix: n
  });
}
function Hw(n, r) {
  return new f3({
    check: "string_format",
    format: "ends_with",
    ...ye(r),
    suffix: n
  });
}
function ol(n) {
  return new d3({
    check: "overwrite",
    tx: n
  });
}
function qw(n) {
  return ol((r) => r.normalize(n));
}
function Zw() {
  return ol((n) => n.trim());
}
function Fw() {
  return ol((n) => n.toLowerCase());
}
function Gw() {
  return ol((n) => n.toUpperCase());
}
function Vw(n, r, i) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...ye(i)
  });
}
function Yw(n, r, i) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...ye(i)
  });
}
function Xw(n) {
  const r = $w((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(al(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(al(o));
    }
  }, n(i.value, i)));
  return r;
}
function $w(n, r) {
  const i = new nn({
    check: "custom",
    ...ye(r)
  });
  return i._zod.check = n, i;
}
class Uy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Qs, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
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
    }, f = this.seen.get(r);
    if (f)
      return f.count++, i.schemaPath.includes(r) && (f.cycle = i.path), f.schema;
    const p = { schema: {}, count: 1, cycle: void 0, path: i.path };
    this.seen.set(r, p);
    const h = r._zod.toJSONSchema?.();
    if (h)
      p.schema = h;
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
            const d = v;
            d.type = "string";
            const { minimum: S, maximum: E, format: O, patterns: w, contentEncoding: D } = r._zod.bag;
            if (typeof S == "number" && (d.minLength = S), typeof E == "number" && (d.maxLength = E), O && (d.format = u[O] ?? O, d.format === "" && delete d.format), D && (d.contentEncoding = D), w && w.size > 0) {
              const x = [...w];
              x.length === 1 ? d.pattern = x[0].source : x.length > 1 && (p.schema.allOf = [
                ...x.map((T) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: T.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = v, { minimum: S, maximum: E, format: O, multipleOf: w, exclusiveMaximum: D, exclusiveMinimum: x } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? d.type = "integer" : d.type = "number", typeof x == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = x, d.exclusiveMinimum = !0) : d.exclusiveMinimum = x), typeof S == "number" && (d.minimum = S, typeof x == "number" && this.target !== "draft-4" && (x >= S ? delete d.minimum : delete d.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = D, d.exclusiveMaximum = !0) : d.exclusiveMaximum = D), typeof E == "number" && (d.maximum = E, typeof D == "number" && this.target !== "draft-4" && (D <= E ? delete d.maximum : delete d.exclusiveMaximum)), typeof w == "number" && (d.multipleOf = w);
            break;
          }
          case "boolean": {
            const d = v;
            d.type = "boolean";
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
            const d = v, { minimum: S, maximum: E } = r._zod.bag;
            typeof S == "number" && (d.minItems = S), typeof E == "number" && (d.maxItems = E), d.type = "array", d.items = this.process(o.element, { ...b, path: [...b.path, "items"] });
            break;
          }
          case "object": {
            const d = v;
            d.type = "object", d.properties = {};
            const S = o.shape;
            for (const w in S)
              d.properties[w] = this.process(S[w], {
                ...b,
                path: [...b.path, "properties", w]
              });
            const E = new Set(Object.keys(S)), O = new Set([...E].filter((w) => {
              const D = o.shape[w]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            O.size > 0 && (d.required = Array.from(O)), o.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : o.catchall ? o.catchall && (d.additionalProperties = this.process(o.catchall, {
              ...b,
              path: [...b.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = v, S = o.options.map((E, O) => this.process(E, {
              ...b,
              path: [...b.path, "anyOf", O]
            }));
            d.anyOf = S;
            break;
          }
          case "intersection": {
            const d = v, S = this.process(o.left, {
              ...b,
              path: [...b.path, "allOf", 0]
            }), E = this.process(o.right, {
              ...b,
              path: [...b.path, "allOf", 1]
            }), O = (D) => "allOf" in D && Object.keys(D).length === 1, w = [
              ...O(S) ? S.allOf : [S],
              ...O(E) ? E.allOf : [E]
            ];
            d.allOf = w;
            break;
          }
          case "tuple": {
            const d = v;
            d.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = o.items.map((T, M) => this.process(T, {
              ...b,
              path: [...b.path, S, M]
            })), w = o.rest ? this.process(o.rest, {
              ...b,
              path: [...b.path, E, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = O, w && (d.items = w)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: O
            }, w && d.items.anyOf.push(w), d.minItems = O.length, w || (d.maxItems = O.length)) : (d.items = O, w && (d.additionalItems = w));
            const { minimum: D, maximum: x } = r._zod.bag;
            typeof D == "number" && (d.minItems = D), typeof x == "number" && (d.maxItems = x);
            break;
          }
          case "record": {
            const d = v;
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(o.keyType, {
              ...b,
              path: [...b.path, "propertyNames"]
            })), d.additionalProperties = this.process(o.valueType, {
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
            const d = v, S = K0(o.entries);
            S.every((E) => typeof E == "number") && (d.type = "number"), S.every((E) => typeof E == "string") && (d.type = "string"), d.enum = S;
            break;
          }
          case "literal": {
            const d = v, S = [];
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
              d.type = E === null ? "null" : typeof E, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [E] : d.const = E;
            } else
              S.every((E) => typeof E == "number") && (d.type = "number"), S.every((E) => typeof E == "string") && (d.type = "string"), S.every((E) => typeof E == "boolean") && (d.type = "string"), S.every((E) => E === null) && (d.type = "null"), d.enum = S;
            break;
          }
          case "file": {
            const d = v, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: O, mime: w } = r._zod.bag;
            E !== void 0 && (S.minLength = E), O !== void 0 && (S.maxLength = O), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(d, S)) : d.anyOf = w.map((D) => ({ ...S, contentMediaType: D })) : Object.assign(d, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(o.innerType, b);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, v.nullable = !0) : v.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, b), p.ref = o.innerType;
            break;
          }
          case "success": {
            const d = v;
            d.type = "boolean";
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
            let d;
            try {
              d = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = v, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = S.source;
            break;
          }
          case "pipe": {
            const d = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(d, b), p.ref = d;
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
            const d = r._zod.innerType;
            this.process(d, b), p.ref = d;
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
    return g && Object.assign(p.schema, g), this.io === "input" && wt(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
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
        const S = s.external.registry.get(y[0])?.id, E = s.external.uri ?? ((w) => w);
        if (S)
          return { ref: E(S) };
        const O = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = O, { defId: O, ref: `${E("__shared")}#/${b}/${O}` };
      }
      if (y[1] === o)
        return { ref: "#" };
      const v = `#/${b}/`, d = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: v + d };
    }, f = (y) => {
      if (y[1].schema.$ref)
        return;
      const b = y[1], { ref: _, defId: v } = u(y);
      b.def = { ...b.schema }, v && (b.defId = v);
      const d = b.schema;
      for (const S in d)
        delete d[S];
      d.$ref = _;
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
        f(y);
        continue;
      }
      if (s.external) {
        const v = s.external.registry.get(y[0])?.id;
        if (r !== y[0] && v) {
          f(y);
          continue;
        }
      }
      if (this.metadataRegistry.get(y[0])?.id) {
        f(y);
        continue;
      }
      if (b.cycle) {
        f(y);
        continue;
      }
      if (b.count > 1 && s.reused === "ref") {
        f(y);
        continue;
      }
    }
    const p = (y, b) => {
      const _ = this.seen.get(y), v = _.def ?? _.schema, d = { ...v };
      if (_.ref === null)
        return;
      const S = _.ref;
      if (_.ref = null, S) {
        p(S, b);
        const E = this.seen.get(S).schema;
        E.$ref && (b.target === "draft-7" || b.target === "draft-4" || b.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(E)) : (Object.assign(v, E), Object.assign(v, d));
      }
      _.isParent || this.override({
        zodSchema: y,
        jsonSchema: v,
        path: _.path ?? []
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
      const b = y[1];
      b.def && b.defId && (g[b.defId] = b.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? h.$defs = g : h.definitions = g);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function Qw(n, r) {
  if (n instanceof p1) {
    const s = new Uy(r), o = {};
    for (const p of n._idmap.entries()) {
      const [h, g] = p;
      s.process(g);
    }
    const u = {}, f = {
      registry: n,
      uri: r?.uri,
      defs: o
    };
    for (const p of n._idmap.entries()) {
      const [h, g] = p;
      u[h] = s.emit(g, {
        ...r,
        external: f
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
  const i = new Uy(r);
  return i.process(n), i.emit(n, r);
}
function wt(n, r) {
  const i = r ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(n))
    return !1;
  i.seen.add(n);
  const o = n._zod.def;
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
      return wt(o.element, i);
    case "object": {
      for (const u in o.shape)
        if (wt(o.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of o.options)
        if (wt(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return wt(o.left, i) || wt(o.right, i);
    case "tuple": {
      for (const u of o.items)
        if (wt(u, i))
          return !0;
      return !!(o.rest && wt(o.rest, i));
    }
    case "record":
      return wt(o.keyType, i) || wt(o.valueType, i);
    case "map":
      return wt(o.keyType, i) || wt(o.valueType, i);
    case "set":
      return wt(o.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return wt(o.innerType, i);
    case "lazy":
      return wt(o.getter(), i);
    case "default":
      return wt(o.innerType, i);
    case "prefault":
      return wt(o.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return wt(o.in, i) || wt(o.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const Kw = /* @__PURE__ */ ee("ZodISODateTime", (n, r) => {
  A3.init(n, r), ut.init(n, r);
});
function Jw(n) {
  return Ow(Kw, n);
}
const Ww = /* @__PURE__ */ ee("ZodISODate", (n, r) => {
  T3.init(n, r), ut.init(n, r);
});
function e4(n) {
  return Nw(Ww, n);
}
const t4 = /* @__PURE__ */ ee("ZodISOTime", (n, r) => {
  O3.init(n, r), ut.init(n, r);
});
function n4(n) {
  return Dw(t4, n);
}
const r4 = /* @__PURE__ */ ee("ZodISODuration", (n, r) => {
  N3.init(n, r), ut.init(n, r);
});
function a4(n) {
  return Mw(r4, n);
}
const i4 = (n, r) => {
  n1.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (i) => yC(n, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => vC(n, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        n.issues.push(i), n.message = JSON.stringify(n.issues, Pd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        n.issues.push(...i), n.message = JSON.stringify(n.issues, Pd, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return n.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Rn = ee("ZodError", i4, {
  Parent: Error
}), s4 = /* @__PURE__ */ rh(Rn), l4 = /* @__PURE__ */ ah(Rn), o4 = /* @__PURE__ */ Ou(Rn), u4 = /* @__PURE__ */ Nu(Rn), c4 = /* @__PURE__ */ SC(Rn), f4 = /* @__PURE__ */ EC(Rn), d4 = /* @__PURE__ */ xC(Rn), h4 = /* @__PURE__ */ CC(Rn), p4 = /* @__PURE__ */ wC(Rn), m4 = /* @__PURE__ */ AC(Rn), g4 = /* @__PURE__ */ TC(Rn), v4 = /* @__PURE__ */ OC(Rn), At = /* @__PURE__ */ ee("ZodType", (n, r) => (Et.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...i) => n.clone(Pa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), n.clone = (i, s) => aa(n, i, s), n.brand = () => n, n.register = ((i, s) => (i.add(n, s), n)), n.parse = (i, s) => s4(n, i, s, { callee: n.parse }), n.safeParse = (i, s) => o4(n, i, s), n.parseAsync = async (i, s) => l4(n, i, s, { callee: n.parseAsync }), n.safeParseAsync = async (i, s) => u4(n, i, s), n.spa = n.safeParseAsync, n.encode = (i, s) => c4(n, i, s), n.decode = (i, s) => f4(n, i, s), n.encodeAsync = async (i, s) => d4(n, i, s), n.decodeAsync = async (i, s) => h4(n, i, s), n.safeEncode = (i, s) => p4(n, i, s), n.safeDecode = (i, s) => m4(n, i, s), n.safeEncodeAsync = async (i, s) => g4(n, i, s), n.safeDecodeAsync = async (i, s) => v4(n, i, s), n.refine = (i, s) => n.check(sA(i, s)), n.superRefine = (i) => n.check(lA(i)), n.overwrite = (i) => n.check(ol(i)), n.optional = () => Fy(n), n.nullable = () => Gy(n), n.nullish = () => Fy(Gy(n)), n.nonoptional = (i) => W4(n, i), n.array = () => Hn(n), n.or = (i) => Z4([n, i]), n.and = (i) => G4(n, i), n.transform = (i) => Vy(n, Y4(i)), n.default = (i) => Q4(n, i), n.prefault = (i) => J4(n, i), n.catch = (i) => tA(n, i), n.pipe = (i) => Vy(n, i), n.readonly = () => aA(n), n.describe = (i) => {
  const s = n.clone();
  return Qs.add(s, { description: i }), s;
}, Object.defineProperty(n, "description", {
  get() {
    return Qs.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...i) => {
  if (i.length === 0)
    return Qs.get(n);
  const s = n.clone();
  return Qs.add(s, i[0]), s;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), v1 = /* @__PURE__ */ ee("_ZodString", (n, r) => {
  ih.init(n, r), At.init(n, r);
  const i = n._zod.bag;
  n.format = i.format ?? null, n.minLength = i.minimum ?? null, n.maxLength = i.maximum ?? null, n.regex = (...s) => n.check(Lw(...s)), n.includes = (...s) => n.check(Bw(...s)), n.startsWith = (...s) => n.check(Uw(...s)), n.endsWith = (...s) => n.check(Hw(...s)), n.min = (...s) => n.check(Cu(...s)), n.max = (...s) => n.check(m1(...s)), n.length = (...s) => n.check(g1(...s)), n.nonempty = (...s) => n.check(Cu(1, ...s)), n.lowercase = (s) => n.check(Pw(s)), n.uppercase = (s) => n.check(Iw(s)), n.trim = () => n.check(Zw()), n.normalize = (...s) => n.check(qw(...s)), n.toLowerCase = () => n.check(Fw()), n.toUpperCase = () => n.check(Gw());
}), y4 = /* @__PURE__ */ ee("ZodString", (n, r) => {
  ih.init(n, r), v1.init(n, r), n.email = (i) => n.check(lw(_4, i)), n.url = (i) => n.check(dw(b4, i)), n.jwt = (i) => n.check(Tw(z4, i)), n.emoji = (i) => n.check(hw(S4, i)), n.guid = (i) => n.check(Ly(Hy, i)), n.uuid = (i) => n.check(ow(au, i)), n.uuidv4 = (i) => n.check(uw(au, i)), n.uuidv6 = (i) => n.check(cw(au, i)), n.uuidv7 = (i) => n.check(fw(au, i)), n.nanoid = (i) => n.check(pw(E4, i)), n.guid = (i) => n.check(Ly(Hy, i)), n.cuid = (i) => n.check(mw(x4, i)), n.cuid2 = (i) => n.check(gw(C4, i)), n.ulid = (i) => n.check(vw(w4, i)), n.base64 = (i) => n.check(Cw(k4, i)), n.base64url = (i) => n.check(ww(R4, i)), n.xid = (i) => n.check(yw(A4, i)), n.ksuid = (i) => n.check(_w(T4, i)), n.ipv4 = (i) => n.check(bw(O4, i)), n.ipv6 = (i) => n.check(Sw(N4, i)), n.cidrv4 = (i) => n.check(Ew(D4, i)), n.cidrv6 = (i) => n.check(xw(M4, i)), n.e164 = (i) => n.check(Aw(j4, i)), n.datetime = (i) => n.check(Jw(i)), n.date = (i) => n.check(e4(i)), n.time = (i) => n.check(n4(i)), n.duration = (i) => n.check(a4(i));
});
function Mn(n) {
  return sw(y4, n);
}
const ut = /* @__PURE__ */ ee("ZodStringFormat", (n, r) => {
  st.init(n, r), v1.init(n, r);
}), _4 = /* @__PURE__ */ ee("ZodEmail", (n, r) => {
  v3.init(n, r), ut.init(n, r);
}), Hy = /* @__PURE__ */ ee("ZodGUID", (n, r) => {
  m3.init(n, r), ut.init(n, r);
}), au = /* @__PURE__ */ ee("ZodUUID", (n, r) => {
  g3.init(n, r), ut.init(n, r);
}), b4 = /* @__PURE__ */ ee("ZodURL", (n, r) => {
  y3.init(n, r), ut.init(n, r);
}), S4 = /* @__PURE__ */ ee("ZodEmoji", (n, r) => {
  _3.init(n, r), ut.init(n, r);
}), E4 = /* @__PURE__ */ ee("ZodNanoID", (n, r) => {
  b3.init(n, r), ut.init(n, r);
}), x4 = /* @__PURE__ */ ee("ZodCUID", (n, r) => {
  S3.init(n, r), ut.init(n, r);
}), C4 = /* @__PURE__ */ ee("ZodCUID2", (n, r) => {
  E3.init(n, r), ut.init(n, r);
}), w4 = /* @__PURE__ */ ee("ZodULID", (n, r) => {
  x3.init(n, r), ut.init(n, r);
}), A4 = /* @__PURE__ */ ee("ZodXID", (n, r) => {
  C3.init(n, r), ut.init(n, r);
}), T4 = /* @__PURE__ */ ee("ZodKSUID", (n, r) => {
  w3.init(n, r), ut.init(n, r);
}), O4 = /* @__PURE__ */ ee("ZodIPv4", (n, r) => {
  D3.init(n, r), ut.init(n, r);
}), N4 = /* @__PURE__ */ ee("ZodIPv6", (n, r) => {
  M3.init(n, r), ut.init(n, r);
}), D4 = /* @__PURE__ */ ee("ZodCIDRv4", (n, r) => {
  k3.init(n, r), ut.init(n, r);
}), M4 = /* @__PURE__ */ ee("ZodCIDRv6", (n, r) => {
  R3.init(n, r), ut.init(n, r);
}), k4 = /* @__PURE__ */ ee("ZodBase64", (n, r) => {
  j3.init(n, r), ut.init(n, r);
}), R4 = /* @__PURE__ */ ee("ZodBase64URL", (n, r) => {
  L3.init(n, r), ut.init(n, r);
}), j4 = /* @__PURE__ */ ee("ZodE164", (n, r) => {
  P3.init(n, r), ut.init(n, r);
}), z4 = /* @__PURE__ */ ee("ZodJWT", (n, r) => {
  B3.init(n, r), ut.init(n, r);
}), y1 = /* @__PURE__ */ ee("ZodNumber", (n, r) => {
  f1.init(n, r), At.init(n, r), n.gt = (s, o) => n.check(Iy(s, o)), n.gte = (s, o) => n.check(vd(s, o)), n.min = (s, o) => n.check(vd(s, o)), n.lt = (s, o) => n.check(Py(s, o)), n.lte = (s, o) => n.check(gd(s, o)), n.max = (s, o) => n.check(gd(s, o)), n.int = (s) => n.check(qy(s)), n.safe = (s) => n.check(qy(s)), n.positive = (s) => n.check(Iy(0, s)), n.nonnegative = (s) => n.check(vd(0, s)), n.negative = (s) => n.check(Py(0, s)), n.nonpositive = (s) => n.check(gd(0, s)), n.multipleOf = (s, o) => n.check(By(s, o)), n.step = (s, o) => n.check(By(s, o)), n.finite = () => n;
  const i = n._zod.bag;
  n.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), n.isFinite = !0, n.format = i.format ?? null;
});
function wu(n) {
  return kw(y1, n);
}
const L4 = /* @__PURE__ */ ee("ZodNumberFormat", (n, r) => {
  U3.init(n, r), y1.init(n, r);
});
function qy(n) {
  return Rw(L4, n);
}
const P4 = /* @__PURE__ */ ee("ZodUnknown", (n, r) => {
  H3.init(n, r), At.init(n, r);
});
function Zy() {
  return jw(P4);
}
const I4 = /* @__PURE__ */ ee("ZodNever", (n, r) => {
  q3.init(n, r), At.init(n, r);
});
function B4(n) {
  return zw(I4, n);
}
const U4 = /* @__PURE__ */ ee("ZodArray", (n, r) => {
  Z3.init(n, r), At.init(n, r), n.element = r.element, n.min = (i, s) => n.check(Cu(i, s)), n.nonempty = (i) => n.check(Cu(1, i)), n.max = (i, s) => n.check(m1(i, s)), n.length = (i, s) => n.check(g1(i, s)), n.unwrap = () => n.element;
});
function Hn(n, r) {
  return Vw(U4, n, r);
}
const H4 = /* @__PURE__ */ ee("ZodObject", (n, r) => {
  G3.init(n, r), At.init(n, r), nt(n, "shape", () => r.shape), n.keyof = () => Ud(Object.keys(n._zod.def.shape)), n.catchall = (i) => n.clone({ ...n._zod.def, catchall: i }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: Zy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: Zy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: B4() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (i) => dC(n, i), n.safeExtend = (i) => hC(n, i), n.merge = (i) => pC(n, i), n.pick = (i) => cC(n, i), n.omit = (i) => fC(n, i), n.partial = (...i) => mC(_1, n, i[0]), n.required = (...i) => gC(b1, n, i[0]);
});
function Ra(n, r) {
  const i = {
    type: "object",
    shape: n ?? {},
    ...ye(r)
  };
  return new H4(i);
}
const q4 = /* @__PURE__ */ ee("ZodUnion", (n, r) => {
  V3.init(n, r), At.init(n, r), n.options = r.options;
});
function Z4(n, r) {
  return new q4({
    type: "union",
    options: n,
    ...ye(r)
  });
}
const F4 = /* @__PURE__ */ ee("ZodIntersection", (n, r) => {
  Y3.init(n, r), At.init(n, r);
});
function G4(n, r) {
  return new F4({
    type: "intersection",
    left: n,
    right: r
  });
}
const Bd = /* @__PURE__ */ ee("ZodEnum", (n, r) => {
  X3.init(n, r), At.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  n.extract = (s, o) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Bd({
      ...r,
      checks: [],
      ...ye(o),
      entries: u
    });
  }, n.exclude = (s, o) => {
    const u = { ...r.entries };
    for (const f of s)
      if (i.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Bd({
      ...r,
      checks: [],
      ...ye(o),
      entries: u
    });
  };
});
function Ud(n, r) {
  const i = Array.isArray(n) ? Object.fromEntries(n.map((s) => [s, s])) : n;
  return new Bd({
    type: "enum",
    entries: i,
    ...ye(r)
  });
}
const V4 = /* @__PURE__ */ ee("ZodTransform", (n, r) => {
  $3.init(n, r), At.init(n, r), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new $0(n.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(al(u, i.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = n), i.issues.push(al(f));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((u) => (i.value = u, i)) : (i.value = o, i);
  };
});
function Y4(n) {
  return new V4({
    type: "transform",
    transform: n
  });
}
const _1 = /* @__PURE__ */ ee("ZodOptional", (n, r) => {
  Q3.init(n, r), At.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Fy(n) {
  return new _1({
    type: "optional",
    innerType: n
  });
}
const X4 = /* @__PURE__ */ ee("ZodNullable", (n, r) => {
  K3.init(n, r), At.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Gy(n) {
  return new X4({
    type: "nullable",
    innerType: n
  });
}
const $4 = /* @__PURE__ */ ee("ZodDefault", (n, r) => {
  J3.init(n, r), At.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function Q4(n, r) {
  return new $4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : W0(r);
    }
  });
}
const K4 = /* @__PURE__ */ ee("ZodPrefault", (n, r) => {
  W3.init(n, r), At.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function J4(n, r) {
  return new K4({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : W0(r);
    }
  });
}
const b1 = /* @__PURE__ */ ee("ZodNonOptional", (n, r) => {
  ew.init(n, r), At.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function W4(n, r) {
  return new b1({
    type: "nonoptional",
    innerType: n,
    ...ye(r)
  });
}
const eA = /* @__PURE__ */ ee("ZodCatch", (n, r) => {
  tw.init(n, r), At.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function tA(n, r) {
  return new eA({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const nA = /* @__PURE__ */ ee("ZodPipe", (n, r) => {
  nw.init(n, r), At.init(n, r), n.in = r.in, n.out = r.out;
});
function Vy(n, r) {
  return new nA({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const rA = /* @__PURE__ */ ee("ZodReadonly", (n, r) => {
  rw.init(n, r), At.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function aA(n) {
  return new rA({
    type: "readonly",
    innerType: n
  });
}
const iA = /* @__PURE__ */ ee("ZodCustom", (n, r) => {
  aw.init(n, r), At.init(n, r);
});
function sA(n, r = {}) {
  return Yw(iA, n, r);
}
function lA(n) {
  return Xw(n);
}
const Yy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Hd = "placeholder-chatHistory", oA = Ra({
  justification: Mn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Mn().describe("The new, full content for the character field.")
}), uA = Ra({
  field: Mn(),
  value: Mn()
}), cA = Ra({
  index: wu().int().positive(),
  value: Mn()
});
Ra({
  justification: Mn(),
  fields_to_change: Hn(uA).optional(),
  draft_fields_to_remove: Hn(Mn()).optional(),
  greetings_to_add: Hn(Mn()).optional(),
  greetings_to_remove: Hn(wu().int().positive()).optional(),
  greetings_to_change: Hn(cA).optional()
});
const fA = (n, r) => {
  const i = Ra({
    index: wu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Mn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Mn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Hn(Mn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Hn(wu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Hn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (n.length > 0) {
    const o = Ra({
      field: Ud(n).describe("The unique ID of the field to change (core or draft)."),
      value: Mn().describe("The new content for the field.")
    });
    s.fields_to_change = Hn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Hn(Ud(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), Ra(s);
};
function yd(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function qd(n, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${qd(s, r + 1)}${i}</item>
` : `${i}<item>${yd(s)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let s = "";
    for (const o of Object.keys(n)) {
      const u = n[o];
      u !== null && typeof u == "object" ? s += `${i}<${o}>
${qd(u, r + 1)}${i}</${o}>
` : s += `${i}<${o}>${yd(u)}</${o}>
`;
    }
    return s;
  }
  return `${i}<value>${yd(n)}</value>
`;
}
function dA(n, r) {
  const i = Na(n);
  return r === "xml" ? qd(i).trim() : JSON.stringify(i, null, 2);
}
function hA(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function pA(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Na(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, i = hA(n.example, r, n.default);
  if (i !== void 0) return i;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const s = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (s) return Na(s);
  switch (pA(n.type)) {
    case "object": {
      const u = {}, f = n.properties || {};
      for (const p of Object.keys(f))
        u[p] = Na(f[p]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (u.additionalProperty = Na(n.additionalProperties)), u;
    }
    case "array": {
      const u = n.items ?? {};
      return [Na(u)];
    }
    case "string":
      switch (n.format) {
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
          return n.title || n.description || "string";
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
      return n.properties || n.additionalProperties ? Na({ ...n, type: "object" }) : n.items ? Na({ ...n, type: "array" }) : null;
  }
}
const mA = new sS();
async function Xy(n, r, i, s, o, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const g = new AbortController(), y = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), mA.generateRequest(
      {
        profileId: n,
        prompt: r,
        maxTokens: i,
        custom: { stream: f, signal: y },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (b, _, v) => y.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : v ? h(v) : _ === void 0 && v === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (_ || h(new Error("No data received from LLM")), v ? h(v) : p(_))
      }
    );
  });
}
async function gA(n, r, i, s, o, u, f) {
  const p = zt.getSettings();
  let h, g;
  const y = Qw(i);
  if (o === "native") {
    if (h = await Xy(
      n,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y }
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const _ = o, v = dA(y, _), d = JSON.stringify(y, null, 2), S = _ === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = p.prompts[S]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${_}" not found.`);
    const O = {
      example_response: v,
      schema: d
    }, D = { role: "system", content: Ut.compile(E, { noEscape: !0, strict: !0 })(O) };
    if (h = await Xy(
      n,
      [...r, D],
      u,
      {},
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = k0(h.content, _, { schema: y });
  }
  const b = i.safeParse(g);
  if (!b.success) {
    const _ = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", b.error.issues), console.error("Raw content parsed:", g), await Oe("error", _), new Error(_);
  }
  return b.data;
}
const S1 = ({ originalContent: n, newContent: r }) => {
  const i = te.useMemo(() => {
    const s = Y0(n, r);
    let o = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (o += g), f.removed || (u += g);
    }), { originalHtml: o, newHtml: u };
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, vA = ({ before: n, after: r }) => {
  const i = te.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(n.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = n.fields[u], p = r.fields[u], h = f?.value ?? "", g = p?.value ?? "";
      h !== g && s.push({
        label: p?.label ?? f?.label ?? u,
        before: h,
        after: g
      });
    }), s;
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ A.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: o, after: u }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: s }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Before" }),
        /* @__PURE__ */ A.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ A.jsx(S1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, yA = ({ currentState: n, initialState: r }) => {
  const [i, s] = te.useState(!1), { coreFields: o, alternateGreetings: u } = te.useMemo(() => {
    const p = [], h = [];
    return Kn.forEach((g) => {
      n.fields[g] && p.push({ label: n.fields[g].label, value: n.fields[g].value });
    }), Object.entries(n.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, y) => parseInt(g[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, g]) => h.push(g.value)), { coreFields: p, alternateGreetings: h };
  }, [n]), f = te.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(n.fields)])).forEach((g) => {
      const y = r.fields[g], b = n.fields[g], _ = y?.value ?? "", v = b?.value ?? "";
      _ !== v && p.push({
        label: b?.label ?? y?.label ?? g,
        before: _,
        after: v
      });
    }), p;
  }, [r, n]);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: i, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: g }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: p }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Original" }),
        /* @__PURE__ */ A.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ A.jsx(S1, { originalContent: h, newContent: g })
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
}, Di = SillyTavern.getContext(), _A = (n) => Object.entries(n.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => r.value), bA = (n, r, i, s) => {
  const o = structuredClone(n);
  if (i === "field" && s) {
    const u = r;
    return o.fields[s] && (o.fields[s].value = u.response), o;
  }
  if (i === "global") {
    const u = r;
    let f = _A(o), p = !1;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        o.fields[h.field] ? o.fields[h.field].value = h.value : o.draftFields[h.field] && (o.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        o.draftFields[h] && delete o.draftFields[h];
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const h of u.greetings_to_change)
        h.index > 0 && h.index <= f.length && (f[h.index - 1] = h.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const h = new Set(u.greetings_to_remove.map((g) => g - 1));
      f = f.filter((g, y) => !h.has(y));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(o.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete o.fields[h];
    }), f.forEach((h, g) => {
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
}, SA = ({ initialState: n, onSave: r, onClose: i }) => {
  const [s, o] = te.useState(() => structuredClone(n)), u = (b, _, v) => {
    const d = structuredClone(s), S = v ? "draftFields" : "fields";
    d[S][b] && (d[S][b].value = _), o(d);
  }, f = (b, _) => {
    const v = structuredClone(s), d = `alternate_greetings_${b + 1}`;
    v.fields[d] && (v.fields[d].value = _), o(v);
  }, { coreFields: p, alternateGreetings: h, draftFields: g } = te.useMemo(() => {
    const b = [], _ = [], v = [];
    return Kn.forEach((d) => {
      s.fields[d] && b.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, S) => parseInt(d[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, d]) => _.push(d.value)), Object.entries(s.draftFields).forEach(([d, S]) => {
      v.push({ id: d, label: S.label, value: S.value });
    }), { coreFields: b, alternateGreetings: _, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(n) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(be, { onClick: y, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(be, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: b, label: _, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: _ }),
        /* @__PURE__ */ A.jsx(kn, { value: v, onChange: (d) => u(b, d.target.value, !1), rows: 4 })
      ] }, b)),
      g.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: b, label: _, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: _ }),
          /* @__PURE__ */ A.jsx(kn, { value: v, onChange: (d) => u(b, d.target.value, !0), rows: 4 })
        ] }, b))
      ] }),
      h.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((b, _) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            _ + 1
          ] }),
          /* @__PURE__ */ A.jsx(kn, { value: b, onChange: (v) => f(_, v.target.value), rows: 4 })
        ] }, _))
      ] })
    ] })
  ] });
}, EA = ({
  session: n,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [f, p] = te.useState(n.messages), [h, g] = te.useState(""), [y, b] = te.useState(!1), [_, v] = te.useState(null), [d, S] = te.useState(!1), [E, O] = te.useState(!1), [w, D] = te.useState(null), [x, T] = te.useState(""), M = te.useRef(null), k = te.useRef(null);
  te.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const q = te.useCallback(
    (Y, ge, ve) => {
      if (JSON.stringify(ve) === JSON.stringify(ge))
        return Y;
      const P = zt.getSettings().prompts.existingFieldDefinitions;
      if (!P) return Y;
      const K = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ve.fields), ...Object.keys(ge.fields)])).forEach((Ue) => {
        const ht = ve.fields[Ue]?.value ?? "", rn = ge.fields[Ue]?.value ?? "";
        if (ht !== rn) {
          const rt = ge.fields[Ue];
          rt && (Ue.startsWith("alternate_greetings_") ? K.alternate_greetings[rt.label] = rt.value : Kn.includes(Ue) && (K.core[rt.label] = rt.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ve.draftFields), ...Object.keys(ge.draftFields)])).forEach((Ue) => {
        const ht = ve.draftFields[Ue]?.value ?? "", rn = ge.draftFields[Ue]?.value ?? "";
        if (ht !== rn && ge.draftFields[Ue]) {
          const rt = ge.draftFields[Ue];
          K.draft[rt.label] = rt.value;
        }
      }), Object.keys(K.core).length === 0 && Object.keys(K.alternate_greetings).length === 0 && Object.keys(K.draft).length === 0)
        return Y;
      const qe = { fields: K };
      let Pe = Ut.compile(P.content, { noEscape: !0 })(qe);
      if (Pe = Di.substituteParams(Pe), Pe.trim()) {
        const Ue = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Pe.trim(),
          isStateUpdate: !0
        };
        return [...Y, Ue];
      }
      return Y;
    },
    []
  ), G = te.useCallback(
    async (Y, ge, ve, Ve) => {
      const P = zt.getSettings();
      if (!n.profileId) {
        Oe("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), ve(), b(!0);
      try {
        const K = [], ne = Di.extensionSettings.connectionManager?.profiles?.find(
          (ke) => ke.id === n.profileId
        ), Se = ne?.api ? Di.CONNECT_API_MAP[ne.api].selected : void 0;
        if (!Se) {
          Oe("warning", "No API selected for this session.");
          return;
        }
        for (const ke of Y)
          if (ke.id === Hd) {
            if (vn === void 0 && !Er) continue;
            const Ne = await c0(Se, u);
            Ne.warnings?.length && Ne.warnings.forEach((De) => Oe("warning", De)), K.push(...Ne.result);
          } else
            K.push(ke);
        const qe = Y.slice(0, Y.length - (ge ? 0 : 1)).reverse().find((ke) => ke.stateSnapshot)?.stateSnapshot ?? o, Pe = P.prompts.existingFieldDefinitions;
        if (Pe) {
          const ke = {
            fields: {
              core: Object.fromEntries(
                Object.entries(qe.fields).filter(([De]) => !De.startsWith("alternate_greetings_")).map(([, De]) => [De.label, De.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(qe.fields).filter(([De]) => De.startsWith("alternate_greetings_")).map(([, De]) => [De.label, De.value])
              ),
              draft: Object.fromEntries(Object.entries(qe.draftFields).map(([, De]) => [De.label, De.value]))
            }
          };
          let Ne = Ut.compile(Pe.content, { noEscape: !0 })(ke);
          if (Ne = Di.substituteParams(Ne), Ne.trim()) {
            const De = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: Ne.trim()
            }, jn = K.pop();
            K.push(De), jn && K.push(jn);
          }
        }
        const Ue = n.type === "field" ? oA : (() => {
          const ke = [...Object.keys(qe.fields), ...Object.keys(qe.draftFields)], Ne = Object.keys(qe.draftFields);
          return fA(ke, Ne);
        })(), rn = await gA(
          n.profileId,
          K,
          Ue,
          n.type === "field" ? Yy.FIELD : Yy.GLOBAL,
          n.promptEngineeringMode,
          P.maxResponseToken,
          k.current.signal
        ), rt = bA(qe, rn, n.type, n.targetFieldId), ue = {
          id: `msg-${Date.now()}-ai`,
          role: "assistant",
          content: rn.justification,
          stateSnapshot: rt
        };
        let fe = [...Y, ue];
        fe = q(fe, rt, qe), p(fe), s({ ...n, messages: fe });
      } catch (K) {
        K.name === "AbortError" ? Oe("info", "Request was cancelled.") : (console.error("Revise request failed:", K), Oe("error", `Request failed: ${K.message}`)), Ve();
      } finally {
        b(!1), k.current = null;
      }
    },
    [n, s, o, u, q]
  ), B = te.useCallback(async () => {
    if (!h.trim() || y) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, ge = f;
    G(
      [...f, Y],
      !1,
      () => {
        p([...f, Y]), g("");
      },
      () => p(ge)
    );
  }, [h, y, f, G]), V = te.useCallback(async () => {
    if (y || f.length === 0) return;
    const Y = f;
    let ge = [...f];
    const ve = f.findLastIndex((Ve) => !Ve.isStateUpdate);
    ve > -1 && f[ve].role === "assistant" && (ge = f.slice(0, ve)), await G(
      ge,
      !0,
      () => p(ge),
      () => p(Y)
    );
  }, [y, f, G]), $ = () => {
    const Y = f.slice().reverse().find((ge) => ge.stateSnapshot)?.stateSnapshot ?? o;
    i(Y), r();
  }, oe = (Y) => {
    const ge = f.findIndex((P) => P.id === Y);
    if (ge === -1 || !f[ge].stateSnapshot) return;
    const ve = f[ge].stateSnapshot;
    let Ve = o;
    for (let P = ge - 1; P >= 0; P--)
      if (f[P].stateSnapshot) {
        Ve = f[P].stateSnapshot;
        break;
      }
    v({ before: Ve, after: ve });
  }, he = () => {
    S(!0);
  }, me = (Y) => {
    D(Y.id), T(Y.content);
  }, U = () => {
    D(null), T("");
  }, re = async () => {
    if (!w) return;
    const Y = f.findIndex((ne) => ne.id === w);
    if (Y === -1 || !await Di.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ve = f, Ve = f.slice(0, Y), P = { ...f[Y], content: x }, K = [...Ve, P];
    U(), G(
      K,
      !1,
      () => p(K),
      () => p(ve)
    );
  }, ce = async (Y) => {
    const ge = f.findIndex((ne) => ne.id === Y);
    if (ge === -1) return;
    const Ve = !!f[ge].isInitial;
    if (!await Di.Popup.show.confirm(
      "Delete Message",
      Ve ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let K;
    Ve ? K = f.filter((ne) => ne.isInitial && ne.id !== Y) : K = f.slice(0, ge), p(K), s({ ...n, messages: K }), Oe("info", "Message history has been updated.");
  }, Re = f.filter((Y) => !Y.isStateUpdate), j = Re.filter((Y) => Y.isInitial), J = Re.filter((Y) => !Y.isInitial), ae = f.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? o, se = () => {
    O(!0);
  }, le = (Y) => {
    const ge = f.slice().reverse().find((P) => P.stateSnapshot)?.stateSnapshot ?? o, ve = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: Y
    };
    let Ve = [...f, ve];
    Ve = q(Ve, Y, ge), p(Ve), s({ ...n, messages: Ve }), O(!1);
  }, ze = () => {
    k.current?.abort();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h2", { children: n.name }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsx(
          F0,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (Y) => s({ ...n, profileId: Y?.id ?? "" })
          }
        ),
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: (Y) => s({ ...n, promptEngineeringMode: Y.target.value }),
            title: "Prompt Engineering Mode",
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(be, { onClick: he, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(be, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(be, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(be, { onClick: $, title: "Apply Changes and Close", children: [
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
              /* @__PURE__ */ A.jsxs(be, { onClick: re, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(be, { onClick: U, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: Y.content }) }),
            !y && Y.id !== Hd && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsxs(
                be,
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
                be,
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
      J.map(
        (Y) => w === Y.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(kn, { value: x, onChange: (ge) => T(ge.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(be, { onClick: re, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(be, { onClick: U, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${Y.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            Y.role === "user" && !Y.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              be,
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
              be,
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
              be,
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
      J.length > 0 && !y && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(be, { onClick: V, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(be, { onClick: ze, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
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
      /* @__PURE__ */ A.jsxs(be, { onClick: B, disabled: y || !h.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    _ && /* @__PURE__ */ A.jsx(
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(vA, { before: _.before, after: _.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ A.jsx(
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(yA, { currentState: ae, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ A.jsx(
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          SA,
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
async function xA(n, r, i, s, o) {
  const u = zt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], g = {
    ...{
      user: Qn.name1 || "You",
      char: n.fields.name?.value || "Character",
      persona: Qn.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(n.fields).filter(([v]) => !v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(n.fields).filter(([v]) => v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      draft: Object.fromEntries(Object.entries(n.draftFields).map(([, v]) => [v.label, v.value]))
    }
  };
  if (s.charCard) {
    const v = [];
    o.selectedCharacterIndexes.forEach((d) => {
      const S = Qn.characters[parseInt(d)];
      S && v.push(S);
    }), g.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      o.selectedWorldNames.map(async (d) => {
        const S = await Qn.loadWorldInfo(d);
        S && (v[d] = Object.values(S.entries).filter((E) => !E.disable));
      })
    ), g.lorebooks = v;
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || vn === void 0 && !Er && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      p.push({
        id: Hd,
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
    E = Ut.compile(S.content, { noEscape: !0 })(g), E = Qn.substituteParams(E), E.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: E.trim(),
      isInitial: !0
    });
  }
  const y = r ? n.fields[r]?.label || n.draftFields[r]?.label : "Global", b = u.prompts.reviseTaskDescription.content, _ = Ut.compile(b, { noEscape: !0 })({
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
const iu = SillyTavern.getContext(), $y = "charCreator_reviseSessions", CA = ({
  target: n,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [f, p] = te.useState([]), [h, g] = te.useState(null), [y, b] = te.useState(!0);
  te.useEffect(() => {
    const D = JSON.parse(localStorage.getItem($y) || "[]");
    p(D), b(!1);
  }, []);
  const _ = te.useMemo(() => f.filter((D) => D.type === n.type && (D.type === "global" || D.targetFieldId === n.fieldId)).sort((D, x) => new Date(x.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, n]), v = (D) => {
    localStorage.setItem($y, JSON.stringify(D)), p(D);
  }, d = async () => {
    const D = n.type === "field" ? s.fields[n.fieldId]?.label || s.draftFields[n.fieldId]?.label : "Global", x = await iu.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (x)
      try {
        const T = zt.getSettings();
        if (!T.profileId) {
          Oe("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = {
          id: `rs-${Date.now()}`,
          name: x,
          type: n.type,
          targetFieldId: n.fieldId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: [],
          // Will be populated next
          context: {
            mainContextTemplatePreset: T.mainContextTemplatePreset
          },
          profileId: T.profileId,
          promptEngineeringMode: T.defaultPromptEngineeringMode
        }, k = await xA(
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
    if (await iu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const T = f.filter((M) => M.id !== D);
      v(T);
    }
  }, O = (D) => {
    const x = f.findIndex((M) => M.id === D.id), T = [...f];
    x !== -1 ? T[x] = D : T.push(D), v(T), g(D);
  };
  if (h) {
    const D = iu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), x = {
      targetCharacterId: vn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Er,
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
        const M = iu.chat?.length ?? 0, k = T.last ?? 10;
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
    return vn === void 0 && !Er && (x.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ A.jsx(
      EA,
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
  const w = n.type === "field" ? s.fields[n.fieldId]?.label || s.draftFields[n.fieldId]?.label : "Global";
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
      /* @__PURE__ */ A.jsx(be, { className: "danger_button", onClick: () => E(D.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(be, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
Ut.helpers.join || Ut.registerHelper("join", function(n, r) {
  return Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "";
});
Ut.helpers.is_not_empty || Ut.registerHelper("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Nn = SillyTavern.getContext(), Qy = "charCreator", _d = () => ({
  selectedCharacterIndexes: vn ? [String(vn)] : [],
  selectedWorldNames: [],
  fields: Kn.reduce(
    (n, r) => (n[r] = { value: "", prompt: "", label: Sr[r] }, n),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), wA = {
  name: { label: Sr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Sr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Sr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Sr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Sr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Sr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, AA = () => {
  const n = G0(), r = zt.getSettings(), [i, s] = te.useState(_d()), [o, u] = te.useState([]), [f, p] = te.useState(!0), [h, g] = te.useState("core"), [y, b] = te.useState([]), [_, v] = te.useState([]), [d, S] = te.useState(null), [E, O] = te.useState(null), [w, D] = te.useState(!1), [x, T] = te.useState(null);
  te.useEffect(() => {
    (async () => {
      p(!0), b(Nn.characters), v($g);
      const K = JSON.parse(localStorage.getItem(Qy) ?? "{}"), ne = _d();
      if (K.fields && (ne.fields = { ...ne.fields, ...K.fields }), K.draftFields && (ne.draftFields = K.draftFields), K.selectedCharacterIndexes && (ne.selectedCharacterIndexes = K.selectedCharacterIndexes), K.selectedWorldNames && (ne.selectedWorldNames = K.selectedWorldNames), K.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = K.lastLoadedCharacterId;
        const Se = Nn.characters.find((qe) => qe.avatar === K.lastLoadedCharacterId);
        Se && S(Se);
      }
      s(ne), p(!1);
    })();
  }, []), te.useEffect(() => {
    f || localStorage.setItem(Qy, JSON.stringify(i));
  }, [i, f]);
  const M = (P, K) => {
    zt.getSettings()[P] = K, zt.saveSettings(), n();
  }, k = (P, K) => {
    zt.getSettings().contextToSend[P] = K, zt.saveSettings(), n();
  }, q = te.useCallback(
    (P, K, ne, Se) => {
      s((qe) => {
        const Pe = Se ? "draftFields" : "fields", Ue = { ...qe[Pe] };
        return Ue[P] || (Ue[P] = { value: "", prompt: "", label: P }), Ue[P][ne] = K, { ...qe, [Pe]: Ue };
      });
    },
    []
  ), G = te.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, K) => parseInt(P.split("_")[2]) - parseInt(K.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), B = te.useCallback((P) => {
    s((K) => {
      const ne = { ...K.fields };
      return Object.keys(ne).forEach((Se) => {
        Se.startsWith("alternate_greetings_") && delete ne[Se];
      }), P.forEach((Se, qe) => {
        const Pe = `alternate_greetings_${qe + 1}`;
        ne[Pe] = { ...Se, label: `Alternate Greeting ${qe + 1}` };
      }), { ...K, fields: ne };
    });
  }, []), V = te.useCallback(
    (P, K) => {
      q(P, "", "value", K);
    },
    [q]
  ), $ = te.useCallback(
    async (P) => {
      await Nn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && s((ne) => {
        const Se = { ...ne.draftFields };
        return delete Se[P], { ...ne, draftFields: Se };
      });
    },
    [i.draftFields]
  ), oe = te.useCallback(async () => {
    const P = await Nn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const K = Rd(P.trim());
    if (!K) return Oe("error", "Invalid field name.");
    if (i.draftFields[K] || Kn.includes(K))
      return Oe("warning", "Field name already exists.");
    s((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [K]: { value: "", prompt: "", label: P } }
    })), g("draft");
  }, [i.draftFields]), he = (P) => {
    T({ type: "field", fieldId: P }), D(!0);
  }, me = () => {
    T({ type: "global" }), D(!0);
  }, U = (P) => {
    s((K) => ({
      ...K,
      fields: { ...K.fields, ...P.fields },
      draftFields: { ...K.draftFields, ...P.draftFields }
    })), Oe("success", "Changes from revise session applied."), D(!1);
  }, re = te.useCallback(
    async (P, K) => {
      if (!r.profileId) return Oe("warning", "Please select a connection profile.");
      u((ne) => [...ne, P]);
      try {
        const ne = Nn.extensionSettings.connectionManager?.profiles?.find(
          (ue) => ue.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const Se = {
          presetName: ne?.preset,
          contextName: ne?.context,
          instructName: ne?.instruct,
          targetCharacterId: vn,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Er
        }, qe = r.contextToSend.messages;
        switch (qe.type) {
          case "none":
            Se.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            Se.messageIndexesBetween = { start: 0, end: qe.first ?? 10 };
            break;
          case "last":
            const ue = Nn.chat?.length ?? 0, fe = qe.last ?? 10;
            Se.messageIndexesBetween = {
              end: Math.max(0, ue - 1),
              start: Math.max(0, ue - fe)
            };
            break;
          case "range":
            Se.messageIndexesBetween = {
              start: qe.range?.start ?? 0,
              end: qe.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        vn === void 0 && !Er && (Se.messageIndexesBetween = { start: -1, end: -1 });
        const Pe = {};
        await Promise.all(
          $g.filter((ue) => !Pe[ue]).map(async (ue) => {
            const fe = await Nn.loadWorldInfo(ue);
            fe && (Pe[ue] = Object.values(fe.entries));
          })
        );
        const Ue = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete Ue.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete Ue.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete Ue.lorebookDefinitions, r.contextToSend.existingFields || delete Ue.existingFieldDefinitions, r.contextToSend.persona || delete Ue.personaDescription, delete Ue.worldInfoCharDefinition;
        const ht = await Ox({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: Se,
          continueFrom: K,
          session: i,
          allCharacters: y,
          entriesGroupByWorldName: Pe,
          promptSettings: Ue,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (ue) => ue.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P,
          outputFormat: r.outputFormat
        }), rn = P.startsWith("alternate_greetings_"), rt = !rn && !Kn.includes(P);
        if (rn) {
          const ue = parseInt(P.split("_")[2]) - 1, fe = [...G];
          fe[ue] && (fe[ue].value = ht), B(fe);
        } else
          q(P, ht, "value", rt);
      } catch (ne) {
        console.error(ne), Oe("error", ne.message || String(ne));
      } finally {
        u((ne) => ne.filter((Se) => Se !== P));
      }
    },
    [i, r, y, G, q, B]
  ), ce = te.useCallback(async () => {
    await Nn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(_d()), S(null));
  }, []), Re = te.useCallback(
    (P) => {
      if (!d) return Oe("warning", "Please load a character to compare against.");
      let K, ne, Se;
      typeof P == "number" ? (K = G[P]?.value ?? "", ne = d.data?.alternate_greetings?.[P] ?? "", Se = `Alternate Greeting ${P + 1}`) : (K = i.fields[P]?.value ?? "", ne = d[P] ?? d.data?.[P] ?? "", Se = Sr[P]), O({ original: ne, current: K, fieldName: Se });
    },
    [d, i.fields, G]
  ), j = te.useCallback(
    async (P) => {
      const K = y[parseInt(P)];
      if (!K || Kn.some((Pe) => i.fields[Pe].value.trim() !== "") && !await Nn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const Se = { ...i.fields };
      Kn.forEach((Pe) => {
        Se[Pe] = { value: K[Pe] ?? K.data?.[Pe] ?? "", prompt: "", label: Sr[Pe] };
      });
      const qe = (K.data?.alternate_greetings ?? []).map((Pe) => ({ value: Pe, prompt: "" }));
      S(K), s((Pe) => ({ ...Pe, fields: Se, lastLoadedCharacterId: K.avatar })), B(qe);
    },
    [y, i.fields, B]
  ), J = () => G.map((P) => P.value).filter((P) => P.trim() !== ""), ae = async () => {
    if (!i.fields.name.value) return Oe("warning", "Please provide a character name.");
    if (!await Nn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const K = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: J(),
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
      await pb(K, !0);
    } catch (ne) {
      Oe("error", `Failed to create character: ${ne.message}`);
    }
  }, se = async () => {
    if (!d) return Oe("warning", "Please load a character to override.");
    if (!await Nn.Popup.show.confirm(
      "Override Character",
      `Override "${d.name}"? This cannot be undone.`
    )) return;
    const K = {
      ...d,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: J(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await mb(K, !0), Oe("success", `Character "${K.name}" updated!`);
    } catch (ne) {
      Oe("error", `Failed to override character: ${ne.message}`);
    }
  }, le = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: q0 }, null, 2), K = new Blob([P], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(K), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, ze = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const K = P.files?.[0];
      if (K)
        try {
          const ne = await K.text(), Se = JSON.parse(ne);
          if (!Se.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Nn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Pe) => ({ ...Pe, draftFields: Se.draftFields })), Oe("success", "Draft fields imported."));
        } catch (ne) {
          Oe("error", `Import failed: ${ne.message}`);
        }
    }, P.click();
  }, Y = te.useMemo(
    () => y.map((P, K) => ({ value: String(K), label: P.name })),
    [y]
  ), ge = te.useMemo(
    () => _.map((P) => ({ value: P, label: P })),
    [_]
  ), ve = te.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), Ve = te.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ A.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ A.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ A.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ A.jsx(
            F0,
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
            (vn !== void 0 || Er) && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
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
              eu,
              {
                items: Y,
                value: i.selectedCharacterIndexes,
                onChange: (P) => s((K) => ({ ...K, selectedCharacterIndexes: P })),
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
              eu,
              {
                items: ge,
                value: i.selectedWorldNames,
                onChange: (P) => s((K) => ({ ...K, selectedWorldNames: P })),
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
              bu,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Ve,
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
            bu,
            {
              label: "Prompt Preset",
              items: ve,
              value: r.promptPreset,
              onChange: (P) => M("promptPreset", P ?? "default"),
              onItemsChange: (P) => M(
                "promptPresets",
                P.reduce(
                  (K, ne) => ({ ...K, [ne.value]: r.promptPresets[ne.value] ?? { content: "" } }),
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
            be,
            {
              onClick: me,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(be, { onClick: ae, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(be, { onClick: se, disabled: !d, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            eu,
            {
              items: ge,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (P) => {
              },
              onBeforeSelection: async (P, K) => {
                if (!i.fields.name.value)
                  return Oe("warning", "Please enter a name first."), !1;
                const ne = K[0], qe = Ut.compile(r.prompts.worldInfoCharDefinition.content)({
                  character: { ...i.fields, alternate_greetings: G.map((Ue) => Ue.value) }
                }), Pe = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: qe,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await XS({ entry: Pe, selectedWorldName: ne, operation: "add" }), Oe("success", `Entry added to ${ne}.`);
                } catch (Ue) {
                  Oe("error", `Failed to add WI Entry: ${Ue.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(be, { onClick: ce, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ A.jsx(
            eu,
            {
              items: Y,
              value: d ? [String(y.indexOf(d))] : [],
              onChange: (P) => j(P[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ A.jsx(
            be,
            {
              onClick: () => g("core"),
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ A.jsx(
            be,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsxs(be, { onClick: oe, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ A.jsx(be, { onClick: le, children: "Export" }),
            /* @__PURE__ */ A.jsx(be, { onClick: ze, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            Kn.map((P) => {
              const K = wA[P];
              return K ? /* @__PURE__ */ A.jsx(
                by,
                {
                  fieldId: P,
                  label: K.label,
                  value: i.fields[P]?.value ?? "",
                  prompt: i.fields[P]?.prompt ?? "",
                  large: K.large,
                  rows: K.rows,
                  promptEnabled: K.promptEnabled,
                  isGenerating: o.includes(P),
                  onValueChange: (ne, Se) => q(ne, Se, "value", !1),
                  onPromptChange: (ne, Se) => q(ne, Se, "prompt", !1),
                  onGenerate: re,
                  onContinue: (ne) => re(ne, i.fields[ne].value),
                  onClear: (ne) => V(ne, !1),
                  onCompare: Re,
                  onOpenReviseSessions: he
                },
                P
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              Ux,
              {
                greetings: G,
                onGreetingsChange: B,
                isGenerating: o.some((P) => P.startsWith("alternate_greetings_")),
                onGenerate: (P) => re(`alternate_greetings_${P + 1}`),
                onContinue: (P) => re(`alternate_greetings_${P + 1}`, G[P].value),
                onCompare: Re
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([P, K]) => /* @__PURE__ */ A.jsx(
              by,
              {
                fieldId: P,
                label: K.label,
                value: K.value,
                prompt: K.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(P),
                onValueChange: (ne, Se) => q(ne, Se, "value", !0),
                onPromptChange: (ne, Se) => q(ne, Se, "prompt", !0),
                onGenerate: re,
                onContinue: (ne) => re(ne, i.draftFields[ne].value),
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
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          aC,
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
      zi,
      {
        type: gn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          CA,
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
}, TA = () => {
  const [n, r] = te.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, n ? /* @__PURE__ */ A.jsx(
    zi,
    {
      content: /* @__PURE__ */ A.jsx(AA, {}),
      type: gn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, E1 = SillyTavern.getContext();
async function OA() {
  const n = await E1.renderExtensionTemplateAsync(
    `third-party/${Ma}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), uv.createRoot(r).render(
    /* @__PURE__ */ A.jsx(fu.StrictMode, { children: /* @__PURE__ */ A.jsx(Ix, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), uv.createRoot(u).render(
    /* @__PURE__ */ A.jsx(fu.StrictMode, { children: /* @__PURE__ */ A.jsx(TA, {}) })
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
function NA() {
  return !!E1.ConnectionManagerRequestService;
}
NA() ? Mx().then(() => {
  OA();
}) : Oe("error", `[${Ma}] Make sure ST is updated.`);
export {
  OA as init
};
