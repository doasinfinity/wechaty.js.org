(self.webpackChunk=self.webpackChunk||[]).push([[2006,2312],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,m=h["".concat(c,".").concat(d)]||h[d]||l[d]||o;return r?a.createElement(m,p(p({ref:t},u),{},{components:r})):a.createElement(m,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3434:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var a=r(9603),n=r(120),o=(r(7378),r(5318)),p=r(5016),i={slug:"/puppet-services/",title:"Wechaty Puppet Services",sidebar_label:"Puppet Services: Index"},c={unversionedId:"puppet-services/overview",id:"puppet-services/overview",isDocsHomePage:!1,title:"Wechaty Puppet Services",description:"For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules Wechaty Puppet.",source:"@site/docs/puppet-services/overview.mdx",sourceDirName:"puppet-services",slug:"/puppet-services/",permalink:"/docs/puppet-services/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-services/overview.mdx",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"Puppet Services: Index",frontMatter:{slug:"/puppet-services/",title:"Wechaty Puppet Services",sidebar_label:"Puppet Services: Index"},sidebar:"docs",previous:{title:"Puppet Provider: DIY",permalink:"/docs/puppet-providers/diy"},next:{title:"Puppet Service: WXWork",permalink:"/docs/puppet-services/wxwork"}},s=[{value:"What is Wechaty Puppet Service",id:"what-is-wechaty-puppet-service",children:[]},{value:"Get A Token",id:"get-a-token",children:[{value:"1. Free TOKEN (Short-term)",id:"1-free-token-short-term",children:[]},{value:"2. Free TOKEN (Long-term)",id:"2-free-token-long-term",children:[]},{value:"3. Paid TOKEN",id:"3-paid-token",children:[]}]},{value:"Wechaty Puppet Servcies",id:"wechaty-puppet-servcies",children:[]},{value:"FAQ",id:"faq",children:[{value:"What is <em>&quot;Wechaty Puppet&quot;</em>, <em>&quot;Wechaty Puppet Provider&quot;</em>, <em>&quot;Wechaty Puppet Service&quot;</em>?",id:"what-is-wechaty-puppet-wechaty-puppet-provider-wechaty-puppet-service",children:[]}]},{value:"What is <em>&quot;Wechaty Puppet Service Token&quot;</em> or <em>TOKEN</em> you are talking about?",id:"what-is-wechaty-puppet-service-token-or-token-you-are-talking-about",children:[{value:"How To Become a Wechaty Puppet Service Provider",id:"how-to-become-a-wechaty-puppet-service-provider",children:[]}]},{value:"Useful Links",id:"useful-links",children:[]},{value:"Blogs",id:"blogs",children:[]}],u={toc:s};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p.default,{mdxType:"Badges"}),(0,o.kt)("p",null,"For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet"},"Wechaty Puppet"),"."),(0,o.kt)("p",null,"Wechaty Puppet Service is gRPC for Wechaty Puppet. To use a Wechaty Puppet Service, you need a TOKEN for that service, and pass it to Wechaty, then you will be able to use that Puppet Service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET=wechaty-puppet-service\nexport WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can switch between different Wechaty Puppet Services by changing your TOKEN. All your source code should work between different tokens without any changes.")),(0,o.kt)("h2",{id:"what-is-wechaty-puppet-service"},"What is Wechaty Puppet Service"),(0,o.kt)("p",null,"If you want to learn more about the concepts behind TOKEN, please read our blog post: ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service")),(0,o.kt)("h2",{id:"get-a-token"},"Get A Token"),(0,o.kt)("p",null,"You can get a short-term free TOKEN for testing, get a long-term free TOKEN by joining our ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributor-program/"},"Wechaty Contributor Program"),", or buy a TOKEN from our Wechaty Puppet Service Providers."),(0,o.kt)("p",null,"If you have any questions about the Wechaty Puppet Service, please feel free to talk to us by ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"joining our Gitter")," network if you aren\u2019t already a member."),(0,o.kt)("h3",{id:"1-free-token-short-term"},"1. Free TOKEN (Short-term)"),(0,o.kt)("p",null,"Short-term TOKEN\uff087 days\uff09 is for those developers who want to test Wechaty Puppet Service to make sure the service can meet their needs."),(0,o.kt)("p",null,"TODO: list a easy to follow steps how to apply free token"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Paimon: Register ",(0,o.kt)("a",{parentName:"li",href:"http://175.27.139.176/"},"here")),(0,o.kt)("li",{parentName:"ul"},"wxwork/donut: Using ",(0,o.kt)("strong",{parentName:"li"},"WeCom Account"),"(Not WeChat) with administrator rights ",(0,o.kt)("a",{parentName:"li",href:"https://qiwei.juzibot.com/user/login?isWechaty=true"},"here")),(0,o.kt)("li",{parentName:"ul"},"Padlocal: ",(0,o.kt)("a",{parentName:"li",href:"http://pad-local.com/"},"\ud83d\udc49\ud83c\udffb Get Free PadLocal Token \ud83d\udc48\ud83c\udffb")," ")),(0,o.kt)("h3",{id:"2-free-token-long-term"},"2. Free TOKEN (Long-term)"),(0,o.kt)("p",null,"Long-term TOKEN is for those developers who has joined our ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributor-program/"},"Wechaty Contributor Program"),"."),(0,o.kt)("p",null,"Anyone who has a merged PR to our GitHub repos will be welcome to join."),(0,o.kt)("p",null,"TODO: give a short intro for steps to join the WCP."),(0,o.kt)("h3",{id:"3-paid-token"},"3. Paid TOKEN"),(0,o.kt)("p",null,"Paid TOKEN is the easiest one to getting started with the Wechaty Puppet Service."),(0,o.kt)("p",null,"Select a Wechaty Puppet Service from the list below and follow the steps in its page, then contact the Puppet Service Provider to buy one."),(0,o.kt)("p",null,"If you want to buy more than 10 at a time, or you need consulting servcies, please contact us in Gitter room at ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"https://gitter.im/wechaty/wechaty"),"."),(0,o.kt)("h2",{id:"wechaty-puppet-servcies"},"Wechaty Puppet Servcies"),(0,o.kt)("p",null,"Now, we have the following Wechaty Puppet Services:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Platform"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Protocol"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Life Cycle"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/puppet-services/wxwork"},"WXWork")),(0,o.kt)("td",{parentName:"tr",align:"center"},"WeCom"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Windows"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/puppet-services/paimon"},"Paimon")),(0,o.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Pad"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/puppet-services/padlocal"},"PadLocal")),(0,o.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Pad"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/puppet-services/donut"},"Donut")),(0,o.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Windows"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Deprecated")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are interested in using a Wechaty Puppet Provider directly in your program instead of a Puppet Service, please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/wiki/Directory"},"Wechaty Puppet Directory"))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"what-is-wechaty-puppet-wechaty-puppet-provider-wechaty-puppet-service"},"What is ",(0,o.kt)("em",{parentName:"h3"},'"Wechaty Puppet"'),", ",(0,o.kt)("em",{parentName:"h3"},'"Wechaty Puppet Provider"'),", ",(0,o.kt)("em",{parentName:"h3"},'"Wechaty Puppet Service"'),"?"),(0,o.kt)("p",null,"We have a great blog post to explain those term in detail. Please read: ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service")),(0,o.kt)("h2",{id:"what-is-wechaty-puppet-service-token-or-token-you-are-talking-about"},"What is ",(0,o.kt)("em",{parentName:"h2"},'"Wechaty Puppet Service Token"')," or ",(0,o.kt)("em",{parentName:"h2"},"TOKEN")," you are talking about?"),(0,o.kt)("p",null,"TOKEN is a unique string for authorizing Wechaty Puppet Service."),(0,o.kt)("p",null,"Here's some TOKEN examples:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"puppet_wxwork_7ce4cf8a1ab789166c39c6"),": WXWork TOKEN"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"puppet_padlocal_7ce48a1ab789166c39c6"),": PadLocal TOKEN"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"puppet_paimon_7ce4cf8a1ab789166c39c6"),": Paimon TOKEN"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"puppet_donut_e7ce4cf8a1ab789166c39c6"),": Donut TOKEN"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"56945fa4-7ce8-4cf8-a1a9-b789166c39c6"),": UUIDv4 TOKEN")),(0,o.kt)("p",null,"When you are using a Wechaty Puppet Service, you need to provide TOKEN to it so that it can serve you correctly."),(0,o.kt)("p",null,"The following shell commands demonstrated how to use it under Linux/macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__\n\nts-node bot.ts\n// or: node bot.js\n// or: make bot\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"__TOKEN__")," is your TOKEN")),(0,o.kt)("h3",{id:"how-to-become-a-wechaty-puppet-service-provider"},"How To Become a Wechaty Puppet Service Provider"),(0,o.kt)("p",null,"To be written."),(0,o.kt)("p",null,"Please feel free to list yourself to our list at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/"},"Wechaty Puppet Provider Repo"),", and add your introduction in this README by submitting a Pull Request!"),(0,o.kt)("p",null,"If you want to become a Wechaty Puppet Service Provider, please do not hesitate to file an issue to introduce yourself in this repository, then contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:rui@chatie.io"},"rui@chatie.io"),"!"),(0,o.kt)("p",null,"Learn more about the Wechaty Puppet Service Providers from:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/PMC/issues/11"},"The relationship between Wechaty OSS Project and the Commercial Puppet Service Provider (CPSP) #11")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues/39"},"Wechaty Puppet Service Registration & Discovery (w.r.t. token) #39"))),(0,o.kt)("h2",{id:"useful-links"},"Useful Links"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/PMC/issues/11"},"Wechaty OSS Project and the Commercial Puppet Service Provider (CPSP)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Starter Project Template that works out-of-the-box")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1986"},"How to create your own Wechaty Puppet Service Token with the Web Protocol"))),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021"))))}l.isMDXComponent=!0},5016:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var a=r(9603),n=r(120),o=(r(7378),r(5318)),p={},i={unversionedId:"puppet-services/transclusions/badges",id:"puppet-services/transclusions/badges",isDocsHomePage:!1,title:"badges",description:"Wechaty Puppet Service WXWork",source:"@site/docs/puppet-services/transclusions/badges.mdx",sourceDirName:"puppet-services/transclusions",slug:"/puppet-services/transclusions/badges",permalink:"/docs/puppet-services/transclusions/badges",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-services/transclusions/badges.mdx",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",frontMatter:{}},c=[],s={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/wxwork"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-WXWork-blue",alt:"Wechaty Puppet Service WXWork"})),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/padlocal"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-PadLocal-blue",alt:"Wechaty Puppet Service PadLocal"})),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/paimon"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-Paimon-blue",alt:"Wechaty Puppet Service Paimon"})),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/donut"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-Donut-blue",alt:"Wechaty Puppet Service Donut"})),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/diy"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-DIY-blue",alt:"Wechaty Puppet Service DIY"}))))}u.isMDXComponent=!0}}]);