(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{668:function(t,e,n){},742:function(t,e,n){"use strict";n(668)},745:function(t,e,n){"use strict";n.r(e);var o=n(89),a=n(0),u={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},s={data:function(){return{rawPopupConfig:{message:"有新的内容更新",buttonText:"刷新"},updateEvent:null}},created:function(){o.a.$on("sw-updated",this.onSWUpdated),!0==={message:"有新的内容更新",buttonText:"刷新"}&&(this.rawPopupConfig=u)},computed:{popupConfig:function(){return Object(a.h)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||u["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||u["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(742),n(5)),p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",(function(){return[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()]}),{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"ef6a919a",null);e.default=p.exports}}]);