(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8961:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(414)}])},329:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),o=t(1664),a=t(2540),i=t.n(a),c=t(1163),u=function(e){var n=e.list,t=(0,c.useRouter)();return(0,r.jsx)("div",{className:i().topnav,children:n.map((function(e){return(0,r.jsx)("li",{className:"".concat(i().navItem," ").concat(t.pathname==e.link?i().active:""),children:(0,r.jsx)(o.default,{href:e.link,children:e.name})},e.name)}))})},l=[{link:"/",name:"Home"},{link:"/about",name:"About"}],s=function(){return(0,r.jsx)(u,{list:l})}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(6273),c=t(387),u=t(7190);var l={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=r(i.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?i.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=f.href,v=f.as,p=e.children,_=e.replace,h=e.shallow,m=e.scroll,y=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,x=r(u.useIntersection({rootMargin:"200px"}),2),g=x[0],j=x[1],w=a.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);a.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+v+(n?"%"+n:"")];e&&!r&&s(o,d,v,{locale:n})}),[v,d,j,y,t,o]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:u,scroll:c}))}(e,o,d,v,_,h,m,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&s(o,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof y?y:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(v,k,o&&o.locales,o&&o.domainLocales);E.href=L||i.addBasePath(i.addLocale(v,k,o&&o.defaultLocale))}return a.default.cloneElement(n,E)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,u=o.useRef(),l=r(o.useState(!1),2),s=l[0],f=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||s||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),a=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},414:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(9008),a=t(214),i=t.n(a),c=t(329);n.default=function(){return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"About Page"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:i().main,children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("div",{children:"About Page"})]}),(0,r.jsx)("footer",{className:i().footer})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},2540:function(e){e.exports={topnav:"Navbar_topnav__GjXFB",navItem:"Navbar_navItem__Y__ml",active:"Navbar_active__cXj00"}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return n=8961,e(e.s=n);var n}));var n=e.O();_N_E=n}]);