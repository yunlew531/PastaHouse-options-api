(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fb99886"],{"107c":function(e,t,r){var c=r("d039");e.exports=c((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,r){"use strict";var c=r("d784"),n=r("44e7"),a=r("825a"),o=r("1d80"),i=r("4840"),s=r("8aa5"),l=r("50c4"),d=r("14c3"),u=r("9263"),p=r("9f7f"),b=r("d039"),f=p.UNSUPPORTED_Y,g=[].push,x=Math.min,O=4294967295,j=!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));c("split",(function(e,t,r){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var c=String(o(this)),a=void 0===r?O:r>>>0;if(0===a)return[];if(void 0===e)return[c];if(!n(e))return t.call(c,e,a);var i,s,l,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,f=new RegExp(e.source,p+"g");while(i=u.call(f,c)){if(s=f.lastIndex,s>b&&(d.push(c.slice(b,i.index)),i.length>1&&i.index<c.length&&g.apply(d,i.slice(1)),l=i[0].length,b=s,d.length>=a))break;f.lastIndex===i.index&&f.lastIndex++}return b===c.length?!l&&f.test("")||d.push(""):d.push(c.slice(b)),d.length>a?d.slice(0,a):d}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var n=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n,r):c.call(String(n),t,r)},function(e,n){var o=r(c,this,e,n,c!==t);if(o.done)return o.value;var u=a(this),p=String(e),b=i(u,RegExp),g=u.unicode,j=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(f?"g":"y"),v=new b(f?"^(?:"+u.source+")":u,j),m=void 0===n?O:n>>>0;if(0===m)return[];if(0===p.length)return null===d(v,p)?[p]:[];var h=0,N=0,y=[];while(N<p.length){v.lastIndex=f?0:N;var V,w=d(v,f?p.slice(N):p);if(null===w||(V=x(l(v.lastIndex+(f?N:0)),p.length))===h)N=s(p,N,g);else{if(y.push(p.slice(h,N)),y.length===m)return y;for(var S=1;S<=w.length-1;S++)if(y.push(w[S]),y.length===m)return y;N=h=V}}return y.push(p.slice(h)),y}]}),!j,f)},"14c3":function(e,t,r){var c=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==c(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"44e7":function(e,t,r){var c=r("861d"),n=r("c6b6"),a=r("b622"),o=a("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"8aa5":function(e,t,r){"use strict";var c=r("6547").charAt;e.exports=function(e,t,r){return t+(r?c(e,t).length:1)}},9263:function(e,t,r){"use strict";var c=r("ad6d"),n=r("9f7f"),a=r("5692"),o=r("7c73"),i=r("69f3").get,s=r("fce3"),l=r("107c"),d=RegExp.prototype.exec,u=a("native-string-replace",String.prototype.replace),p=d,b=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=n.UNSUPPORTED_Y||n.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],x=b||g||f||s||l;x&&(p=function(e){var t,r,n,a,s,l,x,O=this,j=i(O),v=j.raw;if(v)return v.lastIndex=O.lastIndex,t=p.call(v,e),O.lastIndex=v.lastIndex,t;var m=j.groups,h=f&&O.sticky,N=c.call(O),y=O.source,V=0,w=e;if(h&&(N=N.replace("y",""),-1===N.indexOf("g")&&(N+="g"),w=String(e).slice(O.lastIndex),O.lastIndex>0&&(!O.multiline||O.multiline&&"\n"!==e[O.lastIndex-1])&&(y="(?: "+y+")",w=" "+w,V++),r=new RegExp("^(?:"+y+")",N)),g&&(r=new RegExp("^"+y+"$(?!\\s)",N)),b&&(n=O.lastIndex),a=d.call(h?r:O,w),h?a?(a.input=a.input.slice(V),a[0]=a[0].slice(V),a.index=O.lastIndex,O.lastIndex+=a[0].length):O.lastIndex=0:b&&a&&(O.lastIndex=O.global?a.index+a[0].length:n),g&&a&&a.length>1&&u.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a&&m)for(a.groups=l=o(null),s=0;s<m.length;s++)x=m[s],l[x[0]]=a[x[1]];return a}),e.exports=p},"965d":function(e,t,r){"use strict";r("a15b"),r("d81d"),r("ac1f"),r("1276");var c={methods:{translateTime:function(e,t){var r=null;if("string"===t){var c={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};r=new Date(1e3*e).toLocaleString("zh-tw",c)}else if("dash"===t){var n={year:"numeric",month:"numeric",day:"numeric"},a=new Date(1e3*e).toLocaleString("zh-TW",n);a=a.split("/").map((function(e){return e<10?"0".concat(e):e})).join("-"),r=a}return r}}};t["a"]=c},"9f7f":function(e,t,r){var c=r("d039"),n=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=c((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=c((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,r){"use strict";var c=r("23e7"),n=r("44ad"),a=r("fc6a"),o=r("a640"),i=[].join,s=n!=Object,l=o("join",",");c({target:"Array",proto:!0,forced:s||!l},{join:function(e){return i.call(a(this),void 0===e?",":e)}})},ac1f:function(e,t,r){"use strict";var c=r("23e7"),n=r("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var c=r("825a");e.exports=function(){var e=c(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,r){var c=r("83ab"),n=r("9bf2").f,a=Function.prototype,o=a.toString,i=/^\s*function ([^ (]*)/,s="name";c&&!(s in a)&&n(a,s,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(e){return""}}})},c7ae:function(e,t,r){"use strict";r("e7f9")},d784:function(e,t,r){"use strict";r("ac1f");var c=r("6eeb"),n=r("9263"),a=r("d039"),o=r("b622"),i=r("9112"),s=o("species"),l=RegExp.prototype;e.exports=function(e,t,r,d){var u=o(e),p=!a((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),b=p&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[u]=/./[u]),r.exec=function(){return t=!0,null},r[u](""),!t}));if(!p||!b||r){var f=/./[u],g=t(u,""[e],(function(e,t,r,c,a){var o=t.exec;return o===n||o===l.exec?p&&!a?{done:!0,value:f.call(t,r,c)}:{done:!0,value:e.call(r,t,c)}:{done:!1}}));c(String.prototype,e,g[0]),c(l,u,g[1])}d&&i(l[u],"sham",!0)}},d81d:function(e,t,r){"use strict";var c=r("23e7"),n=r("b727").map,a=r("1dde"),o=a("map");c({target:"Array",proto:!0,forced:!o},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e7f9:function(e,t,r){},e90b:function(e,t,r){"use strict";r.r(t);r("b0c0");var c=r("7a23"),n=Object(c["withScopeId"])("data-v-00c2c09d");Object(c["pushScopeId"])("data-v-00c2c09d");var a=Object(c["createVNode"])("div",{class:"nav-bg"},null,-1),o={class:"order-panel bg-white rounded shadow-sm container p-10"},i={key:0},s=Object(c["createTextVNode"])("返回訂單列表"),l={class:"d-flex flex-wrap"},d={class:"fs-5 me-auto mb-0"},u=Object(c["createVNode"])("span",{class:"fs-6 me-2"},"訂單編號:",-1),p={class:"d-inline-block w-100 w-sm-auto"},b={class:"fs-5 d-inline-block w-100 w-md-auto mb-2 mb-md-0"},f=Object(c["createVNode"])("span",{class:"fs-6 me-2"},"成立時間:",-1),g={class:"d-flex align-items-center mb-5"},x={class:"fs-6 d-flex align-items-center m-0 me-2"},O=Object(c["createTextVNode"])(" 狀態: "),j={key:0,class:"text-success d-flex align-items-center"},v=Object(c["createVNode"])("span",{class:"material-icons-outlined"}," done ",-1),m=Object(c["createVNode"])("span",null,"已付款",-1),h={key:1,class:"text-danger d-flex align-items-center"},N=Object(c["createVNode"])("span",{class:"material-icons-outlined"}," close ",-1),y=Object(c["createVNode"])("span",null,"未付款",-1),V={class:"list-unstyled bg-white-100 border rounded my-5"},w={class:"user-item d-flex"},S=Object(c["createVNode"])("span",{class:"user-title px-5 py-2"},"姓名",-1),k={class:"px-5 py-2"},I={class:"user-item d-flex"},E=Object(c["createVNode"])("span",{class:"user-title px-5 py-2"},"電話",-1),R={class:"px-5 py-2"},D={class:"user-item d-flex"},T=Object(c["createVNode"])("span",{class:"user-title px-5 py-2"},"信箱",-1),L={class:"px-5 py-2"},B={class:"user-item d-flex"},_=Object(c["createVNode"])("span",{class:"user-title px-5 py-2"},"地址",-1),A={class:"px-5 py-2"},U={class:"list-unstyled row g-6"},C={class:"bg-white-100 border rounded p-5"},P={class:"fs-5 m-0 me-auto mb-2"},$={class:"d-flex flex-wrap"},F={class:"flex-grow-1 mt-5 mt-sm-0"},Y={class:"fs-6"},z={class:"d-flex align-items-center mb-2"},J={class:"text-decoration-line-through me-auto"},K=Object(c["createTextVNode"])("售價: "),q={class:"text-danger"},M={class:"mb-2"},W={class:"text-decoration-line-through mb-2"},G={class:"mb-2"},H=Object(c["createTextVNode"])(" 折扣後金額: "),Q={class:"text-danger fs-5"},X={class:"text-end fs-6 m-0"},Z=Object(c["createTextVNode"])(" 總計: NT$ "),ee={class:"fs-3"};Object(c["popScopeId"])();var te=n((function(e,t,r,te,re,ce){var ne,ae=Object(c["resolveComponent"])("Loading"),oe=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[a,Object(c["createVNode"])("section",o,[Object(c["createVNode"])(ae,{active:re.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return re.isLoading=e}),"is-full-page":!1},null,8,["active"]),re.order.id?(Object(c["openBlock"])(),Object(c["createBlock"])("div",i,[Object(c["createVNode"])(oe,{to:"/orders",class:"btn btn-sm btn-outline-primary mb-3"},{default:n((function(){return[s]})),_:1}),Object(c["createVNode"])("div",l,[Object(c["createVNode"])("p",d,[u,Object(c["createVNode"])("span",p,Object(c["toDisplayString"])(re.order.id),1)]),Object(c["createVNode"])("span",b,[f,Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.translateTime(re.order.create_at,"string")),1)])]),Object(c["createVNode"])("div",g,[Object(c["createVNode"])("h4",x,[O,Object(c["createVNode"])("span",null,[re.order.is_paid?(Object(c["openBlock"])(),Object(c["createBlock"])("span",j,[v,m])):(Object(c["openBlock"])(),Object(c["createBlock"])("span",h,[N,y]))])])]),Object(c["createVNode"])("ul",V,[Object(c["createVNode"])("li",w,[S,Object(c["createVNode"])("span",k,Object(c["toDisplayString"])(re.order.user.name),1)]),Object(c["createVNode"])("li",I,[E,Object(c["createVNode"])("span",R,Object(c["toDisplayString"])(re.order.user.tel),1)]),Object(c["createVNode"])("li",D,[T,Object(c["createVNode"])("span",L,Object(c["toDisplayString"])(re.order.user.email),1)]),Object(c["createVNode"])("li",B,[_,Object(c["createVNode"])("span",A,Object(c["toDisplayString"])(re.order.user.address),1)])]),Object(c["createVNode"])("ul",U,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(re.order.products,(function(e){var t,r,a,o;return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:e.id,class:"col-lg-6"},[Object(c["createVNode"])("div",C,[Object(c["createVNode"])("h2",P,[Object(c["createVNode"])(oe,{to:"/product/".concat(e.product.id),class:"product-name text-decoration-none"},{default:n((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.product.title),1)]})),_:2},1032,["to"])]),Object(c["createVNode"])("div",$,[Object(c["createVNode"])("img",{src:e.product.imageUrl||e.product.imagesUrl[0],alt:e.product.title,class:"product-img rounded"},null,8,["src","alt"]),Object(c["createVNode"])("div",F,[Object(c["createVNode"])("h4",Y,"類別: "+Object(c["toDisplayString"])(e.product.category),1),Object(c["createVNode"])("p",z,[Object(c["createVNode"])("span",J,"原價: "+Object(c["toDisplayString"])(null===(t=e.product.origin_price)||void 0===t?void 0:t.toLocaleString()),1),Object(c["createVNode"])("span",null,[K,Object(c["createVNode"])("span",q,Object(c["toDisplayString"])(null===(r=e.product.price)||void 0===r?void 0:r.toLocaleString()),1)])]),Object(c["createVNode"])("p",M,"數量: "+Object(c["toDisplayString"])(e.qty),1),Object(c["createVNode"])("p",W," 金額: "+Object(c["toDisplayString"])(null===(a=e.total)||void 0===a?void 0:a.toLocaleString()),1),Object(c["createVNode"])("p",G,[H,Object(c["createVNode"])("span",Q,Object(c["toDisplayString"])(null===(o=e.final_total)||void 0===o?void 0:o.toLocaleString()),1)])])])])])})),128))]),Object(c["createVNode"])("p",X,[Z,Object(c["createVNode"])("span",ee,Object(c["toDisplayString"])(null===(ne=re.order.total)||void 0===ne?void 0:ne.toLocaleString()),1)])])):Object(c["createCommentVNode"])("",!0)])],64)})),re=r("1da1"),ce=(r("96cf"),r("365c")),ne=r("965d"),ae=r("2f34"),oe=r("9062"),ie=r.n(oe),se=(r("e40d"),{components:{Loading:ie.a},mixins:[ne["a"]],data:function(){return{isLoading:!1,order:{}}},methods:{getOrder:function(){var e=this;return Object(re["a"])(regeneratorRuntime.mark((function t(){var r,c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,r=e.$route.params.id,t.next=4,Object(ce["k"])(r);case 4:c=t.sent,n=c.data,n.success&&n.order?e.order=n.order:(Object(ae["a"])("無法取得此筆訂單!","danger"),e.$router.push("/orders")),e.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()}},created:function(){this.getOrder()}});r("c7ae");se.render=te,se.__scopeId="data-v-00c2c09d";t["default"]=se},fce3:function(e,t,r){var c=r("d039");e.exports=c((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-6fb99886.2512dcc4.js.map