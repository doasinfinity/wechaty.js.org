(self.webpackChunk=self.webpackChunk||[]).push([[8864],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||l[m]||a;return r?o.createElement(b,i(i({ref:t},d),{},{components:r})):o.createElement(b,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7610:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var o=r(9603),n=r(120),a=(r(7378),r(5318)),i={title:"Room Bot"},c={unversionedId:"examples/advanced/room-bot",id:"examples/advanced/room-bot",isDocsHomePage:!1,title:"Room Bot",description:"Powered by Wechaty",source:"@site/docs/examples/advanced/room-bot.md",sourceDirName:"examples/advanced",slug:"/examples/advanced/room-bot",permalink:"/docs/examples/advanced/room-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples/advanced/room-bot.md",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",frontMatter:{title:"Room Bot"},sidebar:"docs",previous:{title:"Media File Bot",permalink:"/docs/examples/advanced/media-file-bot"},next:{title:"Friend Bot",permalink:"/docs/examples/advanced/friend-bot"}},s=[{value:"Try out the bot",id:"try-out-the-bot",children:[]}],p={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-JavaScript-blue.svg",alt:"JavaScript"}))),(0,a.kt)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/sbis04/wechaty-room-bot/tree/main/?fontsize=12&hidenavigation=1&module=%2Froom-bot.js&theme=dark"},(0,a.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-room-bot"}))),(0,a.kt)("p",null,"You can try out the ",(0,a.kt)("strong",{parentName:"p"},"Wechaty Room bot")," using this interactive CodeSandbox."),(0,a.kt)("p",null,"There is a ",(0,a.kt)("inlineCode",{parentName:"p"},"TODO")," where you have to specify one of your friends' name (the CodeSandbox can be edited by using the above button). After that just scan the generated QR code with the ",(0,a.kt)("strong",{parentName:"p"},"WeChat")," app, and you are ready to play with the bot!"),(0,a.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/sbis04/wechaty-room-bot/tree/main/?fontsize=12&hidenavigation=1&module=%2Froom-bot.js&theme=dark",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}d.isMDXComponent=!0}}]);