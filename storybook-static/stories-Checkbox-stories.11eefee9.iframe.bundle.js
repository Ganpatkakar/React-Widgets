/*! For license information please see stories-Checkbox-stories.11eefee9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_webpack_project=self.webpackChunkreact_webpack_project||[]).push([[59],{"./src/stories/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,MultiCheckBoxWithParentControl:()=>MultiCheckBoxWithParentControl,MultiLevelCheckBoxes:()=>MultiLevelCheckBoxes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Checkbox/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox",component:_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{}},Checked=()=>{const[checked,setChecked]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,{name:"abc",checked,handleClick:(event,data)=>setChecked(data),label:"Checked"})};Checked.displayName="Checked";const MultiCheckBoxWithParentControl=()=>{const[option1,setOption1]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[option2,setOption2]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!0),[option3,setOption3]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,{name:"abc",checked:!!(option1&&option2&&option3)||!!(option1||option2||option3)&&"mixed",handleClick:data=>{setOption1(!!data),setOption2(!!data),setOption3(!!data)},label:"All options"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,{name:"abc",checked:option1,handleClick:()=>setOption1((checked=>!checked)),label:"Option 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,{name:"abc",checked:option2,handleClick:()=>setOption2((checked=>!checked)),label:"Option 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,{name:"abc",checked:option3,handleClick:()=>setOption3((checked=>!checked)),label:"Option 3"})]})},initialState={name:"CheckBoxesGroups",checked:!1,label:"Parent control checkbox",groups:[{name:"CheckBoxesGroups1",checked:!1,label:"Check Boxex Group 1",groups:[{name:"group1check1",checked:!1,label:"group 1 checkbox 1",groups:[{name:"level3Check1",checked:!1,label:"level 3 checkbox 1"},{name:"level3Check2",checked:!1,label:"level 3 checkbox 2"}]},{name:"group1check2",checked:!1,label:"group 1 checkbox 2"},{name:"group1check3",checked:!1,label:"group 1 checkbox 3"}]},{name:"CheckBoxesGroups2",checked:!1,label:"Check Boxex Group 2",groups:[{name:"group2check1",checked:!1,label:"group 2 checkbox 1"},{name:"group2check2",checked:!1,label:"group 2 checkbox 2"},{name:"group2check3",checked:!1,label:"group 2 checkbox 3"}]},{name:"CheckBoxesGroups3",checked:!1,label:"Check Boxex Group 3",groups:[{name:"group3check1",checked:!1,label:"group 3 checkbox 1"},{name:"group3check2",checked:!1,label:"group 3 checkbox 2"},{name:"group3check3",checked:!1,label:"group 3 checkbox 3"}]}]};const reducer=function(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,{type,payload}=arguments.length>1?arguments[1]:void 0;if("updateCheckBoxes"===type){const{value,name}=payload;return state=function updateState(state,nodeName,value){let finalPath=[],found=!1;const traverse=function(node){let path=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!node||found)return;if(path.push(node),node.name===nodeName)return finalPath=[...path],void(found=!0);const len=node?.groups?.length;len&&node?.groups.forEach((group=>{traverse(group,path),path.pop()}))};traverse(state);const node=finalPath.pop(),checkAllChilds=node=>{if(!node)return;node.checked=value;const len=node?.groups?.length;len&&node?.groups.forEach((group=>{checkAllChilds(group)}))};return checkAllChilds(node),finalPath.reverse(),finalPath.forEach((node=>{let checked;const len=node?.groups?.length;if(len){let checkedLen=0,mixed=0;node?.groups.forEach((group=>{!0===group.checked&&checkedLen++,"mixed"===group.checked&&mixed++})),checkedLen===len?checked=!0:checkedLen>0||mixed>0?checked="mixed":0===checkedLen&&(checked=!1)}node.checked=checked})),state}(state,name,value),{...state}}return state};function CheckBoxesWithGroup(props){const{state,handleCheckBox}=props,{label,name,disabled=!1}=state;let{checked}=state;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__.Z,{checked,label,name,disabled,handleClick:(event,value)=>handleCheckBox(value,name)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul",{children:state?.groups?.map((group=>{const{name}=group;return CheckBoxesWithGroup({state:group,handleCheckBox})}))})]},name)}CheckBoxesWithGroup.displayName="CheckBoxesWithGroup";const MultiLevelCheckBoxesCode=()=>{const[state,dispatchState]=react__WEBPACK_IMPORTED_MODULE_0__.useReducer(reducer,initialState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CheckBoxesWithGroup,{state,handleCheckBox:(value,name)=>{dispatchState({type:"updateCheckBoxes",payload:{value,name}})}})};MultiLevelCheckBoxesCode.displayName="MultiLevelCheckBoxesCode";const MultiLevelCheckBoxes=MultiLevelCheckBoxesCode.bind({});MultiLevelCheckBoxes.parameters={docs:{source:{code:"\nimport React, { useReducer, useState } from \"react\";\nimport Checkbox from \"./components/Checkbox\";\n\nconst level3Groups = [\n  {\n    name: 'level3Check1',\n    checked: false,\n    label: \"level 3 checkbox 1\"\n  },\n  {\n    name: 'level3Check2',\n    checked: false,\n    label: \"level 3 checkbox 2\"\n  }\n]\n\nconst group1 = [\n  {\n    name: 'group1check1',\n    checked: false,\n    label: \"group 1 checkbox 1\",\n    groups: level3Groups\n  },\n  {\n    name: 'group1check2',\n    checked: false,\n    label: \"group 1 checkbox 2\"\n  },\n  {\n    name: 'group1check3',\n    checked: false,\n    label: \"group 1 checkbox 3\"\n  }\n];\n\nconst group2 = [\n  {\n    name: 'group2check1',\n    checked: false,\n    label: \"group 2 checkbox 1\"\n  },\n  {\n    name: 'group2check2',\n    checked: false,\n    label: \"group 2 checkbox 2\"\n  },\n  {\n    name: 'group2check3',\n    checked: false,\n    label: \"group 2 checkbox 3\"\n  }\n];\n\nconst group3 = [\n  {\n    name: 'group3check1',\n    checked: false,\n    label: \"group 3 checkbox 1\"\n  },\n  {\n    name: 'group3check2',\n    checked: false,\n    label: \"group 3 checkbox 2\"\n  },\n  {\n    name: 'group3check3',\n    checked: false,\n    label: \"group 3 checkbox 3\"\n  }\n];\n\nconst initialState = {\n  name: 'CheckBoxesGroups',\n  checked: false,\n  label: \"Parent control checkbox\",\n\n  groups: [\n    {\n      name: 'CheckBoxesGroups1',\n      checked: false,\n      label: \"Check Boxex Group 1\",\n      groups: group1\n    },\n    {\n      name: 'CheckBoxesGroups2',\n      checked: false,\n      label: \"Check Boxex Group 2\",\n      groups: group2\n    },\n    {\n      name: 'CheckBoxesGroups3',\n      checked: false,\n      label: \"Check Boxex Group 3\",\n      groups: group3\n    }\n  ]\n};\n\nfunction updateState(state, nodeName, value) {\n  let finalPath = [];\n  let found = false;\n\n  const traverse = (node, path = []) => {\n    if (!node || found) {\n      return;\n    }\n    path.push(node);\n    if (node.name === nodeName) {\n      finalPath = [...path];\n      found = true;\n      return;\n    }\n\n    const len = node?.groups?.length;\n    if (len) {\n      node?.groups.forEach((group) => {\n        traverse(group, path);\n        path.pop();\n      })\n    }\n  }\n  traverse(state);\n\n  // navigate downwards to check all the child and subchilds of this parent\n  const node = finalPath.pop();\n  const checkAllChilds = (node) => {\n    if (!node)\n      return;\n\n    node.checked = value;\n    const len = node?.groups?.length;\n    if (len) {\n      node?.groups.forEach((group) => {\n        checkAllChilds(group);\n      })\n    }\n  }\n  \n  checkAllChilds(node);\n\n  // navigate topward to determine parents needs to be checked true or in mixed condition\n  finalPath.reverse();\n  finalPath.forEach((node) => {\n    let checked;\n    const len = node?.groups?.length\n    if (len) {\n      let checkedLen = 0;\n      let mixed = 0;\n      node?.groups.forEach(group => {\n        if (group.checked === true) {\n          checkedLen++;\n        }\n        if (group.checked === 'mixed') {\n          mixed++;\n        }\n      });\n      if (checkedLen === len) {\n        checked = true;\n      } else if (checkedLen > 0 || mixed > 0) {\n        checked = 'mixed';\n      } else if (checkedLen === 0) {\n        checked = false;\n      }\n    }\n    node.checked = checked;\n  });\n\n  return state;\n}\n\nconst reducer = (state = initialState, { type, payload }) => {\n  switch (type) {\n\n    case 'updateCheckBoxes':\n      const { value, name } = payload;\n      state = updateState(state, name, value);\n      return { ...state };\n\n    default:\n      return state\n  }\n}\n\nfunction CheckBoxesWithGroup(props: any) {\n  const { state, handleCheckBox } = props;\n  const { label, name, disabled = false } = state;\n  let { checked } = state;\n\n  return (\n    <div key={name}>\n      <Checkbox\n        checked={checked}\n        label={label}\n        name={name}\n        disabled={disabled}\n        handleClick={(value) => handleCheckBox(value, name)}\n      />\n      <ul>\n        {\n          state?.groups?.map((group) => {\n            const { name } = group;\n            return CheckBoxesWithGroup({ state: group, handleCheckBox });\n          })\n        }\n      </ul>\n    </div>\n  )\n}\n\n\nfunction App() {\n  const [state, dispatchState] = useReducer(reducer, initialState);\n\n  const handleCheckBox = (value, name) => {\n    dispatchState({\n      type: 'updateCheckBoxes',\n      payload: {\n        value,\n        name\n      }\n    })\n  }\n\n  return (\n    <div className=\"App\">\n      <h1>Hello React..!</h1>\n      <CheckBoxesWithGroup state={state} handleCheckBox={handleCheckBox} />\n    </div>\n  );\n}\n\nexport default App;\n"}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'() => {\n  const [checked, setChecked] = React.useState(true);\n  return <Checkbox name="abc" checked={checked} handleClick={(event, data) => setChecked(data)} label="Checked" />;\n}',...Checked.parameters?.docs?.source}}},MultiCheckBoxWithParentControl.parameters={...MultiCheckBoxWithParentControl.parameters,docs:{...MultiCheckBoxWithParentControl.parameters?.docs,source:{originalSource:'() => {\n  const [option1, setOption1] = React.useState(false);\n  const [option2, setOption2] = React.useState(true);\n  const [option3, setOption3] = React.useState(false);\n  return <>\n      <Checkbox name="abc" checked={option1 && option2 && option3 ? true : !(option1 || option2 || option3) ? false : "mixed"} handleClick={data => {\n      setOption1(!!data);\n      setOption2(!!data);\n      setOption3(!!data);\n    }} label="All options" />\n\n      <Checkbox name="abc" checked={option1} handleClick={() => setOption1(checked => !checked)} label="Option 1" />\n      <Checkbox name="abc" checked={option2} handleClick={() => setOption2(checked => !checked)} label="Option 2" />\n      <Checkbox name="abc" checked={option3} handleClick={() => setOption3(checked => !checked)} label="Option 3" />\n    </>;\n}',...MultiCheckBoxWithParentControl.parameters?.docs?.source}}},MultiLevelCheckBoxes.parameters={...MultiLevelCheckBoxes.parameters,docs:{...MultiLevelCheckBoxes.parameters?.docs,source:{originalSource:'() => {\n  const [state, dispatchState] = React.useReducer(reducer, initialState);\n  const handleCheckBox = (value, name) => {\n    dispatchState({\n      type: "updateCheckBoxes",\n      payload: {\n        value,\n        name\n      }\n    });\n  };\n  return <CheckBoxesWithGroup state={state} handleCheckBox={handleCheckBox} />;\n}',...MultiLevelCheckBoxes.parameters?.docs?.source}}};const __namedExportsOrder=["Checked","MultiCheckBoxWithParentControl","MultiLevelCheckBoxes"]},"./src/components/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Checkbox_checkbox=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Checkbox/checkbox.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Checkbox_checkbox.Z,options);const components_Checkbox_checkbox=Checkbox_checkbox.Z&&Checkbox_checkbox.Z.locals?Checkbox_checkbox.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxInput=props=>{const cRef=(0,react.useRef)(),{checked,name}=props;(0,react.useEffect)((()=>{const indeterminate="mixed"===checked;cRef.current.indeterminate=indeterminate}),[cRef,checked]);let inputClassNames=components_Checkbox_checkbox.checkBoxInput;return(0,jsx_runtime.jsx)("input",{className:inputClassNames,type:"checkbox",id:name,defaultChecked:!0===checked,ref:cRef})};CheckboxInput.displayName="CheckboxInput";try{CheckboxInput.displayName="CheckboxInput",CheckboxInput.__docgenInfo={description:"",displayName:"CheckboxInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/checkboxInput.tsx#CheckboxInput"]={docgenInfo:CheckboxInput.__docgenInfo,name:"CheckboxInput",path:"src/components/Checkbox/checkboxInput.tsx#CheckboxInput"})}catch(__react_docgen_typescript_loader_error){}const checkboxChecked=function(){let width=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,height=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return(0,jsx_runtime.jsx)("svg",{fill:"currentColor",className:"","aria-hidden":"true",width,height,viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z",fill:"currentColor"})})};checkboxChecked.displayName="checkboxChecked";const checkboxMixed=function(){let width=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,height=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return(0,jsx_runtime.jsx)("svg",{fill:"currentColor",className:"","aria-hidden":"true",width,height,viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M2 4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z",fill:"currentColor"})})};checkboxMixed.displayName="checkboxMixed";const CheckboxIcon=props=>{const{checked,width,height}=props;let icon=null,iconClassNames=components_Checkbox_checkbox.checkBoxIcon;return"mixed"===checked?(icon=checkboxMixed(width-2,height-2),iconClassNames+=` ${components_Checkbox_checkbox.mixedIcon}`):checked&&(icon=checkboxChecked(width-2,height-2),iconClassNames+=` ${components_Checkbox_checkbox.checkedIcon}`),(0,jsx_runtime.jsx)("div",{className:iconClassNames,style:{width,height},children:icon})};CheckboxIcon.displayName="CheckboxIcon";try{CheckboxIcon.displayName="CheckboxIcon",CheckboxIcon.__docgenInfo={description:"",displayName:"CheckboxIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/checkboxIcon.tsx#CheckboxIcon"]={docgenInfo:CheckboxIcon.__docgenInfo,name:"CheckboxIcon",path:"src/components/Checkbox/checkboxIcon.tsx#CheckboxIcon"})}catch(__react_docgen_typescript_loader_error){}function checkbox_Checkbox(props){let{checked}=props;const{label,handleClick,name,disabled}=props;return(0,jsx_runtime.jsxs)("span",{className:`${components_Checkbox_checkbox.checkBoxContainer} ${disabled&&components_Checkbox_checkbox.disabledCheckBox}`,onClick:event=>{if(event.preventDefault(),disabled)return;let newCheck=checked;newCheck=!0!==newCheck,checked=newCheck,handleClick(event,newCheck)},children:[(0,jsx_runtime.jsx)(CheckboxInput,{...props,checked}),(0,jsx_runtime.jsx)(CheckboxIcon,{...props,checked}),(0,jsx_runtime.jsx)("label",{className:components_Checkbox_checkbox.labelContainer,htmlFor:name,children:label})]})}checkbox_Checkbox.displayName="Checkbox",checkbox_Checkbox.defaultProps={checked:!0,disabled:!1,name:"",label:"",width:14,height:14,handleClick:()=>{}};try{checkbox_Checkbox.displayName="Checkbox",checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:{value:"true"},description:"",name:"checked",required:!1,type:{name:'boolean | "mixed"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},handleClick:{defaultValue:{value:"() => {}"},description:"",name:"handleClick",required:!1,type:{name:"(event: any, value: boolean) => void"}},width:{defaultValue:{value:"14"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"14"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/checkbox.tsx#Checkbox"]={docgenInfo:checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}const components_Checkbox=checkbox_Checkbox;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:{value:"true"},description:"",name:"checked",required:!1,type:{name:'boolean | "mixed"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},handleClick:{defaultValue:{value:"() => {}"},description:"",name:"handleClick",required:!1,type:{name:"(event: any, value: boolean) => void"}},width:{defaultValue:{value:"14"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"14"},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Checkbox/checkbox.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".checkbox__checkBoxContainer--vg8fs{position:relative;display:inline-flex;cursor:pointer;vertical-align:middle;line-height:20px}.checkbox__checkBoxContainer--vg8fs.checkbox__disabledCheckBox--APU9P{opacity:.3}.checkbox__checkBoxContainer--vg8fs .checkbox__checkBoxInput--jM8Pb{box-sizing:border-box;cursor:inherit;height:100%;margin:0px;opacity:0;position:absolute;top:0px}.checkbox__checkBoxContainer--vg8fs .checkbox__checkBoxIcon--Y56ml{align-self:flex-start;box-sizing:border-box;flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden;pointer-events:none;border:1px solid #000;color:#fff;background:#fff;border-radius:2px;margin:8px 8px}.checkbox__checkBoxContainer--vg8fs .checkbox__checkBoxIcon--Y56ml.checkbox__mixedIcon--ts1Mm{background-color:#fff;color:rgba(67,17,17,.9882352941)}.checkbox__checkBoxContainer--vg8fs .checkbox__checkBoxIcon--Y56ml.checkbox__checkedIcon--OJnJL{color:#fff;background-color:#000}.checkbox__checkBoxContainer--vg8fs .checkbox__labelContainer--WgZK6{align-self:center;color:#242424;cursor:pointer;display:block;font-size:14px;font-weight:400;height:20px;line-height:20px;margin-bottom:-2px;margin-top:-2px;padding-bottom:8px;padding-left:4px;padding-right:8px;padding-top:8px;text-align:left}","",{version:3,sources:["webpack://./src/components/Checkbox/checkbox.scss"],names:[],mappings:"AAAA,oCACE,iBAAA,CACA,mBAAA,CACA,cAAA,CACA,qBAAA,CACA,gBAAA,CAEA,sEACE,UAAA,CAGF,oEACE,qBAAA,CACA,cAAA,CACA,WAAA,CACA,UAAA,CACA,SAAA,CACA,iBAAA,CACA,OAAA,CAGF,mEACE,qBAAA,CACA,qBAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,mBAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,cAAA,CAEA,8FACE,qBAAA,CACA,gCAAA,CAGF,gGACE,UAAA,CACA,qBAAA,CAIJ,qEACE,iBAAA,CACA,aAAA,CACA,cAAA,CACA,aAAA,CACA,cAAA,CACA,eAAA,CACA,WAAA,CACA,gBAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA",sourcesContent:[".checkBoxContainer {\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  vertical-align: middle;\n  line-height: 20px;\n\n  &.disabledCheckBox {\n    opacity: 0.3;\n  }\n\n  .checkBoxInput {\n    box-sizing: border-box;\n    cursor: inherit;\n    height: 100%;\n    margin: 0px;\n    opacity: 0;\n    position: absolute;\n    top: 0px;\n  }\n\n  .checkBoxIcon {\n    align-self: flex-start;\n    box-sizing: border-box;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    pointer-events: none;\n    border: 1px solid #000;\n    color: #fff;\n    background: #fff;\n    border-radius: 2px;\n    margin: 8px 8px;\n\n    &.mixedIcon {\n      background-color: #fff;\n      color: #431111fc\n    }\n\n    &.checkedIcon {\n      color: #fff;\n      background-color: #000;\n    }\n  }\n\n  .labelContainer {\n    align-self: center;\n    color: rgb(36, 36, 36);\n    cursor: pointer;\n    display: block;\n    font-size: 14px;\n    font-weight: 400;\n    height: 20px;\n    line-height: 20px;\n    margin-bottom: -2px;\n    margin-top: -2px;\n    padding-bottom: 8px;\n    padding-left: 4px;\n    padding-right: 8px;\n    padding-top: 8px;\n    text-align: left\n  }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={checkBoxContainer:"checkbox__checkBoxContainer--vg8fs",disabledCheckBox:"checkbox__disabledCheckBox--APU9P",checkBoxInput:"checkbox__checkBoxInput--jM8Pb",checkBoxIcon:"checkbox__checkBoxIcon--Y56ml",mixedIcon:"checkbox__mixedIcon--ts1Mm",checkedIcon:"checkbox__checkedIcon--OJnJL",labelContainer:"checkbox__labelContainer--WgZK6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);