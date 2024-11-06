import{T as g,o as a,e as d,b as o,u as s,a as t,w as l,f as r,c as x,F as c,h as f,i as h,Z as v,m as n}from"./app-CHHDJAMu.js";const p={class:"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"},m={class:"relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"},b={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},k={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},w={class:"-mx-3 flex flex-1 justify-end"},y={key:0,class:"-mx-3 flex flex-1 justify-end"},D={__name:"Success",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(u){return g({name:"",email:"",phone:"",message:""}),(i,e)=>(a(),d(c,null,[o(s(v),{title:"Appointment success"}),t("div",p,[e[7]||(e[7]=t("img",{id:"background",class:"absolute -left-20 top-0 max-w-[877px]",src:"/bg-2.svg"},null,-1)),t("div",m,[t("div",b,[t("header",k,[e[5]||(e[5]=t("div",{class:"flex lg:justify-left lg:col-span-2"},[t("a",{href:"/"},[t("img",{id:"background",class:"max-w-[100px] lg:max-w-[200px]",src:"/luxuria_logo_text_white.png"})])],-1)),t("nav",w,[o(s(n),{href:i.route("home"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:l(()=>e[0]||(e[0]=[r(" Home ")])),_:1},8,["href"]),o(s(n),{href:i.route("cars.index"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:l(()=>e[1]||(e[1]=[r(" Cars ")])),_:1},8,["href"])]),u.canLogin?(a(),d("nav",y,[i.$page.props.auth.user?(a(),x(s(n),{key:0,href:i.route("dashboard"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:l(()=>e[2]||(e[2]=[r(" Dashboard ")])),_:1},8,["href"])):(a(),d(c,{key:1},[o(s(n),{href:i.route("login"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:l(()=>e[3]||(e[3]=[r(" Log in ")])),_:1},8,["href"]),u.canRegister?(a(),x(s(n),{key:0,href:i.route("register"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:l(()=>e[4]||(e[4]=[r(" Register ")])),_:1},8,["href"])):f("",!0)],64))])):f("",!0)]),e[6]||(e[6]=t("main",null,[t("div",{class:"relative bg-black rounded-lg overflow-hidden mt-10 p-10"},[t("h2",{class:"text-5xl text-white font-bold lg:text-left"},[r(" Thank you."),t("br"),r(" We will be in touch as soon as possible. "),t("br")]),t("p",null,"In the mean time, you can browse our finest collection of supercars."),t("div",{class:"mt-5"},[t("p",null,"- Luxuria Auto")])])],-1))])]),e[8]||(e[8]=h('<div class="relative w-full bg-white py-10 mt-20"><div class="flex flex-col items-center justify-center text-black"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><h2 class="text-5xl mt-10 text-center lg:text-left">Events</h2><div><div><div>Aug</div><div>17</div></div></div><hr class="mt-10"><h2 class="text-5xl mt-10 text-center lg:text-left">Contact Us</h2><p class="mt-10 text-center lg:text-left"> Unit 5a Keer Park, Carnforth, Lancashire<br> +44 1524 488800<br> info@luxuria-auto.co.uk </p></div></div></div>',1))])],64))}};export{D as default};
