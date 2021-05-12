(self.webpackChunk=self.webpackChunk||[]).push([[9322],{5318:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return y}});var n=r(7378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=c(r),y=a,g=h["".concat(s,".").concat(y)]||h[y]||p[y]||o;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6436:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(9603),a=r(120),o=(r(7378),r(5318)),i={slug:"/polyglot/rust/",title:"Rust Wechaty",sidebar_label:"Rust"},l={unversionedId:"polyglot/rust/overview",id:"polyglot/rust/overview",isDocsHomePage:!1,title:"Rust Wechaty",description:"Rust Wechaty",source:"@site/docs/polyglot/rust/overview.md",sourceDirName:"polyglot/rust",slug:"/polyglot/rust/",permalink:"/docs/polyglot/rust/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/rust/overview.md",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"Rust",frontMatter:{slug:"/polyglot/rust/",title:"Rust Wechaty",sidebar_label:"Rust"},sidebar:"docs",previous:{title:".NET Wechaty",permalink:"/docs/polyglot/dotnet/"},next:{title:"Polyglot: DIY",permalink:"/docs/polyglot/diy/"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],c={toc:s};function u(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/rust-wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-Rust-f42",alt:"Rust Wechaty"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/rust-wechaty"},"https://github.com/wechaty/rust-wechaty")),(0,o.kt)("li",{parentName:"ul"},"Getting Started Template Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/rust-wechaty-getting-started"},"https://github.com/wechaty/rust-wechaty-getting-started"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Template Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/rust-wechaty-getting-started"},"https://github.com/wechaty/rust-wechaty-getting-started")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/rust-wechaty-getting-started.git\ncd rust-wechaty-getting-started\nmake install\nmake bot\n")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("p",null,"Read blogs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"rust")," tag at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#rust"},"https://wechaty.js.org/tags.html#rust")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/rust-wechaty/"},"Rust Wechaty, @lucifer1004, Mar 22, 2021"))),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lucifer1004"},"@lucifer1004"))))}u.isMDXComponent=!0}}]);