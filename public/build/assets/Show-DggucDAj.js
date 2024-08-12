import{o as i,e as s,b as l,u as o,a as e,c as h,w as d,F as n,f as m,t as c,h as f,Z as b,g,j as u}from"./app-BvLm1BBj.js";import{N as w}from"./Navbar-LKdIIb3p.js";import{B as k}from"./BottomLayout-zzffdZbv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./EventRecord-UH5NsMqG.js";const v={class:"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"},p=e("img",{id:"background",class:"absolute -left-20 top-0 max-w-[877px]",src:"/bg-2.svg"},null,-1),y={class:"relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"},_={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},F={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},L=e("div",{class:"flex lg:justify-left lg:col-span-1"},[e("a",{href:"/"},[e("img",{id:"background",class:"max-w-[100px] lg:max-w-[200px]",src:"/luxuria_logo_text_white.png"})])],-1),B={key:0,class:"-mx-3 flex flex-1 justify-end"},N={class:"relative bg-black rounded-lg overflow-hidden mt-10 p-5"},j={class:"text-5xl text-white font-bold text-center lg:text-left"},D={class:"mt-5 text-2xl"},T={class:"grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5"},V=["href"],M=["src"],R={class:"grid grid-cols-3 lg:grid-cols-6 gap-2"},q=["href"],C=["src"],H=["innerHTML"],S={class:"grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5"},E={class:"bg-white text-black p-2 border-2 border-yellow-500 text-sm"},O={class:"flex justify-between"},A={class:"mt-5 block lg:hidden"},P=["innerHTML"],K={__name:"Show",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0},cars:{type:Array,required:!0},car:{type:Object,required:!0}},setup(t){return(r,Z)=>(i(),s(n,null,[l(o(b),{title:"Cars "}),e("div",v,[p,e("div",y,[e("div",_,[e("header",F,[L,l(w),t.canLogin?(i(),s("nav",B,[r.$page.props.auth.user?(i(),h(o(u),{key:0,href:r.route("dashboard"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:d(()=>[g(" Dashboard ")]),_:1},8,["href"])):(i(),s(n,{key:1},[l(o(u),{href:r.route("login"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:d(()=>[g(" Log in ")]),_:1},8,["href"]),t.canRegister?(i(),h(o(u),{key:0,href:r.route("register"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:d(()=>[g(" Register ")]),_:1},8,["href"])):m("",!0)],64))])):m("",!0)]),e("main",null,[e("div",N,[e("h2",j,c(t.car.description),1),e("p",D,c(t.car.description2),1),e("div",T,[e("div",null,[e("a",{target:"_blank",href:r.route("media.show",t.car.media[0].id)},[e("img",{src:r.route("media.show",t.car.media[0].id),class:"pb-5"},null,8,M)],8,V),e("div",R,[(i(!0),s(n,null,f(t.car.media,a=>(i(),s("div",null,[e("a",{target:"_blank",href:r.route("media.show",a.id)},[e("img",{class:"w-20 border border-yellow-500",src:r.route("media.show",a.id),alt:""},null,8,C)],8,q)]))),256))])]),e("div",null,[e("p",{class:"hidden lg:block leading-8",style:{"font-family":"'Times New Roman'","margin-top":"-10px"},innerHTML:t.car.long_description},null,8,H),e("div",S,[(i(!0),s(n,null,f({Price:t.car.price,Mileage:t.car.mileage,Fuel:t.car.fuel_type,Registration:t.car.registration,Owners:t.car.owners,"Emission Class":t.car.emission_class},(a,x)=>(i(),s("div",E,[e("div",O,[e("p",null,c(x),1),e("p",null,c(a),1)])]))),256))])])]),e("div",A,[e("p",{innerHTML:t.car.long_description},null,8,P)])])])])]),l(k)])],64))}};export{K as default};
