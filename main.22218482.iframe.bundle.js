(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":"./src/components/Button/Button.stories.tsx","./components/Icons/Flag.stories.tsx":"./src/components/Icons/Flag.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/Button/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Button1",(function(){return Button1})),__webpack_require__.d(__webpack_exports__,"Button2",(function(){return Button2}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),SYLNISHI_COLORS=(__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),{ink:{light:"#111E6A",base:"#0D1234",dark:"#000420"},grey:{light:"#F9F9F9",base:"#F1F1F1",darker:"#E9E9E9",dark:"#626575"},blue:{light:"#274FDB",base:"#1337B8",dark:"#0729A0"},yellow:{light:"#FFE877",base:"#FFD400",dark:"#DC9E00"},red:{light:"#FF766D",base:"#CF2A20",dark:"#C01A0F"},green:{light:"#13C992",base:"#00B17C",dark:"#00996B"},white:{base:"#FFFFFF"}}),sylnishi={colors:Object.assign({primary:SYLNISHI_COLORS.blue.base,primaryLight:SYLNISHI_COLORS.blue.light,primaryDark:SYLNISHI_COLORS.blue.dark,secondary:SYLNISHI_COLORS.grey.base,secondaryLight:SYLNISHI_COLORS.grey.light,secondaryDark:SYLNISHI_COLORS.grey.darker,background:SYLNISHI_COLORS.white.base,surface:SYLNISHI_COLORS.grey.light,error:SYLNISHI_COLORS.red.base,errorLight:SYLNISHI_COLORS.red.light,errorDark:SYLNISHI_COLORS.red.dark,onPrimary:SYLNISHI_COLORS.white.base,onSecondary:SYLNISHI_COLORS.ink.base,onBackground:SYLNISHI_COLORS.ink.base,onSurface:SYLNISHI_COLORS.ink.base,onError:SYLNISHI_COLORS.white.base},SYLNISHI_COLORS),shadows:{small:"0px 0px 1px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.08)",medium:"0px 0px 1px rgba(20, 20, 20, 0.08), 0px 1px 8px 2px rgba(20, 20, 20, 0.08)",large:"0px 0px 1px rgba(20, 20, 20, 0.08), 0px 10px 24px 8px rgba(20, 20, 20, 0.18)"},typography:{fontWeight:{bold:700,medium:500,regular:400},fontSize:{h1:"48px",h2:"32px",h3:"24px",large:"18px",regular:"16px",small:"14px",tiny:"12px"},lineHeight:{h1:"56px",h2:"36px",h3:"32px",large:"24px",largeNone:"18px",largeTight:"20px",regular:"24px",regularNone:"16px",regularTight:"20px",small:"20px",smallNone:"14px",smallTight:"16px",tiny:"16px",tinyNone:"12px",tinyTight:"14px"}}};function getShade(color,shade){var theme=sylnishi,extension="base"===shade?"":shade.replace(shade[0],shade[0].toUpperCase());return theme.colors[""+color+extension]}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StyledButton=Object(emotion_styled_base_browser_esm.a)("button",{target:"ep5nye30"})("box-sizing:border-box;background-color:",(function(props){return props.backgroundColor}),";color:",(function(props){return props.color}),';font-family:"Inter",sans-serif;border:',(function(props){return props.border}),";margin:0;padding:15px 15px;border-radius:8px;min-height:10px;width:",(function(props){return props.width}),";overflow:visible;text-align:center;transition:background-color ease-in-out 0.3s,border ease-in-out 0.3s;cursor:pointer;position:relative;display:flex;align-items:center;font-size:",(function(_ref){return _ref.theme.typography.fontSize.regular}),";font-weight:",(function(_ref2){return _ref2.theme.typography.fontWeight.medium}),";");StyledButton.defaultProps={theme:sylnishi};var Button_Button=function Button(_ref3){var color,backgroundColor,border,_ref3$btnType=_ref3.btnType,btnType=void 0===_ref3$btnType?"primary":_ref3$btnType,_ref3$display=_ref3.display,display=void 0===_ref3$display?"block":_ref3$display,_ref3$shade=_ref3.shade,shade=void 0===_ref3$shade?"base":_ref3$shade,children=(_ref3.leading,_ref3.trailing,_ref3.children),theme=sylnishi;switch(btnType){case"secondary":backgroundColor=getShade("secondary",shade),color=theme.colors.onSecondary,border="2px solid "+backgroundColor;break;case"transparent":backgroundColor="transparent",color=theme.colors.onBackground,border="2px solid "+backgroundColor;break;case"outlined":backgroundColor="transparent",border="2px solid "+(color=getShade("primary",shade));break;case"alarm":backgroundColor=getShade("error",shade),color=theme.colors.onError,border="2px solid "+backgroundColor;break;default:backgroundColor=getShade("primary",shade),color=theme.colors.onPrimary,border="2px solid "+backgroundColor}var width="block"===display?"100%":"auto";return Object(jsx_runtime.jsx)(StyledButton,{color:color,backgroundColor:backgroundColor,width:width,border:border,children:children})};Button_Button.displayName="Button";var components_Button_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{btnType:{defaultValue:{value:"primary"},description:"",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"outlined"'},{value:'"transparent"'},{value:'"alarm"'}]}},display:{defaultValue:{value:"block"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"large"'}]}},shade:{defaultValue:{value:"base"},description:"",name:"shade",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"light"'},{value:'"dark"'}]}},alignment:{defaultValue:null,description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"centered"'},{value:'"squeezed"'},{value:'"start"'}]}},leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"ReactChild"}},trailing:{defaultValue:null,description:"",name:"trailing",required:!1,type:{name:"ReactChild"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Sylnishi/Controls/Button",component:components_Button_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_Button_Button,Object.assign({},args,{children:"Test"}))};Button_stories_Template.displayName="Template";var Button1=Button_stories_Template.bind({});Button1.args={btnType:"primary"};var Button2=Button_stories_Template.bind({});Button2.args={btnType:"secondary"},Button1.parameters=Object.assign({storySource:{source:"(args) => <Button {...args}>Test</Button>"}},Button1.parameters),Button2.parameters=Object.assign({storySource:{source:"(args) => <Button {...args}>Test</Button>"}},Button2.parameters)},"./src/components/Icons/Flag.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FlagCZ",(function(){return Flag_stories_FlagCZ})),__webpack_require__.d(__webpack_exports__,"FlagDE",(function(){return Flag_stories_FlagDE})),__webpack_require__.d(__webpack_exports__,"FlagGB",(function(){return Flag_stories_FlagGB})),__webpack_require__.d(__webpack_exports__,"FlagHU",(function(){return Flag_stories_FlagHU})),__webpack_require__.d(__webpack_exports__,"FlagIT",(function(){return Flag_stories_FlagIT})),__webpack_require__.d(__webpack_exports__,"FlagPL",(function(){return Flag_stories_FlagPL})),__webpack_require__.d(__webpack_exports__,"FlagUA",(function(){return Flag_stories_FlagUA})),__webpack_require__.d(__webpack_exports__,"FlagNotFound",(function(){return FlagNotFound}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["alt"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FlagCZ_IconFlagCZ=function IconFlagCZ(_ref){var alt=_ref.alt,props=_objectWithoutProperties(_ref,_excluded);return Object(jsx_runtime.jsxs)("svg",Object.assign({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{children:[Boolean(alt)&&Object(jsx_runtime.jsx)("title",{children:alt}),Object(jsx_runtime.jsx)("rect",{x:"0.5",y:"0.5",width:"19",height:"15",rx:"1.5",fill:"white",stroke:"#F1F1F1"}),Object(jsx_runtime.jsx)("path",{d:"M20 14C20 15.1046 19.1046 16 18 16L2 16C0.895432 16 -7.8281e-08 15.1046 -1.74846e-07 14L-6.99382e-07 8L20 8L20 14Z",fill:"#FF5247"}),Object(jsx_runtime.jsx)("path",{d:"M2 16L10 8L2 -1.74846e-07C0.895431 -7.8281e-08 7.8281e-08 0.895431 1.74846e-07 2L1.22392e-06 14C1.32048e-06 15.1046 0.895432 16 2 16Z",fill:"#0729A0"})]}))};FlagCZ_IconFlagCZ.displayName="IconFlagCZ";var Icons_FlagCZ=FlagCZ_IconFlagCZ;try{FlagCZ.displayName="FlagCZ",FlagCZ.__docgenInfo={description:"",displayName:"FlagCZ",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/FlagCZ.tsx#FlagCZ"]={docgenInfo:FlagCZ.__docgenInfo,name:"FlagCZ",path:"src/components/Icons/FlagCZ.tsx#FlagCZ"})}catch(__react_docgen_typescript_loader_error){}var FlagDE_excluded=["alt"];function FlagDE_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function FlagDE_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FlagDE_IconFlagDE=function IconFlagDE(_ref){var alt=_ref.alt,props=FlagDE_objectWithoutProperties(_ref,FlagDE_excluded);return Object(jsx_runtime.jsxs)("svg",Object.assign({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{children:[Boolean(alt)&&Object(jsx_runtime.jsx)("title",{children:alt}),Object(jsx_runtime.jsx)("path",{d:"M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V5H0V2Z",fill:"#0D1234"}),Object(jsx_runtime.jsx)("path",{d:"M0 5H20V11H0V5Z",fill:"#CF2A20"}),Object(jsx_runtime.jsx)("path",{d:"M20 14C20 15.1046 19.1046 16 18 16L2 16C0.895432 16 7.8281e-08 15.1046 1.74846e-07 14L4.37114e-07 11L20 11L20 14Z",fill:"#FFD400"})]}))};FlagDE_IconFlagDE.displayName="IconFlagDE";var Icons_FlagDE=FlagDE_IconFlagDE;try{FlagDE.displayName="FlagDE",FlagDE.__docgenInfo={description:"",displayName:"FlagDE",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/FlagDE.tsx#FlagDE"]={docgenInfo:FlagDE.__docgenInfo,name:"FlagDE",path:"src/components/Icons/FlagDE.tsx#FlagDE"})}catch(__react_docgen_typescript_loader_error){}var FlagGB_excluded=["alt"];function FlagGB_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function FlagGB_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FlagGB_IconFlagGB=function IconFlagGB(_ref){var alt=_ref.alt,props=FlagGB_objectWithoutProperties(_ref,FlagGB_excluded);return Object(jsx_runtime.jsxs)("svg",Object.assign({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{children:[Boolean(alt)&&Object(jsx_runtime.jsx)("title",{children:alt}),Object(jsx_runtime.jsx)("path",{d:"M20 0H0V16H20V0Z",fill:"#084CA1"}),Object(jsx_runtime.jsx)("path",{d:"M20 0H17.4979L12.2874 4.16254V0H7.69856V4.33333L2.19095 0H0V2.16381L3.94986 5.28698H0V10.8298H3.91807L0 13.9752V16H2.59225L7.69856 11.9054V16H12.2874V11.8337L17.5631 16H20V13.9975L15.986 10.8292H20V5.28635H16.0058L20 2.08635V0Z",fill:"white"}),Object(jsx_runtime.jsx)("path",{d:"M6.4384 5.28635L0 0V1.39556L4.8103 5.28698H6.4384V5.28635Z",fill:"#ED1C24"}),Object(jsx_runtime.jsx)("path",{d:"M13.5709 10.8301L19.9999 16.0002V14.7025L15.199 10.8301H13.5709Z",fill:"#ED1C24"}),Object(jsx_runtime.jsx)("path",{d:"M7.69856 10.8297H6.3743L0 15.9999H1.52647L7.69856 11.0831V10.8291V10.8297Z",fill:"#ED1C24"}),Object(jsx_runtime.jsx)("path",{d:"M12.2874 5.28635H13.5204L20 0.129524V0H18.5418L12.2874 4.96V5.28635V5.28635Z",fill:"#ED1C24"}),Object(jsx_runtime.jsx)("path",{d:"M20 6.46286H11.3039V0H8.68199V6.46286H0V9.65333H8.68199V16H11.3039V9.65333H20V6.46286Z",fill:"#ED1C24"})]}))};FlagGB_IconFlagGB.displayName="IconFlagGB";var Icons_FlagGB=FlagGB_IconFlagGB;try{FlagGB.displayName="FlagGB",FlagGB.__docgenInfo={description:"",displayName:"FlagGB",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/FlagGB.tsx#FlagGB"]={docgenInfo:FlagGB.__docgenInfo,name:"FlagGB",path:"src/components/Icons/FlagGB.tsx#FlagGB"})}catch(__react_docgen_typescript_loader_error){}var FlagHU_excluded=["alt"];function FlagHU_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function FlagHU_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FlagHU_IconFlagHU=function IconFlagHU(_ref){var alt=_ref.alt,props=FlagHU_objectWithoutProperties(_ref,FlagHU_excluded);return Object(jsx_runtime.jsxs)("svg",Object.assign({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{children:[Boolean(alt)&&Object(jsx_runtime.jsx)("title",{children:alt}),Object(jsx_runtime.jsx)("rect",{x:"0.5",y:"0.5",width:"19",height:"15",rx:"1.5",fill:"white",stroke:"#F1F1F1"}),Object(jsx_runtime.jsx)("path",{d:"M20 14C20 15.1046 19.1046 16 18 16L2 16C0.895432 16 -7.8281e-08 15.1046 -1.74846e-07 14L-6.99382e-07 8L20 8L20 14Z",fill:"#FF5247"}),Object(jsx_runtime.jsx)("path",{d:"M2 16L10 8L2 -1.74846e-07C0.895431 -7.8281e-08 7.8281e-08 0.895431 1.74846e-07 2L1.22392e-06 14C1.32048e-06 15.1046 0.895432 16 2 16Z",fill:"#0729A0"})]}))};FlagHU_IconFlagHU.displayName="IconFlagHU";var Icons_FlagHU=FlagHU_IconFlagHU;try{FlagHU.displayName="FlagHU",FlagHU.__docgenInfo={description:"",displayName:"FlagHU",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/FlagHU.tsx#FlagHU"]={docgenInfo:FlagHU.__docgenInfo,name:"FlagHU",path:"src/components/Icons/FlagHU.tsx#FlagHU"})}catch(__react_docgen_typescript_loader_error){}var FlagIT_excluded=["alt"];function FlagIT_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function FlagIT_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FlagIT_IconFlagIT=function IconFlagIT(_ref){var alt=_ref.alt,props=FlagIT_objectWithoutProperties(_ref,FlagIT_excluded);return Object(jsx_runtime.jsxs)("svg",Object.assign({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{children:[Boolean(alt)&&Object(jsx_runtime.jsx)("title",{children:alt}),Object(jsx_runtime.jsx)("path",{d:"M4.5 2C4.5 1.17157 5.17157 0.5 6 0.5H15.5V15.5H6C5.17157 15.5 4.5 14.8284 4.5 14V2Z",fill:"white",stroke:"#F1F1F1"}),Object(jsx_runtime.jsx)("path",{d:"M20 14C20 15.1046 19.1046 16 18 16L14 16L14 -5.24537e-07L18 -1.74846e-07C19.1046 -7.8281e-08 20 0.895431 20 2L20 14Z",fill:"#CF2A20"}),Object(jsx_runtime.jsx)("path",{d:"M0 2C0 0.895431 0.895431 0 2 0H6V16H2C0.89543 16 0 15.1046 0 14V2Z",fill:"#00B17C"})]}))};FlagIT_IconFlagIT.displayName="IconFlagIT";var Icons_FlagIT=FlagIT_IconFlagIT;try{FlagIT.displayName="FlagIT",FlagIT.__docgenInfo={description:"",displayName:"FlagIT",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/FlagIT.tsx#FlagIT"]={docgenInfo:FlagIT.__docgenInfo,name:"FlagIT",path:"src/components/Icons/FlagIT.tsx#FlagIT"})}catch(__react_docgen_typescript_loader_error){}var FlagPL_excluded=["alt"];function FlagPL_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function FlagPL_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FlagPL_IconFlagPL=function IconFlagPL(_ref){var alt=_ref.alt,props=FlagPL_objectWithoutProperties(_ref,FlagPL_excluded);return Object(jsx_runtime.jsxs)("svg",Object.assign({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{children:[Boolean(alt)&&Object(jsx_runtime.jsx)("title",{children:alt}),Object(jsx_runtime.jsx)("rect",{x:"0.5",y:"0.5",width:"19",height:"15",rx:"1.5",fill:"white",stroke:"#F1F1F1"}),Object(jsx_runtime.jsx)("path",{d:"M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V8H0V2Z",fill:"#FF5247"})]}))};FlagPL_IconFlagPL.displayName="IconFlagPL";var Icons_FlagPL=FlagPL_IconFlagPL;try{FlagPL.displayName="FlagPL",FlagPL.__docgenInfo={description:"",displayName:"FlagPL",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/FlagPL.tsx#FlagPL"]={docgenInfo:FlagPL.__docgenInfo,name:"FlagPL",path:"src/components/Icons/FlagPL.tsx#FlagPL"})}catch(__react_docgen_typescript_loader_error){}var FlagUA_excluded=["alt"];function FlagUA_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function FlagUA_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FlagUA_IconFlagUA=function IconFlagUA(_ref){var alt=_ref.alt,props=FlagUA_objectWithoutProperties(_ref,FlagUA_excluded);return Object(jsx_runtime.jsxs)("svg",Object.assign({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{children:[Boolean(alt)&&Object(jsx_runtime.jsx)("title",{children:alt}),Object(jsx_runtime.jsx)("rect",{width:"20",height:"16",rx:"2",fill:"#1337B8"}),Object(jsx_runtime.jsx)("path",{d:"M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V8H0V2Z",fill:"#FFD400"})]}))};FlagUA_IconFlagUA.displayName="IconFlagUA";var Icons_FlagUA=FlagUA_IconFlagUA;try{FlagUA.displayName="FlagUA",FlagUA.__docgenInfo={description:"",displayName:"FlagUA",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/FlagUA.tsx#FlagUA"]={docgenInfo:FlagUA.__docgenInfo,name:"FlagUA",path:"src/components/Icons/FlagUA.tsx#FlagUA"})}catch(__react_docgen_typescript_loader_error){}var Flag_excluded=["alt","iso","rfc"];function Flag_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Flag_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var RFCToISO={cs:"cz",de:"de",en:"gb",hu:"hu",it:"it",pl:"pl",uk:"ua"},Icons_Flag=function IconFlag(_ref){var alt=_ref.alt,iso=_ref.iso,rfc=_ref.rfc,props=Flag_objectWithoutProperties(_ref,Flag_excluded);if(null==iso&&null==rfc)return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Flag not found"});switch(null!=rfc?RFCToISO[rfc.toLowerCase()]:null==iso?void 0:iso.toLowerCase()){case"cz":return Object(jsx_runtime.jsx)(Icons_FlagCZ,Object.assign({alt:alt},props));case"de":case"de":return Object(jsx_runtime.jsx)(Icons_FlagDE,Object.assign({alt:alt},props));case"gb":return Object(jsx_runtime.jsx)(Icons_FlagGB,Object.assign({alt:alt},props));case"hu":return Object(jsx_runtime.jsx)(Icons_FlagHU,Object.assign({alt:alt},props));case"it":return Object(jsx_runtime.jsx)(Icons_FlagIT,Object.assign({alt:alt},props));case"pl":case"pl":return Object(jsx_runtime.jsx)(Icons_FlagPL,Object.assign({alt:alt},props));case"ua":return Object(jsx_runtime.jsx)(Icons_FlagUA,Object.assign({alt:alt},props));default:return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Flag not found"})}};try{Flag.displayName="Flag",Flag.__docgenInfo={description:"",displayName:"Flag",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},iso:{defaultValue:null,description:"",name:"iso",required:!1,type:{name:"string"}},rfc:{defaultValue:null,description:"",name:"rfc",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/Flag.tsx#Flag"]={docgenInfo:Flag.__docgenInfo,name:"Flag",path:"src/components/Icons/Flag.tsx#Flag"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Sylnishi/Icons/IconFlag",component:Icons_Flag};var Flag_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Icons_Flag,Object.assign({},args))};Flag_stories_Template.displayName="Template";var Flag_stories_FlagCZ=Flag_stories_Template.bind({});Flag_stories_FlagCZ.args={iso:"cz",rfc:"cs"};var Flag_stories_FlagDE=Flag_stories_Template.bind({});Flag_stories_FlagDE.args={iso:"de",rfc:"de"};var Flag_stories_FlagGB=Flag_stories_Template.bind({});Flag_stories_FlagGB.args={iso:"gb",rfc:"en"};var Flag_stories_FlagHU=Flag_stories_Template.bind({});Flag_stories_FlagHU.args={iso:"hu",rfc:"hu"};var Flag_stories_FlagIT=Flag_stories_Template.bind({});Flag_stories_FlagIT.args={iso:"it",rfc:"it"};var Flag_stories_FlagPL=Flag_stories_Template.bind({});Flag_stories_FlagPL.args={iso:"pl",rfc:"pl"};var Flag_stories_FlagUA=Flag_stories_Template.bind({});Flag_stories_FlagUA.args={iso:"ua",rfc:"uk"};var FlagNotFound=Flag_stories_Template.bind({});FlagNotFound.args={iso:"-",rfc:"-"},Flag_stories_FlagCZ.parameters=Object.assign({storySource:{source:"(args) => <IconFlag {...args} />"}},Flag_stories_FlagCZ.parameters),Flag_stories_FlagDE.parameters=Object.assign({storySource:{source:"(args) => <IconFlag {...args} />"}},Flag_stories_FlagDE.parameters),Flag_stories_FlagGB.parameters=Object.assign({storySource:{source:"(args) => <IconFlag {...args} />"}},Flag_stories_FlagGB.parameters),Flag_stories_FlagHU.parameters=Object.assign({storySource:{source:"(args) => <IconFlag {...args} />"}},Flag_stories_FlagHU.parameters),Flag_stories_FlagIT.parameters=Object.assign({storySource:{source:"(args) => <IconFlag {...args} />"}},Flag_stories_FlagIT.parameters),Flag_stories_FlagPL.parameters=Object.assign({storySource:{source:"(args) => <IconFlag {...args} />"}},Flag_stories_FlagPL.parameters),Flag_stories_FlagUA.parameters=Object.assign({storySource:{source:"(args) => <IconFlag {...args} />"}},Flag_stories_FlagUA.parameters),FlagNotFound.parameters=Object.assign({storySource:{source:"(args) => <IconFlag {...args} />"}},FlagNotFound.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);