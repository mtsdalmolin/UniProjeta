(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/gitLogo.86016cab.svg"},29:function(e,a,t){e.exports=t(62)},35:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),s=t(9),o=t(4),i=t(6),m=t.n(i),u=t(8),p=t(7);t(35);function d(){return r.a.createElement(s.b,{to:"/"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"UniProjeta")))}function E(e){return r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"search",type:"text",placeholder:"Digite o nome da Universidade",onChange:e.onChange,onKeyDown:e.onKeyDown}),r.a.createElement("span",{className:"bar"}))}t(41);function f(e){return r.a.createElement("div",{className:"list"},e.list?e.list.map(function(a){return r.a.createElement("div",{key:a._id,className:"num",onClick:function(){return e.handleClick(a._id)}},r.a.createElement("span",{className:"university"},a.name))}):"")}t(42);var v=t(26),g=t.n(v).a.create({baseURL:"/"}),N=t(27),h=t.n(N),b=13,y=32;function O(e){var a=Object(n.useState)(),t=Object(p.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(),o=Object(p.a)(s,2),i=o[0],v=o[1];return Object(n.useEffect)(function(){function e(){return(e=Object(u.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/orgs",{headers:{name:i}});case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav"},r.a.createElement("a",{href:"https://github.com/mtsdalmolin/UniProjeta"},r.a.createElement("img",{src:h.a,alt:"GitHub",class:"logo",title:"Reposit\xf3rio da aplica\xe7\xe3o"})),r.a.createElement(E,{onChange:function(e){e.keyCode!==y&&v(e.target.value)},onKeyDown:function(e){e.keyCode===b&&v(e.target.value)}})),r.a.createElement(f,{history:e.history,handleClick:function(a){e.history.push("/university/".concat(a))},list:l})))}var S=t(28),x=t.n(S);t(60);function j(e){var a=e.match,t=Object(n.useState)(),l=Object(p.a)(t,2),c=l[0],s=l[1];function o(e){return(e=e.replace(".",",")).replace(/\B(?=(\d{3})+(?!\d))/g,".")}return Object(n.useEffect)(function(){function e(){return(e=Object(u.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/orgs/".concat(a.params.id,"/dashboard"));case 2:t=e.sent,s(JSON.stringify(t.data));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[a.params.id]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"heading"},r.a.createElement(d,null)),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,c?r.a.createElement("div",null,r.a.createElement("inst",null,JSON.parse(c).name),r.a.createElement("inst",null,"Sigla: ",JSON.parse(c).initials),r.a.createElement("inst",null,"C\xf3d. SIAFI: ",JSON.parse(c).SIAFI),r.a.createElement("inst",null,"UF: ",JSON.parse(c).state),JSON.parse(c).data.map(function(e){return r.a.createElement(x.a,{trigger:e.year},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"expenses-div"},r.a.createElement("span",null,"Despesas"),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"info-label tooltip"},"Empenhado:",r.a.createElement("span",{class:"tooltiptext"},"Valor empenhado \xe9 o valor que o Estado reservou para efetuar pagamentos planejados.")),r.a.createElement("span",{className:"info-value money"},o(e.expenses.committed.toString()))),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"info-label tooltip"},"Liquidado:",r.a.createElement("span",{class:"tooltiptext"},"Valor liquidado \xe9  valor reservado para quem prestou o servi\xe7o a institui\xe7\xe3o.")),r.a.createElement("span",{className:"info-value money"},o(e.expenses.settled.toString()))),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"info-label tooltip"},"Pago:",r.a.createElement("span",{class:"tooltiptext"},"Valor pago \xe9 o valor j\xe1 repassado aos prestadores de servi\xe7o.")),r.a.createElement("span",{className:"info-value money"},o(e.expenses.paid.toString())))),r.a.createElement("div",{className:"igc-div"},r.a.createElement("span",null,"IGC"),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"info-label"},"Cont\xednuo:"),r.a.createElement("span",{className:"info-value"},e.igc_cont_value.toString().replace(".",","))),r.a.createElement("div",{className:"info"},r.a.createElement("span",{className:"info-label"},"Discreto:"),r.a.createElement("span",{className:"info-value"},e.igc_value)))))})):"")))}function w(){return r.a.createElement(s.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:O}),r.a.createElement(o.a,{path:"/university/:id",component:j}))}t(61);c.a.render(r.a.createElement(function(){return r.a.createElement(w,null)},null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a4701ffd.chunk.js.map