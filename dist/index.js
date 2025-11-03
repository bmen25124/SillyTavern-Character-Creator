import { renderStoryString as L_, persona_description_positions as Vg } from "../../../../power-user.js";
import { parseMesExamples as P_, baseChatReplace as B_, chat_metadata as Rs, getMaxContextSize as I_, name1 as gr, name2 as Yr, this_chid as Pn, extension_prompt_types as Ea, depth_prompt_role_default as U_, depth_prompt_depth_default as H_ } from "../../../../../script.js";
import { createWorldInfoEntry as q_, world_info_include_names as Z_, wi_anchor_position as F_, world_names as Yg } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as G_, formatInstructModeSystemPrompt as V_ } from "../../../../instruct-mode.js";
import { appendFileContent as Y_ } from "../../../../chats.js";
import { setOpenAIMessages as X_, setOpenAIMessageExamples as $_, formatWorldInfo as Q_, getPromptPosition as K_, getPromptRole as J_, prepareOpenAIMessages as W_ } from "../../../../openai.js";
import { metadata_keys as js } from "../../../../authors-note.js";
import { getGroupDepthPrompts as eb, selected_group as Ma } from "../../../../group-chats.js";
import { getRegexedString as tb, regex_placement as Xg } from "../../../regex/engine.js";
import { removeFromArray as $g, runAfterAnimation as nb } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as xi, fixToastrForDialogs as qf } from "../../../../popup.js";
import Qg from "../../../../../lib/dialog-polyfill.esm.js";
function $y(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Zf = { exports: {} }, zs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kg;
function rb() {
  if (Kg) return zs;
  Kg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, o, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      u = {};
      for (var d in o)
        d !== "key" && (u[d] = o[d]);
    } else u = o;
    return o = u.ref, {
      $$typeof: n,
      type: s,
      key: f,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return zs.Fragment = r, zs.jsx = i, zs.jsxs = i, zs;
}
var Jg;
function ab() {
  return Jg || (Jg = 1, Zf.exports = rb()), Zf.exports;
}
var A = ab(), Ff = { exports: {} }, Oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wg;
function ib() {
  if (Wg) return Oe;
  Wg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
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
  }, h = Object.assign, S = {};
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
  D.constructor = w, h(D, E.prototype), D.isPureReactComponent = !0;
  var x = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(j, J, ae, se, G, pe) {
    return ae = pe.ref, {
      $$typeof: n,
      type: j,
      key: J,
      ref: ae !== void 0 ? ae : null,
      props: pe
    };
  }
  function I(j, J) {
    return k(
      j.type,
      J,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function V(j) {
    return typeof j == "object" && j !== null && j.$$typeof === n;
  }
  function B(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ae) {
      return J[ae];
    });
  }
  var Y = /\/+/g;
  function $(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? B("" + j.key) : J.toString(36);
  }
  function le() {
  }
  function fe(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(le, le) : (j.status = "pending", j.then(
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
  function ge(j, J, ae, se, G) {
    var pe = typeof j;
    (pe === "undefined" || pe === "boolean") && (j = null);
    var he = !1;
    if (j === null) he = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case n:
            case r:
              he = !0;
              break;
            case y:
              return he = j._init, ge(
                he(j._payload),
                J,
                ae,
                se,
                G
              );
          }
      }
    if (he)
      return G = G(j), he = se === "" ? "." + $(j, 0) : se, x(G) ? (ae = "", he != null && (ae = he.replace(Y, "$&/") + "/"), ge(G, J, ae, "", function(Ve) {
        return Ve;
      })) : G != null && (V(G) && (G = I(
        G,
        ae + (G.key == null || j && j.key === G.key ? "" : ("" + G.key).replace(
          Y,
          "$&/"
        ) + "/") + he
      )), J.push(G)), 1;
    he = 0;
    var qe = se === "" ? "." : se + ":";
    if (x(j))
      for (var Ae = 0; Ae < j.length; Ae++)
        se = j[Ae], pe = qe + $(se, Ae), he += ge(
          se,
          J,
          ae,
          pe,
          G
        );
    else if (Ae = _(j), typeof Ae == "function")
      for (j = Ae.call(j), Ae = 0; !(se = j.next()).done; )
        se = se.value, pe = qe + $(se, Ae++), he += ge(
          se,
          J,
          ae,
          pe,
          G
        );
    else if (pe === "object") {
      if (typeof j.then == "function")
        return ge(
          fe(j),
          J,
          ae,
          se,
          G
        );
      throw J = String(j), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return he;
  }
  function U(j, J, ae) {
    if (j == null) return j;
    var se = [], G = 0;
    return ge(j, se, "", "", function(pe) {
      return J.call(ae, pe, G++);
    }), se;
  }
  function te(j) {
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
  var ue = typeof reportError == "function" ? reportError : function(j) {
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
  function De() {
  }
  return Oe.Children = {
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
      if (!V(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  }, Oe.Component = E, Oe.Fragment = i, Oe.Profiler = o, Oe.PureComponent = w, Oe.StrictMode = s, Oe.Suspense = p, Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return T.H.useMemoCache(j);
    }
  }, Oe.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, Oe.cloneElement = function(j, J, ae) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var se = h({}, j.props), G = j.key, pe = void 0;
    if (J != null)
      for (he in J.ref !== void 0 && (pe = void 0), J.key !== void 0 && (G = "" + J.key), J)
        !M.call(J, he) || he === "key" || he === "__self" || he === "__source" || he === "ref" && J.ref === void 0 || (se[he] = J[he]);
    var he = arguments.length - 2;
    if (he === 1) se.children = ae;
    else if (1 < he) {
      for (var qe = Array(he), Ae = 0; Ae < he; Ae++)
        qe[Ae] = arguments[Ae + 2];
      se.children = qe;
    }
    return k(j.type, G, void 0, void 0, pe, se);
  }, Oe.createContext = function(j) {
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
  }, Oe.createElement = function(j, J, ae) {
    var se, G = {}, pe = null;
    if (J != null)
      for (se in J.key !== void 0 && (pe = "" + J.key), J)
        M.call(J, se) && se !== "key" && se !== "__self" && se !== "__source" && (G[se] = J[se]);
    var he = arguments.length - 2;
    if (he === 1) G.children = ae;
    else if (1 < he) {
      for (var qe = Array(he), Ae = 0; Ae < he; Ae++)
        qe[Ae] = arguments[Ae + 2];
      G.children = qe;
    }
    if (j && j.defaultProps)
      for (se in he = j.defaultProps, he)
        G[se] === void 0 && (G[se] = he[se]);
    return k(j, pe, void 0, void 0, null, G);
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(j) {
    return { $$typeof: d, render: j };
  }, Oe.isValidElement = V, Oe.lazy = function(j) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: j },
      _init: te
    };
  }, Oe.memo = function(j, J) {
    return {
      $$typeof: g,
      type: j,
      compare: J === void 0 ? null : J
    };
  }, Oe.startTransition = function(j) {
    var J = T.T, ae = {};
    T.T = ae;
    try {
      var se = j(), G = T.S;
      G !== null && G(ae, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(De, ue);
    } catch (pe) {
      ue(pe);
    } finally {
      T.T = J;
    }
  }, Oe.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, Oe.use = function(j) {
    return T.H.use(j);
  }, Oe.useActionState = function(j, J, ae) {
    return T.H.useActionState(j, J, ae);
  }, Oe.useCallback = function(j, J) {
    return T.H.useCallback(j, J);
  }, Oe.useContext = function(j) {
    return T.H.useContext(j);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(j, J) {
    return T.H.useDeferredValue(j, J);
  }, Oe.useEffect = function(j, J, ae) {
    var se = T.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, J);
  }, Oe.useId = function() {
    return T.H.useId();
  }, Oe.useImperativeHandle = function(j, J, ae) {
    return T.H.useImperativeHandle(j, J, ae);
  }, Oe.useInsertionEffect = function(j, J) {
    return T.H.useInsertionEffect(j, J);
  }, Oe.useLayoutEffect = function(j, J) {
    return T.H.useLayoutEffect(j, J);
  }, Oe.useMemo = function(j, J) {
    return T.H.useMemo(j, J);
  }, Oe.useOptimistic = function(j, J) {
    return T.H.useOptimistic(j, J);
  }, Oe.useReducer = function(j, J, ae) {
    return T.H.useReducer(j, J, ae);
  }, Oe.useRef = function(j) {
    return T.H.useRef(j);
  }, Oe.useState = function(j) {
    return T.H.useState(j);
  }, Oe.useSyncExternalStore = function(j, J, ae) {
    return T.H.useSyncExternalStore(
      j,
      J,
      ae
    );
  }, Oe.useTransition = function() {
    return T.H.useTransition();
  }, Oe.version = "19.1.1", Oe;
}
var ev;
function Hh() {
  return ev || (ev = 1, Ff.exports = ib()), Ff.exports;
}
var ee = Hh();
const hu = /* @__PURE__ */ $y(ee);
var Gf = { exports: {} }, Ls = {}, Vf = { exports: {} }, Yf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv;
function sb() {
  return tv || (tv = 1, (function(n) {
    function r(U, te) {
      var ue = U.length;
      U.push(te);
      e: for (; 0 < ue; ) {
        var De = ue - 1 >>> 1, j = U[De];
        if (0 < o(j, te))
          U[De] = te, U[ue] = j, ue = De;
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
        e: for (var De = 0, j = U.length, J = j >>> 1; De < J; ) {
          var ae = 2 * (De + 1) - 1, se = U[ae], G = ae + 1, pe = U[G];
          if (0 > o(se, ue))
            G < j && 0 > o(pe, se) ? (U[De] = pe, U[G] = ue, De = G) : (U[De] = se, U[ae] = ue, De = ae);
          else if (G < j && 0 > o(pe, ue))
            U[De] = pe, U[G] = ue, De = G;
          else break e;
        }
      }
      return te;
    }
    function o(U, te) {
      var ue = U.sortIndex - te.sortIndex;
      return ue !== 0 ? ue : U.id - te.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, d = f.now();
      n.unstable_now = function() {
        return f.now() - d;
      };
    }
    var p = [], g = [], y = 1, b = null, _ = 3, v = !1, h = !1, S = !1, E = !1, O = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function x(U) {
      for (var te = i(g); te !== null; ) {
        if (te.callback === null) s(g);
        else if (te.startTime <= U)
          s(g), te.sortIndex = te.expirationTime, r(p, te);
        else break;
        te = i(g);
      }
    }
    function T(U) {
      if (S = !1, x(U), !h)
        if (i(p) !== null)
          h = !0, M || (M = !0, $());
        else {
          var te = i(g);
          te !== null && ge(T, te.startTime - U);
        }
    }
    var M = !1, k = -1, I = 5, V = -1;
    function B() {
      return E ? !0 : !(n.unstable_now() - V < I);
    }
    function Y() {
      if (E = !1, M) {
        var U = n.unstable_now();
        V = U;
        var te = !0;
        try {
          e: {
            h = !1, S && (S = !1, w(k), k = -1), v = !0;
            var ue = _;
            try {
              t: {
                for (x(U), b = i(p); b !== null && !(b.expirationTime > U && B()); ) {
                  var De = b.callback;
                  if (typeof De == "function") {
                    b.callback = null, _ = b.priorityLevel;
                    var j = De(
                      b.expirationTime <= U
                    );
                    if (U = n.unstable_now(), typeof j == "function") {
                      b.callback = j, x(U), te = !0;
                      break t;
                    }
                    b === i(p) && s(p), x(U);
                  } else s(p);
                  b = i(p);
                }
                if (b !== null) te = !0;
                else {
                  var J = i(g);
                  J !== null && ge(
                    T,
                    J.startTime - U
                  ), te = !1;
                }
              }
              break e;
            } finally {
              b = null, _ = ue, v = !1;
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
        D(Y);
      };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), fe = le.port2;
      le.port1.onmessage = Y, $ = function() {
        fe.postMessage(null);
      };
    } else
      $ = function() {
        O(Y, 0);
      };
    function ge(U, te) {
      k = O(function() {
        U(n.unstable_now());
      }, te);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, n.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < U ? Math.floor(1e3 / U) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, n.unstable_next = function(U) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = _;
      }
      var ue = _;
      _ = te;
      try {
        return U();
      } finally {
        _ = ue;
      }
    }, n.unstable_requestPaint = function() {
      E = !0;
    }, n.unstable_runWithPriority = function(U, te) {
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
      var ue = _;
      _ = U;
      try {
        return te();
      } finally {
        _ = ue;
      }
    }, n.unstable_scheduleCallback = function(U, te, ue) {
      var De = n.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? De + ue : De) : ue = De, U) {
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
      }, ue > De ? (U.sortIndex = ue, r(g, U), i(p) === null && U === i(g) && (S ? (w(k), k = -1) : S = !0, ge(T, ue - De))) : (U.sortIndex = j, r(p, U), h || v || (h = !0, M || (M = !0, $()))), U;
    }, n.unstable_shouldYield = B, n.unstable_wrapCallback = function(U) {
      var te = _;
      return function() {
        var ue = _;
        _ = te;
        try {
          return U.apply(this, arguments);
        } finally {
          _ = ue;
        }
      };
    };
  })(Yf)), Yf;
}
var nv;
function lb() {
  return nv || (nv = 1, Vf.exports = sb()), Vf.exports;
}
var Xf = { exports: {} }, Lt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rv;
function ob() {
  if (rv) return Lt;
  rv = 1;
  var n = Hh();
  function r(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(p, g, y) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: g,
      implementation: y
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(p, g) {
    if (p === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Lt.createPortal = function(p, g) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(p, g, null, y);
  }, Lt.flushSync = function(p) {
    var g = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, p) return p();
    } finally {
      f.T = g, s.p = y, s.d.f();
    }
  }, Lt.preconnect = function(p, g) {
    typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(p, g));
  }, Lt.prefetchDNS = function(p) {
    typeof p == "string" && s.d.D(p);
  }, Lt.preinit = function(p, g) {
    if (typeof p == "string" && g && typeof g.as == "string") {
      var y = g.as, b = d(y, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, v = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      y === "style" ? s.d.S(
        p,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: b,
          integrity: _,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(p, {
        crossOrigin: b,
        integrity: _,
        fetchPriority: v,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Lt.preinitModule = function(p, g) {
    if (typeof p == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var y = d(
            g.as,
            g.crossOrigin
          );
          s.d.M(p, {
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(p);
  }, Lt.preload = function(p, g) {
    if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var y = g.as, b = d(y, g.crossOrigin);
      s.d.L(p, y, {
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
  }, Lt.preloadModule = function(p, g) {
    if (typeof p == "string")
      if (g) {
        var y = d(g.as, g.crossOrigin);
        s.d.m(p, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(p);
  }, Lt.requestFormReset = function(p) {
    s.d.r(p);
  }, Lt.unstable_batchedUpdates = function(p, g) {
    return p(g);
  }, Lt.useFormState = function(p, g, y) {
    return f.H.useFormState(p, g, y);
  }, Lt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Lt.version = "19.1.1", Lt;
}
var av;
function Qy() {
  if (av) return Xf.exports;
  av = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Xf.exports = ob(), Xf.exports;
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
var iv;
function ub() {
  if (iv) return Ls;
  iv = 1;
  var n = lb(), r = Hh(), i = Qy();
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
  function d(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function p(e) {
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
          if (m === a) return d(c), e;
          if (m === l) return d(c), t;
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
  var y = Object.assign, b = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), D = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), Y = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var le = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === le ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case E:
        return "Profiler";
      case S:
        return "StrictMode";
      case T:
        return "Suspense";
      case M:
        return "SuspenseList";
      case V:
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
          return t = e.displayName || null, t !== null ? t : fe(e.type) || "Memo";
        case I:
          t = e._payload, e = e._init;
          try {
            return fe(e(t));
          } catch {
          }
      }
    return null;
  }
  var ge = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, De = [], j = -1;
  function J(e) {
    return { current: e };
  }
  function ae(e) {
    0 > j || (e.current = De[j], De[j] = null, j--);
  }
  function se(e, t) {
    j++, De[j] = e.current, e.current = t;
  }
  var G = J(null), pe = J(null), he = J(null), qe = J(null);
  function Ae(e, t) {
    switch (se(he, t), se(pe, e), se(G, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? bg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = bg(t), e = Sg(t, e);
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
    ae(G), se(G, e);
  }
  function Ve() {
    ae(G), ae(pe), ae(he);
  }
  function q(e) {
    e.memoizedState !== null && se(qe, e);
    var t = G.current, a = Sg(t, e.type);
    t !== a && (se(pe, e), se(G, a));
  }
  function ne(e) {
    pe.current === e && (ae(G), ae(pe)), qe.current === e && (ae(qe), Os._currentValue = ue);
  }
  var re = Object.prototype.hasOwnProperty, Se = n.unstable_scheduleCallback, Je = n.unstable_cancelCallback, Ie = n.unstable_shouldYield, tt = n.unstable_requestPaint, st = n.unstable_now, In = n.unstable_getCurrentPriorityLevel, It = n.unstable_ImmediatePriority, oe = n.unstable_UserBlockingPriority, de = n.unstable_NormalPriority, Ze = n.unstable_LowPriority, He = n.unstable_IdlePriority, nt = n.log, xr = n.unstable_setDisableYieldValue, Kn = null, dt = null;
  function Un(e) {
    if (typeof nt == "function" && xr(e), dt && typeof dt.setStrictMode == "function")
      try {
        dt.setStrictMode(Kn, e);
      } catch {
      }
  }
  var Ut = Math.clz32 ? Math.clz32 : aa, gn = Math.log, ra = Math.LN2;
  function aa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gn(e) / ra | 0) | 0;
  }
  var Jn = 256, Hn = 4194304;
  function vn(e) {
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
  function Ht(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, m = e.suspendedLanes, C = e.pingedLanes;
    e = e.warmLanes;
    var N = l & 134217727;
    return N !== 0 ? (l = N & ~m, l !== 0 ? c = vn(l) : (C &= N, C !== 0 ? c = vn(C) : a || (a = N & ~e, a !== 0 && (c = vn(a))))) : (N = l & ~m, N !== 0 ? c = vn(N) : C !== 0 ? c = vn(C) : a || (a = l & ~e, a !== 0 && (c = vn(a)))), c === 0 ? 0 : t !== 0 && t !== c && (t & m) === 0 && (m = c & -c, a = t & -t, m >= a || m === 32 && (a & 4194048) !== 0) ? t : c;
  }
  function Gt(e, t) {
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
  function Pa() {
    var e = Jn;
    return Jn <<= 1, (Jn & 4194048) === 0 && (Jn = 256), e;
  }
  function ad() {
    var e = Hn;
    return Hn <<= 1, (Hn & 62914560) === 0 && (Hn = 4194304), e;
  }
  function Du(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Bi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function C1(e, t, a, l, c, m) {
    var C = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var N = e.entanglements, R = e.expirationTimes, H = e.hiddenUpdates;
    for (a = C & ~a; 0 < a; ) {
      var X = 31 - Ut(a), W = 1 << X;
      N[X] = 0, R[X] = -1;
      var Z = H[X];
      if (Z !== null)
        for (H[X] = null, X = 0; X < Z.length; X++) {
          var F = Z[X];
          F !== null && (F.lane &= -536870913);
        }
      a &= ~W;
    }
    l !== 0 && id(e, l, 0), m !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= m & ~(C & ~t));
  }
  function id(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Ut(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function sd(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - Ut(a), c = 1 << l;
      c & t | e[l] & t && (e[l] |= t), a &= ~c;
    }
  }
  function Mu(e) {
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
  function ku(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ld() {
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Ug(e.type));
  }
  function w1(e, t) {
    var a = te.p;
    try {
      return te.p = e, t();
    } finally {
      te.p = a;
    }
  }
  var Cr = Math.random().toString(36).slice(2), jt = "__reactFiber$" + Cr, Vt = "__reactProps$" + Cr, Ba = "__reactContainer$" + Cr, Ru = "__reactEvents$" + Cr, A1 = "__reactListeners$" + Cr, T1 = "__reactHandles$" + Cr, od = "__reactResources$" + Cr, Ii = "__reactMarker$" + Cr;
  function ju(e) {
    delete e[jt], delete e[Vt], delete e[Ru], delete e[A1], delete e[T1];
  }
  function Ia(e) {
    var t = e[jt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ba] || a[jt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = wg(e); e !== null; ) {
            if (a = e[jt]) return a;
            e = wg(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ua(e) {
    if (e = e[jt] || e[Ba]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ui(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ha(e) {
    var t = e[od];
    return t || (t = e[od] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function At(e) {
    e[Ii] = !0;
  }
  var ud = /* @__PURE__ */ new Set(), cd = {};
  function ia(e, t) {
    qa(e, t), qa(e + "Capture", t);
  }
  function qa(e, t) {
    for (cd[e] = t, e = 0; e < t.length; e++)
      ud.add(t[e]);
  }
  var O1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fd = {}, hd = {};
  function N1(e) {
    return re.call(hd, e) ? !0 : re.call(fd, e) ? !1 : O1.test(e) ? hd[e] = !0 : (fd[e] = !0, !1);
  }
  function cl(e, t, a) {
    if (N1(t))
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
  function Wn(e, t, a, l) {
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
  var zu, dd;
  function Za(e) {
    if (zu === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        zu = t && t[1] || "", dd = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + zu + e + dd;
  }
  var Lu = !1;
  function Pu(e, t) {
    if (!e || Lu) return "";
    Lu = !0;
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
      Lu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Za(a) : "";
  }
  function D1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Za(e.type);
      case 16:
        return Za("Lazy");
      case 13:
        return Za("Suspense");
      case 19:
        return Za("SuspenseList");
      case 0:
      case 15:
        return Pu(e.type, !1);
      case 11:
        return Pu(e.type.render, !1);
      case 1:
        return Pu(e.type, !0);
      case 31:
        return Za("Activity");
      default:
        return "";
    }
  }
  function pd(e) {
    try {
      var t = "";
      do
        t += D1(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function yn(e) {
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
  function md(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function M1(e) {
    var t = md(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
  function hl(e) {
    e._valueTracker || (e._valueTracker = M1(e));
  }
  function gd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = md(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function dl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var k1 = /[\n"\\]/g;
  function _n(e) {
    return e.replace(
      k1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bu(e, t, a, l, c, m, C, N) {
    e.name = "", C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" ? e.type = C : e.removeAttribute("type"), t != null ? C === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + yn(t)) : e.value !== "" + yn(t) && (e.value = "" + yn(t)) : C !== "submit" && C !== "reset" || e.removeAttribute("value"), t != null ? Iu(e, C, yn(t)) : a != null ? Iu(e, C, yn(a)) : l != null && e.removeAttribute("value"), c == null && m != null && (e.defaultChecked = !!m), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.name = "" + yn(N) : e.removeAttribute("name");
  }
  function vd(e, t, a, l, c, m, C, N) {
    if (m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.type = m), t != null || a != null) {
      if (!(m !== "submit" && m !== "reset" || t != null))
        return;
      a = a != null ? "" + yn(a) : "", t = t != null ? "" + yn(t) : a, N || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = N ? e.checked : !!l, e.defaultChecked = !!l, C != null && typeof C != "function" && typeof C != "symbol" && typeof C != "boolean" && (e.name = C);
  }
  function Iu(e, t, a) {
    t === "number" && dl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Fa(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < a.length; c++)
        t["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = t.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + yn(a), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yd(e, t, a) {
    if (t != null && (t = "" + yn(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + yn(a) : "";
  }
  function _d(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (ge(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = yn(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
  }
  function Ga(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var R1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bd(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || R1.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Sd(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in t)
        l = t[c], t.hasOwnProperty(c) && a[c] !== l && bd(e, c, l);
    } else
      for (var m in t)
        t.hasOwnProperty(m) && bd(e, m, t[m]);
  }
  function Uu(e) {
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
  var j1 = /* @__PURE__ */ new Map([
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
  ]), z1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pl(e) {
    return z1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Hu = null;
  function qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Va = null, Ya = null;
  function Ed(e) {
    var t = Ua(e);
    if (t && (e = t.stateNode)) {
      var a = e[Vt] || null;
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
              'input[name="' + _n(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var c = l[Vt] || null;
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
              l = a[t], l.form === e.form && gd(l);
          }
          break e;
        case "textarea":
          yd(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Fa(e, !!a.multiple, t, !1);
      }
    }
  }
  var Zu = !1;
  function xd(e, t, a) {
    if (Zu) return e(t, a);
    Zu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Zu = !1, (Va !== null || Ya !== null) && (Wl(), Va && (t = Va, e = Ya, Ya = Va = null, Ed(t), e)))
        for (t = 0; t < e.length; t++) Ed(e[t]);
    }
  }
  function Hi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Vt] || null;
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
  var er = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fu = !1;
  if (er)
    try {
      var qi = {};
      Object.defineProperty(qi, "passive", {
        get: function() {
          Fu = !0;
        }
      }), window.addEventListener("test", qi, qi), window.removeEventListener("test", qi, qi);
    } catch {
      Fu = !1;
    }
  var wr = null, Gu = null, ml = null;
  function Cd() {
    if (ml) return ml;
    var e, t = Gu, a = t.length, l, c = "value" in wr ? wr.value : wr.textContent, m = c.length;
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
  function wd() {
    return !1;
  }
  function Yt(e) {
    function t(a, l, c, m, C) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = m, this.target = C, this.currentTarget = null;
      for (var N in e)
        e.hasOwnProperty(N) && (a = e[N], this[N] = a ? a(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? vl : wd, this.isPropagationStopped = wd, this;
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
  var sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yl = Yt(sa), Zi = y({}, sa, { view: 0, detail: 0 }), L1 = Yt(Zi), Vu, Yu, Fi, _l = y({}, Zi, {
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
    getModifierState: $u,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Fi && (Fi && e.type === "mousemove" ? (Vu = e.screenX - Fi.screenX, Yu = e.screenY - Fi.screenY) : Yu = Vu = 0, Fi = e), Vu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Yu;
    }
  }), Ad = Yt(_l), P1 = y({}, _l, { dataTransfer: 0 }), B1 = Yt(P1), I1 = y({}, Zi, { relatedTarget: 0 }), Xu = Yt(I1), U1 = y({}, sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H1 = Yt(U1), q1 = y({}, sa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Z1 = Yt(q1), F1 = y({}, sa, { data: 0 }), Td = Yt(F1), G1 = {
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
  }, V1 = {
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
  }, Y1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function X1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Y1[e]) ? !!t[e] : !1;
  }
  function $u() {
    return X1;
  }
  var $1 = y({}, Zi, {
    key: function(e) {
      if (e.key) {
        var t = G1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? V1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $u,
    charCode: function(e) {
      return e.type === "keypress" ? gl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Q1 = Yt($1), K1 = y({}, _l, {
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
  }), Od = Yt(K1), J1 = y({}, Zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), W1 = Yt(J1), e2 = y({}, sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), t2 = Yt(e2), n2 = y({}, _l, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), r2 = Yt(n2), a2 = y({}, sa, {
    newState: 0,
    oldState: 0
  }), i2 = Yt(a2), s2 = [9, 13, 27, 32], Qu = er && "CompositionEvent" in window, Gi = null;
  er && "documentMode" in document && (Gi = document.documentMode);
  var l2 = er && "TextEvent" in window && !Gi, Nd = er && (!Qu || Gi && 8 < Gi && 11 >= Gi), Dd = " ", Md = !1;
  function kd(e, t) {
    switch (e) {
      case "keyup":
        return s2.indexOf(t.keyCode) !== -1;
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
  function Rd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Xa = !1;
  function o2(e, t) {
    switch (e) {
      case "compositionend":
        return Rd(t);
      case "keypress":
        return t.which !== 32 ? null : (Md = !0, Dd);
      case "textInput":
        return e = t.data, e === Dd && Md ? null : e;
      default:
        return null;
    }
  }
  function u2(e, t) {
    if (Xa)
      return e === "compositionend" || !Qu && kd(e, t) ? (e = Cd(), ml = Gu = wr = null, Xa = !1, e) : null;
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
        return Nd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var c2 = {
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
  function jd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!c2[e.type] : t === "textarea";
  }
  function zd(e, t, a, l) {
    Va ? Ya ? Ya.push(l) : Ya = [l] : Va = l, t = io(t, "onChange"), 0 < t.length && (a = new yl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var Vi = null, Yi = null;
  function f2(e) {
    mg(e, 0);
  }
  function bl(e) {
    var t = Ui(e);
    if (gd(t)) return e;
  }
  function Ld(e, t) {
    if (e === "change") return t;
  }
  var Pd = !1;
  if (er) {
    var Ku;
    if (er) {
      var Ju = "oninput" in document;
      if (!Ju) {
        var Bd = document.createElement("div");
        Bd.setAttribute("oninput", "return;"), Ju = typeof Bd.oninput == "function";
      }
      Ku = Ju;
    } else Ku = !1;
    Pd = Ku && (!document.documentMode || 9 < document.documentMode);
  }
  function Id() {
    Vi && (Vi.detachEvent("onpropertychange", Ud), Yi = Vi = null);
  }
  function Ud(e) {
    if (e.propertyName === "value" && bl(Yi)) {
      var t = [];
      zd(
        t,
        Yi,
        e,
        qu(e)
      ), xd(f2, t);
    }
  }
  function h2(e, t, a) {
    e === "focusin" ? (Id(), Vi = t, Yi = a, Vi.attachEvent("onpropertychange", Ud)) : e === "focusout" && Id();
  }
  function d2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bl(Yi);
  }
  function p2(e, t) {
    if (e === "click") return bl(t);
  }
  function m2(e, t) {
    if (e === "input" || e === "change")
      return bl(t);
  }
  function g2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var rn = typeof Object.is == "function" ? Object.is : g2;
  function Xi(e, t) {
    if (rn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!re.call(t, c) || !rn(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  function Hd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qd(e, t) {
    var a = Hd(e);
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
      a = Hd(a);
    }
  }
  function Zd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Fd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = dl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = dl(e.document);
    }
    return t;
  }
  function Wu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var v2 = er && "documentMode" in document && 11 >= document.documentMode, $a = null, ec = null, $i = null, tc = !1;
  function Gd(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    tc || $a == null || $a !== dl(l) || (l = $a, "selectionStart" in l && Wu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), $i && Xi($i, l) || ($i = l, l = io(ec, "onSelect"), 0 < l.length && (t = new yl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = $a)));
  }
  function la(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Qa = {
    animationend: la("Animation", "AnimationEnd"),
    animationiteration: la("Animation", "AnimationIteration"),
    animationstart: la("Animation", "AnimationStart"),
    transitionrun: la("Transition", "TransitionRun"),
    transitionstart: la("Transition", "TransitionStart"),
    transitioncancel: la("Transition", "TransitionCancel"),
    transitionend: la("Transition", "TransitionEnd")
  }, nc = {}, Vd = {};
  er && (Vd = document.createElement("div").style, "AnimationEvent" in window || (delete Qa.animationend.animation, delete Qa.animationiteration.animation, delete Qa.animationstart.animation), "TransitionEvent" in window || delete Qa.transitionend.transition);
  function oa(e) {
    if (nc[e]) return nc[e];
    if (!Qa[e]) return e;
    var t = Qa[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Vd)
        return nc[e] = t[a];
    return e;
  }
  var Yd = oa("animationend"), Xd = oa("animationiteration"), $d = oa("animationstart"), y2 = oa("transitionrun"), _2 = oa("transitionstart"), b2 = oa("transitioncancel"), Qd = oa("transitionend"), Kd = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rc.push("scrollEnd");
  function Mn(e, t) {
    Kd.set(e, t), ia(t, [e]);
  }
  var Jd = /* @__PURE__ */ new WeakMap();
  function bn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Jd.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: pd(t)
      }, Jd.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: pd(t)
    };
  }
  var Sn = [], Ka = 0, ac = 0;
  function Sl() {
    for (var e = Ka, t = ac = Ka = 0; t < e; ) {
      var a = Sn[t];
      Sn[t++] = null;
      var l = Sn[t];
      Sn[t++] = null;
      var c = Sn[t];
      Sn[t++] = null;
      var m = Sn[t];
      if (Sn[t++] = null, l !== null && c !== null) {
        var C = l.pending;
        C === null ? c.next = c : (c.next = C.next, C.next = c), l.pending = c;
      }
      m !== 0 && Wd(a, c, m);
    }
  }
  function El(e, t, a, l) {
    Sn[Ka++] = e, Sn[Ka++] = t, Sn[Ka++] = a, Sn[Ka++] = l, ac |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ic(e, t, a, l) {
    return El(e, t, a, l), xl(e);
  }
  function Ja(e, t) {
    return El(e, null, null, t), xl(e);
  }
  function Wd(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var c = !1, m = e.return; m !== null; )
      m.childLanes |= a, l = m.alternate, l !== null && (l.childLanes |= a), m.tag === 22 && (e = m.stateNode, e === null || e._visibility & 1 || (c = !0)), e = m, m = m.return;
    return e.tag === 3 ? (m = e.stateNode, c && t !== null && (c = 31 - Ut(a), e = m.hiddenUpdates, l = e[c], l === null ? e[c] = [t] : l.push(t), t.lane = a | 536870912), m) : null;
  }
  function xl(e) {
    if (50 < bs)
      throw bs = 0, hf = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wa = {};
  function S2(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function an(e, t, a, l) {
    return new S2(e, t, a, l);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function tr(e, t) {
    var a = e.alternate;
    return a === null ? (a = an(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function ep(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Cl(e, t, a, l, c, m) {
    var C = 0;
    if (l = e, typeof e == "function") sc(e) && (C = 1);
    else if (typeof e == "string")
      C = x_(
        e,
        a,
        G.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case V:
          return e = an(31, a, t, c), e.elementType = V, e.lanes = m, e;
        case h:
          return ua(a.children, c, m, t);
        case S:
          C = 8, c |= 24;
          break;
        case E:
          return e = an(12, a, t, c | 2), e.elementType = E, e.lanes = m, e;
        case T:
          return e = an(13, a, t, c), e.elementType = T, e.lanes = m, e;
        case M:
          return e = an(19, a, t, c), e.elementType = M, e.lanes = m, e;
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
              case I:
                C = 16, l = null;
                break e;
            }
          C = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = an(C, a, t, c), t.elementType = e, t.type = l, t.lanes = m, t;
  }
  function ua(e, t, a, l) {
    return e = an(7, e, l, t), e.lanes = a, e;
  }
  function lc(e, t, a) {
    return e = an(6, e, null, t), e.lanes = a, e;
  }
  function oc(e, t, a) {
    return t = an(
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
  var ei = [], ti = 0, wl = null, Al = 0, En = [], xn = 0, ca = null, nr = 1, rr = "";
  function fa(e, t) {
    ei[ti++] = Al, ei[ti++] = wl, wl = e, Al = t;
  }
  function tp(e, t, a) {
    En[xn++] = nr, En[xn++] = rr, En[xn++] = ca, ca = e;
    var l = nr;
    e = rr;
    var c = 32 - Ut(l) - 1;
    l &= ~(1 << c), a += 1;
    var m = 32 - Ut(t) + c;
    if (30 < m) {
      var C = c - c % 5;
      m = (l & (1 << C) - 1).toString(32), l >>= C, c -= C, nr = 1 << 32 - Ut(t) + c | a << c | l, rr = m + e;
    } else
      nr = 1 << m | a << c | l, rr = e;
  }
  function uc(e) {
    e.return !== null && (fa(e, 1), tp(e, 1, 0));
  }
  function cc(e) {
    for (; e === wl; )
      wl = ei[--ti], ei[ti] = null, Al = ei[--ti], ei[ti] = null;
    for (; e === ca; )
      ca = En[--xn], En[xn] = null, rr = En[--xn], En[xn] = null, nr = En[--xn], En[xn] = null;
  }
  var qt = null, ct = null, Ue = !1, ha = null, qn = !1, fc = Error(s(519));
  function da(e) {
    var t = Error(s(418, ""));
    throw Ji(bn(t, e)), fc;
  }
  function np(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[jt] = e, t[Vt] = l, a) {
      case "dialog":
        je("cancel", t), je("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        je("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Es.length; a++)
          je(Es[a], t);
        break;
      case "source":
        je("error", t);
        break;
      case "img":
      case "image":
      case "link":
        je("error", t), je("load", t);
        break;
      case "details":
        je("toggle", t);
        break;
      case "input":
        je("invalid", t), vd(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), hl(t);
        break;
      case "select":
        je("invalid", t);
        break;
      case "textarea":
        je("invalid", t), _d(t, l.value, l.defaultValue, l.children), hl(t);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || _g(t.textContent, a) ? (l.popover != null && (je("beforetoggle", t), je("toggle", t)), l.onScroll != null && je("scroll", t), l.onScrollEnd != null && je("scrollend", t), l.onClick != null && (t.onclick = so), t = !0) : t = !1, t || da(e);
  }
  function rp(e) {
    for (qt = e.return; qt; )
      switch (qt.tag) {
        case 5:
        case 13:
          qn = !1;
          return;
        case 27:
        case 3:
          qn = !0;
          return;
        default:
          qt = qt.return;
      }
  }
  function Qi(e) {
    if (e !== qt) return !1;
    if (!Ue) return rp(e), Ue = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Of(e.type, e.memoizedProps)), a = !a), a && ct && da(e), rp(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                ct = Rn(e.nextSibling);
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
      t === 27 ? (t = ct, Hr(e.type) ? (e = kf, kf = null, ct = e) : ct = t) : ct = qt ? Rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ki() {
    ct = qt = null, Ue = !1;
  }
  function ap() {
    var e = ha;
    return e !== null && (Qt === null ? Qt = e : Qt.push.apply(
      Qt,
      e
    ), ha = null), e;
  }
  function Ji(e) {
    ha === null ? ha = [e] : ha.push(e);
  }
  var hc = J(null), pa = null, ar = null;
  function Ar(e, t, a) {
    se(hc, t._currentValue), t._currentValue = a;
  }
  function ir(e) {
    e._currentValue = hc.current, ae(hc);
  }
  function dc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function pc(e, t, a, l) {
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
              m.lanes |= a, N = m.alternate, N !== null && (N.lanes |= a), dc(
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
        C.lanes |= a, m = C.alternate, m !== null && (m.lanes |= a), dc(C, a, e), C = null;
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
  function Wi(e, t, a, l) {
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
          rn(c.pendingProps.value, C.value) || (e !== null ? e.push(N) : e = [N]);
        }
      } else if (c === qe.current) {
        if (C = c.alternate, C === null) throw Error(s(387));
        C.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Os) : e = [Os]);
      }
      c = c.return;
    }
    e !== null && pc(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Tl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!rn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ma(e) {
    pa = e, ar = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function zt(e) {
    return ip(pa, e);
  }
  function Ol(e, t) {
    return pa === null && ma(e), ip(e, t);
  }
  function ip(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, ar === null) {
      if (e === null) throw Error(s(308));
      ar = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ar = ar.next = t;
    return a;
  }
  var E2 = typeof AbortController < "u" ? AbortController : function() {
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
  }, x2 = n.unstable_scheduleCallback, C2 = n.unstable_NormalPriority, xt = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new E2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function es(e) {
    e.refCount--, e.refCount === 0 && x2(C2, function() {
      e.controller.abort();
    });
  }
  var ts = null, gc = 0, ni = 0, ri = null;
  function w2(e, t) {
    if (ts === null) {
      var a = ts = [];
      gc = 0, ni = _f(), ri = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return gc++, t.then(sp, sp), t;
  }
  function sp() {
    if (--gc === 0 && ts !== null) {
      ri !== null && (ri.status = "fulfilled");
      var e = ts;
      ts = null, ni = 0, ri = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function A2(e, t) {
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
  var lp = U.S;
  U.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && w2(e, t), lp !== null && lp(e, t);
  };
  var ga = J(null);
  function vc() {
    var e = ga.current;
    return e !== null ? e : We.pooledCache;
  }
  function Nl(e, t) {
    t === null ? se(ga, ga.current) : se(ga, t.pool);
  }
  function op() {
    var e = vc();
    return e === null ? null : { parent: xt._currentValue, pool: e };
  }
  var ns = Error(s(460)), up = Error(s(474)), Dl = Error(s(542)), yc = { then: function() {
  } };
  function cp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Ml() {
  }
  function fp(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Ml, Ml), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, dp(e), e;
      default:
        if (typeof t.status == "string") t.then(Ml, Ml);
        else {
          if (e = We, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, dp(e), e;
        }
        throw rs = t, ns;
    }
  }
  var rs = null;
  function hp() {
    if (rs === null) throw Error(s(459));
    var e = rs;
    return rs = null, e;
  }
  function dp(e) {
    if (e === ns || e === Dl)
      throw Error(s(483));
  }
  var Tr = !1;
  function _c(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function bc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Or(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Nr(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Fe & 2) !== 0) {
      var c = l.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, t = xl(e), Wd(e, null, a), t;
    }
    return El(e, l, t, a), xl(e);
  }
  function as(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, sd(e, a);
    }
  }
  function Sc(e, t) {
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
  var Ec = !1;
  function is() {
    if (Ec) {
      var e = ri;
      if (e !== null) throw e;
    }
  }
  function ss(e, t, a, l) {
    Ec = !1;
    var c = e.updateQueue;
    Tr = !1;
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
        if (F ? (Pe & Z) === Z : (l & Z) === Z) {
          Z !== 0 && Z === ni && (Ec = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: null,
            next: null
          });
          e: {
            var Ee = e, _e = N;
            Z = t;
            var $e = a;
            switch (_e.tag) {
              case 1:
                if (Ee = _e.payload, typeof Ee == "function") {
                  W = Ee.call($e, W, Z);
                  break e;
                }
                W = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = _e.payload, Z = typeof Ee == "function" ? Ee.call($e, W, Z) : Ee, Z == null) break e;
                W = y({}, W, Z);
                break e;
              case 2:
                Tr = !0;
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
      X === null && (R = W), c.baseState = R, c.firstBaseUpdate = H, c.lastBaseUpdate = X, m === null && (c.shared.lanes = 0), Pr |= C, e.lanes = C, e.memoizedState = W;
    }
  }
  function pp(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function mp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        pp(a[e], t);
  }
  var ai = J(null), kl = J(0);
  function gp(e, t) {
    e = hr, se(kl, e), se(ai, t), hr = e | t.baseLanes;
  }
  function xc() {
    se(kl, hr), se(ai, ai.current);
  }
  function Cc() {
    hr = kl.current, ae(ai), ae(kl);
  }
  var Dr = 0, Me = null, Ye = null, yt = null, Rl = !1, ii = !1, va = !1, jl = 0, ls = 0, si = null, T2 = 0;
  function pt() {
    throw Error(s(321));
  }
  function wc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!rn(e[a], t[a])) return !1;
    return !0;
  }
  function Ac(e, t, a, l, c, m) {
    return Dr = m, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? Wp : em, va = !1, m = a(l, c), va = !1, ii && (m = yp(
      t,
      a,
      l,
      c
    )), vp(e), m;
  }
  function vp(e) {
    U.H = Ul;
    var t = Ye !== null && Ye.next !== null;
    if (Dr = 0, yt = Ye = Me = null, Rl = !1, ls = 0, si = null, t) throw Error(s(300));
    e === null || Tt || (e = e.dependencies, e !== null && Tl(e) && (Tt = !0));
  }
  function yp(e, t, a, l) {
    Me = e;
    var c = 0;
    do {
      if (ii && (si = null), ls = 0, ii = !1, 25 <= c) throw Error(s(301));
      if (c += 1, yt = Ye = null, e.updateQueue != null) {
        var m = e.updateQueue;
        m.lastEffect = null, m.events = null, m.stores = null, m.memoCache != null && (m.memoCache.index = 0);
      }
      U.H = j2, m = t(a, l);
    } while (ii);
    return m;
  }
  function O2() {
    var e = U.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? os(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (Me.flags |= 1024), t;
  }
  function Tc() {
    var e = jl !== 0;
    return jl = 0, e;
  }
  function Oc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Nc(e) {
    if (Rl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Rl = !1;
    }
    Dr = 0, yt = Ye = Me = null, ii = !1, ls = jl = 0, si = null;
  }
  function Xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return yt === null ? Me.memoizedState = yt = e : yt = yt.next = e, yt;
  }
  function _t() {
    if (Ye === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = yt === null ? Me.memoizedState : yt.next;
    if (t !== null)
      yt = t, Ye = e;
    else {
      if (e === null)
        throw Me.alternate === null ? Error(s(467)) : Error(s(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null
      }, yt === null ? Me.memoizedState = yt = e : yt = yt.next = e;
    }
    return yt;
  }
  function Dc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function os(e) {
    var t = ls;
    return ls += 1, si === null && (si = []), e = fp(si, e, t), t = Me, (yt === null ? t.memoizedState : yt.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Wp : em), e;
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return os(e);
      if (e.$$typeof === D) return zt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Mc(e) {
    var t = null, a = Me.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = Me.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Dc(), Me.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = B;
    return t.index++, a;
  }
  function sr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ll(e) {
    var t = _t();
    return kc(t, Ye, e);
  }
  function kc(e, t, a) {
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
        if (W !== H.lane ? (Pe & W) === W : (Dr & W) === W) {
          var Z = H.revertLane;
          if (Z === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), W === ni && (X = !0);
          else if ((Dr & Z) === Z) {
            H = H.next, Z === ni && (X = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, R === null ? (N = R = W, C = m) : R = R.next = W, Me.lanes |= Z, Pr |= Z;
          W = H.action, va && a(m, W), m = H.hasEagerState ? H.eagerState : a(m, W);
        } else
          Z = {
            lane: W,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, R === null ? (N = R = Z, C = m) : R = R.next = Z, Me.lanes |= W, Pr |= W;
        H = H.next;
      } while (H !== null && H !== t);
      if (R === null ? C = m : R.next = N, !rn(m, e.memoizedState) && (Tt = !0, X && (a = ri, a !== null)))
        throw a;
      e.memoizedState = m, e.baseState = C, e.baseQueue = R, l.lastRenderedState = m;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Rc(e) {
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
      rn(m, t.memoizedState) || (Tt = !0), t.memoizedState = m, t.baseQueue === null && (t.baseState = m), a.lastRenderedState = m;
    }
    return [m, l];
  }
  function _p(e, t, a) {
    var l = Me, c = _t(), m = Ue;
    if (m) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = t();
    var C = !rn(
      (Ye || c).memoizedState,
      a
    );
    C && (c.memoizedState = a, Tt = !0), c = c.queue;
    var N = Ep.bind(null, l, c, e);
    if (us(2048, 8, N, [e]), c.getSnapshot !== t || C || yt !== null && yt.memoizedState.tag & 1) {
      if (l.flags |= 2048, li(
        9,
        Pl(),
        Sp.bind(
          null,
          l,
          c,
          a,
          t
        ),
        null
      ), We === null) throw Error(s(349));
      m || (Dr & 124) !== 0 || bp(l, t, a);
    }
    return a;
  }
  function bp(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Me.updateQueue, t === null ? (t = Dc(), Me.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Sp(e, t, a, l) {
    t.value = a, t.getSnapshot = l, xp(t) && Cp(e);
  }
  function Ep(e, t, a) {
    return a(function() {
      xp(t) && Cp(e);
    });
  }
  function xp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !rn(e, a);
    } catch {
      return !0;
    }
  }
  function Cp(e) {
    var t = Ja(e, 2);
    t !== null && cn(t, e, 2);
  }
  function jc(e) {
    var t = Xt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), va) {
        Un(!0);
        try {
          a();
        } finally {
          Un(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sr,
      lastRenderedState: e
    }, t;
  }
  function wp(e, t, a, l) {
    return e.baseState = a, kc(
      e,
      Ye,
      typeof l == "function" ? l : sr
    );
  }
  function N2(e, t, a, l, c) {
    if (Il(e)) throw Error(s(485));
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
      U.T !== null ? a(!0) : m.isTransition = !1, l(m), a = t.pending, a === null ? (m.next = t.pending = m, Ap(t, m)) : (m.next = a.next, t.pending = a.next = m);
    }
  }
  function Ap(e, t) {
    var a = t.action, l = t.payload, c = e.state;
    if (t.isTransition) {
      var m = U.T, C = {};
      U.T = C;
      try {
        var N = a(c, l), R = U.S;
        R !== null && R(C, N), Tp(e, t, N);
      } catch (H) {
        zc(e, t, H);
      } finally {
        U.T = m;
      }
    } else
      try {
        m = a(c, l), Tp(e, t, m);
      } catch (H) {
        zc(e, t, H);
      }
  }
  function Tp(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Op(e, t, l);
      },
      function(l) {
        return zc(e, t, l);
      }
    ) : Op(e, t, a);
  }
  function Op(e, t, a) {
    t.status = "fulfilled", t.value = a, Np(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ap(e, a)));
  }
  function zc(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Np(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Np(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Dp(e, t) {
    return t;
  }
  function Mp(e, t) {
    if (Ue) {
      var a = We.formState;
      if (a !== null) {
        e: {
          var l = Me;
          if (Ue) {
            if (ct) {
              t: {
                for (var c = ct, m = qn; c.nodeType !== 8; ) {
                  if (!m) {
                    c = null;
                    break t;
                  }
                  if (c = Rn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                m = c.data, c = m === "F!" || m === "F" ? c : null;
              }
              if (c) {
                ct = Rn(
                  c.nextSibling
                ), l = c.data === "F!";
                break e;
              }
            }
            da(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = Xt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dp,
      lastRenderedState: t
    }, a.queue = l, a = Qp.bind(
      null,
      Me,
      l
    ), l.dispatch = a, l = jc(!1), m = Uc.bind(
      null,
      Me,
      !1,
      l.queue
    ), l = Xt(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = N2.bind(
      null,
      Me,
      c,
      m,
      a
    ), c.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function kp(e) {
    var t = _t();
    return Rp(t, Ye, e);
  }
  function Rp(e, t, a) {
    if (t = kc(
      e,
      t,
      Dp
    )[0], e = Ll(sr)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = os(t);
      } catch (C) {
        throw C === ns ? Dl : C;
      }
    else l = t;
    t = _t();
    var c = t.queue, m = c.dispatch;
    return a !== t.memoizedState && (Me.flags |= 2048, li(
      9,
      Pl(),
      D2.bind(null, c, a),
      null
    )), [l, m, e];
  }
  function D2(e, t) {
    e.action = t;
  }
  function jp(e) {
    var t = _t(), a = Ye;
    if (a !== null)
      return Rp(t, a, e);
    _t(), t = t.memoizedState, a = _t();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function li(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = Me.updateQueue, t === null && (t = Dc(), Me.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Pl() {
    return { destroy: void 0, resource: void 0 };
  }
  function zp() {
    return _t().memoizedState;
  }
  function Bl(e, t, a, l) {
    var c = Xt();
    l = l === void 0 ? null : l, Me.flags |= e, c.memoizedState = li(
      1 | t,
      Pl(),
      a,
      l
    );
  }
  function us(e, t, a, l) {
    var c = _t();
    l = l === void 0 ? null : l;
    var m = c.memoizedState.inst;
    Ye !== null && l !== null && wc(l, Ye.memoizedState.deps) ? c.memoizedState = li(t, m, a, l) : (Me.flags |= e, c.memoizedState = li(
      1 | t,
      m,
      a,
      l
    ));
  }
  function Lp(e, t) {
    Bl(8390656, 8, e, t);
  }
  function Pp(e, t) {
    us(2048, 8, e, t);
  }
  function Bp(e, t) {
    return us(4, 2, e, t);
  }
  function Ip(e, t) {
    return us(4, 4, e, t);
  }
  function Up(e, t) {
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
  function Hp(e, t, a) {
    a = a != null ? a.concat([e]) : null, us(4, 4, Up.bind(null, t, e), a);
  }
  function Lc() {
  }
  function qp(e, t) {
    var a = _t();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && wc(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function Zp(e, t) {
    var a = _t();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && wc(t, l[1]))
      return l[0];
    if (l = e(), va) {
      Un(!0);
      try {
        e();
      } finally {
        Un(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Pc(e, t, a) {
    return a === void 0 || (Dr & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Vm(), Me.lanes |= e, Pr |= e, a);
  }
  function Fp(e, t, a, l) {
    return rn(a, t) ? a : ai.current !== null ? (e = Pc(e, a, l), rn(e, t) || (Tt = !0), e) : (Dr & 42) === 0 ? (Tt = !0, e.memoizedState = a) : (e = Vm(), Me.lanes |= e, Pr |= e, t);
  }
  function Gp(e, t, a, l, c) {
    var m = te.p;
    te.p = m !== 0 && 8 > m ? m : 8;
    var C = U.T, N = {};
    U.T = N, Uc(e, !1, t, a);
    try {
      var R = c(), H = U.S;
      if (H !== null && H(N, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var X = A2(
          R,
          l
        );
        cs(
          e,
          t,
          X,
          un(e)
        );
      } else
        cs(
          e,
          t,
          l,
          un(e)
        );
    } catch (W) {
      cs(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: W },
        un()
      );
    } finally {
      te.p = m, U.T = C;
    }
  }
  function M2() {
  }
  function Bc(e, t, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Vp(e).queue;
    Gp(
      e,
      c,
      t,
      ue,
      a === null ? M2 : function() {
        return Yp(e), a(l);
      }
    );
  }
  function Vp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sr,
        lastRenderedState: ue
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
        lastRenderedReducer: sr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Yp(e) {
    var t = Vp(e).next.queue;
    cs(e, t, {}, un());
  }
  function Ic() {
    return zt(Os);
  }
  function Xp() {
    return _t().memoizedState;
  }
  function $p() {
    return _t().memoizedState;
  }
  function k2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = un();
          e = Or(a);
          var l = Nr(t, e, a);
          l !== null && (cn(l, t, a), as(l, t, a)), t = { cache: mc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function R2(e, t, a) {
    var l = un();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Il(e) ? Kp(t, a) : (a = ic(e, t, a, l), a !== null && (cn(a, e, l), Jp(a, t, l)));
  }
  function Qp(e, t, a) {
    var l = un();
    cs(e, t, a, l);
  }
  function cs(e, t, a, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Il(e)) Kp(t, c);
    else {
      var m = e.alternate;
      if (e.lanes === 0 && (m === null || m.lanes === 0) && (m = t.lastRenderedReducer, m !== null))
        try {
          var C = t.lastRenderedState, N = m(C, a);
          if (c.hasEagerState = !0, c.eagerState = N, rn(N, C))
            return El(e, t, c, 0), We === null && Sl(), !1;
        } catch {
        } finally {
        }
      if (a = ic(e, t, c, l), a !== null)
        return cn(a, e, l), Jp(a, t, l), !0;
    }
    return !1;
  }
  function Uc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: _f(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Il(e)) {
      if (t) throw Error(s(479));
    } else
      t = ic(
        e,
        a,
        l,
        2
      ), t !== null && cn(t, e, 2);
  }
  function Il(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function Kp(e, t) {
    ii = Rl = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Jp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, sd(e, a);
    }
  }
  var Ul = {
    readContext: zt,
    use: zl,
    useCallback: pt,
    useContext: pt,
    useEffect: pt,
    useImperativeHandle: pt,
    useLayoutEffect: pt,
    useInsertionEffect: pt,
    useMemo: pt,
    useReducer: pt,
    useRef: pt,
    useState: pt,
    useDebugValue: pt,
    useDeferredValue: pt,
    useTransition: pt,
    useSyncExternalStore: pt,
    useId: pt,
    useHostTransitionStatus: pt,
    useFormState: pt,
    useActionState: pt,
    useOptimistic: pt,
    useMemoCache: pt,
    useCacheRefresh: pt
  }, Wp = {
    readContext: zt,
    use: zl,
    useCallback: function(e, t) {
      return Xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: zt,
    useEffect: Lp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Bl(
        4194308,
        4,
        Up.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Bl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Bl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Xt();
      t = t === void 0 ? null : t;
      var l = e();
      if (va) {
        Un(!0);
        try {
          e();
        } finally {
          Un(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = Xt();
      if (a !== void 0) {
        var c = a(t);
        if (va) {
          Un(!0);
          try {
            a(t);
          } finally {
            Un(!1);
          }
        }
      } else c = t;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = R2.bind(
        null,
        Me,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Xt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = jc(e);
      var t = e.queue, a = Qp.bind(null, Me, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, t) {
      var a = Xt();
      return Pc(a, e, t);
    },
    useTransition: function() {
      var e = jc(!1);
      return e = Gp.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), Xt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = Me, c = Xt();
      if (Ue) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = t(), We === null)
          throw Error(s(349));
        (Pe & 124) !== 0 || bp(l, t, a);
      }
      c.memoizedState = a;
      var m = { value: a, getSnapshot: t };
      return c.queue = m, Lp(Ep.bind(null, l, m, e), [
        e
      ]), l.flags |= 2048, li(
        9,
        Pl(),
        Sp.bind(
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
      var e = Xt(), t = We.identifierPrefix;
      if (Ue) {
        var a = rr, l = nr;
        a = (l & ~(1 << 32 - Ut(l) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = jl++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = T2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ic,
    useFormState: Mp,
    useActionState: Mp,
    useOptimistic: function(e) {
      var t = Xt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Uc.bind(
        null,
        Me,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Mc,
    useCacheRefresh: function() {
      return Xt().memoizedState = k2.bind(
        null,
        Me
      );
    }
  }, em = {
    readContext: zt,
    use: zl,
    useCallback: qp,
    useContext: zt,
    useEffect: Pp,
    useImperativeHandle: Hp,
    useInsertionEffect: Bp,
    useLayoutEffect: Ip,
    useMemo: Zp,
    useReducer: Ll,
    useRef: zp,
    useState: function() {
      return Ll(sr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, t) {
      var a = _t();
      return Fp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ll(sr)[0], t = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : os(e),
        t
      ];
    },
    useSyncExternalStore: _p,
    useId: Xp,
    useHostTransitionStatus: Ic,
    useFormState: kp,
    useActionState: kp,
    useOptimistic: function(e, t) {
      var a = _t();
      return wp(a, Ye, e, t);
    },
    useMemoCache: Mc,
    useCacheRefresh: $p
  }, j2 = {
    readContext: zt,
    use: zl,
    useCallback: qp,
    useContext: zt,
    useEffect: Pp,
    useImperativeHandle: Hp,
    useInsertionEffect: Bp,
    useLayoutEffect: Ip,
    useMemo: Zp,
    useReducer: Rc,
    useRef: zp,
    useState: function() {
      return Rc(sr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, t) {
      var a = _t();
      return Ye === null ? Pc(a, e, t) : Fp(
        a,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Rc(sr)[0], t = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : os(e),
        t
      ];
    },
    useSyncExternalStore: _p,
    useId: Xp,
    useHostTransitionStatus: Ic,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(e, t) {
      var a = _t();
      return Ye !== null ? wp(a, Ye, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Mc,
    useCacheRefresh: $p
  }, oi = null, fs = 0;
  function Hl(e) {
    var t = fs;
    return fs += 1, oi === null && (oi = []), fp(oi, e, t);
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
  function tm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function nm(e) {
    function t(L, z) {
      if (e) {
        var P = L.deletions;
        P === null ? (L.deletions = [z], L.flags |= 16) : P.push(z);
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
      return L = tr(L, z), L.index = 0, L.sibling = null, L;
    }
    function m(L, z, P) {
      return L.index = P, e ? (P = L.alternate, P !== null ? (P = P.index, P < z ? (L.flags |= 67108866, z) : P) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function C(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function N(L, z, P, Q) {
      return z === null || z.tag !== 6 ? (z = lc(P, L.mode, Q), z.return = L, z) : (z = c(z, P), z.return = L, z);
    }
    function R(L, z, P, Q) {
      var ce = P.type;
      return ce === h ? X(
        L,
        z,
        P.props.children,
        Q,
        P.key
      ) : z !== null && (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === I && tm(ce) === z.type) ? (z = c(z, P.props), hs(z, P), z.return = L, z) : (z = Cl(
        P.type,
        P.key,
        P.props,
        null,
        L.mode,
        Q
      ), hs(z, P), z.return = L, z);
    }
    function H(L, z, P, Q) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== P.containerInfo || z.stateNode.implementation !== P.implementation ? (z = oc(P, L.mode, Q), z.return = L, z) : (z = c(z, P.children || []), z.return = L, z);
    }
    function X(L, z, P, Q, ce) {
      return z === null || z.tag !== 7 ? (z = ua(
        P,
        L.mode,
        Q,
        ce
      ), z.return = L, z) : (z = c(z, P), z.return = L, z);
    }
    function W(L, z, P) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = lc(
          "" + z,
          L.mode,
          P
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case _:
            return P = Cl(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              P
            ), hs(P, z), P.return = L, P;
          case v:
            return z = oc(
              z,
              L.mode,
              P
            ), z.return = L, z;
          case I:
            var Q = z._init;
            return z = Q(z._payload), W(L, z, P);
        }
        if (ge(z) || $(z))
          return z = ua(
            z,
            L.mode,
            P,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return W(L, Hl(z), P);
        if (z.$$typeof === D)
          return W(
            L,
            Ol(L, z),
            P
          );
        ql(L, z);
      }
      return null;
    }
    function Z(L, z, P, Q) {
      var ce = z !== null ? z.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint")
        return ce !== null ? null : N(L, z, "" + P, Q);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case _:
            return P.key === ce ? R(L, z, P, Q) : null;
          case v:
            return P.key === ce ? H(L, z, P, Q) : null;
          case I:
            return ce = P._init, P = ce(P._payload), Z(L, z, P, Q);
        }
        if (ge(P) || $(P))
          return ce !== null ? null : X(L, z, P, Q, null);
        if (typeof P.then == "function")
          return Z(
            L,
            z,
            Hl(P),
            Q
          );
        if (P.$$typeof === D)
          return Z(
            L,
            z,
            Ol(L, P),
            Q
          );
        ql(L, P);
      }
      return null;
    }
    function F(L, z, P, Q, ce) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return L = L.get(P) || null, N(z, L, "" + Q, ce);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case _:
            return L = L.get(
              Q.key === null ? P : Q.key
            ) || null, R(z, L, Q, ce);
          case v:
            return L = L.get(
              Q.key === null ? P : Q.key
            ) || null, H(z, L, Q, ce);
          case I:
            var ke = Q._init;
            return Q = ke(Q._payload), F(
              L,
              z,
              P,
              Q,
              ce
            );
        }
        if (ge(Q) || $(Q))
          return L = L.get(P) || null, X(z, L, Q, ce, null);
        if (typeof Q.then == "function")
          return F(
            L,
            z,
            P,
            Hl(Q),
            ce
          );
        if (Q.$$typeof === D)
          return F(
            L,
            z,
            P,
            Ol(z, Q),
            ce
          );
        ql(z, Q);
      }
      return null;
    }
    function Ee(L, z, P, Q) {
      for (var ce = null, ke = null, me = z, be = z = 0, Nt = null; me !== null && be < P.length; be++) {
        me.index > be ? (Nt = me, me = null) : Nt = me.sibling;
        var Be = Z(
          L,
          me,
          P[be],
          Q
        );
        if (Be === null) {
          me === null && (me = Nt);
          break;
        }
        e && me && Be.alternate === null && t(L, me), z = m(Be, z, be), ke === null ? ce = Be : ke.sibling = Be, ke = Be, me = Nt;
      }
      if (be === P.length)
        return a(L, me), Ue && fa(L, be), ce;
      if (me === null) {
        for (; be < P.length; be++)
          me = W(L, P[be], Q), me !== null && (z = m(
            me,
            z,
            be
          ), ke === null ? ce = me : ke.sibling = me, ke = me);
        return Ue && fa(L, be), ce;
      }
      for (me = l(me); be < P.length; be++)
        Nt = F(
          me,
          L,
          be,
          P[be],
          Q
        ), Nt !== null && (e && Nt.alternate !== null && me.delete(
          Nt.key === null ? be : Nt.key
        ), z = m(
          Nt,
          z,
          be
        ), ke === null ? ce = Nt : ke.sibling = Nt, ke = Nt);
      return e && me.forEach(function(Vr) {
        return t(L, Vr);
      }), Ue && fa(L, be), ce;
    }
    function _e(L, z, P, Q) {
      if (P == null) throw Error(s(151));
      for (var ce = null, ke = null, me = z, be = z = 0, Nt = null, Be = P.next(); me !== null && !Be.done; be++, Be = P.next()) {
        me.index > be ? (Nt = me, me = null) : Nt = me.sibling;
        var Vr = Z(L, me, Be.value, Q);
        if (Vr === null) {
          me === null && (me = Nt);
          break;
        }
        e && me && Vr.alternate === null && t(L, me), z = m(Vr, z, be), ke === null ? ce = Vr : ke.sibling = Vr, ke = Vr, me = Nt;
      }
      if (Be.done)
        return a(L, me), Ue && fa(L, be), ce;
      if (me === null) {
        for (; !Be.done; be++, Be = P.next())
          Be = W(L, Be.value, Q), Be !== null && (z = m(Be, z, be), ke === null ? ce = Be : ke.sibling = Be, ke = Be);
        return Ue && fa(L, be), ce;
      }
      for (me = l(me); !Be.done; be++, Be = P.next())
        Be = F(me, L, be, Be.value, Q), Be !== null && (e && Be.alternate !== null && me.delete(Be.key === null ? be : Be.key), z = m(Be, z, be), ke === null ? ce = Be : ke.sibling = Be, ke = Be);
      return e && me.forEach(function(z_) {
        return t(L, z_);
      }), Ue && fa(L, be), ce;
    }
    function $e(L, z, P, Q) {
      if (typeof P == "object" && P !== null && P.type === h && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case _:
            e: {
              for (var ce = P.key; z !== null; ) {
                if (z.key === ce) {
                  if (ce = P.type, ce === h) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), Q = c(
                        z,
                        P.props.children
                      ), Q.return = L, L = Q;
                      break e;
                    }
                  } else if (z.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === I && tm(ce) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), Q = c(z, P.props), hs(Q, P), Q.return = L, L = Q;
                    break e;
                  }
                  a(L, z);
                  break;
                } else t(L, z);
                z = z.sibling;
              }
              P.type === h ? (Q = ua(
                P.props.children,
                L.mode,
                Q,
                P.key
              ), Q.return = L, L = Q) : (Q = Cl(
                P.type,
                P.key,
                P.props,
                null,
                L.mode,
                Q
              ), hs(Q, P), Q.return = L, L = Q);
            }
            return C(L);
          case v:
            e: {
              for (ce = P.key; z !== null; ) {
                if (z.key === ce)
                  if (z.tag === 4 && z.stateNode.containerInfo === P.containerInfo && z.stateNode.implementation === P.implementation) {
                    a(
                      L,
                      z.sibling
                    ), Q = c(z, P.children || []), Q.return = L, L = Q;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else t(L, z);
                z = z.sibling;
              }
              Q = oc(P, L.mode, Q), Q.return = L, L = Q;
            }
            return C(L);
          case I:
            return ce = P._init, P = ce(P._payload), $e(
              L,
              z,
              P,
              Q
            );
        }
        if (ge(P))
          return Ee(
            L,
            z,
            P,
            Q
          );
        if ($(P)) {
          if (ce = $(P), typeof ce != "function") throw Error(s(150));
          return P = ce.call(P), _e(
            L,
            z,
            P,
            Q
          );
        }
        if (typeof P.then == "function")
          return $e(
            L,
            z,
            Hl(P),
            Q
          );
        if (P.$$typeof === D)
          return $e(
            L,
            z,
            Ol(L, P),
            Q
          );
        ql(L, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint" ? (P = "" + P, z !== null && z.tag === 6 ? (a(L, z.sibling), Q = c(z, P), Q.return = L, L = Q) : (a(L, z), Q = lc(P, L.mode, Q), Q.return = L, L = Q), C(L)) : a(L, z);
    }
    return function(L, z, P, Q) {
      try {
        fs = 0;
        var ce = $e(
          L,
          z,
          P,
          Q
        );
        return oi = null, ce;
      } catch (me) {
        if (me === ns || me === Dl) throw me;
        var ke = an(29, me, null, L.mode);
        return ke.lanes = Q, ke.return = L, ke;
      } finally {
      }
    };
  }
  var ui = nm(!0), rm = nm(!1), Cn = J(null), Zn = null;
  function Mr(e) {
    var t = e.alternate;
    se(Ct, Ct.current & 1), se(Cn, e), Zn === null && (t === null || ai.current !== null || t.memoizedState !== null) && (Zn = e);
  }
  function am(e) {
    if (e.tag === 22) {
      if (se(Ct, Ct.current), se(Cn, e), Zn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Zn = e);
      }
    } else kr();
  }
  function kr() {
    se(Ct, Ct.current), se(Cn, Cn.current);
  }
  function lr(e) {
    ae(Cn), Zn === e && (Zn = null), ae(Ct);
  }
  var Ct = J(0);
  function Zl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Mf(a)))
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
  function Hc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : y({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var qc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = un(), c = Or(l);
      c.payload = t, a != null && (c.callback = a), t = Nr(e, c, l), t !== null && (cn(t, e, l), as(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = un(), c = Or(l);
      c.tag = 1, c.payload = t, a != null && (c.callback = a), t = Nr(e, c, l), t !== null && (cn(t, e, l), as(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = un(), l = Or(a);
      l.tag = 2, t != null && (l.callback = t), t = Nr(e, l, a), t !== null && (cn(t, e, a), as(t, e, a));
    }
  };
  function im(e, t, a, l, c, m, C) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, m, C) : t.prototype && t.prototype.isPureReactComponent ? !Xi(a, l) || !Xi(c, m) : !0;
  }
  function sm(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && qc.enqueueReplaceState(t, t.state, null);
  }
  function ya(e, t) {
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
  function lm(e) {
    Fl(e);
  }
  function om(e) {
    console.error(e);
  }
  function um(e) {
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
  function cm(e, t, a) {
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
  function Zc(e, t, a) {
    return a = Or(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Gl(e, t);
    }, a;
  }
  function fm(e) {
    return e = Or(e), e.tag = 3, e;
  }
  function hm(e, t, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var m = l.value;
      e.payload = function() {
        return c(m);
      }, e.callback = function() {
        cm(t, a, l);
      };
    }
    var C = a.stateNode;
    C !== null && typeof C.componentDidCatch == "function" && (e.callback = function() {
      cm(t, a, l), typeof c != "function" && (Br === null ? Br = /* @__PURE__ */ new Set([this]) : Br.add(this));
      var N = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: N !== null ? N : ""
      });
    });
  }
  function z2(e, t, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Wi(
        t,
        a,
        c,
        !0
      ), a = Cn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Zn === null ? pf() : a.alternate === null && ft === 0 && (ft = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === yc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), gf(e, l, c)), !1;
          case 22:
            return a.flags |= 65536, l === yc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), gf(e, l, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return gf(e, l, c), pf(), !1;
    }
    if (Ue)
      return t = Cn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, l !== fc && (e = Error(s(422), { cause: l }), Ji(bn(e, a)))) : (l !== fc && (t = Error(s(423), {
        cause: l
      }), Ji(
        bn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = bn(l, a), c = Zc(
        e.stateNode,
        l,
        c
      ), Sc(e, c), ft !== 4 && (ft = 2)), !1;
    var m = Error(s(520), { cause: l });
    if (m = bn(m, a), _s === null ? _s = [m] : _s.push(m), ft !== 4 && (ft = 2), t === null) return !0;
    l = bn(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Zc(a.stateNode, l, e), Sc(a, e), !1;
        case 1:
          if (t = a.type, m = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Br === null || !Br.has(m))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = fm(c), hm(
              c,
              e,
              a,
              l
            ), Sc(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var dm = Error(s(461)), Tt = !1;
  function Dt(e, t, a, l) {
    t.child = e === null ? rm(t, null, a, l) : ui(
      t,
      e.child,
      a,
      l
    );
  }
  function pm(e, t, a, l, c) {
    a = a.render;
    var m = t.ref;
    if ("ref" in l) {
      var C = {};
      for (var N in l)
        N !== "ref" && (C[N] = l[N]);
    } else C = l;
    return ma(t), l = Ac(
      e,
      t,
      a,
      C,
      m,
      c
    ), N = Tc(), e !== null && !Tt ? (Oc(e, t, c), or(e, t, c)) : (Ue && N && uc(t), t.flags |= 1, Dt(e, t, l, c), t.child);
  }
  function mm(e, t, a, l, c) {
    if (e === null) {
      var m = a.type;
      return typeof m == "function" && !sc(m) && m.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = m, gm(
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
    if (m = e.child, !Kc(e, c)) {
      var C = m.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xi, a(C, l) && e.ref === t.ref)
        return or(e, t, c);
    }
    return t.flags |= 1, e = tr(m, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function gm(e, t, a, l, c) {
    if (e !== null) {
      var m = e.memoizedProps;
      if (Xi(m, l) && e.ref === t.ref)
        if (Tt = !1, t.pendingProps = l = m, Kc(e, c))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else
          return t.lanes = e.lanes, or(e, t, c);
    }
    return Fc(
      e,
      t,
      a,
      l,
      c
    );
  }
  function vm(e, t, a) {
    var l = t.pendingProps, c = l.children, m = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = m !== null ? m.baseLanes | a : a, e !== null) {
          for (c = t.child = e.child, m = 0; c !== null; )
            m = m | c.lanes | c.childLanes, c = c.sibling;
          t.childLanes = m & ~l;
        } else t.childLanes = 0, t.child = null;
        return ym(
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
        ), m !== null ? gp(t, m) : xc(), am(t);
      else
        return t.lanes = t.childLanes = 536870912, ym(
          e,
          t,
          m !== null ? m.baseLanes | a : a,
          a
        );
    } else
      m !== null ? (Nl(t, m.cachePool), gp(t, m), kr(), t.memoizedState = null) : (e !== null && Nl(t, null), xc(), kr());
    return Dt(e, t, c, a), t.child;
  }
  function ym(e, t, a, l) {
    var c = vc();
    return c = c === null ? null : { parent: xt._currentValue, pool: c }, t.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && Nl(t, null), xc(), am(t), e !== null && Wi(e, t, l, !0), null;
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
  function Fc(e, t, a, l, c) {
    return ma(t), a = Ac(
      e,
      t,
      a,
      l,
      void 0,
      c
    ), l = Tc(), e !== null && !Tt ? (Oc(e, t, c), or(e, t, c)) : (Ue && l && uc(t), t.flags |= 1, Dt(e, t, a, c), t.child);
  }
  function _m(e, t, a, l, c, m) {
    return ma(t), t.updateQueue = null, a = yp(
      t,
      l,
      a,
      c
    ), vp(e), l = Tc(), e !== null && !Tt ? (Oc(e, t, m), or(e, t, m)) : (Ue && l && uc(t), t.flags |= 1, Dt(e, t, a, m), t.child);
  }
  function bm(e, t, a, l, c) {
    if (ma(t), t.stateNode === null) {
      var m = Wa, C = a.contextType;
      typeof C == "object" && C !== null && (m = zt(C)), m = new a(l, m), t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, m.updater = qc, t.stateNode = m, m._reactInternals = t, m = t.stateNode, m.props = l, m.state = t.memoizedState, m.refs = {}, _c(t), C = a.contextType, m.context = typeof C == "object" && C !== null ? zt(C) : Wa, m.state = t.memoizedState, C = a.getDerivedStateFromProps, typeof C == "function" && (Hc(
        t,
        a,
        C,
        l
      ), m.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (C = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), C !== m.state && qc.enqueueReplaceState(m, m.state, null), ss(t, l, m, c), is(), m.state = t.memoizedState), typeof m.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      m = t.stateNode;
      var N = t.memoizedProps, R = ya(a, N);
      m.props = R;
      var H = m.context, X = a.contextType;
      C = Wa, typeof X == "object" && X !== null && (C = zt(X));
      var W = a.getDerivedStateFromProps;
      X = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function", N = t.pendingProps !== N, X || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (N || H !== C) && sm(
        t,
        m,
        l,
        C
      ), Tr = !1;
      var Z = t.memoizedState;
      m.state = Z, ss(t, l, m, c), is(), H = t.memoizedState, N || Z !== H || Tr ? (typeof W == "function" && (Hc(
        t,
        a,
        W,
        l
      ), H = t.memoizedState), (R = Tr || im(
        t,
        a,
        R,
        l,
        Z,
        H,
        C
      )) ? (X || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = H), m.props = l, m.state = H, m.context = C, l = R) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      m = t.stateNode, bc(e, t), C = t.memoizedProps, X = ya(a, C), m.props = X, W = t.pendingProps, Z = m.context, H = a.contextType, R = Wa, typeof H == "object" && H !== null && (R = zt(H)), N = a.getDerivedStateFromProps, (H = typeof N == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== W || Z !== R) && sm(
        t,
        m,
        l,
        R
      ), Tr = !1, Z = t.memoizedState, m.state = Z, ss(t, l, m, c), is();
      var F = t.memoizedState;
      C !== W || Z !== F || Tr || e !== null && e.dependencies !== null && Tl(e.dependencies) ? (typeof N == "function" && (Hc(
        t,
        a,
        N,
        l
      ), F = t.memoizedState), (X = Tr || im(
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
    return m = l, Vl(e, t), l = (t.flags & 128) !== 0, m || l ? (m = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : m.render(), t.flags |= 1, e !== null && l ? (t.child = ui(
      t,
      e.child,
      null,
      c
    ), t.child = ui(
      t,
      null,
      a,
      c
    )) : Dt(e, t, a, c), t.memoizedState = m.state, e = t.child) : e = or(
      e,
      t,
      c
    ), e;
  }
  function Sm(e, t, a, l) {
    return Ki(), t.flags |= 256, Dt(e, t, a, l), t.child;
  }
  var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Vc(e) {
    return { baseLanes: e, cachePool: op() };
  }
  function Yc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= wn), e;
  }
  function Em(e, t, a) {
    var l = t.pendingProps, c = !1, m = (t.flags & 128) !== 0, C;
    if ((C = m) || (C = e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0), C && (c = !0, t.flags &= -129), C = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (c ? Mr(t) : kr(), Ue) {
          var N = ct, R;
          if (R = N) {
            e: {
              for (R = N, N = qn; R.nodeType !== 8; ) {
                if (!N) {
                  N = null;
                  break e;
                }
                if (R = Rn(
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
              treeContext: ca !== null ? { id: nr, overflow: rr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = an(
              18,
              null,
              null,
              0
            ), R.stateNode = N, R.return = t, t.child = R, qt = t, ct = null, R = !0) : R = !1;
          }
          R || da(t);
        }
        if (N = t.memoizedState, N !== null && (N = N.dehydrated, N !== null))
          return Mf(N) ? t.lanes = 32 : t.lanes = 536870912, null;
        lr(t);
      }
      return N = l.children, l = l.fallback, c ? (kr(), c = t.mode, N = Yl(
        { mode: "hidden", children: N },
        c
      ), l = ua(
        l,
        c,
        a,
        null
      ), N.return = t, l.return = t, N.sibling = l, t.child = N, c = t.child, c.memoizedState = Vc(a), c.childLanes = Yc(
        e,
        C,
        a
      ), t.memoizedState = Gc, l) : (Mr(t), Xc(t, N));
    }
    if (R = e.memoizedState, R !== null && (N = R.dehydrated, N !== null)) {
      if (m)
        t.flags & 256 ? (Mr(t), t.flags &= -257, t = $c(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (kr(), t.child = e.child, t.flags |= 128, t = null) : (kr(), c = l.fallback, N = t.mode, l = Yl(
          { mode: "visible", children: l.children },
          N
        ), c = ua(
          c,
          N,
          a,
          null
        ), c.flags |= 2, l.return = t, c.return = t, l.sibling = c, t.child = l, ui(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = Vc(a), l.childLanes = Yc(
          e,
          C,
          a
        ), t.memoizedState = Gc, t = c);
      else if (Mr(t), Mf(N)) {
        if (C = N.nextSibling && N.nextSibling.dataset, C) var H = C.dgst;
        C = H, l = Error(s(419)), l.stack = "", l.digest = C, Ji({ value: l, source: null, stack: null }), t = $c(
          e,
          t,
          a
        );
      } else if (Tt || Wi(e, t, a, !1), C = (a & e.childLanes) !== 0, Tt || C) {
        if (C = We, C !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : Mu(l), l = (l & (C.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== R.retryLane))
          throw R.retryLane = l, Ja(e, l), cn(C, e, l), dm;
        N.data === "$?" || pf(), t = $c(
          e,
          t,
          a
        );
      } else
        N.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = R.treeContext, ct = Rn(
          N.nextSibling
        ), qt = t, Ue = !0, ha = null, qn = !1, e !== null && (En[xn++] = nr, En[xn++] = rr, En[xn++] = ca, nr = e.id, rr = e.overflow, ca = t), t = Xc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return c ? (kr(), c = l.fallback, N = t.mode, R = e.child, H = R.sibling, l = tr(R, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = R.subtreeFlags & 65011712, H !== null ? c = tr(H, c) : (c = ua(
      c,
      N,
      a,
      null
    ), c.flags |= 2), c.return = t, l.return = t, l.sibling = c, t.child = l, l = c, c = t.child, N = e.child.memoizedState, N === null ? N = Vc(a) : (R = N.cachePool, R !== null ? (H = xt._currentValue, R = R.parent !== H ? { parent: H, pool: H } : R) : R = op(), N = {
      baseLanes: N.baseLanes | a,
      cachePool: R
    }), c.memoizedState = N, c.childLanes = Yc(
      e,
      C,
      a
    ), t.memoizedState = Gc, l) : (Mr(t), a = e.child, e = a.sibling, a = tr(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (C = t.deletions, C === null ? (t.deletions = [e], t.flags |= 16) : C.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Xc(e, t) {
    return t = Yl(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Yl(e, t) {
    return e = an(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function $c(e, t, a) {
    return ui(t, e.child, null, a), e = Xc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function xm(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), dc(e.return, t, a);
  }
  function Qc(e, t, a, l, c) {
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
  function Cm(e, t, a) {
    var l = t.pendingProps, c = l.revealOrder, m = l.tail;
    if (Dt(e, t, l.children, a), l = Ct.current, (l & 2) !== 0)
      l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && xm(e, a, t);
          else if (e.tag === 19)
            xm(e, a, t);
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
        a = c, a === null ? (c = t.child, t.child = null) : (c = a.sibling, a.sibling = null), Qc(
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
        Qc(
          t,
          !0,
          a,
          null,
          m
        );
        break;
      case "together":
        Qc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function or(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Pr |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Wi(
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
      for (e = t.child, a = tr(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = tr(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Kc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Tl(e)));
  }
  function L2(e, t, a) {
    switch (t.tag) {
      case 3:
        Ae(t, t.stateNode.containerInfo), Ar(t, xt, e.memoizedState.cache), Ki();
        break;
      case 27:
      case 5:
        q(t);
        break;
      case 4:
        Ae(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ar(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Mr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Em(e, t, a) : (Mr(t), e = or(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Mr(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Wi(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), c) {
          if (l)
            return Cm(
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
        return t.lanes = 0, vm(e, t, a);
      case 24:
        Ar(t, xt, e.memoizedState.cache);
    }
    return or(e, t, a);
  }
  function wm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Tt = !0;
      else {
        if (!Kc(e, a) && (t.flags & 128) === 0)
          return Tt = !1, L2(
            e,
            t,
            a
          );
        Tt = (e.flags & 131072) !== 0;
      }
    else
      Tt = !1, Ue && (t.flags & 1048576) !== 0 && tp(t, Al, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, c = l._init;
          if (l = c(l._payload), t.type = l, typeof l == "function")
            sc(l) ? (e = ya(l, e), t.tag = 1, t = bm(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = Fc(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (c = l.$$typeof, c === x) {
                t.tag = 11, t = pm(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              } else if (c === k) {
                t.tag = 14, t = mm(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = fe(l) || l, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return Fc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, c = ya(
          l,
          t.pendingProps
        ), bm(
          e,
          t,
          l,
          c,
          a
        );
      case 3:
        e: {
          if (Ae(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = t.pendingProps;
          var m = t.memoizedState;
          c = m.element, bc(e, t), ss(t, l, null, a);
          var C = t.memoizedState;
          if (l = C.cache, Ar(t, xt, l), l !== m.cache && pc(
            t,
            [xt],
            a,
            !0
          ), is(), l = C.element, m.isDehydrated)
            if (m = {
              element: l,
              isDehydrated: !1,
              cache: C.cache
            }, t.updateQueue.baseState = m, t.memoizedState = m, t.flags & 256) {
              t = Sm(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== c) {
              c = bn(
                Error(s(424)),
                t
              ), Ji(c), t = Sm(
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
              for (ct = Rn(e.firstChild), qt = t, Ue = !0, ha = null, qn = !0, a = rm(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ki(), l === c) {
              t = or(
                e,
                t,
                a
              );
              break e;
            }
            Dt(
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
        return Vl(e, t), e === null ? (a = Ng(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ue || (a = t.type, e = t.pendingProps, l = lo(
          he.current
        ).createElement(a), l[jt] = t, l[Vt] = e, kt(l, a, e), At(l), t.stateNode = l) : t.memoizedState = Ng(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return q(t), e === null && Ue && (l = t.stateNode = Ag(
          t.type,
          t.pendingProps,
          he.current
        ), qt = t, qn = !0, c = ct, Hr(t.type) ? (kf = c, ct = Rn(
          l.firstChild
        )) : ct = c), Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Vl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((c = l = ct) && (l = c_(
          l,
          t.type,
          t.pendingProps,
          qn
        ), l !== null ? (t.stateNode = l, qt = t, ct = Rn(
          l.firstChild
        ), qn = !1, c = !0) : c = !1), c || da(t)), q(t), c = t.type, m = t.pendingProps, C = e !== null ? e.memoizedProps : null, l = m.children, Of(c, m) ? l = null : C !== null && Of(c, C) && (t.flags |= 32), t.memoizedState !== null && (c = Ac(
          e,
          t,
          O2,
          null,
          null,
          a
        ), Os._currentValue = c), Vl(e, t), Dt(e, t, l, a), t.child;
      case 6:
        return e === null && Ue && ((e = a = ct) && (a = f_(
          a,
          t.pendingProps,
          qn
        ), a !== null ? (t.stateNode = a, qt = t, ct = null, e = !0) : e = !1), e || da(t)), null;
      case 13:
        return Em(e, t, a);
      case 4:
        return Ae(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ui(
          t,
          null,
          l,
          a
        ) : Dt(
          e,
          t,
          l,
          a
        ), t.child;
      case 11:
        return pm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Dt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Dt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Ar(t, t.type, l.value), Dt(
          e,
          t,
          l.children,
          a
        ), t.child;
      case 9:
        return c = t.type._context, l = t.pendingProps.children, ma(t), c = zt(c), l = l(c), t.flags |= 1, Dt(e, t, l, a), t.child;
      case 14:
        return mm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return gm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Cm(e, t, a);
      case 31:
        return l = t.pendingProps, a = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = Yl(
          l,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = tr(e.child, l), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return vm(e, t, a);
      case 24:
        return ma(t), l = zt(xt), e === null ? (c = vc(), c === null && (c = We, m = mc(), c.pooledCache = m, m.refCount++, m !== null && (c.pooledCacheLanes |= a), c = m), t.memoizedState = {
          parent: l,
          cache: c
        }, _c(t), Ar(t, xt, c)) : ((e.lanes & a) !== 0 && (bc(e, t), ss(t, null, null, a), is()), c = e.memoizedState, m = t.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), Ar(t, xt, l)) : (l = m.cache, Ar(t, xt, l), l !== c.cache && pc(
          t,
          [xt],
          a,
          !0
        ))), Dt(
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
  function ur(e) {
    e.flags |= 4;
  }
  function Am(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !jg(t)) {
      if (t = Cn.current, t !== null && ((Pe & 4194048) === Pe ? Zn !== null : (Pe & 62914560) !== Pe && (Pe & 536870912) === 0 || t !== Zn))
        throw rs = yc, up;
      e.flags |= 8192;
    }
  }
  function Xl(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ad() : 536870912, e.lanes |= t, di |= t);
  }
  function ds(e, t) {
    if (!Ue)
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
  function P2(e, t, a) {
    var l = t.pendingProps;
    switch (cc(t), t.tag) {
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
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ir(xt), Ve(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Qi(t) ? ur(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ap())), lt(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (ur(t), a !== null ? (lt(t), Am(t, a)) : (lt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (ur(t), lt(t), Am(t, a)) : (lt(t), t.flags &= -16777217) : (e.memoizedProps !== l && ur(t), lt(t), t.flags &= -16777217), null;
      case 27:
        ne(t), a = he.current;
        var c = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && ur(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return lt(t), null;
          }
          e = G.current, Qi(t) ? np(t) : (e = Ag(c, l, a), t.stateNode = e, ur(t));
        }
        return lt(t), null;
      case 5:
        if (ne(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && ur(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return lt(t), null;
          }
          if (e = G.current, Qi(t))
            np(t);
          else {
            switch (c = lo(
              he.current
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
            e[jt] = t, e[Vt] = l;
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
            e: switch (kt(e, a, l), a) {
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
            e && ur(t);
          }
        }
        return lt(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && ur(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = he.current, Qi(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, c = qt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            e[jt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || _g(e.nodeValue, a)), e || da(t);
          } else
            e = lo(e).createTextNode(
              l
            ), e[jt] = t, t.stateNode = e;
        }
        return lt(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Qi(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[jt] = t;
            } else
              Ki(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), c = !1;
          } else
            c = ap(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (lr(t), t) : (lr(t), null);
        }
        if (lr(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = t.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var m = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (m = l.memoizedState.cachePool.pool), m !== c && (l.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), Xl(t, t.updateQueue), lt(t), null;
      case 4:
        return Ve(), e === null && xf(t.stateNode.containerInfo), lt(t), null;
      case 10:
        return ir(t.type), lt(t), null;
      case 19:
        if (ae(Ct), c = t.memoizedState, c === null) return lt(t), null;
        if (l = (t.flags & 128) !== 0, m = c.rendering, m === null)
          if (l) ds(c, !1);
          else {
            if (ft !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (m = Zl(e), m !== null) {
                  for (t.flags |= 128, ds(c, !1), e = m.updateQueue, t.updateQueue = e, Xl(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    ep(a, e), a = a.sibling;
                  return se(
                    Ct,
                    Ct.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null && st() > Kl && (t.flags |= 128, l = !0, ds(c, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Zl(m), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Xl(t, e), ds(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Ue)
                return lt(t), null;
            } else
              2 * st() - c.renderingStartTime > Kl && a !== 536870912 && (t.flags |= 128, l = !0, ds(c, !1), t.lanes = 4194304);
          c.isBackwards ? (m.sibling = t.child, t.child = m) : (e = c.last, e !== null ? e.sibling = m : t.child = m, c.last = m);
        }
        return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = st(), t.sibling = null, e = Ct.current, se(Ct, l ? e & 1 | 2 : e & 1), t) : (lt(t), null);
      case 22:
      case 23:
        return lr(t), Cc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), a = t.updateQueue, a !== null && Xl(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && ae(ga), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ir(xt), lt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function B2(e, t) {
    switch (cc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ir(xt), Ve(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ne(t), null;
      case 13:
        if (lr(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Ki();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ae(Ct), null;
      case 4:
        return Ve(), null;
      case 10:
        return ir(t.type), null;
      case 22:
      case 23:
        return lr(t), Cc(), e !== null && ae(ga), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ir(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Tm(e, t) {
    switch (cc(t), t.tag) {
      case 3:
        ir(xt), Ve();
        break;
      case 26:
      case 27:
      case 5:
        ne(t);
        break;
      case 4:
        Ve();
        break;
      case 13:
        lr(t);
        break;
      case 19:
        ae(Ct);
        break;
      case 10:
        ir(t.type);
        break;
      case 22:
      case 23:
        lr(t), Cc(), e !== null && ae(ga);
        break;
      case 24:
        ir(xt);
    }
  }
  function ps(e, t) {
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
      Ke(t, t.return, N);
    }
  }
  function Rr(e, t, a) {
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
                Ke(
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
      Ke(t, t.return, X);
    }
  }
  function Om(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        mp(t, a);
      } catch (l) {
        Ke(e, e.return, l);
      }
    }
  }
  function Nm(e, t, a) {
    a.props = ya(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Ke(e, t, l);
    }
  }
  function ms(e, t) {
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
      Ke(e, t, c);
    }
  }
  function Fn(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          Ke(e, t, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          Ke(e, t, c);
        }
      else a.current = null;
  }
  function Dm(e) {
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
      Ke(e, e.return, c);
    }
  }
  function Jc(e, t, a) {
    try {
      var l = e.stateNode;
      i_(l, e.type, a, t), l[Vt] = t;
    } catch (c) {
      Ke(e, e.return, c);
    }
  }
  function Mm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hr(e.type) || e.tag === 4;
  }
  function Wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ef(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = so));
    else if (l !== 4 && (l === 27 && Hr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (ef(e, t, a), e = e.sibling; e !== null; )
        ef(e, t, a), e = e.sibling;
  }
  function $l(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Hr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for ($l(e, t, a), e = e.sibling; e !== null; )
        $l(e, t, a), e = e.sibling;
  }
  function km(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      kt(t, l, a), t[jt] = e, t[Vt] = a;
    } catch (m) {
      Ke(e, e.return, m);
    }
  }
  var cr = !1, mt = !1, tf = !1, Rm = typeof WeakSet == "function" ? WeakSet : Set, Ot = null;
  function I2(e, t) {
    if (e = e.containerInfo, Af = po, e = Fd(e), Wu(e)) {
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
    for (Tf = { focusedElem: e, selectionRange: a }, po = !1, Ot = t; Ot !== null; )
      if (t = Ot, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Ot = e;
      else
        for (; Ot !== null; ) {
          switch (t = Ot, m = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && m !== null) {
                e = void 0, a = t, c = m.memoizedProps, m = m.memoizedState, l = a.stateNode;
                try {
                  var Ee = ya(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Ee,
                    m
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (_e) {
                  Ke(
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
                  Df(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Df(e);
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
            e.return = t.return, Ot = e;
            break;
          }
          Ot = t.return;
        }
  }
  function jm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        jr(e, a), l & 4 && ps(5, a);
        break;
      case 1:
        if (jr(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (C) {
              Ke(a, a.return, C);
            }
          else {
            var c = ya(
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
              Ke(
                a,
                a.return,
                C
              );
            }
          }
        l & 64 && Om(a), l & 512 && ms(a, a.return);
        break;
      case 3:
        if (jr(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
            mp(e, t);
          } catch (C) {
            Ke(a, a.return, C);
          }
        }
        break;
      case 27:
        t === null && l & 4 && km(a);
      case 26:
      case 5:
        jr(e, a), t === null && l & 4 && Dm(a), l & 512 && ms(a, a.return);
        break;
      case 12:
        jr(e, a);
        break;
      case 13:
        jr(e, a), l & 4 && Pm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = X2.bind(
          null,
          a
        ), h_(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || cr, !l) {
          t = t !== null && t.memoizedState !== null || mt, c = cr;
          var m = mt;
          cr = l, (mt = t) && !m ? zr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : jr(e, a), cr = c, mt = m;
        }
        break;
      case 30:
        break;
      default:
        jr(e, a);
    }
  }
  function zm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ju(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var rt = null, $t = !1;
  function fr(e, t, a) {
    for (a = a.child; a !== null; )
      Lm(e, t, a), a = a.sibling;
  }
  function Lm(e, t, a) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Kn, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        mt || Fn(a, t), fr(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        mt || Fn(a, t);
        var l = rt, c = $t;
        Hr(a.type) && (rt = a.stateNode, $t = !1), fr(
          e,
          t,
          a
        ), Cs(a.stateNode), rt = l, $t = c;
        break;
      case 5:
        mt || Fn(a, t);
      case 6:
        if (l = rt, c = $t, rt = null, fr(
          e,
          t,
          a
        ), rt = l, $t = c, rt !== null)
          if ($t)
            try {
              (rt.nodeType === 9 ? rt.body : rt.nodeName === "HTML" ? rt.ownerDocument.body : rt).removeChild(a.stateNode);
            } catch (m) {
              Ke(
                a,
                t,
                m
              );
            }
          else
            try {
              rt.removeChild(a.stateNode);
            } catch (m) {
              Ke(
                a,
                t,
                m
              );
            }
        break;
      case 18:
        rt !== null && ($t ? (e = rt, Cg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), ks(e)) : Cg(rt, a.stateNode));
        break;
      case 4:
        l = rt, c = $t, rt = a.stateNode.containerInfo, $t = !0, fr(
          e,
          t,
          a
        ), rt = l, $t = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        mt || Rr(2, a, t), mt || Rr(4, a, t), fr(
          e,
          t,
          a
        );
        break;
      case 1:
        mt || (Fn(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Nm(
          a,
          t,
          l
        )), fr(
          e,
          t,
          a
        );
        break;
      case 21:
        fr(
          e,
          t,
          a
        );
        break;
      case 22:
        mt = (l = mt) || a.memoizedState !== null, fr(
          e,
          t,
          a
        ), mt = l;
        break;
      default:
        fr(
          e,
          t,
          a
        );
    }
  }
  function Pm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ks(e);
      } catch (a) {
        Ke(t, t.return, a);
      }
  }
  function U2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Rm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Rm()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function nf(e, t) {
    var a = U2(e);
    t.forEach(function(l) {
      var c = $2.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function sn(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], m = e, C = t, N = C;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 27:
              if (Hr(N.type)) {
                rt = N.stateNode, $t = !1;
                break e;
              }
              break;
            case 5:
              rt = N.stateNode, $t = !1;
              break e;
            case 3:
            case 4:
              rt = N.stateNode.containerInfo, $t = !0;
              break e;
          }
          N = N.return;
        }
        if (rt === null) throw Error(s(160));
        Lm(m, C, c), rt = null, $t = !1, m = c.alternate, m !== null && (m.return = null), c.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Bm(t, e), t = t.sibling;
  }
  var kn = null;
  function Bm(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        sn(t, e), ln(e), l & 4 && (Rr(3, e, e.return), ps(3, e), Rr(5, e, e.return));
        break;
      case 1:
        sn(t, e), ln(e), l & 512 && (mt || a === null || Fn(a, a.return)), l & 64 && cr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = kn;
        if (sn(t, e), ln(e), l & 512 && (mt || a === null || Fn(a, a.return)), l & 4) {
          var m = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      m = c.getElementsByTagName("title")[0], (!m || m[Ii] || m[jt] || m.namespaceURI === "http://www.w3.org/2000/svg" || m.hasAttribute("itemprop")) && (m = c.createElement(l), c.head.insertBefore(
                        m,
                        c.querySelector("head > title")
                      )), kt(m, l, a), m[jt] = e, At(m), l = m;
                      break e;
                    case "link":
                      var C = kg(
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
                      m = c.createElement(l), kt(m, l, a), c.head.appendChild(m);
                      break;
                    case "meta":
                      if (C = kg(
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
                      m = c.createElement(l), kt(m, l, a), c.head.appendChild(m);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  m[jt] = e, At(m), l = m;
                }
                e.stateNode = l;
              } else
                Rg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Mg(
                c,
                l,
                e.memoizedProps
              );
          else
            m !== l ? (m === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : m.count--, l === null ? Rg(
              c,
              e.type,
              e.stateNode
            ) : Mg(
              c,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Jc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        sn(t, e), ln(e), l & 512 && (mt || a === null || Fn(a, a.return)), a !== null && l & 4 && Jc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (sn(t, e), ln(e), l & 512 && (mt || a === null || Fn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ga(c, "");
          } catch (F) {
            Ke(e, e.return, F);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, Jc(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), l & 1024 && (tf = !0);
        break;
      case 6:
        if (sn(t, e), ln(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (F) {
            Ke(e, e.return, F);
          }
        }
        break;
      case 3:
        if (co = null, c = kn, kn = oo(t.containerInfo), sn(t, e), kn = c, ln(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ks(t.containerInfo);
          } catch (F) {
            Ke(e, e.return, F);
          }
        tf && (tf = !1, Im(e));
        break;
      case 4:
        l = kn, kn = oo(
          e.stateNode.containerInfo
        ), sn(t, e), ln(e), kn = l;
        break;
      case 12:
        sn(t, e), ln(e);
        break;
      case 13:
        sn(t, e), ln(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (uf = st()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var R = a !== null && a.memoizedState !== null, H = cr, X = mt;
        if (cr = H || c, mt = X || R, sn(t, e), mt = X, cr = H, ln(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (a === null || R || cr || mt || _a(e)), a = null, t = e; ; ) {
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
                  Ke(R, R.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                R = t;
                try {
                  R.stateNode.nodeValue = c ? "" : R.memoizedProps;
                } catch (F) {
                  Ke(R, R.return, F);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, nf(e, a))));
        break;
      case 19:
        sn(t, e), ln(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        sn(t, e), ln(e);
    }
  }
  function ln(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Mm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, m = Wc(e);
            $l(e, m, c);
            break;
          case 5:
            var C = a.stateNode;
            a.flags & 32 && (Ga(C, ""), a.flags &= -33);
            var N = Wc(e);
            $l(e, N, C);
            break;
          case 3:
          case 4:
            var R = a.stateNode.containerInfo, H = Wc(e);
            ef(
              e,
              H,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (X) {
        Ke(e, e.return, X);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Im(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Im(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function jr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        jm(e, t.alternate, t), t = t.sibling;
  }
  function _a(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Rr(4, t, t.return), _a(t);
          break;
        case 1:
          Fn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Nm(
            t,
            t.return,
            a
          ), _a(t);
          break;
        case 27:
          Cs(t.stateNode);
        case 26:
        case 5:
          Fn(t, t.return), _a(t);
          break;
        case 22:
          t.memoizedState === null && _a(t);
          break;
        case 30:
          _a(t);
          break;
        default:
          _a(t);
      }
      e = e.sibling;
    }
  }
  function zr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, c = e, m = t, C = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          zr(
            c,
            m,
            a
          ), ps(4, m);
          break;
        case 1:
          if (zr(
            c,
            m,
            a
          ), l = m, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              Ke(l, l.return, H);
            }
          if (l = m, c = l.updateQueue, c !== null) {
            var N = l.stateNode;
            try {
              var R = c.shared.hiddenCallbacks;
              if (R !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++)
                  pp(R[c], N);
            } catch (H) {
              Ke(l, l.return, H);
            }
          }
          a && C & 64 && Om(m), ms(m, m.return);
          break;
        case 27:
          km(m);
        case 26:
        case 5:
          zr(
            c,
            m,
            a
          ), a && l === null && C & 4 && Dm(m), ms(m, m.return);
          break;
        case 12:
          zr(
            c,
            m,
            a
          );
          break;
        case 13:
          zr(
            c,
            m,
            a
          ), a && C & 4 && Pm(c, m);
          break;
        case 22:
          m.memoizedState === null && zr(
            c,
            m,
            a
          ), ms(m, m.return);
          break;
        case 30:
          break;
        default:
          zr(
            c,
            m,
            a
          );
      }
      t = t.sibling;
    }
  }
  function rf(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && es(a));
  }
  function af(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && es(e));
  }
  function Gn(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Um(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function Um(e, t, a, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Gn(
          e,
          t,
          a,
          l
        ), c & 2048 && ps(9, t);
        break;
      case 1:
        Gn(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        Gn(
          e,
          t,
          a,
          l
        ), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && es(e)));
        break;
      case 12:
        if (c & 2048) {
          Gn(
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
            Ke(t, t.return, R);
          }
        } else
          Gn(
            e,
            t,
            a,
            l
          );
        break;
      case 13:
        Gn(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        m = t.stateNode, C = t.alternate, t.memoizedState !== null ? m._visibility & 2 ? Gn(
          e,
          t,
          a,
          l
        ) : gs(e, t) : m._visibility & 2 ? Gn(
          e,
          t,
          a,
          l
        ) : (m._visibility |= 2, ci(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), c & 2048 && rf(C, t);
        break;
      case 24:
        Gn(
          e,
          t,
          a,
          l
        ), c & 2048 && af(t.alternate, t);
        break;
      default:
        Gn(
          e,
          t,
          a,
          l
        );
    }
  }
  function ci(e, t, a, l, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var m = e, C = t, N = a, R = l, H = C.flags;
      switch (C.tag) {
        case 0:
        case 11:
        case 15:
          ci(
            m,
            C,
            N,
            R,
            c
          ), ps(8, C);
          break;
        case 23:
          break;
        case 22:
          var X = C.stateNode;
          C.memoizedState !== null ? X._visibility & 2 ? ci(
            m,
            C,
            N,
            R,
            c
          ) : gs(
            m,
            C
          ) : (X._visibility |= 2, ci(
            m,
            C,
            N,
            R,
            c
          )), c && H & 2048 && rf(
            C.alternate,
            C
          );
          break;
        case 24:
          ci(
            m,
            C,
            N,
            R,
            c
          ), c && H & 2048 && af(C.alternate, C);
          break;
        default:
          ci(
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
  function gs(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, c = l.flags;
        switch (l.tag) {
          case 22:
            gs(a, l), c & 2048 && rf(
              l.alternate,
              l
            );
            break;
          case 24:
            gs(a, l), c & 2048 && af(l.alternate, l);
            break;
          default:
            gs(a, l);
        }
        t = t.sibling;
      }
  }
  var vs = 8192;
  function fi(e) {
    if (e.subtreeFlags & vs)
      for (e = e.child; e !== null; )
        Hm(e), e = e.sibling;
  }
  function Hm(e) {
    switch (e.tag) {
      case 26:
        fi(e), e.flags & vs && e.memoizedState !== null && w_(
          kn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        fi(e);
        break;
      case 3:
      case 4:
        var t = kn;
        kn = oo(e.stateNode.containerInfo), fi(e), kn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = vs, vs = 16777216, fi(e), vs = t) : fi(e));
        break;
      default:
        fi(e);
    }
  }
  function qm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ys(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          Ot = l, Fm(
            l,
            e
          );
        }
      qm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Zm(e), e = e.sibling;
  }
  function Zm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ys(e), e.flags & 2048 && Rr(9, e, e.return);
        break;
      case 3:
        ys(e);
        break;
      case 12:
        ys(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ql(e)) : ys(e);
        break;
      default:
        ys(e);
    }
  }
  function Ql(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          Ot = l, Fm(
            l,
            e
          );
        }
      qm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Rr(8, t, t.return), Ql(t);
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
  function Fm(e, t) {
    for (; Ot !== null; ) {
      var a = Ot;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Rr(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          es(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Ot = l;
      else
        e: for (a = e; Ot !== null; ) {
          l = Ot;
          var c = l.sibling, m = l.return;
          if (zm(l), l === a) {
            Ot = null;
            break e;
          }
          if (c !== null) {
            c.return = m, Ot = c;
            break e;
          }
          Ot = m;
        }
    }
  }
  var H2 = {
    getCacheForType: function(e) {
      var t = zt(xt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, q2 = typeof WeakMap == "function" ? WeakMap : Map, Fe = 0, We = null, Re = null, Pe = 0, Ge = 0, on = null, Lr = !1, hi = !1, sf = !1, hr = 0, ft = 0, Pr = 0, ba = 0, lf = 0, wn = 0, di = 0, _s = null, Qt = null, of = !1, uf = 0, Kl = 1 / 0, Jl = null, Br = null, Mt = 0, Ir = null, pi = null, mi = 0, cf = 0, ff = null, Gm = null, bs = 0, hf = null;
  function un() {
    if ((Fe & 2) !== 0 && Pe !== 0)
      return Pe & -Pe;
    if (U.T !== null) {
      var e = ni;
      return e !== 0 ? e : _f();
    }
    return ld();
  }
  function Vm() {
    wn === 0 && (wn = (Pe & 536870912) === 0 || Ue ? Pa() : 536870912);
    var e = Cn.current;
    return e !== null && (e.flags |= 32), wn;
  }
  function cn(e, t, a) {
    (e === We && (Ge === 2 || Ge === 9) || e.cancelPendingCommit !== null) && (gi(e, 0), Ur(
      e,
      Pe,
      wn,
      !1
    )), Bi(e, a), ((Fe & 2) === 0 || e !== We) && (e === We && ((Fe & 2) === 0 && (ba |= a), ft === 4 && Ur(
      e,
      Pe,
      wn,
      !1
    )), Vn(e));
  }
  function Ym(e, t, a) {
    if ((Fe & 6) !== 0) throw Error(s(327));
    var l = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Gt(e, t), c = l ? G2(e, t) : mf(e, t, !0), m = l;
    do {
      if (c === 0) {
        hi && !l && Ur(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, m && !Z2(a)) {
          c = mf(e, t, !1), m = !1;
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
              c = _s;
              var R = N.current.memoizedState.isDehydrated;
              if (R && (gi(N, C).flags |= 256), C = mf(
                N,
                C,
                !1
              ), C !== 2) {
                if (sf && !R) {
                  N.errorRecoveryDisabledLanes |= m, ba |= m, c = 4;
                  break e;
                }
                m = Qt, Qt = c, m !== null && (Qt === null ? Qt = m : Qt.push.apply(
                  Qt,
                  m
                ));
              }
              c = C;
            }
            if (m = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          gi(e, 0), Ur(e, t, 0, !0);
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
              Ur(
                l,
                t,
                wn,
                !Lr
              );
              break e;
            case 2:
              Qt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (c = uf + 300 - st(), 10 < c)) {
            if (Ur(
              l,
              t,
              wn,
              !Lr
            ), Ht(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Eg(
              Xm.bind(
                null,
                l,
                a,
                Qt,
                Jl,
                of,
                t,
                wn,
                ba,
                di,
                Lr,
                m,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          Xm(
            l,
            a,
            Qt,
            Jl,
            of,
            t,
            wn,
            ba,
            di,
            Lr,
            m,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Vn(e);
  }
  function Xm(e, t, a, l, c, m, C, N, R, H, X, W, Z, F) {
    if (e.timeoutHandle = -1, W = t.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (Ts = { stylesheets: null, count: 0, unsuspend: C_ }, Hm(t), W = A_(), W !== null)) {
      e.cancelPendingCommit = W(
        tg.bind(
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
      ), Ur(e, m, C, !H);
      return;
    }
    tg(
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
  function Z2(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var c = a[l], m = c.getSnapshot;
          c = c.value;
          try {
            if (!rn(m(), c)) return !1;
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
  function Ur(e, t, a, l) {
    t &= ~lf, t &= ~ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var m = 31 - Ut(c), C = 1 << m;
      l[m] = -1, c &= ~C;
    }
    a !== 0 && id(e, a, t);
  }
  function Wl() {
    return (Fe & 6) === 0 ? (Ss(0), !1) : !0;
  }
  function df() {
    if (Re !== null) {
      if (Ge === 0)
        var e = Re.return;
      else
        e = Re, ar = pa = null, Nc(e), oi = null, fs = 0, e = Re;
      for (; e !== null; )
        Tm(e.alternate, e), e = e.return;
      Re = null;
    }
  }
  function gi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, l_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), df(), We = e, Re = a = tr(e.current, null), Pe = t, Ge = 0, on = null, Lr = !1, hi = Gt(e, t), sf = !1, di = wn = lf = ba = Pr = ft = 0, Qt = _s = null, of = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var c = 31 - Ut(l), m = 1 << c;
        t |= e[c], l &= ~m;
      }
    return hr = t, Sl(), a;
  }
  function $m(e, t) {
    Me = null, U.H = Ul, t === ns || t === Dl ? (t = hp(), Ge = 3) : t === up ? (t = hp(), Ge = 4) : Ge = t === dm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, on = t, Re === null && (ft = 1, Gl(
      e,
      bn(t, e.current)
    ));
  }
  function Qm() {
    var e = U.H;
    return U.H = Ul, e === null ? Ul : e;
  }
  function Km() {
    var e = U.A;
    return U.A = H2, e;
  }
  function pf() {
    ft = 4, Lr || (Pe & 4194048) !== Pe && Cn.current !== null || (hi = !0), (Pr & 134217727) === 0 && (ba & 134217727) === 0 || We === null || Ur(
      We,
      Pe,
      wn,
      !1
    );
  }
  function mf(e, t, a) {
    var l = Fe;
    Fe |= 2;
    var c = Qm(), m = Km();
    (We !== e || Pe !== t) && (Jl = null, gi(e, t)), t = !1;
    var C = ft;
    e: do
      try {
        if (Ge !== 0 && Re !== null) {
          var N = Re, R = on;
          switch (Ge) {
            case 8:
              df(), C = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Cn.current === null && (t = !0);
              var H = Ge;
              if (Ge = 0, on = null, vi(e, N, R, H), a && hi) {
                C = 0;
                break e;
              }
              break;
            default:
              H = Ge, Ge = 0, on = null, vi(e, N, R, H);
          }
        }
        F2(), C = ft;
        break;
      } catch (X) {
        $m(e, X);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ar = pa = null, Fe = l, U.H = c, U.A = m, Re === null && (We = null, Pe = 0, Sl()), C;
  }
  function F2() {
    for (; Re !== null; ) Jm(Re);
  }
  function G2(e, t) {
    var a = Fe;
    Fe |= 2;
    var l = Qm(), c = Km();
    We !== e || Pe !== t ? (Jl = null, Kl = st() + 500, gi(e, t)) : hi = Gt(
      e,
      t
    );
    e: do
      try {
        if (Ge !== 0 && Re !== null) {
          t = Re;
          var m = on;
          t: switch (Ge) {
            case 1:
              Ge = 0, on = null, vi(e, t, m, 1);
              break;
            case 2:
            case 9:
              if (cp(m)) {
                Ge = 0, on = null, Wm(t);
                break;
              }
              t = function() {
                Ge !== 2 && Ge !== 9 || We !== e || (Ge = 7), Vn(e);
              }, m.then(t, t);
              break e;
            case 3:
              Ge = 7;
              break e;
            case 4:
              Ge = 5;
              break e;
            case 7:
              cp(m) ? (Ge = 0, on = null, Wm(t)) : (Ge = 0, on = null, vi(e, t, m, 7));
              break;
            case 5:
              var C = null;
              switch (Re.tag) {
                case 26:
                  C = Re.memoizedState;
                case 5:
                case 27:
                  var N = Re;
                  if (!C || jg(C)) {
                    Ge = 0, on = null;
                    var R = N.sibling;
                    if (R !== null) Re = R;
                    else {
                      var H = N.return;
                      H !== null ? (Re = H, eo(H)) : Re = null;
                    }
                    break t;
                  }
              }
              Ge = 0, on = null, vi(e, t, m, 5);
              break;
            case 6:
              Ge = 0, on = null, vi(e, t, m, 6);
              break;
            case 8:
              df(), ft = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        V2();
        break;
      } catch (X) {
        $m(e, X);
      }
    while (!0);
    return ar = pa = null, U.H = l, U.A = c, Fe = a, Re !== null ? 0 : (We = null, Pe = 0, Sl(), ft);
  }
  function V2() {
    for (; Re !== null && !Ie(); )
      Jm(Re);
  }
  function Jm(e) {
    var t = wm(e.alternate, e, hr);
    e.memoizedProps = e.pendingProps, t === null ? eo(e) : Re = t;
  }
  function Wm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _m(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Pe
        );
        break;
      case 11:
        t = _m(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Pe
        );
        break;
      case 5:
        Nc(t);
      default:
        Tm(a, t), t = Re = ep(t, hr), t = wm(a, t, hr);
    }
    e.memoizedProps = e.pendingProps, t === null ? eo(e) : Re = t;
  }
  function vi(e, t, a, l) {
    ar = pa = null, Nc(t), oi = null, fs = 0;
    var c = t.return;
    try {
      if (z2(
        e,
        c,
        t,
        a,
        Pe
      )) {
        ft = 1, Gl(
          e,
          bn(a, e.current)
        ), Re = null;
        return;
      }
    } catch (m) {
      if (c !== null) throw Re = c, m;
      ft = 1, Gl(
        e,
        bn(a, e.current)
      ), Re = null;
      return;
    }
    t.flags & 32768 ? (Ue || l === 1 ? e = !0 : hi || (Pe & 536870912) !== 0 ? e = !1 : (Lr = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Cn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), eg(t, e)) : eo(t);
  }
  function eo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        eg(
          t,
          Lr
        );
        return;
      }
      e = t.return;
      var a = P2(
        t.alternate,
        t,
        hr
      );
      if (a !== null) {
        Re = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    ft === 0 && (ft = 5);
  }
  function eg(e, t) {
    do {
      var a = B2(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Re = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Re = e;
        return;
      }
      Re = e = a;
    } while (e !== null);
    ft = 6, Re = null;
  }
  function tg(e, t, a, l, c, m, C, N, R) {
    e.cancelPendingCommit = null;
    do
      to();
    while (Mt !== 0);
    if ((Fe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (m = t.lanes | t.childLanes, m |= ac, C1(
        e,
        a,
        m,
        C,
        N,
        R
      ), e === We && (Re = We = null, Pe = 0), pi = t, Ir = e, mi = a, cf = m, ff = c, Gm = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Q2(de, function() {
        return sg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = U.T, U.T = null, c = te.p, te.p = 2, C = Fe, Fe |= 4;
        try {
          I2(e, t, a);
        } finally {
          Fe = C, te.p = c, U.T = l;
        }
      }
      Mt = 1, ng(), rg(), ag();
    }
  }
  function ng() {
    if (Mt === 1) {
      Mt = 0;
      var e = Ir, t = pi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var l = te.p;
        te.p = 2;
        var c = Fe;
        Fe |= 4;
        try {
          Bm(t, e);
          var m = Tf, C = Fd(e.containerInfo), N = m.focusedElem, R = m.selectionRange;
          if (C !== N && N && N.ownerDocument && Zd(
            N.ownerDocument.documentElement,
            N
          )) {
            if (R !== null && Wu(N)) {
              var H = R.start, X = R.end;
              if (X === void 0 && (X = H), "selectionStart" in N)
                N.selectionStart = H, N.selectionEnd = Math.min(
                  X,
                  N.value.length
                );
              else {
                var W = N.ownerDocument || document, Z = W && W.defaultView || window;
                if (Z.getSelection) {
                  var F = Z.getSelection(), Ee = N.textContent.length, _e = Math.min(R.start, Ee), $e = R.end === void 0 ? _e : Math.min(R.end, Ee);
                  !F.extend && _e > $e && (C = $e, $e = _e, _e = C);
                  var L = qd(
                    N,
                    _e
                  ), z = qd(
                    N,
                    $e
                  );
                  if (L && z && (F.rangeCount !== 1 || F.anchorNode !== L.node || F.anchorOffset !== L.offset || F.focusNode !== z.node || F.focusOffset !== z.offset)) {
                    var P = W.createRange();
                    P.setStart(L.node, L.offset), F.removeAllRanges(), _e > $e ? (F.addRange(P), F.extend(z.node, z.offset)) : (P.setEnd(z.node, z.offset), F.addRange(P));
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
          po = !!Af, Tf = Af = null;
        } finally {
          Fe = c, te.p = l, U.T = a;
        }
      }
      e.current = t, Mt = 2;
    }
  }
  function rg() {
    if (Mt === 2) {
      Mt = 0;
      var e = Ir, t = pi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = U.T, U.T = null;
        var l = te.p;
        te.p = 2;
        var c = Fe;
        Fe |= 4;
        try {
          jm(e, t.alternate, t);
        } finally {
          Fe = c, te.p = l, U.T = a;
        }
      }
      Mt = 3;
    }
  }
  function ag() {
    if (Mt === 4 || Mt === 3) {
      Mt = 0, tt();
      var e = Ir, t = pi, a = mi, l = Gm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Mt = 5 : (Mt = 0, pi = Ir = null, ig(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Br = null), ku(a), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function")
        try {
          dt.onCommitFiberRoot(
            Kn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = U.T, c = te.p, te.p = 2, U.T = null;
        try {
          for (var m = e.onRecoverableError, C = 0; C < l.length; C++) {
            var N = l[C];
            m(N.value, {
              componentStack: N.stack
            });
          }
        } finally {
          U.T = t, te.p = c;
        }
      }
      (mi & 3) !== 0 && to(), Vn(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === hf ? bs++ : (bs = 0, hf = e) : bs = 0, Ss(0);
    }
  }
  function ig(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, es(t)));
  }
  function to(e) {
    return ng(), rg(), ag(), sg();
  }
  function sg() {
    if (Mt !== 5) return !1;
    var e = Ir, t = cf;
    cf = 0;
    var a = ku(mi), l = U.T, c = te.p;
    try {
      te.p = 32 > a ? 32 : a, U.T = null, a = ff, ff = null;
      var m = Ir, C = mi;
      if (Mt = 0, pi = Ir = null, mi = 0, (Fe & 6) !== 0) throw Error(s(331));
      var N = Fe;
      if (Fe |= 4, Zm(m.current), Um(
        m,
        m.current,
        C,
        a
      ), Fe = N, Ss(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function")
        try {
          dt.onPostCommitFiberRoot(Kn, m);
        } catch {
        }
      return !0;
    } finally {
      te.p = c, U.T = l, ig(e, t);
    }
  }
  function lg(e, t, a) {
    t = bn(a, t), t = Zc(e.stateNode, t, 2), e = Nr(e, t, 2), e !== null && (Bi(e, 2), Vn(e));
  }
  function Ke(e, t, a) {
    if (e.tag === 3)
      lg(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lg(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Br === null || !Br.has(l))) {
            e = bn(a, e), a = fm(2), l = Nr(t, a, 2), l !== null && (hm(
              a,
              l,
              t,
              e
            ), Bi(l, 2), Vn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function gf(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new q2();
      var c = /* @__PURE__ */ new Set();
      l.set(t, c);
    } else
      c = l.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(t, c));
    c.has(a) || (sf = !0, c.add(a), e = Y2.bind(null, e, t, a), t.then(e, e));
  }
  function Y2(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, We === e && (Pe & a) === a && (ft === 4 || ft === 3 && (Pe & 62914560) === Pe && 300 > st() - uf ? (Fe & 2) === 0 && gi(e, 0) : lf |= a, di === Pe && (di = 0)), Vn(e);
  }
  function og(e, t) {
    t === 0 && (t = ad()), e = Ja(e, t), e !== null && (Bi(e, t), Vn(e));
  }
  function X2(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), og(e, a);
  }
  function $2(e, t) {
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
    l !== null && l.delete(t), og(e, a);
  }
  function Q2(e, t) {
    return Se(e, t);
  }
  var no = null, yi = null, vf = !1, ro = !1, yf = !1, Sa = 0;
  function Vn(e) {
    e !== yi && e.next === null && (yi === null ? no = yi = e : yi = yi.next = e), ro = !0, vf || (vf = !0, J2());
  }
  function Ss(e, t) {
    if (!yf && ro) {
      yf = !0;
      do
        for (var a = !1, l = no; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var m = 0;
            else {
              var C = l.suspendedLanes, N = l.pingedLanes;
              m = (1 << 31 - Ut(42 | e) + 1) - 1, m &= c & ~(C & ~N), m = m & 201326741 ? m & 201326741 | 1 : m ? m | 2 : 0;
            }
            m !== 0 && (a = !0, hg(l, m));
          } else
            m = Pe, m = Ht(
              l,
              l === We ? m : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (m & 3) === 0 || Gt(l, m) || (a = !0, hg(l, m));
          l = l.next;
        }
      while (a);
      yf = !1;
    }
  }
  function K2() {
    ug();
  }
  function ug() {
    ro = vf = !1;
    var e = 0;
    Sa !== 0 && (s_() && (e = Sa), Sa = 0);
    for (var t = st(), a = null, l = no; l !== null; ) {
      var c = l.next, m = cg(l, t);
      m === 0 ? (l.next = null, a === null ? no = c : a.next = c, c === null && (yi = a)) : (a = l, (e !== 0 || (m & 3) !== 0) && (ro = !0)), l = c;
    }
    Ss(e);
  }
  function cg(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, m = e.pendingLanes & -62914561; 0 < m; ) {
      var C = 31 - Ut(m), N = 1 << C, R = c[C];
      R === -1 ? ((N & a) === 0 || (N & l) !== 0) && (c[C] = ul(N, t)) : R <= t && (e.expiredLanes |= N), m &= ~N;
    }
    if (t = We, a = Pe, a = Ht(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (Ge === 2 || Ge === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Je(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Gt(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Je(l), ku(a)) {
        case 2:
        case 8:
          a = oe;
          break;
        case 32:
          a = de;
          break;
        case 268435456:
          a = He;
          break;
        default:
          a = de;
      }
      return l = fg.bind(null, e), a = Se(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Je(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function fg(e, t) {
    if (Mt !== 0 && Mt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (to() && e.callbackNode !== a)
      return null;
    var l = Pe;
    return l = Ht(
      e,
      e === We ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Ym(e, l, t), cg(e, st()), e.callbackNode != null && e.callbackNode === a ? fg.bind(null, e) : null);
  }
  function hg(e, t) {
    if (to()) return null;
    Ym(e, t, !0);
  }
  function J2() {
    o_(function() {
      (Fe & 6) !== 0 ? Se(
        It,
        K2
      ) : ug();
    });
  }
  function _f() {
    return Sa === 0 && (Sa = Pa()), Sa;
  }
  function dg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pl("" + e);
  }
  function pg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function W2(e, t, a, l, c) {
    if (t === "submit" && a && a.stateNode === c) {
      var m = dg(
        (c[Vt] || null).action
      ), C = l.submitter;
      C && (t = (t = C[Vt] || null) ? dg(t.formAction) : C.getAttribute("formAction"), t !== null && (m = t, C = null));
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
                if (Sa !== 0) {
                  var R = C ? pg(c, C) : new FormData(c);
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
                typeof m == "function" && (N.preventDefault(), R = C ? pg(c, C) : new FormData(c), Bc(
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
  for (var bf = 0; bf < rc.length; bf++) {
    var Sf = rc[bf], e_ = Sf.toLowerCase(), t_ = Sf[0].toUpperCase() + Sf.slice(1);
    Mn(
      e_,
      "on" + t_
    );
  }
  Mn(Yd, "onAnimationEnd"), Mn(Xd, "onAnimationIteration"), Mn($d, "onAnimationStart"), Mn("dblclick", "onDoubleClick"), Mn("focusin", "onFocus"), Mn("focusout", "onBlur"), Mn(y2, "onTransitionRun"), Mn(_2, "onTransitionStart"), Mn(b2, "onTransitionCancel"), Mn(Qd, "onTransitionEnd"), qa("onMouseEnter", ["mouseout", "mouseover"]), qa("onMouseLeave", ["mouseout", "mouseover"]), qa("onPointerEnter", ["pointerout", "pointerover"]), qa("onPointerLeave", ["pointerout", "pointerover"]), ia(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ia(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ia("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ia(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ia(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ia(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), n_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es)
  );
  function mg(e, t) {
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
  function je(e, t) {
    var a = t[Ru];
    a === void 0 && (a = t[Ru] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (gg(t, e, 2, !1), a.add(l));
  }
  function Ef(e, t, a) {
    var l = 0;
    t && (l |= 4), gg(
      a,
      e,
      l,
      t
    );
  }
  var ao = "_reactListening" + Math.random().toString(36).slice(2);
  function xf(e) {
    if (!e[ao]) {
      e[ao] = !0, ud.forEach(function(a) {
        a !== "selectionchange" && (n_.has(a) || Ef(a, !1, e), Ef(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ao] || (t[ao] = !0, Ef("selectionchange", !1, t));
    }
  }
  function gg(e, t, a, l) {
    switch (Ug(t)) {
      case 2:
        var c = N_;
        break;
      case 8:
        c = D_;
        break;
      default:
        c = Pf;
    }
    a = c.bind(
      null,
      t,
      a,
      e
    ), c = void 0, !Fu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, a, !0) : c !== void 0 ? e.addEventListener(t, a, {
      passive: c
    }) : e.addEventListener(t, a, !1);
  }
  function Cf(e, t, a, l, c) {
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
            if (C = Ia(N), C === null) return;
            if (R = C.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              l = m = C;
              continue e;
            }
            N = N.parentNode;
          }
        }
        l = l.return;
      }
    xd(function() {
      var H = m, X = qu(a), W = [];
      e: {
        var Z = Kd.get(e);
        if (Z !== void 0) {
          var F = yl, Ee = e;
          switch (e) {
            case "keypress":
              if (gl(a) === 0) break e;
            case "keydown":
            case "keyup":
              F = Q1;
              break;
            case "focusin":
              Ee = "focus", F = Xu;
              break;
            case "focusout":
              Ee = "blur", F = Xu;
              break;
            case "beforeblur":
            case "afterblur":
              F = Xu;
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
              F = Ad;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = B1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = W1;
              break;
            case Yd:
            case Xd:
            case $d:
              F = H1;
              break;
            case Qd:
              F = t2;
              break;
            case "scroll":
            case "scrollend":
              F = L1;
              break;
            case "wheel":
              F = r2;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = Z1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Od;
              break;
            case "toggle":
            case "beforetoggle":
              F = i2;
          }
          var _e = (t & 4) !== 0, $e = !_e && (e === "scroll" || e === "scrollend"), L = _e ? Z !== null ? Z + "Capture" : null : Z;
          _e = [];
          for (var z = H, P; z !== null; ) {
            var Q = z;
            if (P = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || P === null || L === null || (Q = Hi(z, L), Q != null && _e.push(
              xs(z, Q, P)
            )), $e) break;
            z = z.return;
          }
          0 < _e.length && (Z = new F(
            Z,
            Ee,
            null,
            a,
            X
          ), W.push({ event: Z, listeners: _e }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", Z && a !== Hu && (Ee = a.relatedTarget || a.fromElement) && (Ia(Ee) || Ee[Ba]))
            break e;
          if ((F || Z) && (Z = X.window === X ? X : (Z = X.ownerDocument) ? Z.defaultView || Z.parentWindow : window, F ? (Ee = a.relatedTarget || a.toElement, F = H, Ee = Ee ? Ia(Ee) : null, Ee !== null && ($e = u(Ee), _e = Ee.tag, Ee !== $e || _e !== 5 && _e !== 27 && _e !== 6) && (Ee = null)) : (F = null, Ee = H), F !== Ee)) {
            if (_e = Ad, Q = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (_e = Od, Q = "onPointerLeave", L = "onPointerEnter", z = "pointer"), $e = F == null ? Z : Ui(F), P = Ee == null ? Z : Ui(Ee), Z = new _e(
              Q,
              z + "leave",
              F,
              a,
              X
            ), Z.target = $e, Z.relatedTarget = P, Q = null, Ia(X) === H && (_e = new _e(
              L,
              z + "enter",
              Ee,
              a,
              X
            ), _e.target = P, _e.relatedTarget = $e, Q = _e), $e = Q, F && Ee)
              t: {
                for (_e = F, L = Ee, z = 0, P = _e; P; P = _i(P))
                  z++;
                for (P = 0, Q = L; Q; Q = _i(Q))
                  P++;
                for (; 0 < z - P; )
                  _e = _i(_e), z--;
                for (; 0 < P - z; )
                  L = _i(L), P--;
                for (; z--; ) {
                  if (_e === L || L !== null && _e === L.alternate)
                    break t;
                  _e = _i(_e), L = _i(L);
                }
                _e = null;
              }
            else _e = null;
            F !== null && vg(
              W,
              Z,
              F,
              _e,
              !1
            ), Ee !== null && $e !== null && vg(
              W,
              $e,
              Ee,
              _e,
              !0
            );
          }
        }
        e: {
          if (Z = H ? Ui(H) : window, F = Z.nodeName && Z.nodeName.toLowerCase(), F === "select" || F === "input" && Z.type === "file")
            var ce = Ld;
          else if (jd(Z))
            if (Pd)
              ce = m2;
            else {
              ce = d2;
              var ke = h2;
            }
          else
            F = Z.nodeName, !F || F.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? H && Uu(H.elementType) && (ce = Ld) : ce = p2;
          if (ce && (ce = ce(e, H))) {
            zd(
              W,
              ce,
              a,
              X
            );
            break e;
          }
          ke && ke(e, Z, H), e === "focusout" && H && Z.type === "number" && H.memoizedProps.value != null && Iu(Z, "number", Z.value);
        }
        switch (ke = H ? Ui(H) : window, e) {
          case "focusin":
            (jd(ke) || ke.contentEditable === "true") && ($a = ke, ec = H, $i = null);
            break;
          case "focusout":
            $i = ec = $a = null;
            break;
          case "mousedown":
            tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tc = !1, Gd(W, a, X);
            break;
          case "selectionchange":
            if (v2) break;
          case "keydown":
          case "keyup":
            Gd(W, a, X);
        }
        var me;
        if (Qu)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          Xa ? kd(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (be = "onCompositionStart");
        be && (Nd && a.locale !== "ko" && (Xa || be !== "onCompositionStart" ? be === "onCompositionEnd" && Xa && (me = Cd()) : (wr = X, Gu = "value" in wr ? wr.value : wr.textContent, Xa = !0)), ke = io(H, be), 0 < ke.length && (be = new Td(
          be,
          e,
          null,
          a,
          X
        ), W.push({ event: be, listeners: ke }), me ? be.data = me : (me = Rd(a), me !== null && (be.data = me)))), (me = l2 ? o2(e, a) : u2(e, a)) && (be = io(H, "onBeforeInput"), 0 < be.length && (ke = new Td(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          X
        ), W.push({
          event: ke,
          listeners: be
        }), ke.data = me)), W2(
          W,
          e,
          H,
          a,
          X
        );
      }
      mg(W, t);
    });
  }
  function xs(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function io(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var c = e, m = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || m === null || (c = Hi(e, a), c != null && l.unshift(
        xs(e, c, m)
      ), c = Hi(e, t), c != null && l.push(
        xs(e, c, m)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function _i(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function vg(e, t, a, l, c) {
    for (var m = t._reactName, C = []; a !== null && a !== l; ) {
      var N = a, R = N.alternate, H = N.stateNode;
      if (N = N.tag, R !== null && R === l) break;
      N !== 5 && N !== 26 && N !== 27 || H === null || (R = H, c ? (H = Hi(a, m), H != null && C.unshift(
        xs(a, H, R)
      )) : c || (H = Hi(a, m), H != null && C.push(
        xs(a, H, R)
      ))), a = a.return;
    }
    C.length !== 0 && e.push({ event: t, listeners: C });
  }
  var r_ = /\r\n?/g, a_ = /\u0000|\uFFFD/g;
  function yg(e) {
    return (typeof e == "string" ? e : "" + e).replace(r_, `
`).replace(a_, "");
  }
  function _g(e, t) {
    return t = yg(t), yg(e) === t;
  }
  function so() {
  }
  function Xe(e, t, a, l, c, m) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ga(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ga(e, "" + l);
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
        Sd(e, l, m);
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
          typeof m == "function" && (a === "formAction" ? (t !== "input" && Xe(e, t, "name", c.name, c, null), Xe(
            e,
            t,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Xe(
            e,
            t,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Xe(
            e,
            t,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Xe(e, t, "encType", c.encType, c, null), Xe(e, t, "method", c.method, c, null), Xe(e, t, "target", c.target, c, null)));
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
        l != null && je("scroll", e);
        break;
      case "onScrollEnd":
        l != null && je("scrollend", e);
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
        je("beforetoggle", e), je("toggle", e), cl(e, "popover", l);
        break;
      case "xlinkActuate":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Wn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Wn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Wn(
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
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = j1.get(a) || a, cl(e, a, l));
    }
  }
  function wf(e, t, a, l, c, m) {
    switch (a) {
      case "style":
        Sd(e, l, m);
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
        typeof l == "string" ? Ga(e, l) : (typeof l == "number" || typeof l == "bigint") && Ga(e, "" + l);
        break;
      case "onScroll":
        l != null && je("scroll", e);
        break;
      case "onScrollEnd":
        l != null && je("scrollend", e);
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
        if (!cd.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), t = a.slice(2, c ? a.length - 7 : void 0), m = e[Vt] || null, m = m != null ? m[a] : null, typeof m == "function" && e.removeEventListener(t, m, c), typeof l == "function")) {
              typeof m != "function" && m !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, c);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : cl(e, a, l);
          }
    }
  }
  function kt(e, t, a) {
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
        je("error", e), je("load", e);
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
                  Xe(e, t, m, C, a, null);
              }
          }
        c && Xe(e, t, "srcSet", a.srcSet, a, null), l && Xe(e, t, "src", a.src, a, null);
        return;
      case "input":
        je("invalid", e);
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
                  Xe(e, t, l, X, a, null);
              }
          }
        vd(
          e,
          m,
          N,
          R,
          H,
          C,
          c,
          !1
        ), hl(e);
        return;
      case "select":
        je("invalid", e), l = C = m = null;
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
                Xe(e, t, c, N, a, null);
            }
        t = m, a = C, e.multiple = !!l, t != null ? Fa(e, !!l, t, !1) : a != null && Fa(e, !!l, a, !0);
        return;
      case "textarea":
        je("invalid", e), m = c = l = null;
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
                Xe(e, t, C, N, a, null);
            }
        _d(e, l, c, m), hl(e);
        return;
      case "option":
        for (R in a)
          if (a.hasOwnProperty(R) && (l = a[R], l != null))
            switch (R) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Xe(e, t, R, l, a, null);
            }
        return;
      case "dialog":
        je("beforetoggle", e), je("toggle", e), je("cancel", e), je("close", e);
        break;
      case "iframe":
      case "object":
        je("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Es.length; l++)
          je(Es[l], e);
        break;
      case "image":
        je("error", e), je("load", e);
        break;
      case "details":
        je("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        je("error", e), je("load", e);
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
                Xe(e, t, H, l, a, null);
            }
        return;
      default:
        if (Uu(t)) {
          for (X in a)
            a.hasOwnProperty(X) && (l = a[X], l !== void 0 && wf(
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
      a.hasOwnProperty(N) && (l = a[N], l != null && Xe(e, t, N, l, a, null));
  }
  function i_(e, t, a, l) {
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
                l.hasOwnProperty(F) || Xe(e, t, F, null, l, W);
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
                F !== W && Xe(
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
                l.hasOwnProperty(m) || Xe(
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
                m !== R && Xe(
                  e,
                  t,
                  c,
                  m,
                  l,
                  R
                );
            }
        t = N, a = C, l = F, Z != null ? Fa(e, !!a, Z, !1) : !!l != !!a && (t != null ? Fa(e, !!a, t, !0) : Fa(e, !!a, a ? [] : "", !1));
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
                Xe(e, t, N, null, l, c);
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
                c !== m && Xe(e, t, C, c, l, m);
            }
        yd(e, Z, F);
        return;
      case "option":
        for (var Ee in a)
          if (Z = a[Ee], a.hasOwnProperty(Ee) && Z != null && !l.hasOwnProperty(Ee))
            switch (Ee) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Xe(
                  e,
                  t,
                  Ee,
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
                Xe(
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
          Z = a[_e], a.hasOwnProperty(_e) && Z != null && !l.hasOwnProperty(_e) && Xe(e, t, _e, null, l, Z);
        for (H in l)
          if (Z = l[H], F = a[H], l.hasOwnProperty(H) && Z !== F && (Z != null || F != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, t));
                break;
              default:
                Xe(
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
        if (Uu(t)) {
          for (var $e in a)
            Z = a[$e], a.hasOwnProperty($e) && Z !== void 0 && !l.hasOwnProperty($e) && wf(
              e,
              t,
              $e,
              void 0,
              l,
              Z
            );
          for (X in l)
            Z = l[X], F = a[X], !l.hasOwnProperty(X) || Z === F || Z === void 0 && F === void 0 || wf(
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
      Z = a[L], a.hasOwnProperty(L) && Z != null && !l.hasOwnProperty(L) && Xe(e, t, L, null, l, Z);
    for (W in l)
      Z = l[W], F = a[W], !l.hasOwnProperty(W) || Z === F || Z == null && F == null || Xe(e, t, W, Z, l, F);
  }
  var Af = null, Tf = null;
  function lo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function bg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sg(e, t) {
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
  function Of(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Nf = null;
  function s_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Nf ? !1 : (Nf = e, !0) : (Nf = null, !1);
  }
  var Eg = typeof setTimeout == "function" ? setTimeout : void 0, l_ = typeof clearTimeout == "function" ? clearTimeout : void 0, xg = typeof Promise == "function" ? Promise : void 0, o_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof xg < "u" ? function(e) {
    return xg.resolve(null).then(e).catch(u_);
  } : Eg;
  function u_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hr(e) {
    return e === "head";
  }
  function Cg(e, t) {
    var a = t, l = 0, c = 0;
    do {
      var m = a.nextSibling;
      if (e.removeChild(a), m && m.nodeType === 8)
        if (a = m.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var C = e.ownerDocument;
            if (a & 1 && Cs(C.documentElement), a & 2 && Cs(C.body), a & 4)
              for (a = C.head, Cs(a), C = a.firstChild; C; ) {
                var N = C.nextSibling, R = C.nodeName;
                C[Ii] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && C.rel.toLowerCase() === "stylesheet" || a.removeChild(C), C = N;
              }
          }
          if (c === 0) {
            e.removeChild(m), ks(t);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = m;
    } while (a);
    ks(t);
  }
  function Df(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Df(a), ju(a);
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
  function c_(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ii])
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
      if (e = Rn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function f_(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Rn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function h_(e, t) {
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
  function Rn(e) {
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
  var kf = null;
  function wg(e) {
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
  function Ag(e, t, a) {
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
  function Cs(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ju(e);
  }
  var An = /* @__PURE__ */ new Map(), Tg = /* @__PURE__ */ new Set();
  function oo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var dr = te.d;
  te.d = {
    f: d_,
    r: p_,
    D: m_,
    C: g_,
    L: v_,
    m: y_,
    X: b_,
    S: __,
    M: S_
  };
  function d_() {
    var e = dr.f(), t = Wl();
    return e || t;
  }
  function p_(e) {
    var t = Ua(e);
    t !== null && t.tag === 5 && t.type === "form" ? Yp(t) : dr.r(e);
  }
  var bi = typeof document > "u" ? null : document;
  function Og(e, t, a) {
    var l = bi;
    if (l && typeof t == "string" && t) {
      var c = _n(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Tg.has(c) || (Tg.add(c), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(c) === null && (t = l.createElement("link"), kt(t, "link", e), At(t), l.head.appendChild(t)));
    }
  }
  function m_(e) {
    dr.D(e), Og("dns-prefetch", e, null);
  }
  function g_(e, t) {
    dr.C(e, t), Og("preconnect", e, t);
  }
  function v_(e, t, a) {
    dr.L(e, t, a);
    var l = bi;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + _n(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + _n(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + _n(
        a.imageSizes
      ) + '"]')) : c += '[href="' + _n(e) + '"]';
      var m = c;
      switch (t) {
        case "style":
          m = Si(e);
          break;
        case "script":
          m = Ei(e);
      }
      An.has(m) || (e = y(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), An.set(m, e), l.querySelector(c) !== null || t === "style" && l.querySelector(ws(m)) || t === "script" && l.querySelector(As(m)) || (t = l.createElement("link"), kt(t, "link", e), At(t), l.head.appendChild(t)));
    }
  }
  function y_(e, t) {
    dr.m(e, t);
    var a = bi;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + _n(l) + '"][href="' + _n(e) + '"]', m = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          m = Ei(e);
      }
      if (!An.has(m) && (e = y({ rel: "modulepreload", href: e }, t), An.set(m, e), a.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(As(m)))
              return;
        }
        l = a.createElement("link"), kt(l, "link", e), At(l), a.head.appendChild(l);
      }
    }
  }
  function __(e, t, a) {
    dr.S(e, t, a);
    var l = bi;
    if (l && e) {
      var c = Ha(l).hoistableStyles, m = Si(e);
      t = t || "default";
      var C = c.get(m);
      if (!C) {
        var N = { loading: 0, preload: null };
        if (C = l.querySelector(
          ws(m)
        ))
          N.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = An.get(m)) && Rf(e, a);
          var R = C = l.createElement("link");
          At(R), kt(R, "link", e), R._p = new Promise(function(H, X) {
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
  function b_(e, t) {
    dr.X(e, t);
    var a = bi;
    if (a && e) {
      var l = Ha(a).hoistableScripts, c = Ei(e), m = l.get(c);
      m || (m = a.querySelector(As(c)), m || (e = y({ src: e, async: !0 }, t), (t = An.get(c)) && jf(e, t), m = a.createElement("script"), At(m), kt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function S_(e, t) {
    dr.M(e, t);
    var a = bi;
    if (a && e) {
      var l = Ha(a).hoistableScripts, c = Ei(e), m = l.get(c);
      m || (m = a.querySelector(As(c)), m || (e = y({ src: e, async: !0, type: "module" }, t), (t = An.get(c)) && jf(e, t), m = a.createElement("script"), At(m), kt(m, "link", e), a.head.appendChild(m)), m = {
        type: "script",
        instance: m,
        count: 1,
        state: null
      }, l.set(c, m));
    }
  }
  function Ng(e, t, a, l) {
    var c = (c = he.current) ? oo(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Si(a.href), a = Ha(
          c
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Si(a.href);
          var m = Ha(
            c
          ).hoistableStyles, C = m.get(e);
          if (C || (c = c.ownerDocument || c, C = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, m.set(e, C), (m = c.querySelector(
            ws(e)
          )) && !m._p && (C.instance = m, C.state.loading = 5), An.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, An.set(e, a), m || E_(
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ei(a), a = Ha(
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
  function Si(e) {
    return 'href="' + _n(e) + '"';
  }
  function ws(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Dg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function E_(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), kt(t, "link", a), At(t), e.head.appendChild(t));
  }
  function Ei(e) {
    return '[src="' + _n(e) + '"]';
  }
  function As(e) {
    return "script[async]" + e;
  }
  function Mg(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + _n(a.href) + '"]'
          );
          if (l)
            return t.instance = l, At(l), l;
          var c = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), At(l), kt(l, "style", c), uo(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          c = Si(a.href);
          var m = e.querySelector(
            ws(c)
          );
          if (m)
            return t.state.loading |= 4, t.instance = m, At(m), m;
          l = Dg(a), (c = An.get(c)) && Rf(l, c), m = (e.ownerDocument || e).createElement("link"), At(m);
          var C = m;
          return C._p = new Promise(function(N, R) {
            C.onload = N, C.onerror = R;
          }), kt(m, "link", l), t.state.loading |= 4, uo(m, a.precedence, e), t.instance = m;
        case "script":
          return m = Ei(a.src), (c = e.querySelector(
            As(m)
          )) ? (t.instance = c, At(c), c) : (l = a, (c = An.get(m)) && (l = y({}, a), jf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), At(c), kt(c, "link", l), e.head.appendChild(c), t.instance = c);
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
  function Rf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function jf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var co = null;
  function kg(e, t, a) {
    if (co === null) {
      var l = /* @__PURE__ */ new Map(), c = co = /* @__PURE__ */ new Map();
      c.set(a, l);
    } else
      c = co, l = c.get(a), l || (l = /* @__PURE__ */ new Map(), c.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var m = a[c];
      if (!(m[Ii] || m[jt] || e === "link" && m.getAttribute("rel") === "stylesheet") && m.namespaceURI !== "http://www.w3.org/2000/svg") {
        var C = m.getAttribute(t) || "";
        C = e + C;
        var N = l.get(C);
        N ? N.push(m) : l.set(C, [m]);
      }
    }
    return l;
  }
  function Rg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function x_(e, t, a) {
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
  function jg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ts = null;
  function C_() {
  }
  function w_(e, t, a) {
    if (Ts === null) throw Error(s(475));
    var l = Ts;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var c = Si(a.href), m = e.querySelector(
          ws(c)
        );
        if (m) {
          e = m._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = fo.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = m, At(m);
          return;
        }
        m = e.ownerDocument || e, a = Dg(a), (c = An.get(c)) && Rf(a, c), m = m.createElement("link"), At(m);
        var C = m;
        C._p = new Promise(function(N, R) {
          C.onload = N, C.onerror = R;
        }), kt(m, "link", a), t.instance = m;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = fo.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function A_() {
    if (Ts === null) throw Error(s(475));
    var e = Ts;
    return e.stylesheets && e.count === 0 && zf(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && zf(e, e.stylesheets), e.unsuspend) {
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
      if (this.stylesheets) zf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ho = null;
  function zf(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ho = /* @__PURE__ */ new Map(), t.forEach(T_, e), ho = null, fo.call(e));
  }
  function T_(e, t) {
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
  var Os = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function O_(e, t, a, l, c, m, C, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Du(0), this.hiddenUpdates = Du(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = m, this.onRecoverableError = C, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function zg(e, t, a, l, c, m, C, N, R, H, X, W) {
    return e = new O_(
      e,
      t,
      a,
      C,
      N,
      R,
      H,
      W
    ), t = 1, m === !0 && (t |= 24), m = an(3, null, null, t), e.current = m, m.stateNode = e, t = mc(), t.refCount++, e.pooledCache = t, t.refCount++, m.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, _c(m), e;
  }
  function Lg(e) {
    return e ? (e = Wa, e) : Wa;
  }
  function Pg(e, t, a, l, c, m) {
    c = Lg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Or(t), l.payload = { element: a }, m = m === void 0 ? null : m, m !== null && (l.callback = m), a = Nr(e, l, t), a !== null && (cn(a, e, t), as(a, e, t));
  }
  function Bg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Lf(e, t) {
    Bg(e, t), (e = e.alternate) && Bg(e, t);
  }
  function Ig(e) {
    if (e.tag === 13) {
      var t = Ja(e, 67108864);
      t !== null && cn(t, e, 67108864), Lf(e, 67108864);
    }
  }
  var po = !0;
  function N_(e, t, a, l) {
    var c = U.T;
    U.T = null;
    var m = te.p;
    try {
      te.p = 2, Pf(e, t, a, l);
    } finally {
      te.p = m, U.T = c;
    }
  }
  function D_(e, t, a, l) {
    var c = U.T;
    U.T = null;
    var m = te.p;
    try {
      te.p = 8, Pf(e, t, a, l);
    } finally {
      te.p = m, U.T = c;
    }
  }
  function Pf(e, t, a, l) {
    if (po) {
      var c = Bf(l);
      if (c === null)
        Cf(
          e,
          t,
          l,
          mo,
          a
        ), Hg(e, l);
      else if (k_(
        c,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (Hg(e, l), t & 4 && -1 < M_.indexOf(e)) {
        for (; c !== null; ) {
          var m = Ua(c);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (m = m.stateNode, m.current.memoizedState.isDehydrated) {
                  var C = vn(m.pendingLanes);
                  if (C !== 0) {
                    var N = m;
                    for (N.pendingLanes |= 2, N.entangledLanes |= 2; C; ) {
                      var R = 1 << 31 - Ut(C);
                      N.entanglements[1] |= R, C &= ~R;
                    }
                    Vn(m), (Fe & 6) === 0 && (Kl = st() + 500, Ss(0));
                  }
                }
                break;
              case 13:
                N = Ja(m, 2), N !== null && cn(N, m, 2), Wl(), Lf(m, 2);
            }
          if (m = Bf(l), m === null && Cf(
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
        Cf(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function Bf(e) {
    return e = qu(e), If(e);
  }
  var mo = null;
  function If(e) {
    if (mo = null, e = Ia(e), e !== null) {
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
  function Ug(e) {
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
        switch (In()) {
          case It:
            return 2;
          case oe:
            return 8;
          case de:
          case Ze:
            return 32;
          case He:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uf = !1, qr = null, Zr = null, Fr = null, Ns = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ new Map(), Gr = [], M_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Hg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qr = null;
        break;
      case "dragenter":
      case "dragleave":
        Zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Fr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ns.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ds.delete(t.pointerId);
    }
  }
  function Ms(e, t, a, l, c, m) {
    return e === null || e.nativeEvent !== m ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: m,
      targetContainers: [c]
    }, t !== null && (t = Ua(t), t !== null && Ig(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function k_(e, t, a, l, c) {
    switch (t) {
      case "focusin":
        return qr = Ms(
          qr,
          e,
          t,
          a,
          l,
          c
        ), !0;
      case "dragenter":
        return Zr = Ms(
          Zr,
          e,
          t,
          a,
          l,
          c
        ), !0;
      case "mouseover":
        return Fr = Ms(
          Fr,
          e,
          t,
          a,
          l,
          c
        ), !0;
      case "pointerover":
        var m = c.pointerId;
        return Ns.set(
          m,
          Ms(
            Ns.get(m) || null,
            e,
            t,
            a,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return m = c.pointerId, Ds.set(
          m,
          Ms(
            Ds.get(m) || null,
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
  function qg(e) {
    var t = Ia(e.target);
    if (t !== null) {
      var a = u(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, w1(e.priority, function() {
              if (a.tag === 13) {
                var l = un();
                l = Mu(l);
                var c = Ja(a, l);
                c !== null && cn(c, a, l), Lf(a, l);
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
        Hu = l, a.target.dispatchEvent(l), Hu = null;
      } else
        return t = Ua(a), t !== null && Ig(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Zg(e, t, a) {
    go(e) && a.delete(t);
  }
  function R_() {
    Uf = !1, qr !== null && go(qr) && (qr = null), Zr !== null && go(Zr) && (Zr = null), Fr !== null && go(Fr) && (Fr = null), Ns.forEach(Zg), Ds.forEach(Zg);
  }
  function vo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Uf || (Uf = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      R_
    )));
  }
  var yo = null;
  function Fg(e) {
    yo !== e && (yo = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        yo === e && (yo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], c = e[t + 2];
          if (typeof l != "function") {
            if (If(l || a) === null)
              continue;
            break;
          }
          var m = Ua(a);
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
  function ks(e) {
    function t(R) {
      return vo(R, e);
    }
    qr !== null && vo(qr, e), Zr !== null && vo(Zr, e), Fr !== null && vo(Fr, e), Ns.forEach(t), Ds.forEach(t);
    for (var a = 0; a < Gr.length; a++) {
      var l = Gr[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Gr.length && (a = Gr[0], a.blockedOn === null); )
      qg(a), a.blockedOn === null && Gr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], m = a[l + 1], C = c[Vt] || null;
        if (typeof m == "function")
          C || Fg(a);
        else if (C) {
          var N = null;
          if (m && m.hasAttribute("formAction")) {
            if (c = m, C = m[Vt] || null)
              N = C.formAction;
            else if (If(c) !== null) continue;
          } else N = C.action;
          typeof N == "function" ? a[l + 1] = N : (a.splice(l, 3), l -= 3), Fg(a);
        }
      }
  }
  function Hf(e) {
    this._internalRoot = e;
  }
  _o.prototype.render = Hf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var a = t.current, l = un();
    Pg(a, l, e, t, null, null);
  }, _o.prototype.unmount = Hf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Pg(e.current, 2, null, e, null, null), Wl(), t[Ba] = null;
    }
  };
  function _o(e) {
    this._internalRoot = e;
  }
  _o.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ld();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Gr.length && t !== 0 && t < Gr[a].priority; a++) ;
      Gr.splice(a, 0, e), a === 0 && qg(e);
    }
  };
  var Gg = r.version;
  if (Gg !== "19.1.1")
    throw Error(
      s(
        527,
        Gg,
        "19.1.1"
      )
    );
  te.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = p(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var j_ = {
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
        Kn = bo.inject(
          j_
        ), dt = bo;
      } catch {
      }
  }
  return Ls.createRoot = function(e, t) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = lm, m = om, C = um, N = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (m = t.onCaughtError), t.onRecoverableError !== void 0 && (C = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (N = t.unstable_transitionCallbacks)), t = zg(
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
    ), e[Ba] = t.current, xf(e), new Hf(t);
  }, Ls.hydrateRoot = function(e, t, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", m = lm, C = om, N = um, R = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (m = a.onUncaughtError), a.onCaughtError !== void 0 && (C = a.onCaughtError), a.onRecoverableError !== void 0 && (N = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (R = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), t = zg(
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
    ), t.context = Lg(null), a = t.current, l = un(), l = Mu(l), c = Or(l), c.callback = null, Nr(a, c, l), a = l, t.current.lanes = a, Bi(t, a), Vn(t), e[Ba] = t.current, xf(e), new _o(t);
  }, Ls.version = "19.1.1", Ls;
}
var sv;
function cb() {
  if (sv) return Gf.exports;
  sv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Gf.exports = ub(), Gf.exports;
}
var fb = cb();
const lv = /* @__PURE__ */ $y(fb);
var hb = Object.defineProperty, db = (n, r, i) => r in n ? hb(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, pb = (n, r, i) => db(n, r + "", i);
class Ky extends Error {
  constructor(r, i) {
    super(r), pb(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function mb(n, r) {
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
    throw new Ky(u.statusText, u);
  await i.getCharacters();
}
async function gb(n, r) {
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
    throw new Ky(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var vb = Object.defineProperty, yb = (n, r, i) => r in n ? vb(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, ov = (n, r, i) => yb(n, typeof r != "symbol" ? r + "" : r, i);
class Jy {
  constructor(r, i) {
    ov(this, "settingsKey"), ov(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
    const d = {
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
      let p = function(g, y) {
        let b = !1;
        for (const _ of Object.keys(y))
          g[_] === void 0 ? (g[_] = y[_], b = !0) : typeof y[_] == "object" && y[_] !== null && (g[_] = g[_] || {}, p(g[_], y[_]) && (b = !0));
        return b;
      };
      s && u.version !== s && (d.version.changed = !0, d.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (d.formatVersion.changed = !0, d.formatVersion.new = o, u.formatVersion = o), (p(u, this.defaultSettings) || d.version.changed || d.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, d.version.changed = !0, d.version.new = s), o && !u.formatVersion && (u.formatVersion = o, d.formatVersion.changed = !0, d.formatVersion.new = o);
      let p = structuredClone(u), g = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let b = i.find((_) => _.from === g);
          if (b && b.to > g)
            p = await b.action(p), g = b.to, p.formatVersion = b.to, y = !0;
          else
            for (const _ of i)
              if (_.from === "*" && _.to > g && g !== _.to) {
                p = await _.action(p), g = _.to, p.formatVersion = _.to, y = !0;
                break;
              }
        } while (y);
        if (g !== u.formatVersion) {
          d.formatVersion.changed = !0, d.formatVersion.new = g;
          const b = this.defaultSettings.version;
          b && (p.version = b);
        }
        if (d.formatVersion.changed) {
          for (const b of Object.keys(u))
            delete u[b];
          Object.assign(u, p), this.saveSettings();
        }
      } catch (y) {
        throw console.error("Failed to apply version changes:", y), new Error(`Version migration failed: ${y instanceof Error ? y.message : y}`, {
          cause: y
        });
      }
    }
    return d.newSettings = u, d;
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
function br(n) {
  return Array.isArray ? Array.isArray(n) : t0(n) === "[object Array]";
}
function _b(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function bb(n) {
  return n == null ? "" : _b(n);
}
function Xn(n) {
  return typeof n == "string";
}
function Wy(n) {
  return typeof n == "number";
}
function Sb(n) {
  return n === !0 || n === !1 || Eb(n) && t0(n) == "[object Boolean]";
}
function e0(n) {
  return typeof n == "object";
}
function Eb(n) {
  return e0(n) && n !== null;
}
function pn(n) {
  return n != null;
}
function $f(n) {
  return !n.trim().length;
}
function t0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const xb = "Incorrect 'index' type", Cb = (n) => `Invalid value for key ${n}`, wb = (n) => `Pattern length exceeds max of ${n}.`, Ab = (n) => `Missing ${n} property in key`, Tb = (n) => `Property 'weight' in key '${n}' must be a positive integer`, uv = Object.prototype.hasOwnProperty;
class Ob {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = n0(s);
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
function n0(n) {
  let r = null, i = null, s = null, o = 1, u = null;
  if (Xn(n) || br(n))
    s = n, r = cv(n), i = _h(n);
  else {
    if (!uv.call(n, "name"))
      throw new Error(Ab("name"));
    const f = n.name;
    if (s = f, uv.call(n, "weight") && (o = n.weight, o <= 0))
      throw new Error(Tb(f));
    r = cv(f), i = _h(f), u = n.getFn;
  }
  return { path: r, id: i, weight: o, src: s, getFn: u };
}
function cv(n) {
  return br(n) ? n : n.split(".");
}
function _h(n) {
  return br(n) ? n.join(".") : n;
}
function Nb(n, r) {
  let i = [], s = !1;
  const o = (u, f, d) => {
    if (pn(u))
      if (!f[d])
        i.push(u);
      else {
        let p = f[d];
        const g = u[p];
        if (!pn(g))
          return;
        if (d === f.length - 1 && (Xn(g) || Wy(g) || Sb(g)))
          i.push(bb(g));
        else if (br(g)) {
          s = !0;
          for (let y = 0, b = g.length; y < b; y += 1)
            o(g[y], f, d + 1);
        } else f.length && o(g, f, d + 1);
      }
  };
  return o(n, Xn(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const Db = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, Mb = {
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
}, kb = {
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
}, Rb = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: Nb,
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
var we = {
  ...Mb,
  ...Db,
  ...kb,
  ...Rb
};
const jb = /[^ ]+/g;
function zb(n = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(jb).length;
      if (i.has(u))
        return i.get(u);
      const f = 1 / Math.pow(u, 0.5 * n), d = parseFloat(Math.round(f * s) / s);
      return i.set(u, d), d;
    },
    clear() {
      i.clear();
    }
  };
}
class qh {
  constructor({
    getFn: r = we.getFn,
    fieldNormWeight: i = we.fieldNormWeight
  } = {}) {
    this.norm = zb(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, Xn(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    Xn(r) ? this._addString(r, i) : this._addObject(r, i);
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
    if (!pn(r) || $f(r))
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
      if (pn(f)) {
        if (br(f)) {
          let d = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: g, value: y } = p.pop();
            if (pn(y))
              if (Xn(y) && !$f(y)) {
                let b = {
                  v: y,
                  i: g,
                  n: this.norm.get(y)
                };
                d.push(b);
              } else br(y) && y.forEach((b, _) => {
                p.push({
                  nestedArrIndex: _,
                  value: b
                });
              });
          }
          s.$[u] = d;
        } else if (Xn(f) && !$f(f)) {
          let d = {
            v: f,
            n: this.norm.get(f)
          };
          s.$[u] = d;
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
function r0(n, r, { getFn: i = we.getFn, fieldNormWeight: s = we.fieldNormWeight } = {}) {
  const o = new qh({ getFn: i, fieldNormWeight: s });
  return o.setKeys(n.map(n0)), o.setSources(r), o.create(), o;
}
function Lb(n, { getFn: r = we.getFn, fieldNormWeight: i = we.fieldNormWeight } = {}) {
  const { keys: s, records: o } = n, u = new qh({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function So(n, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = we.distance,
  ignoreLocation: u = we.ignoreLocation
} = {}) {
  const f = r / n.length;
  if (u)
    return f;
  const d = Math.abs(s - i);
  return o ? f + d / o : d ? 1 : f;
}
function Pb(n = [], r = we.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let f = n.length; u < f; u += 1) {
    let d = n[u];
    d && s === -1 ? s = u : !d && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return n[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Oa = 32;
function Bb(n, r, i, {
  location: s = we.location,
  distance: o = we.distance,
  threshold: u = we.threshold,
  findAllMatches: f = we.findAllMatches,
  minMatchCharLength: d = we.minMatchCharLength,
  includeMatches: p = we.includeMatches,
  ignoreLocation: g = we.ignoreLocation
} = {}) {
  if (r.length > Oa)
    throw new Error(wb(Oa));
  const y = r.length, b = n.length, _ = Math.max(0, Math.min(s, b));
  let v = u, h = _;
  const S = d > 1 || p, E = S ? Array(b) : [];
  let O;
  for (; (O = n.indexOf(r, h)) > -1; ) {
    let k = So(r, {
      currentLocation: O,
      expectedLocation: _,
      distance: o,
      ignoreLocation: g
    });
    if (v = Math.min(k, v), h = O + y, S) {
      let I = 0;
      for (; I < y; )
        E[O + I] = 1, I += 1;
    }
  }
  h = -1;
  let w = [], D = 1, x = y + b;
  const T = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let I = 0, V = x;
    for (; I < V; )
      So(r, {
        errors: k,
        currentLocation: _ + V,
        expectedLocation: _,
        distance: o,
        ignoreLocation: g
      }) <= v ? I = V : x = V, V = Math.floor((x - I) / 2 + I);
    x = V;
    let B = Math.max(1, _ - V + 1), Y = f ? b : Math.min(_ + V, b) + y, $ = Array(Y + 2);
    $[Y + 1] = (1 << k) - 1;
    for (let fe = Y; fe >= B; fe -= 1) {
      let ge = fe - 1, U = i[n.charAt(ge)];
      if (S && (E[ge] = +!!U), $[fe] = ($[fe + 1] << 1 | 1) & U, k && ($[fe] |= (w[fe + 1] | w[fe]) << 1 | 1 | w[fe + 1]), $[fe] & T && (D = So(r, {
        errors: k,
        currentLocation: ge,
        expectedLocation: _,
        distance: o,
        ignoreLocation: g
      }), D <= v)) {
        if (v = D, h = ge, h <= _)
          break;
        B = Math.max(1, 2 * _ - h);
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
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (S) {
    const k = Pb(E, d);
    k.length ? p && (M.indices = k) : M.isMatch = !1;
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
class a0 {
  constructor(r, {
    location: i = we.location,
    threshold: s = we.threshold,
    distance: o = we.distance,
    includeMatches: u = we.includeMatches,
    findAllMatches: f = we.findAllMatches,
    minMatchCharLength: d = we.minMatchCharLength,
    isCaseSensitive: p = we.isCaseSensitive,
    ignoreDiacritics: g = we.ignoreDiacritics,
    ignoreLocation: y = we.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: d,
      isCaseSensitive: p,
      ignoreDiacritics: g,
      ignoreLocation: y
    }, r = p ? r : r.toLowerCase(), r = g ? du(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const b = (v, h) => {
      this.chunks.push({
        pattern: v,
        alphabet: Ib(v),
        startIndex: h
      });
    }, _ = this.pattern.length;
    if (_ > Oa) {
      let v = 0;
      const h = _ % Oa, S = _ - h;
      for (; v < S; )
        b(this.pattern.substr(v, Oa), v), v += Oa;
      if (h) {
        const E = _ - Oa;
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
      threshold: d,
      findAllMatches: p,
      minMatchCharLength: g,
      ignoreLocation: y
    } = this.options;
    let b = [], _ = 0, v = !1;
    this.chunks.forEach(({ pattern: S, alphabet: E, startIndex: O }) => {
      const { isMatch: w, score: D, indices: x } = Bb(r, S, E, {
        location: u + O,
        distance: f,
        threshold: d,
        findAllMatches: p,
        minMatchCharLength: g,
        includeMatches: o,
        ignoreLocation: y
      });
      w && (v = !0), _ += D, w && x && (b = [...b, ...x]);
    });
    let h = {
      isMatch: v,
      score: v ? _ / this.chunks.length : 1
    };
    return v && o && (h.indices = b), h;
  }
}
class ea {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return fv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return fv(r, this.singleRegex);
  }
  search() {
  }
}
function fv(n, r) {
  const i = n.match(r);
  return i ? i[1] : null;
}
class Ub extends ea {
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
class Hb extends ea {
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
class qb extends ea {
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
class Zb extends ea {
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
class Fb extends ea {
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
class Gb extends ea {
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
class i0 extends ea {
  constructor(r, {
    location: i = we.location,
    threshold: s = we.threshold,
    distance: o = we.distance,
    includeMatches: u = we.includeMatches,
    findAllMatches: f = we.findAllMatches,
    minMatchCharLength: d = we.minMatchCharLength,
    isCaseSensitive: p = we.isCaseSensitive,
    ignoreDiacritics: g = we.ignoreDiacritics,
    ignoreLocation: y = we.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new a0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: d,
      isCaseSensitive: p,
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
class s0 extends ea {
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
const bh = [
  Ub,
  s0,
  qb,
  Zb,
  Gb,
  Fb,
  Hb,
  i0
], hv = bh.length, Vb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Yb = "|";
function Xb(n, r = {}) {
  return n.split(Yb).map((i) => {
    let s = i.trim().split(Vb).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const d = s[u];
      let p = !1, g = -1;
      for (; !p && ++g < hv; ) {
        const y = bh[g];
        let b = y.isMultiMatch(d);
        b && (o.push(new y(b, r)), p = !0);
      }
      if (!p)
        for (g = -1; ++g < hv; ) {
          const y = bh[g];
          let b = y.isSingleMatch(d);
          if (b) {
            o.push(new y(b, r));
            break;
          }
        }
    }
    return o;
  });
}
const $b = /* @__PURE__ */ new Set([i0.type, s0.type]);
class Qb {
  constructor(r, {
    isCaseSensitive: i = we.isCaseSensitive,
    ignoreDiacritics: s = we.ignoreDiacritics,
    includeMatches: o = we.includeMatches,
    minMatchCharLength: u = we.minMatchCharLength,
    ignoreLocation: f = we.ignoreLocation,
    findAllMatches: d = we.findAllMatches,
    location: p = we.location,
    threshold: g = we.threshold,
    distance: y = we.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: d,
      ignoreLocation: f,
      location: p,
      threshold: g,
      distance: y
    }, r = i ? r : r.toLowerCase(), r = s ? du(r) : r, this.pattern = r, this.query = Xb(this.pattern, this.options);
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
    let f = 0, d = [], p = 0;
    for (let g = 0, y = i.length; g < y; g += 1) {
      const b = i[g];
      d.length = 0, f = 0;
      for (let _ = 0, v = b.length; _ < v; _ += 1) {
        const h = b[_], { isMatch: S, indices: E, score: O } = h.search(r);
        if (S) {
          if (f += 1, p += O, s) {
            const w = h.constructor.type;
            $b.has(w) ? d = [...d, ...E] : d.push(E);
          }
        } else {
          p = 0, f = 0, d.length = 0;
          break;
        }
      }
      if (f) {
        let _ = {
          isMatch: !0,
          score: p / f
        };
        return s && (_.indices = d), _;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Sh = [];
function Kb(...n) {
  Sh.push(...n);
}
function Eh(n, r) {
  for (let i = 0, s = Sh.length; i < s; i += 1) {
    let o = Sh[i];
    if (o.condition(n, r))
      return new o(n, r);
  }
  return new a0(n, r);
}
const pu = {
  AND: "$and",
  OR: "$or"
}, xh = {
  PATH: "$path",
  PATTERN: "$val"
}, Ch = (n) => !!(n[pu.AND] || n[pu.OR]), Jb = (n) => !!n[xh.PATH], Wb = (n) => !br(n) && e0(n) && !Ch(n), dv = (n) => ({
  [pu.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function l0(n, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const f = Jb(o);
    if (!f && u.length > 1 && !Ch(o))
      return s(dv(o));
    if (Wb(o)) {
      const p = f ? o[xh.PATH] : u[0], g = f ? o[xh.PATTERN] : o[p];
      if (!Xn(g))
        throw new Error(Cb(p));
      const y = {
        keyId: _h(p),
        pattern: g
      };
      return i && (y.searcher = Eh(g, r)), y;
    }
    let d = {
      children: [],
      operator: u[0]
    };
    return u.forEach((p) => {
      const g = o[p];
      br(g) && g.forEach((y) => {
        d.children.push(s(y));
      });
    }), d;
  };
  return Ch(n) || (n = dv(n)), s(n);
}
function eS(n, { ignoreFieldNorm: r = we.ignoreFieldNorm }) {
  n.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: o, norm: u, score: f }) => {
      const d = o ? o.weight : null;
      s *= Math.pow(
        f === 0 && d ? Number.EPSILON : f,
        (d || 1) * (r ? 1 : u)
      );
    }), i.score = s;
  });
}
function tS(n, r) {
  const i = n.matches;
  r.matches = [], pn(i) && i.forEach((s) => {
    if (!pn(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: u } = s;
    let f = {
      indices: o,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function nS(n, r) {
  r.score = n.score;
}
function rS(n, r, {
  includeMatches: i = we.includeMatches,
  includeScore: s = we.includeScore
} = {}) {
  const o = [];
  return i && o.push(tS), s && o.push(nS), n.map((u) => {
    const { idx: f } = u, d = {
      item: r[f],
      refIndex: f
    };
    return o.length && o.forEach((p) => {
      p(u, d);
    }), d;
  });
}
class Pi {
  constructor(r, i = {}, s) {
    this.options = { ...we, ...i }, this.options.useExtendedSearch, this._keyStore = new Ob(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof qh))
      throw new Error(xb);
    this._myIndex = i || r0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    pn(r) && (this._docs.push(r), this._myIndex.add(r));
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
      ignoreFieldNorm: d
    } = this.options;
    let p = Xn(r) ? Xn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return eS(p, { ignoreFieldNorm: d }), u && p.sort(f), Wy(i) && i > -1 && (p = p.slice(0, i)), rS(p, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = Eh(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: f, n: d }) => {
      if (!pn(u))
        return;
      const { isMatch: p, score: g, indices: y } = i.searchIn(u);
      p && o.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: d, indices: y }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = l0(r, this.options), s = (d, p, g) => {
      if (!d.children) {
        const { keyId: b, searcher: _ } = d, v = this._findMatches({
          key: this._keyStore.get(b),
          value: this._myIndex.getValueForItemAtKeyId(p, b),
          searcher: _
        });
        return v && v.length ? [
          {
            idx: g,
            item: p,
            matches: v
          }
        ] : [];
      }
      const y = [];
      for (let b = 0, _ = d.children.length; b < _; b += 1) {
        const v = d.children[b], h = s(v, p, g);
        if (h.length)
          y.push(...h);
        else if (d.operator === pu.AND)
          return [];
      }
      return y;
    }, o = this._myIndex.records, u = {}, f = [];
    return o.forEach(({ $: d, i: p }) => {
      if (pn(d)) {
        let g = s(i, d, p);
        g.length && (u[p] || (u[p] = { idx: p, item: d, matches: [] }, f.push(u[p])), g.forEach(({ matches: y }) => {
          u[p].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = Eh(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: f, i: d }) => {
      if (!pn(f))
        return;
      let p = [];
      s.forEach((g, y) => {
        p.push(
          ...this._findMatches({
            key: g,
            value: f[y],
            searcher: i
          })
        );
      }), p.length && u.push({
        idx: d,
        item: f,
        matches: p
      });
    }), u;
  }
  _findMatches({ key: r, value: i, searcher: s }) {
    if (!pn(i))
      return [];
    let o = [];
    if (br(i))
      i.forEach(({ v: u, i: f, n: d }) => {
        if (!pn(u))
          return;
        const { isMatch: p, score: g, indices: y } = s.searchIn(u);
        p && o.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: d,
          indices: y
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: d, score: p, indices: g } = s.searchIn(u);
      d && o.push({ score: p, key: r, value: u, norm: f, indices: g });
    }
    return o;
  }
}
Pi.version = "7.1.0";
Pi.createIndex = r0;
Pi.parseIndex = Lb;
Pi.config = we;
Pi.parseQuery = l0;
Kb(Qb);
var aS = Object.defineProperty, iS = (n, r, i) => r in n ? aS(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, sS = (n, r, i) => iS(n, r + "", i);
let lS = class {
  constructor() {
    sS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
        const d = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        i != null && i.onStart && await i.onStart(u);
        let p;
        for await (const g of d())
          p = g, i != null && i.onEntry && await i.onEntry(u, g);
        i != null && i.onFinish && await i.onFinish(u, p);
      } catch (d) {
        i != null && i.onFinish && await i.onFinish(u, void 0, d);
      } finally {
        this.requestMap.delete(u);
      }
    else
      try {
        i != null && i.onStart && await i.onStart(u);
        const d = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(u) && (i != null && i.onEntry && await i.onEntry(u, d), i != null && i.onFinish && await i.onFinish(u, d));
      } catch (d) {
        i != null && i.onFinish && await i.onFinish(u, void 0, d);
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
async function oS(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function Ne(n, r, { escapeHtml: i = !0 } = {}) {
  await oS("echo", { severity: n, escapeHtml: (!!i).toString() }, r);
}
function Qf(n) {
  return I_(n);
}
function pv(n, r) {
  return P_(n, r);
}
function Eo(n, r, i) {
  return B_(n, r, i);
}
function uS(n, r, i) {
  return G_(n, r, i);
}
function cS(n, r) {
  return V_(n, r);
}
function fS(n, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return L_(n, { customStoryString: r, customInstructSettings: i });
}
function xa(n) {
  return J_(n);
}
function hS() {
  return {
    prompt: Rs[js.prompt],
    interval: Rs[js.interval],
    position: Rs[js.position],
    depth: Rs[js.depth],
    role: Rs[js.role]
  };
}
function dS(n, r) {
  return eb(n, r);
}
function pS({
  name2: n,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: o,
  worldInfoAfter: u,
  bias: f,
  type: d,
  quietPrompt: p,
  quietImage: g,
  extensionPrompts: y,
  cyclePrompt: b,
  systemPromptOverride: _,
  jailbreakPromptOverride: v,
  personaDescription: h,
  messages: S,
  messageExamples: E
}, O) {
  return W_(
    {
      name2: n,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: o,
      worldInfoAfter: u,
      bias: f,
      type: d,
      quietPrompt: p,
      quietImage: g,
      cyclePrompt: b,
      systemPromptOverride: _,
      jailbreakPromptOverride: v,
      personaDescription: h,
      extensionPrompts: y,
      messages: S,
      messageExamples: E
    },
    O
  );
}
function mS(n) {
  return X_(n);
}
function gS(n) {
  return $_(n);
}
function vS(n, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: f
}) {
  return tb(n, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: u, depth: f });
}
async function yS(n, r) {
  return await Y_(n, r);
}
function mv(n, {
  wiFormat: r
} = {}) {
  return Q_(n, { wiFormat: r });
}
function Ps(n) {
  return K_(n);
}
function _S(n, r) {
  return q_(n, r);
}
class bS {
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
var SS = Object.defineProperty, ES = (n, r, i) => r in n ? SS(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[r] = i, xo = (n, r, i) => ES(n, typeof r != "symbol" ? r + "" : r, i);
class xS {
  constructor(r) {
    xo(this, "messages", []), xo(this, "tokenizer"), xo(this, "maxContext"), xo(this, "currentTokenCount", 0), this.tokenizer = new bS(), this.maxContext = r;
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
    const i = r.filter((d) => d.content), s = i.map((d) => this.getTokenCount(d)), o = s.reduce((d, p) => d + p, 0);
    if (this.currentTokenCount + o <= this.maxContext)
      return this.messages.push(...i), this.currentTokenCount += o, !0;
    let u = 0;
    const f = [];
    for (let d = i.length - 1; d >= 0; d--) {
      const p = i[d], g = s[d];
      if (this.currentTokenCount + u + g <= this.maxContext)
        f.unshift(p), u += g;
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
async function o0(n, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: f,
  includeNames: d,
  ignoreCharacterFields: p,
  ignoreAuthorNote: g,
  ignoreWorldInfo: y,
  messageIndexesBetween: b
} = {}) {
  var _, v, h, S, E, O, w, D, x, T, M, k, I, V;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const B = SillyTavern.getContext();
  let { description: Y, personality: $, persona: le, scenario: fe, mesExamples: ge, system: U, jailbreak: te } = p ? {
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
  const ue = n === "textgenerationwebui" ? (_ = B.getPresetManager("instruct")) == null ? void 0 : _.getCompletionPresetByName(s) : void 0, De = !!(ue != null && ue.enabled);
  let j = pv(ge, De);
  function J() {
    var oe, de;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return Qf();
    if (typeof f == "number")
      return f;
    let Ze;
    if (n === "textgenerationwebui") {
      const He = (oe = B.getPresetManager("textgenerationwebui")) == null ? void 0 : oe.getCompletionPresetByName(i);
      Ze = He?.max_length;
    } else {
      const He = (de = B.getPresetManager("openai")) == null ? void 0 : de.getCompletionPresetByName(i);
      Ze = He?.openai_max_context;
    }
    return typeof Ze == "number" ? Ze : Qf();
  }
  let ae = [];
  const se = J();
  if (se <= 0)
    return { result: [], warnings: ae };
  const G = new xS(se), pe = B.ToolManager.isToolCallingSupported(), he = b?.start ?? 0, qe = b != null && b.end ? b.end + 1 : void 0;
  let Ae = he === -1 && qe === 0 ? [] : B.chat.slice(he, qe).filter((oe) => {
    var de;
    return !oe.is_system || pe && Array.isArray((de = oe.extra) == null ? void 0 : de.tool_invocations);
  });
  Ae = await Promise.all(
    Ae.map(async (oe, de) => {
      var Ze, He;
      let nt = oe.mes, xr = oe.is_user ? Xg.USER_INPUT : Xg.AI_OUTPUT, Kn = { isPrompt: !0, depth: Ae.length - de - 1 }, dt = vS(nt, xr, Kn);
      return dt = await yS(oe, dt), (Ze = oe?.extra) != null && Ze.append_title && (He = oe?.extra) != null && He.title && (dt = `${dt}

${oe.extra.title}`), {
        ...oe,
        mes: dt,
        index: de
      };
    })
  );
  const Ve = Ae.map((oe) => Z_ ? `${oe.name}: ${oe.mes}` : oe.mes).reverse(), { worldInfoString: q, worldInfoBefore: ne, worldInfoAfter: re, worldInfoExamples: Se, worldInfoDepth: Je, anBefore: Ie, anAfter: tt } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await B.getWorldInfoPrompt(Ve, se, !1);
  for (const oe of Se) {
    const de = oe.content;
    if (de.length === 0)
      continue;
    const Ze = Eo(de, gr, Yr), He = pv(Ze, De);
    oe.position === F_.before ? j.unshift(...He) : j.push(...He);
  }
  function st() {
    const oe = [];
    for (let de = Ae.length - 1; de >= 0; de--) {
      const Ze = Ae[de], He = Ze.name === "System" && !Ze.is_user ? "system" : Ze.is_user ? "user" : "assistant";
      oe.unshift({
        role: He,
        content: d && He != "system" ? `${Ze.name}: ${Ze.mes}` : Ze.mes,
        source: Ze
      });
    }
    G.addMany(oe);
  }
  if (n === "textgenerationwebui") {
    const oe = [...j];
    j && (j = uS(j, gr, Yr));
    const de = (v = B.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    de && (U = B.powerUserSettings.prefer_character_prompt && U ? U : Eo(de.content, gr, Yr), U = De ? cS(
      B.substituteParams(U, gr, Yr, de.content),
      ue
    ) : U);
    const Ze = {
      description: Y,
      personality: $,
      persona: B.powerUserSettings.persona_description_position == Vg.IN_PROMPT ? le : "",
      scenario: fe,
      system: U,
      char: Yr,
      user: gr,
      wiBefore: ne,
      wiAfter: re,
      loreBefore: ne,
      loreAfter: re,
      mesExamples: j.join(""),
      mesExamplesRaw: oe.join("")
    }, He = (h = B.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(o);
    let nt = fS(Ze, {
      customInstructSettings: ue,
      customStoryString: He?.story_string
    });
    nt && G.add({ role: "system", content: nt, ignoreInstruct: !0 }), st();
  } else {
    let oe = function(Ht) {
      const Gt = gn.find((Pa) => Pa.identifier === Ht);
      if (Gt)
        return Gt;
      const ul = nt.prompts.find((Pa) => Pa.identifier === Ht);
      if (ul)
        return ul;
    }, de = mS(Ae), Ze = gS(j);
    async function He() {
      let [Ht, Gt] = await pS(
        {
          name2: Yr,
          charDescription: Y,
          charPersonality: $,
          Scenario: fe,
          worldInfoBefore: ne,
          worldInfoAfter: re,
          extensionPrompts: B.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: te,
          personaDescription: le,
          messages: de,
          messageExamples: Ze
        },
        !1
      );
      G.addMany(Ht);
    }
    if (!i)
      return ae.push("No preset name provided. Using default preset."), await He(), { result: G.getMessages(), warnings: ae };
    const nt = (S = B.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(i);
    if (!nt)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ae.push(`Preset not found: ${i}. Using current preset.`), He(), { result: G.getMessages(), warnings: ae };
    let xr = (E = nt.prompt_order) == null ? void 0 : E.find((Ht) => Ht.character_id === Pn);
    if (!xr && nt.prompt_order && nt.prompt_order.length > 0 && (xr = nt.prompt_order[0]), !xr)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ae.push(`No prompt order found for preset: ${i}. Using current preset.`), He(), { result: G.getMessages(), warnings: ae };
    const Kn = fe && nt.scenario_format ? B.substituteParams(nt.scenario_format) : "", dt = $ && nt.personality_format ? B.substituteParams(nt.personality_format) : "", Un = B.substituteParams(nt.group_nudge_prompt), Ut = nt.impersonation_prompt ? B.substituteParams(nt.impersonation_prompt) : "", gn = [];
    y || gn.push(
      {
        role: "system",
        content: mv(ne, { wiFormat: nt.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: mv(re, { wiFormat: nt.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || gn.push(
      { role: "system", content: Y, identifier: "charDescription" },
      { role: "system", content: dt, identifier: "charPersonality" },
      { role: "system", content: Kn, identifier: "scenario" }
    ), gn.push(
      { role: "system", content: Ut, identifier: "impersonate" },
      { role: "system", content: Un, identifier: "groupNudge" }
    );
    const ra = B.extensionPrompts["1_memory"];
    ra && ra.value && gn.push({
      role: xa(ra.role),
      content: ra.value,
      identifier: "summary",
      position: Ps(ra.position)
    });
    const aa = B.extensionPrompts["2_floating_prompt"];
    !g && aa && aa.value && gn.push({
      role: xa(aa.role),
      content: aa.value,
      identifier: "authorsNote",
      position: Ps(aa.position)
    });
    const Jn = B.extensionPrompts["3_vectors"];
    Jn && Jn.value && gn.push({
      role: "system",
      content: Jn.value,
      identifier: "vectorsMemory",
      position: Ps(Jn.position)
    });
    const Hn = B.extensionPrompts["4_vectors_data_bank"];
    Hn && Hn.value && gn.push({
      role: xa(Hn.role),
      content: Hn.value,
      identifier: "vectorsDataBank",
      position: Ps(Hn.position)
    });
    const vn = B.extensionPrompts.chromadb;
    vn && vn.value && gn.push({
      role: "system",
      content: vn.value,
      identifier: "smartContext",
      position: Ps(vn.position)
    }), !p && B.powerUserSettings.persona_description && B.powerUserSettings.persona_description_position === Vg.IN_PROMPT && gn.push({
      role: "system",
      content: B.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), xr.order.forEach((Ht) => {
      if (!Ht.enabled)
        return;
      const Gt = oe(Ht.identifier);
      if (Gt && Gt.content) {
        G.add({
          role: Gt.role ?? "system",
          content: B.substituteParams(Gt.content)
        });
        return;
      }
      Ht.identifier === "chatHistory" && st();
    });
  }
  const In = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const oe in B.extensionPrompts)
    if (Object.hasOwn(B.extensionPrompts, oe)) {
      const de = B.extensionPrompts[oe];
      if (In.includes(oe) || !B.extensionPrompts[oe].value || ![Ea.BEFORE_PROMPT, Ea.IN_PROMPT].includes(de.position) || typeof de.filter == "function" && !await de.filter()) continue;
      const Ze = {
        role: xa(de.role) ?? "system",
        content: de.value
      };
      if (de.position === Ea.BEFORE_PROMPT)
        G.insert(de.depth, Ze);
      else if (de.position === Ea.IN_PROMPT) {
        const He = G.getMessages();
        G.insert(He.length - de.depth, Ze);
      }
    }
  for (const oe of Je) {
    const de = G.getMessages();
    G.insert(de.length - oe.depth, {
      role: xa(oe.role),
      content: oe.entries.join(`
`)
    });
  }
  if (!p) {
    const oe = dS(Ma, Number(Pn));
    if (Ma && Array.isArray(oe) && oe.length > 0)
      oe.filter((de) => de.text).forEach((de, Ze) => {
        const He = G.getMessages();
        G.insert(He.length - de.depth, { role: de.role, content: de.text });
      });
    else {
      const de = Eo(
        (T = (x = (D = (w = (O = B.characters[Pn]) == null ? void 0 : O.data) == null ? void 0 : w.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : x.prompt) == null ? void 0 : T.trim(),
        gr,
        Yr
      ) || "";
      if (de) {
        const Ze = H_, He = ((V = (I = (k = (M = B.characters[Pn]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : I.depth_prompt) == null ? void 0 : V.role) ?? U_, nt = G.getMessages();
        G.insert(nt.length - Ze, {
          role: xa(He),
          content: de
        });
      }
    }
  }
  let It = -1;
  if (!g) {
    const oe = hS();
    if (oe.prompt) {
      oe.prompt = Eo(oe.prompt, gr, Yr);
      const de = { role: xa(oe.role), content: oe.prompt };
      switch (oe.position) {
        case Ea.IN_PROMPT:
          G.insert(1, de), It = 1;
          break;
        case Ea.IN_CHAT:
          It = G.getMessages().length - oe.depth, G.insert(It, de);
          break;
        case Ea.BEFORE_PROMPT:
          G.addFront(de), It = 0;
          break;
      }
    }
  }
  return It >= 0 && (Ie.length > 0 && (G.insert(It, { role: "system", content: Ie.join(`
`) }), It++), tt.length > 0 && G.insert(It + 1, { role: "system", content: tt.join(`
`) })), { result: G.getMessages(), warnings: ae };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function gv(n, r) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function Qn(n) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? gv(Object(i), !0).forEach(function(s) {
      CS(n, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : gv(Object(i)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return n;
}
function lu(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lu = function(r) {
    return typeof r;
  } : lu = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, lu(n);
}
function CS(n, r, i) {
  return r in n ? Object.defineProperty(n, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = i, n;
}
function Sr() {
  return Sr = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
    }
    return n;
  }, Sr.apply(this, arguments);
}
function wS(n, r) {
  if (n == null) return {};
  var i = {}, s = Object.keys(n), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (i[o] = n[o]);
  return i;
}
function AS(n, r) {
  if (n == null) return {};
  var i = wS(n, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (i[s] = n[s]);
  }
  return i;
}
var TS = "1.15.6";
function _r(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Er = _r(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), al = _r(/Edge/i), vv = _r(/firefox/i), Qs = _r(/safari/i) && !_r(/chrome/i) && !_r(/android/i), Zh = _r(/iP(ad|od|hone)/i), u0 = _r(/chrome/i) && _r(/android/i), c0 = {
  capture: !1,
  passive: !1
};
function Le(n, r, i) {
  n.addEventListener(r, i, !Er && c0);
}
function ze(n, r, i) {
  n.removeEventListener(r, i, !Er && c0);
}
function mu(n, r) {
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
function f0(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Ln(n, r, i, s) {
  if (n) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === i && mu(n, r) : mu(n, r)) || s && n === i)
        return n;
      if (n === i) break;
    } while (n = f0(n));
  }
  return null;
}
var yv = /\s+/g;
function hn(n, r, i) {
  if (n && r)
    if (n.classList)
      n.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + n.className + " ").replace(yv, " ").replace(" " + r + " ", " ");
      n.className = (s + (i ? " " + r : "")).replace(yv, " ");
    }
}
function xe(n, r, i) {
  var s = n && n.style;
  if (s) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (i = n.currentStyle), r === void 0 ? i : i[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function ki(n, r) {
  var i = "";
  if (typeof n == "string")
    i = n;
  else
    do {
      var s = xe(n, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (n = n.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function h0(n, r, i) {
  if (n) {
    var s = n.getElementsByTagName(r), o = 0, u = s.length;
    if (i)
      for (; o < u; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function $n() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function St(n, r, i, s, o) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var u, f, d, p, g, y, b;
    if (n !== window && n.parentNode && n !== $n() ? (u = n.getBoundingClientRect(), f = u.top, d = u.left, p = u.bottom, g = u.right, y = u.height, b = u.width) : (f = 0, d = 0, p = window.innerHeight, g = window.innerWidth, y = window.innerHeight, b = window.innerWidth), (r || i) && n !== window && (o = o || n.parentNode, !Er))
      do
        if (o && o.getBoundingClientRect && (xe(o, "transform") !== "none" || i && xe(o, "position") !== "static")) {
          var _ = o.getBoundingClientRect();
          f -= _.top + parseInt(xe(o, "border-top-width")), d -= _.left + parseInt(xe(o, "border-left-width")), p = f + u.height, g = d + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && n !== window) {
      var v = ki(o || n), h = v && v.a, S = v && v.d;
      v && (f /= S, d /= h, b /= h, y /= S, p = f + y, g = d + b);
    }
    return {
      top: f,
      left: d,
      bottom: p,
      right: g,
      width: b,
      height: y
    };
  }
}
function _v(n, r, i) {
  for (var s = Jr(n, !0), o = St(n)[r]; s; ) {
    var u = St(s)[i], f = void 0;
    if (f = o >= u, !f) return s;
    if (s === $n()) break;
    s = Jr(s, !1);
  }
  return !1;
}
function zi(n, r, i, s) {
  for (var o = 0, u = 0, f = n.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== Ce.ghost && (s || f[u] !== Ce.dragged) && Ln(f[u], i.draggable, n, !1)) {
      if (o === r)
        return f[u];
      o++;
    }
    u++;
  }
  return null;
}
function Fh(n, r) {
  for (var i = n.lastElementChild; i && (i === Ce.ghost || xe(i, "display") === "none" || r && !mu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function On(n, r) {
  var i = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== Ce.clone && (!r || mu(n, r)) && i++;
  return i;
}
function bv(n) {
  var r = 0, i = 0, s = $n();
  if (n)
    do {
      var o = ki(n), u = o.a, f = o.d;
      r += n.scrollLeft * u, i += n.scrollTop * f;
    } while (n !== s && (n = n.parentNode));
  return [r, i];
}
function OS(n, r) {
  for (var i in n)
    if (n.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === n[i][s]) return Number(i);
    }
  return -1;
}
function Jr(n, r) {
  if (!n || !n.getBoundingClientRect) return $n();
  var i = n, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = xe(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return $n();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return $n();
}
function NS(n, r) {
  if (n && r)
    for (var i in r)
      r.hasOwnProperty(i) && (n[i] = r[i]);
  return n;
}
function Kf(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Ks;
function d0(n, r) {
  return function() {
    if (!Ks) {
      var i = arguments, s = this;
      i.length === 1 ? n.call(s, i[0]) : n.apply(s, i), Ks = setTimeout(function() {
        Ks = void 0;
      }, r);
    }
  };
}
function DS() {
  clearTimeout(Ks), Ks = void 0;
}
function p0(n, r, i) {
  n.scrollLeft += r, n.scrollTop += i;
}
function m0(n) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : i ? i(n).clone(!0)[0] : n.cloneNode(!0);
}
function g0(n, r, i) {
  var s = {};
  return Array.from(n.children).forEach(function(o) {
    var u, f, d, p;
    if (!(!Ln(o, r.draggable, n, !1) || o.animated || o === i)) {
      var g = St(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((d = s.right) !== null && d !== void 0 ? d : -1 / 0, g.right), s.bottom = Math.max((p = s.bottom) !== null && p !== void 0 ? p : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var en = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function MS() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(xe(o, "display") === "none" || o === Ce.ghost)) {
            n.push({
              target: o,
              rect: St(o)
            });
            var u = Qn({}, n[n.length - 1].rect);
            if (o.thisAnimationDuration) {
              var f = ki(o, !0);
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
      n.splice(OS(n, {
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
      n.forEach(function(d) {
        var p = 0, g = d.target, y = g.fromRect, b = St(g), _ = g.prevFromRect, v = g.prevToRect, h = d.rect, S = ki(g, !0);
        S && (b.top -= S.f, b.left -= S.e), g.toRect = b, g.thisAnimationDuration && Kf(_, b) && !Kf(y, b) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - b.top) / (h.left - b.left) === (y.top - b.top) / (y.left - b.left) && (p = RS(h, _, v, o.options)), Kf(b, y) || (g.prevFromRect = y, g.prevToRect = b, p || (p = o.options.animation), o.animate(g, h, b, p)), p && (u = !0, f = Math.max(f, p), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, p), g.thisAnimationDuration = p);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), n = [];
    },
    animate: function(s, o, u, f) {
      if (f) {
        xe(s, "transition", ""), xe(s, "transform", "");
        var d = ki(this.el), p = d && d.a, g = d && d.d, y = (o.left - u.left) / (p || 1), b = (o.top - u.top) / (g || 1);
        s.animatingX = !!y, s.animatingY = !!b, xe(s, "transform", "translate3d(" + y + "px," + b + "px,0)"), this.forRepaintDummy = kS(s), xe(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          xe(s, "transition", ""), xe(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function kS(n) {
  return n.offsetWidth;
}
function RS(n, r, i, s) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var Ci = [], Jf = {
  initializeByDefault: !0
}, il = {
  mount: function(r) {
    for (var i in Jf)
      Jf.hasOwnProperty(i) && !(i in r) && (r[i] = Jf[i]);
    Ci.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ci.push(r);
  },
  pluginEvent: function(r, i, s) {
    var o = this;
    this.eventCanceled = !1, s.cancel = function() {
      o.eventCanceled = !0;
    };
    var u = r + "Global";
    Ci.forEach(function(f) {
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](Qn({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](Qn({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    Ci.forEach(function(d) {
      var p = d.pluginName;
      if (!(!r.options[p] && !d.initializeByDefault)) {
        var g = new d(r, i, r.options);
        g.sortable = r, g.options = r.options, r[p] = g, Sr(s, g.defaults);
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
    return Ci.forEach(function(o) {
      typeof o.eventProperties == "function" && Sr(s, o.eventProperties.call(i[o.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var o;
    return Ci.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (o = u.optionListeners[i].call(r[u.pluginName], s));
    }), o;
  }
};
function jS(n) {
  var r = n.sortable, i = n.rootEl, s = n.name, o = n.targetEl, u = n.cloneEl, f = n.toEl, d = n.fromEl, p = n.oldIndex, g = n.newIndex, y = n.oldDraggableIndex, b = n.newDraggableIndex, _ = n.originalEvent, v = n.putSortable, h = n.extraEventProperties;
  if (r = r || i && i[en], !!r) {
    var S, E = r.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Er && !al ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = f || i, S.from = d || i, S.item = o || i, S.clone = u, S.oldIndex = p, S.newIndex = g, S.oldDraggableIndex = y, S.newDraggableIndex = b, S.originalEvent = _, S.pullMode = v ? v.lastPutMode : void 0;
    var w = Qn(Qn({}, h), il.getEventProperties(s, r));
    for (var D in w)
      S[D] = w[D];
    i && i.dispatchEvent(S), E[O] && E[O].call(r, S);
  }
}
var zS = ["evt"], Kt = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = AS(s, zS);
  il.pluginEvent.bind(Ce)(r, i, Qn({
    dragEl: ie,
    parentEl: ht,
    ghostEl: Te,
    rootEl: at,
    nextEl: Aa,
    lastDownEl: ou,
    cloneEl: ot,
    cloneHidden: Kr,
    dragStarted: Vs,
    putSortable: Rt,
    activeSortable: Ce.active,
    originalEvent: o,
    oldIndex: Di,
    oldDraggableIndex: Js,
    newIndex: dn,
    newDraggableIndex: Qr,
    hideGhostForTarget: b0,
    unhideGhostForTarget: S0,
    cloneNowHidden: function() {
      Kr = !0;
    },
    cloneNowShown: function() {
      Kr = !1;
    },
    dispatchSortableEvent: function(d) {
      Zt({
        sortable: i,
        name: d,
        originalEvent: o
      });
    }
  }, u));
};
function Zt(n) {
  jS(Qn({
    putSortable: Rt,
    cloneEl: ot,
    targetEl: ie,
    rootEl: at,
    oldIndex: Di,
    oldDraggableIndex: Js,
    newIndex: dn,
    newDraggableIndex: Qr
  }, n));
}
var ie, ht, Te, at, Aa, ou, ot, Kr, Di, dn, Js, Qr, Co, Rt, Ni = !1, gu = !1, vu = [], Ca, jn, Wf, eh, Sv, Ev, Vs, wi, Ws, el = !1, wo = !1, uu, Pt, th = [], wh = !1, yu = [], Au = typeof document < "u", Ao = Zh, xv = al || Er ? "cssFloat" : "float", LS = Au && !u0 && !Zh && "draggable" in document.createElement("div"), v0 = (function() {
  if (Au) {
    if (Er)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), y0 = function(r, i) {
  var s = xe(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = zi(r, 0, i), f = zi(r, 1, i), d = u && xe(u), p = f && xe(f), g = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + St(u).width, y = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + St(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && d.float && d.float !== "none") {
    var b = d.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === b) ? "vertical" : "horizontal";
  }
  return u && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || g >= o && s[xv] === "none" || f && s[xv] === "none" && g + y > o) ? "vertical" : "horizontal";
}, PS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, d = s ? i.left : i.top, p = s ? i.right : i.bottom, g = s ? i.width : i.height;
  return o === d || u === p || o + f / 2 === d + g / 2;
}, BS = function(r, i) {
  var s;
  return vu.some(function(o) {
    var u = o[en].options.emptyInsertThreshold;
    if (!(!u || Fh(o))) {
      var f = St(o), d = r >= f.left - u && r <= f.right + u, p = i >= f.top - u && i <= f.bottom + u;
      if (d && p)
        return s = o;
    }
  }), s;
}, _0 = function(r) {
  function i(u, f) {
    return function(d, p, g, y) {
      var b = d.options.group.name && p.options.group.name && d.options.group.name === p.options.group.name;
      if (u == null && (f || b))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(d, p, g, y), f)(d, p, g, y);
      var _ = (f ? d : p).options.group.name;
      return u === !0 || typeof u == "string" && u === _ || u.join && u.indexOf(_) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || lu(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, b0 = function() {
  !v0 && Te && xe(Te, "display", "none");
}, S0 = function() {
  !v0 && Te && xe(Te, "display", "");
};
Au && !u0 && document.addEventListener("click", function(n) {
  if (gu)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), gu = !1, !1;
}, !0);
var wa = function(r) {
  if (ie) {
    r = r.touches ? r.touches[0] : r;
    var i = BS(r.clientX, r.clientY);
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
function Ce(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = Sr({}, r), n[en] = this;
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
      return y0(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, d) {
      f.setData("Text", d.textContent);
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
    supportPointer: Ce.supportPointer !== !1 && "PointerEvent" in window && (!Qs || Zh),
    emptyInsertThreshold: 5
  };
  il.initializePlugins(this, n, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  _0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : LS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Le(n, "pointerdown", this._onTapStart) : (Le(n, "mousedown", this._onTapStart), Le(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Le(n, "dragover", this), Le(n, "dragenter", this)), vu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Sr(this, MS());
}
Ce.prototype = /** @lends Sortable.prototype */
{
  constructor: Ce,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (wi = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, ie) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, f = r.type, d = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (d || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, y = o.filter;
      if (YS(s), !ie && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Qs && p && p.tagName.toUpperCase() === "SELECT") && (p = Ln(p, o.draggable, s, !1), !(p && p.animated) && ou !== p)) {
        if (Di = On(p), Js = On(p, o.draggable), typeof y == "function") {
          if (y.call(this, r, p, this)) {
            Zt({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: p,
              toEl: s,
              fromEl: s
            }), Kt("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(b) {
          if (b = Ln(g, b.trim(), s, !1), b)
            return Zt({
              sortable: i,
              rootEl: b,
              name: "filter",
              targetEl: p,
              fromEl: s,
              toEl: s
            }), Kt("filter", i, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Ln(g, o.handle, s, !1) || this._prepareDragStart(r, d, p);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, f = o.options, d = u.ownerDocument, p;
    if (s && !ie && s.parentNode === u) {
      var g = St(s);
      if (at = u, ie = s, ht = ie.parentNode, Aa = ie.nextSibling, ou = s, Co = f.group, Ce.dragged = ie, Ca = {
        target: ie,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Sv = Ca.clientX - g.left, Ev = Ca.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, ie.style["will-change"] = "all", p = function() {
        if (Kt("delayEnded", o, {
          evt: r
        }), Ce.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !vv && o.nativeDraggable && (ie.draggable = !0), o._triggerDragStart(r, i), Zt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), hn(ie, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        h0(ie, y.trim(), nh);
      }), Le(d, "dragover", wa), Le(d, "mousemove", wa), Le(d, "touchmove", wa), f.supportPointer ? (Le(d, "pointerup", o._onDrop), !this.nativeDraggable && Le(d, "pointercancel", o._onDrop)) : (Le(d, "mouseup", o._onDrop), Le(d, "touchend", o._onDrop), Le(d, "touchcancel", o._onDrop)), vv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), Kt("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(al || Er))) {
        if (Ce.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Le(d, "pointerup", o._disableDelayedDrag), Le(d, "pointercancel", o._disableDelayedDrag)) : (Le(d, "mouseup", o._disableDelayedDrag), Le(d, "touchend", o._disableDelayedDrag), Le(d, "touchcancel", o._disableDelayedDrag)), Le(d, "mousemove", o._delayedDragTouchMoveHandler), Le(d, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && Le(d, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && nh(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    ze(r, "mouseup", this._disableDelayedDrag), ze(r, "touchend", this._disableDelayedDrag), ze(r, "touchcancel", this._disableDelayedDrag), ze(r, "pointerup", this._disableDelayedDrag), ze(r, "pointercancel", this._disableDelayedDrag), ze(r, "mousemove", this._delayedDragTouchMoveHandler), ze(r, "touchmove", this._delayedDragTouchMoveHandler), ze(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Le(document, "pointermove", this._onTouchMove) : i ? Le(document, "touchmove", this._onTouchMove) : Le(document, "mousemove", this._onTouchMove) : (Le(ie, "dragend", this), Le(at, "dragstart", this._onDragStart));
    try {
      document.selection ? cu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Ni = !1, at && ie) {
      Kt("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Le(document, "dragover", IS);
      var s = this.options;
      !r && hn(ie, s.dragClass, !1), hn(ie, s.ghostClass, !0), Ce.active = this, r && this._appendGhost(), Zt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (jn) {
      this._lastX = jn.clientX, this._lastY = jn.clientY, b0();
      for (var r = document.elementFromPoint(jn.clientX, jn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(jn.clientX, jn.clientY), r !== i); )
        i = r;
      if (ie.parentNode[en]._isOutsideThisEl(r), i)
        do {
          if (i[en]) {
            var s = void 0;
            if (s = i[en]._onDragOver({
              clientX: jn.clientX,
              clientY: jn.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = f0(i));
      S0();
    }
  },
  _onTouchMove: function(r) {
    if (Ca) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Te && ki(Te, !0), d = Te && f && f.a, p = Te && f && f.d, g = Ao && Pt && bv(Pt), y = (u.clientX - Ca.clientX + o.x) / (d || 1) + (g ? g[0] - th[0] : 0) / (d || 1), b = (u.clientY - Ca.clientY + o.y) / (p || 1) + (g ? g[1] - th[1] : 0) / (p || 1);
      if (!Ce.active && !Ni) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Te) {
        f ? (f.e += y - (Wf || 0), f.f += b - (eh || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: b
        };
        var _ = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        xe(Te, "webkitTransform", _), xe(Te, "mozTransform", _), xe(Te, "msTransform", _), xe(Te, "transform", _), Wf = y, eh = b, jn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Te) {
      var r = this.options.fallbackOnBody ? document.body : at, i = St(ie, !0, Ao, !0, r), s = this.options;
      if (Ao) {
        for (Pt = r; xe(Pt, "position") === "static" && xe(Pt, "transform") === "none" && Pt !== document; )
          Pt = Pt.parentNode;
        Pt !== document.body && Pt !== document.documentElement ? (Pt === document && (Pt = $n()), i.top += Pt.scrollTop, i.left += Pt.scrollLeft) : Pt = $n(), th = bv(Pt);
      }
      Te = ie.cloneNode(!0), hn(Te, s.ghostClass, !1), hn(Te, s.fallbackClass, !0), hn(Te, s.dragClass, !0), xe(Te, "transition", ""), xe(Te, "transform", ""), xe(Te, "box-sizing", "border-box"), xe(Te, "margin", 0), xe(Te, "top", i.top), xe(Te, "left", i.left), xe(Te, "width", i.width), xe(Te, "height", i.height), xe(Te, "opacity", "0.8"), xe(Te, "position", Ao ? "absolute" : "fixed"), xe(Te, "zIndex", "100000"), xe(Te, "pointerEvents", "none"), Ce.ghost = Te, r.appendChild(Te), xe(Te, "transform-origin", Sv / parseInt(Te.style.width) * 100 + "% " + Ev / parseInt(Te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (Kt("dragStart", this, {
      evt: r
    }), Ce.eventCanceled) {
      this._onDrop();
      return;
    }
    Kt("setupClone", this), Ce.eventCanceled || (ot = m0(ie), ot.removeAttribute("id"), ot.draggable = !1, ot.style["will-change"] = "", this._hideClone(), hn(ot, this.options.chosenClass, !1), Ce.clone = ot), s.cloneId = cu(function() {
      Kt("clone", s), !Ce.eventCanceled && (s.options.removeCloneOnHide || at.insertBefore(ot, ie), s._hideClone(), Zt({
        sortable: s,
        name: "clone"
      }));
    }), !i && hn(ie, u.dragClass, !0), i ? (gu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (ze(document, "mouseup", s._onDrop), ze(document, "touchend", s._onDrop), ze(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, ie)), Le(document, "drop", s), xe(ie, "transform", "translateZ(0)")), Ni = !0, s._dragStartId = cu(s._dragStarted.bind(s, i, r)), Le(document, "selectstart", s), Vs = !0, window.getSelection().removeAllRanges(), Qs && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, f, d = this.options, p = d.group, g = Ce.active, y = Co === p, b = d.sort, _ = Rt || g, v, h = this, S = !1;
    if (wh) return;
    function E(ue, De) {
      Kt(ue, h, Qn({
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
          return To(at, i, ie, o, J, St(J), r, ae);
        },
        changed: D
      }, De));
    }
    function O() {
      E("dragOverAnimationCapture"), h.captureAnimationState(), h !== _ && _.captureAnimationState();
    }
    function w(ue) {
      return E("dragOverCompleted", {
        insertion: ue
      }), ue && (y ? g._hideClone() : g._showClone(h), h !== _ && (hn(ie, Rt ? Rt.options.ghostClass : g.options.ghostClass, !1), hn(ie, d.ghostClass, !0)), Rt !== h && h !== Ce.active ? Rt = h : h === Ce.active && Rt && (Rt = null), _ === h && (h._ignoreWhileAnimating = s), h.animateAll(function() {
        E("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === i && !s.animated) && (wi = null), !d.dragoverBubble && !r.rootEl && s !== document && (ie.parentNode[en]._isOutsideThisEl(r.target), !ue && wa(r)), !d.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      dn = On(ie), Qr = On(ie, d.draggable), Zt({
        sortable: h,
        name: "change",
        toEl: i,
        newIndex: dn,
        newDraggableIndex: Qr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Ln(s, d.draggable, i, !0), E("dragOver"), Ce.eventCanceled) return S;
    if (ie.contains(r.target) || s.animated && s.animatingX && s.animatingY || h._ignoreWhileAnimating === s)
      return w(!1);
    if (gu = !1, g && !d.disabled && (y ? b || (f = ht !== at) : Rt === this || (this.lastPutMode = Co.checkPull(this, g, ie, r)) && p.checkPut(this, g, ie, r))) {
      if (v = this._getDirection(r, s) === "vertical", o = St(ie), E("dragOverValid"), Ce.eventCanceled) return S;
      if (f)
        return ht = at, O(), this._hideClone(), E("revert"), Ce.eventCanceled || (Aa ? at.insertBefore(ie, Aa) : at.appendChild(ie)), w(!0);
      var x = Fh(i, d.draggable);
      if (!x || ZS(r, v, this) && !x.animated) {
        if (x === ie)
          return w(!1);
        if (x && i === r.target && (s = x), s && (u = St(s)), To(at, i, ie, o, s, u, r, !!s) !== !1)
          return O(), x && x.nextSibling ? i.insertBefore(ie, x.nextSibling) : i.appendChild(ie), ht = i, D(), w(!0);
      } else if (x && qS(r, v, this)) {
        var T = zi(i, 0, d, !0);
        if (T === ie)
          return w(!1);
        if (s = T, u = St(s), To(at, i, ie, o, s, u, r, !1) !== !1)
          return O(), i.insertBefore(ie, T), ht = i, D(), w(!0);
      } else if (s.parentNode === i) {
        u = St(s);
        var M = 0, k, I = ie.parentNode !== i, V = !PS(ie.animated && ie.toRect || o, s.animated && s.toRect || u, v), B = v ? "top" : "left", Y = _v(s, "top", "top") || _v(ie, "top", "top"), $ = Y ? Y.scrollTop : void 0;
        wi !== s && (k = u[B], el = !1, wo = !V && d.invertSwap || I), M = FS(r, s, u, v, V ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, wo, wi === s);
        var le;
        if (M !== 0) {
          var fe = On(ie);
          do
            fe -= M, le = ht.children[fe];
          while (le && (xe(le, "display") === "none" || le === Te));
        }
        if (M === 0 || le === s)
          return w(!1);
        wi = s, Ws = M;
        var ge = s.nextElementSibling, U = !1;
        U = M === 1;
        var te = To(at, i, ie, o, s, u, r, U);
        if (te !== !1)
          return (te === 1 || te === -1) && (U = te === 1), wh = !0, setTimeout(HS, 30), O(), U && !ge ? i.appendChild(ie) : s.parentNode.insertBefore(ie, U ? ge : s), Y && p0(Y, 0, $ - Y.scrollTop), ht = ie.parentNode, k !== void 0 && !wo && (uu = Math.abs(k - St(s)[B])), D(), w(!0);
      }
      if (i.contains(ie))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ze(document, "mousemove", this._onTouchMove), ze(document, "touchmove", this._onTouchMove), ze(document, "pointermove", this._onTouchMove), ze(document, "dragover", wa), ze(document, "mousemove", wa), ze(document, "touchmove", wa);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    ze(r, "mouseup", this._onDrop), ze(r, "touchend", this._onDrop), ze(r, "pointerup", this._onDrop), ze(r, "pointercancel", this._onDrop), ze(r, "touchcancel", this._onDrop), ze(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (dn = On(ie), Qr = On(ie, s.draggable), Kt("drop", this, {
      evt: r
    }), ht = ie && ie.parentNode, dn = On(ie), Qr = On(ie, s.draggable), Ce.eventCanceled) {
      this._nulling();
      return;
    }
    Ni = !1, wo = !1, el = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ah(this.cloneId), Ah(this._dragStartId), this.nativeDraggable && (ze(document, "drop", this), ze(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Qs && xe(document.body, "user-select", ""), xe(ie, "transform", ""), r && (Vs && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Te && Te.parentNode && Te.parentNode.removeChild(Te), (at === ht || Rt && Rt.lastPutMode !== "clone") && ot && ot.parentNode && ot.parentNode.removeChild(ot), ie && (this.nativeDraggable && ze(ie, "dragend", this), nh(ie), ie.style["will-change"] = "", Vs && !Ni && hn(ie, Rt ? Rt.options.ghostClass : this.options.ghostClass, !1), hn(ie, this.options.chosenClass, !1), Zt({
      sortable: this,
      name: "unchoose",
      toEl: ht,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), at !== ht ? (dn >= 0 && (Zt({
      rootEl: ht,
      name: "add",
      toEl: ht,
      fromEl: at,
      originalEvent: r
    }), Zt({
      sortable: this,
      name: "remove",
      toEl: ht,
      originalEvent: r
    }), Zt({
      rootEl: ht,
      name: "sort",
      toEl: ht,
      fromEl: at,
      originalEvent: r
    }), Zt({
      sortable: this,
      name: "sort",
      toEl: ht,
      originalEvent: r
    })), Rt && Rt.save()) : dn !== Di && dn >= 0 && (Zt({
      sortable: this,
      name: "update",
      toEl: ht,
      originalEvent: r
    }), Zt({
      sortable: this,
      name: "sort",
      toEl: ht,
      originalEvent: r
    })), Ce.active && ((dn == null || dn === -1) && (dn = Di, Qr = Js), Zt({
      sortable: this,
      name: "end",
      toEl: ht,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Kt("nulling", this), at = ie = ht = Te = Aa = ot = ou = Kr = Ca = jn = Vs = dn = Qr = Di = Js = wi = Ws = Rt = Co = Ce.dragged = Ce.ghost = Ce.clone = Ce.active = null, yu.forEach(function(r) {
      r.checked = !0;
    }), yu.length = Wf = eh = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(r), US(r));
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
      i = s[o], Ln(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || VS(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, o = this.el;
    this.toArray().forEach(function(u, f) {
      var d = o.children[f];
      Ln(d, this.options.draggable, o, !1) && (s[u] = d);
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
    return Ln(r, i || this.options.draggable, this.el, !1);
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
    var o = il.modifyOption(this, r, i);
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && _0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Kt("destroy", this);
    var r = this.el;
    r[en] = null, ze(r, "mousedown", this._onTapStart), ze(r, "touchstart", this._onTapStart), ze(r, "pointerdown", this._onTapStart), this.nativeDraggable && (ze(r, "dragover", this), ze(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), vu.splice(vu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Kr) {
      if (Kt("hideClone", this), Ce.eventCanceled) return;
      xe(ot, "display", "none"), this.options.removeCloneOnHide && ot.parentNode && ot.parentNode.removeChild(ot), Kr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Kr) {
      if (Kt("showClone", this), Ce.eventCanceled) return;
      ie.parentNode == at && !this.options.group.revertClone ? at.insertBefore(ot, ie) : Aa ? at.insertBefore(ot, Aa) : at.appendChild(ot), this.options.group.revertClone && this.animate(ie, ot), xe(ot, "display", ""), Kr = !1;
    }
  }
};
function US(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function To(n, r, i, s, o, u, f, d) {
  var p, g = n[en], y = g.options.onMove, b;
  return window.CustomEvent && !Er && !al ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = n, p.dragged = i, p.draggedRect = s, p.related = o || r, p.relatedRect = u || St(r), p.willInsertAfter = d, p.originalEvent = f, n.dispatchEvent(p), y && (b = y.call(g, p, f)), b;
}
function nh(n) {
  n.draggable = !1;
}
function HS() {
  wh = !1;
}
function qS(n, r, i) {
  var s = St(zi(i.el, 0, i.options, !0)), o = g0(i.el, i.options, Te), u = 10;
  return r ? n.clientX < o.left - u || n.clientY < s.top && n.clientX < s.right : n.clientY < o.top - u || n.clientY < s.bottom && n.clientX < s.left;
}
function ZS(n, r, i) {
  var s = St(Fh(i.el, i.options.draggable)), o = g0(i.el, i.options, Te), u = 10;
  return r ? n.clientX > o.right + u || n.clientY > s.bottom && n.clientX > s.left : n.clientY > o.bottom + u || n.clientX > s.right && n.clientY > s.top;
}
function FS(n, r, i, s, o, u, f, d) {
  var p = s ? n.clientY : n.clientX, g = s ? i.height : i.width, y = s ? i.top : i.left, b = s ? i.bottom : i.right, _ = !1;
  if (!f) {
    if (d && uu < g * o) {
      if (!el && (Ws === 1 ? p > y + g * u / 2 : p < b - g * u / 2) && (el = !0), el)
        _ = !0;
      else if (Ws === 1 ? p < y + uu : p > b - uu)
        return -Ws;
    } else if (p > y + g * (1 - o) / 2 && p < b - g * (1 - o) / 2)
      return GS(r);
  }
  return _ = _ || f, _ && (p < y + g * u / 2 || p > b - g * u / 2) ? p > y + g / 2 ? 1 : -1 : 0;
}
function GS(n) {
  return On(ie) < On(n) ? 1 : -1;
}
function VS(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function YS(n) {
  yu.length = 0;
  for (var r = n.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && yu.push(s);
  }
}
function cu(n) {
  return setTimeout(n, 0);
}
function Ah(n) {
  return clearTimeout(n);
}
Au && Le(document, "touchmove", function(n) {
  (Ce.active || Ni) && n.cancelable && n.preventDefault();
});
Ce.utils = {
  on: Le,
  off: ze,
  css: xe,
  find: h0,
  is: function(r, i) {
    return !!Ln(r, i, r, !1);
  },
  extend: NS,
  throttle: d0,
  closest: Ln,
  toggleClass: hn,
  clone: m0,
  index: On,
  nextTick: cu,
  cancelNextTick: Ah,
  detectDirection: y0,
  getChild: zi,
  expando: en
};
Ce.get = function(n) {
  return n[en];
};
Ce.mount = function() {
  for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Ce.utils = Qn(Qn({}, Ce.utils), s.utils)), il.mount(s);
  });
};
Ce.create = function(n, r) {
  return new Ce(n, r);
};
Ce.version = TS;
var bt = [], Ys, Th, Oh = !1, rh, ah, _u, Xs;
function XS() {
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
      this.sortable.nativeDraggable ? Le(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Le(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Le(document, "touchmove", this._handleFallbackAutoScroll) : Le(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ze(document, "dragover", this._handleAutoScroll) : (ze(document, "pointermove", this._handleFallbackAutoScroll), ze(document, "touchmove", this._handleFallbackAutoScroll), ze(document, "mousemove", this._handleFallbackAutoScroll)), Cv(), fu(), DS();
    },
    nulling: function() {
      _u = Th = Ys = Oh = Xs = rh = ah = null, bt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, d = document.elementFromPoint(u, f);
      if (_u = i, s || this.options.forceAutoScrollFallback || al || Er || Qs) {
        ih(i, this.options, d, s);
        var p = Jr(d, !0);
        Oh && (!Xs || u !== rh || f !== ah) && (Xs && Cv(), Xs = setInterval(function() {
          var g = Jr(document.elementFromPoint(u, f), !0);
          g !== p && (p = g, fu()), ih(i, o.options, g, s);
        }, 10), rh = u, ah = f);
      } else {
        if (!this.options.bubbleScroll || Jr(d, !0) === $n()) {
          fu();
          return;
        }
        ih(i, this.options, Jr(d, !1), !1);
      }
    }
  }, Sr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function fu() {
  bt.forEach(function(n) {
    clearInterval(n.pid);
  }), bt = [];
}
function Cv() {
  clearInterval(Xs);
}
var ih = d0(function(n, r, i, s) {
  if (r.scroll) {
    var o = (n.touches ? n.touches[0] : n).clientX, u = (n.touches ? n.touches[0] : n).clientY, f = r.scrollSensitivity, d = r.scrollSpeed, p = $n(), g = !1, y;
    Th !== i && (Th = i, fu(), Ys = r.scroll, y = r.scrollFn, Ys === !0 && (Ys = Jr(i, !0)));
    var b = 0, _ = Ys;
    do {
      var v = _, h = St(v), S = h.top, E = h.bottom, O = h.left, w = h.right, D = h.width, x = h.height, T = void 0, M = void 0, k = v.scrollWidth, I = v.scrollHeight, V = xe(v), B = v.scrollLeft, Y = v.scrollTop;
      v === p ? (T = D < k && (V.overflowX === "auto" || V.overflowX === "scroll" || V.overflowX === "visible"), M = x < I && (V.overflowY === "auto" || V.overflowY === "scroll" || V.overflowY === "visible")) : (T = D < k && (V.overflowX === "auto" || V.overflowX === "scroll"), M = x < I && (V.overflowY === "auto" || V.overflowY === "scroll"));
      var $ = T && (Math.abs(w - o) <= f && B + D < k) - (Math.abs(O - o) <= f && !!B), le = M && (Math.abs(E - u) <= f && Y + x < I) - (Math.abs(S - u) <= f && !!Y);
      if (!bt[b])
        for (var fe = 0; fe <= b; fe++)
          bt[fe] || (bt[fe] = {});
      (bt[b].vx != $ || bt[b].vy != le || bt[b].el !== v) && (bt[b].el = v, bt[b].vx = $, bt[b].vy = le, clearInterval(bt[b].pid), ($ != 0 || le != 0) && (g = !0, bt[b].pid = setInterval((function() {
        s && this.layer === 0 && Ce.active._onTouchMove(_u);
        var ge = bt[this.layer].vy ? bt[this.layer].vy * d : 0, U = bt[this.layer].vx ? bt[this.layer].vx * d : 0;
        typeof y == "function" && y.call(Ce.dragged.parentNode[en], U, ge, n, _u, bt[this.layer].el) !== "continue" || p0(bt[this.layer].el, U, ge);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (r.bubbleScroll && _ !== p && (_ = Jr(_, !1)));
    Oh = g;
  }
}, 30), E0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, d = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (i) {
    var g = s || u;
    d();
    var y = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, b = document.elementFromPoint(y.clientX, y.clientY);
    p(), g && !g.el.contains(b) && (f("spill"), this.onSpill({
      dragEl: o,
      putSortable: s
    }));
  }
};
function Gh() {
}
Gh.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var o = zi(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: E0
};
Sr(Gh, {
  pluginName: "revertOnSpill"
});
function Vh() {
}
Vh.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: E0
};
Sr(Vh, {
  pluginName: "removeOnSpill"
});
Ce.mount(new XS());
Ce.mount(Vh, Gh);
async function $S({
  entry: n,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: s = !1,
  operation: o = "auto"
}) {
  const u = SillyTavern.getContext(), f = await u.loadWorldInfo(r);
  if (!f)
    throw new Error("Failed to load world info");
  const d = Object.values(f.entries), p = d.length > 0 ? d[d.length - 1] : void 0;
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
    if (g = _S(r, f), !g)
      throw new Error("Failed to create entry");
    if (p) {
      const b = g.uid;
      Object.assign(g, p), g.uid = b;
    }
  }
  return g.key = n.key, g.content = n.content, g.comment = n.comment, i || await u.saveWorldInfo(r, f), s || u.reloadWorldInfoEditor(r, !0), {
    entry: g,
    operation: y
  };
}
const x0 = `=======

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

=======`, C0 = `{{#if characters}}
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
{{/if}}`, QS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, KS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, JS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, Yh = "{{activeFormatInstructions}}", w0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, WS = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, tl = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, eE = `## User's Persona Description
name: {{user}}
{{persona}}`, Xh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, tE = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", nE = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", rE = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, A0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", aE = A0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", iE = "[" + A0 + "][" + aE + "]*", sE = new RegExp("^" + iE + "$");
function T0(n, r) {
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
const $h = function(n) {
  const r = sE.exec(n);
  return !(r === null || typeof r > "u");
};
function lE(n) {
  return typeof n < "u";
}
const oE = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function O0(n, r) {
  r = Object.assign({}, oE, r);
  const i = [];
  let s = !1, o = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let u = 0; u < n.length; u++)
    if (n[u] === "<" && n[u + 1] === "?") {
      if (u += 2, u = Av(n, u), u.err) return u;
    } else if (n[u] === "<") {
      let f = u;
      if (u++, n[u] === "!") {
        u = Tv(n, u);
        continue;
      } else {
        let d = !1;
        n[u] === "/" && (d = !0, u++);
        let p = "";
        for (; u < n.length && n[u] !== ">" && n[u] !== " " && n[u] !== "	" && n[u] !== `
` && n[u] !== "\r"; u++)
          p += n[u];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), u--), !gE(p)) {
          let b;
          return p.trim().length === 0 ? b = "Invalid space after '<'." : b = "Tag '" + p + "' is an invalid name.", gt("InvalidTag", b, Ft(n, u));
        }
        const g = fE(n, u);
        if (g === !1)
          return gt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Ft(n, u));
        let y = g.value;
        if (u = g.index, y[y.length - 1] === "/") {
          const b = u - y.length;
          y = y.substring(0, y.length - 1);
          const _ = Ov(y, r);
          if (_ === !0)
            s = !0;
          else
            return gt(_.err.code, _.err.msg, Ft(n, b + _.err.line));
        } else if (d)
          if (g.tagClosed) {
            if (y.trim().length > 0)
              return gt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Ft(n, f));
            if (i.length === 0)
              return gt("InvalidTag", "Closing tag '" + p + "' has not been opened.", Ft(n, f));
            {
              const b = i.pop();
              if (p !== b.tagName) {
                let _ = Ft(n, b.tagStartPos);
                return gt(
                  "InvalidTag",
                  "Expected closing tag '" + b.tagName + "' (opened in line " + _.line + ", col " + _.col + ") instead of closing tag '" + p + "'.",
                  Ft(n, f)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return gt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Ft(n, u));
        else {
          const b = Ov(y, r);
          if (b !== !0)
            return gt(b.err.code, b.err.msg, Ft(n, u - y.length + b.err.line));
          if (o === !0)
            return gt("InvalidXml", "Multiple possible root nodes found.", Ft(n, u));
          r.unpairedTags.indexOf(p) !== -1 || i.push({ tagName: p, tagStartPos: f }), s = !0;
        }
        for (u++; u < n.length; u++)
          if (n[u] === "<")
            if (n[u + 1] === "!") {
              u++, u = Tv(n, u);
              continue;
            } else if (n[u + 1] === "?") {
              if (u = Av(n, ++u), u.err) return u;
            } else
              break;
          else if (n[u] === "&") {
            const b = pE(n, u);
            if (b == -1)
              return gt("InvalidChar", "char '&' is not expected.", Ft(n, u));
            u = b;
          } else if (o === !0 && !wv(n[u]))
            return gt("InvalidXml", "Extra text at the end", Ft(n, u));
        n[u] === "<" && u--;
      }
    } else {
      if (wv(n[u]))
        continue;
      return gt("InvalidChar", "char '" + n[u] + "' is not expected.", Ft(n, u));
    }
  if (s) {
    if (i.length == 1)
      return gt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Ft(n, i[0].tagStartPos));
    if (i.length > 0)
      return gt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return gt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function wv(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function Av(n, r) {
  const i = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const s = n.substr(i, r - i);
      if (r > 5 && s === "xml")
        return gt("InvalidXml", "XML declaration allowed only at the start of the document.", Ft(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Tv(n, r) {
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
const uE = '"', cE = "'";
function fE(n, r) {
  let i = "", s = "", o = !1;
  for (; r < n.length; r++) {
    if (n[r] === uE || n[r] === cE)
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
const hE = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Ov(n, r) {
  const i = T0(n, hE), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return gt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Bs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return gt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Bs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return gt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Bs(i[o]));
    const u = i[o][2];
    if (!mE(u))
      return gt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Bs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return gt("InvalidAttr", "Attribute '" + u + "' is repeated.", Bs(i[o]));
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
function pE(n, r) {
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
function gt(n, r, i) {
  return {
    err: {
      code: n,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function mE(n) {
  return $h(n);
}
function gE(n) {
  return $h(n);
}
function Ft(n, r) {
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
const vE = {
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
}, yE = function(n) {
  return Object.assign({}, vE, n);
};
class Is {
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
function _E(n, r) {
  const i = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, f = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !u) {
        if (o && EE(n, r)) {
          r += 7;
          let d, p;
          [d, p, r] = bE(n, r + 1), p.indexOf("&") === -1 && (i[AE(d)] = {
            regx: RegExp(`&${d};`, "g"),
            val: p
          });
        } else if (o && xE(n, r)) r += 8;
        else if (o && CE(n, r)) r += 8;
        else if (o && wE(n, r)) r += 9;
        else if (SE) u = !0;
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
function bE(n, r) {
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
function SE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function EE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function xE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function CE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function wE(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function AE(n) {
  if ($h(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const TE = /^[-+]?0x[a-fA-F0-9]+$/, OE = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, NE = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function DE(n, r = {}) {
  if (r = Object.assign({}, NE, r), !n || typeof n != "string") return n;
  let i = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return n;
  if (n === "0") return 0;
  if (r.hex && TE.test(i))
    return kE(i, 16);
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
    const s = OE.exec(i);
    if (s) {
      const o = s[1], u = s[2];
      let f = ME(s[3]);
      if (!r.leadingZeros && u.length > 0 && o && i[2] !== ".") return n;
      if (!r.leadingZeros && u.length > 0 && !o && i[1] !== ".") return n;
      if (r.leadingZeros && u === n) return 0;
      {
        const d = Number(i), p = "" + d;
        return p.search(/[eE]/) !== -1 ? r.eNotation ? d : n : i.indexOf(".") !== -1 ? p === "0" && f === "" || p === f || o && p === "-" + f ? d : n : u ? f === p || o + f === p ? d : n : i === p || i === o + p ? d : n;
      }
    } else
      return n;
  }
}
function ME(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function kE(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function RE(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const i of n)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class jE {
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
    }, this.addExternalEntities = zE, this.parseXml = UE, this.parseTextData = LE, this.resolveNameSpace = PE, this.buildAttributesMap = IE, this.isItStopNode = FE, this.replaceEntitiesValue = qE, this.readStopNodeData = VE, this.saveTextToParentTag = ZE, this.addChild = HE, this.ignoreAttributesFn = RE(this.options.ignoreAttributes);
  }
}
function zE(n) {
  const r = Object.keys(n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: n[s]
    };
  }
}
function LE(n, r, i, s, o, u, f) {
  if (n !== void 0 && (this.options.trimValues && !s && (n = n.trim()), n.length > 0)) {
    f || (n = this.replaceEntitiesValue(n));
    const d = this.options.tagValueProcessor(r, n, i, o, u);
    return d == null ? n : typeof d != typeof n || d !== n ? d : this.options.trimValues ? Dh(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? Dh(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function PE(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), i = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = i + r[1]);
  }
  return n;
}
const BE = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function IE(n, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const s = T0(n, BE), o = s.length, u = {};
    for (let f = 0; f < o; f++) {
      const d = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(d, r))
        continue;
      let p = s[f][4], g = this.options.attributeNamePrefix + d;
      if (d.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const y = this.options.attributeValueProcessor(d, p, r);
          y == null ? u[g] = p : typeof y != typeof p || y !== p ? u[g] = y : u[g] = Dh(
            p,
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
const UE = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new Is("!xml");
  let i = r, s = "", o = "";
  for (let u = 0; u < n.length; u++)
    if (n[u] === "<")
      if (n[u + 1] === "/") {
        const d = Da(n, ">", u, "Closing Tag is not closed.");
        let p = n.substring(u + 2, d).trim();
        if (this.options.removeNSPrefix) {
          const b = p.indexOf(":");
          b !== -1 && (p = p.substr(b + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), i && (s = this.saveTextToParentTag(s, i, o));
        const g = o.substring(o.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let y = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (y = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = o.lastIndexOf("."), o = o.substring(0, y), i = this.tagsNodeStack.pop(), s = "", u = d;
      } else if (n[u + 1] === "?") {
        let d = Nh(n, u, !1, "?>");
        if (!d) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, o), !(this.options.ignoreDeclaration && d.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Is(d.tagName);
          p.add(this.options.textNodeName, ""), d.tagName !== d.tagExp && d.attrExpPresent && (p[":@"] = this.buildAttributesMap(d.tagExp, o, d.tagName)), this.addChild(i, p, o);
        }
        u = d.closeIndex + 1;
      } else if (n.substr(u + 1, 3) === "!--") {
        const d = Da(n, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = n.substring(u + 4, d - 2);
          s = this.saveTextToParentTag(s, i, o), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        u = d;
      } else if (n.substr(u + 1, 2) === "!D") {
        const d = _E(n, u);
        this.docTypeEntities = d.entities, u = d.i;
      } else if (n.substr(u + 1, 2) === "![") {
        const d = Da(n, "]]>", u, "CDATA is not closed.") - 2, p = n.substring(u + 9, d);
        s = this.saveTextToParentTag(s, i, o);
        let g = this.parseTextData(p, i.tagname, o, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : i.add(this.options.textNodeName, g), u = d + 2;
      } else {
        let d = Nh(n, u, this.options.removeNSPrefix), p = d.tagName;
        const g = d.rawTagName;
        let y = d.tagExp, b = d.attrExpPresent, _ = d.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const v = i;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), p !== r.tagname && (o += o ? "." + p : p), this.isItStopNode(this.options.stopNodes, o, p)) {
          let h = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), o = o.substr(0, o.length - 1), y = p) : y = y.substr(0, y.length - 1), u = d.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            u = d.closeIndex;
          else {
            const E = this.readStopNodeData(n, g, _ + 1);
            if (!E) throw new Error(`Unexpected end of ${g}`);
            u = E.i, h = E.tagContent;
          }
          const S = new Is(p);
          p !== y && b && (S[":@"] = this.buildAttributesMap(y, o, p)), h && (h = this.parseTextData(h, p, o, !0, b, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, h), this.addChild(i, S, o);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), o = o.substr(0, o.length - 1), y = p) : y = y.substr(0, y.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new Is(p);
            p !== y && b && (h[":@"] = this.buildAttributesMap(y, o, p)), this.addChild(i, h, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const h = new Is(p);
            this.tagsNodeStack.push(i), p !== y && b && (h[":@"] = this.buildAttributesMap(y, o, p)), this.addChild(i, h, o), i = h;
          }
          s = "", u = _;
        }
      }
    else
      s += n[u];
  return r.child;
};
function HE(n, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), n.addChild(r));
}
const qE = function(n) {
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
function ZE(n, r, i, s) {
  return n && (s === void 0 && (s = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function FE(n, r, i) {
  const s = "*." + i;
  for (const o in n) {
    const u = n[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function GE(n, r, i = ">") {
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
function Da(n, r, i, s) {
  const o = n.indexOf(r, i);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function Nh(n, r, i, s = ">") {
  const o = GE(n, r + 1, s);
  if (!o) return;
  let u = o.data;
  const f = o.index, d = u.search(/\s/);
  let p = u, g = !0;
  d !== -1 && (p = u.substring(0, d), u = u.substring(d + 1).trimStart());
  const y = p;
  if (i) {
    const b = p.indexOf(":");
    b !== -1 && (p = p.substr(b + 1), g = p !== o.data.substr(b + 1));
  }
  return {
    tagName: p,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: y
  };
}
function VE(n, r, i) {
  const s = i;
  let o = 1;
  for (; i < n.length; i++)
    if (n[i] === "<")
      if (n[i + 1] === "/") {
        const u = Da(n, ">", i, `${r} is not closed`);
        if (n.substring(i + 2, u).trim() === r && (o--, o === 0))
          return {
            tagContent: n.substring(s, i),
            i: u
          };
        i = u;
      } else if (n[i + 1] === "?")
        i = Da(n, "?>", i + 1, "StopNode is not closed.");
      else if (n.substr(i + 1, 3) === "!--")
        i = Da(n, "-->", i + 3, "StopNode is not closed.");
      else if (n.substr(i + 1, 2) === "![")
        i = Da(n, "]]>", i, "StopNode is not closed.") - 2;
      else {
        const u = Nh(n, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function Dh(n, r, i) {
  if (r && typeof n == "string") {
    const s = n.trim();
    return s === "true" ? !0 : s === "false" ? !1 : DE(n, i);
  } else
    return lE(n) ? n : "";
}
function YE(n, r) {
  return N0(n, r);
}
function N0(n, r, i) {
  let s;
  const o = {};
  for (let u = 0; u < n.length; u++) {
    const f = n[u], d = XE(f);
    let p = "";
    if (i === void 0 ? p = d : p = i + "." + d, d === r.textNodeName)
      s === void 0 ? s = f[d] : s += "" + f[d];
    else {
      if (d === void 0)
        continue;
      if (f[d]) {
        let g = N0(f[d], r, p);
        const y = QE(g, r);
        f[":@"] ? $E(g, f[":@"], p, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), o[d] !== void 0 && o.hasOwnProperty(d) ? (Array.isArray(o[d]) || (o[d] = [o[d]]), o[d].push(g)) : r.isArray(d, p, y) ? o[d] = [g] : o[d] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function XE(n) {
  const r = Object.keys(n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function $E(n, r, i, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let f = 0; f < u; f++) {
      const d = o[f];
      s.isArray(d, i + "." + d, !0, !0) ? n[d] = [r[d]] : n[d] = r[d];
    }
  }
}
function QE(n, r) {
  const { textNodeName: i } = r, s = Object.keys(n).length;
  return !!(s === 0 || s === 1 && (n[i] || typeof n[i] == "boolean" || n[i] === 0));
}
class KE {
  constructor(r) {
    this.externalEntities = {}, this.options = yE(r);
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
      const u = O0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new jE(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : YE(o, this.options);
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
const JE = {
  validate: O0
}, WE = new KE({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Mh(n, r) {
  if (!(!r || !n || !r.properties))
    for (const i in r.properties) {
      if (!n.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let o = n[i];
      s.type === "array" && !Array.isArray(o) && (o = [o], n[i] = o), s.type === "object" && typeof o == "object" && o !== null ? Mh(o, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(o) && o.forEach((u) => Mh(u, s.items)), s.type === "string" && typeof o != "string" ? n[i] = String(o) : s.type === "array" && s.items?.type === "string" && Array.isArray(o) && (n[i] = o.map(String));
    }
}
function D0(n, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, o = n.match(s);
  let u = o ? o[1].trim() : n.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const p = JE.validate(u);
          if (p !== !0)
            throw new Error(`Model response is not valid XML: ${p.err.msg}`);
        }
        let f = WE.parse(u);
        if (f.root)
          f = f.root;
        else if (f.response)
          return f.response;
        return i.schema && Mh(f, i.schema), f;
      case "json":
        return JSON.parse(u);
      case "none":
        return u;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (f) {
    if (r !== "none" && !i.schema) {
      const d = u.match(/<response>([\s\S]*)/);
      if (d) return d[1];
      const p = u.match(/"response":\s*"([\s\S]*)/);
      return p ? p[1].replace(/"\s*}\s*$/, "") : u;
    }
    throw console.error(`Error parsing response in format '${r}':`, f), console.error("Raw content received:", n), r === "xml" ? f.message.startsWith("Model response is not valid XML:") ? f : new Error(`Model response is not valid XML: ${f.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${f.message}`);
  }
}
function Nv(n, r) {
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
var Oo = { exports: {} }, No = { exports: {} }, zn = {}, Jt = {}, Dv;
function tn() {
  if (Dv) return Jt;
  Dv = 1, Jt.__esModule = !0, Jt.extend = o, Jt.indexOf = p, Jt.escapeExpression = g, Jt.isEmpty = y, Jt.createFrame = b, Jt.blockParams = _, Jt.appendContextPath = v;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, i = /[&<>"'`=]/;
  function s(h) {
    return n[h];
  }
  function o(h) {
    for (var S = 1; S < arguments.length; S++)
      for (var E in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], E) && (h[E] = arguments[S][E]);
    return h;
  }
  var u = Object.prototype.toString;
  Jt.toString = u;
  var f = function(S) {
    return typeof S == "function";
  };
  f(/x/) && (Jt.isFunction = f = function(h) {
    return typeof h == "function" && u.call(h) === "[object Function]";
  }), Jt.isFunction = f;
  var d = Array.isArray || function(h) {
    return h && typeof h == "object" ? u.call(h) === "[object Array]" : !1;
  };
  Jt.isArray = d;
  function p(h, S) {
    for (var E = 0, O = h.length; E < O; E++)
      if (h[E] === S)
        return E;
    return -1;
  }
  function g(h) {
    if (typeof h != "string") {
      if (h && h.toHTML)
        return h.toHTML();
      if (h == null)
        return "";
      if (!h)
        return h + "";
      h = "" + h;
    }
    return i.test(h) ? h.replace(r, s) : h;
  }
  function y(h) {
    return !h && h !== 0 ? !0 : !!(d(h) && h.length === 0);
  }
  function b(h) {
    var S = o({}, h);
    return S._parent = h, S;
  }
  function _(h, S) {
    return h.path = S, h;
  }
  function v(h, S) {
    return (h ? h + "." : "") + S;
  }
  return Jt;
}
var Do = { exports: {} }, Mv;
function Bn() {
  return Mv || (Mv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var f = u && u.loc, d = void 0, p = void 0, g = void 0, y = void 0;
      f && (d = f.start.line, p = f.end.line, g = f.start.column, y = f.end.column, o += " - " + d + ":" + g);
      for (var b = Error.prototype.constructor.call(this, o), _ = 0; _ < i.length; _++)
        this[i[_]] = b[i[_]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = d, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
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
var Us = {}, Mo = { exports: {} }, kv;
function ex() {
  return kv || (kv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = tn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(o, u) {
        var f = u.inverse, d = u.fn;
        if (o === !0)
          return d(this);
        if (o === !1 || o == null)
          return f(this);
        if (i.isArray(o))
          return o.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(o, u)) : f(this);
        if (u.data && u.ids) {
          var p = i.createFrame(u.data);
          p.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: p };
        }
        return d(o, u);
      });
    }, n.exports = r.default;
  })(Mo, Mo.exports)), Mo.exports;
}
var ko = { exports: {} }, Rv;
function tx() {
  return Rv || (Rv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = tn(), o = Bn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("each", function(d, p) {
        if (!p)
          throw new u.default("Must pass iterator to #each");
        var g = p.fn, y = p.inverse, b = 0, _ = "", v = void 0, h = void 0;
        p.data && p.ids && (h = s.appendContextPath(p.data.contextPath, p.ids[0]) + "."), s.isFunction(d) && (d = d.call(this)), p.data && (v = s.createFrame(p.data));
        function S(x, T, M) {
          v && (v.key = x, v.index = T, v.first = T === 0, v.last = !!M, h && (v.contextPath = h + x)), _ = _ + g(d[x], {
            data: v,
            blockParams: s.blockParams([d[x], x], [h + x, null])
          });
        }
        if (d && typeof d == "object")
          if (s.isArray(d))
            for (var E = d.length; b < E; b++)
              b in d && S(b, b, b === d.length - 1);
          else if (typeof Symbol == "function" && d[Symbol.iterator]) {
            for (var O = [], w = d[Symbol.iterator](), D = w.next(); !D.done; D = w.next())
              O.push(D.value);
            d = O;
            for (var E = d.length; b < E; b++)
              S(b, b, b === d.length - 1);
          } else
            (function() {
              var x = void 0;
              Object.keys(d).forEach(function(T) {
                x !== void 0 && S(x, b - 1), x = T, b++;
              }), x !== void 0 && S(x, b - 1, !0);
            })();
        return b === 0 && (_ = y(this)), _;
      });
    }, n.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var Ro = { exports: {} }, jv;
function nx() {
  return jv || (jv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Bn(), o = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(Ro, Ro.exports)), Ro.exports;
}
var jo = { exports: {} }, zv;
function rx() {
  return zv || (zv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = tn(), o = Bn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("if", function(d, p) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(d) && (d = d.call(this)), !p.hash.includeZero && !d || s.isEmpty(d) ? p.inverse(this) : p.fn(this);
      }), f.registerHelper("unless", function(d, p) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, d, {
          fn: p.inverse,
          inverse: p.fn,
          hash: p.hash
        });
      });
    }, n.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var zo = { exports: {} }, Lv;
function ax() {
  return Lv || (Lv = 1, (function(n, r) {
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
var Lo = { exports: {} }, Pv;
function ix() {
  return Pv || (Pv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, n.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Po = { exports: {} }, Bv;
function sx() {
  return Bv || (Bv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = tn(), o = Bn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("with", function(d, p) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(d) && (d = d.call(this));
        var g = p.fn;
        if (s.isEmpty(d))
          return p.inverse(this);
        var y = p.data;
        return p.data && p.ids && (y = s.createFrame(p.data), y.contextPath = s.appendContextPath(p.data.contextPath, p.ids[0])), g(d, {
          data: y,
          blockParams: s.blockParams([d], [y && y.contextPath])
        });
      });
    }, n.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Iv;
function M0() {
  if (Iv) return Us;
  Iv = 1, Us.__esModule = !0, Us.registerDefaultHelpers = S, Us.moveHelperToHooks = E;
  function n(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var r = ex(), i = n(r), s = tx(), o = n(s), u = nx(), f = n(u), d = rx(), p = n(d), g = ax(), y = n(g), b = ix(), _ = n(b), v = sx(), h = n(v);
  function S(O) {
    i.default(O), o.default(O), f.default(O), p.default(O), y.default(O), _.default(O), h.default(O);
  }
  function E(O, w, D) {
    O.helpers[w] && (O.hooks[w] = O.helpers[w], D || delete O.helpers[w]);
  }
  return Us;
}
var Bo = {}, Io = { exports: {} }, Uv;
function lx() {
  return Uv || (Uv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = tn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, f, d) {
        var p = o;
        return u.partials || (u.partials = {}, p = function(g, y) {
          var b = f.partials;
          f.partials = i.extend({}, b, u.partials);
          var _ = o(g, y);
          return f.partials = b, _;
        }), u.partials[d.args[0]] = d.fn, p;
      });
    }, n.exports = r.default;
  })(Io, Io.exports)), Io.exports;
}
var Hv;
function ox() {
  if (Hv) return Bo;
  Hv = 1, Bo.__esModule = !0, Bo.registerDefaultDecorators = s;
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = lx(), i = n(r);
  function s(o) {
    i.default(o);
  }
  return Bo;
}
var Uo = { exports: {} }, qv;
function k0() {
  return qv || (qv = 1, (function(n, r) {
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
          for (var d = arguments.length, p = Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
            p[g - 1] = arguments[g];
          console[f].apply(console, p);
        }
      }
    };
    r.default = s, n.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Ai = {}, Ho = {}, Zv;
function ux() {
  if (Zv) return Ho;
  Zv = 1, Ho.__esModule = !0, Ho.createNewLookupObject = r;
  var n = tn();
  function r() {
    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Ho;
}
var Fv;
function R0() {
  if (Fv) return Ai;
  Fv = 1, Ai.__esModule = !0, Ai.createProtoAccessControl = u, Ai.resultIsAllowed = f, Ai.resetLoggedProperties = g;
  function n(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = ux(), i = k0(), s = n(i), o = /* @__PURE__ */ Object.create(null);
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
    return d(typeof y == "function" ? b.methods : b.properties, _);
  }
  function d(y, b) {
    return y.whitelist[b] !== void 0 ? y.whitelist[b] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (p(b), !1);
  }
  function p(y) {
    o[y] !== !0 && (o[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(o).forEach(function(y) {
      delete o[y];
    });
  }
  return Ai;
}
var Gv;
function Qh() {
  if (Gv) return zn;
  Gv = 1, zn.__esModule = !0, zn.HandlebarsEnvironment = h;
  function n(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = tn(), i = Bn(), s = n(i), o = M0(), u = ox(), f = k0(), d = n(f), p = R0(), g = "4.7.8";
  zn.VERSION = g;
  var y = 8;
  zn.COMPILER_REVISION = y;
  var b = 7;
  zn.LAST_COMPATIBLE_COMPILER_REVISION = b;
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
  zn.REVISION_CHANGES = _;
  var v = "[object Object]";
  function h(E, O, w) {
    this.helpers = E || {}, this.partials = O || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: d.default,
    log: d.default.log,
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
      p.resetLoggedProperties();
    }
  };
  var S = d.default.log;
  return zn.log = S, zn.createFrame = r.createFrame, zn.logger = d.default, zn;
}
var qo = { exports: {} }, Vv;
function cx() {
  return Vv || (Vv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, n.exports = r.default;
  })(qo, qo.exports)), qo.exports;
}
var pr = {}, Zo = {}, Yv;
function fx() {
  if (Yv) return Zo;
  Yv = 1, Zo.__esModule = !0, Zo.wrapHelper = n;
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
var Xv;
function hx() {
  if (Xv) return pr;
  Xv = 1, pr.__esModule = !0, pr.checkRevision = y, pr.template = b, pr.wrapProgram = _, pr.resolvePartial = v, pr.invokePartial = h, pr.noop = S;
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
  var i = tn(), s = r(i), o = Bn(), u = n(o), f = Qh(), d = M0(), p = fx(), g = R0();
  function y(x) {
    var T = x && x[0] || 1, M = f.COMPILER_REVISION;
    if (!(T >= f.LAST_COMPATIBLE_COMPILER_REVISION && T <= f.COMPILER_REVISION))
      if (T < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], I = f.REVISION_CHANGES[T];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + I + ").");
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
    function k(B, Y, $) {
      $.hash && (Y = s.extend({}, Y, $.hash), $.ids && ($.ids[0] = !0)), B = T.VM.resolvePartial.call(this, B, Y, $);
      var le = s.extend({}, $, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = T.VM.invokePartial.call(this, B, Y, le);
      if (fe == null && T.compile && ($.partials[$.name] = T.compile(B, x.compilerOptions, T), fe = $.partials[$.name](Y, le)), fe != null) {
        if ($.indent) {
          for (var ge = fe.split(`
`), U = 0, te = ge.length; U < te && !(!ge[U] && U + 1 === te); U++)
            ge[U] = $.indent + ge[U];
          fe = ge.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + $.name + " could not be compiled when running in runtime-only mode");
    }
    var I = {
      strict: function(Y, $, le) {
        if (!Y || !($ in Y))
          throw new u.default('"' + $ + '" not defined in ' + Y, {
            loc: le
          });
        return I.lookupProperty(Y, $);
      },
      lookupProperty: function(Y, $) {
        var le = Y[$];
        if (le == null || Object.prototype.hasOwnProperty.call(Y, $) || g.resultIsAllowed(le, I.protoAccessControl, $))
          return le;
      },
      lookup: function(Y, $) {
        for (var le = Y.length, fe = 0; fe < le; fe++) {
          var ge = Y[fe] && I.lookupProperty(Y[fe], $);
          if (ge != null)
            return Y[fe][$];
        }
      },
      lambda: function(Y, $) {
        return typeof Y == "function" ? Y.call($) : Y;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(Y) {
        var $ = x[Y];
        return $.decorator = x[Y + "_d"], $;
      },
      programs: [],
      program: function(Y, $, le, fe, ge) {
        var U = this.programs[Y], te = this.fn(Y);
        return $ || ge || fe || le ? U = _(this, Y, te, $, le, fe, ge) : U || (U = this.programs[Y] = _(this, Y, te)), U;
      },
      data: function(Y, $) {
        for (; Y && $--; )
          Y = Y._parent;
        return Y;
      },
      mergeIfNeeded: function(Y, $) {
        var le = Y || $;
        return Y && $ && Y !== $ && (le = s.extend({}, $, Y)), le;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: T.VM.noop,
      compilerInfo: x.compiler
    };
    function V(B) {
      var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = Y.data;
      V._setup(Y), !Y.partial && x.useData && ($ = E(B, $));
      var le = void 0, fe = x.useBlockParams ? [] : void 0;
      x.useDepths && (Y.depths ? le = B != Y.depths[0] ? [B].concat(Y.depths) : Y.depths : le = [B]);
      function ge(U) {
        return "" + x.main(I, U, I.helpers, I.partials, $, fe, le);
      }
      return ge = O(x.main, ge, I, Y.depths || [], $, fe), ge(B, Y);
    }
    return V.isTop = !0, V._setup = function(B) {
      if (B.partial)
        I.protoAccessControl = B.protoAccessControl, I.helpers = B.helpers, I.partials = B.partials, I.decorators = B.decorators, I.hooks = B.hooks;
      else {
        var Y = s.extend({}, T.helpers, B.helpers);
        w(Y, I), I.helpers = Y, x.usePartial && (I.partials = I.mergeIfNeeded(B.partials, T.partials)), (x.usePartial || x.useDecorators) && (I.decorators = s.extend({}, T.decorators, B.decorators)), I.hooks = {}, I.protoAccessControl = g.createProtoAccessControl(B);
        var $ = B.allowCallsToHelperMissing || M;
        d.moveHelperToHooks(I, "helperMissing", $), d.moveHelperToHooks(I, "blockHelperMissing", $);
      }
    }, V._child = function(B, Y, $, le) {
      if (x.useBlockParams && !$)
        throw new u.default("must pass block params");
      if (x.useDepths && !le)
        throw new u.default("must pass parent depths");
      return _(I, B, x[B], Y, 0, $, le);
    }, V;
  }
  function _(x, T, M, k, I, V, B) {
    function Y($) {
      var le = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = B;
      return B && $ != B[0] && !($ === x.nullContext && B[0] === null) && (fe = [$].concat(B)), M(x, $, x.helpers, x.partials, le.data || k, V && [le.blockParams].concat(V), fe);
    }
    return Y = O(M, Y, x, B, k, V), Y.program = T, Y.depth = B ? B.length : 0, Y.blockParams = I || 0, Y;
  }
  function v(x, T, M) {
    return x ? !x.call && !M.name && (M.name = x, x = M.partials[x]) : M.name === "@partial-block" ? x = M.data["partial-block"] : x = M.partials[M.name], x;
  }
  function h(x, T, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var I = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = f.createFrame(M.data);
      var V = M.fn;
      I = M.data["partial-block"] = function(Y) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = f.createFrame($.data), $.data["partial-block"] = k, V(Y, $);
      }, V.partials && (M.partials = s.extend({}, M.partials, V.partials));
    })(), x === void 0 && I && (x = I), x === void 0)
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
  function O(x, T, M, k, I, V) {
    if (x.decorator) {
      var B = {};
      T = x.decorator(T, B, M, k && k[0], I, V, k), s.extend(T, B);
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
    return p.wrapHelper(x, function(k) {
      return s.extend({ lookupProperty: M }, k);
    });
  }
  return pr;
}
var Fo = { exports: {} }, $v;
function j0() {
  return $v || ($v = 1, (function(n, r) {
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
var Qv;
function dx() {
  return Qv || (Qv = 1, (function(n, r) {
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
    var o = Qh(), u = s(o), f = cx(), d = i(f), p = Bn(), g = i(p), y = tn(), b = s(y), _ = hx(), v = s(_), h = j0(), S = i(h);
    function E() {
      var w = new u.HandlebarsEnvironment();
      return b.extend(w, u), w.SafeString = d.default, w.Exception = g.default, w.Utils = b, w.escapeExpression = b.escapeExpression, w.VM = v, w.template = function(D) {
        return v.template(D, w);
      }, w;
    }
    var O = E();
    O.create = E, S.default(O), O.default = O, r.default = O, n.exports = r.default;
  })(No, No.exports)), No.exports;
}
var Go = { exports: {} }, Kv;
function z0() {
  return Kv || (Kv = 1, (function(n, r) {
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
var Ti = {}, Vo = { exports: {} }, Jv;
function px() {
  return Jv || (Jv = 1, (function(n, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(d, p, g, y, b, _, v) {
          var h = _.length - 1;
          switch (b) {
            case 1:
              return _[h - 1];
            case 2:
              this.$ = y.prepareProgram(_[h]);
              break;
            case 3:
              this.$ = _[h];
              break;
            case 4:
              this.$ = _[h];
              break;
            case 5:
              this.$ = _[h];
              break;
            case 6:
              this.$ = _[h];
              break;
            case 7:
              this.$ = _[h];
              break;
            case 8:
              this.$ = _[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(_[h]),
                strip: y.stripFlags(_[h], _[h]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: _[h],
                value: _[h],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(_[h - 2], _[h - 1], _[h], this._$);
              break;
            case 12:
              this.$ = { path: _[h - 3], params: _[h - 2], hash: _[h - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(_[h - 3], _[h - 2], _[h - 1], _[h], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(_[h - 3], _[h - 2], _[h - 1], _[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: _[h - 5], path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: y.stripFlags(_[h - 5], _[h]) };
              break;
            case 16:
              this.$ = { path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: y.stripFlags(_[h - 5], _[h]) };
              break;
            case 17:
              this.$ = { path: _[h - 4], params: _[h - 3], hash: _[h - 2], blockParams: _[h - 1], strip: y.stripFlags(_[h - 5], _[h]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(_[h - 1], _[h - 1]), program: _[h] };
              break;
            case 19:
              var S = y.prepareBlock(_[h - 2], _[h - 1], _[h], _[h], !1, this._$), E = y.prepareProgram([S], _[h - 1].loc);
              E.chained = !0, this.$ = { strip: _[h - 2].strip, program: E, chain: !0 };
              break;
            case 20:
              this.$ = _[h];
              break;
            case 21:
              this.$ = { path: _[h - 1], strip: y.stripFlags(_[h - 2], _[h]) };
              break;
            case 22:
              this.$ = y.prepareMustache(_[h - 3], _[h - 2], _[h - 1], _[h - 4], y.stripFlags(_[h - 4], _[h]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(_[h - 3], _[h - 2], _[h - 1], _[h - 4], y.stripFlags(_[h - 4], _[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: _[h - 3],
                params: _[h - 2],
                hash: _[h - 1],
                indent: "",
                strip: y.stripFlags(_[h - 4], _[h]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(_[h - 2], _[h - 1], _[h], this._$);
              break;
            case 26:
              this.$ = { path: _[h - 3], params: _[h - 2], hash: _[h - 1], strip: y.stripFlags(_[h - 4], _[h]) };
              break;
            case 27:
              this.$ = _[h];
              break;
            case 28:
              this.$ = _[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: _[h - 3],
                params: _[h - 2],
                hash: _[h - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: _[h], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(_[h - 2]), value: _[h], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(_[h - 1]);
              break;
            case 33:
              this.$ = _[h];
              break;
            case 34:
              this.$ = _[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: _[h], original: _[h], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(_[h]), original: Number(_[h]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: _[h] === "true", original: _[h] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = _[h];
              break;
            case 41:
              this.$ = _[h];
              break;
            case 42:
              this.$ = y.preparePath(!0, _[h], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, _[h], this._$);
              break;
            case 44:
              _[h - 2].push({ part: y.id(_[h]), original: _[h], separator: _[h - 1] }), this.$ = _[h - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(_[h]), original: _[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              _[h - 1].push(_[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              _[h - 1].push(_[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              _[h - 1].push(_[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              _[h - 1].push(_[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              _[h - 1].push(_[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              _[h - 1].push(_[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              _[h - 1].push(_[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              _[h - 1].push(_[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              _[h - 1].push(_[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              _[h - 1].push(_[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              _[h - 1].push(_[h]);
              break;
            case 98:
              this.$ = [_[h]];
              break;
            case 99:
              _[h - 1].push(_[h]);
              break;
            case 100:
              this.$ = [_[h]];
              break;
            case 101:
              _[h - 1].push(_[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(d, p) {
          throw new Error(d);
        },
        parse: function(d) {
          var p = this, g = [0], y = [null], b = [], _ = this.table, v = "", h = 0, S = 0;
          this.lexer.setInput(d), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          b.push(E);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var le;
            return le = p.lexer.lex() || 1, typeof le != "number" && (le = p.symbols_[le] || le), le;
          }
          for (var D, x, T, M, k = {}, I, V, B, Y; ; ) {
            if (x = g[g.length - 1], this.defaultActions[x] ? T = this.defaultActions[x] : ((D === null || typeof D > "u") && (D = w()), T = _[x] && _[x][D]), typeof T > "u" || !T.length || !T[0]) {
              var $ = "";
              {
                Y = [];
                for (I in _[x]) this.terminals_[I] && I > 2 && Y.push("'" + this.terminals_[I] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + Y.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : $ = "Parse error on line " + (h + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: E, expected: Y });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + x + ", token: " + D);
            switch (T[0]) {
              case 1:
                g.push(D), y.push(this.lexer.yytext), b.push(this.lexer.yylloc), g.push(T[1]), D = null, S = this.lexer.yyleng, v = this.lexer.yytext, h = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (V = this.productions_[T[1]][1], k.$ = y[y.length - V], k._$ = { first_line: b[b.length - (V || 1)].first_line, last_line: b[b.length - 1].last_line, first_column: b[b.length - (V || 1)].first_column, last_column: b[b.length - 1].last_column }, O && (k._$.range = [b[b.length - (V || 1)].range[0], b[b.length - 1].range[1]]), M = this.performAction.call(k, v, S, h, this.yy, T[1], y, b), typeof M < "u")
                  return M;
                V && (g = g.slice(0, -1 * V * 2), y = y.slice(0, -1 * V), b = b.slice(0, -1 * V)), g.push(this.productions_[T[1]][0]), y.push(k.$), b.push(k._$), B = _[g[g.length - 2]][g[g.length - 1]], g.push(B);
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
          parseError: function(p, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, g);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var g = p.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var g = p.length, y = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
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
          less: function(p) {
            this.unput(this.match.slice(p));
          },
          pastInput: function() {
            var p = this.matched.substr(0, this.matched.length - this.match.length);
            return (p.length > 20 ? "..." : "") + p.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var p = this.match;
            return p.length < 20 && (p += this._input.substr(0, 20 - p.length)), (p.substr(0, 20) + (p.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var p = this.pastInput(), g = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, g, y, b, _;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), h = 0; h < v.length && (y = this._input.match(this.rules[v[h]]), !(y && (!g || y[0].length > g[0].length) && (g = y, b = h, !this.options.flex))); h++)
              ;
            return g ? (_ = g[0].match(/(?:\r\n?|\n).*/g), _ && (this.yylineno += _.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: _ ? _[_.length - 1].length - _[_.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], p = this.performAction.call(this, this.yy, this, v[b], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var p = this.next();
            return typeof p < "u" ? p : this.lex();
          },
          begin: function(p) {
            this.conditionStack.push(p);
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
          pushState: function(p) {
            this.begin(p);
          }
        };
        return f.options = {}, f.performAction = function(p, g, y, b) {
          function _(v, h) {
            return g.yytext = g.yytext.substring(v, g.yyleng - h + v);
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
var Yo = { exports: {} }, Xo = { exports: {} }, Wv;
function L0() {
  return Wv || (Wv = 1, (function(n, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = Bn(), o = i(s);
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
      BlockStatement: d,
      DecoratorBlock: d,
      PartialStatement: p,
      PartialBlockStatement: function(y) {
        p.call(this, y), this.acceptKey(y, "program");
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
    function d(g) {
      f.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function p(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, n.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var ey;
function mx() {
  return ey || (ey = 1, (function(n, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = L0(), o = i(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new o.default(), u.prototype.Program = function(y) {
      var b = !this.options.ignoreStandalone, _ = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, h = 0, S = v.length; h < S; h++) {
        var E = v[h], O = this.accept(E);
        if (O) {
          var w = f(v, h, _), D = d(v, h, _), x = O.openStandalone && w, T = O.closeStandalone && D, M = O.inlineStandalone && w && D;
          O.close && p(v, h, !0), O.open && g(v, h, !0), b && M && (p(v, h), g(v, h) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(v[h - 1].original)[1])), b && x && (p((E.program || E.inverse).body), g(v, h)), b && T && (p(v, h), g((E.inverse || E.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var b = y.program || y.inverse, _ = y.program && y.inverse, v = _, h = _;
      if (_ && _.chained)
        for (v = _.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var S = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: d(b.body),
        closeStandalone: f((v || b).body)
      };
      if (y.openStrip.close && p(b.body, null, !0), _) {
        var E = y.inverseStrip;
        E.open && g(b.body, null, !0), E.close && p(v.body, null, !0), y.closeStrip.open && g(h.body, null, !0), !this.options.ignoreStandalone && f(b.body) && d(v.body) && (g(b.body), p(v.body));
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
      var v = y[b - 1], h = y[b - 2];
      if (!v)
        return _;
      if (v.type === "ContentStatement")
        return (h || !_ ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function d(y, b, _) {
      b === void 0 && (b = -1);
      var v = y[b + 1], h = y[b + 2];
      if (!v)
        return _;
      if (v.type === "ContentStatement")
        return (h || !_ ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function p(y, b, _) {
      var v = y[b == null ? 0 : b + 1];
      if (!(!v || v.type !== "ContentStatement" || !_ && v.rightStripped)) {
        var h = v.value;
        v.value = v.value.replace(_ ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== h;
      }
    }
    function g(y, b, _) {
      var v = y[b == null ? y.length - 1 : b - 1];
      if (!(!v || v.type !== "ContentStatement" || !_ && v.leftStripped)) {
        var h = v.value;
        return v.value = v.value.replace(_ ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== h, v.leftStripped;
      }
    }
    r.default = u, n.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var fn = {}, ty;
function gx() {
  if (ty) return fn;
  ty = 1, fn.__esModule = !0, fn.SourceLocation = o, fn.id = u, fn.stripFlags = f, fn.stripComment = d, fn.preparePath = p, fn.prepareMustache = g, fn.prepareRawBlock = y, fn.prepareBlock = b, fn.prepareProgram = _, fn.preparePartialBlock = v;
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Bn(), i = n(r);
  function s(h, S) {
    if (S = S.path ? S.path.original : S, h.path.original !== S) {
      var E = { loc: h.path.loc };
      throw new i.default(h.path.original + " doesn't match " + S, E);
    }
  }
  function o(h, S) {
    this.source = h, this.start = {
      line: S.first_line,
      column: S.first_column
    }, this.end = {
      line: S.last_line,
      column: S.last_column
    };
  }
  function u(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function f(h, S) {
    return {
      open: h.charAt(2) === "~",
      close: S.charAt(S.length - 3) === "~"
    };
  }
  function d(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function p(h, S, E) {
    E = this.locInfo(E);
    for (var O = h ? "@" : "", w = [], D = 0, x = 0, T = S.length; x < T; x++) {
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
      data: h,
      depth: D,
      parts: w,
      original: O,
      loc: E
    };
  }
  function g(h, S, E, O, w, D) {
    var x = O.charAt(3) || O.charAt(2), T = x !== "{" && x !== "&", M = /\*/.test(O);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: h,
      params: S,
      hash: E,
      escaped: T,
      strip: w,
      loc: this.locInfo(D)
    };
  }
  function y(h, S, E, O) {
    s(h, E), O = this.locInfo(O);
    var w = {
      type: "Program",
      body: S,
      strip: {},
      loc: O
    };
    return {
      type: "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: w,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function b(h, S, E, O, w, D) {
    O && O.path && s(h, O);
    var x = /\*/.test(h.open);
    S.blockParams = h.blockParams;
    var T = void 0, M = void 0;
    if (E) {
      if (x)
        throw new i.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = O.strip), M = E.strip, T = E.program;
    }
    return w && (w = T, T = S, S = w), {
      type: x ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: S,
      inverse: T,
      openStrip: h.strip,
      inverseStrip: M,
      closeStrip: O && O.strip,
      loc: this.locInfo(D)
    };
  }
  function _(h, S) {
    if (!S && h.length) {
      var E = h[0].loc, O = h[h.length - 1].loc;
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
      body: h,
      strip: {},
      loc: S
    };
  }
  function v(h, S, E, O) {
    return s(h, E), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: S,
      openStrip: h.strip,
      closeStrip: E && E.strip,
      loc: this.locInfo(O)
    };
  }
  return fn;
}
var ny;
function vx() {
  if (ny) return Ti;
  ny = 1, Ti.__esModule = !0, Ti.parseWithoutProcessing = y, Ti.parse = b;
  function n(_) {
    if (_ && _.__esModule)
      return _;
    var v = {};
    if (_ != null)
      for (var h in _)
        Object.prototype.hasOwnProperty.call(_, h) && (v[h] = _[h]);
    return v.default = _, v;
  }
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var i = px(), s = r(i), o = mx(), u = r(o), f = gx(), d = n(f), p = tn();
  Ti.parser = s.default;
  var g = {};
  p.extend(g, d);
  function y(_, v) {
    if (_.type === "Program")
      return _;
    s.default.yy = g, g.locInfo = function(S) {
      return new g.SourceLocation(v && v.srcName, S);
    };
    var h = s.default.parse(_);
    return h;
  }
  function b(_, v) {
    var h = y(_, v), S = new u.default(v);
    return S.accept(h);
  }
  return Ti;
}
var Oi = {}, ry;
function yx() {
  if (ry) return Oi;
  ry = 1, Oi.__esModule = !0, Oi.Compiler = d, Oi.precompile = p, Oi.compile = g;
  function n(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = Bn(), i = n(r), s = tn(), o = z0(), u = n(o), f = [].slice;
  function d() {
  }
  d.prototype = {
    compiler: d,
    equals: function(v) {
      var h = this.opcodes.length;
      if (v.opcodes.length !== h)
        return !1;
      for (var S = 0; S < h; S++) {
        var E = this.opcodes[S], O = v.opcodes[S];
        if (E.opcode !== O.opcode || !y(E.args, O.args))
          return !1;
      }
      h = this.children.length;
      for (var S = 0; S < h; S++)
        if (!this.children[S].equals(v.children[S]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(v, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(v);
    },
    compileProgram: function(v) {
      var h = new this.compiler(), S = h.compile(v, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[E] = S, this.useDepths = this.useDepths || S.useDepths, E;
    },
    accept: function(v) {
      if (!this[v.type])
        throw new i.default("Unknown type: " + v.type, v);
      this.sourceNode.unshift(v);
      var h = this[v.type](v);
      return this.sourceNode.shift(), h;
    },
    Program: function(v) {
      this.options.blockParams.unshift(v.blockParams);
      for (var h = v.body, S = h.length, E = 0; E < S; E++)
        this.accept(h[E]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      b(v);
      var h = v.program, S = v.inverse;
      h = h && this.compileProgram(h), S = S && this.compileProgram(S);
      var E = this.classifySexpr(v);
      E === "helper" ? this.helperSexpr(v, h, S) : E === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", h), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, h, S), this.opcode("pushProgram", h), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var h = v.program && this.compileProgram(v.program), S = this.setupFullMustacheParams(v, h, void 0), E = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, E.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var h = v.program;
      h && (h = this.compileProgram(v.program));
      var S = v.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, v);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = v.name.original, O = v.name.type === "SubExpression";
      O && this.accept(v.name), this.setupFullMustacheParams(v, h, void 0, !0);
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
      var h = this.classifySexpr(v);
      h === "simple" ? this.simpleSexpr(v) : h === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, h, S) {
      var E = v.path, O = E.parts[0], w = h != null || S != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", S), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", O, w);
    },
    simpleSexpr: function(v) {
      var h = v.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, h, S) {
      var E = this.setupFullMustacheParams(v, h, S), O = v.path, w = O.parts[0];
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
      var h = v.parts[0], S = u.default.helpers.scopedId(v), E = !v.depth && !S && this.blockParamIndex(h);
      E ? this.opcode("lookupBlockParam", E, v.parts) : h ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, S) : this.opcode("pushContext");
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
      var h = v.pairs, S = 0, E = h.length;
      for (this.opcode("pushHash"); S < E; S++)
        this.pushParam(h[S].value);
      for (; S--; )
        this.opcode("assignToHash", h[S].key);
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
      var h = u.default.helpers.simpleId(v.path), S = h && !!this.blockParamIndex(v.path.parts[0]), E = !S && u.default.helpers.helperExpression(v), O = !S && (E || h);
      if (O && !E) {
        var w = v.path.parts[0], D = this.options;
        D.knownHelpers[w] ? E = !0 : D.knownHelpersOnly && (O = !1);
      }
      return E ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var h = 0, S = v.length; h < S; h++)
        this.pushParam(v[h]);
    },
    pushParam: function(v) {
      var h = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", h, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (S = this.blockParamIndex(v.parts[0])), S) {
            var E = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, E);
          } else
            h = v.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, h);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, h, S, E) {
      var O = v.params;
      return this.pushParams(O), this.opcode("pushProgram", h), this.opcode("pushProgram", S), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", E), O;
    },
    blockParamIndex: function(v) {
      for (var h = 0, S = this.options.blockParams.length; h < S; h++) {
        var E = this.options.blockParams[h], O = E && s.indexOf(E, v);
        if (E && O >= 0)
          return [h, O];
      }
    }
  };
  function p(_, v, h) {
    if (_ == null || typeof _ != "string" && _.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + _);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = h.parse(_, v), E = new h.Compiler().compile(S, v);
    return new h.JavaScriptCompiler().compile(E, v);
  }
  function g(_, v, h) {
    if (v === void 0 && (v = {}), _ == null || typeof _ != "string" && _.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + _);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = void 0;
    function E() {
      var w = h.parse(_, v), D = new h.Compiler().compile(w, v), x = new h.JavaScriptCompiler().compile(D, v, void 0, !0);
      return h.template(x);
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
      for (var h = 0; h < _.length; h++)
        if (!y(_[h], v[h]))
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
  return Oi;
}
var $o = { exports: {} }, Qo = { exports: {} }, Hs = {}, sh = {}, Ko = {}, Jo = {}, ay;
function _x() {
  if (ay) return Jo;
  ay = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Jo.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Jo.decode = function(r) {
    var i = 65, s = 90, o = 97, u = 122, f = 48, d = 57, p = 43, g = 47, y = 26, b = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + y : f <= r && r <= d ? r - f + b : r == p ? 62 : r == g ? 63 : -1;
  }, Jo;
}
var iy;
function P0() {
  if (iy) return Ko;
  iy = 1;
  var n = _x(), r = 5, i = 1 << r, s = i - 1, o = i;
  function u(d) {
    return d < 0 ? (-d << 1) + 1 : (d << 1) + 0;
  }
  function f(d) {
    var p = (d & 1) === 1, g = d >> 1;
    return p ? -g : g;
  }
  return Ko.encode = function(p) {
    var g = "", y, b = u(p);
    do
      y = b & s, b >>>= r, b > 0 && (y |= o), g += n.encode(y);
    while (b > 0);
    return g;
  }, Ko.decode = function(p, g, y) {
    var b = p.length, _ = 0, v = 0, h, S;
    do {
      if (g >= b)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = n.decode(p.charCodeAt(g++)), S === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(g - 1));
      h = !!(S & o), S &= s, _ = _ + (S << v), v += r;
    } while (h);
    y.value = f(_), y.rest = g;
  }, Ko;
}
var lh = {}, sy;
function sl() {
  return sy || (sy = 1, (function(n) {
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
      for (var k = n.isAbsolute(T), I = T.split(/\/+/), V, B = 0, Y = I.length - 1; Y >= 0; Y--)
        V = I[Y], V === "." ? I.splice(Y, 1) : V === ".." ? B++ : B > 0 && (V === "" ? (I.splice(Y + 1, B), B = 0) : (I.splice(Y, 2), B--));
      return T = I.join("/"), T === "" && (T = k ? "/" : "."), M ? (M.path = T, u(M)) : T;
    }
    n.normalize = f;
    function d(x, T) {
      x === "" && (x = "."), T === "" && (T = ".");
      var M = o(T), k = o(x);
      if (k && (x = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || T.match(s))
        return T;
      if (k && !k.host && !k.path)
        return k.host = T, u(k);
      var I = T.charAt(0) === "/" ? T : f(x.replace(/\/+$/, "") + "/" + T);
      return k ? (k.path = I, u(k)) : I;
    }
    n.join = d, n.isAbsolute = function(x) {
      return x.charAt(0) === "/" || i.test(x);
    };
    function p(x, T) {
      x === "" && (x = "."), x = x.replace(/\/$/, "");
      for (var M = 0; T.indexOf(x + "/") !== 0; ) {
        var k = x.lastIndexOf("/");
        if (k < 0 || (x = x.slice(0, k), x.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++M;
      }
      return Array(M + 1).join("../") + T.substr(x.length + 1);
    }
    n.relative = p;
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
    function h(x, T, M) {
      var k = E(x.source, T.source);
      return k !== 0 || (k = x.originalLine - T.originalLine, k !== 0) || (k = x.originalColumn - T.originalColumn, k !== 0 || M) || (k = x.generatedColumn - T.generatedColumn, k !== 0) || (k = x.generatedLine - T.generatedLine, k !== 0) ? k : E(x.name, T.name);
    }
    n.compareByOriginalPositions = h;
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
          var I = k.path.lastIndexOf("/");
          I >= 0 && (k.path = k.path.substring(0, I + 1));
        }
        T = d(u(k), T);
      }
      return f(T);
    }
    n.computeSourceURL = D;
  })(lh)), lh;
}
var oh = {}, ly;
function B0() {
  if (ly) return oh;
  ly = 1;
  var n = sl(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var d = new s(), p = 0, g = u.length; p < g; p++)
      d.add(u[p], f);
    return d;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var d = i ? u : n.toSetString(u), p = i ? this.has(u) : r.call(this._set, d), g = this._array.length;
    (!p || f) && this._array.push(u), p || (i ? this._set.set(u, g) : this._set[d] = g);
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
      var d = n.toSetString(u);
      if (r.call(this._set, d))
        return this._set[d];
    }
    throw new Error('"' + u + '" is not in the set.');
  }, s.prototype.at = function(u) {
    if (u >= 0 && u < this._array.length)
      return this._array[u];
    throw new Error("No element indexed by " + u);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, oh.ArraySet = s, oh;
}
var uh = {}, oy;
function bx() {
  if (oy) return uh;
  oy = 1;
  var n = sl();
  function r(s, o) {
    var u = s.generatedLine, f = o.generatedLine, d = s.generatedColumn, p = o.generatedColumn;
    return f > u || f == u && p >= d || n.compareByGeneratedPositionsInflated(s, o) <= 0;
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
  }, uh.MappingList = i, uh;
}
var uy;
function I0() {
  if (uy) return sh;
  uy = 1;
  var n = P0(), r = sl(), i = B0().ArraySet, s = bx().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var d = f.sourceRoot, p = new o({
      file: f.file,
      sourceRoot: d
    });
    return f.eachMapping(function(g) {
      var y = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (y.source = g.source, d != null && (y.source = r.relative(d, y.source)), y.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (y.name = g.name)), p.addMapping(y);
    }), f.sources.forEach(function(g) {
      var y = g;
      d !== null && (y = r.relative(d, g)), p._sources.has(y) || p._sources.add(y);
      var b = f.sourceContentFor(g);
      b != null && p.setSourceContent(g, b);
    }), p;
  }, o.prototype.addMapping = function(f) {
    var d = r.getArg(f, "generated"), p = r.getArg(f, "original", null), g = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(d, p, g, y), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: d.line,
      generatedColumn: d.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: g,
      name: y
    });
  }, o.prototype.setSourceContent = function(f, d) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), d != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = d) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, d, p) {
    var g = d;
    if (d == null) {
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
        var h = f.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        h.source != null && (v.source = h.source, p != null && (v.source = r.join(p, v.source)), y != null && (v.source = r.relative(y, v.source)), v.originalLine = h.line, v.originalColumn = h.column, h.name != null && (v.name = h.name));
      }
      var S = v.source;
      S != null && !b.has(S) && b.add(S);
      var E = v.name;
      E != null && !_.has(E) && _.add(E);
    }, this), this._sources = b, this._names = _, f.sources.forEach(function(v) {
      var h = f.sourceContentFor(v);
      h != null && (p != null && (v = r.join(p, v)), y != null && (v = r.relative(y, v)), this.setSourceContent(v, h));
    }, this);
  }, o.prototype._validateMapping = function(f, d, p, g) {
    if (d && typeof d.line != "number" && typeof d.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !d && !p && !g)) {
      if (f && "line" in f && "column" in f && d && "line" in d && "column" in d && f.line > 0 && f.column >= 0 && d.line > 0 && d.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: d,
        name: g
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, d = 1, p = 0, g = 0, y = 0, b = 0, _ = "", v, h, S, E, O = this._mappings.toArray(), w = 0, D = O.length; w < D; w++) {
      if (h = O[w], v = "", h.generatedLine !== d)
        for (f = 0; h.generatedLine !== d; )
          v += ";", d++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, O[w - 1]))
          continue;
        v += ",";
      }
      v += n.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (E = this._sources.indexOf(h.source), v += n.encode(E - b), b = E, v += n.encode(h.originalLine - 1 - g), g = h.originalLine - 1, v += n.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (S = this._names.indexOf(h.name), v += n.encode(S - y), y = S)), _ += v;
    }
    return _;
  }, o.prototype._generateSourcesContent = function(f, d) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      d != null && (p = r.relative(d, p));
      var g = r.toSetString(p);
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
  }, sh.SourceMapGenerator = o, sh;
}
var qs = {}, ch = {}, cy;
function Sx() {
  return cy || (cy = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(i, s, o, u, f, d) {
      var p = Math.floor((s - i) / 2) + i, g = f(o, u[p], !0);
      return g === 0 ? p : g > 0 ? s - p > 1 ? r(p, s, o, u, f, d) : d == n.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : p : p - i > 1 ? r(i, p, o, u, f, d) : d == n.LEAST_UPPER_BOUND ? p : i < 0 ? -1 : i;
    }
    n.search = function(s, o, u, f) {
      if (o.length === 0)
        return -1;
      var d = r(
        -1,
        o.length,
        s,
        o,
        u,
        f || n.GREATEST_LOWER_BOUND
      );
      if (d < 0)
        return -1;
      for (; d - 1 >= 0 && u(o[d], o[d - 1], !0) === 0; )
        --d;
      return d;
    };
  })(ch)), ch;
}
var fh = {}, fy;
function Ex() {
  if (fy) return fh;
  fy = 1;
  function n(s, o, u) {
    var f = s[o];
    s[o] = s[u], s[u] = f;
  }
  function r(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function i(s, o, u, f) {
    if (u < f) {
      var d = r(u, f), p = u - 1;
      n(s, d, f);
      for (var g = s[f], y = u; y < f; y++)
        o(s[y], g) <= 0 && (p += 1, n(s, p, y));
      n(s, p + 1, y);
      var b = p + 1;
      i(s, o, u, b - 1), i(s, o, b + 1, f);
    }
  }
  return fh.quickSort = function(s, o) {
    i(s, o, 0, s.length - 1);
  }, fh;
}
var hy;
function xx() {
  if (hy) return qs;
  hy = 1;
  var n = sl(), r = Sx(), i = B0().ArraySet, s = P0(), o = Ex().quickSort;
  function u(g, y) {
    var b = g;
    return typeof g == "string" && (b = n.parseSourceMapInput(g)), b.sections != null ? new p(b, y) : new f(b, y);
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
    var v = b || null, h = _ || u.GENERATED_ORDER, S;
    switch (h) {
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
    var v = [], h = this._findMapping(
      _,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var S = this._originalMappings[h];
      if (y.column === void 0)
        for (var E = S.originalLine; S && S.originalLine === E; )
          v.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++h];
      else
        for (var O = S.originalColumn; S && S.originalLine === b && S.originalColumn == O; )
          v.push({
            line: n.getArg(S, "generatedLine", null),
            column: n.getArg(S, "generatedColumn", null),
            lastColumn: n.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++h];
    }
    return v;
  }, qs.SourceMapConsumer = u;
  function f(g, y) {
    var b = g;
    typeof g == "string" && (b = n.parseSourceMapInput(g));
    var _ = n.getArg(b, "version"), v = n.getArg(b, "sources"), h = n.getArg(b, "names", []), S = n.getArg(b, "sourceRoot", null), E = n.getArg(b, "sourcesContent", null), O = n.getArg(b, "mappings"), w = n.getArg(b, "file", null);
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    S && (S = n.normalize(S)), v = v.map(String).map(n.normalize).map(function(D) {
      return S && n.isAbsolute(S) && n.isAbsolute(D) ? n.relative(S, D) : D;
    }), this._names = i.fromArray(h.map(String), !0), this._sources = i.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
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
    var _ = Object.create(f.prototype), v = _._names = i.fromArray(y._names.toArray(), !0), h = _._sources = i.fromArray(y._sources.toArray(), !0);
    _.sourceRoot = y._sourceRoot, _.sourcesContent = y._generateSourcesContent(
      _._sources.toArray(),
      _.sourceRoot
    ), _.file = y._file, _._sourceMapURL = b, _._absoluteSources = _._sources.toArray().map(function(M) {
      return n.computeSourceURL(_.sourceRoot, M, b);
    });
    for (var S = y._mappings.toArray().slice(), E = _.__generatedMappings = [], O = _.__originalMappings = [], w = 0, D = S.length; w < D; w++) {
      var x = S[w], T = new d();
      T.generatedLine = x.generatedLine, T.generatedColumn = x.generatedColumn, x.source && (T.source = h.indexOf(x.source), T.originalLine = x.originalLine, T.originalColumn = x.originalColumn, x.name && (T.name = v.indexOf(x.name)), O.push(T)), E.push(T);
    }
    return o(_.__originalMappings, n.compareByOriginalPositions), _;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function d() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(y, b) {
    for (var _ = 1, v = 0, h = 0, S = 0, E = 0, O = 0, w = y.length, D = 0, x = {}, T = {}, M = [], k = [], I, V, B, Y, $; D < w; )
      if (y.charAt(D) === ";")
        _++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (I = new d(), I.generatedLine = _, Y = D; Y < w && !this._charIsMappingSeparator(y, Y); Y++)
          ;
        if (V = y.slice(D, Y), B = x[V], B)
          D += V.length;
        else {
          for (B = []; D < Y; )
            s.decode(y, D, T), $ = T.value, D = T.rest, B.push($);
          if (B.length === 2)
            throw new Error("Found a source, but no line and column");
          if (B.length === 3)
            throw new Error("Found a source and line, but no column");
          x[V] = B;
        }
        I.generatedColumn = v + B[0], v = I.generatedColumn, B.length > 1 && (I.source = E + B[1], E += B[1], I.originalLine = h + B[2], h = I.originalLine, I.originalLine += 1, I.originalColumn = S + B[3], S = I.originalColumn, B.length > 4 && (I.name = O + B[4], O += B[4])), k.push(I), typeof I.originalLine == "number" && M.push(I);
      }
    o(k, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(M, n.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(y, b, _, v, h, S) {
    if (y[_] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[_]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
    return r.search(y, b, h, S);
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
        var h = n.getArg(v, "source", null);
        h !== null && (h = this._sources.at(h), h = n.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var S = n.getArg(v, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: h,
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
    var h;
    if (this.sourceRoot != null && (h = n.urlParse(this.sourceRoot))) {
      var S = v.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + v))
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
      var h = this._originalMappings[v];
      if (h.source === _.source)
        return {
          line: n.getArg(h, "generatedLine", null),
          column: n.getArg(h, "generatedColumn", null),
          lastColumn: n.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, qs.BasicSourceMapConsumer = f;
  function p(g, y) {
    var b = g;
    typeof g == "string" && (b = n.parseSourceMapInput(g));
    var _ = n.getArg(b, "version"), v = n.getArg(b, "sections");
    if (_ != this._version)
      throw new Error("Unsupported version: " + _);
    this._sources = new i(), this._names = new i();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = n.getArg(S, "offset"), O = n.getArg(E, "line"), w = n.getArg(E, "column");
      if (O < h.line || O === h.line && w < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = E, {
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
  return p.prototype = Object.create(u.prototype), p.prototype.constructor = u, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var g = [], y = 0; y < this._sections.length; y++)
        for (var b = 0; b < this._sections[y].consumer.sources.length; b++)
          g.push(this._sections[y].consumer.sources[b]);
      return g;
    }
  }), p.prototype.originalPositionFor = function(y) {
    var b = {
      generatedLine: n.getArg(y, "line"),
      generatedColumn: n.getArg(y, "column")
    }, _ = r.search(
      b,
      this._sections,
      function(h, S) {
        var E = h.generatedLine - S.generatedOffset.generatedLine;
        return E || h.generatedColumn - S.generatedOffset.generatedColumn;
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
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(y, b) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var v = this._sections[_], h = v.consumer.sourceContentFor(y, !0);
      if (h)
        return h;
    }
    if (b)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(y) {
    for (var b = 0; b < this._sections.length; b++) {
      var _ = this._sections[b];
      if (_.consumer._findSourceIndex(n.getArg(y, "source")) !== -1) {
        var v = _.consumer.generatedPositionFor(y);
        if (v) {
          var h = {
            line: v.line + (_.generatedOffset.generatedLine - 1),
            column: v.column + (_.generatedOffset.generatedLine === v.line ? _.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(y, b) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var _ = 0; _ < this._sections.length; _++)
      for (var v = this._sections[_], h = v.consumer._generatedMappings, S = 0; S < h.length; S++) {
        var E = h[S], O = v.consumer._sources.at(E.source);
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
  }, qs.IndexedSourceMapConsumer = p, qs;
}
var hh = {}, dy;
function Cx() {
  if (dy) return hh;
  dy = 1;
  var n = I0().SourceMapGenerator, r = sl(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(f, d, p, g, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = d ?? null, this.source = p ?? null, this.name = y ?? null, this[o] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(d, p, g) {
    var y = new u(), b = d.split(i), _ = 0, v = function() {
      var w = x(), D = x() || "";
      return w + D;
      function x() {
        return _ < b.length ? b[_++] : void 0;
      }
    }, h = 1, S = 0, E = null;
    return p.eachMapping(function(w) {
      if (E !== null)
        if (h < w.generatedLine)
          O(E, v()), h++, S = 0;
        else {
          var D = b[_] || "", x = D.substr(0, w.generatedColumn - S);
          b[_] = D.substr(w.generatedColumn - S), S = w.generatedColumn, O(E, x), E = w;
          return;
        }
      for (; h < w.generatedLine; )
        y.add(v()), h++;
      if (S < w.generatedColumn) {
        var D = b[_] || "";
        y.add(D.substr(0, w.generatedColumn)), b[_] = D.substr(w.generatedColumn), S = w.generatedColumn;
      }
      E = w;
    }, this), _ < b.length && (E && O(E, v()), y.add(b.splice(_).join(""))), p.sources.forEach(function(w) {
      var D = p.sourceContentFor(w);
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
  }, u.prototype.add = function(d) {
    if (Array.isArray(d))
      d.forEach(function(p) {
        this.add(p);
      }, this);
    else if (d[o] || typeof d == "string")
      d && this.children.push(d);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + d
      );
    return this;
  }, u.prototype.prepend = function(d) {
    if (Array.isArray(d))
      for (var p = d.length - 1; p >= 0; p--)
        this.prepend(d[p]);
    else if (d[o] || typeof d == "string")
      this.children.unshift(d);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + d
      );
    return this;
  }, u.prototype.walk = function(d) {
    for (var p, g = 0, y = this.children.length; g < y; g++)
      p = this.children[g], p[o] ? p.walk(d) : p !== "" && d(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(d) {
    var p, g, y = this.children.length;
    if (y > 0) {
      for (p = [], g = 0; g < y - 1; g++)
        p.push(this.children[g]), p.push(d);
      p.push(this.children[g]), this.children = p;
    }
    return this;
  }, u.prototype.replaceRight = function(d, p) {
    var g = this.children[this.children.length - 1];
    return g[o] ? g.replaceRight(d, p) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(d, p) : this.children.push("".replace(d, p)), this;
  }, u.prototype.setSourceContent = function(d, p) {
    this.sourceContents[r.toSetString(d)] = p;
  }, u.prototype.walkSourceContents = function(d) {
    for (var p = 0, g = this.children.length; p < g; p++)
      this.children[p][o] && this.children[p].walkSourceContents(d);
    for (var y = Object.keys(this.sourceContents), p = 0, g = y.length; p < g; p++)
      d(r.fromSetString(y[p]), this.sourceContents[y[p]]);
  }, u.prototype.toString = function() {
    var d = "";
    return this.walk(function(p) {
      d += p;
    }), d;
  }, u.prototype.toStringWithSourceMap = function(d) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, g = new n(d), y = !1, b = null, _ = null, v = null, h = null;
    return this.walk(function(S, E) {
      p.code += S, E.source !== null && E.line !== null && E.column !== null ? ((b !== E.source || _ !== E.line || v !== E.column || h !== E.name) && g.addMapping({
        source: E.source,
        original: {
          line: E.line,
          column: E.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: E.name
      }), b = E.source, _ = E.line, v = E.column, h = E.name, y = !0) : y && (g.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), b = null, y = !1);
      for (var O = 0, w = S.length; O < w; O++)
        S.charCodeAt(O) === s ? (p.line++, p.column = 0, O + 1 === w ? (b = null, y = !1) : y && g.addMapping({
          source: E.source,
          original: {
            line: E.line,
            column: E.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: E.name
        })) : p.column++;
    }), this.walkSourceContents(function(S, E) {
      g.setSourceContent(S, E);
    }), { code: p.code, map: g };
  }, hh.SourceNode = u, hh;
}
var py;
function wx() {
  return py || (py = 1, Hs.SourceMapGenerator = I0().SourceMapGenerator, Hs.SourceMapConsumer = xx().SourceMapConsumer, Hs.SourceNode = Cx().SourceNode), Hs;
}
var my;
function Ax() {
  return my || (my = 1, (function(n, r) {
    r.__esModule = !0;
    var i = tn(), s = void 0;
    try {
      var o = wx();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(d, p, g, y) {
      this.src = "", y && this.add(y);
    }, s.prototype = {
      add: function(p) {
        i.isArray(p) && (p = p.join("")), this.src += p;
      },
      prepend: function(p) {
        i.isArray(p) && (p = p.join("")), this.src = p + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(d, p, g) {
      if (i.isArray(d)) {
        for (var y = [], b = 0, _ = d.length; b < _; b++)
          y.push(p.wrap(d[b], g));
        return y;
      } else if (typeof d == "boolean" || typeof d == "number")
        return d + "";
      return d;
    }
    function f(d) {
      this.srcFile = d, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(p, g) {
        this.source.unshift(this.wrap(p, g));
      },
      push: function(p, g) {
        this.source.push(this.wrap(p, g));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(g) {
          p.add(["  ", g, `
`]);
        }), p;
      },
      each: function(p) {
        for (var g = 0, y = this.source.length; g < y; g++)
          p(this.source[g]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new s(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof s ? p : (p = u(p, this, g), new s(g.start.line, g.start.column, this.srcFile, p));
      },
      functionCall: function(p, g, y) {
        return y = this.generateList(y), this.wrap([p, g ? "." + g + "(" : "(", y, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var g = this, y = [];
        Object.keys(p).forEach(function(_) {
          var v = u(p[_], g);
          v !== "undefined" && y.push([g.quotedString(_), ":", v]);
        });
        var b = this.generateList(y);
        return b.prepend("{"), b.add("}"), b;
      },
      generateList: function(p) {
        for (var g = this.empty(), y = 0, b = p.length; y < b; y++)
          y && g.add(","), g.add(u(p[y], this));
        return g;
      },
      generateArray: function(p) {
        var g = this.generateList(p);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, n.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var gy;
function Tx() {
  return gy || (gy = 1, (function(n, r) {
    r.__esModule = !0;
    function i(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var s = Qh(), o = Bn(), u = i(o), f = tn(), d = Ax(), p = i(d);
    function g(_) {
      this.value = _;
    }
    function y() {
    }
    y.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(v, h) {
        return this.internalNameLookup(v, h);
      },
      depthedLookup: function(v) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(v), ")"];
      },
      compilerInfo: function() {
        var v = s.COMPILER_REVISION, h = s.REVISION_CHANGES[v];
        return [v, h];
      },
      appendToBuffer: function(v, h, S) {
        return f.isArray(v) || (v = [v]), v = this.source.wrap(v, h), this.environment.isSimple ? ["return ", v, ";"] : S ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, h, S, E) {
        this.environment = v, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, h), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
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
        var I = this.context, V = I.programs, B = I.decorators;
        for (x = 0, T = V.length; x < T; x++)
          V[x] && (k[x] = V[x], B[x] && (k[x + "_d"] = B[x], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), E ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), h.srcName ? (k = k.toStringWithSourceMap({ file: h.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new p.default(this.options.srcName), this.decorators = new p.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var h = this, S = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (S += ", " + E.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(x) {
          var T = h.aliases[x];
          T.children && T.referenceCount > 1 && (S += ", alias" + ++O + "=" + x, T.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var D = this.mergeSource(S);
        return v ? (w.push(D), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(v) {
        var h = this.environment.isSimple, S = !this.forceBuffer, E = void 0, O = void 0, w = void 0, D = void 0;
        return this.source.each(function(x) {
          x.appendToBuffer ? (w ? x.prepend("  + ") : w = x, D = x) : (w && (O ? w.prepend("buffer += ") : E = !0, D.add(";"), w = D = void 0), O = !0, h || (S = !1));
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
        var h = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(v, 0, S);
        var E = this.popStack();
        S.splice(1, 0, E), this.push(this.source.functionCall(h, "call", S));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var v = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var S = this.topStack();
        h.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(v, "call", h), "}"]);
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
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
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
      lookupOnContext: function(v, h, S, E) {
        var O = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[O++])) : this.pushContext(), this.resolvePath("context", v, O, h, S);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(v, h) {
        this.useBlockParams = !0, this.push(["blockParams[", v[0], "][", v[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(v, h, S) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, S);
      },
      resolvePath: function(v, h, S, E, O) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(b(this.options.strict && O, this, h, S, v));
          return;
        }
        for (var D = h.length; S < D; S++)
          this.replaceStack(function(x) {
            var T = w.nameLookup(x, h[S], v);
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
      pushStringParam: function(v, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof v == "string" ? this.pushString(v) : this.pushStackLiteral(v));
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
      registerDecorator: function(v, h) {
        var S = this.nameLookup("decorators", h, "decorator"), E = this.setupHelperArgs(h, v);
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
      invokeHelper: function(v, h, S) {
        var E = this.popStack(), O = this.setupHelper(v, h), w = [];
        S && w.push(O.name), w.push(E), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(w, "||"), ")"], x = this.source.functionCall(D, "call", O.callParams);
        this.push(x);
      },
      itemsSeparatedBy: function(v, h) {
        var S = [];
        S.push(v[0]);
        for (var E = 1; E < v.length; E++)
          S.push(h, v[E]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, h) {
        var S = this.setupHelper(v, h);
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
      invokeAmbiguous: function(v, h) {
        this.useRegister("helper");
        var S = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, v, h), O = this.lastHelper = this.nameLookup("helpers", v, "helper"), w = ["(", "(helper = ", O, " || ", S, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, h, S) {
        var E = [], O = this.setupParams(h, 1, E);
        v && (h = this.popStack(), delete O.name), S && (O.indent = JSON.stringify(S)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", v ? E.unshift(h) : E.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), E.push(O), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var h = this.popStack(), S = void 0, E = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (E = this.popStack(), S = this.popStack());
        var w = this.hash;
        S && (w.contexts[v] = S), E && (w.types[v] = E), O && (w.ids[v] = O), w.values[v] = h;
      },
      pushId: function(v, h, S) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : v === "PathExpression" ? this.pushString(h) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, h) {
        for (var S = v.children, E = void 0, O = void 0, w = 0, D = S.length; w < D; w++) {
          E = S[w], O = new this.compiler();
          var x = this.matchExistingProgram(E);
          if (x == null) {
            this.context.programs.push("");
            var T = this.context.programs.length;
            E.index = T, E.name = "program" + T, this.context.programs[T] = O.compile(E, h, this.context, !this.precompile), this.context.decorators[T] = O.decorators, this.context.environments[T] = E, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
          } else
            E.index = x.index, E.name = "program" + x.index, this.useDepths = this.useDepths || x.useDepths, this.useBlockParams = this.useBlockParams || x.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var h = 0, S = this.context.environments.length; h < S; h++) {
          var E = this.context.environments[h];
          if (E && E.equals(v))
            return E;
        }
      },
      programExpression: function(v) {
        var h = this.environment.children[v], S = [h.index, "data", h.blockParams];
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
        var h = ["("], S = void 0, E = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof g)
          S = [w.value], h = ["(", S], O = !0;
        else {
          E = !0;
          var D = this.incrStack();
          h = ["((", this.push(D), " = ", w, ")"], S = this.topStack();
        }
        var x = v.call(this, S);
        O || this.popStack(), E && this.stackSlot--, this.push(h.concat(x, ")"));
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
        for (var h = 0, S = v.length; h < S; h++) {
          var E = v[h];
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
        var h = this.isInline(), S = (h ? this.inlineStack : this.compileStack).pop();
        if (!v && S instanceof g)
          return S.value;
        if (!h) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
      },
      topStack: function() {
        var v = this.isInline() ? this.inlineStack : this.compileStack, h = v[v.length - 1];
        return h instanceof g ? h.value : h;
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
        var h = this.aliases[v];
        return h ? (h.referenceCount++, h) : (h = this.aliases[v] = this.source.wrap(v), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(v, h, S) {
        var E = [], O = this.setupHelperArgs(h, v, E, S), w = this.nameLookup("helpers", h, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: O,
          name: w,
          callParams: [D].concat(E)
        };
      },
      setupParams: function(v, h, S) {
        var E = {}, O = [], w = [], D = [], x = !S, T = void 0;
        x && (S = []), E.name = this.quotedString(v), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (E.fn = k || "container.noop", E.inverse = M || "container.noop");
        for (var I = h; I--; )
          T = this.popStack(), S[I] = T, this.trackIds && (D[I] = this.popStack()), this.stringParams && (w[I] = this.popStack(), O[I] = this.popStack());
        return x && (E.args = this.source.generateArray(S)), this.trackIds && (E.ids = this.source.generateArray(D)), this.stringParams && (E.types = this.source.generateArray(w), E.contexts = this.source.generateArray(O)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(v, h, S, E) {
        var O = this.setupParams(v, h, S);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), E ? (this.useRegister("options"), S.push("options"), ["options=", O]) : S ? (S.push(O), "") : O;
      }
    }, (function() {
      for (var _ = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, h = 0, S = _.length; h < S; h++)
        v[_[h]] = !0;
    })(), y.isValidJavaScriptVariableName = function(_) {
      return !y.RESERVED_WORDS[_] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(_);
    };
    function b(_, v, h, S, E) {
      var O = v.popStack(), w = h.length;
      for (_ && w--; S < w; S++)
        O = v.nameLookup(O, h[S], E);
      return _ ? [v.aliasable("container.strict"), "(", O, ", ", v.quotedString(h[S]), ", ", JSON.stringify(v.source.currentLocation), " )"] : O;
    }
    r.default = y, n.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var vy;
function Ox() {
  return vy || (vy = 1, (function(n, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = dx(), o = i(s), u = z0(), f = i(u), d = vx(), p = yx(), g = Tx(), y = i(g), b = L0(), _ = i(b), v = j0(), h = i(v), S = o.default.create;
    function E() {
      var w = S();
      return w.compile = function(D, x) {
        return p.compile(D, x, w);
      }, w.precompile = function(D, x) {
        return p.precompile(D, x, w);
      }, w.AST = f.default, w.Compiler = p.Compiler, w.JavaScriptCompiler = y.default, w.Parser = d.parser, w.parse = d.parse, w.parseWithoutProcessing = d.parseWithoutProcessing, w;
    }
    var O = E();
    O.create = E, h.default(O), O.Visitor = _.default, O.default = O, r.default = O, n.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Wt = Ox();
const Yn = SillyTavern.getContext(), yr = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], vr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new Jy("dumb", {}).getSettings();
async function Nx({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: o,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: d,
  formatDescription: p,
  mainContextList: g,
  includeUserMacro: y,
  maxResponseToken: b,
  targetField: _,
  outputFormat: v
}) {
  if (!n)
    throw new Error("No connection profile selected.");
  const h = Yn.extensionSettings.connectionManager?.profiles?.find((M) => M.id === n);
  if (!h)
    throw new Error(`Connection profile with ID "${n}" not found.`);
  const S = h.api ? Yn.CONNECT_API_MAP[h.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${h.name}".`);
  const E = {};
  E.char = o.fields.name.value ?? "{{char}}", E.user = y && gr ? gr : "{{user}}", E.persona = "{{persona}}", E.targetField = _, E.userInstructions = Wt.compile(r.trim(), { noEscape: !0 })(E), E.fieldSpecificInstructions = Wt.compile(
    o.draftFields[_]?.prompt ?? o.fields[_]?.prompt,
    { noEscape: !0 }
  )({
    ...E,
    char: _ === "mes_example" ? "{{char}}" : E.char,
    user: _ === "mes_example" ? "{{user}}" : E.user
  }), E.activeFormatInstructions = Wt.compile(p.content, { noEscape: !0 })(
    E
  );
  {
    const M = [];
    o.selectedCharacterIndexes.forEach((k) => {
      const I = parseInt(k), V = u[I];
      V && M.push(V);
    }), E.characters = M;
  }
  {
    const M = {};
    Object.entries(f).filter(
      ([k, I]) => I.length > 0 && o.selectedWorldNames.includes(k) && I.some((V) => !V.disable)
    ).forEach(([k, I]) => {
      M[k] = I.filter((V) => !V.disable);
    }), E.lorebooks = M;
  }
  {
    const M = {}, k = {}, I = {}, V = _.startsWith("alternate_greetings_"), B = Bt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([$, le]) => {
      let fe = !1;
      if (B) {
        const ge = $.startsWith("alternate_greetings_");
        V ? fe = ge && $ !== _ || $ === "first_mes" : fe = ge;
      }
      if (!fe) {
        const ge = Wt.compile(le.value, { noEscape: !0 })({
          ...E,
          char: $ === "mes_example" ? "{{char}}" : E.char,
          user: $ === "mes_example" ? "{{user}}" : E.user
        });
        yr.includes($) ? M[le.label] = ge : $.startsWith("alternate_greetings_") && (k[$] = ge);
      }
    }), Object.entries(o.draftFields || {}).forEach(([$, le]) => {
      I[le.label] = Wt.compile(le.value, { noEscape: !0 })(E);
    });
    const Y = {};
    Object.keys(M).length > 0 && (Y.core = M), Object.keys(k).length > 0 && (Y.alternate_greetings = k), Object.keys(I).length > 0 && (Y.draft = I), E.fields = Y;
  }
  const O = [];
  {
    for (const M of g) {
      if (M.promptName === "chatHistory") {
        const B = await o0(S, i);
        if (B.warnings && B.warnings.length > 0)
          for (const Y of B.warnings)
            Ne("warning", Y);
        O.push(...B.result);
        continue;
      }
      let k = structuredClone(E);
      M.promptName === "stDescription" && (k.char = "{{char}}", k.user = "{{user}}");
      const I = d[M.promptName];
      if (!I)
        continue;
      const V = {
        role: M.role,
        content: Wt.compile(I.content, { noEscape: !0 })(k)
      };
      V.content = V.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), V.content = V.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), V.content = Yn.substituteParams(V.content), V.content = V.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), V.content = V.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), V.content && O.push(V);
    }
    s && O.push({
      role: "assistant",
      content: Nv(s, v)
    });
  }
  const w = await Yn.ConnectionManagerRequestService.sendRequest(
    n,
    O,
    b
  ), D = s ? Nv(s, v) + w.content : w.content, x = D0(D, v);
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
const Na = "SillyTavern-Character-Creator", U0 = "0.3.0", Dx = "F_1.8", Mx = {
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
], Qe = {
  stDescription: x0,
  charDefinitions: C0,
  lorebookDefinitions: w0,
  xmlFormat: QS,
  jsonFormat: KS,
  noneFormat: JS,
  worldInfoCharDefinition: WS,
  existingFieldDefinitions: tl,
  taskDescription: Xh,
  outputFormatInstructions: Yh,
  personaDescription: eE,
  reviseJsonPrompt: tE,
  reviseXmlPrompt: nE,
  reviseTaskDescription: rE
}, H0 = {
  version: U0,
  formatVersion: Dx,
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
      content: Qe.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: Qe.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: Qe.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: Qe.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: Qe.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: Qe.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: Qe.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: tl,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: Xh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: Yh,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: Qe.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: Qe.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: Qe.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: Qe.reviseTaskDescription,
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
function kh(n) {
  const i = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((o, u) => {
    const f = o.replace(/^\d+/, "");
    if (f) {
      const d = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), d;
    }
    return "";
  }).join("");
}
const Bt = new Jy(Mx.EXTENSION, H0);
async function kx() {
  return new Promise((n, r) => {
    Bt.initializeSettings({
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
                  content: Qe.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: Qe.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: Qe.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: Qe.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: Qe.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: Qe.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: Qe.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: tl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: Xh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: Yh,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: Qe.personaDescription,
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
                  content: Qe.personaDescription,
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
            return await Ne("info", `[${Na}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: Qe.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: Qe.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: Qe.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: tl,
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = x0), s;
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
              content: Qe.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: Qe.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: Qe.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = C0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = w0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = tl), s;
          }
        }
      ]
    }).then((i) => {
      n();
    }).catch((i) => {
      console.error(`[${Na}] Error initializing settings:`, i), Ne("error", `[${Na}] Failed to initialize settings: ${i.message}`), Yn.Popup.show.confirm(
        `[${Na}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Bt.resetSettings(), Ne("success", `[${Na}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const ye = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("button", { className: o, ...s, children: n });
}, Rx = ({ label: n, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = ee.useMemo(() => {
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
}, bu = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("select", { className: o, ...s, children: n });
}, Nn = ({ children: n, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = ee.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ A.jsx("textarea", { className: o, ...s, children: n });
};
var jx = Qy(), mn = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(mn || {}), $r = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))($r || {});
const zx = SillyTavern.getContext(), Ri = ({
  content: n,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var f;
  const d = ee.useRef(null), p = ee.useRef(null), [g, y] = ee.useState(!1), [b, _] = ee.useState(null), v = ee.useRef(zx.uuidv4()), h = ee.useRef({
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
    const w = d.current;
    if (!w) return;
    const D = (x) => {
      x.preventDefault(), o || S($r.CANCELLED);
    };
    return w.addEventListener("cancel", D), h.current.dlg = w, h.current.mainInput = p.current, xi.util.popups.push(h.current), w.showModal || (w.classList.add("poly_dialog"), Qg.registerDialog(w), new ResizeObserver((x) => {
      for (const T of x)
        Qg.reposition(T.target);
    }).observe(w)), w.showModal(), qf(), () => {
      $g(xi.util.popups, h.current), qf(), w.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (w) => {
    var D, x;
    let T = w;
    if (r === mn.INPUT && (w >= $r.AFFIRMATIVE ? T = (D = p.current) == null ? void 0 : D.value : w === $r.NEGATIVE ? T = !1 : w === $r.CANCELLED ? T = null : T = !1), (x = s.customInputs) != null && x.length) {
      const k = new Map(
        s.customInputs.map((I) => {
          var V;
          const B = (V = d.current) == null ? void 0 : V.querySelector(`#${I.id}`);
          return [B.id, B.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = w, h.current.value = T, s.onClosing && !await s.onClosing(h.current)) {
      y(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    y(!1), xi.util.lastResult = {
      value: T,
      result: w,
      inputResults: h.current.inputResults
    };
    const M = d.current;
    M && (M.setAttribute("closing", ""), qf(), nb(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(h.current), $g(xi.util.popups, h.current), xi.util.popups.length > 0) {
        const I = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), V = I?.getAttribute("data-id"), B = xi.util.popups.find((Y) => Y.id === V);
        B && B.lastFocus && B.lastFocus.focus();
      }
      u(T);
    }));
  }, E = (w) => {
    w.target instanceof HTMLElement && w.target !== d.current && (_(w.target), h.current.lastFocus = w.target);
  }, O = async (w) => {
  };
  return jx.createPortal(
    /* @__PURE__ */ A.jsx(
      "dialog",
      {
        ref: d,
        className: (() => {
          const w = ["popup"];
          return s.wide && w.push("wide_dialogue_popup"), s.wider && w.push("wider_dialogue_popup"), s.large && w.push("large_dialogue_popup"), s.transparent && w.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), s.animation && w.push(`popup--animation-${s.animation}`), w.join(" ");
        })(),
        "data-id": v.current,
        onKeyDown: O,
        onFocus: E,
        children: /* @__PURE__ */ A.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ A.jsx("div", { className: "popup-content", children: n }),
          r === mn.INPUT && /* @__PURE__ */ A.jsx(
            "textarea",
            {
              ref: p,
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
          r !== mn.DISPLAY && /* @__PURE__ */ A.jsxs("div", { className: "popup-controls", children: [
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
            r !== mn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S($r.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== mn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ A.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S($r.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === mn.DISPLAY && /* @__PURE__ */ A.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => S($r.CANCELLED),
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
}, Zs = (n, r, i) => {
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
}, mr = SillyTavern.getContext(), q0 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: f
}) => {
  const [d, p] = ee.useState(n ?? ""), [g, y] = ee.useState(Date.now()), { isEnabled: b, profiles: _, connectApiMap: v } = ee.useMemo(() => {
    var E, O;
    return (E = mr.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = mr.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: mr.CONNECT_API_MAP
    };
  }, [g]);
  ee.useEffect(() => {
    if (!b) return;
    const E = (D) => {
      Zs(D, r, v) && (y(Date.now()), o?.(D));
    }, O = (D, x) => {
      const T = Zs(D, r, v), M = Zs(x, r, v);
      (T || M) && y(Date.now()), u?.(D, x), d === D.id && !M && (p(""), s?.(void 0));
    }, w = (D) => {
      Zs(D, r, v) && (y(Date.now()), f?.(D), d === D.id && (p(""), s?.(void 0)));
    };
    return mr.eventSource.on("CONNECTION_PROFILE_CREATED", E), mr.eventSource.on("CONNECTION_PROFILE_UPDATED", O), mr.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      mr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), mr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), mr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [b, d, r, v, s, o, u, f]);
  const h = ee.useMemo(() => {
    if (!b) return [];
    const E = _.filter((w) => Zs(w, r, v)), O = {};
    for (const [w, D] of Object.entries(r))
      O[w] = { label: D, profiles: [] };
    for (const w of E) {
      const D = v[w.api];
      O[D.selected] && O[D.selected].profiles.push(w);
    }
    for (const w of Object.values(O))
      w.profiles.sort((D, x) => (D.name ?? "").localeCompare(x.name ?? ""));
    return Object.values(O).filter((w) => w.profiles.length > 0);
  }, [b, _, r, v]), S = ee.useCallback(
    (E) => {
      const O = E.target.value;
      p(O);
      const w = _.find((D) => D.id === O);
      s?.(w);
    },
    [_, s]
  );
  return b ? /* @__PURE__ */ A.jsxs(bu, { value: d, onChange: S, children: [
    /* @__PURE__ */ A.jsx("option", { value: "", children: i }),
    h.map((E) => /* @__PURE__ */ A.jsx("optgroup", { label: E.label, children: E.profiles.map((O) => /* @__PURE__ */ A.jsx("option", { value: O.id, children: O.name }, O.id)) }, E.label))
  ] }) : /* @__PURE__ */ A.jsx(bu, { disabled: !0, value: "", children: /* @__PURE__ */ A.jsx("option", { children: "Connection Manager disabled" }) });
}, Lx = hu.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: f }) => {
    const {
      id: d,
      label: p,
      enabled: g,
      canDelete: y = !0,
      canToggle: b = !0,
      showSelect: _ = !0,
      canSelect: v = !0,
      selectOptions: h = [],
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
    return /* @__PURE__ */ A.jsxs("li", { className: "sortable-list-item", style: E, "data-id": d, children: [
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
          children: p
        }
      ),
      s && _ && v && /* @__PURE__ */ A.jsx(
        bu,
        {
          value: S,
          onChange: (D) => f(d, D.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ A.jsx("option", { disabled: !0, children: "--" }) : h.map((D) => /* @__PURE__ */ A.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!_ || !v) && /* @__PURE__ */ A.jsx("span", { style: w }),
      r && b && /* @__PURE__ */ A.jsx(
        ye,
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
          onClick: () => o(d)
        }
      ),
      r && !b && /* @__PURE__ */ A.jsx("span", { style: w }),
      i && y && /* @__PURE__ */ A.jsx(
        ye,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...O,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(d)
        }
      ),
      i && !y && /* @__PURE__ */ A.jsx("span", { style: { ...w, marginRight: 0 } })
    ] });
  }
), Px = ({
  items: n,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: u = {}
}) => {
  const f = ee.useRef(null), d = ee.useRef(null);
  ee.useEffect(() => (f.current && (d.current = Ce.create(f.current, {
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
      const h = Array.from(n), [S] = h.splice(_, 1);
      h.splice(v, 0, S), r(h);
    }
  })), () => {
    var b;
    (b = d.current) == null || b.destroy(), d.current = null;
  }), [n, r, u]);
  const p = (b) => {
    r(n.map((_) => _.id === b ? { ..._, enabled: !_.enabled } : _));
  }, g = (b) => {
    r(n.filter((_) => _.id !== b));
  }, y = (b, _) => {
    r(n.map((v) => v.id === b ? { ...v, selectValue: _ } : v));
  };
  return /* @__PURE__ */ A.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((b) => /* @__PURE__ */ A.jsx(
    Lx,
    {
      item: b,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: p,
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
  onBeforeSelection: d,
  enableSearch: p = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: b,
  inputClasses: _,
  containerClasses: v
}) => {
  const [h, S] = ee.useState(!1), [E, O] = ee.useState(""), w = ee.useRef(null);
  ee.useEffect(() => {
    const k = (I) => {
      w.current && !w.current.contains(I.target) && S(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), ee.useEffect(() => {
    h || O("");
  }, [h]);
  const D = ee.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...b
    };
    return new Pi(n, k);
  }, [n, p, b]), x = ee.useMemo(() => !p || !E.trim() || !D ? n : D.search(E.trim()).map((k) => k.item), [n, E, p, D]), T = async (k) => {
    let I;
    u ? I = r.includes(k) ? r.filter((V) => V !== k) : [...r, k] : I = r.includes(k) ? [] : [k], !(d && !await Promise.resolve(d(r, I))) && (i(I), o && S(!1));
  }, M = ee.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = n.find((I) => I.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
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
            onClick: () => !f && S(!h),
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
              /* @__PURE__ */ A.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ A.jsxs(
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
              p && /* @__PURE__ */ A.jsx(
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
                    Rx,
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
                Bx,
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
}, Bx = hu.memo(({ item: n, isSelected: r, onClick: i }) => {
  const [s, o] = ee.useState(!1);
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
}), dh = SillyTavern.getContext(), Su = ({
  value: n,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: o,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: d = !1,
  enableDelete: p = !1,
  onCreate: g,
  onRename: y,
  onDelete: b,
  buttons: _
}) => {
  const v = ee.useMemo(() => r.find((w) => w.value === n), [r, n]), h = ee.useCallback((w) => w ? i.includes(w) : !1, [i]), S = async () => {
    const w = await dh.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const D = w.trim();
    if (r.some((T) => T.value === D)) {
      await Ne("warning", `A ${s} with this name already exists.`);
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
      await Ne("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (h(v.value)) {
      await Ne("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await dh.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!w || w.trim() === "" || w.trim() === v.value) return;
    const D = w.trim();
    if (r.some((M) => M.value === D)) {
      await Ne("warning", `A ${s} with this name already exists.`);
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
      await Ne("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (h(v.value)) {
      await Ne("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await dh.Popup.show.confirm(
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
    /* @__PURE__ */ A.jsx(bu, { value: n ?? "", onChange: (w) => o(w.target.value, n), children: r.map((w) => /* @__PURE__ */ A.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    f && /* @__PURE__ */ A.jsx(
      ye,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    d && /* @__PURE__ */ A.jsx(
      ye,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: E,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    p && /* @__PURE__ */ A.jsx(
      ye,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    _?.map((w) => /* @__PURE__ */ A.jsx(
      ye,
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
}, Z0 = () => {
  const [, n] = ee.useState(0);
  return ee.useCallback(() => {
    n((i) => i + 1);
  }, []);
}, ph = SillyTavern.getContext(), Ix = () => {
  const n = Z0(), r = Bt.getSettings(), [i, s] = ee.useState(Wo[0]), o = ee.useCallback(
    (x) => {
      const T = Bt.getSettings();
      x(T), Bt.saveSettings(), n();
    },
    [n]
  ), u = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((x) => ({ value: x, label: x })),
    [r.mainContextTemplatePresets]
  ), f = ee.useMemo(
    () => Object.entries(r.prompts).map(([x, T]) => ({
      value: x,
      label: `${T.label} (${x})`
    })),
    [r.prompts]
  ), d = ee.useMemo(() => {
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
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), p = (x) => {
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
      const M = x.map((V) => ({
        promptName: V.id,
        enabled: V.enabled,
        role: V.selectValue ?? "user"
      })), k = {
        ...T.mainContextTemplatePresets[T.mainContextTemplatePreset],
        prompts: M
      }, I = {
        ...T.mainContextTemplatePresets,
        [T.mainContextTemplatePreset]: k
      };
      T.mainContextTemplatePresets = I;
    });
  }, b = async () => {
    await ph.Popup.show.confirm("Restore default", "Are you sure?") && o((T) => {
      T.mainContextTemplatePresets = {
        ...T.mainContextTemplatePresets,
        default: structuredClone(H0.mainContextTemplatePresets.default)
      }, T.mainContextTemplatePreset === "default" ? n() : T.mainContextTemplatePreset = "default";
    });
  }, _ = (x) => {
    o((T) => {
      const M = x.map((B) => B.value);
      Object.keys(T.prompts).filter((B) => !M.includes(B)).forEach((B) => {
        Object.values(T.mainContextTemplatePresets).forEach((Y) => {
          Y.prompts = Y.prompts.filter(($) => $.promptName !== B);
        });
      });
      const V = {};
      x.forEach((B) => {
        V[B.value] = T.prompts[B.value] ?? { content: "", isDefault: !1, label: B.label };
      }), T.prompts = V;
    });
  }, v = (x) => {
    const T = kh(x);
    return T ? r.prompts[T] ? (Ne("error", `Prompt name already exists: ${T}`), { confirmed: !1 }) : (o((M) => {
      M.prompts = {
        ...M.prompts,
        [T]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: x }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([I, V]) => [
          I,
          {
            ...V,
            prompts: [...V.prompts, { enabled: !0, promptName: T, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(T), { confirmed: !0, value: T }) : (Ne("error", `Invalid prompt name: ${x}`), { confirmed: !1 });
  }, h = (x, T) => {
    const M = kh(T);
    return M ? r.prompts[M] ? (Ne("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (o((k) => {
      const { [x]: I, ...V } = k.prompts;
      k.prompts = {
        ...V,
        [M]: { ...I, label: T }
      };
      const B = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([Y, $]) => [
          Y,
          {
            ...$,
            prompts: $.prompts.map((le) => le.promptName === x ? { ...le, promptName: M } : le)
          }
        ])
      );
      k.mainContextTemplatePresets = B;
    }), s(M), { confirmed: !0, value: M }) : (Ne("error", `Invalid prompt name: ${T}`), { confirmed: !1 });
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
          isDefault: Wo.includes(i) ? Qe[i] === T : !1
        }
      });
    });
  }, E = async () => {
    const x = r.prompts[i];
    if (!x) return Ne("warning", "No prompt selected.");
    await ph.Popup.show.confirm("Restore Default", `Restore default for "${x.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: Qe[i]
        }
      };
    });
  }, O = async () => {
    await ph.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Bt.resetSettings(), n(), Ne("success", "Settings have been reset."));
  }, w = r.prompts[i], D = Wo.includes(i);
  return /* @__PURE__ */ A.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ A.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ A.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ A.jsx(
          ye,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: b
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Su,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: g,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
        Px,
        {
          items: d,
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
          ye,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ A.jsx(
        Su,
        {
          label: "Prompt",
          items: f,
          value: i,
          readOnlyValues: Wo,
          onChange: (x) => s(x ?? ""),
          onItemsChange: _,
          onCreate: v,
          onRename: h,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ A.jsx(
        Nn,
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
    /* @__PURE__ */ A.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ A.jsxs(ye, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ A.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, yy = ({
  fieldId: n,
  label: r,
  value: i,
  prompt: s,
  large: o = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: d = !1,
  isGenerating: p = !1,
  onValueChange: g,
  onPromptChange: y,
  onGenerate: b,
  onContinue: _,
  onClear: v,
  onCompare: h,
  onDelete: S,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ A.jsxs("div", { className: `character-field ${d ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ A.jsx("label", { children: r }),
  /* @__PURE__ */ A.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ A.jsx(Nn, { value: i, onChange: (O) => g(n, O.target.value), rows: u }),
    /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ A.jsx(ye, { onClick: () => b(n), disabled: p, title: "Generate field content", children: p ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ A.jsx(ye, { onClick: () => _(n), disabled: p, title: "Continue from current content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ A.jsx(ye, { onClick: () => v(n), title: "Clear field content", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !d && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ A.jsx(ye, { onClick: () => E(n), title: "Revise with AI chat", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" }) }),
      !d && h && /* @__PURE__ */ A.jsx(ye, { onClick: () => h(n), title: "Compare with loaded character", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      d && S && /* @__PURE__ */ A.jsx(ye, { onClick: () => S(n), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ A.jsx(
    Nn,
    {
      value: s,
      onChange: (O) => y(n, O.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), Ux = SillyTavern.getContext(), Hx = ({
  greetings: n,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [f, d] = ee.useState(0);
  ee.useEffect(() => {
    f >= n.length && n.length > 0 ? d(n.length - 1) : n.length === 0 && d(0);
  }, [n, f]);
  const p = () => {
    const _ = [...n, { value: "", prompt: "" }];
    r(_), d(_.length - 1);
  }, g = async () => {
    if (n.length === 0) return;
    if (await Ux.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = n.filter((h, S) => S !== f);
      r(v);
    }
  }, y = (_, v, h) => {
    const S = [...n];
    S[_][v] = h, r(S);
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
            ye,
            {
              onClick: () => d(v),
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
      /* @__PURE__ */ A.jsxs(ye, { onClick: p, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    n.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ A.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ A.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ A.jsx(
          Nn,
          {
            value: b?.value ?? "",
            onChange: (_) => y(f, "value", _.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ A.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ A.jsx(
          Nn,
          {
            value: b?.prompt ?? "",
            onChange: (_) => y(f, "prompt", _.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ A.jsx(ye, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ A.jsx(ye, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ A.jsx(
          ye,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ A.jsx(ye, { onClick: () => o(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ A.jsx(
          ye,
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
var ta = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, i, s) {
      s === void 0 && (s = {});
      var o;
      typeof s == "function" ? (o = s, s = {}) : "callback" in s && (o = s.callback);
      var u = this.castInput(r, s), f = this.castInput(i, s), d = this.removeEmpty(this.tokenize(u, s)), p = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(d, p, s, o);
    }, n.prototype.diffWithOptionsObj = function(r, i, s, o) {
      var u = this, f, d = function(x) {
        if (x = u.postProcess(x, s), o) {
          setTimeout(function() {
            o(x);
          }, 0);
          return;
        } else
          return x;
      }, p = i.length, g = r.length, y = 1, b = p + g;
      s.maxEditLength != null && (b = Math.min(b, s.maxEditLength));
      var _ = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, v = Date.now() + _, h = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(h[0], i, r, 0, s);
      if (h[0].oldPos + 1 >= g && S + 1 >= p)
        return d(this.buildValues(h[0].lastComponent, i, r));
      var E = -1 / 0, O = 1 / 0, w = function() {
        for (var x = Math.max(E, -y); x <= Math.min(O, y); x += 2) {
          var T = void 0, M = h[x - 1], k = h[x + 1];
          M && (h[x - 1] = void 0);
          var I = !1;
          if (k) {
            var V = k.oldPos - x;
            I = k && 0 <= V && V < p;
          }
          var B = M && M.oldPos + 1 < g;
          if (!I && !B) {
            h[x] = void 0;
            continue;
          }
          if (!B || I && M.oldPos < k.oldPos ? T = u.addToPath(k, !0, !1, 0, s) : T = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(T, i, r, x, s), T.oldPos + 1 >= g && S + 1 >= p)
            return d(u.buildValues(T.lastComponent, i, r)) || !0;
          h[x] = T, T.oldPos + 1 >= g && (O = Math.min(O, x - 1)), S + 1 >= p && (E = Math.max(E, x + 1));
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
      for (var f = i.length, d = s.length, p = r.oldPos, g = p - o, y = 0; g + 1 < f && p + 1 < d && this.equals(s[p + 1], i[g + 1], u); )
        g++, p++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, g;
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
      for (var f = o.length, d = 0, p = 0, g = 0; d < f; d++) {
        var y = o[d];
        if (y.removed)
          y.value = this.join(s.slice(g, g + y.count)), g += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var b = i.slice(p, p + y.count);
            b = b.map(function(_, v) {
              var h = s[g + v];
              return h.length > _.length ? h : _;
            }), y.value = this.join(b);
          } else
            y.value = this.join(i.slice(p, p + y.count));
          p += y.count, y.added || (g += y.count);
        }
      }
      return o;
    }, n;
  })()
), qx = /* @__PURE__ */ (function() {
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
})(), Zx = (
  /** @class */
  (function(n) {
    qx(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(ta)
);
new Zx();
function _y(n, r) {
  var i;
  for (i = 0; i < n.length && i < r.length; i++)
    if (n[i] != r[i])
      return n.slice(0, i);
  return n.slice(0, i);
}
function by(n, r) {
  var i;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < n.length && i < r.length; i++)
    if (n[n.length - (i + 1)] != r[r.length - (i + 1)])
      return n.slice(-i);
  return n.slice(-i);
}
function Rh(n, r, i) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + n.slice(r.length);
}
function jh(n, r, i) {
  if (!r)
    return n + i;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + i;
}
function Fs(n, r) {
  return Rh(n, r, "");
}
function tu(n, r) {
  return jh(n, r, "");
}
function Sy(n, r) {
  return r.slice(0, Fx(n, r));
}
function Fx(n, r) {
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
  for (var d = i; d < n.length; d++) {
    for (; u > 0 && n[d] != r[u]; )
      u = o[u];
    n[d] == r[u] && u++;
  }
  return u;
}
function Gs(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Xr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var F0 = /* @__PURE__ */ (function() {
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
})(), Eu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Gx = new RegExp("[".concat(Eu, "]+|\\s+|[^").concat(Eu, "]"), "ug"), Vx = (
  /** @class */
  (function(n) {
    F0(r, n);
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
        o = Array.from(u.segment(i), function(p) {
          return p.segment;
        });
      } else
        o = i.match(Gx) || [];
      var f = [], d = null;
      return o.forEach(function(p) {
        /\s/.test(p) ? d == null ? f.push(p) : f.push(f.pop() + p) : d != null && /\s/.test(d) ? f[f.length - 1] == d ? f.push(f.pop() + p) : f.push(d + p) : f.push(p), d = p;
      }), f;
    }, r.prototype.join = function(i) {
      return i.map(function(s, o) {
        return o == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var o = null, u = null, f = null;
      return i.forEach(function(d) {
        d.added ? u = d : d.removed ? f = d : ((u || f) && Ey(o, f, u, d), o = d, u = null, f = null);
      }), (u || f) && Ey(o, f, u, null), i;
    }, r;
  })(ta)
), Yx = new Vx();
function G0(n, r, i) {
  return Yx.diff(n, r, i);
}
function Ey(n, r, i, s) {
  if (r && i) {
    var o = Xr(r.value), u = Gs(r.value), f = Xr(i.value), d = Gs(i.value);
    if (n) {
      var p = _y(o, f);
      n.value = jh(n.value, f, p), r.value = Fs(r.value, p), i.value = Fs(i.value, p);
    }
    if (s) {
      var g = by(u, d);
      s.value = Rh(s.value, d, g), r.value = tu(r.value, g), i.value = tu(i.value, g);
    }
  } else if (i) {
    if (n) {
      var y = Xr(i.value);
      i.value = i.value.substring(y.length);
    }
    if (s) {
      var y = Xr(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (n && s) {
    var b = Xr(s.value), _ = Xr(r.value), v = Gs(r.value), h = _y(b, _);
    r.value = Fs(r.value, h);
    var S = by(Fs(b, h), v);
    r.value = tu(r.value, S), s.value = Rh(s.value, b, S), n.value = jh(n.value, b, b.slice(0, b.length - S.length));
  } else if (s) {
    var E = Xr(s.value), O = Gs(r.value), w = Sy(O, E);
    r.value = tu(r.value, w);
  } else if (n) {
    var D = Gs(n.value), x = Xr(r.value), w = Sy(D, x);
    r.value = Fs(r.value, w);
  }
}
var Xx = (
  /** @class */
  (function(n) {
    F0(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(Eu, "]+|[^\\S\\n\\r]+|[^").concat(Eu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(ta)
);
new Xx();
var $x = /* @__PURE__ */ (function() {
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
})(), Qx = (
  /** @class */
  (function(n) {
    $x(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = V0, i;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!o.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), n.prototype.equals.call(this, i, s, o);
    }, r;
  })(ta)
);
new Qx();
function V0(n, r) {
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
var Kx = /* @__PURE__ */ (function() {
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
})(), Jx = (
  /** @class */
  (function(n) {
    Kx(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ta)
);
new Jx();
var Wx = /* @__PURE__ */ (function() {
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
})(), eC = (
  /** @class */
  (function(n) {
    Wx(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(ta)
);
new eC();
var tC = /* @__PURE__ */ (function() {
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
})(), nC = (
  /** @class */
  (function(n) {
    tC(r, n);
    function r() {
      var i = n !== null && n.apply(this, arguments) || this;
      return i.tokenize = V0, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var o = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(d, p) {
        return typeof p > "u" ? o : p;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(zh(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, o) {
      return n.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(ta)
);
new nC();
function zh(n, r, i, s, o) {
  r = r || [], i = i || [], s && (n = s(o === void 0 ? "" : o, n));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === n)
      return i[u];
  var f;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), f = new Array(n.length), i.push(f), u = 0; u < n.length; u += 1)
      f[u] = zh(n[u], r, i, s, String(u));
    return r.pop(), i.pop(), f;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), f = {}, i.push(f);
    var d = [], p;
    for (p in n)
      Object.prototype.hasOwnProperty.call(n, p) && d.push(p);
    for (d.sort(), u = 0; u < d.length; u += 1)
      p = d[u], f[p] = zh(n[p], r, i, s, p);
    r.pop(), i.pop();
  } else
    f = n;
  return f;
}
var rC = /* @__PURE__ */ (function() {
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
})(), aC = (
  /** @class */
  (function(n) {
    rC(r, n);
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
  })(ta)
);
new aC();
const iC = ({ originalContent: n, newContent: r, fieldName: i }) => {
  const s = ee.useMemo(() => {
    const o = G0(n, r);
    let u = "", f = "";
    return o.forEach((d) => {
      const g = `<span style="${d.added ? "color: green; background-color: #e6ffed;" : d.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${d.value}</span>`;
      d.added || (u += g), d.removed || (f += g);
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
function K(n, r, i) {
  function s(d, p) {
    var g;
    Object.defineProperty(d, "_zod", {
      value: d._zod ?? {},
      enumerable: !1
    }), (g = d._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), d._zod.traits.add(n), r(d, p);
    for (const y in f.prototype)
      y in d || Object.defineProperty(d, y, { value: f.prototype[y].bind(d) });
    d._zod.constr = f, d._zod.def = p;
  }
  const o = i?.Parent ?? Object;
  class u extends o {
  }
  Object.defineProperty(u, "name", { value: n });
  function f(d) {
    var p;
    const g = i?.Parent ? new u() : this;
    s(g, d), (p = g._zod).deferred ?? (p.deferred = []);
    for (const y of g._zod.deferred)
      y();
    return g;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (d) => i?.Parent && d instanceof i.Parent ? !0 : d?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class ji extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Y0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const X0 = {};
function ka(n) {
  return X0;
}
function $0(n) {
  const r = Object.values(n).filter((s) => typeof s == "number");
  return Object.entries(n).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function Lh(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Kh(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Jh(n) {
  return n == null;
}
function Wh(n) {
  const r = n.startsWith("^") ? 1 : 0, i = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, i);
}
function sC(n, r) {
  const i = (n.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const p = s.match(/\d?e-(\d?)/);
    p?.[1] && (o = Number.parseInt(p[1]));
  }
  const u = i > o ? i : o, f = Number.parseInt(n.toFixed(u).replace(".", "")), d = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % d / 10 ** u;
}
const xy = Symbol("evaluating");
function et(n, r, i) {
  let s;
  Object.defineProperty(n, r, {
    get() {
      if (s !== xy)
        return s === void 0 && (s = xy, s = i()), s;
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
function ja(n, r, i) {
  Object.defineProperty(n, r, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function za(...n) {
  const r = {};
  for (const i of n) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function Cy(n) {
  return JSON.stringify(n);
}
const Q0 = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function xu(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const lC = Kh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function nl(n) {
  if (xu(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(xu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function K0(n) {
  return nl(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const oC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Li(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function na(n, r, i) {
  const s = new n._zod.constr(r ?? n._zod.def);
  return (!r || i?.parent) && (s._zod.parent = n), s;
}
function ve(n) {
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
function uC(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
const cC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function fC(n, r) {
  const i = n._zod.def, s = za(n._zod.def, {
    get shape() {
      const o = {};
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (o[u] = i.shape[u]);
      }
      return ja(this, "shape", o), o;
    },
    checks: []
  });
  return na(n, s);
}
function hC(n, r) {
  const i = n._zod.def, s = za(n._zod.def, {
    get shape() {
      const o = { ...n._zod.def.shape };
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete o[u];
      }
      return ja(this, "shape", o), o;
    },
    checks: []
  });
  return na(n, s);
}
function dC(n, r) {
  if (!nl(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = n._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = za(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape, ...r };
      return ja(this, "shape", u), u;
    },
    checks: []
  });
  return na(n, o);
}
function pC(n, r) {
  if (!nl(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...n._zod.def,
    get shape() {
      const s = { ...n._zod.def.shape, ...r };
      return ja(this, "shape", s), s;
    },
    checks: n._zod.def.checks
  };
  return na(n, i);
}
function mC(n, r) {
  const i = za(n._zod.def, {
    get shape() {
      const s = { ...n._zod.def.shape, ...r._zod.def.shape };
      return ja(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return na(n, i);
}
function gC(n, r, i) {
  const s = za(r._zod.def, {
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
      return ja(this, "shape", u), u;
    },
    checks: []
  });
  return na(r, s);
}
function vC(n, r, i) {
  const s = za(r._zod.def, {
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
      return ja(this, "shape", u), u;
    },
    checks: []
  });
  return na(r, s);
}
function Mi(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let i = r; i < n.issues.length; i++)
    if (n.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function J0(n, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(n), i;
  });
}
function nu(n) {
  return typeof n == "string" ? n : n?.message;
}
function Ra(n, r, i) {
  const s = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const o = nu(n.inst?._zod.def?.error?.(n)) ?? nu(r?.error?.(n)) ?? nu(i.customError?.(n)) ?? nu(i.localeError?.(n)) ?? "Invalid input";
    s.message = o;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function ed(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function rl(...n) {
  const [r, i, s] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const W0 = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, Lh, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, e1 = K("$ZodError", W0), t1 = K("$ZodError", W0, { Parent: Error });
function yC(n, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of n.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function _C(n, r = (i) => i.message) {
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
        let f = i, d = 0;
        for (; d < u.path.length; ) {
          const p = u.path[d];
          d === u.path.length - 1 ? (f[p] = f[p] || { _errors: [] }, f[p]._errors.push(r(u))) : f[p] = f[p] || { _errors: [] }, f = f[p], d++;
        }
      }
  };
  return s(n), i;
}
const td = (n) => (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new ji();
  if (f.issues.length) {
    const d = new (o?.Err ?? n)(f.issues.map((p) => Ra(p, u, ka())));
    throw Q0(d, o?.callee), d;
  }
  return f.value;
}, nd = (n) => async (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const d = new (o?.Err ?? n)(f.issues.map((p) => Ra(p, u, ka())));
    throw Q0(d, o?.callee), d;
  }
  return f.value;
}, Tu = (n) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, o);
  if (u instanceof Promise)
    throw new ji();
  return u.issues.length ? {
    success: !1,
    error: new (n ?? e1)(u.issues.map((f) => Ra(f, o, ka())))
  } : { success: !0, data: u.value };
}, bC = /* @__PURE__ */ Tu(t1), Ou = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new n(u.issues.map((f) => Ra(f, o, ka())))
  } : { success: !0, data: u.value };
}, SC = /* @__PURE__ */ Ou(t1), EC = (n) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return td(n)(r, i, o);
}, xC = (n) => (r, i, s) => td(n)(r, i, s), CC = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return nd(n)(r, i, o);
}, wC = (n) => async (r, i, s) => nd(n)(r, i, s), AC = (n) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Tu(n)(r, i, o);
}, TC = (n) => (r, i, s) => Tu(n)(r, i, s), OC = (n) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Ou(n)(r, i, o);
}, NC = (n) => async (r, i, s) => Ou(n)(r, i, s), DC = /^[cC][^\s-]{8,}$/, MC = /^[0-9a-z]+$/, kC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, RC = /^[0-9a-vA-V]{20}$/, jC = /^[A-Za-z0-9]{27}$/, zC = /^[a-zA-Z0-9_-]{21}$/, LC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, PC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, wy = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, BC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, IC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function UC() {
  return new RegExp(IC, "u");
}
const HC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, qC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ZC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, FC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, GC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, n1 = /^[A-Za-z0-9_-]*$/, VC = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, YC = /^\+(?:[0-9]){6,14}[0-9]$/, r1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", XC = /* @__PURE__ */ new RegExp(`^${r1}$`);
function a1(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function $C(n) {
  return new RegExp(`^${a1(n)}$`);
}
function QC(n) {
  const r = a1({ precision: n.precision }), i = ["Z"];
  n.local && i.push(""), n.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${r1}T(?:${s})$`);
}
const KC = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, JC = /^-?\d+$/, WC = /^-?\d+(?:\.\d+)?/, e3 = /^[^A-Z]*$/, t3 = /^[^a-z]*$/, nn = /* @__PURE__ */ K("$ZodCheck", (n, r) => {
  var i;
  n._zod ?? (n._zod = {}), n._zod.def = r, (i = n._zod).onattach ?? (i.onattach = []);
}), i1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, s1 = /* @__PURE__ */ K("$ZodCheckLessThan", (n, r) => {
  nn.init(n, r);
  const i = i1[typeof r.value];
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
}), l1 = /* @__PURE__ */ K("$ZodCheckGreaterThan", (n, r) => {
  nn.init(n, r);
  const i = i1[typeof r.value];
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
}), n3 = /* @__PURE__ */ K("$ZodCheckMultipleOf", (n, r) => {
  nn.init(n, r), n._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), n._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : sC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), r3 = /* @__PURE__ */ K("$ZodCheckNumberFormat", (n, r) => {
  nn.init(n, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, u] = cC[r.format];
  n._zod.onattach.push((f) => {
    const d = f._zod.bag;
    d.format = r.format, d.minimum = o, d.maximum = u, i && (d.pattern = JC);
  }), n._zod.check = (f) => {
    const d = f.value;
    if (i) {
      if (!Number.isInteger(d)) {
        f.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: d,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(d)) {
        d > 0 ? f.issues.push({
          input: d,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: s,
          continue: !r.abort
        }) : f.issues.push({
          input: d,
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
    d < o && f.issues.push({
      origin: "number",
      input: d,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: n,
      continue: !r.abort
    }), d > u && f.issues.push({
      origin: "number",
      input: d,
      code: "too_big",
      maximum: u,
      inst: n
    });
  };
}), a3 = /* @__PURE__ */ K("$ZodCheckMaxLength", (n, r) => {
  var i;
  nn.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !Jh(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (s._zod.bag.maximum = r.maximum);
  }), n._zod.check = (s) => {
    const o = s.value;
    if (o.length <= r.maximum)
      return;
    const f = ed(o);
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
}), i3 = /* @__PURE__ */ K("$ZodCheckMinLength", (n, r) => {
  var i;
  nn.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !Jh(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (s._zod.bag.minimum = r.minimum);
  }), n._zod.check = (s) => {
    const o = s.value;
    if (o.length >= r.minimum)
      return;
    const f = ed(o);
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
}), s3 = /* @__PURE__ */ K("$ZodCheckLengthEquals", (n, r) => {
  var i;
  nn.init(n, r), (i = n._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !Jh(o) && o.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), n._zod.check = (s) => {
    const o = s.value, u = o.length;
    if (u === r.length)
      return;
    const f = ed(o), d = u > r.length;
    s.issues.push({
      origin: f,
      ...d ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Nu = /* @__PURE__ */ K("$ZodCheckStringFormat", (n, r) => {
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
}), l3 = /* @__PURE__ */ K("$ZodCheckRegex", (n, r) => {
  Nu.init(n, r), n._zod.check = (i) => {
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
}), o3 = /* @__PURE__ */ K("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = e3), Nu.init(n, r);
}), u3 = /* @__PURE__ */ K("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = t3), Nu.init(n, r);
}), c3 = /* @__PURE__ */ K("$ZodCheckIncludes", (n, r) => {
  nn.init(n, r);
  const i = Li(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
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
}), f3 = /* @__PURE__ */ K("$ZodCheckStartsWith", (n, r) => {
  nn.init(n, r);
  const i = new RegExp(`^${Li(r.prefix)}.*`);
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
}), h3 = /* @__PURE__ */ K("$ZodCheckEndsWith", (n, r) => {
  nn.init(n, r);
  const i = new RegExp(`.*${Li(r.suffix)}$`);
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
}), d3 = /* @__PURE__ */ K("$ZodCheckOverwrite", (n, r) => {
  nn.init(n, r), n._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class p3 {
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
const m3 = {
  major: 4,
  minor: 1,
  patch: 12
}, vt = /* @__PURE__ */ K("$ZodType", (n, r) => {
  var i;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = m3;
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
    const o = (f, d, p) => {
      let g = Mi(f), y;
      for (const b of d) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const _ = f.issues.length, v = b._zod.check(f);
        if (v instanceof Promise && p?.async === !1)
          throw new ji();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, f.issues.length !== _ && (g || (g = Mi(f, _)));
          });
        else {
          if (f.issues.length === _)
            continue;
          g || (g = Mi(f, _));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, d, p) => {
      if (Mi(f))
        return f.aborted = !0, f;
      const g = o(d, s, p);
      if (g instanceof Promise) {
        if (p.async === !1)
          throw new ji();
        return g.then((y) => n._zod.parse(y, p));
      }
      return n._zod.parse(g, p);
    };
    n._zod.run = (f, d) => {
      if (d.skipChecks)
        return n._zod.parse(f, d);
      if (d.direction === "backward") {
        const g = n._zod.parse({ value: f.value, issues: [] }, { ...d, skipChecks: !0 });
        return g instanceof Promise ? g.then((y) => u(y, f, d)) : u(g, f, d);
      }
      const p = n._zod.parse(f, d);
      if (p instanceof Promise) {
        if (d.async === !1)
          throw new ji();
        return p.then((g) => o(g, s, d));
      }
      return o(p, s, d);
    };
  }
  n["~standard"] = {
    validate: (o) => {
      try {
        const u = bC(n, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return SC(n, o).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), rd = /* @__PURE__ */ K("$ZodString", (n, r) => {
  vt.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? KC(n._zod.bag), n._zod.parse = (i, s) => {
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
}), it = /* @__PURE__ */ K("$ZodStringFormat", (n, r) => {
  Nu.init(n, r), rd.init(n, r);
}), g3 = /* @__PURE__ */ K("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = PC), it.init(n, r);
}), v3 = /* @__PURE__ */ K("$ZodUUID", (n, r) => {
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
    r.pattern ?? (r.pattern = wy(s));
  } else
    r.pattern ?? (r.pattern = wy());
  it.init(n, r);
}), y3 = /* @__PURE__ */ K("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = BC), it.init(n, r);
}), _3 = /* @__PURE__ */ K("$ZodURL", (n, r) => {
  it.init(n, r), n._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: VC.source,
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
}), b3 = /* @__PURE__ */ K("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = UC()), it.init(n, r);
}), S3 = /* @__PURE__ */ K("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = zC), it.init(n, r);
}), E3 = /* @__PURE__ */ K("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = DC), it.init(n, r);
}), x3 = /* @__PURE__ */ K("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = MC), it.init(n, r);
}), C3 = /* @__PURE__ */ K("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = kC), it.init(n, r);
}), w3 = /* @__PURE__ */ K("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = RC), it.init(n, r);
}), A3 = /* @__PURE__ */ K("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = jC), it.init(n, r);
}), T3 = /* @__PURE__ */ K("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = QC(r)), it.init(n, r);
}), O3 = /* @__PURE__ */ K("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = XC), it.init(n, r);
}), N3 = /* @__PURE__ */ K("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = $C(r)), it.init(n, r);
}), D3 = /* @__PURE__ */ K("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = LC), it.init(n, r);
}), M3 = /* @__PURE__ */ K("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = HC), it.init(n, r), n._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), k3 = /* @__PURE__ */ K("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = qC), it.init(n, r), n._zod.onattach.push((i) => {
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
}), R3 = /* @__PURE__ */ K("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = ZC), it.init(n, r);
}), j3 = /* @__PURE__ */ K("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = FC), it.init(n, r), n._zod.check = (i) => {
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
function o1(n) {
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
const z3 = /* @__PURE__ */ K("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = GC), it.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (i) => {
    o1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function L3(n) {
  if (!n1.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return o1(i);
}
const P3 = /* @__PURE__ */ K("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = n1), it.init(n, r), n._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (i) => {
    L3(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), B3 = /* @__PURE__ */ K("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = YC), it.init(n, r);
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
const U3 = /* @__PURE__ */ K("$ZodJWT", (n, r) => {
  it.init(n, r), n._zod.check = (i) => {
    I3(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), u1 = /* @__PURE__ */ K("$ZodNumber", (n, r) => {
  vt.init(n, r), n._zod.pattern = n._zod.bag.pattern ?? WC, n._zod.parse = (i, s) => {
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
}), H3 = /* @__PURE__ */ K("$ZodNumber", (n, r) => {
  r3.init(n, r), u1.init(n, r);
}), q3 = /* @__PURE__ */ K("$ZodUnknown", (n, r) => {
  vt.init(n, r), n._zod.parse = (i) => i;
}), Z3 = /* @__PURE__ */ K("$ZodNever", (n, r) => {
  vt.init(n, r), n._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: n
  }), i);
});
function Ay(n, r, i) {
  n.issues.length && r.issues.push(...J0(i, n.issues)), r.value[i] = n.value;
}
const F3 = /* @__PURE__ */ K("$ZodArray", (n, r) => {
  vt.init(n, r), n._zod.parse = (i, s) => {
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
      const d = o[f], p = r.element._zod.run({
        value: d,
        issues: []
      }, s);
      p instanceof Promise ? u.push(p.then((g) => Ay(g, i, f))) : Ay(p, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Cu(n, r, i, s) {
  n.issues.length && r.issues.push(...J0(i, n.issues)), n.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = n.value;
}
function c1(n) {
  const r = Object.keys(n.shape);
  for (const s of r)
    if (!n.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = uC(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function f1(n, r, i, s, o, u) {
  const f = [], d = o.keySet, p = o.catchall._zod, g = p.def.type;
  for (const y of Object.keys(r)) {
    if (d.has(y))
      continue;
    if (g === "never") {
      f.push(y);
      continue;
    }
    const b = p.run({ value: r[y], issues: [] }, s);
    b instanceof Promise ? n.push(b.then((_) => Cu(_, i, y, r))) : Cu(b, i, y, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), n.length ? Promise.all(n).then(() => i) : i;
}
const G3 = /* @__PURE__ */ K("$ZodObject", (n, r) => {
  if (vt.init(n, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const d = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const p = { ...d };
        return Object.defineProperty(r, "shape", {
          value: p
        }), p;
      }
    });
  }
  const s = Kh(() => c1(r));
  et(n._zod, "propValues", () => {
    const d = r.shape, p = {};
    for (const g in d) {
      const y = d[g]._zod;
      if (y.values) {
        p[g] ?? (p[g] = /* @__PURE__ */ new Set());
        for (const b of y.values)
          p[g].add(b);
      }
    }
    return p;
  });
  const o = xu, u = r.catchall;
  let f;
  n._zod.parse = (d, p) => {
    f ?? (f = s.value);
    const g = d.value;
    if (!o(g))
      return d.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: n
      }), d;
    d.value = {};
    const y = [], b = f.shape;
    for (const _ of f.keys) {
      const h = b[_]._zod.run({ value: g[_], issues: [] }, p);
      h instanceof Promise ? y.push(h.then((S) => Cu(S, d, _, g))) : Cu(h, d, _, g);
    }
    return u ? f1(y, g, d, p, s.value, n) : y.length ? Promise.all(y).then(() => d) : d;
  };
}), V3 = /* @__PURE__ */ K("$ZodObjectJIT", (n, r) => {
  G3.init(n, r);
  const i = n._zod.parse, s = Kh(() => c1(r)), o = (_) => {
    const v = new p3(["shape", "payload", "ctx"]), h = s.value, S = (D) => {
      const x = Cy(D);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const D of h.keys)
      E[D] = `key_${O++}`;
    v.write("const newResult = {};");
    for (const D of h.keys) {
      const x = E[D], T = Cy(D);
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
  const f = xu, d = !X0.jitless, g = d && lC.value, y = r.catchall;
  let b;
  n._zod.parse = (_, v) => {
    b ?? (b = s.value);
    const h = _.value;
    return f(h) ? d && g && v?.async === !1 && v.jitless !== !0 ? (u || (u = o(r.shape)), _ = u(_, v), y ? f1([], h, _, v, b, n) : _) : i(_, v) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: n
    }), _);
  };
});
function Ty(n, r, i, s) {
  for (const u of n)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const o = n.filter((u) => !Mi(u));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: n.map((u) => u.issues.map((f) => Ra(f, s, ka())))
  }), r);
}
const Y3 = /* @__PURE__ */ K("$ZodUnion", (n, r) => {
  vt.init(n, r), et(n._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), et(n._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), et(n._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), et(n._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${o.map((u) => Wh(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  n._zod.parse = (o, u) => {
    if (i)
      return s(o, u);
    let f = !1;
    const d = [];
    for (const p of r.options) {
      const g = p._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (g instanceof Promise)
        d.push(g), f = !0;
      else {
        if (g.issues.length === 0)
          return g;
        d.push(g);
      }
    }
    return f ? Promise.all(d).then((p) => Ty(p, o, n, u)) : Ty(d, o, n, u);
  };
}), X3 = /* @__PURE__ */ K("$ZodIntersection", (n, r) => {
  vt.init(n, r), n._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), f = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([p, g]) => Oy(i, p, g)) : Oy(i, u, f);
  };
});
function Ph(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (nl(n) && nl(r)) {
    const i = Object.keys(r), s = Object.keys(n).filter((u) => i.indexOf(u) !== -1), o = { ...n, ...r };
    for (const u of s) {
      const f = Ph(n[u], r[u]);
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
      const o = n[s], u = r[s], f = Ph(o, u);
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
function Oy(n, r, i) {
  if (r.issues.length && n.issues.push(...r.issues), i.issues.length && n.issues.push(...i.issues), Mi(n))
    return n;
  const s = Ph(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return n.value = s.data, n;
}
const $3 = /* @__PURE__ */ K("$ZodEnum", (n, r) => {
  vt.init(n, r);
  const i = $0(r.entries), s = new Set(i);
  n._zod.values = s, n._zod.pattern = new RegExp(`^(${i.filter((o) => oC.has(typeof o)).map((o) => typeof o == "string" ? Li(o) : o.toString()).join("|")})$`), n._zod.parse = (o, u) => {
    const f = o.value;
    return s.has(f) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: n
    }), o;
  };
}), Q3 = /* @__PURE__ */ K("$ZodLiteral", (n, r) => {
  if (vt.init(n, r), r.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  n._zod.values = new Set(r.values), n._zod.pattern = new RegExp(`^(${r.values.map((i) => typeof i == "string" ? Li(i) : i ? Li(i.toString()) : String(i)).join("|")})$`), n._zod.parse = (i, s) => {
    const o = i.value;
    return n._zod.values.has(o) || i.issues.push({
      code: "invalid_value",
      values: r.values,
      input: o,
      inst: n
    }), i;
  };
}), K3 = /* @__PURE__ */ K("$ZodTransform", (n, r) => {
  vt.init(n, r), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new Y0(n.constructor.name);
    const o = r.transform(i.value, i);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((f) => (i.value = f, i));
    if (o instanceof Promise)
      throw new ji();
    return i.value = o, i;
  };
});
function Ny(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const J3 = /* @__PURE__ */ K("$ZodOptional", (n, r) => {
  vt.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", et(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), et(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Wh(i.source)})?$`) : void 0;
  }), n._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => Ny(u, i.value)) : Ny(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), W3 = /* @__PURE__ */ K("$ZodNullable", (n, r) => {
  vt.init(n, r), et(n._zod, "optin", () => r.innerType._zod.optin), et(n._zod, "optout", () => r.innerType._zod.optout), et(n._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${Wh(i.source)}|null)$`) : void 0;
  }), et(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), ew = /* @__PURE__ */ K("$ZodDefault", (n, r) => {
  vt.init(n, r), n._zod.optin = "optional", et(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => Dy(u, r)) : Dy(o, r);
  };
});
function Dy(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const tw = /* @__PURE__ */ K("$ZodPrefault", (n, r) => {
  vt.init(n, r), n._zod.optin = "optional", et(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), nw = /* @__PURE__ */ K("$ZodNonOptional", (n, r) => {
  vt.init(n, r), et(n._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), n._zod.parse = (i, s) => {
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => My(u, n)) : My(o, n);
  };
});
function My(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const rw = /* @__PURE__ */ K("$ZodCatch", (n, r) => {
  vt.init(n, r), et(n._zod, "optin", () => r.innerType._zod.optin), et(n._zod, "optout", () => r.innerType._zod.optout), et(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((f) => Ra(f, s, ka()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((u) => Ra(u, s, ka()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), aw = /* @__PURE__ */ K("$ZodPipe", (n, r) => {
  vt.init(n, r), et(n._zod, "values", () => r.in._zod.values), et(n._zod, "optin", () => r.in._zod.optin), et(n._zod, "optout", () => r.out._zod.optout), et(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (i, s) => {
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
const iw = /* @__PURE__ */ K("$ZodReadonly", (n, r) => {
  vt.init(n, r), et(n._zod, "propValues", () => r.innerType._zod.propValues), et(n._zod, "values", () => r.innerType._zod.values), et(n._zod, "optin", () => r.innerType._zod.optin), et(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(ky) : ky(o);
  };
});
function ky(n) {
  return n.value = Object.freeze(n.value), n;
}
const sw = /* @__PURE__ */ K("$ZodCustom", (n, r) => {
  nn.init(n, r), vt.init(n, r), n._zod.parse = (i, s) => i, n._zod.check = (i) => {
    const s = i.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((u) => Ry(u, i, s, n));
    Ry(o, i, s, n);
  };
});
function Ry(n, r, i, s) {
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
    s._zod.def.params && (o.params = s._zod.def.params), r.issues.push(rl(o));
  }
}
class h1 {
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
function lw() {
  return new h1();
}
const $s = /* @__PURE__ */ lw();
function ow(n, r) {
  return new n({
    type: "string",
    ...ve(r)
  });
}
function uw(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function jy(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function cw(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function fw(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ve(r)
  });
}
function hw(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ve(r)
  });
}
function dw(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ve(r)
  });
}
function pw(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function mw(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function gw(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function vw(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function yw(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function _w(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function bw(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Sw(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Ew(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function xw(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Cw(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function ww(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Aw(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Tw(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Ow(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Nw(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ve(r)
  });
}
function Dw(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ve(r)
  });
}
function Mw(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...ve(r)
  });
}
function kw(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ve(r)
  });
}
function Rw(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ve(r)
  });
}
function jw(n, r) {
  return new n({
    type: "number",
    checks: [],
    ...ve(r)
  });
}
function zw(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ve(r)
  });
}
function Lw(n) {
  return new n({
    type: "unknown"
  });
}
function Pw(n, r) {
  return new n({
    type: "never",
    ...ve(r)
  });
}
function zy(n, r) {
  return new s1({
    check: "less_than",
    ...ve(r),
    value: n,
    inclusive: !1
  });
}
function mh(n, r) {
  return new s1({
    check: "less_than",
    ...ve(r),
    value: n,
    inclusive: !0
  });
}
function Ly(n, r) {
  return new l1({
    check: "greater_than",
    ...ve(r),
    value: n,
    inclusive: !1
  });
}
function gh(n, r) {
  return new l1({
    check: "greater_than",
    ...ve(r),
    value: n,
    inclusive: !0
  });
}
function Py(n, r) {
  return new n3({
    check: "multiple_of",
    ...ve(r),
    value: n
  });
}
function d1(n, r) {
  return new a3({
    check: "max_length",
    ...ve(r),
    maximum: n
  });
}
function wu(n, r) {
  return new i3({
    check: "min_length",
    ...ve(r),
    minimum: n
  });
}
function p1(n, r) {
  return new s3({
    check: "length_equals",
    ...ve(r),
    length: n
  });
}
function Bw(n, r) {
  return new l3({
    check: "string_format",
    format: "regex",
    ...ve(r),
    pattern: n
  });
}
function Iw(n) {
  return new o3({
    check: "string_format",
    format: "lowercase",
    ...ve(n)
  });
}
function Uw(n) {
  return new u3({
    check: "string_format",
    format: "uppercase",
    ...ve(n)
  });
}
function Hw(n, r) {
  return new c3({
    check: "string_format",
    format: "includes",
    ...ve(r),
    includes: n
  });
}
function qw(n, r) {
  return new f3({
    check: "string_format",
    format: "starts_with",
    ...ve(r),
    prefix: n
  });
}
function Zw(n, r) {
  return new h3({
    check: "string_format",
    format: "ends_with",
    ...ve(r),
    suffix: n
  });
}
function ll(n) {
  return new d3({
    check: "overwrite",
    tx: n
  });
}
function Fw(n) {
  return ll((r) => r.normalize(n));
}
function Gw() {
  return ll((n) => n.trim());
}
function Vw() {
  return ll((n) => n.toLowerCase());
}
function Yw() {
  return ll((n) => n.toUpperCase());
}
function Xw(n, r, i) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...ve(i)
  });
}
function $w(n, r, i) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...ve(i)
  });
}
function Qw(n) {
  const r = Kw((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(rl(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(rl(o));
    }
  }, n(i.value, i)));
  return r;
}
function Kw(n, r) {
  const i = new nn({
    check: "custom",
    ...ve(r)
  });
  return i._zod.check = n, i;
}
class By {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? $s, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
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
    const d = { schema: {}, count: 1, cycle: void 0, path: i.path };
    this.seen.set(r, d);
    const p = r._zod.toJSONSchema?.();
    if (p)
      d.schema = p;
    else {
      const b = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, _ = r._zod.parent;
      if (_)
        d.ref = _, this.process(_, b), this.seen.get(_).isParent = !0;
      else {
        const v = d.schema;
        switch (o.type) {
          case "string": {
            const h = v;
            h.type = "string";
            const { minimum: S, maximum: E, format: O, patterns: w, contentEncoding: D } = r._zod.bag;
            if (typeof S == "number" && (h.minLength = S), typeof E == "number" && (h.maxLength = E), O && (h.format = u[O] ?? O, h.format === "" && delete h.format), D && (h.contentEncoding = D), w && w.size > 0) {
              const x = [...w];
              x.length === 1 ? h.pattern = x[0].source : x.length > 1 && (d.schema.allOf = [
                ...x.map((T) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: T.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = v, { minimum: S, maximum: E, format: O, multipleOf: w, exclusiveMaximum: D, exclusiveMinimum: x } = r._zod.bag;
            typeof O == "string" && O.includes("int") ? h.type = "integer" : h.type = "number", typeof x == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = x, h.exclusiveMinimum = !0) : h.exclusiveMinimum = x), typeof S == "number" && (h.minimum = S, typeof x == "number" && this.target !== "draft-4" && (x >= S ? delete h.minimum : delete h.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = D, h.exclusiveMaximum = !0) : h.exclusiveMaximum = D), typeof E == "number" && (h.maximum = E, typeof D == "number" && this.target !== "draft-4" && (D <= E ? delete h.maximum : delete h.exclusiveMaximum)), typeof w == "number" && (h.multipleOf = w);
            break;
          }
          case "boolean": {
            const h = v;
            h.type = "boolean";
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
            const h = v, { minimum: S, maximum: E } = r._zod.bag;
            typeof S == "number" && (h.minItems = S), typeof E == "number" && (h.maxItems = E), h.type = "array", h.items = this.process(o.element, { ...b, path: [...b.path, "items"] });
            break;
          }
          case "object": {
            const h = v;
            h.type = "object", h.properties = {};
            const S = o.shape;
            for (const w in S)
              h.properties[w] = this.process(S[w], {
                ...b,
                path: [...b.path, "properties", w]
              });
            const E = new Set(Object.keys(S)), O = new Set([...E].filter((w) => {
              const D = o.shape[w]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            O.size > 0 && (h.required = Array.from(O)), o.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : o.catchall ? o.catchall && (h.additionalProperties = this.process(o.catchall, {
              ...b,
              path: [...b.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = v, S = o.options.map((E, O) => this.process(E, {
              ...b,
              path: [...b.path, "anyOf", O]
            }));
            h.anyOf = S;
            break;
          }
          case "intersection": {
            const h = v, S = this.process(o.left, {
              ...b,
              path: [...b.path, "allOf", 0]
            }), E = this.process(o.right, {
              ...b,
              path: [...b.path, "allOf", 1]
            }), O = (D) => "allOf" in D && Object.keys(D).length === 1, w = [
              ...O(S) ? S.allOf : [S],
              ...O(E) ? E.allOf : [E]
            ];
            h.allOf = w;
            break;
          }
          case "tuple": {
            const h = v;
            h.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", O = o.items.map((T, M) => this.process(T, {
              ...b,
              path: [...b.path, S, M]
            })), w = o.rest ? this.process(o.rest, {
              ...b,
              path: [...b.path, E, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = O, w && (h.items = w)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: O
            }, w && h.items.anyOf.push(w), h.minItems = O.length, w || (h.maxItems = O.length)) : (h.items = O, w && (h.additionalItems = w));
            const { minimum: D, maximum: x } = r._zod.bag;
            typeof D == "number" && (h.minItems = D), typeof x == "number" && (h.maxItems = x);
            break;
          }
          case "record": {
            const h = v;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(o.keyType, {
              ...b,
              path: [...b.path, "propertyNames"]
            })), h.additionalProperties = this.process(o.valueType, {
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
            const h = v, S = $0(o.entries);
            S.every((E) => typeof E == "number") && (h.type = "number"), S.every((E) => typeof E == "string") && (h.type = "string"), h.enum = S;
            break;
          }
          case "literal": {
            const h = v, S = [];
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
              h.type = E === null ? "null" : typeof E, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [E] : h.const = E;
            } else
              S.every((E) => typeof E == "number") && (h.type = "number"), S.every((E) => typeof E == "string") && (h.type = "string"), S.every((E) => typeof E == "boolean") && (h.type = "string"), S.every((E) => E === null) && (h.type = "null"), h.enum = S;
            break;
          }
          case "file": {
            const h = v, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: O, mime: w } = r._zod.bag;
            E !== void 0 && (S.minLength = E), O !== void 0 && (S.maxLength = O), w ? w.length === 1 ? (S.contentMediaType = w[0], Object.assign(h, S)) : h.anyOf = w.map((D) => ({ ...S, contentMediaType: D })) : Object.assign(h, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(o.innerType, b);
            this.target === "openapi-3.0" ? (d.ref = o.innerType, v.nullable = !0) : v.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, b), d.ref = o.innerType;
            break;
          }
          case "success": {
            const h = v;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, b), d.ref = o.innerType, v.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, b), d.ref = o.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, b), d.ref = o.innerType;
            let h;
            try {
              h = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = v, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = S.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(h, b), d.ref = h;
            break;
          }
          case "readonly": {
            this.process(o.innerType, b), d.ref = o.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, b), d.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, b), d.ref = o.innerType;
            break;
          }
          case "lazy": {
            const h = r._zod.innerType;
            this.process(h, b), d.ref = h;
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
    return g && Object.assign(d.schema, g), this.io === "input" && wt(r) && (delete d.schema.examples, delete d.schema.default), this.io === "input" && d.schema._prefault && ((s = d.schema).default ?? (s.default = d.schema._prefault)), delete d.schema._prefault, this.seen.get(r).schema;
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
      const v = `#/${b}/`, h = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: v + h };
    }, f = (y) => {
      if (y[1].schema.$ref)
        return;
      const b = y[1], { ref: _, defId: v } = u(y);
      b.def = { ...b.schema }, v && (b.defId = v);
      const h = b.schema;
      for (const S in h)
        delete h[S];
      h.$ref = _;
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
    const d = (y, b) => {
      const _ = this.seen.get(y), v = _.def ?? _.schema, h = { ...v };
      if (_.ref === null)
        return;
      const S = _.ref;
      if (_.ref = null, S) {
        d(S, b);
        const E = this.seen.get(S).schema;
        E.$ref && (b.target === "draft-7" || b.target === "draft-4" || b.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(E)) : (Object.assign(v, E), Object.assign(v, h));
      }
      _.isParent || this.override({
        zodSchema: y,
        jsonSchema: v,
        path: _.path ?? []
      });
    };
    for (const y of [...this.seen.entries()].reverse())
      d(y[0], { target: this.target });
    const p = {};
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const y = s.external.registry.get(r)?.id;
      if (!y)
        throw new Error("Schema is missing an `id` property");
      p.$id = s.external.uri(y);
    }
    Object.assign(p, o.def);
    const g = s.external?.defs ?? {};
    for (const y of this.seen.entries()) {
      const b = y[1];
      b.def && b.defId && (g[b.defId] = b.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? p.$defs = g : p.definitions = g);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function Jw(n, r) {
  if (n instanceof h1) {
    const s = new By(r), o = {};
    for (const d of n._idmap.entries()) {
      const [p, g] = d;
      s.process(g);
    }
    const u = {}, f = {
      registry: n,
      uri: r?.uri,
      defs: o
    };
    for (const d of n._idmap.entries()) {
      const [p, g] = d;
      u[p] = s.emit(g, {
        ...r,
        external: f
      });
    }
    if (Object.keys(o).length > 0) {
      const d = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [d]: o
      };
    }
    return { schemas: u };
  }
  const i = new By(r);
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
const Ww = /* @__PURE__ */ K("ZodISODateTime", (n, r) => {
  T3.init(n, r), ut.init(n, r);
});
function e4(n) {
  return Dw(Ww, n);
}
const t4 = /* @__PURE__ */ K("ZodISODate", (n, r) => {
  O3.init(n, r), ut.init(n, r);
});
function n4(n) {
  return Mw(t4, n);
}
const r4 = /* @__PURE__ */ K("ZodISOTime", (n, r) => {
  N3.init(n, r), ut.init(n, r);
});
function a4(n) {
  return kw(r4, n);
}
const i4 = /* @__PURE__ */ K("ZodISODuration", (n, r) => {
  D3.init(n, r), ut.init(n, r);
});
function s4(n) {
  return Rw(i4, n);
}
const l4 = (n, r) => {
  e1.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (i) => _C(n, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => yC(n, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        n.issues.push(i), n.message = JSON.stringify(n.issues, Lh, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        n.issues.push(...i), n.message = JSON.stringify(n.issues, Lh, 2);
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
}, Dn = K("ZodError", l4, {
  Parent: Error
}), o4 = /* @__PURE__ */ td(Dn), u4 = /* @__PURE__ */ nd(Dn), c4 = /* @__PURE__ */ Tu(Dn), f4 = /* @__PURE__ */ Ou(Dn), h4 = /* @__PURE__ */ EC(Dn), d4 = /* @__PURE__ */ xC(Dn), p4 = /* @__PURE__ */ CC(Dn), m4 = /* @__PURE__ */ wC(Dn), g4 = /* @__PURE__ */ AC(Dn), v4 = /* @__PURE__ */ TC(Dn), y4 = /* @__PURE__ */ OC(Dn), _4 = /* @__PURE__ */ NC(Dn), Et = /* @__PURE__ */ K("ZodType", (n, r) => (vt.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...i) => n.clone(za(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), n.clone = (i, s) => na(n, i, s), n.brand = () => n, n.register = ((i, s) => (i.add(n, s), n)), n.parse = (i, s) => o4(n, i, s, { callee: n.parse }), n.safeParse = (i, s) => c4(n, i, s), n.parseAsync = async (i, s) => u4(n, i, s, { callee: n.parseAsync }), n.safeParseAsync = async (i, s) => f4(n, i, s), n.spa = n.safeParseAsync, n.encode = (i, s) => h4(n, i, s), n.decode = (i, s) => d4(n, i, s), n.encodeAsync = async (i, s) => p4(n, i, s), n.decodeAsync = async (i, s) => m4(n, i, s), n.safeEncode = (i, s) => g4(n, i, s), n.safeDecode = (i, s) => v4(n, i, s), n.safeEncodeAsync = async (i, s) => y4(n, i, s), n.safeDecodeAsync = async (i, s) => _4(n, i, s), n.refine = (i, s) => n.check(uA(i, s)), n.superRefine = (i) => n.check(cA(i)), n.overwrite = (i) => n.check(ll(i)), n.optional = () => qy(n), n.nullable = () => Zy(n), n.nullish = () => qy(Zy(n)), n.nonoptional = (i) => nA(n, i), n.array = () => y1(n), n.or = (i) => _1([n, i]), n.and = (i) => V4(n, i), n.transform = (i) => Fy(n, Q4(i)), n.default = (i) => W4(n, i), n.prefault = (i) => tA(n, i), n.catch = (i) => aA(n, i), n.pipe = (i) => Fy(n, i), n.readonly = () => lA(n), n.describe = (i) => {
  const s = n.clone();
  return $s.add(s, { description: i }), s;
}, Object.defineProperty(n, "description", {
  get() {
    return $s.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...i) => {
  if (i.length === 0)
    return $s.get(n);
  const s = n.clone();
  return $s.add(s, i[0]), s;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), m1 = /* @__PURE__ */ K("_ZodString", (n, r) => {
  rd.init(n, r), Et.init(n, r);
  const i = n._zod.bag;
  n.format = i.format ?? null, n.minLength = i.minimum ?? null, n.maxLength = i.maximum ?? null, n.regex = (...s) => n.check(Bw(...s)), n.includes = (...s) => n.check(Hw(...s)), n.startsWith = (...s) => n.check(qw(...s)), n.endsWith = (...s) => n.check(Zw(...s)), n.min = (...s) => n.check(wu(...s)), n.max = (...s) => n.check(d1(...s)), n.length = (...s) => n.check(p1(...s)), n.nonempty = (...s) => n.check(wu(1, ...s)), n.lowercase = (s) => n.check(Iw(s)), n.uppercase = (s) => n.check(Uw(s)), n.trim = () => n.check(Gw()), n.normalize = (...s) => n.check(Fw(...s)), n.toLowerCase = () => n.check(Vw()), n.toUpperCase = () => n.check(Yw());
}), b4 = /* @__PURE__ */ K("ZodString", (n, r) => {
  rd.init(n, r), m1.init(n, r), n.email = (i) => n.check(uw(S4, i)), n.url = (i) => n.check(pw(E4, i)), n.jwt = (i) => n.check(Nw(P4, i)), n.emoji = (i) => n.check(mw(x4, i)), n.guid = (i) => n.check(jy(Iy, i)), n.uuid = (i) => n.check(cw(au, i)), n.uuidv4 = (i) => n.check(fw(au, i)), n.uuidv6 = (i) => n.check(hw(au, i)), n.uuidv7 = (i) => n.check(dw(au, i)), n.nanoid = (i) => n.check(gw(C4, i)), n.guid = (i) => n.check(jy(Iy, i)), n.cuid = (i) => n.check(vw(w4, i)), n.cuid2 = (i) => n.check(yw(A4, i)), n.ulid = (i) => n.check(_w(T4, i)), n.base64 = (i) => n.check(Aw(j4, i)), n.base64url = (i) => n.check(Tw(z4, i)), n.xid = (i) => n.check(bw(O4, i)), n.ksuid = (i) => n.check(Sw(N4, i)), n.ipv4 = (i) => n.check(Ew(D4, i)), n.ipv6 = (i) => n.check(xw(M4, i)), n.cidrv4 = (i) => n.check(Cw(k4, i)), n.cidrv6 = (i) => n.check(ww(R4, i)), n.e164 = (i) => n.check(Ow(L4, i)), n.datetime = (i) => n.check(e4(i)), n.date = (i) => n.check(n4(i)), n.time = (i) => n.check(a4(i)), n.duration = (i) => n.check(s4(i));
});
function Wr(n) {
  return ow(b4, n);
}
const ut = /* @__PURE__ */ K("ZodStringFormat", (n, r) => {
  it.init(n, r), m1.init(n, r);
}), S4 = /* @__PURE__ */ K("ZodEmail", (n, r) => {
  y3.init(n, r), ut.init(n, r);
}), Iy = /* @__PURE__ */ K("ZodGUID", (n, r) => {
  g3.init(n, r), ut.init(n, r);
}), au = /* @__PURE__ */ K("ZodUUID", (n, r) => {
  v3.init(n, r), ut.init(n, r);
}), E4 = /* @__PURE__ */ K("ZodURL", (n, r) => {
  _3.init(n, r), ut.init(n, r);
}), x4 = /* @__PURE__ */ K("ZodEmoji", (n, r) => {
  b3.init(n, r), ut.init(n, r);
}), C4 = /* @__PURE__ */ K("ZodNanoID", (n, r) => {
  S3.init(n, r), ut.init(n, r);
}), w4 = /* @__PURE__ */ K("ZodCUID", (n, r) => {
  E3.init(n, r), ut.init(n, r);
}), A4 = /* @__PURE__ */ K("ZodCUID2", (n, r) => {
  x3.init(n, r), ut.init(n, r);
}), T4 = /* @__PURE__ */ K("ZodULID", (n, r) => {
  C3.init(n, r), ut.init(n, r);
}), O4 = /* @__PURE__ */ K("ZodXID", (n, r) => {
  w3.init(n, r), ut.init(n, r);
}), N4 = /* @__PURE__ */ K("ZodKSUID", (n, r) => {
  A3.init(n, r), ut.init(n, r);
}), D4 = /* @__PURE__ */ K("ZodIPv4", (n, r) => {
  M3.init(n, r), ut.init(n, r);
}), M4 = /* @__PURE__ */ K("ZodIPv6", (n, r) => {
  k3.init(n, r), ut.init(n, r);
}), k4 = /* @__PURE__ */ K("ZodCIDRv4", (n, r) => {
  R3.init(n, r), ut.init(n, r);
}), R4 = /* @__PURE__ */ K("ZodCIDRv6", (n, r) => {
  j3.init(n, r), ut.init(n, r);
}), j4 = /* @__PURE__ */ K("ZodBase64", (n, r) => {
  z3.init(n, r), ut.init(n, r);
}), z4 = /* @__PURE__ */ K("ZodBase64URL", (n, r) => {
  P3.init(n, r), ut.init(n, r);
}), L4 = /* @__PURE__ */ K("ZodE164", (n, r) => {
  B3.init(n, r), ut.init(n, r);
}), P4 = /* @__PURE__ */ K("ZodJWT", (n, r) => {
  U3.init(n, r), ut.init(n, r);
}), g1 = /* @__PURE__ */ K("ZodNumber", (n, r) => {
  u1.init(n, r), Et.init(n, r), n.gt = (s, o) => n.check(Ly(s, o)), n.gte = (s, o) => n.check(gh(s, o)), n.min = (s, o) => n.check(gh(s, o)), n.lt = (s, o) => n.check(zy(s, o)), n.lte = (s, o) => n.check(mh(s, o)), n.max = (s, o) => n.check(mh(s, o)), n.int = (s) => n.check(Uy(s)), n.safe = (s) => n.check(Uy(s)), n.positive = (s) => n.check(Ly(0, s)), n.nonnegative = (s) => n.check(gh(0, s)), n.negative = (s) => n.check(zy(0, s)), n.nonpositive = (s) => n.check(mh(0, s)), n.multipleOf = (s, o) => n.check(Py(s, o)), n.step = (s, o) => n.check(Py(s, o)), n.finite = () => n;
  const i = n._zod.bag;
  n.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), n.isFinite = !0, n.format = i.format ?? null;
});
function v1(n) {
  return jw(g1, n);
}
const B4 = /* @__PURE__ */ K("ZodNumberFormat", (n, r) => {
  H3.init(n, r), g1.init(n, r);
});
function Uy(n) {
  return zw(B4, n);
}
const I4 = /* @__PURE__ */ K("ZodUnknown", (n, r) => {
  q3.init(n, r), Et.init(n, r);
});
function Hy() {
  return Lw(I4);
}
const U4 = /* @__PURE__ */ K("ZodNever", (n, r) => {
  Z3.init(n, r), Et.init(n, r);
});
function H4(n) {
  return Pw(U4, n);
}
const q4 = /* @__PURE__ */ K("ZodArray", (n, r) => {
  F3.init(n, r), Et.init(n, r), n.element = r.element, n.min = (i, s) => n.check(wu(i, s)), n.nonempty = (i) => n.check(wu(1, i)), n.max = (i, s) => n.check(d1(i, s)), n.length = (i, s) => n.check(p1(i, s)), n.unwrap = () => n.element;
});
function y1(n, r) {
  return Xw(q4, n, r);
}
const Z4 = /* @__PURE__ */ K("ZodObject", (n, r) => {
  V3.init(n, r), Et.init(n, r), et(n, "shape", () => r.shape), n.keyof = () => Y4(Object.keys(n._zod.def.shape)), n.catchall = (i) => n.clone({ ...n._zod.def, catchall: i }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: Hy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: Hy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: H4() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (i) => dC(n, i), n.safeExtend = (i) => pC(n, i), n.merge = (i) => mC(n, i), n.pick = (i) => fC(n, i), n.omit = (i) => hC(n, i), n.partial = (...i) => gC(b1, n, i[0]), n.required = (...i) => vC(S1, n, i[0]);
});
function La(n, r) {
  const i = {
    type: "object",
    shape: n ?? {},
    ...ve(r)
  };
  return new Z4(i);
}
const F4 = /* @__PURE__ */ K("ZodUnion", (n, r) => {
  Y3.init(n, r), Et.init(n, r), n.options = r.options;
});
function _1(n, r) {
  return new F4({
    type: "union",
    options: n,
    ...ve(r)
  });
}
const G4 = /* @__PURE__ */ K("ZodIntersection", (n, r) => {
  X3.init(n, r), Et.init(n, r);
});
function V4(n, r) {
  return new G4({
    type: "intersection",
    left: n,
    right: r
  });
}
const Bh = /* @__PURE__ */ K("ZodEnum", (n, r) => {
  $3.init(n, r), Et.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  n.extract = (s, o) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Bh({
      ...r,
      checks: [],
      ...ve(o),
      entries: u
    });
  }, n.exclude = (s, o) => {
    const u = { ...r.entries };
    for (const f of s)
      if (i.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Bh({
      ...r,
      checks: [],
      ...ve(o),
      entries: u
    });
  };
});
function Y4(n, r) {
  const i = Array.isArray(n) ? Object.fromEntries(n.map((s) => [s, s])) : n;
  return new Bh({
    type: "enum",
    entries: i,
    ...ve(r)
  });
}
const X4 = /* @__PURE__ */ K("ZodLiteral", (n, r) => {
  Q3.init(n, r), Et.init(n, r), n.values = new Set(r.values), Object.defineProperty(n, "value", {
    get() {
      if (r.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return r.values[0];
    }
  });
});
function ol(n, r) {
  return new X4({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...ve(r)
  });
}
const $4 = /* @__PURE__ */ K("ZodTransform", (n, r) => {
  K3.init(n, r), Et.init(n, r), n._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new Y0(n.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(rl(u, i.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = n), i.issues.push(rl(f));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((u) => (i.value = u, i)) : (i.value = o, i);
  };
});
function Q4(n) {
  return new $4({
    type: "transform",
    transform: n
  });
}
const b1 = /* @__PURE__ */ K("ZodOptional", (n, r) => {
  J3.init(n, r), Et.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function qy(n) {
  return new b1({
    type: "optional",
    innerType: n
  });
}
const K4 = /* @__PURE__ */ K("ZodNullable", (n, r) => {
  W3.init(n, r), Et.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Zy(n) {
  return new K4({
    type: "nullable",
    innerType: n
  });
}
const J4 = /* @__PURE__ */ K("ZodDefault", (n, r) => {
  ew.init(n, r), Et.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function W4(n, r) {
  return new J4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : K0(r);
    }
  });
}
const eA = /* @__PURE__ */ K("ZodPrefault", (n, r) => {
  tw.init(n, r), Et.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function tA(n, r) {
  return new eA({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : K0(r);
    }
  });
}
const S1 = /* @__PURE__ */ K("ZodNonOptional", (n, r) => {
  nw.init(n, r), Et.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function nA(n, r) {
  return new S1({
    type: "nonoptional",
    innerType: n,
    ...ve(r)
  });
}
const rA = /* @__PURE__ */ K("ZodCatch", (n, r) => {
  rw.init(n, r), Et.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function aA(n, r) {
  return new rA({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const iA = /* @__PURE__ */ K("ZodPipe", (n, r) => {
  aw.init(n, r), Et.init(n, r), n.in = r.in, n.out = r.out;
});
function Fy(n, r) {
  return new iA({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const sA = /* @__PURE__ */ K("ZodReadonly", (n, r) => {
  iw.init(n, r), Et.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function lA(n) {
  return new sA({
    type: "readonly",
    innerType: n
  });
}
const oA = /* @__PURE__ */ K("ZodCustom", (n, r) => {
  sw.init(n, r), Et.init(n, r);
});
function uA(n, r = {}) {
  return $w(oA, n, r);
}
function cA(n) {
  return Qw(n);
}
const Gy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Ih = "placeholder-chatHistory", fA = La({
  justification: Wr().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Wr().describe("The new, full content for the character field.")
}), hA = La({
  op: ol("change"),
  field: Wr().describe('The unique ID of the field to change (e.g., "description", "personality", or a draft field ID).'),
  value: Wr().describe("The new content for the field.")
}), dA = La({
  op: ol("remove"),
  field: Wr().describe("The unique ID of the draft field to remove.")
}), pA = La({
  op: ol("add_greeting"),
  value: Wr().describe("The content for the new alternate greeting to be added to the end of the list.")
}), mA = La({
  op: ol("remove_greeting"),
  index: v1().int().positive().describe("The 1-based index of the alternate greeting to remove.")
}), gA = La({
  op: ol("change_greeting"),
  index: v1().int().positive().describe("The 1-based index of the alternate greeting to change."),
  value: Wr().describe("The new content for the alternate greeting.")
}), vA = _1([
  hA,
  dA,
  pA,
  mA,
  gA
]), yA = La({
  justification: Wr().describe(
    "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
  ),
  operations: y1(vA).describe("A list of operations to modify the character card.")
});
function vh(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Uh(n, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Uh(s, r + 1)}${i}</item>
` : `${i}<item>${vh(s)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let s = "";
    for (const o of Object.keys(n)) {
      const u = n[o];
      u !== null && typeof u == "object" ? s += `${i}<${o}>
${Uh(u, r + 1)}${i}</${o}>
` : s += `${i}<${o}>${vh(u)}</${o}>
`;
    }
    return s;
  }
  return `${i}<value>${vh(n)}</value>
`;
}
function _A(n, r) {
  const i = Ta(n);
  return r === "xml" ? Uh(i).trim() : JSON.stringify(i, null, 2);
}
function bA(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function SA(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Ta(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, i = bA(n.example, r, n.default);
  if (i !== void 0) return i;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const s = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (s) return Ta(s);
  switch (SA(n.type)) {
    case "object": {
      const u = {}, f = n.properties || {};
      for (const d of Object.keys(f))
        u[d] = Ta(f[d]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (u.additionalProperty = Ta(n.additionalProperties)), u;
    }
    case "array": {
      const u = n.items ?? {};
      return [Ta(u)];
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
      return n.properties || n.additionalProperties ? Ta({ ...n, type: "object" }) : n.items ? Ta({ ...n, type: "array" }) : null;
  }
}
const EA = new lS();
async function Vy(n, r, i, s, o, u) {
  const f = !s.json_schema && !1;
  return new Promise((d, p) => {
    const g = new AbortController(), y = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), EA.generateRequest(
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
        onFinish: (b, _, v) => y.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : v ? p(v) : _ === void 0 && v === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (_ || p(new Error("No data received from LLM")), v ? p(v) : d(_))
      }
    );
  });
}
async function xA(n, r, i, s, o, u, f) {
  const d = Bt.getSettings();
  let p, g;
  const y = Jw(i);
  if (o === "native") {
    if (p = await Vy(
      n,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const _ = o, v = _A(y, _), h = JSON.stringify(y, null, 2), S = _ === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = d.prompts[S]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${_}" not found.`);
    const O = {
      example_response: v,
      schema: h
    }, D = { role: "system", content: Wt.compile(E, { noEscape: !0, strict: !0 })(O) };
    if (p = await Vy(
      n,
      [...r, D],
      u,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = D0(p.content, _, { schema: y });
  }
  const b = i.safeParse(g);
  if (!b.success) {
    const _ = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", b.error.issues), console.error("Raw content parsed:", g), await Ne("error", _), new Error(_);
  }
  return b.data;
}
const E1 = ({ originalContent: n, newContent: r }) => {
  const i = ee.useMemo(() => {
    const s = G0(n, r);
    let o = "", u = "";
    return s.forEach((f) => {
      const d = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${d}</span>`;
      f.added || (o += g), f.removed || (u += g);
    }), { originalHtml: o, newHtml: u };
  }, [n, r]);
  return /* @__PURE__ */ A.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ A.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, CA = ({ before: n, after: r }) => {
  const i = ee.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(n.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = n.fields[u], d = r.fields[u], p = f?.value ?? "", g = d?.value ?? "";
      p !== g && s.push({
        label: d?.label ?? f?.label ?? u,
        before: p,
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
      /* @__PURE__ */ A.jsx(E1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, wA = ({ currentState: n, initialState: r }) => {
  const [i, s] = ee.useState(!1), { coreFields: o, alternateGreetings: u } = ee.useMemo(() => {
    const d = [], p = [];
    return yr.forEach((g) => {
      n.fields[g] && d.push({ label: n.fields[g].label, value: n.fields[g].value });
    }), Object.entries(n.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, y) => parseInt(g[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, g]) => p.push(g.value)), { coreFields: d, alternateGreetings: p };
  }, [n]), f = ee.useMemo(() => {
    const d = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(n.fields)])).forEach((g) => {
      const y = r.fields[g], b = n.fields[g], _ = y?.value ?? "", v = b?.value ?? "";
      _ !== v && d.push({
        label: b?.label ?? y?.label ?? g,
        before: _,
        after: v
      });
    }), d;
  }, [r, n]);
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ A.jsx("input", { type: "checkbox", checked: i, onChange: (d) => s(d.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ A.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: d, before: p, after: g }) => /* @__PURE__ */ A.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ A.jsx("h4", { children: d }),
      /* @__PURE__ */ A.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ A.jsx("span", { children: "Original" }),
        /* @__PURE__ */ A.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ A.jsx(E1, { originalContent: p, newContent: g })
    ] }, d)) }) : /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: d, value: p }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: d }),
        /* @__PURE__ */ A.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, d)),
      u.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((d, p) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            p + 1
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "state-value", children: d || /* @__PURE__ */ A.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, p))
      ] })
    ] }) })
  ] });
}, iu = SillyTavern.getContext(), AA = (n) => Object.entries(n.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => r.value), TA = (n, r, i, s) => {
  const o = structuredClone(n);
  if (i === "field" && s) {
    const u = r;
    o.fields[s] && (o.fields[s].value = u.response);
  } else if (i === "global") {
    const u = r, f = AA(o);
    for (const d of u.operations)
      switch (d.op) {
        case "change":
          o.fields[d.field] && (o.fields[d.field].value = d.value);
          break;
        case "remove":
          break;
        case "add_greeting":
          f.push(d.value);
          break;
        case "remove_greeting":
          d.index > 0 && d.index <= f.length && f.splice(d.index - 1, 1);
          break;
        case "change_greeting":
          d.index > 0 && d.index <= f.length && (f[d.index - 1] = d.value);
          break;
      }
    Object.keys(o.fields).forEach((d) => {
      d.startsWith("alternate_greetings_") && delete o.fields[d];
    }), f.forEach((d, p) => {
      const g = `alternate_greetings_${p + 1}`;
      o.fields[g] = {
        value: d,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${p + 1}`
      };
    });
  }
  return o;
}, OA = ({ initialState: n, onSave: r, onClose: i }) => {
  const [s, o] = ee.useState(() => structuredClone(n)), u = (b, _, v) => {
    const h = structuredClone(s), S = v ? "draftFields" : "fields";
    h[S][b] && (h[S][b].value = _), o(h);
  }, f = (b, _) => {
    const v = structuredClone(s), h = `alternate_greetings_${b + 1}`;
    v.fields[h] && (v.fields[h].value = _), o(v);
  }, { coreFields: d, alternateGreetings: p, draftFields: g } = ee.useMemo(() => {
    const b = [], _ = [], v = [];
    return yr.forEach((h) => {
      s.fields[h] && b.push({ id: h, label: s.fields[h].label, value: s.fields[h].value });
    }), Object.entries(s.fields).filter(([h]) => h.startsWith("alternate_greetings_")).sort((h, S) => parseInt(h[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, h]) => _.push(h.value)), Object.entries(s.draftFields).forEach(([h, S]) => {
      v.push({ id: h, label: S.label, value: S.value });
    }), { coreFields: b, alternateGreetings: _, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(n) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsxs(ye, { onClick: y, children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ A.jsxs(ye, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ A.jsx("h4", { children: "Core Fields" }),
      d.map(({ id: b, label: _, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ A.jsx("label", { children: _ }),
        /* @__PURE__ */ A.jsx(Nn, { value: v, onChange: (h) => u(b, h.target.value, !1), rows: 4 })
      ] }, b)),
      g.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: b, label: _, value: v }) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsx("label", { children: _ }),
          /* @__PURE__ */ A.jsx(Nn, { value: v, onChange: (h) => u(b, h.target.value, !0), rows: 4 })
        ] }, b))
      ] }),
      p.length > 0 && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
        /* @__PURE__ */ A.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        p.map((b, _) => /* @__PURE__ */ A.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ A.jsxs("label", { children: [
            "Greeting ",
            _ + 1
          ] }),
          /* @__PURE__ */ A.jsx(Nn, { value: b, onChange: (v) => f(_, v.target.value), rows: 4 })
        ] }, _))
      ] })
    ] })
  ] });
}, NA = ({
  session: n,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [f, d] = ee.useState(n.messages), [p, g] = ee.useState(""), [y, b] = ee.useState(!1), [_, v] = ee.useState(null), [h, S] = ee.useState(!1), [E, O] = ee.useState(!1), [w, D] = ee.useState(null), [x, T] = ee.useState(""), M = ee.useRef(null), k = ee.useRef(null);
  ee.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const I = ee.useCallback(
    async (G, pe, he, qe) => {
      const Ae = Bt.getSettings();
      if (!n.profileId) {
        Ne("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), he(), b(!0);
      try {
        const Ve = [], q = iu.extensionSettings.connectionManager?.profiles?.find(
          (st) => st.id === n.profileId
        ), ne = q?.api ? iu.CONNECT_API_MAP[q.api].selected : void 0;
        for (const st of G)
          if (st.id === Ih && ne) {
            const In = await o0(ne, u);
            In.warnings?.length && In.warnings.forEach((It) => Ne("warning", It)), Ve.push(...In.result);
          } else
            Ve.push(st);
        const re = await xA(
          n.profileId,
          Ve,
          n.type === "field" ? fA : yA,
          n.type === "field" ? Gy.FIELD : Gy.GLOBAL,
          n.promptEngineeringMode,
          Ae.maxResponseToken,
          k.current.signal
        ), Se = G.slice(0, G.length - (pe ? 0 : 1)).reverse().find((st) => st.stateSnapshot)?.stateSnapshot ?? o, Je = TA(Se, re, n.type, n.targetFieldId), Ie = {
          id: `msg-${Date.now()}-ai`,
          role: "assistant",
          content: re.justification,
          stateSnapshot: Je
        }, tt = [...G, Ie];
        d(tt), s({ ...n, messages: tt });
      } catch (Ve) {
        Ve.name === "AbortError" ? Ne("info", "Request was cancelled.") : (console.error("Revise request failed:", Ve), Ne("error", `Request failed: ${Ve.message}`)), qe();
      } finally {
        b(!1), k.current = null;
      }
    },
    [n, s, o, u]
  ), V = ee.useCallback(async () => {
    if (!p.trim() || y) return;
    const G = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, pe = f;
    I(
      [...f, G],
      !1,
      () => {
        d([...f, G]), g("");
      },
      () => d(pe)
    );
  }, [p, y, f, I]), B = ee.useCallback(async () => {
    if (y || f.length === 0) return;
    let G = [...f];
    f[f.length - 1].role === "assistant" && (G = f.slice(0, -1));
    const he = f;
    I(
      G,
      !0,
      () => d(G),
      () => d(he)
    );
  }, [y, f, I]), Y = () => {
    const G = f.slice().reverse().find((pe) => pe.stateSnapshot)?.stateSnapshot ?? o;
    i(G), r();
  }, $ = (G) => {
    const pe = f.findIndex((Ae) => Ae.id === G);
    if (pe === -1 || !f[pe].stateSnapshot) return;
    const he = f[pe].stateSnapshot;
    let qe = o;
    for (let Ae = pe - 1; Ae >= 0; Ae--)
      if (f[Ae].stateSnapshot) {
        qe = f[Ae].stateSnapshot;
        break;
      }
    v({ before: qe, after: he });
  }, le = () => {
    S(!0);
  }, fe = (G) => {
    D(G.id), T(G.content);
  }, ge = () => {
    D(null), T("");
  }, U = async () => {
    if (!w) return;
    const G = f.findIndex((q) => q.id === w);
    if (G === -1 || !await iu.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const he = f, qe = f.slice(0, G), Ae = { ...f[G], content: x }, Ve = [...qe, Ae];
    ge(), I(
      Ve,
      !1,
      () => d(Ve),
      () => d(he)
    );
  }, te = async (G) => {
    const pe = f.findIndex((q) => q.id === G);
    if (pe === -1) return;
    const qe = !!f[pe].isInitial;
    if (!await iu.Popup.show.confirm(
      "Delete Message",
      qe ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Ve;
    qe ? Ve = f.filter((q) => q.isInitial && q.id !== G) : Ve = f.slice(0, pe), d(Ve), s({ ...n, messages: Ve }), Ne("info", "Message history has been updated.");
  }, ue = f.filter((G) => G.isInitial), De = f.filter((G) => !G.isInitial), j = f.slice().reverse().find((G) => G.stateSnapshot)?.stateSnapshot ?? o, J = () => {
    O(!0);
  }, ae = (G) => {
    const pe = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: G
    }, he = [...f, pe];
    d(he), s({ ...n, messages: he }), O(!1);
  }, se = () => {
    k.current?.abort();
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsx("h2", { children: n.name }),
      /* @__PURE__ */ A.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ A.jsx(
          q0,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (G) => s({ ...n, profileId: G?.id ?? "" })
          }
        ),
        /* @__PURE__ */ A.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: (G) => s({ ...n, promptEngineeringMode: G.target.value }),
            title: "Prompt Engineering Mode",
            children: [
              /* @__PURE__ */ A.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ A.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ A.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(ye, { onClick: le, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ A.jsx(ye, { onClick: J, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ A.jsx(ye, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ A.jsxs(ye, { onClick: Y, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-messages", children: [
      ue.length > 0 && /* @__PURE__ */ A.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ A.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ A.jsx("div", { className: "initial-messages-content", children: ue.map(
          (G) => w === G.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ A.jsx(Nn, { value: x, onChange: (pe) => T(pe.target.value), rows: 5 }),
            /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ A.jsxs(ye, { onClick: U, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ A.jsxs(ye, { onClick: ge, children: [
                /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, G.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper initial-context ${G.role}`, children: [
            /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${G.role} initial`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: G.content }) }),
            !y && G.id !== Ih && /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ A.jsxs(
                ye,
                {
                  className: "message-action-button",
                  onClick: () => fe(G),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ A.jsxs(
                ye,
                {
                  className: "message-action-button danger_button",
                  onClick: () => te(G.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, G.id)
        ) })
      ] }),
      De.map(
        (G) => w === G.id ? /* @__PURE__ */ A.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ A.jsx(Nn, { value: x, onChange: (pe) => T(pe.target.value), rows: 3 }),
          /* @__PURE__ */ A.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ A.jsxs(ye, { onClick: U, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ A.jsxs(ye, { onClick: ge, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, G.id) : /* @__PURE__ */ A.jsxs("div", { className: `message-bubble-wrapper ${G.role}`, children: [
          /* @__PURE__ */ A.jsxs("div", { className: "message-actions", children: [
            G.role === "user" && !G.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              ye,
              {
                className: "message-action-button",
                onClick: () => fe(G),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            G.stateSnapshot && !y && /* @__PURE__ */ A.jsxs(
              ye,
              {
                className: "message-action-button",
                onClick: () => $(G.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ A.jsxs(
              ye,
              {
                className: "message-action-button danger_button",
                onClick: () => te(G.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: `message-bubble ${G.role}`, children: /* @__PURE__ */ A.jsx("div", { className: "message-content", children: G.content }) })
        ] }, G.id)
      ),
      De.length > 0 && !y && /* @__PURE__ */ A.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ A.jsxs(ye, { onClick: B, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ A.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ A.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ A.jsx(ye, { onClick: se, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ A.jsx(
        Nn,
        {
          value: p,
          onChange: (G) => g(G.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!w,
          onKeyDown: (G) => {
            G.key === "Enter" && !G.shiftKey && (G.preventDefault(), V());
          }
        }
      ),
      /* @__PURE__ */ A.jsxs(ye, { onClick: V, disabled: y || !p.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    _ && /* @__PURE__ */ A.jsx(
      Ri,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(CA, { before: _.before, after: _.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ A.jsx(
      Ri,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(wA, { currentState: j, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ A.jsx(
      Ri,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          OA,
          {
            initialState: j,
            onSave: ae,
            onClose: () => O(!1)
          }
        ),
        onComplete: () => O(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function DA(n, r, i, s, o) {
  const u = Bt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const d = [], g = {
    ...{
      user: Yn.name1 || "You",
      char: n.fields.name?.value || "Character",
      persona: Yn.powerUserSettings.persona_description
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
    o.selectedCharacterIndexes.forEach((h) => {
      const S = Yn.characters[parseInt(h)];
      S && v.push(S);
    }), g.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      o.selectedWorldNames.map(async (h) => {
        const S = await Yn.loadWorldInfo(h);
        S && (v[h] = Object.values(S.entries).filter((E) => !E.disable));
      })
    ), g.lorebooks = v;
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona) continue;
    if (v.promptName === "chatHistory") {
      d.push({
        id: Ih,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "stDescription"].includes(v.promptName))
      continue;
    const S = u.prompts[v.promptName];
    if (!S || S.content.includes("{{activeFormatInstructions}}"))
      continue;
    let E = "";
    E = Wt.compile(S.content, { noEscape: !0 })(g), E = Yn.substituteParams(E), E.trim() && d.push({
      id: `im-${d.length}`,
      role: v.role,
      content: E.trim(),
      isInitial: !0
    });
  }
  const y = r ? n.fields[r]?.label || n.draftFields[r]?.label : "Global", b = u.prompts.reviseTaskDescription.content, _ = Wt.compile(b, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: y
  });
  return d.push({
    id: `im-${d.length}`,
    role: "system",
    content: _,
    isInitial: !0
  }), d;
}
const su = SillyTavern.getContext(), Yy = "charCreator_reviseSessions", MA = ({
  target: n,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [f, d] = ee.useState([]), [p, g] = ee.useState(null), [y, b] = ee.useState(!0);
  ee.useEffect(() => {
    const D = JSON.parse(localStorage.getItem(Yy) || "[]");
    d(D), b(!1);
  }, []);
  const _ = ee.useMemo(() => f.filter((D) => D.type === n.type && (D.type === "global" || D.targetFieldId === n.fieldId)).sort((D, x) => new Date(x.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, n]), v = (D) => {
    localStorage.setItem(Yy, JSON.stringify(D)), d(D);
  }, h = async () => {
    const D = n.type === "field" ? s.fields[n.fieldId]?.label || s.draftFields[n.fieldId]?.label : "Global", x = await su.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (x)
      try {
        const T = Bt.getSettings();
        if (!T.profileId) {
          Ne("warning", "Please select a connection profile in the main popup first.");
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
        }, k = await DA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          o,
          u
        );
        M.messages = k, g(M);
      } catch (T) {
        console.error("Failed to create session:", T), Ne("error", `Failed to create session: ${T.message}`);
      }
  }, S = (D) => {
    g(D);
  }, E = async (D) => {
    if (await su.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const T = f.filter((M) => M.id !== D);
      v(T);
    }
  }, O = (D) => {
    const x = f.findIndex((M) => M.id === D.id), T = [...f];
    x !== -1 ? T[x] = D : T.push(D), v(T), g(D);
  };
  if (p) {
    const D = su.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === p.profileId
    ), x = {
      targetCharacterId: Pn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Ma,
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
        const M = su.chat?.length ?? 0, k = T.last ?? 10;
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
    return Pn === void 0 && !Ma && (x.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ A.jsx(
      NA,
      {
        session: p,
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
    /* @__PURE__ */ A.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ A.jsxs("h2", { children: [
        'Revise Sessions for "',
        w,
        '"'
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ A.jsx(ye, { onClick: r, children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-times" }) }) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : _.length === 0 ? /* @__PURE__ */ A.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : _.map((D) => /* @__PURE__ */ A.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "session-info", onClick: () => S(D), children: [
        /* @__PURE__ */ A.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ A.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ A.jsx(ye, { className: "danger_button", onClick: () => E(D.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ A.jsx("div", { className: "session-actions", children: /* @__PURE__ */ A.jsxs(ye, { onClick: h, className: "menu_button", children: [
      /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
Wt.helpers.join || Wt.registerHelper("join", function(n, r) {
  return Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "";
});
Wt.helpers.is_not_empty || Wt.registerHelper("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Tn = SillyTavern.getContext(), Xy = "charCreator", yh = () => ({
  selectedCharacterIndexes: Pn ? [String(Pn)] : [],
  selectedWorldNames: [],
  fields: yr.reduce(
    (n, r) => (n[r] = { value: "", prompt: "", label: vr[r] }, n),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), kA = {
  name: { label: vr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: vr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: vr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: vr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: vr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: vr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, RA = () => {
  const n = Z0(), r = Bt.getSettings(), [i, s] = ee.useState(yh()), [o, u] = ee.useState([]), [f, d] = ee.useState(!0), [p, g] = ee.useState("core"), [y, b] = ee.useState([]), [_, v] = ee.useState([]), [h, S] = ee.useState(null), [E, O] = ee.useState(null), [w, D] = ee.useState(!1), [x, T] = ee.useState(null);
  ee.useEffect(() => {
    (async () => {
      d(!0), b(Tn.characters), v(Yg);
      const ne = JSON.parse(localStorage.getItem(Xy) ?? "{}"), re = yh();
      if (ne.fields && (re.fields = { ...re.fields, ...ne.fields }), ne.draftFields && (re.draftFields = ne.draftFields), ne.selectedCharacterIndexes && (re.selectedCharacterIndexes = ne.selectedCharacterIndexes), ne.selectedWorldNames && (re.selectedWorldNames = ne.selectedWorldNames), ne.lastLoadedCharacterId) {
        re.lastLoadedCharacterId = ne.lastLoadedCharacterId;
        const Se = Tn.characters.find((Je) => Je.avatar === ne.lastLoadedCharacterId);
        Se && S(Se);
      }
      s(re), d(!1);
    })();
  }, []), ee.useEffect(() => {
    f || localStorage.setItem(Xy, JSON.stringify(i));
  }, [i, f]);
  const M = (q, ne) => {
    Bt.getSettings()[q] = ne, Bt.saveSettings(), n();
  }, k = (q, ne) => {
    Bt.getSettings().contextToSend[q] = ne, Bt.saveSettings(), n();
  }, I = ee.useCallback(
    (q, ne, re, Se) => {
      s((Je) => {
        const Ie = Se ? "draftFields" : "fields", tt = { ...Je[Ie] };
        return tt[q] || (tt[q] = { value: "", prompt: "", label: q }), tt[q][re] = ne, { ...Je, [Ie]: tt };
      });
    },
    []
  ), V = ee.useMemo(
    () => Object.keys(i.fields).filter((q) => q.startsWith("alternate_greetings_")).sort((q, ne) => parseInt(q.split("_")[2]) - parseInt(ne.split("_")[2])).map((q) => i.fields[q]),
    [i.fields]
  ), B = ee.useCallback((q) => {
    s((ne) => {
      const re = { ...ne.fields };
      return Object.keys(re).forEach((Se) => {
        Se.startsWith("alternate_greetings_") && delete re[Se];
      }), q.forEach((Se, Je) => {
        const Ie = `alternate_greetings_${Je + 1}`;
        re[Ie] = { ...Se, label: `Alternate Greeting ${Je + 1}` };
      }), { ...ne, fields: re };
    });
  }, []), Y = ee.useCallback(
    (q, ne) => {
      I(q, "", "value", ne);
    },
    [I]
  ), $ = ee.useCallback(
    async (q) => {
      await Tn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[q].label}"?`
      ) && s((re) => {
        const Se = { ...re.draftFields };
        return delete Se[q], { ...re, draftFields: Se };
      });
    },
    [i.draftFields]
  ), le = ee.useCallback(async () => {
    const q = await Tn.Popup.show.input("Enter Draft Field Name", "");
    if (!q?.trim()) return;
    const ne = kh(q.trim());
    if (!ne) return Ne("error", "Invalid field name.");
    if (i.draftFields[ne] || yr.includes(ne))
      return Ne("warning", "Field name already exists.");
    s((re) => ({
      ...re,
      draftFields: { ...re.draftFields, [ne]: { value: "", prompt: "", label: q } }
    })), g("draft");
  }, [i.draftFields]), fe = (q) => {
    T({ type: "field", fieldId: q }), D(!0);
  }, ge = () => {
    T({ type: "global" }), D(!0);
  }, U = (q) => {
    s((ne) => ({
      ...ne,
      fields: { ...ne.fields, ...q.fields },
      draftFields: { ...ne.draftFields, ...q.draftFields }
    })), Ne("success", "Changes from revise session applied."), D(!1);
  }, te = ee.useCallback(
    async (q, ne) => {
      if (!r.profileId) return Ne("warning", "Please select a connection profile.");
      u((re) => [...re, q]);
      try {
        const re = Tn.extensionSettings.connectionManager?.profiles?.find(
          (oe) => oe.id === r.profileId
        );
        if (!re) throw new Error("Connection profile not found.");
        const Se = {
          presetName: re?.preset,
          contextName: re?.context,
          instructName: re?.instruct,
          targetCharacterId: Pn,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Ma
        }, Je = r.contextToSend.messages;
        switch (Je.type) {
          case "none":
            Se.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            Se.messageIndexesBetween = { start: 0, end: Je.first ?? 10 };
            break;
          case "last":
            const oe = Tn.chat?.length ?? 0, de = Je.last ?? 10;
            Se.messageIndexesBetween = {
              end: Math.max(0, oe - 1),
              start: Math.max(0, oe - de)
            };
            break;
          case "range":
            Se.messageIndexesBetween = {
              start: Je.range?.start ?? 0,
              end: Je.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        Pn === void 0 && !Ma && (Se.messageIndexesBetween = { start: -1, end: -1 });
        const Ie = {};
        await Promise.all(
          Yg.filter((oe) => !Ie[oe]).map(async (oe) => {
            const de = await Tn.loadWorldInfo(oe);
            de && (Ie[oe] = Object.values(de.entries));
          })
        );
        const tt = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete tt.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete tt.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete tt.lorebookDefinitions, r.contextToSend.existingFields || delete tt.existingFieldDefinitions, r.contextToSend.persona || delete tt.personaDescription, delete tt.worldInfoCharDefinition;
        const st = await Nx({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: Se,
          continueFrom: ne,
          session: i,
          allCharacters: y,
          entriesGroupByWorldName: Ie,
          promptSettings: tt,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (oe) => oe.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: q,
          outputFormat: r.outputFormat
        }), In = q.startsWith("alternate_greetings_"), It = !In && !yr.includes(q);
        if (In) {
          const oe = parseInt(q.split("_")[2]) - 1, de = [...V];
          de[oe] && (de[oe].value = st), B(de);
        } else
          I(q, st, "value", It);
      } catch (re) {
        console.error(re), Ne("error", re.message || String(re));
      } finally {
        u((re) => re.filter((Se) => Se !== q));
      }
    },
    [i, r, y, V, I, B]
  ), ue = ee.useCallback(async () => {
    await Tn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(yh()), S(null));
  }, []), De = ee.useCallback(
    (q) => {
      if (!h) return Ne("warning", "Please load a character to compare against.");
      let ne, re, Se;
      typeof q == "number" ? (ne = V[q]?.value ?? "", re = h.data?.alternate_greetings?.[q] ?? "", Se = `Alternate Greeting ${q + 1}`) : (ne = i.fields[q]?.value ?? "", re = h[q] ?? h.data?.[q] ?? "", Se = vr[q]), O({ original: re, current: ne, fieldName: Se });
    },
    [h, i.fields, V]
  ), j = ee.useCallback(
    async (q) => {
      const ne = y[parseInt(q)];
      if (!ne || yr.some((Ie) => i.fields[Ie].value.trim() !== "") && !await Tn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const Se = { ...i.fields };
      yr.forEach((Ie) => {
        Se[Ie] = { value: ne[Ie] ?? ne.data?.[Ie] ?? "", prompt: "", label: vr[Ie] };
      });
      const Je = (ne.data?.alternate_greetings ?? []).map((Ie) => ({ value: Ie, prompt: "" }));
      S(ne), s((Ie) => ({ ...Ie, fields: Se, lastLoadedCharacterId: ne.avatar })), B(Je);
    },
    [y, i.fields, B]
  ), J = () => V.map((q) => q.value).filter((q) => q.trim() !== ""), ae = async () => {
    if (!i.fields.name.value) return Ne("warning", "Please provide a character name.");
    if (!await Tn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const ne = {
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
      await mb(ne, !0);
    } catch (re) {
      Ne("error", `Failed to create character: ${re.message}`);
    }
  }, se = async () => {
    if (!h) return Ne("warning", "Please load a character to override.");
    if (!await Tn.Popup.show.confirm(
      "Override Character",
      `Override "${h.name}"? This cannot be undone.`
    )) return;
    const ne = {
      ...h,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: { ...h.data, alternate_greetings: J() }
    };
    try {
      await gb(ne, !0), Ne("success", `Character "${ne.name}" updated!`);
    } catch (re) {
      Ne("error", `Failed to override character: ${re.message}`);
    }
  }, G = () => {
    const q = JSON.stringify({ draftFields: i.draftFields, version: U0 }, null, 2), ne = new Blob([q], { type: "application/json" }), re = document.createElement("a");
    re.href = URL.createObjectURL(ne), re.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, re.click(), URL.revokeObjectURL(re.href);
  }, pe = () => {
    const q = document.createElement("input");
    q.type = "file", q.accept = ".json", q.onchange = async () => {
      const ne = q.files?.[0];
      if (ne)
        try {
          const re = await ne.text(), Se = JSON.parse(re);
          if (!Se.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Tn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Ie) => ({ ...Ie, draftFields: Se.draftFields })), Ne("success", "Draft fields imported."));
        } catch (re) {
          Ne("error", `Import failed: ${re.message}`);
        }
    }, q.click();
  }, he = ee.useMemo(
    () => y.map((q, ne) => ({ value: String(ne), label: q.name })),
    [y]
  ), qe = ee.useMemo(
    () => _.map((q) => ({ value: q, label: q })),
    [_]
  ), Ae = ee.useMemo(
    () => Object.keys(r.promptPresets).map((q) => ({ value: q, label: q })),
    [r.promptPresets]
  ), Ve = ee.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((q) => ({ value: q, label: q })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ A.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ A.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ A.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ A.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ A.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ A.jsx(
            q0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (q) => M("profileId", q?.id ?? "")
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
                  onChange: (q) => k("stDescription", q.target.checked)
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
                  onChange: (q) => k("persona", q.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Pn !== void 0 || Ma) && /* @__PURE__ */ A.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ A.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ A.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (q) => k("messages", {
                    ...r.contextToSend.messages,
                    type: q.target.value
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
                    onChange: (q) => k("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(q.target.value) || 10
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
                    onChange: (q) => k("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(q.target.value) || 10
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
                    onChange: (q) => k("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(q.target.value) || 0
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
                    onChange: (q) => k("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(q.target.value) || 10 }
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
                  onChange: (q) => k("charCard", q.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ A.jsx(
              eu,
              {
                items: he,
                value: i.selectedCharacterIndexes,
                onChange: (q) => s((ne) => ({ ...ne, selectedCharacterIndexes: q })),
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
                  onChange: (q) => k("worldInfo", q.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ A.jsx(
              eu,
              {
                items: qe,
                value: i.selectedWorldNames,
                onChange: (q) => s((ne) => ({ ...ne, selectedWorldNames: q })),
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
                  onChange: (q) => k("existingFields", q.target.checked)
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
                  onChange: (q) => k("dontSendOtherGreetings", q.target.checked)
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
              Su,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Ve,
                value: r.mainContextTemplatePreset,
                onChange: (q) => M("mainContextTemplatePreset", q ?? "default")
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
                onChange: (q) => M("maxContextType", q.target.value),
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
              onChange: (q) => M("maxContextValue", parseInt(q.target.value) || 16384)
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
                onChange: (q) => M("maxResponseToken", parseInt(q.target.value) || 1024)
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
                onChange: (q) => M("outputFormat", q.target.value),
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
            Su,
            {
              label: "Prompt Preset",
              items: Ae,
              value: r.promptPreset,
              onChange: (q) => M("promptPreset", q ?? "default"),
              onItemsChange: (q) => M(
                "promptPresets",
                q.reduce(
                  (ne, re) => ({ ...ne, [re.value]: r.promptPresets[re.value] ?? { content: "" } }),
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
            Nn,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (q) => M("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: q.target.value }
              }),
              rows: 4
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ A.jsx(
            ye,
            {
              onClick: ge,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ A.jsx(ye, { onClick: ae, children: "Save as New" }),
          /* @__PURE__ */ A.jsx(ye, { onClick: se, disabled: !h, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ A.jsx(
            eu,
            {
              items: qe,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (q) => {
              },
              onBeforeSelection: async (q, ne) => {
                if (!i.fields.name.value)
                  return Ne("warning", "Please enter a name first."), !1;
                const re = ne[0], Je = Wt.compile(r.prompts.worldInfoCharDefinition.content)({
                  character: { ...i.fields, alternate_greetings: V.map((tt) => tt.value) }
                }), Ie = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: Je,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await $S({ entry: Ie, selectedWorldName: re, operation: "add" }), Ne("success", `Entry added to ${re}.`);
                } catch (tt) {
                  Ne("error", `Failed to add WI Entry: ${tt.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ A.jsxs(ye, { onClick: ue, children: [
            /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ A.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ A.jsx(
            eu,
            {
              items: he,
              value: h ? [String(y.indexOf(h))] : [],
              onChange: (q) => j(q[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ A.jsx(
            ye,
            {
              onClick: () => g("core"),
              className: `menu_button tab-button ${p === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ A.jsx(
            ye,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${p === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ A.jsx("div", { className: "right-aligned", children: p === "draft" && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsxs(ye, { onClick: le, children: [
              /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ A.jsx(ye, { onClick: G, children: "Export" }),
            /* @__PURE__ */ A.jsx(ye, { onClick: pe, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "tab-content-area", children: [
          p === "core" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Core Character Fields" }),
            yr.map((q) => {
              const ne = kA[q];
              return ne ? /* @__PURE__ */ A.jsx(
                yy,
                {
                  fieldId: q,
                  label: ne.label,
                  value: i.fields[q]?.value ?? "",
                  prompt: i.fields[q]?.prompt ?? "",
                  large: ne.large,
                  rows: ne.rows,
                  promptEnabled: ne.promptEnabled,
                  isGenerating: o.includes(q),
                  onValueChange: (re, Se) => I(re, Se, "value", !1),
                  onPromptChange: (re, Se) => I(re, Se, "prompt", !1),
                  onGenerate: te,
                  onContinue: (re) => te(re, i.fields[re].value),
                  onClear: (re) => Y(re, !1),
                  onCompare: De,
                  onOpenReviseSessions: fe
                },
                q
              ) : null;
            }),
            /* @__PURE__ */ A.jsx(
              Hx,
              {
                greetings: V,
                onGreetingsChange: B,
                isGenerating: o.some((q) => q.startsWith("alternate_greetings_")),
                onGenerate: (q) => te(`alternate_greetings_${q + 1}`),
                onContinue: (q) => te(`alternate_greetings_${q + 1}`, V[q].value),
                onCompare: De
              }
            )
          ] }),
          p === "draft" && /* @__PURE__ */ A.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ A.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([q, ne]) => /* @__PURE__ */ A.jsx(
              yy,
              {
                fieldId: q,
                label: ne.label,
                value: ne.value,
                prompt: ne.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(q),
                onValueChange: (re, Se) => I(re, Se, "value", !0),
                onPromptChange: (re, Se) => I(re, Se, "prompt", !0),
                onGenerate: te,
                onContinue: (re) => te(re, i.draftFields[re].value),
                onClear: (re) => Y(re, !0),
                onDelete: $
              },
              q
            ))
          ] })
        ] })
      ] })
    ] }),
    E && /* @__PURE__ */ A.jsx(
      Ri,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          iC,
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
      Ri,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ A.jsx(
          MA,
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
}, jA = () => {
  const [n, r] = ee.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, n ? /* @__PURE__ */ A.jsx(
    Ri,
    {
      content: /* @__PURE__ */ A.jsx(RA, {}),
      type: mn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, x1 = SillyTavern.getContext();
async function zA() {
  const n = await x1.renderExtensionTemplateAsync(
    `third-party/${Na}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), lv.createRoot(r).render(
    /* @__PURE__ */ A.jsx(hu.StrictMode, { children: /* @__PURE__ */ A.jsx(Ix, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), lv.createRoot(u).render(
    /* @__PURE__ */ A.jsx(hu.StrictMode, { children: /* @__PURE__ */ A.jsx(jA, {}) })
  ), o.forEach((d) => {
    if (!d) return;
    const p = document.createElement("div");
    p.innerHTML = s.trim();
    const g = p.firstChild;
    g && (d.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function LA() {
  return !!x1.ConnectionManagerRequestService;
}
LA() ? kx().then(() => {
  zA();
}) : Ne("error", `[${Na}] Make sure ST is updated.`);
export {
  zA as init
};
