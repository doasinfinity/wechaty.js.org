(self.webpackChunk=self.webpackChunk||[]).push([[4931],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7378);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),g=s,k=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var m=2;m<o;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6546:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var n=a(9603),s=a(120),o=(a(7378),a(5318)),r={title:"Message"},i={unversionedId:"api/message",id:"api/message",isDocsHomePage:!1,title:"Message",description:"All wechat messages will be encapsulated as a Message.",source:"@site/docs/api/message.md",sourceDirName:"api",slug:"/api/message",permalink:"/docs/api/message",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/message.md",version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1620782983,formattedLastUpdatedAt:"5/12/2021",frontMatter:{title:"Message"},sidebar:"docs",previous:{title:"Wechaty",permalink:"/docs/api/wechaty"},next:{title:"Contact",permalink:"/docs/api/contact"}},l=[{value:"Message",id:"message",children:[{value:"message.from() \u21d2 <code>Contact | null</code>",id:"messagefrom-\u21d2-contact--null",children:[]},{value:"message.to() \u21d2 <code>Contact</code> | <code>null</code>",id:"messageto-\u21d2-contact--null",children:[]},{value:"message.room() \u21d2 <code>Room</code> | <code>null</code>",id:"messageroom-\u21d2-room--null",children:[]},{value:"<del>message.content()</del>",id:"messagecontent",children:[]},{value:"message.text() \u21d2 <code>string</code>",id:"messagetext-\u21d2-string",children:[]},{value:"message.toRecalled() \u21d2 <code>Promise &lt;Message | null&gt;</code>",id:"messagetorecalled-\u21d2-promise-message--null",children:[]},{value:"message.say(textOrContactOrFileOrUrlLinkOrMiniProgram) \u21d2 <code>Promise &lt;void&gt;</code>",id:"messagesaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void",children:[]},{value:"message.type() \u21d2 <code>MessageType</code>",id:"messagetype-\u21d2-messagetype",children:[]},{value:"message.self() \u21d2 <code>boolean</code>",id:"messageself-\u21d2-boolean",children:[]},{value:"message.mention() \u21d2 <code>Promise &lt;Contact []&gt;</code>",id:"messagemention-\u21d2-promise-contact-",children:[]},{value:"message.mentionSelf() \u21d2 <code>Promise &lt;boolean&gt;</code>",id:"messagementionself-\u21d2-promise-boolean",children:[]},{value:"message.forward(to) \u21d2 <code>Promise &lt;void&gt;</code>",id:"messageforwardto-\u21d2-promise-void",children:[]},{value:"message.date() \u21d2 <code>Date</code>",id:"messagedate-\u21d2-date",children:[]},{value:"message.age() \u21d2 <code>number</code>",id:"messageage-\u21d2-number",children:[]},{value:"<del>message.file()</del>",id:"messagefile",children:[]},{value:"message.toFileBox() \u21d2 <code>Promise &lt;FileBox&gt;</code>",id:"messagetofilebox-\u21d2-promise-filebox",children:[]},{value:"message.toContact() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"messagetocontact-\u21d2-promise-contact",children:[]},{value:"message.toUrlLink() \u21d2 <code>Promise &lt;UrlLink&gt;</code>",id:"messagetourllink-\u21d2-promise-urllink",children:[]},{value:"Message.find() \u21d2 <code>Promise &lt;Message | null&gt;</code>",id:"messagefind-\u21d2-promise-message--null",children:[]},{value:"Message.findAll() \u21d2 <code>Promise &lt;Message []&gt;</code>",id:"messagefindall-\u21d2-promise-message-",children:[]}]}],m={toc:l};function p(e){var t=e.components,a=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All wechat messages will be encapsulated as a Message."),(0,o.kt)("h2",{id:"message"},"Message"),(0,o.kt)("p",null,"All wechat messages will be encapsulated as a Message."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts"},"Examples/Ding-Dong-Bot")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": global class"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message"},"Message"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"instance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+from"},".from","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+to"},".to","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+room"},".room","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Room")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+content"},(0,o.kt)("del",{parentName:"a"},".content","(",")"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+text"},".text","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+say"},".say","(","textOrContactOrFile",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <void>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+type"},".type","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"MessageType")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+self"},".self","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+mention"},".mention","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <Contact []>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+mentionSelf"},".mentionSelf","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <boolean>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+forward"},".forward","(","to",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <void>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+date"},".date","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Date")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+age"},".age","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+file"},(0,o.kt)("del",{parentName:"a"},".file","(",")"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+toFileBox"},".toFileBox","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <FileBox>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+toContact"},".toContact","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <Contact>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message+toUrlLink"},".toUrlLink","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <UrlLink>")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"static"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message.find"},".find","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <Message>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/message#Message.findAll"},".findAll","(",")")," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise <Message []>"))))))),(0,o.kt)("h3",{id:"messagefrom-\u21d2-contact--null"},"message.from","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Contact | null")),(0,o.kt)("p",null,"Get the sender from a message."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messageto-\u21d2-contact--null"},"message.to","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Contact")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"h3"},"null")),(0,o.kt)("p",null,"Get the destination of the message Message.to","(",")"," will return null if a message is in a room, use Message.room","(",")"," to get the room."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = message.from()\n  const text = message.text()\n  const toContact = message.to()\n  if (toContact) {\n    const name = toContact.name()\n    console.log(`toContact: ${name} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messageroom-\u21d2-room--null"},"message.room","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Room")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"h3"},"null")),(0,o.kt)("p",null,"Get the room from the message. If the message is not in a room, then will return ",(0,o.kt)("inlineCode",{parentName:"p"},"null")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagecontent"},(0,o.kt)("del",{parentName:"h3"},"message.content","(",")")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Deprecated"))),(0,o.kt)("p",null,"use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message+text"},"text")," instead"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h3",{id:"messagetext-\u21d2-string"},"message.text","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"string")),(0,o.kt)("p",null,"Get the text content of the message"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagetorecalled-\u21d2-promise-message--null"},"message.toRecalled","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Message | null>")),(0,o.kt)("p",null,"Get the text content of the recalled message"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  if (m.type() === bot.Message.Type.Recalled) {\n    const recalledMessage = await m.toRecalled()\n    console.log(`Message: ${recalledMessage} has been recalled.`)\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagesaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void"},"message.say","(","textOrContactOrFileOrUrlLinkOrMiniProgram",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,o.kt)("p",null,"Reply a Text, Contact Card, Media File or Link message to the sender."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)("strong",{parentName:"p"},"See"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts"},"Examples/ding-dong-bot")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"textOrContactOrFileOrUrlLinkOrMiniProgram"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"Contact")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"FileBox")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"UrlLink")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"MiniProgram")),(0,o.kt)("td",{parentName:"tr",align:"left"},"send text, Contact, UrlLink, MiniProgram or file to bot.   You can use ",(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/file-box"},"FileBox")," to send file")))),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FileBox }  from 'file-box'\nimport {\n  Wechaty,\n  UrlLink,\n  MiniProgram,\n}  from 'wechaty'\n\nconst bot = new Wechaty()\nbot\n.on('message', async m => {\n\n// 1. send Image\n\n  if (/^ding$/i.test(m.text())) {\n    const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\n    await msg.say(fileBox)\n  }\n\n// 2. send Text\n\n  if (/^dong$/i.test(m.text())) {\n    await msg.say('dingdingding')\n  }\n\n// 3. send Contact\n\n  if (/^lijiarui$/i.test(m.text())) {\n    const contactCard = await bot.Contact.find({name: 'lijiarui'})\n    if (!contactCard) {\n      console.log('not found')\n      return\n    }\n    await msg.say(contactCard)\n  }\n\n// 4. send UrlLink\n\n  if (/^link$/i.test(m.text())) {\n    const urlLink = new UrlLink({\n      description: 'Wechaty is a Bot SDK for Wechat Individual Account which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.',\n      thumbnailUrl: 'https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67',\n      title: 'Wechaty',\n      url: 'https://github.com/wechaty/wechaty',\n    });\n\n    await msg.say(urlLink);\n  }\n\n// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)\n\n  if (/^mini-program$/i.test(m.text())) {\n    const miniProgram = new MiniProgram ({\n      appid              : 'gh_0aa444a25adc',\n      title              : '\u6211\u6b63\u5728\u4f7f\u7528Authing\u8ba4\u8bc1\u8eab\u4efd\uff0c\u4f60\u4e5f\u6765\u8bd5\u8bd5\u5427',\n      pagePath           : 'routes/explore.html',\n      description        : '\u8eab\u4efd\u7ba1\u5bb6',\n      thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',\n      thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',\n    });\n\n    await msg.say(miniProgram);\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagetype-\u21d2-messagetype"},"message.type","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"MessageType")),(0,o.kt)("p",null,"Get the type from the message."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: MessageType is Enum here. ","<","/br",">"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"MessageType.Unknown"),(0,o.kt)("li",{parentName:"ul"},"MessageType.Attachment"),(0,o.kt)("li",{parentName:"ul"},"MessageType.Audio"),(0,o.kt)("li",{parentName:"ul"},"MessageType.Contact"),(0,o.kt)("li",{parentName:"ul"},"MessageType.Emoticon"),(0,o.kt)("li",{parentName:"ul"},"MessageType.Image"),(0,o.kt)("li",{parentName:"ul"},"MessageType.Text"),(0,o.kt)("li",{parentName:"ul"},"MessageType.Video"),(0,o.kt)("li",{parentName:"ul"},"MessageType.Url"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nif (message.type() === bot.Message.Type.Text) {\n  console.log('This is a text message')\n}\n")),(0,o.kt)("h3",{id:"messageself-\u21d2-boolean"},"message.self","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,o.kt)("p",null,"Check if a message is sent by self."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," - - Return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for send from self, ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," for send from others. ",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (message.self()) {\n console.log('this message is sent by myself!')\n}\n")),(0,o.kt)("h3",{id:"messagemention-\u21d2-promise-contact-"},"message.mention","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Contact []>")),(0,o.kt)("p",null,"Get message mentioned contactList."),(0,o.kt)("p",null,"Message event table as follows"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"}),(0,o.kt)("th",{parentName:"tr",align:"center"},"Web"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Mac PC Client"),(0,o.kt)("th",{parentName:"tr",align:"center"},"iOS Mobile"),(0,o.kt)("th",{parentName:"tr",align:"center"},"android Mobile"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"[","You were mentioned","]"," tip ","(","[","\u6709\u4eba@\u6211","]","\u7684\u63d0\u793a",")"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Identify magic code ","(","8197",")"," by copy & paste in mobile"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Identify magic code ","(","8197",")"," by programming"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Identify two contacts with the same roomAlias by ","[","You were  mentioned","]"," tip"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2718"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u221a")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise <Contact []>")," - - Return message mentioned contactList ",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const contactList = await message.mention()\nconsole.log(contactList)\n")),(0,o.kt)("h3",{id:"messagementionself-\u21d2-promise-boolean"},"message.mentionSelf","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <boolean>")),(0,o.kt)("p",null,"Check if a message is mention self."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise <boolean>")," - - Return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for mention me. ",(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (await message.mentionSelf()) {\n console.log('this message were mentioned me! [You were mentioned] tip ([\u6709\u4eba@\u6211]\u7684\u63d0\u793a)')\n}\n")),(0,o.kt)("h3",{id:"messageforwardto-\u21d2-promise-void"},"message.forward","(","to",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,o.kt)("p",null,"Forward the received message. This action doesn't trigger the on-message events."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"to"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Sayable")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"Array")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Room or Contact The recipient of the message, the room, or the contact")))),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const room = await bot.Room.find({topic: 'wechaty'})\n  if (room) {\n    await m.forward(room)\n    console.log('forward this message to wechaty room!')\n  }\n})\n.start()\n")),(0,o.kt)("h3",{id:"messagedate-\u21d2-date"},"message.date","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Date")),(0,o.kt)("p",null,"Message sent date"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h3",{id:"messageage-\u21d2-number"},"message.age","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"number")),(0,o.kt)("p",null,"Returns the message age in seconds."),(0,o.kt)("p",null,"For example, the message is sent at time ",(0,o.kt)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",(0,o.kt)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h3",{id:"messagefile"},(0,o.kt)("del",{parentName:"h3"},"message.file","(",")")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Deprecated"))),(0,o.kt)("p",null,"use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message+toFileBox"},"toFileBox")," instead"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h3",{id:"messagetofilebox-\u21d2-promise-filebox"},"message.toFileBox","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <FileBox>")),(0,o.kt)("p",null,"Extract the Media File from the Message, and put it into the FileBox."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h3",{id:"messagetocontact-\u21d2-promise-contact"},"message.toContact","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Contact>")),(0,o.kt)("p",null,"Get Share Card of the Message Extract the Contact Card from the Message, and encapsulate it into Contact class"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h3",{id:"messagetourllink-\u21d2-promise-urllink"},"message.toUrlLink","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <UrlLink>")),(0,o.kt)("p",null,"Get Url Link of the Message Extract the Url Link from the Message, and encapsulate it into UrlLink class"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h3",{id:"messagefind-\u21d2-promise-message--null"},"Message.find","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Message | null>")),(0,o.kt)("p",null,"Find message in cache"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))),(0,o.kt)("h3",{id:"messagefindall-\u21d2-promise-message-"},"Message.findAll","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <Message []>")),(0,o.kt)("p",null,"Find messages in cache"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/message#Message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))))}p.isMDXComponent=!0}}]);