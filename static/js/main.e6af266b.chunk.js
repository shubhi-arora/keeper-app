(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{36:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(6),r=n.n(c),o=n(29),u=n.n(o);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(u.a,null),"Keeper"))};var m=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},s=n(31),E=n.n(s);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(E.a,null)))},f=n(32),d=n.n(f),v=n(65),h=n(66);var b=function(e){const[t,n]=Object(a.useState)({title:"",content:""}),[c,r]=Object(a.useState)(!1);function o(e){const{name:t,value:a}=e.target;n(e=>({...e,[t]:a}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:o,value:t.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:o,value:t.content,placeholder:"Take a note...",rows:c?"3":"1"}),l.a.createElement(h.a,{in:c},l.a.createElement(v.a,{onClick:function(a){e.onAdd(t),n({title:"",content:""}),r(!1),a.preventDefault()}},l.a.createElement(d.a,null)))))};var g=function(){const[e,t]=Object(a.useState)([]);function n(e){t(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(b,{onAdd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>l.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:n})),l.a.createElement(m,null))};r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e6af266b.chunk.js.map