(this["webpackJsonpwork-site"]=this["webpackJsonpwork-site"]||[]).push([[0],{108:function(e,t,n){},221:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(31),s=n.n(i),o=(n(108),n(71)),r=n.n(o),a=n.p+"static/media/logo.3998f8d4.png",d=n(28),l=n(47),j=n.n(l),m=n(225),b=n(224),h=n(21),u=n(76),p=n(72),O=n.n(p),x=n(1),g=["input","meta","children"],v=["input","meta","child"],f=function(e){e.input;var t=e.meta,n=t.touched,c=t.error,i=e.children,s=(Object(u.a)(e,g),n&&c);return Object(x.jsxs)("div",{className:s?O.a.border:"",children:[Object(x.jsx)("div",{children:i}),s&&Object(x.jsx)("span",{className:O.a.error,children:c})]})},_=function(e){var t=e.input,n=(e.meta,e.child,Object(u.a)(e,v));return Object(x.jsx)(f,Object(h.a)(Object(h.a)({},e),{},{children:Object(x.jsx)("input",Object(h.a)(Object(h.a)({},t),n))}))},w=function(e){if(!e)return"Field is required"},I=(Object(b.a)({form:"loginUser"})((function(e){var t=e.handleSubmit;e.closeModal;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Login"}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{name:"login",component:_,type:"text",placeholder:"email",validate:[w]})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{name:"password",component:_,type:"text",placeholder:"password",validate:[w]})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{type:"submit",children:"Submit"})})]})})),n(69)),N=n.n(I),y=function(e){return Object(x.jsxs)("header",{className:r.a.header,children:[Object(x.jsx)("div",{className:r.a.logo,children:Object(x.jsx)("img",{src:a,alt:"logo"})}),Object(x.jsx)("div",{children:"Welcome to my site"}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{children:"Login"})})]})},S=n(7),C=(n(221),n(50)),k=n.n(C),L=function(e){var t=e.id,n=e.src,c=e.name,i=e.size,s=e.count,o=e.weight,r=e.comments,a=e.deleteItem;e.isAuth;return Object(x.jsxs)("div",{className:k.a.flexItm,children:[Object(x.jsx)("img",{onClick:function(){a(t)},className:k.a.img,src:"https://findicons.com/files/icons/1262/amora/256/delete.png",alt:"delete"}),Object(x.jsx)("img",{className:k.a.photo,src:n,alt:"photo"}),Object(x.jsxs)("div",{children:[c," "]}),Object(x.jsx)("div",{children:s}),Object(x.jsx)("div",{children:i}),"123$",Object(x.jsx)("div",{children:o}),Object(x.jsxs)("div",{children:[r," "]})]})},z=Object(b.a)({form:"add-shop-item"})((function(e){var t=e.handleSubmit,n=e.pristine,c=e.reset,i=e.submitting,s=e.closeModal;return Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Name"}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{name:"name",component:_,type:"text",placeholder:"Name",validate:[w]})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Link to img"}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{name:"src",component:_,type:"text",placeholder:"Link to img",validate:[w]})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Count"}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{name:"count",component:_,type:"text",placeholder:"Count",validate:[w]})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Size"}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{name:"size",component:_,type:"text",placeholder:"Size",validate:[w]})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Weight"}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{name:"weight",component:_,type:"text",placeholder:"Weight",validate:[w]})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Comments"}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{name:"comments",component:_,type:"text",placeholder:"Comments",validate:[w]})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"submit",disabled:n||i,children:"Submit"}),Object(x.jsx)("button",{type:"button",disabled:n||i,onClick:c,children:"Clear Values"}),Object(x.jsx)("button",{onClick:s,children:"Close"})]})]})})),D=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),i=n[0],s=n[1],o=function(){s(!1)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:N.a.newItem,children:Object(x.jsx)("img",{onClick:function(){s(!0)},src:"https://png.pngtree.com/element_our/sm/20180516/sm_5afbe35fd36cc.jpg",alt:"logo"})}),Object(x.jsx)(j.a,{style:{content:{top:"35%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",width:"20%",transform:"translate(-40%, -10%)"}},isOpen:i,onRequestClose:o,children:Object(x.jsx)(z,{onSubmit:e.onSubmit,closeModal:o})})]})},M=n(37),E=n.n(M),T=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),i=n[0],s=n[1],o=e.goods.filter((function(e){return e.name.toLocaleLowerCase().includes(i.toLocaleLowerCase())}));return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:E.a.position,children:[Object(x.jsx)("div",{children:Object(x.jsx)("form",{children:Object(x.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){return s(e.target.value)},className:E.a.search})})}),Object(x.jsx)("div",{className:E.a.select,children:Object(x.jsxs)("select",{onChange:function(t){e.sortItems(t.target.value)},children:[Object(x.jsx)("option",{value:"start_date",children:"Start Date"}),Object(x.jsx)("option",{value:"name",children:"Name"}),Object(x.jsx)("option",{value:"count",children:"Count"})]})})]}),Object(x.jsxs)("div",{className:E.a.flex,children:[o.map((function(t){return Object(x.jsx)(L,{id:t.id,src:t.src,name:t.name,deleteItem:e.deleteItem,onSubmit:e.onSubmit},t.id)})),Object(x.jsx)(D,{onSubmit:function(t){e.addNewItem(t)}})]})]})},P=n(19),F=n(51),A={goods:[{id:1,name:"Lenovo Thinkpad X1 Extreme",count:"4",size:"150 cm",weight:"300g",comments:"like it",src:"https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8NzkyMDF8aW1hZ2UvcG5nfGg2NC9oZDUvOTk4NjE1MTg0MTgyMi5wbmd8NDNhZGJlZTg2MjAwMmYyYTcyMDQ0NzIxNDIwODRiOWIxODliODY5ZWQ5NmZiOWQ0MTQ5MzM0YjIxMDJhZTFlMQ/lenovo-laptop-thinkpad-x1-extreme-hero.png"},{id:2,name:"Iphone X",count:"1",size:"150 cm",weight:"300g",comments:"like it",src:"https://maxmobiles.ru/service/iphone-x.png"},{id:3,name:"iPad Mini 5",count:"2",size:"150 cm",weight:"300g",comments:"like it",price:"123$",src:"https://coolstuf.com.pg/wp-content/uploads/2020/05/iPad-mini-5-grey.jpg"},{id:4,name:"Apple Watch 3",count:"5",size:"150 cm",weight:"300g",comments:"like it",src:"https://reboot.by/wp-content/uploads/2020/05/freq-apple-watch-3.png"},{id:5,name:"Lenovo ThinkPad Edge E480",count:"3",size:"150 cm",weight:"300g",comments:"like it",src:"https://avatars.mds.yandex.net/get-mpic/3927509/img_id8256009347703018140.jpeg/13hq"},{id:6,name:"iphone 12 pro max",count:"8",size:"150 cm",weight:"300g",comments:"like it",src:"https://stylus.ua/thumbs/568x568/a5/ae/1643704.png"},{id:7,name:"Ipad Pro",count:"7",size:"150 cm",weight:"300g",comments:"like it",src:"https://gstore.ua/content/images/49/apple-ipad-pro-12.9-38657243747854_small11.png"},{id:8,name:"Samsung Gear S2",count:"9",size:"150 cm",weight:"300g",comments:"like it",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2xTz4NpzH5NF9cjpLR3M6wEybhhqG19nAg&usqp=CAU"}]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AddItem":var n=t.ware;return{goods:[].concat(Object(F.a)(e.goods),[Object(h.a)(Object(h.a)({},n),{},{id:e.goods.length+1})])};case"DeleteItem":return{goods:Object(F.a)(e.goods.filter((function(e){return e.id!==t.id})))};case"SortItems":return{goods:Object(F.a)(e.goods.slice().sort((function(e,n){return"start_date"===t.sortBy?e.id>n.id?1:-1:"name"===t.sortBy?e.name.toLocaleLowerCase()>n.name.toLocaleLowerCase()?1:-1:"count"===t.sortBy?Number(e.count)>Number(n.count)?1:-1:void 0})))};default:return e}},R=Object(P.b)((function(e){return{goods:e.shopPage.goods,isAuth:e.shopPage.isAuth}}),{addNewItem:function(e){return{type:"AddItem",ware:e}},deleteItem:function(e){return{type:"DeleteItem",id:e}},sortItems:function(e){return{type:"SortItems",sortBy:e}}})(T),q=Object(S.d)((function(){return Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)(y,{}),Object(x.jsx)(R,{})]})})),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,227)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),s(e),o(e)}))},Z=n(70),G=n(8),B=n(226),J=Object(G.b)({shopPage:W,form:B.a}),X=Object(G.c)(J,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(x.jsx)(Z.a,{children:Object(x.jsx)(P.a,{store:X,children:Object(x.jsx)(q,{})})}),document.getElementById("root")),U()},37:function(e,t,n){e.exports={position:"ShopItems_position__1h-N2",flex:"ShopItems_flex__PSe1J",search:"ShopItems_search__1Lv4i"}},50:function(e,t,n){e.exports={photo:"Item_photo__3xC9P",flexItm:"Item_flexItm__378Y0",img:"Item_img__1P6R5"}},69:function(e,t,n){e.exports={newItem:"Modal_newItem__Wltfi"}},71:function(e,t,n){e.exports={header:"Header_header__3mLwr",logo:"Header_logo__2pDOU"}},72:function(e,t,n){e.exports={border:"FormControl_border__1ZblI",error:"FormControl_error__UmqLh",formSubmitError:"FormControl_formSubmitError__3RP_1"}}},[[223,1,2]]]);
//# sourceMappingURL=main.c4b41010.chunk.js.map