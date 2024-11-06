import{d,T as x,o as s,e as a,b as o,u as t,w as m,a as i,F as n,f as l,k as _,n as C,Z as w,s as V}from"./app-CHHDJAMu.js";import{A as h}from"./AuthenticationCard-AOFZzPfB.js";import{_ as T}from"./AuthenticationCardLogo-Ch28JjCJ.js";import{_ as p,a as v}from"./TextInput-DNXlIHwm.js";import{_ as g}from"./InputLabel-CzCbdxPn.js";import{_ as $}from"./PrimaryButton-BwOHAYPm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={class:"mb-4 text-sm text-gray-600"},U={key:0},B={key:1},F={class:"flex items-center justify-end mt-4"},S={__name:"TwoFactorChallenge",setup(N){const c=d(!1),e=x({code:"",recovery_code:""}),f=d(null),y=d(null),k=async()=>{c.value^=!0,await V(),c.value?(f.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},b=()=>{e.post(route("two-factor.login"))};return(A,r)=>(s(),a(n,null,[o(t(w),{title:"Two-factor Confirmation"}),o(h,null,{logo:m(()=>[o(T)]),default:m(()=>[i("div",I,[c.value?(s(),a(n,{key:1},[l(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),a(n,{key:0},[l(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:_(b,["prevent"])},[c.value?(s(),a("div",B,[o(g,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":r[1]||(r[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(s(),a("div",U,[o(g,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":r[0]||(r[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",F,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:_(k,["prevent"])},[c.value?(s(),a(n,{key:1},[l(" Use an authentication code ")],64)):(s(),a(n,{key:0},[l(" Use a recovery code ")],64))]),o($,{class:C(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>r[2]||(r[2]=[l(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{S as default};
