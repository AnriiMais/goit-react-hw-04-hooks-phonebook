(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},11:function(t,e,n){t.exports={searchInputWrap:"Filter_searchInputWrap__1Cpg8",filterLabel:"Filter_filterLabel__25PkI"}},18:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__cC19x",contactInput:"ContactForm_contactInput__1rUX0",addContactBtn:"ContactForm_addContactBtn__1w--2",contactLabel:"ContactForm_contactLabel__3p4xN"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=(n(18),n(13)),i=n(4),u=(n(19),n(10)),l=n(3),b=n.n(l),m=n(2),d=n.n(m),j=n(0),p=function(t){var e=t.onSubmitForm,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1],p=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},f=function(){return{id:b.a.generate(),name:r,number:l}},h=b.a.generate(),O=b.a.generate();return Object(j.jsxs)("form",{className:d.a.contactForm,onSubmit:function(t){t.preventDefault(),e(f()),o(""),m("")},children:[Object(j.jsx)("label",{className:d.a.contactLabel,htmlFor:O,children:"Name"}),Object(j.jsx)("input",{id:O,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.  \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:d.a.contactInput,onChange:p}),Object(j.jsx)("label",{className:d.a.contactLabel,htmlFor:h,children:"Number"}),Object(j.jsx)("input",{id:h,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:d.a.contactInput,onChange:p}),Object(j.jsx)("button",{className:d.a.addContactBtn,type:"submit",children:"Add contact"})]})},f=n(11),h=n.n(f),O=function(t){var e=t.value,n=t.filterQuery,a=b.a.generate();return Object(j.jsxs)("span",{className:h.a.searchInputWrap,children:[Object(j.jsx)("label",{className:h.a.filterLabel,htmlFor:a,children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"filter",value:e,id:a,onChange:n})]})},_=n(5),x=n.n(_),C=function(t){var e=t.queryList,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("div",{className:x.a.contactWrap,children:[Object(j.jsxs)("li",{className:x.a.contact,children:[a,":",Object(j.jsx)("span",{className:x.a.contactNumber,children:c})]}),Object(j.jsx)("button",{className:x.a.btnDelete,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},N=function(){var t=Object(a.useState)(u),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1];Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));c(t||u)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var m=l.toLowerCase(),d=n.filter((function(t){return t.name.toLowerCase().includes(m)}));return Object(j.jsxs)("section",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmitForm:function(t){var e=t.name,n=t.number;c((function(a){return a.every((function(t){return t.name.toLowerCase()!==e.toLowerCase()&&n!==t.number}))?[t].concat(Object(s.a)(a)):(alert("".concat(e," contact with the ").concat(n," already exists!!!")),a)}))}}),Object(j.jsx)("h2",{className:"contacts",children:"Contacts"}),Object(j.jsx)(O,{value:l,filterQuery:function(t){var e=t.target.value;b(e)}}),Object(j.jsx)(C,{queryList:d,onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={contactList:"ContactList_contactList__2-j4m",contactWrap:"ContactList_contactWrap__3nH3j",contact:"ContactList_contact__1Of4b",contactNumber:"ContactList_contactNumber__3ittx",btnDelete:"ContactList_btnDelete__1qwiL"}}},[[29,1,2]]]);
//# sourceMappingURL=main.50e68e59.chunk.js.map