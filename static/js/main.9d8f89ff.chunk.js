(this["webpackJsonpreact-covid-tracker"]=this["webpackJsonpreact-covid-tracker"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(99),a(24)),i=a.n(s),l=a(35),u=a(15),m=(a(101),a(237)),f=a(238),d=a(239),v=a(231),p=a(235),h=a(87),E=a(236),b=(a(102),function(e){var t=e.title,a=e.cases,n=e.isRed,c=e.active,o=e.total,s=Object(h.a)(e,["title","cases","isRed","active","total"]);return r.a.createElement(v.a,{className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(n&&"infoBox--red"),onClick:s.onClick},r.a.createElement(p.a,null,r.a.createElement(E.a,{class:"infoBox__title",color:"textSecondary"},t),r.a.createElement("h2",{class:"infoBox__cases ".concat(!n&&"infoBox__cases--green")},a),r.a.createElement(E.a,{class:"infoBox__total",color:"textSecondary"},o," Total")))}),y=(a(106),a(242)),j=a(243),x=a(86),O=a(17),g=a.n(O),w=a(240),C=a(241),_={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},k=function(e){return Object(x.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},N=function(e){return e?"+".concat(g()(e).format("0,0a")):"+0"},S=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(y.a,{center:n,zoom:c},r.a.createElement(j.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreet</a> contributors'}),function(e,t){return e.map((function(e){return r.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:_[t].hex,fillColor:_[t].hex,radius:Math.sqrt(e[t])*_[t].multiplier},r.a.createElement(C.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",g()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",g()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",g()(e.deaths).format("0,0")))))}))}(t,a)))},R=(a(107),function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement("strong",null,g()(a).format("0,0"))))})))}),B=a(85),I={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return g()(e).format("0a")}}}]}},T=function(e){var t=e.casesType,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],s=c[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=m(e,t);s(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var m=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};return r.a.createElement("div",{style:{marginTop:"10px",flexGrow:"1"}},(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(B.Line,{options:I,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]}}))};a(204);var D=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],y=Object(n.useState)({}),j=Object(u.a)(y,2),x=j[0],O=j[1],g=Object(n.useState)([]),w=Object(u.a)(g,2),C=w[0],_=w[1],B=Object(n.useState)({lat:34.80746,lng:-40.4796}),I=Object(u.a)(B,2),D=I[0],z=I[1],A=Object(n.useState)(3),M=Object(u.a)(A,2),W=M[0],L=M[1],J=Object(n.useState)([]),Y=Object(u.a)(J,2),q=Y[0],F=Y[1],G=Object(n.useState)("cases"),K=Object(u.a)(G,2),V=K[0],$=K[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=k(e);_(a),F(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,E(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){O(e),z([e.countryInfo.lat,e.countryInfo.long]),L(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19 TRACKER"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(f.a,{variant:"outlined",value:h,onChange:H},r.a.createElement(d.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(d.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(b,{isRed:!0,active:"cases"===V,onClick:function(e){return $("cases")},title:"Coronavirus cases",cases:N(x.todayCases),total:N(x.cases)}),r.a.createElement(b,{active:"recovered"===V,onClick:function(e){return $("recovered")},title:"Recovered",cases:N(x.todayRecovered),total:N(x.recovered)}),r.a.createElement(b,{isRed:!0,active:"deaths"===V,onClick:function(e){return $("deaths")},title:"Deaths",cases:N(x.todayDeaths),total:N(x.deaths)})),r.a.createElement(S,{casesType:V,countries:q,center:D,zoom:W})),r.a.createElement(v.a,{className:"app__right"},r.a.createElement(p.a,{className:"app__rightCardContent"},r.a.createElement("h3",null,"Live Cases by country"),r.a.createElement(R,{countries:C}),r.a.createElement("br",null),r.a.createElement("h3",null,"Worldwide new ",V),r.a.createElement(T,{casesType:V}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.9d8f89ff.chunk.js.map