import{o as i,e as l,b as s,u as n,a as e,F as a,g as c,Z as d,c as p}from"./app-CHHDJAMu.js";import{N as g}from"./Navbar-zHrUTG17.js";import{B as u}from"./BottomLayout-CKzV7qiS.js";import{C as m}from"./CarCard-DnHHk7T8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"bg-black text-white/50"},f={class:"relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"},b={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},v={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},y={class:"mt-2 grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10"},F={__name:"Index",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0},cars:{type:Array,required:!0}},setup(o){return(_,r)=>(i(),l(a,null,[s(n(d),{title:"Welcome"}),e("div",x,[r[2]||(r[2]=e("img",{id:"background",class:"absolute -left-20 top-0 max-w-[877px]",src:"/bg-2.svg"},null,-1)),e("div",f,[e("div",b,[e("header",v,[r[0]||(r[0]=e("div",{class:"flex lg:justify-left lg:col-span-1"},[e("a",{href:"/"},[e("img",{id:"background",class:"max-w-[100px] lg:max-w-[200px]",src:"/luxuria_logo_text_white.png"})])],-1)),s(g)]),e("main",null,[r[1]||(r[1]=e("div",{class:"relative bg-black rounded-lg overflow-hidden mt-10 p-10"},[e("h2",{class:"text-5xl text-white font-bold text-center lg:text-left"}," Curated Selection "),e("p",{class:"mt-5 text-gray-400 text-2xl"}," Discover our curated selection of luxury cars, featuring the finest brands, impeccable craftsmanship, and unparalleled performance for discerning drivers. ")],-1)),e("div",y,[(i(!0),l(a,null,c(o.cars,t=>(i(),p(m,{id:t.id,car:t,description:t.description,description2:t.description2,price:t.price_human,year:t.year,engine:t.engine_size},null,8,["id","car","description","description2","price","year","engine"]))),256))])])]),s(u)])])],64))}};export{F as default};
