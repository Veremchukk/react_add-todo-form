(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(3),c=a(7),o=a(1),l=(a(14),a(9)),u=a.n(l),d=a(0),m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo,a=t.title,n=t.id,i=t.completed,r=t.user;return Object(d.jsxs)("article",{"data-id":n,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:a}),r&&Object(d.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e})}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=function(e){return h.find((function(t){return t.id===e}))||null},p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){var t=f(e.userId);return Object(c.a)(Object(c.a)({},e),{},{user:t})})),O=function(){var e=Object(o.useState)(p),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(s.a)(i,2),l=c[0],u=c[1],m=Object(o.useState)(""),j=Object(s.a)(m,2),O=j[0],x=j[1],v=Object(o.useState)(!1),y=Object(s.a)(v,2),S=y[0],N=y[1],I=function(e){e.preventDefault(),l&&O?(n([].concat(Object(r.a)(a),[{id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,title:O,completed:!1,userId:l,user:f(l)}])),x(""),u(0),N(!1)):N(!0)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){return I(e)},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:O,onChange:function(e){return x(e.target.value)}}),!O&&S&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("select",{"data-cy":"userSelect",value:l,onChange:function(e){return u(+e.target.value)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){var t=e.id,a=e.name;return Object(d.jsx)("option",{value:t,children:a},t)}))]}),S&&!l&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(b,{todos:a})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.17fba4d9.chunk.js.map