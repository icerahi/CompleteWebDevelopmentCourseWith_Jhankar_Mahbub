(this.webpackJsonpthe_superhero_direction=this.webpackJsonpthe_superhero_direction||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(6),i=c.n(a),l=(c(12),c(0)),r=function(){return Object(l.jsxs)("div",{className:"container mb-4 text-center",children:[Object(l.jsxs)("h3",{children:["Find ",Object(l.jsx)("span",{style:{fontSize:"40px",color:"orange"},children:'"Mission Extreme"'})," casts"]}),Object(l.jsx)("p",{children:"'Mission Extreme' will be a Bangladeshi Police Action Thriller Film produce by COP Creation and Mime Multimedia"}),Object(l.jsx)("h3",{children:"Total Budget: 100 Million"})]})},d=c(7),j=c(5),o=(c(14),function(e){var t=e.selectedCast,c=e.handleCastRemove,s=null===t||void 0===t?void 0:t.reduce((function(e,t){return e+t.salary}),0);return Object(l.jsxs)("div",{className:"cart p-2",children:[Object(l.jsxs)("h4",{className:"fw-light",children:["Cast Added : ",Object(l.jsx)("span",{className:"fw-bold",children:null===t||void 0===t?void 0:t.length})]}),Object(l.jsxs)("h4",{className:"fw-light",children:["Total Cost : ",Object(l.jsxs)("span",{className:"fw-bold",children:[s," $"]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h6",{children:"Selected"}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsxs)("div",{className:"selected-cast p-3",children:[e.name," ",Object(l.jsx)("i",{onClick:function(){return c(e)},className:"fa fa-lg fa-remove"})]},t)}))]})}),u=(c(15),function(e){var t=e.cast,c=e.handleCastSelect,s=e.selectedCast,n=t.name,a=t.image,i=t.occupation,r=t.active_years,d=t.age,j=t.salary;return Object(l.jsxs)("div",{className:"cast-card row",children:[Object(l.jsx)("div",{className:"col-md-6 p-0",children:Object(l.jsx)("img",{src:a,className:"h-100 w-100 m-0 p-0",alt:"..."})}),Object(l.jsxs)("div",{className:"col-md-6 p-3",children:[Object(l.jsx)("h5",{className:"card-title",children:n}),Object(l.jsx)("small",{children:"Occupation:"}),Object(l.jsxs)("p",{className:"my-1",children:["-",i]}),Object(l.jsx)("small",{children:"Active years:"}),Object(l.jsxs)("p",{className:"my-1",children:["-",r]}),Object(l.jsxs)("p",{className:"my-1",children:["Age: ",d]}),Object(l.jsxs)("p",{children:["Salary : ",j," $"]}),s.includes(t)?Object(l.jsxs)("button",{className:"cast-select-btn btn  btn-light text-dark disabled",children:[Object(l.jsx)("i",{className:"fas fa-lg fa-plus-circle"})," Selected"]}):Object(l.jsxs)("button",{onClick:function(){return c(t)},className:"cast-select-btn btn btn-warning",children:[Object(l.jsx)("i",{className:"fas fa-lg fa-plus-circle"})," Select Cast"]})]})]})}),b=(c(16),function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(j.a)(a,2),r=i[0],b=i[1];Object(s.useEffect)((function(){fetch("https://raw.githubusercontent.com/icerahi1/fakedata/main/missionextreme.json").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]);var h=function(e){var t=[].concat(Object(d.a)(r),[e]);b(t)};return Object(l.jsxs)("div",{className:"container-fluid row ms-2 mx-auto",children:[Object(l.jsx)("div",{className:"col-md-10 mx-auto casts-container",children:null===c||void 0===c?void 0:c.map((function(e){return Object(l.jsx)(u,{handleCastSelect:h,selectedCast:r,cast:e},e.id)}))}),Object(l.jsx)("div",{className:"col-md-2",children:Object(l.jsx)(o,{selectedCast:r,handleCastRemove:function(e){var t=r.filter((function(t){return t!==e}));b(t)}})})]})});var h=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(r,{}),Object(l.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.7c41535a.chunk.js.map