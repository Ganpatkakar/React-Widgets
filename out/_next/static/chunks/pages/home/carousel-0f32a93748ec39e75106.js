_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1ccW":function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},t.apply(this,arguments)}e.exports=t},"98FW":function(e,n){e.exports=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}},Aiso:function(e,n,t){e.exports=t("dQHF")},bJ2l:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return g}));var o=t("q1tI"),i=t("sZHX"),r=t.n(i),a=t("Aiso"),s=t.n(a),c=t("nKUr");function l(e){var n=e.carouselList,t=e.container,i=e.showDotControls,a=Object(o.useState)(0),l=a[0],d=a[1],u=function(e,n){var t={};return e&&(t.width=e),n&&(t.height=n),t}(t.width,t.height),m=function(e){var t=e+l;t>n.length-1?d(0):d(t<0?n.length-1:t)};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:r.a.carouselContainer,style:u,children:[n.map((function(e,n){if(n===l){var t=e.backgroundImage,o=e.backgroundColor,i=e.textSection,a=e.mediaSection,d=e.textColor,u=a.image,m=a.video,h=t?{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover"}:{background:o},f=d?{color:d}:{};return Object(c.jsxs)("div",{className:r.a.carouselSlide,style:h,children:[i&&Object(c.jsx)("div",{className:r.a.carouselTextSection,style:f,children:i}),a?Object(c.jsx)("div",{className:r.a.carouselMediaSection,children:u&&Object(c.jsx)(s.a,{src:u,alt:"carousel-image",className:r.a.mediaControls})||m&&Object(c.jsx)("video",{src:m,controls:!0,className:r.a.mediaControls})}):null]},n)}})),Object(c.jsxs)("div",{className:r.a.carouselControls,children:[Object(c.jsx)("div",{className:r.a.carouselControlsLeft,onClick:function(){return m(-1)},children:"\u276e"}),Object(c.jsx)("div",{className:r.a.carouselControlsRight,onClick:function(){return m(1)},children:"\u276f"})]}),i&&Object(c.jsx)("div",{className:r.a.carouselDotControls,children:n.map((function(e,n){return Object(c.jsx)("div",{className:"".concat(r.a.carouselDotControlItem," ").concat(l===n?r.a.active:""),onClick:function(){d(n)}},n)}))})]})})}var d=t("uUdh"),u=t("c2c2");function m(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:"Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content"}),Object(c.jsx)("button",{style:{width:100,padding:"5px 10px"},onClick:function(){alert("clicked")},children:"Button"})]})}var h=[{backgroundColor:"linear-gradient(to bottom, #336699 18%, #33ccff 100%)",textSection:Object(c.jsx)(m,{}),textColor:"#fff",mediaSection:{image:"https://via.placeholder.com/300x200"}},{backgroundColor:"linear-gradient(to bottom, #663300 18%, #666633 100%)",textSection:"Carousel text section",textColor:"#fff",mediaSection:{video:"https://static.videezy.com/system/resources/previews/000/011/119/original/Videezy_Slideshow_07_Preview.mp4"}},{backgroundImage:"https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",textSection:"Carousel text section",textColor:"#ffffff",mediaSection:{image:"https://via.placeholder.com/300x200"}}];function f(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Render Carousel Component"}),Object(c.jsx)(l,{carouselList:h,container:{width:700,height:300},showDotControls:!0}),Object(c.jsx)("h3",{children:"How to call Carousel component"}),Object(c.jsx)("p",{children:"import tooltip component and call it"}),Object(c.jsx)(d.a,{language:"javascript",style:u.materialOceanic,children:'\n  import Tooltip from "./Carousel/Carousel.component";\n\n  function RenderToolTip() {\n    return (\n      <Carousel carouselList={carouselList} container={{width: 700, height: 300}} showDotControls={true}/>\n    )\n  }\n  '}),Object(c.jsx)("h3",{children:"Carousel list configurations"}),Object(c.jsx)(d.a,{language:"javascript",style:u.materialOceanic,children:'\n  const carouselList = [\n    {\n      backgroundColor: "linear-gradient(to bottom, #336699 18%, #33ccff 100%)",\n      textSection: "Carousel text section",\n      textColor: "#fff",\n      mediaSection: {\n        image: "https://via.placeholder.com/300x200",\n      }\n    },\n    {\n      backgroundColor: "linear-gradient(to bottom, #663300 18%, #666633 100%)",\n      textSection: "Carousel text section",\n      textColor: "#fff",\n      mediaSection: {\n        video: "https://static.videezy.com/system/resources/previews/000/011/119/original/Videezy_Slideshow_07_Preview.mp4"\n      }\n    },\n    {\n      backgroundImage: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",\n      textSection: "Carousel text section",\n      textColor: "#ffffff",\n      mediaSection: {\n        image: "https://via.placeholder.com/300x200",\n      }\n    }\n  ]\n  '}),Object(c.jsx)("h3",{children:"Carousel text section"}),Object(c.jsx)("p",{children:"Carousel text section could be a component and have its own style and actions"}),Object(c.jsx)(d.a,{language:"javascript",style:u.materialOceanic,children:'\n  function TextSectionComponent () {\n\n    const handleOnClick = () => {\n      alert("clicked");\n    }\n  \n    return (\n      <div>\n        <div>Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content Lorum ipsum Content</div>\n        <button style={{width: 100, padding: "5px 10px"}} onClick={handleOnClick}>Button</button>\n      </div>\n    )\n  }\n  '}),Object(c.jsx)("p",{children:"To add this with carousel list config simply add it as component call with text section i.e"}),Object(c.jsx)(d.a,{language:"javascript",style:u.materialOceanic,children:"textSection: <TextSectionComponent />,"}),Object(c.jsx)("h3",{children:"Carousel Component implementation"}),Object(c.jsx)("p",{children:"Below is how carousel component is writen, later we add styels to it"}),Object(c.jsx)(d.a,{language:"javascript",style:u.materialOceanic,children:'import { useState } from "react";\nimport styles from "./Carousel.module.scss";\n\nconst getHeightAndWidth = (width, height) => {\n  const res = {}\n  if (width) {\n    res.width = width;\n  }\n  if (height) {\n    res.height = height;\n  }\n  return res;\n}\n\nexport default function Carousel({ carouselList, container, showDotControls }) {\n  const [active, setActive] = useState(0);\n  const {width, height} = container;\n  const containerStyle = getHeightAndWidth(width, height);\n\n  const handleClick = (position) => {\n    const newActive = position + active;\n    if(newActive > carouselList.length - 1) {\n      setActive(0);\n      return;\n    } else if(newActive < 0) {\n      setActive(carouselList.length - 1);\n      return;\n    }\n\n    setActive(newActive);\n  }\n\n  const handleDotClick = (position) => {\n    setActive(position);\n  }\n\n  return (\n    <div>\n      <div className={styles.carouselContainer} style={containerStyle}>\n        {carouselList.map((carouselListImtem, index) => {\n          if(index === active) {\n            const { backgroundImage, backgroundColor, textSection, mediaSection, textColor } = carouselListImtem;\n            const { image, video } = mediaSection;\n            const backgroundStyle = backgroundImage ? {\n              backgroundImage: url("$"{backgroundImage}),\n              backgroundSize: "cover",\n            } : { background: backgroundColor };\n            const textStyle = textColor ? { color: textColor } : {};\n            return (\n              <div key={index} className={styles.carouselSlide} style={backgroundStyle}>\n                {\n                  textSection && (<div className={styles.carouselTextSection} style={textStyle}>{textSection}</div>)\n                }\n                {\n                  mediaSection ? (\n                    <div className={styles.carouselMediaSection}>\n                      {(image && <img src={image} alt="carousel-image" className={styles.mediaControls} />) ||\n                        (video && <video src={video} controls className={styles.mediaControls}/>)}\n                    </div>\n                  ) : null\n                }\n              </div>\n            );\n          }\n        })}\n        <div className={styles.carouselControls}>\n          <div className={styles.carouselControlsLeft} onClick={() => handleClick(-1)}>&#10094;</div>\n          <div className={styles.carouselControlsRight} onClick={() => handleClick(1)}>&#10095;</div>\n        </div>\n        {showDotControls && (\n          <div className={styles.carouselDotControls}>\n            {carouselList.map((carouselListImtem, index) => {\n              return (\n                <div key={index} className={"$"{styles.carouselDotControlItem} `"$"{active === index ? styles.active : ""}} onClick={() => handleDotClick(index)}></div>\n              );\n            })}\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}'}),Object(c.jsx)("h3",{children:"Carousel Component style"}),Object(c.jsx)("p",{children:"Finally add styles for carousel component, which we have already imported in our carousel component implementation"}),Object(c.jsx)(d.a,{language:"css",style:u.materialOceanic,children:".carouselContainer {\n  width: 100%;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n\n  .carouselSlide {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n    padding: 0 2.2rem;\n    display: flex;\n\n    .carouselTextSection {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 1rem;\n    }\n\n    .carouselMediaSection {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      .mediaControls {\n        max-width: 100%;\n        height: auto;\n      }\n    }\n  }\n\n  .carouselControls {\n\n    .carouselControlsLeft, .carouselControlsRight {\n      cursor: pointer;\n      position: absolute;\n      top: 50%;\n      width: auto;\n      transform: translate(0px, -50%);\n      background: rgba(0, 0, 0, .3);\n      padding: 5px 10px;\n      color: white;\n      font-weight: 300;\n      font-size: 18px;\n      transition: 0.6s ease;\n      border-radius: 0 3px 3px 0;\n      user-select: none;\n\n      &:hover {\n        background-color: rgba(0,0,0,0.8);\n      }\n    }\n\n    .carouselControlsRight {\n      right: 0;\n      border-radius: 3px 0 0 3px;\n    }\n  }\n\n  .carouselDotControls {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    height: 25px;\n\n    .carouselDotControlItem {\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      margin: 0 2px;\n      background-color: rgba(0, 0, 0, 0.25);\n      border-radius: 50%;\n      cursor: pointer;\n      transition: background-color 0.6s ease;\n\n      &:hover, &.active {\n        background-color: rgba(0, 0, 0, 0.8);\n      }\n    }\n\n  }\n}"})]})}var p=t("5Yp1");function g(){return Object(c.jsx)(p.a,{children:Object(c.jsx)(f,{})})}},dQHF:function(e,n,t){"use strict";var o=t("mPvQ"),i=t("7KCV"),r=t("AroE");n.__esModule=!0,n.default=function(e){var n=e.src,t=e.sizes,o=e.unoptimized,i=void 0!==o&&o,r=e.priority,c=void 0!==r&&r,u=e.loading,m=e.className,h=e.quality,f=e.width,p=e.height,g=(0,s.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height"]),x=(0,l.useRef)(null),b=g,y=t?"responsive":"intrinsic",S=!1;"unsized"in b?(S=Boolean(b.unsized),delete b.unsized):"layout"in b&&(b.layout&&(y=b.layout),delete b.layout);0;var _="lazy"===u;c||"undefined"!==typeof u||(_=!0);window.IntersectionObserver||(_=!1);(0,l.useEffect)((function(){var e=x.current;if(e&&_){var n=function(){var e=window.IntersectionObserver;if(a)return a;if(!e)return;return a=new e((function(e){e.forEach((function(e){if(e.isIntersecting){var n=e.target;v(n),a.unobserve(n)}}))}),{rootMargin:"200px"})}();if(n)return n.observe(e),function(){n.unobserve(e)};v(e)}}),[x,_]);var k,O,z,N=j(f),L=j(p),M=j(h),I={visibility:_?"hidden":"visible",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%"};if("undefined"!==typeof N&&"undefined"!==typeof L&&"fill"!==y){var q=L/N,D=isNaN(q)?"100%":"".concat(100*q,"%");"responsive"===y?(k={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},O={display:"block",boxSizing:"border-box",paddingTop:D}):"intrinsic"===y?(k={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},O={boxSizing:"border-box",display:"block",maxWidth:"100%"},z='<svg width="'.concat(N,'" height="').concat(L,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===y&&(k={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:N,height:L})}else"undefined"===typeof N&&"undefined"===typeof L&&"fill"===y&&(k={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var A,H=C(n,i,y,N,M),T=w({src:n,unoptimized:i,layout:y,width:N,quality:M});_?(A={"data-src":H},T&&(A["data-srcset"]=T),m=m?m+" __lazy":"__lazy"):(A={src:H},T&&(A.srcSet=T));var R=c&&!1;S&&(k=void 0,O=void 0,I=void 0);return l.default.createElement("div",{style:k},R?function(e){var n=e.src,t=e.unoptimized,o=void 0!==t&&t,i=e.layout,r=e.width,a=e.sizes,s=e.quality;return l.default.createElement(d.default,null,l.default.createElement("link",{rel:"preload",as:"image",href:C(n,o,i,r,s),imagesrcset:w({src:n,unoptimized:o,layout:i,width:r,quality:s}),imagesizes:a}))}({src:n,layout:y,unoptimized:i,width:N,sizes:t,quality:M}):null,O?l.default.createElement("div",{style:O},z?l.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;charset=utf-8,".concat(z)}):null):null,l.default.createElement("img",Object.assign({},b,A,{decoding:"async",className:m,sizes:t,ref:x,style:I})))};var a,s=r(t("98FW")),c=r(t("1ccW")),l=i(t("q1tI")),d=r(t("8Kt/")),u=new Map([["imgix",function(e){var n=e.root,t=e.src,o=e.width,i=e.quality,r=["auto=format","fit=max","w="+o],a="";i&&r.push("q="+i);r.length&&(a="?"+r.join("&"));return"".concat(n).concat(S(t)).concat(a)}],["cloudinary",function(e){var n=e.root,t=e.src,o=e.width,i=e.quality,r=["f_auto","c_limit","w_"+o],a="";i&&r.push("q_"+i);r.length&&(a=r.join(",")+"/");return"".concat(n).concat(a).concat(S(t))}],["akamai",function(e){var n=e.root,t=e.src,o=e.width;return"".concat(n).concat(S(t),"?imwidth=").concat(o)}],["default",_]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},h=m.deviceSizes,f=m.imageSizes,p=m.loader,g=m.path,x=[].concat(o(h),o(f));function v(e){e.dataset.src&&(e.src=e.dataset.src),e.dataset.srcset&&(e.srcset=e.dataset.srcset),e.style.visibility="visible",e.classList.remove("__lazy")}function b(e,n){return"number"!==typeof e||"fill"===n||"responsive"===n?{sizes:h,kind:"w"}:{sizes:o(new Set([e,2*e,3*e].map((function(e){return x.find((function(n){return n>=e}))||x[x.length-1]})))),kind:"x"}}function C(e,n,t,o,i){if(n)return e;var r=b(o,t).sizes;return y({src:e,width:r[r.length-1],quality:i})}function y(e){return(u.get(p)||_)((0,c.default)({root:g},e))}function w(e){var n=e.src,t=e.unoptimized,o=e.layout,i=e.width,r=e.quality;if(!t){var a=b(i,o),s=a.sizes,c=a.kind;return s.map((function(e,t){return"".concat(y({src:n,width:e,quality:r})," ").concat("w"===c?e:t+1).concat(c)})).join(", ")}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){return"/"===e[0]?e.slice(1):e}function _(e){var n=e.root,t=e.src,o=e.width,i=e.quality;return"".concat(n,"?url=").concat(encodeURIComponent(t),"&w=").concat(o,"&q=").concat(i||75)}h.sort((function(e,n){return e-n})),x.sort((function(e,n){return e-n}))},nZqU:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/carousel",function(){return t("bJ2l")}])},sZHX:function(e,n,t){e.exports={carouselContainer:"Carousel_carouselContainer__3UnPw",carouselSlide:"Carousel_carouselSlide__2NVgT",carouselTextSection:"Carousel_carouselTextSection__2TdRA",carouselMediaSection:"Carousel_carouselMediaSection__2YY3R",mediaControls:"Carousel_mediaControls__3SpH6",carouselControls:"Carousel_carouselControls__1YMlR",carouselControlsLeft:"Carousel_carouselControlsLeft__ogmBk",carouselControlsRight:"Carousel_carouselControlsRight__2DLuc",carouselDotControls:"Carousel_carouselDotControls__1q0Mg",carouselDotControlItem:"Carousel_carouselDotControlItem__cfOaV",active:"Carousel_active__3_mCC"}}},[["nZqU",0,2,1,3,4]]]);