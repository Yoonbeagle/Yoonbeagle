(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tempIntemp"],{3916:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"tempIntemp-area"},[s("p",{staticClass:"tit"},[t._v("v-for를 이용하여 만든 리스트에서 마지막 리스트 아이템에만 클래스 추가하기")]),s("ul",{staticClass:"member-list",class:{expand:t.isActive}},[t._l(t.mmbrList,(function(t,i){return[s("li",{key:i,class:[{hidden:t.isHidden},"photo"+(i+1)]},[s("v-img",{attrs:{src:t.Img,"default-src":"https://picsum.photos/id/103/60/60",width:"60px",height:"60px","center-crop":""}})],1)]})),t.mmbrCount>4?[s("li",{staticClass:"last",class:{hidden:t.isActive},on:{click:function(i){return t.expandList()}}},[s("v-img",{attrs:{src:"https://picsum.photos/id/156/60/60"}}),s("span",[t._v("+"+t._s(t.mmbrUserCount-t.mmbrCount))])],1)]:t._e()],2)])},n=[],m=(s("159b"),{name:"tempIntemp",data:function(){return{mmbrCount:5,mmbrUserCount:20,mmbrList:[{Img:"https://picsum.photos/id/1027/60/60",isHidden:!1},{Img:"https://picsum.photos/id/1023/60/60",isHidden:!1},{Img:"https://picsum.photos/id/1062/60/60",isHidden:!1},{Img:"https://picsum.photos/id/1027/60/60",isHidden:!1},{Img:"https://picsum.photos/id/1023/60/60",isHidden:!1},{Img:"https://picsum.photos/id/1062/60/60",isHidden:!1},{Img:"https://picsum.photos/id/1027/60/60",isHidden:!1}],isActive:!1}},mounted:function(){this.ellipsisItem()},methods:{expandList:function(){var t=this;this.isActive=!this.isActive,this.mmbrList.forEach((function(i){t.isActive?i.isHidden=!1:t.ellipsisItem()}))},ellipsisItem:function(){var t=this;if(!(this.mmbrCount>4))return!0;this.mmbrList.forEach((function(i,s){s>4&&(t.mmbrList[s].isHidden=!0)}))}}}),p=m,o=s("2877"),c=s("6544"),d=s.n(c),r=s("adda"),a=Object(o["a"])(p,e,n,!1,null,"02363b48",null);i["default"]=a.exports;d()(a,{VImg:r["a"]})}}]);
//# sourceMappingURL=tempIntemp.f5ea40fc.js.map