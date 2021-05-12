(self.webpackChunk=self.webpackChunk||[]).push([[9081],{5318:function(t,e,M){"use strict";M.d(e,{Zo:function(){return n},kt:function(){return c}});var a=M(7378);function g(t,e,M){return e in t?Object.defineProperty(t,e,{value:M,enumerable:!0,configurable:!0,writable:!0}):t[e]=M,t}function i(t,e){var M=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),M.push.apply(M,a)}return M}function A(t){for(var e=1;e<arguments.length;e++){var M=null!=arguments[e]?arguments[e]:{};e%2?i(Object(M),!0).forEach((function(e){g(t,e,M[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(M)):i(Object(M)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(M,e))}))}return t}function r(t,e){if(null==t)return{};var M,a,g=function(t,e){if(null==t)return{};var M,a,g={},i=Object.keys(t);for(a=0;a<i.length;a++)M=i[a],e.indexOf(M)>=0||(g[M]=t[M]);return g}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)M=i[a],e.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(t,M)&&(g[M]=t[M])}return g}var I=a.createContext({}),o=function(t){var e=a.useContext(I),M=e;return t&&(M="function"==typeof t?t(e):A(A({},e),t)),M},n=function(t){var e=o(t.components);return a.createElement(I.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},T=a.forwardRef((function(t,e){var M=t.components,g=t.mdxType,i=t.originalType,I=t.parentName,n=r(t,["components","mdxType","originalType","parentName"]),T=o(M),c=g,l=T["".concat(I,".").concat(c)]||T[c]||N[c]||i;return M?a.createElement(l,A(A({ref:e},n),{},{components:M})):a.createElement(l,A({ref:e},n))}));function c(t,e){var M=arguments,g=e&&e.mdxType;if("string"==typeof t||g){var i=M.length,A=new Array(i);A[0]=T;var r={};for(var I in e)hasOwnProperty.call(e,I)&&(r[I]=e[I]);r.originalType=t,r.mdxType="string"==typeof t?t:g,A[1]=r;for(var o=2;o<i;o++)A[o]=M[o];return a.createElement.apply(null,A)}return a.createElement.apply(null,M)}T.displayName="MDXCreateElement"},6282:function(t,e,M){"use strict";M.r(e),M.d(e,{frontMatter:function(){return A},metadata:function(){return r},toc:function(){return I},default:function(){return n}});var a=M(9603),g=M(120),i=(M(7378),M(5318)),A={slug:"/",title:"Wechaty Documentation",sidebar_label:"Overview"},r={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Wechaty Documentation",description:"Wechaty: Conversational RPA SDK for Chatbot Makers",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/overview.mdx",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"Overview",frontMatter:{slug:"/",title:"Wechaty Documentation",sidebar_label:"Overview"},sidebar:"docs",next:{title:"What is Wechaty",permalink:"/docs/wechaty"}},I=[{value:"First steps",id:"first-steps",children:[]},{value:"Getting help",id:"getting-help",children:[]},{value:"How the documentation is organized",id:"how-the-documentation-is-organized",children:[]},{value:"The Wechaty Layer",id:"the-wechaty-layer",children:[]},{value:"The Puppet Layer",id:"the-puppet-layer",children:[]},{value:"The Service Layer",id:"the-service-layer",children:[]},{value:"Multi programming language SDKs",id:"multi-programming-language-sdks",children:[]},{value:"The development process",id:"the-development-process",children:[]},{value:"Common Chatbot application tools",id:"common-chatbot-application-tools",children:[]},{value:"Other core functionalities",id:"other-core-functionalities",children:[]},{value:"The Wechaty open-source project",id:"the-wechaty-open-source-project",children:[]},{value:"Contact Us",id:"contact-us",children:[]}],o={toc:I};function n(t){var e=t.components,A=(0,g.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},o,A,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wechaty: Conversational RPA SDK for Chatbot Makers",src:M(9427).Z})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://documentation.divio.com/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/DIVIO-Documentation%20System-blue",alt:"DIVIO documentation system"}))),(0,i.kt)("p",null,"Everything you need to know about Wechaty."),(0,i.kt)("h2",{id:"first-steps"},"First steps"),(0,i.kt)("p",null,"Are you new to Wechaty or to programming? This is the place to start!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"From scratch"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start"},"Quick start")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/howto/install"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tutorial"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/video-tutorial"},"Live coding for beginners")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/docker"},"Use Docker with Wechaty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Advanced tutorials"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/hard-way"},"Getting started with Wechaty the hard way"))),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"Having trouble? We'd like to help!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try the ",(0,i.kt)("a",{parentName:"li",href:"/docs/explainations/faq"},"FAQ")," - it's got answers to many common questions."),(0,i.kt)("li",{parentName:"ul"},"Looking for specific information? Try the ",(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/search?q=site%3Awechaty.js.org"},"Google search")," or ",(0,i.kt)("a",{parentName:"li",href:"https://www.bing.com/search?q=site%3Awechaty.js.org"},"Bing search"),"!"),(0,i.kt)("li",{parentName:"ul"},"Not found anything? See ",(0,i.kt)("a",{parentName:"li",href:"/docs/explainations/faq"},"FAQ: Getting help")," for information on getting support and asking questions to the community."),(0,i.kt)("li",{parentName:"ul"},"Report bugs with Wechaty in our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/"},"GitHub issues"))),(0,i.kt)("h2",{id:"how-the-documentation-is-organized"},"How the documentation is organized"),(0,i.kt)("p",null,"Wechaty has a lot of documentation. A high-level overview of how it's organized will help you know where to look for certain things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/"},"Tutorials"),' take you by the hand through a series of steps to create a Chatbot application. Start here if you are new to Wechaty or Chatbot application development. Also look at the "',(0,i.kt)("a",{parentName:"li",href:"#first-steps"},"First steps"),'".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/explainations/"},"Explainations")," discuss key topics and concepts at a fairly high level and provide useful background information and explanation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/references/"},"Reference guides")," contain technical reference for APIs and other aspects of Wechaty's machinery. They describe how it works and how to use it but assume that you have a basic understanding of key concepts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/howto/"},"How-to gtuides")," are recipes. They guide you through the steps involved in addressing key problems and use-cases. They are more advanced than tutorials and assume some knowledge of how Wechaty works.")),(0,i.kt)("h2",{id:"the-wechaty-layer"},"The Wechaty Layer"),(0,i.kt)("p",null,"Wechaty provides an abstraction layer for structuring and manipulating the data of your Chatbot application. Learn more about it below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wechaty")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/wechaty"},"Wechaty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Classes")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/message"},"Message")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/contact"},"Contact")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/contact-self"},"ContactSelf")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/room"},"Room")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/friendship"},"Friendship")," | ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan/file-box"},"FileBox")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/room-invitation"},"RoomInvitation"))),(0,i.kt)("h2",{id:"the-puppet-layer"},"The Puppet Layer"),(0,i.kt)("p",null,'Wechaty has the concept of "',(0,i.kt)("a",{parentName:"p",href:"/docs/specs/puppet"},"Puppet"),"\" to encapsulate the logic responsible for processing a IM's request and for returning the responses. Find all you need to know about puppets via the links below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The basics"),":",(0,i.kt)("a",{parentName:"li",href:"/docs/specs/puppet"},"Puppet specification")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/"},"Providers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Providers"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/wechat"},"WeChat")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/whatsapp"},"Whatsapp")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/lark"},"Lark")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/official-account"},"WeChat Official Account")," | etc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Advanced"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/diy"},"Do-it-yourself: Create your Wechaty Puppet Provider"))),(0,i.kt)("h2",{id:"the-service-layer"},"The Service Layer"),(0,i.kt)("p",null,"The service layer provides a multi-language frinedly way for re-using the source code across the programming languages. Learn how this service can be used by users and how it can be extended by programmers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The basics"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/specs/service"},"Service specification")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-services/"},"Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Services"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-services/wxwork"},"WeWork")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-services/padlocal"},"PadLocal")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-services/paimon"},"Paimon")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-services/donut"},"Donut")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Advanced"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-services/diy"},"Do-it-yourself: Create your Wechaty Puppet Service"))),(0,i.kt)("h2",{id:"multi-programming-language-sdks"},"Multi programming language SDKs"),(0,i.kt)("p",null,"Wechaty provides SDK in lots of programming languages, developed from the community, to the community, and for the community!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The overview"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyglot/"},"Polyglot Wechaty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Programming Languages"),": ",(0,i.kt)("a",{parentName:"li",href:"polyglot/openapi/"},"OpenAPI")," | ",(0,i.kt)("a",{parentName:"li",href:"polyglot/typescript/"},"TypeScript")," | ",(0,i.kt)("a",{parentName:"li",href:"polyglot/python/"},"Python")," | ",(0,i.kt)("a",{parentName:"li",href:"polyglot/go/"},"Go")," | ",(0,i.kt)("a",{parentName:"li",href:"polyglot/java/"},"Java")," | ",(0,i.kt)("a",{parentName:"li",href:"polyglot/scala/"},"Scala")," | ",(0,i.kt)("a",{parentName:"li",href:"polyglot/php/"},"PHP")," \uff5c ",(0,i.kt)("a",{parentName:"li",href:"polyglot/dotnet/"},".NET")," \uff5c ",(0,i.kt)("a",{parentName:"li",href:"polyglot/rust/"},"Rust"))),(0,i.kt)("h2",{id:"the-development-process"},"The development process"),(0,i.kt)("p",null,"Learn about the various components and tools to help you in the development and testing of Wechaty chatbot applications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Testing"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/puppet-providers/mock"},"Mock")," | ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts"},"Writting and running tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deloyment"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/docker"},"Docker")," | ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/heroku-wechaty-getting-started"},"Heroku"))),(0,i.kt)("h2",{id:"common-chatbot-application-tools"},"Common Chatbot application tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan/file-box"},"FileBox"),": helper module for easy processing files between the local filesystem and the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan/brolog"},"Brolog"),": helper module for easy logging between the Node.js and the Browser environments. (Angular Dependency Injection supported)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan/flash-store"},"FlashStore"),": helper module for key-value persistant storage in both Node.js local filesystem and Browser(tbw). Follows the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan/async-map-like#readme"},"ES6 Map API"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan/memory-card"},"MemoryCard"),": help module for key-value persistant storage in cloud. (should be a cloud native module in the future). Follows the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan/async-map-like#readme"},"ES6 Map API"),".")),(0,i.kt)("h2",{id:"other-core-functionalities"},"Other core functionalities"),(0,i.kt)("p",null,"Learn about some other core functionalities of the Wechaty:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/token"},"TOKEN specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/specs/puppet"},"Puppet specification"))),(0,i.kt)("h2",{id:"the-wechaty-open-source-project"},"The Wechaty open-source project"),(0,i.kt)("p",null,"Learn about the development process for the Wechaty project itself and about how you can contribute:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Commmunity"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/"},"How to get involved")," | ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/PMC"},"Team organization")," | ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"The Wechaty source code repository")," | ",(0,i.kt)("a",{parentName:"li",href:"https://groups.google.com/g/wechaty"},"Mailing lists")," | ",(0,i.kt)("a",{parentName:"li",href:"https://gitter.im/wechaty/wechaty"},"Gitter.im channel")," | ",(0,i.kt)("a",{parentName:"li",href:"/docs/contributor-program/"},"Wechaty contributor program")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Documentation"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/documentation"},"About this documentation")),(0,i.kt)("li",{parentName:"ul"},"Wechaty over time: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/releases"},"Release notes"))),(0,i.kt)("h2",{id:"contact-us"},"Contact Us"),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}n.isMDXComponent=!0},9427:function(t,e){"use strict";e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTkyMC4wMDAwMDBwdCIgaGVpZ2h0PSI1NDAuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAxOTIwLjAwMDAwMCA1NDAuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+CjxtZXRhZGF0YT4KQ3JlYXRlZCBieSBwb3RyYWNlIDEuMTYsIHdyaXR0ZW4gYnkgUGV0ZXIgU2VsaW5nZXIgMjAwMS0yMDE5CjwvbWV0YWRhdGE+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDU0MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiM0NGE4MzgiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0yNzEwIDQ3MzMgYy0zNiAtNjMgLTczIC0xMjkgLTgzIC0xNDYgbC0xOSAtMzAgLTczIDczIC03NCA3NCAtMjMKLTIwIGMtMTMgLTExIC01MiAtNDYgLTg3IC03NyBsLTYzIC01NiAtNzcgNTkgYy00MiAzMyAtODUgNzUgLTk1IDk1IC0zNCA2MgotMTI2IDExNSAtMjAwIDExNSAtMTM5IDAgLTI2MyAtMTQwIC0yNDEgLTI3MyAxNSAtODcgODMgLTE3MiAxNTkgLTE5NyBsMzYKLTEyIDAgLTUzMSAwIC01MzIgLTczIC0zOSBjLTQ0MSAtMjQwIC03OTYgLTY1MCAtOTQxIC0xMDg2IC03NSAtMjI1IC03OSAtMjU5Ci04MyAtNzE4IGwtNSAtNDEyIDIyNzkgMCAyMjc5IDAgMTQgMTc4IGMxOCAyNDggOSA1ODIgLTIwIDcxNyAtMTA2IDQ5NyAtNDIxCjkzMCAtOTA0IDEyNDQgLTYxIDM5IC0xMTQgNzEgLTExOCA3MSAtNCAwIC04IDI1MCAtOCA1NTUgbDAgNTU1IDM3IDE1IGM2MCAyNQo5OSA2MSAxMjcgMTE3IDQ0IDg3IDMyIDE4NCAtMzIgMjU4IC01MSA2MCAtMTA0IDg0IC0xODIgODQgLTQ3IDAgLTc2IC02IC0xMDYKLTIyIC03OCAtNDEgLTEzNCAtMTI4IC0xMzQgLTIxMCAwIC0zMSAtMjIgLTUzIC01MiAtNTIgLTcgMSAtNTMgNjQgLTEwMiAxNDEKbC04OCAxNDAgLTcwIC0xMjMgYy0zOSAtNjggLTc3IC0xMzQgLTg1IC0xNDcgbC0xNSAtMjMgLTcyIDcxIC03MyA3MiAtMTEyCi01NSAtMTEzIC01NSAtNTQgMzQgYy0zMCAxOSAtNTkgMzUgLTY1IDM1IC01IDAgLTQ2IC0yMSAtOTAgLTQ2IC00NSAtMjUgLTg1Ci00MiAtODkgLTM3IC01IDQgLTM2IDc3IC03MSAxNjEgLTM0IDgzIC02NSAxNTIgLTY4IDE1MiAtMyAwIC0zNSAtNTMgLTcxCi0xMTd6IG0xMzQgLTEwOCBjMzIgLTgwIDU5IC0xNDUgNjEgLTE0NSAxIDAgNDIgMjIgOTEgNTAgNDkgMjcgOTYgNDkgMTA0IDQ5CjggMCAzOCAtMTUgNjUgLTMzIGw1MCAtMzMgMTEwIDU0IDEwOSA1NCA4MSAtODEgODEgLTgwIDc5IDE0MCBjNDQgNzcgODIgMTQwCjg1IDE0MCAzIDAgMTggLTIxIDM1IC00OCAxNiAtMjYgNTMgLTg0IDgyIC0xMjkgbDUzIC04MiAzNyAxNiBjMjYgMTAgMzggMTIKNDEgNCAxNiAtNDcgNzIgLTEwOCAxMjUgLTEzNSBsNTcgLTI5IDAgLTUyMyAwIC01MjQgLTU3IDI2IGMtMzY2IDE2NCAtNjk5CjIzOCAtMTA3OCAyMzcgLTM4MSAtMSAtNzA0IC02NyAtMTA1NyAtMjE3IGwtMzggLTE2IDAgNTA5IDAgNTA5IDM0IDEyIGM4NCAyOAoxNTYgMTI1IDE1OSAyMTggMiA0NSAwIDQ1IDc5IC0xNiBsNTcgLTQ0IDg0IDc1IDgzIDc2IDgwIC04MCA4MCAtODAgNDQgNzgKYzg1IDE1MSAxMTEgMTkzIDExOCAxOTMgNCAwIDMzIC02NiA2NiAtMTQ1eiBtLTQxOSAtMjUwOSBjMTQ5IC0zOSAyNDggLTE1MQoyNDcgLTI4MSAwIC02NyAtMTEgLTEwMiAtNDggLTE1NiAtODIgLTEyMCAtMjk3IC0xNzcgLTQzMSAtMTE1IC02MiAyOSAtMTIzCjkwIC0xNTUgMTU0IC0zNCA2OSAtMzIgMTY5IDQgMjM4IDMzIDYzIDExNCAxMzcgMTcxIDE1NyA1MyAxOSAxNDcgMjEgMjEyIDN6Cm0xNTQ2IC0xNSBjMTIyIC00NyAxOTkgLTE1MCAxOTkgLTI2OSAwIC03OCAtMTYgLTExOCAtNzUgLTE4MCAtNjUgLTcwIC0xNDUKLTEwNSAtMjU3IC0xMTAgLTc2IC00IC05MiAtMSAtMTQwIDIwIC0xNTcgNzMgLTIyNiAyNDYgLTE1NSAzOTAgMzMgNjcgMTA5CjE0MCAxNzAgMTYyIDU5IDIyIDE4NSAxNSAyNTggLTEzeiIvPgo8cGF0aCBkPSJNMTMzNDAgNDA2MiBjLTQ2IC04MSAtODUgLTE0OSAtODcgLTE1MSAtMiAtMyAtMzcgMjggLTc4IDY5IGwtNzUgNzQKLTI3IC0yNSBjLTE2IC0xNCAtNTQgLTQ4IC04NiAtNzcgbC01OCAtNTIgLTk2IDc3IC05NiA3NiAtMTQ0IC03MSBjLTc5IC00MAotMTQ1IC03MiAtMTQ3IC03MiAtMiAwIC03IDE5IC0xMCA0MyAtMTkgMTIzIC0xNDQgMjIwIC0yNjMgMjAzIC04NCAtMTEgLTE2NgotNzMgLTE5NyAtMTQ4IC0zOCAtOTAgLTUgLTIxNiA3MyAtMjc4IGw0MSAtMzMgMCAtMTI4NCAwIC0xMjgzIDExMCAwIDExMCAwIDAKNTc4IGMwIDYzNSAyIDY1NyA2MSA3NzMgMzkgNzggMTQ0IDE4NiAyMTYgMjIzIDE1NCA3OCAzNTQgNzIgNDk3IC0xNCA3NCAtNDQKMTU4IC0xMzcgMTk3IC0yMTUgNTYgLTExNiA1OSAtMTQ1IDU5IC03NzIgbDAgLTU3MyAxMDUgMCAxMDYgMCAtNCA2MjggYy0zCjY5NiAtMSA2NzEgLTczIDgxNyAtODcgMTc5IC0yNTUgMzE1IC00NTMgMzY2IC0xMDYgMjggLTI4NyAyOCAtMzkyIDEgLTkyIC0yNQotMTk1IC03NiAtMjY0IC0xMzEgbC01MCAtNDAgLTMgNDY2IGMtMiA0MzcgLTEgNDY4IDE1IDQ3NyAzMyAxOCA4MyA4MCA5NSAxMTYKMTAgMzMgMjAgNDAgMTU2IDEwNSA4MCAzOSAxNTEgNzAgMTU3IDY5IDYgLTEgNTMgLTM0IDEwMyAtNzQgbDkyIC03MiA4NiA3Nwo4NyA3NyA3OCAtNzggYzQzIC00MyA4MCAtNzYgODIgLTczIDIgMiAzOCA2NCA3OSAxMzcgNDIgNzQgNzggMTMwIDgxIDEyNSAzCi00IDMwIC03MSA2MiAtMTQ4IDMxIC03NyA1OCAtMTQxIDYwIC0xNDMgMiAtMiA0MyAxOSA5MyA0NyA0OSAyOCA5NiA1MSAxMDQKNTEgNyAwIDM3IC0xNiA2NSAtMzUgMjkgLTE5IDU1IC0zNSA1OSAtMzUgNCAwIDU0IDI3IDExMSA2MSBsMTAzIDYxIDgxIC03Nwo4MiAtNzYgNzQgMTQwIGM0MSA3OCA3NyAxNDEgODEgMTQxIDQgMCA0NCAtNTQgOTAgLTEyMCA0NiAtNjYgODcgLTEyMCA5MgotMTIwIDQgMCAzOCAxMyA3NCAyOSBsNjUgMzAgMzggLTQ5IGMyMSAtMjcgNDIgLTQ5IDQ3IC01MCA0IDAgNTMgMjkgMTA3IDY1CjU1IDM2IDEwMiA2NSAxMDUgNjUgMyAwIDQ0IC0zMCA5MSAtNjYgNDcgLTM2IDg3IC02MyA4OSAtNjEgMiAyIDMwIDY2IDYyIDE0MgozMSA3NiA2MiAxNDAgNjcgMTQxIDYgMiA1MiAtNDggMTA0IC0xMTEgNTIgLTYzIDk3IC0xMTMgMTAwIC0xMTEgMyAyIDM0IDIwCjY5IDQwIGw2MiAzOCA2NSAtMjIgYzcyIC0yNCA5NSAtNDEgOTUgLTcxIDAgLTM0IDM4IC05NSA4NCAtMTM2IGw0NSAtNDAgMwotMTA3OSBjMyAtOTk0IDUgLTEwODQgMjEgLTExMzggNTUgLTE4NSAxODAgLTMwMiAzNjUgLTM0MiA0NCAtOSAxMzIgLTE0IDI1NQotMTQgbDE4NyAwIDAgOTkgMCA5OSAtMTk3IDQgYy0yMzEgNSAtMjc0IDE3IC0zNDMgOTYgLTcwIDc5IC03MCA3NSAtNzAgNzE5CmwwIDU3MyAzMDUgMCAzMDUgMCAwIDEwNSAwIDEwNSAtMzA1IDAgLTMwNSAwIDAgMzkxIDAgMzkxIDQ0IDM5IGMxMzYgMTIwIDkwCjM0MyAtODUgNDA0IC0yMyA4IC01NiAxNSAtNzMgMTUgLTk2IDAgLTIwNSAtNzkgLTIyOCAtMTY1IC03IC0yNSAtMTcgLTQ1IC0yNAotNDUgLTYgMCAtNDEgMTEgLTc4IDI1IGwtNjYgMjUgLTU3IC0zNSBjLTMyIC0xOSAtNjIgLTM1IC02OCAtMzUgLTUgMCAtNTcgNTcKLTExNCAxMjUgLTU4IDY5IC0xMDggMTIyIC0xMTEgMTE4IC00IC01IC0zMSAtNjYgLTYwIC0xMzggLTI5IC03MSAtNTYgLTEzOAotNjIgLTE0OCAtOCAtMTUgLTE4IC0xMCAtODYgNDMgLTQzIDMzIC04MSA2MCAtODUgNjAgLTQgMCAtNTIgLTMwIC0xMDcgLTY2CmwtMTAwIC02NyAtMjIgMjkgYy0xMyAxNiAtMzIgMzkgLTQzIDUyIGwtMjEgMjQgLTYyIC0zMSBjLTM0IC0xNyAtNjUgLTMxIC03MAotMzEgLTQgMCAtNTAgNjEgLTEwMiAxMzYgLTgwIDExNCAtOTYgMTMzIC0xMDYgMTE5IC02IC04IC00MiAtNzQgLTc4IC0xNDUKLTM3IC03MiAtNzAgLTEzMCAtNzMgLTEzMCAtMyAwIC0zOCAzMCAtNzkgNjYgbC03MyA2NiAtMTAxIC02MSBjLTU2IC0zNCAtMTA1Ci02MSAtMTEwIC02MSAtNSAwIC0zNCAxNiAtNjQgMzUgLTMwIDE5IC02MCAzNSAtNjYgMzUgLTYgMCAtNDcgLTIxIC05MSAtNDYKLTQ1IC0yNSAtODQgLTQzIC04NyAtNDAgLTMgNCAtMzYgNzggLTcyIDE2NiBsLTY2IDE1OSAtODQgLTE0N3oiLz4KPHBhdGggZD0iTTkzOTMgMjk1OSBjLTIxNSAtMjEgLTM5NyAtMTA2IC01NDcgLTI1NiAtMTIyIC0xMjIgLTIwOSAtMjc0IC0yNTIKLTQ0MyAtMjkgLTExNCAtMjcgLTM3NiA0IC00ODMgOTcgLTMzOSAzNjIgLTU4OCA3MDcgLTY2MyAxMDkgLTIzIDMzNSAtMjQgNDI5Ci0xIDI3NiA2OSA1MDQgMjU0IDYyNSA1MDggNTQgMTEyIDcyIDE4MyA3OCAzMDcgbDYgMTAyIC0xMTIgMCAtMTExIDAgMCAtNDkKYzAgLTMwNyAtMjQwIC01OTMgLTU1NyAtNjY1IC04OSAtMjAgLTIzNSAtMjAgLTMyOCAtMSAtMjM0IDQ5IC00NDIgMjQ0IC01MTcKNDg1IC0yMCA2NCAtMjMgOTYgLTIzIDIyMCAwIDEyNCAzIDE1NiAyMyAyMjAgMzIgMTAwIDY0IDE2MSAxMjggMjQ3IDE0NSAxOTAKMzUzIDI4NCA2MDAgMjcwIDE2NSAtOSAyOTAgLTU5IDQwMCAtMTYwIDQ1IC00MSA1MyAtNTIgNDIgLTYzIC03IC02IC0yNTEKLTE3MyAtNTQzIC0zNjkgLTI5MSAtMTk2IC01MzQgLTM2MSAtNTM5IC0zNjUgLTcgLTcgNjggLTEyMSAxMTQgLTE3MyA1IC02CjkxMSA2MDAgMTI4MiA4NTggMTcgMTEgMTQgMTggLTMxIDgxIC05OCAxNDAgLTI2OCAyNzMgLTQzMSAzMzcgLTEyNCA0OSAtMzAwCjcxIC00NDcgNTZ6Ii8+CjxwYXRoIGQ9Ik0xMTQxMCAyOTYwIGMtMTUwIC0xNSAtMzExIC03MiAtNDI3IC0xNTEgLTE2OSAtMTE1IC0yOTkgLTMwMCAtMzU1Ci01MDQgLTE4IC02NyAtMjEgLTEwOCAtMjIgLTI1MCAwIC0xNDUgMyAtMTgzIDIyIC0yNjAgODYgLTM0MCAzNTcgLTU4OSA3MDkKLTY1MCA1NiAtMTAgMTUyIC0xNSAyNzkgLTE1IGwxOTQgMCAwIDEwOSAwIDEwOSAtMjIyIDUgYy0yNDggNSAtMjkxIDEzIC00MTgKNzUgLTEwNCA1MSAtMjIyIDE2OCAtMjczIDI3MiAtNjAgMTIyIC03MiAxODQgLTcxIDM1NSAwIDEzNCAzIDE1OCAyNyAyMzAgMTUKNDQgNDMgMTA5IDY0IDE0NCA1NCA5MCAxNjYgMTkyIDI2NyAyNDEgMTE4IDU4IDE4NiA3MCA0MjQgNzAgbDIwMiAwIDAgMTE1IDAKMTE1IC0xNjIgLTEgYy05MCAtMSAtMTk3IC01IC0yMzggLTl6Ii8+CjxwYXRoIGQ9Ik0xNDYwMCAyOTU5IGMtMTk3IC0yMyAtMzgwIC0xMTYgLTUxNyAtMjYzIC03OSAtODQgLTExNiAtMTM4IC0xNjMKLTIzOSAtNjAgLTEyNyAtODEgLTIyMSAtODcgLTM4MiAtNiAtMTY0IDEwIC0yNzYgNTggLTQwOCA2MiAtMTcyIDIyMCAtMzYzCjM3OCAtNDU3IDIwMyAtMTIxIDQ4NyAtMTUyIDY5NSAtNzYgNzkgMjggMjA0IDEwMiAyNzAgMTU4IGw0NiA0MCAwIDEzNCAwIDEzNAotNzcgLTc4IGMtMTY5IC0xNjkgLTMxNSAtMjMwIC01MjggLTIxOSAtMTY3IDggLTI4NiA2NSAtNDE1IDE5NiAtMTQzIDE0NQotMjEwIDMxNSAtMjEwIDUzMiAwIDIxNiA3NyA0MDEgMjI1IDU0NCAyMDIgMTk1IDQ3MiAyMzggNzIwIDExNiAxNzYgLTg3IDMxNQotMjc4IDM1OSAtNDkzIDEzIC02NCAxNiAtMTYwIDE2IC01NzMgbDAgLTQ5NSAxMDUgMCAxMDUgMCAwIDUxNCBjMCA1NTMgLTMKNTg5IC01NCA3MzYgLTY2IDE5MiAtMjIxIDM3NSAtNDA4IDQ4MyAtNzMgNDIgLTIxNyA4NiAtMzE5IDk3IC0xMDQgMTEgLTk1IDExCi0xOTkgLTF6Ii8+CjxwYXRoIGQ9Ik02MDAzIDIyNjMgYzMgLTYwMyA1IC02NzQgMjEgLTcyNyA2NCAtMjE1IDIxNyAtMzY2IDQyNyAtNDIzIDg3IC0yMwoyNzEgLTIzIDM1OSAwIDEzMyAzNiAyMzUgMTA2IDMwMCAyMDcgMTggMjcgMzMgNTAgMzUgNTAgMiAwIDE1IC0yMCAyOSAtNDQgMzYKLTYxIDEyNiAtMTQwIDE5OSAtMTc1IDkzIC00MyAxNTggLTU2IDI5MiAtNTUgMTAxIDEgMTMyIDUgMjAxIDI3IDE5OCA2NSAzMzgKMjE1IDM5NyA0MjYgMjAgNzMgMjEgMTAwIDI1IDcyOSBsMyA2NTIgLTExMCAwIC0xMTEgMCAwIC02MzAgYzAgLTQyMSAtNCAtNjQ2Ci0xMSAtNjgyIC0zMSAtMTQ4IC0xMzcgLTI2MSAtMjgzIC0zMDMgLTg1IC0yNSAtMjE0IC0xNyAtMjkwIDE4IC03MyAzNCAtMTU5CjExNiAtMTkwIDE4MSAtNDQgOTUgLTQ2IDEyNCAtNDYgNzg2IGwwIDYzMCAtMTEwIDAgLTExMCAwIDAgLTY0NCBjMCAtNjEzIC0xCi02NDcgLTIwIC03MDggLTM2IC0xMTcgLTEwMiAtMTkyIC0yMTggLTI0NiAtNTEgLTI0IC02OSAtMjcgLTE2NyAtMjcgLTEwMyAwCi0xMTQgMiAtMTc1IDMxIC0zNiAxNyAtODQgNDggLTEwNyA2OCAtNTkgNTEgLTExMCAxNTkgLTEyMyAyNTYgLTUgNDEgLTEwIDM0NAotMTAgNjczIGwwIDU5NyAtMTA2IDAgLTEwNSAwIDQgLTY2N3oiLz4KPHBhdGggZD0iTTE2OTcwIDIzNzIgYzAgLTMyNiA0IC01OTIgMTAgLTY0MSAyMyAtMTc2IDg2IC0zMTMgMjAyIC00MzYgOTkKLTEwNCAyMjUgLTE3MiAzNTYgLTE5MCBsNTIgLTcgMCAtMjY5IDAgLTI2OSAxMTUgMCAxMTUgMCAwIDI2OSAwIDI2OSA2NyAxMgpjMTk3IDM0IDM2NSAxNjcgNDYyIDM2NCA3NyAxNTggNzQgMTI3IDc4IDgyOSBsNCA2MjcgLTEwNiAwIC0xMDUgMCAwIC01NjQgYzAKLTYyNCAtMyAtNjYxIC02MSAtNzg0IC0zOSAtODEgLTE0MCAtMTg3IC0yMTYgLTIyNiAtMTU0IC03NyAtMzUwIC03NSAtNDkyIDYKLTc1IDQzIC0xNjAgMTMzIC0xOTkgMjA5IC02MiAxMjUgLTYyIDEyNCAtNjIgNzcxIGwwIDU4OCAtMTEwIDAgLTExMCAwIDAKLTU1OHoiLz4KPHBhdGggZD0iTTc3MCA3NTUgbDAgLTE0NSAyMzAwIDAgMjMwMCAwIDAgMTQ1IDAgMTQ1IC0yMzAwIDAgLTIzMDAgMCAwIC0xNDV6Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);