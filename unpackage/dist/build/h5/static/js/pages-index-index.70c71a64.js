(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{3887:function(n,t,e){var r=e("44ce");"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var i=e("4f06").default;i("5517f471",r,!0,{sourceMap:!1,shadowMode:!1})},"441b":function(n,t,e){"use strict";var r;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},n._l(n.urlList,(function(t,r){return e("v-uni-button",{key:r,attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.handleNavigateTo(t.url)}}},[n._v(n._s(t.title))])})),1)},a=[]},"44ce":function(n,t,e){var r=e("24fb");t=r(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-43c06516]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px}.content uni-button[data-v-43c06516]{min-width:50%;margin-top:15px}',""]),n.exports=t},"69c5":function(n,t,e){"use strict";var r=e("3887"),i=e.n(r);i.a},"955c":function(n,t,e){"use strict";e.r(t);var r=e("441b"),i=e("f3ad");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("69c5");var u,c=e("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"43c06516",null,!1,r["a"],u);t["default"]=s.exports},f3ad:function(n,t,e){"use strict";e.r(t);var r=e("ffcc"),i=e.n(r);for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=i.a},ffcc:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{urlList:[{title:"样式1(使用插槽)",url:"/pages/style1/index"},{title:"样式2",url:"/pages/style2/index"},{title:"样式3",url:"/pages/style3/index"},{title:"样式4",url:"/pages/style4/index"},{title:"自定义颜色",url:"/pages/style5/index"}]}},methods:{handleNavigateTo:function(n){uni.navigateTo({url:n})}}};t.default=r}}]);