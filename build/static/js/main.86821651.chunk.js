(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{140:function(t,e,c){var a={"./100_1.jpg":260,"./101_1.jpg":261,"./10412368723880252_1.jpg":262,"./10547961582846888_1.jpg":263,"./10686354557628304_1.jpg":264,"./11033926921508488_1.jpg":265,"./11600983276356164_1.jpg":266,"./11854078013954528_1.jpg":267,"./12064273040195392_1.jpg":268,"./18532669286405344_1.jpg":269,"./18644119330491310_1.jpg":270,"./27250082398145996_1.jpg":271,"./39876704341265610_1.jpg":272,"./51498472915966370_1.jpg":273,"./5619496040738316_1.jpg":274,"./6090484789343891_1.jpg":275,"./8552515751438644_1.jpg":276,"./876661122392077_1.jpg":277,"./9197907543445676_1.jpg":278};function i(t){var e=n(t);return c(e)}function n(t){if(!c.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=140},180:function(t,e,c){},260:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/100_1.60fb4130.jpg"},261:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/101_1.d14124e0.jpg"},262:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/10412368723880252_1.13858cd3.jpg"},263:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/10547961582846888_1.ebf63603.jpg"},264:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/10686354557628304_1.9cb24054.jpg"},265:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/11033926921508488_1.96badb6f.jpg"},266:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/11600983276356164_1.be081f68.jpg"},267:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/11854078013954528_1.310ac226.jpg"},268:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/12064273040195392_1.bfdc616c.jpg"},269:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/18532669286405344_1.054e6832.jpg"},270:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/18644119330491310_1.7ec39881.jpg"},271:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/27250082398145996_1.27b63c57.jpg"},272:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/39876704341265610_1.e86f32a0.jpg"},273:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/51498472915966370_1.eeca77d9.jpg"},274:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/5619496040738316_1.0d58ff93.jpg"},275:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/6090484789343891_1.1250c07d.jpg"},276:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/8552515751438644_1.6487e09e.jpg"},277:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/876661122392077_1.5a25035a.jpg"},278:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/9197907543445676_1.c23ce225.jpg"},279:function(t,e,c){},280:function(t,e){},288:function(t,e,c){"use strict";c.r(e);var a=c(117),i=c(154),n=c(66),s=c.n(n),r=c(67),d=c(142),l=c(143),o=c.n(l),u=function(){var t=Object(d.a)(s.a.mark((function t(e){var c,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("http://120.55.193.14:3030/shoppingCat",{params:e});case 2:return c=t.sent,a=c.data.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j={namespace:"product",state:{listData:[]},reducers:{add:function(t,e){var c=e.data;return Object(r.a)(Object(r.a)({},t),{},{listData:c})}},effects:{getListData:s.a.mark((function t(e,c){var a,i,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.action,i=c.call,n=c.put,t.next=4,i(u,a);case 4:return r=t.sent,t.next=7,n({type:"add",data:r});case 7:case"end":return t.stop()}}),t)}))}},p={namespace:"cart",state:{carData:[]},reducers:{addCar:function(t,e){var c=e.action;return localStorage.setItem("carData",JSON.stringify(null===c||void 0===c?void 0:c.newCarData)),Object(r.a)(Object(r.a)({},t),{},{carData:null===c||void 0===c?void 0:c.newCarData})}},effects:{}},f=c(153),b=c.n(f),v=c(119),O=c(80),m=c(0),h=c(293),g=c(29),x=c(295),_=c(297),C=c(157),N=c(300),D=c(294),y=c(301),w=c(76),k=c(299),S=c(298),L=c(296),z=c(78),T=c(302),E=c(68),J=(c(180),c(7)),X=x.a.Option,M=_.a.confirm,$=["XS","S","M","ML","L","XL","XXL"],F=function(){var t=Object(g.d)(),e=Object(m.useState)("normal"),a=Object(O.a)(e,2),i=a[0],n=a[1],s=Object(m.useState)($),r=Object(O.a)(s,2),d=r[0],l=r[1],o=Object(m.useState)(!1),u=Object(O.a)(o,2),j=u[0],p=u[1],f=Object(m.useState)(0),b=Object(O.a)(f,2),_=b[0],F=b[1],I=Object(g.e)((function(t){return t})),U=I.product,B=I.cart,G=I.loading,q=U.listData,A=void 0===q?[]:q,H=B.carData,K=void 0===H?[]:H;Object(m.useEffect)((function(){var e=JSON.parse(localStorage.getItem("carData"));e&&t({type:"cart/addCar",action:{newCarData:e}}),t({type:"product/getListData",action:{size:d,filter:i}})}),[]),Object(h.a)((function(){Q(K)}),[K]),Object(h.a)((function(){t({type:"product/getListData",action:{size:d,filter:i}})}),[d,i]);var P=function(t,e){e&&Q(K),p(t)},Q=function(t){var e=0;for(var c in t)e+=t[c].price*t[c].number;F(e.toFixed(2))};return Object(J.jsxs)("div",{className:"box",children:[Object(J.jsx)("div",{className:"left",children:Object(J.jsx)(N.a.Group,{options:$,value:d,onChange:function(t){return l(t)}})}),Object(J.jsx)(D.a,{spinning:null===G||void 0===G?void 0:G.global,tip:"\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u7b49",children:Object(J.jsxs)("div",{className:"center",children:[Object(J.jsxs)("div",{className:"filter-header",children:[Object(J.jsxs)("div",{className:"filter-header-title",children:[Object(J.jsx)("span",{className:"product-number",children:null===A||void 0===A?void 0:A.length})," ","\u4ef6\u5546\u54c1\u88ab\u627e\u5230"]}),Object(J.jsxs)("div",{className:"selects",children:[Object(J.jsx)("span",{children:"\u4ef7\u683c\u6392\u5e8f\uff1a"}),Object(J.jsxs)(x.a,{value:i,style:{width:120},onChange:function(t){n(t)},children:[Object(J.jsx)(X,{value:"normal",children:"normal"}),Object(J.jsx)(X,{value:"lower",children:"lowestprice"}),Object(J.jsx)(X,{value:"high",children:"highestprice"})]})]})]}),Object(J.jsx)("div",{className:"goodsList",children:A.map((function(e){return Object(J.jsxs)("div",{className:"goods-item",children:[Object(J.jsx)("div",{children:Object(J.jsx)("img",{className:"goods-list-img",src:c(140)("./".concat(null===e||void 0===e?void 0:e.sku,"_1.jpg")).default,alt:""})}),Object(J.jsx)("div",{className:"goods-list-tite",children:Object(J.jsx)(y.a,{title:"\u6807\u9898",children:null===e||void 0===e?void 0:e.title})}),Object(J.jsxs)("div",{className:"good-list-desc",children:["\u578b\u53f7\uff1a",null===e||void 0===e?void 0:e.availableSizes.map((function(t,e,c){var a=c.length;return 1===a||e+1===a?Object(J.jsx)("span",{children:t},e):Object(J.jsxs)("span",{children:[t,"\uff0c"]},e)}))]}),Object(J.jsxs)("div",{className:"good-list-price",children:["\u4ef7\u683c\uff1a$",null===e||void 0===e?void 0:e.price]}),Object(J.jsx)("div",{children:Object(J.jsx)(w.a,{type:"default",onClick:function(){!function(e){var c=Object(E.cloneDeep)(K),a=Object(E.cloneDeep)(A),i=!0;if(c.forEach((function(t){t.id===e&&(t.number+=1,i=!1)})),i){var n=a.filter((function(t){return(null===t||void 0===t?void 0:t.id)===e}));c=[].concat(Object(v.a)(c),Object(v.a)(n))}t({type:"cart/addCar",action:{newCarData:c}}),C.b.success("\u52a0\u5165\u8d2d\u7269\u8f66\u6210\u529f")}(null===e||void 0===e?void 0:e.id)},children:"\u52a0\u5165\u8d2d\u7269\u8f66"})})]},null===e||void 0===e?void 0:e.id)}))})]})}),Object(J.jsx)("div",{className:"right",children:Object(J.jsxs)("div",{children:[Object(J.jsx)(k.a,{count:null===K||void 0===K?void 0:K.length,size:"small",offset:[-301,15],children:Object(J.jsxs)("div",{className:"carts",onClick:function(){P(!0,"open")},children:[Object(J.jsx)(T.a,{}),"\u8d2d\u7269\u8f66"]})}),Object(J.jsxs)(S.a,{destroyOnClose:!0,width:530,mask:!1,title:"Cart",placement:"right",onClose:function(){P(!1)},visible:j,children:[Object(J.jsxs)("div",{className:"shop-cart-item-box test-5",children:[K.map((function(e){return Object(J.jsxs)("div",{className:"shop-cart-item",children:[Object(J.jsx)("div",{children:Object(J.jsx)("img",{className:"cart-img",src:c(140)("./".concat(e.sku,"_1.jpg")).default,alt:""})}),Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{className:"goods-tite",children:Object(J.jsx)(y.a,{title:"\u6807\u9898",children:null===e||void 0===e?void 0:e.title})}),Object(J.jsxs)("div",{className:"goods-sizes",children:["\u578b\u53f7\uff1a",null===e||void 0===e?void 0:e.availableSizes.map((function(t,e,c){var a=c.length;return 1===a||e+1===a?Object(J.jsx)("span",{children:t},e):Object(J.jsxs)("span",{children:[t,","]},e)}))]}),Object(J.jsx)("div",{className:"goods-privce",children:Object(J.jsxs)("span",{className:"privace",children:["\u4ef7\u683c\uff1a$",null===e||void 0===e?void 0:e.price]})}),"\u6570\u91cf\uff1a",Object(J.jsx)(L.a,{style:{width:80},size:"small",min:1,max:10,value:null===e||void 0===e?void 0:e.number,onChange:function(c){!function(e,c){var a=Object(E.cloneDeep)(K);a.forEach((function(t){t.id===c&&(t.number=e)})),t({type:"cart/addCar",action:{newCarData:a}})}(c,null===e||void 0===e?void 0:e.id)}})]}),Object(J.jsx)("div",{className:"del-button",children:Object(J.jsx)(w.a,{type:"default",onClick:function(){var c;c=null===e||void 0===e?void 0:e.id,M({title:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u6b64\u4ef6\u5546\u54c1\u561b\uff1f",icon:Object(J.jsx)(z.a,{}),content:"\u5c0f\u4e3b\u8981\u4e0d\u518d\u8003\u8651\u4e00\u4e0b\u5427",okText:"\u5220\u9664",okType:"danger",cancelText:"\u53d6\u6d88",onOk:function(){var e=Object(E.cloneDeep)(K);e=e.filter((function(t){return t.id!==c})),t({type:"cart/addCar",action:{newCarData:e}})},onCancel:function(){}})},children:"\u5220\u9664"})})]},null===e||void 0===e?void 0:e.id)})),Object(J.jsxs)("div",{className:"clearCarBtn",children:[Object(J.jsx)(k.a,{count:null===K||void 0===K?void 0:K.length,size:"small",offset:[-301,15],children:Object(J.jsxs)("div",{className:"carts",children:[Object(J.jsx)(T.a,{}),"\u8d2d\u7269\u8f66"]})}),Object(J.jsx)(w.a,{type:"default",onClick:function(){console.log(1),Object(E.cloneDeep)(K),t({type:"cart/addCar",action:{newCarData:[]}})},children:"\u6e05\u7a7a\u8d2d\u7269\u8f66"})]})]}),Object(J.jsxs)("div",{className:"total",children:[Object(J.jsxs)("div",{children:[" \u5408\u8ba1\uff1a$",_]}),Object(J.jsx)("div",{children:Object(J.jsx)(w.a,{type:"default",onClick:function(){M({title:"\u4f60\u786e\u5b9a\u8981\u7ed3\u7b97\u8d2d\u7269\u8f66\u4e2d\u7684\u5546\u54c1\u561b\uff1f",icon:Object(J.jsx)(z.a,{}),content:"\u5408\u8ba1\u4ef7\u683c".concat(_),okText:"\u786e\u5b9a\u7ed3\u7b97",cancelText:"\u53d6\u6d88",onOk:function(){localStorage.clear("carData"),t({type:"cart/addCar",action:{newCarData:[]}}),p(!1),C.b.success("\u8d2d\u4e70\u6210\u529f\uff0c\u5546\u54c1\u6b63\u5728\u8def\u4e0a")},onCancel:function(){}})},children:"\u7ed3\u7b97"})})]})]})]})})]})},I=(c(279),Object(a.a)({history:b()()}));I.use(Object(i.a)()),I.model(j),I.model(p),I.router((function(){return Object(J.jsx)(F,{})})),I.start("#root")}},[[288,1,2]]]);
//# sourceMappingURL=main.86821651.chunk.js.map