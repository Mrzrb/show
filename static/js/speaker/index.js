!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).RevealNotes = e()
}(this, function() {
    alert(123)
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function e(t, e, n) {
        return t(n = {
            path: e,
            exports: {},
            require: function(t, e) {
                return function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == e && n.path)
            }
        }, n.exports),
        n.exports
    }
    function n(t) {
        return t && t.Math == Math && t
    }
    function p(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
    function i(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
    function a(t) {
        return v.call(t).slice(8, -1)
    }
    function d(t) {
        if (null == t)
            throw TypeError("Can't call method on " + t);
        return t
    }
    function c(t) {
        return x(d(t))
    }
    function u(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
    function o(t, e) {
        if (!u(t))
            return t;
        var n, r;
        if (e && "function" == typeof (n = t.toString) && !u(r = n.call(t)))
            return r;
        if ("function" == typeof (n = t.valueOf) && !u(r = n.call(t)))
            return r;
        if (!e && "function" == typeof (n = t.toString) && !u(r = n.call(t)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
    function f(t, e) {
        return k.call(t, e)
    }
    function A(t) {
        if (!u(t))
            throw TypeError(String(t) + " is not an object");
        return t
    }
    function h(e, n) {
        try {
            R(g, e, n)
        } catch (t) {
            g[e] = n
        }
        return n
    }
    var g = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
      , l = !p(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
      , r = {}.propertyIsEnumerable
      , s = Object.getOwnPropertyDescriptor
      , m = {
        f: s && !r.call({
            1: 2
        }, 1) ? function(t) {
            var e = s(this, t);
            return !!e && e.enumerable
        }
        : r
    }
      , v = {}.toString
      , y = "".split
      , x = p(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == a(t) ? y.call(t, "") : Object(t)
    }
    : Object
      , k = {}.hasOwnProperty
      , b = g.document
      , w = u(b) && u(b.createElement)
      , S = !l && !p(function() {
        return 7 != Object.defineProperty(w ? b.createElement("div") : {}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , T = Object.getOwnPropertyDescriptor
      , E = {
        f: l ? T : function(t, e) {
            if (t = c(t),
            e = o(e, !0),
            S)
                try {
                    return T(t, e)
                } catch (t) {}
            if (f(t, e))
                return i(!m.f.call(t, e), t[e])
        }
    }
      , _ = Object.defineProperty
      , z = {
        f: l ? _ : function(t, e, n) {
            if (A(t),
            e = o(e, !0),
            A(n),
            S)
                try {
                    return _(t, e, n)
                } catch (t) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (t[e] = n.value),
            t
        }
    }
      , R = l ? function(t, e, n) {
        return z.f(t, e, i(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
      , O = "__core-js_shared__"
      , I = g[O] || h(O, {})
      , $ = Function.toString;
    "function" != typeof I.inspectSource && (I.inspectSource = function(t) {
        return $.call(t)
    }
    );
    function C(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++H + B).toString(36)
    }
    var L, P, M, j, N, q, U, D, Z, W = I.inspectSource, K = g.WeakMap, J = "function" == typeof K && /native code/.test(W(K)), F = e(function(t) {
        (t.exports = function(t, e) {
            return I[t] || (I[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: "3.6.5",
            mode: "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }), H = 0, B = Math.random(), Y = F("keys"), V = {}, G = g.WeakMap;
    D = J ? (P = new G,
    M = P.get,
    j = P.has,
    N = P.set,
    q = function(t, e) {
        return N.call(P, t, e),
        e
    }
    ,
    U = function(t) {
        return M.call(P, t) || {}
    }
    ,
    function(t) {
        return j.call(P, t)
    }
    ) : (Z = Y[L = "state"] || (Y[L] = C(L)),
    V[Z] = !0,
    q = function(t, e) {
        return R(t, Z, e),
        e
    }
    ,
    U = function(t) {
        return f(t, Z) ? t[Z] : {}
    }
    ,
    function(t) {
        return f(t, Z)
    }
    );
    function X(t) {
        return "function" == typeof t ? t : void 0
    }
    function Q(t, e) {
        return arguments.length < 2 ? X(ut[t]) || X(g[t]) : ut[t] && ut[t][e] || g[t] && g[t][e]
    }
    function tt(t) {
        return isNaN(t = +t) ? 0 : (0 < t ? dt : pt)(t)
    }
    function et(t) {
        return 0 < t ? ft(tt(t), 9007199254740991) : 0
    }
    function nt(t, e) {
        var n = tt(t);
        return n < 0 ? ht(n + e, 0) : gt(n, e)
    }
    function rt(l) {
        return function(t, e, n) {
            var r, i = c(t), a = et(i.length), o = nt(n, a);
            if (l && e != e) {
                for (; o < a; )
                    if ((r = i[o++]) != r)
                        return !0
            } else
                for (; o < a; o++)
                    if ((l || o in i) && i[o] === e)
                        return l || o || 0;
            return !l && -1
        }
    }
    function it(t, e) {
        for (var n = wt(e), r = z.f, i = E.f, a = 0; a < n.length; a++) {
            var o = n[a];
            f(t, o) || r(t, o, i(e, o))
        }
    }
    function at(t, e) {
        var n = Tt[St(t)];
        return n == _t || n != Et && ("function" == typeof e ? p(e) : !!e)
    }
    function ot(t, e) {
        var n, r, i, a, o, l = t.target, s = t.global, c = t.stat;
        if (n = s ? g : c ? g[l] || h(l, {}) : (g[l] || {}).prototype)
            for (r in e) {
                if (a = e[r],
                i = t.noTargetGet ? (o = zt(n, r)) && o.value : n[r],
                !At(s ? r : l + (c ? "." : "#") + r, t.forced) && void 0 !== i) {
                    if (typeof a == typeof i)
                        continue;
                    it(a, i)
                }
                (t.sham || i && i.sham) && R(a, "sham", !0),
                ct(n, r, a, t)
            }
    }
    function lt() {
        var t = A(this)
          , e = "";
        return t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
    }
    var st = {
        set: q,
        get: U,
        has: D,
        enforce: function(t) {
            return D(t) ? U(t) : q(t, {})
        },
        getterFor: function(n) {
            return function(t) {
                var e;
                if (!u(t) || (e = U(t)).type !== n)
                    throw TypeError("Incompatible receiver, " + n + " required");
                return e
            }
        }
    }
      , ct = e(function(t) {
        var e = st.get
          , l = st.enforce
          , s = String(String).split("String");
        (t.exports = function(t, e, n, r) {
            var i = !!r && !!r.unsafe
              , a = !!r && !!r.enumerable
              , o = !!r && !!r.noTargetGet;
            "function" == typeof n && ("string" != typeof e || f(n, "name") || R(n, "name", e),
            l(n).source = s.join("string" == typeof e ? e : "")),
            t !== g ? (i ? !o && t[e] && (a = !0) : delete t[e],
            a ? t[e] = n : R(t, e, n)) : a ? t[e] = n : h(e, n)
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && e(this).source || W(this)
        })
    })
      , ut = g
      , pt = Math.ceil
      , dt = Math.floor
      , ft = Math.min
      , ht = Math.max
      , gt = Math.min
      , mt = {
        includes: rt(!0),
        indexOf: rt(!1)
    }
      , vt = mt.indexOf
      , yt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype")
      , kt = {
        f: Object.getOwnPropertyNames || function(a) {
            return function(t) {
                var e, n = c(a), r = 0, i = [];
                for (e in n)
                    !f(V, e) && f(n, e) && i.push(e);
                for (; t.length > r; )
                    f(n, e = t[r++]) && (~vt(i, e) || i.push(e));
                return i
            }(yt)
        }
    }
      , bt = {
        f: Object.getOwnPropertySymbols
    }
      , wt = Q("Reflect", "ownKeys") || function(t) {
        var e = kt.f(A(t))
          , n = bt.f;
        return n ? e.concat(n(t)) : e
    }
      , xt = /#|\.prototype\./
      , St = at.normalize = function(t) {
        return String(t).replace(xt, ".").toLowerCase()
    }
      , Tt = at.data = {}
      , Et = at.NATIVE = "N"
      , _t = at.POLYFILL = "P"
      , At = at
      , zt = E.f;
    function Rt(t, e) {
        return RegExp(t, e)
    }
    var Ot, It, $t = {
        UNSUPPORTED_Y: p(function() {
            var t = Rt("a", "y");
            return t.lastIndex = 2,
            null != t.exec("abcd")
        }),
        BROKEN_CARET: p(function() {
            var t = Rt("^r", "gy");
            return t.lastIndex = 2,
            null != t.exec("str")
        })
    }, Ct = RegExp.prototype.exec, Lt = String.prototype.replace, Pt = Ct, Mt = (Ot = /a/,
    It = /b*/g,
    Ct.call(Ot, "a"),
    Ct.call(It, "a"),
    0 !== Ot.lastIndex || 0 !== It.lastIndex), jt = $t.UNSUPPORTED_Y || $t.BROKEN_CARET, Nt = void 0 !== /()??/.exec("")[1];
    (Mt || Nt || jt) && (Pt = function(t) {
        var e, n, r, i, a = this, o = jt && a.sticky, l = lt.call(a), s = a.source, c = 0, u = t;
        return o && (-1 === (l = l.replace("y", "")).indexOf("g") && (l += "g"),
        u = String(t).slice(a.lastIndex),
        0 < a.lastIndex && (!a.multiline || a.multiline && "\n" !== t[a.lastIndex - 1]) && (s = "(?: " + s + ")",
        u = " " + u,
        c++),
        n = new RegExp("^(?:" + s + ")",l)),
        Nt && (n = new RegExp("^" + s + "$(?!\\s)",l)),
        Mt && (e = a.lastIndex),
        r = Ct.call(o ? n : a, u),
        o ? r ? (r.input = r.input.slice(c),
        r[0] = r[0].slice(c),
        r.index = a.lastIndex,
        a.lastIndex += r[0].length) : a.lastIndex = 0 : Mt && r && (a.lastIndex = a.global ? r.index + r[0].length : e),
        Nt && r && 1 < r.length && Lt.call(r[0], n, function() {
            for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0)
        }),
        r
    }
    );
    var qt = Pt;
    ot({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== qt
    }, {
        exec: qt
    });
    function Ut(t) {
        return f(Ht, t) || (Jt && f(Bt, t) ? Ht[t] = Bt[t] : Ht[t] = Yt("Symbol." + t)),
        Ht[t]
    }
    function Dt(n, t, e, r) {
        var a, i, o, l, s = Ut(n), c = !p(function() {
            var t = {};
            return t[s] = function() {
                return 7
            }
            ,
            7 != ""[n](t)
        }), u = c && !p(function() {
            var t = !1
              , e = /a/;
            return "split" === n && ((e = {}).constructor = {},
            e.constructor[Vt] = function() {
                return e
            }
            ,
            e.flags = "",
            e[s] = /./[s]),
            e.exec = function() {
                return t = !0,
                null
            }
            ,
            e[s](""),
            !t
        });
        c && u && ("replace" !== n || Gt && Xt && !te) && ("split" !== n || ee) || (a = /./[s],
        o = (i = e(s, ""[n], function(t, e, n, r, i) {
            return e.exec === qt ? c && !i ? {
                done: !0,
                value: a.call(e, n, r)
            } : {
                done: !0,
                value: t.call(n, e, r)
            } : {
                done: !1
            }
        }, {
            REPLACE_KEEPS_$0: Xt,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: te
        }))[0],
        l = i[1],
        ct(String.prototype, n, o),
        ct(RegExp.prototype, s, 2 == t ? function(t, e) {
            return l.call(t, this, e)
        }
        : function(t) {
            return l.call(t, this)
        }
        )),
        r && R(RegExp.prototype[s], "sham", !0)
    }
    function Zt(l) {
        return function(t, e) {
            var n, r, i = String(d(t)), a = tt(e), o = i.length;
            return a < 0 || o <= a ? l ? "" : void 0 : (n = i.charCodeAt(a)) < 55296 || 56319 < n || a + 1 === o || (r = i.charCodeAt(a + 1)) < 56320 || 57343 < r ? l ? i.charAt(a) : n : l ? i.slice(a, a + 2) : r - 56320 + (n - 55296 << 10) + 65536
        }
    }
    function Wt(t, e, n) {
        return e + (n ? ne(t, e).length : 1)
    }
    function Kt(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var r = n.call(t, e);
            if ("object" != typeof r)
                throw TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== a(t))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return qt.call(t, e)
    }
    var Jt = !!Object.getOwnPropertySymbols && !p(function() {
        return !String(Symbol())
    })
      , Ft = Jt && !Symbol.sham && "symbol" == typeof Symbol.iterator
      , Ht = F("wks")
      , Bt = g.Symbol
      , Yt = Ft ? Bt : Bt && Bt.withoutSetter || C
      , Vt = Ut("species")
      , Gt = !p(function() {
        var t = /./;
        return t.exec = function() {
            var t = [];
            return t.groups = {
                a: "7"
            },
            t
        }
        ,
        "7" !== "".replace(t, "$<a>")
    })
      , Xt = "$0" === "a".replace(/./, "$0")
      , Qt = Ut("replace")
      , te = !!/./[Qt] && "" === /./[Qt]("a", "$0")
      , ee = !p(function() {
        var t = /(?:)/
          , e = t.exec;
        t.exec = function() {
            return e.apply(this, arguments)
        }
        ;
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
    })
      , ne = (Zt(!1),
    Zt(!0));
    Dt("match", 1, function(r, c, u) {
        return [function(t) {
            var e = d(this)
              , n = null == t ? void 0 : t[r];
            return void 0 !== n ? n.call(t, e) : new RegExp(t)[r](String(e))
        }
        , function(t) {
            var e = u(c, t, this);
            if (e.done)
                return e.value;
            var n = A(t)
              , r = String(this);
            if (!n.global)
                return Kt(n, r);
            for (var i, a = n.unicode, o = [], l = n.lastIndex = 0; null !== (i = Kt(n, r)); ) {
                var s = String(i[0]);
                "" === (o[l] = s) && (n.lastIndex = Wt(r, et(n.lastIndex), a)),
                l++
            }
            return 0 === l ? null : o
        }
        ]
    });
    var re = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
    ;
    Dt("search", 1, function(r, o, l) {
        return [function(t) {
            var e = d(this)
              , n = null == t ? void 0 : t[r];
            return void 0 !== n ? n.call(t, e) : new RegExp(t)[r](String(e))
        }
        , function(t) {
            var e = l(o, t, this);
            if (e.done)
                return e.value;
            var n = A(t)
              , r = String(this)
              , i = n.lastIndex;
            re(i, 0) || (n.lastIndex = 0);
            var a = Kt(n, r);
            return re(n.lastIndex, i) || (n.lastIndex = i),
            null === a ? -1 : a.index
        }
        ]
    });
    var ie = {};
    ie[Ut("toStringTag")] = "z";
    var ae = "[object z]" === String(ie)
      , oe = Ut("toStringTag")
      , le = "Arguments" == a(function() {
        return arguments
    }())
      , se = ae ? a : function(t) {
        var e, n, r;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), oe)) ? n : le ? a(e) : "Object" == (r = a(e)) && "function" == typeof e.callee ? "Arguments" : r
    }
      , ce = ae ? {}.toString : function() {
        return "[object " + se(this) + "]"
    }
    ;
    ae || ct(Object.prototype, "toString", ce, {
        unsafe: !0
    });
    var ue = "toString"
      , pe = RegExp.prototype
      , de = pe.toString
      , fe = p(function() {
        return "/a/b" != de.call({
            source: "a",
            flags: "b"
        })
    })
      , he = de.name != ue;
    function ge(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function me(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function ve(t, e, n) {
        return e && me(t.prototype, e),
        n && me(t, n),
        t
    }
    function ye(t, e) {
        if (t) {
            if ("string" == typeof t)
                return ke(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ke(t, e) : void 0
        }
    }
    function ke(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function be(t) {
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (t = ye(t))) {
                var e = 0
                  , n = function() {};
                return {
                    s: n,
                    n: function() {
                        return e >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[e++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: n
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, i, a = !0, o = !1;
        return {
            s: function() {
                r = t[Symbol.iterator]()
            },
            n: function() {
                var t = r.next();
                return a = t.done,
                t
            },
            e: function(t) {
                o = !0,
                i = t
            },
            f: function() {
                try {
                    a || null == r.return || r.return()
                } finally {
                    if (o)
                        throw i
                }
            }
        }
    }
    (fe || he) && ct(RegExp.prototype, ue, function() {
        var t = A(this)
          , e = String(t.source)
          , n = t.flags;
        return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags"in pe) ? lt.call(t) : n)
    }, {
        unsafe: !0
    });
    function we(t) {
        return Object(d(t))
    }
    var xe = Math.max
      , Se = Math.min
      , Te = Math.floor
      , Ee = /\$([$&'`]|\d\d?|<[^>]*>)/g
      , _e = /\$([$&'`]|\d\d?)/g;
    Dt("replace", 2, function(i, w, x, t) {
        var S = t.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          , T = t.REPLACE_KEEPS_$0
          , E = S ? "$" : "$0";
        return [function(t, e) {
            var n = d(this)
              , r = null == t ? void 0 : t[i];
            return void 0 !== r ? r.call(t, n, e) : w.call(String(n), t, e)
        }
        , function(t, e) {
            if (!S && T || "string" == typeof e && -1 === e.indexOf(E)) {
                var n = x(w, t, this, e);
                if (n.done)
                    return n.value
            }
            var r = A(t)
              , i = String(this)
              , a = "function" == typeof e;
            a || (e = String(e));
            var o, l = r.global;
            l && (o = r.unicode,
            r.lastIndex = 0);
            for (var s = []; ; ) {
                var c = Kt(r, i);
                if (null === c)
                    break;
                if (s.push(c),
                !l)
                    break;
                "" === String(c[0]) && (r.lastIndex = Wt(i, et(r.lastIndex), o))
            }
            for (var u, p = "", d = 0, f = 0; f < s.length; f++) {
                c = s[f];
                for (var h = String(c[0]), g = xe(Se(tt(c.index), i.length), 0), m = [], v = 1; v < c.length; v++)
                    m.push(void 0 === (u = c[v]) ? u : String(u));
                var y, k = c.groups, b = a ? (y = [h].concat(m, g, i),
                void 0 !== k && y.push(k),
                String(e.apply(void 0, y))) : _(h, i, g, m, k, e);
                d <= g && (p += i.slice(d, g) + b,
                d = g + h.length)
            }
            return p + i.slice(d)
        }
        ];
        function _(a, o, l, s, c, t) {
            var u = l + a.length
              , p = s.length
              , e = _e;
            return void 0 !== c && (c = we(c),
            e = Ee),
            w.call(t, e, function(t, e) {
                var n;
                switch (e.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return a;
                case "`":
                    return o.slice(0, l);
                case "'":
                    return o.slice(u);
                case "<":
                    n = c[e.slice(1, -1)];
                    break;
                default:
                    var r = +e;
                    if (0 == r)
                        return t;
                    if (p < r) {
                        var i = Te(r / 10);
                        return 0 !== i && i <= p ? void 0 === s[i - 1] ? e.charAt(1) : s[i - 1] + e.charAt(1) : t
                    }
                    n = s[r - 1]
                }
                return void 0 === n ? "" : n
            })
        }
    });
    var Ae = /"/g;
    ot({
        target: "String",
        proto: !0,
        forced: p(function() {
            var t = "".link('"');
            return t !== t.toLowerCase() || 3 < t.split('"').length
        })
    }, {
        link: function(t) {
            return e = t,
            n = String(d(this)),
            r = "<a",
            (r += ' href="' + String(e).replace(Ae, "&quot;") + '"') + ">" + n + "</a>";
            var e, n, r
        }
    });
    function ze(t, e) {
        var n = [][t];
        return !!n && p(function() {
            n.call(null, e || function() {
                throw 1
            }
            , 1)
        })
    }
    function Re(t) {
        throw t
    }
    function Oe(t, e) {
        if (f($e, t))
            return $e[t];
        var n = [][t]
          , r = !!f(e = e || {}, "ACCESSORS") && e.ACCESSORS
          , i = f(e, 0) ? e[0] : Re
          , a = f(e, 1) ? e[1] : void 0;
        return $e[t] = !!n && !p(function() {
            if (r && !l)
                return 1;
            var t = {
                length: -1
            };
            r ? Ie(t, 1, {
                enumerable: !0,
                get: Re
            }) : t[1] = 1,
            n.call(t, i, a)
        })
    }
    var Ie = Object.defineProperty
      , $e = {}
      , Ce = mt.indexOf
      , Le = [].indexOf
      , Pe = !!Le && 1 / [1].indexOf(1, -0) < 0
      , Me = ze("indexOf")
      , je = Oe("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    ot({
        target: "Array",
        proto: !0,
        forced: Pe || !Me || !je
    }, {
        indexOf: function(t) {
            return Pe ? Le.apply(this, arguments) || 0 : Ce(this, t, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Ne = [].join
      , qe = x != Object
      , Ue = ze("join", ",");
    ot({
        target: "Array",
        proto: !0,
        forced: qe || !Ue
    }, {
        join: function(t) {
            return Ne.call(c(this), void 0 === t ? "," : t)
        }
    });
    function De(t) {
        if ("function" != typeof t)
            throw TypeError(String(t) + " is not a function");
        return t
    }
    function Ze(t, e) {
        var n;
        return Fe(t) && ("function" == typeof (n = t.constructor) && (n === Array || Fe(n.prototype)) || u(n) && null === (n = n[He])) && (n = void 0),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
    }
    function We(g) {
        var m = 1 == g
          , v = 2 == g
          , y = 3 == g
          , k = 4 == g
          , b = 6 == g
          , w = 5 == g || b;
        return function(t, e, n, r) {
            for (var i, a, o, l, s = we(t), c = x(s), u = (l = n,
            De(o = e),
            void 0 === l ? o : function(t, e, n) {
                return o.call(l, t, e, n)
            }
            ), p = et(c.length), d = 0, f = r || Ze, h = m ? f(t, p) : v ? f(t, 0) : void 0; d < p; d++)
                if ((w || d in c) && (a = u(i = c[d], d, s),
                g))
                    if (m)
                        h[d] = a;
                    else if (a)
                        switch (g) {
                        case 3:
                            return !0;
                        case 5:
                            return i;
                        case 6:
                            return d;
                        case 2:
                            Be.call(h, i)
                        }
                    else if (k)
                        return !1;
            return b ? -1 : y || k ? k : h
        }
    }
    var Ke, Je, Fe = Array.isArray || function(t) {
        return "Array" == a(t)
    }
    , He = Ut("species"), Be = [].push, Ye = {
        forEach: We(0),
        map: We(1),
        filter: We(2),
        some: We(3),
        every: We(4),
        find: We(5),
        findIndex: We(6)
    }, Ve = Q("navigator", "userAgent") || "", Ge = g.process, Xe = Ge && Ge.versions, Qe = Xe && Xe.v8;
    Qe ? Je = (Ke = Qe.split("."))[0] + Ke[1] : Ve && (!(Ke = Ve.match(/Edge\/(\d+)/)) || 74 <= Ke[1]) && (Ke = Ve.match(/Chrome\/(\d+)/)) && (Je = Ke[1]);
    function tn(e) {
        return 51 <= en || !p(function() {
            var t = [];
            return (t.constructor = {})[nn] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== t[e](Boolean).foo
        })
    }
    var en = Je && +Je
      , nn = Ut("species")
      , rn = Ye.map
      , an = tn("map")
      , on = Oe("map");
    ot({
        target: "Array",
        proto: !0,
        forced: !an || !on
    }, {
        map: function(t) {
            return rn(this, t, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    function ln(t, e, n) {
        var r = o(e);
        r in t ? z.f(t, r, i(0, n)) : t[r] = n
    }
    var sn = tn("slice")
      , cn = Oe("slice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , un = Ut("species")
      , pn = [].slice
      , dn = Math.max;
    ot({
        target: "Array",
        proto: !0,
        forced: !sn || !cn
    }, {
        slice: function(t, e) {
            var n, r, i, a = c(this), o = et(a.length), l = nt(t, o), s = nt(void 0 === e ? o : e, o);
            if (Fe(a) && (("function" == typeof (n = a.constructor) && (n === Array || Fe(n.prototype)) || u(n) && null === (n = n[un])) && (n = void 0),
            n === Array || void 0 === n))
                return pn.call(a, l, s);
            for (r = new (void 0 === n ? Array : n)(dn(s - l, 0)),
            i = 0; l < s; l++,
            i++)
                l in a && ln(r, i, a[l]);
            return r.length = i,
            r
        }
    });
    function fn(t) {
        var e;
        return u(t) && (void 0 !== (e = t[vn]) ? !!e : "RegExp" == a(t))
    }
    var hn, gn, mn = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var n, r = !1, t = {};
        try {
            (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []),
            r = t instanceof Array
        } catch (n) {}
        return function(t, e) {
            return A(t),
            function() {
                if (!u(e) && null !== e)
                    throw TypeError("Can't set " + String(e) + " as a prototype")
            }(),
            r ? n.call(t, e) : t.__proto__ = e,
            t
        }
    }() : void 0), vn = Ut("match"), yn = Ut("species"), kn = z.f, bn = kt.f, wn = st.set, xn = Ut("match"), Sn = g.RegExp, Tn = Sn.prototype, En = /a/g, _n = /a/g, An = new Sn(En) !== En, zn = $t.UNSUPPORTED_Y;
    if (l && At("RegExp", !An || zn || p(function() {
        return _n[xn] = !1,
        Sn(En) != En || Sn(_n) == _n || "/a/i" != Sn(En, "i")
    }))) {
        for (var Rn = function(t, e) {
            var n, r = this instanceof Rn, i = fn(t), a = void 0 === e;
            if (!r && i && t.constructor === Rn && a)
                return t;
            An ? i && !a && (t = t.source) : t instanceof Rn && (a && (e = lt.call(t)),
            t = t.source),
            zn && (n = !!e && -1 < e.indexOf("y")) && (e = e.replace(/y/g, ""));
            var o, l, s, c = (o = An ? new Sn(t,e) : Sn(t, e),
            mn && "function" == typeof (l = (r ? this : Tn).constructor) && l !== Rn && u(s = l.prototype) && s !== Rn.prototype && mn(o, s),
            o);
            return zn && n && wn(c, {
                sticky: n
            }),
            c
        }, On = function(e) {
            e in Rn || kn(Rn, e, {
                configurable: !0,
                get: function() {
                    return Sn[e]
                },
                set: function(t) {
                    Sn[e] = t
                }
            })
        }, In = bn(Sn), $n = 0; In.length > $n; )
            On(In[$n++]);
        (Tn.constructor = Rn).prototype = Tn,
        ct(g, "RegExp", Rn)
    }
    hn = Q("RegExp"),
    gn = z.f,
    l && hn && !hn[yn] && gn(hn, yn, {
        configurable: !0,
        get: function() {
            return this
        }
    });
    function Cn(t) {
        if (fn(t))
            throw TypeError("The method doesn't accept regular expressions");
        return t
    }
    function Ln(e) {
        var n = /./;
        try {
            "/./"[e](n)
        } catch (t) {
            try {
                return n[Mn] = !1,
                "/./"[e](n)
            } catch (e) {}
        }
        return !1
    }
    var Pn, Mn = Ut("match"), jn = E.f, Nn = "".endsWith, qn = Math.min, Un = Ln("endsWith");
    ot({
        target: "String",
        proto: !0,
        forced: !(!Un && ((Pn = jn(String.prototype, "endsWith")) && !Pn.writable) || Un)
    }, {
        endsWith: function(t) {
            var e = String(d(this));
            Cn(t);
            var n = 1 < arguments.length ? arguments[1] : void 0
              , r = et(e.length)
              , i = void 0 === n ? r : qn(et(n), r)
              , a = String(t);
            return Nn ? Nn.call(e, a, i) : e.slice(i - a.length, i) === a
        }
    });
    var Dn = Ut("species")
      , Zn = [].push
      , Wn = Math.min
      , Kn = 4294967295
      , Jn = !p(function() {
        return !RegExp(Kn, "y")
    });
    Dt("split", 2, function(i, k, b) {
        var w = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function(t, e) {
            var n = String(d(this))
              , r = void 0 === e ? Kn : e >>> 0;
            if (0 == r)
                return [];
            if (void 0 === t)
                return [n];
            if (!fn(t))
                return k.call(n, t, r);
            for (var i, a, o, l = [], s = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), c = 0, u = new RegExp(t.source,s + "g"); (i = qt.call(u, n)) && !((a = u.lastIndex) > c && (l.push(n.slice(c, i.index)),
            1 < i.length && i.index < n.length && Zn.apply(l, i.slice(1)),
            o = i[0].length,
            c = a,
            l.length >= r)); )
                u.lastIndex === i.index && u.lastIndex++;
            return c === n.length ? !o && u.test("") || l.push("") : l.push(n.slice(c)),
            l.length > r ? l.slice(0, r) : l
        }
        : "0".split(void 0, 0).length ? function(t, e) {
            return void 0 === t && 0 === e ? [] : k.call(this, t, e)
        }
        : k;
        return [function(t, e) {
            var n = d(this)
              , r = null == t ? void 0 : t[i];
            return void 0 !== r ? r.call(t, n, e) : w.call(String(n), t, e)
        }
        , function(t, e) {
            var n = b(w, t, this, e, w !== k);
            if (n.done)
                return n.value;
            var r, i, a, o = A(t), l = String(this), s = (r = RegExp,
            void 0 === (a = A(o).constructor) || null == (i = A(a)[Dn]) ? r : De(i)), c = o.unicode, u = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Jn ? "y" : "g"), p = new s(Jn ? o : "^(?:" + o.source + ")",u), d = void 0 === e ? Kn : e >>> 0;
            if (0 == d)
                return [];
            if (0 === l.length)
                return null === Kt(p, l) ? [l] : [];
            for (var f = 0, h = 0, g = []; h < l.length; ) {
                p.lastIndex = Jn ? h : 0;
                var m, v = Kt(p, Jn ? l : l.slice(h));
                if (null === v || (m = Wn(et(p.lastIndex + (Jn ? 0 : h)), l.length)) === f)
                    h = Wt(l, h, c);
                else {
                    if (g.push(l.slice(f, h)),
                    g.length === d)
                        return g;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]),
                        g.length === d)
                            return g;
                    h = f = m
                }
            }
            return g.push(l.slice(f)),
            g
        }
        ]
    }, !Jn);
    var Fn, Hn = E.f, Bn = "".startsWith, Yn = Math.min, Vn = Ln("startsWith");
    ot({
        target: "String",
        proto: !0,
        forced: !(!Vn && ((Fn = Hn(String.prototype, "startsWith")) && !Fn.writable) || Vn)
    }, {
        startsWith: function(t) {
            var e = String(d(this));
            Cn(t);
            var n = et(Yn(1 < arguments.length ? arguments[1] : void 0, e.length))
              , r = String(t);
            return Bn ? Bn.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    });
    function Gn(n) {
        return function(t) {
            var e = String(d(t));
            return 1 & n && (e = e.replace(er, "")),
            2 & n && (e = e.replace(nr, "")),
            e
        }
    }
    function Xn(t) {
        return p(function() {
            return Qn[t]() || "​᠎" != "​᠎"[t]() || Qn[t].name !== t
        })
    }
    var Qn = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      , tr = "[" + Qn + "]"
      , er = RegExp("^" + tr + tr + "*")
      , nr = RegExp(tr + tr + "*$")
      , rr = {
        start: Gn(1),
        end: Gn(2),
        trim: Gn(3)
    }
      , ir = rr.trim;
    ot({
        target: "String",
        proto: !0,
        forced: Xn("trim")
    }, {
        trim: function() {
            return ir(this)
        }
    });
    var ar = rr.end
      , or = Xn("trimEnd")
      , lr = or ? function() {
        return ar(this)
    }
    : "".trimEnd;
    ot({
        target: "String",
        proto: !0,
        forced: or
    }, {
        trimEnd: lr,
        trimRight: lr
    });
    var sr = e(function(e) {
        e.exports = {
            defaults: {
                baseUrl: null,
                breaks: !1,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: null,
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                tokenizer: null,
                walkTokens: null,
                xhtml: !1
            },
            getDefaults: function() {
                return {
                    baseUrl: null,
                    breaks: !1,
                    gfm: !0,
                    headerIds: !0,
                    headerPrefix: "",
                    highlight: null,
                    langPrefix: "language-",
                    mangle: !0,
                    pedantic: !1,
                    renderer: null,
                    sanitize: !1,
                    sanitizer: null,
                    silent: !1,
                    smartLists: !1,
                    smartypants: !1,
                    tokenizer: null,
                    walkTokens: null,
                    xhtml: !1
                }
            },
            changeDefaults: function(t) {
                e.exports.defaults = t
            }
        }
    })
      , cr = tn("splice")
      , ur = Oe("splice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , pr = Math.max
      , dr = Math.min;
    ot({
        target: "Array",
        proto: !0,
        forced: !cr || !ur
    }, {
        splice: function(t, e) {
            var n, r, i, a, o, l, s = we(this), c = et(s.length), u = nt(t, c), p = arguments.length;
            if (0 === p ? n = r = 0 : r = 1 === p ? (n = 0,
            c - u) : (n = p - 2,
            dr(pr(tt(e), 0), c - u)),
            9007199254740991 < c + n - r)
                throw TypeError("Maximum allowed length exceeded");
            for (i = Ze(s, r),
            a = 0; a < r; a++)
                (o = u + a)in s && ln(i, a, s[o]);
            if (n < (i.length = r)) {
                for (a = u; a < c - r; a++)
                    l = a + n,
                    (o = a + r)in s ? s[l] = s[o] : delete s[l];
                for (a = c; c - r + n < a; a--)
                    delete s[a - 1]
            } else if (r < n)
                for (a = c - r; u < a; a--)
                    l = a + n - 1,
                    (o = a + r - 1)in s ? s[l] = s[o] : delete s[l];
            for (a = 0; a < n; a++)
                s[a + u] = arguments[a + 2];
            return s.length = c - r + n,
            i
        }
    });
    function fr(t) {
        return yr[t]
    }
    var hr = /[&<>"']/
      , gr = /[&<>"']/g
      , mr = /[<>"']|&(?!#?\w+;)/
      , vr = /[<>"']|&(?!#?\w+;)/g
      , yr = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , kr = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function br(t) {
        return t.replace(kr, function(t, e) {
            return "colon" === (e = e.toLowerCase()) ? ":" : "#" === e.charAt(0) ? "x" === e.charAt(1) ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""
        })
    }
    var wr = /(^|[^\[])\^/g
      , xr = /[^\w:]/g
      , Sr = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
      , Tr = {}
      , Er = /^[^:]+:\/*[^/]*$/
      , _r = /^([^:]+:)[\s\S]*$/
      , Ar = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function zr(t, e, n) {
        var r = t.length;
        if (0 === r)
            return "";
        for (var i = 0; i < r; ) {
            var a = t.charAt(r - i - 1);
            if (a !== e || n) {
                if (a === e || !n)
                    break;
                i++
            } else
                i++
        }
        return t.substr(0, r - i)
    }
    function Rr(t, e) {
        if (e) {
            if (hr.test(t))
                return t.replace(gr, fr)
        } else if (mr.test(t))
            return t.replace(vr, fr);
        return t
    }
    function Or(t) {
        for (var e, n, r = 1; r < arguments.length; r++)
            for (n in e = arguments[r])
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    }
    var Ir = br
      , $r = sr.defaults
      , Cr = zr
      , Lr = function(t, e) {
        var n = t.replace(/\|/g, function(t, e, n) {
            for (var r = !1, i = e; 0 <= --i && "\\" === n[i]; )
                r = !r;
            return r ? "|" : " |"
        }).split(/ \|/)
          , r = 0;
        if (n.length > e)
            n.splice(e);
        else
            for (; n.length < e; )
                n.push("");
        for (; r < n.length; r++)
            n[r] = n[r].trim().replace(/\\\|/g, "|");
        return n
    }
      , Pr = Rr
      , Mr = function(t, e) {
        if (-1 === t.indexOf(e[1]))
            return -1;
        for (var n = t.length, r = 0, i = 0; i < n; i++)
            if ("\\" === t[i])
                i++;
            else if (t[i] === e[0])
                r++;
            else if (t[i] === e[1] && --r < 0)
                return i;
        return -1
    };
    function jr(t, e, n) {
        var r = e.href
          , i = e.title ? Pr(e.title) : null;
        return "!" !== t[0].charAt(0) ? {
            type: "link",
            raw: n,
            href: r,
            title: i,
            text: t[1]
        } : {
            type: "image",
            raw: n,
            text: Pr(t[1]),
            href: r,
            title: i
        }
    }
    var Nr = (ve(Wr, [{
        key: "space",
        value: function(t) {
            var e = this.rules.block.newline.exec(t);
            if (e)
                return 1 < e[0].length ? {
                    type: "space",
                    raw: e[0]
                } : {
                    raw: "\n"
                }
        }
    }, {
        key: "code",
        value: function(t, e) {
            var n = this.rules.block.code.exec(t);
            if (n) {
                var r = e[e.length - 1];
                if (r && "paragraph" === r.type)
                    return {
                        raw: n[0],
                        text: n[0].trimRight()
                    };
                var i = n[0].replace(/^ {4}/gm, "");
                return {
                    type: "code",
                    raw: n[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? i : Cr(i, "\n")
                }
            }
        }
    }, {
        key: "fences",
        value: function(t) {
            var e = this.rules.block.fences.exec(t);
            if (e) {
                var n = e[0]
                  , r = function(t) {
                    var e = n.match(/^(\s+)(?:```)/);
                    if (null === e)
                        return t;
                    var i = e[1];
                    return t.split("\n").map(function(t) {
                        var e, n, r = t.match(/^\s+/);
                        return null === r ? t : (n = 1,
                        (function(t) {
                            if (Array.isArray(t))
                                return t
                        }(e = r) || function(t, e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                var n = []
                                  , r = !0
                                  , i = !1
                                  , a = void 0;
                                try {
                                    for (var o, l = t[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value),
                                    !e || n.length !== e); r = !0)
                                        ;
                                } catch (t) {
                                    i = !0,
                                    a = t
                                } finally {
                                    try {
                                        r || null == l.return || l.return()
                                    } finally {
                                        if (i)
                                            throw a
                                    }
                                }
                                return n
                            }
                        }(e, n) || ye(e, n) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[0].length >= i.length ? t.slice(i.length) : t)
                    }).join("\n")
                }(e[3] || "");
                return {
                    type: "code",
                    raw: n,
                    lang: e[2] ? e[2].trim() : e[2],
                    text: r
                }
            }
        }
    }, {
        key: "heading",
        value: function(t) {
            var e = this.rules.block.heading.exec(t);
            if (e)
                return {
                    type: "heading",
                    raw: e[0],
                    depth: e[1].length,
                    text: e[2]
                }
        }
    }, {
        key: "nptable",
        value: function(t) {
            var e = this.rules.block.nptable.exec(t);
            if (e) {
                var n = {
                    type: "table",
                    header: Lr(e[1].replace(/^ *| *\| *$/g, "")),
                    align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
                    raw: e[0]
                };
                if (n.header.length === n.align.length) {
                    for (var r = n.align.length, i = 0; i < r; i++)
                        /^ *-+: *$/.test(n.align[i]) ? n.align[i] = "right" : /^ *:-+: *$/.test(n.align[i]) ? n.align[i] = "center" : /^ *:-+ *$/.test(n.align[i]) ? n.align[i] = "left" : n.align[i] = null;
                    for (r = n.cells.length,
                    i = 0; i < r; i++)
                        n.cells[i] = Lr(n.cells[i], n.header.length);
                    return n
                }
            }
        }
    }, {
        key: "hr",
        value: function(t) {
            var e = this.rules.block.hr.exec(t);
            if (e)
                return {
                    type: "hr",
                    raw: e[0]
                }
        }
    }, {
        key: "blockquote",
        value: function(t) {
            var e = this.rules.block.blockquote.exec(t);
            if (e) {
                var n = e[0].replace(/^ *> ?/gm, "");
                return {
                    type: "blockquote",
                    raw: e[0],
                    text: n
                }
            }
        }
    }, {
        key: "list",
        value: function(t) {
            var e = this.rules.block.list.exec(t);
            if (e) {
                for (var n, r, i, a, o, l, s, c = e[0], u = e[2], p = 1 < u.length, d = {
                    type: "list",
                    raw: c,
                    ordered: p,
                    start: p ? +u : "",
                    loose: !1,
                    items: []
                }, f = e[0].match(this.rules.block.item), h = !1, g = f.length, m = 0; m < g; m++)
                    c = n = f[m],
                    r = n.length,
                    ~(n = n.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") && (r -= n.length,
                    n = this.options.pedantic ? n.replace(/^ {1,4}/gm, "") : n.replace(new RegExp("^ {1," + r + "}","gm"), "")),
                    m !== g - 1 && (i = this.rules.block.bullet.exec(f[m + 1])[0],
                    (1 < u.length ? 1 === i.length : 1 < i.length || this.options.smartLists && i !== u) && (a = f.slice(m + 1).join("\n"),
                    d.raw = d.raw.substring(0, d.raw.length - a.length),
                    m = g - 1)),
                    o = h || /\n\n(?!\s*$)/.test(n),
                    m !== g - 1 && (h = "\n" === n.charAt(n.length - 1),
                    o = o || h),
                    o && (d.loose = !0),
                    s = void 0,
                    (l = /^\[[ xX]\] /.test(n)) && (s = " " !== n[1],
                    n = n.replace(/^\[[ xX]\] +/, "")),
                    d.items.push({
                        type: "list_item",
                        raw: c,
                        task: l,
                        checked: s,
                        loose: o,
                        text: n
                    });
                return d
            }
        }
    }, {
        key: "html",
        value: function(t) {
            var e = this.rules.block.html.exec(t);
            if (e)
                return {
                    type: this.options.sanitize ? "paragraph" : "html",
                    raw: e[0],
                    pre: !this.options.sanitizer && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : Pr(e[0]) : e[0]
                }
        }
    }, {
        key: "def",
        value: function(t) {
            var e = this.rules.block.def.exec(t);
            if (e)
                return e[3] && (e[3] = e[3].substring(1, e[3].length - 1)),
                {
                    tag: e[1].toLowerCase().replace(/\s+/g, " "),
                    raw: e[0],
                    href: e[2],
                    title: e[3]
                }
        }
    }, {
        key: "table",
        value: function(t) {
            var e = this.rules.block.table.exec(t);
            if (e) {
                var n = {
                    type: "table",
                    header: Lr(e[1].replace(/^ *| *\| *$/g, "")),
                    align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : []
                };
                if (n.header.length === n.align.length) {
                    n.raw = e[0];
                    for (var r = n.align.length, i = 0; i < r; i++)
                        /^ *-+: *$/.test(n.align[i]) ? n.align[i] = "right" : /^ *:-+: *$/.test(n.align[i]) ? n.align[i] = "center" : /^ *:-+ *$/.test(n.align[i]) ? n.align[i] = "left" : n.align[i] = null;
                    for (r = n.cells.length,
                    i = 0; i < r; i++)
                        n.cells[i] = Lr(n.cells[i].replace(/^ *\| *| *\| *$/g, ""), n.header.length);
                    return n
                }
            }
        }
    }, {
        key: "lheading",
        value: function(t) {
            var e = this.rules.block.lheading.exec(t);
            if (e)
                return {
                    type: "heading",
                    raw: e[0],
                    depth: "=" === e[2].charAt(0) ? 1 : 2,
                    text: e[1]
                }
        }
    }, {
        key: "paragraph",
        value: function(t) {
            var e = this.rules.block.paragraph.exec(t);
            if (e)
                return {
                    type: "paragraph",
                    raw: e[0],
                    text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1]
                }
        }
    }, {
        key: "text",
        value: function(t, e) {
            var n = this.rules.block.text.exec(t);
            if (n) {
                var r = e[e.length - 1];
                return r && "text" === r.type ? {
                    raw: n[0],
                    text: n[0]
                } : {
                    type: "text",
                    raw: n[0],
                    text: n[0]
                }
            }
        }
    }, {
        key: "escape",
        value: function(t) {
            var e = this.rules.inline.escape.exec(t);
            if (e)
                return {
                    type: "escape",
                    raw: e[0],
                    text: Pr(e[1])
                }
        }
    }, {
        key: "tag",
        value: function(t, e, n) {
            var r = this.rules.inline.tag.exec(t);
            if (r)
                return !e && /^<a /i.test(r[0]) ? e = !0 : e && /^<\/a>/i.test(r[0]) && (e = !1),
                !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (n = !1),
                {
                    type: this.options.sanitize ? "text" : "html",
                    raw: r[0],
                    inLink: e,
                    inRawBlock: n,
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : Pr(r[0]) : r[0]
                }
        }
    }, {
        key: "link",
        value: function(t) {
            var e = this.rules.inline.link.exec(t);
            if (e) {
                var n, r = Mr(e[2], "()");
                -1 < r && (n = (0 === e[0].indexOf("!") ? 5 : 4) + e[1].length + r,
                e[2] = e[2].substring(0, r),
                e[0] = e[0].substring(0, n).trim(),
                e[3] = "");
                var i, a = e[2], o = "";
                return o = this.options.pedantic ? (i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a)) ? (a = i[1],
                i[3]) : "" : e[3] ? e[3].slice(1, -1) : "",
                jr(e, {
                    href: (a = a.trim().replace(/^<([\s\S]*)>$/, "$1")) ? a.replace(this.rules.inline._escapes, "$1") : a,
                    title: o ? o.replace(this.rules.inline._escapes, "$1") : o
                }, e[0])
            }
        }
    }, {
        key: "reflink",
        value: function(t, e) {
            var n;
            if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
                var r = (n[2] || n[1]).replace(/\s+/g, " ");
                if ((r = e[r.toLowerCase()]) && r.href)
                    return jr(n, r, n[0]);
                var i = n[0].charAt(0);
                return {
                    type: "text",
                    raw: i,
                    text: i
                }
            }
        }
    }, {
        key: "strong",
        value: function(t) {
            var e = this.rules.inline.strong.exec(t);
            if (e)
                return {
                    type: "strong",
                    raw: e[0],
                    text: e[4] || e[3] || e[2] || e[1]
                }
        }
    }, {
        key: "em",
        value: function(t) {
            var e = this.rules.inline.em.exec(t);
            if (e)
                return {
                    type: "em",
                    raw: e[0],
                    text: e[6] || e[5] || e[4] || e[3] || e[2] || e[1]
                }
        }
    }, {
        key: "codespan",
        value: function(t) {
            var e = this.rules.inline.code.exec(t);
            if (e) {
                var n = e[2].replace(/\n/g, " ")
                  , r = /[^ ]/.test(n)
                  , i = n.startsWith(" ") && n.endsWith(" ");
                return r && i && (n = n.substring(1, n.length - 1)),
                n = Pr(n, !0),
                {
                    type: "codespan",
                    raw: e[0],
                    text: n
                }
            }
        }
    }, {
        key: "br",
        value: function(t) {
            var e = this.rules.inline.br.exec(t);
            if (e)
                return {
                    type: "br",
                    raw: e[0]
                }
        }
    }, {
        key: "del",
        value: function(t) {
            var e = this.rules.inline.del.exec(t);
            if (e)
                return {
                    type: "del",
                    raw: e[0],
                    text: e[1]
                }
        }
    }, {
        key: "autolink",
        value: function(t, e) {
            var n, r, i = this.rules.inline.autolink.exec(t);
            if (i)
                return r = "@" === i[2] ? "mailto:" + (n = Pr(this.options.mangle ? e(i[1]) : i[1])) : n = Pr(i[1]),
                {
                    type: "link",
                    raw: i[0],
                    text: n,
                    href: r,
                    tokens: [{
                        type: "text",
                        raw: n,
                        text: n
                    }]
                }
        }
    }, {
        key: "url",
        value: function(t, e) {
            var n, r, i, a;
            if (n = this.rules.inline.url.exec(t)) {
                if ("@" === n[2])
                    i = "mailto:" + (r = Pr(this.options.mangle ? e(n[0]) : n[0]));
                else {
                    for (; a = n[0],
                    n[0] = this.rules.inline._backpedal.exec(n[0])[0],
                    a !== n[0]; )
                        ;
                    r = Pr(n[0]),
                    i = "www." === n[1] ? "http://" + r : r
                }
                return {
                    type: "link",
                    raw: n[0],
                    text: r,
                    href: i,
                    tokens: [{
                        type: "text",
                        raw: r,
                        text: r
                    }]
                }
            }
        }
    }, {
        key: "inlineText",
        value: function(t, e, n) {
            var r, i = this.rules.inline.text.exec(t);
            if (i)
                return r = e ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : Pr(i[0]) : i[0] : Pr(this.options.smartypants ? n(i[0]) : i[0]),
                {
                    type: "text",
                    raw: i[0],
                    text: r
                }
        }
    }]),
    Wr)
      , qr = {
        exec: function() {}
    }
      , Ur = function(n, t) {
        n = n.source || n,
        t = t || "";
        var r = {
            replace: function(t, e) {
                return e = (e = e.source || e).replace(wr, "$1"),
                n = n.replace(t, e),
                r
            },
            getRegex: function() {
                return new RegExp(n,t)
            }
        };
        return r
    }
      , Dr = Or
      , Zr = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        nptable: qr,
        table: qr,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
    };
    function Wr(t) {
        ge(this, Wr),
        this.options = t || $r
    }
    Zr.def = Ur(Zr.def).replace("label", Zr._label).replace("title", Zr._title).getRegex(),
    Zr.bullet = /(?:[*+-]|\d{1,9}\.)/,
    Zr.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,
    Zr.item = Ur(Zr.item, "gm").replace(/bull/g, Zr.bullet).getRegex(),
    Zr.list = Ur(Zr.list).replace(/bull/g, Zr.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + Zr.def.source + ")").getRegex(),
    Zr._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    Zr._comment = /<!--(?!-?>)[\s\S]*?-->/,
    Zr.html = Ur(Zr.html, "i").replace("comment", Zr._comment).replace("tag", Zr._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
    Zr.paragraph = Ur(Zr._paragraph).replace("hr", Zr.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", Zr._tag).getRegex(),
    Zr.blockquote = Ur(Zr.blockquote).replace("paragraph", Zr.paragraph).getRegex(),
    Zr.normal = Dr({}, Zr),
    Zr.gfm = Dr({}, Zr.normal, {
        nptable: "^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
        table: "^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    }),
    Zr.gfm.nptable = Ur(Zr.gfm.nptable).replace("hr", Zr.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", Zr._tag).getRegex(),
    Zr.gfm.table = Ur(Zr.gfm.table).replace("hr", Zr.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", Zr._tag).getRegex(),
    Zr.pedantic = Dr({}, Zr.normal, {
        html: Ur("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Zr._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
        fences: qr,
        paragraph: Ur(Zr.normal._paragraph).replace("hr", Zr.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Zr.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    });
    var Kr = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: qr,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
        em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: qr,
        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
        _punctuation: "!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~"
    };
    Kr.em = Ur(Kr.em).replace(/punctuation/g, Kr._punctuation).getRegex(),
    Kr._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,
    Kr._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
    Kr._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
    Kr.autolink = Ur(Kr.autolink).replace("scheme", Kr._scheme).replace("email", Kr._email).getRegex(),
    Kr._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
    Kr.tag = Ur(Kr.tag).replace("comment", Zr._comment).replace("attribute", Kr._attribute).getRegex(),
    Kr._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    Kr._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,
    Kr._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
    Kr.link = Ur(Kr.link).replace("label", Kr._label).replace("href", Kr._href).replace("title", Kr._title).getRegex(),
    Kr.reflink = Ur(Kr.reflink).replace("label", Kr._label).getRegex(),
    Kr.normal = Dr({}, Kr),
    Kr.pedantic = Dr({}, Kr.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
        link: Ur(/^!?\[(label)\]\((.*?)\)/).replace("label", Kr._label).getRegex(),
        reflink: Ur(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Kr._label).getRegex()
    }),
    Kr.gfm = Dr({}, Kr.normal, {
        escape: Ur(Kr.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^~+(?=\S)([\s\S]*?\S)~+/,
        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
    }),
    Kr.gfm.url = Ur(Kr.gfm.url, "i").replace("email", Kr.gfm._extended_email).getRegex(),
    Kr.breaks = Dr({}, Kr.gfm, {
        br: Ur(Kr.br).replace("{2,}", "*").getRegex(),
        text: Ur(Kr.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    var Jr = {
        block: Zr,
        inline: Kr
    }
      , Fr = sr.defaults
      , Hr = Jr.block
      , Br = Jr.inline;
    function Yr(t) {
        return t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
    }
    function Vr(t) {
        for (var e, n = "", r = t.length, i = 0; i < r; i++)
            e = t.charCodeAt(i),
            .5 < Math.random() && (e = "x" + e.toString(16)),
            n += "&#" + e + ";";
        return n
    }
    var Gr = (ve(vi, [{
        key: "lex",
        value: function(t) {
            return t = t.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "),
            this.blockTokens(t, this.tokens, !0),
            this.inline(this.tokens),
            this.tokens
        }
    }, {
        key: "blockTokens",
        value: function(t) {
            var e, n, r, i, a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], o = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            for (t = t.replace(/^ +$/gm, ""); t; )
                if (e = this.tokenizer.space(t))
                    t = t.substring(e.raw.length),
                    e.type && a.push(e);
                else if (e = this.tokenizer.code(t, a))
                    t = t.substring(e.raw.length),
                    e.type ? a.push(e) : ((i = a[a.length - 1]).raw += "\n" + e.raw,
                    i.text += "\n" + e.text);
                else if (e = this.tokenizer.fences(t))
                    t = t.substring(e.raw.length),
                    a.push(e);
                else if (e = this.tokenizer.heading(t))
                    t = t.substring(e.raw.length),
                    a.push(e);
                else if (e = this.tokenizer.nptable(t))
                    t = t.substring(e.raw.length),
                    a.push(e);
                else if (e = this.tokenizer.hr(t))
                    t = t.substring(e.raw.length),
                    a.push(e);
                else if (e = this.tokenizer.blockquote(t))
                    t = t.substring(e.raw.length),
                    e.tokens = this.blockTokens(e.text, [], o),
                    a.push(e);
                else if (e = this.tokenizer.list(t)) {
                    for (t = t.substring(e.raw.length),
                    r = e.items.length,
                    n = 0; n < r; n++)
                        e.items[n].tokens = this.blockTokens(e.items[n].text, [], !1);
                    a.push(e)
                } else if (e = this.tokenizer.html(t))
                    t = t.substring(e.raw.length),
                    a.push(e);
                else if (o && (e = this.tokenizer.def(t)))
                    t = t.substring(e.raw.length),
                    this.tokens.links[e.tag] || (this.tokens.links[e.tag] = {
                        href: e.href,
                        title: e.title
                    });
                else if (e = this.tokenizer.table(t))
                    t = t.substring(e.raw.length),
                    a.push(e);
                else if (e = this.tokenizer.lheading(t))
                    t = t.substring(e.raw.length),
                    a.push(e);
                else if (o && (e = this.tokenizer.paragraph(t)))
                    t = t.substring(e.raw.length),
                    a.push(e);
                else if (e = this.tokenizer.text(t, a))
                    t = t.substring(e.raw.length),
                    e.type ? a.push(e) : ((i = a[a.length - 1]).raw += "\n" + e.raw,
                    i.text += "\n" + e.text);
                else if (t) {
                    var l = "Infinite loop on byte: " + t.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(l);
                        break
                    }
                    throw new Error(l)
                }
            return a
        }
    }, {
        key: "inline",
        value: function(t) {
            for (var e, n, r, i, a, o = t.length, l = 0; l < o; l++)
                switch ((a = t[l]).type) {
                case "paragraph":
                case "text":
                case "heading":
                    a.tokens = [],
                    this.inlineTokens(a.text, a.tokens);
                    break;
                case "table":
                    for (a.tokens = {
                        header: [],
                        cells: []
                    },
                    r = a.header.length,
                    e = 0; e < r; e++)
                        a.tokens.header[e] = [],
                        this.inlineTokens(a.header[e], a.tokens.header[e]);
                    for (r = a.cells.length,
                    e = 0; e < r; e++)
                        for (i = a.cells[e],
                        a.tokens.cells[e] = [],
                        n = 0; n < i.length; n++)
                            a.tokens.cells[e][n] = [],
                            this.inlineTokens(i[n], a.tokens.cells[e][n]);
                    break;
                case "blockquote":
                    this.inline(a.tokens);
                    break;
                case "list":
                    for (r = a.items.length,
                    e = 0; e < r; e++)
                        this.inline(a.items[e].tokens)
                }
            return t
        }
    }, {
        key: "inlineTokens",
        value: function(t) {
            for (var e, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]; t; )
                if (e = this.tokenizer.escape(t))
                    t = t.substring(e.raw.length),
                    n.push(e);
                else if (e = this.tokenizer.tag(t, r, i))
                    t = t.substring(e.raw.length),
                    r = e.inLink,
                    i = e.inRawBlock,
                    n.push(e);
                else if (e = this.tokenizer.link(t))
                    t = t.substring(e.raw.length),
                    "link" === e.type && (e.tokens = this.inlineTokens(e.text, [], !0, i)),
                    n.push(e);
                else if (e = this.tokenizer.reflink(t, this.tokens.links))
                    t = t.substring(e.raw.length),
                    "link" === e.type && (e.tokens = this.inlineTokens(e.text, [], !0, i)),
                    n.push(e);
                else if (e = this.tokenizer.strong(t))
                    t = t.substring(e.raw.length),
                    e.tokens = this.inlineTokens(e.text, [], r, i),
                    n.push(e);
                else if (e = this.tokenizer.em(t))
                    t = t.substring(e.raw.length),
                    e.tokens = this.inlineTokens(e.text, [], r, i),
                    n.push(e);
                else if (e = this.tokenizer.codespan(t))
                    t = t.substring(e.raw.length),
                    n.push(e);
                else if (e = this.tokenizer.br(t))
                    t = t.substring(e.raw.length),
                    n.push(e);
                else if (e = this.tokenizer.del(t))
                    t = t.substring(e.raw.length),
                    e.tokens = this.inlineTokens(e.text, [], r, i),
                    n.push(e);
                else if (e = this.tokenizer.autolink(t, Vr))
                    t = t.substring(e.raw.length),
                    n.push(e);
                else if (r || !(e = this.tokenizer.url(t, Vr))) {
                    if (e = this.tokenizer.inlineText(t, i, Yr))
                        t = t.substring(e.raw.length),
                        n.push(e);
                    else if (t) {
                        var a = "Infinite loop on byte: " + t.charCodeAt(0);
                        if (this.options.silent) {
                            console.error(a);
                            break
                        }
                        throw new Error(a)
                    }
                } else
                    t = t.substring(e.raw.length),
                    n.push(e);
            return n
        }
    }], [{
        key: "lex",
        value: function(t, e) {
            return new vi(e).lex(t)
        }
    }, {
        key: "rules",
        get: function() {
            return {
                block: Hr,
                inline: Br
            }
        }
    }]),
    vi)
      , Xr = sr.defaults
      , Qr = function(t, e, n) {
        if (t) {
            var r;
            try {
                r = decodeURIComponent(br(n)).replace(xr, "").toLowerCase()
            } catch (t) {
                return null
            }
            if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:"))
                return null
        }
        e && !Sr.test(n) && (n = function(t, e) {
            Tr[" " + t] || (Er.test(t) ? Tr[" " + t] = t + "/" : Tr[" " + t] = zr(t, "/", !0));
            var n = -1 === (t = Tr[" " + t]).indexOf(":");
            return "//" === e.substring(0, 2) ? n ? e : t.replace(_r, "$1") + e : "/" === e.charAt(0) ? n ? e : t.replace(Ar, "$1") + e : t + e
        }(e, n));
        try {
            n = encodeURI(n).replace(/%25/g, "%")
        } catch (t) {
            return null
        }
        return n
    }
      , ti = Rr
      , ei = (ve(mi, [{
        key: "code",
        value: function(t, e, n) {
            var r, i = (e || "").match(/\S*/)[0];
            return !this.options.highlight || null != (r = this.options.highlight(t, i)) && r !== t && (n = !0,
            t = r),
            i ? '<pre><code class="' + this.options.langPrefix + ti(i, !0) + '">' + (n ? t : ti(t, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? t : ti(t, !0)) + "</code></pre>\n"
        }
    }, {
        key: "blockquote",
        value: function(t) {
            return "<blockquote>\n" + t + "</blockquote>\n"
        }
    }, {
        key: "html",
        value: function(t) {
            return t
        }
    }, {
        key: "heading",
        value: function(t, e, n, r) {
            return this.options.headerIds ? "<h" + e + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + t + "</h" + e + ">\n" : "<h" + e + ">" + t + "</h" + e + ">\n"
        }
    }, {
        key: "hr",
        value: function() {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
        }
    }, {
        key: "list",
        value: function(t, e, n) {
            var r = e ? "ol" : "ul";
            return "<" + r + (e && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + t + "</" + r + ">\n"
        }
    }, {
        key: "listitem",
        value: function(t) {
            return "<li>" + t + "</li>\n"
        }
    }, {
        key: "checkbox",
        value: function(t) {
            return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
        }
    }, {
        key: "paragraph",
        value: function(t) {
            return "<p>" + t + "</p>\n"
        }
    }, {
        key: "table",
        value: function(t, e) {
            return "<table>\n<thead>\n" + t + "</thead>\n" + (e = e && "<tbody>" + e + "</tbody>") + "</table>\n"
        }
    }, {
        key: "tablerow",
        value: function(t) {
            return "<tr>\n" + t + "</tr>\n"
        }
    }, {
        key: "tablecell",
        value: function(t, e) {
            var n = e.header ? "th" : "td";
            return (e.align ? "<" + n + ' align="' + e.align + '">' : "<" + n + ">") + t + "</" + n + ">\n"
        }
    }, {
        key: "strong",
        value: function(t) {
            return "<strong>" + t + "</strong>"
        }
    }, {
        key: "em",
        value: function(t) {
            return "<em>" + t + "</em>"
        }
    }, {
        key: "codespan",
        value: function(t) {
            return "<code>" + t + "</code>"
        }
    }, {
        key: "br",
        value: function() {
            return this.options.xhtml ? "<br/>" : "<br>"
        }
    }, {
        key: "del",
        value: function(t) {
            return "<del>" + t + "</del>"
        }
    }, {
        key: "link",
        value: function(t, e, n) {
            if (null === (t = Qr(this.options.sanitize, this.options.baseUrl, t)))
                return n;
            var r = '<a href="' + ti(t) + '"';
            return e && (r += ' title="' + e + '"'),
            r + ">" + n + "</a>"
        }
    }, {
        key: "image",
        value: function(t, e, n) {
            if (null === (t = Qr(this.options.sanitize, this.options.baseUrl, t)))
                return n;
            var r = '<img src="' + t + '" alt="' + n + '"';
            return e && (r += ' title="' + e + '"'),
            r + (this.options.xhtml ? "/>" : ">")
        }
    }, {
        key: "text",
        value: function(t) {
            return t
        }
    }]),
    mi)
      , ni = (ve(gi, [{
        key: "strong",
        value: function(t) {
            return t
        }
    }, {
        key: "em",
        value: function(t) {
            return t
        }
    }, {
        key: "codespan",
        value: function(t) {
            return t
        }
    }, {
        key: "del",
        value: function(t) {
            return t
        }
    }, {
        key: "html",
        value: function(t) {
            return t
        }
    }, {
        key: "text",
        value: function(t) {
            return t
        }
    }, {
        key: "link",
        value: function(t, e, n) {
            return "" + n
        }
    }, {
        key: "image",
        value: function(t, e, n) {
            return "" + n
        }
    }, {
        key: "br",
        value: function() {
            return ""
        }
    }]),
    gi)
      , ri = (ve(hi, [{
        key: "slug",
        value: function(t) {
            var e = t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
            if (this.seen.hasOwnProperty(e))
                for (var n = e; this.seen[n]++,
                e = n + "-" + this.seen[n],
                this.seen.hasOwnProperty(e); )
                    ;
            return this.seen[e] = 0,
            e
        }
    }]),
    hi)
      , ii = sr.defaults
      , ai = Ir
      , oi = (ve(fi, [{
        key: "parse",
        value: function(t) {
            for (var e, n, r, i, a, o, l, s, c, u, p, d, f, h, g, m, v, y = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], k = "", b = t.length, w = 0; w < b; w++)
                switch ((c = t[w]).type) {
                case "space":
                    continue;
                case "hr":
                    k += this.renderer.hr();
                    continue;
                case "heading":
                    k += this.renderer.heading(this.parseInline(c.tokens), c.depth, ai(this.parseInline(c.tokens, this.textRenderer)), this.slugger);
                    continue;
                case "code":
                    k += this.renderer.code(c.text, c.lang, c.escaped);
                    continue;
                case "table":
                    for (o = l = "",
                    r = c.header.length,
                    e = 0; e < r; e++)
                        o += this.renderer.tablecell(this.parseInline(c.tokens.header[e]), {
                            header: !0,
                            align: c.align[e]
                        });
                    for (l += this.renderer.tablerow(o),
                    s = "",
                    r = c.cells.length,
                    e = 0; e < r; e++) {
                        for (o = "",
                        i = (a = c.tokens.cells[e]).length,
                        n = 0; n < i; n++)
                            o += this.renderer.tablecell(this.parseInline(a[n]), {
                                header: !1,
                                align: c.align[n]
                            });
                        s += this.renderer.tablerow(o)
                    }
                    k += this.renderer.table(l, s);
                    continue;
                case "blockquote":
                    s = this.parse(c.tokens),
                    k += this.renderer.blockquote(s);
                    continue;
                case "list":
                    for (u = c.ordered,
                    p = c.start,
                    d = c.loose,
                    r = c.items.length,
                    s = "",
                    e = 0; e < r; e++)
                        g = (h = c.items[e]).checked,
                        m = h.task,
                        f = "",
                        h.task && (v = this.renderer.checkbox(g),
                        d ? 0 < h.tokens.length && "text" === h.tokens[0].type ? (h.tokens[0].text = v + " " + h.tokens[0].text,
                        h.tokens[0].tokens && 0 < h.tokens[0].tokens.length && "text" === h.tokens[0].tokens[0].type && (h.tokens[0].tokens[0].text = v + " " + h.tokens[0].tokens[0].text)) : h.tokens.unshift({
                            type: "text",
                            text: v
                        }) : f += v),
                        f += this.parse(h.tokens, d),
                        s += this.renderer.listitem(f, m, g);
                    k += this.renderer.list(s, u, p);
                    continue;
                case "html":
                    k += this.renderer.html(c.text);
                    continue;
                case "paragraph":
                    k += this.renderer.paragraph(this.parseInline(c.tokens));
                    continue;
                case "text":
                    for (s = c.tokens ? this.parseInline(c.tokens) : c.text; w + 1 < b && "text" === t[w + 1].type; )
                        s += "\n" + ((c = t[++w]).tokens ? this.parseInline(c.tokens) : c.text);
                    k += y ? this.renderer.paragraph(s) : s;
                    continue;
                default:
                    var x = 'Token with "' + c.type + '" type was not found.';
                    if (this.options.silent)
                        return void console.error(x);
                    throw new Error(x)
                }
            return k
        }
    }, {
        key: "parseInline",
        value: function(t, e) {
            e = e || this.renderer;
            for (var n, r = "", i = t.length, a = 0; a < i; a++)
                switch ((n = t[a]).type) {
                case "escape":
                    r += e.text(n.text);
                    break;
                case "html":
                    r += e.html(n.text);
                    break;
                case "link":
                    r += e.link(n.href, n.title, this.parseInline(n.tokens, e));
                    break;
                case "image":
                    r += e.image(n.href, n.title, n.text);
                    break;
                case "strong":
                    r += e.strong(this.parseInline(n.tokens, e));
                    break;
                case "em":
                    r += e.em(this.parseInline(n.tokens, e));
                    break;
                case "codespan":
                    r += e.codespan(n.text);
                    break;
                case "br":
                    r += e.br();
                    break;
                case "del":
                    r += e.del(this.parseInline(n.tokens, e));
                    break;
                case "text":
                    r += e.text(n.text);
                    break;
                default:
                    var o = 'Token with "' + n.type + '" type was not found.';
                    if (this.options.silent)
                        return void console.error(o);
                    throw new Error(o)
                }
            return r
        }
    }], [{
        key: "parse",
        value: function(t, e) {
            return new fi(e).parse(t)
        }
    }]),
    fi)
      , li = Or
      , si = function(t) {
        t && t.sanitize && !t.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
    }
      , ci = Rr
      , ui = sr.getDefaults
      , pi = sr.changeDefaults
      , di = sr.defaults;
    function fi(t) {
        ge(this, fi),
        this.options = t || ii,
        this.options.renderer = this.options.renderer || new ei,
        this.renderer = this.options.renderer,
        this.renderer.options = this.options,
        this.textRenderer = new ni,
        this.slugger = new ri
    }
    function hi() {
        ge(this, hi),
        this.seen = {}
    }
    function gi() {
        ge(this, gi)
    }
    function mi(t) {
        ge(this, mi),
        this.options = t || Xr
    }
    function vi(t) {
        ge(this, vi),
        this.tokens = [],
        this.tokens.links = Object.create(null),
        this.options = t || Fr,
        this.options.tokenizer = this.options.tokenizer || new Nr,
        this.tokenizer = this.options.tokenizer,
        this.tokenizer.options = this.options;
        var e = {
            block: Hr.normal,
            inline: Br.normal
        };
        this.options.pedantic ? (e.block = Hr.pedantic,
        e.inline = Br.pedantic) : this.options.gfm && (e.block = Hr.gfm,
        this.options.breaks ? e.inline = Br.breaks : e.inline = Br.gfm),
        this.tokenizer.rules = e
    }
    function yi(t, n, r) {
        if (null == t)
            throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof t)
            throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected");
        if ("function" == typeof n && (r = n,
        n = null),
        n = li({}, yi.defaults, n || {}),
        si(n),
        r) {
            var i, a = n.highlight;
            try {
                i = Gr.lex(t, n)
            } catch (t) {
                return r(t)
            }
            var o = function(e) {
                var t;
                if (!e)
                    try {
                        t = oi.parse(i, n)
                    } catch (t) {
                        e = t
                    }
                return n.highlight = a,
                e ? r(e) : r(null, t)
            };
            if (!a || a.length < 3)
                return o();
            if (delete n.highlight,
            !i.length)
                return o();
            var l = 0;
            return yi.walkTokens(i, function(n) {
                "code" === n.type && (l++,
                a(n.text, n.lang, function(t, e) {
                    if (t)
                        return o(t);
                    null != e && e !== n.text && (n.text = e,
                    n.escaped = !0),
                    0 == --l && o()
                }))
            }),
            void (0 === l && o())
        }
        try {
            var e = Gr.lex(t, n);
            return n.walkTokens && yi.walkTokens(e, n.walkTokens),
            oi.parse(e, n)
        } catch (t) {
            if (t.message += "\nPlease report this to https://github.com/markedjs/marked.",
            n.silent)
                return "<p>An error occurred:</p><pre>" + ci(t.message + "", !0) + "</pre>";
            throw t
        }
    }
    yi.options = yi.setOptions = function(t) {
        return li(yi.defaults, t),
        pi(yi.defaults),
        yi
    }
    ,
    yi.getDefaults = ui,
    yi.defaults = di,
    yi.use = function(l) {
        var e, n = li({}, l);
        l.renderer && function() {
            function t(i) {
                var a = o[i];
                o[i] = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    var r = l.renderer[i].apply(o, e);
                    return !1 === r && (r = a.apply(o, e)),
                    r
                }
            }
            var o = yi.defaults.renderer || new ei;
            for (var e in l.renderer)
                t(e);
            n.renderer = o
        }(),
        l.tokenizer && function() {
            function t(i) {
                var a = o[i];
                o[i] = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    var r = l.tokenizer[i].apply(o, e);
                    return !1 === r && (r = a.apply(o, e)),
                    r
                }
            }
            var o = yi.defaults.tokenizer || new Nr;
            for (var e in l.tokenizer)
                t(e);
            n.tokenizer = o
        }(),
        l.walkTokens && (e = yi.defaults.walkTokens,
        n.walkTokens = function(t) {
            l.walkTokens(t),
            e && e(t)
        }
        ),
        yi.setOptions(n)
    }
    ,
    yi.walkTokens = function(t, e) {
        var n, r = be(t);
        try {
            for (r.s(); !(n = r.n()).done; ) {
                var i = n.value;
                switch (e(i),
                i.type) {
                case "table":
                    var a, o = be(i.tokens.header);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var l = a.value;
                            yi.walkTokens(l, e)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    var s, c = be(i.tokens.cells);
                    try {
                        for (c.s(); !(s = c.n()).done; ) {
                            var u, p = be(s.value);
                            try {
                                for (p.s(); !(u = p.n()).done; ) {
                                    var d = u.value;
                                    yi.walkTokens(d, e)
                                }
                            } catch (t) {
                                p.e(t)
                            } finally {
                                p.f()
                            }
                        }
                    } catch (t) {
                        c.e(t)
                    } finally {
                        c.f()
                    }
                    break;
                case "list":
                    yi.walkTokens(i.items, e);
                    break;
                default:
                    i.tokens && yi.walkTokens(i.tokens, e)
                }
            }
        } catch (t) {
            r.e(t)
        } finally {
            r.f()
        }
    }
    ,
    yi.Parser = oi,
    yi.parser = oi.parse,
    yi.Renderer = ei,
    yi.TextRenderer = ni,
    yi.Lexer = Gr,
    yi.lexer = Gr.lex,
    yi.Tokenizer = Nr,
    yi.Slugger = ri;
    var ki = yi.parse = yi;
    return function() {
        var s, c = null;
        function e() {
            var o;
            function l(t) {
                var e, n = s.getCurrentSlide(), r = n.querySelector("aside.notes"), i = n.querySelector(".current-fragment"), a = {
                    namespace: "reveal-notes",
                    type: "state",
                    notes: "",
                    markdown: !1,
                    whitespace: "normal",
                    state: s.getState()
                };
                n.hasAttribute("data-notes") && (a.notes = n.getAttribute("data-notes"),
                a.whitespace = "pre-wrap"),
                i && ((e = i.querySelector("aside.notes")) ? r = e : i.hasAttribute("data-notes") && (a.notes = i.getAttribute("data-notes"),
                a.whitespace = "pre-wrap",
                r = null)),
                r && (a.notes = r.innerHTML,
                a.markdown = "string" == typeof r.getAttribute("data-markdown")),
                c.postMessage(JSON.stringify(a), "*")
            }
            !c || c.closed ? ((c = window.open("about:blank", "reveal.js - Notes", "width=1100,height=700")).marked = ki,
            c.document.write("<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\n\t\t<title>reveal.js - Speaker View</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: Helvetica;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t#current-slide,\n\t\t\t#upcoming-slide,\n\t\t\t#speaker-controls {\n\t\t\t\tpadding: 6px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\t-moz-box-sizing: border-box;\n\t\t\t}\n\n\t\t\t#current-slide iframe,\n\t\t\t#upcoming-slide iframe {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tborder: 1px solid #ddd;\n\t\t\t}\n\n\t\t\t#current-slide .label,\n\t\t\t#upcoming-slide .label {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tleft: 10px;\n\t\t\t\tz-index: 2;\n\t\t\t}\n\n\t\t\t#connection-status {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tz-index: 20;\n\t\t\t\tpadding: 30% 20% 20% 20%;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #222;\n\t\t\t\tbackground: #fff;\n\t\t\t\ttext-align: center;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tline-height: 1.4;\n\t\t\t}\n\n\t\t\t.overlay-element {\n\t\t\t\theight: 34px;\n\t\t\t\tline-height: 34px;\n\t\t\t\tpadding: 0 10px;\n\t\t\t\ttext-shadow: none;\n\t\t\t\tbackground: rgba( 220, 220, 220, 0.8 );\n\t\t\t\tcolor: #222;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\n\t\t\t.overlay-element.interactive:hover {\n\t\t\t\tbackground: rgba( 220, 220, 220, 1 );\n\t\t\t}\n\n\t\t\t#current-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 60%;\n\t\t\t\theight: 100%;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\n\t\t\t#upcoming-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 40%;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t}\n\n\t\t\t/* Speaker controls */\n\t\t\t#speaker-controls {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 40%;\n\t\t\t\tright: 0;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 60%;\n\t\t\t\toverflow: auto;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t\t.speaker-controls-time.hidden,\n\t\t\t\t.speaker-controls-notes.hidden {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .label,\n\t\t\t\t.speaker-controls-pace .label,\n\t\t\t\t.speaker-controls-notes .label {\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\tfont-size: 0.66em;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time, .speaker-controls-pace {\n\t\t\t\t\tborder-bottom: 1px solid rgba( 200, 200, 200, 0.5 );\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t\tpadding-bottom: 20px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .reset-button {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tfloat: right;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t}\n\t\t\t\t.speaker-controls-time:hover .reset-button {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock,\n\t\t\t\t.speaker-controls-time .pacing .hours-value,\n\t\t\t\t.speaker-controls-time .pacing .minutes-value,\n\t\t\t\t.speaker-controls-time .pacing .seconds-value {\n\t\t\t\t\tfont-size: 1.9em;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer {\n\t\t\t\t\tfloat: left;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\tfloat: right;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time span.mute {\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing-title {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.ahead {\n\t\t\t\t\tcolor: blue;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.on-track {\n\t\t\t\t\tcolor: green;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.behind {\n\t\t\t\t\tcolor: red;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes {\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes .value {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t\tline-height: 1.4;\n\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t}\n\n\t\t\t/* Layout selector */\n\t\t\t#speaker-layout {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tright: 10px;\n\t\t\t\tcolor: #222;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t\t\t#speaker-layout select {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tborder: 0;\n\t\t\t\t\tbox-shadow: 0;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\topacity: 0;\n\n\t\t\t\t\tfont-size: 1em;\n\t\t\t\t\tbackground-color: transparent;\n\n\t\t\t\t\t-moz-appearance: none;\n\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\t\t\t\t}\n\n\t\t\t\t#speaker-layout select:focus {\n\t\t\t\t\toutline: none;\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\n\t\t\t.clear {\n\t\t\t\tclear: both;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Wide */\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\twidth: 50%;\n\t\t\t\theight: 45%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 50%;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #speaker-controls {\n\t\t\t\ttop: 45%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 50%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Tall */\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\twidth: 45%;\n\t\t\t\theight: 50%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 45%;\n\t\t\t\twidth: 55%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Notes only */\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #upcoming-slide {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 1080px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 900px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 800px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t</style>\n\t</head>\n\n\t<body>\n\n\t\t<div id=\"connection-status\">Loading speaker view...</div>\n\n\t\t<div id=\"current-slide\"></div>\n\t\t<div id=\"upcoming-slide\"><span class=\"overlay-element label\">Upcoming</span></div>\n\t\t<div id=\"speaker-controls\">\n\t\t\t<div class=\"speaker-controls-time\">\n\t\t\t\t<h4 class=\"label\">Time <span class=\"reset-button\">Click to Reset</span></h4>\n\t\t\t\t<div class=\"clock\">\n\t\t\t\t\t<span class=\"clock-value\">0:00 AM</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timer\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\n\t\t\t\t<h4 class=\"label pacing-title\" style=\"display: none\">Pacing – Time to finish current slide</h4>\n\t\t\t\t<div class=\"pacing\" style=\"display: none\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"speaker-controls-notes hidden\">\n\t\t\t\t<h4 class=\"label\">Notes</h4>\n\t\t\t\t<div class=\"value\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"speaker-layout\" class=\"overlay-element interactive\">\n\t\t\t<span class=\"speaker-layout-label\"></span>\n\t\t\t<select class=\"speaker-layout-dropdown\"></select>\n\t\t</div>\n\n\t\t<script>\n\n\t\t\t(function() {\n\n\t\t\t\tvar notes,\n\t\t\t\t\tnotesValue,\n\t\t\t\t\tcurrentState,\n\t\t\t\t\tcurrentSlide,\n\t\t\t\t\tupcomingSlide,\n\t\t\t\t\tlayoutLabel,\n\t\t\t\t\tlayoutDropdown,\n\t\t\t\t\tpendingCalls = {},\n\t\t\t\t\tlastRevealApiCallId = 0,\n\t\t\t\t\tconnected = false;\n\n\t\t\t\tvar SPEAKER_LAYOUTS = {\n\t\t\t\t\t'default': 'Default',\n\t\t\t\t\t'wide': 'Wide',\n\t\t\t\t\t'tall': 'Tall',\n\t\t\t\t\t'notes-only': 'Notes only'\n\t\t\t\t};\n\n\t\t\t\tsetupLayout();\n\n\t\t\t\tvar connectionStatus = document.querySelector( '#connection-status' );\n\t\t\t\tvar connectionTimeout = setTimeout( function() {\n\t\t\t\t\tconnectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';\n\t\t\t\t}, 5000 );\n\n\t\t\t\twindow.addEventListener( 'message', function( event ) {\n\n\t\t\t\t\tclearTimeout( connectionTimeout );\n\t\t\t\t\tconnectionStatus.style.display = 'none';\n\n\t\t\t\t\tvar data = JSON.parse( event.data );\n\n\t\t\t\t\t// The overview mode is only useful to the reveal.js instance\n\t\t\t\t\t// where navigation occurs so we don't sync it\n\t\t\t\t\tif( data.state ) delete data.state.overview;\n\n\t\t\t\t\t// Messages sent by the notes plugin inside of the main window\n\t\t\t\t\tif( data && data.namespace === 'reveal-notes' ) {\n\t\t\t\t\t\tif( data.type === 'connect' ) {\n\t\t\t\t\t\t\thandleConnectMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'state' ) {\n\t\t\t\t\t\t\thandleStateMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'return' ) {\n\t\t\t\t\t\t\tpendingCalls[data.callId](data.result);\n\t\t\t\t\t\t\tdelete pendingCalls[data.callId];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// Messages sent by the reveal.js inside of the current slide preview\n\t\t\t\t\telse if( data && data.namespace === 'reveal' ) {\n\t\t\t\t\t\tif( /ready/.test( data.eventName ) ) {\n\t\t\t\t\t\t\t// Send a message back to notify that the handshake is complete\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {\n\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ]} ), '*' );\n\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t} );\n\n\t\t\t\t/**\n\t\t\t\t * Asynchronously calls the Reveal.js API of the main frame.\n\t\t\t\t */\n\t\t\t\tfunction callRevealApi( methodName, methodArguments, callback ) {\n\n\t\t\t\t\tvar callId = ++lastRevealApiCallId;\n\t\t\t\t\tpendingCalls[callId] = callback;\n\t\t\t\t\twindow.opener.postMessage( JSON.stringify( {\n\t\t\t\t\t\tnamespace: 'reveal-notes',\n\t\t\t\t\t\ttype: 'call',\n\t\t\t\t\t\tcallId: callId,\n\t\t\t\t\t\tmethodName: methodName,\n\t\t\t\t\t\targuments: methodArguments\n\t\t\t\t\t} ), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window is trying to establish a\n\t\t\t\t * connection.\n\t\t\t\t */\n\t\t\t\tfunction handleConnectMessage( data ) {\n\n\t\t\t\t\tif( connected === false ) {\n\t\t\t\t\t\tconnected = true;\n\n\t\t\t\t\t\tsetupIframes( data );\n\t\t\t\t\t\tsetupKeyboard();\n\t\t\t\t\t\tsetupNotes();\n\t\t\t\t\t\tsetupTimer();\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window sends an updated state.\n\t\t\t\t */\n\t\t\t\tfunction handleStateMessage( data ) {\n\n\t\t\t\t\t// Store the most recently set state to avoid circular loops\n\t\t\t\t\t// applying the same state\n\t\t\t\t\tcurrentState = JSON.stringify( data.state );\n\n\t\t\t\t\t// No need for updating the notes in case of fragment changes\n\t\t\t\t\tif ( data.notes ) {\n\t\t\t\t\t\tnotes.classList.remove( 'hidden' );\n\t\t\t\t\t\tnotesValue.style.whiteSpace = data.whitespace;\n\t\t\t\t\t\tif( data.markdown ) {\n\t\t\t\t\t\t\tnotesValue.innerHTML = marked( data.notes );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tnotesValue.innerHTML = data.notes;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tnotes.classList.add( 'hidden' );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Update the note slides\n\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t// Limit to max one state update per X ms\n\t\t\t\thandleStateMessage = debounce( handleStateMessage, 200 );\n\n\t\t\t\t/**\n\t\t\t\t * Forward keyboard events to the current slide window.\n\t\t\t\t * This enables keyboard events to work even if focus\n\t\t\t\t * isn't set on the current slide iframe.\n\t\t\t\t *\n\t\t\t\t * Block F5 default handling, it reloads and disconnects\n\t\t\t\t * the speaker notes window.\n\t\t\t\t */\n\t\t\t\tfunction setupKeyboard() {\n\n\t\t\t\t\tdocument.addEventListener( 'keydown', function( event ) {\n\t\t\t\t\t\tif( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {\n\t\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Creates the preview iframes.\n\t\t\t\t */\n\t\t\t\tfunction setupIframes( data ) {\n\n\t\t\t\t\tvar params = [\n\t\t\t\t\t\t'receiver',\n\t\t\t\t\t\t'progress=false',\n\t\t\t\t\t\t'history=false',\n\t\t\t\t\t\t'transition=none',\n\t\t\t\t\t\t'autoSlide=0',\n\t\t\t\t\t\t'backgroundTransition=none'\n\t\t\t\t\t].join( '&' );\n\n\t\t\t\t\tvar urlSeparator = /\\?/.test(data.url) ? '&' : '?';\n\t\t\t\t\tvar hash = '#/' + data.state.indexh + '/' + data.state.indexv;\n\t\t\t\t\tvar currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;\n\t\t\t\t\tvar upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;\n\n\t\t\t\t\tcurrentSlide = document.createElement( 'iframe' );\n\t\t\t\t\tcurrentSlide.setAttribute( 'width', 1280 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'height', 1024 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'src', currentURL );\n\t\t\t\t\tdocument.querySelector( '#current-slide' ).appendChild( currentSlide );\n\n\t\t\t\t\tupcomingSlide = document.createElement( 'iframe' );\n\t\t\t\t\tupcomingSlide.setAttribute( 'width', 640 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'height', 512 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'src', upcomingURL );\n\t\t\t\t\tdocument.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Setup the notes UI.\n\t\t\t\t */\n\t\t\t\tfunction setupNotes() {\n\n\t\t\t\t\tnotes = document.querySelector( '.speaker-controls-notes' );\n\t\t\t\t\tnotesValue = document.querySelector( '.speaker-controls-notes .value' );\n\n\t\t\t\t}\n\n\t\t\t\tfunction getTimings( callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {\n\t\t\t\t\t\tcallRevealApi( 'getConfig', [], function ( config ) {\n\t\t\t\t\t\t\tvar totalTime = config.totalTime;\n\t\t\t\t\t\t\tvar minTimePerSlide = config.minimumTimePerSlide || 0;\n\t\t\t\t\t\t\tvar defaultTiming = config.defaultTiming;\n\t\t\t\t\t\t\tif ((defaultTiming == null) && (totalTime == null)) {\n\t\t\t\t\t\t\t\tcallback(null);\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t// Setting totalTime overrides defaultTiming\n\t\t\t\t\t\t\tif (totalTime) {\n\t\t\t\t\t\t\t\tdefaultTiming = 0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar timings = [];\n\t\t\t\t\t\t\tfor ( var i in slideAttributes ) {\n\t\t\t\t\t\t\t\tvar slide = slideAttributes[ i ];\n\t\t\t\t\t\t\t\tvar timing = defaultTiming;\n\t\t\t\t\t\t\t\tif( slide.hasOwnProperty( 'data-timing' )) {\n\t\t\t\t\t\t\t\t\tvar t = slide[ 'data-timing' ];\n\t\t\t\t\t\t\t\t\ttiming = parseInt(t);\n\t\t\t\t\t\t\t\t\tif( isNaN(timing) ) {\n\t\t\t\t\t\t\t\t\t\tconsole.warn(\"Could not parse timing '\" + t + \"' of slide \" + i + \"; using default of \" + defaultTiming);\n\t\t\t\t\t\t\t\t\t\ttiming = defaultTiming;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttimings.push(timing);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif ( totalTime ) {\n\t\t\t\t\t\t\t\t// After we've allocated time to individual slides, we summarize it and\n\t\t\t\t\t\t\t\t// subtract it from the total time\n\t\t\t\t\t\t\t\tvar remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );\n\t\t\t\t\t\t\t\t// The remaining time is divided by the number of slides that have 0 seconds\n\t\t\t\t\t\t\t\t// allocated at the moment, giving the average time-per-slide on the remaining slides\n\t\t\t\t\t\t\t\tvar remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length\n\t\t\t\t\t\t\t\tvar timePerSlide = Math.round( remainingTime / remainingSlides, 0 )\n\t\t\t\t\t\t\t\t// And now we replace every zero-value timing with that average\n\t\t\t\t\t\t\t\ttimings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length\n\t\t\t\t\t\t\tif ( slidesUnderMinimum ) {\n\t\t\t\t\t\t\t\tmessage = \"The pacing time for \" + slidesUnderMinimum + \" slide(s) is under the configured minimum of \" + minTimePerSlide + \" seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).\";\n\t\t\t\t\t\t\t\talert(message);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcallback( timings );\n\t\t\t\t\t\t} );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Return the number of seconds allocated for presenting\n\t\t\t\t * all slides up to and including this one.\n\t\t\t\t */\n\t\t\t\tfunction getTimeAllocated( timings, callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\tvar allocated = 0;\n\t\t\t\t\t\tfor (var i in timings.slice(0, currentSlide + 1)) {\n\t\t\t\t\t\t\tallocated += timings[i];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcallback( allocated );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Create the timer and clock and start updating them\n\t\t\t\t * at an interval.\n\t\t\t\t */\n\t\t\t\tfunction setupTimer() {\n\n\t\t\t\t\tvar start = new Date(),\n\t\t\t\t\ttimeEl = document.querySelector( '.speaker-controls-time' ),\n\t\t\t\t\tclockEl = timeEl.querySelector( '.clock-value' ),\n\t\t\t\t\thoursEl = timeEl.querySelector( '.hours-value' ),\n\t\t\t\t\tminutesEl = timeEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tsecondsEl = timeEl.querySelector( '.seconds-value' ),\n\t\t\t\t\tpacingTitleEl = timeEl.querySelector( '.pacing-title' ),\n\t\t\t\t\tpacingEl = timeEl.querySelector( '.pacing' ),\n\t\t\t\t\tpacingHoursEl = pacingEl.querySelector( '.hours-value' ),\n\t\t\t\t\tpacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tpacingSecondsEl = pacingEl.querySelector( '.seconds-value' );\n\n\t\t\t\t\tvar timings = null;\n\t\t\t\t\tgetTimings( function ( _timings ) {\n\n\t\t\t\t\t\ttimings = _timings;\n\t\t\t\t\t\tif (_timings !== null) {\n\t\t\t\t\t\t\tpacingTitleEl.style.removeProperty('display');\n\t\t\t\t\t\t\tpacingEl.style.removeProperty('display');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Update once directly\n\t\t\t\t\t\t_updateTimer();\n\n\t\t\t\t\t\t// Then update every second\n\t\t\t\t\t\tsetInterval( _updateTimer, 1000 );\n\n\t\t\t\t\t} );\n\n\n\t\t\t\t\tfunction _resetTimer() {\n\n\t\t\t\t\t\tif (timings == null) {\n\t\t\t\t\t\t\tstart = new Date();\n\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t// Reset timer to beginning of current slide\n\t\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\t\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\t\tvar previousSlidesTiming = slideEndTiming - currentSlideTiming;\n\t\t\t\t\t\t\t\t\tvar now = new Date();\n\t\t\t\t\t\t\t\t\tstart = new Date(now.getTime() - previousSlidesTiming);\n\t\t\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\ttimeEl.addEventListener( 'click', function() {\n\t\t\t\t\t\t_resetTimer();\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t} );\n\n\t\t\t\t\tfunction _displayTime( hrEl, minEl, secEl, time) {\n\n\t\t\t\t\t\tvar sign = Math.sign(time) == -1 ? \"-\" : \"\";\n\t\t\t\t\t\ttime = Math.abs(Math.round(time / 1000));\n\t\t\t\t\t\tvar seconds = time % 60;\n\t\t\t\t\t\tvar minutes = Math.floor( time / 60 ) % 60 ;\n\t\t\t\t\t\tvar hours = Math.floor( time / ( 60 * 60 )) ;\n\t\t\t\t\t\thrEl.innerHTML = sign + zeroPadInteger( hours );\n\t\t\t\t\t\tif (hours == 0) {\n\t\t\t\t\t\t\thrEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\thrEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tminEl.innerHTML = ':' + zeroPadInteger( minutes );\n\t\t\t\t\t\tif (hours == 0 && minutes == 0) {\n\t\t\t\t\t\t\tminEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tminEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tsecEl.innerHTML = ':' + zeroPadInteger( seconds );\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updateTimer() {\n\n\t\t\t\t\t\tvar diff, hours, minutes, seconds,\n\t\t\t\t\t\tnow = new Date();\n\n\t\t\t\t\t\tdiff = now.getTime() - start.getTime();\n\n\t\t\t\t\t\tclockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );\n\t\t\t\t\t\t_displayTime( hoursEl, minutesEl, secondsEl, diff );\n\t\t\t\t\t\tif (timings !== null) {\n\t\t\t\t\t\t\t_updatePacing(diff);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updatePacing(diff) {\n\n\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\n\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\tvar timeLeftCurrentSlide = slideEndTiming - diff;\n\t\t\t\t\t\t\t\tif (timeLeftCurrentSlide < 0) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing behind';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse if (timeLeftCurrentSlide < currentSlideTiming) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing on-track';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing ahead';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t} );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets up the speaker view layout and layout selector.\n\t\t\t\t */\n\t\t\t\tfunction setupLayout() {\n\n\t\t\t\t\tlayoutDropdown = document.querySelector( '.speaker-layout-dropdown' );\n\t\t\t\t\tlayoutLabel = document.querySelector( '.speaker-layout-label' );\n\n\t\t\t\t\t// Render the list of available layouts\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\tvar option = document.createElement( 'option' );\n\t\t\t\t\t\toption.setAttribute( 'value', id );\n\t\t\t\t\t\toption.textContent = SPEAKER_LAYOUTS[ id ];\n\t\t\t\t\t\tlayoutDropdown.appendChild( option );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Monitor the dropdown for changes\n\t\t\t\t\tlayoutDropdown.addEventListener( 'change', function( event ) {\n\n\t\t\t\t\t\tsetLayout( layoutDropdown.value );\n\n\t\t\t\t\t}, false );\n\n\t\t\t\t\t// Restore any currently persisted layout\n\t\t\t\t\tsetLayout( getLayout() );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets a new speaker view layout. The layout is persisted\n\t\t\t\t * in local storage.\n\t\t\t\t */\n\t\t\t\tfunction setLayout( value ) {\n\n\t\t\t\t\tvar title = SPEAKER_LAYOUTS[ value ];\n\n\t\t\t\t\tlayoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );\n\t\t\t\t\tlayoutDropdown.value = value;\n\n\t\t\t\t\tdocument.body.setAttribute( 'data-speaker-layout', value );\n\n\t\t\t\t\t// Persist locally\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\twindow.localStorage.setItem( 'reveal-speaker-layout', value );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Returns the ID of the most recently set speaker layout\n\t\t\t\t * or our default layout if none has been set.\n\t\t\t\t */\n\t\t\t\tfunction getLayout() {\n\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\tvar layout = window.localStorage.getItem( 'reveal-speaker-layout' );\n\t\t\t\t\t\tif( layout ) {\n\t\t\t\t\t\t\treturn layout;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Default to the first record in the layouts hash\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\treturn id;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction supportsLocalStorage() {\n\n\t\t\t\t\ttry {\n\t\t\t\t\t\tlocalStorage.setItem('test', 'test');\n\t\t\t\t\t\tlocalStorage.removeItem('test');\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t\tcatch( e ) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction zeroPadInteger( num ) {\n\n\t\t\t\t\tvar str = '00' + parseInt( num );\n\t\t\t\t\treturn str.substring( str.length - 2 );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Limits the frequency at which a function can be called.\n\t\t\t\t */\n\t\t\t\tfunction debounce( fn, ms ) {\n\n\t\t\t\t\tvar lastTime = 0,\n\t\t\t\t\t\ttimeout;\n\n\t\t\t\t\treturn function() {\n\n\t\t\t\t\t\tvar args = arguments;\n\t\t\t\t\t\tvar context = this;\n\n\t\t\t\t\t\tclearTimeout( timeout );\n\n\t\t\t\t\t\tvar timeSinceLastCall = Date.now() - lastTime;\n\t\t\t\t\t\tif( timeSinceLastCall > ms ) {\n\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\ttimeout = setTimeout( function() {\n\t\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t\t}, ms - timeSinceLastCall );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t})();\n\n\t\t<\/script>\n\t</body>\n</html>"),
            c ? (o = setInterval(function() {
                c.postMessage(JSON.stringify({
                    namespace: "reveal-notes",
                    type: "connect",
                    url: window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search,
                    state: s.getState()
                }), "*")
            }, 500),
            window.addEventListener("message", function(t) {
                var e, n, r, i, a = JSON.parse(t.data);
                a && "reveal-notes" === a.namespace && "connected" === a.type && (clearInterval(o),
                s.on("slidechanged", l),
                s.on("fragmentshown", l),
                s.on("fragmenthidden", l),
                s.on("overviewhidden", l),
                s.on("overviewshown", l),
                s.on("paused", l),
                s.on("resumed", l),
                l()),
                a && "reveal-notes" === a.namespace && "call" === a.type && (e = a.methodName,
                n = a.arguments,
                r = a.callId,
                i = s[e].apply(s, n),
                c.postMessage(JSON.stringify({
                    namespace: "reveal-notes",
                    type: "return",
                    result: i,
                    callId: r
                }), "*"))
            })) : alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.")) : c.focus()
        }
        window.marked = yi
console.log(window.marked)
        return {
            id: "notes",
            init: function(t) {
                s = t,
                /receiver/i.test(window.location.search) || (null !== window.location.search.match(/(\?|\&)notes/gi) && e(),
                s.addKeyBinding({
                    keyCode: 83,
                    key: "S",
                    description: "Speaker notes view"
                }, function() {
                    e()
                }))
            },
            open: e
        }
    }
});
