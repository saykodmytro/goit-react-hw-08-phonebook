"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[903],{5700:function(e,t,n){n.d(t,{W:function(){return c}});var a="Container_container__VVOCq",r="Container_title__uuJgB",s=n(184),c=function(e){var t=e.title,n=e.children;return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("h1",{className:r,children:t}),n]})}},1903:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(9434),r=n(3634),s="ContactList_list__csErn",c="ContactList_item__EZYHO",o="ContactList_descrList__lfROM",i="ContactList_btnDel__M+VR9",l=n(184),u=function(e){var t=e.contacts,n=(0,a.I0)();return(0,l.jsx)("ul",{className:s,children:t.length>0&&t.map((function(e){var t=e.id,a=e.name,s=e.number;return(0,l.jsxs)("li",{className:c,children:[(0,l.jsx)("p",{className:o,children:a}),(0,l.jsx)("p",{className:o,children:s}),(0,l.jsx)("button",{type:"button",className:i,onClick:function(){return n((0,r.GK)(t))},children:"Delete"})]},t)}))})},m=n(5700),h=n(7671),_=n(6916),d=function(e){return e.contactsStore.contacts.items},f=function(e){return e.contactsStore.filter},p=(0,_.P1)([d,f],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),x={input:"Filter_input__N7T3z"},j=function(){var e=(0,a.v9)(f),t=(0,a.I0)();return(0,l.jsx)("label",{className:x.label,children:(0,l.jsx)("input",{className:x.input,type:"text",placeholder:"Search",value:e,onChange:function(e){var n=e.target.value;t((0,h.f)(n))}})})},b=n(9439),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},N=n(2791),C="PhoneForm_form__TuHnD",g="PhoneForm_lable__6V1DN",w="PhoneForm_input__gtrkg",L="PhoneForm_titleLable__MKS3L",F="PhoneForm_btnForm__wCwNA",S=function(){var e=(0,a.I0)(),t=(0,a.v9)(d),n=(0,N.useState)(""),s=(0,b.Z)(n,2),c=s[0],o=s[1],i=(0,N.useState)(""),u=(0,b.Z)(i,2),m=u[0],h=u[1],_=function(e){"name"===e.target.name?o(e.target.value):"number"===e.target.name&&h(e.target.value)};return(0,l.jsxs)("form",{action:"",className:C,onSubmit:function(n){n.preventDefault(),function(n){t.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()||e.number===n.number}))?alert("Oops, contact with name '".concat(n.name,"' already exists!")):e((0,r.uK)(n))}({id:v(),name:c,number:m}),o(""),h("")},children:[(0,l.jsxs)("label",{htmlFor:"",className:g,children:[(0,l.jsx)("p",{className:L,children:"Name"}),(0,l.jsx)("input",{onChange:_,name:"name",type:"text",className:w,value:c,required:!0})]}),(0,l.jsx)("p",{className:L,children:"Number"}),(0,l.jsx)("label",{htmlFor:"",className:g,children:(0,l.jsx)("input",{onChange:_,name:"number",type:"text",className:w,value:m})}),(0,l.jsx)("button",{type:"submit",className:F,children:"Add contact"})]})},k=function(){var e=(0,a.I0)(),t=(0,a.v9)(p);return(0,N.useEffect)((function(){e((0,r.yF)())}),[e]),(0,l.jsxs)("div",{children:[(0,l.jsx)(m.W,{title:"Phonebook",children:(0,l.jsx)(S,{})}),(0,l.jsx)(m.W,{title:"Search",children:(0,l.jsx)(j,{})}),(0,l.jsx)(m.W,{title:"Contacts",children:(0,l.jsx)(u,{contacts:t})})]})}}}]);
//# sourceMappingURL=903.6c50345a.chunk.js.map