(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{1251:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/carousel",function(){return e(1465)}])},329:function(n,t,e){"use strict";e.d(t,{Z:function(){return d}});var o=e(5893),i=e(1664),r=e(2540),s=e.n(r),a=e(1163),l=function(n){var t=n.list,e=(0,a.useRouter)();return(0,o.jsx)("div",{className:s().topnav,children:t.map((function(n){return(0,o.jsx)("li",{className:"".concat(s().navItem," ").concat(e.pathname==n.link?s().active:""),children:(0,o.jsx)(i.default,{href:n.link,children:n.name})},n.name)}))})},c=[{link:"/",name:"Home"},{link:"/about",name:"About"}],d=function(){return(0,o.jsx)(l,{list:c})}},2968:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var o=e(5893),i=e(9008),r=e(214),s=e.n(r),a=e(329),l=(e(3398),e(1664)),c=e(2012),d=e.n(c);function u(n){var t=n.sideNav;return(0,o.jsx)(o.Fragment,{children:t.map((function(n){var t=n.link,e=n.name;return(0,o.jsx)("li",{className:d().sidebarListItem,children:(0,o.jsx)(l.default,{href:t,children:e})},e)}))})}var p=function(){return(0,o.jsx)("div",{className:d().sidebarContainer,children:(0,o.jsx)("ul",{className:d().sidebarList,children:(0,o.jsx)(u,{sideNav:[{link:"/home/tooltip",name:"Tooltip"},{link:"/home/carousel",name:"Carousel"},{link:"/home/datatable",name:"DataTable"}]})})})};function m(n){var t=n.children;return(0,o.jsxs)("div",{className:s().container,children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:"Create Next App"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(a.Z,{}),(0,o.jsx)(p,{}),(0,o.jsx)("main",{className:s().main,children:t}),(0,o.jsx)("footer",{className:s().footer})]})}},3398:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var o=e(5893),i=e(5531),r=e.n(i);var s=function(n){var t,e=n.children,i=n.text,s=n.position,a=function(n){switch(n){case"top":return"top";case"left":return"left";case"right":return"right";case"bottom":default:return"bottom"}}(s=null===(t=s.toString())||void 0===t?void 0:t.toLowerCase());return(0,o.jsxs)("span",{className:r().tooltipContainer,children:[e,(0,o.jsx)("span",{className:"".concat(r().toolTipText," ").concat(r()[a]),children:i})]})},a=e(3483),l=e(4283),c=function(){var n="Lorum ipsum Lorum ipsum Lorum ipsum content";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{text:n,position:"top",children:(0,o.jsx)("div",{children:"Tooltip render on top"})}),(0,o.jsx)(s,{text:n,position:"left",children:(0,o.jsx)("div",{children:"Tooltip render on left"})}),(0,o.jsx)(s,{text:n,position:"right",children:(0,o.jsx)("div",{children:"Tooltip render on right"})}),(0,o.jsx)(s,{text:n,position:"bottom",children:(0,o.jsx)("div",{children:"Tooltip render on bottom"})}),(0,o.jsx)("h1",{children:"Import Tooltip Component"}),(0,o.jsx)("p",{children:"Import tooltip component to render tooltip. Tooltip component will require to pass text, position and chidren component"}),(0,o.jsx)(a.Z,{language:"javascript",style:l.LH,children:'\n  import Tooltip from "./ToolTip/Tooltip.component";\n\n  function RenderToolTip() {\n    return (\n      <Tooltip text={tooltipContent} position="top">\n        <div>Tooltip render on top</div>\n      </Tooltip>\n    )\n  }\n  '}),(0,o.jsx)("h1",{children:"Tooltip Component"}),(0,o.jsx)(a.Z,{language:"javascript",style:l.LH,children:"\n  const Tooltip = ({ children, text, position }) => {\n    position = position.toString()?.toLowerCase();\n    const toolTipPosition = getPositionClassName(position);\n    return (\n      <span className={tooltipContainer}>\n        {children}\n        <span className={toolTipText position}>{text}</span>\n      </span>\n    );\n  }\n\n  export default Tooltip;"}),(0,o.jsx)("h1",{children:"Add styling for tooltip"}),(0,o.jsx)(a.Z,{language:"css",style:l.LH,children:'\n  .tooltipContainer {\n    position: relative;\n  \n    .toolTipText {\n      visibility: hidden;\n      width: 180px;\n      position: absolute;\n      background-color: #555;\n      color: #fff;\n      padding: 5px;\n      border-radius: 5px;\n      opacity: 0;\n      transition: opacity 0.3s;\n      z-index: 1;\n  \n      &::after {\n        content: "";\n        position: absolute;\n        border-width: 7px;\n        border-style: solid;\n      }\n    }\n  \n    &:hover .toolTipText{\n      visibility: visible;\n      opacity: 1;\n    }\n  \n    .toolTipText.top {\n      bottom: 130%;\n  \n      &::after {\n        top: 100%;\n        border-color: #555 transparent transparent transparent;\n        left: 50%;\n        transform: translate(-50%, 0);\n      }\n    }\n  \n    .toolTipText.bottom {\n      top: 130%;\n          \n      &::after {\n        bottom: 100%;\n        top: auto;\n        border-color: transparent transparent #555 transparent;\n        left: 50%;\n        transform: translate(-50%, 0);\n      }\n    }\n    \n    .toolTipText.left {\n      right: 100%;\n      transform: translate(-5%, -50%);\n      top: 50%;\n  \n      &::after {\n        left: 100%;\n        border-color: transparent transparent transparent #555;\n        top: 50%;\n        transform: translate(0%, -50%);\n      }\n    }\n    \n    .toolTipText.right {\n      left: 100%;\n      transform: translate(5%, -50%);\n      top: 50%;\n  \n      &::after {\n        right: 100%;\n        border-color: transparent #555 transparent transparent ;\n        top: 50%;\n        transform: translate(0, -50%);\n      }\n    }\n  }\n  '})]})}},1465:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return h}});var o=e(5893),i=e(7294),r=e(6092),s=e.n(r);function a(n){var t=n.carouselList,e=n.container,r=n.showDotControls,a=(0,i.useState)(0),l=a[0],c=a[1],d=function(n,t){var e={};return n&&(e.width=n),t&&(e.height=t),e}(e.width,e.height),u=function(n){var e=n+l;e>t.length-1?c(0):c(e<0?t.length-1:e)};return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:s().carouselContainer,style:d,children:[t.map((function(n,t){if(t===l){var e=n.backgroundImage,i=n.backgroundColor,r=n.textSection,a=n.mediaSection,c=n.textColor,d=a.image,u=a.video,p=e?{backgroundImage:"url(".concat(e,")"),backgroundSize:"cover"}:{background:i},m=c?{color:c}:{};return(0,o.jsxs)("div",{className:s().carouselSlide,style:p,children:[r&&(0,o.jsx)("div",{className:s().carouselTextSection,style:m,children:r}),a?(0,o.jsx)("div",{className:s().carouselMediaSection,children:d&&(0,o.jsx)("img",{src:d,alt:"carousel-image",className:s().mediaControls})||u&&(0,o.jsx)("video",{src:u,controls:!0,className:s().mediaControls})}):null]},t)}})),(0,o.jsxs)("div",{className:s().carouselControls,children:[(0,o.jsx)("div",{className:s().carouselControlsLeft,onClick:function(){return u(-1)},children:"\u276e"}),(0,o.jsx)("div",{className:s().carouselControlsRight,onClick:function(){return u(1)},children:"\u276f"})]}),r&&(0,o.jsx)("div",{className:s().carouselDotControls,children:t.map((function(n,t){return(0,o.jsx)("div",{className:"".concat(s().carouselDotControlItem," ").concat(l===t?s().active:""),onClick:function(){c(t)}},t)}))})]})})}var l=e(3483),c=e(4283);function d(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content"}),(0,o.jsx)("button",{style:{width:100,padding:"5px 10px"},onClick:function(){alert("clicked")},children:"Button"})]})}var u=[{backgroundColor:"linear-gradient(to bottom, #336699 18%, #33ccff 100%)",textSection:(0,o.jsx)(d,{}),textColor:"#fff",mediaSection:{image:"https://via.placeholder.com/300x200"}},{backgroundColor:"linear-gradient(to bottom, #663300 18%, #666633 100%)",textSection:"Carousel text section",textColor:"#fff",mediaSection:{video:"https://static.videezy.com/system/resources/previews/000/011/119/original/Videezy_Slideshow_07_Preview.mp4"}},{backgroundImage:"https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",textSection:"Carousel text section",textColor:"#ffffff",mediaSection:{image:"https://via.placeholder.com/300x200"}}];function p(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Render Carousel Component"}),(0,o.jsx)(a,{carouselList:u,container:{width:700,height:300},showDotControls:!0}),(0,o.jsx)("h3",{children:"How to call Carousel component"}),(0,o.jsx)("p",{children:"import tooltip component and call it"}),(0,o.jsx)(l.Z,{language:"javascript",style:c.LH,children:'\n  import Tooltip from "./Carousel/Carousel.component";\n\n  function RenderToolTip() {\n    return (\n      <Carousel carouselList={carouselList} container={{width: 700, height: 300}} showDotControls={true}/>\n    )\n  }\n  '}),(0,o.jsx)("h3",{children:"Carousel list configurations"}),(0,o.jsx)(l.Z,{language:"javascript",style:c.LH,children:'\n  const carouselList = [\n    {\n      backgroundColor: "linear-gradient(to bottom, #336699 18%, #33ccff 100%)",\n      textSection: "Carousel text section",\n      textColor: "#fff",\n      mediaSection: {\n        image: "https://via.placeholder.com/300x200",\n      }\n    },\n    {\n      backgroundColor: "linear-gradient(to bottom, #663300 18%, #666633 100%)",\n      textSection: "Carousel text section",\n      textColor: "#fff",\n      mediaSection: {\n        video: "https://static.videezy.com/system/resources/previews/000/011/119/original/Videezy_Slideshow_07_Preview.mp4"\n      }\n    },\n    {\n      backgroundImage: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",\n      textSection: "Carousel text section",\n      textColor: "#ffffff",\n      mediaSection: {\n        image: "https://via.placeholder.com/300x200",\n      }\n    }\n  ]\n  '}),(0,o.jsx)("h3",{children:"Carousel text section"}),(0,o.jsx)("p",{children:"Carousel text section could be a component and have its own style and actions"}),(0,o.jsx)(l.Z,{language:"javascript",style:c.LH,children:'\n  function TextSectionComponent () {\n\n    const handleOnClick = () => {\n      alert("clicked");\n    }\n  \n    return (\n      <div>\n        <div>Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content</div>\n        <button style={{width: 100, padding: "5px 10px"}} onClick={handleOnClick}>Button</button>\n      </div>\n    )\n  }\n  '}),(0,o.jsx)("p",{children:"To add this with carousel list config simply add it as component call with text section i.e"}),(0,o.jsx)(l.Z,{language:"javascript",style:c.LH,children:"textSection: <TextSectionComponent />,"}),(0,o.jsx)("h3",{children:"Carousel Component implementation"}),(0,o.jsx)("p",{children:"Below is how carousel component is writen, later we add styels to it"}),(0,o.jsx)(l.Z,{language:"javascript",style:c.LH,children:'import { useState } from "react";\nimport styles from "./Carousel.module.scss";\n\nconst getHeightAndWidth = (width, height) => {\n  const res = {}\n  if (width) {\n    res.width = width;\n  }\n  if (height) {\n    res.height = height;\n  }\n  return res;\n}\n\nexport default function Carousel({ carouselList, container, showDotControls }) {\n  const [active, setActive] = useState(0);\n  const {width, height} = container;\n  const containerStyle = getHeightAndWidth(width, height);\n\n  const handleClick = (position) => {\n    const newActive = position + active;\n    if(newActive > carouselList.length - 1) {\n      setActive(0);\n      return;\n    } else if(newActive < 0) {\n      setActive(carouselList.length - 1);\n      return;\n    }\n\n    setActive(newActive);\n  }\n\n  const handleDotClick = (position) => {\n    setActive(position);\n  }\n\n  return (\n    <div>\n      <div className={styles.carouselContainer} style={containerStyle}>\n        {carouselList.map((carouselListImtem, index) => {\n          if(index === active) {\n            const { backgroundImage, backgroundColor, textSection, mediaSection, textColor } = carouselListImtem;\n            const { image, video } = mediaSection;\n            const backgroundStyle = backgroundImage ? {\n              backgroundImage: url("$"{backgroundImage}),\n              backgroundSize: "cover",\n            } : { background: backgroundColor };\n            const textStyle = textColor ? { color: textColor } : {};\n            return (\n              <div key={index} className={styles.carouselSlide} style={backgroundStyle}>\n                {\n                  textSection && (<div className={styles.carouselTextSection} style={textStyle}>{textSection}</div>)\n                }\n                {\n                  mediaSection ? (\n                    <div className={styles.carouselMediaSection}>\n                      {(image && <img src={image} alt="carousel-image" className={styles.mediaControls} />) ||\n                        (video && <video src={video} controls className={styles.mediaControls}/>)}\n                    </div>\n                  ) : null\n                }\n              </div>\n            );\n          }\n        })}\n        <div className={styles.carouselControls}>\n          <div className={styles.carouselControlsLeft} onClick={() => handleClick(-1)}>&#10094;</div>\n          <div className={styles.carouselControlsRight} onClick={() => handleClick(1)}>&#10095;</div>\n        </div>\n        {showDotControls && (\n          <div className={styles.carouselDotControls}>\n            {carouselList.map((carouselListImtem, index) => {\n              return (\n                <div key={index} className={"$"{styles.carouselDotControlItem} `"$"{active === index ? styles.active : ""}} onClick={() => handleDotClick(index)}></div>\n              );\n            })}\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}'}),(0,o.jsx)("h3",{children:"Carousel Component style"}),(0,o.jsx)("p",{children:"Finally add styles for carousel component, which we have already imported in our carousel component implementation"}),(0,o.jsx)(l.Z,{language:"css",style:c.LH,children:".carouselContainer {\n  width: 100%;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n\n  .carouselSlide {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n    padding: 0 2.2rem;\n    display: flex;\n\n    .carouselTextSection {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 1rem;\n    }\n\n    .carouselMediaSection {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      .mediaControls {\n        max-width: 100%;\n        height: auto;\n      }\n    }\n  }\n\n  .carouselControls {\n\n    .carouselControlsLeft, .carouselControlsRight {\n      cursor: pointer;\n      position: absolute;\n      top: 50%;\n      width: auto;\n      transform: translate(0px, -50%);\n      background: rgba(0, 0, 0, .3);\n      padding: 5px 10px;\n      color: white;\n      font-weight: 300;\n      font-size: 18px;\n      transition: 0.6s ease;\n      border-radius: 0 3px 3px 0;\n      user-select: none;\n\n      &:hover {\n        background-color: rgba(0,0,0,0.8);\n      }\n    }\n\n    .carouselControlsRight {\n      right: 0;\n      border-radius: 3px 0 0 3px;\n    }\n  }\n\n  .carouselDotControls {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    height: 25px;\n\n    .carouselDotControlItem {\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      margin: 0 2px;\n      background-color: rgba(0, 0, 0, 0.25);\n      border-radius: 50%;\n      cursor: pointer;\n      transition: background-color 0.6s ease;\n\n      &:hover, &.active {\n        background-color: rgba(0, 0, 0, 0.8);\n      }\n    }\n\n  }\n}"})]})}var m=e(2968);function h(){return(0,o.jsx)(m.Z,{children:(0,o.jsx)(p,{})})}},214:function(n){n.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},6092:function(n){n.exports={carouselContainer:"Carousel_carouselContainer__n0wPP",carouselSlide:"Carousel_carouselSlide__ji4Z_",carouselTextSection:"Carousel_carouselTextSection__GwMXH",carouselMediaSection:"Carousel_carouselMediaSection__9Awun",mediaControls:"Carousel_mediaControls__1BCU6",carouselControls:"Carousel_carouselControls___ztT6",carouselControlsLeft:"Carousel_carouselControlsLeft__vVkT5",carouselControlsRight:"Carousel_carouselControlsRight__jRhLt",carouselDotControls:"Carousel_carouselDotControls__M_ftT",carouselDotControlItem:"Carousel_carouselDotControlItem__K6JqK",active:"Carousel_active__saoO3"}},2540:function(n){n.exports={topnav:"Navbar_topnav__GjXFB",navItem:"Navbar_navItem__Y__ml",active:"Navbar_active__cXj00"}},2012:function(n){n.exports={sidebarContainer:"sidebar_sidebarContainer__6JX8d",sidebarList:"sidebar_sidebarList__yDe6E",sidebarListItem:"sidebar_sidebarListItem__2q_OC"}},5531:function(n){n.exports={tooltipContainer:"Tooltip_tooltipContainer__e05oa",toolTipText:"Tooltip_toolTipText__2sIdK",top:"Tooltip_top__Z6uyI",bottom:"Tooltip_bottom__XXUNO",left:"Tooltip_left__Ik0sM",right:"Tooltip_right__9sj5t"}}},function(n){n.O(0,[602,774,888,179],(function(){return t=1251,n(n.s=t);var t}));var t=n.O();_N_E=t}]);