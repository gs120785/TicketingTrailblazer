! function(t) {
    var o = {};

    function u(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, u), n.l = !0, n.exports
    }
    u.m = t, u.c = o, u.d = function(e, n, t) {
        u.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, u.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, u.t = function(n, e) {
        if (1 & e && (n = u(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var t = Object.create(null);
        if (u.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var o in n) u.d(t, o, function(e) {
                return n[e]
            }.bind(null, o));
        return t
    }, u.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return u.d(n, "a", n), n
    }, u.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, u.p = "./", u(u.s = 15)
}([function(e, n, t) {
    "use strict";
    var o = t(1),
        o = t(2);

    function u(e, n) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    o = function() {
        function n() {
            ! function(e) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this)
        }
        var e, t, o;
        return e = n, o = [{
            key: "getWebp",
            value: function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d")) && 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
            }
        }, {
            key: "setWebpClass",
            value: function() {
                var e = this.getWebp();
                document.documentElement.classList.add(e ? "webp" : "no-webp")
            }
        }, {
            key: "init",
            value: function() {
                this.setWebpClass()
            }
        }], (t = null) && u(e.prototype, t), o && u(e, o), n
    }();
    n.a = o
}, function(e, n, t) {}, function(e, n, t) {}, function(e, n, t) {}, , function(e, n, t) {}, function(e, n, t) {}, function(e, n, t) {}, function(e, n, t) {}, function(e, n, t) {}, function(e, n, t) {}, , , , , function(e, n, t) {
    "use strict";
    t.r(n);
    var o = t(0);
    t(5);

    function u(e, n) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function r(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }
    n = function() {
        function n() {
            ! function(e) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this)
        }
        var e, t, o;
        return e = n, o = [{
            key: "init",
            value: function() {
                var e = this;
                n.menuButton.addEventListener("click", function() {
                    e.menuElement.classList.contains(e.menuActiveClass) ? (document.documentElement.classList.remove("no-scroll"), e.menuElement.classList.remove(e.menuActiveClass), e.menuButton.classList.remove(e.menuButtonActiveClass)) : (window.scrollTo(0, 0), document.documentElement.classList.add("no-scroll"), e.menuElement.classList.add(e.menuActiveClass), e.menuButton.classList.add(e.menuButtonActiveClass))
                }, {
                    passive: !0
                })
            }
        }], (t = null) && u(e.prototype, t), o && u(e, o), n
    }();
    r(n, "menuActiveClass", "header__menu--active"), r(n, "menuButtonActiveClass", "burger--active"), r(n, "menuElement", document.querySelector(".header__menu")), r(n, "menuButton", document.querySelector("[data-action=show-menu]"));
    var i = n;
    t(6), t(7), t(8), t(9), t(10), t(3);
    document.addEventListener("DOMContentLoaded", function() {
        o.a.init(), i.init()
    })
}]);