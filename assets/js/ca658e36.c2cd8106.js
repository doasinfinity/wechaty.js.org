(self.webpackChunk=self.webpackChunk||[]).push([[1983,6590,8594],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3596:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7378),a=r(8944),i="tableOfContentsInline_1jjz";function o(e){var t=e.toc,r=e.isChild;return t.length?n.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return n.createElement("div",{className:(0,a.Z)(i)},n.createElement(o,{toc:t}))}},2785:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},Toc:function(){return p},default:function(){return d}});var n=r(9603),a=r(120),i=(r(7378),r(5318)),o=r(3596),s={slug:"/api/",title:"Wechaty API reference overview",sidebar_label:"API: Overview"},c={unversionedId:"api/overview",id:"api/overview",isDocsHomePage:!1,title:"Wechaty API reference overview",description:"The Wechaty API surface is tiny. Wechaty defines a set of easy to use classes for you.",source:"@site/docs/api/overview.mdx",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/overview.mdx",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"API: Overview",frontMatter:{slug:"/api/",title:"Wechaty API reference overview",sidebar_label:"API: Overview"},sidebar:"docs",previous:{title:"Wechaty references overview",permalink:"/docs/references/"},next:{title:"Wechaty",permalink:"/docs/api/wechaty"}},l=[{value:"Top-level Exports",id:"top-level-exports",children:[{value:"Wechaty Class",id:"wechaty-class",children:[]},{value:"User Classes",id:"user-classes",children:[]}]},{value:"Importing",id:"importing",children:[{value:"ES6/TypeScript",id:"es6typescript",children:[]},{value:"ES5 (CommonJS)",id:"es5-commonjs",children:[]}]}],p=function(){return(0,i.kt)(o.Z,{toc:l,mdxType:"TOCInline"})},u={toc:l,Toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Wechaty API surface is tiny. Wechaty defines a set of easy to use classes for you."),(0,i.kt)("p",null,"This section documents the complete Wechaty API."),(0,i.kt)("h2",{id:"top-level-exports"},"Top-level Exports"),(0,i.kt)("p",null,"Every class described below is a top-level export."),(0,i.kt)("h3",{id:"wechaty-class"},"Wechaty Class"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./wechaty"},"Class Wechaty"))),(0,i.kt)("h3",{id:"user-classes"},"User Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./message"},"Class Message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./contact"},"Class Contact"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./contact-self"},"Class ContactSelf")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./room"},"Class Room"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./room-invitation"},"Class RoomInvitation")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./friendship"},"Class Friendship"))),(0,i.kt)("h2",{id:"importing"},"Importing"),(0,i.kt)("p",null,"You can import any of them like this:"),(0,i.kt)("h3",{id:"es6typescript"},"ES6/TypeScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Wechaty } from 'wechaty'\n")),(0,i.kt)("h3",{id:"es5-commonjs"},"ES5 (CommonJS)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var Wechaty = require('wechaty').Wechaty\n")))}d.isMDXComponent=!0},6350:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(9603),a=r(120),i=(r(7378),r(5318)),o=(r(2785),r(7388),{slug:"/references/",title:"Wechaty references overview",sidebar_label:"References: Overview"}),s={unversionedId:"references/overview",id:"references/overview",isDocsHomePage:!1,title:"Wechaty references overview",description:"References contain technical reference for APIs and other aspects of Wechaty's machinery. They describe how it works and how to use it but assume that you have a basic understanding of key concepts.",source:"@site/docs/references/overview.mdx",sourceDirName:"references",slug:"/references/",permalink:"/docs/references/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/references/overview.mdx",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"References: Overview",frontMatter:{slug:"/references/",title:"Wechaty references overview",sidebar_label:"References: Overview"},sidebar:"docs",previous:{title:"Writing tests",permalink:"/docs/howto/testing"},next:{title:"Wechaty API reference overview",permalink:"/docs/api/"}},c=[{value:"References Index",id:"references-index",children:[]}],l={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"References contain technical reference for APIs and other aspects of Wechaty's machinery. They describe how it works and how to use it but assume that you have a basic understanding of key concepts."),(0,i.kt)("h2",{id:"references-index"},"References Index"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/"},"API References")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/polyglot/"},"Polyglot")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/"},"Puppet Providers")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-services/"},"Puppet Services")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/"},"Specifications"))))}p.isMDXComponent=!0},7388:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},Toc:function(){return p},default:function(){return d}});var n=r(9603),a=r(120),i=(r(7378),r(5318)),o=r(3596),s={slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},c={unversionedId:"specs/overview",id:"specs/overview",isDocsHomePage:!1,title:"Wechaty specs overview",description:"Wechaty community need clear specifications for a healthy ecosystem.",source:"@site/docs/specs/overview.mdx",sourceDirName:"specs",slug:"/specs/",permalink:"/docs/specs/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/overview.mdx",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"Specs: Overview",frontMatter:{slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},sidebar:"docs",previous:{title:"Puppet Service: DIY",permalink:"/docs/puppet-services/diy"},next:{title:"Polyglot Wechaty",permalink:"/docs/specs/wechaty"}},l=[{value:"Table of Content",id:"table-of-content",children:[]}],p=function(){return(0,i.kt)(o.Z,{toc:l,mdxType:"TOCInline"})},u={toc:l,Toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wechaty community need clear specifications for a healthy ecosystem."),(0,i.kt)("p",null,"All Wechaty community projects should follow Wechaty Specifications."),(0,i.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/wechaty"},"Polygram Wechaty"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Polygram Wechaty"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/puppet"},"Wechaty Puppet"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Puppet Abstract, Puppet Providers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/service"},"Wechaty Puppet Service"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wechaty Puppet Service"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/token"},"Wechaty Puppet Service Token"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Wechaty Puppet Service Token")))))}d.isMDXComponent=!0},8944:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);