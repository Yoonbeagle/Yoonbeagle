(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forEach"],{b336:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"status-list"},t._l(t.StatusList,(function(s,e){return i("div",{key:e,staticClass:"status-bg",class:"bg"+(e+1)},[i("div",{staticClass:"status-bar",attrs:{value:s.style}}),i("button",{staticClass:"btn-ico",class:{on:s.isActive},on:{click:function(s){return t.addClass(e)}}},[t._v("버튼"+t._s(e+1))])])})),0)])},a=[],c=(i("159b"),{name:"ForEach",data:function(){return{StatusList:[{style:"3",isActive:!1},{style:"24",isActive:!1},{style:"65",isActive:!1},{style:"100",isActive:!1}]}},mounted:function(){setTimeout((function(){document.querySelectorAll(".status-bar").forEach((function(t){console.log(document.querySelectorAll(".status-bar").length),t.style.width=t.getAttribute("value")+"%"}))}),1500)},methods:{addClass:function(t){if(this.StatusList[t].isActive)return this.StatusList[t].isActive=!1,!1;this.StatusList.forEach((function(t){t.isActive=!1})),this.StatusList[t].isActive=!0}}}),n=c,u=i("2877"),l=Object(u["a"])(n,e,a,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=forEach.2724e17c.js.map