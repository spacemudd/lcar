import{T as d,o as m,e as u,b as n,u as l,a as e,k as c,l as a,v as i,F as p,Z as x}from"./app-qhpo4hD5.js";import{B as h}from"./BottomLayout-BvWoPF3K.js";import{N as b}from"./Navbar-Ct0O_i3N.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={class:"bg-black text-white/50"},g=e("img",{id:"background",class:"absolute -left-20 top-0 max-w-[877px]",src:"/bg-2.svg"},null,-1),w={class:"relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"},_={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},k={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},v=e("div",{class:"flex lg:justify-left lg:col-span-1"},[e("a",{href:"/"},[e("img",{id:"background",class:"max-w-[100px] lg:max-w-[200px]",src:"/luxuria_logo_text_white.png"})])],-1),y={class:"relative bg-black rounded-lg overflow-hidden mt-10 p-10 max-w-[500px] mx-auto"},V=e("h2",{class:"text-5xl text-white font-bold text-center lg:text-left"}," Sell Your Car ",-1),q=e("p",{class:"mt-5 text-2xl"}," At Luxuria we are prolific buyers of the world’s finest supercars, performance cars and luxury SUVs. ",-1),S=e("p",{class:"mt-5"}," We specialise in exceptionally high specification, low mileage examples as well as the latest and rarest models so if you are looking to sell your supercar or luxury car then please fill out the form below and one of our buyers will be in touch. ",-1),B={class:"mt-10"},U={class:"grid grid-cols-1 gap-5"},F=e("label",{for:"name",class:"block text-sm font-medium text-white"},"Name",-1),N=e("label",{for:"email",class:"block text-sm font-medium text-white"},"Email",-1),M=e("label",{for:"phone",class:"block text-sm font-medium text-white"},"Phone",-1),j={class:"flex justify-between gap-5"},L=e("label",{for:"phone",class:"block text-sm font-medium text-white"},"Make",-1),D=e("label",{for:"phone",class:"block text-sm font-medium text-white"},"Model",-1),E=e("label",{for:"phone",class:"block text-sm font-medium text-white"},"Year",-1),T=e("div",null,[e("button",{class:"hover:bg-yellow-800 hover:text-white bg-yellow-600 text-black px-2 rounded text-bold text-2xl"}," Send message ")],-1),R={__name:"Index",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(W){const t=d({name:"",email:"",phone:"",make:"",model:"",year:"",message:""}),r=()=>{t.post(route("appointments.store"),{preserveScroll:!0,onSuccess:()=>{t.reset()}})};return(Y,o)=>(m(),u(p,null,[n(l(x),{title:"Welcome"}),e("div",f,[g,e("div",w,[e("div",_,[e("header",k,[v,n(b)]),e("main",null,[e("div",y,[V,q,S,e("div",B,[e("form",{method:"post",onSubmit:c(r,["prevent"])},[e("div",U,[e("div",null,[F,a(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>l(t).name=s),name:"name",id:"name",class:"mt-1 block w-full rounded-md bg-white text-black",required:""},null,512),[[i,l(t).name]])]),e("div",null,[N,a(e("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=s=>l(t).email=s),name:"email",id:"email",class:"mt-1 block w-full rounded-md bg-white text-black",required:""},null,512),[[i,l(t).email]])]),e("div",null,[M,a(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=s=>l(t).phone=s),name:"phone",id:"phone",class:"mt-1 block w-full rounded-md bg-white text-black",required:""},null,512),[[i,l(t).phone]])]),e("div",j,[e("div",null,[L,a(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>l(t).make=s),name:"phone",id:"phone",class:"mt-1 block w-full rounded-md bg-white text-black",required:""},null,512),[[i,l(t).make]])]),e("div",null,[D,a(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=s=>l(t).model=s),name:"phone",id:"phone",class:"mt-1 block w-full rounded-md bg-white text-black",required:""},null,512),[[i,l(t).model]])]),e("div",null,[E,a(e("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=s=>l(t).year=s),name:"phone",id:"phone",class:"mt-1 block w-full rounded-md bg-white text-black",required:""},null,512),[[i,l(t).year]])])]),T])],32)])])])])]),n(h)])],64))}};export{R as default};