(this["webpackJsonpsocail-network-app"]=this["webpackJsonpsocail-network-app"]||[]).push([[4],{302:function(e,a,s){e.exports={dialog:"Dialog_dialog__NyZX5",dModule:"Dialog_dModule__1sCqE",message:"Dialog_message__WDcLS",dialogs:"Dialog_dialogs__24VU8"}},309:function(e,a,s){"use strict";s.r(a);s(0);var t=s(11),n=s(302),i=s.n(n),c=s(14),o=s(1),d=function(e){var a="/dialog/"+e.id;return Object(o.jsx)("div",{className:i.a.dialogs+""+i.a.active,children:Object(o.jsxs)(c.b,{to:a,children:[" ",e.name]})})},r=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:i.a.messages,children:e.message})})},l=s(92),j=s(131),g=s(77),u=s(37),b=Object(g.a)(50),m=Object(j.a)({form:"dialogMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(l.a,{name:"newMessageText",component:u.b,placeholder:"Write here",validate:[g.b,b]})}),Object(o.jsx)("button",{children:"Send"})]})}));var O=function(e){var a=e.messagePage,s=a.dialogs.map((function(e){return Object(o.jsx)(d,{name:e.name,id:e.id})})),n=a.messages.map((function(e){return Object(o.jsx)(r,{message:e.message})}));return e.isAuth?Object(o.jsx)("div",{className:i.a.dialog,children:Object(o.jsxs)("div",{className:i.a.dModule,children:[s,Object(o.jsx)("div",{className:i.a.message,children:n}),Object(o.jsx)(m,{onSubmit:function(a){e.addMessage(a.newMessageText)}})]})}):Object(o.jsx)(t.a,{to:"/login"})},x=s(129),h=s(13),f=s(130),p=s(9);a.default=Object(p.d)(Object(h.b)((function(e){return{messagePage:e.messagePage}}),(function(e){return{addMessage:function(a){e(Object(x.a)(a))}}})),f.a)(O)}}]);
//# sourceMappingURL=4.368b7f7c.chunk.js.map