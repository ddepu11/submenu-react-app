(this["webpackJsonpsubmenu-react-app"]=this["webpackJsonpsubmenu-react-app"]||[]).push([[0],{13:function(e,n,c){},15:function(e,n,c){"use strict";c.r(n);var t=c(1),s=c(7),l=c.n(s),i=(c(13),c(8)),a=c(4),r=c(2),j=c(0),o=[{page:"Breakfast",links:[{label:"Egg & Cheese",icon:Object(j.jsx)(r.e,{}),url:"/egg&Cheese"},{label:"chicken slice",icon:Object(j.jsx)(r.b,{}),url:"/chickenSlice"},{label:"Western Egg",icon:Object(j.jsx)(r.e,{}),url:"/westernEgg"}]},{page:"Protein Bowls",links:[{label:"Black Forest Ham",icon:Object(j.jsx)(r.h,{}),url:"/bfham"},{label:"Oven Roasted Chicken",icon:Object(j.jsx)(r.e,{}),url:"/lrChicken"},{label:"Steak & Cheese",icon:Object(j.jsx)(r.d,{}),url:"/st&cheese"},{label:"Tuna",icon:Object(j.jsx)(r.e,{}),url:"/tuna"}]},{page:"Salads",links:[{label:"Black Forest Ham",icon:Object(j.jsx)(r.f,{}),url:"/products"},{label:"Sweet Onion Chicken ",icon:Object(j.jsx)(r.g,{}),url:"/socTeriyaki"},{label:"Meatball Marinara",icon:Object(j.jsx)(r.c,{}),url:"/products"},{label:"Turkey Breast",icon:Object(j.jsx)(r.c,{}),url:"/turkeyBreast"},{label:"Veggie Delite\xae",icon:Object(j.jsx)(r.c,{}),url:"/veggie"}]}],u=Object(t.createContext)(),b=function(e){var n=e.children,c=Object(t.useState)(!1),s=Object(a.a)(c,2),l=s[0],r=s[1],b=Object(t.useState)(!1),d=Object(a.a)(b,2),h=d[0],O=d[1],x=Object(t.useState)([{page:"",links:{}}]),m=Object(a.a)(x,2),p=m[0],f=m[1],g=Object(t.useState)({}),v=Object(a.a)(g,2),k=v[0],M=v[1];return Object(j.jsx)(u.Provider,{value:{menu:o,isShowMiddleMenu:l,hideMiddleMenu:function(){r(!1)},displayMiddleMenu:function(){r(!0)},isShowSubMenu:h,displaySubMenu:function(e,n){var c=e.toLocaleLowerCase(),t=o.filter((function(e){var n=e.page.toLocaleLowerCase();return c===n}));f(Object(i.a)(t)),M(n),O(!0)},hideSubMenu:function(){O(!1)},subMenu:p,location:k},children:n})},d=function(){return Object(t.useContext)(u)};function h(){var e=d(),n=e.menu,c=e.displayMiddleMenu,t=e.isShowSubMenu,s=e.displaySubMenu,l=e.subMenu,i=e.location,a=i.center,o=i.bottom,u={left:"".concat(a,"px"),top:"".concat(o,"px")};function b(e){var n=e.target.innerText.trim(),c=e.target.getBoundingClientRect(),t=c.left,l=c.right,i=c.bottom,a=(t+l)/2;s(n,{center:a-=150,bottom:i+=5})}return console.log(u),Object(j.jsxs)("nav",{className:"nav flex container",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("a",{href:"./index",children:Object(j.jsx)("img",{src:"logo.svg",alt:""})})}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("ul",{className:"flex",children:n.map((function(e,n){return Object(j.jsx)("li",{onMouseOver:b,children:Object(j.jsx)("span",{children:e.page})},n)}))}),Object(j.jsx)("div",{style:{left:"".concat(a,"px"),top:"".concat(o,"px")},className:t?"sub-menu show-sub-menu":"sub-menu hide-submenu",children:t?l.map((function(e,n){return Object(j.jsxs)("div",{className:"sm-inner",children:[Object(j.jsx)("h4",{children:e.page}),Object(j.jsx)("div",{className:"sm-list flex",children:e.links.map((function(e,n){return Object(j.jsxs)("a",{href:"./home",children:[e.icon," ",Object(j.jsx)("span",{children:e.label})]},n+5)}))})]},n)})):""})]}),Object(j.jsx)("a",{href:"./",className:"sign-in",children:"Sign In"}),Object(j.jsx)("div",{className:"menu",onClick:c,children:Object(j.jsx)(r.a,{})})]})}function O(){var e=d().hideSubMenu;return Object(j.jsx)("main",{onMouseOver:e,className:"hero",style:{background:"url('bg.jpg')"},children:Object(j.jsxs)("aside",{children:[Object(j.jsx)("h5",{children:"Buy a footlong get one"}),Object(j.jsx)("h1",{children:"50% off"}),Object(j.jsx)("h6",{children:"Order online with code BOGO50"}),Object(j.jsx)("button",{children:"Order Now"}),Object(j.jsxs)("span",{children:["50% off sub of equal/lesser price. Extras addt'l. Select shops. App/online only",Object(j.jsx)("br",{}),"1 use. No addt'l discounts. No delivery. Exp 4/14/21."]})]})})}function x(){var e=d(),n=e.isShowMiddleMenu,c=e.menu,t=e.hideMiddleMenu;return Object(j.jsx)("div",{className:n?"outer flex show-middle-menu":"outer flex",children:Object(j.jsxs)("div",{className:"inner ",children:[Object(j.jsx)("div",{className:"close",onClick:t,children:Object(j.jsx)(r.i,{})}),c.map((function(e,n){var c=e.page,t=e.links;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h4",{children:c}),Object(j.jsx)("div",{className:"grid",children:t.map((function(e,n){var c=e.label,t=e.url,s=e.icon;return Object(j.jsxs)("a",{href:t,children:[s,Object(j.jsx)("span",{children:c})]},n)}))})]},n)}))]})})}var m=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(x,{}),Object(j.jsx)(O,{})]})};l.a.render(Object(j.jsx)(b,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fea9d596.chunk.js.map