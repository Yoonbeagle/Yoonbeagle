(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["foldingArea"],{"3cc1":function(t,s,l){"use strict";l.r(s);var a=function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("div",{staticClass:"section-wrap"},[l("div",{staticClass:"sect-1",class:{fold:t.flag1}},[l("p",[t._v("contents of sect1")]),t.flag1?l("v-btn",{staticClass:"btn-fold",on:{click:function(s){return t.toggleClass("flag1")}}},[t._v("unfold ")]):l("v-btn",{staticClass:"btn-fold",on:{click:function(s){return t.toggleClass("flag1")}}},[t._v("fold ")])],1),l("div",{staticClass:"sect-2",class:[t.single?"expand":"",t.both?"wide":""]},[l("p",[t._v("contents of sect2")])]),l("div",{staticClass:"sect-3",class:{fold:t.flag2}},[l("p",[t._v("contents of sect3")]),t.flag2?l("v-btn",{staticClass:"btn-fold",on:{click:function(s){return t.toggleClass("flag2")}}},[t._v("unfold ")]):l("v-btn",{staticClass:"btn-fold",on:{click:function(s){return t.toggleClass("flag2")}}},[t._v("fold ")])],1)])},n=[],i={name:"FoldingArea",data:function(){return{flag1:!1,flag2:!1,single:!1,both:!1}},methods:{toggleClass:function(t){"flag1"===t?this.flag1=!this.flag1:"flag2"===t&&(this.flag2=!this.flag2),this.flag1&&this.flag2?(this.both=!0,this.single=!1,console.log(this.flag1,this.flag2)):this.flag1||this.flag2?(this.flag1&&!this.flag2||!this.flag1||this.flag2)&&(this.single=!0,this.both=!1,console.log(this.flag1,this.flag2)):(this.single=this.both=!1,console.log(this.flag1,this.flag2))}}},o=i,f=l("2877"),g=l("6544"),c=l.n(g),e=l("8336"),h=Object(f["a"])(o,a,n,!1,null,"02f20c54",null);s["default"]=h.exports;c()(h,{VBtn:e["a"]})}}]);
//# sourceMappingURL=foldingArea.2df7f969.js.map