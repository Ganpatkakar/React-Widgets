(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(3678)}])},329:function(n,t,o){"use strict";o.d(t,{Z:function(){return c}});var e=o(5893),i=o(1664),r=o(2540),a=o.n(r),s=o(1163),l=function(n){var t=n.list,o=(0,s.useRouter)();return(0,e.jsx)("div",{className:a().topnav,children:t.map((function(n){return(0,e.jsx)("li",{className:"".concat(a().navItem," ").concat(o.pathname==n.link?a().active:""),children:(0,e.jsx)(i.default,{href:n.link,children:n.name})},n.name)}))})},p=[{link:"/",name:"Home"},{link:"/about",name:"About"}],c=function(){return(0,e.jsx)(l,{list:p})}},2968:function(n,t,o){"use strict";o.d(t,{Z:function(){return m}});var e=o(5893),i=o(9008),r=o(214),a=o.n(r),s=o(329),l=(o(3398),o(1664)),p=o(2012),c=o.n(p);function d(n){var t=n.sideNav;return(0,e.jsx)(e.Fragment,{children:t.map((function(n){var t=n.link,o=n.name;return(0,e.jsx)("li",{className:c().sidebarListItem,children:(0,e.jsx)(l.default,{href:t,children:o})},o)}))})}var u=function(){return(0,e.jsx)("div",{className:c().sidebarContainer,children:(0,e.jsx)("ul",{className:c().sidebarList,children:(0,e.jsx)(d,{sideNav:[{link:"/home/tooltip",name:"Tooltip"},{link:"/home/carousel",name:"Carousel"},{link:"/home/datatable",name:"DataTable"}]})})})};function m(n){var t=n.children;return(0,e.jsxs)("div",{className:a().container,children:[(0,e.jsxs)(i.default,{children:[(0,e.jsx)("title",{children:"Create Next App"}),(0,e.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,e.jsx)(s.Z,{}),(0,e.jsx)(u,{}),(0,e.jsx)("main",{className:a().main,children:t}),(0,e.jsx)("footer",{className:a().footer})]})}},3398:function(n,t,o){"use strict";o.d(t,{Z:function(){return p}});var e=o(5893),i=o(5531),r=o.n(i);var a=function(n){var t,o=n.children,i=n.text,a=n.position,s=function(n){switch(n){case"top":return"top";case"left":return"left";case"right":return"right";case"bottom":default:return"bottom"}}(a=null===(t=a.toString())||void 0===t?void 0:t.toLowerCase());return(0,e.jsxs)("span",{className:r().tooltipContainer,children:[o,(0,e.jsx)("span",{className:"".concat(r().toolTipText," ").concat(r()[s]),children:i})]})},s=o(3483),l=o(4283),p=function(){var n="Lorum ipsum Lorum ipsum Lorum ipsum content";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a,{text:n,position:"top",children:(0,e.jsx)("div",{children:"Tooltip render on top"})}),(0,e.jsx)(a,{text:n,position:"left",children:(0,e.jsx)("div",{children:"Tooltip render on left"})}),(0,e.jsx)(a,{text:n,position:"right",children:(0,e.jsx)("div",{children:"Tooltip render on right"})}),(0,e.jsx)(a,{text:n,position:"bottom",children:(0,e.jsx)("div",{children:"Tooltip render on bottom"})}),(0,e.jsx)("h1",{children:"Import Tooltip Component"}),(0,e.jsx)("p",{children:"Import tooltip component to render tooltip. Tooltip component will require to pass text, position and chidren component"}),(0,e.jsx)(s.Z,{language:"javascript",style:l.LH,children:'\n  import Tooltip from "./ToolTip/Tooltip.component";\n\n  function RenderToolTip() {\n    return (\n      <Tooltip text={tooltipContent} position="top">\n        <div>Tooltip render on top</div>\n      </Tooltip>\n    )\n  }\n  '}),(0,e.jsx)("h1",{children:"Tooltip Component"}),(0,e.jsx)(s.Z,{language:"javascript",style:l.LH,children:"\n  const Tooltip = ({ children, text, position }) => {\n    position = position.toString()?.toLowerCase();\n    const toolTipPosition = getPositionClassName(position);\n    return (\n      <span className={tooltipContainer}>\n        {children}\n        <span className={toolTipText position}>{text}</span>\n      </span>\n    );\n  }\n\n  export default Tooltip;"}),(0,e.jsx)("h1",{children:"Add styling for tooltip"}),(0,e.jsx)(s.Z,{language:"css",style:l.LH,children:'\n  .tooltipContainer {\n    position: relative;\n  \n    .toolTipText {\n      visibility: hidden;\n      width: 180px;\n      position: absolute;\n      background-color: #555;\n      color: #fff;\n      padding: 5px;\n      border-radius: 5px;\n      opacity: 0;\n      transition: opacity 0.3s;\n      z-index: 1;\n  \n      &::after {\n        content: "";\n        position: absolute;\n        border-width: 7px;\n        border-style: solid;\n      }\n    }\n  \n    &:hover .toolTipText{\n      visibility: visible;\n      opacity: 1;\n    }\n  \n    .toolTipText.top {\n      bottom: 130%;\n  \n      &::after {\n        top: 100%;\n        border-color: #555 transparent transparent transparent;\n        left: 50%;\n        transform: translate(-50%, 0);\n      }\n    }\n  \n    .toolTipText.bottom {\n      top: 130%;\n          \n      &::after {\n        bottom: 100%;\n        top: auto;\n        border-color: transparent transparent #555 transparent;\n        left: 50%;\n        transform: translate(-50%, 0);\n      }\n    }\n    \n    .toolTipText.left {\n      right: 100%;\n      transform: translate(-5%, -50%);\n      top: 50%;\n  \n      &::after {\n        left: 100%;\n        border-color: transparent transparent transparent #555;\n        top: 50%;\n        transform: translate(0%, -50%);\n      }\n    }\n    \n    .toolTipText.right {\n      left: 100%;\n      transform: translate(5%, -50%);\n      top: 50%;\n  \n      &::after {\n        right: 100%;\n        border-color: transparent #555 transparent transparent ;\n        top: 50%;\n        transform: translate(0, -50%);\n      }\n    }\n  }\n  '})]})}},3678:function(n,t,o){"use strict";o.r(t),o.d(t,{default:function(){return a}});var e=o(5893),i=o(3398),r=o(2968);function a(){return(0,e.jsx)(r.Z,{children:(0,e.jsx)(i.Z,{})})}},214:function(n){n.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},2540:function(n){n.exports={topnav:"Navbar_topnav__GjXFB",navItem:"Navbar_navItem__Y__ml",active:"Navbar_active__cXj00"}},2012:function(n){n.exports={sidebarContainer:"sidebar_sidebarContainer__6JX8d",sidebarList:"sidebar_sidebarList__yDe6E",sidebarListItem:"sidebar_sidebarListItem__2q_OC"}},5531:function(n){n.exports={tooltipContainer:"Tooltip_tooltipContainer__e05oa",toolTipText:"Tooltip_toolTipText__2sIdK",top:"Tooltip_top__Z6uyI",bottom:"Tooltip_bottom__XXUNO",left:"Tooltip_left__Ik0sM",right:"Tooltip_right__9sj5t"}}},function(n){n.O(0,[602,774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);