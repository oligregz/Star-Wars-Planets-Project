(this["webpackJsonpstart-wars-planets"]=this["webpackJsonpstart-wars-planets"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(6),l=a.n(u);a(13);var c=function(e){var t=e.value,a=e.handleChange;return r.a.createElement("input",{className:"filterInput",type:"number","data-testid":"value-filter",value:t,onChange:function(e){return a(e.target.value)}})};a(14);var i=function(e){var t=e.value,a=e.handleChange,n=e.dataTestId,u=e.valuesArray,l=e.id;return r.a.createElement("select",{className:"sel","data-testid":n,value:t,id:l,onChange:function(e){return a(e.target.value)}},u.map((function(e,t){return r.a.createElement("option",{className:"opt",key:t,value:e},e)})))},o=Object(n.createContext)();a(15);var s=function(){var e=Object(n.useContext)(o),t=e.search,a=e.setSearch;return r.a.createElement("input",{className:"inputSearch",type:"text","data-testid":"name-filter",value:t,onChange:function(e){a(e.target.value)}})};var m=function(){var e=Object(n.useContext)(o),t=e.column,a=e.setColumn,u=e.comparison,l=e.setComparison,m=e.value,f=e.setValue,d=e.filter,v=["population","orbital_period","diameter","rotation_period","surface_water"];return r.a.createElement("div",{className:"headFilters"},r.a.createElement(s,null),r.a.createElement(i,{dataTestId:"column-filter",value:t,id:"column",handleChange:a,valuesArray:function(e){var t=e.filters.filterNumberValues;return v.reduce((function(e,a){return t.every((function(e){return e.column!==a}))&&e.push(a),e}),[])}(d)}),r.a.createElement(i,{dataTestId:"comparison-filter",value:u,id:"comparison",handleChange:l,valuesArray:["maior que","menor que","igual a"]}),r.a.createElement(c,{value:m,handleChange:f}))},f=a(7),d=a(4);a(16);var v=function(){var e=Object(n.useContext)(o),t=e.filter,a=e.setFilter,u=e.column,l=e.comparison,c=e.value;function i(e){return document.getElementById(e).value}return r.a.createElement("button",{className:"btn fifth","data-testid":"button-filter",type:"button",onClick:function(){var e;(e={filter:t,setFilter:a,column:u,comparison:l,value:c}).setFilter({filters:Object(d.a)(Object(d.a)({},e.filter.filters),{},{filterNumberValues:[{column:e.column||i("column"),comparison:e.comparison||i("comparison"),value:e.value}].concat(Object(f.a)(e.filter.filters.filterNumberValues))})})}},"Filtrar")};a(17);var p=function(){return r.a.createElement("div",{className:"head"},r.a.createElement("h1",null," STAR WARS PALNETS "),r.a.createElement("div",{className:"caseFilter"},r.a.createElement(m,null)),r.a.createElement("div",{className:"caseBtn"},r.a.createElement(v,null)))};var b=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,["Name","Rotation Period","Orbital Period","Diameter","Climate","Gravity","Terrain","Surface Water","Population","Films","Created","Edited","URL"].map((function(e){return r.a.createElement("th",{key:e},e)}))))};var h=function(){var e=Object(n.useContext)(o),t=e.data,a=e.search,u=e.filter,l=["name","rotation_period","orbital_period","diameter","climate","gravity","terrain","surface_water","population","films","created","edited","url"],c=function(e,t,a){if(!e)return[];if(t)return e.results.filter((function(e){return e.name.includes(t)}));var n=a.filters.filterNumberValues[0],r=n.column,u=n.comparison,l=n.value;if([r,u,l].every((function(e){return""!==e}))){if("maior que"===u)return e.results.filter((function(e){return e[r]>Number(l)}));if("menor que"===u)return e.results.filter((function(e){return e[r]<Number(l)}));if("igual a"===u)return e.results.filter((function(e){return e[r]===l}))}return e.results}(t,a,u);return r.a.createElement("tbody",null,c.map((function(e){return r.a.createElement("tr",{key:e.name},l.map((function(t,a){return r.a.createElement("td",{key:"".concat(a,"_").concat(t)},e[t])})))})))};a(18);var E=function(){return r.a.createElement("div",{className:"tableMain"},r.a.createElement("div",{className:"tableChild"},r.a.createElement(p,null),r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(h,null))))},j=a(1),O=function(){return fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))};var C=function(e){var t=e.children,a=Object(n.useState)(null),u=Object(j.a)(a,2),l=u[0],c=u[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),m=s[0],f=s[1],d=Object(n.useState)(""),v=Object(j.a)(d,2),p=v[0],b=v[1],h=Object(n.useState)(0),E=Object(j.a)(h,2),C=E[0],N=E[1],y=Object(n.useState)(),g=Object(j.a)(y,2),S=g[0],k=g[1],F=Object(n.useState)({filters:{filterNumberValues:[{column:m,comparison:p,value:C}]}}),w=Object(j.a)(F,2),x=w[0],V=w[1];return Object(n.useEffect)((function(){O().then((function(e){return c(e)}))}),[]),r.a.createElement(o.Provider,{value:{data:l,column:m,setColumn:f,comparison:p,setComparison:b,value:C,setValue:N,search:S,setSearch:k,filter:x,setFilter:V}},t)};a(19);var N=function(){return r.a.createElement(C,null,r.a.createElement(E,null))};l.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.0c61738c.chunk.js.map