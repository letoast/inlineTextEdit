(this["webpackJsonpinline-edit"]=this["webpackJsonpinline-edit"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a.n(c),l=a(5),r=a.n(l),s=(a(13),function(e){var t=Object(c.useRef)(null),a=Object(c.useState)(e.children),l=Object(n.a)(a,2),r=l[0],s=l[1],o=Object(c.useState)({width:"10px",height:"10px",lineHeight:"0"}),m=Object(n.a)(o,2),u=m[0],d=m[1];return Object(c.useEffect)((function(){var e=window.getComputedStyle(t.current);d({width:e.width,height:e.height})}),[r]),i.a.createElement("div",null,i.a.createElement("div",{id:"noHeight"},i.a.createElement("span",{id:"hide",ref:t},r+" ")),i.a.createElement("textarea",{id:"txt",type:"text",value:r,style:u,onChange:function(e){return s(e.target.value)},placeholder:"Hello"}))}),o=a(6),m=a(7),u=i.a.forwardRef((function(e,t){var a=e.popup,n=e.availReactions,c=e.reactionChange;Object(m.a)(e,["popup","availReactions","reactionChange"]);return i.a.createElement("div",{ref:t,className:"test ".concat(a?"show":"hide")},n.map((function(e,t){return i.a.createElement("i",{key:t,className:"reaction-icon",style:{zIndex:{idx:t},backgroundPosition:e},onClick:function(){return c(t)}})})))})),d=function(e){var t=Object(c.useRef)(),a=Object(c.useCallback)((function(e){t.current.contains(e.target)||(g(!1),document.removeEventListener("click",a))}),[]),l=["-49px -1159px","-68px -1159px","-68px -1197px","-68px -1140px","-70px -1119px","-49px -1178px"],r=Object(c.useState)(new Map([["first",l[0]],["second",l[1]],["third",l[2]]])),m=Object(n.a)(r,2),d=m[0],p=m[1],f=Object(c.useState)(!1),h=Object(n.a)(f,2),E=h[0],g=h[1],b=Object(c.useState)(),v=Object(n.a)(b,2),N=v[0],j=v[1],x=Object(c.useState)([]),O=Object(n.a)(x,2),k=O[0],y=O[1],C=Object(c.useCallback)((function(e){g(!0),j(e.target.id),y(l.filter((function(e){for(var t in d)if(e===d[t])return!1;return!0}))),document.addEventListener("click",a)}),[l,a,d]);return i.a.createElement("div",{className:"reactions-icons-div"},i.a.createElement(u,{ref:t,popup:E,availReactions:k,reactionChange:function(e){p(new Map(d.set(N,k[e]))),g(!1),document.removeEventListener("click",a),console.log("adasas")}}),i.a.createElement("div",{style:{display:"flex",marginRight:"0.6rem"}},Object(o.a)(d.keys()).map((function(e,t,a){return i.a.createElement("i",{className:"reaction-icon",key:t,id:e,style:{zIndex:a.length-t,backgroundPosition:d.get(e)},onClick:C})}))),i.a.createElement("span",{className:"bottom-text"},i.a.createElement(s,null,"323")))};a(14),a(15),a(16);function p(){var e=Object(c.useState)(),t=Object(n.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)(),o=Object(n.a)(r,2),m=o[0],u=o[1];return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"upper"},i.a.createElement("div",{className:"cardHead"},i.a.createElement("input",{type:"file",name:"file1",id:"file1",className:"inputfile",accept:"image/png, image/jpeg",onChange:function(e){return u(URL.createObjectURL(e.target.files[0]))}}),i.a.createElement("label",{htmlFor:"file1",className:"chooseFile"},i.a.createElement("div",{className:"headImage changeImg",style:{backgroundImage:m?"url(".concat(m,")"):"url(https://unsplash.it/500/300)"}})),i.a.createElement("div",{className:"headText"},i.a.createElement("h4",{className:"card-headline"},i.a.createElement(s,null,"Care \u0160mare")),i.a.createElement("span",{className:"head-time"},i.a.createElement(s,null,"Yesterday at 11:56 AM")))),i.a.createElement("div",{className:"postText"},i.a.createElement(s,null,"This is my face for the past three days. I've already updated Spark and IG app, but still can't use test links at all"))),i.a.createElement("input",{type:"file",name:"file2",id:"file2",className:"inputfile",accept:"image/png, image/jpeg",onChange:function(e){return l(URL.createObjectURL(e.target.files[0]))}}),i.a.createElement("label",{htmlFor:"file2",className:"chooseFile"},i.a.createElement("div",{className:"changeImg bodyImg",style:{backgroundImage:a?"url(".concat(a,")"):"url(https://unsplash.it/500/300)"}})),i.a.createElement("div",{className:"cardText"},i.a.createElement("div",{className:"reactions-div"},i.a.createElement(d,null),i.a.createElement("div",{className:"bottom-text reactions-comments"},i.a.createElement(s,null,"4"),"comments")),i.a.createElement("div",{className:"like-comment-share"},i.a.createElement("div",{className:"button-action"},i.a.createElement("i",{className:"action-icons icon-like"}),"Like"),i.a.createElement("div",{className:"button-action"},i.a.createElement("i",{className:"action-icons icon-comment"}),"Comment"),i.a.createElement("div",{className:"button-action"},i.a.createElement("i",{className:"action-icons icon-share"}),"Share"))))}r.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3152d050.chunk.js.map