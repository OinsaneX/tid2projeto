(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/1.e6ec6ac8.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/2.fa42c5f5.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/3.57c1ec76.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/welcome.f6a095ec.png"},27:function(e,a,t){e.exports=t(52)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){e.exports=t.p+"static/media/search.4d823de5.png"},36:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(19),l=t.n(s),o=t(3),c=t.n(o),i=t(7),m=t(9),u=(t(33),t(1)),d=(t(34),{getCovidDates:function(){var e=Object(i.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid.ourworldindata.org/data/owid-covid-data.json");case 2:return a=e.sent,t=a.json(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()});t(35);var p=function(e){var a=e.list,t=Object(n.useState)([]),s=Object(m.a)(t,2),l=s[0],o=s[1],u=Object(n.useState)(a),p=Object(m.a)(u,2),E=p[0],f=p[1];function g(){return(g=Object(i.a)(c.a.mark((function e(a){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l,console.log(a.target.value),e.next=4,t.filter((function(e){return e.location.toLowerCase().includes(a.target.value.toLowerCase())}));case 4:n=e.sent,f(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var a,t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E.length<1)){e.next=9;break}return e.next=3,d.getCovidDates();case 3:for(n in a=e.sent,t=[],a)t.push(a[n]);f(t),o(t),console.log(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"text-center mt-3 font-italic"}," Casos de Covid-19 nos paises do mundo"),r.a.createElement("nav",{className:"navbar filter"},r.a.createElement("form",{className:"form m-auto col-md-4"},r.a.createElement("input",{className:"form-control mr-sm-2",onChange:function(e){return g.apply(this,arguments)},type:"search",placeholder:"Pais","aria-label":"Search"}))),r.a.createElement("table",{class:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Pais"),r.a.createElement("th",null,"Continente"),r.a.createElement("th",null,"Popula\xe7ao"),r.a.createElement("th",null,"Casos"))),r.a.createElement("tbody",null,E.map((function(e,a){return r.a.createElement("tr",null,r.a.createElement("td",null,e.location),r.a.createElement("td",null,e.continent),r.a.createElement("td",null,e.population),r.a.createElement("td",null,e.data[e.data.length-1].total_cases))})))),r.a.createElement("hr",null),E.length<=0&&r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))},E=(t(36),t(20));var f=function(e){var a=e.login;Object(n.useEffect)((function(){localStorage.getItem("accesToken")&&(window.location.href="#/App/Welcome")}),[]);var t=function(e){console.log(e),e.profileObj&&(localStorage.setItem("username",e.profileObj.givenName+" "+e.profileObj.familyName),localStorage.setItem("email",e.profileObj.email),localStorage.setItem("accesToken",e.accessToken),localStorage.setItem("imgProfile",e.profileObj.imageUrl),window.location.href="#/app/welcome")};return r.a.createElement("div",{className:"login-wrap"},r.a.createElement("div",{className:"login-html"},r.a.createElement("input",{id:"tab-1",type:"radio",name:"tab",className:"sign-in",checked:!0}),r.a.createElement("label",{style:{color:"#ffff"},for:"tab-1",className:"tab"},"Sign In"),r.a.createElement("input",{id:"tab-2",type:"radio",name:"tab",className:"sign-up"}),r.a.createElement("label",{style:{color:"#ffff"},for:"tab-2",className:"tab"},"Sign Up"),r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"sign-in-htm"},r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"user",className:"label"},"Username"),r.a.createElement("input",{id:"user",type:"text",className:"input"})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"pass",className:"label"},"Password"),r.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password"})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"submit",className:"button",value:"Sign In",onClick:function(){return a()}}),r.a.createElement(E.GoogleLogin,{className:"d-block mx-auto mt-4 log",clientId:"365928965363-tiqenhoq6ifss2r9jighm1d0lhvinnlr.apps.googleusercontent.com",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})),r.a.createElement("div",{className:"foot-lnk"},r.a.createElement("a",{href:"#forgot"},"Forgot Password?"))),r.a.createElement("div",{className:"sign-up-htm"},r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"user",className:"label"},"Username"),r.a.createElement("input",{id:"user",type:"text",className:"input"})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"pass",className:"label"},"Password"),r.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password"})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"pass",className:"label"},"Repeat Password"),r.a.createElement("input",{id:"pass",type:"password",className:"input","data-type":"password"})),r.a.createElement("div",{className:"group"},r.a.createElement("label",{for:"pass",className:"label"},"Email Address"),r.a.createElement("input",{id:"pass",type:"text",className:"input"})),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"submit",className:"button",value:"Sign Up"})),r.a.createElement("div",{className:"hr"})))))};t(37),t(38),t(40);var g=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark rigth  bg-dark sticky-top"},r.a.createElement("a",{className:"navbar-brand",href:"/App"},"CoviDWeb-19"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav  ml-auto"},r.a.createElement("a",{className:"nav-link active",href:"#/App/Home"},"Inicio",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active",href:"#/App/WorldInfo"},"Dados",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active",href:"#/App/Notices"},"Noticias ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active",href:"#/App/Profile"},"Perfil",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-link active",href:"#/App/Credit"},"Notifica\xe7\xf5es ",r.a.createElement("span",{className:"sr-only"},"(current)")," ",r.a.createElement("span",{class:"badge badge-light"},"4")),r.a.createElement("a",{className:"nav-link active rigth btn",onClick:function(){return localStorage.removeItem("email"),localStorage.removeItem("username"),localStorage.removeItem("accesToken"),localStorage.removeItem("imgProfile"),void(window.location.href="#/")}},"Sair ",r.a.createElement("span",{className:"sr-only"},"(current)")))))},v=(t(41),t(21)),h=t.n(v),b=t(22),N=t.n(b),y=t(23),w=t.n(y);var I=function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),r.a.createElement("div",{className:"carousel-inner",role:"listbox"},r.a.createElement("div",{className:"carousel-item active",style:{backgroundImage:"url(".concat(h.a,")")}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",{className:"display-4"},"O que \xe9 COVID-19"),r.a.createElement("p",{className:"lead description"},"Os coronav\xedrus s\xe3o uma grande fam\xedlia de v\xedrus comuns em muitas esp\xe9cies diferentes de animais, incluindo camelos, gado, gatos e morcegos. Raramente. Recentemente, em dezembro de 2019, houve a transmiss\xe3o de um novo coronav\xedrus (SARS-CoV-2), o qual foi identificado em Wuhan na China e causou a COVID-19, sendo em seguida disseminada e transmitida pessoa a pessoa."))),r.a.createElement("div",{className:"carousel-item",style:{backgroundImage:"url(".concat(N.a,")")}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",{className:"display-4"},"O que \xe9 COVID-19"),r.a.createElement("p",{className:"lead description"},"A COVID-19 \xe9 uma doen\xe7a causada pelo coronav\xedrus, denominado SARS-CoV-2, que apresenta um espectro cl\xednico variando de infec\xe7\xf5es assintom\xe1ticas a quadros graves. "))),r.a.createElement("div",{className:"carousel-item",style:{backgroundImage:"url(".concat(w.a,")")}},r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("h3",{className:"display-4"},"Como \xe9 transmitido"),r.a.createElement("p",{className:"lead description"},"A transmiss\xe3o acontece de uma pessoa doente para outra ou por contato pr\xf3ximo por meio de: Toque do aperto de m\xe3o contaminadas; Got\xedculas de saliva; Espirro; Tosse; Catarro; Objetos ou superf\xedcies contaminadas, como celulares, mesas, talheres, ma\xe7anetas, brinquedos, teclados de computador etc.")))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))};t(42);var k=function(){return r.a.createElement("div",{className:"container mt-5 mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 "},r.a.createElement("div",null,r.a.createElement("h3",null,"O que \xe9 COVID-19"),r.a.createElement("p",{className:"text-justify"},"Os coronav\xedrus s\xe3o uma grande fam\xedlia de v\xedrus comuns em muitas esp\xe9cies diferentes de animais, incluindo camelos, gado, gatos e morcegos. Raramente, os coronav\xedrus que infectam animais podem infectar pessoas, como exemplo do MERS-CoV e SARS-CoV. Recentemente, em dezembro de 2019, houve a transmiss\xe3o de um novo coronav\xedrus (SARS-CoV-2), o qual foi identificado em Wuhan na China e causou a COVID-19, sendo em seguida disseminada e transmitida pessoa a pessoa. A COVID-19 \xe9 uma doen\xe7a causada pelo coronav\xedrus, denominado SARS-CoV-2, que apresenta um espectro cl\xednico variando de infec\xe7\xf5es assintom\xe1ticas a quadros graves. De acordo com a Organiza\xe7\xe3o Mundial de Sa\xfade, a maioria (cerca de 80%) dos pacientes com COVID-19 podem ser assintom\xe1ticos ou oligossintom\xe1ticos (poucos sintomas), e aproximadamente 20% dos casos detectados requer atendimento hospitalar por apresentarem dificuldade respirat\xf3ria, dos quais aproximadamente 5% podem necessitar de suporte ventilat\xf3rio."),r.a.createElement("br",null),r.a.createElement("h3",null,"Quais s\xe3o os sintomas"),r.a.createElement("p",{className:"text-justify"},"Os sintomas da COVID-19 podem variar de um resfriado, a uma S\xedndrome Gripal-SG (presen\xe7a de um quadro respirat\xf3rio agudo, caracterizado por, pelo menos dois dos seguintes sintomas: sensa\xe7\xe3o febril ou febre associada a dor de garganta, dor de cabe\xe7a, tosse, coriza) at\xe9 uma pneumonia severa. Sendo os sintomas mais comuns:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Tosse"),r.a.createElement("li",null,"Febre"),r.a.createElement("li",null,"Coriza"),r.a.createElement("li",null,"Dor de garganta")," ",r.a.createElement("li",null,"Dificuldade para respirar"),r.a.createElement("li",null,"Perda de olfato (anosmia)"),r.a.createElement("li",null,"Altera\xe7\xe3o do paladar (ageusia)")),r.a.createElement("br",null),r.a.createElement("h3",null,"Como \xe9 transmitido"),r.a.createElement("p",{className:"text-justify"},"A transmiss\xe3o acontece de uma pessoa doente para outra ou por contato pr\xf3ximo por meio de:"),r.a.createElement("li",null,"Toque do aperto de m\xe3o contaminadas;"),r.a.createElement("li",null,"Got\xedculas de saliva;"),r.a.createElement("li",null,"Espirro;"),r.a.createElement("li",null,"Tosse;     ")," ",r.a.createElement("li",null,"Catarro     "))),r.a.createElement("div",{className:"col-md-4 offset-md-1"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",null,"Ultimas Noticias."),r.a.createElement("ul",{className:"timeline"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.totoprayogo.com/#"},"Vacina contra coronav\xedrus"),r.a.createElement("a",{href:"/",className:"float-right"},"21 March, 2014"),r.a.createElement("p",null,"Vacina contra coronav\xedrus: por que o Brasil \xe9 considerado o \u2018laborat\xf3rio perfeito\u2019 para testar imuniza\xe7\xe3o contra a Covid-19..."),r.a.createElement("hr",null)),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"BRASIL REGISTRA 4,33 MILH\xd5ES DE CASOS"),r.a.createElement("a",{href:"/",className:"float-right"},"4 March, 2014"),r.a.createElement("p",null,"O Minist\xe9rio da Sa\xfade informou, neste domingo (13), que foram registrados 14.768 novas infec\xe7\xf5es de covid-19 nas \xfaltimas 24 horas, totalizando 4.330.455 casos desde o in\xedcio da pandemia. Deste total, 3.573.958 s\xe3o de recu...")),r.a.createElement("hr",null),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Covid-19: Brasil tem 415 mortes nas \xfaltimas 24h"),r.a.createElement("a",{href:"/",className:"float-right"},"1 April, 2014"),r.a.createElement("p",null,"O Conselho Nacional de Secret\xe1rios de Sa\xfade (Conass) e o Minist\xe9rio da Sa\xfade atualizaram, neste domingo (13), os dados sobre a situa\xe7\xe3o da Covid-19 no Brasil. Veja os n\xfameros do \xfaltimo levantamento. ...")),r.a.createElement("hr",null))))))};t(43);var x=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"blog",className:"row"},r.a.createElement("div",{className:"col-md-10 blogShort"},r.a.createElement("h1",null,"Title 1"),r.a.createElement("article",null,r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),r.a.createElement("a",{className:"btn btn-blog pull-right marginBottom10",href:"http://bootsnipp.com/user/snippets/2RoQ"},"READ MORE")),r.a.createElement("div",{className:"col-md-10 blogShort"},r.a.createElement("h1",null,"Title 2"),r.a.createElement("article",null,r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),r.a.createElement("a",{className:"btn btn-blog pull-right marginBottom10",href:"http://bootsnipp.com/user/snippets/2RoQ"},"READ MORE")),r.a.createElement("div",{className:"col-md-10 blogShort"},r.a.createElement("h1",null,"Title 3"),r.a.createElement("article",null,r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),r.a.createElement("a",{className:"btn btn-blog pull-right marginBottom10",href:"http://bootsnipp.com/user/snippets/2RoQ"},"READ MORE")),r.a.createElement("div",{className:"col-md-12 gap10"})))};t(44);var S=function(){return r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-5"},r.a.createElement("div",{class:"media"},r.a.createElement("a",{class:"pull-left",href:"/"},r.a.createElement("img",{class:"media-object",src:localStorage.getItem("imgProfile"),alt:"profile",style:{width:"100px",height:"100px"}})),r.a.createElement("div",{class:"media-body"},r.a.createElement("h4",{class:"media-heading"},localStorage.getItem("username")),r.a.createElement("h5",null,localStorage.getItem("email")),r.a.createElement("hr",{style:{margin:"9em"}})))))},O=t(24),C=t.n(O);var j=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center mt-4"},"Bemvind@ ",localStorage.getItem("username")),r.a.createElement("img",{src:C.a,width:"400",className:"d-block mx-auto"}),r.a.createElement("p",{className:"text-center h5"},"Neste site voc\xea pode conferir informa\xe7oes sobre o novo Coronavirus ,assim como conhecer outras pessoas"),r.a.createElement("a",{href:"#/app/home",className:"btn btn-outline-danger btn-lg btn-block"},"Inicio")))},A=t(26),R=function(e){var a=e.component,t=Object(A.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},t,{render:function(e){return localStorage.getItem("accesToken")?r.a.createElement(a,e):r.a.createElement(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))};t(49).config();var D=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],s=(a[1],Object(n.useState)("")),l=Object(m.a)(s,2),o=l[0],d=(l[1],function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(),window.location.href="#/app/welcome";case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),E=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("user","Alejandro Alfonso Vargas"),localStorage.getItem("token");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement(R,{path:"/app",component:g}),r.a.createElement(R,{path:"/app/Home",component:I}),r.a.createElement(u.b,{exact:!0,path:"/app/worldInfo"},r.a.createElement(p,{list:t,token:o})),r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(f,{login:d})),r.a.createElement(u.b,{path:"/app/home"},r.a.createElement(k,null)),r.a.createElement(u.b,{path:"/app/welcome"},r.a.createElement(j,null)),r.a.createElement(u.b,{path:"/app/notices"},r.a.createElement(x,null)),r.a.createElement(u.b,{path:"/app/profile"},r.a.createElement(S,null)))},L=t(11);l.a.render(r.a.createElement(L.a,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.19bb11ba.chunk.js.map