"use strict";(self.webpackChunkreact_webpack_project=self.webpackChunkreact_webpack_project||[]).push([[159],{"./src/stories/StarRating.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultipleStarRatings:()=>MultipleStarRatings,StarRatings:()=>StarRatings,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StarRating_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StarRatingContainer=styled_components_browser_esm.ZP.div`
  display: inline-flex;
  ${props=>({...props.$styles})}
`,Star=styled_components_browser_esm.ZP.div`
  display: block;
  cursor: pointer;

  ${props=>{if(props.$active)return"\n        color: red;\n        font-weight: bold;\n      "}}

  ${props=>({...props.$styles})}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function StarRating(props){const{value,starsCount,readOnly,onClick:handleClickCallback,styles}=props,ref=(0,react.useRef)(value),[starRating,setStarRating]=(0,react.useState)(value);(0,react.useEffect)((()=>{ref.current=value,setStarRating(value)}),[value]);const handleMouseEnter=(0,react.useCallback)((event=>{if(event.preventDefault(),readOnly)return;const target=event.target;if(target.dataset.hasOwnProperty("value")){const starValue=target.dataset.value;setStarRating(starValue)}}),[]),handleMouseLeave=(0,react.useCallback)((event=>{event.preventDefault(),readOnly||setStarRating(ref.current)}),[]),handleClick=(0,react.useCallback)((event=>{if(event.preventDefault(),readOnly)return;const target=event.target;if(target.dataset.hasOwnProperty("value")){const starValue=target.dataset.value;ref.current=starValue,setStarRating(starValue),handleClickCallback(event,starValue)}}),[]),stars=[],activeValue=Math.floor(starRating);for(let i=0;i<starsCount;i++){const active=i+1<=activeValue;stars.push((0,jsx_runtime.jsx)(Star,{"data-value":i+1,$active:active,$styles:styles.star||{},children:"☆"},i))}return(0,jsx_runtime.jsx)(StarRatingContainer,{onMouseOver:handleMouseEnter,onMouseLeave:handleMouseLeave,onClick:handleClick,$styles:styles.starContainer||{},children:stars})}StarRating.displayName="StarRating",StarRating.defaultProps={value:0,starsCount:5,readOnly:!1,onClick:(event,rating)=>{},styles:{}};try{starRating.displayName="starRating",starRating.__docgenInfo={description:"",displayName:"starRating",props:{value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},starsCount:{defaultValue:{value:"5"},description:"",name:"starsCount",required:!1,type:{name:"number"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"(event, rating) => {}"},description:"",name:"onClick",required:!1,type:{name:"(envet: any, rating: any) => void"}},styles:{defaultValue:{value:"{}"},description:"",name:"styles",required:!1,type:{name:"IStarRatingStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StarRating/starRating.tsx#starRating"]={docgenInfo:starRating.__docgenInfo,name:"starRating",path:"src/components/StarRating/starRating.tsx#starRating"})}catch(__react_docgen_typescript_loader_error){}const components_StarRating=StarRating,StarRating_stories={title:"Components/StarRating",component:components_StarRating,tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{margin:"1em",padding:"2em",background:"#f8f7f7"},children:(0,jsx_runtime.jsx)(Story,{})})]},styles={starContainer:{fontSize:"20px",fontWeight:700}},StarRatingComponent=_ref=>{let{}=_ref;return(0,jsx_runtime.jsx)(components_StarRating,{value:1,styles})};StarRatingComponent.displayName="StarRatingComponent";const StarRatings=StarRatingComponent.bind({});StarRatings.parameters={docs:{source:{code:'\nimport React from "react";\nimport StarRating, {IStarRatingStyles} from "./components/StarRating";\n\nconst styles: IStarRatingStyles = {\n  starContainer: {\n    fontSize: \'20px\',\n    fontWeight: 700\n  }\n}\n\nfunction App() {\n  return (\n    <>\n      <StarRating value={1} styles={styles}/>\n    </>\n  );\n}\n'}}};const MultipleStarRatings=(_ref2=>{let{}=_ref2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components_StarRating,{value:5,styles}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(components_StarRating,{value:3,styles})]})}).bind({});MultipleStarRatings.parameters={docs:{source:{code:'\nimport React from "react";\nimport StarRating, {IStarRatingStyles} from "./components/StarRating";\n\nconst styles: IStarRatingStyles = {\n  starContainer: {\n    fontSize: \'20px\',\n    fontWeight: 700\n  }\n}\n\nfunction App() {\n  return (\n    <>\n      <StarRating value={1} styles={styles}/>\n      <br />\n      <StarRating value={1} styles={styles}/>\n    </>\n  );\n}\n'}}},StarRatings.parameters={...StarRatings.parameters,docs:{...StarRatings.parameters?.docs,source:{originalSource:"({}) => {\n  return <StarRating value={1} styles={styles} />;\n}",...StarRatings.parameters?.docs?.source}}},MultipleStarRatings.parameters={...MultipleStarRatings.parameters,docs:{...MultipleStarRatings.parameters?.docs,source:{originalSource:"({}) => {\n  return <>\n      <StarRating value={5} styles={styles} />\n      <br />\n      <StarRating value={3} styles={styles} />\n    </>;\n}",...MultipleStarRatings.parameters?.docs?.source}}};const __namedExportsOrder=["StarRatings","MultipleStarRatings"]}}]);
//# sourceMappingURL=stories-StarRating-stories.6e0e85b2.iframe.bundle.js.map