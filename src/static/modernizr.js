/*! modernizr 3.13.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backdropfilter-bgpositionxy-bgsizecover-borderradius-boxshadow-boxsizing-canvas-cssanimations-csscalc-cssgradients-csspointerevents-csstransforms-csstransforms3d-csstransitions-cssvhunit-fontface-intersectionobserver-mediaqueries-opacity-placeholder-requestanimationframe-rgba-svg-textareamaxlength-touchevents-webanimations-willchange-setclasses-shiv !*/
!(function (e, t, n, r) {
  function a(e, t) {
    return typeof e === t;
  }
  function o() {
    return 'function' != typeof n.createElement
      ? n.createElement(arguments[0])
      : S
      ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function i(e, t) {
    return !!~('' + e).indexOf(t);
  }
  function s() {
    var e = n.body;
    return e || ((e = o(S ? 'svg' : 'body')), (e.fake = !0)), e;
  }
  function l(e, t, r, a) {
    var i,
      l,
      c,
      u,
      d = 'modernizr',
      f = o('div'),
      p = s();
    if (parseInt(r, 10)) for (; r--; ) (c = o('div')), (c.id = a ? a[r] : d + (r + 1)), f.appendChild(c);
    return (
      (i = o('style')),
      (i.type = 'text/css'),
      (i.id = 's' + d),
      (p.fake ? p : f).appendChild(i),
      p.appendChild(f),
      i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(n.createTextNode(e)),
      (f.id = d),
      p.fake &&
        ((p.style.background = ''),
        (p.style.overflow = 'hidden'),
        (u = T.style.overflow),
        (T.style.overflow = 'hidden'),
        T.appendChild(p)),
      (l = t(f, e)),
      p.fake && p.parentNode
        ? (p.parentNode.removeChild(p), (T.style.overflow = u), T.offsetHeight)
        : f.parentNode.removeChild(f),
      !!l
    );
  }
  function c(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return '-' + t.toLowerCase();
      })
      .replace(/^ms-/, '-ms-');
  }
  function u(e, n, r) {
    var a;
    if ('getComputedStyle' in t) {
      a = getComputedStyle.call(t, e, n);
      var o = t.console;
      if (null !== a) r && (a = a.getPropertyValue(r));
      else if (o) {
        var i = o.error ? 'error' : 'log';
        o[i].call(o, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
      }
    } else a = !n && e.currentStyle && e.currentStyle[r];
    return a;
  }
  function d(e, n) {
    var a = e.length;
    if ('CSS' in t && 'supports' in t.CSS) {
      for (; a--; ) if (t.CSS.supports(c(e[a]), n)) return !0;
      return !1;
    }
    if ('CSSSupportsRule' in t) {
      for (var o = []; a--; ) o.push('(' + c(e[a]) + ':' + n + ')');
      return (
        (o = o.join(' or ')),
        l('@supports (' + o + ') { #modernizr { position: absolute; } }', function (e) {
          return 'absolute' === u(e, null, 'position');
        })
      );
    }
    return r;
  }
  function f(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, '');
  }
  function p(e, t, n, s) {
    function l() {
      u && (delete _.style, delete _.modElem);
    }
    if (((s = !a(s, 'undefined') && s), !a(n, 'undefined'))) {
      var c = d(e, n);
      if (!a(c, 'undefined')) return c;
    }
    for (var u, p, m, h, g, v = ['modernizr', 'tspan', 'samp']; !_.style && v.length; )
      (u = !0), (_.modElem = o(v.shift())), (_.style = _.modElem.style);
    for (m = e.length, p = 0; p < m; p++)
      if (((h = e[p]), (g = _.style[h]), i(h, '-') && (h = f(h)), _.style[h] !== r)) {
        if (s || a(n, 'undefined')) return l(), 'pfx' !== t || h;
        try {
          _.style[h] = n;
        } catch (e) {}
        if (_.style[h] !== g) return l(), 'pfx' !== t || h;
      }
    return l(), !1;
  }
  function m(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function h(e, t, n) {
    var r;
    for (var o in e)
      if (e[o] in t) return !1 === n ? e[o] : ((r = t[e[o]]), a(r, 'function') ? m(r, n || t) : r);
    return !1;
  }
  function g(e, t, n, r, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + ' ' + w.join(i + ' ') + i).split(' ');
    return a(t, 'string') || a(t, 'undefined')
      ? p(s, t, r, o)
      : ((s = (e + ' ' + k.join(i + ' ') + i).split(' ')), h(s, t, n));
  }
  function v(e, t, n) {
    return g(e, r, r, t, n);
  }
  var y = [],
    x = {
      _version: '3.13.0',
      _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        y.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        y.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = x), (Modernizr = new Modernizr());
  var b = [],
    T = n.documentElement,
    S = 'svg' === T.nodeName.toLowerCase();
  S ||
    (function (e, t) {
      function n(e, t) {
        var n = e.createElement('p'),
          r = e.getElementsByTagName('head')[0] || e.documentElement;
        return (n.innerHTML = 'x<style>' + t + '</style>'), r.insertBefore(n.lastChild, r.firstChild);
      }
      function r() {
        var e = y.elements;
        return 'string' == typeof e ? e.split(' ') : e;
      }
      function a(e, t) {
        var n = y.elements;
        'string' != typeof n && (n = n.join(' ')),
          'string' != typeof e && (e = e.join(' ')),
          (y.elements = n + ' ' + e),
          c(t);
      }
      function o(e) {
        var t = v[e[h]];
        return t || ((t = {}), g++, (e[h] = g), (v[g] = t)), t;
      }
      function i(e, n, r) {
        if ((n || (n = t), d)) return n.createElement(e);
        r || (r = o(n));
        var a;
        return (
          (a = r.cache[e]
            ? r.cache[e].cloneNode()
            : m.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !a.canHaveChildren || p.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        );
      }
      function s(e, n) {
        if ((e || (e = t), d)) return e.createDocumentFragment();
        n = n || o(e);
        for (var a = n.frag.cloneNode(), i = 0, s = r(), l = s.length; i < l; i++) a.createElement(s[i]);
        return a;
      }
      function l(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return y.shivMethods ? i(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            'h,f',
            'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
                }) +
              ');return n}',
          )(y, t.frag));
      }
      function c(e) {
        e || (e = t);
        var r = o(e);
        return (
          !y.shivCSS ||
            u ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}',
            )),
          d || l(e, r),
          e
        );
      }
      var u,
        d,
        f = e.html5 || {},
        p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        m =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        h = '_html5shiv',
        g = 0,
        v = {};
      !(function () {
        try {
          var e = t.createElement('a');
          (e.innerHTML = '<xyz></xyz>'),
            (u = 'hidden' in e),
            (d =
              1 == e.childNodes.length ||
              (function () {
                t.createElement('a');
                var e = t.createDocumentFragment();
                return (
                  void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                );
              })());
        } catch (e) {
          (u = !0), (d = !0);
        }
      })();
      var y = {
        elements:
          f.elements ||
          'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
        version: '3.7.3',
        shivCSS: !1 !== f.shivCSS,
        supportsUnknownElements: d,
        shivMethods: !1 !== f.shivMethods,
        type: 'default',
        shivDocument: c,
        createElement: i,
        createDocumentFragment: s,
        addElements: a,
      };
      (e.html5 = y), c(t), 'object' == typeof module && module.exports && (module.exports = y);
    })(void 0 !== t ? t : this, n),
    Modernizr.addTest('canvas', function () {
      var e = o('canvas');
      return !(!e.getContext || !e.getContext('2d'));
    });
  var C = 'Moz O ms Webkit',
    w = x._config.usePrefixes ? C.split(' ') : [];
  x._cssomPrefixes = w;
  var E = { elem: o('modernizr') };
  Modernizr._q.push(function () {
    delete E.elem;
  });
  var _ = { style: E.elem.style };
  Modernizr._q.unshift(function () {
    delete _.style;
  });
  var k = x._config.usePrefixes ? C.toLowerCase().split(' ') : [];
  (x._domPrefixes = k), (x.testAllProps = g);
  var z = function (e) {
    var n,
      a = j.length,
      o = t.CSSRule;
    if (void 0 === o) return r;
    if (!e) return !1;
    if (((e = e.replace(/^@/, '')), (n = e.replace(/-/g, '_').toUpperCase() + '_RULE') in o)) return '@' + e;
    for (var i = 0; i < a; i++) {
      var s = j[i];
      if (s.toUpperCase() + '_' + n in o) return '@-' + s.toLowerCase() + '-' + e;
    }
    return !1;
  };
  x.atRule = z;
  var N = (x.prefixed = function (e, t, n) {
    return 0 === e.indexOf('@') ? z(e) : (-1 !== e.indexOf('-') && (e = f(e)), t ? g(e, t, n) : g(e, 'pfx'));
  });
  Modernizr.addTest('requestanimationframe', !!N('requestAnimationFrame', t), { aliases: ['raf'] }),
    Modernizr.addTest(
      'svg',
      !!n.createElementNS && !!n.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect,
    );
  var j = x._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', ''];
  x._prefixes = j;
  var P = (function () {
    var e = t.matchMedia || t.msMatchMedia;
    return e
      ? function (t) {
          var n = e(t);
          return (n && n.matches) || !1;
        }
      : function (e) {
          var t = !1;
          return (
            l('@media ' + e + ' { #modernizr { position: absolute; } }', function (e) {
              t = 'absolute' === u(e, null, 'position');
            }),
            t
          );
        };
  })();
  (x.mq = P),
    Modernizr.addTest('touchevents', function () {
      if ('ontouchstart' in t || t.TouchEvent || (t.DocumentTouch && n instanceof DocumentTouch)) return !0;
      var e = ['(', j.join('touch-enabled),('), 'heartz', ')'].join('');
      return P(e);
    }),
    Modernizr.addTest('webanimations', 'animate' in o('div')),
    (x.testAllProps = v),
    Modernizr.addTest('cssanimations', v('animationName', 'a', !0)),
    Modernizr.addTest('backdropfilter', v('backdropFilter')),
    Modernizr.addTest('bgpositionxy', function () {
      return v('backgroundPositionX', '3px', !0) && v('backgroundPositionY', '5px', !0);
    }),
    Modernizr.addTest('bgsizecover', v('backgroundSize', 'cover')),
    Modernizr.addTest('borderradius', v('borderRadius', '0px', !0)),
    Modernizr.addTest('boxshadow', v('boxShadow', '1px 1px', !0)),
    Modernizr.addTest(
      'boxsizing',
      v('boxSizing', 'border-box', !0) && (n.documentMode === r || n.documentMode > 7),
    ),
    Modernizr.addTest('csscalc', function () {
      var e = o('a');
      return (e.style.cssText = 'width:' + j.join('calc(10px);width:')), !!e.style.length;
    });
  var F = (x.testStyles = l);
  !(function () {
    var e = navigator.userAgent,
      t = e.match(/w(eb)?osbrowser/gi),
      n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
    return t || n;
  })()
    ? F('@font-face {font-family:"font";src:url("https://")}', function (e, t) {
        var r = n.getElementById('smodernizr'),
          a = r.sheet || r.styleSheet,
          o = a ? (a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || '') : '',
          i = /src/i.test(o) && 0 === o.indexOf(t.split(' ')[0]);
        Modernizr.addTest('fontface', i);
      })
    : Modernizr.addTest('fontface', !1),
    Modernizr.addTest('cssgradients', function () {
      for (var e, t = 'background-image:', n = '', r = 0, a = j.length - 1; r < a; r++)
        (e = 0 === r ? 'to ' : ''), (n += t + j[r] + 'linear-gradient(' + e + 'left top, #9f9, white);');
      Modernizr._config.usePrefixes &&
        (n += t + '-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));');
      var i = o('a'),
        s = i.style;
      return (s.cssText = n), ('' + s.backgroundImage).indexOf('gradient') > -1;
    }),
    Modernizr.addTest('mediaqueries', P('only all')),
    Modernizr.addTest('opacity', function () {
      var e = o('a').style;
      return (e.cssText = j.join('opacity:.55;')), /^0.55$/.test(e.opacity);
    }),
    Modernizr.addTest('csspointerevents', function () {
      var e = o('a').style;
      return (e.cssText = 'pointer-events:auto'), 'auto' === e.pointerEvents;
    }),
    Modernizr.addTest('rgba', function () {
      var e = o('a').style;
      return (
        (e.cssText = 'background-color:rgba(150,255,150,.5)'), ('' + e.backgroundColor).indexOf('rgba') > -1
      );
    }),
    Modernizr.addTest('csstransforms', function () {
      return -1 === navigator.userAgent.indexOf('Android 2.') && v('transform', 'scale(1)', !0);
    });
  var M = 'CSS' in t && 'supports' in t.CSS,
    R = 'supportsCSS' in t;
  Modernizr.addTest('supports', M || R),
    Modernizr.addTest('csstransforms3d', function () {
      return !!v('perspective', '1px', !0);
    }),
    Modernizr.addTest('csstransitions', v('transition', 'all', !0)),
    F('#modernizr { height: 50vh; max-height: 10px; }', function (e) {
      var t = parseInt(u(e, null, 'height'), 10);
      Modernizr.addTest('cssvhunit', 10 === t);
    }),
    Modernizr.addTest('willchange', 'willChange' in T.style),
    Modernizr.addTest('intersectionobserver', 'IntersectionObserver' in t),
    Modernizr.addTest('placeholder', 'placeholder' in o('input') && 'placeholder' in o('textarea')),
    Modernizr.addTest('textareamaxlength', !!('maxLength' in o('textarea'))),
    (function () {
      var e, t, n, r, o, i, s;
      for (var l in y)
        if (y.hasOwnProperty(l)) {
          if (
            ((e = []),
            (t = y[l]),
            t.name &&
              (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          )
            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
          for (r = a(t.fn, 'function') ? t.fn() : t.fn, o = 0; o < e.length; o++)
            (i = e[o]),
              (s = i.split('.')),
              1 === s.length
                ? (Modernizr[s[0]] = r)
                : ((Modernizr[s[0]] && (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean)) ||
                    (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                  (Modernizr[s[0]][s[1]] = r)),
              b.push((r ? '' : 'no-') + s.join('-'));
        }
    })(),
    (function (e) {
      var t = T.className,
        n = Modernizr._config.classPrefix || '';
      if ((S && (t = t.baseVal), Modernizr._config.enableJSClass)) {
        var r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
        t = t.replace(r, '$1' + n + 'js$2');
      }
      Modernizr._config.enableClasses &&
        (e.length > 0 && (t += ' ' + n + e.join(' ' + n)), S ? (T.className.baseVal = t) : (T.className = t));
    })(b),
    delete x.addTest,
    delete x.addAsyncTest;
  for (var O = 0; O < Modernizr._q.length; O++) Modernizr._q[O]();
  e.Modernizr = Modernizr;
})(window, window, document);
