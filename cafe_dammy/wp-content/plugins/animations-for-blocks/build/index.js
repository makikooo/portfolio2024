(()=>{var e,n={678:(e,n,a)=>{"use strict";const t=window.wp.domReady;var o=a.n(t);const l=window.wp.element,i=(window.React,window.wp.hooks),s=window.wp.blocks,r=window.wp.compose,c=window.wp.i18n,m=window.wp.blockEditor,u=window.wp.components,b=window.wp.data,d=window.wp.notices,f=window.wp.keycodes,_=window.wp.primitives,p=(0,l.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(_.Path,{d:"M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"})),h=(0,l.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(_.Path,{d:"m7 6.5 4 2.5-4 2.5z"}),(0,l.createElement)(_.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"m5 3c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h14c1.1046 0 2-.8954 2-2v-14c0-1.10457-.8954-2-2-2zm14 1.5h-14c-.27614 0-.5.22386-.5.5v10.7072l3.62953-2.6465c.25108-.1831.58905-.1924.84981-.0234l2.92666 1.8969 3.5712-3.4719c.2911-.2831.7545-.2831 1.0456 0l2.9772 2.8945v-9.3568c0-.27614-.2239-.5-.5-.5zm-14.5 14.5v-1.4364l4.09643-2.987 2.99567 1.9417c.2936.1903.6798.1523.9307-.0917l3.4772-3.3806 3.4772 3.3806.0228-.0234v2.5968c0 .2761-.2239.5-.5.5h-14c-.27614 0-.5-.2239-.5-.5z"})),k=(0,l.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(_.Path,{d:"M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"})),v=(0,l.createElement)(_.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(_.Path,{d:"M16 4.2v1.5h2.5v12.5H16v1.5h4V4.2h-4zM4.2 19.8h4v-1.5H5.8V5.8h2.5V4.2h-4l-.1 15.6zm5.1-3.1l1.4.6 4-10-1.4-.6-4 10z"})),w=(0,l.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(_.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),g=(0,l.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(_.Path,{d:"M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"})),E=(0,l.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(_.Path,{d:"M5 11.25h14v1.5H5z"}));function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},y.apply(this,arguments)}var C=a(184),S=a.n(C);const x=e=>{const{id:n,label:a,hideLabelFromVision:t=!1,help:o,className:i,options:s=[],value:c=[],onChange:m,pills:b=!1,fluid:d=!1,isSmall:f=!1}=e,_=(0,r.useInstanceId)(s,"wsd-anfb-button-group",n);return(0,l.createElement)(u.BaseControl,{id:_,className:S()("wsd-anfb__button-group",{"wsd-anfb__button-group--fluid":d,"wsd-anfb__button-group--pills":b},i),label:a,help:o,hideLabelFromVision:t},(0,l.createElement)(u.ButtonGroup,null,s.map((e=>{let{label:n,value:a}=e;const t=c.includes(a);return(0,l.createElement)(u.Button,y({key:a,isSmall:f,variant:t?"primary":"secondary",children:n},m&&{onClick:()=>{m(t?c.filter((e=>e!==a)):c.concat(a))}}))}))))};x.Radio=e=>{let{className:n,value:a,onChange:t,...o}=e;return(0,l.createElement)(x,y({className:S()("wsd-anfb__button-group-radio",n),value:a?[a]:[]},t&&{onChange:e=>{t(e.length>0?e[e.length-1]:"")}},o))};const B=x,F=[{label:"0",value:0},{label:`500${(0,c._x)("ms","Milliseconds","animations-for-blocks")}`,value:500},{label:`1${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:1e3},{label:`1.5${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:1500},{label:`2${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:2500},{label:`2.5${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:2e3},{label:`3${(0,c._x)("s","Seconds","animations-for-blocks")}`,value:3e3}],P=e=>`${e}${(0,c._x)("ms","Milliseconds","animations-for-blocks")}`,A=e=>{let{label:n,value:a,onChange:t}=e;return(0,l.createElement)(u.RangeControl,{className:"wsd-anfb__range-control",label:n,value:a,onChange:t,min:0,step:50,max:3e3,withInputField:!1,marks:F,renderTooltipContent:P,__nextHasNoMarginBottom:!0})},M=e=>{let{onRequestClose:n}=e;return(0,l.createElement)(u.Modal,{className:"wsd-anfb__help",title:(0,c.__)("Animations for Blocks help","animations-for-blocks"),onRequestClose:n},(0,l.createElement)("div",{className:"wsd-anfb__help__content"},(0,l.createElement)("h3",null,(0,c.__)("Options","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Animation","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Allows to select the type of animation you wish to use: Fade, Flip, Slide or Zoom. Set to None if you no longer wish to animate that block.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Animation variation","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Allows to switch between the different variations of the selected animation, such as Fade in, Fade down, Slide left, Slide right, Zoom in, Zoom out, Zoom out left, etc.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Animation delay","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Time in milliseconds to delay the animation (0 - 3000ms). Increasing this value will delay the appearance of the animated element.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Animation duration","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Time in milliseconds that the animation takes to complete (0 - 3000ms). Increasing this value will make the animation play longer.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Once","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("When enabled, animation will only happen once, when scrolling down the page for the first time. When user scrolls up again and then down, then the block will no longer animate.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Mirror","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("When enabled, elements will animate out once the user has scrolled past them and will animate in when the user scrolls up again.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Easing","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Allows to change between various CSS transition timing functions for the animation making it unfold differently.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Anchor placement","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Allows to control what part of the animated element should trigger the animation when it becomes visible in the viewport.","animations-for-blocks")),(0,l.createElement)("h4",null,(0,c.__)("Offset","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)("Controls the offset (in pixels) from the original trigger point at which the animation should trigger in the viewport.","animations-for-blocks")),(0,l.createElement)("h3",null,(0,c.__)("Broken block","animations-for-blocks")),(0,l.createElement)("p",null,(0,c.__)('If you enabled animation and the block broke it means it is not supported. Feel free to report it. To restore the block in working condition try "Undo", if possible "Attempt Block Recovery", or change to "Code editor" (Ctrl + Shift + Alt + M) and remove the animation attributes (eg: \'"animationsForBlocks":{"animation":"fade"}\') from the broken block.',"animations-for-blocks"))))},O=window.wp.coreData;window.anfbData||(window.anfbData={unsupportedBlocks:[],settings:V});const z=window.anfbData.unsupportedBlocks,I=window.anfbData.settings,V={animateInEditor:!0,lazyloadAssets:!1},R=({onRequestClose:e})=>{const[n,a]=(()=>{const[e=I,n]=(0,O.useEntityProp)("root","site","animations-for-blocks");return[e,n]})(),{animateInEditor:t,lazyloadAssets:o}=n;return(0,l.createElement)(u.Modal,{className:"wsd-anfb__settings",title:(0,c.__)("Animations for Blocks settings","animations-for-blocks"),onRequestClose:e},(0,l.createElement)(u.__experimentalVStack,{className:"wsd-anfb__settings__content"},(0,l.createElement)(u.ToggleControl,{label:(0,c.__)("Automatic animation preview","animations-for-blocks"),help:(0,c.__)("Play block animations in the editor automatically.","animations-for-blocks"),checked:t,onChange:()=>a({...n,animateInEditor:!t})}),(0,l.createElement)(u.ToggleControl,{label:(0,c.__)("Lazyload assets","animations-for-blocks"),help:(0,c.__)("Load assets only when a block with an animation is present on the current page.","animations-for-blocks"),checked:o,onChange:()=>a({...n,lazyloadAssets:!o})})))},N=[{label:(0,c.__)("Fade","animations-for-blocks"),value:"fade"},{label:(0,c.__)("Flip","animations-for-blocks"),value:"flip"},{label:(0,c.__)("Slide","animations-for-blocks"),value:"slide"},{label:(0,c.__)("Zoom","animations-for-blocks"),value:"zoom"}],T={fade:[{label:(0,c.__)("Fade in","animations-for-blocks"),value:"fade"},{label:(0,c.__)("Fade up","animations-for-blocks"),value:"up"},{label:(0,c.__)("Fade down","animations-for-blocks"),value:"down"},{label:(0,c.__)("Fade left","animations-for-blocks"),value:"left"},{label:(0,c.__)("Fade right","animations-for-blocks"),value:"right"},{label:(0,c.__)("Fade up left","animations-for-blocks"),value:"up-left"},{label:(0,c.__)("Fade up right","animations-for-blocks"),value:"up-right"},{label:(0,c.__)("Fade down left","animations-for-blocks"),value:"down-left"},{label:(0,c.__)("Fade down right","animations-for-blocks"),value:"down-right"}],flip:[{label:(0,c.__)("Flip up","animations-for-blocks"),value:"up"},{label:(0,c.__)("Flip down","animations-for-blocks"),value:"down"},{label:(0,c.__)("Flip left","animations-for-blocks"),value:"left"},{label:(0,c.__)("Flip right","animations-for-blocks"),value:"right"}],slide:[{label:(0,c.__)("Slide up","animations-for-blocks"),value:"up"},{label:(0,c.__)("Slide down","animations-for-blocks"),value:"down"},{label:(0,c.__)("Slide left","animations-for-blocks"),value:"left"},{label:(0,c.__)("Slide right","animations-for-blocks"),value:"right"}],zoom:[{label:(0,c.__)("Zoom in","animations-for-blocks"),value:"in"},{label:(0,c.__)("Zoom in up","animations-for-blocks"),value:"in-up"},{label:(0,c.__)("Zoom in down","animations-for-blocks"),value:"in-down"},{label:(0,c.__)("Zoom in left","animations-for-blocks"),value:"in-left"},{label:(0,c.__)("Zoom in right","animations-for-blocks"),value:"in-right"},{label:(0,c.__)("Zoom out","animations-for-blocks"),value:"out"},{label:(0,c.__)("Zoom out up","animations-for-blocks"),value:"out-up"},{label:(0,c.__)("Zoom out down","animations-for-blocks"),value:"out-down"},{label:(0,c.__)("Zoom out left","animations-for-blocks"),value:"out-left"},{label:(0,c.__)("Zoom out right","animations-for-blocks"),value:"out-right"}]},q=[{label:(0,c.__)("ease","animations-for-blocks"),value:"ease"},{label:(0,c.__)("ease-in","animations-for-blocks"),value:"ease-in"},{label:(0,c.__)("ease-out","animations-for-blocks"),value:"ease-out"},{label:(0,c.__)("ease-in-out","animations-for-blocks"),value:"ease-in-out"},{label:(0,c.__)("ease-in-back","animations-for-blocks"),value:"ease-in-back"},{label:(0,c.__)("ease-out-back","animations-for-blocks"),value:"ease-out-back"},{label:(0,c.__)("ease-in-out-back","animations-for-blocks"),value:"ease-in-out-back"},{label:(0,c.__)("ease-in-sine","animations-for-blocks"),value:"ease-in-sine"},{label:(0,c.__)("ease-out-sine","animations-for-blocks"),value:"ease-out-sine"},{label:(0,c.__)("ease-in-out-sine","animations-for-blocks"),value:"ease-in-out-sine"},{label:(0,c.__)("ease-in-quad","animations-for-blocks"),value:"ease-in-quad"},{label:(0,c.__)("ease-out-quad","animations-for-blocks"),value:"ease-out-quad"},{label:(0,c.__)("ease-in-out-quad","animations-for-blocks"),value:"ease-in-out-quad"},{label:(0,c.__)("ease-in-cubic","animations-for-blocks"),value:"ease-in-cubic"},{label:(0,c.__)("ease-out-cubic","animations-for-blocks"),value:"ease-out-cubic"},{label:(0,c.__)("ease-in-out-cubic","animations-for-blocks"),value:"ease-in-out-cubic"},{label:(0,c.__)("ease-in-quart","animations-for-blocks"),value:"ease-in-quart"},{label:(0,c.__)("ease-out-quart","animations-for-blocks"),value:"ease-out-quart"},{label:(0,c.__)("ease-in-out-quart","animations-for-blocks"),value:"ease-in-out-quart"},{label:(0,c.__)("linear","animations-for-blocks"),value:"linear"}],$=[{label:(0,c.__)("top-bottom","animations-for-blocks"),value:"top-bottom"},{label:(0,c.__)("center-bottom","animations-for-blocks"),value:"center-bottom"},{label:(0,c.__)("bottom-bottom","animations-for-blocks"),value:"bottom-bottom"},{label:(0,c.__)("top-center","animations-for-blocks"),value:"top-center"},{label:(0,c.__)("center-center","animations-for-blocks"),value:"center-center"},{label:(0,c.__)("bottom-center","animations-for-blocks"),value:"bottom-center"},{label:(0,c.__)("top-top","animations-for-blocks"),value:"top-top"},{label:(0,c.__)("bottom-top","animations-for-blocks"),value:"bottom-top"},{label:(0,c.__)("center-top","animations-for-blocks"),value:"center-top"}],H=[{value:"px",label:"web"===l.Platform.OS?"px":(0,c.__)("Pixels (px)","animations-for-blocks"),a11yLabel:(0,c.__)("Pixels (px)","animations-for-blocks"),step:1}],L=(0,l.createElement)(u.Icon,{icon:(0,l.createElement)(l.Fragment,null,(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:20,height:20,fill:"currentColor"},(0,l.createElement)("path",{d:"M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"})))}),j="anfb:animate",Z=new CustomEvent(j),D="anfb:",G="wsd-anfb-paste",U=({clientId:e,attributes:n,setAttributes:a})=>{const{animationsForBlocks:t={}}=n,{animation:o,variation:i,delay:s=0,duration:_=400,once:y=!1,mirror:C=!1,easing:x=q[0].value,anchorPlacement:F=$[0].value,offset:P=120}=t,O=!(!o||"none"===o),[z,I]=(0,l.useState)(!1),[V,U]=(0,l.useState)(!1),[W,J]=(0,l.useState)(!1),[K,Q]=(0,l.useState)(!1),X=(0,l.useRef)(null),{createSuccessNotice:Y,createErrorNotice:ee}=(0,b.useDispatch)(d.store),ne=(0,r.useCopyToClipboard)((()=>`${D}${JSON.stringify(t)}`),(()=>Y((0,c.__)("Copied animation settings to clipboard.","animations-for-blocks"),{type:"snackbar"})));(0,l.useEffect)((()=>{X.current=new CustomEvent(`${j}:${e}`)}),[e]),(0,l.useEffect)((()=>{K&&document.getElementById(G)?.focus()}),[K]);const ae=e=>{a({animationsForBlocks:{...t,...e}})},te=e=>{const n=()=>ee((0,c.__)("Invalid animation.","animations-for-blocks"),{type:"snackbar"});if(0!==e.indexOf(D))return void n();let a={};try{a=JSON.parse(e.replace(D,""))}catch(e){return void n()}const{animation:t}=a;if(!t)return void n();const o=N.find((({value:e})=>e===t));o?(ae(a),Y((0,c.sprintf)((0,c.__)("Applied animation: %s.","animations-for-blocks"),o.label),{type:"snackbar"})):n()};return(0,l.createElement)(m.InspectorControls,null,(0,l.createElement)(u.Panel,{className:"wsd-anfb"},(0,l.createElement)(u.PanelHeader,null,(0,l.createElement)(u.__experimentalHStack,{alignment:"center",justify:"space-between"},(0,l.createElement)("h2",{style:{margin:0}},(0,c.__)("Animation","animations-for-blocks")),(0,l.createElement)(u.DropdownMenu,{icon:p,label:(0,c.__)("More actions","animations-for-blocks"),toggleProps:{isSmall:!0}},(({onClose:e})=>(0,l.createElement)(l.Fragment,null,(0,l.createElement)(u.MenuGroup,{className:"wsd-anfb__menu-group"},(0,l.createElement)(u.MenuItem,{icon:L,children:(0,c.__)("Animate block","animations-for-blocks"),disabled:!O,onClick:()=>{X.current&&document.dispatchEvent(X.current),e()}}),(0,l.createElement)(u.MenuItem,{icon:h,children:(0,c.__)("Animate all blocks","animations-for-blocks"),onClick:()=>{document.dispatchEvent(Z),e()}}),(0,l.createElement)(u.MenuItem,{icon:k,children:(0,c.__)("Copy animation","animations-for-blocks"),disabled:!O,ref:ne,onClick:()=>{e()}}),(0,l.createElement)(u.MenuItem,{icon:v,onClick:async()=>{window.navigator.clipboard?(te(await window.navigator.clipboard.readText()),e()):Q(!0)}},K&&(0,l.createElement)(m.RichText,{id:G,tagName:"span",placeholder:(0,c.sprintf)((0,c._x)("Press %s…","Keyboard shortcut","animations-for-blocks"),f.displayShortcut.primary("v")),value:"",onChange:n=>{te(n),Q(!1),e()}}),!K&&(0,c.__)("Paste animation","animations-for-blocks")),(0,l.createElement)(u.MenuItem,{icon:w,children:(0,c.__)("Help","animations-for-blocks"),onClick:()=>{I(!0),e()}}),(0,l.createElement)(u.MenuItem,{icon:g,children:(0,c.__)("Settings","animations-for-blocks"),onClick:()=>{U(!0),e()}})),Object.keys(t).length>0&&(0,l.createElement)(u.MenuGroup,null,(0,l.createElement)(u.MenuItem,{icon:E,children:(0,c.__)("Reset all","animations-for-blocks"),onClick:()=>{a({animationsForBlocks:void 0}),e()}}))))))),(0,l.createElement)(u.PanelBody,null,(0,l.createElement)(u.__experimentalVStack,{spacing:4},(0,l.createElement)(B.Radio,{pills:!0,label:(0,c.__)("Select animation","animations-for-blocks"),hideLabelFromVision:!0,options:N,value:o,onChange:e=>{const n=!(!e||"none"===e),a=n?T[e].map((e=>e.value)):[],t=n?i&&a.includes(i)?i:a[0]:i;ae({animation:e,variation:t})}}),O&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(B.Radio,{isSmall:!0,pills:!0,label:(0,c.__)("Animation variation","animations-for-blocks"),hideLabelFromVision:!0,options:T[o],value:i||T[o][0].value,onChange:e=>ae({variation:e})}),(0,l.createElement)(A,{label:(0,c.__)("Duration","animations-for-blocks"),value:_,onChange:e=>ae({duration:e})}),(0,l.createElement)(A,{label:(0,c.__)("Delay","animations-for-blocks"),value:s,onChange:e=>ae({delay:e})}),(0,l.createElement)(u.Button,{variant:"secondary",isSmall:!0,className:S()("wsd-anfb__button",{"wsd-anfb__button-active":W}),onClick:()=>J(!W)},(0,l.createElement)(u.__experimentalHStack,{alignment:"center",justify:"center"},(0,l.createElement)(u.Icon,{icon:g,size:16}),(0,l.createElement)("span",null,(0,c.__)("Advanced settings","animations-for-blocks")))),W&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(u.ToggleControl,{label:(0,c.__)("Once","animations-for-blocks"),help:(0,c.__)("Animate only once, when scrolling down for the first time.","animations-for-blocks"),checked:y,onChange:()=>ae({once:!y,mirror:!y&&C?!C:C})}),(0,l.createElement)(u.ToggleControl,{label:(0,c.__)("Mirror","animations-for-blocks"),help:(0,c.__)("Animate out after scrolling past the element and in when scrolling up again.","animations-for-blocks"),checked:C,onChange:()=>ae({mirror:!C,once:!C&&y?!y:y})}),(0,l.createElement)(B.Radio,{isSmall:!0,pills:!0,label:(0,c.__)("Easing","animations-for-blocks"),help:(0,c.__)("Transition timing function.","animations-for-blocks"),options:q,value:x,onChange:e=>x!==e&&ae({easing:e})}),(0,l.createElement)(B.Radio,{isSmall:!0,pills:!0,label:(0,c.__)("Anchor placement","animations-for-blocks"),help:(0,c.__)("Defines which position of the element regarding to window should trigger the animation.","animations-for-blocks"),options:$,value:F,onChange:e=>F!==e&&ae({anchorPlacement:e})}),(0,l.createElement)(u.__experimentalUnitControl,{label:(0,c.__)("Offset","animations-for-blocks"),help:(0,c.__)("Offset from the original trigger point.","animations-for-blocks"),type:"number",value:`${P}px`,isDragEnabled:!1,isUnitSelectTabbable:!1,units:H,onChange:(e="120")=>ae({offset:parseInt(e.replace("px",""))})})))))),z&&(0,l.createElement)(M,{onRequestClose:()=>I(!1)}),V&&(0,l.createElement)(R,{onRequestClose:()=>U(!1)}))},W=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save",a={};if(!e)return a;const{animation:t,variation:o,delay:l,duration:i,once:s,mirror:r,easing:c,offset:m,anchorPlacement:u}=e;return t&&"none"!==t?(a["data-aos"]=t===o?t:t+"-"+o,l&&0!==l&&(a["data-aos-delay"]=l.toString()),i&&400!==i&&(a["data-aos-duration"]=i.toString()),c&&"ease"!==c&&(a["data-aos-easing"]=c),"edit"===n||(s&&(a["data-aos-once"]="true"),r&&(a["data-aos-mirror"]="true"),m&&120!==m&&(a["data-aos-offset"]=m.toString()),u&&"top-bottom"!==u&&(a["data-aos-anchor-placement"]=u)),a):a},J=e=>{const{BlockListBlock:n,...a}=e,{clientId:t,attributes:o,wrapperProps:i={}}=a,{animationsForBlocks:s={}}=o,{animation:r,delay:c=0,duration:u=400}=s,{animateInEditor:b}=(()=>{const[,,e=I]=(0,O.useEntityProp)("root","site","animations-for-blocks");return e})(),d=!(!r||"none"===r),[f,_]=(0,l.useState)(!1),[p,h]=(0,l.useState)(!b),k=(0,l.useRef)(c+u),v=(0,l.useRef)([]),w=(0,l.useContext)(m.BlockList.__unstableElementContext);(0,l.useEffect)((()=>{k.current=c+u}),[c,u]);const g=(0,l.useCallback)((()=>{if(v.current.forEach(clearTimeout),_(!1),h(!0),w){const e=w.querySelector(`#block-${t}`);e&&(e.style.removeProperty("transform-origin"),e.style.removeProperty("transform"),e.style.removeProperty("z-index"))}v.current=[setTimeout((()=>h(!1)),50)]}),[t,w]);return(0,l.useEffect)((()=>{const{animation:e}=s;e&&"none"!==e&&b&&g()}),[s,g,b]),(0,l.useEffect)((()=>{p||(v.current.forEach(clearTimeout),v.current=[setTimeout((()=>_(!0)),50)])}),[p]),(0,l.useEffect)((()=>{f&&v.current.push(setTimeout((()=>{_(!1),h(!0)}),k.current))}),[f]),(0,l.useEffect)((()=>(document.addEventListener(`${j}:${t}`,g),document.addEventListener(j,g),()=>{v.current.forEach(clearTimeout),document.removeEventListener(`${j}:${t}`,g),document.removeEventListener(j,g)})),[t,g]),(0,l.createElement)(n,{...a,wrapperProps:{...i,...d&&{...W(s,"edit"),className:S()(i.className,{"aos-init":d,"aos-animate":f||p,"wsd-anfb-is-animating":f}),...d&&{"data-anfb-init":!0},...(f||p)&&{"data-anfb-animate":!0},...f&&{"data-anfb-is-animating":!0}}}})},K=(0,i.applyFilters)("anfb.defaultEnabled",!0),Q=e=>{const n=e.name||e;return!z.includes(n)&&(0,s.hasBlockSupport)(e,"animationsForBlocks",K)},X={animationsForBlocks:{type:"object"}},Y=(0,r.createHigherOrderComponent)((function(e){return function(n){return Q(n.name)?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(e,{...n}),(0,l.createElement)(U,{...n})):(0,l.createElement)(e,{...n})}}),"withAnimationsForBlocksInspectorControls"),ee=(0,r.createHigherOrderComponent)((e=>n=>Q(n.name)?(0,l.createElement)(J,{...n,BlockListBlock:e}):(0,l.createElement)(e,{...n})),"withAnimatedBlockListBlock"),ne={apiVersion:2,title:(0,c.__)("Animation container","animations-for-blocks"),description:(0,c.__)("A container that can be animated. Can be used to animate dynamic or other unsupported blocks.","animations-for-blocks"),icon:"media-interactive",category:"design",attributes:{},supports:{anchor:!0,animationsForBlocks:!0},edit:e=>{const n=(0,m.useBlockProps)(),a=(0,m.useInnerBlocksProps)(n);return(0,l.createElement)("div",a)},save:e=>{const n=m.useBlockProps.save(),a=m.useInnerBlocksProps.save(n);return(0,l.createElement)("div",a)}};(0,i.addFilter)("blocks.registerBlockType","wsd-anfb/attributes",(function(e){return Q(e)&&(e.attributes=Object.assign(e.attributes||{},X)),e})),(0,i.addFilter)("editor.BlockEdit","wsd-anfb/inspector-controls",Y),(0,i.addFilter)("blocks.getSaveContent.extraProps","wsd-anfb/animation-props",((e,n,a)=>{if(Q(n)){const{animationsForBlocks:n={}}=a,t=W(n);t["data-aos"]&&(e={...e,...t})}return e})),(0,i.addFilter)("editor.BlockListBlock","wsd-anfb/blocklistblock-animation",ee),o()((()=>{(0,s.registerBlockType)("anfb/animation-container",ne)}))},184:(e,n)=>{var a;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var i=o.apply(null,a);i&&e.push(i)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(n,[]))||(e.exports=a)}()}},a={};function t(e){var o=a[e];if(void 0!==o)return o.exports;var l=a[e]={exports:{}};return n[e](l,l.exports,t),l.exports}t.m=n,e=[],t.O=(n,a,o,l)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){a=e[m][0],o=e[m][1],l=e[m][2];for(var s=!0,r=0;r<a.length;r++)(!1&l||i>=l)&&Object.keys(t.O).every((e=>t.O[e](a[r])))?a.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(m--,1);var c=o();void 0!==c&&(n=c)}}return n}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[a,o,l]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={826:0,431:0};t.O.j=n=>0===e[n];var n=(n,a)=>{var o,l,i=a[0],s=a[1],r=a[2],c=0;if(i.some((n=>0!==e[n]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(r)var m=r(t)}for(n&&n(a);c<i.length;c++)l=i[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(m)},a=self.webpackChunkanimations_for_blocks=self.webpackChunkanimations_for_blocks||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))})();var o=t.O(void 0,[431],(()=>t(678)));o=t.O(o)})();