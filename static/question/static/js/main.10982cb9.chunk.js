(this["webpackJsonpantd-demo-ts"]=this["webpackJsonpantd-demo-ts"]||[]).push([[0],{120:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(0),c=n.n(r),s=n(25),i=n.n(s),o=(n(120),n(86)),u=n(35),j=n.n(u),l=n(48),f=n(109),b=n(197),d=n(200),p=n(202),m=n(203),x=b.a.Meta,h=function(e){var t=e.name,n=e.question;return Object(a.jsx)(b.a,{bordered:!0,actions:[Object(a.jsx)(p.a,{},"setting"),Object(a.jsx)(m.a,{},"like")],children:Object(a.jsx)(x,{avatar:Object(a.jsx)(d.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:t,description:n})})},O=n(201),v=function(){var e=Object(r.useState)(),t=Object(f.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){var e=window.location,t=new WebSocket("ws://".concat(e.hostname,":8081"));t.onmessage=function(){var e=Object(l.a)(j.a.mark((function e(t){var r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,e.next=3,a(r);case 3:if(c=e.sent){e.next=6;break}return e.abrupt("return");case 6:(s=n[c.action])&&s(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onopen=function(e){this.send(JSON.stringify({action:"getall"}))};var n={broadcast:function(e){c((function(t){var n=t;return{questions:[e.data].concat(Object(o.a)(n.questions))}}))},getall:function(e){var t=e;c((function(e){var n={questions:[]};return t.data.forEach((function(e){n.questions=[].concat(Object(o.a)(n.questions),[{name:e.name,question:e.desc}])})),n}))}},a=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.text){e.next=4;break}return e.next=3,t.text().then((function(e){return JSON.parse(e)})).catch((function(e){console.warn(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),[]);var s=null===n||void 0===n?void 0:n.questions.map((function(e){return Object(a.jsxs)(b.a,{children:[Object(a.jsx)(h,{name:e.name,question:e.question})," "]})}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(O.b,{direction:"vertical",style:{width:"100%"},children:s})})},g=(n(122),n(107)),w=n(23),q=n(196),y=n(198),k=n(108),N=n(204),S=n(205),F=function(){var e;Object(r.useEffect)((function(){var t=window.location;(e=new WebSocket("ws://".concat(t.hostname,":8081"))).onmessage=function(){var e=Object(l.a)(j.a.mark((function e(t){var r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,e.next=3,a(r);case 3:if(c=e.sent){e.next=6;break}return e.abrupt("return");case 6:(s=n[c.action])&&s(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var n={broadcast:function(e){},getall:function(e){}},a=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.text){e.next=4;break}return e.next=3,t.text().then((function(e){return JSON.parse(e)})).catch((function(e){console.warn(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),[]);return Object(a.jsx)(q.a,{name:"normal_question",className:"submit-form",onFinish:function(t){console.log("Received values of form: ",t),function(t,n){var a={action:"create",data:{name:t,question:n}};e.send(JSON.stringify(a))}(t.username,t.question)},children:Object(a.jsxs)(O.b,{direction:"vertical",align:"center",style:{width:"100%"},children:[Object(a.jsx)(q.a.Item,{style:{marginTop:"40px"},name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(a.jsx)(y.a,{prefix:Object(a.jsx)(N.a,{className:"site-form-item-icon"}),placeholder:"Who are you"})}),Object(a.jsx)(q.a.Item,{name:"question",rules:[{required:!0,message:"Please input your Question!"}],children:Object(a.jsx)(y.a,{prefix:Object(a.jsx)(S.a,{className:"site-form-item-icon"}),placeholder:"enter your question"})}),Object(a.jsx)(q.a.Item,{children:Object(a.jsx)(k.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"\u63d0\u4ea4\u95ee\u9898"})})]})})},J=n(199),C=J.a.Header,I=J.a.Content;var T=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(C,{}),Object(a.jsx)(I,{children:Object(a.jsx)(g.a,{basename:"/question",children:Object(a.jsxs)(w.c,{children:[Object(a.jsx)(w.a,{path:"/ask",children:Object(a.jsx)(F,{})}),Object(a.jsx)(w.a,{path:"/",component:v})]})})})]})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),E()}},[[194,1,2]]]);
//# sourceMappingURL=main.10982cb9.chunk.js.map