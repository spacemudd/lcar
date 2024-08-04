import{T as x,o as r,e as o,b as n,u as i,a as e,w as a,c as d,F as u,f as h,g as t,i as f,Z as g,j as l}from"./app-Dadd2sGo.js";const v={class:"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"},p=e("img",{id:"background",class:"absolute -left-20 top-0 max-w-[877px]",src:"/bg-2.svg"},null,-1),b={class:"relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"},m={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},k={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},w=e("div",{class:"flex lg:justify-left lg:col-span-2"},[e("a",{href:"/"},[e("img",{id:"background",class:"max-w-[100px] lg:max-w-[200px]",src:"/luxuria_logo_text_white.png"})])],-1),_={class:"-mx-3 flex flex-1 justify-end"},y={key:0,class:"-mx-3 flex flex-1 justify-end"},F=e("main",null,[e("div",{class:"relative bg-black rounded-lg overflow-hidden mt-10 p-10"},[e("h2",{class:"text-5xl text-white font-bold lg:text-left"},[t(" Thank you."),e("br"),t(" We will be in touch as soon as possible. "),e("br")]),e("p",null,"In the mean time, you can browse our finest collection of supercars."),e("div",{class:"mt-5"},[e("p",null,"- Luxuria Auto")])])],-1),D=f('<div class="relative w-full bg-white py-10 mt-20"><div class="flex flex-col items-center justify-center text-black"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><h2 class="text-5xl mt-10 text-center lg:text-left">Events</h2><div><div><div>Aug</div><div>17</div></div></div><hr class="mt-10"><h2 class="text-5xl mt-10 text-center lg:text-left">Contact Us</h2><p class="mt-10 text-center lg:text-left"> Unit 5a Keer Park, Carnforth, Lancashire<br> +44 1524 488800<br> info@luxuria-auto.co.uk </p></div></div></div>',1),B={__name:"Success",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0}},setup(c){return x({name:"",email:"",phone:"",message:""}),(s,V)=>(r(),o(u,null,[n(i(g),{title:"Appointment success"}),e("div",v,[p,e("div",b,[e("div",m,[e("header",k,[w,e("nav",_,[n(i(l),{href:s.route("home"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:a(()=>[t(" Home ")]),_:1},8,["href"]),n(i(l),{href:s.route("cars.index"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:a(()=>[t(" Cars ")]),_:1},8,["href"])]),c.canLogin?(r(),o("nav",y,[s.$page.props.auth.user?(r(),d(i(l),{key:0,href:s.route("dashboard"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:a(()=>[t(" Dashboard ")]),_:1},8,["href"])):(r(),o(u,{key:1},[n(i(l),{href:s.route("login"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:a(()=>[t(" Log in ")]),_:1},8,["href"]),c.canRegister?(r(),d(i(l),{key:0,href:s.route("register"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:a(()=>[t(" Register ")]),_:1},8,["href"])):h("",!0)],64))])):h("",!0)]),F])]),D])],64))}};export{B as default};
