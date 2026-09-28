function U2(o, s) {
  for (var c = 0; c < s.length; c++) {
    const p = s[c];
    if (typeof p != "string" && !Array.isArray(p)) {
      for (const g in p)
        if (g !== "default" && !(g in o)) {
          const b = Object.getOwnPropertyDescriptor(p, g);
          b && Object.defineProperty(o, g, b.get ? b : {
            enumerable: !0,
            get: () => p[g]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
function rR(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var yx = { exports: {} }, Gv = {}, gx = { exports: {} }, zt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D1;
function H2() {
  if (D1) return zt;
  D1 = 1;
  var o = Symbol.for("react.element"), s = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), R = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.iterator;
  function P(L) {
    return L === null || typeof L != "object" ? null : (L = O && L[O] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var k = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, B = {};
  function G(L, X, we) {
    this.props = L, this.context = X, this.refs = B, this.updater = we || k;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(L, X) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, X, "setState");
  }, G.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = G.prototype;
  function oe(L, X, we) {
    this.props = L, this.context = X, this.refs = B, this.updater = we || k;
  }
  var se = oe.prototype = new ee();
  se.constructor = oe, j(se, G.prototype), se.isPureReactComponent = !0;
  var ce = Array.isArray, I = Object.prototype.hasOwnProperty, he = { current: null }, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ye(L, X, we) {
    var xe, Ae = {}, Oe = null, Te = null;
    if (X != null) for (xe in X.ref !== void 0 && (Te = X.ref), X.key !== void 0 && (Oe = "" + X.key), X) I.call(X, xe) && !fe.hasOwnProperty(xe) && (Ae[xe] = X[xe]);
    var Pe = arguments.length - 2;
    if (Pe === 1) Ae.children = we;
    else if (1 < Pe) {
      for (var je = Array(Pe), Ge = 0; Ge < Pe; Ge++) je[Ge] = arguments[Ge + 2];
      Ae.children = je;
    }
    if (L && L.defaultProps) for (xe in Pe = L.defaultProps, Pe) Ae[xe] === void 0 && (Ae[xe] = Pe[xe]);
    return { $$typeof: o, type: L, key: Oe, ref: Te, props: Ae, _owner: he.current };
  }
  function tt(L, X) {
    return { $$typeof: o, type: L.type, key: X, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function We(L) {
    return typeof L == "object" && L !== null && L.$$typeof === o;
  }
  function ot(L) {
    var X = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(we) {
      return X[we];
    });
  }
  var nt = /\/+/g;
  function Re(L, X) {
    return typeof L == "object" && L !== null && L.key != null ? ot("" + L.key) : X.toString(36);
  }
  function Qe(L, X, we, xe, Ae) {
    var Oe = typeof L;
    (Oe === "undefined" || Oe === "boolean") && (L = null);
    var Te = !1;
    if (L === null) Te = !0;
    else switch (Oe) {
      case "string":
      case "number":
        Te = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case o:
          case s:
            Te = !0;
        }
    }
    if (Te) return Te = L, Ae = Ae(Te), L = xe === "" ? "." + Re(Te, 0) : xe, ce(Ae) ? (we = "", L != null && (we = L.replace(nt, "$&/") + "/"), Qe(Ae, X, we, "", function(Ge) {
      return Ge;
    })) : Ae != null && (We(Ae) && (Ae = tt(Ae, we + (!Ae.key || Te && Te.key === Ae.key ? "" : ("" + Ae.key).replace(nt, "$&/") + "/") + L)), X.push(Ae)), 1;
    if (Te = 0, xe = xe === "" ? "." : xe + ":", ce(L)) for (var Pe = 0; Pe < L.length; Pe++) {
      Oe = L[Pe];
      var je = xe + Re(Oe, Pe);
      Te += Qe(Oe, X, we, je, Ae);
    }
    else if (je = P(L), typeof je == "function") for (L = je.call(L), Pe = 0; !(Oe = L.next()).done; ) Oe = Oe.value, je = xe + Re(Oe, Pe++), Te += Qe(Oe, X, we, je, Ae);
    else if (Oe === "object") throw X = String(L), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.");
    return Te;
  }
  function ct(L, X, we) {
    if (L == null) return L;
    var xe = [], Ae = 0;
    return Qe(L, xe, "", "", function(Oe) {
      return X.call(we, Oe, Ae++);
    }), xe;
  }
  function qe(L) {
    if (L._status === -1) {
      var X = L._result;
      X = X(), X.then(function(we) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = we);
      }, function(we) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = we);
      }), L._status === -1 && (L._status = 0, L._result = X);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var Ee = { current: null }, ie = { transition: null }, ke = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: ie, ReactCurrentOwner: he };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return zt.Children = { map: ct, forEach: function(L, X, we) {
    ct(L, function() {
      X.apply(this, arguments);
    }, we);
  }, count: function(L) {
    var X = 0;
    return ct(L, function() {
      X++;
    }), X;
  }, toArray: function(L) {
    return ct(L, function(X) {
      return X;
    }) || [];
  }, only: function(L) {
    if (!We(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, zt.Component = G, zt.Fragment = c, zt.Profiler = g, zt.PureComponent = oe, zt.StrictMode = p, zt.Suspense = C, zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, zt.act = V, zt.cloneElement = function(L, X, we) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var xe = j({}, L.props), Ae = L.key, Oe = L.ref, Te = L._owner;
    if (X != null) {
      if (X.ref !== void 0 && (Oe = X.ref, Te = he.current), X.key !== void 0 && (Ae = "" + X.key), L.type && L.type.defaultProps) var Pe = L.type.defaultProps;
      for (je in X) I.call(X, je) && !fe.hasOwnProperty(je) && (xe[je] = X[je] === void 0 && Pe !== void 0 ? Pe[je] : X[je]);
    }
    var je = arguments.length - 2;
    if (je === 1) xe.children = we;
    else if (1 < je) {
      Pe = Array(je);
      for (var Ge = 0; Ge < je; Ge++) Pe[Ge] = arguments[Ge + 2];
      xe.children = Pe;
    }
    return { $$typeof: o, type: L.type, key: Ae, ref: Oe, props: xe, _owner: Te };
  }, zt.createContext = function(L) {
    return L = { $$typeof: m, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: b, _context: L }, L.Consumer = L;
  }, zt.createElement = Ye, zt.createFactory = function(L) {
    var X = Ye.bind(null, L);
    return X.type = L, X;
  }, zt.createRef = function() {
    return { current: null };
  }, zt.forwardRef = function(L) {
    return { $$typeof: w, render: L };
  }, zt.isValidElement = We, zt.lazy = function(L) {
    return { $$typeof: D, _payload: { _status: -1, _result: L }, _init: qe };
  }, zt.memo = function(L, X) {
    return { $$typeof: R, type: L, compare: X === void 0 ? null : X };
  }, zt.startTransition = function(L) {
    var X = ie.transition;
    ie.transition = {};
    try {
      L();
    } finally {
      ie.transition = X;
    }
  }, zt.unstable_act = V, zt.useCallback = function(L, X) {
    return Ee.current.useCallback(L, X);
  }, zt.useContext = function(L) {
    return Ee.current.useContext(L);
  }, zt.useDebugValue = function() {
  }, zt.useDeferredValue = function(L) {
    return Ee.current.useDeferredValue(L);
  }, zt.useEffect = function(L, X) {
    return Ee.current.useEffect(L, X);
  }, zt.useId = function() {
    return Ee.current.useId();
  }, zt.useImperativeHandle = function(L, X, we) {
    return Ee.current.useImperativeHandle(L, X, we);
  }, zt.useInsertionEffect = function(L, X) {
    return Ee.current.useInsertionEffect(L, X);
  }, zt.useLayoutEffect = function(L, X) {
    return Ee.current.useLayoutEffect(L, X);
  }, zt.useMemo = function(L, X) {
    return Ee.current.useMemo(L, X);
  }, zt.useReducer = function(L, X, we) {
    return Ee.current.useReducer(L, X, we);
  }, zt.useRef = function(L) {
    return Ee.current.useRef(L);
  }, zt.useState = function(L) {
    return Ee.current.useState(L);
  }, zt.useSyncExternalStore = function(L, X, we) {
    return Ee.current.useSyncExternalStore(L, X, we);
  }, zt.useTransition = function() {
    return Ee.current.useTransition();
  }, zt.version = "18.3.1", zt;
}
var Jv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Jv.exports;
var P1;
function I2() {
  return P1 || (P1 = 1, function(o, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = "18.3.1", p = Symbol.for("react.element"), g = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), R = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), G = Symbol.iterator, ee = "@@iterator";
      function oe(E) {
        if (E === null || typeof E != "object")
          return null;
        var N = G && E[G] || E[ee];
        return typeof N == "function" ? N : null;
      }
      var se = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {
        transition: null
      }, I = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {}, Ye = null;
      function tt(E) {
        Ye = E;
      }
      fe.setExtraStackFrame = function(E) {
        Ye = E;
      }, fe.getCurrentStack = null, fe.getStackAddendum = function() {
        var E = "";
        Ye && (E += Ye);
        var N = fe.getCurrentStack;
        return N && (E += N() || ""), E;
      };
      var We = !1, ot = !1, nt = !1, Re = !1, Qe = !1, ct = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: ce,
        ReactCurrentOwner: he
      };
      ct.ReactDebugCurrentFrame = fe, ct.ReactCurrentActQueue = I;
      function qe(E) {
        {
          for (var N = arguments.length, Z = new Array(N > 1 ? N - 1 : 0), ae = 1; ae < N; ae++)
            Z[ae - 1] = arguments[ae];
          ie("warn", E, Z);
        }
      }
      function Ee(E) {
        {
          for (var N = arguments.length, Z = new Array(N > 1 ? N - 1 : 0), ae = 1; ae < N; ae++)
            Z[ae - 1] = arguments[ae];
          ie("error", E, Z);
        }
      }
      function ie(E, N, Z) {
        {
          var ae = ct.ReactDebugCurrentFrame, Ce = ae.getStackAddendum();
          Ce !== "" && (N += "%s", Z = Z.concat([Ce]));
          var ft = Z.map(function(Le) {
            return String(Le);
          });
          ft.unshift("Warning: " + N), Function.prototype.apply.call(console[E], console, ft);
        }
      }
      var ke = {};
      function V(E, N) {
        {
          var Z = E.constructor, ae = Z && (Z.displayName || Z.name) || "ReactClass", Ce = ae + "." + N;
          if (ke[Ce])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", N, ae), ke[Ce] = !0;
        }
      }
      var L = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(E) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(E, N, Z) {
          V(E, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(E, N, Z, ae) {
          V(E, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(E, N, Z, ae) {
          V(E, "setState");
        }
      }, X = Object.assign, we = {};
      Object.freeze(we);
      function xe(E, N, Z) {
        this.props = E, this.context = N, this.refs = we, this.updater = Z || L;
      }
      xe.prototype.isReactComponent = {}, xe.prototype.setState = function(E, N) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, N, "setState");
      }, xe.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      };
      {
        var Ae = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Oe = function(E, N) {
          Object.defineProperty(xe.prototype, E, {
            get: function() {
              qe("%s(...) is deprecated in plain JavaScript React classes. %s", N[0], N[1]);
            }
          });
        };
        for (var Te in Ae)
          Ae.hasOwnProperty(Te) && Oe(Te, Ae[Te]);
      }
      function Pe() {
      }
      Pe.prototype = xe.prototype;
      function je(E, N, Z) {
        this.props = E, this.context = N, this.refs = we, this.updater = Z || L;
      }
      var Ge = je.prototype = new Pe();
      Ge.constructor = je, X(Ge, xe.prototype), Ge.isPureReactComponent = !0;
      function At() {
        var E = {
          current: null
        };
        return Object.seal(E), E;
      }
      var _e = Array.isArray;
      function Nt(E) {
        return _e(E);
      }
      function bn(E) {
        {
          var N = typeof Symbol == "function" && Symbol.toStringTag, Z = N && E[Symbol.toStringTag] || E.constructor.name || "Object";
          return Z;
        }
      }
      function Rn(E) {
        try {
          return Mn(E), !1;
        } catch {
          return !0;
        }
      }
      function Mn(E) {
        return "" + E;
      }
      function kr(E) {
        if (Rn(E))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bn(E)), Mn(E);
      }
      function Na(E, N, Z) {
        var ae = E.displayName;
        if (ae)
          return ae;
        var Ce = N.displayName || N.name || "";
        return Ce !== "" ? Z + "(" + Ce + ")" : Z;
      }
      function lr(E) {
        return E.displayName || "Context";
      }
      function ur(E) {
        if (E == null)
          return null;
        if (typeof E.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
          return E.displayName || E.name || null;
        if (typeof E == "string")
          return E;
        switch (E) {
          case b:
            return "Fragment";
          case g:
            return "Portal";
          case w:
            return "Profiler";
          case m:
            return "StrictMode";
          case O:
            return "Suspense";
          case P:
            return "SuspenseList";
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case R:
              var N = E;
              return lr(N) + ".Consumer";
            case C:
              var Z = E;
              return lr(Z._context) + ".Provider";
            case D:
              return Na(E, E.render, "ForwardRef");
            case k:
              var ae = E.displayName || null;
              return ae !== null ? ae : ur(E.type) || "Memo";
            case j: {
              var Ce = E, ft = Ce._payload, Le = Ce._init;
              try {
                return ur(Le(ft));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var zn = Object.prototype.hasOwnProperty, tr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Dr, ri, Wn;
      Wn = {};
      function Pr(E) {
        if (zn.call(E, "ref")) {
          var N = Object.getOwnPropertyDescriptor(E, "ref").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return E.ref !== void 0;
      }
      function ba(E) {
        if (zn.call(E, "key")) {
          var N = Object.getOwnPropertyDescriptor(E, "key").get;
          if (N && N.isReactWarning)
            return !1;
        }
        return E.key !== void 0;
      }
      function ai(E, N) {
        var Z = function() {
          Dr || (Dr = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        Z.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Z,
          configurable: !0
        });
      }
      function wi(E, N) {
        var Z = function() {
          ri || (ri = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        Z.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Z,
          configurable: !0
        });
      }
      function $e(E) {
        if (typeof E.ref == "string" && he.current && E.__self && he.current.stateNode !== E.__self) {
          var N = ur(he.current.type);
          Wn[N] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N, E.ref), Wn[N] = !0);
        }
      }
      var rt = function(E, N, Z, ae, Ce, ft, Le) {
        var vt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: E,
          key: N,
          ref: Z,
          props: Le,
          // Record the component responsible for creating this element.
          _owner: ft
        };
        return vt._store = {}, Object.defineProperty(vt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(vt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ae
        }), Object.defineProperty(vt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ce
        }), Object.freeze && (Object.freeze(vt.props), Object.freeze(vt)), vt;
      };
      function Ot(E, N, Z) {
        var ae, Ce = {}, ft = null, Le = null, vt = null, Lt = null;
        if (N != null) {
          Pr(N) && (Le = N.ref, $e(N)), ba(N) && (kr(N.key), ft = "" + N.key), vt = N.__self === void 0 ? null : N.__self, Lt = N.__source === void 0 ? null : N.__source;
          for (ae in N)
            zn.call(N, ae) && !tr.hasOwnProperty(ae) && (Ce[ae] = N[ae]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          Ce.children = Z;
        else if (Bt > 1) {
          for (var yn = Array(Bt), on = 0; on < Bt; on++)
            yn[on] = arguments[on + 2];
          Object.freeze && Object.freeze(yn), Ce.children = yn;
        }
        if (E && E.defaultProps) {
          var $t = E.defaultProps;
          for (ae in $t)
            Ce[ae] === void 0 && (Ce[ae] = $t[ae]);
        }
        if (ft || Le) {
          var ln = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          ft && ai(Ce, ln), Le && wi(Ce, ln);
        }
        return rt(E, ft, Le, vt, Lt, he.current, Ce);
      }
      function Zt(E, N) {
        var Z = rt(E.type, N, E.ref, E._self, E._source, E._owner, E.props);
        return Z;
      }
      function vn(E, N, Z) {
        if (E == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var ae, Ce = X({}, E.props), ft = E.key, Le = E.ref, vt = E._self, Lt = E._source, Bt = E._owner;
        if (N != null) {
          Pr(N) && (Le = N.ref, Bt = he.current), ba(N) && (kr(N.key), ft = "" + N.key);
          var yn;
          E.type && E.type.defaultProps && (yn = E.type.defaultProps);
          for (ae in N)
            zn.call(N, ae) && !tr.hasOwnProperty(ae) && (N[ae] === void 0 && yn !== void 0 ? Ce[ae] = yn[ae] : Ce[ae] = N[ae]);
        }
        var on = arguments.length - 2;
        if (on === 1)
          Ce.children = Z;
        else if (on > 1) {
          for (var $t = Array(on), ln = 0; ln < on; ln++)
            $t[ln] = arguments[ln + 2];
          Ce.children = $t;
        }
        return rt(E.type, ft, Le, vt, Lt, Bt, Ce);
      }
      function $n(E) {
        return typeof E == "object" && E !== null && E.$$typeof === p;
      }
      var xn = ".", sr = ":";
      function hn(E) {
        var N = /[=:]/g, Z = {
          "=": "=0",
          ":": "=2"
        }, ae = E.replace(N, function(Ce) {
          return Z[Ce];
        });
        return "$" + ae;
      }
      var nn = !1, rn = /\/+/g;
      function xa(E) {
        return E.replace(rn, "$&/");
      }
      function Lr(E, N) {
        return typeof E == "object" && E !== null && E.key != null ? (kr(E.key), hn("" + E.key)) : N.toString(36);
      }
      function Ma(E, N, Z, ae, Ce) {
        var ft = typeof E;
        (ft === "undefined" || ft === "boolean") && (E = null);
        var Le = !1;
        if (E === null)
          Le = !0;
        else
          switch (ft) {
            case "string":
            case "number":
              Le = !0;
              break;
            case "object":
              switch (E.$$typeof) {
                case p:
                case g:
                  Le = !0;
              }
          }
        if (Le) {
          var vt = E, Lt = Ce(vt), Bt = ae === "" ? xn + Lr(vt, 0) : ae;
          if (Nt(Lt)) {
            var yn = "";
            Bt != null && (yn = xa(Bt) + "/"), Ma(Lt, N, yn, "", function(Qd) {
              return Qd;
            });
          } else Lt != null && ($n(Lt) && (Lt.key && (!vt || vt.key !== Lt.key) && kr(Lt.key), Lt = Zt(
            Lt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Lt.key && (!vt || vt.key !== Lt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              xa("" + Lt.key) + "/"
            ) : "") + Bt
          )), N.push(Lt));
          return 1;
        }
        var on, $t, ln = 0, kn = ae === "" ? xn : ae + sr;
        if (Nt(E))
          for (var Fo = 0; Fo < E.length; Fo++)
            on = E[Fo], $t = kn + Lr(on, Fo), ln += Ma(on, N, Z, $t, Ce);
        else {
          var Rs = oe(E);
          if (typeof Rs == "function") {
            var no = E;
            Rs === no.entries && (nn || qe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), nn = !0);
            for (var Ts = Rs.call(no), Pl, Yd = 0; !(Pl = Ts.next()).done; )
              on = Pl.value, $t = kn + Lr(on, Yd++), ln += Ma(on, N, Z, $t, Ce);
          } else if (ft === "object") {
            var qc = String(E);
            throw new Error("Objects are not valid as a React child (found: " + (qc === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : qc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ln;
      }
      function Zi(E, N, Z) {
        if (E == null)
          return E;
        var ae = [], Ce = 0;
        return Ma(E, ae, "", "", function(ft) {
          return N.call(Z, ft, Ce++);
        }), ae;
      }
      function Cl(E) {
        var N = 0;
        return Zi(E, function() {
          N++;
        }), N;
      }
      function wl(E, N, Z) {
        Zi(E, function() {
          N.apply(this, arguments);
        }, Z);
      }
      function ko(E) {
        return Zi(E, function(N) {
          return N;
        }) || [];
      }
      function Do(E) {
        if (!$n(E))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return E;
      }
      function _l(E) {
        var N = {
          $$typeof: R,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: E,
          _currentValue2: E,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        N.Provider = {
          $$typeof: C,
          _context: N
        };
        var Z = !1, ae = !1, Ce = !1;
        {
          var ft = {
            $$typeof: R,
            _context: N
          };
          Object.defineProperties(ft, {
            Provider: {
              get: function() {
                return ae || (ae = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), N.Provider;
              },
              set: function(Le) {
                N.Provider = Le;
              }
            },
            _currentValue: {
              get: function() {
                return N._currentValue;
              },
              set: function(Le) {
                N._currentValue = Le;
              }
            },
            _currentValue2: {
              get: function() {
                return N._currentValue2;
              },
              set: function(Le) {
                N._currentValue2 = Le;
              }
            },
            _threadCount: {
              get: function() {
                return N._threadCount;
              },
              set: function(Le) {
                N._threadCount = Le;
              }
            },
            Consumer: {
              get: function() {
                return Z || (Z = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), N.Consumer;
              }
            },
            displayName: {
              get: function() {
                return N.displayName;
              },
              set: function(Le) {
                Ce || (qe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Le), Ce = !0);
              }
            }
          }), N.Consumer = ft;
        }
        return N._currentRenderer = null, N._currentRenderer2 = null, N;
      }
      var jr = -1, Fr = 0, hr = 1, _i = 2;
      function ii(E) {
        if (E._status === jr) {
          var N = E._result, Z = N();
          if (Z.then(function(ft) {
            if (E._status === Fr || E._status === jr) {
              var Le = E;
              Le._status = hr, Le._result = ft;
            }
          }, function(ft) {
            if (E._status === Fr || E._status === jr) {
              var Le = E;
              Le._status = _i, Le._result = ft;
            }
          }), E._status === jr) {
            var ae = E;
            ae._status = Fr, ae._result = Z;
          }
        }
        if (E._status === hr) {
          var Ce = E._result;
          return Ce === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ce), "default" in Ce || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ce), Ce.default;
        } else
          throw E._result;
      }
      function Ri(E) {
        var N = {
          // We use these fields to store the result.
          _status: jr,
          _result: E
        }, Z = {
          $$typeof: j,
          _payload: N,
          _init: ii
        };
        {
          var ae, Ce;
          Object.defineProperties(Z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ae;
              },
              set: function(ft) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ae = ft, Object.defineProperty(Z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ce;
              },
              set: function(ft) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ce = ft, Object.defineProperty(Z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Z;
      }
      function Ti(E) {
        E != null && E.$$typeof === k ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof E != "function" ? Ee("forwardRef requires a render function but was given %s.", E === null ? "null" : typeof E) : E.length !== 0 && E.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", E.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), E != null && (E.defaultProps != null || E.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var N = {
          $$typeof: D,
          render: E
        };
        {
          var Z;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Z;
            },
            set: function(ae) {
              Z = ae, !E.name && !E.displayName && (E.displayName = ae);
            }
          });
        }
        return N;
      }
      var M;
      M = Symbol.for("react.module.reference");
      function pe(E) {
        return !!(typeof E == "string" || typeof E == "function" || E === b || E === w || Qe || E === m || E === O || E === P || Re || E === B || We || ot || nt || typeof E == "object" && E !== null && (E.$$typeof === j || E.$$typeof === k || E.$$typeof === C || E.$$typeof === R || E.$$typeof === D || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        E.$$typeof === M || E.getModuleId !== void 0));
      }
      function Ne(E, N) {
        pe(E) || Ee("memo: The first argument must be a component. Instead received: %s", E === null ? "null" : typeof E);
        var Z = {
          $$typeof: k,
          type: E,
          compare: N === void 0 ? null : N
        };
        {
          var ae;
          Object.defineProperty(Z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ae;
            },
            set: function(Ce) {
              ae = Ce, !E.name && !E.displayName && (E.displayName = Ce);
            }
          });
        }
        return Z;
      }
      function Ve() {
        var E = se.current;
        return E === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), E;
      }
      function Ct(E) {
        var N = Ve();
        if (E._context !== void 0) {
          var Z = E._context;
          Z.Consumer === E ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Z.Provider === E && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return N.useContext(E);
      }
      function bt(E) {
        var N = Ve();
        return N.useState(E);
      }
      function Pt(E, N, Z) {
        var ae = Ve();
        return ae.useReducer(E, N, Z);
      }
      function kt(E) {
        var N = Ve();
        return N.useRef(E);
      }
      function jn(E, N) {
        var Z = Ve();
        return Z.useEffect(E, N);
      }
      function mn(E, N) {
        var Z = Ve();
        return Z.useInsertionEffect(E, N);
      }
      function En(E, N) {
        var Z = Ve();
        return Z.useLayoutEffect(E, N);
      }
      function mr(E, N) {
        var Z = Ve();
        return Z.useCallback(E, N);
      }
      function oi(E, N) {
        var Z = Ve();
        return Z.useMemo(E, N);
      }
      function li(E, N, Z) {
        var ae = Ve();
        return ae.useImperativeHandle(E, N, Z);
      }
      function wt(E, N) {
        {
          var Z = Ve();
          return Z.useDebugValue(E, N);
        }
      }
      function Rt() {
        var E = Ve();
        return E.useTransition();
      }
      function ui(E) {
        var N = Ve();
        return N.useDeferredValue(E);
      }
      function Rl() {
        var E = Ve();
        return E.useId();
      }
      function Tl(E, N, Z) {
        var ae = Ve();
        return ae.useSyncExternalStore(E, N, Z);
      }
      var Po = 0, xu, Lo, ra, Es, Ur, Yc, Qc;
      function Eu() {
      }
      Eu.__reactDisabledLog = !0;
      function Ao() {
        {
          if (Po === 0) {
            xu = console.log, Lo = console.info, ra = console.warn, Es = console.error, Ur = console.group, Yc = console.groupCollapsed, Qc = console.groupEnd;
            var E = {
              configurable: !0,
              enumerable: !0,
              value: Eu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: E,
              log: E,
              warn: E,
              error: E,
              group: E,
              groupCollapsed: E,
              groupEnd: E
            });
          }
          Po++;
        }
      }
      function Ea() {
        {
          if (Po--, Po === 0) {
            var E = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: X({}, E, {
                value: xu
              }),
              info: X({}, E, {
                value: Lo
              }),
              warn: X({}, E, {
                value: ra
              }),
              error: X({}, E, {
                value: Es
              }),
              group: X({}, E, {
                value: Ur
              }),
              groupCollapsed: X({}, E, {
                value: Yc
              }),
              groupEnd: X({}, E, {
                value: Qc
              })
            });
          }
          Po < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var si = ct.ReactCurrentDispatcher, ci;
      function Cu(E, N, Z) {
        {
          if (ci === void 0)
            try {
              throw Error();
            } catch (Ce) {
              var ae = Ce.stack.trim().match(/\n( *(at )?)/);
              ci = ae && ae[1] || "";
            }
          return `
` + ci + E;
        }
      }
      var Ol = !1, No;
      {
        var wu = typeof WeakMap == "function" ? WeakMap : Map;
        No = new wu();
      }
      function _u(E, N) {
        if (!E || Ol)
          return "";
        {
          var Z = No.get(E);
          if (Z !== void 0)
            return Z;
        }
        var ae;
        Ol = !0;
        var Ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ft;
        ft = si.current, si.current = null, Ao();
        try {
          if (N) {
            var Le = function() {
              throw Error();
            };
            if (Object.defineProperty(Le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Le, []);
              } catch (kn) {
                ae = kn;
              }
              Reflect.construct(E, [], Le);
            } else {
              try {
                Le.call();
              } catch (kn) {
                ae = kn;
              }
              E.call(Le.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kn) {
              ae = kn;
            }
            E();
          }
        } catch (kn) {
          if (kn && ae && typeof kn.stack == "string") {
            for (var vt = kn.stack.split(`
`), Lt = ae.stack.split(`
`), Bt = vt.length - 1, yn = Lt.length - 1; Bt >= 1 && yn >= 0 && vt[Bt] !== Lt[yn]; )
              yn--;
            for (; Bt >= 1 && yn >= 0; Bt--, yn--)
              if (vt[Bt] !== Lt[yn]) {
                if (Bt !== 1 || yn !== 1)
                  do
                    if (Bt--, yn--, yn < 0 || vt[Bt] !== Lt[yn]) {
                      var on = `
` + vt[Bt].replace(" at new ", " at ");
                      return E.displayName && on.includes("<anonymous>") && (on = on.replace("<anonymous>", E.displayName)), typeof E == "function" && No.set(E, on), on;
                    }
                  while (Bt >= 1 && yn >= 0);
                break;
              }
          }
        } finally {
          Ol = !1, si.current = ft, Ea(), Error.prepareStackTrace = Ce;
        }
        var $t = E ? E.displayName || E.name : "", ln = $t ? Cu($t) : "";
        return typeof E == "function" && No.set(E, ln), ln;
      }
      function eo(E, N, Z) {
        return _u(E, !1);
      }
      function Vd(E) {
        var N = E.prototype;
        return !!(N && N.isReactComponent);
      }
      function to(E, N, Z) {
        if (E == null)
          return "";
        if (typeof E == "function")
          return _u(E, Vd(E));
        if (typeof E == "string")
          return Cu(E);
        switch (E) {
          case O:
            return Cu("Suspense");
          case P:
            return Cu("SuspenseList");
        }
        if (typeof E == "object")
          switch (E.$$typeof) {
            case D:
              return eo(E.render);
            case k:
              return to(E.type, N, Z);
            case j: {
              var ae = E, Ce = ae._payload, ft = ae._init;
              try {
                return to(ft(Ce), N, Z);
              } catch {
              }
            }
          }
        return "";
      }
      var Qt = {}, Ru = ct.ReactDebugCurrentFrame;
      function It(E) {
        if (E) {
          var N = E._owner, Z = to(E.type, E._source, N ? N.type : null);
          Ru.setExtraStackFrame(Z);
        } else
          Ru.setExtraStackFrame(null);
      }
      function Cs(E, N, Z, ae, Ce) {
        {
          var ft = Function.call.bind(zn);
          for (var Le in E)
            if (ft(E, Le)) {
              var vt = void 0;
              try {
                if (typeof E[Le] != "function") {
                  var Lt = Error((ae || "React class") + ": " + Z + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Lt.name = "Invariant Violation", Lt;
                }
                vt = E[Le](N, Le, ae, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Bt) {
                vt = Bt;
              }
              vt && !(vt instanceof Error) && (It(Ce), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ae || "React class", Z, Le, typeof vt), It(null)), vt instanceof Error && !(vt.message in Qt) && (Qt[vt.message] = !0, It(Ce), Ee("Failed %s type: %s", Z, vt.message), It(null));
            }
        }
      }
      function Oi(E) {
        if (E) {
          var N = E._owner, Z = to(E.type, E._source, N ? N.type : null);
          tt(Z);
        } else
          tt(null);
      }
      var St;
      St = !1;
      function Tu() {
        if (he.current) {
          var E = ur(he.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
      function yr(E) {
        if (E !== void 0) {
          var N = E.fileName.replace(/^.*[\\\/]/, ""), Z = E.lineNumber;
          return `

Check your code at ` + N + ":" + Z + ".";
        }
        return "";
      }
      function $i(E) {
        return E != null ? yr(E.__source) : "";
      }
      var Hr = {};
      function ki(E) {
        var N = Tu();
        if (!N) {
          var Z = typeof E == "string" ? E : E.displayName || E.name;
          Z && (N = `

Check the top-level render call using <` + Z + ">.");
        }
        return N;
      }
      function Cn(E, N) {
        if (!(!E._store || E._store.validated || E.key != null)) {
          E._store.validated = !0;
          var Z = ki(N);
          if (!Hr[Z]) {
            Hr[Z] = !0;
            var ae = "";
            E && E._owner && E._owner !== he.current && (ae = " It was passed a child from " + ur(E._owner.type) + "."), Oi(E), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, ae), Oi(null);
          }
        }
      }
      function an(E, N) {
        if (typeof E == "object") {
          if (Nt(E))
            for (var Z = 0; Z < E.length; Z++) {
              var ae = E[Z];
              $n(ae) && Cn(ae, N);
            }
          else if ($n(E))
            E._store && (E._store.validated = !0);
          else if (E) {
            var Ce = oe(E);
            if (typeof Ce == "function" && Ce !== E.entries)
              for (var ft = Ce.call(E), Le; !(Le = ft.next()).done; )
                $n(Le.value) && Cn(Le.value, N);
          }
        }
      }
      function Mo(E) {
        {
          var N = E.type;
          if (N == null || typeof N == "string")
            return;
          var Z;
          if (typeof N == "function")
            Z = N.propTypes;
          else if (typeof N == "object" && (N.$$typeof === D || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          N.$$typeof === k))
            Z = N.propTypes;
          else
            return;
          if (Z) {
            var ae = ur(N);
            Cs(Z, E.props, "prop", ae, E);
          } else if (N.PropTypes !== void 0 && !St) {
            St = !0;
            var Ce = ur(N);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
          }
          typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function nr(E) {
        {
          for (var N = Object.keys(E.props), Z = 0; Z < N.length; Z++) {
            var ae = N[Z];
            if (ae !== "children" && ae !== "key") {
              Oi(E), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ae), Oi(null);
              break;
            }
          }
          E.ref !== null && (Oi(E), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), Oi(null));
        }
      }
      function Ir(E, N, Z) {
        var ae = pe(E);
        if (!ae) {
          var Ce = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = $i(N);
          ft ? Ce += ft : Ce += Tu();
          var Le;
          E === null ? Le = "null" : Nt(E) ? Le = "array" : E !== void 0 && E.$$typeof === p ? (Le = "<" + (ur(E.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof E, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, Ce);
        }
        var vt = Ot.apply(this, arguments);
        if (vt == null)
          return vt;
        if (ae)
          for (var Lt = 2; Lt < arguments.length; Lt++)
            an(arguments[Lt], E);
        return E === b ? nr(vt) : Mo(vt), vt;
      }
      var za = !1;
      function $l(E) {
        var N = Ir.bind(null, E);
        return N.type = E, za || (za = !0, qe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(N, "type", {
          enumerable: !1,
          get: function() {
            return qe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: E
            }), E;
          }
        }), N;
      }
      function ws(E, N, Z) {
        for (var ae = vn.apply(this, arguments), Ce = 2; Ce < arguments.length; Ce++)
          an(arguments[Ce], ae.type);
        return Mo(ae), ae;
      }
      function _s(E, N) {
        var Z = ce.transition;
        ce.transition = {};
        var ae = ce.transition;
        ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          E();
        } finally {
          if (ce.transition = Z, Z === null && ae._updatedFibers) {
            var Ce = ae._updatedFibers.size;
            Ce > 10 && qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ae._updatedFibers.clear();
          }
        }
      }
      var zo = !1, kl = null;
      function Wd(E) {
        if (kl === null)
          try {
            var N = ("require" + Math.random()).slice(0, 7), Z = o && o[N];
            kl = Z.call(o, "timers").setImmediate;
          } catch {
            kl = function(Ce) {
              zo === !1 && (zo = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ft = new MessageChannel();
              ft.port1.onmessage = Ce, ft.port2.postMessage(void 0);
            };
          }
        return kl(E);
      }
      var ja = 0, fi = !1;
      function Di(E) {
        {
          var N = ja;
          ja++, I.current === null && (I.current = []);
          var Z = I.isBatchingLegacy, ae;
          try {
            if (I.isBatchingLegacy = !0, ae = E(), !Z && I.didScheduleLegacyUpdate) {
              var Ce = I.current;
              Ce !== null && (I.didScheduleLegacyUpdate = !1, jo(Ce));
            }
          } catch ($t) {
            throw Fa(N), $t;
          } finally {
            I.isBatchingLegacy = Z;
          }
          if (ae !== null && typeof ae == "object" && typeof ae.then == "function") {
            var ft = ae, Le = !1, vt = {
              then: function($t, ln) {
                Le = !0, ft.then(function(kn) {
                  Fa(N), ja === 0 ? Ou(kn, $t, ln) : $t(kn);
                }, function(kn) {
                  Fa(N), ln(kn);
                });
              }
            };
            return !fi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Le || (fi = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), vt;
          } else {
            var Lt = ae;
            if (Fa(N), ja === 0) {
              var Bt = I.current;
              Bt !== null && (jo(Bt), I.current = null);
              var yn = {
                then: function($t, ln) {
                  I.current === null ? (I.current = [], Ou(Lt, $t, ln)) : $t(Lt);
                }
              };
              return yn;
            } else {
              var on = {
                then: function($t, ln) {
                  $t(Lt);
                }
              };
              return on;
            }
          }
        }
      }
      function Fa(E) {
        E !== ja - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ja = E;
      }
      function Ou(E, N, Z) {
        {
          var ae = I.current;
          if (ae !== null)
            try {
              jo(ae), Wd(function() {
                ae.length === 0 ? (I.current = null, N(E)) : Ou(E, N, Z);
              });
            } catch (Ce) {
              Z(Ce);
            }
          else
            N(E);
        }
      }
      var $u = !1;
      function jo(E) {
        if (!$u) {
          $u = !0;
          var N = 0;
          try {
            for (; N < E.length; N++) {
              var Z = E[N];
              do
                Z = Z(!0);
              while (Z !== null);
            }
            E.length = 0;
          } catch (ae) {
            throw E = E.slice(N + 1), ae;
          } finally {
            $u = !1;
          }
        }
      }
      var Dl = Ir, ku = ws, Du = $l, di = {
        map: Zi,
        forEach: wl,
        count: Cl,
        toArray: ko,
        only: Do
      };
      s.Children = di, s.Component = xe, s.Fragment = b, s.Profiler = w, s.PureComponent = je, s.StrictMode = m, s.Suspense = O, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ct, s.act = Di, s.cloneElement = ku, s.createContext = _l, s.createElement = Dl, s.createFactory = Du, s.createRef = At, s.forwardRef = Ti, s.isValidElement = $n, s.lazy = Ri, s.memo = Ne, s.startTransition = _s, s.unstable_act = Di, s.useCallback = mr, s.useContext = Ct, s.useDebugValue = wt, s.useDeferredValue = ui, s.useEffect = jn, s.useId = Rl, s.useImperativeHandle = li, s.useInsertionEffect = mn, s.useLayoutEffect = En, s.useMemo = oi, s.useReducer = Pt, s.useRef = kt, s.useState = bt, s.useSyncExternalStore = Tl, s.useTransition = Rt, s.version = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jv, Jv.exports)), Jv.exports;
}
process.env.NODE_ENV === "production" ? gx.exports = H2() : gx.exports = I2();
var W = gx.exports;
const Yt = /* @__PURE__ */ rR(W), aR = /* @__PURE__ */ U2({
  __proto__: null,
  default: Yt
}, [W]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L1;
function B2() {
  if (L1) return Gv;
  L1 = 1;
  var o = W, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, g = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(w, C, R) {
    var D, O = {}, P = null, k = null;
    R !== void 0 && (P = "" + R), C.key !== void 0 && (P = "" + C.key), C.ref !== void 0 && (k = C.ref);
    for (D in C) p.call(C, D) && !b.hasOwnProperty(D) && (O[D] = C[D]);
    if (w && w.defaultProps) for (D in C = w.defaultProps, C) O[D] === void 0 && (O[D] = C[D]);
    return { $$typeof: s, type: w, key: P, ref: k, props: O, _owner: g.current };
  }
  return Gv.Fragment = c, Gv.jsx = m, Gv.jsxs = m, Gv;
}
var Xv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A1;
function V2() {
  return A1 || (A1 = 1, process.env.NODE_ENV !== "production" && function() {
    var o = W, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), w = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), j = Symbol.iterator, B = "@@iterator";
    function G(M) {
      if (M === null || typeof M != "object")
        return null;
      var pe = j && M[j] || M[B];
      return typeof pe == "function" ? pe : null;
    }
    var ee = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function oe(M) {
      {
        for (var pe = arguments.length, Ne = new Array(pe > 1 ? pe - 1 : 0), Ve = 1; Ve < pe; Ve++)
          Ne[Ve - 1] = arguments[Ve];
        se("error", M, Ne);
      }
    }
    function se(M, pe, Ne) {
      {
        var Ve = ee.ReactDebugCurrentFrame, Ct = Ve.getStackAddendum();
        Ct !== "" && (pe += "%s", Ne = Ne.concat([Ct]));
        var bt = Ne.map(function(Pt) {
          return String(Pt);
        });
        bt.unshift("Warning: " + pe), Function.prototype.apply.call(console[M], console, bt);
      }
    }
    var ce = !1, I = !1, he = !1, fe = !1, Ye = !1, tt;
    tt = Symbol.for("react.module.reference");
    function We(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === p || M === b || Ye || M === g || M === R || M === D || fe || M === k || ce || I || he || typeof M == "object" && M !== null && (M.$$typeof === P || M.$$typeof === O || M.$$typeof === m || M.$$typeof === w || M.$$typeof === C || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === tt || M.getModuleId !== void 0));
    }
    function ot(M, pe, Ne) {
      var Ve = M.displayName;
      if (Ve)
        return Ve;
      var Ct = pe.displayName || pe.name || "";
      return Ct !== "" ? Ne + "(" + Ct + ")" : Ne;
    }
    function nt(M) {
      return M.displayName || "Context";
    }
    function Re(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case b:
          return "Profiler";
        case g:
          return "StrictMode";
        case R:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case w:
            var pe = M;
            return nt(pe) + ".Consumer";
          case m:
            var Ne = M;
            return nt(Ne._context) + ".Provider";
          case C:
            return ot(M, M.render, "ForwardRef");
          case O:
            var Ve = M.displayName || null;
            return Ve !== null ? Ve : Re(M.type) || "Memo";
          case P: {
            var Ct = M, bt = Ct._payload, Pt = Ct._init;
            try {
              return Re(Pt(bt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qe = Object.assign, ct = 0, qe, Ee, ie, ke, V, L, X;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function xe() {
      {
        if (ct === 0) {
          qe = console.log, Ee = console.info, ie = console.warn, ke = console.error, V = console.group, L = console.groupCollapsed, X = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: we,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        ct++;
      }
    }
    function Ae() {
      {
        if (ct--, ct === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, M, {
              value: qe
            }),
            info: Qe({}, M, {
              value: Ee
            }),
            warn: Qe({}, M, {
              value: ie
            }),
            error: Qe({}, M, {
              value: ke
            }),
            group: Qe({}, M, {
              value: V
            }),
            groupCollapsed: Qe({}, M, {
              value: L
            }),
            groupEnd: Qe({}, M, {
              value: X
            })
          });
        }
        ct < 0 && oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Oe = ee.ReactCurrentDispatcher, Te;
    function Pe(M, pe, Ne) {
      {
        if (Te === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var Ve = Ct.stack.trim().match(/\n( *(at )?)/);
            Te = Ve && Ve[1] || "";
          }
        return `
` + Te + M;
      }
    }
    var je = !1, Ge;
    {
      var At = typeof WeakMap == "function" ? WeakMap : Map;
      Ge = new At();
    }
    function _e(M, pe) {
      if (!M || je)
        return "";
      {
        var Ne = Ge.get(M);
        if (Ne !== void 0)
          return Ne;
      }
      var Ve;
      je = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var bt;
      bt = Oe.current, Oe.current = null, xe();
      try {
        if (pe) {
          var Pt = function() {
            throw Error();
          };
          if (Object.defineProperty(Pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Pt, []);
            } catch (wt) {
              Ve = wt;
            }
            Reflect.construct(M, [], Pt);
          } else {
            try {
              Pt.call();
            } catch (wt) {
              Ve = wt;
            }
            M.call(Pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            Ve = wt;
          }
          M();
        }
      } catch (wt) {
        if (wt && Ve && typeof wt.stack == "string") {
          for (var kt = wt.stack.split(`
`), jn = Ve.stack.split(`
`), mn = kt.length - 1, En = jn.length - 1; mn >= 1 && En >= 0 && kt[mn] !== jn[En]; )
            En--;
          for (; mn >= 1 && En >= 0; mn--, En--)
            if (kt[mn] !== jn[En]) {
              if (mn !== 1 || En !== 1)
                do
                  if (mn--, En--, En < 0 || kt[mn] !== jn[En]) {
                    var mr = `
` + kt[mn].replace(" at new ", " at ");
                    return M.displayName && mr.includes("<anonymous>") && (mr = mr.replace("<anonymous>", M.displayName)), typeof M == "function" && Ge.set(M, mr), mr;
                  }
                while (mn >= 1 && En >= 0);
              break;
            }
        }
      } finally {
        je = !1, Oe.current = bt, Ae(), Error.prepareStackTrace = Ct;
      }
      var oi = M ? M.displayName || M.name : "", li = oi ? Pe(oi) : "";
      return typeof M == "function" && Ge.set(M, li), li;
    }
    function Nt(M, pe, Ne) {
      return _e(M, !1);
    }
    function bn(M) {
      var pe = M.prototype;
      return !!(pe && pe.isReactComponent);
    }
    function Rn(M, pe, Ne) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return _e(M, bn(M));
      if (typeof M == "string")
        return Pe(M);
      switch (M) {
        case R:
          return Pe("Suspense");
        case D:
          return Pe("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case C:
            return Nt(M.render);
          case O:
            return Rn(M.type, pe, Ne);
          case P: {
            var Ve = M, Ct = Ve._payload, bt = Ve._init;
            try {
              return Rn(bt(Ct), pe, Ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Mn = Object.prototype.hasOwnProperty, kr = {}, Na = ee.ReactDebugCurrentFrame;
    function lr(M) {
      if (M) {
        var pe = M._owner, Ne = Rn(M.type, M._source, pe ? pe.type : null);
        Na.setExtraStackFrame(Ne);
      } else
        Na.setExtraStackFrame(null);
    }
    function ur(M, pe, Ne, Ve, Ct) {
      {
        var bt = Function.call.bind(Mn);
        for (var Pt in M)
          if (bt(M, Pt)) {
            var kt = void 0;
            try {
              if (typeof M[Pt] != "function") {
                var jn = Error((Ve || "React class") + ": " + Ne + " type `" + Pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[Pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jn.name = "Invariant Violation", jn;
              }
              kt = M[Pt](pe, Pt, Ve, Ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (mn) {
              kt = mn;
            }
            kt && !(kt instanceof Error) && (lr(Ct), oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ve || "React class", Ne, Pt, typeof kt), lr(null)), kt instanceof Error && !(kt.message in kr) && (kr[kt.message] = !0, lr(Ct), oe("Failed %s type: %s", Ne, kt.message), lr(null));
          }
      }
    }
    var zn = Array.isArray;
    function tr(M) {
      return zn(M);
    }
    function Dr(M) {
      {
        var pe = typeof Symbol == "function" && Symbol.toStringTag, Ne = pe && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Ne;
      }
    }
    function ri(M) {
      try {
        return Wn(M), !1;
      } catch {
        return !0;
      }
    }
    function Wn(M) {
      return "" + M;
    }
    function Pr(M) {
      if (ri(M))
        return oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dr(M)), Wn(M);
    }
    var ba = ee.ReactCurrentOwner, ai = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wi, $e;
    function rt(M) {
      if (Mn.call(M, "ref")) {
        var pe = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (pe && pe.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Ot(M) {
      if (Mn.call(M, "key")) {
        var pe = Object.getOwnPropertyDescriptor(M, "key").get;
        if (pe && pe.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Zt(M, pe) {
      typeof M.ref == "string" && ba.current;
    }
    function vn(M, pe) {
      {
        var Ne = function() {
          wi || (wi = !0, oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pe));
        };
        Ne.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: Ne,
          configurable: !0
        });
      }
    }
    function $n(M, pe) {
      {
        var Ne = function() {
          $e || ($e = !0, oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pe));
        };
        Ne.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: Ne,
          configurable: !0
        });
      }
    }
    var xn = function(M, pe, Ne, Ve, Ct, bt, Pt) {
      var kt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: M,
        key: pe,
        ref: Ne,
        props: Pt,
        // Record the component responsible for creating this element.
        _owner: bt
      };
      return kt._store = {}, Object.defineProperty(kt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(kt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.defineProperty(kt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(kt.props), Object.freeze(kt)), kt;
    };
    function sr(M, pe, Ne, Ve, Ct) {
      {
        var bt, Pt = {}, kt = null, jn = null;
        Ne !== void 0 && (Pr(Ne), kt = "" + Ne), Ot(pe) && (Pr(pe.key), kt = "" + pe.key), rt(pe) && (jn = pe.ref, Zt(pe, Ct));
        for (bt in pe)
          Mn.call(pe, bt) && !ai.hasOwnProperty(bt) && (Pt[bt] = pe[bt]);
        if (M && M.defaultProps) {
          var mn = M.defaultProps;
          for (bt in mn)
            Pt[bt] === void 0 && (Pt[bt] = mn[bt]);
        }
        if (kt || jn) {
          var En = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          kt && vn(Pt, En), jn && $n(Pt, En);
        }
        return xn(M, kt, jn, Ct, Ve, ba.current, Pt);
      }
    }
    var hn = ee.ReactCurrentOwner, nn = ee.ReactDebugCurrentFrame;
    function rn(M) {
      if (M) {
        var pe = M._owner, Ne = Rn(M.type, M._source, pe ? pe.type : null);
        nn.setExtraStackFrame(Ne);
      } else
        nn.setExtraStackFrame(null);
    }
    var xa;
    xa = !1;
    function Lr(M) {
      return typeof M == "object" && M !== null && M.$$typeof === s;
    }
    function Ma() {
      {
        if (hn.current) {
          var M = Re(hn.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Zi(M) {
      return "";
    }
    var Cl = {};
    function wl(M) {
      {
        var pe = Ma();
        if (!pe) {
          var Ne = typeof M == "string" ? M : M.displayName || M.name;
          Ne && (pe = `

Check the top-level render call using <` + Ne + ">.");
        }
        return pe;
      }
    }
    function ko(M, pe) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var Ne = wl(pe);
        if (Cl[Ne])
          return;
        Cl[Ne] = !0;
        var Ve = "";
        M && M._owner && M._owner !== hn.current && (Ve = " It was passed a child from " + Re(M._owner.type) + "."), rn(M), oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ne, Ve), rn(null);
      }
    }
    function Do(M, pe) {
      {
        if (typeof M != "object")
          return;
        if (tr(M))
          for (var Ne = 0; Ne < M.length; Ne++) {
            var Ve = M[Ne];
            Lr(Ve) && ko(Ve, pe);
          }
        else if (Lr(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var Ct = G(M);
          if (typeof Ct == "function" && Ct !== M.entries)
            for (var bt = Ct.call(M), Pt; !(Pt = bt.next()).done; )
              Lr(Pt.value) && ko(Pt.value, pe);
        }
      }
    }
    function _l(M) {
      {
        var pe = M.type;
        if (pe == null || typeof pe == "string")
          return;
        var Ne;
        if (typeof pe == "function")
          Ne = pe.propTypes;
        else if (typeof pe == "object" && (pe.$$typeof === C || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        pe.$$typeof === O))
          Ne = pe.propTypes;
        else
          return;
        if (Ne) {
          var Ve = Re(pe);
          ur(Ne, M.props, "prop", Ve, M);
        } else if (pe.PropTypes !== void 0 && !xa) {
          xa = !0;
          var Ct = Re(pe);
          oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof pe.getDefaultProps == "function" && !pe.getDefaultProps.isReactClassApproved && oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(M) {
      {
        for (var pe = Object.keys(M.props), Ne = 0; Ne < pe.length; Ne++) {
          var Ve = pe[Ne];
          if (Ve !== "children" && Ve !== "key") {
            rn(M), oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ve), rn(null);
            break;
          }
        }
        M.ref !== null && (rn(M), oe("Invalid attribute `ref` supplied to `React.Fragment`."), rn(null));
      }
    }
    var Fr = {};
    function hr(M, pe, Ne, Ve, Ct, bt) {
      {
        var Pt = We(M);
        if (!Pt) {
          var kt = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (kt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jn = Zi();
          jn ? kt += jn : kt += Ma();
          var mn;
          M === null ? mn = "null" : tr(M) ? mn = "array" : M !== void 0 && M.$$typeof === s ? (mn = "<" + (Re(M.type) || "Unknown") + " />", kt = " Did you accidentally export a JSX literal instead of a component?") : mn = typeof M, oe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", mn, kt);
        }
        var En = sr(M, pe, Ne, Ct, bt);
        if (En == null)
          return En;
        if (Pt) {
          var mr = pe.children;
          if (mr !== void 0)
            if (Ve)
              if (tr(mr)) {
                for (var oi = 0; oi < mr.length; oi++)
                  Do(mr[oi], M);
                Object.freeze && Object.freeze(mr);
              } else
                oe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Do(mr, M);
        }
        if (Mn.call(pe, "key")) {
          var li = Re(M), wt = Object.keys(pe).filter(function(Rl) {
            return Rl !== "key";
          }), Rt = wt.length > 0 ? "{key: someKey, " + wt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fr[li + Rt]) {
            var ui = wt.length > 0 ? "{" + wt.join(": ..., ") + ": ...}" : "{}";
            oe(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rt, li, ui, li), Fr[li + Rt] = !0;
          }
        }
        return M === p ? jr(En) : _l(En), En;
      }
    }
    function _i(M, pe, Ne) {
      return hr(M, pe, Ne, !0);
    }
    function ii(M, pe, Ne) {
      return hr(M, pe, Ne, !1);
    }
    var Ri = ii, Ti = _i;
    Xv.Fragment = p, Xv.jsx = Ri, Xv.jsxs = Ti;
  }()), Xv;
}
process.env.NODE_ENV === "production" ? yx.exports = B2() : yx.exports = V2();
var ne = yx.exports, Sn = "colors", Aa = "sizes", Ze = "space", W2 = { gap: Ze, gridGap: Ze, columnGap: Ze, gridColumnGap: Ze, rowGap: Ze, gridRowGap: Ze, inset: Ze, insetBlock: Ze, insetBlockEnd: Ze, insetBlockStart: Ze, insetInline: Ze, insetInlineEnd: Ze, insetInlineStart: Ze, margin: Ze, marginTop: Ze, marginRight: Ze, marginBottom: Ze, marginLeft: Ze, marginBlock: Ze, marginBlockEnd: Ze, marginBlockStart: Ze, marginInline: Ze, marginInlineEnd: Ze, marginInlineStart: Ze, padding: Ze, paddingTop: Ze, paddingRight: Ze, paddingBottom: Ze, paddingLeft: Ze, paddingBlock: Ze, paddingBlockEnd: Ze, paddingBlockStart: Ze, paddingInline: Ze, paddingInlineEnd: Ze, paddingInlineStart: Ze, top: Ze, right: Ze, bottom: Ze, left: Ze, scrollMargin: Ze, scrollMarginTop: Ze, scrollMarginRight: Ze, scrollMarginBottom: Ze, scrollMarginLeft: Ze, scrollMarginX: Ze, scrollMarginY: Ze, scrollMarginBlock: Ze, scrollMarginBlockEnd: Ze, scrollMarginBlockStart: Ze, scrollMarginInline: Ze, scrollMarginInlineEnd: Ze, scrollMarginInlineStart: Ze, scrollPadding: Ze, scrollPaddingTop: Ze, scrollPaddingRight: Ze, scrollPaddingBottom: Ze, scrollPaddingLeft: Ze, scrollPaddingX: Ze, scrollPaddingY: Ze, scrollPaddingBlock: Ze, scrollPaddingBlockEnd: Ze, scrollPaddingBlockStart: Ze, scrollPaddingInline: Ze, scrollPaddingInlineEnd: Ze, scrollPaddingInlineStart: Ze, fontSize: "fontSizes", background: Sn, backgroundColor: Sn, backgroundImage: Sn, borderImage: Sn, border: Sn, borderBlock: Sn, borderBlockEnd: Sn, borderBlockStart: Sn, borderBottom: Sn, borderBottomColor: Sn, borderColor: Sn, borderInline: Sn, borderInlineEnd: Sn, borderInlineStart: Sn, borderLeft: Sn, borderLeftColor: Sn, borderRight: Sn, borderRightColor: Sn, borderTop: Sn, borderTopColor: Sn, caretColor: Sn, color: Sn, columnRuleColor: Sn, fill: Sn, outline: Sn, outlineColor: Sn, stroke: Sn, textDecorationColor: Sn, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: Aa, minBlockSize: Aa, maxBlockSize: Aa, inlineSize: Aa, minInlineSize: Aa, maxInlineSize: Aa, width: Aa, minWidth: Aa, maxWidth: Aa, height: Aa, minHeight: Aa, maxHeight: Aa, flexBasis: Aa, gridTemplateColumns: Aa, gridTemplateRows: Aa, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Y2 = (o, s) => typeof s == "function" ? { "()": Function.prototype.toString.call(s) } : s, Hd = () => {
  const o = /* @__PURE__ */ Object.create(null);
  return (s, c, ...p) => {
    const g = ((b) => JSON.stringify(b, Y2))(s);
    return g in o ? o[g] : o[g] = c(s, ...p);
  };
}, Hc = Symbol.for("sxs.internal"), Ax = (o, s) => Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)), N1 = (o) => {
  for (const s in o) return !0;
  return !1;
}, { hasOwnProperty: Q2 } = Object.prototype, Sx = (o) => o.includes("-") ? o : o.replace(/[A-Z]/g, (s) => "-" + s.toLowerCase()), q2 = /\s+(?![^()]*\))/, Pd = (o) => (s) => o(...typeof s == "string" ? String(s).split(q2) : [s]), M1 = { appearance: (o) => ({ WebkitAppearance: o, appearance: o }), backfaceVisibility: (o) => ({ WebkitBackfaceVisibility: o, backfaceVisibility: o }), backdropFilter: (o) => ({ WebkitBackdropFilter: o, backdropFilter: o }), backgroundClip: (o) => ({ WebkitBackgroundClip: o, backgroundClip: o }), boxDecorationBreak: (o) => ({ WebkitBoxDecorationBreak: o, boxDecorationBreak: o }), clipPath: (o) => ({ WebkitClipPath: o, clipPath: o }), content: (o) => ({ content: o.includes('"') || o.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(o) ? o : `"${o}"` }), hyphens: (o) => ({ WebkitHyphens: o, hyphens: o }), maskImage: (o) => ({ WebkitMaskImage: o, maskImage: o }), maskSize: (o) => ({ WebkitMaskSize: o, maskSize: o }), tabSize: (o) => ({ MozTabSize: o, tabSize: o }), textSizeAdjust: (o) => ({ WebkitTextSizeAdjust: o, textSizeAdjust: o }), userSelect: (o) => ({ WebkitUserSelect: o, userSelect: o }), marginBlock: Pd((o, s) => ({ marginBlockStart: o, marginBlockEnd: s || o })), marginInline: Pd((o, s) => ({ marginInlineStart: o, marginInlineEnd: s || o })), maxSize: Pd((o, s) => ({ maxBlockSize: o, maxInlineSize: s || o })), minSize: Pd((o, s) => ({ minBlockSize: o, minInlineSize: s || o })), paddingBlock: Pd((o, s) => ({ paddingBlockStart: o, paddingBlockEnd: s || o })), paddingInline: Pd((o, s) => ({ paddingInlineStart: o, paddingInlineEnd: s || o })) }, tx = /([\d.]+)([^]*)/, G2 = (o, s) => o.length ? o.reduce((c, p) => (c.push(...s.map((g) => g.includes("&") ? g.replace(/&/g, /[ +>|~]/.test(p) && /&.*&/.test(g) ? `:is(${p})` : p) : p + " " + g)), c), []) : s, X2 = (o, s) => o in K2 && typeof s == "string" ? s.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (c, p, g, b) => p + (g === "stretch" ? `-moz-available${b};${Sx(o)}:${p}-webkit-fill-available` : `-moz-fit-content${b};${Sx(o)}:${p}fit-content`) + b) : String(s), K2 = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, gu = (o) => o ? o + "-" : "", iR = (o, s, c) => o.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (p, g, b, m, w) => m == "$" == !!b ? p : (g || m == "--" ? "calc(" : "") + "var(--" + (m === "$" ? gu(s) + (w.includes("$") ? "" : gu(c)) + w.replace(/\$/g, "-") : w) + ")" + (g || m == "--" ? "*" + (g || "") + (b || "1") + ")" : "")), J2 = /\s*,\s*(?![^()]*\))/, Z2 = Object.prototype.toString, zd = (o, s, c, p, g) => {
  let b, m, w;
  const C = (R, D, O) => {
    let P, k;
    const j = (B) => {
      for (P in B) {
        const oe = P.charCodeAt(0) === 64, se = oe && Array.isArray(B[P]) ? B[P] : [B[P]];
        for (k of se) {
          const ce = /[A-Z]/.test(ee = P) ? ee : ee.replace(/-[^]/g, (he) => he[1].toUpperCase()), I = typeof k == "object" && k && k.toString === Z2 && (!p.utils[ce] || !D.length);
          if (ce in p.utils && !I) {
            const he = p.utils[ce];
            if (he !== m) {
              m = he, j(he(k)), m = null;
              continue;
            }
          } else if (ce in M1) {
            const he = M1[ce];
            if (he !== w) {
              w = he, j(he(k)), w = null;
              continue;
            }
          }
          if (oe && (G = P.slice(1) in p.media ? "@media " + p.media[P.slice(1)] : P, P = G.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (he, fe, Ye, tt, We, ot) => {
            const nt = tx.test(fe), Re = 0.0625 * (nt ? -1 : 1), [Qe, ct] = nt ? [tt, fe] : [fe, tt];
            return "(" + (Ye[0] === "=" ? "" : Ye[0] === ">" === nt ? "max-" : "min-") + Qe + ":" + (Ye[0] !== "=" && Ye.length === 1 ? ct.replace(tx, (qe, Ee, ie) => Number(Ee) + Re * (Ye === ">" ? 1 : -1) + ie) : ct) + (We ? ") and (" + (We[0] === ">" ? "min-" : "max-") + Qe + ":" + (We.length === 1 ? ot.replace(tx, (qe, Ee, ie) => Number(Ee) + Re * (We === ">" ? -1 : 1) + ie) : ot) : "") + ")";
          })), I) {
            const he = oe ? O.concat(P) : [...O], fe = oe ? [...D] : G2(D, P.split(J2));
            b !== void 0 && g(z1(...b)), b = void 0, C(k, fe, he);
          } else b === void 0 && (b = [[], D, O]), P = oe || P.charCodeAt(0) !== 36 ? P : `--${gu(p.prefix)}${P.slice(1).replace(/\$/g, "-")}`, k = I ? k : typeof k == "number" ? k && ce in eL ? String(k) + "px" : String(k) : iR(X2(ce, k ?? ""), p.prefix, p.themeMap[ce]), b[0].push(`${oe ? `${P} ` : `${Sx(P)}:`}${k}`);
        }
      }
      var G, ee;
    };
    j(R), b !== void 0 && g(z1(...b)), b = void 0;
  };
  C(o, s, c);
}, z1 = (o, s, c) => `${c.map((p) => `${p}{`).join("")}${s.length ? `${s.join(",")}{` : ""}${o.join(";")}${s.length ? "}" : ""}${Array(c.length ? c.length + 1 : 0).join("}")}`, eL = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, j1 = (o) => String.fromCharCode(o + (o > 25 ? 39 : 97)), Ic = (o) => ((s) => {
  let c, p = "";
  for (c = Math.abs(s); c > 52; c = c / 52 | 0) p = j1(c % 52) + p;
  return j1(c % 52) + p;
})(((s, c) => {
  let p = c.length;
  for (; p; ) s = 33 * s ^ c.charCodeAt(--p);
  return s;
})(5381, JSON.stringify(o)) >>> 0), Zv = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], tL = (o) => {
  if (o.href && !o.href.startsWith(location.origin)) return !1;
  try {
    return !!o.cssRules;
  } catch {
    return !1;
  }
}, nL = (o) => {
  let s;
  const c = () => {
    const { cssRules: g } = s.sheet;
    return [].map.call(g, (b, m) => {
      const { cssText: w } = b;
      let C = "";
      if (w.startsWith("--sxs")) return "";
      if (g[m - 1] && (C = g[m - 1].cssText).startsWith("--sxs")) {
        if (!b.cssRules.length) return "";
        for (const R in s.rules) if (s.rules[R].group === b) return `--sxs{--sxs:${[...s.rules[R].cache].join(" ")}}${w}`;
        return b.cssRules.length ? `${C}${w}` : "";
      }
      return w;
    }).join("");
  }, p = () => {
    if (s) {
      const { rules: w, sheet: C } = s;
      if (!C.deleteRule) {
        for (; Object(Object(C.cssRules)[0]).type === 3; ) C.cssRules.splice(0, 1);
        C.cssRules = [];
      }
      for (const R in w) delete w[R];
    }
    const g = Object(o).styleSheets || [];
    for (const w of g) if (tL(w)) {
      for (let C = 0, R = w.cssRules; R[C]; ++C) {
        const D = Object(R[C]);
        if (D.type !== 1) continue;
        const O = Object(R[C + 1]);
        if (O.type !== 4) continue;
        ++C;
        const { cssText: P } = D;
        if (!P.startsWith("--sxs")) continue;
        const k = P.slice(14, -3).trim().split(/\s+/), j = Zv[k[0]];
        j && (s || (s = { sheet: w, reset: p, rules: {}, toString: c }), s.rules[j] = { group: O, index: C, cache: new Set(k) });
      }
      if (s) break;
    }
    if (!s) {
      const w = (C, R) => ({ type: R, cssRules: [], insertRule(D, O) {
        this.cssRules.splice(O, 0, w(D, { import: 3, undefined: 1 }[(D.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return C === "@media{}" ? `@media{${[].map.call(this.cssRules, (D) => D.cssText).join("")}}` : C;
      } });
      s = { sheet: o ? (o.head || o).appendChild(document.createElement("style")).sheet : w("", "text/css"), rules: {}, reset: p, toString: c };
    }
    const { sheet: b, rules: m } = s;
    for (let w = Zv.length - 1; w >= 0; --w) {
      const C = Zv[w];
      if (!m[C]) {
        const R = Zv[w + 1], D = m[R] ? m[R].index : b.cssRules.length;
        b.insertRule("@media{}", D), b.insertRule(`--sxs{--sxs:${w}}`, D), m[C] = { group: b.cssRules[D + 1], index: D, cache: /* @__PURE__ */ new Set([w]) };
      }
      rL(m[C]);
    }
  };
  return p(), s;
}, rL = (o) => {
  const s = o.group;
  let c = s.cssRules.length;
  o.apply = (p) => {
    try {
      s.insertRule(p, c), ++c;
    } catch {
    }
  };
}, Kv = Symbol(), aL = Hd(), F1 = (o, s) => aL(o, () => (...c) => {
  let p = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const g of c) if (g != null) if (g[Hc]) {
    p.type == null && (p.type = g[Hc].type);
    for (const b of g[Hc].composers) p.composers.add(b);
  } else g.constructor !== Object || g.$$typeof ? p.type == null && (p.type = g) : p.composers.add(iL(g, o));
  return p.type == null && (p.type = "span"), p.composers.size || p.composers.add(["PJLV", {}, [], [], {}, []]), oL(o, p, s);
}), iL = ({ variants: o, compoundVariants: s, defaultVariants: c, ...p }, g) => {
  const b = `${gu(g.prefix)}c-${Ic(p)}`, m = [], w = [], C = /* @__PURE__ */ Object.create(null), R = [];
  for (const P in c) C[P] = String(c[P]);
  if (typeof o == "object" && o) for (const P in o) {
    D = C, O = P, Q2.call(D, O) || (C[P] = "undefined");
    const k = o[P];
    for (const j in k) {
      const B = { [P]: String(j) };
      String(j) === "undefined" && R.push(P);
      const G = k[j], ee = [B, G, !N1(G)];
      m.push(ee);
    }
  }
  var D, O;
  if (typeof s == "object" && s) for (const P of s) {
    let { css: k, ...j } = P;
    k = typeof k == "object" && k || {};
    for (const G in j) j[G] = String(j[G]);
    const B = [j, k, !N1(k)];
    w.push(B);
  }
  return [b, p, m, w, C, R];
}, oL = (o, s, c) => {
  const [p, g, b, m] = lL(s.composers), w = typeof s.type == "function" || s.type.$$typeof ? ((O) => {
    function P() {
      for (let k = 0; k < P[Kv].length; k++) {
        const [j, B] = P[Kv][k];
        O.rules[j].apply(B);
      }
      return P[Kv] = [], null;
    }
    return P[Kv] = [], P.rules = {}, Zv.forEach((k) => P.rules[k] = { apply: (j) => P[Kv].push([k, j]) }), P;
  })(c) : null, C = (w || c).rules, R = `.${p}${g.length > 1 ? `:where(.${g.slice(1).join(".")})` : ""}`, D = (O) => {
    O = typeof O == "object" && O || uL;
    const { css: P, ...k } = O, j = {};
    for (const ee in b) if (delete k[ee], ee in O) {
      let oe = O[ee];
      typeof oe == "object" && oe ? j[ee] = { "@initial": b[ee], ...oe } : (oe = String(oe), j[ee] = oe !== "undefined" || m.has(ee) ? oe : b[ee]);
    } else j[ee] = b[ee];
    const B = /* @__PURE__ */ new Set([...g]);
    for (const [ee, oe, se, ce] of s.composers) {
      c.rules.styled.cache.has(ee) || (c.rules.styled.cache.add(ee), zd(oe, [`.${ee}`], [], o, (fe) => {
        C.styled.apply(fe);
      }));
      const I = U1(se, j, o.media), he = U1(ce, j, o.media, !0);
      for (const fe of I) if (fe !== void 0) for (const [Ye, tt, We] of fe) {
        const ot = `${ee}-${Ic(tt)}-${Ye}`;
        B.add(ot);
        const nt = (We ? c.rules.resonevar : c.rules.onevar).cache, Re = We ? C.resonevar : C.onevar;
        nt.has(ot) || (nt.add(ot), zd(tt, [`.${ot}`], [], o, (Qe) => {
          Re.apply(Qe);
        }));
      }
      for (const fe of he) if (fe !== void 0) for (const [Ye, tt] of fe) {
        const We = `${ee}-${Ic(tt)}-${Ye}`;
        B.add(We), c.rules.allvar.cache.has(We) || (c.rules.allvar.cache.add(We), zd(tt, [`.${We}`], [], o, (ot) => {
          C.allvar.apply(ot);
        }));
      }
    }
    if (typeof P == "object" && P) {
      const ee = `${p}-i${Ic(P)}-css`;
      B.add(ee), c.rules.inline.cache.has(ee) || (c.rules.inline.cache.add(ee), zd(P, [`.${ee}`], [], o, (oe) => {
        C.inline.apply(oe);
      }));
    }
    for (const ee of String(O.className || "").trim().split(/\s+/)) ee && B.add(ee);
    const G = k.className = [...B].join(" ");
    return { type: s.type, className: G, selector: R, props: k, toString: () => G, deferredInjector: w };
  };
  return Ax(D, { className: p, selector: R, [Hc]: s, toString: () => (c.rules.styled.cache.has(p) || D(), p) });
}, lL = (o) => {
  let s = "";
  const c = [], p = {}, g = [];
  for (const [b, , , , m, w] of o) {
    s === "" && (s = b), c.push(b), g.push(...w);
    for (const C in m) {
      const R = m[C];
      (p[C] === void 0 || R !== "undefined" || w.includes(R)) && (p[C] = R);
    }
  }
  return [s, c, p, new Set(g)];
}, U1 = (o, s, c, p) => {
  const g = [];
  e: for (let [b, m, w] of o) {
    if (w) continue;
    let C, R = 0, D = !1;
    for (C in b) {
      const O = b[C];
      let P = s[C];
      if (P !== O) {
        if (typeof P != "object" || !P) continue e;
        {
          let k, j, B = 0;
          for (const G in P) {
            if (O === String(P[G])) {
              if (G !== "@initial") {
                const ee = G.slice(1);
                (j = j || []).push(ee in c ? c[ee] : G.replace(/^@media ?/, "")), D = !0;
              }
              R += B, k = !0;
            }
            ++B;
          }
          if (j && j.length && (m = { ["@media " + j.join(", ")]: m }), !k) continue e;
        }
      }
    }
    (g[R] = g[R] || []).push([p ? "cv" : `${C}-${b[C]}`, m, D]);
  }
  return g;
}, uL = {}, sL = Hd(), cL = (o, s) => sL(o, () => (...c) => {
  const p = () => {
    for (let g of c) {
      g = typeof g == "object" && g || {};
      let b = Ic(g);
      if (!s.rules.global.cache.has(b)) {
        if (s.rules.global.cache.add(b), "@import" in g) {
          let m = [].indexOf.call(s.sheet.cssRules, s.rules.themed.group) - 1;
          for (let w of [].concat(g["@import"])) w = w.includes('"') || w.includes("'") ? w : `"${w}"`, s.sheet.insertRule(`@import ${w};`, m++);
          delete g["@import"];
        }
        zd(g, [], [], o, (m) => {
          s.rules.global.apply(m);
        });
      }
    }
    return "";
  };
  return Ax(p, { toString: p });
}), fL = Hd(), dL = (o, s) => fL(o, () => (c) => {
  const p = `${gu(o.prefix)}k-${Ic(c)}`, g = () => {
    if (!s.rules.global.cache.has(p)) {
      s.rules.global.cache.add(p);
      const b = [];
      zd(c, [], [], o, (w) => b.push(w));
      const m = `@keyframes ${p}{${b.join("")}}`;
      s.rules.global.apply(m);
    }
    return p;
  };
  return Ax(g, { get name() {
    return g();
  }, toString: g });
}), pL = class {
  constructor(o, s, c, p) {
    this.token = o == null ? "" : String(o), this.value = s == null ? "" : String(s), this.scale = c == null ? "" : String(c), this.prefix = p == null ? "" : String(p);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + gu(this.prefix) + gu(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, vL = Hd(), hL = (o, s) => vL(o, () => (c, p) => {
  p = typeof c == "object" && c || Object(p);
  const g = `.${c = (c = typeof c == "string" ? c : "") || `${gu(o.prefix)}t-${Ic(p)}`}`, b = {}, m = [];
  for (const C in p) {
    b[C] = {};
    for (const R in p[C]) {
      const D = `--${gu(o.prefix)}${C}-${R}`, O = iR(String(p[C][R]), o.prefix, C);
      b[C][R] = new pL(R, O, C, o.prefix), m.push(`${D}:${O}`);
    }
  }
  const w = () => {
    if (m.length && !s.rules.themed.cache.has(c)) {
      s.rules.themed.cache.add(c);
      const C = `${p === o.theme ? ":root," : ""}.${c}{${m.join(";")}}`;
      s.rules.themed.apply(C);
    }
    return c;
  };
  return { ...b, get className() {
    return w();
  }, selector: g, toString: w };
}), mL = Hd(), yL = Hd(), gL = (o) => {
  const s = ((c) => {
    let p = !1;
    const g = mL(c, (b) => {
      p = !0;
      const m = "prefix" in (b = typeof b == "object" && b || {}) ? String(b.prefix) : "", w = typeof b.media == "object" && b.media || {}, C = typeof b.root == "object" ? b.root || null : globalThis.document || null, R = typeof b.theme == "object" && b.theme || {}, D = { prefix: m, media: w, theme: R, themeMap: typeof b.themeMap == "object" && b.themeMap || { ...W2 }, utils: typeof b.utils == "object" && b.utils || {} }, O = nL(C), P = { css: F1(D, O), globalCss: cL(D, O), keyframes: dL(D, O), createTheme: hL(D, O), reset() {
        O.reset(), P.theme.toString();
      }, theme: {}, sheet: O, config: D, prefix: m, getCssText: O.toString, toString: O.toString };
      return String(P.theme = P.createTheme(R)), P;
    });
    return p || g.reset(), g;
  })(o);
  return s.styled = (({ config: c, sheet: p }) => yL(c, () => {
    const g = F1(c, p);
    return (...b) => {
      const m = g(...b), w = m[Hc].type, C = Yt.forwardRef((R, D) => {
        const O = R && R.as || w, { props: P, deferredInjector: k } = m(R);
        return delete P.as, P.ref = D, k ? Yt.createElement(Yt.Fragment, null, Yt.createElement(O, P), Yt.createElement(k, null)) : Yt.createElement(O, P);
      });
      return C.className = m.className, C.displayName = `Styled.${w.displayName || w.name || w}`, C.selector = m.selector, C.toString = () => m.selector, C[Hc] = m[Hc], C;
    };
  }))(s), s;
}, SL = Object.defineProperty, bL = Object.defineProperties, xL = Object.getOwnPropertyDescriptors, H1 = Object.getOwnPropertySymbols, EL = Object.prototype.hasOwnProperty, CL = Object.prototype.propertyIsEnumerable, I1 = (o, s, c) => s in o ? SL(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, wL = (o, s) => {
  for (var c in s || (s = {}))
    EL.call(s, c) && I1(o, c, s[c]);
  if (H1)
    for (var c of H1(s))
      CL.call(s, c) && I1(o, c, s[c]);
  return o;
}, _L = (o, s) => bL(o, xL(s));
const RL = {
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,\n  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em,\n  img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u,\n  i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table,\n  caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,\n  embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output,\n  ruby, section, summary, time, mark, audio, video": {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    verticalAlign: "baseline"
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section": {
    display: "block"
  },
  "*[hidden]": {
    display: "none"
  },
  body: {
    lineHeight: "1"
  },
  "ol, ul": {
    listStyle: "none"
  },
  "blockquote, q": {
    quotes: "none"
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: ""
    // eslint-disable-next-line no-dupe-keys
    // content: 'none',
  },
  table: {
    borderSpacing: "0"
  }
}, bx = {
  colors: {
    primary: "#2E666D",
    secondary: "#363A43",
    accent50: "#F3F3FF",
    accent100: "#EAE9FE",
    accent200: "#D7D6FE",
    accent300: "#B9B5FD",
    accent400: "#978CF9",
    accent500: "#7158F5",
    accent600: "#623BEC",
    accent700: "#5329D8",
    accent800: "#4622B5",
    accent900: "#3B1E94",
    primary50: "#E6F5F6",
    primary100: "#B8E1E5",
    primary200: "#8ACCD2",
    primary300: "#5CB5BD",
    primary400: "#2E9CA6",
    primary500: "#00828D",
    primary600: "#006B74",
    primary700: "#00555C",
    primary800: "#003E43",
    primary900: "#00272A",
    warning50: "#FFF6EF",
    warning100: "#FEEAC7",
    warning200: "#FDD28A",
    warning300: "#FCBD4F",
    warning400: "#FBAB24",
    warning500: "#F59E0B",
    warning600: "#DB8D06",
    warning700: "#B47409",
    warning800: "#92610E",
    warning900: "#78510F",
    highlight50: "#FFFCDA",
    highlight100: "#FFF7AD",
    highlight200: "#FFF27D",
    highlight300: "#FFED4B",
    highlight400: "#FFE81A",
    highlight500: "#E6CF00",
    highlight600: "#B3A100",
    highlight700: "#807300",
    highlight800: "#786B03",
    highlight900: "#6A5F00",
    positive50: "#F4FAF1",
    positive100: "#E8F4E3",
    positive200: "#D4E8CA",
    positive300: "#A8D291",
    positive400: "#67B034",
    positive500: "#5EA130",
    positive600: "#55932A",
    positive700: "#4C8425",
    positive800: "#437720",
    positive900: "#3C691C",
    secondary50: "#F4F6F7",
    secondary100: "#E2E6EB",
    secondary200: "#C9CFD8",
    secondary300: "#A3AEBD",
    secondary400: "#76859A",
    secondary500: "#64748B",
    secondary600: "#4E596C",
    secondary700: "#444B5A",
    secondary800: "#3D424D",
    secondary900: "#363A43",
    negative50: "#FFF6F3",
    negative100: "#FDEDE8",
    negative200: "#FFDAD0",
    negative300: "#FFB4A1",
    negative400: "#FA7659",
    negative500: "#F65633",
    negative600: "#E75030",
    negative700: "#D14729",
    negative800: "#BC4024",
    negative900: "#A9371E",
    neutral50: "#F8F8F8",
    neutral100: "#F1F1F1",
    neutral200: "#E2E2E2",
    neutral300: "#C6C6C6",
    neutral400: "#9E9E9E",
    neutral500: "#919191",
    neutral600: "#848484",
    neutral700: "#757575",
    neutral800: "#575757",
    neutral900: "#111111",
    black50: "#0000000A",
    black100: "#00000014",
    black200: "#0000001A",
    black300: "#00000026",
    black400: "#00000033",
    black500: "#0000004D",
    black600: "#00000080",
    black700: "#000000B2",
    black800: "#000000CC",
    black900: "#000000",
    white50: "#FFFFFF0D",
    white100: "#FFFFFF14",
    white200: "#FFFFFF1A",
    white300: "#FFFFFF26",
    white400: "#FFFFFF33",
    white500: "#FFFFFF4D",
    white600: "#FFFFFF80",
    white700: "#FFFFFFB2",
    white800: "#FFFFFFCC",
    white900: "#FFFFFF"
  },
  space: {
    1: "0.125rem",
    2: "0.25rem",
    3: "0.375rem",
    4: "0.5rem",
    5: "0.625rem",
    6: "0.75rem",
    7: "0.875rem",
    8: "1rem",
    9: "1.125rem",
    10: "1.25rem",
    11: "1.375rem",
    12: "1.5rem",
    13: "1.625rem",
    14: "1.75rem",
    15: "1.875rem",
    16: "2rem",
    17: "2.125rem",
    18: "2.25rem",
    19: "2.375rem",
    20: "2.5rem",
    21: "2.625rem",
    22: "2.75rem",
    23: "2.875rem",
    24: "3rem",
    25: "3.125rem",
    26: "3.25rem",
    27: "3.375rem",
    28: "3.5rem",
    29: "3.625rem",
    30: "3.75rem",
    31: "3.875rem",
    32: "4rem",
    33: "4.125rem",
    34: "4.25rem",
    35: "4.375rem",
    36: "4.5rem",
    37: "4.625rem",
    38: "4.75rem",
    39: "4.875rem",
    40: "5rem",
    41: "5.125rem",
    42: "5.25rem",
    43: "5.375rem",
    44: "5.5rem",
    45: "5.625rem",
    46: "5.75rem",
    47: "5.875rem",
    48: "6rem",
    49: "6.125rem",
    50: "6.25rem"
  },
  fontSizes: {
    xxs: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.1875rem",
    xl: "1.4375rem",
    "2xl": "1.75rem",
    "3xl": "2.0625rem",
    "4xl": "2.5rem",
    "5xl": "3rem"
  },
  fonts: {
    body: "sans-serif",
    heading: "sans-serif"
  },
  fontWeights: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
    9: "900"
  },
  lineHeights: {
    xxs: "0.75rem",
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
    "4xl": "4rem"
  },
  letterSpacings: {},
  sizes: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    11: "44px",
    12: "48px",
    13: "52px",
    14: "56px",
    15: "60px",
    16: "64px",
    17: "68px",
    18: "72px",
    19: "76px",
    20: "80px",
    21: "84px",
    22: "88px",
    23: "92px",
    24: "96px",
    25: "100px",
    26: "104px",
    27: "108px",
    28: "112px",
    29: "116px",
    30: "120px",
    31: "124px",
    32: "128px",
    33: "132px",
    34: "136px"
  },
  borderWidths: {
    xs: "1px",
    sm: "2px",
    md: "3px",
    lg: "4px",
    xl: "5px"
  },
  borderStyles: {},
  radii: {
    none: "0px",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.25rem",
    "4xl": "1.5rem",
    round: "50%",
    pill: "9999px"
  },
  shadows: {
    sm: "0px 5px 15px rgba(0, 0, 0, 0.04)"
  },
  zIndices: {},
  transitions: {
    1: "0.1s",
    2: "0.2s",
    3: "0.3s"
  }
}, {
  styled: _n,
  theme: TL,
  createTheme: OL,
  globalCss: $L,
  keyframes: Vc,
  config: kL,
  reset: K3,
  css: J3,
  getCssText: Z3
} = gL({
  prefix: "twigs",
  theme: bx,
  utils: {
    backgroundColorOpacity: ([o, s]) => ({
      backgroundColor: nx(o, s)
    }),
    colorOpacity: ([o, s]) => ({
      color: nx(o, s)
    }),
    borderColorOpacity: ([o, s]) => ({
      borderColor: nx(o, s)
    })
  },
  media: {
    "screen-xxs": "(min-width: 320px)",
    "screen-xs": "(min-width: 480px)",
    "screen-sm": "(min-width: 640px)",
    "screen-md": "(min-width: 768px)",
    "screen-lg": "(min-width: 1024px)",
    "screen-xl": "(min-width: 1280px)",
    "screen-2xl": "(min-width: 1536px)"
  }
}), DL = $L(_L(wL({}, RL), {
  "*": {
    margin: 0,
    padding: 0,
    "-webkit-font-smoothing": "antialiased"
  },
  "html, body, textarea, input, button, select, p, a": {
    fontFamily: "$body"
  },
  "*, :before, :after": { boxSizing: "border-box" }
}));
function nx(o, s) {
  const c = TL.colors[o.replace("$", "")];
  if (!c)
    return o;
  const p = parseInt(c.value.substring(1, 3), 16), g = parseInt(c.value.substring(3, 5), 16), b = parseInt(c.value.substring(5, 7), 16);
  return `#${((1 << 24) + (p << 16) + (g << 8) + b).toString(16).slice(1)}${Math.round(s * 255).toString(16).padStart(2, "0")}`;
}
var PL = Object.defineProperty, LL = Object.defineProperties, AL = Object.getOwnPropertyDescriptors, ag = Object.getOwnPropertySymbols, oR = Object.prototype.hasOwnProperty, lR = Object.prototype.propertyIsEnumerable, B1 = (o, s, c) => s in o ? PL(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, NL = (o, s) => {
  for (var c in s || (s = {}))
    oR.call(s, c) && B1(o, c, s[c]);
  if (ag)
    for (var c of ag(s))
      lR.call(s, c) && B1(o, c, s[c]);
  return o;
}, ML = (o, s) => LL(o, AL(s)), zL = (o, s) => {
  var c = {};
  for (var p in o)
    oR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && ag)
    for (var p of ag(o))
      s.indexOf(p) < 0 && lR.call(o, p) && (c[p] = o[p]);
  return c;
};
const jL = _n("div", {}), na = Yt.forwardRef(
  (o, s) => {
    var c = o, { children: p } = c, g = zL(c, ["children"]);
    return /* @__PURE__ */ ne.jsx(jL, ML(NL({ "data-testid": "box", ref: s }, g), { children: p }));
  }
);
function uR(o) {
  var s, c, p = "";
  if (typeof o == "string" || typeof o == "number") p += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var g = o.length;
    for (s = 0; s < g; s++) o[s] && (c = uR(o[s])) && (p && (p += " "), p += c);
  } else for (c in o) o[c] && (p && (p += " "), p += c);
  return p;
}
function Nx() {
  for (var o, s, c = 0, p = "", g = arguments.length; c < g; c++) (o = arguments[c]) && (s = uR(o)) && (p && (p += " "), p += s);
  return p;
}
const Wt = (o) => `${kL.prefix}-${o}`;
var FL = Object.defineProperty, UL = Object.defineProperties, HL = Object.getOwnPropertyDescriptors, ig = Object.getOwnPropertySymbols, sR = Object.prototype.hasOwnProperty, cR = Object.prototype.propertyIsEnumerable, V1 = (o, s, c) => s in o ? FL(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, IL = (o, s) => {
  for (var c in s || (s = {}))
    sR.call(s, c) && V1(o, c, s[c]);
  if (ig)
    for (var c of ig(s))
      cR.call(s, c) && V1(o, c, s[c]);
  return o;
}, BL = (o, s) => UL(o, HL(s)), VL = (o, s) => {
  var c = {};
  for (var p in o)
    sR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && ig)
    for (var p of ig(o))
      s.indexOf(p) < 0 && cR.call(o, p) && (c[p] = o[p]);
  return c;
};
const WL = Vc({
  "0%": {
    left: "-10px"
  },
  "100%": {
    left: "calc(100% + 10px)"
  }
}), YL = _n(na, {
  width: "$6",
  backgroundColor: "$white600",
  borderRadius: "100px",
  position: "relative",
  overflow: "hidden",
  "& div": {
    width: "10px",
    height: "100%",
    backgroundColor: "$white900",
    borderRadius: "100px",
    position: "absolute",
    animation: `${WL} 1.5s infinite cubic-bezier(0.51, 0, 0, 1)`,
    animationDelay: "0.15s"
  },
  variants: {
    size: {
      sm: {
        height: "4px"
      },
      md: {
        height: "5px"
      },
      lg: {
        height: "6px"
      },
      xl: {
        height: "8px"
      }
    },
    color: {
      primary: {
        backgroundColorOpacity: ["$primary800", 0.25],
        [`.${Wt("line-loader__dot")}`]: {
          backgroundColor: "$primary800"
        }
      },
      secondary: {
        backgroundColorOpacity: ["$secondary700", 0.4],
        [`.${Wt("line-loader__dot")}`]: {
          backgroundColor: "$secondary700"
        }
      },
      bright: {
        backgroundColorOpacity: ["$white900", 0.5],
        [`.${Wt("line-loader__dot")}`]: {
          backgroundColor: "$white900"
        }
      },
      negative: {
        backgroundColorOpacity: ["$negative500", 0.4],
        [`.${Wt("line-loader__dot")}`]: {
          backgroundColor: "$negative700"
        }
      }
    }
  },
  defaultVariants: {
    size: "sm",
    color: "primary"
  }
}), QL = (o) => {
  var s = o, {
    css: c,
    containerRef: p
  } = s, g = VL(s, [
    "css",
    "containerRef"
  ]);
  return /* @__PURE__ */ ne.jsx(
    YL,
    BL(IL({
      "data-testid": "line-loader"
    }, g), {
      ref: p,
      css: c,
      children: /* @__PURE__ */ ne.jsx(na, { className: `${Wt("line-loader__dot")}` })
    })
  );
};
var qL = Object.defineProperty, GL = Object.defineProperties, XL = Object.getOwnPropertyDescriptors, og = Object.getOwnPropertySymbols, fR = Object.prototype.hasOwnProperty, dR = Object.prototype.propertyIsEnumerable, W1 = (o, s, c) => s in o ? qL(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, KL = (o, s) => {
  for (var c in s || (s = {}))
    fR.call(s, c) && W1(o, c, s[c]);
  if (og)
    for (var c of og(s))
      dR.call(s, c) && W1(o, c, s[c]);
  return o;
}, JL = (o, s) => GL(o, XL(s)), ZL = (o, s) => {
  var c = {};
  for (var p in o)
    fR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && og)
    for (var p of og(o))
      s.indexOf(p) < 0 && dR.call(o, p) && (c[p] = o[p]);
  return c;
};
const eA = Vc({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), tA = _n(na, {
  borderRadius: "100px",
  position: "relative",
  overflow: "hidden",
  [`.${Wt("circle-loader__ring")}`]: {
    stroke: "rgba(255, 255, 255, 0.15)",
    fill: "none"
  },
  [`.${Wt("circle-loader__dot")}`]: {
    stroke: "#fff",
    fill: "none",
    transformOrigin: "50% 50%",
    animation: `${eA} 0.8s infinite linear`
  },
  svg: {
    width: "100%",
    height: "100%",
    display: "block"
  },
  variants: {
    size: {
      xs: {
        height: "$2",
        width: "$2"
      },
      sm: {
        height: "10px",
        width: "10px"
      },
      md: {
        height: "$3",
        width: "$3"
      },
      lg: {
        height: "$4",
        width: "$4"
      },
      xl: {
        height: "$6",
        width: "$6"
      },
      "2xl": {
        height: "$8",
        width: "$8"
      },
      "3xl": {
        height: "$10",
        width: "$10"
      }
    },
    color: {
      primary: {
        [`.${Wt("circle-loader__ring")}`]: {
          stroke: "$primary800",
          strokeOpacity: 0.25
        },
        [`.${Wt("circle-loader__dot")}`]: {
          stroke: "$primary800"
        }
      },
      secondary: {
        [`.${Wt("circle-loader__ring")}`]: {
          stroke: "$secondary700",
          strokeOpacity: 0.4
        },
        [`.${Wt("circle-loader__dot")}`]: {
          stroke: "$secondary700"
        }
      },
      bright: {
        [`.${Wt("circle-loader__ring")}`]: {
          stroke: "$white900",
          strokeOpacity: 0.5
        },
        [`.${Wt("circle-loader__dot")}`]: {
          stroke: "$white900"
        }
      },
      negative: {
        [`.${Wt("circle-loader__ring")}`]: {
          stroke: "$negative500",
          strokeOpacity: 0.4
        },
        [`.${Wt("circle-loader__dot")}`]: {
          stroke: "$negative700"
        }
      },
      accent: {
        [`.${Wt("circle-loader__ring")}`]: {
          stroke: "$accent500",
          strokeOpacity: 0.2
        },
        [`.${Wt("circle-loader__dot")}`]: {
          stroke: "$accent500"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary"
  }
}), nA = (o) => {
  var s = o, {
    css: c,
    containerRef: p
  } = s, g = ZL(s, [
    "css",
    "containerRef"
  ]);
  const b = 2 * Math.PI * 6;
  return /* @__PURE__ */ ne.jsx(
    tA,
    JL(KL({
      "data-testid": "circle-loader"
    }, g), {
      css: c,
      ref: p,
      children: /* @__PURE__ */ ne.jsxs(
        "svg",
        {
          width: "100%",
          height: "100%",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ ne.jsx(
              "circle",
              {
                cx: "6",
                cy: "6",
                r: "5",
                strokeWidth: "2",
                className: `${Wt("circle-loader__ring")}`
              }
            ),
            /* @__PURE__ */ ne.jsx(
              "circle",
              {
                cx: "6",
                cy: "6",
                r: "5",
                strokeWidth: "2",
                className: `${Wt("circle-loader__dot")}`,
                strokeDasharray: `${b / 4} ${b}`
              }
            )
          ]
        }
      )
    })
  );
}, rA = {
  "2xl": {
    size: "lg"
  },
  xl: {
    size: "md",
    width: "$5"
  },
  lg: {
    size: "sm",
    width: "$5"
  },
  md: {
    size: "sm",
    width: "$4"
  },
  sm: {
    size: "sm",
    width: "$4"
  },
  xs: {
    size: "sm",
    width: "$3"
  },
  xxs: {
    size: "sm",
    width: "$3"
  }
}, aA = {
  "2xl": {
    size: "lg"
  },
  xl: {
    size: "lg"
  },
  lg: {
    size: "lg"
  },
  md: {
    size: "md"
  },
  sm: {
    size: "sm"
  },
  xs: {
    size: "xs"
  },
  xxs: {
    size: "xs"
  }
}, iA = ({
  buttonSize: o,
  loaderType: s
}) => s === "circle" ? aA[typeof o == "string" ? o : "lg"] : rA[typeof o == "string" ? o : "lg"], rx = {
  default: "secondary",
  bright: "secondary",
  primary: "primary",
  "primary-solid": "bright",
  secondary: "bright",
  "secondary-outline": "secondary",
  "secondary-ghost": "secondary",
  light: "bright",
  error: "negative"
}, oA = ({
  color: o,
  variant: s
}) => {
  const c = o, p = s;
  return rx[`${c}-${p}`] ? rx[`${c}-${p}`] : rx[c];
}, st = {
  button: Wt("button"),
  iconContainer: Wt("button__icon-container"),
  iconBox: Wt("button__icon-box"),
  loader: Wt("button__loader"),
  content: Wt("button__content"),
  loading: Wt("button--loading"),
  disabled: Wt("button--disabled"),
  sideElement: Wt("button__side-element"),
  sideElementLoaderHidden: Wt("button__side-element--loader-hidden"),
  sideElementIconHidden: Wt("button__side-element--icon-hidden")
};
function lg() {
  return lg = Object.assign ? Object.assign.bind() : function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s];
      for (var p in c) ({}).hasOwnProperty.call(c, p) && (o[p] = c[p]);
    }
    return o;
  }, lg.apply(null, arguments);
}
function pR(o, s) {
  if (o == null) return {};
  var c = {};
  for (var p in o) if ({}.hasOwnProperty.call(o, p)) {
    if (s.indexOf(p) !== -1) continue;
    c[p] = o[p];
  }
  return c;
}
function xx(o, s) {
  return xx = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, p) {
    return c.__proto__ = p, c;
  }, xx(o, s);
}
function vR(o, s) {
  o.prototype = Object.create(s.prototype), o.prototype.constructor = o, xx(o, s);
}
function lA(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Ex = { exports: {} }, Cx = { exports: {} }, fn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y1;
function uA() {
  if (Y1) return fn;
  Y1 = 1;
  var o = typeof Symbol == "function" && Symbol.for, s = o ? Symbol.for("react.element") : 60103, c = o ? Symbol.for("react.portal") : 60106, p = o ? Symbol.for("react.fragment") : 60107, g = o ? Symbol.for("react.strict_mode") : 60108, b = o ? Symbol.for("react.profiler") : 60114, m = o ? Symbol.for("react.provider") : 60109, w = o ? Symbol.for("react.context") : 60110, C = o ? Symbol.for("react.async_mode") : 60111, R = o ? Symbol.for("react.concurrent_mode") : 60111, D = o ? Symbol.for("react.forward_ref") : 60112, O = o ? Symbol.for("react.suspense") : 60113, P = o ? Symbol.for("react.suspense_list") : 60120, k = o ? Symbol.for("react.memo") : 60115, j = o ? Symbol.for("react.lazy") : 60116, B = o ? Symbol.for("react.block") : 60121, G = o ? Symbol.for("react.fundamental") : 60117, ee = o ? Symbol.for("react.responder") : 60118, oe = o ? Symbol.for("react.scope") : 60119;
  function se(I) {
    if (typeof I == "object" && I !== null) {
      var he = I.$$typeof;
      switch (he) {
        case s:
          switch (I = I.type, I) {
            case C:
            case R:
            case p:
            case b:
            case g:
            case O:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case w:
                case D:
                case j:
                case k:
                case m:
                  return I;
                default:
                  return he;
              }
          }
        case c:
          return he;
      }
    }
  }
  function ce(I) {
    return se(I) === R;
  }
  return fn.AsyncMode = C, fn.ConcurrentMode = R, fn.ContextConsumer = w, fn.ContextProvider = m, fn.Element = s, fn.ForwardRef = D, fn.Fragment = p, fn.Lazy = j, fn.Memo = k, fn.Portal = c, fn.Profiler = b, fn.StrictMode = g, fn.Suspense = O, fn.isAsyncMode = function(I) {
    return ce(I) || se(I) === C;
  }, fn.isConcurrentMode = ce, fn.isContextConsumer = function(I) {
    return se(I) === w;
  }, fn.isContextProvider = function(I) {
    return se(I) === m;
  }, fn.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === s;
  }, fn.isForwardRef = function(I) {
    return se(I) === D;
  }, fn.isFragment = function(I) {
    return se(I) === p;
  }, fn.isLazy = function(I) {
    return se(I) === j;
  }, fn.isMemo = function(I) {
    return se(I) === k;
  }, fn.isPortal = function(I) {
    return se(I) === c;
  }, fn.isProfiler = function(I) {
    return se(I) === b;
  }, fn.isStrictMode = function(I) {
    return se(I) === g;
  }, fn.isSuspense = function(I) {
    return se(I) === O;
  }, fn.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === p || I === R || I === b || I === g || I === O || I === P || typeof I == "object" && I !== null && (I.$$typeof === j || I.$$typeof === k || I.$$typeof === m || I.$$typeof === w || I.$$typeof === D || I.$$typeof === G || I.$$typeof === ee || I.$$typeof === oe || I.$$typeof === B);
  }, fn.typeOf = se, fn;
}
var dn = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q1;
function sA() {
  return Q1 || (Q1 = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, s = o ? Symbol.for("react.element") : 60103, c = o ? Symbol.for("react.portal") : 60106, p = o ? Symbol.for("react.fragment") : 60107, g = o ? Symbol.for("react.strict_mode") : 60108, b = o ? Symbol.for("react.profiler") : 60114, m = o ? Symbol.for("react.provider") : 60109, w = o ? Symbol.for("react.context") : 60110, C = o ? Symbol.for("react.async_mode") : 60111, R = o ? Symbol.for("react.concurrent_mode") : 60111, D = o ? Symbol.for("react.forward_ref") : 60112, O = o ? Symbol.for("react.suspense") : 60113, P = o ? Symbol.for("react.suspense_list") : 60120, k = o ? Symbol.for("react.memo") : 60115, j = o ? Symbol.for("react.lazy") : 60116, B = o ? Symbol.for("react.block") : 60121, G = o ? Symbol.for("react.fundamental") : 60117, ee = o ? Symbol.for("react.responder") : 60118, oe = o ? Symbol.for("react.scope") : 60119;
    function se(_e) {
      return typeof _e == "string" || typeof _e == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _e === p || _e === R || _e === b || _e === g || _e === O || _e === P || typeof _e == "object" && _e !== null && (_e.$$typeof === j || _e.$$typeof === k || _e.$$typeof === m || _e.$$typeof === w || _e.$$typeof === D || _e.$$typeof === G || _e.$$typeof === ee || _e.$$typeof === oe || _e.$$typeof === B);
    }
    function ce(_e) {
      if (typeof _e == "object" && _e !== null) {
        var Nt = _e.$$typeof;
        switch (Nt) {
          case s:
            var bn = _e.type;
            switch (bn) {
              case C:
              case R:
              case p:
              case b:
              case g:
              case O:
                return bn;
              default:
                var Rn = bn && bn.$$typeof;
                switch (Rn) {
                  case w:
                  case D:
                  case j:
                  case k:
                  case m:
                    return Rn;
                  default:
                    return Nt;
                }
            }
          case c:
            return Nt;
        }
      }
    }
    var I = C, he = R, fe = w, Ye = m, tt = s, We = D, ot = p, nt = j, Re = k, Qe = c, ct = b, qe = g, Ee = O, ie = !1;
    function ke(_e) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), V(_e) || ce(_e) === C;
    }
    function V(_e) {
      return ce(_e) === R;
    }
    function L(_e) {
      return ce(_e) === w;
    }
    function X(_e) {
      return ce(_e) === m;
    }
    function we(_e) {
      return typeof _e == "object" && _e !== null && _e.$$typeof === s;
    }
    function xe(_e) {
      return ce(_e) === D;
    }
    function Ae(_e) {
      return ce(_e) === p;
    }
    function Oe(_e) {
      return ce(_e) === j;
    }
    function Te(_e) {
      return ce(_e) === k;
    }
    function Pe(_e) {
      return ce(_e) === c;
    }
    function je(_e) {
      return ce(_e) === b;
    }
    function Ge(_e) {
      return ce(_e) === g;
    }
    function At(_e) {
      return ce(_e) === O;
    }
    dn.AsyncMode = I, dn.ConcurrentMode = he, dn.ContextConsumer = fe, dn.ContextProvider = Ye, dn.Element = tt, dn.ForwardRef = We, dn.Fragment = ot, dn.Lazy = nt, dn.Memo = Re, dn.Portal = Qe, dn.Profiler = ct, dn.StrictMode = qe, dn.Suspense = Ee, dn.isAsyncMode = ke, dn.isConcurrentMode = V, dn.isContextConsumer = L, dn.isContextProvider = X, dn.isElement = we, dn.isForwardRef = xe, dn.isFragment = Ae, dn.isLazy = Oe, dn.isMemo = Te, dn.isPortal = Pe, dn.isProfiler = je, dn.isStrictMode = Ge, dn.isSuspense = At, dn.isValidElementType = se, dn.typeOf = ce;
  }()), dn;
}
process.env.NODE_ENV === "production" ? Cx.exports = uA() : Cx.exports = sA();
var hR = Cx.exports;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ax, q1;
function cA() {
  if (q1) return ax;
  q1 = 1;
  var o = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
  function p(b) {
    if (b == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(b);
  }
  function g() {
    try {
      if (!Object.assign)
        return !1;
      var b = new String("abc");
      if (b[5] = "de", Object.getOwnPropertyNames(b)[0] === "5")
        return !1;
      for (var m = {}, w = 0; w < 10; w++)
        m["_" + String.fromCharCode(w)] = w;
      var C = Object.getOwnPropertyNames(m).map(function(D) {
        return m[D];
      });
      if (C.join("") !== "0123456789")
        return !1;
      var R = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(D) {
        R[D] = D;
      }), Object.keys(Object.assign({}, R)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ax = g() ? Object.assign : function(b, m) {
    for (var w, C = p(b), R, D = 1; D < arguments.length; D++) {
      w = Object(arguments[D]);
      for (var O in w)
        s.call(w, O) && (C[O] = w[O]);
      if (o) {
        R = o(w);
        for (var P = 0; P < R.length; P++)
          c.call(w, R[P]) && (C[R[P]] = w[R[P]]);
      }
    }
    return C;
  }, ax;
}
var ix, G1;
function Mx() {
  if (G1) return ix;
  G1 = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ix = o, ix;
}
var ox, X1;
function mR() {
  return X1 || (X1 = 1, ox = Function.call.bind(Object.prototype.hasOwnProperty)), ox;
}
var lx, K1;
function fA() {
  if (K1) return lx;
  K1 = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = Mx(), c = {}, p = mR();
    o = function(b) {
      var m = "Warning: " + b;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function g(b, m, w, C, R) {
    if (process.env.NODE_ENV !== "production") {
      for (var D in b)
        if (p(b, D)) {
          var O;
          try {
            if (typeof b[D] != "function") {
              var P = Error(
                (C || "React class") + ": " + w + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            O = b[D](m, D, C, w, null, s);
          } catch (j) {
            O = j;
          }
          if (O && !(O instanceof Error) && o(
            (C || "React class") + ": type specification of " + w + " `" + D + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof O + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), O instanceof Error && !(O.message in c)) {
            c[O.message] = !0;
            var k = R ? R() : "";
            o(
              "Failed " + w + " type: " + O.message + (k ?? "")
            );
          }
        }
    }
  }
  return g.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (c = {});
  }, lx = g, lx;
}
var ux, J1;
function dA() {
  if (J1) return ux;
  J1 = 1;
  var o = hR, s = cA(), c = Mx(), p = mR(), g = fA(), b = function() {
  };
  process.env.NODE_ENV !== "production" && (b = function(w) {
    var C = "Warning: " + w;
    typeof console < "u" && console.error(C);
    try {
      throw new Error(C);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return ux = function(w, C) {
    var R = typeof Symbol == "function" && Symbol.iterator, D = "@@iterator";
    function O(V) {
      var L = V && (R && V[R] || V[D]);
      if (typeof L == "function")
        return L;
    }
    var P = "<<anonymous>>", k = {
      array: ee("array"),
      bigint: ee("bigint"),
      bool: ee("boolean"),
      func: ee("function"),
      number: ee("number"),
      object: ee("object"),
      string: ee("string"),
      symbol: ee("symbol"),
      any: oe(),
      arrayOf: se,
      element: ce(),
      elementType: I(),
      instanceOf: he,
      node: We(),
      objectOf: Ye,
      oneOf: fe,
      oneOfType: tt,
      shape: nt,
      exact: Re
    };
    function j(V, L) {
      return V === L ? V !== 0 || 1 / V === 1 / L : V !== V && L !== L;
    }
    function B(V, L) {
      this.message = V, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    B.prototype = Error.prototype;
    function G(V) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, X = 0;
      function we(Ae, Oe, Te, Pe, je, Ge, At) {
        if (Pe = Pe || P, Ge = Ge || Te, At !== c) {
          if (C) {
            var _e = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _e.name = "Invariant Violation", _e;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Nt = Pe + ":" + Te;
            !L[Nt] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (b(
              "You are manually calling a React.PropTypes validation function for the `" + Ge + "` prop on `" + Pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[Nt] = !0, X++);
          }
        }
        return Oe[Te] == null ? Ae ? Oe[Te] === null ? new B("The " + je + " `" + Ge + "` is marked as required " + ("in `" + Pe + "`, but its value is `null`.")) : new B("The " + je + " `" + Ge + "` is marked as required in " + ("`" + Pe + "`, but its value is `undefined`.")) : null : V(Oe, Te, Pe, je, Ge);
      }
      var xe = we.bind(null, !1);
      return xe.isRequired = we.bind(null, !0), xe;
    }
    function ee(V) {
      function L(X, we, xe, Ae, Oe, Te) {
        var Pe = X[we], je = qe(Pe);
        if (je !== V) {
          var Ge = Ee(Pe);
          return new B(
            "Invalid " + Ae + " `" + Oe + "` of type " + ("`" + Ge + "` supplied to `" + xe + "`, expected ") + ("`" + V + "`."),
            { expectedType: V }
          );
        }
        return null;
      }
      return G(L);
    }
    function oe() {
      return G(m);
    }
    function se(V) {
      function L(X, we, xe, Ae, Oe) {
        if (typeof V != "function")
          return new B("Property `" + Oe + "` of component `" + xe + "` has invalid PropType notation inside arrayOf.");
        var Te = X[we];
        if (!Array.isArray(Te)) {
          var Pe = qe(Te);
          return new B("Invalid " + Ae + " `" + Oe + "` of type " + ("`" + Pe + "` supplied to `" + xe + "`, expected an array."));
        }
        for (var je = 0; je < Te.length; je++) {
          var Ge = V(Te, je, xe, Ae, Oe + "[" + je + "]", c);
          if (Ge instanceof Error)
            return Ge;
        }
        return null;
      }
      return G(L);
    }
    function ce() {
      function V(L, X, we, xe, Ae) {
        var Oe = L[X];
        if (!w(Oe)) {
          var Te = qe(Oe);
          return new B("Invalid " + xe + " `" + Ae + "` of type " + ("`" + Te + "` supplied to `" + we + "`, expected a single ReactElement."));
        }
        return null;
      }
      return G(V);
    }
    function I() {
      function V(L, X, we, xe, Ae) {
        var Oe = L[X];
        if (!o.isValidElementType(Oe)) {
          var Te = qe(Oe);
          return new B("Invalid " + xe + " `" + Ae + "` of type " + ("`" + Te + "` supplied to `" + we + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return G(V);
    }
    function he(V) {
      function L(X, we, xe, Ae, Oe) {
        if (!(X[we] instanceof V)) {
          var Te = V.name || P, Pe = ke(X[we]);
          return new B("Invalid " + Ae + " `" + Oe + "` of type " + ("`" + Pe + "` supplied to `" + xe + "`, expected ") + ("instance of `" + Te + "`."));
        }
        return null;
      }
      return G(L);
    }
    function fe(V) {
      if (!Array.isArray(V))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? b(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : b("Invalid argument supplied to oneOf, expected an array.")), m;
      function L(X, we, xe, Ae, Oe) {
        for (var Te = X[we], Pe = 0; Pe < V.length; Pe++)
          if (j(Te, V[Pe]))
            return null;
        var je = JSON.stringify(V, function(At, _e) {
          var Nt = Ee(_e);
          return Nt === "symbol" ? String(_e) : _e;
        });
        return new B("Invalid " + Ae + " `" + Oe + "` of value `" + String(Te) + "` " + ("supplied to `" + xe + "`, expected one of " + je + "."));
      }
      return G(L);
    }
    function Ye(V) {
      function L(X, we, xe, Ae, Oe) {
        if (typeof V != "function")
          return new B("Property `" + Oe + "` of component `" + xe + "` has invalid PropType notation inside objectOf.");
        var Te = X[we], Pe = qe(Te);
        if (Pe !== "object")
          return new B("Invalid " + Ae + " `" + Oe + "` of type " + ("`" + Pe + "` supplied to `" + xe + "`, expected an object."));
        for (var je in Te)
          if (p(Te, je)) {
            var Ge = V(Te, je, xe, Ae, Oe + "." + je, c);
            if (Ge instanceof Error)
              return Ge;
          }
        return null;
      }
      return G(L);
    }
    function tt(V) {
      if (!Array.isArray(V))
        return process.env.NODE_ENV !== "production" && b("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var L = 0; L < V.length; L++) {
        var X = V[L];
        if (typeof X != "function")
          return b(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(X) + " at index " + L + "."
          ), m;
      }
      function we(xe, Ae, Oe, Te, Pe) {
        for (var je = [], Ge = 0; Ge < V.length; Ge++) {
          var At = V[Ge], _e = At(xe, Ae, Oe, Te, Pe, c);
          if (_e == null)
            return null;
          _e.data && p(_e.data, "expectedType") && je.push(_e.data.expectedType);
        }
        var Nt = je.length > 0 ? ", expected one of type [" + je.join(", ") + "]" : "";
        return new B("Invalid " + Te + " `" + Pe + "` supplied to " + ("`" + Oe + "`" + Nt + "."));
      }
      return G(we);
    }
    function We() {
      function V(L, X, we, xe, Ae) {
        return Qe(L[X]) ? null : new B("Invalid " + xe + " `" + Ae + "` supplied to " + ("`" + we + "`, expected a ReactNode."));
      }
      return G(V);
    }
    function ot(V, L, X, we, xe) {
      return new B(
        (V || "React class") + ": " + L + " type `" + X + "." + we + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + xe + "`."
      );
    }
    function nt(V) {
      function L(X, we, xe, Ae, Oe) {
        var Te = X[we], Pe = qe(Te);
        if (Pe !== "object")
          return new B("Invalid " + Ae + " `" + Oe + "` of type `" + Pe + "` " + ("supplied to `" + xe + "`, expected `object`."));
        for (var je in V) {
          var Ge = V[je];
          if (typeof Ge != "function")
            return ot(xe, Ae, Oe, je, Ee(Ge));
          var At = Ge(Te, je, xe, Ae, Oe + "." + je, c);
          if (At)
            return At;
        }
        return null;
      }
      return G(L);
    }
    function Re(V) {
      function L(X, we, xe, Ae, Oe) {
        var Te = X[we], Pe = qe(Te);
        if (Pe !== "object")
          return new B("Invalid " + Ae + " `" + Oe + "` of type `" + Pe + "` " + ("supplied to `" + xe + "`, expected `object`."));
        var je = s({}, X[we], V);
        for (var Ge in je) {
          var At = V[Ge];
          if (p(V, Ge) && typeof At != "function")
            return ot(xe, Ae, Oe, Ge, Ee(At));
          if (!At)
            return new B(
              "Invalid " + Ae + " `" + Oe + "` key `" + Ge + "` supplied to `" + xe + "`.\nBad object: " + JSON.stringify(X[we], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(V), null, "  ")
            );
          var _e = At(Te, Ge, xe, Ae, Oe + "." + Ge, c);
          if (_e)
            return _e;
        }
        return null;
      }
      return G(L);
    }
    function Qe(V) {
      switch (typeof V) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !V;
        case "object":
          if (Array.isArray(V))
            return V.every(Qe);
          if (V === null || w(V))
            return !0;
          var L = O(V);
          if (L) {
            var X = L.call(V), we;
            if (L !== V.entries) {
              for (; !(we = X.next()).done; )
                if (!Qe(we.value))
                  return !1;
            } else
              for (; !(we = X.next()).done; ) {
                var xe = we.value;
                if (xe && !Qe(xe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ct(V, L) {
      return V === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function qe(V) {
      var L = typeof V;
      return Array.isArray(V) ? "array" : V instanceof RegExp ? "object" : ct(L, V) ? "symbol" : L;
    }
    function Ee(V) {
      if (typeof V > "u" || V === null)
        return "" + V;
      var L = qe(V);
      if (L === "object") {
        if (V instanceof Date)
          return "date";
        if (V instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function ie(V) {
      var L = Ee(V);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function ke(V) {
      return !V.constructor || !V.constructor.name ? P : V.constructor.name;
    }
    return k.checkPropTypes = g, k.resetWarningCache = g.resetWarningCache, k.PropTypes = k, k;
  }, ux;
}
var sx, Z1;
function pA() {
  if (Z1) return sx;
  Z1 = 1;
  var o = Mx();
  function s() {
  }
  function c() {
  }
  return c.resetWarningCache = s, sx = function() {
    function p(m, w, C, R, D, O) {
      if (O !== o) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    p.isRequired = p;
    function g() {
      return p;
    }
    var b = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: g,
      element: p,
      elementType: p,
      instanceOf: g,
      node: p,
      objectOf: g,
      oneOf: g,
      oneOfType: g,
      shape: g,
      exact: g,
      checkPropTypes: c,
      resetWarningCache: s
    };
    return b.PropTypes = b, b;
  }, sx;
}
if (process.env.NODE_ENV !== "production") {
  var vA = hR, hA = !0;
  Ex.exports = dA()(vA.isElement, hA);
} else
  Ex.exports = pA()();
var mA = Ex.exports, Tt = /* @__PURE__ */ lA(mA);
function yA(o, s) {
  return o.classList ? !!s && o.classList.contains(s) : (" " + (o.className.baseVal || o.className) + " ").indexOf(" " + s + " ") !== -1;
}
function gA(o, s) {
  o.classList ? o.classList.add(s) : yA(o, s) || (typeof o.className == "string" ? o.className = o.className + " " + s : o.setAttribute("class", (o.className && o.className.baseVal || "") + " " + s));
}
function e_(o, s) {
  return o.replace(new RegExp("(^|\\s)" + s + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function SA(o, s) {
  o.classList ? o.classList.remove(s) : typeof o.className == "string" ? o.className = e_(o.className, s) : o.setAttribute("class", e_(o.className && o.className.baseVal || "", s));
}
var wx = { exports: {} }, ti = {}, Jy = { exports: {} }, cx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t_;
function bA() {
  return t_ || (t_ = 1, function(o) {
    function s(ie, ke) {
      var V = ie.length;
      ie.push(ke);
      e: for (; 0 < V; ) {
        var L = V - 1 >>> 1, X = ie[L];
        if (0 < g(X, ke)) ie[L] = ke, ie[V] = X, V = L;
        else break e;
      }
    }
    function c(ie) {
      return ie.length === 0 ? null : ie[0];
    }
    function p(ie) {
      if (ie.length === 0) return null;
      var ke = ie[0], V = ie.pop();
      if (V !== ke) {
        ie[0] = V;
        e: for (var L = 0, X = ie.length, we = X >>> 1; L < we; ) {
          var xe = 2 * (L + 1) - 1, Ae = ie[xe], Oe = xe + 1, Te = ie[Oe];
          if (0 > g(Ae, V)) Oe < X && 0 > g(Te, Ae) ? (ie[L] = Te, ie[Oe] = V, L = Oe) : (ie[L] = Ae, ie[xe] = V, L = xe);
          else if (Oe < X && 0 > g(Te, V)) ie[L] = Te, ie[Oe] = V, L = Oe;
          else break e;
        }
      }
      return ke;
    }
    function g(ie, ke) {
      var V = ie.sortIndex - ke.sortIndex;
      return V !== 0 ? V : ie.id - ke.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      o.unstable_now = function() {
        return b.now();
      };
    } else {
      var m = Date, w = m.now();
      o.unstable_now = function() {
        return m.now() - w;
      };
    }
    var C = [], R = [], D = 1, O = null, P = 3, k = !1, j = !1, B = !1, G = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function se(ie) {
      for (var ke = c(R); ke !== null; ) {
        if (ke.callback === null) p(R);
        else if (ke.startTime <= ie) p(R), ke.sortIndex = ke.expirationTime, s(C, ke);
        else break;
        ke = c(R);
      }
    }
    function ce(ie) {
      if (B = !1, se(ie), !j) if (c(C) !== null) j = !0, qe(I);
      else {
        var ke = c(R);
        ke !== null && Ee(ce, ke.startTime - ie);
      }
    }
    function I(ie, ke) {
      j = !1, B && (B = !1, ee(Ye), Ye = -1), k = !0;
      var V = P;
      try {
        for (se(ke), O = c(C); O !== null && (!(O.expirationTime > ke) || ie && !ot()); ) {
          var L = O.callback;
          if (typeof L == "function") {
            O.callback = null, P = O.priorityLevel;
            var X = L(O.expirationTime <= ke);
            ke = o.unstable_now(), typeof X == "function" ? O.callback = X : O === c(C) && p(C), se(ke);
          } else p(C);
          O = c(C);
        }
        if (O !== null) var we = !0;
        else {
          var xe = c(R);
          xe !== null && Ee(ce, xe.startTime - ke), we = !1;
        }
        return we;
      } finally {
        O = null, P = V, k = !1;
      }
    }
    var he = !1, fe = null, Ye = -1, tt = 5, We = -1;
    function ot() {
      return !(o.unstable_now() - We < tt);
    }
    function nt() {
      if (fe !== null) {
        var ie = o.unstable_now();
        We = ie;
        var ke = !0;
        try {
          ke = fe(!0, ie);
        } finally {
          ke ? Re() : (he = !1, fe = null);
        }
      } else he = !1;
    }
    var Re;
    if (typeof oe == "function") Re = function() {
      oe(nt);
    };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), ct = Qe.port2;
      Qe.port1.onmessage = nt, Re = function() {
        ct.postMessage(null);
      };
    } else Re = function() {
      G(nt, 0);
    };
    function qe(ie) {
      fe = ie, he || (he = !0, Re());
    }
    function Ee(ie, ke) {
      Ye = G(function() {
        ie(o.unstable_now());
      }, ke);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(ie) {
      ie.callback = null;
    }, o.unstable_continueExecution = function() {
      j || k || (j = !0, qe(I));
    }, o.unstable_forceFrameRate = function(ie) {
      0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : tt = 0 < ie ? Math.floor(1e3 / ie) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, o.unstable_getFirstCallbackNode = function() {
      return c(C);
    }, o.unstable_next = function(ie) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var ke = 3;
          break;
        default:
          ke = P;
      }
      var V = P;
      P = ke;
      try {
        return ie();
      } finally {
        P = V;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(ie, ke) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ie = 3;
      }
      var V = P;
      P = ie;
      try {
        return ke();
      } finally {
        P = V;
      }
    }, o.unstable_scheduleCallback = function(ie, ke, V) {
      var L = o.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? L + V : L) : V = L, ie) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return X = V + X, ie = { id: D++, callback: ke, priorityLevel: ie, startTime: V, expirationTime: X, sortIndex: -1 }, V > L ? (ie.sortIndex = V, s(R, ie), c(C) === null && ie === c(R) && (B ? (ee(Ye), Ye = -1) : B = !0, Ee(ce, V - L))) : (ie.sortIndex = X, s(C, ie), j || k || (j = !0, qe(I))), ie;
    }, o.unstable_shouldYield = ot, o.unstable_wrapCallback = function(ie) {
      var ke = P;
      return function() {
        var V = P;
        P = ke;
        try {
          return ie.apply(this, arguments);
        } finally {
          P = V;
        }
      };
    };
  }(cx)), cx;
}
var fx = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n_;
function xA() {
  return n_ || (n_ = 1, function(o) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, c = 5;
      function p($e, rt) {
        var Ot = $e.length;
        $e.push(rt), m($e, rt, Ot);
      }
      function g($e) {
        return $e.length === 0 ? null : $e[0];
      }
      function b($e) {
        if ($e.length === 0)
          return null;
        var rt = $e[0], Ot = $e.pop();
        return Ot !== rt && ($e[0] = Ot, w($e, Ot, 0)), rt;
      }
      function m($e, rt, Ot) {
        for (var Zt = Ot; Zt > 0; ) {
          var vn = Zt - 1 >>> 1, $n = $e[vn];
          if (C($n, rt) > 0)
            $e[vn] = rt, $e[Zt] = $n, Zt = vn;
          else
            return;
        }
      }
      function w($e, rt, Ot) {
        for (var Zt = Ot, vn = $e.length, $n = vn >>> 1; Zt < $n; ) {
          var xn = (Zt + 1) * 2 - 1, sr = $e[xn], hn = xn + 1, nn = $e[hn];
          if (C(sr, rt) < 0)
            hn < vn && C(nn, sr) < 0 ? ($e[Zt] = nn, $e[hn] = rt, Zt = hn) : ($e[Zt] = sr, $e[xn] = rt, Zt = xn);
          else if (hn < vn && C(nn, rt) < 0)
            $e[Zt] = nn, $e[hn] = rt, Zt = hn;
          else
            return;
        }
      }
      function C($e, rt) {
        var Ot = $e.sortIndex - rt.sortIndex;
        return Ot !== 0 ? Ot : $e.id - rt.id;
      }
      var R = 1, D = 2, O = 3, P = 4, k = 5;
      function j($e, rt) {
      }
      var B = typeof performance == "object" && typeof performance.now == "function";
      if (B) {
        var G = performance;
        o.unstable_now = function() {
          return G.now();
        };
      } else {
        var ee = Date, oe = ee.now();
        o.unstable_now = function() {
          return ee.now() - oe;
        };
      }
      var se = 1073741823, ce = -1, I = 250, he = 5e3, fe = 1e4, Ye = se, tt = [], We = [], ot = 1, nt = null, Re = O, Qe = !1, ct = !1, qe = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function V($e) {
        for (var rt = g(We); rt !== null; ) {
          if (rt.callback === null)
            b(We);
          else if (rt.startTime <= $e)
            b(We), rt.sortIndex = rt.expirationTime, p(tt, rt);
          else
            return;
          rt = g(We);
        }
      }
      function L($e) {
        if (qe = !1, V($e), !ct)
          if (g(tt) !== null)
            ct = !0, Wn(X);
          else {
            var rt = g(We);
            rt !== null && Pr(L, rt.startTime - $e);
          }
      }
      function X($e, rt) {
        ct = !1, qe && (qe = !1, ba()), Qe = !0;
        var Ot = Re;
        try {
          var Zt;
          if (!s) return we($e, rt);
        } finally {
          nt = null, Re = Ot, Qe = !1;
        }
      }
      function we($e, rt) {
        var Ot = rt;
        for (V(Ot), nt = g(tt); nt !== null && !(nt.expirationTime > Ot && (!$e || Na())); ) {
          var Zt = nt.callback;
          if (typeof Zt == "function") {
            nt.callback = null, Re = nt.priorityLevel;
            var vn = nt.expirationTime <= Ot, $n = Zt(vn);
            Ot = o.unstable_now(), typeof $n == "function" ? nt.callback = $n : nt === g(tt) && b(tt), V(Ot);
          } else
            b(tt);
          nt = g(tt);
        }
        if (nt !== null)
          return !0;
        var xn = g(We);
        return xn !== null && Pr(L, xn.startTime - Ot), !1;
      }
      function xe($e, rt) {
        switch ($e) {
          case R:
          case D:
          case O:
          case P:
          case k:
            break;
          default:
            $e = O;
        }
        var Ot = Re;
        Re = $e;
        try {
          return rt();
        } finally {
          Re = Ot;
        }
      }
      function Ae($e) {
        var rt;
        switch (Re) {
          case R:
          case D:
          case O:
            rt = O;
            break;
          default:
            rt = Re;
            break;
        }
        var Ot = Re;
        Re = rt;
        try {
          return $e();
        } finally {
          Re = Ot;
        }
      }
      function Oe($e) {
        var rt = Re;
        return function() {
          var Ot = Re;
          Re = rt;
          try {
            return $e.apply(this, arguments);
          } finally {
            Re = Ot;
          }
        };
      }
      function Te($e, rt, Ot) {
        var Zt = o.unstable_now(), vn;
        if (typeof Ot == "object" && Ot !== null) {
          var $n = Ot.delay;
          typeof $n == "number" && $n > 0 ? vn = Zt + $n : vn = Zt;
        } else
          vn = Zt;
        var xn;
        switch ($e) {
          case R:
            xn = ce;
            break;
          case D:
            xn = I;
            break;
          case k:
            xn = Ye;
            break;
          case P:
            xn = fe;
            break;
          case O:
          default:
            xn = he;
            break;
        }
        var sr = vn + xn, hn = {
          id: ot++,
          callback: rt,
          priorityLevel: $e,
          startTime: vn,
          expirationTime: sr,
          sortIndex: -1
        };
        return vn > Zt ? (hn.sortIndex = vn, p(We, hn), g(tt) === null && hn === g(We) && (qe ? ba() : qe = !0, Pr(L, vn - Zt))) : (hn.sortIndex = sr, p(tt, hn), !ct && !Qe && (ct = !0, Wn(X))), hn;
      }
      function Pe() {
      }
      function je() {
        !ct && !Qe && (ct = !0, Wn(X));
      }
      function Ge() {
        return g(tt);
      }
      function At($e) {
        $e.callback = null;
      }
      function _e() {
        return Re;
      }
      var Nt = !1, bn = null, Rn = -1, Mn = c, kr = -1;
      function Na() {
        var $e = o.unstable_now() - kr;
        return !($e < Mn);
      }
      function lr() {
      }
      function ur($e) {
        if ($e < 0 || $e > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        $e > 0 ? Mn = Math.floor(1e3 / $e) : Mn = c;
      }
      var zn = function() {
        if (bn !== null) {
          var $e = o.unstable_now();
          kr = $e;
          var rt = !0, Ot = !0;
          try {
            Ot = bn(rt, $e);
          } finally {
            Ot ? tr() : (Nt = !1, bn = null);
          }
        } else
          Nt = !1;
      }, tr;
      if (typeof ke == "function")
        tr = function() {
          ke(zn);
        };
      else if (typeof MessageChannel < "u") {
        var Dr = new MessageChannel(), ri = Dr.port2;
        Dr.port1.onmessage = zn, tr = function() {
          ri.postMessage(null);
        };
      } else
        tr = function() {
          Ee(zn, 0);
        };
      function Wn($e) {
        bn = $e, Nt || (Nt = !0, tr());
      }
      function Pr($e, rt) {
        Rn = Ee(function() {
          $e(o.unstable_now());
        }, rt);
      }
      function ba() {
        ie(Rn), Rn = -1;
      }
      var ai = lr, wi = null;
      o.unstable_IdlePriority = k, o.unstable_ImmediatePriority = R, o.unstable_LowPriority = P, o.unstable_NormalPriority = O, o.unstable_Profiling = wi, o.unstable_UserBlockingPriority = D, o.unstable_cancelCallback = At, o.unstable_continueExecution = je, o.unstable_forceFrameRate = ur, o.unstable_getCurrentPriorityLevel = _e, o.unstable_getFirstCallbackNode = Ge, o.unstable_next = Ae, o.unstable_pauseExecution = Pe, o.unstable_requestPaint = ai, o.unstable_runWithPriority = xe, o.unstable_scheduleCallback = Te, o.unstable_shouldYield = Na, o.unstable_wrapCallback = Oe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fx)), fx;
}
var r_;
function yR() {
  return r_ || (r_ = 1, process.env.NODE_ENV === "production" ? Jy.exports = bA() : Jy.exports = xA()), Jy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a_;
function EA() {
  if (a_) return ti;
  a_ = 1;
  var o = W, s = yR();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), g = {};
  function b(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (g[n] = r, n = 0; n < r.length; n++) p.add(r[n]);
  }
  var w = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, D = {}, O = {};
  function P(n) {
    return C.call(O, n) ? !0 : C.call(D, n) ? !1 : R.test(n) ? O[n] = !0 : (D[n] = !0, !1);
  }
  function k(n, r, l, f) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function j(n, r, l, f) {
    if (r === null || typeof r > "u" || k(n, r, l, f)) return !0;
    if (f) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function B(n, r, l, f, v, y, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = v, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = _;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    G[n] = new B(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    G[r] = new B(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    G[n] = new B(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    G[n] = new B(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    G[n] = new B(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    G[n] = new B(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    G[n] = new B(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    G[n] = new B(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    G[n] = new B(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ee = /[\-:]([a-z])/g;
  function oe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ee,
      oe
    );
    G[r] = new B(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ee, oe);
    G[r] = new B(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ee, oe);
    G[r] = new B(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    G[n] = new B(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    G[n] = new B(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function se(n, r, l, f) {
    var v = G.hasOwnProperty(r) ? G[r] : null;
    (v !== null ? v.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (j(r, l, v, f) && (l = null), f || v === null ? P(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : v.mustUseProperty ? n[v.propertyName] = l === null ? v.type === 3 ? !1 : "" : l : (r = v.attributeName, f = v.attributeNamespace, l === null ? n.removeAttribute(r) : (v = v.type, l = v === 3 || v === 4 && l === !0 ? "" : "" + l, f ? n.setAttributeNS(f, r, l) : n.setAttribute(r, l))));
  }
  var ce = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, I = Symbol.for("react.element"), he = Symbol.for("react.portal"), fe = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), We = Symbol.for("react.provider"), ot = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), Re = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), ie = Symbol.iterator;
  function ke(n) {
    return n === null || typeof n != "object" ? null : (n = ie && n[ie] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var V = Object.assign, L;
  function X(n) {
    if (L === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      L = r && r[1] || "";
    }
    return `
` + L + n;
  }
  var we = !1;
  function xe(n, r) {
    if (!n || we) return "";
    we = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (te) {
          var f = te;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (te) {
          f = te;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (te) {
          f = te;
        }
        n();
      }
    } catch (te) {
      if (te && f && typeof te.stack == "string") {
        for (var v = te.stack.split(`
`), y = f.stack.split(`
`), _ = v.length - 1, A = y.length - 1; 1 <= _ && 0 <= A && v[_] !== y[A]; ) A--;
        for (; 1 <= _ && 0 <= A; _--, A--) if (v[_] !== y[A]) {
          if (_ !== 1 || A !== 1)
            do
              if (_--, A--, 0 > A || v[_] !== y[A]) {
                var z = `
` + v[_].replace(" at new ", " at ");
                return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
              }
            while (1 <= _ && 0 <= A);
          break;
        }
      }
    } finally {
      we = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? X(n) : "";
  }
  function Ae(n) {
    switch (n.tag) {
      case 5:
        return X(n.type);
      case 16:
        return X("Lazy");
      case 13:
        return X("Suspense");
      case 19:
        return X("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = xe(n.type, !1), n;
      case 11:
        return n = xe(n.type.render, !1), n;
      case 1:
        return n = xe(n.type, !0), n;
      default:
        return "";
    }
  }
  function Oe(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case fe:
        return "Fragment";
      case he:
        return "Portal";
      case tt:
        return "Profiler";
      case Ye:
        return "StrictMode";
      case Re:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case ot:
        return (n.displayName || "Context") + ".Consumer";
      case We:
        return (n._context.displayName || "Context") + ".Provider";
      case nt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ct:
        return r = n.displayName || null, r !== null ? r : Oe(n.type) || "Memo";
      case qe:
        r = n._payload, n = n._init;
        try {
          return Oe(n(r));
        } catch {
        }
    }
    return null;
  }
  function Te(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Oe(r);
      case 8:
        return r === Ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Pe(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function je(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ge(n) {
    var r = je(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var v = l.get, y = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(_) {
        f = "" + _, y.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(_) {
        f = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function At(n) {
    n._valueTracker || (n._valueTracker = Ge(n));
  }
  function _e(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), f = "";
    return n && (f = je(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Nt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function bn(n, r) {
    var l = r.checked;
    return V({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Rn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    l = Pe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: f, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Mn(n, r) {
    r = r.checked, r != null && se(n, "checked", r, !1);
  }
  function kr(n, r) {
    Mn(n, r);
    var l = Pe(r.value), f = r.type;
    if (l != null) f === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? lr(n, r.type, l) : r.hasOwnProperty("defaultValue") && lr(n, r.type, Pe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Na(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function lr(n, r, l) {
    (r !== "number" || Nt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ur = Array.isArray;
  function zn(n, r, l, f) {
    if (n = n.options, r) {
      r = {};
      for (var v = 0; v < l.length; v++) r["$" + l[v]] = !0;
      for (l = 0; l < n.length; l++) v = r.hasOwnProperty("$" + n[l].value), n[l].selected !== v && (n[l].selected = v), v && f && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Pe(l), r = null, v = 0; v < n.length; v++) {
        if (n[v].value === l) {
          n[v].selected = !0, f && (n[v].defaultSelected = !0);
          return;
        }
        r !== null || n[v].disabled || (r = n[v]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function tr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(c(91));
    return V({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Dr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(c(92));
        if (ur(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Pe(l) };
  }
  function ri(n, r) {
    var l = Pe(r.value), f = Pe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), f != null && (n.defaultValue = "" + f);
  }
  function Wn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Pr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ba(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Pr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ai, wi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, f, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, f, v);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ai = ai || document.createElement("div"), ai.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ai.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function $e(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var rt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ot = ["Webkit", "ms", "Moz", "O"];
  Object.keys(rt).forEach(function(n) {
    Ot.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), rt[r] = rt[n];
    });
  });
  function Zt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || rt.hasOwnProperty(n) && rt[n] ? ("" + r).trim() : r + "px";
  }
  function vn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var f = l.indexOf("--") === 0, v = Zt(l, r[l], f);
      l === "float" && (l = "cssFloat"), f ? n.setProperty(l, v) : n[l] = v;
    }
  }
  var $n = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xn(n, r) {
    if (r) {
      if ($n[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(c(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(c(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(c(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(c(62));
    }
  }
  function sr(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var hn = null;
  function nn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var rn = null, xa = null, Lr = null;
  function Ma(n) {
    if (n = lt(n)) {
      if (typeof rn != "function") throw Error(c(280));
      var r = n.stateNode;
      r && (r = Dn(r), rn(n.stateNode, n.type, r));
    }
  }
  function Zi(n) {
    xa ? Lr ? Lr.push(n) : Lr = [n] : xa = n;
  }
  function Cl() {
    if (xa) {
      var n = xa, r = Lr;
      if (Lr = xa = null, Ma(n), r) for (n = 0; n < r.length; n++) Ma(r[n]);
    }
  }
  function wl(n, r) {
    return n(r);
  }
  function ko() {
  }
  var Do = !1;
  function _l(n, r, l) {
    if (Do) return n(r, l);
    Do = !0;
    try {
      return wl(n, r, l);
    } finally {
      Do = !1, (xa !== null || Lr !== null) && (ko(), Cl());
    }
  }
  function jr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var f = Dn(l);
    if (f === null) return null;
    l = f[r];
    e: switch (r) {
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
        (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(c(231, r, typeof l));
    return l;
  }
  var Fr = !1;
  if (w) try {
    var hr = {};
    Object.defineProperty(hr, "passive", { get: function() {
      Fr = !0;
    } }), window.addEventListener("test", hr, hr), window.removeEventListener("test", hr, hr);
  } catch {
    Fr = !1;
  }
  function _i(n, r, l, f, v, y, _, A, z) {
    var te = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, te);
    } catch (ye) {
      this.onError(ye);
    }
  }
  var ii = !1, Ri = null, Ti = !1, M = null, pe = { onError: function(n) {
    ii = !0, Ri = n;
  } };
  function Ne(n, r, l, f, v, y, _, A, z) {
    ii = !1, Ri = null, _i.apply(pe, arguments);
  }
  function Ve(n, r, l, f, v, y, _, A, z) {
    if (Ne.apply(this, arguments), ii) {
      if (ii) {
        var te = Ri;
        ii = !1, Ri = null;
      } else throw Error(c(198));
      Ti || (Ti = !0, M = te);
    }
  }
  function Ct(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function bt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Pt(n) {
    if (Ct(n) !== n) throw Error(c(188));
  }
  function kt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ct(n), r === null) throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var l = n, f = r; ; ) {
      var v = l.return;
      if (v === null) break;
      var y = v.alternate;
      if (y === null) {
        if (f = v.return, f !== null) {
          l = f;
          continue;
        }
        break;
      }
      if (v.child === y.child) {
        for (y = v.child; y; ) {
          if (y === l) return Pt(v), n;
          if (y === f) return Pt(v), r;
          y = y.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== f.return) l = v, f = y;
      else {
        for (var _ = !1, A = v.child; A; ) {
          if (A === l) {
            _ = !0, l = v, f = y;
            break;
          }
          if (A === f) {
            _ = !0, f = v, l = y;
            break;
          }
          A = A.sibling;
        }
        if (!_) {
          for (A = y.child; A; ) {
            if (A === l) {
              _ = !0, l = y, f = v;
              break;
            }
            if (A === f) {
              _ = !0, f = y, l = v;
              break;
            }
            A = A.sibling;
          }
          if (!_) throw Error(c(189));
        }
      }
      if (l.alternate !== f) throw Error(c(190));
    }
    if (l.tag !== 3) throw Error(c(188));
    return l.stateNode.current === l ? n : r;
  }
  function jn(n) {
    return n = kt(n), n !== null ? mn(n) : null;
  }
  function mn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = mn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var En = s.unstable_scheduleCallback, mr = s.unstable_cancelCallback, oi = s.unstable_shouldYield, li = s.unstable_requestPaint, wt = s.unstable_now, Rt = s.unstable_getCurrentPriorityLevel, ui = s.unstable_ImmediatePriority, Rl = s.unstable_UserBlockingPriority, Tl = s.unstable_NormalPriority, Po = s.unstable_LowPriority, xu = s.unstable_IdlePriority, Lo = null, ra = null;
  function Es(n) {
    if (ra && typeof ra.onCommitFiberRoot == "function") try {
      ra.onCommitFiberRoot(Lo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ur = Math.clz32 ? Math.clz32 : Eu, Yc = Math.log, Qc = Math.LN2;
  function Eu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yc(n) / Qc | 0) | 0;
  }
  var Ao = 64, Ea = 4194304;
  function si(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ci(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var f = 0, v = n.suspendedLanes, y = n.pingedLanes, _ = l & 268435455;
    if (_ !== 0) {
      var A = _ & ~v;
      A !== 0 ? f = si(A) : (y &= _, y !== 0 && (f = si(y)));
    } else _ = l & ~v, _ !== 0 ? f = si(_) : y !== 0 && (f = si(y));
    if (f === 0) return 0;
    if (r !== 0 && r !== f && !(r & v) && (v = f & -f, y = r & -r, v >= y || v === 16 && (y & 4194240) !== 0)) return r;
    if (f & 4 && (f |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= f; 0 < r; ) l = 31 - Ur(r), v = 1 << l, f |= n[l], r &= ~v;
    return f;
  }
  function Cu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ol(n, r) {
    for (var l = n.suspendedLanes, f = n.pingedLanes, v = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var _ = 31 - Ur(y), A = 1 << _, z = v[_];
      z === -1 ? (!(A & l) || A & f) && (v[_] = Cu(A, r)) : z <= r && (n.expiredLanes |= A), y &= ~A;
    }
  }
  function No(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function wu() {
    var n = Ao;
    return Ao <<= 1, !(Ao & 4194240) && (Ao = 64), n;
  }
  function _u(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function eo(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ur(r), n[r] = l;
  }
  function Vd(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var v = 31 - Ur(l), y = 1 << v;
      r[v] = 0, f[v] = -1, n[v] = -1, l &= ~y;
    }
  }
  function to(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var f = 31 - Ur(l), v = 1 << f;
      v & r | n[f] & r && (n[f] |= r), l &= ~v;
    }
  }
  var Qt = 0;
  function Ru(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var It, Cs, Oi, St, Tu, yr = !1, $i = [], Hr = null, ki = null, Cn = null, an = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map(), nr = [], Ir = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function za(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Hr = null;
        break;
      case "dragenter":
      case "dragleave":
        ki = null;
        break;
      case "mouseover":
      case "mouseout":
        Cn = null;
        break;
      case "pointerover":
      case "pointerout":
        an.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mo.delete(r.pointerId);
    }
  }
  function $l(n, r, l, f, v, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: f, nativeEvent: y, targetContainers: [v] }, r !== null && (r = lt(r), r !== null && Cs(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, v !== null && r.indexOf(v) === -1 && r.push(v), n);
  }
  function ws(n, r, l, f, v) {
    switch (r) {
      case "focusin":
        return Hr = $l(Hr, n, r, l, f, v), !0;
      case "dragenter":
        return ki = $l(ki, n, r, l, f, v), !0;
      case "mouseover":
        return Cn = $l(Cn, n, r, l, f, v), !0;
      case "pointerover":
        var y = v.pointerId;
        return an.set(y, $l(an.get(y) || null, n, r, l, f, v)), !0;
      case "gotpointercapture":
        return y = v.pointerId, Mo.set(y, $l(Mo.get(y) || null, n, r, l, f, v)), !0;
    }
    return !1;
  }
  function _s(n) {
    var r = jl(n.target);
    if (r !== null) {
      var l = Ct(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = bt(l), r !== null) {
            n.blockedOn = r, Tu(n.priority, function() {
              Oi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function zo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ku(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var f = new l.constructor(l.type, l);
        hn = f, l.target.dispatchEvent(f), hn = null;
      } else return r = lt(l), r !== null && Cs(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function kl(n, r, l) {
    zo(n) && l.delete(r);
  }
  function Wd() {
    yr = !1, Hr !== null && zo(Hr) && (Hr = null), ki !== null && zo(ki) && (ki = null), Cn !== null && zo(Cn) && (Cn = null), an.forEach(kl), Mo.forEach(kl);
  }
  function ja(n, r) {
    n.blockedOn === r && (n.blockedOn = null, yr || (yr = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Wd)));
  }
  function fi(n) {
    function r(v) {
      return ja(v, n);
    }
    if (0 < $i.length) {
      ja($i[0], n);
      for (var l = 1; l < $i.length; l++) {
        var f = $i[l];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Hr !== null && ja(Hr, n), ki !== null && ja(ki, n), Cn !== null && ja(Cn, n), an.forEach(r), Mo.forEach(r), l = 0; l < nr.length; l++) f = nr[l], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < nr.length && (l = nr[0], l.blockedOn === null); ) _s(l), l.blockedOn === null && nr.shift();
  }
  var Di = ce.ReactCurrentBatchConfig, Fa = !0;
  function Ou(n, r, l, f) {
    var v = Qt, y = Di.transition;
    Di.transition = null;
    try {
      Qt = 1, jo(n, r, l, f);
    } finally {
      Qt = v, Di.transition = y;
    }
  }
  function $u(n, r, l, f) {
    var v = Qt, y = Di.transition;
    Di.transition = null;
    try {
      Qt = 4, jo(n, r, l, f);
    } finally {
      Qt = v, Di.transition = y;
    }
  }
  function jo(n, r, l, f) {
    if (Fa) {
      var v = ku(n, r, l, f);
      if (v === null) of(n, r, f, Dl, l), za(n, f);
      else if (ws(v, n, r, l, f)) f.stopPropagation();
      else if (za(n, f), r & 4 && -1 < Ir.indexOf(n)) {
        for (; v !== null; ) {
          var y = lt(v);
          if (y !== null && It(y), y = ku(n, r, l, f), y === null && of(n, r, f, Dl, l), y === v) break;
          v = y;
        }
        v !== null && f.stopPropagation();
      } else of(n, r, f, null, l);
    }
  }
  var Dl = null;
  function ku(n, r, l, f) {
    if (Dl = null, n = nn(f), n = jl(n), n !== null) if (r = Ct(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = bt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Dl = n, null;
  }
  function Du(n) {
    switch (n) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Rt()) {
          case ui:
            return 1;
          case Rl:
            return 4;
          case Tl:
          case Po:
            return 16;
          case xu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var di = null, E = null, N = null;
  function Z() {
    if (N) return N;
    var n, r = E, l = r.length, f, v = "value" in di ? di.value : di.textContent, y = v.length;
    for (n = 0; n < l && r[n] === v[n]; n++) ;
    var _ = l - n;
    for (f = 1; f <= _ && r[l - f] === v[y - f]; f++) ;
    return N = v.slice(n, 1 < f ? 1 - f : void 0);
  }
  function ae(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ce() {
    return !0;
  }
  function ft() {
    return !1;
  }
  function Le(n) {
    function r(l, f, v, y, _) {
      this._reactName = l, this._targetInst = v, this.type = f, this.nativeEvent = y, this.target = _, this.currentTarget = null;
      for (var A in n) n.hasOwnProperty(A) && (l = n[A], this[A] = l ? l(y) : y[A]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? Ce : ft, this.isPropagationStopped = ft, this;
    }
    return V(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ce);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ce);
    }, persist: function() {
    }, isPersistent: Ce }), r;
  }
  var vt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Lt = Le(vt), Bt = V({}, vt, { view: 0, detail: 0 }), yn = Le(Bt), on, $t, ln, kn = V({}, Bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ln && (ln && n.type === "mousemove" ? (on = n.screenX - ln.screenX, $t = n.screenY - ln.screenY) : $t = on = 0, ln = n), on);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : $t;
  } }), Fo = Le(kn), Rs = V({}, kn, { dataTransfer: 0 }), no = Le(Rs), Ts = V({}, Bt, { relatedTarget: 0 }), Pl = Le(Ts), Yd = V({}, vt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qc = Le(Yd), Qd = V({}, vt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), lh = Le(Qd), qd = V({}, vt, { data: 0 }), Gd = Le(qd), uh = {
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
  }, sh = {
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
  }, Fg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ro(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Fg[n]) ? !!r[n] : !1;
  }
  function Xd() {
    return ro;
  }
  var Kd = V({}, Bt, { key: function(n) {
    if (n.key) {
      var r = uh[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = ae(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? sh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xd, charCode: function(n) {
    return n.type === "keypress" ? ae(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ae(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Jd = Le(Kd), Zd = V({}, kn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ch = Le(Zd), Gc = V({}, Bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xd }), fh = Le(Gc), aa = V({}, vt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ao = Le(aa), Yn = V({}, kn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), io = Le(Yn), ep = [9, 13, 27, 32], Pu = w && "CompositionEvent" in window, Os = null;
  w && "documentMode" in document && (Os = document.documentMode);
  var $s = w && "TextEvent" in window && !Os, dh = w && (!Pu || Os && 8 < Os && 11 >= Os), ph = " ", Xc = !1;
  function vh(n, r) {
    switch (n) {
      case "keyup":
        return ep.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hh(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Lu = !1;
  function mh(n, r) {
    switch (n) {
      case "compositionend":
        return hh(r);
      case "keypress":
        return r.which !== 32 ? null : (Xc = !0, ph);
      case "textInput":
        return n = r.data, n === ph && Xc ? null : n;
      default:
        return null;
    }
  }
  function Ug(n, r) {
    if (Lu) return n === "compositionend" || !Pu && vh(n, r) ? (n = Z(), N = E = di = null, Lu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return dh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Hg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Hg[n.type] : r === "textarea";
  }
  function tp(n, r, l, f) {
    Zi(f), r = Ns(r, "onChange"), 0 < r.length && (l = new Lt("onChange", "change", null, l, f), n.push({ event: l, listeners: r }));
  }
  var Pi = null, Ll = null;
  function gh(n) {
    Ml(n, 0);
  }
  function ks(n) {
    var r = vi(n);
    if (_e(r)) return n;
  }
  function Ig(n, r) {
    if (n === "change") return r;
  }
  var Sh = !1;
  if (w) {
    var np;
    if (w) {
      var rp = "oninput" in document;
      if (!rp) {
        var bh = document.createElement("div");
        bh.setAttribute("oninput", "return;"), rp = typeof bh.oninput == "function";
      }
      np = rp;
    } else np = !1;
    Sh = np && (!document.documentMode || 9 < document.documentMode);
  }
  function xh() {
    Pi && (Pi.detachEvent("onpropertychange", Eh), Ll = Pi = null);
  }
  function Eh(n) {
    if (n.propertyName === "value" && ks(Ll)) {
      var r = [];
      tp(r, Ll, n, nn(n)), _l(gh, r);
    }
  }
  function Bg(n, r, l) {
    n === "focusin" ? (xh(), Pi = r, Ll = l, Pi.attachEvent("onpropertychange", Eh)) : n === "focusout" && xh();
  }
  function Ch(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ks(Ll);
  }
  function Vg(n, r) {
    if (n === "click") return ks(r);
  }
  function wh(n, r) {
    if (n === "input" || n === "change") return ks(r);
  }
  function Wg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var pi = typeof Object.is == "function" ? Object.is : Wg;
  function Ds(n, r) {
    if (pi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), f = Object.keys(r);
    if (l.length !== f.length) return !1;
    for (f = 0; f < l.length; f++) {
      var v = l[f];
      if (!C.call(r, v) || !pi(n[v], r[v])) return !1;
    }
    return !0;
  }
  function _h(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Kc(n, r) {
    var l = _h(n);
    n = 0;
    for (var f; l; ) {
      if (l.nodeType === 3) {
        if (f = n + l.textContent.length, n <= r && f >= r) return { node: l, offset: r - n };
        n = f;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = _h(l);
    }
  }
  function Uo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Uo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ps() {
    for (var n = window, r = Nt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Nt(n.document);
    }
    return r;
  }
  function Jc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Au(n) {
    var r = Ps(), l = n.focusedElem, f = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Uo(l.ownerDocument.documentElement, l)) {
      if (f !== null && Jc(l)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = l.textContent.length, y = Math.min(f.start, v);
          f = f.end === void 0 ? y : Math.min(f.end, v), !n.extend && y > f && (v = f, f = y, y = v), v = Kc(l, y);
          var _ = Kc(
            l,
            f
          );
          v && _ && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(v.node, v.offset), n.removeAllRanges(), y > f ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Yg = w && "documentMode" in document && 11 >= document.documentMode, Nu = null, ap = null, Ls = null, ip = !1;
  function op(n, r, l) {
    var f = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ip || Nu == null || Nu !== Nt(f) || (f = Nu, "selectionStart" in f && Jc(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), Ls && Ds(Ls, f) || (Ls = f, f = Ns(ap, "onSelect"), 0 < f.length && (r = new Lt("onSelect", "select", null, r, l), n.push({ event: r, listeners: f }), r.target = Nu)));
  }
  function Zc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Al = { animationend: Zc("Animation", "AnimationEnd"), animationiteration: Zc("Animation", "AnimationIteration"), animationstart: Zc("Animation", "AnimationStart"), transitionend: Zc("Transition", "TransitionEnd") }, gr = {}, lp = {};
  w && (lp = document.createElement("div").style, "AnimationEvent" in window || (delete Al.animationend.animation, delete Al.animationiteration.animation, delete Al.animationstart.animation), "TransitionEvent" in window || delete Al.transitionend.transition);
  function ef(n) {
    if (gr[n]) return gr[n];
    if (!Al[n]) return n;
    var r = Al[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in lp) return gr[n] = r[l];
    return n;
  }
  var Rh = ef("animationend"), Th = ef("animationiteration"), Oh = ef("animationstart"), $h = ef("transitionend"), up = /* @__PURE__ */ new Map(), tf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ua(n, r) {
    up.set(n, r), b(r, [n]);
  }
  for (var sp = 0; sp < tf.length; sp++) {
    var Nl = tf[sp], Qg = Nl.toLowerCase(), qg = Nl[0].toUpperCase() + Nl.slice(1);
    Ua(Qg, "on" + qg);
  }
  Ua(Rh, "onAnimationEnd"), Ua(Th, "onAnimationIteration"), Ua(Oh, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua($h, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), cp = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));
  function nf(n, r, l) {
    var f = n.type || "unknown-event";
    n.currentTarget = l, Ve(f, r, void 0, n), n.currentTarget = null;
  }
  function Ml(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var f = n[l], v = f.event;
      f = f.listeners;
      e: {
        var y = void 0;
        if (r) for (var _ = f.length - 1; 0 <= _; _--) {
          var A = f[_], z = A.instance, te = A.currentTarget;
          if (A = A.listener, z !== y && v.isPropagationStopped()) break e;
          nf(v, A, te), y = z;
        }
        else for (_ = 0; _ < f.length; _++) {
          if (A = f[_], z = A.instance, te = A.currentTarget, A = A.listener, z !== y && v.isPropagationStopped()) break e;
          nf(v, A, te), y = z;
        }
      }
    }
    if (Ti) throw n = M, Ti = !1, M = null, n;
  }
  function en(n, r) {
    var l = r[js];
    l === void 0 && (l = r[js] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    l.has(f) || (kh(r, n, 2, !1), l.add(f));
  }
  function rf(n, r, l) {
    var f = 0;
    r && (f |= 4), kh(l, n, f, r);
  }
  var af = "_reactListening" + Math.random().toString(36).slice(2);
  function Mu(n) {
    if (!n[af]) {
      n[af] = !0, p.forEach(function(l) {
        l !== "selectionchange" && (cp.has(l) || rf(l, !1, n), rf(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[af] || (r[af] = !0, rf("selectionchange", !1, r));
    }
  }
  function kh(n, r, l, f) {
    switch (Du(r)) {
      case 1:
        var v = Ou;
        break;
      case 4:
        v = $u;
        break;
      default:
        v = jo;
    }
    l = v.bind(null, r, l, n), v = void 0, !Fr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (v = !0), f ? v !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: v }) : n.addEventListener(r, l, !0) : v !== void 0 ? n.addEventListener(r, l, { passive: v }) : n.addEventListener(r, l, !1);
  }
  function of(n, r, l, f, v) {
    var y = f;
    if (!(r & 1) && !(r & 2) && f !== null) e: for (; ; ) {
      if (f === null) return;
      var _ = f.tag;
      if (_ === 3 || _ === 4) {
        var A = f.stateNode.containerInfo;
        if (A === v || A.nodeType === 8 && A.parentNode === v) break;
        if (_ === 4) for (_ = f.return; _ !== null; ) {
          var z = _.tag;
          if ((z === 3 || z === 4) && (z = _.stateNode.containerInfo, z === v || z.nodeType === 8 && z.parentNode === v)) return;
          _ = _.return;
        }
        for (; A !== null; ) {
          if (_ = jl(A), _ === null) return;
          if (z = _.tag, z === 5 || z === 6) {
            f = y = _;
            continue e;
          }
          A = A.parentNode;
        }
      }
      f = f.return;
    }
    _l(function() {
      var te = y, ye = nn(l), Se = [];
      e: {
        var me = up.get(n);
        if (me !== void 0) {
          var Ue = Lt, Xe = n;
          switch (n) {
            case "keypress":
              if (ae(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ue = Jd;
              break;
            case "focusin":
              Xe = "focus", Ue = Pl;
              break;
            case "focusout":
              Xe = "blur", Ue = Pl;
              break;
            case "beforeblur":
            case "afterblur":
              Ue = Pl;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ue = Fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ue = no;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ue = fh;
              break;
            case Rh:
            case Th:
            case Oh:
              Ue = qc;
              break;
            case $h:
              Ue = ao;
              break;
            case "scroll":
              Ue = yn;
              break;
            case "wheel":
              Ue = io;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ue = lh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ue = ch;
          }
          var et = (r & 4) !== 0, Bn = !et && n === "scroll", Y = et ? me !== null ? me + "Capture" : null : me;
          et = [];
          for (var U = te, K; U !== null; ) {
            K = U;
            var ge = K.stateNode;
            if (K.tag === 5 && ge !== null && (K = ge, Y !== null && (ge = jr(U, Y), ge != null && et.push(zu(U, ge, K)))), Bn) break;
            U = U.return;
          }
          0 < et.length && (me = new Ue(me, Xe, null, l, ye), Se.push({ event: me, listeners: et }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (me = n === "mouseover" || n === "pointerover", Ue = n === "mouseout" || n === "pointerout", me && l !== hn && (Xe = l.relatedTarget || l.fromElement) && (jl(Xe) || Xe[oo])) break e;
          if ((Ue || me) && (me = ye.window === ye ? ye : (me = ye.ownerDocument) ? me.defaultView || me.parentWindow : window, Ue ? (Xe = l.relatedTarget || l.toElement, Ue = te, Xe = Xe ? jl(Xe) : null, Xe !== null && (Bn = Ct(Xe), Xe !== Bn || Xe.tag !== 5 && Xe.tag !== 6) && (Xe = null)) : (Ue = null, Xe = te), Ue !== Xe)) {
            if (et = Fo, ge = "onMouseLeave", Y = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (et = ch, ge = "onPointerLeave", Y = "onPointerEnter", U = "pointer"), Bn = Ue == null ? me : vi(Ue), K = Xe == null ? me : vi(Xe), me = new et(ge, U + "leave", Ue, l, ye), me.target = Bn, me.relatedTarget = K, ge = null, jl(ye) === te && (et = new et(Y, U + "enter", Xe, l, ye), et.target = K, et.relatedTarget = Bn, ge = et), Bn = ge, Ue && Xe) t: {
              for (et = Ue, Y = Xe, U = 0, K = et; K; K = Ho(K)) U++;
              for (K = 0, ge = Y; ge; ge = Ho(ge)) K++;
              for (; 0 < U - K; ) et = Ho(et), U--;
              for (; 0 < K - U; ) Y = Ho(Y), K--;
              for (; U--; ) {
                if (et === Y || Y !== null && et === Y.alternate) break t;
                et = Ho(et), Y = Ho(Y);
              }
              et = null;
            }
            else et = null;
            Ue !== null && Dh(Se, me, Ue, et, !1), Xe !== null && Bn !== null && Dh(Se, Bn, Xe, et, !0);
          }
        }
        e: {
          if (me = te ? vi(te) : window, Ue = me.nodeName && me.nodeName.toLowerCase(), Ue === "select" || Ue === "input" && me.type === "file") var Ke = Ig;
          else if (yh(me)) if (Sh) Ke = wh;
          else {
            Ke = Ch;
            var pt = Bg;
          }
          else (Ue = me.nodeName) && Ue.toLowerCase() === "input" && (me.type === "checkbox" || me.type === "radio") && (Ke = Vg);
          if (Ke && (Ke = Ke(n, te))) {
            tp(Se, Ke, l, ye);
            break e;
          }
          pt && pt(n, me, te), n === "focusout" && (pt = me._wrapperState) && pt.controlled && me.type === "number" && lr(me, "number", me.value);
        }
        switch (pt = te ? vi(te) : window, n) {
          case "focusin":
            (yh(pt) || pt.contentEditable === "true") && (Nu = pt, ap = te, Ls = null);
            break;
          case "focusout":
            Ls = ap = Nu = null;
            break;
          case "mousedown":
            ip = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ip = !1, op(Se, l, ye);
            break;
          case "selectionchange":
            if (Yg) break;
          case "keydown":
          case "keyup":
            op(Se, l, ye);
        }
        var ht;
        if (Pu) e: {
          switch (n) {
            case "compositionstart":
              var gt = "onCompositionStart";
              break e;
            case "compositionend":
              gt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              gt = "onCompositionUpdate";
              break e;
          }
          gt = void 0;
        }
        else Lu ? vh(n, l) && (gt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (gt = "onCompositionStart");
        gt && (dh && l.locale !== "ko" && (Lu || gt !== "onCompositionStart" ? gt === "onCompositionEnd" && Lu && (ht = Z()) : (di = ye, E = "value" in di ? di.value : di.textContent, Lu = !0)), pt = Ns(te, gt), 0 < pt.length && (gt = new Gd(gt, n, null, l, ye), Se.push({ event: gt, listeners: pt }), ht ? gt.data = ht : (ht = hh(l), ht !== null && (gt.data = ht)))), (ht = $s ? mh(n, l) : Ug(n, l)) && (te = Ns(te, "onBeforeInput"), 0 < te.length && (ye = new Gd("onBeforeInput", "beforeinput", null, l, ye), Se.push({ event: ye, listeners: te }), ye.data = ht));
      }
      Ml(Se, r);
    });
  }
  function zu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Ns(n, r) {
    for (var l = r + "Capture", f = []; n !== null; ) {
      var v = n, y = v.stateNode;
      v.tag === 5 && y !== null && (v = y, y = jr(n, l), y != null && f.unshift(zu(n, y, v)), y = jr(n, r), y != null && f.push(zu(n, y, v))), n = n.return;
    }
    return f;
  }
  function Ho(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dh(n, r, l, f, v) {
    for (var y = r._reactName, _ = []; l !== null && l !== f; ) {
      var A = l, z = A.alternate, te = A.stateNode;
      if (z !== null && z === f) break;
      A.tag === 5 && te !== null && (A = te, v ? (z = jr(l, y), z != null && _.unshift(zu(l, z, A))) : v || (z = jr(l, y), z != null && _.push(zu(l, z, A)))), l = l.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var Ph = /\r\n?/g, Gg = /\u0000|\uFFFD/g;
  function Lh(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ph, `
`).replace(Gg, "");
  }
  function lf(n, r, l) {
    if (r = Lh(r), Lh(n) !== r && l) throw Error(c(425));
  }
  function Io() {
  }
  var Ms = null, zl = null;
  function uf(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var sf = typeof setTimeout == "function" ? setTimeout : void 0, fp = typeof clearTimeout == "function" ? clearTimeout : void 0, Ah = typeof Promise == "function" ? Promise : void 0, ju = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ah < "u" ? function(n) {
    return Ah.resolve(null).then(n).catch(cf);
  } : sf;
  function cf(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Fu(n, r) {
    var l = r, f = 0;
    do {
      var v = l.nextSibling;
      if (n.removeChild(l), v && v.nodeType === 8) if (l = v.data, l === "/$") {
        if (f === 0) {
          n.removeChild(v), fi(r);
          return;
        }
        f--;
      } else l !== "$" && l !== "$?" && l !== "$!" || f++;
      l = v;
    } while (l);
    fi(r);
  }
  function Li(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Nh(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Bo = Math.random().toString(36).slice(2), Ai = "__reactFiber$" + Bo, zs = "__reactProps$" + Bo, oo = "__reactContainer$" + Bo, js = "__reactEvents$" + Bo, Uu = "__reactListeners$" + Bo, Xg = "__reactHandles$" + Bo;
  function jl(n) {
    var r = n[Ai];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[oo] || l[Ai]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Nh(n); n !== null; ) {
          if (l = n[Ai]) return l;
          n = Nh(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function lt(n) {
    return n = n[Ai] || n[oo], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function vi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(c(33));
  }
  function Dn(n) {
    return n[zs] || null;
  }
  var jt = [], Ha = -1;
  function Ia(n) {
    return { current: n };
  }
  function gn(n) {
    0 > Ha || (n.current = jt[Ha], jt[Ha] = null, Ha--);
  }
  function it(n, r) {
    Ha++, jt[Ha] = n.current, n.current = r;
  }
  var Ar = {}, Nn = Ia(Ar), rr = Ia(!1), ia = Ar;
  function oa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ar;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r) return f.__reactInternalMemoizedMaskedChildContext;
    var v = {}, y;
    for (y in l) v[y] = r[y];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function Qn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Hu() {
    gn(rr), gn(Nn);
  }
  function Mh(n, r, l) {
    if (Nn.current !== Ar) throw Error(c(168));
    it(Nn, r), it(rr, l);
  }
  function Fs(n, r, l) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function") return l;
    f = f.getChildContext();
    for (var v in f) if (!(v in r)) throw Error(c(108, Te(n) || "Unknown", v));
    return V({}, l, f);
  }
  function cr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ar, ia = Nn.current, it(Nn, n), it(rr, rr.current), !0;
  }
  function ff(n, r, l) {
    var f = n.stateNode;
    if (!f) throw Error(c(169));
    l ? (n = Fs(n, r, ia), f.__reactInternalMemoizedMergedChildContext = n, gn(rr), gn(Nn), it(Nn, n)) : gn(rr), it(rr, l);
  }
  var Ni = null, Iu = !1, lo = !1;
  function df(n) {
    Ni === null ? Ni = [n] : Ni.push(n);
  }
  function Vo(n) {
    Iu = !0, df(n);
  }
  function Mi() {
    if (!lo && Ni !== null) {
      lo = !0;
      var n = 0, r = Qt;
      try {
        var l = Ni;
        for (Qt = 1; n < l.length; n++) {
          var f = l[n];
          do
            f = f(!0);
          while (f !== null);
        }
        Ni = null, Iu = !1;
      } catch (v) {
        throw Ni !== null && (Ni = Ni.slice(n + 1)), En(ui, Mi), v;
      } finally {
        Qt = r, lo = !1;
      }
    }
    return null;
  }
  var Wo = [], Yo = 0, Qo = null, uo = 0, qn = [], Ba = 0, Ca = null, zi = 1, ji = "";
  function Fl(n, r) {
    Wo[Yo++] = uo, Wo[Yo++] = Qo, Qo = n, uo = r;
  }
  function zh(n, r, l) {
    qn[Ba++] = zi, qn[Ba++] = ji, qn[Ba++] = Ca, Ca = n;
    var f = zi;
    n = ji;
    var v = 32 - Ur(f) - 1;
    f &= ~(1 << v), l += 1;
    var y = 32 - Ur(r) + v;
    if (30 < y) {
      var _ = v - v % 5;
      y = (f & (1 << _) - 1).toString(32), f >>= _, v -= _, zi = 1 << 32 - Ur(r) + v | l << v | f, ji = y + n;
    } else zi = 1 << y | l << v | f, ji = n;
  }
  function pf(n) {
    n.return !== null && (Fl(n, 1), zh(n, 1, 0));
  }
  function vf(n) {
    for (; n === Qo; ) Qo = Wo[--Yo], Wo[Yo] = null, uo = Wo[--Yo], Wo[Yo] = null;
    for (; n === Ca; ) Ca = qn[--Ba], qn[Ba] = null, ji = qn[--Ba], qn[Ba] = null, zi = qn[--Ba], qn[Ba] = null;
  }
  var la = null, ua = null, Tn = !1, Va = null;
  function dp(n, r) {
    var l = Ga(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function jh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, la = n, ua = Li(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, la = n, ua = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ca !== null ? { id: zi, overflow: ji } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ga(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, la = n, ua = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pp(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function vp(n) {
    if (Tn) {
      var r = ua;
      if (r) {
        var l = r;
        if (!jh(n, r)) {
          if (pp(n)) throw Error(c(418));
          r = Li(l.nextSibling);
          var f = la;
          r && jh(n, r) ? dp(f, l) : (n.flags = n.flags & -4097 | 2, Tn = !1, la = n);
        }
      } else {
        if (pp(n)) throw Error(c(418));
        n.flags = n.flags & -4097 | 2, Tn = !1, la = n;
      }
    }
  }
  function ar(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    la = n;
  }
  function hf(n) {
    if (n !== la) return !1;
    if (!Tn) return ar(n), Tn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !uf(n.type, n.memoizedProps)), r && (r = ua)) {
      if (pp(n)) throw Us(), Error(c(418));
      for (; r; ) dp(n, r), r = Li(r.nextSibling);
    }
    if (ar(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ua = Li(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ua = null;
      }
    } else ua = la ? Li(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Us() {
    for (var n = ua; n; ) n = Li(n.nextSibling);
  }
  function qo() {
    ua = la = null, Tn = !1;
  }
  function so(n) {
    Va === null ? Va = [n] : Va.push(n);
  }
  var Kg = ce.ReactCurrentBatchConfig;
  function Ul(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(c(309));
          var f = l.stateNode;
        }
        if (!f) throw Error(c(147, n));
        var v = f, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(_) {
          var A = v.refs;
          _ === null ? delete A[y] : A[y] = _;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string") throw Error(c(284));
      if (!l._owner) throw Error(c(290, n));
    }
    return n;
  }
  function mf(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Fh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Hl(n) {
    function r(Y, U) {
      if (n) {
        var K = Y.deletions;
        K === null ? (Y.deletions = [U], Y.flags |= 16) : K.push(U);
      }
    }
    function l(Y, U) {
      if (!n) return null;
      for (; U !== null; ) r(Y, U), U = U.sibling;
      return null;
    }
    function f(Y, U) {
      for (Y = /* @__PURE__ */ new Map(); U !== null; ) U.key !== null ? Y.set(U.key, U) : Y.set(U.index, U), U = U.sibling;
      return Y;
    }
    function v(Y, U) {
      return Y = nl(Y, U), Y.index = 0, Y.sibling = null, Y;
    }
    function y(Y, U, K) {
      return Y.index = K, n ? (K = Y.alternate, K !== null ? (K = K.index, K < U ? (Y.flags |= 2, U) : K) : (Y.flags |= 2, U)) : (Y.flags |= 1048576, U);
    }
    function _(Y) {
      return n && Y.alternate === null && (Y.flags |= 2), Y;
    }
    function A(Y, U, K, ge) {
      return U === null || U.tag !== 6 ? (U = Wp(K, Y.mode, ge), U.return = Y, U) : (U = v(U, K), U.return = Y, U);
    }
    function z(Y, U, K, ge) {
      var Ke = K.type;
      return Ke === fe ? ye(Y, U, K.props.children, ge, K.key) : U !== null && (U.elementType === Ke || typeof Ke == "object" && Ke !== null && Ke.$$typeof === qe && Fh(Ke) === U.type) ? (ge = v(U, K.props), ge.ref = Ul(Y, U, K), ge.return = Y, ge) : (ge = mc(K.type, K.key, K.props, null, Y.mode, ge), ge.ref = Ul(Y, U, K), ge.return = Y, ge);
    }
    function te(Y, U, K, ge) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== K.containerInfo || U.stateNode.implementation !== K.implementation ? (U = Gf(K, Y.mode, ge), U.return = Y, U) : (U = v(U, K.children || []), U.return = Y, U);
    }
    function ye(Y, U, K, ge, Ke) {
      return U === null || U.tag !== 7 ? (U = mo(K, Y.mode, ge, Ke), U.return = Y, U) : (U = v(U, K), U.return = Y, U);
    }
    function Se(Y, U, K) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return U = Wp("" + U, Y.mode, K), U.return = Y, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case I:
            return K = mc(U.type, U.key, U.props, null, Y.mode, K), K.ref = Ul(Y, null, U), K.return = Y, K;
          case he:
            return U = Gf(U, Y.mode, K), U.return = Y, U;
          case qe:
            var ge = U._init;
            return Se(Y, ge(U._payload), K);
        }
        if (ur(U) || ke(U)) return U = mo(U, Y.mode, K, null), U.return = Y, U;
        mf(Y, U);
      }
      return null;
    }
    function me(Y, U, K, ge) {
      var Ke = U !== null ? U.key : null;
      if (typeof K == "string" && K !== "" || typeof K == "number") return Ke !== null ? null : A(Y, U, "" + K, ge);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case I:
            return K.key === Ke ? z(Y, U, K, ge) : null;
          case he:
            return K.key === Ke ? te(Y, U, K, ge) : null;
          case qe:
            return Ke = K._init, me(
              Y,
              U,
              Ke(K._payload),
              ge
            );
        }
        if (ur(K) || ke(K)) return Ke !== null ? null : ye(Y, U, K, ge, null);
        mf(Y, K);
      }
      return null;
    }
    function Ue(Y, U, K, ge, Ke) {
      if (typeof ge == "string" && ge !== "" || typeof ge == "number") return Y = Y.get(K) || null, A(U, Y, "" + ge, Ke);
      if (typeof ge == "object" && ge !== null) {
        switch (ge.$$typeof) {
          case I:
            return Y = Y.get(ge.key === null ? K : ge.key) || null, z(U, Y, ge, Ke);
          case he:
            return Y = Y.get(ge.key === null ? K : ge.key) || null, te(U, Y, ge, Ke);
          case qe:
            var pt = ge._init;
            return Ue(Y, U, K, pt(ge._payload), Ke);
        }
        if (ur(ge) || ke(ge)) return Y = Y.get(K) || null, ye(U, Y, ge, Ke, null);
        mf(U, ge);
      }
      return null;
    }
    function Xe(Y, U, K, ge) {
      for (var Ke = null, pt = null, ht = U, gt = U = 0, pr = null; ht !== null && gt < K.length; gt++) {
        ht.index > gt ? (pr = ht, ht = null) : pr = ht.sibling;
        var Xt = me(Y, ht, K[gt], ge);
        if (Xt === null) {
          ht === null && (ht = pr);
          break;
        }
        n && ht && Xt.alternate === null && r(Y, ht), U = y(Xt, U, gt), pt === null ? Ke = Xt : pt.sibling = Xt, pt = Xt, ht = pr;
      }
      if (gt === K.length) return l(Y, ht), Tn && Fl(Y, gt), Ke;
      if (ht === null) {
        for (; gt < K.length; gt++) ht = Se(Y, K[gt], ge), ht !== null && (U = y(ht, U, gt), pt === null ? Ke = ht : pt.sibling = ht, pt = ht);
        return Tn && Fl(Y, gt), Ke;
      }
      for (ht = f(Y, ht); gt < K.length; gt++) pr = Ue(ht, Y, gt, K[gt], ge), pr !== null && (n && pr.alternate !== null && ht.delete(pr.key === null ? gt : pr.key), U = y(pr, U, gt), pt === null ? Ke = pr : pt.sibling = pr, pt = pr);
      return n && ht.forEach(function(il) {
        return r(Y, il);
      }), Tn && Fl(Y, gt), Ke;
    }
    function et(Y, U, K, ge) {
      var Ke = ke(K);
      if (typeof Ke != "function") throw Error(c(150));
      if (K = Ke.call(K), K == null) throw Error(c(151));
      for (var pt = Ke = null, ht = U, gt = U = 0, pr = null, Xt = K.next(); ht !== null && !Xt.done; gt++, Xt = K.next()) {
        ht.index > gt ? (pr = ht, ht = null) : pr = ht.sibling;
        var il = me(Y, ht, Xt.value, ge);
        if (il === null) {
          ht === null && (ht = pr);
          break;
        }
        n && ht && il.alternate === null && r(Y, ht), U = y(il, U, gt), pt === null ? Ke = il : pt.sibling = il, pt = il, ht = pr;
      }
      if (Xt.done) return l(
        Y,
        ht
      ), Tn && Fl(Y, gt), Ke;
      if (ht === null) {
        for (; !Xt.done; gt++, Xt = K.next()) Xt = Se(Y, Xt.value, ge), Xt !== null && (U = y(Xt, U, gt), pt === null ? Ke = Xt : pt.sibling = Xt, pt = Xt);
        return Tn && Fl(Y, gt), Ke;
      }
      for (ht = f(Y, ht); !Xt.done; gt++, Xt = K.next()) Xt = Ue(ht, Y, gt, Xt.value, ge), Xt !== null && (n && Xt.alternate !== null && ht.delete(Xt.key === null ? gt : Xt.key), U = y(Xt, U, gt), pt === null ? Ke = Xt : pt.sibling = Xt, pt = Xt);
      return n && ht.forEach(function(xm) {
        return r(Y, xm);
      }), Tn && Fl(Y, gt), Ke;
    }
    function Bn(Y, U, K, ge) {
      if (typeof K == "object" && K !== null && K.type === fe && K.key === null && (K = K.props.children), typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case I:
            e: {
              for (var Ke = K.key, pt = U; pt !== null; ) {
                if (pt.key === Ke) {
                  if (Ke = K.type, Ke === fe) {
                    if (pt.tag === 7) {
                      l(Y, pt.sibling), U = v(pt, K.props.children), U.return = Y, Y = U;
                      break e;
                    }
                  } else if (pt.elementType === Ke || typeof Ke == "object" && Ke !== null && Ke.$$typeof === qe && Fh(Ke) === pt.type) {
                    l(Y, pt.sibling), U = v(pt, K.props), U.ref = Ul(Y, pt, K), U.return = Y, Y = U;
                    break e;
                  }
                  l(Y, pt);
                  break;
                } else r(Y, pt);
                pt = pt.sibling;
              }
              K.type === fe ? (U = mo(K.props.children, Y.mode, ge, K.key), U.return = Y, Y = U) : (ge = mc(K.type, K.key, K.props, null, Y.mode, ge), ge.ref = Ul(Y, U, K), ge.return = Y, Y = ge);
            }
            return _(Y);
          case he:
            e: {
              for (pt = K.key; U !== null; ) {
                if (U.key === pt) if (U.tag === 4 && U.stateNode.containerInfo === K.containerInfo && U.stateNode.implementation === K.implementation) {
                  l(Y, U.sibling), U = v(U, K.children || []), U.return = Y, Y = U;
                  break e;
                } else {
                  l(Y, U);
                  break;
                }
                else r(Y, U);
                U = U.sibling;
              }
              U = Gf(K, Y.mode, ge), U.return = Y, Y = U;
            }
            return _(Y);
          case qe:
            return pt = K._init, Bn(Y, U, pt(K._payload), ge);
        }
        if (ur(K)) return Xe(Y, U, K, ge);
        if (ke(K)) return et(Y, U, K, ge);
        mf(Y, K);
      }
      return typeof K == "string" && K !== "" || typeof K == "number" ? (K = "" + K, U !== null && U.tag === 6 ? (l(Y, U.sibling), U = v(U, K), U.return = Y, Y = U) : (l(Y, U), U = Wp(K, Y.mode, ge), U.return = Y, Y = U), _(Y)) : l(Y, U);
    }
    return Bn;
  }
  var Fn = Hl(!0), Me = Hl(!1), wa = Ia(null), sa = null, Bu = null, hp = null;
  function mp() {
    hp = Bu = sa = null;
  }
  function yp(n) {
    var r = wa.current;
    gn(wa), n._currentValue = r;
  }
  function gp(n, r, l) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Pn(n, r) {
    sa = n, hp = Bu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Xn = !0), n.firstContext = null);
  }
  function Wa(n) {
    var r = n._currentValue;
    if (hp !== n) if (n = { context: n, memoizedValue: r, next: null }, Bu === null) {
      if (sa === null) throw Error(c(308));
      Bu = n, sa.dependencies = { lanes: 0, firstContext: n };
    } else Bu = Bu.next = n;
    return r;
  }
  var Il = null;
  function Sp(n) {
    Il === null ? Il = [n] : Il.push(n);
  }
  function bp(n, r, l, f) {
    var v = r.interleaved;
    return v === null ? (l.next = l, Sp(r)) : (l.next = v.next, v.next = l), r.interleaved = l, _a(n, f);
  }
  function _a(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ra = !1;
  function xp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Uh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function co(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Go(n, r, l) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, Ft & 2) {
      var v = f.pending;
      return v === null ? r.next = r : (r.next = v.next, v.next = r), f.pending = r, _a(n, l);
    }
    return v = f.interleaved, v === null ? (r.next = r, Sp(f)) : (r.next = v.next, v.next = r), f.interleaved = r, _a(n, l);
  }
  function yf(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, l |= f, r.lanes = l, to(n, l);
    }
  }
  function Hh(n, r) {
    var l = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, l === f)) {
      var v = null, y = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var _ = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          y === null ? v = y = _ : y = y.next = _, l = l.next;
        } while (l !== null);
        y === null ? v = y = r : y = y.next = r;
      } else v = y = r;
      l = { baseState: f.baseState, firstBaseUpdate: v, lastBaseUpdate: y, shared: f.shared, effects: f.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Hs(n, r, l, f) {
    var v = n.updateQueue;
    Ra = !1;
    var y = v.firstBaseUpdate, _ = v.lastBaseUpdate, A = v.shared.pending;
    if (A !== null) {
      v.shared.pending = null;
      var z = A, te = z.next;
      z.next = null, _ === null ? y = te : _.next = te, _ = z;
      var ye = n.alternate;
      ye !== null && (ye = ye.updateQueue, A = ye.lastBaseUpdate, A !== _ && (A === null ? ye.firstBaseUpdate = te : A.next = te, ye.lastBaseUpdate = z));
    }
    if (y !== null) {
      var Se = v.baseState;
      _ = 0, ye = te = z = null, A = y;
      do {
        var me = A.lane, Ue = A.eventTime;
        if ((f & me) === me) {
          ye !== null && (ye = ye.next = {
            eventTime: Ue,
            lane: 0,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null
          });
          e: {
            var Xe = n, et = A;
            switch (me = r, Ue = l, et.tag) {
              case 1:
                if (Xe = et.payload, typeof Xe == "function") {
                  Se = Xe.call(Ue, Se, me);
                  break e;
                }
                Se = Xe;
                break e;
              case 3:
                Xe.flags = Xe.flags & -65537 | 128;
              case 0:
                if (Xe = et.payload, me = typeof Xe == "function" ? Xe.call(Ue, Se, me) : Xe, me == null) break e;
                Se = V({}, Se, me);
                break e;
              case 2:
                Ra = !0;
            }
          }
          A.callback !== null && A.lane !== 0 && (n.flags |= 64, me = v.effects, me === null ? v.effects = [A] : me.push(A));
        } else Ue = { eventTime: Ue, lane: me, tag: A.tag, payload: A.payload, callback: A.callback, next: null }, ye === null ? (te = ye = Ue, z = Se) : ye = ye.next = Ue, _ |= me;
        if (A = A.next, A === null) {
          if (A = v.shared.pending, A === null) break;
          me = A, A = me.next, me.next = null, v.lastBaseUpdate = me, v.shared.pending = null;
        }
      } while (!0);
      if (ye === null && (z = Se), v.baseState = z, v.firstBaseUpdate = te, v.lastBaseUpdate = ye, r = v.shared.interleaved, r !== null) {
        v = r;
        do
          _ |= v.lane, v = v.next;
        while (v !== r);
      } else y === null && (v.shared.lanes = 0);
      Bi |= _, n.lanes = _, n.memoizedState = Se;
    }
  }
  function Ep(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var f = n[r], v = f.callback;
      if (v !== null) {
        if (f.callback = null, f = l, typeof v != "function") throw Error(c(191, v));
        v.call(f);
      }
    }
  }
  var Is = {}, Fi = Ia(Is), Bs = Ia(Is), Vs = Ia(Is);
  function Bl(n) {
    if (n === Is) throw Error(c(174));
    return n;
  }
  function Cp(n, r) {
    switch (it(Vs, r), it(Bs, n), it(Fi, Is), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ba(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ba(r, n);
    }
    gn(Fi), it(Fi, r);
  }
  function Vl() {
    gn(Fi), gn(Bs), gn(Vs);
  }
  function Ih(n) {
    Bl(Vs.current);
    var r = Bl(Fi.current), l = ba(r, n.type);
    r !== l && (it(Bs, n), it(Fi, l));
  }
  function gf(n) {
    Bs.current === n && (gn(Fi), gn(Bs));
  }
  var Ln = Ia(0);
  function Sf(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ws = [];
  function ut() {
    for (var n = 0; n < Ws.length; n++) Ws[n]._workInProgressVersionPrimary = null;
    Ws.length = 0;
  }
  var Dt = ce.ReactCurrentDispatcher, qt = ce.ReactCurrentBatchConfig, un = 0, Gt = null, Gn = null, fr = null, bf = !1, Ys = !1, Wl = 0, ve = 0;
  function Vt() {
    throw Error(c(321));
  }
  function mt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!pi(n[l], r[l])) return !1;
    return !0;
  }
  function Xo(n, r, l, f, v, y) {
    if (un = y, Gt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dt.current = n === null || n.memoizedState === null ? Nf : Js, n = l(f, v), Ys) {
      y = 0;
      do {
        if (Ys = !1, Wl = 0, 25 <= y) throw Error(c(301));
        y += 1, fr = Gn = null, r.updateQueue = null, Dt.current = Mf, n = l(f, v);
      } while (Ys);
    }
    if (Dt.current = Xl, r = Gn !== null && Gn.next !== null, un = 0, fr = Gn = Gt = null, bf = !1, r) throw Error(c(300));
    return n;
  }
  function hi() {
    var n = Wl !== 0;
    return Wl = 0, n;
  }
  function Nr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return fr === null ? Gt.memoizedState = fr = n : fr = fr.next = n, fr;
  }
  function Un() {
    if (Gn === null) {
      var n = Gt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Gn.next;
    var r = fr === null ? Gt.memoizedState : fr.next;
    if (r !== null) fr = r, Gn = n;
    else {
      if (n === null) throw Error(c(310));
      Gn = n, n = { memoizedState: Gn.memoizedState, baseState: Gn.baseState, baseQueue: Gn.baseQueue, queue: Gn.queue, next: null }, fr === null ? Gt.memoizedState = fr = n : fr = fr.next = n;
    }
    return fr;
  }
  function fo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ko(n) {
    var r = Un(), l = r.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var f = Gn, v = f.baseQueue, y = l.pending;
    if (y !== null) {
      if (v !== null) {
        var _ = v.next;
        v.next = y.next, y.next = _;
      }
      f.baseQueue = v = y, l.pending = null;
    }
    if (v !== null) {
      y = v.next, f = f.baseState;
      var A = _ = null, z = null, te = y;
      do {
        var ye = te.lane;
        if ((un & ye) === ye) z !== null && (z = z.next = { lane: 0, action: te.action, hasEagerState: te.hasEagerState, eagerState: te.eagerState, next: null }), f = te.hasEagerState ? te.eagerState : n(f, te.action);
        else {
          var Se = {
            lane: ye,
            action: te.action,
            hasEagerState: te.hasEagerState,
            eagerState: te.eagerState,
            next: null
          };
          z === null ? (A = z = Se, _ = f) : z = z.next = Se, Gt.lanes |= ye, Bi |= ye;
        }
        te = te.next;
      } while (te !== null && te !== y);
      z === null ? _ = f : z.next = A, pi(f, r.memoizedState) || (Xn = !0), r.memoizedState = f, r.baseState = _, r.baseQueue = z, l.lastRenderedState = f;
    }
    if (n = l.interleaved, n !== null) {
      v = n;
      do
        y = v.lane, Gt.lanes |= y, Bi |= y, v = v.next;
      while (v !== n);
    } else v === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Yl(n) {
    var r = Un(), l = r.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var f = l.dispatch, v = l.pending, y = r.memoizedState;
    if (v !== null) {
      l.pending = null;
      var _ = v = v.next;
      do
        y = n(y, _.action), _ = _.next;
      while (_ !== v);
      pi(y, r.memoizedState) || (Xn = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), l.lastRenderedState = y;
    }
    return [y, f];
  }
  function xf() {
  }
  function Ef(n, r) {
    var l = Gt, f = Un(), v = r(), y = !pi(f.memoizedState, v);
    if (y && (f.memoizedState = v, Xn = !0), f = f.queue, Qs(_f.bind(null, l, f, n), [n]), f.getSnapshot !== r || y || fr !== null && fr.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ql(9, wf.bind(null, l, f, v, r), void 0, null), ir === null) throw Error(c(349));
      un & 30 || Cf(l, r, v);
    }
    return v;
  }
  function Cf(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Gt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Gt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function wf(n, r, l, f) {
    r.value = l, r.getSnapshot = f, Rf(r) && Tf(n);
  }
  function _f(n, r, l) {
    return l(function() {
      Rf(r) && Tf(n);
    });
  }
  function Rf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !pi(n, l);
    } catch {
      return !0;
    }
  }
  function Tf(n) {
    var r = _a(n, 1);
    r !== null && Yr(r, n, 1, -1);
  }
  function Of(n) {
    var r = Nr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Gl.bind(null, Gt, n), [r.memoizedState, n];
  }
  function Ql(n, r, l, f) {
    return n = { tag: n, create: r, destroy: l, deps: f, next: null }, r = Gt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Gt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (f = l.next, l.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function $f() {
    return Un().memoizedState;
  }
  function Vu(n, r, l, f) {
    var v = Nr();
    Gt.flags |= n, v.memoizedState = Ql(1 | r, l, void 0, f === void 0 ? null : f);
  }
  function Wu(n, r, l, f) {
    var v = Un();
    f = f === void 0 ? null : f;
    var y = void 0;
    if (Gn !== null) {
      var _ = Gn.memoizedState;
      if (y = _.destroy, f !== null && mt(f, _.deps)) {
        v.memoizedState = Ql(r, l, y, f);
        return;
      }
    }
    Gt.flags |= n, v.memoizedState = Ql(1 | r, l, y, f);
  }
  function kf(n, r) {
    return Vu(8390656, 8, n, r);
  }
  function Qs(n, r) {
    return Wu(2048, 8, n, r);
  }
  function Df(n, r) {
    return Wu(4, 2, n, r);
  }
  function qs(n, r) {
    return Wu(4, 4, n, r);
  }
  function ql(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Pf(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Wu(4, 4, ql.bind(null, r, n), l);
  }
  function Gs() {
  }
  function Lf(n, r) {
    var l = Un();
    r = r === void 0 ? null : r;
    var f = l.memoizedState;
    return f !== null && r !== null && mt(r, f[1]) ? f[0] : (l.memoizedState = [n, r], n);
  }
  function Af(n, r) {
    var l = Un();
    r = r === void 0 ? null : r;
    var f = l.memoizedState;
    return f !== null && r !== null && mt(r, f[1]) ? f[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function wp(n, r, l) {
    return un & 21 ? (pi(l, r) || (l = wu(), Gt.lanes |= l, Bi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Xn = !0), n.memoizedState = l);
  }
  function Xs(n, r) {
    var l = Qt;
    Qt = l !== 0 && 4 > l ? l : 4, n(!0);
    var f = qt.transition;
    qt.transition = {};
    try {
      n(!1), r();
    } finally {
      Qt = l, qt.transition = f;
    }
  }
  function _p() {
    return Un().memoizedState;
  }
  function Ks(n, r, l) {
    var f = Vi(n);
    if (l = { lane: f, action: l, hasEagerState: !1, eagerState: null, next: null }, ca(n)) Bh(r, l);
    else if (l = bp(n, r, l, f), l !== null) {
      var v = Zn();
      Yr(l, n, f, v), pn(l, r, f);
    }
  }
  function Gl(n, r, l) {
    var f = Vi(n), v = { lane: f, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ca(n)) Bh(r, v);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null)) try {
        var _ = r.lastRenderedState, A = y(_, l);
        if (v.hasEagerState = !0, v.eagerState = A, pi(A, _)) {
          var z = r.interleaved;
          z === null ? (v.next = v, Sp(r)) : (v.next = z.next, z.next = v), r.interleaved = v;
          return;
        }
      } catch {
      } finally {
      }
      l = bp(n, r, v, f), l !== null && (v = Zn(), Yr(l, n, f, v), pn(l, r, f));
    }
  }
  function ca(n) {
    var r = n.alternate;
    return n === Gt || r !== null && r === Gt;
  }
  function Bh(n, r) {
    Ys = bf = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function pn(n, r, l) {
    if (l & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, l |= f, r.lanes = l, to(n, l);
    }
  }
  var Xl = { readContext: Wa, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, Nf = { readContext: Wa, useCallback: function(n, r) {
    return Nr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Wa, useEffect: kf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Vu(
      4194308,
      4,
      ql.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Vu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Vu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Nr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var f = Nr();
    return r = l !== void 0 ? l(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = Ks.bind(null, Gt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = Nr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Of, useDebugValue: Gs, useDeferredValue: function(n) {
    return Nr().memoizedState = n;
  }, useTransition: function() {
    var n = Of(!1), r = n[0];
    return n = Xs.bind(null, n[1]), Nr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var f = Gt, v = Nr();
    if (Tn) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else {
      if (l = r(), ir === null) throw Error(c(349));
      un & 30 || Cf(f, r, l);
    }
    v.memoizedState = l;
    var y = { value: l, getSnapshot: r };
    return v.queue = y, kf(_f.bind(
      null,
      f,
      y,
      n
    ), [n]), f.flags |= 2048, Ql(9, wf.bind(null, f, y, l, r), void 0, null), l;
  }, useId: function() {
    var n = Nr(), r = ir.identifierPrefix;
    if (Tn) {
      var l = ji, f = zi;
      l = (f & ~(1 << 32 - Ur(f) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Wl++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ve++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Js = {
    readContext: Wa,
    useCallback: Lf,
    useContext: Wa,
    useEffect: Qs,
    useImperativeHandle: Pf,
    useInsertionEffect: Df,
    useLayoutEffect: qs,
    useMemo: Af,
    useReducer: Ko,
    useRef: $f,
    useState: function() {
      return Ko(fo);
    },
    useDebugValue: Gs,
    useDeferredValue: function(n) {
      var r = Un();
      return wp(r, Gn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ko(fo)[0], r = Un().memoizedState;
      return [n, r];
    },
    useMutableSource: xf,
    useSyncExternalStore: Ef,
    useId: _p,
    unstable_isNewReconciler: !1
  }, Mf = { readContext: Wa, useCallback: Lf, useContext: Wa, useEffect: Qs, useImperativeHandle: Pf, useInsertionEffect: Df, useLayoutEffect: qs, useMemo: Af, useReducer: Yl, useRef: $f, useState: function() {
    return Yl(fo);
  }, useDebugValue: Gs, useDeferredValue: function(n) {
    var r = Un();
    return Gn === null ? r.memoizedState = n : wp(r, Gn.memoizedState, n);
  }, useTransition: function() {
    var n = Yl(fo)[0], r = Un().memoizedState;
    return [n, r];
  }, useMutableSource: xf, useSyncExternalStore: Ef, useId: _p, unstable_isNewReconciler: !1 };
  function mi(n, r) {
    if (n && n.defaultProps) {
      r = V({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Rp(n, r, l, f) {
    r = n.memoizedState, l = l(f, r), l = l == null ? r : V({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var zf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ct(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var f = Zn(), v = Vi(n), y = co(f, v);
    y.payload = r, l != null && (y.callback = l), r = Go(n, y, v), r !== null && (Yr(r, n, v, f), yf(r, n, v));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var f = Zn(), v = Vi(n), y = co(f, v);
    y.tag = 1, y.payload = r, l != null && (y.callback = l), r = Go(n, y, v), r !== null && (Yr(r, n, v, f), yf(r, n, v));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Zn(), f = Vi(n), v = co(l, f);
    v.tag = 2, r != null && (v.callback = r), r = Go(n, v, f), r !== null && (Yr(r, n, f, l), yf(r, n, f));
  } };
  function Vh(n, r, l, f, v, y, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, y, _) : r.prototype && r.prototype.isPureReactComponent ? !Ds(l, f) || !Ds(v, y) : !0;
  }
  function jf(n, r, l) {
    var f = !1, v = Ar, y = r.contextType;
    return typeof y == "object" && y !== null ? y = Wa(y) : (v = Qn(r) ? ia : Nn.current, f = r.contextTypes, y = (f = f != null) ? oa(n, v) : Ar), r = new r(l, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = zf, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Wh(n, r, l, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, f), r.state !== n && zf.enqueueReplaceState(r, r.state, null);
  }
  function Zs(n, r, l, f) {
    var v = n.stateNode;
    v.props = l, v.state = n.memoizedState, v.refs = {}, xp(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? v.context = Wa(y) : (y = Qn(r) ? ia : Nn.current, v.context = oa(n, y)), v.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (Rp(n, r, y, l), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && zf.enqueueReplaceState(v, v.state, null), Hs(n, l, v, f), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Kl(n, r) {
    try {
      var l = "", f = r;
      do
        l += Ae(f), f = f.return;
      while (f);
      var v = l;
    } catch (y) {
      v = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: v, digest: null };
  }
  function Tp(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Op(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Ff = typeof WeakMap == "function" ? WeakMap : Map;
  function Yh(n, r, l) {
    l = co(-1, l), l.tag = 3, l.payload = { element: null };
    var f = r.value;
    return l.callback = function() {
      Ku || (Ku = !0, eu = f), Op(n, r);
    }, l;
  }
  function $p(n, r, l) {
    l = co(-1, l), l.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var v = r.value;
      l.payload = function() {
        return f(v);
      }, l.callback = function() {
        Op(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      Op(n, r), typeof f != "function" && (el === null ? el = /* @__PURE__ */ new Set([this]) : el.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), l;
  }
  function kp(n, r, l) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new Ff();
      var v = /* @__PURE__ */ new Set();
      f.set(r, v);
    } else v = f.get(r), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(r, v));
    v.has(l) || (v.add(l), n = a0.bind(null, n, r, l), r.then(n, n));
  }
  function Qh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Jo(n, r, l, f, v) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = v, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = co(-1, 1), r.tag = 2, Go(l, r, 1))), l.lanes |= 1), n);
  }
  var ec = ce.ReactCurrentOwner, Xn = !1;
  function Sr(n, r, l, f) {
    r.child = n === null ? Me(r, null, l, f) : Fn(r, n.child, l, f);
  }
  function fa(n, r, l, f, v) {
    l = l.render;
    var y = r.ref;
    return Pn(r, v), f = Xo(n, r, l, f, y, v), l = hi(), n !== null && !Xn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Qa(n, r, v)) : (Tn && l && pf(r), r.flags |= 1, Sr(n, r, f, v), r.child);
  }
  function Jl(n, r, l, f, v) {
    if (n === null) {
      var y = l.type;
      return typeof y == "function" && !Vp(y) && y.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = y, _t(n, r, y, f, v)) : (n = mc(l.type, null, f, r, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & v)) {
      var _ = y.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ds, l(_, f) && n.ref === r.ref) return Qa(n, r, v);
    }
    return r.flags |= 1, n = nl(y, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function _t(n, r, l, f, v) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (Ds(y, f) && n.ref === r.ref) if (Xn = !1, r.pendingProps = f = y, (n.lanes & v) !== 0) n.flags & 131072 && (Xn = !0);
      else return r.lanes = n.lanes, Qa(n, r, v);
    }
    return qh(n, r, l, f, v);
  }
  function tc(n, r, l) {
    var f = r.pendingProps, v = f.children, y = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, it(qu, Ta), Ta |= l;
    else {
      if (!(l & 1073741824)) return n = y !== null ? y.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, it(qu, Ta), Ta |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = y !== null ? y.baseLanes : l, it(qu, Ta), Ta |= f;
    }
    else y !== null ? (f = y.baseLanes | l, r.memoizedState = null) : f = l, it(qu, Ta), Ta |= f;
    return Sr(n, r, v, l), r.child;
  }
  function Dp(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qh(n, r, l, f, v) {
    var y = Qn(l) ? ia : Nn.current;
    return y = oa(r, y), Pn(r, v), l = Xo(n, r, l, f, y, v), f = hi(), n !== null && !Xn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Qa(n, r, v)) : (Tn && f && pf(r), r.flags |= 1, Sr(n, r, l, v), r.child);
  }
  function Gh(n, r, l, f, v) {
    if (Qn(l)) {
      var y = !0;
      cr(r);
    } else y = !1;
    if (Pn(r, v), r.stateNode === null) Ya(n, r), jf(r, l, f), Zs(r, l, f, v), f = !0;
    else if (n === null) {
      var _ = r.stateNode, A = r.memoizedProps;
      _.props = A;
      var z = _.context, te = l.contextType;
      typeof te == "object" && te !== null ? te = Wa(te) : (te = Qn(l) ? ia : Nn.current, te = oa(r, te));
      var ye = l.getDerivedStateFromProps, Se = typeof ye == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      Se || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (A !== f || z !== te) && Wh(r, _, f, te), Ra = !1;
      var me = r.memoizedState;
      _.state = me, Hs(r, f, _, v), z = r.memoizedState, A !== f || me !== z || rr.current || Ra ? (typeof ye == "function" && (Rp(r, l, ye, f), z = r.memoizedState), (A = Ra || Vh(r, l, A, f, me, z, te)) ? (Se || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = z), _.props = f, _.state = z, _.context = te, f = A) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      _ = r.stateNode, Uh(n, r), A = r.memoizedProps, te = r.type === r.elementType ? A : mi(r.type, A), _.props = te, Se = r.pendingProps, me = _.context, z = l.contextType, typeof z == "object" && z !== null ? z = Wa(z) : (z = Qn(l) ? ia : Nn.current, z = oa(r, z));
      var Ue = l.getDerivedStateFromProps;
      (ye = typeof Ue == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (A !== Se || me !== z) && Wh(r, _, f, z), Ra = !1, me = r.memoizedState, _.state = me, Hs(r, f, _, v);
      var Xe = r.memoizedState;
      A !== Se || me !== Xe || rr.current || Ra ? (typeof Ue == "function" && (Rp(r, l, Ue, f), Xe = r.memoizedState), (te = Ra || Vh(r, l, te, f, me, Xe, z) || !1) ? (ye || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(f, Xe, z), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(f, Xe, z)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || A === n.memoizedProps && me === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || A === n.memoizedProps && me === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Xe), _.props = f, _.state = Xe, _.context = z, f = te) : (typeof _.componentDidUpdate != "function" || A === n.memoizedProps && me === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || A === n.memoizedProps && me === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return nc(n, r, l, f, y, v);
  }
  function nc(n, r, l, f, v, y) {
    Dp(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!f && !_) return v && ff(r, l, !1), Qa(n, r, y);
    f = r.stateNode, ec.current = r;
    var A = _ && typeof l.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && _ ? (r.child = Fn(r, n.child, null, y), r.child = Fn(r, null, A, y)) : Sr(n, r, A, y), r.memoizedState = f.state, v && ff(r, l, !0), r.child;
  }
  function Yu(n) {
    var r = n.stateNode;
    r.pendingContext ? Mh(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Mh(n, r.context, !1), Cp(n, r.containerInfo);
  }
  function Xh(n, r, l, f, v) {
    return qo(), so(v), r.flags |= 256, Sr(n, r, l, f), r.child;
  }
  var Uf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Hf(n, r, l) {
    var f = r.pendingProps, v = Ln.current, y = !1, _ = (r.flags & 128) !== 0, A;
    if ((A = _) || (A = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), A ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), it(Ln, v & 1), n === null)
      return vp(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (_ = f.children, n = f.fallback, y ? (f = r.mode, y = r.child, _ = { mode: "hidden", children: _ }, !(f & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = _) : y = rl(_, f, 0, null), n = mo(n, f, l, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = Pp(l), r.memoizedState = Uf, n) : Lp(r, _));
    if (v = n.memoizedState, v !== null && (A = v.dehydrated, A !== null)) return Kh(n, r, _, f, A, v, l);
    if (y) {
      y = f.fallback, _ = r.mode, v = n.child, A = v.sibling;
      var z = { mode: "hidden", children: f.children };
      return !(_ & 1) && r.child !== v ? (f = r.child, f.childLanes = 0, f.pendingProps = z, r.deletions = null) : (f = nl(v, z), f.subtreeFlags = v.subtreeFlags & 14680064), A !== null ? y = nl(A, y) : (y = mo(y, _, l, null), y.flags |= 2), y.return = r, f.return = r, f.sibling = y, r.child = f, f = y, y = r.child, _ = n.child.memoizedState, _ = _ === null ? Pp(l) : { baseLanes: _.baseLanes | l, cachePool: null, transitions: _.transitions }, y.memoizedState = _, y.childLanes = n.childLanes & ~l, r.memoizedState = Uf, f;
    }
    return y = n.child, n = y.sibling, f = nl(y, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = l), f.return = r, f.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function Lp(n, r) {
    return r = rl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function rc(n, r, l, f) {
    return f !== null && so(f), Fn(r, n.child, null, l), n = Lp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Kh(n, r, l, f, v, y, _) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, f = Tp(Error(c(422))), rc(n, r, _, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = f.fallback, v = r.mode, f = rl({ mode: "visible", children: f.children }, v, 0, null), y = mo(y, v, _, null), y.flags |= 2, f.return = r, y.return = r, f.sibling = y, r.child = f, r.mode & 1 && Fn(r, n.child, null, _), r.child.memoizedState = Pp(_), r.memoizedState = Uf, y);
    if (!(r.mode & 1)) return rc(n, r, _, null);
    if (v.data === "$!") {
      if (f = v.nextSibling && v.nextSibling.dataset, f) var A = f.dgst;
      return f = A, y = Error(c(419)), f = Tp(y, f, void 0), rc(n, r, _, f);
    }
    if (A = (_ & n.childLanes) !== 0, Xn || A) {
      if (f = ir, f !== null) {
        switch (_ & -_) {
          case 4:
            v = 2;
            break;
          case 16:
            v = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            v = 32;
            break;
          case 536870912:
            v = 268435456;
            break;
          default:
            v = 0;
        }
        v = v & (f.suspendedLanes | _) ? 0 : v, v !== 0 && v !== y.retryLane && (y.retryLane = v, _a(n, v), Yr(f, n, v, -1));
      }
      return Bp(), f = Tp(Error(c(421))), rc(n, r, _, f);
    }
    return v.data === "$?" ? (r.flags |= 128, r.child = n.child, r = i0.bind(null, n), v._reactRetry = r, null) : (n = y.treeContext, ua = Li(v.nextSibling), la = r, Tn = !0, Va = null, n !== null && (qn[Ba++] = zi, qn[Ba++] = ji, qn[Ba++] = Ca, zi = n.id, ji = n.overflow, Ca = r), r = Lp(r, f.children), r.flags |= 4096, r);
  }
  function Ap(n, r, l) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), gp(n.return, r, l);
  }
  function Br(n, r, l, f, v) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: l, tailMode: v } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = f, y.tail = l, y.tailMode = v);
  }
  function Ui(n, r, l) {
    var f = r.pendingProps, v = f.revealOrder, y = f.tail;
    if (Sr(n, r, f.children, l), f = Ln.current, f & 2) f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ap(n, l, r);
        else if (n.tag === 19) Ap(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      f &= 1;
    }
    if (it(Ln, f), !(r.mode & 1)) r.memoizedState = null;
    else switch (v) {
      case "forwards":
        for (l = r.child, v = null; l !== null; ) n = l.alternate, n !== null && Sf(n) === null && (v = l), l = l.sibling;
        l = v, l === null ? (v = r.child, r.child = null) : (v = l.sibling, l.sibling = null), Br(r, !1, v, l, y);
        break;
      case "backwards":
        for (l = null, v = r.child, r.child = null; v !== null; ) {
          if (n = v.alternate, n !== null && Sf(n) === null) {
            r.child = v;
            break;
          }
          n = v.sibling, v.sibling = l, l = v, v = n;
        }
        Br(r, !0, l, null, y);
        break;
      case "together":
        Br(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ya(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Qa(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Bi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, l = nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ac(n, r, l) {
    switch (r.tag) {
      case 3:
        Yu(r), qo();
        break;
      case 5:
        Ih(r);
        break;
      case 1:
        Qn(r.type) && cr(r);
        break;
      case 4:
        Cp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, v = r.memoizedProps.value;
        it(wa, f._currentValue), f._currentValue = v;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (it(Ln, Ln.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Hf(n, r, l) : (it(Ln, Ln.current & 1), n = Qa(n, r, l), n !== null ? n.sibling : null);
        it(Ln, Ln.current & 1);
        break;
      case 19:
        if (f = (l & r.childLanes) !== 0, n.flags & 128) {
          if (f) return Ui(n, r, l);
          r.flags |= 128;
        }
        if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), it(Ln, Ln.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, tc(n, r, l);
    }
    return Qa(n, r, l);
  }
  var qa, Kn, Jh, Zh;
  qa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Kn = function() {
  }, Jh = function(n, r, l, f) {
    var v = n.memoizedProps;
    if (v !== f) {
      n = r.stateNode, Bl(Fi.current);
      var y = null;
      switch (l) {
        case "input":
          v = bn(n, v), f = bn(n, f), y = [];
          break;
        case "select":
          v = V({}, v, { value: void 0 }), f = V({}, f, { value: void 0 }), y = [];
          break;
        case "textarea":
          v = tr(n, v), f = tr(n, f), y = [];
          break;
        default:
          typeof v.onClick != "function" && typeof f.onClick == "function" && (n.onclick = Io);
      }
      xn(l, f);
      var _;
      l = null;
      for (te in v) if (!f.hasOwnProperty(te) && v.hasOwnProperty(te) && v[te] != null) if (te === "style") {
        var A = v[te];
        for (_ in A) A.hasOwnProperty(_) && (l || (l = {}), l[_] = "");
      } else te !== "dangerouslySetInnerHTML" && te !== "children" && te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && te !== "autoFocus" && (g.hasOwnProperty(te) ? y || (y = []) : (y = y || []).push(te, null));
      for (te in f) {
        var z = f[te];
        if (A = v != null ? v[te] : void 0, f.hasOwnProperty(te) && z !== A && (z != null || A != null)) if (te === "style") if (A) {
          for (_ in A) !A.hasOwnProperty(_) || z && z.hasOwnProperty(_) || (l || (l = {}), l[_] = "");
          for (_ in z) z.hasOwnProperty(_) && A[_] !== z[_] && (l || (l = {}), l[_] = z[_]);
        } else l || (y || (y = []), y.push(
          te,
          l
        )), l = z;
        else te === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, A = A ? A.__html : void 0, z != null && A !== z && (y = y || []).push(te, z)) : te === "children" ? typeof z != "string" && typeof z != "number" || (y = y || []).push(te, "" + z) : te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && (g.hasOwnProperty(te) ? (z != null && te === "onScroll" && en("scroll", n), y || A === z || (y = [])) : (y = y || []).push(te, z));
      }
      l && (y = y || []).push("style", l);
      var te = y;
      (r.updateQueue = te) && (r.flags |= 4);
    }
  }, Zh = function(n, r, l, f) {
    l !== f && (r.flags |= 4);
  };
  function ic(n, r) {
    if (!Tn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var f = null; l !== null; ) l.alternate !== null && (f = l), l = l.sibling;
        f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
    }
  }
  function dr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, f = 0;
    if (r) for (var v = n.child; v !== null; ) l |= v.lanes | v.childLanes, f |= v.subtreeFlags & 14680064, f |= v.flags & 14680064, v.return = n, v = v.sibling;
    else for (v = n.child; v !== null; ) l |= v.lanes | v.childLanes, f |= v.subtreeFlags, f |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= f, n.childLanes = l, r;
  }
  function em(n, r, l) {
    var f = r.pendingProps;
    switch (vf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dr(r), null;
      case 1:
        return Qn(r.type) && Hu(), dr(r), null;
      case 3:
        return f = r.stateNode, Vl(), gn(rr), gn(Nn), ut(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (hf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Va !== null && (tu(Va), Va = null))), Kn(n, r), dr(r), null;
      case 5:
        gf(r);
        var v = Bl(Vs.current);
        if (l = r.type, n !== null && r.stateNode != null) Jh(n, r, l, f, v), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null) throw Error(c(166));
            return dr(r), null;
          }
          if (n = Bl(Fi.current), hf(r)) {
            f = r.stateNode, l = r.type;
            var y = r.memoizedProps;
            switch (f[Ai] = r, f[zs] = y, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                en("cancel", f), en("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                en("load", f);
                break;
              case "video":
              case "audio":
                for (v = 0; v < As.length; v++) en(As[v], f);
                break;
              case "source":
                en("error", f);
                break;
              case "img":
              case "image":
              case "link":
                en(
                  "error",
                  f
                ), en("load", f);
                break;
              case "details":
                en("toggle", f);
                break;
              case "input":
                Rn(f, y), en("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!y.multiple }, en("invalid", f);
                break;
              case "textarea":
                Dr(f, y), en("invalid", f);
            }
            xn(l, y), v = null;
            for (var _ in y) if (y.hasOwnProperty(_)) {
              var A = y[_];
              _ === "children" ? typeof A == "string" ? f.textContent !== A && (y.suppressHydrationWarning !== !0 && lf(f.textContent, A, n), v = ["children", A]) : typeof A == "number" && f.textContent !== "" + A && (y.suppressHydrationWarning !== !0 && lf(
                f.textContent,
                A,
                n
              ), v = ["children", "" + A]) : g.hasOwnProperty(_) && A != null && _ === "onScroll" && en("scroll", f);
            }
            switch (l) {
              case "input":
                At(f), Na(f, y, !0);
                break;
              case "textarea":
                At(f), Wn(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (f.onclick = Io);
            }
            f = v, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            _ = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Pr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = _.createElement(l, { is: f.is }) : (n = _.createElement(l), l === "select" && (_ = n, f.multiple ? _.multiple = !0 : f.size && (_.size = f.size))) : n = _.createElementNS(n, l), n[Ai] = r, n[zs] = f, qa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = sr(l, f), l) {
                case "dialog":
                  en("cancel", n), en("close", n), v = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  en("load", n), v = f;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < As.length; v++) en(As[v], n);
                  v = f;
                  break;
                case "source":
                  en("error", n), v = f;
                  break;
                case "img":
                case "image":
                case "link":
                  en(
                    "error",
                    n
                  ), en("load", n), v = f;
                  break;
                case "details":
                  en("toggle", n), v = f;
                  break;
                case "input":
                  Rn(n, f), v = bn(n, f), en("invalid", n);
                  break;
                case "option":
                  v = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, v = V({}, f, { value: void 0 }), en("invalid", n);
                  break;
                case "textarea":
                  Dr(n, f), v = tr(n, f), en("invalid", n);
                  break;
                default:
                  v = f;
              }
              xn(l, v), A = v;
              for (y in A) if (A.hasOwnProperty(y)) {
                var z = A[y];
                y === "style" ? vn(n, z) : y === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && wi(n, z)) : y === "children" ? typeof z == "string" ? (l !== "textarea" || z !== "") && $e(n, z) : typeof z == "number" && $e(n, "" + z) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (g.hasOwnProperty(y) ? z != null && y === "onScroll" && en("scroll", n) : z != null && se(n, y, z, _));
              }
              switch (l) {
                case "input":
                  At(n), Na(n, f, !1);
                  break;
                case "textarea":
                  At(n), Wn(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + Pe(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, y = f.value, y != null ? zn(n, !!f.multiple, y, !1) : f.defaultValue != null && zn(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (n.onclick = Io);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return dr(r), null;
      case 6:
        if (n && r.stateNode != null) Zh(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null) throw Error(c(166));
          if (l = Bl(Vs.current), Bl(Fi.current), hf(r)) {
            if (f = r.stateNode, l = r.memoizedProps, f[Ai] = r, (y = f.nodeValue !== l) && (n = la, n !== null)) switch (n.tag) {
              case 3:
                lf(f.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && lf(f.nodeValue, l, (n.mode & 1) !== 0);
            }
            y && (r.flags |= 4);
          } else f = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(f), f[Ai] = r, r.stateNode = f;
        }
        return dr(r), null;
      case 13:
        if (gn(Ln), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Tn && ua !== null && r.mode & 1 && !(r.flags & 128)) Us(), qo(), r.flags |= 98560, y = !1;
          else if (y = hf(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!y) throw Error(c(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y) throw Error(c(317));
              y[Ai] = r;
            } else qo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            dr(r), y = !1;
          } else Va !== null && (tu(Va), Va = null), y = !0;
          if (!y) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ln.current & 1 ? In === 0 && (In = 3) : Bp())), r.updateQueue !== null && (r.flags |= 4), dr(r), null);
      case 4:
        return Vl(), Kn(n, r), n === null && Mu(r.stateNode.containerInfo), dr(r), null;
      case 10:
        return yp(r.type._context), dr(r), null;
      case 17:
        return Qn(r.type) && Hu(), dr(r), null;
      case 19:
        if (gn(Ln), y = r.memoizedState, y === null) return dr(r), null;
        if (f = (r.flags & 128) !== 0, _ = y.rendering, _ === null) if (f) ic(y, !1);
        else {
          if (In !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (_ = Sf(n), _ !== null) {
              for (r.flags |= 128, ic(y, !1), f = _.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = l, l = r.child; l !== null; ) y = l, n = f, y.flags &= 14680066, _ = y.alternate, _ === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = _.childLanes, y.lanes = _.lanes, y.child = _.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = _.memoizedProps, y.memoizedState = _.memoizedState, y.updateQueue = _.updateQueue, y.type = _.type, n = _.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return it(Ln, Ln.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          y.tail !== null && wt() > Xu && (r.flags |= 128, f = !0, ic(y, !1), r.lanes = 4194304);
        }
        else {
          if (!f) if (n = Sf(_), n !== null) {
            if (r.flags |= 128, f = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ic(y, !0), y.tail === null && y.tailMode === "hidden" && !_.alternate && !Tn) return dr(r), null;
          } else 2 * wt() - y.renderingStartTime > Xu && l !== 1073741824 && (r.flags |= 128, f = !0, ic(y, !1), r.lanes = 4194304);
          y.isBackwards ? (_.sibling = r.child, r.child = _) : (l = y.last, l !== null ? l.sibling = _ : r.child = _, y.last = _);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = wt(), r.sibling = null, l = Ln.current, it(Ln, f ? l & 1 | 2 : l & 1), r) : (dr(r), null);
      case 22:
      case 23:
        return Ip(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? Ta & 1073741824 && (dr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : dr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function If(n, r) {
    switch (vf(r), r.tag) {
      case 1:
        return Qn(r.type) && Hu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Vl(), gn(rr), gn(Nn), ut(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return gf(r), null;
      case 13:
        if (gn(Ln), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(c(340));
          qo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return gn(Ln), null;
      case 4:
        return Vl(), null;
      case 10:
        return yp(r.type._context), null;
      case 22:
      case 23:
        return Ip(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var oc = !1, Mr = !1, Jg = typeof WeakSet == "function" ? WeakSet : Set, Be = null;
  function Qu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (f) {
      On(n, r, f);
    }
    else l.current = null;
  }
  function Bf(n, r, l) {
    try {
      l();
    } catch (f) {
      On(n, r, f);
    }
  }
  var tm = !1;
  function nm(n, r) {
    if (Ms = Fa, n = Ps(), Jc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var f = l.getSelection && l.getSelection();
        if (f && f.rangeCount !== 0) {
          l = f.anchorNode;
          var v = f.anchorOffset, y = f.focusNode;
          f = f.focusOffset;
          try {
            l.nodeType, y.nodeType;
          } catch {
            l = null;
            break e;
          }
          var _ = 0, A = -1, z = -1, te = 0, ye = 0, Se = n, me = null;
          t: for (; ; ) {
            for (var Ue; Se !== l || v !== 0 && Se.nodeType !== 3 || (A = _ + v), Se !== y || f !== 0 && Se.nodeType !== 3 || (z = _ + f), Se.nodeType === 3 && (_ += Se.nodeValue.length), (Ue = Se.firstChild) !== null; )
              me = Se, Se = Ue;
            for (; ; ) {
              if (Se === n) break t;
              if (me === l && ++te === v && (A = _), me === y && ++ye === f && (z = _), (Ue = Se.nextSibling) !== null) break;
              Se = me, me = Se.parentNode;
            }
            Se = Ue;
          }
          l = A === -1 || z === -1 ? null : { start: A, end: z };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (zl = { focusedElem: n, selectionRange: l }, Fa = !1, Be = r; Be !== null; ) if (r = Be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Be = n;
    else for (; Be !== null; ) {
      r = Be;
      try {
        var Xe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Xe !== null) {
              var et = Xe.memoizedProps, Bn = Xe.memoizedState, Y = r.stateNode, U = Y.getSnapshotBeforeUpdate(r.elementType === r.type ? et : mi(r.type, et), Bn);
              Y.__reactInternalSnapshotBeforeUpdate = U;
            }
            break;
          case 3:
            var K = r.stateNode.containerInfo;
            K.nodeType === 1 ? K.textContent = "" : K.nodeType === 9 && K.documentElement && K.removeChild(K.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(c(163));
        }
      } catch (ge) {
        On(r, r.return, ge);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Be = n;
        break;
      }
      Be = r.return;
    }
    return Xe = tm, tm = !1, Xe;
  }
  function lc(n, r, l) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var v = f = f.next;
      do {
        if ((v.tag & n) === n) {
          var y = v.destroy;
          v.destroy = void 0, y !== void 0 && Bf(r, l, y);
        }
        v = v.next;
      } while (v !== f);
    }
  }
  function uc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var f = l.create;
          l.destroy = f();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Np(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Vf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Vf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ai], delete r[zs], delete r[js], delete r[Uu], delete r[Xg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function sc(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function po(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || sc(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Hi(n, r, l) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Io));
    else if (f !== 4 && (n = n.child, n !== null)) for (Hi(n, r, l), n = n.sibling; n !== null; ) Hi(n, r, l), n = n.sibling;
  }
  function Ii(n, r, l) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null)) for (Ii(n, r, l), n = n.sibling; n !== null; ) Ii(n, r, l), n = n.sibling;
  }
  var Hn = null, Vr = !1;
  function Wr(n, r, l) {
    for (l = l.child; l !== null; ) rm(n, r, l), l = l.sibling;
  }
  function rm(n, r, l) {
    if (ra && typeof ra.onCommitFiberUnmount == "function") try {
      ra.onCommitFiberUnmount(Lo, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Mr || Qu(l, r);
      case 6:
        var f = Hn, v = Vr;
        Hn = null, Wr(n, r, l), Hn = f, Vr = v, Hn !== null && (Vr ? (n = Hn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Hn.removeChild(l.stateNode));
        break;
      case 18:
        Hn !== null && (Vr ? (n = Hn, l = l.stateNode, n.nodeType === 8 ? Fu(n.parentNode, l) : n.nodeType === 1 && Fu(n, l), fi(n)) : Fu(Hn, l.stateNode));
        break;
      case 4:
        f = Hn, v = Vr, Hn = l.stateNode.containerInfo, Vr = !0, Wr(n, r, l), Hn = f, Vr = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mr && (f = l.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          v = f = f.next;
          do {
            var y = v, _ = y.destroy;
            y = y.tag, _ !== void 0 && (y & 2 || y & 4) && Bf(l, r, _), v = v.next;
          } while (v !== f);
        }
        Wr(n, r, l);
        break;
      case 1:
        if (!Mr && (Qu(l, r), f = l.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = l.memoizedProps, f.state = l.memoizedState, f.componentWillUnmount();
        } catch (A) {
          On(l, r, A);
        }
        Wr(n, r, l);
        break;
      case 21:
        Wr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Mr = (f = Mr) || l.memoizedState !== null, Wr(n, r, l), Mr = f) : Wr(n, r, l);
        break;
      default:
        Wr(n, r, l);
    }
  }
  function am(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Jg()), r.forEach(function(f) {
        var v = pm.bind(null, n, f);
        l.has(f) || (l.add(f), f.then(v, v));
      });
    }
  }
  function yi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var f = 0; f < l.length; f++) {
      var v = l[f];
      try {
        var y = n, _ = r, A = _;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 5:
              Hn = A.stateNode, Vr = !1;
              break e;
            case 3:
              Hn = A.stateNode.containerInfo, Vr = !0;
              break e;
            case 4:
              Hn = A.stateNode.containerInfo, Vr = !0;
              break e;
          }
          A = A.return;
        }
        if (Hn === null) throw Error(c(160));
        rm(y, _, v), Hn = null, Vr = !1;
        var z = v.alternate;
        z !== null && (z.return = null), v.return = null;
      } catch (te) {
        On(v, r, te);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Mp(r, n), r = r.sibling;
  }
  function Mp(n, r) {
    var l = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (yi(r, n), da(n), f & 4) {
          try {
            lc(3, n, n.return), uc(3, n);
          } catch (et) {
            On(n, n.return, et);
          }
          try {
            lc(5, n, n.return);
          } catch (et) {
            On(n, n.return, et);
          }
        }
        break;
      case 1:
        yi(r, n), da(n), f & 512 && l !== null && Qu(l, l.return);
        break;
      case 5:
        if (yi(r, n), da(n), f & 512 && l !== null && Qu(l, l.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            $e(v, "");
          } catch (et) {
            On(n, n.return, et);
          }
        }
        if (f & 4 && (v = n.stateNode, v != null)) {
          var y = n.memoizedProps, _ = l !== null ? l.memoizedProps : y, A = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null) try {
            A === "input" && y.type === "radio" && y.name != null && Mn(v, y), sr(A, _);
            var te = sr(A, y);
            for (_ = 0; _ < z.length; _ += 2) {
              var ye = z[_], Se = z[_ + 1];
              ye === "style" ? vn(v, Se) : ye === "dangerouslySetInnerHTML" ? wi(v, Se) : ye === "children" ? $e(v, Se) : se(v, ye, Se, te);
            }
            switch (A) {
              case "input":
                kr(v, y);
                break;
              case "textarea":
                ri(v, y);
                break;
              case "select":
                var me = v._wrapperState.wasMultiple;
                v._wrapperState.wasMultiple = !!y.multiple;
                var Ue = y.value;
                Ue != null ? zn(v, !!y.multiple, Ue, !1) : me !== !!y.multiple && (y.defaultValue != null ? zn(
                  v,
                  !!y.multiple,
                  y.defaultValue,
                  !0
                ) : zn(v, !!y.multiple, y.multiple ? [] : "", !1));
            }
            v[zs] = y;
          } catch (et) {
            On(n, n.return, et);
          }
        }
        break;
      case 6:
        if (yi(r, n), da(n), f & 4) {
          if (n.stateNode === null) throw Error(c(162));
          v = n.stateNode, y = n.memoizedProps;
          try {
            v.nodeValue = y;
          } catch (et) {
            On(n, n.return, et);
          }
        }
        break;
      case 3:
        if (yi(r, n), da(n), f & 4 && l !== null && l.memoizedState.isDehydrated) try {
          fi(r.containerInfo);
        } catch (et) {
          On(n, n.return, et);
        }
        break;
      case 4:
        yi(r, n), da(n);
        break;
      case 13:
        yi(r, n), da(n), v = n.child, v.flags & 8192 && (y = v.memoizedState !== null, v.stateNode.isHidden = y, !y || v.alternate !== null && v.alternate.memoizedState !== null || (Fp = wt())), f & 4 && am(n);
        break;
      case 22:
        if (ye = l !== null && l.memoizedState !== null, n.mode & 1 ? (Mr = (te = Mr) || ye, yi(r, n), Mr = te) : yi(r, n), da(n), f & 8192) {
          if (te = n.memoizedState !== null, (n.stateNode.isHidden = te) && !ye && n.mode & 1) for (Be = n, ye = n.child; ye !== null; ) {
            for (Se = Be = ye; Be !== null; ) {
              switch (me = Be, Ue = me.child, me.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lc(4, me, me.return);
                  break;
                case 1:
                  Qu(me, me.return);
                  var Xe = me.stateNode;
                  if (typeof Xe.componentWillUnmount == "function") {
                    f = me, l = me.return;
                    try {
                      r = f, Xe.props = r.memoizedProps, Xe.state = r.memoizedState, Xe.componentWillUnmount();
                    } catch (et) {
                      On(f, l, et);
                    }
                  }
                  break;
                case 5:
                  Qu(me, me.return);
                  break;
                case 22:
                  if (me.memoizedState !== null) {
                    cc(Se);
                    continue;
                  }
              }
              Ue !== null ? (Ue.return = me, Be = Ue) : cc(Se);
            }
            ye = ye.sibling;
          }
          e: for (ye = null, Se = n; ; ) {
            if (Se.tag === 5) {
              if (ye === null) {
                ye = Se;
                try {
                  v = Se.stateNode, te ? (y = v.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (A = Se.stateNode, z = Se.memoizedProps.style, _ = z != null && z.hasOwnProperty("display") ? z.display : null, A.style.display = Zt("display", _));
                } catch (et) {
                  On(n, n.return, et);
                }
              }
            } else if (Se.tag === 6) {
              if (ye === null) try {
                Se.stateNode.nodeValue = te ? "" : Se.memoizedProps;
              } catch (et) {
                On(n, n.return, et);
              }
            } else if ((Se.tag !== 22 && Se.tag !== 23 || Se.memoizedState === null || Se === n) && Se.child !== null) {
              Se.child.return = Se, Se = Se.child;
              continue;
            }
            if (Se === n) break e;
            for (; Se.sibling === null; ) {
              if (Se.return === null || Se.return === n) break e;
              ye === Se && (ye = null), Se = Se.return;
            }
            ye === Se && (ye = null), Se.sibling.return = Se.return, Se = Se.sibling;
          }
        }
        break;
      case 19:
        yi(r, n), da(n), f & 4 && am(n);
        break;
      case 21:
        break;
      default:
        yi(
          r,
          n
        ), da(n);
    }
  }
  function da(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (sc(l)) {
              var f = l;
              break e;
            }
            l = l.return;
          }
          throw Error(c(160));
        }
        switch (f.tag) {
          case 5:
            var v = f.stateNode;
            f.flags & 32 && ($e(v, ""), f.flags &= -33);
            var y = po(n);
            Ii(n, y, v);
            break;
          case 3:
          case 4:
            var _ = f.stateNode.containerInfo, A = po(n);
            Hi(n, A, _);
            break;
          default:
            throw Error(c(161));
        }
      } catch (z) {
        On(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Zg(n, r, l) {
    Be = n, zp(n);
  }
  function zp(n, r, l) {
    for (var f = (n.mode & 1) !== 0; Be !== null; ) {
      var v = Be, y = v.child;
      if (v.tag === 22 && f) {
        var _ = v.memoizedState !== null || oc;
        if (!_) {
          var A = v.alternate, z = A !== null && A.memoizedState !== null || Mr;
          A = oc;
          var te = Mr;
          if (oc = _, (Mr = z) && !te) for (Be = v; Be !== null; ) _ = Be, z = _.child, _.tag === 22 && _.memoizedState !== null ? jp(v) : z !== null ? (z.return = _, Be = z) : jp(v);
          for (; y !== null; ) Be = y, zp(y), y = y.sibling;
          Be = v, oc = A, Mr = te;
        }
        im(n);
      } else v.subtreeFlags & 8772 && y !== null ? (y.return = v, Be = y) : im(n);
    }
  }
  function im(n) {
    for (; Be !== null; ) {
      var r = Be;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Mr || uc(5, r);
              break;
            case 1:
              var f = r.stateNode;
              if (r.flags & 4 && !Mr) if (l === null) f.componentDidMount();
              else {
                var v = r.elementType === r.type ? l.memoizedProps : mi(r.type, l.memoizedProps);
                f.componentDidUpdate(v, l.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var y = r.updateQueue;
              y !== null && Ep(r, y, f);
              break;
            case 3:
              var _ = r.updateQueue;
              if (_ !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Ep(r, _, l);
              }
              break;
            case 5:
              var A = r.stateNode;
              if (l === null && r.flags & 4) {
                l = A;
                var z = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    z.autoFocus && l.focus();
                    break;
                  case "img":
                    z.src && (l.src = z.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var te = r.alternate;
                if (te !== null) {
                  var ye = te.memoizedState;
                  if (ye !== null) {
                    var Se = ye.dehydrated;
                    Se !== null && fi(Se);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(c(163));
          }
          Mr || r.flags & 512 && Np(r);
        } catch (me) {
          On(r, r.return, me);
        }
      }
      if (r === n) {
        Be = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Be = l;
        break;
      }
      Be = r.return;
    }
  }
  function cc(n) {
    for (; Be !== null; ) {
      var r = Be;
      if (r === n) {
        Be = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Be = l;
        break;
      }
      Be = r.return;
    }
  }
  function jp(n) {
    for (; Be !== null; ) {
      var r = Be;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              uc(4, r);
            } catch (z) {
              On(r, l, z);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var v = r.return;
              try {
                f.componentDidMount();
              } catch (z) {
                On(r, v, z);
              }
            }
            var y = r.return;
            try {
              Np(r);
            } catch (z) {
              On(r, y, z);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              Np(r);
            } catch (z) {
              On(r, _, z);
            }
        }
      } catch (z) {
        On(r, r.return, z);
      }
      if (r === n) {
        Be = null;
        break;
      }
      var A = r.sibling;
      if (A !== null) {
        A.return = r.return, Be = A;
        break;
      }
      Be = r.return;
    }
  }
  var e0 = Math.ceil, Zo = ce.ReactCurrentDispatcher, Zl = ce.ReactCurrentOwner, br = ce.ReactCurrentBatchConfig, Ft = 0, ir = null, Jn = null, xr = 0, Ta = 0, qu = Ia(0), In = 0, fc = null, Bi = 0, Gu = 0, Wf = 0, dc = null, pa = null, Fp = 0, Xu = 1 / 0, Oa = null, Ku = !1, eu = null, el = null, Yf = !1, vo = null, pc = 0, tl = 0, Ju = null, vc = -1, zr = 0;
  function Zn() {
    return Ft & 6 ? wt() : vc !== -1 ? vc : vc = wt();
  }
  function Vi(n) {
    return n.mode & 1 ? Ft & 2 && xr !== 0 ? xr & -xr : Kg.transition !== null ? (zr === 0 && (zr = wu()), zr) : (n = Qt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Du(n.type)), n) : 1;
  }
  function Yr(n, r, l, f) {
    if (50 < tl) throw tl = 0, Ju = null, Error(c(185));
    eo(n, l, f), (!(Ft & 2) || n !== ir) && (n === ir && (!(Ft & 2) && (Gu |= l), In === 4 && gi(n, xr)), va(n, f), l === 1 && Ft === 0 && !(r.mode & 1) && (Xu = wt() + 500, Iu && Mi()));
  }
  function va(n, r) {
    var l = n.callbackNode;
    Ol(n, r);
    var f = ci(n, n === ir ? xr : 0);
    if (f === 0) l !== null && mr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (l != null && mr(l), r === 1) n.tag === 0 ? Vo(Up.bind(null, n)) : df(Up.bind(null, n)), ju(function() {
        !(Ft & 6) && Mi();
      }), l = null;
      else {
        switch (Ru(f)) {
          case 1:
            l = ui;
            break;
          case 4:
            l = Rl;
            break;
          case 16:
            l = Tl;
            break;
          case 536870912:
            l = xu;
            break;
          default:
            l = Tl;
        }
        l = hm(l, Qf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Qf(n, r) {
    if (vc = -1, zr = 0, Ft & 6) throw Error(c(327));
    var l = n.callbackNode;
    if (Zu() && n.callbackNode !== l) return null;
    var f = ci(n, n === ir ? xr : 0);
    if (f === 0) return null;
    if (f & 30 || f & n.expiredLanes || r) r = qf(n, f);
    else {
      r = f;
      var v = Ft;
      Ft |= 2;
      var y = lm();
      (ir !== n || xr !== r) && (Oa = null, Xu = wt() + 500, ho(n, r));
      do
        try {
          um();
          break;
        } catch (A) {
          om(n, A);
        }
      while (!0);
      mp(), Zo.current = y, Ft = v, Jn !== null ? r = 0 : (ir = null, xr = 0, r = In);
    }
    if (r !== 0) {
      if (r === 2 && (v = No(n), v !== 0 && (f = v, r = hc(n, v))), r === 1) throw l = fc, ho(n, 0), gi(n, f), va(n, wt()), l;
      if (r === 6) gi(n, f);
      else {
        if (v = n.current.alternate, !(f & 30) && !t0(v) && (r = qf(n, f), r === 2 && (y = No(n), y !== 0 && (f = y, r = hc(n, y))), r === 1)) throw l = fc, ho(n, 0), gi(n, f), va(n, wt()), l;
        switch (n.finishedWork = v, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            ru(n, pa, Oa);
            break;
          case 3:
            if (gi(n, f), (f & 130023424) === f && (r = Fp + 500 - wt(), 10 < r)) {
              if (ci(n, 0) !== 0) break;
              if (v = n.suspendedLanes, (v & f) !== f) {
                Zn(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = sf(ru.bind(null, n, pa, Oa), r);
              break;
            }
            ru(n, pa, Oa);
            break;
          case 4:
            if (gi(n, f), (f & 4194240) === f) break;
            for (r = n.eventTimes, v = -1; 0 < f; ) {
              var _ = 31 - Ur(f);
              y = 1 << _, _ = r[_], _ > v && (v = _), f &= ~y;
            }
            if (f = v, f = wt() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * e0(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = sf(ru.bind(null, n, pa, Oa), f);
              break;
            }
            ru(n, pa, Oa);
            break;
          case 5:
            ru(n, pa, Oa);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return va(n, wt()), n.callbackNode === l ? Qf.bind(null, n) : null;
  }
  function hc(n, r) {
    var l = dc;
    return n.current.memoizedState.isDehydrated && (ho(n, r).flags |= 256), n = qf(n, r), n !== 2 && (r = pa, pa = l, r !== null && tu(r)), n;
  }
  function tu(n) {
    pa === null ? pa = n : pa.push.apply(pa, n);
  }
  function t0(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var f = 0; f < l.length; f++) {
          var v = l[f], y = v.getSnapshot;
          v = v.value;
          try {
            if (!pi(y(), v)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function gi(n, r) {
    for (r &= ~Wf, r &= ~Gu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Ur(r), f = 1 << l;
      n[l] = -1, r &= ~f;
    }
  }
  function Up(n) {
    if (Ft & 6) throw Error(c(327));
    Zu();
    var r = ci(n, 0);
    if (!(r & 1)) return va(n, wt()), null;
    var l = qf(n, r);
    if (n.tag !== 0 && l === 2) {
      var f = No(n);
      f !== 0 && (r = f, l = hc(n, f));
    }
    if (l === 1) throw l = fc, ho(n, 0), gi(n, r), va(n, wt()), l;
    if (l === 6) throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ru(n, pa, Oa), va(n, wt()), null;
  }
  function Hp(n, r) {
    var l = Ft;
    Ft |= 1;
    try {
      return n(r);
    } finally {
      Ft = l, Ft === 0 && (Xu = wt() + 500, Iu && Mi());
    }
  }
  function nu(n) {
    vo !== null && vo.tag === 0 && !(Ft & 6) && Zu();
    var r = Ft;
    Ft |= 1;
    var l = br.transition, f = Qt;
    try {
      if (br.transition = null, Qt = 1, n) return n();
    } finally {
      Qt = f, br.transition = l, Ft = r, !(Ft & 6) && Mi();
    }
  }
  function Ip() {
    Ta = qu.current, gn(qu);
  }
  function ho(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, fp(l)), Jn !== null) for (l = Jn.return; l !== null; ) {
      var f = l;
      switch (vf(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && Hu();
          break;
        case 3:
          Vl(), gn(rr), gn(Nn), ut();
          break;
        case 5:
          gf(f);
          break;
        case 4:
          Vl();
          break;
        case 13:
          gn(Ln);
          break;
        case 19:
          gn(Ln);
          break;
        case 10:
          yp(f.type._context);
          break;
        case 22:
        case 23:
          Ip();
      }
      l = l.return;
    }
    if (ir = n, Jn = n = nl(n.current, null), xr = Ta = r, In = 0, fc = null, Wf = Gu = Bi = 0, pa = dc = null, Il !== null) {
      for (r = 0; r < Il.length; r++) if (l = Il[r], f = l.interleaved, f !== null) {
        l.interleaved = null;
        var v = f.next, y = l.pending;
        if (y !== null) {
          var _ = y.next;
          y.next = v, f.next = _;
        }
        l.pending = f;
      }
      Il = null;
    }
    return n;
  }
  function om(n, r) {
    do {
      var l = Jn;
      try {
        if (mp(), Dt.current = Xl, bf) {
          for (var f = Gt.memoizedState; f !== null; ) {
            var v = f.queue;
            v !== null && (v.pending = null), f = f.next;
          }
          bf = !1;
        }
        if (un = 0, fr = Gn = Gt = null, Ys = !1, Wl = 0, Zl.current = null, l === null || l.return === null) {
          In = 1, fc = r, Jn = null;
          break;
        }
        e: {
          var y = n, _ = l.return, A = l, z = r;
          if (r = xr, A.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var te = z, ye = A, Se = ye.tag;
            if (!(ye.mode & 1) && (Se === 0 || Se === 11 || Se === 15)) {
              var me = ye.alternate;
              me ? (ye.updateQueue = me.updateQueue, ye.memoizedState = me.memoizedState, ye.lanes = me.lanes) : (ye.updateQueue = null, ye.memoizedState = null);
            }
            var Ue = Qh(_);
            if (Ue !== null) {
              Ue.flags &= -257, Jo(Ue, _, A, y, r), Ue.mode & 1 && kp(y, te, r), r = Ue, z = te;
              var Xe = r.updateQueue;
              if (Xe === null) {
                var et = /* @__PURE__ */ new Set();
                et.add(z), r.updateQueue = et;
              } else Xe.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                kp(y, te, r), Bp();
                break e;
              }
              z = Error(c(426));
            }
          } else if (Tn && A.mode & 1) {
            var Bn = Qh(_);
            if (Bn !== null) {
              !(Bn.flags & 65536) && (Bn.flags |= 256), Jo(Bn, _, A, y, r), so(Kl(z, A));
              break e;
            }
          }
          y = z = Kl(z, A), In !== 4 && (In = 2), dc === null ? dc = [y] : dc.push(y), y = _;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var Y = Yh(y, z, r);
                Hh(y, Y);
                break e;
              case 1:
                A = z;
                var U = y.type, K = y.stateNode;
                if (!(y.flags & 128) && (typeof U.getDerivedStateFromError == "function" || K !== null && typeof K.componentDidCatch == "function" && (el === null || !el.has(K)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var ge = $p(y, A, r);
                  Hh(y, ge);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        cm(l);
      } catch (Ke) {
        r = Ke, Jn === l && l !== null && (Jn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function lm() {
    var n = Zo.current;
    return Zo.current = Xl, n === null ? Xl : n;
  }
  function Bp() {
    (In === 0 || In === 3 || In === 2) && (In = 4), ir === null || !(Bi & 268435455) && !(Gu & 268435455) || gi(ir, xr);
  }
  function qf(n, r) {
    var l = Ft;
    Ft |= 2;
    var f = lm();
    (ir !== n || xr !== r) && (Oa = null, ho(n, r));
    do
      try {
        n0();
        break;
      } catch (v) {
        om(n, v);
      }
    while (!0);
    if (mp(), Ft = l, Zo.current = f, Jn !== null) throw Error(c(261));
    return ir = null, xr = 0, In;
  }
  function n0() {
    for (; Jn !== null; ) sm(Jn);
  }
  function um() {
    for (; Jn !== null && !oi(); ) sm(Jn);
  }
  function sm(n) {
    var r = vm(n.alternate, n, Ta);
    n.memoizedProps = n.pendingProps, r === null ? cm(n) : Jn = r, Zl.current = null;
  }
  function cm(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = If(l, r), l !== null) {
          l.flags &= 32767, Jn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          In = 6, Jn = null;
          return;
        }
      } else if (l = em(l, r, Ta), l !== null) {
        Jn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Jn = r;
        return;
      }
      Jn = r = n;
    } while (r !== null);
    In === 0 && (In = 5);
  }
  function ru(n, r, l) {
    var f = Qt, v = br.transition;
    try {
      br.transition = null, Qt = 1, r0(n, r, l, f);
    } finally {
      br.transition = v, Qt = f;
    }
    return null;
  }
  function r0(n, r, l, f) {
    do
      Zu();
    while (vo !== null);
    if (Ft & 6) throw Error(c(327));
    l = n.finishedWork;
    var v = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = l.lanes | l.childLanes;
    if (Vd(n, y), n === ir && (Jn = ir = null, xr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Yf || (Yf = !0, hm(Tl, function() {
      return Zu(), null;
    })), y = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || y) {
      y = br.transition, br.transition = null;
      var _ = Qt;
      Qt = 1;
      var A = Ft;
      Ft |= 4, Zl.current = null, nm(n, l), Mp(l, n), Au(zl), Fa = !!Ms, zl = Ms = null, n.current = l, Zg(l), li(), Ft = A, Qt = _, br.transition = y;
    } else n.current = l;
    if (Yf && (Yf = !1, vo = n, pc = v), y = n.pendingLanes, y === 0 && (el = null), Es(l.stateNode), va(n, wt()), r !== null) for (f = n.onRecoverableError, l = 0; l < r.length; l++) v = r[l], f(v.value, { componentStack: v.stack, digest: v.digest });
    if (Ku) throw Ku = !1, n = eu, eu = null, n;
    return pc & 1 && n.tag !== 0 && Zu(), y = n.pendingLanes, y & 1 ? n === Ju ? tl++ : (tl = 0, Ju = n) : tl = 0, Mi(), null;
  }
  function Zu() {
    if (vo !== null) {
      var n = Ru(pc), r = br.transition, l = Qt;
      try {
        if (br.transition = null, Qt = 16 > n ? 16 : n, vo === null) var f = !1;
        else {
          if (n = vo, vo = null, pc = 0, Ft & 6) throw Error(c(331));
          var v = Ft;
          for (Ft |= 4, Be = n.current; Be !== null; ) {
            var y = Be, _ = y.child;
            if (Be.flags & 16) {
              var A = y.deletions;
              if (A !== null) {
                for (var z = 0; z < A.length; z++) {
                  var te = A[z];
                  for (Be = te; Be !== null; ) {
                    var ye = Be;
                    switch (ye.tag) {
                      case 0:
                      case 11:
                      case 15:
                        lc(8, ye, y);
                    }
                    var Se = ye.child;
                    if (Se !== null) Se.return = ye, Be = Se;
                    else for (; Be !== null; ) {
                      ye = Be;
                      var me = ye.sibling, Ue = ye.return;
                      if (Vf(ye), ye === te) {
                        Be = null;
                        break;
                      }
                      if (me !== null) {
                        me.return = Ue, Be = me;
                        break;
                      }
                      Be = Ue;
                    }
                  }
                }
                var Xe = y.alternate;
                if (Xe !== null) {
                  var et = Xe.child;
                  if (et !== null) {
                    Xe.child = null;
                    do {
                      var Bn = et.sibling;
                      et.sibling = null, et = Bn;
                    } while (et !== null);
                  }
                }
                Be = y;
              }
            }
            if (y.subtreeFlags & 2064 && _ !== null) _.return = y, Be = _;
            else e: for (; Be !== null; ) {
              if (y = Be, y.flags & 2048) switch (y.tag) {
                case 0:
                case 11:
                case 15:
                  lc(9, y, y.return);
              }
              var Y = y.sibling;
              if (Y !== null) {
                Y.return = y.return, Be = Y;
                break e;
              }
              Be = y.return;
            }
          }
          var U = n.current;
          for (Be = U; Be !== null; ) {
            _ = Be;
            var K = _.child;
            if (_.subtreeFlags & 2064 && K !== null) K.return = _, Be = K;
            else e: for (_ = U; Be !== null; ) {
              if (A = Be, A.flags & 2048) try {
                switch (A.tag) {
                  case 0:
                  case 11:
                  case 15:
                    uc(9, A);
                }
              } catch (Ke) {
                On(A, A.return, Ke);
              }
              if (A === _) {
                Be = null;
                break e;
              }
              var ge = A.sibling;
              if (ge !== null) {
                ge.return = A.return, Be = ge;
                break e;
              }
              Be = A.return;
            }
          }
          if (Ft = v, Mi(), ra && typeof ra.onPostCommitFiberRoot == "function") try {
            ra.onPostCommitFiberRoot(Lo, n);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        Qt = l, br.transition = r;
      }
    }
    return !1;
  }
  function fm(n, r, l) {
    r = Kl(l, r), r = Yh(n, r, 1), n = Go(n, r, 1), r = Zn(), n !== null && (eo(n, 1, r), va(n, r));
  }
  function On(n, r, l) {
    if (n.tag === 3) fm(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        fm(r, n, l);
        break;
      } else if (r.tag === 1) {
        var f = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (el === null || !el.has(f))) {
          n = Kl(l, n), n = $p(r, n, 1), r = Go(r, n, 1), n = Zn(), r !== null && (eo(r, 1, n), va(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function a0(n, r, l) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = Zn(), n.pingedLanes |= n.suspendedLanes & l, ir === n && (xr & l) === l && (In === 4 || In === 3 && (xr & 130023424) === xr && 500 > wt() - Fp ? ho(n, 0) : Wf |= l), va(n, r);
  }
  function dm(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ea, Ea <<= 1, !(Ea & 130023424) && (Ea = 4194304)) : r = 1);
    var l = Zn();
    n = _a(n, r), n !== null && (eo(n, r, l), va(n, l));
  }
  function i0(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), dm(n, l);
  }
  function pm(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, v = n.memoizedState;
        v !== null && (l = v.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    f !== null && f.delete(r), dm(n, l);
  }
  var vm;
  vm = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || rr.current) Xn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Xn = !1, ac(n, r, l);
      Xn = !!(n.flags & 131072);
    }
    else Xn = !1, Tn && r.flags & 1048576 && zh(r, uo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        Ya(n, r), n = r.pendingProps;
        var v = oa(r, Nn.current);
        Pn(r, l), v = Xo(null, r, f, n, v, l);
        var y = hi();
        return r.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Qn(f) ? (y = !0, cr(r)) : y = !1, r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, xp(r), v.updater = zf, r.stateNode = v, v._reactInternals = r, Zs(r, f, n, l), r = nc(null, r, f, !0, y, l)) : (r.tag = 0, Tn && y && pf(r), Sr(null, r, v, l), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (Ya(n, r), n = r.pendingProps, v = f._init, f = v(f._payload), r.type = f, v = r.tag = l0(f), n = mi(f, n), v) {
            case 0:
              r = qh(null, r, f, n, l);
              break e;
            case 1:
              r = Gh(null, r, f, n, l);
              break e;
            case 11:
              r = fa(null, r, f, n, l);
              break e;
            case 14:
              r = Jl(null, r, f, mi(f.type, n), l);
              break e;
          }
          throw Error(c(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : mi(f, v), qh(n, r, f, v, l);
      case 1:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : mi(f, v), Gh(n, r, f, v, l);
      case 3:
        e: {
          if (Yu(r), n === null) throw Error(c(387));
          f = r.pendingProps, y = r.memoizedState, v = y.element, Uh(n, r), Hs(r, f, null, l);
          var _ = r.memoizedState;
          if (f = _.element, y.isDehydrated) if (y = { element: f, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
            v = Kl(Error(c(423)), r), r = Xh(n, r, f, l, v);
            break e;
          } else if (f !== v) {
            v = Kl(Error(c(424)), r), r = Xh(n, r, f, l, v);
            break e;
          } else for (ua = Li(r.stateNode.containerInfo.firstChild), la = r, Tn = !0, Va = null, l = Me(r, null, f, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (qo(), f === v) {
              r = Qa(n, r, l);
              break e;
            }
            Sr(n, r, f, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ih(r), n === null && vp(r), f = r.type, v = r.pendingProps, y = n !== null ? n.memoizedProps : null, _ = v.children, uf(f, v) ? _ = null : y !== null && uf(f, y) && (r.flags |= 32), Dp(n, r), Sr(n, r, _, l), r.child;
      case 6:
        return n === null && vp(r), null;
      case 13:
        return Hf(n, r, l);
      case 4:
        return Cp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = Fn(r, null, f, l) : Sr(n, r, f, l), r.child;
      case 11:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : mi(f, v), fa(n, r, f, v, l);
      case 7:
        return Sr(n, r, r.pendingProps, l), r.child;
      case 8:
        return Sr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Sr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (f = r.type._context, v = r.pendingProps, y = r.memoizedProps, _ = v.value, it(wa, f._currentValue), f._currentValue = _, y !== null) if (pi(y.value, _)) {
            if (y.children === v.children && !rr.current) {
              r = Qa(n, r, l);
              break e;
            }
          } else for (y = r.child, y !== null && (y.return = r); y !== null; ) {
            var A = y.dependencies;
            if (A !== null) {
              _ = y.child;
              for (var z = A.firstContext; z !== null; ) {
                if (z.context === f) {
                  if (y.tag === 1) {
                    z = co(-1, l & -l), z.tag = 2;
                    var te = y.updateQueue;
                    if (te !== null) {
                      te = te.shared;
                      var ye = te.pending;
                      ye === null ? z.next = z : (z.next = ye.next, ye.next = z), te.pending = z;
                    }
                  }
                  y.lanes |= l, z = y.alternate, z !== null && (z.lanes |= l), gp(
                    y.return,
                    l,
                    r
                  ), A.lanes |= l;
                  break;
                }
                z = z.next;
              }
            } else if (y.tag === 10) _ = y.type === r.type ? null : y.child;
            else if (y.tag === 18) {
              if (_ = y.return, _ === null) throw Error(c(341));
              _.lanes |= l, A = _.alternate, A !== null && (A.lanes |= l), gp(_, l, r), _ = y.sibling;
            } else _ = y.child;
            if (_ !== null) _.return = y;
            else for (_ = y; _ !== null; ) {
              if (_ === r) {
                _ = null;
                break;
              }
              if (y = _.sibling, y !== null) {
                y.return = _.return, _ = y;
                break;
              }
              _ = _.return;
            }
            y = _;
          }
          Sr(n, r, v.children, l), r = r.child;
        }
        return r;
      case 9:
        return v = r.type, f = r.pendingProps.children, Pn(r, l), v = Wa(v), f = f(v), r.flags |= 1, Sr(n, r, f, l), r.child;
      case 14:
        return f = r.type, v = mi(f, r.pendingProps), v = mi(f.type, v), Jl(n, r, f, v, l);
      case 15:
        return _t(n, r, r.type, r.pendingProps, l);
      case 17:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : mi(f, v), Ya(n, r), r.tag = 1, Qn(f) ? (n = !0, cr(r)) : n = !1, Pn(r, l), jf(r, f, v), Zs(r, f, v, l), nc(null, r, f, !0, n, l);
      case 19:
        return Ui(n, r, l);
      case 22:
        return tc(n, r, l);
    }
    throw Error(c(156, r.tag));
  };
  function hm(n, r) {
    return En(n, r);
  }
  function o0(n, r, l, f) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ga(n, r, l, f) {
    return new o0(n, r, l, f);
  }
  function Vp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function l0(n) {
    if (typeof n == "function") return Vp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === nt) return 11;
      if (n === ct) return 14;
    }
    return 2;
  }
  function nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ga(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function mc(n, r, l, f, v, y) {
    var _ = 2;
    if (f = n, typeof n == "function") Vp(n) && (_ = 1);
    else if (typeof n == "string") _ = 5;
    else e: switch (n) {
      case fe:
        return mo(l.children, v, y, r);
      case Ye:
        _ = 8, v |= 8;
        break;
      case tt:
        return n = Ga(12, l, r, v | 2), n.elementType = tt, n.lanes = y, n;
      case Re:
        return n = Ga(13, l, r, v), n.elementType = Re, n.lanes = y, n;
      case Qe:
        return n = Ga(19, l, r, v), n.elementType = Qe, n.lanes = y, n;
      case Ee:
        return rl(l, v, y, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case We:
            _ = 10;
            break e;
          case ot:
            _ = 9;
            break e;
          case nt:
            _ = 11;
            break e;
          case ct:
            _ = 14;
            break e;
          case qe:
            _ = 16, f = null;
            break e;
        }
        throw Error(c(130, n == null ? n : typeof n, ""));
    }
    return r = Ga(_, l, r, v), r.elementType = n, r.type = f, r.lanes = y, r;
  }
  function mo(n, r, l, f) {
    return n = Ga(7, n, f, r), n.lanes = l, n;
  }
  function rl(n, r, l, f) {
    return n = Ga(22, n, f, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Wp(n, r, l) {
    return n = Ga(6, n, null, r), n.lanes = l, n;
  }
  function Gf(n, r, l) {
    return r = Ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function mm(n, r, l, f, v) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _u(0), this.expirationTimes = _u(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _u(0), this.identifierPrefix = f, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Xf(n, r, l, f, v, y, _, A, z) {
    return n = new mm(n, r, l, A, z), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = Ga(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: f, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xp(y), n;
  }
  function u0(n, r, l) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: he, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: l };
  }
  function Yp(n) {
    if (!n) return Ar;
    n = n._reactInternals;
    e: {
      if (Ct(n) !== n || n.tag !== 1) throw Error(c(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Qn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Qn(l)) return Fs(n, l, r);
    }
    return r;
  }
  function ym(n, r, l, f, v, y, _, A, z) {
    return n = Xf(l, f, !0, n, v, y, _, A, z), n.context = Yp(null), l = n.current, f = Zn(), v = Vi(l), y = co(f, v), y.callback = r ?? null, Go(l, y, v), n.current.lanes = v, eo(n, v, f), va(n, f), n;
  }
  function Kf(n, r, l, f) {
    var v = r.current, y = Zn(), _ = Vi(v);
    return l = Yp(l), r.context === null ? r.context = l : r.pendingContext = l, r = co(y, _), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = Go(v, r, _), n !== null && (Yr(n, v, _, y), yf(n, v, _)), _;
  }
  function Jf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Qp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Zf(n, r) {
    Qp(n, r), (n = n.alternate) && Qp(n, r);
  }
  function gm() {
    return null;
  }
  var au = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function qp(n) {
    this._internalRoot = n;
  }
  ed.prototype.render = qp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(c(409));
    Kf(n, r, null, null);
  }, ed.prototype.unmount = qp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      nu(function() {
        Kf(null, n, null, null);
      }), r[oo] = null;
    }
  };
  function ed(n) {
    this._internalRoot = n;
  }
  ed.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = St();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < nr.length && r !== 0 && r < nr[l].priority; l++) ;
      nr.splice(l, 0, n), l === 0 && _s(n);
    }
  };
  function Gp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function td(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Sm() {
  }
  function s0(n, r, l, f, v) {
    if (v) {
      if (typeof f == "function") {
        var y = f;
        f = function() {
          var te = Jf(_);
          y.call(te);
        };
      }
      var _ = ym(r, f, n, 0, null, !1, !1, "", Sm);
      return n._reactRootContainer = _, n[oo] = _.current, Mu(n.nodeType === 8 ? n.parentNode : n), nu(), _;
    }
    for (; v = n.lastChild; ) n.removeChild(v);
    if (typeof f == "function") {
      var A = f;
      f = function() {
        var te = Jf(z);
        A.call(te);
      };
    }
    var z = Xf(n, 0, !1, null, null, !1, !1, "", Sm);
    return n._reactRootContainer = z, n[oo] = z.current, Mu(n.nodeType === 8 ? n.parentNode : n), nu(function() {
      Kf(r, z, l, f);
    }), z;
  }
  function yc(n, r, l, f, v) {
    var y = l._reactRootContainer;
    if (y) {
      var _ = y;
      if (typeof v == "function") {
        var A = v;
        v = function() {
          var z = Jf(_);
          A.call(z);
        };
      }
      Kf(r, _, n, v);
    } else _ = s0(l, r, n, v, f);
    return Jf(_);
  }
  It = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = si(r.pendingLanes);
          l !== 0 && (to(r, l | 1), va(r, wt()), !(Ft & 6) && (Xu = wt() + 500, Mi()));
        }
        break;
      case 13:
        nu(function() {
          var f = _a(n, 1);
          if (f !== null) {
            var v = Zn();
            Yr(f, n, 1, v);
          }
        }), Zf(n, 1);
    }
  }, Cs = function(n) {
    if (n.tag === 13) {
      var r = _a(n, 134217728);
      if (r !== null) {
        var l = Zn();
        Yr(r, n, 134217728, l);
      }
      Zf(n, 134217728);
    }
  }, Oi = function(n) {
    if (n.tag === 13) {
      var r = Vi(n), l = _a(n, r);
      if (l !== null) {
        var f = Zn();
        Yr(l, n, r, f);
      }
      Zf(n, r);
    }
  }, St = function() {
    return Qt;
  }, Tu = function(n, r) {
    var l = Qt;
    try {
      return Qt = n, r();
    } finally {
      Qt = l;
    }
  }, rn = function(n, r, l) {
    switch (r) {
      case "input":
        if (kr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var f = l[r];
            if (f !== n && f.form === n.form) {
              var v = Dn(f);
              if (!v) throw Error(c(90));
              _e(f), kr(f, v);
            }
          }
        }
        break;
      case "textarea":
        ri(n, l);
        break;
      case "select":
        r = l.value, r != null && zn(n, !!l.multiple, r, !1);
    }
  }, wl = Hp, ko = nu;
  var c0 = { usingClientEntryPoint: !1, Events: [lt, vi, Dn, Zi, Cl, Hp] }, gc = { findFiberByHostInstance: jl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, bm = { bundleType: gc.bundleType, version: gc.version, rendererPackageName: gc.rendererPackageName, rendererConfig: gc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = jn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: gc.findFiberByHostInstance || gm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!al.isDisabled && al.supportsFiber) try {
      Lo = al.inject(bm), ra = al;
    } catch {
    }
  }
  return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, ti.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gp(r)) throw Error(c(200));
    return u0(n, r, null, l);
  }, ti.createRoot = function(n, r) {
    if (!Gp(n)) throw Error(c(299));
    var l = !1, f = "", v = au;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), r = Xf(n, 1, !1, null, null, l, !1, f, v), n[oo] = r.current, Mu(n.nodeType === 8 ? n.parentNode : n), new qp(r);
  }, ti.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = jn(r), n = n === null ? null : n.stateNode, n;
  }, ti.flushSync = function(n) {
    return nu(n);
  }, ti.hydrate = function(n, r, l) {
    if (!td(r)) throw Error(c(200));
    return yc(null, n, r, !0, l);
  }, ti.hydrateRoot = function(n, r, l) {
    if (!Gp(n)) throw Error(c(405));
    var f = l != null && l.hydratedSources || null, v = !1, y = "", _ = au;
    if (l != null && (l.unstable_strictMode === !0 && (v = !0), l.identifierPrefix !== void 0 && (y = l.identifierPrefix), l.onRecoverableError !== void 0 && (_ = l.onRecoverableError)), r = ym(r, null, n, 1, l ?? null, v, !1, y, _), n[oo] = r.current, Mu(n), f) for (n = 0; n < f.length; n++) l = f[n], v = l._getVersion, v = v(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, v] : r.mutableSourceEagerHydrationData.push(
      l,
      v
    );
    return new ed(r);
  }, ti.render = function(n, r, l) {
    if (!td(r)) throw Error(c(200));
    return yc(null, n, r, !1, l);
  }, ti.unmountComponentAtNode = function(n) {
    if (!td(n)) throw Error(c(40));
    return n._reactRootContainer ? (nu(function() {
      yc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[oo] = null;
      });
    }), !0) : !1;
  }, ti.unstable_batchedUpdates = Hp, ti.unstable_renderSubtreeIntoContainer = function(n, r, l, f) {
    if (!td(l)) throw Error(c(200));
    if (n == null || n._reactInternals === void 0) throw Error(c(38));
    return yc(n, r, l, !1, f);
  }, ti.version = "18.3.1-next-f1338f8080-20240426", ti;
}
var ni = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i_;
function CA() {
  return i_ || (i_ = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = W, s = yR(), c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function g(e) {
      p = e;
    }
    function b(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        w("warn", e, a);
      }
    }
    function m(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        w("error", e, a);
      }
    }
    function w(e, t, a) {
      {
        var i = c.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var d = a.map(function(h) {
          return String(h);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var C = 0, R = 1, D = 2, O = 3, P = 4, k = 5, j = 6, B = 7, G = 8, ee = 9, oe = 10, se = 11, ce = 12, I = 13, he = 14, fe = 15, Ye = 16, tt = 17, We = 18, ot = 19, nt = 21, Re = 22, Qe = 23, ct = 24, qe = 25, Ee = !0, ie = !1, ke = !1, V = !1, L = !1, X = !0, we = !0, xe = !0, Ae = !0, Oe = /* @__PURE__ */ new Set(), Te = {}, Pe = {};
    function je(e, t) {
      Ge(e, t), Ge(e + "Capture", t);
    }
    function Ge(e, t) {
      Te[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Te[e] = t;
      {
        var a = e.toLowerCase();
        Pe[a] = e, e === "onDoubleClick" && (Pe.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Oe.add(t[i]);
    }
    var At = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _e = Object.prototype.hasOwnProperty;
    function Nt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function bn(e) {
      try {
        return Rn(e), !1;
      } catch {
        return !0;
      }
    }
    function Rn(e) {
      return "" + e;
    }
    function Mn(e, t) {
      if (bn(e))
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nt(e)), Rn(e);
    }
    function kr(e) {
      if (bn(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(e)), Rn(e);
    }
    function Na(e, t) {
      if (bn(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nt(e)), Rn(e);
    }
    function lr(e, t) {
      if (bn(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nt(e)), Rn(e);
    }
    function ur(e) {
      if (bn(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Nt(e)), Rn(e);
    }
    function zn(e) {
      if (bn(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Nt(e)), Rn(e);
    }
    var tr = 0, Dr = 1, ri = 2, Wn = 3, Pr = 4, ba = 5, ai = 6, wi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = wi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", rt = new RegExp("^[" + wi + "][" + $e + "]*$"), Ot = {}, Zt = {};
    function vn(e) {
      return _e.call(Zt, e) ? !0 : _e.call(Ot, e) ? !1 : rt.test(e) ? (Zt[e] = !0, !0) : (Ot[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function $n(e, t, a) {
      return t !== null ? t.type === tr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function xn(e, t, a, i) {
      if (a !== null && a.type === tr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function sr(e, t, a, i) {
      if (t === null || typeof t > "u" || xn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Wn:
            return !t;
          case Pr:
            return t === !1;
          case ba:
            return isNaN(t);
          case ai:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function hn(e) {
      return rn.hasOwnProperty(e) ? rn[e] : null;
    }
    function nn(e, t, a, i, u, d, h) {
      this.acceptsBooleans = t === ri || t === Wn || t === Pr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = h;
    }
    var rn = {}, xa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    xa.forEach(function(e) {
      rn[e] = new nn(
        e,
        tr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      rn[t] = new nn(
        t,
        Dr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      rn[e] = new nn(
        e,
        ri,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      rn[e] = new nn(
        e,
        ri,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      rn[e] = new nn(
        e,
        Wn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new nn(
        e,
        Wn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new nn(
        e,
        Pr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new nn(
        e,
        ai,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      rn[e] = new nn(
        e,
        ba,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Lr = /[\-\:]([a-z])/g, Ma = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Lr, Ma);
      rn[t] = new nn(
        t,
        Dr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Lr, Ma);
      rn[t] = new nn(
        t,
        Dr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Lr, Ma);
      rn[t] = new nn(
        t,
        Dr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      rn[e] = new nn(
        e,
        Dr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Zi = "xlinkHref";
    rn[Zi] = new nn(
      "xlinkHref",
      Dr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      rn[e] = new nn(
        e,
        Dr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Cl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, wl = !1;
    function ko(e) {
      !wl && Cl.test(e) && (wl = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Do(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Mn(a, t), i.sanitizeURL && ko("" + a);
        var d = i.attributeName, h = null;
        if (i.type === Pr) {
          if (e.hasAttribute(d)) {
            var S = e.getAttribute(d);
            return S === "" ? !0 : sr(t, a, i, !1) ? S : S === "" + a ? a : S;
          }
        } else if (e.hasAttribute(d)) {
          if (sr(t, a, i, !1))
            return e.getAttribute(d);
          if (i.type === Wn)
            return a;
          h = e.getAttribute(d);
        }
        return sr(t, a, i, !1) ? h === null ? a : h : h === "" + a ? a : h;
      }
    }
    function _l(e, t, a, i) {
      {
        if (!vn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Mn(a, t), u === "" + a ? a : u;
      }
    }
    function jr(e, t, a, i) {
      var u = hn(t);
      if (!$n(t, u, i)) {
        if (sr(t, a, u, i) && (a = null), i || u === null) {
          if (vn(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : (Mn(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var h = u.mustUseProperty;
        if (h) {
          var S = u.propertyName;
          if (a === null) {
            var x = u.type;
            e[S] = x === Wn ? !1 : "";
          } else
            e[S] = a;
          return;
        }
        var T = u.attributeName, $ = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var H = u.type, F;
          H === Wn || H === Pr && a === !0 ? F = "" : (Mn(a, T), F = "" + a, u.sanitizeURL && ko(F.toString())), $ ? e.setAttributeNS($, T, F) : e.setAttribute(T, F);
        }
      }
    }
    var Fr = Symbol.for("react.element"), hr = Symbol.for("react.portal"), _i = Symbol.for("react.fragment"), ii = Symbol.for("react.strict_mode"), Ri = Symbol.for("react.profiler"), Ti = Symbol.for("react.provider"), M = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), Pt = Symbol.for("react.scope"), kt = Symbol.for("react.debug_trace_mode"), jn = Symbol.for("react.offscreen"), mn = Symbol.for("react.legacy_hidden"), En = Symbol.for("react.cache"), mr = Symbol.for("react.tracing_marker"), oi = Symbol.iterator, li = "@@iterator";
    function wt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = oi && e[oi] || e[li];
      return typeof t == "function" ? t : null;
    }
    var Rt = Object.assign, ui = 0, Rl, Tl, Po, xu, Lo, ra, Es;
    function Ur() {
    }
    Ur.__reactDisabledLog = !0;
    function Yc() {
      {
        if (ui === 0) {
          Rl = console.log, Tl = console.info, Po = console.warn, xu = console.error, Lo = console.group, ra = console.groupCollapsed, Es = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ur,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ui++;
      }
    }
    function Qc() {
      {
        if (ui--, ui === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Rt({}, e, {
              value: Rl
            }),
            info: Rt({}, e, {
              value: Tl
            }),
            warn: Rt({}, e, {
              value: Po
            }),
            error: Rt({}, e, {
              value: xu
            }),
            group: Rt({}, e, {
              value: Lo
            }),
            groupCollapsed: Rt({}, e, {
              value: ra
            }),
            groupEnd: Rt({}, e, {
              value: Es
            })
          });
        }
        ui < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Eu = c.ReactCurrentDispatcher, Ao;
    function Ea(e, t, a) {
      {
        if (Ao === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Ao = i && i[1] || "";
          }
        return `
` + Ao + e;
      }
    }
    var si = !1, ci;
    {
      var Cu = typeof WeakMap == "function" ? WeakMap : Map;
      ci = new Cu();
    }
    function Ol(e, t) {
      if (!e || si)
        return "";
      {
        var a = ci.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      si = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Eu.current, Eu.current = null, Yc();
      try {
        if (t) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (re) {
              i = re;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (re) {
              i = re;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            i = re;
          }
          e();
        }
      } catch (re) {
        if (re && i && typeof re.stack == "string") {
          for (var S = re.stack.split(`
`), x = i.stack.split(`
`), T = S.length - 1, $ = x.length - 1; T >= 1 && $ >= 0 && S[T] !== x[$]; )
            $--;
          for (; T >= 1 && $ >= 0; T--, $--)
            if (S[T] !== x[$]) {
              if (T !== 1 || $ !== 1)
                do
                  if (T--, $--, $ < 0 || S[T] !== x[$]) {
                    var H = `
` + S[T].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && ci.set(e, H), H;
                  }
                while (T >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        si = !1, Eu.current = d, Qc(), Error.prepareStackTrace = u;
      }
      var F = e ? e.displayName || e.name : "", J = F ? Ea(F) : "";
      return typeof e == "function" && ci.set(e, J), J;
    }
    function No(e, t, a) {
      return Ol(e, !0);
    }
    function wu(e, t, a) {
      return Ol(e, !1);
    }
    function _u(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function eo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ol(e, _u(e));
      if (typeof e == "string")
        return Ea(e);
      switch (e) {
        case Ne:
          return Ea("Suspense");
        case Ve:
          return Ea("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case pe:
            return wu(e.render);
          case Ct:
            return eo(e.type, t, a);
          case bt: {
            var i = e, u = i._payload, d = i._init;
            try {
              return eo(d(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Vd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case k:
          return Ea(e.type);
        case Ye:
          return Ea("Lazy");
        case I:
          return Ea("Suspense");
        case ot:
          return Ea("SuspenseList");
        case C:
        case D:
        case fe:
          return wu(e.type);
        case se:
          return wu(e.type.render);
        case R:
          return No(e.type);
        default:
          return "";
      }
    }
    function to(e) {
      try {
        var t = "", a = e;
        do
          t += Vd(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Qt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ru(e) {
      return e.displayName || "Context";
    }
    function It(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _i:
          return "Fragment";
        case hr:
          return "Portal";
        case Ri:
          return "Profiler";
        case ii:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case Ve:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            var t = e;
            return Ru(t) + ".Consumer";
          case Ti:
            var a = e;
            return Ru(a._context) + ".Provider";
          case pe:
            return Qt(e, e.render, "ForwardRef");
          case Ct:
            var i = e.displayName || null;
            return i !== null ? i : It(e.type) || "Memo";
          case bt: {
            var u = e, d = u._payload, h = u._init;
            try {
              return It(h(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Cs(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Oi(e) {
      return e.displayName || "Context";
    }
    function St(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ct:
          return "Cache";
        case ee:
          var i = a;
          return Oi(i) + ".Consumer";
        case oe:
          var u = a;
          return Oi(u._context) + ".Provider";
        case We:
          return "DehydratedFragment";
        case se:
          return Cs(a, a.render, "ForwardRef");
        case B:
          return "Fragment";
        case k:
          return a;
        case P:
          return "Portal";
        case O:
          return "Root";
        case j:
          return "Text";
        case Ye:
          return It(a);
        case G:
          return a === ii ? "StrictMode" : "Mode";
        case Re:
          return "Offscreen";
        case ce:
          return "Profiler";
        case nt:
          return "Scope";
        case I:
          return "Suspense";
        case ot:
          return "SuspenseList";
        case qe:
          return "TracingMarker";
        case R:
        case C:
        case tt:
        case D:
        case he:
        case fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Tu = c.ReactDebugCurrentFrame, yr = null, $i = !1;
    function Hr() {
      {
        if (yr === null)
          return null;
        var e = yr._debugOwner;
        if (e !== null && typeof e < "u")
          return St(e);
      }
      return null;
    }
    function ki() {
      return yr === null ? "" : to(yr);
    }
    function Cn() {
      Tu.getCurrentStack = null, yr = null, $i = !1;
    }
    function an(e) {
      Tu.getCurrentStack = e === null ? null : ki, yr = e, $i = !1;
    }
    function Mo() {
      return yr;
    }
    function nr(e) {
      $i = e;
    }
    function Ir(e) {
      return "" + e;
    }
    function za(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return zn(e), e;
        default:
          return "";
      }
    }
    var $l = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ws(e, t) {
      $l[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function _s(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function zo(e) {
      return e._valueTracker;
    }
    function kl(e) {
      e._valueTracker = null;
    }
    function Wd(e) {
      var t = "";
      return e && (_s(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ja(e) {
      var t = _s(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      zn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(S) {
            zn(S), i = "" + S, d.call(this, S);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var h = {
          getValue: function() {
            return i;
          },
          setValue: function(S) {
            zn(S), i = "" + S;
          },
          stopTracking: function() {
            kl(e), delete e[t];
          }
        };
        return h;
      }
    }
    function fi(e) {
      zo(e) || (e._valueTracker = ja(e));
    }
    function Di(e) {
      if (!e)
        return !1;
      var t = zo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Wd(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Fa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ou = !1, $u = !1, jo = !1, Dl = !1;
    function ku(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Du(e, t) {
      var a = e, i = t.checked, u = Rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function di(e, t) {
      ws("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !$u && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component", t.type), $u = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ou && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component", t.type), Ou = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: za(t.value != null ? t.value : i),
        controlled: ku(t)
      };
    }
    function E(e, t) {
      var a = e, i = t.checked;
      i != null && jr(a, "checked", i, !1);
    }
    function N(e, t) {
      var a = e;
      {
        var i = ku(t);
        !a._wrapperState.controlled && i && !Dl && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Dl = !0), a._wrapperState.controlled && !i && !jo && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), jo = !0);
      }
      E(e, t);
      var u = za(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Ir(u)) : a.value !== Ir(u) && (a.value = Ir(u));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ft(a, t.type, u) : t.hasOwnProperty("defaultValue") && ft(a, t.type, za(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var h = Ir(i._wrapperState.initialValue);
        a || h !== i.value && (i.value = h), i.defaultValue = h;
      }
      var S = i.name;
      S !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, S !== "" && (i.name = S);
    }
    function ae(e, t) {
      var a = e;
      N(a, t), Ce(a, t);
    }
    function Ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Mn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var h = u[d];
          if (!(h === e || h.form !== e.form)) {
            var S = jm(h);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Di(h), N(h, S);
          }
        }
      }
    }
    function ft(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Fa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ir(e._wrapperState.initialValue) : e.defaultValue !== Ir(a) && (e.defaultValue = Ir(a)));
    }
    var Le = !1, vt = !1, Lt = !1;
    function Bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || vt || (vt = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Lt || (Lt = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Le && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Le = !0);
    }
    function yn(e, t) {
      t.value != null && e.setAttribute("value", Ir(za(t.value)));
    }
    var on = Array.isArray;
    function $t(e) {
      return on(e);
    }
    var ln;
    ln = !1;
    function kn() {
      var e = Hr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Fo = ["value", "defaultValue"];
    function Rs(e) {
      {
        ws("select", e);
        for (var t = 0; t < Fo.length; t++) {
          var a = Fo[t];
          if (e[a] != null) {
            var i = $t(e[a]);
            e.multiple && !i ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, kn()) : !e.multiple && i && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, kn());
          }
        }
      }
    }
    function no(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var d = a, h = {}, S = 0; S < d.length; S++)
          h["$" + d[S]] = !0;
        for (var x = 0; x < u.length; x++) {
          var T = h.hasOwnProperty("$" + u[x].value);
          u[x].selected !== T && (u[x].selected = T), T && i && (u[x].defaultSelected = !0);
        }
      } else {
        for (var $ = Ir(za(a)), H = null, F = 0; F < u.length; F++) {
          if (u[F].value === $) {
            u[F].selected = !0, i && (u[F].defaultSelected = !0);
            return;
          }
          H === null && !u[F].disabled && (H = u[F]);
        }
        H !== null && (H.selected = !0);
      }
    }
    function Ts(e, t) {
      return Rt({}, t, {
        value: void 0
      });
    }
    function Pl(e, t) {
      var a = e;
      Rs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ln && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ln = !0);
    }
    function Yd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? no(a, !!t.multiple, i, !1) : t.defaultValue != null && no(a, !!t.multiple, t.defaultValue, !0);
    }
    function qc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? no(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? no(a, !!t.multiple, t.defaultValue, !0) : no(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Qd(e, t) {
      var a = e, i = t.value;
      i != null && no(a, !!t.multiple, i, !1);
    }
    var lh = !1;
    function qd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ir(a._wrapperState.initialValue)
      });
      return i;
    }
    function Gd(e, t) {
      var a = e;
      ws("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !lh && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component"), lh = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if ($t(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), i = d;
      }
      a._wrapperState = {
        initialValue: za(i)
      };
    }
    function uh(e, t) {
      var a = e, i = za(t.value), u = za(t.defaultValue);
      if (i != null) {
        var d = Ir(i);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      u != null && (a.defaultValue = Ir(u));
    }
    function sh(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Fg(e, t) {
      uh(e, t);
    }
    var ro = "http://www.w3.org/1999/xhtml", Xd = "http://www.w3.org/1998/Math/MathML", Kd = "http://www.w3.org/2000/svg";
    function Jd(e) {
      switch (e) {
        case "svg":
          return Kd;
        case "math":
          return Xd;
        default:
          return ro;
      }
    }
    function Zd(e, t) {
      return e == null || e === ro ? Jd(t) : e === Kd && t === "foreignObject" ? ro : e;
    }
    var ch = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Gc, fh = ch(function(e, t) {
      if (e.namespaceURI === Kd && !("innerHTML" in e)) {
        Gc = Gc || document.createElement("div"), Gc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Gc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), aa = 1, ao = 3, Yn = 8, io = 9, ep = 11, Pu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ao) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Os = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, $s = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function dh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ph = ["Webkit", "ms", "Moz", "O"];
    Object.keys($s).forEach(function(e) {
      ph.forEach(function(t) {
        $s[dh(t, e)] = $s[e];
      });
    });
    function Xc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !($s.hasOwnProperty(e) && $s[e]) ? t + "px" : (lr(t, e), ("" + t).trim());
    }
    var vh = /([A-Z])/g, hh = /^ms-/;
    function Lu(e) {
      return e.replace(vh, "-$1").toLowerCase().replace(hh, "-ms-");
    }
    var mh = function() {
    };
    {
      var Ug = /^(?:webkit|moz|o)[A-Z]/, Hg = /^-ms-/, yh = /-(.)/g, tp = /;\s*$/, Pi = {}, Ll = {}, gh = !1, ks = !1, Ig = function(e) {
        return e.replace(yh, function(t, a) {
          return a.toUpperCase();
        });
      }, Sh = function(e) {
        Pi.hasOwnProperty(e) && Pi[e] || (Pi[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ig(e.replace(Hg, "ms-"))
        ));
      }, np = function(e) {
        Pi.hasOwnProperty(e) && Pi[e] || (Pi[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, rp = function(e, t) {
        Ll.hasOwnProperty(t) && Ll[t] || (Ll[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(tp, "")));
      }, bh = function(e, t) {
        gh || (gh = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, xh = function(e, t) {
        ks || (ks = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      mh = function(e, t) {
        e.indexOf("-") > -1 ? Sh(e) : Ug.test(e) ? np(e) : tp.test(t) && rp(e, t), typeof t == "number" && (isNaN(t) ? bh(e, t) : isFinite(t) || xh(e, t));
      };
    }
    var Eh = mh;
    function Bg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var d = i.indexOf("--") === 0;
              t += a + (d ? i : Lu(i)) + ":", t += Xc(i, u, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function Ch(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Eh(i, t[i]);
          var d = Xc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, d) : a[i] = d;
        }
    }
    function Vg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function wh(e) {
      var t = {};
      for (var a in e)
        for (var i = Os[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Wg(e, t) {
      {
        if (!t)
          return;
        var a = wh(e), i = wh(t), u = {};
        for (var d in a) {
          var h = a[d], S = i[d];
          if (S && h !== S) {
            var x = h + "," + S;
            if (u[x])
              continue;
            u[x] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Vg(e[h]) ? "Removing" : "Updating", h, S);
          }
        }
      }
    }
    var pi = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Ds = Rt({
      menuitem: !0
    }, pi), _h = "__html";
    function Kc(e, t) {
      if (t) {
        if (Ds[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(_h in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Uo(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var Ps = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Jc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Au = {}, Yg = new RegExp("^(aria)-[" + $e + "]*$"), Nu = new RegExp("^(aria)[A-Z][" + $e + "]*$");
    function ap(e, t) {
      {
        if (_e.call(Au, t) && Au[t])
          return !0;
        if (Nu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Jc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Au[t] = !0, !0;
          if (t !== i)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Au[t] = !0, !0;
        }
        if (Yg.test(t)) {
          var u = t.toLowerCase(), d = Jc.hasOwnProperty(u) ? u : null;
          if (d == null)
            return Au[t] = !0, !1;
          if (t !== d)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Au[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ls(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ap(e, i);
          u || a.push(i);
        }
        var d = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function ip(e, t) {
      Uo(e, t) || Ls(e, t);
    }
    var op = !1;
    function Zc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !op && (op = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Al = function() {
    };
    {
      var gr = {}, lp = /^on./, ef = /^on[^A-Z]/, Rh = new RegExp("^(aria)-[" + $e + "]*$"), Th = new RegExp("^(aria)[A-Z][" + $e + "]*$");
      Al = function(e, t, a, i) {
        if (_e.call(gr, t) && gr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), gr[t] = !0, !0;
        if (i != null) {
          var d = i.registrationNameDependencies, h = i.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var S = h.hasOwnProperty(u) ? h[u] : null;
          if (S != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, S), gr[t] = !0, !0;
          if (lp.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), gr[t] = !0, !0;
        } else if (lp.test(t))
          return ef.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), gr[t] = !0, !0;
        if (Rh.test(t) || Th.test(t))
          return !0;
        if (u === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), gr[t] = !0, !0;
        if (u === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), gr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), gr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), gr[t] = !0, !0;
        var x = hn(t), T = x !== null && x.type === tr;
        if (Ps.hasOwnProperty(u)) {
          var $ = Ps[u];
          if ($ !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, $), gr[t] = !0, !0;
        } else if (!T && t !== u)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), gr[t] = !0, !0;
        return typeof a == "boolean" && xn(t, a, x, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), gr[t] = !0, !0) : T ? !0 : xn(t, a, x, !1) ? (gr[t] = !0, !1) : ((a === "false" || a === "true") && x !== null && x.type === Wn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), gr[t] = !0), !0);
      };
    }
    var Oh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var d = Al(e, u, t[u], a);
          d || i.push(u);
        }
        var h = i.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : i.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
      }
    };
    function $h(e, t, a) {
      Uo(e, t) || Oh(e, t, a);
    }
    var up = 1, tf = 2, Ua = 4, sp = up | tf | Ua, Nl = null;
    function Qg(e) {
      Nl !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Nl = e;
    }
    function qg() {
      Nl === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Nl = null;
    }
    function As(e) {
      return e === Nl;
    }
    function cp(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ao ? t.parentNode : t;
    }
    var nf = null, Ml = null, en = null;
    function rf(e) {
      var t = ns(e);
      if (t) {
        if (typeof nf != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = jm(a);
          nf(t.stateNode, t.type, i);
        }
      }
    }
    function af(e) {
      nf = e;
    }
    function Mu(e) {
      Ml ? en ? en.push(e) : en = [e] : Ml = e;
    }
    function kh() {
      return Ml !== null || en !== null;
    }
    function of() {
      if (Ml) {
        var e = Ml, t = en;
        if (Ml = null, en = null, rf(e), t)
          for (var a = 0; a < t.length; a++)
            rf(t[a]);
      }
    }
    var zu = function(e, t) {
      return e(t);
    }, Ns = function() {
    }, Ho = !1;
    function Dh() {
      var e = kh();
      e && (Ns(), of());
    }
    function Ph(e, t, a) {
      if (Ho)
        return e(t, a);
      Ho = !0;
      try {
        return zu(e, t, a);
      } finally {
        Ho = !1, Dh();
      }
    }
    function Gg(e, t, a) {
      zu = e, Ns = a;
    }
    function Lh(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function lf(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Lh(t));
        default:
          return !1;
      }
    }
    function Io(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = jm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (lf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Ms = !1;
    if (At)
      try {
        var zl = {};
        Object.defineProperty(zl, "passive", {
          get: function() {
            Ms = !0;
          }
        }), window.addEventListener("test", zl, zl), window.removeEventListener("test", zl, zl);
      } catch {
        Ms = !1;
      }
    function uf(e, t, a, i, u, d, h, S, x) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch ($) {
        this.onError($);
      }
    }
    var sf = uf;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var fp = document.createElement("react");
      sf = function(t, a, i, u, d, h, S, x, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var $ = document.createEvent("Event"), H = !1, F = !0, J = window.event, re = Object.getOwnPropertyDescriptor(window, "event");
        function le() {
          fp.removeEventListener(ue, dt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = J);
        }
        var ze = Array.prototype.slice.call(arguments, 3);
        function dt() {
          H = !0, le(), a.apply(i, ze), F = !1;
        }
        var at, Ht = !1, Mt = !1;
        function Q(q) {
          if (at = q.error, Ht = !0, at === null && q.colno === 0 && q.lineno === 0 && (Mt = !0), q.defaultPrevented && at != null && typeof at == "object")
            try {
              at._suppressLogging = !0;
            } catch {
            }
        }
        var ue = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Q), fp.addEventListener(ue, dt, !1), $.initEvent(ue, !1, !1), fp.dispatchEvent($), re && Object.defineProperty(window, "event", re), H && F && (Ht ? Mt && (at = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : at = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(at)), window.removeEventListener("error", Q), !H)
          return le(), uf.apply(this, arguments);
      };
    }
    var Ah = sf, ju = !1, cf = null, Fu = !1, Li = null, Nh = {
      onError: function(e) {
        ju = !0, cf = e;
      }
    };
    function Bo(e, t, a, i, u, d, h, S, x) {
      ju = !1, cf = null, Ah.apply(Nh, arguments);
    }
    function Ai(e, t, a, i, u, d, h, S, x) {
      if (Bo.apply(this, arguments), ju) {
        var T = js();
        Fu || (Fu = !0, Li = T);
      }
    }
    function zs() {
      if (Fu) {
        var e = Li;
        throw Fu = !1, Li = null, e;
      }
    }
    function oo() {
      return ju;
    }
    function js() {
      if (ju) {
        var e = cf;
        return ju = !1, cf = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uu(e) {
      return e._reactInternals;
    }
    function Xg(e) {
      return e._reactInternals !== void 0;
    }
    function jl(e, t) {
      e._reactInternals = t;
    }
    var lt = (
      /*                      */
      0
    ), vi = (
      /*                */
      1
    ), Dn = (
      /*                    */
      2
    ), jt = (
      /*                       */
      4
    ), Ha = (
      /*                */
      16
    ), Ia = (
      /*                 */
      32
    ), gn = (
      /*                     */
      64
    ), it = (
      /*                   */
      128
    ), Ar = (
      /*            */
      256
    ), Nn = (
      /*                          */
      512
    ), rr = (
      /*                     */
      1024
    ), ia = (
      /*                      */
      2048
    ), oa = (
      /*                    */
      4096
    ), Qn = (
      /*                   */
      8192
    ), Hu = (
      /*             */
      16384
    ), Mh = (
      /*               */
      32767
    ), Fs = (
      /*                   */
      32768
    ), cr = (
      /*                */
      65536
    ), ff = (
      /* */
      131072
    ), Ni = (
      /*                       */
      1048576
    ), Iu = (
      /*                    */
      2097152
    ), lo = (
      /*                 */
      4194304
    ), df = (
      /*                */
      8388608
    ), Vo = (
      /*               */
      16777216
    ), Mi = (
      /*              */
      33554432
    ), Wo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      jt | rr | 0
    ), Yo = Dn | jt | Ha | Ia | Nn | oa | Qn, Qo = jt | gn | Nn | Qn, uo = ia | Ha, qn = lo | df | Iu, Ba = c.ReactCurrentOwner;
    function Ca(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Dn | oa)) !== lt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === O ? a : null;
    }
    function zi(e) {
      if (e.tag === I) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function ji(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function Fl(e) {
      return Ca(e) === e;
    }
    function zh(e) {
      {
        var t = Ba.current;
        if (t !== null && t.tag === R) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", St(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Uu(e);
      return u ? Ca(u) === u : !1;
    }
    function pf(e) {
      if (Ca(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function vf(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ca(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var d = i.return;
        if (d === null)
          break;
        var h = d.alternate;
        if (h === null) {
          var S = d.return;
          if (S !== null) {
            i = u = S;
            continue;
          }
          break;
        }
        if (d.child === h.child) {
          for (var x = d.child; x; ) {
            if (x === i)
              return pf(d), e;
            if (x === u)
              return pf(d), t;
            x = x.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = d, u = h;
        else {
          for (var T = !1, $ = d.child; $; ) {
            if ($ === i) {
              T = !0, i = d, u = h;
              break;
            }
            if ($ === u) {
              T = !0, u = d, i = h;
              break;
            }
            $ = $.sibling;
          }
          if (!T) {
            for ($ = h.child; $; ) {
              if ($ === i) {
                T = !0, i = h, u = d;
                break;
              }
              if ($ === u) {
                T = !0, u = h, i = d;
                break;
              }
              $ = $.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== O)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function la(e) {
      var t = vf(e);
      return t !== null ? ua(t) : null;
    }
    function ua(e) {
      if (e.tag === k || e.tag === j)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ua(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Tn(e) {
      var t = vf(e);
      return t !== null ? Va(t) : null;
    }
    function Va(e) {
      if (e.tag === k || e.tag === j)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== P) {
          var a = Va(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var dp = s.unstable_scheduleCallback, jh = s.unstable_cancelCallback, pp = s.unstable_shouldYield, vp = s.unstable_requestPaint, ar = s.unstable_now, hf = s.unstable_getCurrentPriorityLevel, Us = s.unstable_ImmediatePriority, qo = s.unstable_UserBlockingPriority, so = s.unstable_NormalPriority, Kg = s.unstable_LowPriority, Ul = s.unstable_IdlePriority, mf = s.unstable_yieldValue, Fh = s.unstable_setDisableYieldValue, Hl = null, Fn = null, Me = null, wa = !1, sa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Bu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        we && (e = Rt({}, e, {
          getLaneLabelMap: Il,
          injectProfilingHooks: Wa
        })), Hl = t.inject(e), Fn = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function hp(e, t) {
      if (Fn && typeof Fn.onScheduleFiberRoot == "function")
        try {
          Fn.onScheduleFiberRoot(Hl, e, t);
        } catch (a) {
          wa || (wa = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function mp(e, t) {
      if (Fn && typeof Fn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & it) === it;
          if (xe) {
            var i;
            switch (t) {
              case Br:
                i = Us;
                break;
              case Ui:
                i = qo;
                break;
              case Ya:
                i = so;
                break;
              case Qa:
                i = Ul;
                break;
              default:
                i = so;
                break;
            }
            Fn.onCommitFiberRoot(Hl, e, i, a);
          }
        } catch (u) {
          wa || (wa = !0, m("React instrumentation encountered an error: %s", u));
        }
    }
    function yp(e) {
      if (Fn && typeof Fn.onPostCommitFiberRoot == "function")
        try {
          Fn.onPostCommitFiberRoot(Hl, e);
        } catch (t) {
          wa || (wa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function gp(e) {
      if (Fn && typeof Fn.onCommitFiberUnmount == "function")
        try {
          Fn.onCommitFiberUnmount(Hl, e);
        } catch (t) {
          wa || (wa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof mf == "function" && (Fh(e), g(e)), Fn && typeof Fn.setStrictMode == "function")
        try {
          Fn.setStrictMode(Hl, e);
        } catch (t) {
          wa || (wa = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Wa(e) {
      Me = e;
    }
    function Il() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Wl; a++) {
          var i = Bh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Sp(e) {
      Me !== null && typeof Me.markCommitStarted == "function" && Me.markCommitStarted(e);
    }
    function bp() {
      Me !== null && typeof Me.markCommitStopped == "function" && Me.markCommitStopped();
    }
    function _a(e) {
      Me !== null && typeof Me.markComponentRenderStarted == "function" && Me.markComponentRenderStarted(e);
    }
    function Ra() {
      Me !== null && typeof Me.markComponentRenderStopped == "function" && Me.markComponentRenderStopped();
    }
    function xp(e) {
      Me !== null && typeof Me.markComponentPassiveEffectMountStarted == "function" && Me.markComponentPassiveEffectMountStarted(e);
    }
    function Uh() {
      Me !== null && typeof Me.markComponentPassiveEffectMountStopped == "function" && Me.markComponentPassiveEffectMountStopped();
    }
    function co(e) {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStarted == "function" && Me.markComponentPassiveEffectUnmountStarted(e);
    }
    function Go() {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStopped == "function" && Me.markComponentPassiveEffectUnmountStopped();
    }
    function yf(e) {
      Me !== null && typeof Me.markComponentLayoutEffectMountStarted == "function" && Me.markComponentLayoutEffectMountStarted(e);
    }
    function Hh() {
      Me !== null && typeof Me.markComponentLayoutEffectMountStopped == "function" && Me.markComponentLayoutEffectMountStopped();
    }
    function Hs(e) {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStarted == "function" && Me.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ep() {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStopped == "function" && Me.markComponentLayoutEffectUnmountStopped();
    }
    function Is(e, t, a) {
      Me !== null && typeof Me.markComponentErrored == "function" && Me.markComponentErrored(e, t, a);
    }
    function Fi(e, t, a) {
      Me !== null && typeof Me.markComponentSuspended == "function" && Me.markComponentSuspended(e, t, a);
    }
    function Bs(e) {
      Me !== null && typeof Me.markLayoutEffectsStarted == "function" && Me.markLayoutEffectsStarted(e);
    }
    function Vs() {
      Me !== null && typeof Me.markLayoutEffectsStopped == "function" && Me.markLayoutEffectsStopped();
    }
    function Bl(e) {
      Me !== null && typeof Me.markPassiveEffectsStarted == "function" && Me.markPassiveEffectsStarted(e);
    }
    function Cp() {
      Me !== null && typeof Me.markPassiveEffectsStopped == "function" && Me.markPassiveEffectsStopped();
    }
    function Vl(e) {
      Me !== null && typeof Me.markRenderStarted == "function" && Me.markRenderStarted(e);
    }
    function Ih() {
      Me !== null && typeof Me.markRenderYielded == "function" && Me.markRenderYielded();
    }
    function gf() {
      Me !== null && typeof Me.markRenderStopped == "function" && Me.markRenderStopped();
    }
    function Ln(e) {
      Me !== null && typeof Me.markRenderScheduled == "function" && Me.markRenderScheduled(e);
    }
    function Sf(e, t) {
      Me !== null && typeof Me.markForceUpdateScheduled == "function" && Me.markForceUpdateScheduled(e, t);
    }
    function Ws(e, t) {
      Me !== null && typeof Me.markStateUpdateScheduled == "function" && Me.markStateUpdateScheduled(e, t);
    }
    var ut = (
      /*                         */
      0
    ), Dt = (
      /*                 */
      1
    ), qt = (
      /*                    */
      2
    ), un = (
      /*               */
      8
    ), Gt = (
      /*              */
      16
    ), Gn = Math.clz32 ? Math.clz32 : Ys, fr = Math.log, bf = Math.LN2;
    function Ys(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (fr(t) / bf | 0) | 0;
    }
    var Wl = 31, ve = (
      /*                        */
      0
    ), Vt = (
      /*                          */
      0
    ), mt = (
      /*                        */
      1
    ), Xo = (
      /*    */
      2
    ), hi = (
      /*             */
      4
    ), Nr = (
      /*            */
      8
    ), Un = (
      /*                     */
      16
    ), fo = (
      /*                */
      32
    ), Ko = (
      /*                       */
      4194240
    ), Yl = (
      /*                        */
      64
    ), xf = (
      /*                        */
      128
    ), Ef = (
      /*                        */
      256
    ), Cf = (
      /*                        */
      512
    ), wf = (
      /*                        */
      1024
    ), _f = (
      /*                        */
      2048
    ), Rf = (
      /*                        */
      4096
    ), Tf = (
      /*                        */
      8192
    ), Of = (
      /*                        */
      16384
    ), Ql = (
      /*                       */
      32768
    ), $f = (
      /*                       */
      65536
    ), Vu = (
      /*                       */
      131072
    ), Wu = (
      /*                       */
      262144
    ), kf = (
      /*                       */
      524288
    ), Qs = (
      /*                       */
      1048576
    ), Df = (
      /*                       */
      2097152
    ), qs = (
      /*                            */
      130023424
    ), ql = (
      /*                             */
      4194304
    ), Pf = (
      /*                             */
      8388608
    ), Gs = (
      /*                             */
      16777216
    ), Lf = (
      /*                             */
      33554432
    ), Af = (
      /*                             */
      67108864
    ), wp = ql, Xs = (
      /*          */
      134217728
    ), _p = (
      /*                          */
      268435455
    ), Ks = (
      /*               */
      268435456
    ), Gl = (
      /*                        */
      536870912
    ), ca = (
      /*                   */
      1073741824
    );
    function Bh(e) {
      {
        if (e & mt)
          return "Sync";
        if (e & Xo)
          return "InputContinuousHydration";
        if (e & hi)
          return "InputContinuous";
        if (e & Nr)
          return "DefaultHydration";
        if (e & Un)
          return "Default";
        if (e & fo)
          return "TransitionHydration";
        if (e & Ko)
          return "Transition";
        if (e & qs)
          return "Retry";
        if (e & Xs)
          return "SelectiveHydration";
        if (e & Ks)
          return "IdleHydration";
        if (e & Gl)
          return "Idle";
        if (e & ca)
          return "Offscreen";
      }
    }
    var pn = -1, Xl = Yl, Nf = ql;
    function Js(e) {
      switch (Jo(e)) {
        case mt:
          return mt;
        case Xo:
          return Xo;
        case hi:
          return hi;
        case Nr:
          return Nr;
        case Un:
          return Un;
        case fo:
          return fo;
        case Yl:
        case xf:
        case Ef:
        case Cf:
        case wf:
        case _f:
        case Rf:
        case Tf:
        case Of:
        case Ql:
        case $f:
        case Vu:
        case Wu:
        case kf:
        case Qs:
        case Df:
          return e & Ko;
        case ql:
        case Pf:
        case Gs:
        case Lf:
        case Af:
          return e & qs;
        case Xs:
          return Xs;
        case Ks:
          return Ks;
        case Gl:
          return Gl;
        case ca:
          return ca;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Mf(e, t) {
      var a = e.pendingLanes;
      if (a === ve)
        return ve;
      var i = ve, u = e.suspendedLanes, d = e.pingedLanes, h = a & _p;
      if (h !== ve) {
        var S = h & ~u;
        if (S !== ve)
          i = Js(S);
        else {
          var x = h & d;
          x !== ve && (i = Js(x));
        }
      } else {
        var T = a & ~u;
        T !== ve ? i = Js(T) : d !== ve && (i = Js(d));
      }
      if (i === ve)
        return ve;
      if (t !== ve && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ve) {
        var $ = Jo(i), H = Jo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          $ >= H || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          $ === Un && (H & Ko) !== ve
        )
          return t;
      }
      (i & hi) !== ve && (i |= a & Un);
      var F = e.entangledLanes;
      if (F !== ve)
        for (var J = e.entanglements, re = i & F; re > 0; ) {
          var le = Xn(re), ze = 1 << le;
          i |= J[le], re &= ~ze;
        }
      return i;
    }
    function mi(e, t) {
      for (var a = e.eventTimes, i = pn; t > 0; ) {
        var u = Xn(t), d = 1 << u, h = a[u];
        h > i && (i = h), t &= ~d;
      }
      return i;
    }
    function Rp(e, t) {
      switch (e) {
        case mt:
        case Xo:
        case hi:
          return t + 250;
        case Nr:
        case Un:
        case fo:
        case Yl:
        case xf:
        case Ef:
        case Cf:
        case wf:
        case _f:
        case Rf:
        case Tf:
        case Of:
        case Ql:
        case $f:
        case Vu:
        case Wu:
        case kf:
        case Qs:
        case Df:
          return t + 5e3;
        case ql:
        case Pf:
        case Gs:
        case Lf:
        case Af:
          return pn;
        case Xs:
        case Ks:
        case Gl:
        case ca:
          return pn;
        default:
          return m("Should have found matching lanes. This is a bug in React."), pn;
      }
    }
    function zf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, h = a; h > 0; ) {
        var S = Xn(h), x = 1 << S, T = d[S];
        T === pn ? ((x & i) === ve || (x & u) !== ve) && (d[S] = Rp(x, t)) : T <= t && (e.expiredLanes |= x), h &= ~x;
      }
    }
    function Vh(e) {
      return Js(e.pendingLanes);
    }
    function jf(e) {
      var t = e.pendingLanes & ~ca;
      return t !== ve ? t : t & ca ? ca : ve;
    }
    function Wh(e) {
      return (e & mt) !== ve;
    }
    function Zs(e) {
      return (e & _p) !== ve;
    }
    function Kl(e) {
      return (e & qs) === e;
    }
    function Tp(e) {
      var t = mt | hi | Un;
      return (e & t) === ve;
    }
    function Op(e) {
      return (e & Ko) === e;
    }
    function Ff(e, t) {
      var a = Xo | hi | Nr | Un;
      return (t & a) !== ve;
    }
    function Yh(e, t) {
      return (t & e.expiredLanes) !== ve;
    }
    function $p(e) {
      return (e & Ko) !== ve;
    }
    function kp() {
      var e = Xl;
      return Xl <<= 1, (Xl & Ko) === ve && (Xl = Yl), e;
    }
    function Qh() {
      var e = Nf;
      return Nf <<= 1, (Nf & qs) === ve && (Nf = ql), e;
    }
    function Jo(e) {
      return e & -e;
    }
    function ec(e) {
      return Jo(e);
    }
    function Xn(e) {
      return 31 - Gn(e);
    }
    function Sr(e) {
      return Xn(e);
    }
    function fa(e, t) {
      return (e & t) !== ve;
    }
    function Jl(e, t) {
      return (e & t) === t;
    }
    function _t(e, t) {
      return e | t;
    }
    function tc(e, t) {
      return e & ~t;
    }
    function Dp(e, t) {
      return e & t;
    }
    function qh(e) {
      return e;
    }
    function Gh(e, t) {
      return e !== Vt && e < t ? e : t;
    }
    function nc(e) {
      for (var t = [], a = 0; a < Wl; a++)
        t.push(e);
      return t;
    }
    function Yu(e, t, a) {
      e.pendingLanes |= t, t !== Gl && (e.suspendedLanes = ve, e.pingedLanes = ve);
      var i = e.eventTimes, u = Sr(t);
      i[u] = a;
    }
    function Xh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Xn(i), d = 1 << u;
        a[u] = pn, i &= ~d;
      }
    }
    function Uf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Pp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ve, e.pingedLanes = ve, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, d = e.expirationTimes, h = a; h > 0; ) {
        var S = Xn(h), x = 1 << S;
        i[S] = ve, u[S] = pn, d[S] = pn, h &= ~x;
      }
    }
    function Hf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var d = Xn(u), h = 1 << d;
        // Is this one of the newly entangled lanes?
        h & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[d] & t && (i[d] |= t), u &= ~h;
      }
    }
    function Lp(e, t) {
      var a = Jo(t), i;
      switch (a) {
        case hi:
          i = Xo;
          break;
        case Un:
          i = Nr;
          break;
        case Yl:
        case xf:
        case Ef:
        case Cf:
        case wf:
        case _f:
        case Rf:
        case Tf:
        case Of:
        case Ql:
        case $f:
        case Vu:
        case Wu:
        case kf:
        case Qs:
        case Df:
        case ql:
        case Pf:
        case Gs:
        case Lf:
        case Af:
          i = fo;
          break;
        case Gl:
          i = Ks;
          break;
        default:
          i = Vt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vt ? Vt : i;
    }
    function rc(e, t, a) {
      if (sa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Sr(a), d = 1 << u, h = i[u];
          h.add(t), a &= ~d;
        }
    }
    function Kh(e, t) {
      if (sa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Sr(t), d = 1 << u, h = a[u];
          h.size > 0 && (h.forEach(function(S) {
            var x = S.alternate;
            (x === null || !i.has(x)) && i.add(S);
          }), h.clear()), t &= ~d;
        }
    }
    function Ap(e, t) {
      return null;
    }
    var Br = mt, Ui = hi, Ya = Un, Qa = Gl, ac = Vt;
    function qa() {
      return ac;
    }
    function Kn(e) {
      ac = e;
    }
    function Jh(e, t) {
      var a = ac;
      try {
        return ac = e, t();
      } finally {
        ac = a;
      }
    }
    function Zh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ic(e, t) {
      return e > t ? e : t;
    }
    function dr(e, t) {
      return e !== 0 && e < t;
    }
    function em(e) {
      var t = Jo(e);
      return dr(Br, t) ? dr(Ui, t) ? Zs(t) ? Ya : Qa : Ui : Br;
    }
    function If(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var oc;
    function Mr(e) {
      oc = e;
    }
    function Jg(e) {
      oc(e);
    }
    var Be;
    function Qu(e) {
      Be = e;
    }
    var Bf;
    function tm(e) {
      Bf = e;
    }
    var nm;
    function lc(e) {
      nm = e;
    }
    var uc;
    function Np(e) {
      uc = e;
    }
    var Vf = !1, sc = [], po = null, Hi = null, Ii = null, Hn = /* @__PURE__ */ new Map(), Vr = /* @__PURE__ */ new Map(), Wr = [], rm = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function am(e) {
      return rm.indexOf(e) > -1;
    }
    function yi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Mp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          po = null;
          break;
        case "dragenter":
        case "dragleave":
          Hi = null;
          break;
        case "mouseover":
        case "mouseout":
          Ii = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Hn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Vr.delete(i);
          break;
        }
      }
    }
    function da(e, t, a, i, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var h = yi(t, a, i, u, d);
        if (t !== null) {
          var S = ns(t);
          S !== null && Be(S);
        }
        return h;
      }
      e.eventSystemFlags |= i;
      var x = e.targetContainers;
      return u !== null && x.indexOf(u) === -1 && x.push(u), e;
    }
    function Zg(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return po = da(po, e, t, a, i, d), !0;
        }
        case "dragenter": {
          var h = u;
          return Hi = da(Hi, e, t, a, i, h), !0;
        }
        case "mouseover": {
          var S = u;
          return Ii = da(Ii, e, t, a, i, S), !0;
        }
        case "pointerover": {
          var x = u, T = x.pointerId;
          return Hn.set(T, da(Hn.get(T) || null, e, t, a, i, x)), !0;
        }
        case "gotpointercapture": {
          var $ = u, H = $.pointerId;
          return Vr.set(H, da(Vr.get(H) || null, e, t, a, i, $)), !0;
        }
      }
      return !1;
    }
    function zp(e) {
      var t = xc(e.target);
      if (t !== null) {
        var a = Ca(t);
        if (a !== null) {
          var i = a.tag;
          if (i === I) {
            var u = zi(a);
            if (u !== null) {
              e.blockedOn = u, uc(e.priority, function() {
                Bf(a);
              });
              return;
            }
          } else if (i === O) {
            var d = a.stateNode;
            if (If(d)) {
              e.blockedOn = ji(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function im(e) {
      for (var t = nm(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Wr.length && dr(t, Wr[i].priority); i++)
        ;
      Wr.splice(i, 0, a), i === 0 && zp(a);
    }
    function cc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Gu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          Qg(d), u.target.dispatchEvent(d), qg();
        } else {
          var h = ns(i);
          return h !== null && Be(h), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function jp(e, t, a) {
      cc(e) && a.delete(t);
    }
    function e0() {
      Vf = !1, po !== null && cc(po) && (po = null), Hi !== null && cc(Hi) && (Hi = null), Ii !== null && cc(Ii) && (Ii = null), Hn.forEach(jp), Vr.forEach(jp);
    }
    function Zo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Vf || (Vf = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, e0)));
    }
    function Zl(e) {
      if (sc.length > 0) {
        Zo(sc[0], e);
        for (var t = 1; t < sc.length; t++) {
          var a = sc[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      po !== null && Zo(po, e), Hi !== null && Zo(Hi, e), Ii !== null && Zo(Ii, e);
      var i = function(S) {
        return Zo(S, e);
      };
      Hn.forEach(i), Vr.forEach(i);
      for (var u = 0; u < Wr.length; u++) {
        var d = Wr[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; Wr.length > 0; ) {
        var h = Wr[0];
        if (h.blockedOn !== null)
          break;
        zp(h), h.blockedOn === null && Wr.shift();
      }
    }
    var br = c.ReactCurrentBatchConfig, Ft = !0;
    function ir(e) {
      Ft = !!e;
    }
    function Jn() {
      return Ft;
    }
    function xr(e, t, a) {
      var i = Wf(t), u;
      switch (i) {
        case Br:
          u = Ta;
          break;
        case Ui:
          u = qu;
          break;
        case Ya:
        default:
          u = In;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Ta(e, t, a, i) {
      var u = qa(), d = br.transition;
      br.transition = null;
      try {
        Kn(Br), In(e, t, a, i);
      } finally {
        Kn(u), br.transition = d;
      }
    }
    function qu(e, t, a, i) {
      var u = qa(), d = br.transition;
      br.transition = null;
      try {
        Kn(Ui), In(e, t, a, i);
      } finally {
        Kn(u), br.transition = d;
      }
    }
    function In(e, t, a, i) {
      Ft && fc(e, t, a, i);
    }
    function fc(e, t, a, i) {
      var u = Gu(e, t, a, i);
      if (u === null) {
        y0(e, t, i, Bi, a), Mp(e, i);
        return;
      }
      if (Zg(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Mp(e, i), t & Ua && am(e)) {
        for (; u !== null; ) {
          var d = ns(u);
          d !== null && Jg(d);
          var h = Gu(e, t, a, i);
          if (h === null && y0(e, t, i, Bi, a), h === u)
            break;
          u = h;
        }
        u !== null && i.stopPropagation();
        return;
      }
      y0(e, t, i, null, a);
    }
    var Bi = null;
    function Gu(e, t, a, i) {
      Bi = null;
      var u = cp(i), d = xc(u);
      if (d !== null) {
        var h = Ca(d);
        if (h === null)
          d = null;
        else {
          var S = h.tag;
          if (S === I) {
            var x = zi(h);
            if (x !== null)
              return x;
            d = null;
          } else if (S === O) {
            var T = h.stateNode;
            if (If(T))
              return ji(h);
            d = null;
          } else h !== d && (d = null);
        }
      }
      return Bi = d, null;
    }
    function Wf(e) {
      switch (e) {
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
          return Br;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ui;
        case "message": {
          var t = hf();
          switch (t) {
            case Us:
              return Br;
            case qo:
              return Ui;
            case so:
            case Kg:
              return Ya;
            case Ul:
              return Qa;
            default:
              return Ya;
          }
        }
        default:
          return Ya;
      }
    }
    function dc(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function pa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Fp(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Xu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Oa = null, Ku = null, eu = null;
    function el(e) {
      return Oa = e, Ku = pc(), !0;
    }
    function Yf() {
      Oa = null, Ku = null, eu = null;
    }
    function vo() {
      if (eu)
        return eu;
      var e, t = Ku, a = t.length, i, u = pc(), d = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var h = a - e;
      for (i = 1; i <= h && t[a - i] === u[d - i]; i++)
        ;
      var S = i > 1 ? 1 - i : void 0;
      return eu = u.slice(e, S), eu;
    }
    function pc() {
      return "value" in Oa ? Oa.value : Oa.textContent;
    }
    function tl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ju() {
      return !0;
    }
    function vc() {
      return !1;
    }
    function zr(e) {
      function t(a, i, u, d, h) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = d, this.target = h, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var x = e[S];
            x ? this[S] = x(d) : this[S] = d[S];
          }
        var T = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return T ? this.isDefaultPrevented = Ju : this.isDefaultPrevented = vc, this.isPropagationStopped = vc, this;
      }
      return Rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ju);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ju);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Ju
      }), t;
    }
    var Zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Vi = zr(Zn), Yr = Rt({}, Zn, {
      view: 0,
      detail: 0
    }), va = zr(Yr), Qf, hc, tu;
    function t0(e) {
      e !== tu && (tu && e.type === "mousemove" ? (Qf = e.screenX - tu.screenX, hc = e.screenY - tu.screenY) : (Qf = 0, hc = 0), tu = e);
    }
    var gi = Rt({}, Yr, {
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
      getModifierState: On,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (t0(e), Qf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : hc;
      }
    }), Up = zr(gi), Hp = Rt({}, gi, {
      dataTransfer: 0
    }), nu = zr(Hp), Ip = Rt({}, Yr, {
      relatedTarget: 0
    }), ho = zr(Ip), om = Rt({}, Zn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), lm = zr(om), Bp = Rt({}, Zn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), qf = zr(Bp), n0 = Rt({}, Zn, {
      data: 0
    }), um = zr(n0), sm = um, cm = {
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
    }, ru = {
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
    };
    function r0(e) {
      if (e.key) {
        var t = cm[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = tl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ru[e.keyCode] || "Unidentified" : "";
    }
    var Zu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function fm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Zu[e];
      return i ? !!a[i] : !1;
    }
    function On(e) {
      return fm;
    }
    var a0 = Rt({}, Yr, {
      key: r0,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: On,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? tl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), dm = zr(a0), i0 = Rt({}, gi, {
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
    }), pm = zr(i0), vm = Rt({}, Yr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: On
    }), hm = zr(vm), o0 = Rt({}, Zn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ga = zr(o0), Vp = Rt({}, gi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), l0 = zr(Vp), nl = [9, 13, 27, 32], mc = 229, mo = At && "CompositionEvent" in window, rl = null;
    At && "documentMode" in document && (rl = document.documentMode);
    var Wp = At && "TextEvent" in window && !rl, Gf = At && (!mo || rl && rl > 8 && rl <= 11), mm = 32, Xf = String.fromCharCode(mm);
    function u0() {
      je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), je("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), je("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), je("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Yp = !1;
    function ym(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Kf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Jf(e, t) {
      return e === "keydown" && t.keyCode === mc;
    }
    function Qp(e, t) {
      switch (e) {
        case "keyup":
          return nl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== mc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Zf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function gm(e) {
      return e.locale === "ko";
    }
    var au = !1;
    function qp(e, t, a, i, u) {
      var d, h;
      if (mo ? d = Kf(t) : au ? Qp(t, i) && (d = "onCompositionEnd") : Jf(t, i) && (d = "onCompositionStart"), !d)
        return null;
      Gf && !gm(i) && (!au && d === "onCompositionStart" ? au = el(u) : d === "onCompositionEnd" && au && (h = vo()));
      var S = _m(a, d);
      if (S.length > 0) {
        var x = new um(d, t, null, i, u);
        if (e.push({
          event: x,
          listeners: S
        }), h)
          x.data = h;
        else {
          var T = Zf(i);
          T !== null && (x.data = T);
        }
      }
    }
    function ed(e, t) {
      switch (e) {
        case "compositionend":
          return Zf(t);
        case "keypress":
          var a = t.which;
          return a !== mm ? null : (Yp = !0, Xf);
        case "textInput":
          var i = t.data;
          return i === Xf && Yp ? null : i;
        default:
          return null;
      }
    }
    function Gp(e, t) {
      if (au) {
        if (e === "compositionend" || !mo && Qp(e, t)) {
          var a = vo();
          return Yf(), au = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ym(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Gf && !gm(t) ? null : t.data;
        default:
          return null;
      }
    }
    function td(e, t, a, i, u) {
      var d;
      if (Wp ? d = ed(t, i) : d = Gp(t, i), !d)
        return null;
      var h = _m(a, "onBeforeInput");
      if (h.length > 0) {
        var S = new sm("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: S,
          listeners: h
        }), S.data = d;
      }
    }
    function Sm(e, t, a, i, u, d, h) {
      qp(e, t, a, i, u), td(e, t, a, i, u);
    }
    var s0 = {
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
    function yc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!s0[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function c0(e) {
      if (!At)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function gc() {
      je("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function bm(e, t, a, i) {
      Mu(i);
      var u = _m(t, "onChange");
      if (u.length > 0) {
        var d = new Vi("onChange", "change", null, a, i);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var al = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      bm(t, n, e, cp(e)), Ph(f, t);
    }
    function f(e) {
      uE(e, 0);
    }
    function v(e) {
      var t = ld(e);
      if (Di(t))
        return e;
    }
    function y(e, t) {
      if (e === "change")
        return t;
    }
    var _ = !1;
    At && (_ = c0("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      al = e, n = t, al.attachEvent("onpropertychange", te);
    }
    function z() {
      al && (al.detachEvent("onpropertychange", te), al = null, n = null);
    }
    function te(e) {
      e.propertyName === "value" && v(n) && l(e);
    }
    function ye(e, t, a) {
      e === "focusin" ? (z(), A(t, a)) : e === "focusout" && z();
    }
    function Se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return v(n);
    }
    function me(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ue(e, t) {
      if (e === "click")
        return v(t);
    }
    function Xe(e, t) {
      if (e === "input" || e === "change")
        return v(t);
    }
    function et(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ft(e, "number", e.value);
    }
    function Bn(e, t, a, i, u, d, h) {
      var S = a ? ld(a) : window, x, T;
      if (r(S) ? x = y : yc(S) ? _ ? x = Xe : (x = Se, T = ye) : me(S) && (x = Ue), x) {
        var $ = x(t, a);
        if ($) {
          bm(e, $, i, u);
          return;
        }
      }
      T && T(t, S, a), t === "focusout" && et(S);
    }
    function Y() {
      Ge("onMouseEnter", ["mouseout", "mouseover"]), Ge("onMouseLeave", ["mouseout", "mouseover"]), Ge("onPointerEnter", ["pointerout", "pointerover"]), Ge("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function U(e, t, a, i, u, d, h) {
      var S = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout";
      if (S && !As(i)) {
        var T = i.relatedTarget || i.fromElement;
        if (T && (xc(T) || sv(T)))
          return;
      }
      if (!(!x && !S)) {
        var $;
        if (u.window === u)
          $ = u;
        else {
          var H = u.ownerDocument;
          H ? $ = H.defaultView || H.parentWindow : $ = window;
        }
        var F, J;
        if (x) {
          var re = i.relatedTarget || i.toElement;
          if (F = a, J = re ? xc(re) : null, J !== null) {
            var le = Ca(J);
            (J !== le || J.tag !== k && J.tag !== j) && (J = null);
          }
        } else
          F = null, J = a;
        if (F !== J) {
          var ze = Up, dt = "onMouseLeave", at = "onMouseEnter", Ht = "mouse";
          (t === "pointerout" || t === "pointerover") && (ze = pm, dt = "onPointerLeave", at = "onPointerEnter", Ht = "pointer");
          var Mt = F == null ? $ : ld(F), Q = J == null ? $ : ld(J), ue = new ze(dt, Ht + "leave", F, i, u);
          ue.target = Mt, ue.relatedTarget = Q;
          var q = null, be = xc(u);
          if (be === a) {
            var Ie = new ze(at, Ht + "enter", J, i, u);
            Ie.target = Q, Ie.relatedTarget = Mt, q = Ie;
          }
          gO(e, ue, q, F, J);
        }
      }
    }
    function K(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ge = typeof Object.is == "function" ? Object.is : K;
    function Ke(e, t) {
      if (ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (!_e.call(t, d) || !ge(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function pt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ht(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function gt(e, t) {
      for (var a = pt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ao) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = pt(ht(a));
      }
    }
    function pr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, d = i.anchorOffset, h = i.focusNode, S = i.focusOffset;
      try {
        u.nodeType, h.nodeType;
      } catch {
        return null;
      }
      return Xt(e, u, d, h, S);
    }
    function Xt(e, t, a, i, u) {
      var d = 0, h = -1, S = -1, x = 0, T = 0, $ = e, H = null;
      e: for (; ; ) {
        for (var F = null; $ === t && (a === 0 || $.nodeType === ao) && (h = d + a), $ === i && (u === 0 || $.nodeType === ao) && (S = d + u), $.nodeType === ao && (d += $.nodeValue.length), (F = $.firstChild) !== null; )
          H = $, $ = F;
        for (; ; ) {
          if ($ === e)
            break e;
          if (H === t && ++x === a && (h = d), H === i && ++T === u && (S = d), (F = $.nextSibling) !== null)
            break;
          $ = H, H = $.parentNode;
        }
        $ = F;
      }
      return h === -1 || S === -1 ? null : {
        start: h,
        end: S
      };
    }
    function il(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), d = e.textContent.length, h = Math.min(t.start, d), S = t.end === void 0 ? h : Math.min(t.end, d);
        if (!u.extend && h > S) {
          var x = S;
          S = h, h = x;
        }
        var T = gt(e, h), $ = gt(e, S);
        if (T && $) {
          if (u.rangeCount === 1 && u.anchorNode === T.node && u.anchorOffset === T.offset && u.focusNode === $.node && u.focusOffset === $.offset)
            return;
          var H = a.createRange();
          H.setStart(T.node, T.offset), u.removeAllRanges(), h > S ? (u.addRange(H), u.extend($.node, $.offset)) : (H.setEnd($.node, $.offset), u.addRange(H));
        }
      }
    }
    function xm(e) {
      return e && e.nodeType === ao;
    }
    function Kx(e, t) {
      return !e || !t ? !1 : e === t ? !0 : xm(e) ? !1 : xm(t) ? Kx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function eO(e) {
      return e && e.ownerDocument && Kx(e.ownerDocument.documentElement, e);
    }
    function tO(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Jx() {
      for (var e = window, t = Fa(); t instanceof e.HTMLIFrameElement; ) {
        if (tO(t))
          e = t.contentWindow;
        else
          return t;
        t = Fa(e.document);
      }
      return t;
    }
    function f0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function nO() {
      var e = Jx();
      return {
        focusedElem: e,
        selectionRange: f0(e) ? aO(e) : null
      };
    }
    function rO(e) {
      var t = Jx(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && eO(a)) {
        i !== null && f0(a) && iO(a, i);
        for (var u = [], d = a; d = d.parentNode; )
          d.nodeType === aa && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var h = 0; h < u.length; h++) {
          var S = u[h];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function aO(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = pr(e), t || {
        start: 0,
        end: 0
      };
    }
    function iO(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : il(e, t);
    }
    var oO = At && "documentMode" in document && document.documentMode <= 11;
    function lO() {
      je("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var nd = null, d0 = null, Xp = null, p0 = !1;
    function uO(e) {
      if ("selectionStart" in e && f0(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function sO(e) {
      return e.window === e ? e.document : e.nodeType === io ? e : e.ownerDocument;
    }
    function Zx(e, t, a) {
      var i = sO(a);
      if (!(p0 || nd == null || nd !== Fa(i))) {
        var u = uO(nd);
        if (!Xp || !Ke(Xp, u)) {
          Xp = u;
          var d = _m(d0, "onSelect");
          if (d.length > 0) {
            var h = new Vi("onSelect", "select", null, t, a);
            e.push({
              event: h,
              listeners: d
            }), h.target = nd;
          }
        }
      }
    }
    function cO(e, t, a, i, u, d, h) {
      var S = a ? ld(a) : window;
      switch (t) {
        case "focusin":
          (yc(S) || S.contentEditable === "true") && (nd = S, d0 = a, Xp = null);
          break;
        case "focusout":
          nd = null, d0 = null, Xp = null;
          break;
        case "mousedown":
          p0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          p0 = !1, Zx(e, i, u);
          break;
        case "selectionchange":
          if (oO)
            break;
        case "keydown":
        case "keyup":
          Zx(e, i, u);
      }
    }
    function Em(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var rd = {
      animationend: Em("Animation", "AnimationEnd"),
      animationiteration: Em("Animation", "AnimationIteration"),
      animationstart: Em("Animation", "AnimationStart"),
      transitionend: Em("Transition", "TransitionEnd")
    }, v0 = {}, eE = {};
    At && (eE = document.createElement("div").style, "AnimationEvent" in window || (delete rd.animationend.animation, delete rd.animationiteration.animation, delete rd.animationstart.animation), "TransitionEvent" in window || delete rd.transitionend.transition);
    function Cm(e) {
      if (v0[e])
        return v0[e];
      if (!rd[e])
        return e;
      var t = rd[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in eE)
          return v0[e] = t[a];
      return e;
    }
    var tE = Cm("animationend"), nE = Cm("animationiteration"), rE = Cm("animationstart"), aE = Cm("transitionend"), iE = /* @__PURE__ */ new Map(), oE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function es(e, t) {
      iE.set(e, t), je(t, [e]);
    }
    function fO() {
      for (var e = 0; e < oE.length; e++) {
        var t = oE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        es(a, "on" + i);
      }
      es(tE, "onAnimationEnd"), es(nE, "onAnimationIteration"), es(rE, "onAnimationStart"), es("dblclick", "onDoubleClick"), es("focusin", "onFocus"), es("focusout", "onBlur"), es(aE, "onTransitionEnd");
    }
    function dO(e, t, a, i, u, d, h) {
      var S = iE.get(t);
      if (S !== void 0) {
        var x = Vi, T = t;
        switch (t) {
          case "keypress":
            if (tl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            x = dm;
            break;
          case "focusin":
            T = "focus", x = ho;
            break;
          case "focusout":
            T = "blur", x = ho;
            break;
          case "beforeblur":
          case "afterblur":
            x = ho;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Up;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = nu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = hm;
            break;
          case tE:
          case nE:
          case rE:
            x = lm;
            break;
          case aE:
            x = Ga;
            break;
          case "scroll":
            x = va;
            break;
          case "wheel":
            x = l0;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = qf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = pm;
            break;
        }
        var $ = (d & Ua) !== 0;
        {
          var H = !$ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", F = mO(a, S, i.type, $, H);
          if (F.length > 0) {
            var J = new x(S, T, null, i, u);
            e.push({
              event: J,
              listeners: F
            });
          }
        }
      }
    }
    fO(), Y(), gc(), lO(), u0();
    function pO(e, t, a, i, u, d, h) {
      dO(e, t, a, i, u, d);
      var S = (d & sp) === 0;
      S && (U(e, t, a, i, u), Bn(e, t, a, i, u), cO(e, t, a, i, u), Sm(e, t, a, i, u));
    }
    var Kp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], h0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kp));
    function lE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ai(i, t, void 0, e), e.currentTarget = null;
    }
    function vO(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], h = d.instance, S = d.currentTarget, x = d.listener;
          if (h !== i && e.isPropagationStopped())
            return;
          lE(e, x, S), i = h;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var $ = t[T], H = $.instance, F = $.currentTarget, J = $.listener;
          if (H !== i && e.isPropagationStopped())
            return;
          lE(e, J, F), i = H;
        }
    }
    function uE(e, t) {
      for (var a = (t & Ua) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], d = u.event, h = u.listeners;
        vO(d, h, a);
      }
      zs();
    }
    function hO(e, t, a, i, u) {
      var d = cp(a), h = [];
      pO(h, e, i, a, d, t), uE(h, t);
    }
    function An(e, t) {
      h0.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = W$(t), u = SO(e);
      i.has(u) || (sE(t, e, tf, a), i.add(u));
    }
    function m0(e, t, a) {
      h0.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ua), sE(a, e, i, t);
    }
    var wm = "_reactListening" + Math.random().toString(36).slice(2);
    function Jp(e) {
      if (!e[wm]) {
        e[wm] = !0, Oe.forEach(function(a) {
          a !== "selectionchange" && (h0.has(a) || m0(a, !1, e), m0(a, !0, e));
        });
        var t = e.nodeType === io ? e : e.ownerDocument;
        t !== null && (t[wm] || (t[wm] = !0, m0("selectionchange", !1, t)));
      }
    }
    function sE(e, t, a, i, u) {
      var d = xr(e, t, a), h = void 0;
      Ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (h = !0), e = e, i ? h !== void 0 ? Fp(e, t, d, h) : pa(e, t, d) : h !== void 0 ? Xu(e, t, d, h) : dc(e, t, d);
    }
    function cE(e, t) {
      return e === t || e.nodeType === Yn && e.parentNode === t;
    }
    function y0(e, t, a, i, u) {
      var d = i;
      if (!(t & up) && !(t & tf)) {
        var h = u;
        if (i !== null) {
          var S = i;
          e: for (; ; ) {
            if (S === null)
              return;
            var x = S.tag;
            if (x === O || x === P) {
              var T = S.stateNode.containerInfo;
              if (cE(T, h))
                break;
              if (x === P)
                for (var $ = S.return; $ !== null; ) {
                  var H = $.tag;
                  if (H === O || H === P) {
                    var F = $.stateNode.containerInfo;
                    if (cE(F, h))
                      return;
                  }
                  $ = $.return;
                }
              for (; T !== null; ) {
                var J = xc(T);
                if (J === null)
                  return;
                var re = J.tag;
                if (re === k || re === j) {
                  S = d = J;
                  continue e;
                }
                T = T.parentNode;
              }
            }
            S = S.return;
          }
        }
      }
      Ph(function() {
        return hO(e, t, a, d);
      });
    }
    function Zp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function mO(e, t, a, i, u, d) {
      for (var h = t !== null ? t + "Capture" : null, S = i ? h : t, x = [], T = e, $ = null; T !== null; ) {
        var H = T, F = H.stateNode, J = H.tag;
        if (J === k && F !== null && ($ = F, S !== null)) {
          var re = Io(T, S);
          re != null && x.push(Zp(T, re, $));
        }
        if (u)
          break;
        T = T.return;
      }
      return x;
    }
    function _m(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var d = u, h = d.stateNode, S = d.tag;
        if (S === k && h !== null) {
          var x = h, T = Io(u, a);
          T != null && i.unshift(Zp(u, T, x));
          var $ = Io(u, t);
          $ != null && i.push(Zp(u, $, x));
        }
        u = u.return;
      }
      return i;
    }
    function ad(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== k);
      return e || null;
    }
    function yO(e, t) {
      for (var a = e, i = t, u = 0, d = a; d; d = ad(d))
        u++;
      for (var h = 0, S = i; S; S = ad(S))
        h++;
      for (; u - h > 0; )
        a = ad(a), u--;
      for (; h - u > 0; )
        i = ad(i), h--;
      for (var x = u; x--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = ad(a), i = ad(i);
      }
      return null;
    }
    function fE(e, t, a, i, u) {
      for (var d = t._reactName, h = [], S = a; S !== null && S !== i; ) {
        var x = S, T = x.alternate, $ = x.stateNode, H = x.tag;
        if (T !== null && T === i)
          break;
        if (H === k && $ !== null) {
          var F = $;
          if (u) {
            var J = Io(S, d);
            J != null && h.unshift(Zp(S, J, F));
          } else if (!u) {
            var re = Io(S, d);
            re != null && h.push(Zp(S, re, F));
          }
        }
        S = S.return;
      }
      h.length !== 0 && e.push({
        event: t,
        listeners: h
      });
    }
    function gO(e, t, a, i, u) {
      var d = i && u ? yO(i, u) : null;
      i !== null && fE(e, t, i, d, !1), u !== null && a !== null && fE(e, a, u, d, !0);
    }
    function SO(e, t) {
      return e + "__bubble";
    }
    var Xa = !1, ev = "dangerouslySetInnerHTML", Rm = "suppressContentEditableWarning", ts = "suppressHydrationWarning", dE = "autoFocus", Sc = "children", bc = "style", Tm = "__html", g0, Om, tv, pE, $m, vE, hE;
    g0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Om = function(e, t) {
      ip(e, t), Zc(e, t), $h(e, t, {
        registrationNameDependencies: Te,
        possibleRegistrationNames: Pe
      });
    }, vE = At && !document.documentMode, tv = function(e, t, a) {
      if (!Xa) {
        var i = km(a), u = km(t);
        u !== i && (Xa = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, pE = function(e) {
      if (!Xa) {
        Xa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, $m = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, hE = function(e, t) {
      var a = e.namespaceURI === ro ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var bO = /\r\n?/g, xO = /\u0000|\uFFFD/g;
    function km(e) {
      ur(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(bO, `
`).replace(xO, "");
    }
    function Dm(e, t, a, i) {
      var u = km(t), d = km(e);
      if (d !== u && (i && (Xa || (Xa = !0, m('Text content did not match. Server: "%s" Client: "%s"', d, u))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function mE(e) {
      return e.nodeType === io ? e : e.ownerDocument;
    }
    function EO() {
    }
    function Pm(e) {
      e.onclick = EO;
    }
    function CO(e, t, a, i, u) {
      for (var d in i)
        if (i.hasOwnProperty(d)) {
          var h = i[d];
          if (d === bc)
            h && Object.freeze(h), Ch(t, h);
          else if (d === ev) {
            var S = h ? h[Tm] : void 0;
            S != null && fh(t, S);
          } else if (d === Sc)
            if (typeof h == "string") {
              var x = e !== "textarea" || h !== "";
              x && Pu(t, h);
            } else typeof h == "number" && Pu(t, "" + h);
          else d === Rm || d === ts || d === dE || (Te.hasOwnProperty(d) ? h != null && (typeof h != "function" && $m(d, h), d === "onScroll" && An("scroll", t)) : h != null && jr(t, d, h, u));
        }
    }
    function wO(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], h = t[u + 1];
        d === bc ? Ch(e, h) : d === ev ? fh(e, h) : d === Sc ? Pu(e, h) : jr(e, d, h, i);
      }
    }
    function _O(e, t, a, i) {
      var u, d = mE(a), h, S = i;
      if (S === ro && (S = Jd(e)), S === ro) {
        if (u = Uo(e, t), !u && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var x = d.createElement("div");
          x.innerHTML = "<script><\/script>";
          var T = x.firstChild;
          h = x.removeChild(T);
        } else if (typeof t.is == "string")
          h = d.createElement(e, {
            is: t.is
          });
        else if (h = d.createElement(e), e === "select") {
          var $ = h;
          t.multiple ? $.multiple = !0 : t.size && ($.size = t.size);
        }
      } else
        h = d.createElementNS(S, e);
      return S === ro && !u && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !_e.call(g0, e) && (g0[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
    }
    function RO(e, t) {
      return mE(t).createTextNode(e);
    }
    function TO(e, t, a, i) {
      var u = Uo(t, a);
      Om(t, a);
      var d;
      switch (t) {
        case "dialog":
          An("cancel", e), An("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          An("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var h = 0; h < Kp.length; h++)
            An(Kp[h], e);
          d = a;
          break;
        case "source":
          An("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          An("error", e), An("load", e), d = a;
          break;
        case "details":
          An("toggle", e), d = a;
          break;
        case "input":
          di(e, a), d = Du(e, a), An("invalid", e);
          break;
        case "option":
          Bt(e, a), d = a;
          break;
        case "select":
          Pl(e, a), d = Ts(e, a), An("invalid", e);
          break;
        case "textarea":
          Gd(e, a), d = qd(e, a), An("invalid", e);
          break;
        default:
          d = a;
      }
      switch (Kc(t, d), CO(t, e, i, d, u), t) {
        case "input":
          fi(e), Z(e, a, !1);
          break;
        case "textarea":
          fi(e), sh(e);
          break;
        case "option":
          yn(e, a);
          break;
        case "select":
          Yd(e, a);
          break;
        default:
          typeof d.onClick == "function" && Pm(e);
          break;
      }
    }
    function OO(e, t, a, i, u) {
      Om(t, i);
      var d = null, h, S;
      switch (t) {
        case "input":
          h = Du(e, a), S = Du(e, i), d = [];
          break;
        case "select":
          h = Ts(e, a), S = Ts(e, i), d = [];
          break;
        case "textarea":
          h = qd(e, a), S = qd(e, i), d = [];
          break;
        default:
          h = a, S = i, typeof h.onClick != "function" && typeof S.onClick == "function" && Pm(e);
          break;
      }
      Kc(t, S);
      var x, T, $ = null;
      for (x in h)
        if (!(S.hasOwnProperty(x) || !h.hasOwnProperty(x) || h[x] == null))
          if (x === bc) {
            var H = h[x];
            for (T in H)
              H.hasOwnProperty(T) && ($ || ($ = {}), $[T] = "");
          } else x === ev || x === Sc || x === Rm || x === ts || x === dE || (Te.hasOwnProperty(x) ? d || (d = []) : (d = d || []).push(x, null));
      for (x in S) {
        var F = S[x], J = h != null ? h[x] : void 0;
        if (!(!S.hasOwnProperty(x) || F === J || F == null && J == null))
          if (x === bc)
            if (F && Object.freeze(F), J) {
              for (T in J)
                J.hasOwnProperty(T) && (!F || !F.hasOwnProperty(T)) && ($ || ($ = {}), $[T] = "");
              for (T in F)
                F.hasOwnProperty(T) && J[T] !== F[T] && ($ || ($ = {}), $[T] = F[T]);
            } else
              $ || (d || (d = []), d.push(x, $)), $ = F;
          else if (x === ev) {
            var re = F ? F[Tm] : void 0, le = J ? J[Tm] : void 0;
            re != null && le !== re && (d = d || []).push(x, re);
          } else x === Sc ? (typeof F == "string" || typeof F == "number") && (d = d || []).push(x, "" + F) : x === Rm || x === ts || (Te.hasOwnProperty(x) ? (F != null && (typeof F != "function" && $m(x, F), x === "onScroll" && An("scroll", e)), !d && J !== F && (d = [])) : (d = d || []).push(x, F));
      }
      return $ && (Wg($, S[bc]), (d = d || []).push(bc, $)), d;
    }
    function $O(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && E(e, u);
      var d = Uo(a, i), h = Uo(a, u);
      switch (wO(e, t, d, h), a) {
        case "input":
          N(e, u);
          break;
        case "textarea":
          uh(e, u);
          break;
        case "select":
          qc(e, u);
          break;
      }
    }
    function kO(e) {
      {
        var t = e.toLowerCase();
        return Ps.hasOwnProperty(t) && Ps[t] || null;
      }
    }
    function DO(e, t, a, i, u, d, h) {
      var S, x;
      switch (S = Uo(t, a), Om(t, a), t) {
        case "dialog":
          An("cancel", e), An("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          An("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < Kp.length; T++)
            An(Kp[T], e);
          break;
        case "source":
          An("error", e);
          break;
        case "img":
        case "image":
        case "link":
          An("error", e), An("load", e);
          break;
        case "details":
          An("toggle", e);
          break;
        case "input":
          di(e, a), An("invalid", e);
          break;
        case "option":
          Bt(e, a);
          break;
        case "select":
          Pl(e, a), An("invalid", e);
          break;
        case "textarea":
          Gd(e, a), An("invalid", e);
          break;
      }
      Kc(t, a);
      {
        x = /* @__PURE__ */ new Set();
        for (var $ = e.attributes, H = 0; H < $.length; H++) {
          var F = $[H].name.toLowerCase();
          switch (F) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              x.add($[H].name);
          }
        }
      }
      var J = null;
      for (var re in a)
        if (a.hasOwnProperty(re)) {
          var le = a[re];
          if (re === Sc)
            typeof le == "string" ? e.textContent !== le && (a[ts] !== !0 && Dm(e.textContent, le, d, h), J = [Sc, le]) : typeof le == "number" && e.textContent !== "" + le && (a[ts] !== !0 && Dm(e.textContent, le, d, h), J = [Sc, "" + le]);
          else if (Te.hasOwnProperty(re))
            le != null && (typeof le != "function" && $m(re, le), re === "onScroll" && An("scroll", e));
          else if (h && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var ze = void 0, dt = hn(re);
            if (a[ts] !== !0) {
              if (!(re === Rm || re === ts || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              re === "value" || re === "checked" || re === "selected")) {
                if (re === ev) {
                  var at = e.innerHTML, Ht = le ? le[Tm] : void 0;
                  if (Ht != null) {
                    var Mt = hE(e, Ht);
                    Mt !== at && tv(re, at, Mt);
                  }
                } else if (re === bc) {
                  if (x.delete(re), vE) {
                    var Q = Bg(le);
                    ze = e.getAttribute("style"), Q !== ze && tv(re, ze, Q);
                  }
                } else if (S && !L)
                  x.delete(re.toLowerCase()), ze = _l(e, re, le), le !== ze && tv(re, ze, le);
                else if (!$n(re, dt, S) && !sr(re, le, dt, S)) {
                  var ue = !1;
                  if (dt !== null)
                    x.delete(dt.attributeName), ze = Do(e, re, le, dt);
                  else {
                    var q = i;
                    if (q === ro && (q = Jd(t)), q === ro)
                      x.delete(re.toLowerCase());
                    else {
                      var be = kO(re);
                      be !== null && be !== re && (ue = !0, x.delete(be)), x.delete(re);
                    }
                    ze = _l(e, re, le);
                  }
                  var Ie = L;
                  !Ie && le !== ze && !ue && tv(re, ze, le);
                }
              }
            }
          }
        }
      switch (h && // $FlowFixMe - Should be inferred as not undefined.
      x.size > 0 && a[ts] !== !0 && pE(x), t) {
        case "input":
          fi(e), Z(e, a, !0);
          break;
        case "textarea":
          fi(e), sh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Pm(e);
          break;
      }
      return J;
    }
    function PO(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function S0(e, t) {
      {
        if (Xa)
          return;
        Xa = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function b0(e, t) {
      {
        if (Xa)
          return;
        Xa = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function x0(e, t, a) {
      {
        if (Xa)
          return;
        Xa = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function E0(e, t) {
      {
        if (t === "" || Xa)
          return;
        Xa = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function LO(e, t, a) {
      switch (t) {
        case "input":
          ae(e, a);
          return;
        case "textarea":
          Fg(e, a);
          return;
        case "select":
          Qd(e, a);
          return;
      }
    }
    var nv = function() {
    }, rv = function() {
    };
    {
      var AO = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], yE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], NO = yE.concat(["button"]), MO = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], gE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rv = function(e, t) {
        var a = Rt({}, e || gE), i = {
          tag: t
        };
        return yE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), NO.indexOf(t) !== -1 && (a.pTagInButtonScope = null), AO.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var zO = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return MO.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, jO = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, SE = {};
      nv = function(e, t, a) {
        a = a || gE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = zO(e, u) ? null : i, h = d ? null : jO(e, a), S = d || h;
        if (S) {
          var x = S.tag, T = !!d + "|" + e + "|" + x;
          if (!SE[T]) {
            SE[T] = !0;
            var $ = e, H = "";
            if (e === "#text" ? /\S/.test(t) ? $ = "Text nodes" : ($ = "Whitespace text nodes", H = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : $ = "<" + e + ">", d) {
              var F = "";
              x === "table" && e === "tr" && (F += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", $, x, H, F);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", $, x);
          }
        }
      };
    }
    var Lm = "suppressHydrationWarning", Am = "$", Nm = "/$", av = "$?", iv = "$!", FO = "style", C0 = null, w0 = null;
    function UO(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case io:
        case ep: {
          t = i === io ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Zd(null, "");
          break;
        }
        default: {
          var d = i === Yn ? e.parentNode : e, h = d.namespaceURI || null;
          t = d.tagName, a = Zd(h, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), x = rv(null, S);
        return {
          namespace: a,
          ancestorInfo: x
        };
      }
    }
    function HO(e, t, a) {
      {
        var i = e, u = Zd(i.namespace, t), d = rv(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function q3(e) {
      return e;
    }
    function IO(e) {
      C0 = Jn(), w0 = nO();
      var t = null;
      return ir(!1), t;
    }
    function BO(e) {
      rO(w0), ir(C0), C0 = null, w0 = null;
    }
    function VO(e, t, a, i, u) {
      var d;
      {
        var h = i;
        if (nv(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, x = rv(h.ancestorInfo, e);
          nv(null, S, x);
        }
        d = h.namespace;
      }
      var T = _O(e, t, a, d);
      return uv(u, T), P0(T, t), T;
    }
    function WO(e, t) {
      e.appendChild(t);
    }
    function YO(e, t, a, i, u) {
      switch (TO(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function QO(e, t, a, i, u, d) {
      {
        var h = d;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var S = "" + i.children, x = rv(h.ancestorInfo, t);
          nv(null, S, x);
        }
      }
      return OO(e, t, a, i);
    }
    function _0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function qO(e, t, a, i) {
      {
        var u = a;
        nv(null, e, u.ancestorInfo);
      }
      var d = RO(e, t);
      return uv(i, d), d;
    }
    function GO() {
      var e = window.event;
      return e === void 0 ? Ya : Wf(e.type);
    }
    var R0 = typeof setTimeout == "function" ? setTimeout : void 0, XO = typeof clearTimeout == "function" ? clearTimeout : void 0, T0 = -1, bE = typeof Promise == "function" ? Promise : void 0, KO = typeof queueMicrotask == "function" ? queueMicrotask : typeof bE < "u" ? function(e) {
      return bE.resolve(null).then(e).catch(JO);
    } : R0;
    function JO(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ZO(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function e$(e, t, a, i, u, d) {
      $O(e, t, a, i, u), P0(e, u);
    }
    function xE(e) {
      Pu(e, "");
    }
    function t$(e, t, a) {
      e.nodeValue = a;
    }
    function n$(e, t) {
      e.appendChild(t);
    }
    function r$(e, t) {
      var a;
      e.nodeType === Yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Pm(a);
    }
    function a$(e, t, a) {
      e.insertBefore(t, a);
    }
    function i$(e, t, a) {
      e.nodeType === Yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function o$(e, t) {
      e.removeChild(t);
    }
    function l$(e, t) {
      e.nodeType === Yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function O0(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Yn) {
          var d = u.data;
          if (d === Nm)
            if (i === 0) {
              e.removeChild(u), Zl(t);
              return;
            } else
              i--;
          else (d === Am || d === av || d === iv) && i++;
        }
        a = u;
      } while (a);
      Zl(t);
    }
    function u$(e, t) {
      e.nodeType === Yn ? O0(e.parentNode, t) : e.nodeType === aa && O0(e, t), Zl(e);
    }
    function s$(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function c$(e) {
      e.nodeValue = "";
    }
    function f$(e, t) {
      e = e;
      var a = t[FO], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Xc("display", i);
    }
    function d$(e, t) {
      e.nodeValue = t;
    }
    function p$(e) {
      e.nodeType === aa ? e.textContent = "" : e.nodeType === io && e.documentElement && e.removeChild(e.documentElement);
    }
    function v$(e, t, a) {
      return e.nodeType !== aa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function h$(e, t) {
      return t === "" || e.nodeType !== ao ? null : e;
    }
    function m$(e) {
      return e.nodeType !== Yn ? null : e;
    }
    function EE(e) {
      return e.data === av;
    }
    function $0(e) {
      return e.data === iv;
    }
    function y$(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function g$(e, t) {
      e._reactRetry = t;
    }
    function Mm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === aa || t === ao)
          break;
        if (t === Yn) {
          var a = e.data;
          if (a === Am || a === iv || a === av)
            break;
          if (a === Nm)
            return null;
        }
      }
      return e;
    }
    function ov(e) {
      return Mm(e.nextSibling);
    }
    function S$(e) {
      return Mm(e.firstChild);
    }
    function b$(e) {
      return Mm(e.firstChild);
    }
    function x$(e) {
      return Mm(e.nextSibling);
    }
    function E$(e, t, a, i, u, d, h) {
      uv(d, e), P0(e, a);
      var S;
      {
        var x = u;
        S = x.namespace;
      }
      var T = (d.mode & Dt) !== ut;
      return DO(e, t, a, S, i, T, h);
    }
    function C$(e, t, a, i) {
      return uv(a, e), a.mode & Dt, PO(e, t);
    }
    function w$(e, t) {
      uv(t, e);
    }
    function _$(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === Nm) {
            if (a === 0)
              return ov(t);
            a--;
          } else (i === Am || i === iv || i === av) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function CE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === Am || i === iv || i === av) {
            if (a === 0)
              return t;
            a--;
          } else i === Nm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function R$(e) {
      Zl(e);
    }
    function T$(e) {
      Zl(e);
    }
    function O$(e) {
      return e !== "head" && e !== "body";
    }
    function $$(e, t, a, i) {
      var u = !0;
      Dm(t.nodeValue, a, i, u);
    }
    function k$(e, t, a, i, u, d) {
      if (t[Lm] !== !0) {
        var h = !0;
        Dm(i.nodeValue, u, d, h);
      }
    }
    function D$(e, t) {
      t.nodeType === aa ? S0(e, t) : t.nodeType === Yn || b0(e, t);
    }
    function P$(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === aa ? S0(a, t) : t.nodeType === Yn || b0(a, t));
      }
    }
    function L$(e, t, a, i, u) {
      (u || t[Lm] !== !0) && (i.nodeType === aa ? S0(a, i) : i.nodeType === Yn || b0(a, i));
    }
    function A$(e, t, a) {
      x0(e, t);
    }
    function N$(e, t) {
      E0(e, t);
    }
    function M$(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && x0(i, t);
      }
    }
    function z$(e, t) {
      {
        var a = e.parentNode;
        a !== null && E0(a, t);
      }
    }
    function j$(e, t, a, i, u, d) {
      (d || t[Lm] !== !0) && x0(a, i);
    }
    function F$(e, t, a, i, u) {
      (u || t[Lm] !== !0) && E0(a, i);
    }
    function U$(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function H$(e) {
      Jp(e);
    }
    var id = Math.random().toString(36).slice(2), od = "__reactFiber$" + id, k0 = "__reactProps$" + id, lv = "__reactContainer$" + id, D0 = "__reactEvents$" + id, I$ = "__reactListeners$" + id, B$ = "__reactHandles$" + id;
    function V$(e) {
      delete e[od], delete e[k0], delete e[D0], delete e[I$], delete e[B$];
    }
    function uv(e, t) {
      t[od] = e;
    }
    function zm(e, t) {
      t[lv] = e;
    }
    function wE(e) {
      e[lv] = null;
    }
    function sv(e) {
      return !!e[lv];
    }
    function xc(e) {
      var t = e[od];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[lv] || a[od], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = CE(e); u !== null; ) {
              var d = u[od];
              if (d)
                return d;
              u = CE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ns(e) {
      var t = e[od] || e[lv];
      return t && (t.tag === k || t.tag === j || t.tag === I || t.tag === O) ? t : null;
    }
    function ld(e) {
      if (e.tag === k || e.tag === j)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function jm(e) {
      return e[k0] || null;
    }
    function P0(e, t) {
      e[k0] = t;
    }
    function W$(e) {
      var t = e[D0];
      return t === void 0 && (t = e[D0] = /* @__PURE__ */ new Set()), t;
    }
    var _E = {}, RE = c.ReactDebugCurrentFrame;
    function Fm(e) {
      if (e) {
        var t = e._owner, a = eo(e.type, e._source, t ? t.type : null);
        RE.setExtraStackFrame(a);
      } else
        RE.setExtraStackFrame(null);
    }
    function yo(e, t, a, i, u) {
      {
        var d = Function.call.bind(_e);
        for (var h in e)
          if (d(e, h)) {
            var S = void 0;
            try {
              if (typeof e[h] != "function") {
                var x = Error((i || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              S = e[h](t, h, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              S = T;
            }
            S && !(S instanceof Error) && (Fm(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, h, typeof S), Fm(null)), S instanceof Error && !(S.message in _E) && (_E[S.message] = !0, Fm(u), m("Failed %s type: %s", a, S.message), Fm(null));
          }
      }
    }
    var L0 = [], Um;
    Um = [];
    var iu = -1;
    function rs(e) {
      return {
        current: e
      };
    }
    function ha(e, t) {
      if (iu < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== Um[iu] && m("Unexpected Fiber popped."), e.current = L0[iu], L0[iu] = null, Um[iu] = null, iu--;
    }
    function ma(e, t, a) {
      iu++, L0[iu] = e.current, Um[iu] = a, e.current = t;
    }
    var A0;
    A0 = {};
    var Si = {};
    Object.freeze(Si);
    var ou = rs(Si), ol = rs(!1), N0 = Si;
    function ud(e, t, a) {
      return a && ll(t) ? N0 : ou.current;
    }
    function TE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function sd(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Si;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var h in i)
          d[h] = t[h];
        {
          var S = St(e) || "Unknown";
          yo(i, d, "context", S);
        }
        return u && TE(e, t, d), d;
      }
    }
    function Hm() {
      return ol.current;
    }
    function ll(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Im(e) {
      ha(ol, e), ha(ou, e);
    }
    function M0(e) {
      ha(ol, e), ha(ou, e);
    }
    function OE(e, t, a) {
      {
        if (ou.current !== Si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ma(ou, t, e), ma(ol, a, e);
      }
    }
    function $E(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var d = St(e) || "Unknown";
            A0[d] || (A0[d] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var h = i.getChildContext();
        for (var S in h)
          if (!(S in u))
            throw new Error((St(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var x = St(e) || "Unknown";
          yo(u, h, "child context", x);
        }
        return Rt({}, a, h);
      }
    }
    function Bm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Si;
        return N0 = ou.current, ma(ou, a, e), ma(ol, ol.current, e), !0;
      }
    }
    function kE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = $E(e, t, N0);
          i.__reactInternalMemoizedMergedChildContext = u, ha(ol, e), ha(ou, e), ma(ou, u, e), ma(ol, a, e);
        } else
          ha(ol, e), ma(ol, a, e);
      }
    }
    function Y$(e) {
      {
        if (!Fl(e) || e.tag !== R)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
              return t.stateNode.context;
            case R: {
              var a = t.type;
              if (ll(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var as = 0, Vm = 1, lu = null, z0 = !1, j0 = !1;
    function DE(e) {
      lu === null ? lu = [e] : lu.push(e);
    }
    function Q$(e) {
      z0 = !0, DE(e);
    }
    function PE() {
      z0 && is();
    }
    function is() {
      if (!j0 && lu !== null) {
        j0 = !0;
        var e = 0, t = qa();
        try {
          var a = !0, i = lu;
          for (Kn(Br); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          lu = null, z0 = !1;
        } catch (d) {
          throw lu !== null && (lu = lu.slice(e + 1)), dp(Us, is), d;
        } finally {
          Kn(t), j0 = !1;
        }
      }
      return null;
    }
    var cd = [], fd = 0, Wm = null, Ym = 0, Wi = [], Yi = 0, Ec = null, uu = 1, su = "";
    function q$(e) {
      return wc(), (e.flags & Ni) !== lt;
    }
    function G$(e) {
      return wc(), Ym;
    }
    function X$() {
      var e = su, t = uu, a = t & ~K$(t);
      return a.toString(32) + e;
    }
    function Cc(e, t) {
      wc(), cd[fd++] = Ym, cd[fd++] = Wm, Wm = e, Ym = t;
    }
    function LE(e, t, a) {
      wc(), Wi[Yi++] = uu, Wi[Yi++] = su, Wi[Yi++] = Ec, Ec = e;
      var i = uu, u = su, d = Qm(i) - 1, h = i & ~(1 << d), S = a + 1, x = Qm(t) + d;
      if (x > 30) {
        var T = d - d % 5, $ = (1 << T) - 1, H = (h & $).toString(32), F = h >> T, J = d - T, re = Qm(t) + J, le = S << J, ze = le | F, dt = H + u;
        uu = 1 << re | ze, su = dt;
      } else {
        var at = S << d, Ht = at | h, Mt = u;
        uu = 1 << x | Ht, su = Mt;
      }
    }
    function F0(e) {
      wc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Cc(e, a), LE(e, a, i);
      }
    }
    function Qm(e) {
      return 32 - Gn(e);
    }
    function K$(e) {
      return 1 << Qm(e) - 1;
    }
    function U0(e) {
      for (; e === Wm; )
        Wm = cd[--fd], cd[fd] = null, Ym = cd[--fd], cd[fd] = null;
      for (; e === Ec; )
        Ec = Wi[--Yi], Wi[Yi] = null, su = Wi[--Yi], Wi[Yi] = null, uu = Wi[--Yi], Wi[Yi] = null;
    }
    function J$() {
      return wc(), Ec !== null ? {
        id: uu,
        overflow: su
      } : null;
    }
    function Z$(e, t) {
      wc(), Wi[Yi++] = uu, Wi[Yi++] = su, Wi[Yi++] = Ec, uu = t.id, su = t.overflow, Ec = e;
    }
    function wc() {
      qr() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Qr = null, Qi = null, go = !1, _c = !1, os = null;
    function ek() {
      go && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function AE() {
      _c = !0;
    }
    function tk() {
      return _c;
    }
    function nk(e) {
      var t = e.stateNode.containerInfo;
      return Qi = b$(t), Qr = e, go = !0, os = null, _c = !1, !0;
    }
    function rk(e, t, a) {
      return Qi = x$(t), Qr = e, go = !0, os = null, _c = !1, a !== null && Z$(e, a), !0;
    }
    function NE(e, t) {
      switch (e.tag) {
        case O: {
          D$(e.stateNode.containerInfo, t);
          break;
        }
        case k: {
          var a = (e.mode & Dt) !== ut;
          L$(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case I: {
          var i = e.memoizedState;
          i.dehydrated !== null && P$(i.dehydrated, t);
          break;
        }
      }
    }
    function ME(e, t) {
      NE(e, t);
      var a = l2();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ha) : i.push(a);
    }
    function H0(e, t) {
      {
        if (_c)
          return;
        switch (e.tag) {
          case O: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case k:
                var i = t.type;
                t.pendingProps, A$(a, i);
                break;
              case j:
                var u = t.pendingProps;
                N$(a, u);
                break;
            }
            break;
          }
          case k: {
            var d = e.type, h = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case k: {
                var x = t.type, T = t.pendingProps, $ = (e.mode & Dt) !== ut;
                j$(
                  d,
                  h,
                  S,
                  x,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  $
                );
                break;
              }
              case j: {
                var H = t.pendingProps, F = (e.mode & Dt) !== ut;
                F$(
                  d,
                  h,
                  S,
                  H,
                  // TODO: Delete this argument when we remove the legacy root API.
                  F
                );
                break;
              }
            }
            break;
          }
          case I: {
            var J = e.memoizedState, re = J.dehydrated;
            if (re !== null) switch (t.tag) {
              case k:
                var le = t.type;
                t.pendingProps, M$(re, le);
                break;
              case j:
                var ze = t.pendingProps;
                z$(re, ze);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function zE(e, t) {
      t.flags = t.flags & ~oa | Dn, H0(e, t);
    }
    function jE(e, t) {
      switch (e.tag) {
        case k: {
          var a = e.type;
          e.pendingProps;
          var i = v$(t, a);
          return i !== null ? (e.stateNode = i, Qr = e, Qi = S$(i), !0) : !1;
        }
        case j: {
          var u = e.pendingProps, d = h$(t, u);
          return d !== null ? (e.stateNode = d, Qr = e, Qi = null, !0) : !1;
        }
        case I: {
          var h = m$(t);
          if (h !== null) {
            var S = {
              dehydrated: h,
              treeContext: J$(),
              retryLane: ca
            };
            e.memoizedState = S;
            var x = u2(h);
            return x.return = e, e.child = x, Qr = e, Qi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function I0(e) {
      return (e.mode & Dt) !== ut && (e.flags & it) === lt;
    }
    function B0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function V0(e) {
      if (go) {
        var t = Qi;
        if (!t) {
          I0(e) && (H0(Qr, e), B0()), zE(Qr, e), go = !1, Qr = e;
          return;
        }
        var a = t;
        if (!jE(e, t)) {
          I0(e) && (H0(Qr, e), B0()), t = ov(a);
          var i = Qr;
          if (!t || !jE(e, t)) {
            zE(Qr, e), go = !1, Qr = e;
            return;
          }
          ME(i, a);
        }
      }
    }
    function ak(e, t, a) {
      var i = e.stateNode, u = !_c, d = E$(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = d, d !== null;
    }
    function ik(e) {
      var t = e.stateNode, a = e.memoizedProps, i = C$(t, a, e);
      if (i) {
        var u = Qr;
        if (u !== null)
          switch (u.tag) {
            case O: {
              var d = u.stateNode.containerInfo, h = (u.mode & Dt) !== ut;
              $$(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
            case k: {
              var S = u.type, x = u.memoizedProps, T = u.stateNode, $ = (u.mode & Dt) !== ut;
              k$(
                S,
                x,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                $
              );
              break;
            }
          }
      }
      return i;
    }
    function ok(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      w$(a, e);
    }
    function lk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return _$(a);
    }
    function FE(e) {
      for (var t = e.return; t !== null && t.tag !== k && t.tag !== O && t.tag !== I; )
        t = t.return;
      Qr = t;
    }
    function qm(e) {
      if (e !== Qr)
        return !1;
      if (!go)
        return FE(e), go = !0, !1;
      if (e.tag !== O && (e.tag !== k || O$(e.type) && !_0(e.type, e.memoizedProps))) {
        var t = Qi;
        if (t)
          if (I0(e))
            UE(e), B0();
          else
            for (; t; )
              ME(e, t), t = ov(t);
      }
      return FE(e), e.tag === I ? Qi = lk(e) : Qi = Qr ? ov(e.stateNode) : null, !0;
    }
    function uk() {
      return go && Qi !== null;
    }
    function UE(e) {
      for (var t = Qi; t; )
        NE(e, t), t = ov(t);
    }
    function dd() {
      Qr = null, Qi = null, go = !1, _c = !1;
    }
    function HE() {
      os !== null && (Aw(os), os = null);
    }
    function qr() {
      return go;
    }
    function W0(e) {
      os === null ? os = [e] : os.push(e);
    }
    var sk = c.ReactCurrentBatchConfig, ck = null;
    function fk() {
      return sk.transition;
    }
    var So = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var dk = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & un && (t = a), a = a.return;
        return t;
      }, Rc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cv = [], fv = [], dv = [], pv = [], vv = [], hv = [], Tc = /* @__PURE__ */ new Set();
      So.recordUnsafeLifecycleWarnings = function(e, t) {
        Tc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cv.push(e), e.mode & un && typeof t.UNSAFE_componentWillMount == "function" && fv.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dv.push(e), e.mode & un && typeof t.UNSAFE_componentWillReceiveProps == "function" && pv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vv.push(e), e.mode & un && typeof t.UNSAFE_componentWillUpdate == "function" && hv.push(e));
      }, So.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cv.length > 0 && (cv.forEach(function(F) {
          e.add(St(F) || "Component"), Tc.add(F.type);
        }), cv = []);
        var t = /* @__PURE__ */ new Set();
        fv.length > 0 && (fv.forEach(function(F) {
          t.add(St(F) || "Component"), Tc.add(F.type);
        }), fv = []);
        var a = /* @__PURE__ */ new Set();
        dv.length > 0 && (dv.forEach(function(F) {
          a.add(St(F) || "Component"), Tc.add(F.type);
        }), dv = []);
        var i = /* @__PURE__ */ new Set();
        pv.length > 0 && (pv.forEach(function(F) {
          i.add(St(F) || "Component"), Tc.add(F.type);
        }), pv = []);
        var u = /* @__PURE__ */ new Set();
        vv.length > 0 && (vv.forEach(function(F) {
          u.add(St(F) || "Component"), Tc.add(F.type);
        }), vv = []);
        var d = /* @__PURE__ */ new Set();
        if (hv.length > 0 && (hv.forEach(function(F) {
          d.add(St(F) || "Component"), Tc.add(F.type);
        }), hv = []), t.size > 0) {
          var h = Rc(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
        }
        if (i.size > 0) {
          var S = Rc(i);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (d.size > 0) {
          var x = Rc(d);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, x);
        }
        if (e.size > 0) {
          var T = Rc(e);
          b(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var $ = Rc(a);
          b(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, $);
        }
        if (u.size > 0) {
          var H = Rc(u);
          b(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, H);
        }
      };
      var Gm = /* @__PURE__ */ new Map(), IE = /* @__PURE__ */ new Set();
      So.recordLegacyContextWarning = function(e, t) {
        var a = dk(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!IE.has(e.type)) {
          var i = Gm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Gm.set(a, i)), i.push(e));
        }
      }, So.flushLegacyContextWarning = function() {
        Gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              i.add(St(d) || "Component"), IE.add(d.type);
            });
            var u = Rc(i);
            try {
              an(a), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, So.discardPendingWarnings = function() {
        cv = [], fv = [], dv = [], pv = [], vv = [], hv = [], Gm = /* @__PURE__ */ new Map();
      };
    }
    var Y0, Q0, q0, G0, X0, BE = function(e, t) {
    };
    Y0 = !1, Q0 = !1, q0 = {}, G0 = {}, X0 = {}, BE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = St(t) || "Component";
        G0[a] || (G0[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function pk(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function mv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & un || X) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== R) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !pk(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = St(e) || "Component";
          q0[u] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), q0[u] = !0);
        }
        if (a._owner) {
          var d = a._owner, h;
          if (d) {
            var S = d;
            if (S.tag !== R)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            h = S.stateNode;
          }
          if (!h)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var x = h;
          Na(i, "ref");
          var T = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var $ = function(H) {
            var F = x.refs;
            H === null ? delete F[T] : F[T] = H;
          };
          return $._stringRef = T, $;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Xm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Km(e) {
      {
        var t = St(e) || "Component";
        if (X0[t])
          return;
        X0[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function VE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function WE(e) {
      function t(Q, ue) {
        if (e) {
          var q = Q.deletions;
          q === null ? (Q.deletions = [ue], Q.flags |= Ha) : q.push(ue);
        }
      }
      function a(Q, ue) {
        if (!e)
          return null;
        for (var q = ue; q !== null; )
          t(Q, q), q = q.sibling;
        return null;
      }
      function i(Q, ue) {
        for (var q = /* @__PURE__ */ new Map(), be = ue; be !== null; )
          be.key !== null ? q.set(be.key, be) : q.set(be.index, be), be = be.sibling;
        return q;
      }
      function u(Q, ue) {
        var q = Mc(Q, ue);
        return q.index = 0, q.sibling = null, q;
      }
      function d(Q, ue, q) {
        if (Q.index = q, !e)
          return Q.flags |= Ni, ue;
        var be = Q.alternate;
        if (be !== null) {
          var Ie = be.index;
          return Ie < ue ? (Q.flags |= Dn, ue) : Ie;
        } else
          return Q.flags |= Dn, ue;
      }
      function h(Q) {
        return e && Q.alternate === null && (Q.flags |= Dn), Q;
      }
      function S(Q, ue, q, be) {
        if (ue === null || ue.tag !== j) {
          var Ie = Wb(q, Q.mode, be);
          return Ie.return = Q, Ie;
        } else {
          var Fe = u(ue, q);
          return Fe.return = Q, Fe;
        }
      }
      function x(Q, ue, q, be) {
        var Ie = q.type;
        if (Ie === _i)
          return $(Q, ue, q.props.children, be, q.key);
        if (ue !== null && (ue.elementType === Ie || // Keep this check inline so it only runs on the false path:
        Xw(ue, q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ie == "object" && Ie !== null && Ie.$$typeof === bt && VE(Ie) === ue.type)) {
          var Fe = u(ue, q.props);
          return Fe.ref = mv(Q, ue, q), Fe.return = Q, Fe._debugSource = q._source, Fe._debugOwner = q._owner, Fe;
        }
        var yt = Vb(q, Q.mode, be);
        return yt.ref = mv(Q, ue, q), yt.return = Q, yt;
      }
      function T(Q, ue, q, be) {
        if (ue === null || ue.tag !== P || ue.stateNode.containerInfo !== q.containerInfo || ue.stateNode.implementation !== q.implementation) {
          var Ie = Yb(q, Q.mode, be);
          return Ie.return = Q, Ie;
        } else {
          var Fe = u(ue, q.children || []);
          return Fe.return = Q, Fe;
        }
      }
      function $(Q, ue, q, be, Ie) {
        if (ue === null || ue.tag !== B) {
          var Fe = ys(q, Q.mode, be, Ie);
          return Fe.return = Q, Fe;
        } else {
          var yt = u(ue, q);
          return yt.return = Q, yt;
        }
      }
      function H(Q, ue, q) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var be = Wb("" + ue, Q.mode, q);
          return be.return = Q, be;
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case Fr: {
              var Ie = Vb(ue, Q.mode, q);
              return Ie.ref = mv(Q, null, ue), Ie.return = Q, Ie;
            }
            case hr: {
              var Fe = Yb(ue, Q.mode, q);
              return Fe.return = Q, Fe;
            }
            case bt: {
              var yt = ue._payload, Et = ue._init;
              return H(Q, Et(yt), q);
            }
          }
          if ($t(ue) || wt(ue)) {
            var cn = ys(ue, Q.mode, q, null);
            return cn.return = Q, cn;
          }
          Xm(Q, ue);
        }
        return typeof ue == "function" && Km(Q), null;
      }
      function F(Q, ue, q, be) {
        var Ie = ue !== null ? ue.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return Ie !== null ? null : S(Q, ue, "" + q, be);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Fr:
              return q.key === Ie ? x(Q, ue, q, be) : null;
            case hr:
              return q.key === Ie ? T(Q, ue, q, be) : null;
            case bt: {
              var Fe = q._payload, yt = q._init;
              return F(Q, ue, yt(Fe), be);
            }
          }
          if ($t(q) || wt(q))
            return Ie !== null ? null : $(Q, ue, q, be, null);
          Xm(Q, q);
        }
        return typeof q == "function" && Km(Q), null;
      }
      function J(Q, ue, q, be, Ie) {
        if (typeof be == "string" && be !== "" || typeof be == "number") {
          var Fe = Q.get(q) || null;
          return S(ue, Fe, "" + be, Ie);
        }
        if (typeof be == "object" && be !== null) {
          switch (be.$$typeof) {
            case Fr: {
              var yt = Q.get(be.key === null ? q : be.key) || null;
              return x(ue, yt, be, Ie);
            }
            case hr: {
              var Et = Q.get(be.key === null ? q : be.key) || null;
              return T(ue, Et, be, Ie);
            }
            case bt:
              var cn = be._payload, Kt = be._init;
              return J(Q, ue, q, Kt(cn), Ie);
          }
          if ($t(be) || wt(be)) {
            var or = Q.get(q) || null;
            return $(ue, or, be, Ie, null);
          }
          Xm(ue, be);
        }
        return typeof be == "function" && Km(ue), null;
      }
      function re(Q, ue, q) {
        {
          if (typeof Q != "object" || Q === null)
            return ue;
          switch (Q.$$typeof) {
            case Fr:
            case hr:
              BE(Q, q);
              var be = Q.key;
              if (typeof be != "string")
                break;
              if (ue === null) {
                ue = /* @__PURE__ */ new Set(), ue.add(be);
                break;
              }
              if (!ue.has(be)) {
                ue.add(be);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", be);
              break;
            case bt:
              var Ie = Q._payload, Fe = Q._init;
              re(Fe(Ie), ue, q);
              break;
          }
        }
        return ue;
      }
      function le(Q, ue, q, be) {
        for (var Ie = null, Fe = 0; Fe < q.length; Fe++) {
          var yt = q[Fe];
          Ie = re(yt, Ie, Q);
        }
        for (var Et = null, cn = null, Kt = ue, or = 0, Jt = 0, er = null; Kt !== null && Jt < q.length; Jt++) {
          Kt.index > Jt ? (er = Kt, Kt = null) : er = Kt.sibling;
          var ga = F(Q, Kt, q[Jt], be);
          if (ga === null) {
            Kt === null && (Kt = er);
            break;
          }
          e && Kt && ga.alternate === null && t(Q, Kt), or = d(ga, or, Jt), cn === null ? Et = ga : cn.sibling = ga, cn = ga, Kt = er;
        }
        if (Jt === q.length) {
          if (a(Q, Kt), qr()) {
            var ta = Jt;
            Cc(Q, ta);
          }
          return Et;
        }
        if (Kt === null) {
          for (; Jt < q.length; Jt++) {
            var xi = H(Q, q[Jt], be);
            xi !== null && (or = d(xi, or, Jt), cn === null ? Et = xi : cn.sibling = xi, cn = xi);
          }
          if (qr()) {
            var Pa = Jt;
            Cc(Q, Pa);
          }
          return Et;
        }
        for (var La = i(Q, Kt); Jt < q.length; Jt++) {
          var Sa = J(La, Q, Jt, q[Jt], be);
          Sa !== null && (e && Sa.alternate !== null && La.delete(Sa.key === null ? Jt : Sa.key), or = d(Sa, or, Jt), cn === null ? Et = Sa : cn.sibling = Sa, cn = Sa);
        }
        if (e && La.forEach(function(Dd) {
          return t(Q, Dd);
        }), qr()) {
          var mu = Jt;
          Cc(Q, mu);
        }
        return Et;
      }
      function ze(Q, ue, q, be) {
        var Ie = wt(q);
        if (typeof Ie != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          q[Symbol.toStringTag] === "Generator" && (Q0 || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Q0 = !0), q.entries === Ie && (Y0 || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Y0 = !0);
          var Fe = Ie.call(q);
          if (Fe)
            for (var yt = null, Et = Fe.next(); !Et.done; Et = Fe.next()) {
              var cn = Et.value;
              yt = re(cn, yt, Q);
            }
        }
        var Kt = Ie.call(q);
        if (Kt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var or = null, Jt = null, er = ue, ga = 0, ta = 0, xi = null, Pa = Kt.next(); er !== null && !Pa.done; ta++, Pa = Kt.next()) {
          er.index > ta ? (xi = er, er = null) : xi = er.sibling;
          var La = F(Q, er, Pa.value, be);
          if (La === null) {
            er === null && (er = xi);
            break;
          }
          e && er && La.alternate === null && t(Q, er), ga = d(La, ga, ta), Jt === null ? or = La : Jt.sibling = La, Jt = La, er = xi;
        }
        if (Pa.done) {
          if (a(Q, er), qr()) {
            var Sa = ta;
            Cc(Q, Sa);
          }
          return or;
        }
        if (er === null) {
          for (; !Pa.done; ta++, Pa = Kt.next()) {
            var mu = H(Q, Pa.value, be);
            mu !== null && (ga = d(mu, ga, ta), Jt === null ? or = mu : Jt.sibling = mu, Jt = mu);
          }
          if (qr()) {
            var Dd = ta;
            Cc(Q, Dd);
          }
          return or;
        }
        for (var qv = i(Q, er); !Pa.done; ta++, Pa = Kt.next()) {
          var hl = J(qv, Q, ta, Pa.value, be);
          hl !== null && (e && hl.alternate !== null && qv.delete(hl.key === null ? ta : hl.key), ga = d(hl, ga, ta), Jt === null ? or = hl : Jt.sibling = hl, Jt = hl);
        }
        if (e && qv.forEach(function(F2) {
          return t(Q, F2);
        }), qr()) {
          var j2 = ta;
          Cc(Q, j2);
        }
        return or;
      }
      function dt(Q, ue, q, be) {
        if (ue !== null && ue.tag === j) {
          a(Q, ue.sibling);
          var Ie = u(ue, q);
          return Ie.return = Q, Ie;
        }
        a(Q, ue);
        var Fe = Wb(q, Q.mode, be);
        return Fe.return = Q, Fe;
      }
      function at(Q, ue, q, be) {
        for (var Ie = q.key, Fe = ue; Fe !== null; ) {
          if (Fe.key === Ie) {
            var yt = q.type;
            if (yt === _i) {
              if (Fe.tag === B) {
                a(Q, Fe.sibling);
                var Et = u(Fe, q.props.children);
                return Et.return = Q, Et._debugSource = q._source, Et._debugOwner = q._owner, Et;
              }
            } else if (Fe.elementType === yt || // Keep this check inline so it only runs on the false path:
            Xw(Fe, q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof yt == "object" && yt !== null && yt.$$typeof === bt && VE(yt) === Fe.type) {
              a(Q, Fe.sibling);
              var cn = u(Fe, q.props);
              return cn.ref = mv(Q, Fe, q), cn.return = Q, cn._debugSource = q._source, cn._debugOwner = q._owner, cn;
            }
            a(Q, Fe);
            break;
          } else
            t(Q, Fe);
          Fe = Fe.sibling;
        }
        if (q.type === _i) {
          var Kt = ys(q.props.children, Q.mode, be, q.key);
          return Kt.return = Q, Kt;
        } else {
          var or = Vb(q, Q.mode, be);
          return or.ref = mv(Q, ue, q), or.return = Q, or;
        }
      }
      function Ht(Q, ue, q, be) {
        for (var Ie = q.key, Fe = ue; Fe !== null; ) {
          if (Fe.key === Ie)
            if (Fe.tag === P && Fe.stateNode.containerInfo === q.containerInfo && Fe.stateNode.implementation === q.implementation) {
              a(Q, Fe.sibling);
              var yt = u(Fe, q.children || []);
              return yt.return = Q, yt;
            } else {
              a(Q, Fe);
              break;
            }
          else
            t(Q, Fe);
          Fe = Fe.sibling;
        }
        var Et = Yb(q, Q.mode, be);
        return Et.return = Q, Et;
      }
      function Mt(Q, ue, q, be) {
        var Ie = typeof q == "object" && q !== null && q.type === _i && q.key === null;
        if (Ie && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Fr:
              return h(at(Q, ue, q, be));
            case hr:
              return h(Ht(Q, ue, q, be));
            case bt:
              var Fe = q._payload, yt = q._init;
              return Mt(Q, ue, yt(Fe), be);
          }
          if ($t(q))
            return le(Q, ue, q, be);
          if (wt(q))
            return ze(Q, ue, q, be);
          Xm(Q, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? h(dt(Q, ue, "" + q, be)) : (typeof q == "function" && Km(Q), a(Q, ue));
      }
      return Mt;
    }
    var pd = WE(!0), YE = WE(!1);
    function vk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Mc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Mc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function hk(e, t) {
      for (var a = e.child; a !== null; )
        n2(a, t), a = a.sibling;
    }
    var K0 = rs(null), J0;
    J0 = {};
    var Jm = null, vd = null, Z0 = null, Zm = !1;
    function ey() {
      Jm = null, vd = null, Z0 = null, Zm = !1;
    }
    function QE() {
      Zm = !0;
    }
    function qE() {
      Zm = !1;
    }
    function GE(e, t, a) {
      ma(K0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== J0 && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = J0;
    }
    function eS(e, t) {
      var a = K0.current;
      ha(K0, t), e._currentValue = a;
    }
    function tS(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Jl(i.childLanes, t) ? u !== null && !Jl(u.childLanes, t) && (u.childLanes = _t(u.childLanes, t)) : (i.childLanes = _t(i.childLanes, t), u !== null && (u.childLanes = _t(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mk(e, t, a) {
      yk(e, t, a);
    }
    function yk(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, d = i.dependencies;
        if (d !== null) {
          u = i.child;
          for (var h = d.firstContext; h !== null; ) {
            if (h.context === t) {
              if (i.tag === R) {
                var S = ec(a), x = cu(pn, S);
                x.tag = ny;
                var T = i.updateQueue;
                if (T !== null) {
                  var $ = T.shared, H = $.pending;
                  H === null ? x.next = x : (x.next = H.next, H.next = x), $.pending = x;
                }
              }
              i.lanes = _t(i.lanes, a);
              var F = i.alternate;
              F !== null && (F.lanes = _t(F.lanes, a)), tS(i.return, a, e), d.lanes = _t(d.lanes, a);
              break;
            }
            h = h.next;
          }
        } else if (i.tag === oe)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === We) {
          var J = i.return;
          if (J === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          J.lanes = _t(J.lanes, a);
          var re = J.alternate;
          re !== null && (re.lanes = _t(re.lanes, a)), tS(J, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var le = u.sibling;
            if (le !== null) {
              le.return = u.return, u = le;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function hd(e, t) {
      Jm = e, vd = null, Z0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (fa(a.lanes, t) && Dv(), a.firstContext = null);
      }
    }
    function vr(e) {
      Zm && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Z0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (vd === null) {
          if (Jm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          vd = a, Jm.dependencies = {
            lanes: ve,
            firstContext: a
          };
        } else
          vd = vd.next = a;
      }
      return t;
    }
    var Oc = null;
    function nS(e) {
      Oc === null ? Oc = [e] : Oc.push(e);
    }
    function gk() {
      if (Oc !== null) {
        for (var e = 0; e < Oc.length; e++) {
          var t = Oc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = i, a.next = d;
            }
            t.pending = a;
          }
        }
        Oc = null;
      }
    }
    function XE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, nS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, ty(e, i);
    }
    function Sk(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, nS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function bk(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, nS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, ty(e, i);
    }
    function Ka(e, t) {
      return ty(e, t);
    }
    var xk = ty;
    function ty(e, t) {
      e.lanes = _t(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = _t(a.lanes, t)), a === null && (e.flags & (Dn | oa)) !== lt && Yw(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = _t(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = _t(a.childLanes, t) : (u.flags & (Dn | oa)) !== lt && Yw(e), i = u, u = u.return;
      if (i.tag === O) {
        var d = i.stateNode;
        return d;
      } else
        return null;
    }
    var KE = 0, JE = 1, ny = 2, rS = 3, ry = !1, aS, ay;
    aS = !1, ay = null;
    function iS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ve
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function ZE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function cu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: KE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function ls(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (ay === u && !aS && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), aS = !0), SP()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, xk(e, a);
      } else
        return bk(e, u, t, a);
    }
    function iy(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if ($p(a)) {
          var d = u.lanes;
          d = Dp(d, e.pendingLanes);
          var h = _t(d, a);
          u.lanes = h, Hf(e, h);
        }
      }
    }
    function oS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var d = null, h = null, S = a.firstBaseUpdate;
          if (S !== null) {
            var x = S;
            do {
              var T = {
                eventTime: x.eventTime,
                lane: x.lane,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null
              };
              h === null ? d = h = T : (h.next = T, h = T), x = x.next;
            } while (x !== null);
            h === null ? d = h = t : (h.next = t, h = t);
          } else
            d = h = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: h,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var $ = a.lastBaseUpdate;
      $ === null ? a.firstBaseUpdate = t : $.next = t, a.lastBaseUpdate = t;
    }
    function Ek(e, t, a, i, u, d) {
      switch (a.tag) {
        case JE: {
          var h = a.payload;
          if (typeof h == "function") {
            QE();
            var S = h.call(d, i, u);
            {
              if (e.mode & un) {
                Pn(!0);
                try {
                  h.call(d, i, u);
                } finally {
                  Pn(!1);
                }
              }
              qE();
            }
            return S;
          }
          return h;
        }
        case rS:
          e.flags = e.flags & ~cr | it;
        case KE: {
          var x = a.payload, T;
          if (typeof x == "function") {
            QE(), T = x.call(d, i, u);
            {
              if (e.mode & un) {
                Pn(!0);
                try {
                  x.call(d, i, u);
                } finally {
                  Pn(!1);
                }
              }
              qE();
            }
          } else
            T = x;
          return T == null ? i : Rt({}, i, T);
        }
        case ny:
          return ry = !0, i;
      }
      return i;
    }
    function oy(e, t, a, i) {
      var u = e.updateQueue;
      ry = !1, ay = u.shared;
      var d = u.firstBaseUpdate, h = u.lastBaseUpdate, S = u.shared.pending;
      if (S !== null) {
        u.shared.pending = null;
        var x = S, T = x.next;
        x.next = null, h === null ? d = T : h.next = T, h = x;
        var $ = e.alternate;
        if ($ !== null) {
          var H = $.updateQueue, F = H.lastBaseUpdate;
          F !== h && (F === null ? H.firstBaseUpdate = T : F.next = T, H.lastBaseUpdate = x);
        }
      }
      if (d !== null) {
        var J = u.baseState, re = ve, le = null, ze = null, dt = null, at = d;
        do {
          var Ht = at.lane, Mt = at.eventTime;
          if (Jl(i, Ht)) {
            if (dt !== null) {
              var ue = {
                eventTime: Mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                tag: at.tag,
                payload: at.payload,
                callback: at.callback,
                next: null
              };
              dt = dt.next = ue;
            }
            J = Ek(e, u, at, J, t, a);
            var q = at.callback;
            if (q !== null && // If the update was already committed, we should not queue its
            // callback again.
            at.lane !== Vt) {
              e.flags |= gn;
              var be = u.effects;
              be === null ? u.effects = [at] : be.push(at);
            }
          } else {
            var Q = {
              eventTime: Mt,
              lane: Ht,
              tag: at.tag,
              payload: at.payload,
              callback: at.callback,
              next: null
            };
            dt === null ? (ze = dt = Q, le = J) : dt = dt.next = Q, re = _t(re, Ht);
          }
          if (at = at.next, at === null) {
            if (S = u.shared.pending, S === null)
              break;
            var Ie = S, Fe = Ie.next;
            Ie.next = null, at = Fe, u.lastBaseUpdate = Ie, u.shared.pending = null;
          }
        } while (!0);
        dt === null && (le = J), u.baseState = le, u.firstBaseUpdate = ze, u.lastBaseUpdate = dt;
        var yt = u.shared.interleaved;
        if (yt !== null) {
          var Et = yt;
          do
            re = _t(re, Et.lane), Et = Et.next;
          while (Et !== yt);
        } else d === null && (u.shared.lanes = ve);
        Bv(re), e.lanes = re, e.memoizedState = J;
      }
      ay = null;
    }
    function Ck(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function eC() {
      ry = !1;
    }
    function ly() {
      return ry;
    }
    function tC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var d = i[u], h = d.callback;
          h !== null && (d.callback = null, Ck(h, a));
        }
    }
    var yv = {}, us = rs(yv), gv = rs(yv), uy = rs(yv);
    function sy(e) {
      if (e === yv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function nC() {
      var e = sy(uy.current);
      return e;
    }
    function lS(e, t) {
      ma(uy, t, e), ma(gv, e, e), ma(us, yv, e);
      var a = UO(t);
      ha(us, e), ma(us, a, e);
    }
    function md(e) {
      ha(us, e), ha(gv, e), ha(uy, e);
    }
    function uS() {
      var e = sy(us.current);
      return e;
    }
    function rC(e) {
      sy(uy.current);
      var t = sy(us.current), a = HO(t, e.type);
      t !== a && (ma(gv, e, e), ma(us, a, e));
    }
    function sS(e) {
      gv.current === e && (ha(us, e), ha(gv, e));
    }
    var wk = 0, aC = 1, iC = 1, Sv = 2, bo = rs(wk);
    function cS(e, t) {
      return (e & t) !== 0;
    }
    function yd(e) {
      return e & aC;
    }
    function fS(e, t) {
      return e & aC | t;
    }
    function _k(e, t) {
      return e | t;
    }
    function ss(e, t) {
      ma(bo, t, e);
    }
    function gd(e) {
      ha(bo, e);
    }
    function Rk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function cy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === I) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || EE(i) || $0(i))
              return t;
          }
        } else if (t.tag === ot && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & it) !== lt;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ja = (
      /*   */
      0
    ), Er = (
      /* */
      1
    ), ul = (
      /*  */
      2
    ), Cr = (
      /*    */
      4
    ), Gr = (
      /*   */
      8
    ), dS = [];
    function pS() {
      for (var e = 0; e < dS.length; e++) {
        var t = dS[e];
        t._workInProgressVersionPrimary = null;
      }
      dS.length = 0;
    }
    function Tk(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var He = c.ReactCurrentDispatcher, bv = c.ReactCurrentBatchConfig, vS, Sd;
    vS = /* @__PURE__ */ new Set();
    var $c = ve, sn = null, wr = null, _r = null, fy = !1, xv = !1, Ev = 0, Ok = 0, $k = 25, de = null, qi = null, cs = -1, hS = !1;
    function tn() {
      {
        var e = de;
        qi === null ? qi = [e] : qi.push(e);
      }
    }
    function De() {
      {
        var e = de;
        qi !== null && (cs++, qi[cs] !== e && kk(e));
      }
    }
    function bd(e) {
      e != null && !$t(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", de, typeof e);
    }
    function kk(e) {
      {
        var t = St(sn);
        if (!vS.has(t) && (vS.add(t), qi !== null)) {
          for (var a = "", i = 30, u = 0; u <= cs; u++) {
            for (var d = qi[u], h = u === cs ? e : d, S = u + 1 + ". " + d; S.length < i; )
              S += " ";
            S += h + `
`, a += S;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ya() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function mS(e, t) {
      if (hS)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", de), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, de, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function xd(e, t, a, i, u, d) {
      $c = d, sn = t, qi = e !== null ? e._debugHookTypes : null, cs = -1, hS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ve, e !== null && e.memoizedState !== null ? He.current = TC : qi !== null ? He.current = RC : He.current = _C;
      var h = a(i, u);
      if (xv) {
        var S = 0;
        do {
          if (xv = !1, Ev = 0, S >= $k)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, hS = !1, wr = null, _r = null, t.updateQueue = null, cs = -1, He.current = OC, h = a(i, u);
        } while (xv);
      }
      He.current = wy, t._debugHookTypes = qi;
      var x = wr !== null && wr.next !== null;
      if ($c = ve, sn = null, wr = null, _r = null, de = null, qi = null, cs = -1, e !== null && (e.flags & qn) !== (t.flags & qn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Dt) !== ut && m("Internal React error: Expected static flag was missing. Please notify the React team."), fy = !1, x)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return h;
    }
    function Ed() {
      var e = Ev !== 0;
      return Ev = 0, e;
    }
    function oC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Gt) !== ut ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = tc(e.lanes, a);
    }
    function lC() {
      if (He.current = wy, fy) {
        for (var e = sn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        fy = !1;
      }
      $c = ve, sn = null, wr = null, _r = null, qi = null, cs = -1, de = null, bC = !1, xv = !1, Ev = 0;
    }
    function sl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return _r === null ? sn.memoizedState = _r = e : _r = _r.next = e, _r;
    }
    function Gi() {
      var e;
      if (wr === null) {
        var t = sn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = wr.next;
      var a;
      if (_r === null ? a = sn.memoizedState : a = _r.next, a !== null)
        _r = a, a = _r.next, wr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        wr = e;
        var i = {
          memoizedState: wr.memoizedState,
          baseState: wr.baseState,
          baseQueue: wr.baseQueue,
          queue: wr.queue,
          next: null
        };
        _r === null ? sn.memoizedState = _r = i : _r = _r.next = i;
      }
      return _r;
    }
    function uC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function yS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function gS(e, t, a) {
      var i = sl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: ve,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = d;
      var h = d.dispatch = Ak.bind(null, sn, d);
      return [i.memoizedState, h];
    }
    function SS(e, t, a) {
      var i = Gi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = wr, h = d.baseQueue, S = u.pending;
      if (S !== null) {
        if (h !== null) {
          var x = h.next, T = S.next;
          h.next = T, S.next = x;
        }
        d.baseQueue !== h && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = h = S, u.pending = null;
      }
      if (h !== null) {
        var $ = h.next, H = d.baseState, F = null, J = null, re = null, le = $;
        do {
          var ze = le.lane;
          if (Jl($c, ze)) {
            if (re !== null) {
              var at = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                action: le.action,
                hasEagerState: le.hasEagerState,
                eagerState: le.eagerState,
                next: null
              };
              re = re.next = at;
            }
            if (le.hasEagerState)
              H = le.eagerState;
            else {
              var Ht = le.action;
              H = e(H, Ht);
            }
          } else {
            var dt = {
              lane: ze,
              action: le.action,
              hasEagerState: le.hasEagerState,
              eagerState: le.eagerState,
              next: null
            };
            re === null ? (J = re = dt, F = H) : re = re.next = dt, sn.lanes = _t(sn.lanes, ze), Bv(ze);
          }
          le = le.next;
        } while (le !== null && le !== $);
        re === null ? F = H : re.next = J, ge(H, i.memoizedState) || Dv(), i.memoizedState = H, i.baseState = F, i.baseQueue = re, u.lastRenderedState = H;
      }
      var Mt = u.interleaved;
      if (Mt !== null) {
        var Q = Mt;
        do {
          var ue = Q.lane;
          sn.lanes = _t(sn.lanes, ue), Bv(ue), Q = Q.next;
        } while (Q !== Mt);
      } else h === null && (u.lanes = ve);
      var q = u.dispatch;
      return [i.memoizedState, q];
    }
    function bS(e, t, a) {
      var i = Gi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, h = u.pending, S = i.memoizedState;
      if (h !== null) {
        u.pending = null;
        var x = h.next, T = x;
        do {
          var $ = T.action;
          S = e(S, $), T = T.next;
        } while (T !== x);
        ge(S, i.memoizedState) || Dv(), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), u.lastRenderedState = S;
      }
      return [S, d];
    }
    function G3(e, t, a) {
    }
    function X3(e, t, a) {
    }
    function xS(e, t, a) {
      var i = sn, u = sl(), d, h = qr();
      if (h) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), Sd || d !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Sd = !0);
      } else {
        if (d = t(), !Sd) {
          var S = t();
          ge(d, S) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Sd = !0);
        }
        var x = By();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ff(x, $c) || sC(i, t, d);
      }
      u.memoizedState = d;
      var T = {
        value: d,
        getSnapshot: t
      };
      return u.queue = T, my(fC.bind(null, i, T, e), [e]), i.flags |= ia, Cv(Er | Gr, cC.bind(null, i, T, d, t), void 0, null), d;
    }
    function dy(e, t, a) {
      var i = sn, u = Gi(), d = t();
      if (!Sd) {
        var h = t();
        ge(d, h) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Sd = !0);
      }
      var S = u.memoizedState, x = !ge(S, d);
      x && (u.memoizedState = d, Dv());
      var T = u.queue;
      if (_v(fC.bind(null, i, T, e), [e]), T.getSnapshot !== t || x || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & Er) {
        i.flags |= ia, Cv(Er | Gr, cC.bind(null, i, T, d, t), void 0, null);
        var $ = By();
        if ($ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ff($, $c) || sC(i, t, d);
      }
      return d;
    }
    function sC(e, t, a) {
      e.flags |= Hu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = sn.updateQueue;
      if (u === null)
        u = uC(), sn.updateQueue = u, u.stores = [i];
      else {
        var d = u.stores;
        d === null ? u.stores = [i] : d.push(i);
      }
    }
    function cC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, dC(t) && pC(e);
    }
    function fC(e, t, a) {
      var i = function() {
        dC(t) && pC(e);
      };
      return a(i);
    }
    function dC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function pC(e) {
      var t = Ka(e, mt);
      t !== null && $r(t, e, mt, pn);
    }
    function py(e) {
      var t = sl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ve,
        dispatch: null,
        lastRenderedReducer: yS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Nk.bind(null, sn, a);
      return [t.memoizedState, i];
    }
    function ES(e) {
      return SS(yS);
    }
    function CS(e) {
      return bS(yS);
    }
    function Cv(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, d = sn.updateQueue;
      if (d === null)
        d = uC(), sn.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var h = d.lastEffect;
        if (h === null)
          d.lastEffect = u.next = u;
        else {
          var S = h.next;
          h.next = u, u.next = S, d.lastEffect = u;
        }
      }
      return u;
    }
    function wS(e) {
      var t = sl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function vy(e) {
      var t = Gi();
      return t.memoizedState;
    }
    function wv(e, t, a, i) {
      var u = sl(), d = i === void 0 ? null : i;
      sn.flags |= e, u.memoizedState = Cv(Er | t, a, void 0, d);
    }
    function hy(e, t, a, i) {
      var u = Gi(), d = i === void 0 ? null : i, h = void 0;
      if (wr !== null) {
        var S = wr.memoizedState;
        if (h = S.destroy, d !== null) {
          var x = S.deps;
          if (mS(d, x)) {
            u.memoizedState = Cv(t, a, h, d);
            return;
          }
        }
      }
      sn.flags |= e, u.memoizedState = Cv(Er | t, a, h, d);
    }
    function my(e, t) {
      return (sn.mode & Gt) !== ut ? wv(Mi | ia | df, Gr, e, t) : wv(ia | df, Gr, e, t);
    }
    function _v(e, t) {
      return hy(ia, Gr, e, t);
    }
    function _S(e, t) {
      return wv(jt, ul, e, t);
    }
    function yy(e, t) {
      return hy(jt, ul, e, t);
    }
    function RS(e, t) {
      var a = jt;
      return a |= lo, (sn.mode & Gt) !== ut && (a |= Vo), wv(a, Cr, e, t);
    }
    function gy(e, t) {
      return hy(jt, Cr, e, t);
    }
    function vC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function TS(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = jt;
      return u |= lo, (sn.mode & Gt) !== ut && (u |= Vo), wv(u, Cr, vC.bind(null, t, e), i);
    }
    function Sy(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return hy(jt, Cr, vC.bind(null, t, e), i);
    }
    function Dk(e, t) {
    }
    var by = Dk;
    function OS(e, t) {
      var a = sl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function xy(e, t) {
      var a = Gi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var d = u[1];
        if (mS(i, d))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function $S(e, t) {
      var a = sl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Ey(e, t) {
      var a = Gi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var d = u[1];
        if (mS(i, d))
          return u[0];
      }
      var h = e();
      return a.memoizedState = [h, i], h;
    }
    function kS(e) {
      var t = sl();
      return t.memoizedState = e, e;
    }
    function hC(e) {
      var t = Gi(), a = wr, i = a.memoizedState;
      return yC(t, i, e);
    }
    function mC(e) {
      var t = Gi();
      if (wr === null)
        return t.memoizedState = e, e;
      var a = wr.memoizedState;
      return yC(t, a, e);
    }
    function yC(e, t, a) {
      var i = !Tp($c);
      if (i) {
        if (!ge(a, t)) {
          var u = kp();
          sn.lanes = _t(sn.lanes, u), Bv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Dv()), e.memoizedState = a, a;
    }
    function Pk(e, t, a) {
      var i = qa();
      Kn(Zh(i, Ui)), e(!0);
      var u = bv.transition;
      bv.transition = {};
      var d = bv.transition;
      bv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Kn(i), bv.transition = u, u === null && d._updatedFibers) {
          var h = d._updatedFibers.size;
          h > 10 && b("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function DS() {
      var e = py(!1), t = e[0], a = e[1], i = Pk.bind(null, a), u = sl();
      return u.memoizedState = i, [t, i];
    }
    function gC() {
      var e = ES(), t = e[0], a = Gi(), i = a.memoizedState;
      return [t, i];
    }
    function SC() {
      var e = CS(), t = e[0], a = Gi(), i = a.memoizedState;
      return [t, i];
    }
    var bC = !1;
    function Lk() {
      return bC;
    }
    function PS() {
      var e = sl(), t = By(), a = t.identifierPrefix, i;
      if (qr()) {
        var u = X$();
        i = ":" + a + "R" + u;
        var d = Ev++;
        d > 0 && (i += "H" + d.toString(32)), i += ":";
      } else {
        var h = Ok++;
        i = ":" + a + "r" + h.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Cy() {
      var e = Gi(), t = e.memoizedState;
      return t;
    }
    function Ak(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = hs(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (xC(e))
        EC(t, u);
      else {
        var d = XE(e, t, u, i);
        if (d !== null) {
          var h = Da();
          $r(d, e, i, h), CC(d, t, i);
        }
      }
      wC(e, i);
    }
    function Nk(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = hs(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (xC(e))
        EC(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === ve && (d === null || d.lanes === ve)) {
          var h = t.lastRenderedReducer;
          if (h !== null) {
            var S;
            S = He.current, He.current = xo;
            try {
              var x = t.lastRenderedState, T = h(x, a);
              if (u.hasEagerState = !0, u.eagerState = T, ge(T, x)) {
                Sk(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              He.current = S;
            }
          }
        }
        var $ = XE(e, t, u, i);
        if ($ !== null) {
          var H = Da();
          $r($, e, i, H), CC($, t, i);
        }
      }
      wC(e, i);
    }
    function xC(e) {
      var t = e.alternate;
      return e === sn || t !== null && t === sn;
    }
    function EC(e, t) {
      xv = fy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function CC(e, t, a) {
      if ($p(a)) {
        var i = t.lanes;
        i = Dp(i, e.pendingLanes);
        var u = _t(i, a);
        t.lanes = u, Hf(e, u);
      }
    }
    function wC(e, t, a) {
      Ws(e, t);
    }
    var wy = {
      readContext: vr,
      useCallback: ya,
      useContext: ya,
      useEffect: ya,
      useImperativeHandle: ya,
      useInsertionEffect: ya,
      useLayoutEffect: ya,
      useMemo: ya,
      useReducer: ya,
      useRef: ya,
      useState: ya,
      useDebugValue: ya,
      useDeferredValue: ya,
      useTransition: ya,
      useMutableSource: ya,
      useSyncExternalStore: ya,
      useId: ya,
      unstable_isNewReconciler: ie
    }, _C = null, RC = null, TC = null, OC = null, cl = null, xo = null, _y = null;
    {
      var LS = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, xt = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      _C = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return de = "useCallback", tn(), bd(t), OS(e, t);
        },
        useContext: function(e) {
          return de = "useContext", tn(), vr(e);
        },
        useEffect: function(e, t) {
          return de = "useEffect", tn(), bd(t), my(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return de = "useImperativeHandle", tn(), bd(a), TS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return de = "useInsertionEffect", tn(), bd(t), _S(e, t);
        },
        useLayoutEffect: function(e, t) {
          return de = "useLayoutEffect", tn(), bd(t), RS(e, t);
        },
        useMemo: function(e, t) {
          de = "useMemo", tn(), bd(t);
          var a = He.current;
          He.current = cl;
          try {
            return $S(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          de = "useReducer", tn();
          var i = He.current;
          He.current = cl;
          try {
            return gS(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return de = "useRef", tn(), wS(e);
        },
        useState: function(e) {
          de = "useState", tn();
          var t = He.current;
          He.current = cl;
          try {
            return py(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return de = "useDebugValue", tn(), void 0;
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", tn(), kS(e);
        },
        useTransition: function() {
          return de = "useTransition", tn(), DS();
        },
        useMutableSource: function(e, t, a) {
          return de = "useMutableSource", tn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return de = "useSyncExternalStore", tn(), xS(e, t, a);
        },
        useId: function() {
          return de = "useId", tn(), PS();
        },
        unstable_isNewReconciler: ie
      }, RC = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return de = "useCallback", De(), OS(e, t);
        },
        useContext: function(e) {
          return de = "useContext", De(), vr(e);
        },
        useEffect: function(e, t) {
          return de = "useEffect", De(), my(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return de = "useImperativeHandle", De(), TS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return de = "useInsertionEffect", De(), _S(e, t);
        },
        useLayoutEffect: function(e, t) {
          return de = "useLayoutEffect", De(), RS(e, t);
        },
        useMemo: function(e, t) {
          de = "useMemo", De();
          var a = He.current;
          He.current = cl;
          try {
            return $S(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          de = "useReducer", De();
          var i = He.current;
          He.current = cl;
          try {
            return gS(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return de = "useRef", De(), wS(e);
        },
        useState: function(e) {
          de = "useState", De();
          var t = He.current;
          He.current = cl;
          try {
            return py(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return de = "useDebugValue", De(), void 0;
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", De(), kS(e);
        },
        useTransition: function() {
          return de = "useTransition", De(), DS();
        },
        useMutableSource: function(e, t, a) {
          return de = "useMutableSource", De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return de = "useSyncExternalStore", De(), xS(e, t, a);
        },
        useId: function() {
          return de = "useId", De(), PS();
        },
        unstable_isNewReconciler: ie
      }, TC = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return de = "useCallback", De(), xy(e, t);
        },
        useContext: function(e) {
          return de = "useContext", De(), vr(e);
        },
        useEffect: function(e, t) {
          return de = "useEffect", De(), _v(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return de = "useImperativeHandle", De(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return de = "useInsertionEffect", De(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return de = "useLayoutEffect", De(), gy(e, t);
        },
        useMemo: function(e, t) {
          de = "useMemo", De();
          var a = He.current;
          He.current = xo;
          try {
            return Ey(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          de = "useReducer", De();
          var i = He.current;
          He.current = xo;
          try {
            return SS(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return de = "useRef", De(), vy();
        },
        useState: function(e) {
          de = "useState", De();
          var t = He.current;
          He.current = xo;
          try {
            return ES(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return de = "useDebugValue", De(), by();
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", De(), hC(e);
        },
        useTransition: function() {
          return de = "useTransition", De(), gC();
        },
        useMutableSource: function(e, t, a) {
          return de = "useMutableSource", De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return de = "useSyncExternalStore", De(), dy(e, t);
        },
        useId: function() {
          return de = "useId", De(), Cy();
        },
        unstable_isNewReconciler: ie
      }, OC = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return de = "useCallback", De(), xy(e, t);
        },
        useContext: function(e) {
          return de = "useContext", De(), vr(e);
        },
        useEffect: function(e, t) {
          return de = "useEffect", De(), _v(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return de = "useImperativeHandle", De(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return de = "useInsertionEffect", De(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return de = "useLayoutEffect", De(), gy(e, t);
        },
        useMemo: function(e, t) {
          de = "useMemo", De();
          var a = He.current;
          He.current = _y;
          try {
            return Ey(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          de = "useReducer", De();
          var i = He.current;
          He.current = _y;
          try {
            return bS(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return de = "useRef", De(), vy();
        },
        useState: function(e) {
          de = "useState", De();
          var t = He.current;
          He.current = _y;
          try {
            return CS(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return de = "useDebugValue", De(), by();
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", De(), mC(e);
        },
        useTransition: function() {
          return de = "useTransition", De(), SC();
        },
        useMutableSource: function(e, t, a) {
          return de = "useMutableSource", De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return de = "useSyncExternalStore", De(), dy(e, t);
        },
        useId: function() {
          return de = "useId", De(), Cy();
        },
        unstable_isNewReconciler: ie
      }, cl = {
        readContext: function(e) {
          return LS(), vr(e);
        },
        useCallback: function(e, t) {
          return de = "useCallback", xt(), tn(), OS(e, t);
        },
        useContext: function(e) {
          return de = "useContext", xt(), tn(), vr(e);
        },
        useEffect: function(e, t) {
          return de = "useEffect", xt(), tn(), my(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return de = "useImperativeHandle", xt(), tn(), TS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return de = "useInsertionEffect", xt(), tn(), _S(e, t);
        },
        useLayoutEffect: function(e, t) {
          return de = "useLayoutEffect", xt(), tn(), RS(e, t);
        },
        useMemo: function(e, t) {
          de = "useMemo", xt(), tn();
          var a = He.current;
          He.current = cl;
          try {
            return $S(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          de = "useReducer", xt(), tn();
          var i = He.current;
          He.current = cl;
          try {
            return gS(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return de = "useRef", xt(), tn(), wS(e);
        },
        useState: function(e) {
          de = "useState", xt(), tn();
          var t = He.current;
          He.current = cl;
          try {
            return py(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return de = "useDebugValue", xt(), tn(), void 0;
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", xt(), tn(), kS(e);
        },
        useTransition: function() {
          return de = "useTransition", xt(), tn(), DS();
        },
        useMutableSource: function(e, t, a) {
          return de = "useMutableSource", xt(), tn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return de = "useSyncExternalStore", xt(), tn(), xS(e, t, a);
        },
        useId: function() {
          return de = "useId", xt(), tn(), PS();
        },
        unstable_isNewReconciler: ie
      }, xo = {
        readContext: function(e) {
          return LS(), vr(e);
        },
        useCallback: function(e, t) {
          return de = "useCallback", xt(), De(), xy(e, t);
        },
        useContext: function(e) {
          return de = "useContext", xt(), De(), vr(e);
        },
        useEffect: function(e, t) {
          return de = "useEffect", xt(), De(), _v(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return de = "useImperativeHandle", xt(), De(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return de = "useInsertionEffect", xt(), De(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return de = "useLayoutEffect", xt(), De(), gy(e, t);
        },
        useMemo: function(e, t) {
          de = "useMemo", xt(), De();
          var a = He.current;
          He.current = xo;
          try {
            return Ey(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          de = "useReducer", xt(), De();
          var i = He.current;
          He.current = xo;
          try {
            return SS(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return de = "useRef", xt(), De(), vy();
        },
        useState: function(e) {
          de = "useState", xt(), De();
          var t = He.current;
          He.current = xo;
          try {
            return ES(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return de = "useDebugValue", xt(), De(), by();
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", xt(), De(), hC(e);
        },
        useTransition: function() {
          return de = "useTransition", xt(), De(), gC();
        },
        useMutableSource: function(e, t, a) {
          return de = "useMutableSource", xt(), De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return de = "useSyncExternalStore", xt(), De(), dy(e, t);
        },
        useId: function() {
          return de = "useId", xt(), De(), Cy();
        },
        unstable_isNewReconciler: ie
      }, _y = {
        readContext: function(e) {
          return LS(), vr(e);
        },
        useCallback: function(e, t) {
          return de = "useCallback", xt(), De(), xy(e, t);
        },
        useContext: function(e) {
          return de = "useContext", xt(), De(), vr(e);
        },
        useEffect: function(e, t) {
          return de = "useEffect", xt(), De(), _v(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return de = "useImperativeHandle", xt(), De(), Sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return de = "useInsertionEffect", xt(), De(), yy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return de = "useLayoutEffect", xt(), De(), gy(e, t);
        },
        useMemo: function(e, t) {
          de = "useMemo", xt(), De();
          var a = He.current;
          He.current = xo;
          try {
            return Ey(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          de = "useReducer", xt(), De();
          var i = He.current;
          He.current = xo;
          try {
            return bS(e, t, a);
          } finally {
            He.current = i;
          }
        },
        useRef: function(e) {
          return de = "useRef", xt(), De(), vy();
        },
        useState: function(e) {
          de = "useState", xt(), De();
          var t = He.current;
          He.current = xo;
          try {
            return CS(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return de = "useDebugValue", xt(), De(), by();
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", xt(), De(), mC(e);
        },
        useTransition: function() {
          return de = "useTransition", xt(), De(), SC();
        },
        useMutableSource: function(e, t, a) {
          return de = "useMutableSource", xt(), De(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return de = "useSyncExternalStore", xt(), De(), dy(e, t);
        },
        useId: function() {
          return de = "useId", xt(), De(), Cy();
        },
        unstable_isNewReconciler: ie
      };
    }
    var fs = s.unstable_now, $C = 0, Ry = -1, Rv = -1, Ty = -1, AS = !1, Oy = !1;
    function kC() {
      return AS;
    }
    function Mk() {
      Oy = !0;
    }
    function zk() {
      AS = !1, Oy = !1;
    }
    function jk() {
      AS = Oy, Oy = !1;
    }
    function DC() {
      return $C;
    }
    function PC() {
      $C = fs();
    }
    function NS(e) {
      Rv = fs(), e.actualStartTime < 0 && (e.actualStartTime = fs());
    }
    function LC(e) {
      Rv = -1;
    }
    function $y(e, t) {
      if (Rv >= 0) {
        var a = fs() - Rv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Rv = -1;
      }
    }
    function fl(e) {
      if (Ry >= 0) {
        var t = fs() - Ry;
        Ry = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ce:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function MS(e) {
      if (Ty >= 0) {
        var t = fs() - Ty;
        Ty = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ce:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function dl() {
      Ry = fs();
    }
    function zS() {
      Ty = fs();
    }
    function jS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Eo(e, t) {
      if (e && e.defaultProps) {
        var a = Rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var FS = {}, US, HS, IS, BS, VS, AC, ky, WS, YS, QS, Tv;
    {
      US = /* @__PURE__ */ new Set(), HS = /* @__PURE__ */ new Set(), IS = /* @__PURE__ */ new Set(), BS = /* @__PURE__ */ new Set(), WS = /* @__PURE__ */ new Set(), VS = /* @__PURE__ */ new Set(), YS = /* @__PURE__ */ new Set(), QS = /* @__PURE__ */ new Set(), Tv = /* @__PURE__ */ new Set();
      var NC = /* @__PURE__ */ new Set();
      ky = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          NC.has(a) || (NC.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, AC = function(e, t) {
        if (t === void 0) {
          var a = It(e) || "Component";
          VS.has(a) || (VS.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(FS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(FS);
    }
    function qS(e, t, a, i) {
      var u = e.memoizedState, d = a(i, u);
      {
        if (e.mode & un) {
          Pn(!0);
          try {
            d = a(i, u);
          } finally {
            Pn(!1);
          }
        }
        AC(t, d);
      }
      var h = d == null ? u : Rt({}, u, d);
      if (e.memoizedState = h, e.lanes === ve) {
        var S = e.updateQueue;
        S.baseState = h;
      }
    }
    var GS = {
      isMounted: zh,
      enqueueSetState: function(e, t, a) {
        var i = Uu(e), u = Da(), d = hs(i), h = cu(u, d);
        h.payload = t, a != null && (ky(a, "setState"), h.callback = a);
        var S = ls(i, h, d);
        S !== null && ($r(S, i, d, u), iy(S, i, d)), Ws(i, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Uu(e), u = Da(), d = hs(i), h = cu(u, d);
        h.tag = JE, h.payload = t, a != null && (ky(a, "replaceState"), h.callback = a);
        var S = ls(i, h, d);
        S !== null && ($r(S, i, d, u), iy(S, i, d)), Ws(i, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Uu(e), i = Da(), u = hs(a), d = cu(i, u);
        d.tag = ny, t != null && (ky(t, "forceUpdate"), d.callback = t);
        var h = ls(a, d, u);
        h !== null && ($r(h, a, u, i), iy(h, a, u)), Sf(a, u);
      }
    };
    function MC(e, t, a, i, u, d, h) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var x = S.shouldComponentUpdate(i, d, h);
        {
          if (e.mode & un) {
            Pn(!0);
            try {
              x = S.shouldComponentUpdate(i, d, h);
            } finally {
              Pn(!1);
            }
          }
          x === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", It(t) || "Component");
        }
        return x;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ke(a, i) || !Ke(u, d) : !0;
    }
    function Fk(e, t, a) {
      var i = e.stateNode;
      {
        var u = It(t) || "Component", d = i.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Tv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === ut && (Tv.add(t), m(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Tv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & un) === ut && (Tv.add(t), m(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !YS.has(t) && (YS.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", It(t) || "A pure component"), typeof i.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var h = i.props !== a;
        i.props !== void 0 && h && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !IS.has(t) && (IS.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", It(t))), typeof i.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var S = i.state;
        S && (typeof S != "object" || $t(S)) && m("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function zC(e, t) {
      t.updater = GS, e.stateNode = t, jl(t, e), t._reactInternalInstance = FS;
    }
    function jC(e, t, a) {
      var i = !1, u = Si, d = Si, h = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === M && h._context === void 0
        );
        if (!S && !QS.has(t)) {
          QS.add(t);
          var x = "";
          h === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? x = " However, it is set to a " + typeof h + "." : h.$$typeof === Ti ? x = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", It(t) || "Component", x);
        }
      }
      if (typeof h == "object" && h !== null)
        d = vr(h);
      else {
        u = ud(e, t, !0);
        var T = t.contextTypes;
        i = T != null, d = i ? sd(e, u) : Si;
      }
      var $ = new t(a, d);
      if (e.mode & un) {
        Pn(!0);
        try {
          $ = new t(a, d);
        } finally {
          Pn(!1);
        }
      }
      var H = e.memoizedState = $.state !== null && $.state !== void 0 ? $.state : null;
      zC(e, $);
      {
        if (typeof t.getDerivedStateFromProps == "function" && H === null) {
          var F = It(t) || "Component";
          HS.has(F) || (HS.add(F), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", F, $.state === null ? "null" : "undefined", F));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof $.getSnapshotBeforeUpdate == "function") {
          var J = null, re = null, le = null;
          if (typeof $.componentWillMount == "function" && $.componentWillMount.__suppressDeprecationWarning !== !0 ? J = "componentWillMount" : typeof $.UNSAFE_componentWillMount == "function" && (J = "UNSAFE_componentWillMount"), typeof $.componentWillReceiveProps == "function" && $.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? re = "componentWillReceiveProps" : typeof $.UNSAFE_componentWillReceiveProps == "function" && (re = "UNSAFE_componentWillReceiveProps"), typeof $.componentWillUpdate == "function" && $.componentWillUpdate.__suppressDeprecationWarning !== !0 ? le = "componentWillUpdate" : typeof $.UNSAFE_componentWillUpdate == "function" && (le = "UNSAFE_componentWillUpdate"), J !== null || re !== null || le !== null) {
            var ze = It(t) || "Component", dt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            BS.has(ze) || (BS.add(ze), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ze, dt, J !== null ? `
  ` + J : "", re !== null ? `
  ` + re : "", le !== null ? `
  ` + le : ""));
          }
        }
      }
      return i && TE(e, u, d), $;
    }
    function Uk(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", St(e) || "Component"), GS.enqueueReplaceState(t, t.state, null));
    }
    function FC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var d = St(e) || "Component";
          US.has(d) || (US.add(d), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        GS.enqueueReplaceState(t, t.state, null);
      }
    }
    function XS(e, t, a, i) {
      Fk(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, iS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = vr(d);
      else {
        var h = ud(e, t, !0);
        u.context = sd(e, h);
      }
      {
        if (u.state === a) {
          var S = It(t) || "Component";
          WS.has(S) || (WS.add(S), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & un && So.recordLegacyContextWarning(e, u), So.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var x = t.getDerivedStateFromProps;
      if (typeof x == "function" && (qS(e, t, x, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Uk(e, u), oy(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var T = jt;
        T |= lo, (e.mode & Gt) !== ut && (T |= Vo), e.flags |= T;
      }
    }
    function Hk(e, t, a, i) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var h = u.context, S = t.contextType, x = Si;
      if (typeof S == "object" && S !== null)
        x = vr(S);
      else {
        var T = ud(e, t, !0);
        x = sd(e, T);
      }
      var $ = t.getDerivedStateFromProps, H = typeof $ == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !H && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== a || h !== x) && FC(e, u, a, x), eC();
      var F = e.memoizedState, J = u.state = F;
      if (oy(e, a, u, i), J = e.memoizedState, d === a && F === J && !Hm() && !ly()) {
        if (typeof u.componentDidMount == "function") {
          var re = jt;
          re |= lo, (e.mode & Gt) !== ut && (re |= Vo), e.flags |= re;
        }
        return !1;
      }
      typeof $ == "function" && (qS(e, t, $, a), J = e.memoizedState);
      var le = ly() || MC(e, t, d, a, F, J, x);
      if (le) {
        if (!H && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ze = jt;
          ze |= lo, (e.mode & Gt) !== ut && (ze |= Vo), e.flags |= ze;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var dt = jt;
          dt |= lo, (e.mode & Gt) !== ut && (dt |= Vo), e.flags |= dt;
        }
        e.memoizedProps = a, e.memoizedState = J;
      }
      return u.props = a, u.state = J, u.context = x, le;
    }
    function Ik(e, t, a, i, u) {
      var d = t.stateNode;
      ZE(e, t);
      var h = t.memoizedProps, S = t.type === t.elementType ? h : Eo(t.type, h);
      d.props = S;
      var x = t.pendingProps, T = d.context, $ = a.contextType, H = Si;
      if (typeof $ == "object" && $ !== null)
        H = vr($);
      else {
        var F = ud(t, a, !0);
        H = sd(t, F);
      }
      var J = a.getDerivedStateFromProps, re = typeof J == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !re && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (h !== x || T !== H) && FC(t, d, i, H), eC();
      var le = t.memoizedState, ze = d.state = le;
      if (oy(t, i, d, u), ze = t.memoizedState, h === x && le === ze && !Hm() && !ly() && !ke)
        return typeof d.componentDidUpdate == "function" && (h !== e.memoizedProps || le !== e.memoizedState) && (t.flags |= jt), typeof d.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || le !== e.memoizedState) && (t.flags |= rr), !1;
      typeof J == "function" && (qS(t, a, J, i), ze = t.memoizedState);
      var dt = ly() || MC(t, a, S, i, le, ze, H) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ke;
      return dt ? (!re && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, ze, H), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, ze, H)), typeof d.componentDidUpdate == "function" && (t.flags |= jt), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= rr)) : (typeof d.componentDidUpdate == "function" && (h !== e.memoizedProps || le !== e.memoizedState) && (t.flags |= jt), typeof d.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || le !== e.memoizedState) && (t.flags |= rr), t.memoizedProps = i, t.memoizedState = ze), d.props = i, d.state = ze, d.context = H, dt;
    }
    function kc(e, t) {
      return {
        value: e,
        source: t,
        stack: to(t),
        digest: null
      };
    }
    function KS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Bk(e, t) {
      return !0;
    }
    function JS(e, t) {
      try {
        var a = Bk(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, d = t.stack, h = d !== null ? d : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === R)
            return;
          console.error(i);
        }
        var S = u ? St(u) : null, x = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === O)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var $ = St(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + $ + ".");
        }
        var H = x + `
` + h + `

` + ("" + T);
        console.error(H);
      } catch (F) {
        setTimeout(function() {
          throw F;
        });
      }
    }
    var Vk = typeof WeakMap == "function" ? WeakMap : Map;
    function UC(e, t, a) {
      var i = cu(pn, a);
      i.tag = rS, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        MP(u), JS(e, t);
      }, i;
    }
    function ZS(e, t, a) {
      var i = cu(pn, a);
      i.tag = rS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        i.payload = function() {
          return u(d);
        }, i.callback = function() {
          Kw(e), JS(e, t);
        };
      }
      var h = e.stateNode;
      return h !== null && typeof h.componentDidCatch == "function" && (i.callback = function() {
        Kw(e), JS(e, t), typeof u != "function" && AP(this);
        var x = t.value, T = t.stack;
        this.componentDidCatch(x, {
          componentStack: T !== null ? T : ""
        }), typeof u != "function" && (fa(e.lanes, mt) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", St(e) || "Unknown"));
      }), i;
    }
    function HC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Vk(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var d = zP.bind(null, e, t, a);
        sa && Vv(e, a), t.then(d, d);
      }
    }
    function Wk(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        u.add(a);
    }
    function Yk(e, t) {
      var a = e.tag;
      if ((e.mode & Dt) === ut && (a === C || a === se || a === fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function IC(e) {
      var t = e;
      do {
        if (t.tag === I && Rk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function BC(e, t, a, i, u) {
      if ((e.mode & Dt) === ut) {
        if (e === t)
          e.flags |= cr;
        else {
          if (e.flags |= it, a.flags |= ff, a.flags &= -52805, a.tag === R) {
            var d = a.alternate;
            if (d === null)
              a.tag = tt;
            else {
              var h = cu(pn, mt);
              h.tag = ny, ls(a, h, mt);
            }
          }
          a.lanes = _t(a.lanes, mt);
        }
        return e;
      }
      return e.flags |= cr, e.lanes = u, e;
    }
    function Qk(e, t, a, i, u) {
      if (a.flags |= Fs, sa && Vv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var d = i;
        Yk(a), qr() && a.mode & Dt && AE();
        var h = IC(t);
        if (h !== null) {
          h.flags &= ~Ar, BC(h, t, a, e, u), h.mode & Dt && HC(e, d, u), Wk(h, e, d);
          return;
        } else {
          if (!Wh(u)) {
            HC(e, d, u), Pb();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = S;
        }
      } else if (qr() && a.mode & Dt) {
        AE();
        var x = IC(t);
        if (x !== null) {
          (x.flags & cr) === lt && (x.flags |= Ar), BC(x, t, a, e, u), W0(kc(i, a));
          return;
        }
      }
      i = kc(i, a), RP(i);
      var T = t;
      do {
        switch (T.tag) {
          case O: {
            var $ = i;
            T.flags |= cr;
            var H = ec(u);
            T.lanes = _t(T.lanes, H);
            var F = UC(T, $, H);
            oS(T, F);
            return;
          }
          case R:
            var J = i, re = T.type, le = T.stateNode;
            if ((T.flags & it) === lt && (typeof re.getDerivedStateFromError == "function" || le !== null && typeof le.componentDidCatch == "function" && !Iw(le))) {
              T.flags |= cr;
              var ze = ec(u);
              T.lanes = _t(T.lanes, ze);
              var dt = ZS(T, J, ze);
              oS(T, dt);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function qk() {
      return null;
    }
    var Ov = c.ReactCurrentOwner, Co = !1, eb, $v, tb, nb, rb, Dc, ab, Dy, kv;
    eb = {}, $v = {}, tb = {}, nb = {}, rb = {}, Dc = !1, ab = {}, Dy = {}, kv = {};
    function $a(e, t, a, i) {
      e === null ? t.child = YE(t, null, a, i) : t.child = pd(t, e.child, a, i);
    }
    function Gk(e, t, a, i) {
      t.child = pd(t, e.child, null, i), t.child = pd(t, null, a, i);
    }
    function VC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && yo(
          d,
          i,
          // Resolved props
          "prop",
          It(a)
        );
      }
      var h = a.render, S = t.ref, x, T;
      hd(t, u), _a(t);
      {
        if (Ov.current = t, nr(!0), x = xd(e, t, h, i, S, u), T = Ed(), t.mode & un) {
          Pn(!0);
          try {
            x = xd(e, t, h, i, S, u), T = Ed();
          } finally {
            Pn(!1);
          }
        }
        nr(!1);
      }
      return Ra(), e !== null && !Co ? (oC(e, t, u), fu(e, t, u)) : (qr() && T && F0(t), t.flags |= vi, $a(e, t, x, u), t.child);
    }
    function WC(e, t, a, i, u) {
      if (e === null) {
        var d = a.type;
        if (e2(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var h = d;
          return h = kd(d), t.tag = fe, t.type = h, lb(t, d), YC(e, t, h, i, u);
        }
        {
          var S = d.propTypes;
          if (S && yo(
            S,
            i,
            // Resolved props
            "prop",
            It(d)
          ), a.defaultProps !== void 0) {
            var x = It(d) || "Unknown";
            kv[x] || (m("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", x), kv[x] = !0);
          }
        }
        var T = Bb(a.type, null, i, t, t.mode, u);
        return T.ref = t.ref, T.return = t, t.child = T, T;
      }
      {
        var $ = a.type, H = $.propTypes;
        H && yo(
          H,
          i,
          // Resolved props
          "prop",
          It($)
        );
      }
      var F = e.child, J = pb(e, u);
      if (!J) {
        var re = F.memoizedProps, le = a.compare;
        if (le = le !== null ? le : Ke, le(re, i) && e.ref === t.ref)
          return fu(e, t, u);
      }
      t.flags |= vi;
      var ze = Mc(F, i);
      return ze.ref = t.ref, ze.return = t, t.child = ze, ze;
    }
    function YC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === bt) {
          var h = d, S = h._payload, x = h._init;
          try {
            d = x(S);
          } catch {
            d = null;
          }
          var T = d && d.propTypes;
          T && yo(
            T,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            It(d)
          );
        }
      }
      if (e !== null) {
        var $ = e.memoizedProps;
        if (Ke($, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Co = !1, t.pendingProps = i = $, pb(e, u))
            (e.flags & ff) !== lt && (Co = !0);
          else return t.lanes = e.lanes, fu(e, t, u);
      }
      return ib(e, t, a, i, u);
    }
    function QC(e, t, a) {
      var i = t.pendingProps, u = i.children, d = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || V)
        if ((t.mode & Dt) === ut) {
          var h = {
            baseLanes: ve,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = h, Vy(t, a);
        } else if (fa(a, ca)) {
          var H = {
            baseLanes: ve,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = H;
          var F = d !== null ? d.baseLanes : a;
          Vy(t, F);
        } else {
          var S = null, x;
          if (d !== null) {
            var T = d.baseLanes;
            x = _t(T, a);
          } else
            x = a;
          t.lanes = t.childLanes = ca;
          var $ = {
            baseLanes: x,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = $, t.updateQueue = null, Vy(t, x), null;
        }
      else {
        var J;
        d !== null ? (J = _t(d.baseLanes, a), t.memoizedState = null) : J = a, Vy(t, J);
      }
      return $a(e, t, u, a), t.child;
    }
    function Xk(e, t, a) {
      var i = t.pendingProps;
      return $a(e, t, i, a), t.child;
    }
    function Kk(e, t, a) {
      var i = t.pendingProps.children;
      return $a(e, t, i, a), t.child;
    }
    function Jk(e, t, a) {
      {
        t.flags |= jt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return $a(e, t, d, a), t.child;
    }
    function qC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Nn, t.flags |= Iu);
    }
    function ib(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && yo(
          d,
          i,
          // Resolved props
          "prop",
          It(a)
        );
      }
      var h;
      {
        var S = ud(t, a, !0);
        h = sd(t, S);
      }
      var x, T;
      hd(t, u), _a(t);
      {
        if (Ov.current = t, nr(!0), x = xd(e, t, a, i, h, u), T = Ed(), t.mode & un) {
          Pn(!0);
          try {
            x = xd(e, t, a, i, h, u), T = Ed();
          } finally {
            Pn(!1);
          }
        }
        nr(!1);
      }
      return Ra(), e !== null && !Co ? (oC(e, t, u), fu(e, t, u)) : (qr() && T && F0(t), t.flags |= vi, $a(e, t, x, u), t.child);
    }
    function GC(e, t, a, i, u) {
      {
        switch (h2(t)) {
          case !1: {
            var d = t.stateNode, h = t.type, S = new h(t.memoizedProps, d.context), x = S.state;
            d.updater.enqueueSetState(d, x, null);
            break;
          }
          case !0: {
            t.flags |= it, t.flags |= cr;
            var T = new Error("Simulated error coming from DevTools"), $ = ec(u);
            t.lanes = _t(t.lanes, $);
            var H = ZS(t, kc(T, t), $);
            oS(t, H);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var F = a.propTypes;
          F && yo(
            F,
            i,
            // Resolved props
            "prop",
            It(a)
          );
        }
      }
      var J;
      ll(a) ? (J = !0, Bm(t)) : J = !1, hd(t, u);
      var re = t.stateNode, le;
      re === null ? (Ly(e, t), jC(t, a, i), XS(t, a, i, u), le = !0) : e === null ? le = Hk(t, a, i, u) : le = Ik(e, t, a, i, u);
      var ze = ob(e, t, a, le, J, u);
      {
        var dt = t.stateNode;
        le && dt.props !== i && (Dc || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", St(t) || "a component"), Dc = !0);
      }
      return ze;
    }
    function ob(e, t, a, i, u, d) {
      qC(e, t);
      var h = (t.flags & it) !== lt;
      if (!i && !h)
        return u && kE(t, a, !1), fu(e, t, d);
      var S = t.stateNode;
      Ov.current = t;
      var x;
      if (h && typeof a.getDerivedStateFromError != "function")
        x = null, LC();
      else {
        _a(t);
        {
          if (nr(!0), x = S.render(), t.mode & un) {
            Pn(!0);
            try {
              S.render();
            } finally {
              Pn(!1);
            }
          }
          nr(!1);
        }
        Ra();
      }
      return t.flags |= vi, e !== null && h ? Gk(e, t, x, d) : $a(e, t, x, d), t.memoizedState = S.state, u && kE(t, a, !0), t.child;
    }
    function XC(e) {
      var t = e.stateNode;
      t.pendingContext ? OE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && OE(e, t.context, !1), lS(e, t.containerInfo);
    }
    function Zk(e, t, a) {
      if (XC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, d = u.element;
      ZE(e, t), oy(t, i, null, a);
      var h = t.memoizedState;
      t.stateNode;
      var S = h.element;
      if (u.isDehydrated) {
        var x = {
          element: S,
          isDehydrated: !1,
          cache: h.cache,
          pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
          transitions: h.transitions
        }, T = t.updateQueue;
        if (T.baseState = x, t.memoizedState = x, t.flags & Ar) {
          var $ = kc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return KC(e, t, S, a, $);
        } else if (S !== d) {
          var H = kc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return KC(e, t, S, a, H);
        } else {
          nk(t);
          var F = YE(t, null, S, a);
          t.child = F;
          for (var J = F; J; )
            J.flags = J.flags & ~Dn | oa, J = J.sibling;
        }
      } else {
        if (dd(), S === d)
          return fu(e, t, a);
        $a(e, t, S, a);
      }
      return t.child;
    }
    function KC(e, t, a, i, u) {
      return dd(), W0(u), t.flags |= Ar, $a(e, t, a, i), t.child;
    }
    function eD(e, t, a) {
      rC(t), e === null && V0(t);
      var i = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, h = u.children, S = _0(i, u);
      return S ? h = null : d !== null && _0(i, d) && (t.flags |= Ia), qC(e, t), $a(e, t, h, a), t.child;
    }
    function tD(e, t) {
      return e === null && V0(t), null;
    }
    function nD(e, t, a, i) {
      Ly(e, t);
      var u = t.pendingProps, d = a, h = d._payload, S = d._init, x = S(h);
      t.type = x;
      var T = t.tag = t2(x), $ = Eo(x, u), H;
      switch (T) {
        case C:
          return lb(t, x), t.type = x = kd(x), H = ib(null, t, x, $, i), H;
        case R:
          return t.type = x = zb(x), H = GC(null, t, x, $, i), H;
        case se:
          return t.type = x = jb(x), H = VC(null, t, x, $, i), H;
        case he: {
          if (t.type !== t.elementType) {
            var F = x.propTypes;
            F && yo(
              F,
              $,
              // Resolved for outer only
              "prop",
              It(x)
            );
          }
          return H = WC(
            null,
            t,
            x,
            Eo(x.type, $),
            // The inner type can have defaults too
            i
          ), H;
        }
      }
      var J = "";
      throw x !== null && typeof x == "object" && x.$$typeof === bt && (J = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + x + ". " + ("Lazy element type must resolve to a class or function." + J));
    }
    function rD(e, t, a, i, u) {
      Ly(e, t), t.tag = R;
      var d;
      return ll(a) ? (d = !0, Bm(t)) : d = !1, hd(t, u), jC(t, a, i), XS(t, a, i, u), ob(null, t, a, !0, d, u);
    }
    function aD(e, t, a, i) {
      Ly(e, t);
      var u = t.pendingProps, d;
      {
        var h = ud(t, a, !1);
        d = sd(t, h);
      }
      hd(t, i);
      var S, x;
      _a(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = It(a) || "Unknown";
          eb[T] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), eb[T] = !0);
        }
        t.mode & un && So.recordLegacyContextWarning(t, null), nr(!0), Ov.current = t, S = xd(null, t, a, u, d, i), x = Ed(), nr(!1);
      }
      if (Ra(), t.flags |= vi, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var $ = It(a) || "Unknown";
        $v[$] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), $v[$] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var H = It(a) || "Unknown";
          $v[H] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", H, H, H), $v[H] = !0);
        }
        t.tag = R, t.memoizedState = null, t.updateQueue = null;
        var F = !1;
        return ll(a) ? (F = !0, Bm(t)) : F = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, iS(t), zC(t, S), XS(t, a, u, i), ob(null, t, a, !0, F, i);
      } else {
        if (t.tag = C, t.mode & un) {
          Pn(!0);
          try {
            S = xd(null, t, a, u, d, i), x = Ed();
          } finally {
            Pn(!1);
          }
        }
        return qr() && x && F0(t), $a(null, t, S, i), lb(t, a), t.child;
      }
    }
    function lb(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Hr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), rb[u] || (rb[u] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var h = It(t) || "Unknown";
          kv[h] || (m("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", h), kv[h] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var S = It(t) || "Unknown";
          nb[S] || (m("%s: Function components do not support getDerivedStateFromProps.", S), nb[S] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var x = It(t) || "Unknown";
          tb[x] || (m("%s: Function components do not support contextType.", x), tb[x] = !0);
        }
      }
    }
    var ub = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vt
    };
    function sb(e) {
      return {
        baseLanes: e,
        cachePool: qk(),
        transitions: null
      };
    }
    function iD(e, t) {
      var a = null;
      return {
        baseLanes: _t(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function oD(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return cS(e, Sv);
    }
    function lD(e, t) {
      return tc(e.childLanes, t);
    }
    function JC(e, t, a) {
      var i = t.pendingProps;
      m2(t) && (t.flags |= it);
      var u = bo.current, d = !1, h = (t.flags & it) !== lt;
      if (h || oD(u, e) ? (d = !0, t.flags &= ~it) : (e === null || e.memoizedState !== null) && (u = _k(u, iC)), u = yd(u), ss(t, u), e === null) {
        V0(t);
        var S = t.memoizedState;
        if (S !== null) {
          var x = S.dehydrated;
          if (x !== null)
            return dD(t, x);
        }
        var T = i.children, $ = i.fallback;
        if (d) {
          var H = uD(t, T, $, a), F = t.child;
          return F.memoizedState = sb(a), t.memoizedState = ub, H;
        } else
          return cb(t, T);
      } else {
        var J = e.memoizedState;
        if (J !== null) {
          var re = J.dehydrated;
          if (re !== null)
            return pD(e, t, h, i, re, J, a);
        }
        if (d) {
          var le = i.fallback, ze = i.children, dt = cD(e, t, ze, le, a), at = t.child, Ht = e.child.memoizedState;
          return at.memoizedState = Ht === null ? sb(a) : iD(Ht, a), at.childLanes = lD(e, a), t.memoizedState = ub, dt;
        } else {
          var Mt = i.children, Q = sD(e, t, Mt, a);
          return t.memoizedState = null, Q;
        }
      }
    }
    function cb(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, d = fb(u, i);
      return d.return = e, e.child = d, d;
    }
    function uD(e, t, a, i) {
      var u = e.mode, d = e.child, h = {
        mode: "hidden",
        children: t
      }, S, x;
      return (u & Dt) === ut && d !== null ? (S = d, S.childLanes = ve, S.pendingProps = h, e.mode & qt && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), x = ys(a, u, i, null)) : (S = fb(h, u), x = ys(a, u, i, null)), S.return = e, x.return = e, S.sibling = x, e.child = S, x;
    }
    function fb(e, t, a) {
      return Zw(e, t, ve, null);
    }
    function ZC(e, t) {
      return Mc(e, t);
    }
    function sD(e, t, a, i) {
      var u = e.child, d = u.sibling, h = ZC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Dt) === ut && (h.lanes = i), h.return = t, h.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= Ha) : S.push(d);
      }
      return t.child = h, h;
    }
    function cD(e, t, a, i, u) {
      var d = t.mode, h = e.child, S = h.sibling, x = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & Dt) === ut && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== h
      ) {
        var $ = t.child;
        T = $, T.childLanes = ve, T.pendingProps = x, t.mode & qt && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = h.selfBaseDuration, T.treeBaseDuration = h.treeBaseDuration), t.deletions = null;
      } else
        T = ZC(h, x), T.subtreeFlags = h.subtreeFlags & qn;
      var H;
      return S !== null ? H = Mc(S, i) : (H = ys(i, d, u, null), H.flags |= Dn), H.return = t, T.return = t, T.sibling = H, t.child = T, H;
    }
    function Py(e, t, a, i) {
      i !== null && W0(i), pd(t, e.child, null, a);
      var u = t.pendingProps, d = u.children, h = cb(t, d);
      return h.flags |= Dn, t.memoizedState = null, h;
    }
    function fD(e, t, a, i, u) {
      var d = t.mode, h = {
        mode: "visible",
        children: a
      }, S = fb(h, d), x = ys(i, d, u, null);
      return x.flags |= Dn, S.return = t, x.return = t, S.sibling = x, t.child = S, (t.mode & Dt) !== ut && pd(t, e.child, null, u), x;
    }
    function dD(e, t, a) {
      return (e.mode & Dt) === ut ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = mt) : $0(t) ? e.lanes = Nr : e.lanes = ca, null;
    }
    function pD(e, t, a, i, u, d, h) {
      if (a)
        if (t.flags & Ar) {
          t.flags &= ~Ar;
          var Q = KS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Py(e, t, h, Q);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= it, null;
          var ue = i.children, q = i.fallback, be = fD(e, t, ue, q, h), Ie = t.child;
          return Ie.memoizedState = sb(h), t.memoizedState = ub, be;
        }
      else {
        if (ek(), (t.mode & Dt) === ut)
          return Py(
            e,
            t,
            h,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if ($0(u)) {
          var S, x, T;
          {
            var $ = y$(u);
            S = $.digest, x = $.message, T = $.stack;
          }
          var H;
          x ? H = new Error(x) : H = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var F = KS(H, S, T);
          return Py(e, t, h, F);
        }
        var J = fa(h, e.childLanes);
        if (Co || J) {
          var re = By();
          if (re !== null) {
            var le = Lp(re, h);
            if (le !== Vt && le !== d.retryLane) {
              d.retryLane = le;
              var ze = pn;
              Ka(e, le), $r(re, e, le, ze);
            }
          }
          Pb();
          var dt = KS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Py(e, t, h, dt);
        } else if (EE(u)) {
          t.flags |= it, t.child = e.child;
          var at = jP.bind(null, e);
          return g$(u, at), null;
        } else {
          rk(t, u, d.treeContext);
          var Ht = i.children, Mt = cb(t, Ht);
          return Mt.flags |= oa, Mt;
        }
      }
    }
    function ew(e, t, a) {
      e.lanes = _t(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = _t(i.lanes, t)), tS(e.return, t, a);
    }
    function vD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === I) {
          var u = i.memoizedState;
          u !== null && ew(i, a, e);
        } else if (i.tag === ot)
          ew(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function hD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && cy(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function mD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ab[e])
        if (ab[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function yD(e, t) {
      e !== void 0 && !Dy[e] && (e !== "collapsed" && e !== "hidden" ? (Dy[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Dy[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function tw(e, t) {
      {
        var a = $t(e), i = !a && typeof wt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function gD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if ($t(e)) {
          for (var a = 0; a < e.length; a++)
            if (!tw(e[a], a))
              return;
        } else {
          var i = wt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var d = u.next(), h = 0; !d.done; d = u.next()) {
                if (!tw(d.value, h))
                  return;
                h++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function db(e, t, a, i, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = u);
    }
    function nw(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, d = i.tail, h = i.children;
      mD(u), yD(d, u), gD(h, u), $a(e, t, h, a);
      var S = bo.current, x = cS(S, Sv);
      if (x)
        S = fS(S, Sv), t.flags |= it;
      else {
        var T = e !== null && (e.flags & it) !== lt;
        T && vD(t, t.child, a), S = yd(S);
      }
      if (ss(t, S), (t.mode & Dt) === ut)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var $ = hD(t.child), H;
            $ === null ? (H = t.child, t.child = null) : (H = $.sibling, $.sibling = null), db(
              t,
              !1,
              // isBackwards
              H,
              $,
              d
            );
            break;
          }
          case "backwards": {
            var F = null, J = t.child;
            for (t.child = null; J !== null; ) {
              var re = J.alternate;
              if (re !== null && cy(re) === null) {
                t.child = J;
                break;
              }
              var le = J.sibling;
              J.sibling = F, F = J, J = le;
            }
            db(
              t,
              !0,
              // isBackwards
              F,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            db(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function SD(e, t, a) {
      lS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = pd(t, null, i, a) : $a(e, t, i, a), t.child;
    }
    var rw = !1;
    function bD(e, t, a) {
      var i = t.type, u = i._context, d = t.pendingProps, h = t.memoizedProps, S = d.value;
      {
        "value" in d || rw || (rw = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var x = t.type.propTypes;
        x && yo(x, d, "prop", "Context.Provider");
      }
      if (GE(t, u, S), h !== null) {
        var T = h.value;
        if (ge(T, S)) {
          if (h.children === d.children && !Hm())
            return fu(e, t, a);
        } else
          mk(t, u, a);
      }
      var $ = d.children;
      return $a(e, t, $, a), t.child;
    }
    var aw = !1;
    function xD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (aw || (aw = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), hd(t, a);
      var h = vr(i);
      _a(t);
      var S;
      return Ov.current = t, nr(!0), S = d(h), nr(!1), Ra(), t.flags |= vi, $a(e, t, S, a), t.child;
    }
    function Dv() {
      Co = !0;
    }
    function Ly(e, t) {
      (t.mode & Dt) === ut && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Dn);
    }
    function fu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), LC(), Bv(t.lanes), fa(a, t.childLanes) ? (vk(e, t), t.child) : null;
    }
    function ED(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var d = i.deletions;
        return d === null ? (i.deletions = [e], i.flags |= Ha) : d.push(e), a.flags |= Dn, a;
      }
    }
    function pb(e, t) {
      var a = e.lanes;
      return !!fa(a, t);
    }
    function CD(e, t, a) {
      switch (t.tag) {
        case O:
          XC(t), t.stateNode, dd();
          break;
        case k:
          rC(t);
          break;
        case R: {
          var i = t.type;
          ll(i) && Bm(t);
          break;
        }
        case P:
          lS(t, t.stateNode.containerInfo);
          break;
        case oe: {
          var u = t.memoizedProps.value, d = t.type._context;
          GE(t, d, u);
          break;
        }
        case ce:
          {
            var h = fa(a, t.childLanes);
            h && (t.flags |= jt);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case I: {
          var x = t.memoizedState;
          if (x !== null) {
            if (x.dehydrated !== null)
              return ss(t, yd(bo.current)), t.flags |= it, null;
            var T = t.child, $ = T.childLanes;
            if (fa(a, $))
              return JC(e, t, a);
            ss(t, yd(bo.current));
            var H = fu(e, t, a);
            return H !== null ? H.sibling : null;
          } else
            ss(t, yd(bo.current));
          break;
        }
        case ot: {
          var F = (e.flags & it) !== lt, J = fa(a, t.childLanes);
          if (F) {
            if (J)
              return nw(e, t, a);
            t.flags |= it;
          }
          var re = t.memoizedState;
          if (re !== null && (re.rendering = null, re.tail = null, re.lastEffect = null), ss(t, bo.current), J)
            break;
          return null;
        }
        case Re:
        case Qe:
          return t.lanes = ve, QC(e, t, a);
      }
      return fu(e, t, a);
    }
    function iw(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ED(e, t, Bb(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Hm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Co = !0;
        else {
          var d = pb(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & it) === lt)
            return Co = !1, CD(e, t, a);
          (e.flags & ff) !== lt ? Co = !0 : Co = !1;
        }
      } else if (Co = !1, qr() && q$(t)) {
        var h = t.index, S = G$();
        LE(t, S, h);
      }
      switch (t.lanes = ve, t.tag) {
        case D:
          return aD(e, t, t.type, a);
        case Ye: {
          var x = t.elementType;
          return nD(e, t, x, a);
        }
        case C: {
          var T = t.type, $ = t.pendingProps, H = t.elementType === T ? $ : Eo(T, $);
          return ib(e, t, T, H, a);
        }
        case R: {
          var F = t.type, J = t.pendingProps, re = t.elementType === F ? J : Eo(F, J);
          return GC(e, t, F, re, a);
        }
        case O:
          return Zk(e, t, a);
        case k:
          return eD(e, t, a);
        case j:
          return tD(e, t);
        case I:
          return JC(e, t, a);
        case P:
          return SD(e, t, a);
        case se: {
          var le = t.type, ze = t.pendingProps, dt = t.elementType === le ? ze : Eo(le, ze);
          return VC(e, t, le, dt, a);
        }
        case B:
          return Xk(e, t, a);
        case G:
          return Kk(e, t, a);
        case ce:
          return Jk(e, t, a);
        case oe:
          return bD(e, t, a);
        case ee:
          return xD(e, t, a);
        case he: {
          var at = t.type, Ht = t.pendingProps, Mt = Eo(at, Ht);
          if (t.type !== t.elementType) {
            var Q = at.propTypes;
            Q && yo(
              Q,
              Mt,
              // Resolved for outer only
              "prop",
              It(at)
            );
          }
          return Mt = Eo(at.type, Mt), WC(e, t, at, Mt, a);
        }
        case fe:
          return YC(e, t, t.type, t.pendingProps, a);
        case tt: {
          var ue = t.type, q = t.pendingProps, be = t.elementType === ue ? q : Eo(ue, q);
          return rD(e, t, ue, be, a);
        }
        case ot:
          return nw(e, t, a);
        case nt:
          break;
        case Re:
          return QC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Cd(e) {
      e.flags |= jt;
    }
    function ow(e) {
      e.flags |= Nn, e.flags |= Iu;
    }
    var lw, vb, uw, sw;
    lw = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === k || u.tag === j)
          WO(e, u.stateNode);
        else if (u.tag !== P) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, vb = function(e, t) {
    }, uw = function(e, t, a, i, u) {
      var d = e.memoizedProps;
      if (d !== i) {
        var h = t.stateNode, S = uS(), x = QO(h, a, d, i, u, S);
        t.updateQueue = x, x && Cd(t);
      }
    }, sw = function(e, t, a, i) {
      a !== i && Cd(t);
    };
    function Pv(e, t) {
      if (!qr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Xr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ve, i = lt;
      if (t) {
        if ((e.mode & qt) !== ut) {
          for (var x = e.selfBaseDuration, T = e.child; T !== null; )
            a = _t(a, _t(T.lanes, T.childLanes)), i |= T.subtreeFlags & qn, i |= T.flags & qn, x += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = x;
        } else
          for (var $ = e.child; $ !== null; )
            a = _t(a, _t($.lanes, $.childLanes)), i |= $.subtreeFlags & qn, i |= $.flags & qn, $.return = e, $ = $.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & qt) !== ut) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, h = e.child; h !== null; )
            a = _t(a, _t(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, u += h.actualDuration, d += h.treeBaseDuration, h = h.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            a = _t(a, _t(S.lanes, S.childLanes)), i |= S.subtreeFlags, i |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function wD(e, t, a) {
      if (uk() && (t.mode & Dt) !== ut && (t.flags & it) === lt)
        return UE(t), dd(), t.flags |= Ar | Fs | cr, !1;
      var i = qm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ok(t), Xr(t), (t.mode & qt) !== ut) {
            var u = a !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (dd(), (t.flags & it) === lt && (t.memoizedState = null), t.flags |= jt, Xr(t), (t.mode & qt) !== ut) {
            var h = a !== null;
            if (h) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return HE(), !0;
    }
    function cw(e, t, a) {
      var i = t.pendingProps;
      switch (U0(t), t.tag) {
        case D:
        case Ye:
        case fe:
        case C:
        case se:
        case B:
        case G:
        case ce:
        case ee:
        case he:
          return Xr(t), null;
        case R: {
          var u = t.type;
          return ll(u) && Im(t), Xr(t), null;
        }
        case O: {
          var d = t.stateNode;
          if (md(t), M0(t), pS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var h = qm(t);
            if (h)
              Cd(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ar) !== lt) && (t.flags |= rr, HE());
            }
          }
          return vb(e, t), Xr(t), null;
        }
        case k: {
          sS(t);
          var x = nC(), T = t.type;
          if (e !== null && t.stateNode != null)
            uw(e, t, T, i, x), e.ref !== t.ref && ow(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Xr(t), null;
            }
            var $ = uS(), H = qm(t);
            if (H)
              ak(t, x, $) && Cd(t);
            else {
              var F = VO(T, i, x, $, t);
              lw(F, t, !1, !1), t.stateNode = F, YO(F, T, i, x) && Cd(t);
            }
            t.ref !== null && ow(t);
          }
          return Xr(t), null;
        }
        case j: {
          var J = i;
          if (e && t.stateNode != null) {
            var re = e.memoizedProps;
            sw(e, t, re, J);
          } else {
            if (typeof J != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var le = nC(), ze = uS(), dt = qm(t);
            dt ? ik(t) && Cd(t) : t.stateNode = qO(J, le, ze, t);
          }
          return Xr(t), null;
        }
        case I: {
          gd(t);
          var at = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ht = wD(e, t, at);
            if (!Ht)
              return t.flags & cr ? t : null;
          }
          if ((t.flags & it) !== lt)
            return t.lanes = a, (t.mode & qt) !== ut && jS(t), t;
          var Mt = at !== null, Q = e !== null && e.memoizedState !== null;
          if (Mt !== Q && Mt) {
            var ue = t.child;
            if (ue.flags |= Qn, (t.mode & Dt) !== ut) {
              var q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              q || cS(bo.current, iC) ? _P() : Pb();
            }
          }
          var be = t.updateQueue;
          if (be !== null && (t.flags |= jt), Xr(t), (t.mode & qt) !== ut && Mt) {
            var Ie = t.child;
            Ie !== null && (t.treeBaseDuration -= Ie.treeBaseDuration);
          }
          return null;
        }
        case P:
          return md(t), vb(e, t), e === null && H$(t.stateNode.containerInfo), Xr(t), null;
        case oe:
          var Fe = t.type._context;
          return eS(Fe, t), Xr(t), null;
        case tt: {
          var yt = t.type;
          return ll(yt) && Im(t), Xr(t), null;
        }
        case ot: {
          gd(t);
          var Et = t.memoizedState;
          if (Et === null)
            return Xr(t), null;
          var cn = (t.flags & it) !== lt, Kt = Et.rendering;
          if (Kt === null)
            if (cn)
              Pv(Et, !1);
            else {
              var or = TP() && (e === null || (e.flags & it) === lt);
              if (!or)
                for (var Jt = t.child; Jt !== null; ) {
                  var er = cy(Jt);
                  if (er !== null) {
                    cn = !0, t.flags |= it, Pv(Et, !1);
                    var ga = er.updateQueue;
                    return ga !== null && (t.updateQueue = ga, t.flags |= jt), t.subtreeFlags = lt, hk(t, a), ss(t, fS(bo.current, Sv)), t.child;
                  }
                  Jt = Jt.sibling;
                }
              Et.tail !== null && ar() > Dw() && (t.flags |= it, cn = !0, Pv(Et, !1), t.lanes = wp);
            }
          else {
            if (!cn) {
              var ta = cy(Kt);
              if (ta !== null) {
                t.flags |= it, cn = !0;
                var xi = ta.updateQueue;
                if (xi !== null && (t.updateQueue = xi, t.flags |= jt), Pv(Et, !0), Et.tail === null && Et.tailMode === "hidden" && !Kt.alternate && !qr())
                  return Xr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              ar() * 2 - Et.renderingStartTime > Dw() && a !== ca && (t.flags |= it, cn = !0, Pv(Et, !1), t.lanes = wp);
            }
            if (Et.isBackwards)
              Kt.sibling = t.child, t.child = Kt;
            else {
              var Pa = Et.last;
              Pa !== null ? Pa.sibling = Kt : t.child = Kt, Et.last = Kt;
            }
          }
          if (Et.tail !== null) {
            var La = Et.tail;
            Et.rendering = La, Et.tail = La.sibling, Et.renderingStartTime = ar(), La.sibling = null;
            var Sa = bo.current;
            return cn ? Sa = fS(Sa, Sv) : Sa = yd(Sa), ss(t, Sa), La;
          }
          return Xr(t), null;
        }
        case nt:
          break;
        case Re:
        case Qe: {
          Db(t);
          var mu = t.memoizedState, Dd = mu !== null;
          if (e !== null) {
            var qv = e.memoizedState, hl = qv !== null;
            hl !== Dd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !V && (t.flags |= Qn);
          }
          return !Dd || (t.mode & Dt) === ut ? Xr(t) : fa(vl, ca) && (Xr(t), t.subtreeFlags & (Dn | jt) && (t.flags |= Qn)), null;
        }
        case ct:
          return null;
        case qe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _D(e, t, a) {
      switch (U0(t), t.tag) {
        case R: {
          var i = t.type;
          ll(i) && Im(t);
          var u = t.flags;
          return u & cr ? (t.flags = u & ~cr | it, (t.mode & qt) !== ut && jS(t), t) : null;
        }
        case O: {
          t.stateNode, md(t), M0(t), pS();
          var d = t.flags;
          return (d & cr) !== lt && (d & it) === lt ? (t.flags = d & ~cr | it, t) : null;
        }
        case k:
          return sS(t), null;
        case I: {
          gd(t);
          var h = t.memoizedState;
          if (h !== null && h.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            dd();
          }
          var S = t.flags;
          return S & cr ? (t.flags = S & ~cr | it, (t.mode & qt) !== ut && jS(t), t) : null;
        }
        case ot:
          return gd(t), null;
        case P:
          return md(t), null;
        case oe:
          var x = t.type._context;
          return eS(x, t), null;
        case Re:
        case Qe:
          return Db(t), null;
        case ct:
          return null;
        default:
          return null;
      }
    }
    function fw(e, t, a) {
      switch (U0(t), t.tag) {
        case R: {
          var i = t.type.childContextTypes;
          i != null && Im(t);
          break;
        }
        case O: {
          t.stateNode, md(t), M0(t), pS();
          break;
        }
        case k: {
          sS(t);
          break;
        }
        case P:
          md(t);
          break;
        case I:
          gd(t);
          break;
        case ot:
          gd(t);
          break;
        case oe:
          var u = t.type._context;
          eS(u, t);
          break;
        case Re:
        case Qe:
          Db(t);
          break;
      }
    }
    var dw = null;
    dw = /* @__PURE__ */ new Set();
    var Ay = !1, Kr = !1, RD = typeof WeakSet == "function" ? WeakSet : Set, Je = null, wd = null, _d = null;
    function TD(e) {
      Bo(null, function() {
        throw e;
      }), js();
    }
    var OD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & qt)
        try {
          dl(), t.componentWillUnmount();
        } finally {
          fl(e);
        }
      else
        t.componentWillUnmount();
    };
    function pw(e, t) {
      try {
        ds(Cr, e);
      } catch (a) {
        wn(e, t, a);
      }
    }
    function hb(e, t, a) {
      try {
        OD(e, a);
      } catch (i) {
        wn(e, t, i);
      }
    }
    function $D(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        wn(e, t, i);
      }
    }
    function vw(e, t) {
      try {
        mw(e);
      } catch (a) {
        wn(e, t, a);
      }
    }
    function Rd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (xe && Ae && e.mode & qt)
              try {
                dl(), i = a(null);
              } finally {
                fl(e);
              }
            else
              i = a(null);
          } catch (u) {
            wn(e, t, u);
          }
          typeof i == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", St(e));
        } else
          a.current = null;
    }
    function Ny(e, t, a) {
      try {
        a();
      } catch (i) {
        wn(e, t, i);
      }
    }
    var hw = !1;
    function kD(e, t) {
      IO(e.containerInfo), Je = t, DD();
      var a = hw;
      return hw = !1, a;
    }
    function DD() {
      for (; Je !== null; ) {
        var e = Je, t = e.child;
        (e.subtreeFlags & Wo) !== lt && t !== null ? (t.return = e, Je = t) : PD();
      }
    }
    function PD() {
      for (; Je !== null; ) {
        var e = Je;
        an(e);
        try {
          LD(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Je = t;
          return;
        }
        Je = e.return;
      }
    }
    function LD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & rr) !== lt) {
        switch (an(e), e.tag) {
          case C:
          case se:
          case fe:
            break;
          case R: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !Dc && (d.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", St(e) || "instance"), d.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", St(e) || "instance"));
              var h = d.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Eo(e.type, i), u);
              {
                var S = dw;
                h === void 0 && !S.has(e.type) && (S.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", St(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          }
          case O: {
            {
              var x = e.stateNode;
              p$(x.containerInfo);
            }
            break;
          }
          case k:
          case j:
          case P:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function wo(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var d = u.next, h = d;
        do {
          if ((h.tag & e) === e) {
            var S = h.destroy;
            h.destroy = void 0, S !== void 0 && ((e & Gr) !== Ja ? co(t) : (e & Cr) !== Ja && Hs(t), (e & ul) !== Ja && Wv(!0), Ny(t, a, S), (e & ul) !== Ja && Wv(!1), (e & Gr) !== Ja ? Go() : (e & Cr) !== Ja && Ep());
          }
          h = h.next;
        } while (h !== d);
      }
    }
    function ds(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & Gr) !== Ja ? xp(t) : (e & Cr) !== Ja && yf(t);
            var h = d.create;
            (e & ul) !== Ja && Wv(!0), d.destroy = h(), (e & ul) !== Ja && Wv(!1), (e & Gr) !== Ja ? Uh() : (e & Cr) !== Ja && Hh();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var x = void 0;
                (d.tag & Cr) !== lt ? x = "useLayoutEffect" : (d.tag & ul) !== lt ? x = "useInsertionEffect" : x = "useEffect";
                var T = void 0;
                S === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof S.then == "function" ? T = `

It looks like you wrote ` + x + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + x + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + S, m("%s must not return anything besides a function, which is used for clean-up.%s", x, T);
              }
            }
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function AD(e, t) {
      if ((t.flags & jt) !== lt)
        switch (t.tag) {
          case ce: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, d = i.onPostCommit, h = DC(), S = t.alternate === null ? "mount" : "update";
            kC() && (S = "nested-update"), typeof d == "function" && d(u, S, a, h);
            var x = t.return;
            e: for (; x !== null; ) {
              switch (x.tag) {
                case O:
                  var T = x.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
                case ce:
                  var $ = x.stateNode;
                  $.passiveEffectDuration += a;
                  break e;
              }
              x = x.return;
            }
            break;
          }
        }
    }
    function ND(e, t, a, i) {
      if ((a.flags & Qo) !== lt)
        switch (a.tag) {
          case C:
          case se:
          case fe: {
            if (!Kr)
              if (a.mode & qt)
                try {
                  dl(), ds(Cr | Er, a);
                } finally {
                  fl(a);
                }
              else
                ds(Cr | Er, a);
            break;
          }
          case R: {
            var u = a.stateNode;
            if (a.flags & jt && !Kr)
              if (t === null)
                if (a.type === a.elementType && !Dc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", St(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", St(a) || "instance")), a.mode & qt)
                  try {
                    dl(), u.componentDidMount();
                  } finally {
                    fl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Eo(a.type, t.memoizedProps), h = t.memoizedState;
                if (a.type === a.elementType && !Dc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", St(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", St(a) || "instance")), a.mode & qt)
                  try {
                    dl(), u.componentDidUpdate(d, h, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    fl(a);
                  }
                else
                  u.componentDidUpdate(d, h, u.__reactInternalSnapshotBeforeUpdate);
              }
            var S = a.updateQueue;
            S !== null && (a.type === a.elementType && !Dc && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", St(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", St(a) || "instance")), tC(a, S, u));
            break;
          }
          case O: {
            var x = a.updateQueue;
            if (x !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case k:
                    T = a.child.stateNode;
                    break;
                  case R:
                    T = a.child.stateNode;
                    break;
                }
              tC(a, x, T);
            }
            break;
          }
          case k: {
            var $ = a.stateNode;
            if (t === null && a.flags & jt) {
              var H = a.type, F = a.memoizedProps;
              ZO($, H, F);
            }
            break;
          }
          case j:
            break;
          case P:
            break;
          case ce: {
            {
              var J = a.memoizedProps, re = J.onCommit, le = J.onRender, ze = a.stateNode.effectDuration, dt = DC(), at = t === null ? "mount" : "update";
              kC() && (at = "nested-update"), typeof le == "function" && le(a.memoizedProps.id, at, a.actualDuration, a.treeBaseDuration, a.actualStartTime, dt);
              {
                typeof re == "function" && re(a.memoizedProps.id, at, ze, dt), PP(a);
                var Ht = a.return;
                e: for (; Ht !== null; ) {
                  switch (Ht.tag) {
                    case O:
                      var Mt = Ht.stateNode;
                      Mt.effectDuration += ze;
                      break e;
                    case ce:
                      var Q = Ht.stateNode;
                      Q.effectDuration += ze;
                      break e;
                  }
                  Ht = Ht.return;
                }
              }
            }
            break;
          }
          case I: {
            BD(e, a);
            break;
          }
          case ot:
          case tt:
          case nt:
          case Re:
          case Qe:
          case qe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Kr || a.flags & Nn && mw(a);
    }
    function MD(e) {
      switch (e.tag) {
        case C:
        case se:
        case fe: {
          if (e.mode & qt)
            try {
              dl(), pw(e, e.return);
            } finally {
              fl(e);
            }
          else
            pw(e, e.return);
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $D(e, e.return, t), vw(e, e.return);
          break;
        }
        case k: {
          vw(e, e.return);
          break;
        }
      }
    }
    function zD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === k) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? s$(u) : f$(i.stateNode, i.memoizedProps);
            } catch (h) {
              wn(e, e.return, h);
            }
          }
        } else if (i.tag === j) {
          if (a === null)
            try {
              var d = i.stateNode;
              t ? c$(d) : d$(d, i.memoizedProps);
            } catch (h) {
              wn(e, e.return, h);
            }
        } else if (!((i.tag === Re || i.tag === Qe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function mw(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case k:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & qt)
            try {
              dl(), u = t(i);
            } finally {
              fl(e);
            }
          else
            u = t(i);
          typeof u == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", St(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", St(e)), t.current = i;
      }
    }
    function jD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function yw(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, yw(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === k) {
          var a = e.stateNode;
          a !== null && V$(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function FD(e) {
      for (var t = e.return; t !== null; ) {
        if (gw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gw(e) {
      return e.tag === k || e.tag === O || e.tag === P;
    }
    function Sw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || gw(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== k && t.tag !== j && t.tag !== We; ) {
          if (t.flags & Dn || t.child === null || t.tag === P)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Dn))
          return t.stateNode;
      }
    }
    function UD(e) {
      var t = FD(e);
      switch (t.tag) {
        case k: {
          var a = t.stateNode;
          t.flags & Ia && (xE(a), t.flags &= ~Ia);
          var i = Sw(e);
          yb(e, i, a);
          break;
        }
        case O:
        case P: {
          var u = t.stateNode.containerInfo, d = Sw(e);
          mb(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function mb(e, t, a) {
      var i = e.tag, u = i === k || i === j;
      if (u) {
        var d = e.stateNode;
        t ? i$(a, d, t) : r$(a, d);
      } else if (i !== P) {
        var h = e.child;
        if (h !== null) {
          mb(h, t, a);
          for (var S = h.sibling; S !== null; )
            mb(S, t, a), S = S.sibling;
        }
      }
    }
    function yb(e, t, a) {
      var i = e.tag, u = i === k || i === j;
      if (u) {
        var d = e.stateNode;
        t ? a$(a, d, t) : n$(a, d);
      } else if (i !== P) {
        var h = e.child;
        if (h !== null) {
          yb(h, t, a);
          for (var S = h.sibling; S !== null; )
            yb(S, t, a), S = S.sibling;
        }
      }
    }
    var Jr = null, _o = !1;
    function HD(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case k: {
              Jr = i.stateNode, _o = !1;
              break e;
            }
            case O: {
              Jr = i.stateNode.containerInfo, _o = !0;
              break e;
            }
            case P: {
              Jr = i.stateNode.containerInfo, _o = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Jr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        bw(e, t, a), Jr = null, _o = !1;
      }
      jD(a);
    }
    function ps(e, t, a) {
      for (var i = a.child; i !== null; )
        bw(e, t, i), i = i.sibling;
    }
    function bw(e, t, a) {
      switch (gp(a), a.tag) {
        case k:
          Kr || Rd(a, t);
        case j: {
          {
            var i = Jr, u = _o;
            Jr = null, ps(e, t, a), Jr = i, _o = u, Jr !== null && (_o ? l$(Jr, a.stateNode) : o$(Jr, a.stateNode));
          }
          return;
        }
        case We: {
          Jr !== null && (_o ? u$(Jr, a.stateNode) : O0(Jr, a.stateNode));
          return;
        }
        case P: {
          {
            var d = Jr, h = _o;
            Jr = a.stateNode.containerInfo, _o = !0, ps(e, t, a), Jr = d, _o = h;
          }
          return;
        }
        case C:
        case se:
        case he:
        case fe: {
          if (!Kr) {
            var S = a.updateQueue;
            if (S !== null) {
              var x = S.lastEffect;
              if (x !== null) {
                var T = x.next, $ = T;
                do {
                  var H = $, F = H.destroy, J = H.tag;
                  F !== void 0 && ((J & ul) !== Ja ? Ny(a, t, F) : (J & Cr) !== Ja && (Hs(a), a.mode & qt ? (dl(), Ny(a, t, F), fl(a)) : Ny(a, t, F), Ep())), $ = $.next;
                } while ($ !== T);
              }
            }
          }
          ps(e, t, a);
          return;
        }
        case R: {
          if (!Kr) {
            Rd(a, t);
            var re = a.stateNode;
            typeof re.componentWillUnmount == "function" && hb(a, t, re);
          }
          ps(e, t, a);
          return;
        }
        case nt: {
          ps(e, t, a);
          return;
        }
        case Re: {
          if (
            // TODO: Remove this dead flag
            a.mode & Dt
          ) {
            var le = Kr;
            Kr = le || a.memoizedState !== null, ps(e, t, a), Kr = le;
          } else
            ps(e, t, a);
          break;
        }
        default: {
          ps(e, t, a);
          return;
        }
      }
    }
    function ID(e) {
      e.memoizedState;
    }
    function BD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && T$(d);
          }
        }
      }
    }
    function xw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new RD()), t.forEach(function(i) {
          var u = FP.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), sa)
              if (wd !== null && _d !== null)
                Vv(_d, wd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function VD(e, t, a) {
      wd = a, _d = e, an(t), Ew(t, e), an(t), wd = null, _d = null;
    }
    function Ro(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var d = i[u];
          try {
            HD(e, t, d);
          } catch (x) {
            wn(d, t, x);
          }
        }
      var h = Mo();
      if (t.subtreeFlags & Yo)
        for (var S = t.child; S !== null; )
          an(S), Ew(S, e), S = S.sibling;
      an(h);
    }
    function Ew(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case C:
        case se:
        case he:
        case fe: {
          if (Ro(t, e), pl(e), u & jt) {
            try {
              wo(ul | Er, e, e.return), ds(ul | Er, e);
            } catch (yt) {
              wn(e, e.return, yt);
            }
            if (e.mode & qt) {
              try {
                dl(), wo(Cr | Er, e, e.return);
              } catch (yt) {
                wn(e, e.return, yt);
              }
              fl(e);
            } else
              try {
                wo(Cr | Er, e, e.return);
              } catch (yt) {
                wn(e, e.return, yt);
              }
          }
          return;
        }
        case R: {
          Ro(t, e), pl(e), u & Nn && i !== null && Rd(i, i.return);
          return;
        }
        case k: {
          Ro(t, e), pl(e), u & Nn && i !== null && Rd(i, i.return);
          {
            if (e.flags & Ia) {
              var d = e.stateNode;
              try {
                xE(d);
              } catch (yt) {
                wn(e, e.return, yt);
              }
            }
            if (u & jt) {
              var h = e.stateNode;
              if (h != null) {
                var S = e.memoizedProps, x = i !== null ? i.memoizedProps : S, T = e.type, $ = e.updateQueue;
                if (e.updateQueue = null, $ !== null)
                  try {
                    e$(h, $, T, x, S, e);
                  } catch (yt) {
                    wn(e, e.return, yt);
                  }
              }
            }
          }
          return;
        }
        case j: {
          if (Ro(t, e), pl(e), u & jt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var H = e.stateNode, F = e.memoizedProps, J = i !== null ? i.memoizedProps : F;
            try {
              t$(H, J, F);
            } catch (yt) {
              wn(e, e.return, yt);
            }
          }
          return;
        }
        case O: {
          if (Ro(t, e), pl(e), u & jt && i !== null) {
            var re = i.memoizedState;
            if (re.isDehydrated)
              try {
                R$(t.containerInfo);
              } catch (yt) {
                wn(e, e.return, yt);
              }
          }
          return;
        }
        case P: {
          Ro(t, e), pl(e);
          return;
        }
        case I: {
          Ro(t, e), pl(e);
          var le = e.child;
          if (le.flags & Qn) {
            var ze = le.stateNode, dt = le.memoizedState, at = dt !== null;
            if (ze.isHidden = at, at) {
              var Ht = le.alternate !== null && le.alternate.memoizedState !== null;
              Ht || wP();
            }
          }
          if (u & jt) {
            try {
              ID(e);
            } catch (yt) {
              wn(e, e.return, yt);
            }
            xw(e);
          }
          return;
        }
        case Re: {
          var Mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Dt
          ) {
            var Q = Kr;
            Kr = Q || Mt, Ro(t, e), Kr = Q;
          } else
            Ro(t, e);
          if (pl(e), u & Qn) {
            var ue = e.stateNode, q = e.memoizedState, be = q !== null, Ie = e;
            if (ue.isHidden = be, be && !Mt && (Ie.mode & Dt) !== ut) {
              Je = Ie;
              for (var Fe = Ie.child; Fe !== null; )
                Je = Fe, YD(Fe), Fe = Fe.sibling;
            }
            zD(Ie, be);
          }
          return;
        }
        case ot: {
          Ro(t, e), pl(e), u & jt && xw(e);
          return;
        }
        case nt:
          return;
        default: {
          Ro(t, e), pl(e);
          return;
        }
      }
    }
    function pl(e) {
      var t = e.flags;
      if (t & Dn) {
        try {
          UD(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        e.flags &= ~Dn;
      }
      t & oa && (e.flags &= ~oa);
    }
    function WD(e, t, a) {
      wd = a, _d = t, Je = e, Cw(e, t, a), wd = null, _d = null;
    }
    function Cw(e, t, a) {
      for (var i = (e.mode & Dt) !== ut; Je !== null; ) {
        var u = Je, d = u.child;
        if (u.tag === Re && i) {
          var h = u.memoizedState !== null, S = h || Ay;
          if (S) {
            gb(e, t, a);
            continue;
          } else {
            var x = u.alternate, T = x !== null && x.memoizedState !== null, $ = T || Kr, H = Ay, F = Kr;
            Ay = S, Kr = $, Kr && !F && (Je = u, QD(u));
            for (var J = d; J !== null; )
              Je = J, Cw(
                J,
                // New root; bubble back up to here and stop.
                t,
                a
              ), J = J.sibling;
            Je = u, Ay = H, Kr = F, gb(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Qo) !== lt && d !== null ? (d.return = u, Je = d) : gb(e, t, a);
      }
    }
    function gb(e, t, a) {
      for (; Je !== null; ) {
        var i = Je;
        if ((i.flags & Qo) !== lt) {
          var u = i.alternate;
          an(i);
          try {
            ND(t, u, i, a);
          } catch (h) {
            wn(i, i.return, h);
          }
          Cn();
        }
        if (i === e) {
          Je = null;
          return;
        }
        var d = i.sibling;
        if (d !== null) {
          d.return = i.return, Je = d;
          return;
        }
        Je = i.return;
      }
    }
    function YD(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.child;
        switch (t.tag) {
          case C:
          case se:
          case he:
          case fe: {
            if (t.mode & qt)
              try {
                dl(), wo(Cr, t, t.return);
              } finally {
                fl(t);
              }
            else
              wo(Cr, t, t.return);
            break;
          }
          case R: {
            Rd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && hb(t, t.return, i);
            break;
          }
          case k: {
            Rd(t, t.return);
            break;
          }
          case Re: {
            var u = t.memoizedState !== null;
            if (u) {
              ww(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Je = a) : ww(e);
      }
    }
    function ww(e) {
      for (; Je !== null; ) {
        var t = Je;
        if (t === e) {
          Je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Je = a;
          return;
        }
        Je = t.return;
      }
    }
    function QD(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.child;
        if (t.tag === Re) {
          var i = t.memoizedState !== null;
          if (i) {
            _w(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Je = a) : _w(e);
      }
    }
    function _w(e) {
      for (; Je !== null; ) {
        var t = Je;
        an(t);
        try {
          MD(t);
        } catch (i) {
          wn(t, t.return, i);
        }
        if (Cn(), t === e) {
          Je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Je = a;
          return;
        }
        Je = t.return;
      }
    }
    function qD(e, t, a, i) {
      Je = t, GD(t, e, a, i);
    }
    function GD(e, t, a, i) {
      for (; Je !== null; ) {
        var u = Je, d = u.child;
        (u.subtreeFlags & uo) !== lt && d !== null ? (d.return = u, Je = d) : XD(e, t, a, i);
      }
    }
    function XD(e, t, a, i) {
      for (; Je !== null; ) {
        var u = Je;
        if ((u.flags & ia) !== lt) {
          an(u);
          try {
            KD(t, u, a, i);
          } catch (h) {
            wn(u, u.return, h);
          }
          Cn();
        }
        if (u === e) {
          Je = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, Je = d;
          return;
        }
        Je = u.return;
      }
    }
    function KD(e, t, a, i) {
      switch (t.tag) {
        case C:
        case se:
        case fe: {
          if (t.mode & qt) {
            zS();
            try {
              ds(Gr | Er, t);
            } finally {
              MS(t);
            }
          } else
            ds(Gr | Er, t);
          break;
        }
      }
    }
    function JD(e) {
      Je = e, ZD();
    }
    function ZD() {
      for (; Je !== null; ) {
        var e = Je, t = e.child;
        if ((Je.flags & Ha) !== lt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Je = u, nP(u, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var h = d.child;
                if (h !== null) {
                  d.child = null;
                  do {
                    var S = h.sibling;
                    h.sibling = null, h = S;
                  } while (h !== null);
                }
              }
            }
            Je = e;
          }
        }
        (e.subtreeFlags & uo) !== lt && t !== null ? (t.return = e, Je = t) : eP();
      }
    }
    function eP() {
      for (; Je !== null; ) {
        var e = Je;
        (e.flags & ia) !== lt && (an(e), tP(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Je = t;
          return;
        }
        Je = e.return;
      }
    }
    function tP(e) {
      switch (e.tag) {
        case C:
        case se:
        case fe: {
          e.mode & qt ? (zS(), wo(Gr | Er, e, e.return), MS(e)) : wo(Gr | Er, e, e.return);
          break;
        }
      }
    }
    function nP(e, t) {
      for (; Je !== null; ) {
        var a = Je;
        an(a), aP(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Je = i) : rP(e);
      }
    }
    function rP(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.sibling, i = t.return;
        if (yw(t), t === e) {
          Je = null;
          return;
        }
        if (a !== null) {
          a.return = i, Je = a;
          return;
        }
        Je = i;
      }
    }
    function aP(e, t) {
      switch (e.tag) {
        case C:
        case se:
        case fe: {
          e.mode & qt ? (zS(), wo(Gr, e, t), MS(e)) : wo(Gr, e, t);
          break;
        }
      }
    }
    function iP(e) {
      switch (e.tag) {
        case C:
        case se:
        case fe: {
          try {
            ds(Cr | Er, e);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
      }
    }
    function oP(e) {
      switch (e.tag) {
        case C:
        case se:
        case fe: {
          try {
            ds(Gr | Er, e);
          } catch (t) {
            wn(e, e.return, t);
          }
          break;
        }
      }
    }
    function lP(e) {
      switch (e.tag) {
        case C:
        case se:
        case fe: {
          try {
            wo(Cr | Er, e, e.return);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && hb(e, e.return, t);
          break;
        }
      }
    }
    function uP(e) {
      switch (e.tag) {
        case C:
        case se:
        case fe:
          try {
            wo(Gr | Er, e, e.return);
          } catch (t) {
            wn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Lv = Symbol.for;
      Lv("selector.component"), Lv("selector.has_pseudo_class"), Lv("selector.role"), Lv("selector.test_id"), Lv("selector.text");
    }
    var sP = [];
    function cP() {
      sP.forEach(function(e) {
        return e();
      });
    }
    var fP = c.ReactCurrentActQueue;
    function dP(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Rw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && fP.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var pP = Math.ceil, Sb = c.ReactCurrentDispatcher, bb = c.ReactCurrentOwner, Zr = c.ReactCurrentBatchConfig, To = c.ReactCurrentActQueue, Rr = (
      /*             */
      0
    ), Tw = (
      /*               */
      1
    ), ea = (
      /*                */
      2
    ), Xi = (
      /*                */
      4
    ), du = 0, Av = 1, Pc = 2, My = 3, Nv = 4, Ow = 5, xb = 6, Ut = Rr, ka = null, Vn = null, Tr = ve, vl = ve, Eb = rs(ve), Or = du, Mv = null, zy = ve, zv = ve, jy = ve, jv = null, Za = null, Cb = 0, $w = 500, kw = 1 / 0, vP = 500, pu = null;
    function Fv() {
      kw = ar() + vP;
    }
    function Dw() {
      return kw;
    }
    var Fy = !1, wb = null, Td = null, Lc = !1, vs = null, Uv = ve, _b = [], Rb = null, hP = 50, Hv = 0, Tb = null, Ob = !1, Uy = !1, mP = 50, Od = 0, Hy = null, Iv = pn, Iy = ve, Pw = !1;
    function By() {
      return ka;
    }
    function Da() {
      return (Ut & (ea | Xi)) !== Rr ? ar() : (Iv !== pn || (Iv = ar()), Iv);
    }
    function hs(e) {
      var t = e.mode;
      if ((t & Dt) === ut)
        return mt;
      if ((Ut & ea) !== Rr && Tr !== ve)
        return ec(Tr);
      var a = fk() !== ck;
      if (a) {
        if (Zr.transition !== null) {
          var i = Zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Iy === Vt && (Iy = kp()), Iy;
      }
      var u = qa();
      if (u !== Vt)
        return u;
      var d = GO();
      return d;
    }
    function yP(e) {
      var t = e.mode;
      return (t & Dt) === ut ? mt : Qh();
    }
    function $r(e, t, a, i) {
      HP(), Pw && m("useInsertionEffect must not schedule updates."), Ob && (Uy = !0), Yu(e, a, i), (Ut & ea) !== ve && e === ka ? VP(t) : (sa && rc(e, t, a), WP(t), e === ka && ((Ut & ea) === Rr && (zv = _t(zv, a)), Or === Nv && ms(e, Tr)), ei(e, i), a === mt && Ut === Rr && (t.mode & Dt) === ut && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !To.isBatchingLegacy && (Fv(), PE()));
    }
    function gP(e, t, a) {
      var i = e.current;
      i.lanes = t, Yu(e, t, a), ei(e, a);
    }
    function SP(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & ea) !== Rr
      );
    }
    function ei(e, t) {
      var a = e.callbackNode;
      zf(e, t);
      var i = Mf(e, e === ka ? Tr : ve);
      if (i === ve) {
        a !== null && qw(a), e.callbackNode = null, e.callbackPriority = Vt;
        return;
      }
      var u = Jo(i), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(To.current !== null && a !== Nb)) {
        a == null && d !== mt && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && qw(a);
      var h;
      if (u === mt)
        e.tag === as ? (To.isBatchingLegacy !== null && (To.didScheduleLegacyUpdate = !0), Q$(Nw.bind(null, e))) : DE(Nw.bind(null, e)), To.current !== null ? To.current.push(is) : KO(function() {
          (Ut & (ea | Xi)) === Rr && is();
        }), h = null;
      else {
        var S;
        switch (em(i)) {
          case Br:
            S = Us;
            break;
          case Ui:
            S = qo;
            break;
          case Ya:
            S = so;
            break;
          case Qa:
            S = Ul;
            break;
          default:
            S = so;
            break;
        }
        h = Mb(S, Lw.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = h;
    }
    function Lw(e, t) {
      if (zk(), Iv = pn, Iy = ve, (Ut & (ea | Xi)) !== Rr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = hu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Mf(e, e === ka ? Tr : ve);
      if (u === ve)
        return null;
      var d = !Ff(e, u) && !Yh(e, u) && !t, h = d ? $P(e, u) : Wy(e, u);
      if (h !== du) {
        if (h === Pc) {
          var S = jf(e);
          S !== ve && (u = S, h = $b(e, S));
        }
        if (h === Av) {
          var x = Mv;
          throw Ac(e, ve), ms(e, u), ei(e, ar()), x;
        }
        if (h === xb)
          ms(e, u);
        else {
          var T = !Ff(e, u), $ = e.current.alternate;
          if (T && !xP($)) {
            if (h = Wy(e, u), h === Pc) {
              var H = jf(e);
              H !== ve && (u = H, h = $b(e, H));
            }
            if (h === Av) {
              var F = Mv;
              throw Ac(e, ve), ms(e, u), ei(e, ar()), F;
            }
          }
          e.finishedWork = $, e.finishedLanes = u, bP(e, h, u);
        }
      }
      return ei(e, ar()), e.callbackNode === a ? Lw.bind(null, e) : null;
    }
    function $b(e, t) {
      var a = jv;
      if (If(e)) {
        var i = Ac(e, t);
        i.flags |= Ar, U$(e.containerInfo);
      }
      var u = Wy(e, t);
      if (u !== Pc) {
        var d = Za;
        Za = a, d !== null && Aw(d);
      }
      return u;
    }
    function Aw(e) {
      Za === null ? Za = e : Za.push.apply(Za, e);
    }
    function bP(e, t, a) {
      switch (t) {
        case du:
        case Av:
          throw new Error("Root did not complete. This is a bug in React.");
        case Pc: {
          Nc(e, Za, pu);
          break;
        }
        case My: {
          if (ms(e, a), Kl(a) && // do not delay if we're inside an act() scope
          !Gw()) {
            var i = Cb + $w - ar();
            if (i > 10) {
              var u = Mf(e, ve);
              if (u !== ve)
                break;
              var d = e.suspendedLanes;
              if (!Jl(d, a)) {
                Da(), Uf(e, d);
                break;
              }
              e.timeoutHandle = R0(Nc.bind(null, e, Za, pu), i);
              break;
            }
          }
          Nc(e, Za, pu);
          break;
        }
        case Nv: {
          if (ms(e, a), Op(a))
            break;
          if (!Gw()) {
            var h = mi(e, a), S = h, x = ar() - S, T = UP(x) - x;
            if (T > 10) {
              e.timeoutHandle = R0(Nc.bind(null, e, Za, pu), T);
              break;
            }
          }
          Nc(e, Za, pu);
          break;
        }
        case Ow: {
          Nc(e, Za, pu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function xP(e) {
      for (var t = e; ; ) {
        if (t.flags & Hu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var d = i[u], h = d.getSnapshot, S = d.value;
                try {
                  if (!ge(h(), S))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var x = t.child;
        if (t.subtreeFlags & Hu && x !== null) {
          x.return = t, t = x;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ms(e, t) {
      t = tc(t, jy), t = tc(t, zv), Xh(e, t);
    }
    function Nw(e) {
      if (jk(), (Ut & (ea | Xi)) !== Rr)
        throw new Error("Should not already be working.");
      hu();
      var t = Mf(e, ve);
      if (!fa(t, mt))
        return ei(e, ar()), null;
      var a = Wy(e, t);
      if (e.tag !== as && a === Pc) {
        var i = jf(e);
        i !== ve && (t = i, a = $b(e, i));
      }
      if (a === Av) {
        var u = Mv;
        throw Ac(e, ve), ms(e, t), ei(e, ar()), u;
      }
      if (a === xb)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, Nc(e, Za, pu), ei(e, ar()), null;
    }
    function EP(e, t) {
      t !== ve && (Hf(e, _t(t, mt)), ei(e, ar()), (Ut & (ea | Xi)) === Rr && (Fv(), is()));
    }
    function kb(e, t) {
      var a = Ut;
      Ut |= Tw;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === Rr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !To.isBatchingLegacy && (Fv(), PE());
      }
    }
    function CP(e, t, a, i, u) {
      var d = qa(), h = Zr.transition;
      try {
        return Zr.transition = null, Kn(Br), e(t, a, i, u);
      } finally {
        Kn(d), Zr.transition = h, Ut === Rr && Fv();
      }
    }
    function vu(e) {
      vs !== null && vs.tag === as && (Ut & (ea | Xi)) === Rr && hu();
      var t = Ut;
      Ut |= Tw;
      var a = Zr.transition, i = qa();
      try {
        return Zr.transition = null, Kn(Br), e ? e() : void 0;
      } finally {
        Kn(i), Zr.transition = a, Ut = t, (Ut & (ea | Xi)) === Rr && is();
      }
    }
    function Mw() {
      return (Ut & (ea | Xi)) !== Rr;
    }
    function Vy(e, t) {
      ma(Eb, vl, e), vl = _t(vl, t);
    }
    function Db(e) {
      vl = Eb.current, ha(Eb, e);
    }
    function Ac(e, t) {
      e.finishedWork = null, e.finishedLanes = ve;
      var a = e.timeoutHandle;
      if (a !== T0 && (e.timeoutHandle = T0, XO(a)), Vn !== null)
        for (var i = Vn.return; i !== null; ) {
          var u = i.alternate;
          fw(u, i), i = i.return;
        }
      ka = e;
      var d = Mc(e.current, null);
      return Vn = d, Tr = vl = t, Or = du, Mv = null, zy = ve, zv = ve, jy = ve, jv = null, Za = null, gk(), So.discardPendingWarnings(), d;
    }
    function zw(e, t) {
      do {
        var a = Vn;
        try {
          if (ey(), lC(), Cn(), bb.current = null, a === null || a.return === null) {
            Or = Av, Mv = t, Vn = null;
            return;
          }
          if (xe && a.mode & qt && $y(a, !0), we)
            if (Ra(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Fi(a, i, Tr);
            } else
              Is(a, t, Tr);
          Qk(e, a.return, a, t, Tr), Hw(a);
        } catch (u) {
          t = u, Vn === a && a !== null ? (a = a.return, Vn = a) : a = Vn;
          continue;
        }
        return;
      } while (!0);
    }
    function jw() {
      var e = Sb.current;
      return Sb.current = wy, e === null ? wy : e;
    }
    function Fw(e) {
      Sb.current = e;
    }
    function wP() {
      Cb = ar();
    }
    function Bv(e) {
      zy = _t(e, zy);
    }
    function _P() {
      Or === du && (Or = My);
    }
    function Pb() {
      (Or === du || Or === My || Or === Pc) && (Or = Nv), ka !== null && (Zs(zy) || Zs(zv)) && ms(ka, Tr);
    }
    function RP(e) {
      Or !== Nv && (Or = Pc), jv === null ? jv = [e] : jv.push(e);
    }
    function TP() {
      return Or === du;
    }
    function Wy(e, t) {
      var a = Ut;
      Ut |= ea;
      var i = jw();
      if (ka !== e || Tr !== t) {
        if (sa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Vv(e, Tr), u.clear()), Kh(e, t);
        }
        pu = Ap(), Ac(e, t);
      }
      Vl(t);
      do
        try {
          OP();
          break;
        } catch (d) {
          zw(e, d);
        }
      while (!0);
      if (ey(), Ut = a, Fw(i), Vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return gf(), ka = null, Tr = ve, Or;
    }
    function OP() {
      for (; Vn !== null; )
        Uw(Vn);
    }
    function $P(e, t) {
      var a = Ut;
      Ut |= ea;
      var i = jw();
      if (ka !== e || Tr !== t) {
        if (sa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Vv(e, Tr), u.clear()), Kh(e, t);
        }
        pu = Ap(), Fv(), Ac(e, t);
      }
      Vl(t);
      do
        try {
          kP();
          break;
        } catch (d) {
          zw(e, d);
        }
      while (!0);
      return ey(), Fw(i), Ut = a, Vn !== null ? (Ih(), du) : (gf(), ka = null, Tr = ve, Or);
    }
    function kP() {
      for (; Vn !== null && !pp(); )
        Uw(Vn);
    }
    function Uw(e) {
      var t = e.alternate;
      an(e);
      var a;
      (e.mode & qt) !== ut ? (NS(e), a = Lb(t, e, vl), $y(e, !0)) : a = Lb(t, e, vl), Cn(), e.memoizedProps = e.pendingProps, a === null ? Hw(e) : Vn = a, bb.current = null;
    }
    function Hw(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Fs) === lt) {
          an(t);
          var u = void 0;
          if ((t.mode & qt) === ut ? u = cw(a, t, vl) : (NS(t), u = cw(a, t, vl), $y(t, !1)), Cn(), u !== null) {
            Vn = u;
            return;
          }
        } else {
          var d = _D(a, t);
          if (d !== null) {
            d.flags &= Mh, Vn = d;
            return;
          }
          if ((t.mode & qt) !== ut) {
            $y(t, !1);
            for (var h = t.actualDuration, S = t.child; S !== null; )
              h += S.actualDuration, S = S.sibling;
            t.actualDuration = h;
          }
          if (i !== null)
            i.flags |= Fs, i.subtreeFlags = lt, i.deletions = null;
          else {
            Or = xb, Vn = null;
            return;
          }
        }
        var x = t.sibling;
        if (x !== null) {
          Vn = x;
          return;
        }
        t = i, Vn = t;
      } while (t !== null);
      Or === du && (Or = Ow);
    }
    function Nc(e, t, a) {
      var i = qa(), u = Zr.transition;
      try {
        Zr.transition = null, Kn(Br), DP(e, t, a, i);
      } finally {
        Zr.transition = u, Kn(i);
      }
      return null;
    }
    function DP(e, t, a, i) {
      do
        hu();
      while (vs !== null);
      if (IP(), (Ut & (ea | Xi)) !== Rr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (Sp(d), u === null)
        return bp(), null;
      if (d === ve && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ve, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vt;
      var h = _t(u.lanes, u.childLanes);
      Pp(e, h), e === ka && (ka = null, Vn = null, Tr = ve), ((u.subtreeFlags & uo) !== lt || (u.flags & uo) !== lt) && (Lc || (Lc = !0, Rb = a, Mb(so, function() {
        return hu(), null;
      })));
      var S = (u.subtreeFlags & (Wo | Yo | Qo | uo)) !== lt, x = (u.flags & (Wo | Yo | Qo | uo)) !== lt;
      if (S || x) {
        var T = Zr.transition;
        Zr.transition = null;
        var $ = qa();
        Kn(Br);
        var H = Ut;
        Ut |= Xi, bb.current = null, kD(e, u), PC(), VD(e, u, d), BO(e.containerInfo), e.current = u, Bs(d), WD(u, e, d), Vs(), vp(), Ut = H, Kn($), Zr.transition = T;
      } else
        e.current = u, PC();
      var F = Lc;
      if (Lc ? (Lc = !1, vs = e, Uv = d) : (Od = 0, Hy = null), h = e.pendingLanes, h === ve && (Td = null), F || Ww(e.current, !1), mp(u.stateNode, i), sa && e.memoizedUpdaters.clear(), cP(), ei(e, ar()), t !== null)
        for (var J = e.onRecoverableError, re = 0; re < t.length; re++) {
          var le = t[re], ze = le.stack, dt = le.digest;
          J(le.value, {
            componentStack: ze,
            digest: dt
          });
        }
      if (Fy) {
        Fy = !1;
        var at = wb;
        throw wb = null, at;
      }
      return fa(Uv, mt) && e.tag !== as && hu(), h = e.pendingLanes, fa(h, mt) ? (Mk(), e === Tb ? Hv++ : (Hv = 0, Tb = e)) : Hv = 0, is(), bp(), null;
    }
    function hu() {
      if (vs !== null) {
        var e = em(Uv), t = ic(Ya, e), a = Zr.transition, i = qa();
        try {
          return Zr.transition = null, Kn(t), LP();
        } finally {
          Kn(i), Zr.transition = a;
        }
      }
      return !1;
    }
    function PP(e) {
      _b.push(e), Lc || (Lc = !0, Mb(so, function() {
        return hu(), null;
      }));
    }
    function LP() {
      if (vs === null)
        return !1;
      var e = Rb;
      Rb = null;
      var t = vs, a = Uv;
      if (vs = null, Uv = ve, (Ut & (ea | Xi)) !== Rr)
        throw new Error("Cannot flush passive effects while already rendering.");
      Ob = !0, Uy = !1, Bl(a);
      var i = Ut;
      Ut |= Xi, JD(t.current), qD(t, t.current, a, e);
      {
        var u = _b;
        _b = [];
        for (var d = 0; d < u.length; d++) {
          var h = u[d];
          AD(t, h);
        }
      }
      Cp(), Ww(t.current, !0), Ut = i, is(), Uy ? t === Hy ? Od++ : (Od = 0, Hy = t) : Od = 0, Ob = !1, Uy = !1, yp(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Iw(e) {
      return Td !== null && Td.has(e);
    }
    function AP(e) {
      Td === null ? Td = /* @__PURE__ */ new Set([e]) : Td.add(e);
    }
    function NP(e) {
      Fy || (Fy = !0, wb = e);
    }
    var MP = NP;
    function Bw(e, t, a) {
      var i = kc(a, t), u = UC(e, i, mt), d = ls(e, u, mt), h = Da();
      d !== null && (Yu(d, mt, h), ei(d, h));
    }
    function wn(e, t, a) {
      if (TD(a), Wv(!1), e.tag === O) {
        Bw(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === O) {
          Bw(i, e, a);
          return;
        } else if (i.tag === R) {
          var u = i.type, d = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !Iw(d)) {
            var h = kc(a, e), S = ZS(i, h, mt), x = ls(i, S, mt), T = Da();
            x !== null && (Yu(x, mt, T), ei(x, T));
            return;
          }
        }
        i = i.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function zP(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Da();
      Uf(e, a), YP(e), ka === e && Jl(Tr, a) && (Or === Nv || Or === My && Kl(Tr) && ar() - Cb < $w ? Ac(e, ve) : jy = _t(jy, a)), ei(e, u);
    }
    function Vw(e, t) {
      t === Vt && (t = yP(e));
      var a = Da(), i = Ka(e, t);
      i !== null && (Yu(i, t, a), ei(i, a));
    }
    function jP(e) {
      var t = e.memoizedState, a = Vt;
      t !== null && (a = t.retryLane), Vw(e, a);
    }
    function FP(e, t) {
      var a = Vt, i;
      switch (e.tag) {
        case I:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ot:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), Vw(e, a);
    }
    function UP(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : pP(e / 1960) * 1960;
    }
    function HP() {
      if (Hv > hP)
        throw Hv = 0, Tb = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Od > mP && (Od = 0, Hy = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function IP() {
      So.flushLegacyContextWarning(), So.flushPendingUnsafeLifecycleWarnings();
    }
    function Ww(e, t) {
      an(e), Yy(e, Vo, lP), t && Yy(e, Mi, uP), Yy(e, Vo, iP), t && Yy(e, Mi, oP), Cn();
    }
    function Yy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var d = i.subtreeFlags & t;
        i !== u && i.child !== null && d !== lt ? i = i.child : ((i.flags & t) !== lt && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Qy = null;
    function Yw(e) {
      {
        if ((Ut & ea) !== Rr || !(e.mode & Dt))
          return;
        var t = e.tag;
        if (t !== D && t !== O && t !== R && t !== C && t !== se && t !== he && t !== fe)
          return;
        var a = St(e) || "ReactComponent";
        if (Qy !== null) {
          if (Qy.has(a))
            return;
          Qy.add(a);
        } else
          Qy = /* @__PURE__ */ new Set([a]);
        var i = yr;
        try {
          an(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? an(e) : Cn();
        }
      }
    }
    var Lb;
    {
      var BP = null;
      Lb = function(e, t, a) {
        var i = e1(BP, t);
        try {
          return iw(e, t, a);
        } catch (d) {
          if (tk() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (ey(), lC(), fw(e, t), e1(t, i), t.mode & qt && NS(t), Bo(null, iw, null, e, t, a), oo()) {
            var u = js();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var Qw = !1, Ab;
    Ab = /* @__PURE__ */ new Set();
    function VP(e) {
      if ($i && !Lk())
        switch (e.tag) {
          case C:
          case se:
          case fe: {
            var t = Vn && St(Vn) || "Unknown", a = t;
            if (!Ab.has(a)) {
              Ab.add(a);
              var i = St(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case R: {
            Qw || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Qw = !0);
            break;
          }
        }
    }
    function Vv(e, t) {
      if (sa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          rc(e, i, t);
        });
      }
    }
    var Nb = {};
    function Mb(e, t) {
      {
        var a = To.current;
        return a !== null ? (a.push(t), Nb) : dp(e, t);
      }
    }
    function qw(e) {
      if (e !== Nb)
        return jh(e);
    }
    function Gw() {
      return To.current !== null;
    }
    function WP(e) {
      {
        if (e.mode & Dt) {
          if (!Rw())
            return;
        } else if (!dP() || Ut !== Rr || e.tag !== C && e.tag !== se && e.tag !== fe)
          return;
        if (To.current === null) {
          var t = yr;
          try {
            an(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, St(e));
          } finally {
            t ? an(e) : Cn();
          }
        }
      }
    }
    function YP(e) {
      e.tag !== as && Rw() && To.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wv(e) {
      Pw = e;
    }
    var Ki = null, $d = null, QP = function(e) {
      Ki = e;
    };
    function kd(e) {
      {
        if (Ki === null)
          return e;
        var t = Ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function zb(e) {
      return kd(e);
    }
    function jb(e) {
      {
        if (Ki === null)
          return e;
        var t = Ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = kd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: pe,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Xw(e, t) {
      {
        if (Ki === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, d = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case R: {
            typeof i == "function" && (u = !0);
            break;
          }
          case C: {
            (typeof i == "function" || d === bt) && (u = !0);
            break;
          }
          case se: {
            (d === pe || d === bt) && (u = !0);
            break;
          }
          case he:
          case fe: {
            (d === Ct || d === bt) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var h = Ki(a);
          if (h !== void 0 && h === Ki(i))
            return !0;
        }
        return !1;
      }
    }
    function Kw(e) {
      {
        if (Ki === null || typeof WeakSet != "function")
          return;
        $d === null && ($d = /* @__PURE__ */ new WeakSet()), $d.add(e);
      }
    }
    var qP = function(e, t) {
      {
        if (Ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        hu(), vu(function() {
          Fb(e.current, i, a);
        });
      }
    }, GP = function(e, t) {
      {
        if (e.context !== Si)
          return;
        hu(), vu(function() {
          Yv(t, e, null, null);
        });
      }
    };
    function Fb(e, t, a) {
      {
        var i = e.alternate, u = e.child, d = e.sibling, h = e.tag, S = e.type, x = null;
        switch (h) {
          case C:
          case fe:
          case R:
            x = S;
            break;
          case se:
            x = S.render;
            break;
        }
        if (Ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, $ = !1;
        if (x !== null) {
          var H = Ki(x);
          H !== void 0 && (a.has(H) ? $ = !0 : t.has(H) && (h === R ? $ = !0 : T = !0));
        }
        if ($d !== null && ($d.has(e) || i !== null && $d.has(i)) && ($ = !0), $ && (e._debugNeedsRemount = !0), $ || T) {
          var F = Ka(e, mt);
          F !== null && $r(F, e, mt, pn);
        }
        u !== null && !$ && Fb(u, t, a), d !== null && Fb(d, t, a);
      }
    }
    var XP = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return Ub(e.current, i, a), a;
      }
    };
    function Ub(e, t, a) {
      {
        var i = e.child, u = e.sibling, d = e.tag, h = e.type, S = null;
        switch (d) {
          case C:
          case fe:
          case R:
            S = h;
            break;
          case se:
            S = h.render;
            break;
        }
        var x = !1;
        S !== null && t.has(S) && (x = !0), x ? KP(e, a) : i !== null && Ub(i, t, a), u !== null && Ub(u, t, a);
      }
    }
    function KP(e, t) {
      {
        var a = JP(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case k:
              t.add(i.stateNode);
              return;
            case P:
              t.add(i.stateNode.containerInfo);
              return;
            case O:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function JP(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === k)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var Hb;
    {
      Hb = !1;
      try {
        var Jw = Object.preventExtensions({});
      } catch {
        Hb = !0;
      }
    }
    function ZP(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = lt, this.subtreeFlags = lt, this.deletions = null, this.lanes = ve, this.childLanes = ve, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Hb && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var bi = function(e, t, a, i) {
      return new ZP(e, t, a, i);
    };
    function Ib(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function e2(e) {
      return typeof e == "function" && !Ib(e) && e.defaultProps === void 0;
    }
    function t2(e) {
      if (typeof e == "function")
        return Ib(e) ? R : C;
      if (e != null) {
        var t = e.$$typeof;
        if (t === pe)
          return se;
        if (t === Ct)
          return he;
      }
      return D;
    }
    function Mc(e, t) {
      var a = e.alternate;
      a === null ? (a = bi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = lt, a.subtreeFlags = lt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & qn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case D:
        case C:
        case fe:
          a.type = kd(e.type);
          break;
        case R:
          a.type = zb(e.type);
          break;
        case se:
          a.type = jb(e.type);
          break;
      }
      return a;
    }
    function n2(e, t) {
      e.flags &= qn | Dn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ve, e.lanes = t, e.child = null, e.subtreeFlags = lt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = lt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function r2(e, t, a) {
      var i;
      return e === Vm ? (i = Dt, t === !0 && (i |= un, i |= Gt)) : i = ut, sa && (i |= qt), bi(O, null, null, i);
    }
    function Bb(e, t, a, i, u, d) {
      var h = D, S = e;
      if (typeof e == "function")
        Ib(e) ? (h = R, S = zb(S)) : S = kd(S);
      else if (typeof e == "string")
        h = k;
      else
        e: switch (e) {
          case _i:
            return ys(a.children, u, d, t);
          case ii:
            h = G, u |= un, (u & Dt) !== ut && (u |= Gt);
            break;
          case Ri:
            return a2(a, u, d, t);
          case Ne:
            return i2(a, u, d, t);
          case Ve:
            return o2(a, u, d, t);
          case jn:
            return Zw(a, u, d, t);
          case mn:
          case Pt:
          case En:
          case mr:
          case kt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ti:
                  h = oe;
                  break e;
                case M:
                  h = ee;
                  break e;
                case pe:
                  h = se, S = jb(S);
                  break e;
                case Ct:
                  h = he;
                  break e;
                case bt:
                  h = Ye, S = null;
                  break e;
              }
            var x = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var T = i ? St(i) : null;
              T && (x += `

Check the render method of \`` + T + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + x));
          }
        }
      var $ = bi(h, a, t, u);
      return $.elementType = e, $.type = S, $.lanes = d, $._debugOwner = i, $;
    }
    function Vb(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, d = e.key, h = e.props, S = Bb(u, d, h, i, t, a);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function ys(e, t, a, i) {
      var u = bi(B, e, i, t);
      return u.lanes = a, u;
    }
    function a2(e, t, a, i) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = bi(ce, e, i, t | qt);
      return u.elementType = Ri, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function i2(e, t, a, i) {
      var u = bi(I, e, i, t);
      return u.elementType = Ne, u.lanes = a, u;
    }
    function o2(e, t, a, i) {
      var u = bi(ot, e, i, t);
      return u.elementType = Ve, u.lanes = a, u;
    }
    function Zw(e, t, a, i) {
      var u = bi(Re, e, i, t);
      u.elementType = jn, u.lanes = a;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function Wb(e, t, a) {
      var i = bi(j, e, null, t);
      return i.lanes = a, i;
    }
    function l2() {
      var e = bi(k, null, null, ut);
      return e.elementType = "DELETED", e;
    }
    function u2(e) {
      var t = bi(We, null, null, ut);
      return t.stateNode = e, t;
    }
    function Yb(e, t, a) {
      var i = e.children !== null ? e.children : [], u = bi(P, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function e1(e, t) {
      return e === null && (e = bi(D, null, null, ut)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function s2(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = T0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vt, this.eventTimes = nc(ve), this.expirationTimes = nc(pn), this.pendingLanes = ve, this.suspendedLanes = ve, this.pingedLanes = ve, this.expiredLanes = ve, this.mutableReadLanes = ve, this.finishedLanes = ve, this.entangledLanes = ve, this.entanglements = nc(ve), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], h = 0; h < Wl; h++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Vm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case as:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function t1(e, t, a, i, u, d, h, S, x, T) {
      var $ = new s2(e, t, a, S, x), H = r2(t, d);
      $.current = H, H.stateNode = $;
      {
        var F = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        H.memoizedState = F;
      }
      return iS(H), $;
    }
    var Qb = "18.3.1";
    function c2(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return kr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: hr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var qb, Gb;
    qb = !1, Gb = {};
    function n1(e) {
      if (!e)
        return Si;
      var t = Uu(e), a = Y$(t);
      if (t.tag === R) {
        var i = t.type;
        if (ll(i))
          return $E(t, i, a);
      }
      return a;
    }
    function f2(e, t) {
      {
        var a = Uu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = la(a);
        if (u === null)
          return null;
        if (u.mode & un) {
          var d = St(a) || "Component";
          if (!Gb[d]) {
            Gb[d] = !0;
            var h = yr;
            try {
              an(u), a.mode & un ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              h ? an(h) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function r1(e, t, a, i, u, d, h, S) {
      var x = !1, T = null;
      return t1(e, t, x, T, a, i, u, d, h);
    }
    function a1(e, t, a, i, u, d, h, S, x, T) {
      var $ = !0, H = t1(a, i, $, e, u, d, h, S, x);
      H.context = n1(null);
      var F = H.current, J = Da(), re = hs(F), le = cu(J, re);
      return le.callback = t ?? null, ls(F, le, re), gP(H, re, J), H;
    }
    function Yv(e, t, a, i) {
      hp(t, e);
      var u = t.current, d = Da(), h = hs(u);
      Ln(h);
      var S = n1(a);
      t.context === null ? t.context = S : t.pendingContext = S, $i && yr !== null && !qb && (qb = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, St(yr) || "Unknown"));
      var x = cu(d, h);
      x.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), x.callback = i);
      var T = ls(u, x, h);
      return T !== null && ($r(T, u, h, d), iy(T, u, h)), h;
    }
    function qy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case k:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function d2(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (If(t)) {
            var a = Vh(t);
            EP(t, a);
          }
          break;
        }
        case I: {
          vu(function() {
            var u = Ka(e, mt);
            if (u !== null) {
              var d = Da();
              $r(u, e, mt, d);
            }
          });
          var i = mt;
          Xb(e, i);
          break;
        }
      }
    }
    function i1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Gh(a.retryLane, t));
    }
    function Xb(e, t) {
      i1(e, t);
      var a = e.alternate;
      a && i1(a, t);
    }
    function p2(e) {
      if (e.tag === I) {
        var t = Xs, a = Ka(e, t);
        if (a !== null) {
          var i = Da();
          $r(a, e, t, i);
        }
        Xb(e, t);
      }
    }
    function v2(e) {
      if (e.tag === I) {
        var t = hs(e), a = Ka(e, t);
        if (a !== null) {
          var i = Da();
          $r(a, e, t, i);
        }
        Xb(e, t);
      }
    }
    function o1(e) {
      var t = Tn(e);
      return t === null ? null : t.stateNode;
    }
    var l1 = function(e) {
      return null;
    };
    function h2(e) {
      return l1(e);
    }
    var u1 = function(e) {
      return !1;
    };
    function m2(e) {
      return u1(e);
    }
    var s1 = null, c1 = null, f1 = null, d1 = null, p1 = null, v1 = null, h1 = null, m1 = null, y1 = null;
    {
      var g1 = function(e, t, a) {
        var i = t[a], u = $t(e) ? e.slice() : Rt({}, e);
        return a + 1 === t.length ? ($t(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = g1(e[i], t, a + 1), u);
      }, S1 = function(e, t) {
        return g1(e, t, 0);
      }, b1 = function(e, t, a, i) {
        var u = t[i], d = $t(e) ? e.slice() : Rt({}, e);
        if (i + 1 === t.length) {
          var h = a[i];
          d[h] = d[u], $t(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = b1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return d;
      }, x1 = function(e, t, a) {
        if (t.length !== a.length) {
          b("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              b("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return b1(e, t, a, 0);
      }, E1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], d = $t(e) ? e.slice() : Rt({}, e);
        return d[u] = E1(e[u], t, a + 1, i), d;
      }, C1 = function(e, t, a) {
        return E1(e, t, 0, a);
      }, Kb = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      s1 = function(e, t, a, i) {
        var u = Kb(e, t);
        if (u !== null) {
          var d = C1(u.memoizedState, a, i);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Rt({}, e.memoizedProps);
          var h = Ka(e, mt);
          h !== null && $r(h, e, mt, pn);
        }
      }, c1 = function(e, t, a) {
        var i = Kb(e, t);
        if (i !== null) {
          var u = S1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Rt({}, e.memoizedProps);
          var d = Ka(e, mt);
          d !== null && $r(d, e, mt, pn);
        }
      }, f1 = function(e, t, a, i) {
        var u = Kb(e, t);
        if (u !== null) {
          var d = x1(u.memoizedState, a, i);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = Rt({}, e.memoizedProps);
          var h = Ka(e, mt);
          h !== null && $r(h, e, mt, pn);
        }
      }, d1 = function(e, t, a) {
        e.pendingProps = C1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ka(e, mt);
        i !== null && $r(i, e, mt, pn);
      }, p1 = function(e, t) {
        e.pendingProps = S1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ka(e, mt);
        a !== null && $r(a, e, mt, pn);
      }, v1 = function(e, t, a) {
        e.pendingProps = x1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ka(e, mt);
        i !== null && $r(i, e, mt, pn);
      }, h1 = function(e) {
        var t = Ka(e, mt);
        t !== null && $r(t, e, mt, pn);
      }, m1 = function(e) {
        l1 = e;
      }, y1 = function(e) {
        u1 = e;
      };
    }
    function y2(e) {
      var t = la(e);
      return t === null ? null : t.stateNode;
    }
    function g2(e) {
      return null;
    }
    function S2() {
      return yr;
    }
    function b2(e) {
      var t = e.findFiberByHostInstance, a = c.ReactCurrentDispatcher;
      return Bu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: s1,
        overrideHookStateDeletePath: c1,
        overrideHookStateRenamePath: f1,
        overrideProps: d1,
        overridePropsDeletePath: p1,
        overridePropsRenamePath: v1,
        setErrorHandler: m1,
        setSuspenseHandler: y1,
        scheduleUpdate: h1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: y2,
        findFiberByHostInstance: t || g2,
        // React Refresh
        findHostInstancesForRefresh: XP,
        scheduleRefresh: qP,
        scheduleRoot: GP,
        setRefreshHandler: QP,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: S2,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Qb
      });
    }
    var w1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Jb(e) {
      this._internalRoot = e;
    }
    Gy.prototype.render = Jb.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Xy(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Yn) {
          var i = o1(t.current);
          i && i.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Yv(e, t, null, null);
    }, Gy.prototype.unmount = Jb.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Mw() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), vu(function() {
          Yv(null, e, null, null);
        }), wE(t);
      }
    };
    function x2(e, t) {
      if (!Xy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      _1(e);
      var a = !1, i = !1, u = "", d = w1;
      t != null && (t.hydrate ? b("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Fr && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var h = r1(e, Vm, null, a, i, u, d);
      zm(h.current, e);
      var S = e.nodeType === Yn ? e.parentNode : e;
      return Jp(S), new Jb(h);
    }
    function Gy(e) {
      this._internalRoot = e;
    }
    function E2(e) {
      e && im(e);
    }
    Gy.prototype.unstable_scheduleHydration = E2;
    function C2(e, t, a) {
      if (!Xy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      _1(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, d = !1, h = !1, S = "", x = w1;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (S = a.identifierPrefix), a.onRecoverableError !== void 0 && (x = a.onRecoverableError));
      var T = a1(t, null, e, Vm, i, d, h, S, x);
      if (zm(T.current, e), Jp(e), u)
        for (var $ = 0; $ < u.length; $++) {
          var H = u[$];
          Tk(T, H);
        }
      return new Gy(T);
    }
    function Xy(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === io || e.nodeType === ep));
    }
    function Qv(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === io || e.nodeType === ep || e.nodeType === Yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function _1(e) {
      e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sv(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var w2 = c.ReactCurrentOwner, R1;
    R1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Yn) {
        var t = o1(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = Zb(e), u = !!(i && ns(i));
      u && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Zb(e) {
      return e ? e.nodeType === io ? e.documentElement : e.firstChild : null;
    }
    function T1() {
    }
    function _2(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var d = i;
          i = function() {
            var F = qy(h);
            d.call(F);
          };
        }
        var h = a1(
          t,
          i,
          e,
          as,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          T1
        );
        e._reactRootContainer = h, zm(h.current, e);
        var S = e.nodeType === Yn ? e.parentNode : e;
        return Jp(S), vu(), h;
      } else {
        for (var x; x = e.lastChild; )
          e.removeChild(x);
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var F = qy($);
            T.call(F);
          };
        }
        var $ = r1(
          e,
          as,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          T1
        );
        e._reactRootContainer = $, zm($.current, e);
        var H = e.nodeType === Yn ? e.parentNode : e;
        return Jp(H), vu(function() {
          Yv(t, $, a, i);
        }), $;
      }
    }
    function R2(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ky(e, t, a, i, u) {
      R1(a), R2(u === void 0 ? null : u, "render");
      var d = a._reactRootContainer, h;
      if (!d)
        h = _2(a, t, e, u, i);
      else {
        if (h = d, typeof u == "function") {
          var S = u;
          u = function() {
            var x = qy(h);
            S.call(x);
          };
        }
        Yv(t, h, e, u);
      }
      return qy(h);
    }
    var O1 = !1;
    function T2(e) {
      {
        O1 || (O1 = !0, m("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = w2.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", It(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === aa ? e : f2(e, "findDOMNode");
    }
    function O2(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sv(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ky(null, e, t, !0, a);
    }
    function $2(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sv(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ky(null, e, t, !1, a);
    }
    function k2(e, t, a, i) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Xg(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ky(e, t, a, !1, i);
    }
    var $1 = !1;
    function D2(e) {
      if ($1 || ($1 = !0, m("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Qv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sv(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Zb(e), i = a && !ns(a);
          i && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return vu(function() {
          Ky(null, null, e, !1, function() {
            e._reactRootContainer = null, wE(e);
          });
        }), !0;
      } else {
        {
          var u = Zb(e), d = !!(u && ns(u)), h = e.nodeType === aa && Qv(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Mr(d2), Qu(p2), tm(v2), lc(qa), Np(Jh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), af(LO), Gg(kb, CP, vu);
    function P2(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xy(t))
        throw new Error("Target container is not a DOM element.");
      return c2(e, t, null, a);
    }
    function L2(e, t, a, i) {
      return k2(e, t, a, i);
    }
    var ex = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ns, ld, jm, Mu, of, kb]
    };
    function A2(e, t) {
      return ex.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), x2(e, t);
    }
    function N2(e, t, a) {
      return ex.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), C2(e, t, a);
    }
    function M2(e) {
      return Mw() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), vu(e);
    }
    var z2 = b2({
      findFiberByHostInstance: xc,
      bundleType: 1,
      version: Qb,
      rendererPackageName: "react-dom"
    });
    if (!z2 && At && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var k1 = window.location.protocol;
      /^(https?|file):$/.test(k1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (k1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ex, ni.createPortal = P2, ni.createRoot = A2, ni.findDOMNode = T2, ni.flushSync = M2, ni.hydrate = O2, ni.hydrateRoot = N2, ni.render = $2, ni.unmountComponentAtNode = D2, ni.unstable_batchedUpdates = kb, ni.unstable_renderSubtreeIntoContainer = L2, ni.version = Qb, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ni;
}
function gR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gR);
    } catch (o) {
      console.error(o);
    }
  }
}
process.env.NODE_ENV === "production" ? (gR(), wx.exports = EA()) : wx.exports = CA();
var zx = wx.exports;
const eh = /* @__PURE__ */ rR(zx);
var o_ = {
  disabled: !1
}, wA = process.env.NODE_ENV !== "production" ? Tt.oneOfType([Tt.number, Tt.shape({
  enter: Tt.number,
  exit: Tt.number,
  appear: Tt.number
}).isRequired]) : null, _A = process.env.NODE_ENV !== "production" ? Tt.oneOfType([Tt.string, Tt.shape({
  enter: Tt.string,
  exit: Tt.string,
  active: Tt.string
}), Tt.shape({
  enter: Tt.string,
  enterDone: Tt.string,
  enterActive: Tt.string,
  exit: Tt.string,
  exitDone: Tt.string,
  exitActive: Tt.string
})]) : null, SR = Yt.createContext(null), bR = function(s) {
  return s.scrollTop;
}, th = "unmounted", zc = "exited", jc = "entering", Nd = "entered", _x = "exiting", bl = /* @__PURE__ */ function(o) {
  vR(s, o);
  function s(p, g) {
    var b;
    b = o.call(this, p, g) || this;
    var m = g, w = m && !m.isMounting ? p.enter : p.appear, C;
    return b.appearStatus = null, p.in ? w ? (C = zc, b.appearStatus = jc) : C = Nd : p.unmountOnExit || p.mountOnEnter ? C = th : C = zc, b.state = {
      status: C
    }, b.nextCallback = null, b;
  }
  s.getDerivedStateFromProps = function(g, b) {
    var m = g.in;
    return m && b.status === th ? {
      status: zc
    } : null;
  };
  var c = s.prototype;
  return c.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, c.componentDidUpdate = function(g) {
    var b = null;
    if (g !== this.props) {
      var m = this.state.status;
      this.props.in ? m !== jc && m !== Nd && (b = jc) : (m === jc || m === Nd) && (b = _x);
    }
    this.updateStatus(!1, b);
  }, c.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, c.getTimeouts = function() {
    var g = this.props.timeout, b, m, w;
    return b = m = w = g, g != null && typeof g != "number" && (b = g.exit, m = g.enter, w = g.appear !== void 0 ? g.appear : m), {
      exit: b,
      enter: m,
      appear: w
    };
  }, c.updateStatus = function(g, b) {
    if (g === void 0 && (g = !1), b !== null)
      if (this.cancelNextCallback(), b === jc) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var m = this.props.nodeRef ? this.props.nodeRef.current : eh.findDOMNode(this);
          m && bR(m);
        }
        this.performEnter(g);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === zc && this.setState({
      status: th
    });
  }, c.performEnter = function(g) {
    var b = this, m = this.props.enter, w = this.context ? this.context.isMounting : g, C = this.props.nodeRef ? [w] : [eh.findDOMNode(this), w], R = C[0], D = C[1], O = this.getTimeouts(), P = w ? O.appear : O.enter;
    if (!g && !m || o_.disabled) {
      this.safeSetState({
        status: Nd
      }, function() {
        b.props.onEntered(R);
      });
      return;
    }
    this.props.onEnter(R, D), this.safeSetState({
      status: jc
    }, function() {
      b.props.onEntering(R, D), b.onTransitionEnd(P, function() {
        b.safeSetState({
          status: Nd
        }, function() {
          b.props.onEntered(R, D);
        });
      });
    });
  }, c.performExit = function() {
    var g = this, b = this.props.exit, m = this.getTimeouts(), w = this.props.nodeRef ? void 0 : eh.findDOMNode(this);
    if (!b || o_.disabled) {
      this.safeSetState({
        status: zc
      }, function() {
        g.props.onExited(w);
      });
      return;
    }
    this.props.onExit(w), this.safeSetState({
      status: _x
    }, function() {
      g.props.onExiting(w), g.onTransitionEnd(m.exit, function() {
        g.safeSetState({
          status: zc
        }, function() {
          g.props.onExited(w);
        });
      });
    });
  }, c.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, c.safeSetState = function(g, b) {
    b = this.setNextCallback(b), this.setState(g, b);
  }, c.setNextCallback = function(g) {
    var b = this, m = !0;
    return this.nextCallback = function(w) {
      m && (m = !1, b.nextCallback = null, g(w));
    }, this.nextCallback.cancel = function() {
      m = !1;
    }, this.nextCallback;
  }, c.onTransitionEnd = function(g, b) {
    this.setNextCallback(b);
    var m = this.props.nodeRef ? this.props.nodeRef.current : eh.findDOMNode(this), w = g == null && !this.props.addEndListener;
    if (!m || w) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var C = this.props.nodeRef ? [this.nextCallback] : [m, this.nextCallback], R = C[0], D = C[1];
      this.props.addEndListener(R, D);
    }
    g != null && setTimeout(this.nextCallback, g);
  }, c.render = function() {
    var g = this.state.status;
    if (g === th)
      return null;
    var b = this.props, m = b.children;
    b.in, b.mountOnEnter, b.unmountOnExit, b.appear, b.enter, b.exit, b.timeout, b.addEndListener, b.onEnter, b.onEntering, b.onEntered, b.onExit, b.onExiting, b.onExited, b.nodeRef;
    var w = pR(b, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Yt.createElement(SR.Provider, {
        value: null
      }, typeof m == "function" ? m(g, w) : Yt.cloneElement(Yt.Children.only(m), w))
    );
  }, s;
}(Yt.Component);
bl.contextType = SR;
bl.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: Tt.shape({
    current: typeof Element > "u" ? Tt.any : function(o, s, c, p, g, b) {
      var m = o[s];
      return Tt.instanceOf(m && "ownerDocument" in m ? m.ownerDocument.defaultView.Element : Element)(o, s, c, p, g, b);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: Tt.oneOfType([Tt.func.isRequired, Tt.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: Tt.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: Tt.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: Tt.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: Tt.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: Tt.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: Tt.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(s) {
    var c = wA;
    s.addEndListener || (c = c.isRequired);
    for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), b = 1; b < p; b++)
      g[b - 1] = arguments[b];
    return c.apply(void 0, [s].concat(g));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: Tt.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: Tt.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Tt.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: Tt.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: Tt.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: Tt.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: Tt.func
} : {};
function Ld() {
}
bl.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ld,
  onEntering: Ld,
  onEntered: Ld,
  onExit: Ld,
  onExiting: Ld,
  onExited: Ld
};
bl.UNMOUNTED = th;
bl.EXITED = zc;
bl.ENTERING = jc;
bl.ENTERED = Nd;
bl.EXITING = _x;
var RA = function(s, c) {
  return s && c && c.split(" ").forEach(function(p) {
    return gA(s, p);
  });
}, dx = function(s, c) {
  return s && c && c.split(" ").forEach(function(p) {
    return SA(s, p);
  });
}, jx = /* @__PURE__ */ function(o) {
  vR(s, o);
  function s() {
    for (var p, g = arguments.length, b = new Array(g), m = 0; m < g; m++)
      b[m] = arguments[m];
    return p = o.call.apply(o, [this].concat(b)) || this, p.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, p.onEnter = function(w, C) {
      var R = p.resolveArguments(w, C), D = R[0], O = R[1];
      p.removeClasses(D, "exit"), p.addClass(D, O ? "appear" : "enter", "base"), p.props.onEnter && p.props.onEnter(w, C);
    }, p.onEntering = function(w, C) {
      var R = p.resolveArguments(w, C), D = R[0], O = R[1], P = O ? "appear" : "enter";
      p.addClass(D, P, "active"), p.props.onEntering && p.props.onEntering(w, C);
    }, p.onEntered = function(w, C) {
      var R = p.resolveArguments(w, C), D = R[0], O = R[1], P = O ? "appear" : "enter";
      p.removeClasses(D, P), p.addClass(D, P, "done"), p.props.onEntered && p.props.onEntered(w, C);
    }, p.onExit = function(w) {
      var C = p.resolveArguments(w), R = C[0];
      p.removeClasses(R, "appear"), p.removeClasses(R, "enter"), p.addClass(R, "exit", "base"), p.props.onExit && p.props.onExit(w);
    }, p.onExiting = function(w) {
      var C = p.resolveArguments(w), R = C[0];
      p.addClass(R, "exit", "active"), p.props.onExiting && p.props.onExiting(w);
    }, p.onExited = function(w) {
      var C = p.resolveArguments(w), R = C[0];
      p.removeClasses(R, "exit"), p.addClass(R, "exit", "done"), p.props.onExited && p.props.onExited(w);
    }, p.resolveArguments = function(w, C) {
      return p.props.nodeRef ? [p.props.nodeRef.current, w] : [w, C];
    }, p.getClassNames = function(w) {
      var C = p.props.classNames, R = typeof C == "string", D = R && C ? C + "-" : "", O = R ? "" + D + w : C[w], P = R ? O + "-active" : C[w + "Active"], k = R ? O + "-done" : C[w + "Done"];
      return {
        baseClassName: O,
        activeClassName: P,
        doneClassName: k
      };
    }, p;
  }
  var c = s.prototype;
  return c.addClass = function(g, b, m) {
    var w = this.getClassNames(b)[m + "ClassName"], C = this.getClassNames("enter"), R = C.doneClassName;
    b === "appear" && m === "done" && R && (w += " " + R), m === "active" && g && bR(g), w && (this.appliedClasses[b][m] = w, RA(g, w));
  }, c.removeClasses = function(g, b) {
    var m = this.appliedClasses[b], w = m.base, C = m.active, R = m.done;
    this.appliedClasses[b] = {}, w && dx(g, w), C && dx(g, C), R && dx(g, R);
  }, c.render = function() {
    var g = this.props;
    g.classNames;
    var b = pR(g, ["classNames"]);
    return /* @__PURE__ */ Yt.createElement(bl, lg({}, b, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, s;
}(Yt.Component);
jx.defaultProps = {
  classNames: ""
};
jx.propTypes = process.env.NODE_ENV !== "production" ? lg({}, bl.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _A,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: Tt.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Tt.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: Tt.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: Tt.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: Tt.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: Tt.func
}) : {};
var l_ = jx;
const TA = _n("span", {
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
  transition: "width 300ms cubic-bezier(0.51, 0, 0, 1), margin-right 300ms cubic-bezier(0.51, 0, 0, 1)",
  [`&.${st.sideElementLoaderHidden} .${st.loader}`]: {
    opacity: 0
  },
  [`.${st.iconContainer}`]: {
    display: "inline-flex",
    [`.${st.iconBox}`]: {
      display: "block",
      flexShrink: 0,
      "& > *": {
        width: "100%",
        height: "100%",
        display: "block"
      }
    }
  },
  [`.${st.iconContainer},
    .${st.loader}`]: {
    transition: "opacity 300ms cubic-bezier(0.51, 0, 0, 1)",
    position: "absolute",
    left: 0,
    right: 0,
    margin: "auto"
  },
  [`& .${st.iconContainer}-enter-done,
    & .${st.loader}-enter-done,
    & .${st.iconContainer}-exit-active,
    & .${st.loader}-exit-active`]: {
    opacity: 1
  },
  [`& .${st.iconContainer}-exit-done,
    & .${st.loader}-exit-done`]: {
    opacity: 0
  }
}), px = ({
  loading: o,
  loader: s = "line",
  loaderSize: c,
  loaderCSS: p,
  loaderColor: g,
  icon: b,
  containerStyle: m
}) => {
  const w = W.useRef(null), C = W.useRef(null), R = W.useRef(null), D = W.useRef(o);
  W.useEffect(() => {
    D.current = o;
  }, [o]), W.useEffect(() => {
    requestAnimationFrame(() => {
      var P, k, j;
      if (w.current) {
        const B = o ? (P = C.current) == null ? void 0 : P.clientWidth : ((j = (k = R.current) == null ? void 0 : k.firstElementChild) == null ? void 0 : j.clientWidth) || 0;
        w.current.style.width = `${B}px`;
      }
    });
  }, []), W.useEffect(() => {
    var P;
    const k = new ResizeObserver((j) => {
      if (j[0] && !D.current) {
        const { width: B } = j[0].contentRect;
        w.current && (w.current.style.width = `${B}px`);
      }
    });
    return (P = R.current) != null && P.firstElementChild && k.observe(R.current.firstElementChild), () => {
      k.disconnect();
    };
  }, [b]);
  const O = W.useMemo(() => {
    switch (s) {
      case "line":
        return /* @__PURE__ */ ne.jsx(
          QL,
          {
            size: c,
            className: st.loader,
            css: p,
            containerRef: C,
            color: g
          }
        );
      case "circle":
        return /* @__PURE__ */ ne.jsx(
          nA,
          {
            size: c,
            className: st.loader,
            css: p,
            containerRef: C,
            color: g
          }
        );
      default:
        return W.isValidElement(s) ? Yt.cloneElement(s, {
          ref: C
        }) : /* @__PURE__ */ ne.jsx("span", { ref: C });
    }
  }, [s, c, p, p]);
  return /* @__PURE__ */ ne.jsxs(
    TA,
    {
      css: m,
      ref: w,
      className: Nx(st.sideElement, {
        [`${st.sideElementIconHidden}`]: !b || b && o,
        [`${st.sideElementLoaderHidden}`]: !o
      }),
      children: [
        b && /* @__PURE__ */ ne.jsx(
          l_,
          {
            classNames: st.iconContainer,
            in: !o,
            nodeRef: R,
            onEnter: () => {
              requestAnimationFrame(() => {
                var P, k;
                if (!w.current)
                  return;
                const j = ((k = (P = R.current) == null ? void 0 : P.firstElementChild) == null ? void 0 : k.clientWidth) || 0;
                w.current.style.width = `${j}px`;
              });
            },
            onExit: () => {
              requestAnimationFrame(() => {
                w.current && (w.current.style.width = "0px");
              });
            },
            timeout: 100,
            mountOnEnter: !0,
            children: /* @__PURE__ */ ne.jsx(
              "div",
              {
                ref: R,
                className: st.iconContainer,
                children: /* @__PURE__ */ ne.jsx("span", { className: st.iconBox, children: Yt.cloneElement(b) })
              }
            )
          }
        ),
        /* @__PURE__ */ ne.jsx(
          l_,
          {
            classNames: st.loader,
            in: o,
            nodeRef: C,
            onEnter: () => {
              requestAnimationFrame(() => {
                var P;
                if (!w.current)
                  return;
                const k = (P = C.current) == null ? void 0 : P.clientWidth;
                w.current.style.width = `${k}px`;
              });
            },
            onExit: () => {
              requestAnimationFrame(() => {
                w.current && (w.current.style.width = "0px");
              });
            },
            timeout: 100,
            mountOnEnter: !0,
            children: O
          }
        )
      ]
    }
  );
};
var OA = Object.defineProperty, $A = Object.defineProperties, kA = Object.getOwnPropertyDescriptors, ug = Object.getOwnPropertySymbols, xR = Object.prototype.hasOwnProperty, ER = Object.prototype.propertyIsEnumerable, u_ = (o, s, c) => s in o ? OA(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, DA = (o, s) => {
  for (var c in s || (s = {}))
    xR.call(s, c) && u_(o, c, s[c]);
  if (ug)
    for (var c of ug(s))
      ER.call(s, c) && u_(o, c, s[c]);
  return o;
}, PA = (o, s) => $A(o, kA(s)), s_ = (o, s) => {
  var c = {};
  for (var p in o)
    xR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && ug)
    for (var p of ug(o))
      s.indexOf(p) < 0 && ER.call(o, p) && (c[p] = o[p]);
  return c;
};
const LA = Vc({
  "50%": {
    opacity: 0.6
  },
  "0%, 100%": {
    opacity: 1
  }
}), AA = _n("button", {
  appearance: "none",
  border: "none",
  background: "transparent",
  fontSize: "$lg",
  lineHeight: "$md",
  borderRadius: "$lg",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "$7",
  cursor: "pointer",
  transition: "all $transitions$2",
  "&:disabled": {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  "&:focus, &:active": {
    outline: "none"
  },
  "&:focus-visible": {
    $$shadowColor: "$colors$primary200",
    boxShadow: "rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  },
  [`&.${st.loading} .${st.content}`]: {
    animation: `${LA} 1.5s cubic-bezier(0.51, 0, 0, 1) infinite`
  },
  variants: {
    size: {
      "2xl": {
        padding: "$9 $14",
        borderRadius: "$2xl",
        fontSize: "$lg",
        lineHeight: "$lg",
        height: "$16",
        [`& .${st.iconBox}`]: {
          width: "$6",
          height: "$6"
        }
      },
      xl: {
        padding: "$5 $10",
        borderRadius: "$xl",
        fontSize: "$lg",
        lineHeight: "$lg",
        height: "$12",
        [`& .${st.iconBox}`]: {
          width: "$6",
          height: "$6"
        }
      },
      lg: {
        padding: "$4 $8",
        borderRadius: "$lg",
        fontSize: "$md",
        lineHeight: "$md",
        height: "$10",
        [`& .${st.iconBox}`]: {
          width: "$5",
          height: "$5"
        }
      },
      md: {
        padding: "$3 $6",
        borderRadius: "$lg",
        fontSize: "$sm",
        lineHeight: "$md",
        height: "$8",
        [`& .${st.iconBox}`]: {
          width: "$5",
          height: "$5"
        }
      },
      sm: {
        padding: "$1 $4",
        borderRadius: "$sm",
        fontSize: "$sm",
        fontWeight: "$5",
        lineHeight: "$sm",
        height: "$6",
        [`& .${st.iconBox}`]: {
          width: "$4",
          height: "$4"
        }
      },
      xs: {
        padding: "$1 $3",
        borderRadius: "$sm",
        fontSize: "$xs",
        fontWeight: "$5",
        lineHeight: "$xs",
        height: "$5",
        [`& .${st.iconBox}`]: {
          width: "14px",
          height: "14px"
        }
      },
      xxs: {
        padding: "$1 $2",
        borderRadius: "$sm",
        fontSize: "$xxs",
        lineHeight: "$xxs",
        height: "$4",
        [`& .${st.iconBox}`]: {
          width: "14px",
          height: "14px"
        }
      }
    },
    color: {
      default: {
        backgroundColorOpacity: ["$secondary500", 0.08],
        color: "$secondary600",
        [`&:hover:not(:disabled), &.${st.loading}`]: {
          color: "$secondary700",
          backgroundColorOpacity: ["$secondary500", 0.15]
        },
        "&:active:not(:disabled)": {
          color: "$secondary800",
          backgroundColorOpacity: ["$secondary500", 0.2]
        },
        "&:focus": {
          color: "$secondary600",
          backgroundColorOpacity: ["$secondary500", 0.15]
        }
      },
      primary: {
        background: "$primary500",
        color: "$white900",
        "&:hover:not(:disabled), &:focus": {
          background: "$primary600"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          background: "$primary700"
        }
      },
      secondary: {
        background: "$secondary500",
        color: "$white900",
        "&:hover:not(:disabled), &:focus": {
          background: "$secondary600"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          background: "$secondary800"
        }
      },
      bright: {
        background: "$white900",
        color: "$secondary500",
        "&:hover:not(:disabled), &:focus": {
          color: "$secondary600",
          background: "$black50"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          color: "$secondary700",
          background: "$black100"
        }
      },
      light: {
        backgroundColorOpacity: ["$white200", 0.1],
        color: "$white900",
        "&:hover:not(:disabled), &:focus": {
          background: "$white300"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          background: "$white400"
        }
      },
      error: {
        background: "$negative100",
        color: "$negative800",
        "&:hover:not(:disabled), &:focus": {
          background: "$negative200"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          background: "$negative200",
          color: "$negative900"
        }
      }
    },
    variant: {
      solid: {
        unset: "none"
      },
      ghost: {
        background: "transparent"
      },
      outline: {
        background: "$white900"
      }
    },
    loading: {
      true: {
        pointerEvents: "none"
      }
    },
    isIcon: {
      true: {
        justifyContent: "center",
        width: "$10",
        height: "$10"
      }
    },
    isLeftIcon: {
      true: {}
    },
    isRightIcon: {
      true: {}
    }
  },
  compoundVariants: [
    {
      isIcon: !0,
      css: {
        padding: 0
      }
    },
    {
      variant: "outline",
      size: "xxs",
      css: {
        borderWidth: "$xs"
      }
    },
    {
      variant: "outline",
      size: "xs",
      css: {
        borderWidth: "$xs"
      }
    },
    {
      variant: "outline",
      size: "sm",
      css: {
        borderWidth: "$xs"
      }
    },
    {
      variant: "outline",
      size: "md",
      css: {
        borderWidth: "1.5px"
      }
    },
    {
      variant: "outline",
      size: "lg",
      css: {
        borderWidth: "$sm"
      }
    },
    {
      variant: "outline",
      size: "xl",
      css: {
        borderWidth: "$sm"
      }
    },
    {
      variant: "outline",
      size: "2xl",
      css: {
        borderWidth: "$sm"
      }
    },
    {
      color: "primary",
      variant: "ghost",
      css: {
        background: "transparent",
        color: "$primary500",
        "&:focus": {
          backgroundColorOpacity: ["$primary500", 0.06]
        },
        "&:hover:not(:disabled)": {
          backgroundColorOpacity: ["$primary500", 0.08]
        },
        "&:hover:not(:disabled), &:focus": {
          color: "$primary600"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          color: "$primary700",
          backgroundColorOpacity: ["$primary500", 0.15]
        }
      }
    },
    {
      color: "primary",
      variant: "outline",
      css: {
        color: "$primary500",
        background: "$white900",
        borderColorOpacity: ["$primary500", 0.4],
        borderStyle: "solid",
        "&:hover:not(:disabled), &:focus": {
          borderColorOpacity: ["$primary500", 0.6],
          color: "$primary600",
          background: "$white900"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          borderColorOpacity: ["$primary500", 0.8],
          color: "$primary700",
          background: "$white900"
        }
      }
    },
    {
      color: "secondary",
      variant: "ghost",
      css: {
        background: "transparent",
        color: "$secondary600",
        "&:hover:not(:disabled), &:focus": {
          color: "$secondary600",
          backgroundColorOpacity: ["$secondary500", 0.08]
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          color: "$secondary700",
          backgroundColorOpacity: ["$secondary500", 0.15]
        }
      }
    },
    {
      color: "secondary",
      variant: "outline",
      css: {
        color: "$secondary500",
        background: "$white900",
        borderColorOpacity: ["$secondary500", 0.2],
        borderStyle: "solid",
        "&:hover:not(:disabled), &:focus": {
          borderColorOpacity: ["$secondary500", 0.4],
          color: "$secondary600",
          background: "$white900"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          borderColorOpacity: ["$secondary500", 0.8],
          color: "$secondary800",
          background: "$white900"
        }
      }
    },
    {
      color: "light",
      variant: "outline",
      css: {
        background: "transparent",
        borderColorOpacity: ["$white400", 0.2],
        borderStyle: "solid",
        color: "$white900",
        "&:hover:not(:disabled), &:focus": {
          background: "transparent",
          borderColorOpacity: ["$white500", 0.3]
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          background: "transparent",
          borderColorOpacity: ["$white700", 0.7]
        }
      }
    },
    {
      color: "default",
      variant: "ghost",
      css: {
        background: "transparent",
        color: "$neutral800",
        "&:hover:not(:disabled), &:focus, &:active:not(:disabled)": {
          color: "$neutral900"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          backgroundColorOpacity: ["$black500", 0.08]
        },
        "&:hover:not(:disabled), &:focus": {
          backgroundColorOpacity: ["$black500", 0.04]
        }
      }
    },
    {
      color: "light",
      variant: "ghost",
      css: {
        background: "transparent",
        color: "$white900",
        [`&:active:not(:disabled), &.${st.loading}`]: {
          backgroundColorOpacity: ["$white300", 0.2]
        },
        "&:hover:not(:disabled), &:focus": {
          backgroundColorOpacity: ["$white200", 0.15]
        }
      }
    },
    {
      color: "error",
      variant: "ghost",
      css: {
        color: "$negative800",
        background: "transparent",
        "&:hover:not(:disabled), &:focus": {
          background: "$negative100"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          background: "$negative200"
        }
      }
    },
    {
      color: "error",
      variant: "outline",
      css: {
        color: "$negative800",
        background: "$white900",
        borderColor: "$negative200",
        borderStyle: "solid",
        "&:hover:not(:disabled), &:focus": {
          borderColor: "$negative300",
          color: "$negative800",
          background: "$white900"
        },
        [`&:active:not(:disabled), &.${st.loading}`]: {
          borderColor: "$negative400",
          color: "$negative900",
          background: "$white900"
        }
      }
    },
    {
      isIcon: !0,
      size: "2xl",
      css: {
        width: "$16",
        height: "$16",
        [`& .${st.iconBox}`]: {
          width: "$8",
          height: "$8"
        }
      }
    },
    {
      isIcon: !0,
      size: "xl",
      css: {
        width: "$12",
        height: "$12",
        [`& .${st.iconBox}`]: {
          width: "$8",
          height: "$8"
        }
      }
    },
    {
      isIcon: !0,
      size: "lg",
      css: {
        width: "$10",
        height: "$10",
        [`& .${st.iconBox}`]: {
          width: "$6",
          height: "$6"
        }
      }
    },
    {
      isIcon: !0,
      size: "md",
      css: {
        width: "$8",
        height: "$8",
        [`& .${st.iconBox}`]: {
          width: "$5",
          height: "$5"
        }
      }
    },
    {
      isIcon: !0,
      size: "sm",
      css: {
        width: "$6",
        height: "$6",
        [`& .${st.iconBox}`]: {
          width: "$5",
          height: "$5"
        }
      }
    },
    {
      isIcon: !0,
      size: "xs",
      css: {
        width: "$5",
        height: "$5",
        [`& .${st.iconBox}`]: {
          width: "$4",
          height: "$4"
        }
      }
    },
    {
      isIcon: !0,
      size: "xxs",
      css: {
        width: "$4",
        height: "$4",
        [`& .${st.iconBox}`]: {
          width: "14px",
          height: "14px"
        }
      }
    },
    {
      isLeftIcon: !0,
      size: "2xl",
      css: {
        paddingLeft: "$10"
      }
    },
    {
      isLeftIcon: !0,
      size: "xl",
      css: {
        paddingLeft: "$8"
      }
    },
    {
      isLeftIcon: !0,
      size: "lg",
      css: {
        paddingLeft: "$6"
      }
    },
    {
      isLeftIcon: !0,
      size: "md",
      css: {
        paddingLeft: "$4"
      }
    },
    {
      isLeftIcon: !0,
      size: "sm",
      css: {
        paddingLeft: "$3"
      }
    },
    {
      isLeftIcon: !0,
      size: "xs",
      css: {
        paddingLeft: "$2"
      }
    },
    {
      isLeftIcon: !0,
      size: "xxs",
      css: {
        paddingLeft: "$1"
      }
    },
    {
      isRightIcon: !0,
      size: "2xl",
      css: {
        paddingRight: "$10"
      }
    },
    {
      isRightIcon: !0,
      size: "xl",
      css: {
        paddingRight: "$8"
      }
    },
    {
      isRightIcon: !0,
      size: "lg",
      css: {
        paddingRight: "$6"
      }
    },
    {
      isRightIcon: !0,
      size: "md",
      css: {
        paddingRight: "$4"
      }
    },
    {
      isRightIcon: !0,
      size: "sm",
      css: {
        paddingRight: "$3"
      }
    },
    {
      isRightIcon: !0,
      size: "xs",
      css: {
        paddingRight: "$2"
      }
    },
    {
      isRightIcon: !0,
      size: "xxs",
      css: {
        paddingRight: "$1"
      }
    }
  ],
  defaultVariants: {
    color: "default",
    size: "sm",
    variant: "solid"
  }
}), CR = Yt.forwardRef(
  (o, s) => {
    var c = o, {
      children: p,
      className: g,
      color: b = "primary",
      icon: m,
      leftIcon: w,
      rightIcon: C,
      loading: R,
      disabled: D,
      loader: O,
      onClick: P
    } = c, k = s_(c, [
      "children",
      "className",
      "color",
      "icon",
      "leftIcon",
      "rightIcon",
      "loading",
      "disabled",
      "loader",
      "onClick"
    ]), j;
    const B = !(w || C || m);
    let G = "$2";
    k.size === "2xl" ? G = "$4" : ["xxs", "xs", "sm"].includes(
      k.size
    ) && (G = "$1");
    const ee = iA(
      {
        buttonSize: k.size,
        loaderType: O
      }
    ), { size: oe } = ee, se = s_(ee, ["size"]), ce = oA({
      variant: (j = k.variant) != null ? j : "solid",
      color: b
    });
    return /* @__PURE__ */ ne.jsxs(
      AA,
      PA(DA({
        type: "button",
        ref: s,
        color: b,
        isIcon: !!m,
        isLeftIcon: !!w,
        isRightIcon: !!C,
        disabled: D,
        "data-testid": "button",
        onClick: P,
        className: Nx(g, st.button, {
          [`${st.loading}`]: !!R,
          [`${st.disabled}`]: D
        })
      }, k), {
        children: [
          m && /* @__PURE__ */ ne.jsx(
            px,
            {
              icon: m,
              loaderSize: oe,
              loaderCSS: se,
              loading: !!R,
              loader: O,
              loaderColor: ce
            }
          ),
          (w || B) && /* @__PURE__ */ ne.jsx(
            px,
            {
              icon: B ? void 0 : w,
              loaderSize: oe,
              loaderCSS: se,
              loading: !!R,
              loader: O,
              loaderColor: ce,
              containerStyle: {
                marginRight: B && !R ? "0" : G
              }
            }
          ),
          /* @__PURE__ */ ne.jsx("span", { className: st.content, children: p }),
          C && /* @__PURE__ */ ne.jsx(
            px,
            {
              icon: C,
              loaderSize: oe,
              loaderCSS: se,
              loading: !!R,
              loaderColor: ce,
              containerStyle: {
                marginLeft: G
              },
              loader: O
            }
          )
        ]
      })
    );
  }
);
var NA = Object.defineProperty, sg = Object.getOwnPropertySymbols, wR = Object.prototype.hasOwnProperty, _R = Object.prototype.propertyIsEnumerable, c_ = (o, s, c) => s in o ? NA(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, MA = (o, s) => {
  for (var c in s || (s = {}))
    wR.call(s, c) && c_(o, c, s[c]);
  if (sg)
    for (var c of sg(s))
      _R.call(s, c) && c_(o, c, s[c]);
  return o;
}, zA = (o, s) => {
  var c = {};
  for (var p in o)
    wR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && sg)
    for (var p of sg(o))
      s.indexOf(p) < 0 && _R.call(o, p) && (c[p] = o[p]);
  return c;
};
const jA = _n(CR, {
  variants: {
    shape: {
      round: {
        [`&.${st.button}`]: {
          borderRadius: "$round"
        }
      },
      default: {}
    }
  },
  defaultVariants: {
    shape: "default"
  }
}), FA = Yt.forwardRef(
  (o, s) => {
    var c = o, {
      children: p,
      icon: g,
      "aria-label": b
    } = c, m = zA(c, [
      "children",
      "icon",
      "aria-label"
    ]);
    const w = g || p, C = W.isValidElement(w) ? w : null;
    return /* @__PURE__ */ ne.jsx(
      jA,
      MA({
        ref: s,
        "aria-label": b,
        icon: C
      }, m)
    );
  }
);
var UA = Object.defineProperty, HA = Object.defineProperties, IA = Object.getOwnPropertyDescriptors, cg = Object.getOwnPropertySymbols, RR = Object.prototype.hasOwnProperty, TR = Object.prototype.propertyIsEnumerable, f_ = (o, s, c) => s in o ? UA(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, BA = (o, s) => {
  for (var c in s || (s = {}))
    RR.call(s, c) && f_(o, c, s[c]);
  if (cg)
    for (var c of cg(s))
      TR.call(s, c) && f_(o, c, s[c]);
  return o;
}, VA = (o, s) => HA(o, IA(s)), WA = (o, s) => {
  var c = {};
  for (var p in o)
    RR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && cg)
    for (var p of cg(o))
      s.indexOf(p) < 0 && TR.call(o, p) && (c[p] = o[p]);
  return c;
};
const OR = /* @__PURE__ */ Yt.forwardRef(
  (o, s) => {
    var c = o, {
      color: p = "currentColor",
      size: g = 32,
      strokeWidth: b = 1.5
    } = c, m = WA(c, [
      "color",
      "size",
      "strokeWidth"
    ]);
    return /* @__PURE__ */ ne.jsxs(
      "svg",
      VA(BA({
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, m), {
        width: g,
        height: g,
        ref: s,
        children: [
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M14.6667 20.6667H17.7458",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M16.212 20.6667V15H14.6786",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ ne.jsx("circle", { cx: "15.65", cy: "11.25", r: "1.25", fill: p })
        ]
      })
    );
  }
);
var YA = Object.defineProperty, QA = Object.defineProperties, qA = Object.getOwnPropertyDescriptors, fg = Object.getOwnPropertySymbols, $R = Object.prototype.hasOwnProperty, kR = Object.prototype.propertyIsEnumerable, d_ = (o, s, c) => s in o ? YA(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, GA = (o, s) => {
  for (var c in s || (s = {}))
    $R.call(s, c) && d_(o, c, s[c]);
  if (fg)
    for (var c of fg(s))
      kR.call(s, c) && d_(o, c, s[c]);
  return o;
}, XA = (o, s) => QA(o, qA(s)), KA = (o, s) => {
  var c = {};
  for (var p in o)
    $R.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && fg)
    for (var p of fg(o))
      s.indexOf(p) < 0 && kR.call(o, p) && (c[p] = o[p]);
  return c;
};
const JA = /* @__PURE__ */ Yt.forwardRef(
  (o, s) => {
    var c = o, {
      color: p = "currentColor",
      size: g = 32,
      strokeWidth: b = 1.5
    } = c, m = KA(c, [
      "color",
      "size",
      "strokeWidth"
    ]);
    return /* @__PURE__ */ ne.jsxs(
      "svg",
      XA(GA({
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, m), {
        width: g,
        height: g,
        ref: s,
        children: [
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M17.3333 10.6667L13.3333 14.6667L18.6666 17.3333L14.6666 21.3333",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M9.06667 26.4L5.46667 22.8C4.53333 21.8667 4 20.5333 4 19.0667V12.9333C4 11.4667 4.53333 10.1333 5.6 9.2L9.2 5.6C10.1333 4.53333 11.4667 4 12.9333 4H19.2C20.6667 4 22 4.53333 22.9333 5.6L26.5333 9.2C27.4667 10.1333 28 11.4667 28 12.9333V19.2C28 20.6667 27.4667 22 26.4 22.9333L22.8 26.5333C21.7333 27.6 20.4 28.1333 19.0667 28.1333H12.9333C11.4667 28 10.1333 27.4667 9.06667 26.4Z",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          )
        ]
      })
    );
  }
);
var ZA = Object.defineProperty, eN = Object.defineProperties, tN = Object.getOwnPropertyDescriptors, dg = Object.getOwnPropertySymbols, DR = Object.prototype.hasOwnProperty, PR = Object.prototype.propertyIsEnumerable, p_ = (o, s, c) => s in o ? ZA(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, nN = (o, s) => {
  for (var c in s || (s = {}))
    DR.call(s, c) && p_(o, c, s[c]);
  if (dg)
    for (var c of dg(s))
      PR.call(s, c) && p_(o, c, s[c]);
  return o;
}, rN = (o, s) => eN(o, tN(s)), aN = (o, s) => {
  var c = {};
  for (var p in o)
    DR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && dg)
    for (var p of dg(o))
      s.indexOf(p) < 0 && PR.call(o, p) && (c[p] = o[p]);
  return c;
};
const iN = /* @__PURE__ */ Yt.forwardRef(
  (o, s) => {
    var c = o, {
      color: p = "currentColor",
      size: g = 32,
      strokeWidth: b = 1.5
    } = c, m = aN(c, [
      "color",
      "size",
      "strokeWidth"
    ]);
    return /* @__PURE__ */ ne.jsxs(
      "svg",
      rN(nN({
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, m), {
        width: g,
        height: g,
        ref: s,
        children: [
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M11.2587 16.452L14.148 19.3413L14.1293 19.3227L20.648 12.804",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          )
        ]
      })
    );
  }
);
var oN = Object.defineProperty, lN = Object.defineProperties, uN = Object.getOwnPropertyDescriptors, pg = Object.getOwnPropertySymbols, LR = Object.prototype.hasOwnProperty, AR = Object.prototype.propertyIsEnumerable, v_ = (o, s, c) => s in o ? oN(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, sN = (o, s) => {
  for (var c in s || (s = {}))
    LR.call(s, c) && v_(o, c, s[c]);
  if (pg)
    for (var c of pg(s))
      AR.call(s, c) && v_(o, c, s[c]);
  return o;
}, cN = (o, s) => lN(o, uN(s)), fN = (o, s) => {
  var c = {};
  for (var p in o)
    LR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && pg)
    for (var p of pg(o))
      s.indexOf(p) < 0 && AR.call(o, p) && (c[p] = o[p]);
  return c;
};
const dN = /* @__PURE__ */ Yt.forwardRef(
  (o, s) => {
    var c = o, {
      color: p = "currentColor",
      size: g = 32,
      strokeWidth: b = 1.5
    } = c, m = fN(c, [
      "color",
      "size",
      "strokeWidth"
    ]);
    return /* @__PURE__ */ ne.jsxs(
      "svg",
      cN(sN({
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, m), {
        width: g,
        height: g,
        ref: s,
        children: [
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M16 17.4933V12.5067",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M18.7053 5.51867L28.9173 23.3907C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3907L13.2947 5.51867C14.4907 3.424 17.5093 3.424 18.7053 5.51867Z",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ ne.jsx("circle", { cx: "16", cy: "21.3333", r: "1.33333", fill: p })
        ]
      })
    );
  }
);
var pN = Object.defineProperty, vN = Object.defineProperties, hN = Object.getOwnPropertyDescriptors, vg = Object.getOwnPropertySymbols, NR = Object.prototype.hasOwnProperty, MR = Object.prototype.propertyIsEnumerable, h_ = (o, s, c) => s in o ? pN(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, mN = (o, s) => {
  for (var c in s || (s = {}))
    NR.call(s, c) && h_(o, c, s[c]);
  if (vg)
    for (var c of vg(s))
      MR.call(s, c) && h_(o, c, s[c]);
  return o;
}, yN = (o, s) => vN(o, hN(s)), gN = (o, s) => {
  var c = {};
  for (var p in o)
    NR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && vg)
    for (var p of vg(o))
      s.indexOf(p) < 0 && MR.call(o, p) && (c[p] = o[p]);
  return c;
};
const SN = /* @__PURE__ */ Yt.forwardRef(
  (o, s) => {
    var c = o, {
      color: p = "currentColor",
      size: g = 32,
      strokeWidth: b = 1.5
    } = c, m = gN(c, [
      "color",
      "size",
      "strokeWidth"
    ]);
    return /* @__PURE__ */ ne.jsxs(
      "svg",
      yN(mN({
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, m), {
        width: g,
        height: g,
        ref: s,
        children: [
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M10.6667 10.6667L21.3333 21.3333",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          ),
          /* @__PURE__ */ ne.jsx(
            "path",
            {
              d: "M21.3333 10.6667L10.6667 21.3333",
              stroke: p,
              strokeWidth: b,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              vectorEffect: "non-scaling-stroke"
            }
          )
        ]
      })
    );
  }
);
var bN = Object.defineProperty, xN = Object.defineProperties, EN = Object.getOwnPropertyDescriptors, hg = Object.getOwnPropertySymbols, zR = Object.prototype.hasOwnProperty, jR = Object.prototype.propertyIsEnumerable, m_ = (o, s, c) => s in o ? bN(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, y_ = (o, s) => {
  for (var c in s || (s = {}))
    zR.call(s, c) && m_(o, c, s[c]);
  if (hg)
    for (var c of hg(s))
      jR.call(s, c) && m_(o, c, s[c]);
  return o;
}, CN = (o, s) => xN(o, EN(s)), wN = (o, s) => {
  var c = {};
  for (var p in o)
    zR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && hg)
    for (var p of hg(o))
      s.indexOf(p) < 0 && jR.call(o, p) && (c[p] = o[p]);
  return c;
};
const Md = {
  info: { name: "info", icon: OR },
  warning: { name: "warning", icon: JA },
  success: { name: "success", icon: iN },
  error: { name: "error", icon: dN }
}, Rx = _n(FA, {
  marginLeft: "auto"
}), ng = _n(na, {
  lineHeight: "$md"
}), Fc = _n("span", {
  display: "flex"
}), _N = _n(na, {
  display: "flex",
  alignItems: "start",
  width: "100%",
  borderWidth: "$xs",
  borderStyle: "solid",
  [`${ng}`]: {
    flex: 1,
    minWidth: 0
  },
  variants: {
    size: {
      sm: {
        padding: "$3 $4",
        borderRadius: "$lg",
        [`${Fc}`]: {
          marginInlineEnd: "$2"
        },
        [`${ng}`]: {
          fontSize: "$sm",
          lineHeight: "$sm"
        },
        [`${Rx}`]: {
          height: "$5",
          width: "$5",
          marginInlineStart: "$2"
        }
      },
      md: {
        padding: "$8",
        borderRadius: "$xl",
        [`${Fc}`]: {
          marginInlineEnd: "$4"
        },
        [`${ng}`]: {
          fontSize: "$md",
          lineHeight: "$md"
        },
        [`${Rx}`]: {
          height: "$6",
          width: "$6",
          marginInlineStart: "$4"
        }
      }
    },
    status: {
      [Md.success.name]: {
        backgroundColor: "$positive50",
        borderColor: "$positive200",
        [`${Fc} svg`]: {
          color: "$positive500"
        }
      },
      [Md.info.name]: {
        backgroundColorOpacity: ["$accent500", 0.04],
        borderColorOpacity: ["$accent500", 0.2],
        [`${Fc} svg`]: {
          color: "$accent500"
        }
      },
      [Md.error.name]: {
        backgroundColor: "$negative100",
        borderColor: "$negative200",
        [`${Fc} svg`]: {
          color: "$negative500"
        }
      },
      [Md.warning.name]: {
        backgroundColor: "$warning100",
        borderColor: "$warning200",
        [`${Fc} svg`]: {
          color: "$warning600"
        }
      }
    }
  },
  defaultVariants: {
    size: "sm",
    status: Md.info.name
  }
}), RN = Yt.forwardRef(
  (o, s) => {
    var c = o, {
      closable: p,
      size: g = "sm",
      onClose: b,
      status: m = "info",
      children: w,
      icon: C
    } = c, R = wN(c, [
      "closable",
      "size",
      "onClose",
      "status",
      "children",
      "icon"
    ]), D;
    const O = C || ((D = Md[m]) == null ? void 0 : D.icon);
    if (!O)
      throw new Error(`Invalid status: ${m}`);
    return /* @__PURE__ */ ne.jsxs(_N, CN(y_({ role: "alert", ref: s, size: g, status: m }, R), { children: [
      /* @__PURE__ */ ne.jsx(Fc, { role: "img", "aria-label": `${m}-icon`, children: C ? W.cloneElement(C) : /* @__PURE__ */ ne.jsx(O, { size: g === "sm" ? 20 : 24, "aria-hidden": !0 }) }),
      w,
      p ? /* @__PURE__ */ ne.jsx(
        Rx,
        y_({
          icon: /* @__PURE__ */ ne.jsx(SN, {}),
          "aria-label": "close",
          color: "default"
        }, b && { onClick: b })
      ) : null
    ] }));
  }
), TN = ng;
function FR(o, s = []) {
  let c = [];
  function p(b, m) {
    const w = W.createContext(m), C = c.length;
    c = [...c, m];
    const R = (O) => {
      var ee;
      const { scope: P, children: k, ...j } = O, B = ((ee = P == null ? void 0 : P[o]) == null ? void 0 : ee[C]) || w, G = W.useMemo(() => j, Object.values(j));
      return /* @__PURE__ */ ne.jsx(B.Provider, { value: G, children: k });
    };
    R.displayName = b + "Provider";
    function D(O, P) {
      var B;
      const k = ((B = P == null ? void 0 : P[o]) == null ? void 0 : B[C]) || w, j = W.useContext(k);
      if (j) return j;
      if (m !== void 0) return m;
      throw new Error(`\`${O}\` must be used within \`${b}\``);
    }
    return [R, D];
  }
  const g = () => {
    const b = c.map((m) => W.createContext(m));
    return function(w) {
      const C = (w == null ? void 0 : w[o]) || b;
      return W.useMemo(
        () => ({ [`__scope${o}`]: { ...w, [o]: C } }),
        [w, C]
      );
    };
  };
  return g.scopeName = o, [p, ON(g, ...s)];
}
function ON(...o) {
  const s = o[0];
  if (o.length === 1) return s;
  const c = () => {
    const p = o.map((g) => ({
      useScope: g(),
      scopeName: g.scopeName
    }));
    return function(b) {
      const m = p.reduce((w, { useScope: C, scopeName: R }) => {
        const O = C(b)[`__scope${R}`];
        return { ...w, ...O };
      }, {});
      return W.useMemo(() => ({ [`__scope${s.scopeName}`]: m }), [m]);
    };
  };
  return c.scopeName = s.scopeName, c;
}
function g_(o, s) {
  if (typeof o == "function")
    return o(s);
  o != null && (o.current = s);
}
function UR(...o) {
  return (s) => {
    let c = !1;
    const p = o.map((g) => {
      const b = g_(g, s);
      return !c && typeof b == "function" && (c = !0), b;
    });
    if (c)
      return () => {
        for (let g = 0; g < p.length; g++) {
          const b = p[g];
          typeof b == "function" ? b() : g_(o[g], null);
        }
      };
  };
}
function Wc(...o) {
  return W.useCallback(UR(...o), o);
}
function yu(o, s, { checkForDefaultPrevented: c = !0 } = {}) {
  return function(g) {
    if (o == null || o(g), c === !1 || !g.defaultPrevented)
      return s == null ? void 0 : s(g);
  };
}
var Ss = globalThis != null && globalThis.document ? W.useLayoutEffect : () => {
}, $N = aR[" useId ".trim().toString()] || (() => {
}), kN = 0;
function DN(o) {
  const [s, c] = W.useState($N());
  return Ss(() => {
    c((p) => p ?? String(kN++));
  }, [o]), s ? `radix-${s}` : "";
}
var PN = aR[" useInsertionEffect ".trim().toString()] || Ss;
function LN({
  prop: o,
  defaultProp: s,
  onChange: c = () => {
  },
  caller: p
}) {
  const [g, b, m] = AN({
    defaultProp: s,
    onChange: c
  }), w = o !== void 0, C = w ? o : g;
  {
    const D = W.useRef(o !== void 0);
    W.useEffect(() => {
      const O = D.current;
      O !== w && console.warn(
        `${p} is changing from ${O ? "controlled" : "uncontrolled"} to ${w ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), D.current = w;
    }, [w, p]);
  }
  const R = W.useCallback(
    (D) => {
      var O;
      if (w) {
        const P = NN(D) ? D(o) : D;
        P !== o && ((O = m.current) == null || O.call(m, P));
      } else
        b(D);
    },
    [w, o, b, m]
  );
  return [C, R];
}
function AN({
  defaultProp: o,
  onChange: s
}) {
  const [c, p] = W.useState(o), g = W.useRef(c), b = W.useRef(s);
  return PN(() => {
    b.current = s;
  }, [s]), W.useEffect(() => {
    var m;
    g.current !== c && ((m = b.current) == null || m.call(b, c), g.current = c);
  }, [c, g]), [c, p, b];
}
function NN(o) {
  return typeof o == "function";
}
// @__NO_SIDE_EFFECTS__
function MN(o) {
  const s = /* @__PURE__ */ zN(o), c = W.forwardRef((p, g) => {
    const { children: b, ...m } = p, w = W.Children.toArray(b), C = w.find(FN);
    if (C) {
      const R = C.props.children, D = w.map((O) => O === C ? W.Children.count(R) > 1 ? W.Children.only(null) : W.isValidElement(R) ? R.props.children : null : O);
      return /* @__PURE__ */ ne.jsx(s, { ...m, ref: g, children: W.isValidElement(R) ? W.cloneElement(R, void 0, D) : null });
    }
    return /* @__PURE__ */ ne.jsx(s, { ...m, ref: g, children: b });
  });
  return c.displayName = `${o}.Slot`, c;
}
// @__NO_SIDE_EFFECTS__
function zN(o) {
  const s = W.forwardRef((c, p) => {
    const { children: g, ...b } = c;
    if (W.isValidElement(g)) {
      const m = HN(g), w = UN(b, g.props);
      return g.type !== W.Fragment && (w.ref = p ? UR(p, m) : m), W.cloneElement(g, w);
    }
    return W.Children.count(g) > 1 ? W.Children.only(null) : null;
  });
  return s.displayName = `${o}.SlotClone`, s;
}
var HR = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function jN(o) {
  const s = ({ children: c }) => /* @__PURE__ */ ne.jsx(ne.Fragment, { children: c });
  return s.displayName = `${o}.Slottable`, s.__radixId = HR, s;
}
function FN(o) {
  return W.isValidElement(o) && typeof o.type == "function" && "__radixId" in o.type && o.type.__radixId === HR;
}
function UN(o, s) {
  const c = { ...s };
  for (const p in s) {
    const g = o[p], b = s[p];
    /^on[A-Z]/.test(p) ? g && b ? c[p] = (...w) => {
      const C = b(...w);
      return g(...w), C;
    } : g && (c[p] = g) : p === "style" ? c[p] = { ...g, ...b } : p === "className" && (c[p] = [g, b].filter(Boolean).join(" "));
  }
  return { ...o, ...c };
}
function HN(o) {
  var p, g;
  let s = (p = Object.getOwnPropertyDescriptor(o.props, "ref")) == null ? void 0 : p.get, c = s && "isReactWarning" in s && s.isReactWarning;
  return c ? o.ref : (s = (g = Object.getOwnPropertyDescriptor(o, "ref")) == null ? void 0 : g.get, c = s && "isReactWarning" in s && s.isReactWarning, c ? o.props.ref : o.props.ref || o.ref);
}
var IN = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], xl = IN.reduce((o, s) => {
  const c = /* @__PURE__ */ MN(`Primitive.${s}`), p = W.forwardRef((g, b) => {
    const { asChild: m, ...w } = g, C = m ? c : s;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ ne.jsx(C, { ...w, ref: b });
  });
  return p.displayName = `Primitive.${s}`, { ...o, [s]: p };
}, {});
function BN(o, s) {
  o && zx.flushSync(() => o.dispatchEvent(s));
}
function Pg(o) {
  const s = W.useRef(o);
  return W.useEffect(() => {
    s.current = o;
  }), W.useMemo(() => (...c) => {
    var p;
    return (p = s.current) == null ? void 0 : p.call(s, ...c);
  }, []);
}
function VN(o, s = globalThis == null ? void 0 : globalThis.document) {
  const c = Pg(o);
  W.useEffect(() => {
    const p = (g) => {
      g.key === "Escape" && c(g);
    };
    return s.addEventListener("keydown", p, { capture: !0 }), () => s.removeEventListener("keydown", p, { capture: !0 });
  }, [c, s]);
}
var WN = "DismissableLayer", Tx = "dismissableLayer.update", YN = "dismissableLayer.pointerDownOutside", QN = "dismissableLayer.focusOutside", S_, IR = W.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), BR = W.forwardRef(
  (o, s) => {
    const {
      disableOutsidePointerEvents: c = !1,
      onEscapeKeyDown: p,
      onPointerDownOutside: g,
      onFocusOutside: b,
      onInteractOutside: m,
      onDismiss: w,
      ...C
    } = o, R = W.useContext(IR), [D, O] = W.useState(null), P = (D == null ? void 0 : D.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, k] = W.useState({}), j = Wc(s, (fe) => O(fe)), B = Array.from(R.layers), [G] = [...R.layersWithOutsidePointerEventsDisabled].slice(-1), ee = B.indexOf(G), oe = D ? B.indexOf(D) : -1, se = R.layersWithOutsidePointerEventsDisabled.size > 0, ce = oe >= ee, I = XN((fe) => {
      const Ye = fe.target, tt = [...R.branches].some((We) => We.contains(Ye));
      !ce || tt || (g == null || g(fe), m == null || m(fe), fe.defaultPrevented || w == null || w());
    }, P), he = KN((fe) => {
      const Ye = fe.target;
      [...R.branches].some((We) => We.contains(Ye)) || (b == null || b(fe), m == null || m(fe), fe.defaultPrevented || w == null || w());
    }, P);
    return VN((fe) => {
      oe === R.layers.size - 1 && (p == null || p(fe), !fe.defaultPrevented && w && (fe.preventDefault(), w()));
    }, P), W.useEffect(() => {
      if (D)
        return c && (R.layersWithOutsidePointerEventsDisabled.size === 0 && (S_ = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), R.layersWithOutsidePointerEventsDisabled.add(D)), R.layers.add(D), b_(), () => {
          c && R.layersWithOutsidePointerEventsDisabled.size === 1 && (P.body.style.pointerEvents = S_);
        };
    }, [D, P, c, R]), W.useEffect(() => () => {
      D && (R.layers.delete(D), R.layersWithOutsidePointerEventsDisabled.delete(D), b_());
    }, [D, R]), W.useEffect(() => {
      const fe = () => k({});
      return document.addEventListener(Tx, fe), () => document.removeEventListener(Tx, fe);
    }, []), /* @__PURE__ */ ne.jsx(
      xl.div,
      {
        ...C,
        ref: j,
        style: {
          pointerEvents: se ? ce ? "auto" : "none" : void 0,
          ...o.style
        },
        onFocusCapture: yu(o.onFocusCapture, he.onFocusCapture),
        onBlurCapture: yu(o.onBlurCapture, he.onBlurCapture),
        onPointerDownCapture: yu(
          o.onPointerDownCapture,
          I.onPointerDownCapture
        )
      }
    );
  }
);
BR.displayName = WN;
var qN = "DismissableLayerBranch", GN = W.forwardRef((o, s) => {
  const c = W.useContext(IR), p = W.useRef(null), g = Wc(s, p);
  return W.useEffect(() => {
    const b = p.current;
    if (b)
      return c.branches.add(b), () => {
        c.branches.delete(b);
      };
  }, [c.branches]), /* @__PURE__ */ ne.jsx(xl.div, { ...o, ref: g });
});
GN.displayName = qN;
function XN(o, s = globalThis == null ? void 0 : globalThis.document) {
  const c = Pg(o), p = W.useRef(!1), g = W.useRef(() => {
  });
  return W.useEffect(() => {
    const b = (w) => {
      if (w.target && !p.current) {
        let C = function() {
          VR(
            YN,
            c,
            R,
            { discrete: !0 }
          );
        };
        const R = { originalEvent: w };
        w.pointerType === "touch" ? (s.removeEventListener("click", g.current), g.current = C, s.addEventListener("click", g.current, { once: !0 })) : C();
      } else
        s.removeEventListener("click", g.current);
      p.current = !1;
    }, m = window.setTimeout(() => {
      s.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(m), s.removeEventListener("pointerdown", b), s.removeEventListener("click", g.current);
    };
  }, [s, c]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => p.current = !0
  };
}
function KN(o, s = globalThis == null ? void 0 : globalThis.document) {
  const c = Pg(o), p = W.useRef(!1);
  return W.useEffect(() => {
    const g = (b) => {
      b.target && !p.current && VR(QN, c, { originalEvent: b }, {
        discrete: !1
      });
    };
    return s.addEventListener("focusin", g), () => s.removeEventListener("focusin", g);
  }, [s, c]), {
    onFocusCapture: () => p.current = !0,
    onBlurCapture: () => p.current = !1
  };
}
function b_() {
  const o = new CustomEvent(Tx);
  document.dispatchEvent(o);
}
function VR(o, s, c, { discrete: p }) {
  const g = c.originalEvent.target, b = new CustomEvent(o, { bubbles: !1, cancelable: !0, detail: c });
  s && g.addEventListener(o, s, { once: !0 }), p ? BN(g, b) : g.dispatchEvent(b);
}
var JN = "Portal", WR = W.forwardRef((o, s) => {
  var w;
  const { container: c, ...p } = o, [g, b] = W.useState(!1);
  Ss(() => b(!0), []);
  const m = c || g && ((w = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : w.body);
  return m ? eh.createPortal(/* @__PURE__ */ ne.jsx(xl.div, { ...p, ref: s }), m) : null;
});
WR.displayName = JN;
function ZN(o, s) {
  return W.useReducer((c, p) => s[c][p] ?? c, o);
}
var Fx = (o) => {
  const { present: s, children: c } = o, p = eM(s), g = typeof c == "function" ? c({ present: p.isPresent }) : W.Children.only(c), b = Wc(p.ref, tM(g));
  return typeof c == "function" || p.isPresent ? W.cloneElement(g, { ref: b }) : null;
};
Fx.displayName = "Presence";
function eM(o) {
  const [s, c] = W.useState(), p = W.useRef(null), g = W.useRef(o), b = W.useRef("none"), m = o ? "mounted" : "unmounted", [w, C] = ZN(m, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return W.useEffect(() => {
    const R = Zy(p.current);
    b.current = w === "mounted" ? R : "none";
  }, [w]), Ss(() => {
    const R = p.current, D = g.current;
    if (D !== o) {
      const P = b.current, k = Zy(R);
      o ? C("MOUNT") : k === "none" || (R == null ? void 0 : R.display) === "none" ? C("UNMOUNT") : C(D && P !== k ? "ANIMATION_OUT" : "UNMOUNT"), g.current = o;
    }
  }, [o, C]), Ss(() => {
    if (s) {
      let R;
      const D = s.ownerDocument.defaultView ?? window, O = (k) => {
        const B = Zy(p.current).includes(CSS.escape(k.animationName));
        if (k.target === s && B && (C("ANIMATION_END"), !g.current)) {
          const G = s.style.animationFillMode;
          s.style.animationFillMode = "forwards", R = D.setTimeout(() => {
            s.style.animationFillMode === "forwards" && (s.style.animationFillMode = G);
          });
        }
      }, P = (k) => {
        k.target === s && (b.current = Zy(p.current));
      };
      return s.addEventListener("animationstart", P), s.addEventListener("animationcancel", O), s.addEventListener("animationend", O), () => {
        D.clearTimeout(R), s.removeEventListener("animationstart", P), s.removeEventListener("animationcancel", O), s.removeEventListener("animationend", O);
      };
    } else
      C("ANIMATION_END");
  }, [s, C]), {
    isPresent: ["mounted", "unmountSuspended"].includes(w),
    ref: W.useCallback((R) => {
      p.current = R ? getComputedStyle(R) : null, c(R);
    }, [])
  };
}
function Zy(o) {
  return (o == null ? void 0 : o.animationName) || "none";
}
function tM(o) {
  var p, g;
  let s = (p = Object.getOwnPropertyDescriptor(o.props, "ref")) == null ? void 0 : p.get, c = s && "isReactWarning" in s && s.isReactWarning;
  return c ? o.ref : (s = (g = Object.getOwnPropertyDescriptor(o, "ref")) == null ? void 0 : g.get, c = s && "isReactWarning" in s && s.isReactWarning, c ? o.props.ref : o.props.ref || o.ref);
}
var nM = Object.defineProperty, rM = Object.defineProperties, aM = Object.getOwnPropertyDescriptors, mg = Object.getOwnPropertySymbols, YR = Object.prototype.hasOwnProperty, QR = Object.prototype.propertyIsEnumerable, x_ = (o, s, c) => s in o ? nM(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, vx = (o, s) => {
  for (var c in s || (s = {}))
    YR.call(s, c) && x_(o, c, s[c]);
  if (mg)
    for (var c of mg(s))
      QR.call(s, c) && x_(o, c, s[c]);
  return o;
}, iM = (o, s) => rM(o, aM(s)), oM = (o, s) => {
  var c = {};
  for (var p in o)
    YR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && mg)
    for (var p of mg(o))
      s.indexOf(p) < 0 && QR.call(o, p) && (c[p] = o[p]);
  return c;
};
const lM = _n("p", {
  fontWeight: "$4",
  color: "$text",
  variants: {
    size: {
      xxs: {
        fontSize: "$xxs",
        lineHeight: "$xxs"
      },
      xs: {
        fontSize: "$xs",
        lineHeight: "$xs"
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "$sm"
      },
      md: {
        fontSize: "$md",
        lineHeight: "$md"
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "$lg"
      }
    },
    weight: {
      regular: {
        fontWeight: "$4"
      },
      medium: {
        fontWeight: "$5"
      },
      bold: {
        fontWeight: "$7"
      }
    },
    truncate: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }
  },
  defaultVariants: {
    size: "sm",
    weight: "regular"
  }
}), gs = Yt.forwardRef((o, s) => {
  var c = o, {
    children: p,
    showLines: g,
    css: b
  } = c, m = oM(c, [
    "children",
    "showLines",
    "css"
  ]);
  return /* @__PURE__ */ ne.jsx(
    lM,
    iM(vx({
      "data-testid": "text"
    }, m), {
      ref: s,
      css: vx(vx({}, b), g && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": g,
        "-webkit-box-orient": "vertical"
      }),
      children: p
    })
  );
});
var uM = Object.defineProperty, sM = Object.defineProperties, cM = Object.getOwnPropertyDescriptors, yg = Object.getOwnPropertySymbols, qR = Object.prototype.hasOwnProperty, GR = Object.prototype.propertyIsEnumerable, E_ = (o, s, c) => s in o ? uM(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, C_ = (o, s) => {
  for (var c in s || (s = {}))
    qR.call(s, c) && E_(o, c, s[c]);
  if (yg)
    for (var c of yg(s))
      GR.call(s, c) && E_(o, c, s[c]);
  return o;
}, fM = (o, s) => sM(o, cM(s)), dM = (o, s) => {
  var c = {};
  for (var p in o)
    qR.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && yg)
    for (var p of yg(o))
      s.indexOf(p) < 0 && GR.call(o, p) && (c[p] = o[p]);
  return c;
};
const pM = _n(na, {}), gg = Yt.forwardRef(
  (o, s) => {
    var c = o, {
      children: p,
      flexDirection: g,
      justifyContent: b,
      justifyItems: m,
      alignContent: w,
      alignItems: C,
      gap: R,
      wrap: D,
      shrink: O,
      css: P,
      grow: k,
      flow: j,
      basis: B
    } = c, G = dM(c, [
      "children",
      "flexDirection",
      "justifyContent",
      "justifyItems",
      "alignContent",
      "alignItems",
      "gap",
      "wrap",
      "shrink",
      "css",
      "grow",
      "flow",
      "basis"
    ]);
    return /* @__PURE__ */ ne.jsx(
      pM,
      fM(C_({
        css: C_({
          display: "flex",
          flexDirection: g,
          justifyContent: b,
          justifyItems: m,
          alignContent: w,
          alignItems: C,
          gap: R,
          flexShrink: O,
          flexWrap: D,
          flexGrow: k,
          flexFlow: j,
          flexBasis: B
        }, P),
        "data-testid": "flex"
      }, G), {
        ref: s,
        children: p
      })
    );
  }
), vM = ["top", "right", "bottom", "left"], bs = Math.min, Ei = Math.max, Sg = Math.round, eg = Math.floor, gl = (o) => ({
  x: o,
  y: o
}), hM = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mM = {
  start: "end",
  end: "start"
};
function Ox(o, s, c) {
  return Ei(o, bs(s, c));
}
function Su(o, s) {
  return typeof o == "function" ? o(s) : o;
}
function bu(o) {
  return o.split("-")[0];
}
function Id(o) {
  return o.split("-")[1];
}
function Ux(o) {
  return o === "x" ? "y" : "x";
}
function Hx(o) {
  return o === "y" ? "height" : "width";
}
const yM = /* @__PURE__ */ new Set(["top", "bottom"]);
function yl(o) {
  return yM.has(bu(o)) ? "y" : "x";
}
function Ix(o) {
  return Ux(yl(o));
}
function gM(o, s, c) {
  c === void 0 && (c = !1);
  const p = Id(o), g = Ix(o), b = Hx(g);
  let m = g === "x" ? p === (c ? "end" : "start") ? "right" : "left" : p === "start" ? "bottom" : "top";
  return s.reference[b] > s.floating[b] && (m = bg(m)), [m, bg(m)];
}
function SM(o) {
  const s = bg(o);
  return [$x(o), s, $x(s)];
}
function $x(o) {
  return o.replace(/start|end/g, (s) => mM[s]);
}
const w_ = ["left", "right"], __ = ["right", "left"], bM = ["top", "bottom"], xM = ["bottom", "top"];
function EM(o, s, c) {
  switch (o) {
    case "top":
    case "bottom":
      return c ? s ? __ : w_ : s ? w_ : __;
    case "left":
    case "right":
      return s ? bM : xM;
    default:
      return [];
  }
}
function CM(o, s, c, p) {
  const g = Id(o);
  let b = EM(bu(o), c === "start", p);
  return g && (b = b.map((m) => m + "-" + g), s && (b = b.concat(b.map($x)))), b;
}
function bg(o) {
  return o.replace(/left|right|bottom|top/g, (s) => hM[s]);
}
function wM(o) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...o
  };
}
function XR(o) {
  return typeof o != "number" ? wM(o) : {
    top: o,
    right: o,
    bottom: o,
    left: o
  };
}
function xg(o) {
  const {
    x: s,
    y: c,
    width: p,
    height: g
  } = o;
  return {
    width: p,
    height: g,
    top: c,
    left: s,
    right: s + p,
    bottom: c + g,
    x: s,
    y: c
  };
}
function R_(o, s, c) {
  let {
    reference: p,
    floating: g
  } = o;
  const b = yl(s), m = Ix(s), w = Hx(m), C = bu(s), R = b === "y", D = p.x + p.width / 2 - g.width / 2, O = p.y + p.height / 2 - g.height / 2, P = p[w] / 2 - g[w] / 2;
  let k;
  switch (C) {
    case "top":
      k = {
        x: D,
        y: p.y - g.height
      };
      break;
    case "bottom":
      k = {
        x: D,
        y: p.y + p.height
      };
      break;
    case "right":
      k = {
        x: p.x + p.width,
        y: O
      };
      break;
    case "left":
      k = {
        x: p.x - g.width,
        y: O
      };
      break;
    default:
      k = {
        x: p.x,
        y: p.y
      };
  }
  switch (Id(s)) {
    case "start":
      k[m] -= P * (c && R ? -1 : 1);
      break;
    case "end":
      k[m] += P * (c && R ? -1 : 1);
      break;
  }
  return k;
}
const _M = async (o, s, c) => {
  const {
    placement: p = "bottom",
    strategy: g = "absolute",
    middleware: b = [],
    platform: m
  } = c, w = b.filter(Boolean), C = await (m.isRTL == null ? void 0 : m.isRTL(s));
  let R = await m.getElementRects({
    reference: o,
    floating: s,
    strategy: g
  }), {
    x: D,
    y: O
  } = R_(R, p, C), P = p, k = {}, j = 0;
  for (let B = 0; B < w.length; B++) {
    const {
      name: G,
      fn: ee
    } = w[B], {
      x: oe,
      y: se,
      data: ce,
      reset: I
    } = await ee({
      x: D,
      y: O,
      initialPlacement: p,
      placement: P,
      strategy: g,
      middlewareData: k,
      rects: R,
      platform: m,
      elements: {
        reference: o,
        floating: s
      }
    });
    D = oe ?? D, O = se ?? O, k = {
      ...k,
      [G]: {
        ...k[G],
        ...ce
      }
    }, I && j <= 50 && (j++, typeof I == "object" && (I.placement && (P = I.placement), I.rects && (R = I.rects === !0 ? await m.getElementRects({
      reference: o,
      floating: s,
      strategy: g
    }) : I.rects), {
      x: D,
      y: O
    } = R_(R, P, C)), B = -1);
  }
  return {
    x: D,
    y: O,
    placement: P,
    strategy: g,
    middlewareData: k
  };
};
async function nh(o, s) {
  var c;
  s === void 0 && (s = {});
  const {
    x: p,
    y: g,
    platform: b,
    rects: m,
    elements: w,
    strategy: C
  } = o, {
    boundary: R = "clippingAncestors",
    rootBoundary: D = "viewport",
    elementContext: O = "floating",
    altBoundary: P = !1,
    padding: k = 0
  } = Su(s, o), j = XR(k), G = w[P ? O === "floating" ? "reference" : "floating" : O], ee = xg(await b.getClippingRect({
    element: (c = await (b.isElement == null ? void 0 : b.isElement(G))) == null || c ? G : G.contextElement || await (b.getDocumentElement == null ? void 0 : b.getDocumentElement(w.floating)),
    boundary: R,
    rootBoundary: D,
    strategy: C
  })), oe = O === "floating" ? {
    x: p,
    y: g,
    width: m.floating.width,
    height: m.floating.height
  } : m.reference, se = await (b.getOffsetParent == null ? void 0 : b.getOffsetParent(w.floating)), ce = await (b.isElement == null ? void 0 : b.isElement(se)) ? await (b.getScale == null ? void 0 : b.getScale(se)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, I = xg(b.convertOffsetParentRelativeRectToViewportRelativeRect ? await b.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: w,
    rect: oe,
    offsetParent: se,
    strategy: C
  }) : oe);
  return {
    top: (ee.top - I.top + j.top) / ce.y,
    bottom: (I.bottom - ee.bottom + j.bottom) / ce.y,
    left: (ee.left - I.left + j.left) / ce.x,
    right: (I.right - ee.right + j.right) / ce.x
  };
}
const RM = (o) => ({
  name: "arrow",
  options: o,
  async fn(s) {
    const {
      x: c,
      y: p,
      placement: g,
      rects: b,
      platform: m,
      elements: w,
      middlewareData: C
    } = s, {
      element: R,
      padding: D = 0
    } = Su(o, s) || {};
    if (R == null)
      return {};
    const O = XR(D), P = {
      x: c,
      y: p
    }, k = Ix(g), j = Hx(k), B = await m.getDimensions(R), G = k === "y", ee = G ? "top" : "left", oe = G ? "bottom" : "right", se = G ? "clientHeight" : "clientWidth", ce = b.reference[j] + b.reference[k] - P[k] - b.floating[j], I = P[k] - b.reference[k], he = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(R));
    let fe = he ? he[se] : 0;
    (!fe || !await (m.isElement == null ? void 0 : m.isElement(he))) && (fe = w.floating[se] || b.floating[j]);
    const Ye = ce / 2 - I / 2, tt = fe / 2 - B[j] / 2 - 1, We = bs(O[ee], tt), ot = bs(O[oe], tt), nt = We, Re = fe - B[j] - ot, Qe = fe / 2 - B[j] / 2 + Ye, ct = Ox(nt, Qe, Re), qe = !C.arrow && Id(g) != null && Qe !== ct && b.reference[j] / 2 - (Qe < nt ? We : ot) - B[j] / 2 < 0, Ee = qe ? Qe < nt ? Qe - nt : Qe - Re : 0;
    return {
      [k]: P[k] + Ee,
      data: {
        [k]: ct,
        centerOffset: Qe - ct - Ee,
        ...qe && {
          alignmentOffset: Ee
        }
      },
      reset: qe
    };
  }
}), TM = function(o) {
  return o === void 0 && (o = {}), {
    name: "flip",
    options: o,
    async fn(s) {
      var c, p;
      const {
        placement: g,
        middlewareData: b,
        rects: m,
        initialPlacement: w,
        platform: C,
        elements: R
      } = s, {
        mainAxis: D = !0,
        crossAxis: O = !0,
        fallbackPlacements: P,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: j = "none",
        flipAlignment: B = !0,
        ...G
      } = Su(o, s);
      if ((c = b.arrow) != null && c.alignmentOffset)
        return {};
      const ee = bu(g), oe = yl(w), se = bu(w) === w, ce = await (C.isRTL == null ? void 0 : C.isRTL(R.floating)), I = P || (se || !B ? [bg(w)] : SM(w)), he = j !== "none";
      !P && he && I.push(...CM(w, B, j, ce));
      const fe = [w, ...I], Ye = await nh(s, G), tt = [];
      let We = ((p = b.flip) == null ? void 0 : p.overflows) || [];
      if (D && tt.push(Ye[ee]), O) {
        const Qe = gM(g, m, ce);
        tt.push(Ye[Qe[0]], Ye[Qe[1]]);
      }
      if (We = [...We, {
        placement: g,
        overflows: tt
      }], !tt.every((Qe) => Qe <= 0)) {
        var ot, nt;
        const Qe = (((ot = b.flip) == null ? void 0 : ot.index) || 0) + 1, ct = fe[Qe];
        if (ct && (!(O === "alignment" ? oe !== yl(ct) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        We.every((ie) => yl(ie.placement) === oe ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Qe,
              overflows: We
            },
            reset: {
              placement: ct
            }
          };
        let qe = (nt = We.filter((Ee) => Ee.overflows[0] <= 0).sort((Ee, ie) => Ee.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : nt.placement;
        if (!qe)
          switch (k) {
            case "bestFit": {
              var Re;
              const Ee = (Re = We.filter((ie) => {
                if (he) {
                  const ke = yl(ie.placement);
                  return ke === oe || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ke === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((ke) => ke > 0).reduce((ke, V) => ke + V, 0)]).sort((ie, ke) => ie[1] - ke[1])[0]) == null ? void 0 : Re[0];
              Ee && (qe = Ee);
              break;
            }
            case "initialPlacement":
              qe = w;
              break;
          }
        if (g !== qe)
          return {
            reset: {
              placement: qe
            }
          };
      }
      return {};
    }
  };
};
function T_(o, s) {
  return {
    top: o.top - s.height,
    right: o.right - s.width,
    bottom: o.bottom - s.height,
    left: o.left - s.width
  };
}
function O_(o) {
  return vM.some((s) => o[s] >= 0);
}
const OM = function(o) {
  return o === void 0 && (o = {}), {
    name: "hide",
    options: o,
    async fn(s) {
      const {
        rects: c
      } = s, {
        strategy: p = "referenceHidden",
        ...g
      } = Su(o, s);
      switch (p) {
        case "referenceHidden": {
          const b = await nh(s, {
            ...g,
            elementContext: "reference"
          }), m = T_(b, c.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: O_(m)
            }
          };
        }
        case "escaped": {
          const b = await nh(s, {
            ...g,
            altBoundary: !0
          }), m = T_(b, c.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: O_(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, KR = /* @__PURE__ */ new Set(["left", "top"]);
async function $M(o, s) {
  const {
    placement: c,
    platform: p,
    elements: g
  } = o, b = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)), m = bu(c), w = Id(c), C = yl(c) === "y", R = KR.has(m) ? -1 : 1, D = b && C ? -1 : 1, O = Su(s, o);
  let {
    mainAxis: P,
    crossAxis: k,
    alignmentAxis: j
  } = typeof O == "number" ? {
    mainAxis: O,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: O.mainAxis || 0,
    crossAxis: O.crossAxis || 0,
    alignmentAxis: O.alignmentAxis
  };
  return w && typeof j == "number" && (k = w === "end" ? j * -1 : j), C ? {
    x: k * D,
    y: P * R
  } : {
    x: P * R,
    y: k * D
  };
}
const kM = function(o) {
  return o === void 0 && (o = 0), {
    name: "offset",
    options: o,
    async fn(s) {
      var c, p;
      const {
        x: g,
        y: b,
        placement: m,
        middlewareData: w
      } = s, C = await $M(s, o);
      return m === ((c = w.offset) == null ? void 0 : c.placement) && (p = w.arrow) != null && p.alignmentOffset ? {} : {
        x: g + C.x,
        y: b + C.y,
        data: {
          ...C,
          placement: m
        }
      };
    }
  };
}, DM = function(o) {
  return o === void 0 && (o = {}), {
    name: "shift",
    options: o,
    async fn(s) {
      const {
        x: c,
        y: p,
        placement: g
      } = s, {
        mainAxis: b = !0,
        crossAxis: m = !1,
        limiter: w = {
          fn: (G) => {
            let {
              x: ee,
              y: oe
            } = G;
            return {
              x: ee,
              y: oe
            };
          }
        },
        ...C
      } = Su(o, s), R = {
        x: c,
        y: p
      }, D = await nh(s, C), O = yl(bu(g)), P = Ux(O);
      let k = R[P], j = R[O];
      if (b) {
        const G = P === "y" ? "top" : "left", ee = P === "y" ? "bottom" : "right", oe = k + D[G], se = k - D[ee];
        k = Ox(oe, k, se);
      }
      if (m) {
        const G = O === "y" ? "top" : "left", ee = O === "y" ? "bottom" : "right", oe = j + D[G], se = j - D[ee];
        j = Ox(oe, j, se);
      }
      const B = w.fn({
        ...s,
        [P]: k,
        [O]: j
      });
      return {
        ...B,
        data: {
          x: B.x - c,
          y: B.y - p,
          enabled: {
            [P]: b,
            [O]: m
          }
        }
      };
    }
  };
}, PM = function(o) {
  return o === void 0 && (o = {}), {
    options: o,
    fn(s) {
      const {
        x: c,
        y: p,
        placement: g,
        rects: b,
        middlewareData: m
      } = s, {
        offset: w = 0,
        mainAxis: C = !0,
        crossAxis: R = !0
      } = Su(o, s), D = {
        x: c,
        y: p
      }, O = yl(g), P = Ux(O);
      let k = D[P], j = D[O];
      const B = Su(w, s), G = typeof B == "number" ? {
        mainAxis: B,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...B
      };
      if (C) {
        const se = P === "y" ? "height" : "width", ce = b.reference[P] - b.floating[se] + G.mainAxis, I = b.reference[P] + b.reference[se] - G.mainAxis;
        k < ce ? k = ce : k > I && (k = I);
      }
      if (R) {
        var ee, oe;
        const se = P === "y" ? "width" : "height", ce = KR.has(bu(g)), I = b.reference[O] - b.floating[se] + (ce && ((ee = m.offset) == null ? void 0 : ee[O]) || 0) + (ce ? 0 : G.crossAxis), he = b.reference[O] + b.reference[se] + (ce ? 0 : ((oe = m.offset) == null ? void 0 : oe[O]) || 0) - (ce ? G.crossAxis : 0);
        j < I ? j = I : j > he && (j = he);
      }
      return {
        [P]: k,
        [O]: j
      };
    }
  };
}, LM = function(o) {
  return o === void 0 && (o = {}), {
    name: "size",
    options: o,
    async fn(s) {
      var c, p;
      const {
        placement: g,
        rects: b,
        platform: m,
        elements: w
      } = s, {
        apply: C = () => {
        },
        ...R
      } = Su(o, s), D = await nh(s, R), O = bu(g), P = Id(g), k = yl(g) === "y", {
        width: j,
        height: B
      } = b.floating;
      let G, ee;
      O === "top" || O === "bottom" ? (G = O, ee = P === (await (m.isRTL == null ? void 0 : m.isRTL(w.floating)) ? "start" : "end") ? "left" : "right") : (ee = O, G = P === "end" ? "top" : "bottom");
      const oe = B - D.top - D.bottom, se = j - D.left - D.right, ce = bs(B - D[G], oe), I = bs(j - D[ee], se), he = !s.middlewareData.shift;
      let fe = ce, Ye = I;
      if ((c = s.middlewareData.shift) != null && c.enabled.x && (Ye = se), (p = s.middlewareData.shift) != null && p.enabled.y && (fe = oe), he && !P) {
        const We = Ei(D.left, 0), ot = Ei(D.right, 0), nt = Ei(D.top, 0), Re = Ei(D.bottom, 0);
        k ? Ye = j - 2 * (We !== 0 || ot !== 0 ? We + ot : Ei(D.left, D.right)) : fe = B - 2 * (nt !== 0 || Re !== 0 ? nt + Re : Ei(D.top, D.bottom));
      }
      await C({
        ...s,
        availableWidth: Ye,
        availableHeight: fe
      });
      const tt = await m.getDimensions(w.floating);
      return j !== tt.width || B !== tt.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Lg() {
  return typeof window < "u";
}
function Bd(o) {
  return JR(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function Ci(o) {
  var s;
  return (o == null || (s = o.ownerDocument) == null ? void 0 : s.defaultView) || window;
}
function El(o) {
  var s;
  return (s = (JR(o) ? o.ownerDocument : o.document) || window.document) == null ? void 0 : s.documentElement;
}
function JR(o) {
  return Lg() ? o instanceof Node || o instanceof Ci(o).Node : !1;
}
function Oo(o) {
  return Lg() ? o instanceof Element || o instanceof Ci(o).Element : !1;
}
function Sl(o) {
  return Lg() ? o instanceof HTMLElement || o instanceof Ci(o).HTMLElement : !1;
}
function $_(o) {
  return !Lg() || typeof ShadowRoot > "u" ? !1 : o instanceof ShadowRoot || o instanceof Ci(o).ShadowRoot;
}
const AM = /* @__PURE__ */ new Set(["inline", "contents"]);
function ih(o) {
  const {
    overflow: s,
    overflowX: c,
    overflowY: p,
    display: g
  } = $o(o);
  return /auto|scroll|overlay|hidden|clip/.test(s + p + c) && !AM.has(g);
}
const NM = /* @__PURE__ */ new Set(["table", "td", "th"]);
function MM(o) {
  return NM.has(Bd(o));
}
const zM = [":popover-open", ":modal"];
function Ag(o) {
  return zM.some((s) => {
    try {
      return o.matches(s);
    } catch {
      return !1;
    }
  });
}
const jM = ["transform", "translate", "scale", "rotate", "perspective"], FM = ["transform", "translate", "scale", "rotate", "perspective", "filter"], UM = ["paint", "layout", "strict", "content"];
function Bx(o) {
  const s = Vx(), c = Oo(o) ? $o(o) : o;
  return jM.some((p) => c[p] ? c[p] !== "none" : !1) || (c.containerType ? c.containerType !== "normal" : !1) || !s && (c.backdropFilter ? c.backdropFilter !== "none" : !1) || !s && (c.filter ? c.filter !== "none" : !1) || FM.some((p) => (c.willChange || "").includes(p)) || UM.some((p) => (c.contain || "").includes(p));
}
function HM(o) {
  let s = xs(o);
  for (; Sl(s) && !Fd(s); ) {
    if (Bx(s))
      return s;
    if (Ag(s))
      return null;
    s = xs(s);
  }
  return null;
}
function Vx() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const IM = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Fd(o) {
  return IM.has(Bd(o));
}
function $o(o) {
  return Ci(o).getComputedStyle(o);
}
function Ng(o) {
  return Oo(o) ? {
    scrollLeft: o.scrollLeft,
    scrollTop: o.scrollTop
  } : {
    scrollLeft: o.scrollX,
    scrollTop: o.scrollY
  };
}
function xs(o) {
  if (Bd(o) === "html")
    return o;
  const s = (
    // Step into the shadow DOM of the parent of a slotted node.
    o.assignedSlot || // DOM Element detected.
    o.parentNode || // ShadowRoot detected.
    $_(o) && o.host || // Fallback.
    El(o)
  );
  return $_(s) ? s.host : s;
}
function ZR(o) {
  const s = xs(o);
  return Fd(s) ? o.ownerDocument ? o.ownerDocument.body : o.body : Sl(s) && ih(s) ? s : ZR(s);
}
function rh(o, s, c) {
  var p;
  s === void 0 && (s = []), c === void 0 && (c = !0);
  const g = ZR(o), b = g === ((p = o.ownerDocument) == null ? void 0 : p.body), m = Ci(g);
  if (b) {
    const w = kx(m);
    return s.concat(m, m.visualViewport || [], ih(g) ? g : [], w && c ? rh(w) : []);
  }
  return s.concat(g, rh(g, [], c));
}
function kx(o) {
  return o.parent && Object.getPrototypeOf(o.parent) ? o.frameElement : null;
}
function eT(o) {
  const s = $o(o);
  let c = parseFloat(s.width) || 0, p = parseFloat(s.height) || 0;
  const g = Sl(o), b = g ? o.offsetWidth : c, m = g ? o.offsetHeight : p, w = Sg(c) !== b || Sg(p) !== m;
  return w && (c = b, p = m), {
    width: c,
    height: p,
    $: w
  };
}
function Wx(o) {
  return Oo(o) ? o : o.contextElement;
}
function jd(o) {
  const s = Wx(o);
  if (!Sl(s))
    return gl(1);
  const c = s.getBoundingClientRect(), {
    width: p,
    height: g,
    $: b
  } = eT(s);
  let m = (b ? Sg(c.width) : c.width) / p, w = (b ? Sg(c.height) : c.height) / g;
  return (!m || !Number.isFinite(m)) && (m = 1), (!w || !Number.isFinite(w)) && (w = 1), {
    x: m,
    y: w
  };
}
const BM = /* @__PURE__ */ gl(0);
function tT(o) {
  const s = Ci(o);
  return !Vx() || !s.visualViewport ? BM : {
    x: s.visualViewport.offsetLeft,
    y: s.visualViewport.offsetTop
  };
}
function VM(o, s, c) {
  return s === void 0 && (s = !1), !c || s && c !== Ci(o) ? !1 : s;
}
function Bc(o, s, c, p) {
  s === void 0 && (s = !1), c === void 0 && (c = !1);
  const g = o.getBoundingClientRect(), b = Wx(o);
  let m = gl(1);
  s && (p ? Oo(p) && (m = jd(p)) : m = jd(o));
  const w = VM(b, c, p) ? tT(b) : gl(0);
  let C = (g.left + w.x) / m.x, R = (g.top + w.y) / m.y, D = g.width / m.x, O = g.height / m.y;
  if (b) {
    const P = Ci(b), k = p && Oo(p) ? Ci(p) : p;
    let j = P, B = kx(j);
    for (; B && p && k !== j; ) {
      const G = jd(B), ee = B.getBoundingClientRect(), oe = $o(B), se = ee.left + (B.clientLeft + parseFloat(oe.paddingLeft)) * G.x, ce = ee.top + (B.clientTop + parseFloat(oe.paddingTop)) * G.y;
      C *= G.x, R *= G.y, D *= G.x, O *= G.y, C += se, R += ce, j = Ci(B), B = kx(j);
    }
  }
  return xg({
    width: D,
    height: O,
    x: C,
    y: R
  });
}
function Mg(o, s) {
  const c = Ng(o).scrollLeft;
  return s ? s.left + c : Bc(El(o)).left + c;
}
function nT(o, s) {
  const c = o.getBoundingClientRect(), p = c.left + s.scrollLeft - Mg(o, c), g = c.top + s.scrollTop;
  return {
    x: p,
    y: g
  };
}
function WM(o) {
  let {
    elements: s,
    rect: c,
    offsetParent: p,
    strategy: g
  } = o;
  const b = g === "fixed", m = El(p), w = s ? Ag(s.floating) : !1;
  if (p === m || w && b)
    return c;
  let C = {
    scrollLeft: 0,
    scrollTop: 0
  }, R = gl(1);
  const D = gl(0), O = Sl(p);
  if ((O || !O && !b) && ((Bd(p) !== "body" || ih(m)) && (C = Ng(p)), Sl(p))) {
    const k = Bc(p);
    R = jd(p), D.x = k.x + p.clientLeft, D.y = k.y + p.clientTop;
  }
  const P = m && !O && !b ? nT(m, C) : gl(0);
  return {
    width: c.width * R.x,
    height: c.height * R.y,
    x: c.x * R.x - C.scrollLeft * R.x + D.x + P.x,
    y: c.y * R.y - C.scrollTop * R.y + D.y + P.y
  };
}
function YM(o) {
  return Array.from(o.getClientRects());
}
function QM(o) {
  const s = El(o), c = Ng(o), p = o.ownerDocument.body, g = Ei(s.scrollWidth, s.clientWidth, p.scrollWidth, p.clientWidth), b = Ei(s.scrollHeight, s.clientHeight, p.scrollHeight, p.clientHeight);
  let m = -c.scrollLeft + Mg(o);
  const w = -c.scrollTop;
  return $o(p).direction === "rtl" && (m += Ei(s.clientWidth, p.clientWidth) - g), {
    width: g,
    height: b,
    x: m,
    y: w
  };
}
const k_ = 25;
function qM(o, s) {
  const c = Ci(o), p = El(o), g = c.visualViewport;
  let b = p.clientWidth, m = p.clientHeight, w = 0, C = 0;
  if (g) {
    b = g.width, m = g.height;
    const D = Vx();
    (!D || D && s === "fixed") && (w = g.offsetLeft, C = g.offsetTop);
  }
  const R = Mg(p);
  if (R <= 0) {
    const D = p.ownerDocument, O = D.body, P = getComputedStyle(O), k = D.compatMode === "CSS1Compat" && parseFloat(P.marginLeft) + parseFloat(P.marginRight) || 0, j = Math.abs(p.clientWidth - O.clientWidth - k);
    j <= k_ && (b -= j);
  } else R <= k_ && (b += R);
  return {
    width: b,
    height: m,
    x: w,
    y: C
  };
}
const GM = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function XM(o, s) {
  const c = Bc(o, !0, s === "fixed"), p = c.top + o.clientTop, g = c.left + o.clientLeft, b = Sl(o) ? jd(o) : gl(1), m = o.clientWidth * b.x, w = o.clientHeight * b.y, C = g * b.x, R = p * b.y;
  return {
    width: m,
    height: w,
    x: C,
    y: R
  };
}
function D_(o, s, c) {
  let p;
  if (s === "viewport")
    p = qM(o, c);
  else if (s === "document")
    p = QM(El(o));
  else if (Oo(s))
    p = XM(s, c);
  else {
    const g = tT(o);
    p = {
      x: s.x - g.x,
      y: s.y - g.y,
      width: s.width,
      height: s.height
    };
  }
  return xg(p);
}
function rT(o, s) {
  const c = xs(o);
  return c === s || !Oo(c) || Fd(c) ? !1 : $o(c).position === "fixed" || rT(c, s);
}
function KM(o, s) {
  const c = s.get(o);
  if (c)
    return c;
  let p = rh(o, [], !1).filter((w) => Oo(w) && Bd(w) !== "body"), g = null;
  const b = $o(o).position === "fixed";
  let m = b ? xs(o) : o;
  for (; Oo(m) && !Fd(m); ) {
    const w = $o(m), C = Bx(m);
    !C && w.position === "fixed" && (g = null), (b ? !C && !g : !C && w.position === "static" && !!g && GM.has(g.position) || ih(m) && !C && rT(o, m)) ? p = p.filter((D) => D !== m) : g = w, m = xs(m);
  }
  return s.set(o, p), p;
}
function JM(o) {
  let {
    element: s,
    boundary: c,
    rootBoundary: p,
    strategy: g
  } = o;
  const m = [...c === "clippingAncestors" ? Ag(s) ? [] : KM(s, this._c) : [].concat(c), p], w = m[0], C = m.reduce((R, D) => {
    const O = D_(s, D, g);
    return R.top = Ei(O.top, R.top), R.right = bs(O.right, R.right), R.bottom = bs(O.bottom, R.bottom), R.left = Ei(O.left, R.left), R;
  }, D_(s, w, g));
  return {
    width: C.right - C.left,
    height: C.bottom - C.top,
    x: C.left,
    y: C.top
  };
}
function ZM(o) {
  const {
    width: s,
    height: c
  } = eT(o);
  return {
    width: s,
    height: c
  };
}
function ez(o, s, c) {
  const p = Sl(s), g = El(s), b = c === "fixed", m = Bc(o, !0, b, s);
  let w = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const C = gl(0);
  function R() {
    C.x = Mg(g);
  }
  if (p || !p && !b)
    if ((Bd(s) !== "body" || ih(g)) && (w = Ng(s)), p) {
      const k = Bc(s, !0, b, s);
      C.x = k.x + s.clientLeft, C.y = k.y + s.clientTop;
    } else g && R();
  b && !p && g && R();
  const D = g && !p && !b ? nT(g, w) : gl(0), O = m.left + w.scrollLeft - C.x - D.x, P = m.top + w.scrollTop - C.y - D.y;
  return {
    x: O,
    y: P,
    width: m.width,
    height: m.height
  };
}
function hx(o) {
  return $o(o).position === "static";
}
function P_(o, s) {
  if (!Sl(o) || $o(o).position === "fixed")
    return null;
  if (s)
    return s(o);
  let c = o.offsetParent;
  return El(o) === c && (c = c.ownerDocument.body), c;
}
function aT(o, s) {
  const c = Ci(o);
  if (Ag(o))
    return c;
  if (!Sl(o)) {
    let g = xs(o);
    for (; g && !Fd(g); ) {
      if (Oo(g) && !hx(g))
        return g;
      g = xs(g);
    }
    return c;
  }
  let p = P_(o, s);
  for (; p && MM(p) && hx(p); )
    p = P_(p, s);
  return p && Fd(p) && hx(p) && !Bx(p) ? c : p || HM(o) || c;
}
const tz = async function(o) {
  const s = this.getOffsetParent || aT, c = this.getDimensions, p = await c(o.floating);
  return {
    reference: ez(o.reference, await s(o.floating), o.strategy),
    floating: {
      x: 0,
      y: 0,
      width: p.width,
      height: p.height
    }
  };
};
function nz(o) {
  return $o(o).direction === "rtl";
}
const rz = {
  convertOffsetParentRelativeRectToViewportRelativeRect: WM,
  getDocumentElement: El,
  getClippingRect: JM,
  getOffsetParent: aT,
  getElementRects: tz,
  getClientRects: YM,
  getDimensions: ZM,
  getScale: jd,
  isElement: Oo,
  isRTL: nz
};
function iT(o, s) {
  return o.x === s.x && o.y === s.y && o.width === s.width && o.height === s.height;
}
function az(o, s) {
  let c = null, p;
  const g = El(o);
  function b() {
    var w;
    clearTimeout(p), (w = c) == null || w.disconnect(), c = null;
  }
  function m(w, C) {
    w === void 0 && (w = !1), C === void 0 && (C = 1), b();
    const R = o.getBoundingClientRect(), {
      left: D,
      top: O,
      width: P,
      height: k
    } = R;
    if (w || s(), !P || !k)
      return;
    const j = eg(O), B = eg(g.clientWidth - (D + P)), G = eg(g.clientHeight - (O + k)), ee = eg(D), se = {
      rootMargin: -j + "px " + -B + "px " + -G + "px " + -ee + "px",
      threshold: Ei(0, bs(1, C)) || 1
    };
    let ce = !0;
    function I(he) {
      const fe = he[0].intersectionRatio;
      if (fe !== C) {
        if (!ce)
          return m();
        fe ? m(!1, fe) : p = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      fe === 1 && !iT(R, o.getBoundingClientRect()) && m(), ce = !1;
    }
    try {
      c = new IntersectionObserver(I, {
        ...se,
        // Handle <iframe>s
        root: g.ownerDocument
      });
    } catch {
      c = new IntersectionObserver(I, se);
    }
    c.observe(o);
  }
  return m(!0), b;
}
function iz(o, s, c, p) {
  p === void 0 && (p = {});
  const {
    ancestorScroll: g = !0,
    ancestorResize: b = !0,
    elementResize: m = typeof ResizeObserver == "function",
    layoutShift: w = typeof IntersectionObserver == "function",
    animationFrame: C = !1
  } = p, R = Wx(o), D = g || b ? [...R ? rh(R) : [], ...rh(s)] : [];
  D.forEach((ee) => {
    g && ee.addEventListener("scroll", c, {
      passive: !0
    }), b && ee.addEventListener("resize", c);
  });
  const O = R && w ? az(R, c) : null;
  let P = -1, k = null;
  m && (k = new ResizeObserver((ee) => {
    let [oe] = ee;
    oe && oe.target === R && k && (k.unobserve(s), cancelAnimationFrame(P), P = requestAnimationFrame(() => {
      var se;
      (se = k) == null || se.observe(s);
    })), c();
  }), R && !C && k.observe(R), k.observe(s));
  let j, B = C ? Bc(o) : null;
  C && G();
  function G() {
    const ee = Bc(o);
    B && !iT(B, ee) && c(), B = ee, j = requestAnimationFrame(G);
  }
  return c(), () => {
    var ee;
    D.forEach((oe) => {
      g && oe.removeEventListener("scroll", c), b && oe.removeEventListener("resize", c);
    }), O == null || O(), (ee = k) == null || ee.disconnect(), k = null, C && cancelAnimationFrame(j);
  };
}
const oz = kM, lz = DM, uz = TM, sz = LM, cz = OM, L_ = RM, fz = PM, dz = (o, s, c) => {
  const p = /* @__PURE__ */ new Map(), g = {
    platform: rz,
    ...c
  }, b = {
    ...g.platform,
    _c: p
  };
  return _M(o, s, {
    ...g,
    platform: b
  });
};
var pz = typeof document < "u", vz = function() {
}, rg = pz ? W.useLayoutEffect : vz;
function Eg(o, s) {
  if (o === s)
    return !0;
  if (typeof o != typeof s)
    return !1;
  if (typeof o == "function" && o.toString() === s.toString())
    return !0;
  let c, p, g;
  if (o && s && typeof o == "object") {
    if (Array.isArray(o)) {
      if (c = o.length, c !== s.length) return !1;
      for (p = c; p-- !== 0; )
        if (!Eg(o[p], s[p]))
          return !1;
      return !0;
    }
    if (g = Object.keys(o), c = g.length, c !== Object.keys(s).length)
      return !1;
    for (p = c; p-- !== 0; )
      if (!{}.hasOwnProperty.call(s, g[p]))
        return !1;
    for (p = c; p-- !== 0; ) {
      const b = g[p];
      if (!(b === "_owner" && o.$$typeof) && !Eg(o[b], s[b]))
        return !1;
    }
    return !0;
  }
  return o !== o && s !== s;
}
function oT(o) {
  return typeof window > "u" ? 1 : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function A_(o, s) {
  const c = oT(o);
  return Math.round(s * c) / c;
}
function mx(o) {
  const s = W.useRef(o);
  return rg(() => {
    s.current = o;
  }), s;
}
function hz(o) {
  o === void 0 && (o = {});
  const {
    placement: s = "bottom",
    strategy: c = "absolute",
    middleware: p = [],
    platform: g,
    elements: {
      reference: b,
      floating: m
    } = {},
    transform: w = !0,
    whileElementsMounted: C,
    open: R
  } = o, [D, O] = W.useState({
    x: 0,
    y: 0,
    strategy: c,
    placement: s,
    middlewareData: {},
    isPositioned: !1
  }), [P, k] = W.useState(p);
  Eg(P, p) || k(p);
  const [j, B] = W.useState(null), [G, ee] = W.useState(null), oe = W.useCallback((ie) => {
    ie !== he.current && (he.current = ie, B(ie));
  }, []), se = W.useCallback((ie) => {
    ie !== fe.current && (fe.current = ie, ee(ie));
  }, []), ce = b || j, I = m || G, he = W.useRef(null), fe = W.useRef(null), Ye = W.useRef(D), tt = C != null, We = mx(C), ot = mx(g), nt = mx(R), Re = W.useCallback(() => {
    if (!he.current || !fe.current)
      return;
    const ie = {
      placement: s,
      strategy: c,
      middleware: P
    };
    ot.current && (ie.platform = ot.current), dz(he.current, fe.current, ie).then((ke) => {
      const V = {
        ...ke,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: nt.current !== !1
      };
      Qe.current && !Eg(Ye.current, V) && (Ye.current = V, zx.flushSync(() => {
        O(V);
      }));
    });
  }, [P, s, c, ot, nt]);
  rg(() => {
    R === !1 && Ye.current.isPositioned && (Ye.current.isPositioned = !1, O((ie) => ({
      ...ie,
      isPositioned: !1
    })));
  }, [R]);
  const Qe = W.useRef(!1);
  rg(() => (Qe.current = !0, () => {
    Qe.current = !1;
  }), []), rg(() => {
    if (ce && (he.current = ce), I && (fe.current = I), ce && I) {
      if (We.current)
        return We.current(ce, I, Re);
      Re();
    }
  }, [ce, I, Re, We, tt]);
  const ct = W.useMemo(() => ({
    reference: he,
    floating: fe,
    setReference: oe,
    setFloating: se
  }), [oe, se]), qe = W.useMemo(() => ({
    reference: ce,
    floating: I
  }), [ce, I]), Ee = W.useMemo(() => {
    const ie = {
      position: c,
      left: 0,
      top: 0
    };
    if (!qe.floating)
      return ie;
    const ke = A_(qe.floating, D.x), V = A_(qe.floating, D.y);
    return w ? {
      ...ie,
      transform: "translate(" + ke + "px, " + V + "px)",
      ...oT(qe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: c,
      left: ke,
      top: V
    };
  }, [c, w, qe.floating, D.x, D.y]);
  return W.useMemo(() => ({
    ...D,
    update: Re,
    refs: ct,
    elements: qe,
    floatingStyles: Ee
  }), [D, Re, ct, qe, Ee]);
}
const mz = (o) => {
  function s(c) {
    return {}.hasOwnProperty.call(c, "current");
  }
  return {
    name: "arrow",
    options: o,
    fn(c) {
      const {
        element: p,
        padding: g
      } = typeof o == "function" ? o(c) : o;
      return p && s(p) ? p.current != null ? L_({
        element: p.current,
        padding: g
      }).fn(c) : {} : p ? L_({
        element: p,
        padding: g
      }).fn(c) : {};
    }
  };
}, yz = (o, s) => ({
  ...oz(o),
  options: [o, s]
}), gz = (o, s) => ({
  ...lz(o),
  options: [o, s]
}), Sz = (o, s) => ({
  ...fz(o),
  options: [o, s]
}), bz = (o, s) => ({
  ...uz(o),
  options: [o, s]
}), xz = (o, s) => ({
  ...sz(o),
  options: [o, s]
}), Ez = (o, s) => ({
  ...cz(o),
  options: [o, s]
}), Cz = (o, s) => ({
  ...mz(o),
  options: [o, s]
});
var wz = "Arrow", lT = W.forwardRef((o, s) => {
  const { children: c, width: p = 10, height: g = 5, ...b } = o;
  return /* @__PURE__ */ ne.jsx(
    xl.svg,
    {
      ...b,
      ref: s,
      width: p,
      height: g,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: o.asChild ? c : /* @__PURE__ */ ne.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
lT.displayName = wz;
var _z = lT;
function Rz(o) {
  const [s, c] = W.useState(void 0);
  return Ss(() => {
    if (o) {
      c({ width: o.offsetWidth, height: o.offsetHeight });
      const p = new ResizeObserver((g) => {
        if (!Array.isArray(g) || !g.length)
          return;
        const b = g[0];
        let m, w;
        if ("borderBoxSize" in b) {
          const C = b.borderBoxSize, R = Array.isArray(C) ? C[0] : C;
          m = R.inlineSize, w = R.blockSize;
        } else
          m = o.offsetWidth, w = o.offsetHeight;
        c({ width: m, height: w });
      });
      return p.observe(o, { box: "border-box" }), () => p.unobserve(o);
    } else
      c(void 0);
  }, [o]), s;
}
var Yx = "Popper", [uT, sT] = FR(Yx), [Tz, cT] = uT(Yx), fT = (o) => {
  const { __scopePopper: s, children: c } = o, [p, g] = W.useState(null);
  return /* @__PURE__ */ ne.jsx(Tz, { scope: s, anchor: p, onAnchorChange: g, children: c });
};
fT.displayName = Yx;
var dT = "PopperAnchor", pT = W.forwardRef(
  (o, s) => {
    const { __scopePopper: c, virtualRef: p, ...g } = o, b = cT(dT, c), m = W.useRef(null), w = Wc(s, m), C = W.useRef(null);
    return W.useEffect(() => {
      const R = C.current;
      C.current = (p == null ? void 0 : p.current) || m.current, R !== C.current && b.onAnchorChange(C.current);
    }), p ? null : /* @__PURE__ */ ne.jsx(xl.div, { ...g, ref: w });
  }
);
pT.displayName = dT;
var Qx = "PopperContent", [Oz, $z] = uT(Qx), vT = W.forwardRef(
  (o, s) => {
    var Te, Pe, je, Ge, At, _e;
    const {
      __scopePopper: c,
      side: p = "bottom",
      sideOffset: g = 0,
      align: b = "center",
      alignOffset: m = 0,
      arrowPadding: w = 0,
      avoidCollisions: C = !0,
      collisionBoundary: R = [],
      collisionPadding: D = 0,
      sticky: O = "partial",
      hideWhenDetached: P = !1,
      updatePositionStrategy: k = "optimized",
      onPlaced: j,
      ...B
    } = o, G = cT(Qx, c), [ee, oe] = W.useState(null), se = Wc(s, (Nt) => oe(Nt)), [ce, I] = W.useState(null), he = Rz(ce), fe = (he == null ? void 0 : he.width) ?? 0, Ye = (he == null ? void 0 : he.height) ?? 0, tt = p + (b !== "center" ? "-" + b : ""), We = typeof D == "number" ? D : { top: 0, right: 0, bottom: 0, left: 0, ...D }, ot = Array.isArray(R) ? R : [R], nt = ot.length > 0, Re = {
      padding: We,
      boundary: ot.filter(Dz),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: nt
    }, { refs: Qe, floatingStyles: ct, placement: qe, isPositioned: Ee, middlewareData: ie } = hz({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: tt,
      whileElementsMounted: (...Nt) => iz(...Nt, {
        animationFrame: k === "always"
      }),
      elements: {
        reference: G.anchor
      },
      middleware: [
        yz({ mainAxis: g + Ye, alignmentAxis: m }),
        C && gz({
          mainAxis: !0,
          crossAxis: !1,
          limiter: O === "partial" ? Sz() : void 0,
          ...Re
        }),
        C && bz({ ...Re }),
        xz({
          ...Re,
          apply: ({ elements: Nt, rects: bn, availableWidth: Rn, availableHeight: Mn }) => {
            const { width: kr, height: Na } = bn.reference, lr = Nt.floating.style;
            lr.setProperty("--radix-popper-available-width", `${Rn}px`), lr.setProperty("--radix-popper-available-height", `${Mn}px`), lr.setProperty("--radix-popper-anchor-width", `${kr}px`), lr.setProperty("--radix-popper-anchor-height", `${Na}px`);
          }
        }),
        ce && Cz({ element: ce, padding: w }),
        Pz({ arrowWidth: fe, arrowHeight: Ye }),
        P && Ez({ strategy: "referenceHidden", ...Re })
      ]
    }), [ke, V] = yT(qe), L = Pg(j);
    Ss(() => {
      Ee && (L == null || L());
    }, [Ee, L]);
    const X = (Te = ie.arrow) == null ? void 0 : Te.x, we = (Pe = ie.arrow) == null ? void 0 : Pe.y, xe = ((je = ie.arrow) == null ? void 0 : je.centerOffset) !== 0, [Ae, Oe] = W.useState();
    return Ss(() => {
      ee && Oe(window.getComputedStyle(ee).zIndex);
    }, [ee]), /* @__PURE__ */ ne.jsx(
      "div",
      {
        ref: Qe.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ct,
          transform: Ee ? ct.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ae,
          "--radix-popper-transform-origin": [
            (Ge = ie.transformOrigin) == null ? void 0 : Ge.x,
            (At = ie.transformOrigin) == null ? void 0 : At.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_e = ie.hide) == null ? void 0 : _e.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: o.dir,
        children: /* @__PURE__ */ ne.jsx(
          Oz,
          {
            scope: c,
            placedSide: ke,
            onArrowChange: I,
            arrowX: X,
            arrowY: we,
            shouldHideArrow: xe,
            children: /* @__PURE__ */ ne.jsx(
              xl.div,
              {
                "data-side": ke,
                "data-align": V,
                ...B,
                ref: se,
                style: {
                  ...B.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Ee ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
vT.displayName = Qx;
var hT = "PopperArrow", kz = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, mT = W.forwardRef(function(s, c) {
  const { __scopePopper: p, ...g } = s, b = $z(hT, p), m = kz[b.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ ne.jsx(
      "span",
      {
        ref: b.onArrowChange,
        style: {
          position: "absolute",
          left: b.arrowX,
          top: b.arrowY,
          [m]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[b.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[b.placedSide],
          visibility: b.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ ne.jsx(
          _z,
          {
            ...g,
            ref: c,
            style: {
              ...g.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
mT.displayName = hT;
function Dz(o) {
  return o !== null;
}
var Pz = (o) => ({
  name: "transformOrigin",
  options: o,
  fn(s) {
    var G, ee, oe;
    const { placement: c, rects: p, middlewareData: g } = s, m = ((G = g.arrow) == null ? void 0 : G.centerOffset) !== 0, w = m ? 0 : o.arrowWidth, C = m ? 0 : o.arrowHeight, [R, D] = yT(c), O = { start: "0%", center: "50%", end: "100%" }[D], P = (((ee = g.arrow) == null ? void 0 : ee.x) ?? 0) + w / 2, k = (((oe = g.arrow) == null ? void 0 : oe.y) ?? 0) + C / 2;
    let j = "", B = "";
    return R === "bottom" ? (j = m ? O : `${P}px`, B = `${-C}px`) : R === "top" ? (j = m ? O : `${P}px`, B = `${p.floating.height + C}px`) : R === "right" ? (j = `${-C}px`, B = m ? O : `${k}px`) : R === "left" && (j = `${p.floating.width + C}px`, B = m ? O : `${k}px`), { data: { x: j, y: B } };
  }
});
function yT(o) {
  const [s, c = "center"] = o.split("-");
  return [s, c];
}
var Lz = fT, Az = pT, Nz = vT, Mz = mT, zz = Object.defineProperty, jz = Object.defineProperties, Fz = Object.getOwnPropertyDescriptors, Cg = Object.getOwnPropertySymbols, gT = Object.prototype.hasOwnProperty, ST = Object.prototype.propertyIsEnumerable, N_ = (o, s, c) => s in o ? zz(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, ml = (o, s) => {
  for (var c in s || (s = {}))
    gT.call(s, c) && N_(o, c, s[c]);
  if (Cg)
    for (var c of Cg(s))
      ST.call(s, c) && N_(o, c, s[c]);
  return o;
}, M_ = (o, s) => jz(o, Fz(s)), Uz = (o, s) => {
  var c = {};
  for (var p in o)
    gT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && Cg)
    for (var p of Cg(o))
      s.indexOf(p) < 0 && ST.call(o, p) && (c[p] = o[p]);
  return c;
};
const Ji = {
  inputContainer: Wt("input-container"),
  input: Wt("input"),
  inputWithLeftIcon: Wt("input--with-left-icon"),
  inputWithRightIcon: Wt("input--with-right-icon")
}, z_ = _n("input", {
  width: "100%",
  color: "$neutral900",
  borderWidth: "$xs",
  borderStyle: "solid",
  borderColor: "transparent",
  transition: "all $transitions$2",
  "&::placeholder": {
    color: "$neutral500"
  },
  "&:hover:not(:disabled), &:focus, &:active:not(:disabled)": {
    background: "$white900",
    borderWidth: "$xs",
    borderStyle: "solid",
    borderColor: "$neutral400"
  },
  "&:focus, &:active:not(:disabled)": {
    $$shadowColor: "$colors$primary200",
    outline: "none",
    background: "$white900",
    boxShadow: "rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  },
  "&:disabled": {
    color: "$neutral700",
    backgroundColorOpacity: ["$secondary500", 0.06],
    cursor: "not-allowed",
    borderWidth: "$xs",
    borderStyle: "solid",
    borderColor: "$neutral200",
    opacity: 0.6,
    "&:hover": {
      boxShadow: "none"
    }
  },
  "&.focused-state": {
    borderWidth: "$xs",
    borderStyle: "solid",
    borderColorOpacity: ["$secondary500", 0.4],
    $$shadowColor: "$colors$primary300",
    background: "$white900",
    boxShadow: "rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  },
  variants: {
    size: {
      xl: {
        height: "$12",
        borderRadius: "$xl",
        padding: "$6",
        fontSize: "$md",
        [`&.${Ji.inputWithLeftIcon}`]: {
          paddingInlineStart: "$18"
        },
        [`&.${Ji.inputWithRightIcon}`]: {
          paddingInlineEnd: "$18"
        }
      },
      lg: {
        height: "$10",
        borderRadius: "$lg",
        padding: "$5 $6",
        fontSize: "$sm",
        [`&.${Ji.inputWithLeftIcon}`]: {
          paddingInlineStart: "$18"
        },
        [`&.${Ji.inputWithRightIcon}`]: {
          paddingInlineEnd: "$18"
        }
      },
      md: {
        height: "$8",
        borderRadius: "$lg",
        padding: "$3 $4",
        fontSize: "$sm",
        [`&.${Ji.inputWithLeftIcon}`]: {
          paddingInlineStart: "$14"
        },
        [`&.${Ji.inputWithRightIcon}`]: {
          paddingInlineEnd: "$14"
        }
      },
      sm: {
        height: "$6",
        borderRadius: "$sm",
        padding: "$2 $4",
        fontSize: "$xs",
        [`&.${Ji.inputWithLeftIcon}`]: {
          paddingInlineStart: "$13"
        },
        [`&.${Ji.inputWithRightIcon}`]: {
          paddingInlineEnd: "$12"
        }
      }
    },
    variant: {
      default: {
        background: "$white900",
        borderWidth: "$xs",
        borderStyle: "solid",
        borderColorOpacity: ["$black900", 0.15],
        "&:hover:not(:disabled), &:focus, &:active:not(:disabled)": {
          borderWidth: "$xs",
          borderStyle: "solid",
          borderColor: "$neutral400"
        }
      },
      filled: {
        backgroundColorOpacity: ["$secondary500", 0.06]
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "default"
  }
});
function Hz(o) {
  switch (o) {
    case "lg":
      return "$20";
    case "md":
      return "$14";
    case "sm":
      return "$14";
    default:
      return "$22";
  }
}
const j_ = _n(na, {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "$neutral800",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "2",
  pointerEvents: "none",
  variants: {
    size: {
      xl: {
        width: "$5",
        height: "$5",
        "& svg": {
          width: "100%",
          height: "100%"
        }
      },
      lg: {
        width: "$5",
        height: "$5",
        "& svg": {
          width: "100%",
          height: "100%"
        }
      },
      md: {
        width: "$4",
        height: "$4",
        "& svg": {
          width: "$4",
          height: "$4"
        }
      },
      sm: {
        width: "14px",
        height: "14px",
        "& svg": {
          width: "14px",
          height: "14px"
        }
      }
    },
    position: {
      left: {},
      right: {}
    }
  },
  compoundVariants: [
    {
      position: "left",
      size: "sm",
      css: {
        left: "$4"
      }
    },
    {
      position: "left",
      size: "md",
      css: {
        left: "$4"
      }
    },
    {
      position: "left",
      size: "lg",
      css: {
        left: "$6"
      }
    },
    {
      position: "left",
      size: "xl",
      css: {
        left: "$6"
      }
    },
    {
      position: "right",
      size: "sm",
      css: {
        right: "$4"
      }
    },
    {
      position: "right",
      size: "md",
      css: {
        right: "$4"
      }
    },
    {
      position: "right",
      size: "lg",
      css: {
        right: "$6"
      }
    },
    {
      position: "right",
      size: "xl",
      css: {
        right: "$6"
      }
    }
  ]
}), F_ = _n(na, {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  variants: {
    position: {
      right: {
        right: 0
      },
      left: {
        left: 0
      }
    }
  }
}), Dx = {
  boxShadow: "$colors$negative500 0px 1px 0px 0px",
  borderBottomWidth: "0",
  "&:not(:disabled):hover": {
    borderBottomWidth: "0"
  },
  "&:focus,&:active": {
    $$shadowColor: "$colors$primary200",
    borderBottom: "0",
    boxShadow: "$colors$negative500 0px 1px 0px 0px,rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  }
}, Iz = Yt.forwardRef(
  (o, s) => {
    var c = o, {
      size: p = "md",
      leftIcon: g,
      rightIcon: b,
      css: m,
      rightElement: w,
      leftElement: C,
      errorBorder: R = !1
    } = c, D = Uz(c, [
      "size",
      "leftIcon",
      "rightIcon",
      "css",
      "rightElement",
      "leftElement",
      "errorBorder"
    ]);
    const O = Hz(p);
    return g || b || w || C ? /* @__PURE__ */ ne.jsxs(
      na,
      {
        css: ml({
          display: "flex",
          alignItems: "center",
          position: "relative"
        }, m),
        className: Ji.inputContainer,
        children: [
          g && /* @__PURE__ */ ne.jsx(j_, { size: p, position: "left", children: Yt.cloneElement(g) }),
          C && /* @__PURE__ */ ne.jsx(
            F_,
            {
              position: "left",
              className: Wt("input__addon--left"),
              children: Yt.cloneElement(C)
            }
          ),
          /* @__PURE__ */ ne.jsx(
            z_,
            M_(ml({
              ref: s,
              size: p,
              "data-testid": "input",
              css: ml(ml(ml({}, g && { paddingInlineStart: O }), b && { paddingInlineEnd: O }), R && ml({}, Dx))
            }, D), {
              className: Nx(Ji.input, D.className, {
                [Ji.inputWithLeftIcon]: !!g,
                [Ji.inputWithRightIcon]: !!b
              })
            })
          ),
          b && /* @__PURE__ */ ne.jsx(
            j_,
            {
              size: p,
              position: "right",
              children: Yt.cloneElement(b)
            }
          ),
          w && /* @__PURE__ */ ne.jsx(
            F_,
            {
              position: "right",
              className: Wt("input__addon--right"),
              children: Yt.cloneElement(w)
            }
          )
        ]
      }
    ) : /* @__PURE__ */ ne.jsx(
      z_,
      M_(ml({
        ref: s,
        size: p,
        "data-testid": "input"
      }, D), {
        css: ml(ml({}, m), R && ml({}, Dx))
      })
    );
  }
);
var Bz = Object.defineProperty, Vz = Object.defineProperties, Wz = Object.getOwnPropertyDescriptors, wg = Object.getOwnPropertySymbols, bT = Object.prototype.hasOwnProperty, xT = Object.prototype.propertyIsEnumerable, U_ = (o, s, c) => s in o ? Bz(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, Yz = (o, s) => {
  for (var c in s || (s = {}))
    bT.call(s, c) && U_(o, c, s[c]);
  if (wg)
    for (var c of wg(s))
      xT.call(s, c) && U_(o, c, s[c]);
  return o;
}, Qz = (o, s) => Vz(o, Wz(s)), qz = (o, s) => {
  var c = {};
  for (var p in o)
    bT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && wg)
    for (var p of wg(o))
      s.indexOf(p) < 0 && xT.call(o, p) && (c[p] = o[p]);
  return c;
};
const Gz = _n(gs, {
  color: "$neutral700",
  fontWeight: "$4",
  variants: {
    color: {
      error: {
        color: "$negative500"
      },
      info: {
        color: "$neutral700"
      }
    }
  },
  defaultVariants: {
    color: "info"
  }
}), qx = (o) => {
  var s = o, {
    css: c,
    children: p
  } = s, g = qz(s, [
    "css",
    "children"
  ]);
  return /* @__PURE__ */ ne.jsx(
    Gz,
    Qz(Yz({
      size: "xs",
      css: c,
      "data-testid": "helper-text"
    }, g), {
      children: p
    })
  );
};
var Xz = "Label", ET = W.forwardRef((o, s) => /* @__PURE__ */ ne.jsx(
  xl.label,
  {
    ...o,
    ref: s,
    onMouseDown: (c) => {
      var g;
      c.target.closest("button, input, select, textarea") || ((g = o.onMouseDown) == null || g.call(o, c), !c.defaultPrevented && c.detail > 1 && c.preventDefault());
    }
  }
));
ET.displayName = Xz;
var Kz = ET, Jz = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Zz = "VisuallyHidden", CT = W.forwardRef(
  (o, s) => /* @__PURE__ */ ne.jsx(
    xl.span,
    {
      ...o,
      ref: s,
      style: { ...Jz, ...o.style }
    }
  )
);
CT.displayName = Zz;
var ej = CT, [zg] = FR("Tooltip", [
  sT
]), jg = sT(), wT = "TooltipProvider", tj = 700, Px = "tooltip.open", [nj, Gx] = zg(wT), _T = (o) => {
  const {
    __scopeTooltip: s,
    delayDuration: c = tj,
    skipDelayDuration: p = 300,
    disableHoverableContent: g = !1,
    children: b
  } = o, m = W.useRef(!0), w = W.useRef(!1), C = W.useRef(0);
  return W.useEffect(() => {
    const R = C.current;
    return () => window.clearTimeout(R);
  }, []), /* @__PURE__ */ ne.jsx(
    nj,
    {
      scope: s,
      isOpenDelayedRef: m,
      delayDuration: c,
      onOpen: W.useCallback(() => {
        window.clearTimeout(C.current), m.current = !1;
      }, []),
      onClose: W.useCallback(() => {
        window.clearTimeout(C.current), C.current = window.setTimeout(
          () => m.current = !0,
          p
        );
      }, [p]),
      isPointerInTransitRef: w,
      onPointerInTransitChange: W.useCallback((R) => {
        w.current = R;
      }, []),
      disableHoverableContent: g,
      children: b
    }
  );
};
_T.displayName = wT;
var ah = "Tooltip", [rj, oh] = zg(ah), RT = (o) => {
  const {
    __scopeTooltip: s,
    children: c,
    open: p,
    defaultOpen: g,
    onOpenChange: b,
    disableHoverableContent: m,
    delayDuration: w
  } = o, C = Gx(ah, o.__scopeTooltip), R = jg(s), [D, O] = W.useState(null), P = DN(), k = W.useRef(0), j = m ?? C.disableHoverableContent, B = w ?? C.delayDuration, G = W.useRef(!1), [ee, oe] = LN({
    prop: p,
    defaultProp: g ?? !1,
    onChange: (fe) => {
      fe ? (C.onOpen(), document.dispatchEvent(new CustomEvent(Px))) : C.onClose(), b == null || b(fe);
    },
    caller: ah
  }), se = W.useMemo(() => ee ? G.current ? "delayed-open" : "instant-open" : "closed", [ee]), ce = W.useCallback(() => {
    window.clearTimeout(k.current), k.current = 0, G.current = !1, oe(!0);
  }, [oe]), I = W.useCallback(() => {
    window.clearTimeout(k.current), k.current = 0, oe(!1);
  }, [oe]), he = W.useCallback(() => {
    window.clearTimeout(k.current), k.current = window.setTimeout(() => {
      G.current = !0, oe(!0), k.current = 0;
    }, B);
  }, [B, oe]);
  return W.useEffect(() => () => {
    k.current && (window.clearTimeout(k.current), k.current = 0);
  }, []), /* @__PURE__ */ ne.jsx(Lz, { ...R, children: /* @__PURE__ */ ne.jsx(
    rj,
    {
      scope: s,
      contentId: P,
      open: ee,
      stateAttribute: se,
      trigger: D,
      onTriggerChange: O,
      onTriggerEnter: W.useCallback(() => {
        C.isOpenDelayedRef.current ? he() : ce();
      }, [C.isOpenDelayedRef, he, ce]),
      onTriggerLeave: W.useCallback(() => {
        j ? I() : (window.clearTimeout(k.current), k.current = 0);
      }, [I, j]),
      onOpen: ce,
      onClose: I,
      disableHoverableContent: j,
      children: c
    }
  ) });
};
RT.displayName = ah;
var Lx = "TooltipTrigger", TT = W.forwardRef(
  (o, s) => {
    const { __scopeTooltip: c, ...p } = o, g = oh(Lx, c), b = Gx(Lx, c), m = jg(c), w = W.useRef(null), C = Wc(s, w, g.onTriggerChange), R = W.useRef(!1), D = W.useRef(!1), O = W.useCallback(() => R.current = !1, []);
    return W.useEffect(() => () => document.removeEventListener("pointerup", O), [O]), /* @__PURE__ */ ne.jsx(Az, { asChild: !0, ...m, children: /* @__PURE__ */ ne.jsx(
      xl.button,
      {
        "aria-describedby": g.open ? g.contentId : void 0,
        "data-state": g.stateAttribute,
        ...p,
        ref: C,
        onPointerMove: yu(o.onPointerMove, (P) => {
          P.pointerType !== "touch" && !D.current && !b.isPointerInTransitRef.current && (g.onTriggerEnter(), D.current = !0);
        }),
        onPointerLeave: yu(o.onPointerLeave, () => {
          g.onTriggerLeave(), D.current = !1;
        }),
        onPointerDown: yu(o.onPointerDown, () => {
          g.open && g.onClose(), R.current = !0, document.addEventListener("pointerup", O, { once: !0 });
        }),
        onFocus: yu(o.onFocus, () => {
          R.current || g.onOpen();
        }),
        onBlur: yu(o.onBlur, g.onClose),
        onClick: yu(o.onClick, g.onClose)
      }
    ) });
  }
);
TT.displayName = Lx;
var Xx = "TooltipPortal", [aj, ij] = zg(Xx, {
  forceMount: void 0
}), OT = (o) => {
  const { __scopeTooltip: s, forceMount: c, children: p, container: g } = o, b = oh(Xx, s);
  return /* @__PURE__ */ ne.jsx(aj, { scope: s, forceMount: c, children: /* @__PURE__ */ ne.jsx(Fx, { present: c || b.open, children: /* @__PURE__ */ ne.jsx(WR, { asChild: !0, container: g, children: p }) }) });
};
OT.displayName = Xx;
var Ud = "TooltipContent", $T = W.forwardRef(
  (o, s) => {
    const c = ij(Ud, o.__scopeTooltip), { forceMount: p = c.forceMount, side: g = "top", ...b } = o, m = oh(Ud, o.__scopeTooltip);
    return /* @__PURE__ */ ne.jsx(Fx, { present: p || m.open, children: m.disableHoverableContent ? /* @__PURE__ */ ne.jsx(kT, { side: g, ...b, ref: s }) : /* @__PURE__ */ ne.jsx(oj, { side: g, ...b, ref: s }) });
  }
), oj = W.forwardRef((o, s) => {
  const c = oh(Ud, o.__scopeTooltip), p = Gx(Ud, o.__scopeTooltip), g = W.useRef(null), b = Wc(s, g), [m, w] = W.useState(null), { trigger: C, onClose: R } = c, D = g.current, { onPointerInTransitChange: O } = p, P = W.useCallback(() => {
    w(null), O(!1);
  }, [O]), k = W.useCallback(
    (j, B) => {
      const G = j.currentTarget, ee = { x: j.clientX, y: j.clientY }, oe = cj(ee, G.getBoundingClientRect()), se = fj(ee, oe), ce = dj(B.getBoundingClientRect()), I = vj([...se, ...ce]);
      w(I), O(!0);
    },
    [O]
  );
  return W.useEffect(() => () => P(), [P]), W.useEffect(() => {
    if (C && D) {
      const j = (G) => k(G, D), B = (G) => k(G, C);
      return C.addEventListener("pointerleave", j), D.addEventListener("pointerleave", B), () => {
        C.removeEventListener("pointerleave", j), D.removeEventListener("pointerleave", B);
      };
    }
  }, [C, D, k, P]), W.useEffect(() => {
    if (m) {
      const j = (B) => {
        const G = B.target, ee = { x: B.clientX, y: B.clientY }, oe = (C == null ? void 0 : C.contains(G)) || (D == null ? void 0 : D.contains(G)), se = !pj(ee, m);
        oe ? P() : se && (P(), R());
      };
      return document.addEventListener("pointermove", j), () => document.removeEventListener("pointermove", j);
    }
  }, [C, D, m, R, P]), /* @__PURE__ */ ne.jsx(kT, { ...o, ref: b });
}), [lj, uj] = zg(ah, { isInside: !1 }), sj = /* @__PURE__ */ jN("TooltipContent"), kT = W.forwardRef(
  (o, s) => {
    const {
      __scopeTooltip: c,
      children: p,
      "aria-label": g,
      onEscapeKeyDown: b,
      onPointerDownOutside: m,
      ...w
    } = o, C = oh(Ud, c), R = jg(c), { onClose: D } = C;
    return W.useEffect(() => (document.addEventListener(Px, D), () => document.removeEventListener(Px, D)), [D]), W.useEffect(() => {
      if (C.trigger) {
        const O = (P) => {
          const k = P.target;
          k != null && k.contains(C.trigger) && D();
        };
        return window.addEventListener("scroll", O, { capture: !0 }), () => window.removeEventListener("scroll", O, { capture: !0 });
      }
    }, [C.trigger, D]), /* @__PURE__ */ ne.jsx(
      BR,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: b,
        onPointerDownOutside: m,
        onFocusOutside: (O) => O.preventDefault(),
        onDismiss: D,
        children: /* @__PURE__ */ ne.jsxs(
          Nz,
          {
            "data-state": C.stateAttribute,
            ...R,
            ...w,
            ref: s,
            style: {
              ...w.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ ne.jsx(sj, { children: p }),
              /* @__PURE__ */ ne.jsx(lj, { scope: c, isInside: !0, children: /* @__PURE__ */ ne.jsx(ej, { id: C.contentId, role: "tooltip", children: g || p }) })
            ]
          }
        )
      }
    );
  }
);
$T.displayName = Ud;
var DT = "TooltipArrow", PT = W.forwardRef(
  (o, s) => {
    const { __scopeTooltip: c, ...p } = o, g = jg(c);
    return uj(
      DT,
      c
    ).isInside ? null : /* @__PURE__ */ ne.jsx(Mz, { ...g, ...p, ref: s });
  }
);
PT.displayName = DT;
function cj(o, s) {
  const c = Math.abs(s.top - o.y), p = Math.abs(s.bottom - o.y), g = Math.abs(s.right - o.x), b = Math.abs(s.left - o.x);
  switch (Math.min(c, p, g, b)) {
    case b:
      return "left";
    case g:
      return "right";
    case c:
      return "top";
    case p:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function fj(o, s, c = 5) {
  const p = [];
  switch (s) {
    case "top":
      p.push(
        { x: o.x - c, y: o.y + c },
        { x: o.x + c, y: o.y + c }
      );
      break;
    case "bottom":
      p.push(
        { x: o.x - c, y: o.y - c },
        { x: o.x + c, y: o.y - c }
      );
      break;
    case "left":
      p.push(
        { x: o.x + c, y: o.y - c },
        { x: o.x + c, y: o.y + c }
      );
      break;
    case "right":
      p.push(
        { x: o.x - c, y: o.y - c },
        { x: o.x - c, y: o.y + c }
      );
      break;
  }
  return p;
}
function dj(o) {
  const { top: s, right: c, bottom: p, left: g } = o;
  return [
    { x: g, y: s },
    { x: c, y: s },
    { x: c, y: p },
    { x: g, y: p }
  ];
}
function pj(o, s) {
  const { x: c, y: p } = o;
  let g = !1;
  for (let b = 0, m = s.length - 1; b < s.length; m = b++) {
    const w = s[b], C = s[m], R = w.x, D = w.y, O = C.x, P = C.y;
    D > p != P > p && c < (O - R) * (p - D) / (P - D) + R && (g = !g);
  }
  return g;
}
function vj(o) {
  const s = o.slice();
  return s.sort((c, p) => c.x < p.x ? -1 : c.x > p.x ? 1 : c.y < p.y ? -1 : c.y > p.y ? 1 : 0), hj(s);
}
function hj(o) {
  if (o.length <= 1) return o.slice();
  const s = [];
  for (let p = 0; p < o.length; p++) {
    const g = o[p];
    for (; s.length >= 2; ) {
      const b = s[s.length - 1], m = s[s.length - 2];
      if ((b.x - m.x) * (g.y - m.y) >= (b.y - m.y) * (g.x - m.x)) s.pop();
      else break;
    }
    s.push(g);
  }
  s.pop();
  const c = [];
  for (let p = o.length - 1; p >= 0; p--) {
    const g = o[p];
    for (; c.length >= 2; ) {
      const b = c[c.length - 1], m = c[c.length - 2];
      if ((b.x - m.x) * (g.y - m.y) >= (b.y - m.y) * (g.x - m.x)) c.pop();
      else break;
    }
    c.push(g);
  }
  return c.pop(), s.length === 1 && c.length === 1 && s[0].x === c[0].x && s[0].y === c[0].y ? s : s.concat(c);
}
var mj = _T, yj = RT, gj = TT, Sj = OT, LT = $T, bj = PT, xj = Object.defineProperty, Ej = Object.defineProperties, Cj = Object.getOwnPropertyDescriptors, _g = Object.getOwnPropertySymbols, AT = Object.prototype.hasOwnProperty, NT = Object.prototype.propertyIsEnumerable, H_ = (o, s, c) => s in o ? xj(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, wj = (o, s) => {
  for (var c in s || (s = {}))
    AT.call(s, c) && H_(o, c, s[c]);
  if (_g)
    for (var c of _g(s))
      NT.call(s, c) && H_(o, c, s[c]);
  return o;
}, _j = (o, s) => Ej(o, Cj(s)), Rj = (o, s) => {
  var c = {};
  for (var p in o)
    AT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && _g)
    for (var p of _g(o))
      s.indexOf(p) < 0 && NT.call(o, p) && (c[p] = o[p]);
  return c;
};
const Tj = Vc({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
}), Oj = Vc({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
}), $j = Vc({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
}), kj = Vc({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
}), Dj = _n(LT, {
  lineHeight: "$sm",
  color: "$white900",
  backgroundColor: "$neutral900",
  userSelect: "none",
  opacity: 1,
  maxWidth: "250px",
  "& span": {
    visibility: "visible !important"
  },
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "800ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: $j },
      '&[data-side="right"]': { animationName: kj },
      '&[data-side="bottom"]': { animationName: Tj },
      '&[data-side="left"]': { animationName: Oj }
    }
  },
  variants: {
    size: {
      sm: {
        padding: "$2 $4",
        fontSize: "$xs",
        fontWeight: "$5",
        borderRadius: "$sm",
        lineHeight: "$xs",
        minWidth: "$8",
        height: "auto",
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            "& span": {
              left: "$4 !important"
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            "& span": {
              top: "$5 !important"
            }
          }
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            "& span": {
              left: "auto !important",
              right: "$4 !important"
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            "& span": {
              top: "auto !important",
              bottom: "$5 !important"
            }
          }
        }
      },
      md: {
        padding: "$3 $6",
        fontSize: "$sm",
        fontWeight: "$4",
        borderRadius: "$lg",
        lineHeight: "$sm",
        minWidth: "50px",
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            "& span": {
              left: "$10 !important"
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            "& span": {
              top: "15px !important"
            }
          }
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            "& span": {
              left: "auto !important",
              right: "$10 !important"
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            "& span": {
              top: "auto !important",
              bottom: "15px !important"
            }
          }
        }
      },
      lg: {
        padding: "$6 $8",
        fontSize: "$sm",
        fontWeight: "$5",
        borderRadius: "$lg",
        lineHeight: "$sm",
        minWidth: "$15",
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            "& span": {
              left: "$12 !important"
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            "& span": {
              top: "$8 !important"
            }
          }
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            "& span": {
              left: "auto !important",
              right: "$12 !important"
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            "& span": {
              top: "auto !important",
              bottom: "$8 !important"
            }
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Pj = _n(bj, {
  fill: "$neutral900",
  variants: {
    size: {
      sm: {
        width: "10px",
        height: "6px"
      },
      md: {
        width: "14px",
        height: "$2"
      },
      lg: {
        width: "$5",
        height: "$3"
      }
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Lj = (o) => {
  var s = o, {
    children: c,
    content: p,
    side: g,
    align: b,
    size: m,
    open: w,
    defaultOpen: C,
    delayDuration: R,
    disableHoverableContent: D,
    onOpenChange: O
  } = s, P = Rj(s, [
    "children",
    "content",
    "side",
    "align",
    "size",
    "open",
    "defaultOpen",
    "delayDuration",
    "disableHoverableContent",
    "onOpenChange"
  ]);
  return /* @__PURE__ */ ne.jsxs(
    yj,
    {
      open: w,
      defaultOpen: C,
      onOpenChange: O,
      delayDuration: R,
      disableHoverableContent: D,
      children: [
        /* @__PURE__ */ ne.jsx(gj, { asChild: !0, children: c }),
        p ? /* @__PURE__ */ ne.jsx(Sj, { children: /* @__PURE__ */ ne.jsxs(Dj, _j(wj({ side: g, align: b, size: m }, P), { children: [
          p,
          /* @__PURE__ */ ne.jsx(Pj, { size: m })
        ] })) }) : /* @__PURE__ */ ne.jsx(LT, {})
      ]
    }
  );
}, MT = mj;
var Aj = Object.defineProperty, Nj = Object.defineProperties, Mj = Object.getOwnPropertyDescriptors, Rg = Object.getOwnPropertySymbols, zT = Object.prototype.hasOwnProperty, jT = Object.prototype.propertyIsEnumerable, I_ = (o, s, c) => s in o ? Aj(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, FT = (o, s) => {
  for (var c in s || (s = {}))
    zT.call(s, c) && I_(o, c, s[c]);
  if (Rg)
    for (var c of Rg(s))
      jT.call(s, c) && I_(o, c, s[c]);
  return o;
}, UT = (o, s) => Nj(o, Mj(s)), zj = (o, s) => {
  var c = {};
  for (var p in o)
    zT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && Rg)
    for (var p of Rg(o))
      s.indexOf(p) < 0 && jT.call(o, p) && (c[p] = o[p]);
  return c;
};
const jj = _n(Kz, {
  display: "block",
  color: "$neutral800",
  fontWeight: "$4",
  userSelect: "none",
  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        lineHeight: "$xs"
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "$sm"
      }
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Fj = _n("button", {
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  color: "$primary500",
  fontWeight: "$5",
  cursor: "pointer",
  "&:hover": {
    color: "$primary700"
  },
  variants: {
    size: {
      sm: {
        fontSize: "$sm",
        lineHeight: "$sm"
      },
      xs: {
        fontSize: "$xs",
        lineHeight: "$xs"
      }
    }
  },
  defaultVariants: {
    size: "xs"
  }
}), Uj = _n(gs, {
  color: "$negative600",
  paddingTop: "$1"
}), Hj = _n("span", {
  svg: {
    color: "$neutral800",
    display: "block",
    "& path:first-child": {
      fill: "rgba(0, 0, 0, 0.08)",
      stroke: "none"
    }
  },
  variants: {
    size: {
      xs: {
        svg: {
          width: "14px",
          height: "14px"
        }
      },
      sm: {
        svg: {
          width: "16px",
          height: "16px"
        }
      }
    }
  }
});
W.forwardRef((o, s) => /* @__PURE__ */ ne.jsx(Fj, UT(FT({ type: "button" }, o), { ref: s })));
const HT = W.forwardRef(
  (o, s) => {
    var c = o, {
      children: p,
      requiredIndicator: g = !1,
      info: b,
      as: m,
      rightAddon: w,
      containerRef: C
    } = c, R = zj(c, [
      "children",
      "requiredIndicator",
      "info",
      "as",
      "rightAddon",
      "containerRef"
    ]);
    if (!W.isValidElement(g) && typeof g != "boolean")
      throw Error("requiredIndicator is not a valid component");
    return /* @__PURE__ */ ne.jsxs(
      gg,
      {
        justifyContent: "space-between",
        css: {
          flex: "1 1 auto"
        },
        ref: C,
        children: [
          /* @__PURE__ */ ne.jsxs(gg, { gap: "$1", alignItems: "center", children: [
            /* @__PURE__ */ ne.jsx(jj, UT(FT({ as: m }, R), { ref: s, children: p })),
            g === !0 ? /* @__PURE__ */ ne.jsx(
              Uj,
              {
                "data-testid": "label-required-indicator",
                size: R.size,
                css: {
                  lineHeight: "1"
                },
                children: "*"
              }
            ) : null,
            typeof g != "boolean" ? Yt.cloneElement(g) : null,
            b && /* @__PURE__ */ ne.jsx(ne.Fragment, { children: typeof b == "string" ? /* @__PURE__ */ ne.jsx(MT, { children: /* @__PURE__ */ ne.jsx(Lj, { content: b, children: /* @__PURE__ */ ne.jsx(Hj, { size: R.size, children: /* @__PURE__ */ ne.jsx(OR, {}) }) }) }) : b })
          ] }),
          w
        ]
      }
    );
  }
);
var Ij = Object.defineProperty, Bj = Object.defineProperties, Vj = Object.getOwnPropertyDescriptors, Tg = Object.getOwnPropertySymbols, IT = Object.prototype.hasOwnProperty, BT = Object.prototype.propertyIsEnumerable, B_ = (o, s, c) => s in o ? Ij(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, tg = (o, s) => {
  for (var c in s || (s = {}))
    IT.call(s, c) && B_(o, c, s[c]);
  if (Tg)
    for (var c of Tg(s))
      BT.call(s, c) && B_(o, c, s[c]);
  return o;
}, V_ = (o, s) => Bj(o, Vj(s)), Wj = (o, s) => {
  var c = {};
  for (var p in o)
    IT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && Tg)
    for (var p of Tg(o))
      s.indexOf(p) < 0 && BT.call(o, p) && (c[p] = o[p]);
  return c;
};
_n(qx, {
  color: "$negative500 !important",
  marginTop: "$2"
});
const Yj = W.forwardRef(
  (o, s) => {
    var c = o, {
      label: p,
      showCount: g,
      value: b,
      error: m,
      info: w,
      defaultValue: C,
      maxLength: R,
      requiredIndicator: D,
      helperText: O,
      id: P,
      renderCounter: k
    } = c, j = Wj(c, [
      "label",
      "showCount",
      "value",
      "error",
      "info",
      "defaultValue",
      "maxLength",
      "requiredIndicator",
      "helperText",
      "id",
      "renderCounter"
    ]);
    const B = b || C, G = P || `form-input-${W.useId()}`, ee = j.size === "xl" ? "sm" : "xs", oe = W.useMemo(() => g ? k ? k({
      length: (B == null ? void 0 : B.toString().length) || 0,
      maxLength: R
    }) : /* @__PURE__ */ ne.jsxs(
      gs,
      {
        css: tg({
          color: "$neutral700"
        }, p ? {} : { marginLeft: "auto" }),
        id: `${G}-char-count`,
        "data-testid": "form-input-char-count",
        size: ee,
        children: [
          (B == null ? void 0 : B.toString().length) || 0,
          R ? `/${R}` : null
        ]
      }
    ) : null, [
      g,
      p,
      B,
      R,
      G,
      ee,
      k
    ]);
    return /* @__PURE__ */ ne.jsxs(na, { children: [
      /* @__PURE__ */ ne.jsx(
        gg,
        V_(tg({
          alignItems: "center",
          justifyContent: "space-between"
        }, (g || p) && { css: { marginBottom: "$2" } }), {
          children: (p || oe) && /* @__PURE__ */ ne.jsx(
            HT,
            {
              as: "label",
              htmlFor: G,
              requiredIndicator: D,
              id: `${G}-label`,
              info: w,
              rightAddon: oe,
              size: ee,
              children: p
            }
          )
        })
      ),
      /* @__PURE__ */ ne.jsx(
        Iz,
        tg(V_(tg({
          value: b,
          defaultValue: C
        }, R && {
          maxLength: R
        }), {
          ref: s,
          id: G
        }), j)
      ),
      m || O ? /* @__PURE__ */ ne.jsx(
        na,
        {
          css: {
            marginTop: ["lg", "xl"].includes(j.size) ? "$2" : "$1"
          },
          children: /* @__PURE__ */ ne.jsx(qx, { size: ee, color: m ? "error" : "info", children: m || O })
        }
      ) : null
    ] });
  }
);
var Qj = Object.defineProperty, qj = Object.defineProperties, Gj = Object.getOwnPropertyDescriptors, Og = Object.getOwnPropertySymbols, VT = Object.prototype.hasOwnProperty, WT = Object.prototype.propertyIsEnumerable, W_ = (o, s, c) => s in o ? Qj(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, Xj = (o, s) => {
  for (var c in s || (s = {}))
    VT.call(s, c) && W_(o, c, s[c]);
  if (Og)
    for (var c of Og(s))
      WT.call(s, c) && W_(o, c, s[c]);
  return o;
}, Kj = (o, s) => qj(o, Gj(s)), Jj = (o, s) => {
  var c = {};
  for (var p in o)
    VT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && Og)
    for (var p of Og(o))
      s.indexOf(p) < 0 && WT.call(o, p) && (c[p] = o[p]);
  return c;
};
const Zj = _n("h1", {
  fontWeight: "$7",
  color: "$text",
  fontFamily: "$heading",
  variants: {
    size: {
      h6: {
        fontSize: "$lg",
        lineHeight: "$lg"
      },
      h5: {
        fontSize: "$xl",
        lineHeight: "$xl"
      },
      h4: {
        fontSize: "$2xl",
        lineHeight: "$2xl"
      },
      h3: {
        fontSize: "$3xl",
        lineHeight: "$2xl",
        letterSpacing: "-0.02em"
      },
      h2: {
        fontSize: "$4xl",
        lineHeight: "$3xl",
        letterSpacing: "-0.005em"
      },
      h1: {
        fontSize: "$5xl",
        lineHeight: "$4xl",
        letterSpacing: "-0.01em"
      }
    },
    weight: {
      regular: {
        fontWeight: "$4"
      },
      medium: {
        fontWeight: "$5"
      },
      semibold: {
        fontWeight: "$6"
      },
      bold: {
        fontWeight: "$7"
      }
    }
  },
  defaultVariants: {
    size: "h1",
    weight: "bold"
  }
}), e3 = Yt.forwardRef((o, s) => {
  var c = o, { children: p } = c, g = Jj(c, ["children"]);
  return /* @__PURE__ */ ne.jsx(Zj, Kj(Xj({ "data-testid": "heading" }, g), { ref: s, children: p }));
});
var t3 = Object.defineProperty, Y_ = Object.getOwnPropertySymbols, n3 = Object.prototype.hasOwnProperty, r3 = Object.prototype.propertyIsEnumerable, Q_ = (o, s, c) => s in o ? t3(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, q_ = (o, s) => {
  for (var c in s || (s = {}))
    n3.call(s, c) && Q_(o, c, s[c]);
  if (Y_)
    for (var c of Y_(s))
      r3.call(s, c) && Q_(o, c, s[c]);
  return o;
};
const a3 = Yt.createContext(null), i3 = (o, s) => q_(q_({}, o), s), o3 = ({ theme: o, children: s }) => {
  const c = W.useRef(null), p = W.useMemo(
    () => i3(bx, o),
    [bx, o]
  ), g = W.useRef(null);
  return W.useEffect(() => {
    const b = document.documentElement;
    c != null && c.current && b.classList.remove(c.current), g.current = OL(p), c.current = g.current, b.classList.add(g.current);
  }, [p]), s ? (W.useEffect(() => {
    DL();
  }, []), /* @__PURE__ */ ne.jsx(a3.Provider, { value: g.current, children: s })) : null;
};
var l3 = Object.defineProperty, u3 = Object.defineProperties, s3 = Object.getOwnPropertyDescriptors, $g = Object.getOwnPropertySymbols, YT = Object.prototype.hasOwnProperty, QT = Object.prototype.propertyIsEnumerable, G_ = (o, s, c) => s in o ? l3(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, Ad = (o, s) => {
  for (var c in s || (s = {}))
    YT.call(s, c) && G_(o, c, s[c]);
  if ($g)
    for (var c of $g(s))
      QT.call(s, c) && G_(o, c, s[c]);
  return o;
}, c3 = (o, s) => u3(o, s3(s)), f3 = (o, s) => {
  var c = {};
  for (var p in o)
    YT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && $g)
    for (var p of $g(o))
      s.indexOf(p) < 0 && QT.call(o, p) && (c[p] = o[p]);
  return c;
};
const d3 = _n("textarea", {
  width: "100%",
  color: "$neutral900",
  borderWidth: "$xs",
  borderStyle: "solid",
  borderColor: "transparent",
  transition: "all $transitions$2",
  "&::placeholder": {
    color: "$neutral500"
  },
  "&:hover:not(:disabled), &:focus, &:active:not(:disabled)": {
    background: "$white900",
    borderWidth: "$xs",
    borderStyle: "solid",
    borderColorOpacity: ["$secondary500", 0.4]
  },
  "&:focus, &:active:not(:disabled)": {
    $$shadowColor: "$colors$primary300",
    outline: "none",
    background: "$white900",
    boxShadow: "rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  },
  "&:disabled": {
    color: "$neutral700",
    backgroundColorOpacity: ["$neutral500", 0.06],
    cursor: "not-allowed",
    borderWidth: "$xs",
    borderStyle: "solid",
    borderColor: "$neutral200",
    "&:hover": {
      boxShadow: "none"
    }
  },
  borderRadius: "$md",
  padding: "$6",
  variants: {
    resize: {
      horizontal: {
        resize: "horizontal"
      },
      vertical: {
        resize: "vertical"
      },
      both: {
        resize: "both"
      },
      none: {
        resize: "none"
      }
    },
    size: {
      sm: {
        padding: "$2 $4",
        borderRadius: "$sm",
        fontSize: "$xs"
      },
      md: {
        padding: "$3 $4",
        borderRadius: "$lg",
        fontSize: "$sm"
      },
      lg: {
        padding: "$4 $6",
        borderRadius: "$lg",
        fontSize: "$sm"
      },
      xl: {
        padding: "$6",
        borderRadius: "$xl",
        fontSize: "$md"
      }
    },
    variant: {
      default: {
        background: "$white900",
        borderWidth: "$xs",
        borderStyle: "solid",
        borderColorOpacity: ["$black900", 0.15],
        "&:hover:not(:disabled), &:focus, &:active:not(:disabled)": {
          borderWidth: "$xs",
          borderStyle: "solid",
          borderColor: "$neutral400"
        }
      },
      filled: {
        backgroundColorOpacity: ["$secondary500", 0.06]
      }
    }
  },
  defaultVariants: {
    resize: "both",
    variant: "default"
  }
}), p3 = W.forwardRef(
  (o, s) => {
    var c = o, {
      resize: p = "both",
      variant: g = "default",
      errorBorder: b = !1,
      label: m,
      showCount: w,
      error: C,
      maxLength: R,
      requiredIndicator: D,
      helperText: O,
      css: P,
      value: k,
      defaultValue: j,
      size: B,
      info: G,
      rows: ee,
      id: oe,
      renderCounter: se
    } = c, ce = f3(c, [
      "resize",
      "variant",
      "errorBorder",
      "label",
      "showCount",
      "error",
      "maxLength",
      "requiredIndicator",
      "helperText",
      "css",
      "value",
      "defaultValue",
      "size",
      "info",
      "rows",
      "id",
      "renderCounter"
    ]);
    const I = oe || `form-input-${W.useId()}`, he = k || j, fe = B === "xl" ? "sm" : "xs", Ye = W.useMemo(() => w ? se ? se({
      length: (he == null ? void 0 : he.toString().length) || 0,
      maxLength: R
    }) : /* @__PURE__ */ ne.jsxs(
      gs,
      {
        css: Ad({
          color: "$neutral700"
        }, m ? {} : { marginLeft: "auto" }),
        "data-testid": "textarea-char-count",
        size: fe,
        children: [
          (he == null ? void 0 : he.toString().length) || 0,
          R ? `/${R}` : null
        ]
      }
    ) : null, [
      w,
      m,
      he,
      R,
      I,
      fe,
      se
    ]);
    return /* @__PURE__ */ ne.jsxs(na, { children: [
      /* @__PURE__ */ ne.jsx(
        gg,
        {
          alignItems: "center",
          justifyContent: "space-between",
          css: { marginBottom: "$2" },
          children: (m || Ye) && /* @__PURE__ */ ne.jsx(
            HT,
            {
              size: fe,
              htmlFor: oe,
              requiredIndicator: D,
              info: G,
              rightAddon: Ye,
              children: m
            }
          )
        }
      ),
      /* @__PURE__ */ ne.jsx(
        d3,
        Ad(c3(Ad({
          value: k,
          defaultValue: j,
          rows: ee,
          css: Ad(Ad({}, b && Ad({}, Dx)), P)
        }, R && {
          maxLength: R
        }), {
          resize: p,
          size: B,
          ref: s,
          variant: g
        }), ce)
      ),
      C || O ? /* @__PURE__ */ ne.jsx(
        na,
        {
          css: {
            marginTop: ["lg", "xl"].includes(B) ? "$2" : "$1"
          },
          children: /* @__PURE__ */ ne.jsx(
            qx,
            {
              size: fe,
              color: C ? "error" : "info",
              children: C || O
            }
          )
        }
      ) : null
    ] });
  }
);
var v3 = Object.defineProperty, h3 = Object.defineProperties, m3 = Object.getOwnPropertyDescriptors, X_ = Object.getOwnPropertySymbols, y3 = Object.prototype.hasOwnProperty, g3 = Object.prototype.propertyIsEnumerable, K_ = (o, s, c) => s in o ? v3(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, S3 = (o, s) => {
  for (var c in s || (s = {}))
    y3.call(s, c) && K_(o, c, s[c]);
  if (X_)
    for (var c of X_(s))
      g3.call(s, c) && K_(o, c, s[c]);
  return o;
}, b3 = (o, s) => h3(o, m3(s));
function x3(o) {
  const { gap: s, direction: c } = o, p = {
    column: {
      marginTop: s,
      marginBottom: s,
      borderLeftWidth: 0,
      borderTopWidth: "$xs"
    },
    "column-reverse": {
      marginTop: s,
      marginBottom: s,
      borderLeftWidth: 0,
      borderTopWidth: "$xs"
    },
    row: {
      marginLeft: s,
      marginRight: s,
      borderLeftWidth: "$xs",
      borderTopWidth: 0
    },
    "row-reverse": {
      marginLeft: s,
      marginRight: s,
      borderLeftWidth: "$xs",
      borderTopWidth: 0
    }
  };
  return typeof c == "string" ? p[c] : Object.keys(c).reduce((g, b) => b3(S3({}, g), {
    [`@${b}`]: p[c[b]]
  }), {});
}
var E3 = Object.defineProperty, C3 = Object.defineProperties, w3 = Object.getOwnPropertyDescriptors, kg = Object.getOwnPropertySymbols, qT = Object.prototype.hasOwnProperty, GT = Object.prototype.propertyIsEnumerable, J_ = (o, s, c) => s in o ? E3(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, Uc = (o, s) => {
  for (var c in s || (s = {}))
    qT.call(s, c) && J_(o, c, s[c]);
  if (kg)
    for (var c of kg(s))
      GT.call(s, c) && J_(o, c, s[c]);
  return o;
}, XT = (o, s) => C3(o, w3(s)), _3 = (o, s) => {
  var c = {};
  for (var p in o)
    qT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && kg)
    for (var p of kg(o))
      s.indexOf(p) < 0 && GT.call(o, p) && (c[p] = o[p]);
  return c;
};
const R3 = _n(na, {
  display: "flex"
});
function T3(o) {
  return typeof o == "object" ? Object.keys(o).reduce((s, c) => XT(Uc({}, s), {
    [`@${c}`]: { flexDirection: o[c] }
  }), {}) : { flexDirection: o };
}
const O3 = W.forwardRef(
  (o, s) => {
    var c = o, {
      children: p,
      gap: g = "$4",
      divider: b,
      alignX: m = "center",
      alignY: w = "center",
      wrap: C,
      direction: R = "column",
      css: D
    } = c, O = _3(c, [
      "children",
      "gap",
      "divider",
      "alignX",
      "alignY",
      "wrap",
      "direction",
      "css"
    ]);
    const P = W.useMemo(() => W.Children.toArray(p).filter((G) => W.isValidElement(G)), [p]), k = Uc(Uc({}, x3({
      gap: g,
      direction: R || "column"
    })), b == null ? void 0 : b.props.css), j = {
      left: "flex-start",
      center: "center",
      right: "flex-end"
    }, B = {
      left: "flex-start",
      center: "center",
      right: "flex-end"
    };
    return /* @__PURE__ */ ne.jsx(
      R3,
      XT(Uc({
        ref: s,
        css: Uc(Uc(Uc({
          alignItems: B[w],
          justifyContent: j[m],
          flexWrap: C
        }, T3(R)), b ? {} : { gap: g }), D),
        "data-testid": "stack"
      }, O), {
        children: P.map((G, ee) => /* @__PURE__ */ ne.jsxs(W.Fragment, { children: [
          G,
          ee < P.length - 1 && b && W.cloneElement(b, {
            key: `divider-${ee}`,
            css: k
          })
        ] }, ee))
      })
    );
  }
);
var $3 = Object.defineProperty, k3 = Object.defineProperties, D3 = Object.getOwnPropertyDescriptors, Z_ = Object.getOwnPropertySymbols, P3 = Object.prototype.hasOwnProperty, L3 = Object.prototype.propertyIsEnumerable, eR = (o, s, c) => s in o ? $3(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, A3 = (o, s) => {
  for (var c in s || (s = {}))
    P3.call(s, c) && eR(o, c, s[c]);
  if (Z_)
    for (var c of Z_(s))
      L3.call(s, c) && eR(o, c, s[c]);
  return o;
}, N3 = (o, s) => k3(o, D3(s));
const M3 = W.forwardRef(
  (o, s) => /* @__PURE__ */ ne.jsx(O3, N3(A3({}, o), { direction: "column", ref: s }))
);
var z3 = "Separator", tR = "horizontal", j3 = ["horizontal", "vertical"], KT = W.forwardRef((o, s) => {
  const { decorative: c, orientation: p = tR, ...g } = o, b = F3(p) ? p : tR, w = c ? { role: "none" } : { "aria-orientation": b === "vertical" ? b : void 0, role: "separator" };
  return /* @__PURE__ */ ne.jsx(
    xl.div,
    {
      "data-orientation": b,
      ...w,
      ...g,
      ref: s
    }
  );
});
KT.displayName = z3;
function F3(o) {
  return j3.includes(o);
}
var U3 = KT, H3 = Object.defineProperty, Dg = Object.getOwnPropertySymbols, JT = Object.prototype.hasOwnProperty, ZT = Object.prototype.propertyIsEnumerable, nR = (o, s, c) => s in o ? H3(o, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : o[s] = c, I3 = (o, s) => {
  for (var c in s || (s = {}))
    JT.call(s, c) && nR(o, c, s[c]);
  if (Dg)
    for (var c of Dg(s))
      ZT.call(s, c) && nR(o, c, s[c]);
  return o;
}, B3 = (o, s) => {
  var c = {};
  for (var p in o)
    JT.call(o, p) && s.indexOf(p) < 0 && (c[p] = o[p]);
  if (o != null && Dg)
    for (var p of Dg(o))
      s.indexOf(p) < 0 && ZT.call(o, p) && (c[p] = o[p]);
  return c;
};
const V3 = _n(U3, {
  backgroundColor: "$neutral100",
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 }
}), W3 = W.forwardRef(
  (o, s) => {
    var c = o, { orientation: p, decorative: g } = c, b = B3(c, ["orientation", "decorative"]);
    return /* @__PURE__ */ ne.jsx(
      V3,
      I3({
        ref: s,
        "data-testid": "separator",
        orientation: p,
        decorative: g
      }, b)
    );
  }
), Y3 = `{
  "foo": "bar"
}`;
function Q3() {
  const [o, s] = W.useState("myServerHandler"), [c, p] = W.useState(Y3), [g, b] = W.useState(""), [m, w] = W.useState(""), [C, R] = W.useState(!1), D = W.useCallback(async () => {
    var P;
    w(""), b(""), R(!0);
    let O = {};
    if (c.trim())
      try {
        O = JSON.parse(c);
      } catch (k) {
        w(k instanceof Error ? k.message : "Invalid JSON in payload"), R(!1);
        return;
      }
    try {
      const k = (P = window.AppnestFunctions) == null ? void 0 : P.$appBackend;
      if (!(k != null && k.invoke))
        throw new Error(
          "window.AppnestFunctions.$appBackend.invoke is not available. Open this app inside the Appnest host to call backend functions."
        );
      const j = await k.invoke({
        functionName: o,
        functionPayload: O
      });
      b(
        typeof j == "string" ? j : JSON.stringify(j, null, 2)
      );
    } catch (k) {
      w(k instanceof Error ? k.message : String(k));
    } finally {
      R(!1);
    }
  }, [o, c]);
  return /* @__PURE__ */ ne.jsx(
    na,
    {
      css: {
        minHeight: "100vh",
        backgroundColor: "$neutral50",
        padding: "$10"
      },
      children: /* @__PURE__ */ ne.jsxs(
        M3,
        {
          alignX: "left",
          gap: "$6",
          css: {
            maxWidth: 640,
            margin: "0 auto"
          },
          children: [
            /* @__PURE__ */ ne.jsx(e3, { size: "h3", children: "Backend function tester" }),
            /* @__PURE__ */ ne.jsxs(gs, { size: "sm", css: { color: "$neutral700" }, children: [
              "Calls",
              " ",
              /* @__PURE__ */ ne.jsx(gs, { as: "span", weight: "medium", css: { color: "$neutral900" }, children: "window.AppnestFunctions.$appBackend.invoke" }),
              " ",
              "with the function name and JSON payload you provide."
            ] }),
            /* @__PURE__ */ ne.jsx(
              Yj,
              {
                label: "Function name",
                placeholder: "e.g. myServerHandler",
                value: o,
                onChange: (O) => s(O.target.value),
                size: "md"
              }
            ),
            /* @__PURE__ */ ne.jsx(
              p3,
              {
                label: "Function payload (JSON)",
                value: c,
                onChange: (O) => p(O.target.value),
                resize: "vertical",
                rows: 6,
                size: "md"
              }
            ),
            /* @__PURE__ */ ne.jsx(
              CR,
              {
                type: "button",
                size: "md",
                color: "primary",
                loading: C,
                disabled: C || !o.trim(),
                onClick: D,
                children: "Invoke function"
              }
            ),
            m ? /* @__PURE__ */ ne.jsx(RN, { status: "error", size: "md", children: /* @__PURE__ */ ne.jsx(TN, { children: m }) }) : null,
            /* @__PURE__ */ ne.jsx(W3, { orientation: "horizontal" }),
            /* @__PURE__ */ ne.jsxs(na, { children: [
              /* @__PURE__ */ ne.jsx(gs, { size: "sm", weight: "medium", css: { marginBottom: "$3" }, children: "Result" }),
              /* @__PURE__ */ ne.jsx(
                na,
                {
                  css: {
                    borderRadius: "$md",
                    borderWidth: "$xs",
                    borderStyle: "solid",
                    borderColor: "$neutral200",
                    backgroundColor: "$white900",
                    padding: "$4",
                    minHeight: 120
                  },
                  children: /* @__PURE__ */ ne.jsx(
                    gs,
                    {
                      as: "pre",
                      size: "xs",
                      css: {
                        margin: 0,
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                        color: "$neutral800"
                      },
                      children: g || "—"
                    }
                  )
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function eF() {
  return /* @__PURE__ */ ne.jsx(W.StrictMode, { children: /* @__PURE__ */ ne.jsx(o3, { children: /* @__PURE__ */ ne.jsx(MT, { children: /* @__PURE__ */ ne.jsx(Q3, {}) }) }) });
}
export {
  eF as default
};
