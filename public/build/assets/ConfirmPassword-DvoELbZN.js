import{T as m,d,o as c,e as u,b as a,u as e,w as r,a as o,n as p,f,k as _,F as w,Z as b}from"./app-CFfdKxZI.js";import{A as g}from"./AuthenticationCard-AVaUS8qJ.js";import{_ as h}from"./AuthenticationCardLogo-qphqFTdh.js";import{_ as x,a as v}from"./TextInput-Dc1kGxvI.js";import{_ as y}from"./InputLabel-CcbVNkC4.js";import{_ as V}from"./PrimaryButton-Dif7YOq0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k=o("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup($){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(A,i)=>(c(),u(w,null,[a(e(b),{title:"Secure Area"}),a(g,null,{logo:r(()=>[a(h)]),default:r(()=>[k,o("form",{onSubmit:_(n,["prevent"])},[o("div",null,[a(y,{for:"password",value:"Password"}),a(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(v,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",C,[a(V,{class:p(["ms-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[f(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{j as default};
