(function(t){function e(e){for(var d,s,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&(t[d]=l[d]);a&&a(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],d=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(d=!1)}d&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var d={},i={app:0},n=[];function s(e){if(d[e])return d[e].exports;var o=d[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=d,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var d in t)s.d(o,d,function(e){return t[e]}.bind(null,d));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Mohalnady/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var a=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0cdb":function(t,e,o){"use strict";o("af63")},1909:function(t,e,o){"use strict";o("add3")},"1d46":function(t,e,o){"use strict";o("e448")},"44b3":function(t,e,o){"use strict";o("7bc5")},"56d7":function(t,e,o){"use strict";o.r(e);var d=o("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],s={name:"App"},r=s,l=(o("1909"),o("2877")),c=Object(l["a"])(r,i,n,!1,null,null,null),a=c.exports,u=o("8c4f"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h1",[t._v("My Todo List")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],attrs:{placeholder:"Add a new todo"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),e("TodoList",{attrs:{todos:t.todos,editingTodo:t.editingTodo},on:{"delete-todo":t.deleteTodo,"toggle-todo":t.toggleTodo,"edit-todo":t.editTodo,"save-todo":t.updateTodo,"cancel-edit":t.cancelEdit}})],1)},f=[],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo-list"},[e("h2",[t._v("Todo List")]),e("ul",t._l(t.todos,(function(o){return e("todo-item",{key:o.id,attrs:{todo:o},on:{delete:t.deleteTodo,toggle:t.toggleTodo,edit:t.editTodo}})})),1),t.editingTodo?e("edit-todo-popup",{attrs:{todo:t.editingTodo,visible:!0},on:{save:t.saveTodo,cancel:t.cancelEdit}}):t._e()],1)},v=[],m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo-item"},[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{change:t.toggleCompletion}}),e("span",{class:{completed:t.todo.completed}},[t._v(t._s(t.todo.text))]),e("div",{staticClass:"actions-btns"},[e("button",{on:{click:t.editTodo}},[t._v("Edit")]),e("button",{on:{click:t.deleteTodo}},[t._v("Delete")])])])},T=[],g={props:{todo:{type:Object,required:!0}},methods:{toggleCompletion(){this.$emit("toggle",this.todo.id)},deleteTodo(){this.$emit("delete",this.todo.id)},editTodo(){this.$emit("edit",this.todo)}}},b=g,y=(o("d11e"),Object(l["a"])(b,m,T,!1,null,"9e91ce7c",null)),x=y.exports,_=function(){var t=this,e=t._self._c;return t.visible?e("div",{staticClass:"edit-todo-popup"},[e("div",{staticClass:"popup-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.editedText,expression:"editedText"}],attrs:{type:"text"},domProps:{value:t.editedText},on:{input:function(e){e.target.composing||(t.editedText=e.target.value)}}}),e("button",{on:{click:t.saveEdit}},[t._v("Save")]),e("button",{on:{click:t.cancelEdit}},[t._v("Cancel")])])]):t._e()},w=[],O={props:{todo:{type:Object,required:!0},visible:{type:Boolean,required:!0}},data(){return{editedText:this.todo.text}},methods:{saveEdit(){this.$emit("save",{id:this.todo.id,text:this.editedText})},cancelEdit(){this.$emit("cancel")}}},j=O,k=(o("1d46"),Object(l["a"])(j,_,w,!1,null,"0a720dc0",null)),E=k.exports,P={name:"TodoList",components:{TodoItem:x,EditTodoPopup:E},props:{todos:{type:Array,required:!0},editingTodo:{type:Object,default:null}},methods:{deleteTodo(t){this.$emit("delete-todo",t)},toggleTodo(t){this.$emit("toggle-todo",t)},editTodo(t){this.$emit("edit-todo",t)},saveTodo(t){this.$emit("save-todo",t)},cancelEdit(){this.$emit("cancel-edit")}}},$=P,C=(o("0cdb"),Object(l["a"])($,h,v,!1,null,"40b4cb2c",null)),M=C.exports,S={components:{TodoList:M},data(){return{todos:[],newTodo:"",editingTodo:null}},methods:{addTodo(){this.newTodo.trim()&&(this.todos.push({id:Date.now(),text:this.newTodo,completed:!1}),this.newTodo="")},deleteTodo(t){this.todos=this.todos.filter(e=>e.id!==t)},toggleTodo(t){const e=this.todos.find(e=>e.id===t);e&&(e.completed=!e.completed)},editTodo(t){this.editingTodo=t},updateTodo(t){const e=this.todos.find(e=>e.id===t.id);e&&(e.text=t.text),this.editingTodo=null},cancelEdit(){this.editingTodo=null}}},L=S,q=(o("44b3"),Object(l["a"])(L,p,f,!1,null,"1ffe8fac",null)),A=q.exports;d["a"].use(u["a"]);var D=new u["a"]({mode:"history",routes:[{path:"/",name:"Home",component:A}]});d["a"].config.productionTip=!1,new d["a"]({router:D,render:t=>t(a)}).$mount("#app")},"7bc5":function(t,e,o){},add3:function(t,e,o){},af63:function(t,e,o){},c28b:function(t,e,o){},d11e:function(t,e,o){"use strict";o("c28b")},e448:function(t,e,o){}});
//# sourceMappingURL=app.026a9dea.js.map