import{T as p,k as d,o as i,c as _,w as l,a as t,t as n,e as c,h as f,g as m,F as g,l as w,b as x}from"./app-DdnnKv3w.js";import{_ as y}from"./PrimaryButton-BCDrRGsu.js";import{_ as F}from"./AppLayout-CV2gFyD5.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b={components:{useForm:p,PrimaryButton:y,AppLayout:F},data(){return{formData:new FormData}},mounted(){},methods:{importFileChanged(e,o){this.attachedFile=e.target.files[0],this.formData.append("car_image",this.attachedFile)},uploadPhoto(){axios.post(route("admin.cars.upload",this.car.id),this.formData).then(e=>{window.location.reload()}).catch(e=>{throw e})}},props:["car"]},B=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Cars ",-1),C={class:"py-12"},D={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},P={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},k=t("br",null,null,-1),L=t("br",null,null,-1),S=["src"],A={class:"py-12"};function N(e,o,s,V,T,r){const u=d("PrimaryButton"),h=d("AppLayout");return i(),_(h,{title:"Dashboard"},{header:l(()=>[B]),default:l(()=>[t("div",C,[t("div",D,[t("div",P,[t("p",null,n(s.car.id),1),t("p",null,n(s.car.description),1),t("p",null,n(s.car.description2),1),k,L,(i(!0),c(g,null,f(s.car.media,a=>(i(),c("p",null,[m(n(a.file_name)+" ",1),t("img",{src:e.route("media.show",a.id),alt:"image",width:"100"},null,8,S)]))),256))])])]),t("div",A,[t("form",{onSubmit:o[1]||(o[1]=w((...a)=>r.uploadPhoto&&r.uploadPhoto(...a),["prevent"])),method:"post",enctype:"multipart/form-data"},[t("input",{type:"file",name:"attached_file",ref:"attached_file",required:"",onChange:o[0]||(o[0]=(...a)=>r.importFileChanged&&r.importFileChanged(...a))},null,544),x(u,null,{default:l(()=>[m(" Save ")]),_:1})],32)])]),_:1})}const z=v(b,[["render",N]]);export{z as default};
