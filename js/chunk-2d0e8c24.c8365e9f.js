(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c24"],{"8b48":function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"app flex-row align-items-center"},[a("div",{staticClass:"container"},[a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{md:"8"}},[a("b-card-group",[a("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[a("b-card-body",[a("b-form",[a("h1",[t._v("Login")]),a("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),a("b-input-group",{staticClass:"mb-3"},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-user"})])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})],1),a("b-input-group",{staticClass:"mb-4"},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-lock"})])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwords,expression:"passwords"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.passwords},on:{input:function(s){s.target.composing||(t.passwords=s.target.value)}}})],1),a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("div",{attrs:{id:"login"}},[a("b-button",{staticClass:"px-4",attrs:{variant:"primary"},on:{click:function(s){return t.onSubmit(t.email,t.passwords)}}},[t._v("Login")])],1)]),a("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[a("b-button",{staticClass:"px-0",attrs:{variant:"link"}},[t._v("Forgot password?")])],1)],1)],1)],1)],1),a("b-card",{staticClass:"text-white bg-primary py-5 d-md-down-none",staticStyle:{width:"44%"},attrs:{"no-body":""}},[a("b-card-body",{staticClass:"text-center"},[a("div",[a("h2",[t._v("Sign up")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),a("b-button",{staticClass:"active mt-3",attrs:{variant:"primary"}},[t._v("Register Now!")])],1)])],1)],1)],1)],1)],1)])},r=[],e=a("cebc"),i=a("2f62"),n=a("6c33"),c={name:"RwvLogin",data:function(){return{email:null,passwords:null}},methods:{onSubmit:function(t,s){var a=this;alert(t),this.$store,this.$router.push({name:"HR"}).dispatch(n["s"],{email:t,passwords:s}).then(function(){return a.$router.push({name:"HR"})})}},computed:Object(e["a"])({},Object(i["b"])({errors:function(t){return t.auth.errors}}))},l=c,u=a("2877"),p=Object(u["a"])(l,o,r,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0e8c24.c8365e9f.js.map