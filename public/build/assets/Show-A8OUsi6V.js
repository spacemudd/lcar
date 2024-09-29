import{o as a,e as i,b as o,u as c,a as e,c as f,w as d,F as n,f as h,t as l,h as u,Z as x,g,j as m}from"./app-MFIk30Iv.js";import{N as v}from"./Navbar-C40VbCpe.js";import{B as k}from"./BottomLayout-Dl2PXWR9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./EventRecord-Q7VDlm_O.js";const w={class:"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"},_=e("img",{id:"background",class:"absolute -left-20 top-0 max-w-[877px]",src:"/bg-2.svg"},null,-1),p={class:"relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"},y={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},L={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},F=e("div",{class:"flex lg:justify-left lg:col-span-1"},[e("a",{href:"/"},[e("img",{id:"background",class:"max-w-[100px] lg:max-w-[200px]",src:"/luxuria_logo_text_white.png"})])],-1),B={key:0,class:"-mx-3 flex flex-1 justify-end"},T={class:"relative bg-black rounded-lg overflow-hidden mt-10 p-5"},N={class:"text-5xl text-white font-bold text-center lg:text-left"},M={key:0,class:"text-4xl text-white pb-5"},j={class:"grid grid-cols-1 lg:grid-cols-2 gap-5"},D=["href"],H=["src"],R={class:"grid grid-cols-3 lg:grid-cols-6 gap-2"},V=["href"],q=["src"],C={class:"grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5"},S={class:"bg-white text-black p-2 border-2 border-yellow-500 text-sm"},A={class:"flex justify-between"},E={class:"mt-10"},O=["innerHTML"],G=["innerHTML"],P={class:"mt-10"},Z=["href"],$={class:"mt-10 text-white"},z=e("p",null,[e("b",null,"List of features:")],-1),I={class:"list-disc px-5 pt-5"},J={class:"mt-5 block lg:hidden"},K=["innerHTML"],te={__name:"Show",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0},cars:{type:Array,required:!0},car:{type:Object,required:!0}},setup(t){return(s,Q)=>(a(),i(n,null,[o(c(x),{title:"Cars "}),e("div",w,[_,e("div",p,[e("div",y,[e("header",L,[F,o(v),t.canLogin?(a(),i("nav",B,[s.$page.props.auth.user?(a(),f(c(m),{key:0,href:s.route("dashboard"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:d(()=>[g(" Dashboard ")]),_:1},8,["href"])):(a(),i(n,{key:1},[o(c(m),{href:s.route("login"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:d(()=>[g(" Log in ")]),_:1},8,["href"]),t.canRegister?(a(),f(c(m),{key:0,href:s.route("register"),class:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:d(()=>[g(" Register ")]),_:1},8,["href"])):h("",!0)],64))])):h("",!0)]),e("main",null,[e("div",T,[e("h2",N,l(t.car.at_data.data.vehicle.make)+" "+l(t.car.at_data.data.vehicle.model),1),t.car.at_data.data?(a(),i("p",M,l(t.car.at_data.data.adverts.retailAdverts.attentionGrabber),1)):h("",!0),e("div",j,[e("div",null,[e("a",{target:"_blank",href:s.route("media.show",t.car.media[0].id)},[e("img",{src:s.route("media.show",t.car.media[0].id),class:"pb-5"},null,8,H)],8,D),e("div",R,[(a(!0),i(n,null,u(t.car.media,r=>(a(),i("div",null,[e("a",{target:"_blank",href:s.route("media.show",r.id)},[e("img",{class:"w-20 border border-yellow-500",src:s.route("media.show",r.id),alt:""},null,8,q)],8,V)]))),256))])]),e("div",null,[e("div",C,[(a(!0),i(n,null,u({Price:t.car.price_human,Mileage:t.car.mileage,Fuel:t.car.fuel_type,Registration:t.car.registration,Owners:t.car.owners,"Emission Class":t.car.emission_class},(r,b)=>(a(),i("div",S,[e("div",A,[e("p",null,l(b),1),e("p",null,l(r),1)])]))),256))]),e("div",E,[t.car.description?(a(),i("p",{key:0,class:"hidden lg:block leading-8",style:{"font-family":"'Times New Roman'","margin-top":"-10px"},innerHTML:t.car.description},null,8,O)):(a(),i("p",{key:1,class:"hidden lg:block leading-8",style:{"font-family":"'Times New Roman'","margin-top":"-10px"},innerHTML:t.car.description2},null,8,G))]),e("div",P,[e("a",{class:"text-white border border-white p-2 hover:bg-white hover:text-black",href:s.route("appointments.create")}," Book an appointment ",8,Z)]),e("div",$,[z,e("ul",I,[(a(!0),i(n,null,u(t.car.at_data.data.features,r=>(a(),i("li",null,l(r.name),1))),256))])])])]),e("div",J,[e("p",{innerHTML:t.car.long_description},null,8,K)])])])])]),o(k)])],64))}};export{te as default};