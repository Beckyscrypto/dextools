(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],u=0,f=[];u<o.length;u++)i=o[u],r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},1:function(e,t){},1005:function(e,t,a){},"1c33":function(e,t,a){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"432c":function(e,t,a){"use strict";var n=a("1c33"),r=a.n(n);r.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"64b4":function(e,t,a){"use strict";var n=a("1005"),r=a.n(n);r.a},cd49:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["default"].use(r["a"],{iconfont:"md"});var s=a("e508");a("a899");n["default"].use(s["a"]);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-dialog",{attrs:{value:e.scheduleLoading,width:"130","hide-overlay":"",persistent:""}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[e._v("\n        Loading...\n        "),a("v-progress-circular",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:"",dense:e.onMobile}},[a("v-toolbar-title",[e._v("Dextools")]),a("v-spacer"),a("v-dialog",{attrs:{width:"500"},model:{value:e.about,callback:function(t){e.about=t},expression:"about"}},[a("v-btn",{attrs:{slot:"activator",fab:"",depressed:"",flat:""},slot:"activator"},[a("v-icon",[e._v("\n          help_outline\n        ")])],1),a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("\n          About\n        ")]),a("v-card-text",[a("p",[e._v("\n            This is a site to help with building your schedule for the excellent conventions run by Double Exposure Inc.\n            It uses data scraped from the Double Exposure website so may be innacurrate or out of date.\n          ")]),a("p",[e._v("\n            This site WILL NOT register you for any events; it will only help you figure out your schedule and export it\n            to an ics file to import into a calendar program like Google Calendar. You will still need to register for\n            events via the usual method detailed on the Double Exposure website.\n            If you find a bug or have a feature suggestion, please submit it\n            "),a("a",{attrs:{target:"_blank",href:"https://github.com/jmatth/dextools"}},[e._v("on the github")]),e._v(".\n          ")]),a("p",[e._v("\n            This site is not associated with or endorsed by Double Exposure Inc.\n          ")])]),a("v-divider"),a("v-spacer"),a("v-btn",{on:{click:function(t){e.about=!1}}},[e._v("\n          Close\n        ")])],1)],1)],1),a("v-content",[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[Object.keys(e.$store.state.schedule).length>0?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md12:"full"===e.display.mode,md8:"split"===e.display.mode}},[a("EventsList",{attrs:{height:e.eventListHeight}})],1),a("v-flex",{attrs:{md12:"full"===e.display.mode,md4:"split"===e.display.mode}},[a("AgendaCalendar",{attrs:{display:e.display,height:e.calendarHeight}})],1)],1):e._e()],1)],1)],1)},o=[],c=a("a4bb"),l=a.n(c),d=(a("ac6a"),a("d225")),u=a("b0b4"),f=a("308d"),v=a("6bb5"),m=a("4e2b"),h=a("9ab4"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{style:{height:e.height+"px"}},[a("v-toolbar",{attrs:{dark:""}},[a("v-text-field",{attrs:{label:"Filter","single-line":"",single:"",dark:"",clearable:""},on:{input:e.updateSearch}}),a("v-spacer"),a("v-select",{style:{maxWidth:Math.max(47*e.availableCodes.length,130)+"px"},attrs:{items:e.availableCodes,label:"Categories",multiple:"",chips:"",solo:"",dense:"",clearable:"",flat:"","background-color":"rgba(0,0,0,0)"},model:{value:e.categories,callback:function(t){e.categories=t},expression:"categories"}}),a("v-dialog",{model:{value:e.showAdvancedFilter,callback:function(t){e.showAdvancedFilter=t},expression:"showAdvancedFilter"}},[a("v-btn",{attrs:{slot:"activator",fab:"",depressed:"",flat:""},slot:"activator"},[a("v-icon",[e._v("remove_red_eye")])],1),a("v-card",[a("v-card-title",{staticClass:"headline grey darken-4 grey--text"},[e._v("\n          Advanced Search\n        ")]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{sm12:"",md6:""}},[a("v-select",{style:{maxWidth:32*e.availableCodes.length+"px"},attrs:{items:e.availableDays,label:"Days",multiple:"",chips:"",solo:"",dense:"",clearable:""},model:{value:e.days,callback:function(t){e.days=t},expression:"days"}})],1),a("v-flex",{attrs:{sm12:"",md6:""}},[a("v-menu",{ref:"startTimeMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.filterStartTime,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.filterStartTime=t},"update:return-value":function(t){e.filterStartTime=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{label:"Start at",readonly:"",clearable:""},model:{value:e.filterStartTime,callback:function(t){e.filterStartTime=t},expression:"filterStartTime"}},n))]}}]),model:{value:e.filterStartTimeMenu,callback:function(t){e.filterStartTimeMenu=t},expression:"filterStartTimeMenu"}},[e.filterStartTimeMenu?a("v-time-picker",{attrs:{"full-width":"",format:"24hr","allowed-minutes":e.timePickerStep},on:{"click:hour":function(t){return e.$refs.startTimeMenu.save(t+":00")}},model:{value:e.filterStartTime,callback:function(t){e.filterStartTime=t},expression:"filterStartTime"}}):e._e()],1)],1),a("v-flex",{attrs:{sm6:"",md3:""}},[a("v-checkbox",{attrs:{label:"Hide filled"},model:{value:e.hideFilled,callback:function(t){e.hideFilled=t},expression:"hideFilled"}})],1),a("v-flex",{attrs:{sm6:"",md3:""}},[a("v-checkbox",{attrs:{label:"Hide conflicting"},model:{value:e.hideConflicting,callback:function(t){e.hideConflicting=t},expression:"hideConflicting"}})],1)],1)],1)],1),a("v-divider"),a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.showAdvancedFilter=!1}}},[e._v("\n          Apply\n        ")]),a("v-btn",{on:{click:e.clearAdvancedFilter}},[e._v("\n          clear\n        ")])],1)],1)],1),a("DynamicScroller",{staticClass:"scroller",staticStyle:{height:"700px"},attrs:{items:e.filteredItems,"min-item-size":78,"key-field":"code"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item,r=t.index,s=t.active;return[a("DynamicScrollerItem",{class:{"event-item-row":!0,"event-item-row-expanded":e.isExpanded(n)},attrs:{item:n,active:s,"data-index":r,"size-dependencies":[e.expandedCode]}},[a("v-layout",{staticClass:"event-item-row-header",attrs:{row:"",wrap:""},on:{click:function(t){return e.toggleExpanded(n)}}},[a("v-flex",{attrs:{xs11:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("span",[e._v(e._s(n.code)+": "+e._s(n.title))])]),a("v-flex",{attrs:{xs12:"",sm6:""}},[e._v("\n              "+e._s(n.system)+"\n            ")]),a("v-flex",{attrs:{xs12:"",sm5:""}},[e._v("\n              "+e._s(n.startTime.format("ddd, HH:mm"))+" - "+e._s(n.endTime.format("HH:mm"))+"\n            ")]),a("v-flex",{attrs:{xs12:"",sm5:""}},[e._v("\n              "+e._s(n.presenters)+"\n            ")]),a("v-flex",{attrs:{xs12:"",sm1:""}},[n.filled?a("v-icon",{staticClass:"ml-1",attrs:{size:"20"}},[e._v("lock")]):e._e()],1)],1)],1),a("v-flex",{attrs:{xs1:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","order-xs2":"",sm6:"","order-sm1":""}},[a("v-btn",{attrs:{flat:"",icon:"",depressed:""}},[a("v-icon",{attrs:{size:"20"}},[e._v(e._s(e.isExpanded(n)?"keyboard_arrow_up":"keyboard_arrow_down"))])],1)],1),a("v-flex",{attrs:{xs12:"","order-xs1":"",sm6:"","order-sm2":""}},[a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(t){return t.stopPropagation(),e.$store.commit("addEventToAgenda",n.code)}}},[a("v-icon",{attrs:{size:"20"}},[e._v("add")])],1)],1)],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.expandedCode===n.code,expression:"expandedCode === item.code"}],staticClass:"event-item-row-body"},[e._v("\n        "+e._s(n.description)+"\n      ")])],1)]}}])})],1)},p=[],g=(a("55dd"),a("db0c")),y=a.n(g),j=(a("6762"),a("2fdb"),a("5176")),k=a.n(j),x=a("60a3"),_=a("2ef0"),T=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(v["a"])(t).call(this)),e.categories=[],e.days=[],e.filter="",e.items=void 0,e.hideFilled=!1,e.hideConflicting=!1,e.filterStartTime=null,e.filterStartTimeMenu=!1,e.showAdvancedFilter=!1,e.expandedCode="",e.updateSearch=Object(_["debounce"])(e.updateSearch,500),e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"updateSearch",value:function(e){this.filter=null===e?"":e.trim()}},{key:"created",value:function(){this.items=this.scheduleEvents.map(function(e){return k()({},e)})}},{key:"toggleExpanded",value:function(e){this.expandedCode=this.expandedCode===e.code?"":e.code}},{key:"isExpanded",value:function(e){return this.expandedCode===e.code}},{key:"timePickerStep",value:function(e){return e%30===0}},{key:"clearAdvancedFilter",value:function(){this.filterStartTime=null,this.days=[],this.hideFilled=!1,this.hideConflicting=!1,this.showAdvancedFilter=!1}},{key:"shouldShow",value:function(e){var t=this;return(!this.hideFilled||!e.filled)&&(!this.hideConflicting||!this.$store.state.agenda.events.some(function(t){return t.conflicts(e)}))&&(this.categories.length<1||this.categories.includes(e.code[0]))&&(this.days.length<1||this.days.includes(e.startTime.format("dd")))&&(!this.filterStartTime||e.startTime.format("H:mm")===this.filterStartTime)&&(!this.filter||["code","title","system","description","presenters","authors"].some(function(a){return e[a].toLowerCase().includes(t.filter.toLowerCase())}))}},{key:"scheduleEvents",get:function(){return y()(this.$store.state.schedule)}},{key:"availableCodes",get:function(){return this.scheduleEvents.reduce(function(e,t){var a=t.code[0];return e.includes(a)||e.push(a),e},[])}},{key:"availableDays",get:function(){var e=this.scheduleEvents.reduce(function(e,t){var a=t.startTime.clone();return e.includes(a.format("dd"))||e.push(a),e},[]);return e.sort(function(e,t){return e.isBefore(t)?-1:1}),e.map(function(e){return e.format("dd")})}},{key:"filteredItems",get:function(){var e=this;return this.items?this.items.filter(function(t){return e.shouldShow(t)}):[]}}]),t}(x["c"]);h["a"]([Object(x["b"])()],T.prototype,"height",void 0),T=h["a"]([x["a"]],T);var w=T,S=w,C=(a("64b4"),a("2877")),E=a("6544"),D=a.n(E),O=a("8336"),V=a("b0af"),A=a("99d9"),M=a("12b2"),$=a("ac7c"),z=a("a523"),F=a("169a"),L=a("ce7e"),N=a("0e8f"),Y=a("132d"),H=a("a722"),I=a("e449"),B=a("b56d"),P=a("9910"),R=a("2677"),U=a("c964"),q=a("71d9"),G=Object(C["a"])(S,b,p,!1,null,"c5102c68",null),J=G.exports;D()(G,{VBtn:O["a"],VCard:V["a"],VCardText:A["b"],VCardTitle:M["a"],VCheckbox:$["a"],VContainer:z["a"],VDialog:F["a"],VDivider:L["a"],VFlex:N["a"],VIcon:Y["a"],VLayout:H["a"],VMenu:I["a"],VSelect:B["a"],VSpacer:P["a"],VTextField:R["a"],VTimePicker:U["a"],VToolbar:q["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-flex",[a("v-toolbar",{attrs:{dark:""}},["day"===e.calType?a("v-btn",{attrs:{fab:"",small:"",depressed:"",disabled:e.prevDisabled,left:"",color:"primary"},on:{click:function(t){return e.prevDay()}}},[a("v-icon",{attrs:{dark:""}},[e._v("\n          keyboard_arrow_left\n        ")])],1):e._e(),"day"===e.calType?a("v-btn",{attrs:{fab:"",small:"",depressed:"",disabled:e.nextDisabled,left:"",color:"primary"},on:{click:function(t){return e.nextDay()}}},[a("v-icon",{attrs:{dark:""}},[e._v("\n          keyboard_arrow_right\n        ")])],1):e._e(),e.allowResizing?a("v-btn",{attrs:{fab:"",small:"",depressed:"",left:"",color:"primary"},on:{click:function(t){return e.toggleDisplay()}}},[a("v-icon",{attrs:{dark:""}},[e._v("\n          "+e._s("day"===e.calType?"fullscreen":"fullscreen_exit")+"\n        ")])],1):e._e(),a("v-spacer"),a("ExportDialogue")],1),a("v-card",{attrs:{height:"day"==e.calType?e.height:"auto"}},[a("v-calendar",{ref:"calendar",attrs:{color:"primary","interval-height":e.intervalHeight,type:e.calType,start:e.startCal,end:e.endCal},scopedSlots:e._u([{key:"dayBody",fn:function(t){var n=t.date,r=t.timeToY,s=t.minutesToPixels;return[e._l(e.eventsByStartTime,function(t,i){return[e.startDateMatchesDate(t[0],n)?[e._l(t[1],function(n,i){return[a("div",{key:n.code,staticClass:"my-event with-time",style:{top:r(n.startTime.format("HH:MM"))+"px",height:s(e.getEventMinutes(n))+"px",marginLeft:5*e.overlappingEventsCount(n)+100/t[1].length*i+"%"},on:{click:function(t){return e.$store.commit("removeEventFromAgenda",n.code)}}},[e._v("\n                    "+e._s(n.code+": "+n.title)+"\n                    "),n.filled?a("v-icon",{attrs:{small:"",dark:""}},[e._v("lock")]):e._e()],1)]})]:e._e()]})]}}]),model:{value:e.currDate,callback:function(t){e.currDate=t},expression:"currDate"}})],1)],1)],1)},K=[],Q=a("774e"),X=a.n(Q),Z=a("2d7d"),ee=a.n(Z),te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{width:"500"},model:{value:e.exportDialogue,callback:function(t){e.exportDialogue=t},expression:"exportDialogue"}},[a("template",{slot:"activator"},[e._t("default",[a("v-btn",{attrs:{dark:"",depressed:"",small:"",color:"primary"}},[e._v("\n        Export\n      ")])])],2),a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("\n      Export\n    ")]),a("v-card-text",[a("p",[e._v("\n        Use the buttons below to export to ICS (for importing into calendar applications)\n        or email (to register for events). For email, you can also copy the text below.\n      ")]),a("v-divider"),a("pre",[e._v(e._s(e.emailText))])],1),a("v-card-actions",[a("v-btn",{on:{click:function(t){return e.$store.state.agenda.exportIcs()}}},[e._v("\n        ICS\n      ")]),a("v-tooltip",{attrs:{top:"",disabled:!e.disableEmail},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("a",e._g({attrs:{href:e.mailtoLink}},n),[a("v-btn",{attrs:{disabled:e.disableEmail},on:{click:function(t){e.exportDialogue=!1}}},[e._v("\n              Email\n            ")])],1)]}}])},[a("span",[e._v(e._s(this.$store.state.conName)+" is not accepting event registrations yet.")])]),a("v-spacer"),a("v-btn",{on:{click:function(t){e.exportDialogue=!1}}},[e._v("\n        Close\n      ")])],1)],1)],2)},ae=[],ne=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(v["a"])(t).apply(this,arguments)),e.exportDialogue=!1,e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"emailText",get:function(){return this.$store.state.agenda.events.reduce(function(e,t){return e+"\n".concat(t.code)},"<YOUR NAME>\n")}},{key:"mailtoLink",get:function(){if(this.disableEmail)return"#";var e=encodeURI("".concat(this.$store.state.conName," Registration")),t=encodeURI(this.emailText);return"mailto:".concat(this.$store.state.conEmail,"?subject=").concat(e,"&body=").concat(t)}},{key:"disableEmail",get:function(){return!this.$store.state.conEmail}}]),t}(x["c"]);ne=h["a"]([x["a"]],ne);var re=ne,se=re,ie=a("3a2f"),oe=Object(C["a"])(se,te,ae,!1,null,null,null),ce=oe.exports;D()(oe,{VBtn:O["a"],VCard:V["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:M["a"],VDialog:F["a"],VDivider:L["a"],VSpacer:P["a"],VTooltip:ie["a"]});var le=a("c1df"),de=a.n(le),ue=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(v["a"])(t).apply(this,arguments)),e.categories=["L","R"],e.filter="",e.currDate="",e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"created",value:function(){this.currDate=this.startCal}},{key:"onEventAdded",value:function(){this.currDate=this.lastEventAdded?this.lastEventAdded.startTime.format("YYYY-MM-DD"):this.currDate}},{key:"startDateMatchesDate",value:function(e,t){var a=de()(t),n=de()(e),r=n.isSame(a,"day");return r}},{key:"eventMatchesDate",value:function(e,t){return e.startTime.isSame(t,"day")}},{key:"getEventMinutes",value:function(e){var t=de.a.duration(e.endTime.diff(e.startTime)).asMinutes();return t}},{key:"overlappingEventsCount",value:function(e){var t=this.$store.state.agenda.events.reduce(function(t,a){return a.code===e.code?t:a.endTime.isAfter(e.startTime)&&a.startTime.isBefore(e.startTime)?t+1:t},0);return t}},{key:"nextDay",value:function(){this.nextDisabled||this.$refs.calendar.next()}},{key:"prevDay",value:function(){this.prevDisabled||this.$refs.calendar.prev()}},{key:"toggleDisplay",value:function(){this.display.toggle()}},{key:"scheduleEvents",get:function(){return y()(this.$store.state.schedule)}},{key:"lastEventAdded",get:function(){return this.$store.state.agenda.lastAdded}},{key:"intervalHeight",get:function(){return"split"===this.display.mode?26:20}},{key:"calType",get:function(){return"split"===this.display.mode?"day":"custom-daily"}},{key:"startCal",get:function(){return this.scheduleEvents.reduce(function(e,t){return e&&t.startTime.isAfter(e)?e:t.startTime},this.scheduleEvents[0].startTime).format("YYYY-MM-DD")}},{key:"endCal",get:function(){return this.scheduleEvents[this.scheduleEvents.length-1].endTime.format("YYYY-MM-DD")}},{key:"nextDisabled",get:function(){return this.currDate===this.endCal}},{key:"prevDisabled",get:function(){return this.currDate===this.startCal}},{key:"eventsByStartTime",get:function(){var e=new ee.a;return this.$store.state.agenda.events.forEach(function(t){var a=t.startTime.format();e.has(a)||e.set(a,[]),e.get(a).push(t)}),X()(e)}},{key:"items",get:function(){var e=this;return this.$store.state.agenda.events.filter(function(t){return e.categories.includes(t.code[0])}).filter(function(t){return!e.filter||["title","system","description","presenters"].some(function(a){return t[a].toLowerCase().includes(e.filter.toLowerCase())})})}},{key:"allowResizing",get:function(){return!this.$vuetify.breakpoint.smAndDown}}]),t}(x["c"]);h["a"]([Object(x["b"])()],ue.prototype,"display",void 0),h["a"]([Object(x["b"])()],ue.prototype,"height",void 0),h["a"]([Object(x["d"])("lastEventAdded")],ue.prototype,"onEventAdded",null),ue=h["a"]([Object(x["a"])({components:{ExportDialogue:ce}})],ue);var fe=ue,ve=fe,me=(a("432c"),a("a4f6")),he=Object(C["a"])(ve,W,K,!1,null,null,null),be=he.exports;D()(he,{VBtn:O["a"],VCalendar:me["a"],VCard:V["a"],VFlex:N["a"],VIcon:Y["a"],VLayout:H["a"],VSpacer:P["a"],VToolbar:q["a"]});var pe=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(v["a"])(t).apply(this,arguments)),e.about=!1,e.display={mode:"split",getHeight:function(){return"split"===this.mode?700:350},toggle:function(){this.mode="split"===this.mode?"full":"split"}},e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"mounted",value:function(){var e=this,t=this.$store.dispatch("loadSettings");this.onMobile&&(this.display.mode="full"),t.then(function(){localStorage.agendaConName!==e.$store.state.conName&&(console.log("Detected convention change from ".concat(localStorage.agendaConName," to ").concat(e.$store.state.conName,", resetting agenda.")),localStorage.agendaEventCodes=[],localStorage.agendaConName=e.$store.state.conName),localStorage.agendaEventCodes&&JSON.parse(localStorage.agendaEventCodes).forEach(function(t){return e.$store.commit("addEventToAgenda",t)})})}},{key:"onMobile",get:function(){return this.$vuetify.breakpoint.smAndDown}},{key:"scheduleLoading",get:function(){return l()(this.$store.state.schedule).length<1}},{key:"calendarHeight",get:function(){return("split"===this.display.mode?700:550)+"px"}},{key:"eventListHeight",get:function(){return("split"===this.display.mode?764:400)+"px"}}]),t}(x["c"]);pe=h["a"]([Object(x["a"])({components:{EventsList:J,AgendaCalendar:be}})],pe);var ge=pe,ye=ge,je=a("7496"),ke=a("549c"),xe=a("490a"),_e=a("2a7f"),Te=Object(C["a"])(ye,i,o,!1,null,null,null),we=Te.exports;D()(Te,{VApp:je["a"],VBtn:O["a"],VCard:V["a"],VCardText:A["b"],VCardTitle:M["a"],VContainer:z["a"],VContent:ke["a"],VDialog:F["a"],VDivider:L["a"],VFlex:N["a"],VIcon:Y["a"],VLayout:H["a"],VProgressCircular:xe["a"],VSpacer:P["a"],VToolbar:q["a"],VToolbarTitle:_e["a"]});a("7f45");var Se=a("9483");Object(Se["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; triggering refresh."),location.reload(!0)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ce=a("bd86"),Ee=a("75fc"),De=a("2f62"),Oe=a("f499"),Ve=a.n(Oe),Ae=(a("28a5"),a("6b54"),a("20d6"),a("7514"),a("8e99")),Me=a("21a6"),$e=function(){function e(){Object(d["a"])(this,e),this.events=[],this._lastAdded=void 0}return Object(u["a"])(e,[{key:"addEvent",value:function(e){console.log("Adding ".concat(e.code," to agenda")),void 0===this.events.find(function(t){return t.code===e.code})?(this.events.push(e),this._lastAdded=e,this.events.sort(function(e,t){return e.startTime.isSame(t.startTime)?e.endTime.isSame(t.endTime)?e.code<=t.code?-1:1:e.endTime.isBefore(t.endTime)?-1:1:e.startTime.isBefore(t.startTime)?-1:1}),this.updateLocalStorage()):console.log("".concat(e.code," already in agenda, nopping"))}},{key:"removeEvent",value:function(e){var t=this.events.findIndex(function(t){return t.code===e});t<0&&console.log("Event code ".concat(e," not found in agenda")),this.events.splice(t,1),this._lastAdded=void 0,this.updateLocalStorage()}},{key:"toString",value:function(){return this.events.toString()}},{key:"exportIcs",value:function(){var e=this.events.map(function(e){var t=e.startTime.format("YYYY-M-D-H-m").split("-"),a=e.endTime.format("YYYY-M-D-H-m").split("-");return{title:"".concat(e.code," - ").concat(e.title),description:e.description,start:t,end:a}}),t=Ae["createEvents"](e),a=t.error,n=t.value;if(a)throw a;var r=new Blob([n]);Object(Me["saveAs"])(r,"dextools.ics")}},{key:"updateLocalStorage",value:function(){localStorage.agendaEventCodes=Ve()(this.events.map(function(e){return e.code}))}},{key:"lastAdded",get:function(){return this._lastAdded}}]),e}(),ze=function(){function e(t){var a=t.code,n=t.title,r=t.description,s=t.system,i=t.presenters,o=t.authors,c=t.start_time,l=t.end_time,u=t.filled;t.tags;Object(d["a"])(this,e),this.code=a,this.title=n,this.description=r,this.system=s,this.presenters=i,this.authors=o,this.startTime=de()(c),this.endTime=de()(l),this.filled=u}return Object(u["a"])(e,[{key:"conflicts",value:function(e){return this.code!==e.code&&(this.startTime.isSameOrBefore(e.startTime)&&this.endTime.isSameOrAfter(e.startTime)||this.startTime.isSameOrBefore(e.endTime)&&this.endTime.isSameOrAfter(e.endTime))}}]),e}(),Fe=a("bc3a"),Le=a.n(Fe);n["default"].use(De["a"]);var Ne=new De["a"].Store({state:{agenda:new $e,schedule:{},userName:"",conName:"",conEmail:""},mutations:{addEventToAgenda:function(e,t){e.agenda.addEvent(e.schedule[t])},removeEventFromAgenda:function(e,t){e.agenda.removeEvent(t)},setSchedule:function(e,t){e.schedule=t},setConName:function(e,t){e.conName=t},setConEmail:function(e,t){e.conEmail=t}},actions:{loadSettings:function(e){return Le.a.get("/settings.json").then(function(t){var a=t.data;e.commit("setConName",a.conName),e.commit("setConEmail",a.conEmail);var n=k.a.apply(Object,[{}].concat(Object(Ee["a"])(t.data.schedule.map(function(e){return Object(Ce["a"])({},e.code,new ze(e))}))));e.commit("setSchedule",n)})}}}),Ye=Ne;de.a.tz.setDefault("America/New_York"),n["default"].config.productionTip=!1,new n["default"]({store:Ye,render:function(e){return e(we)}}).$mount("#app")}});
//# sourceMappingURL=app.c1e29b85.js.map