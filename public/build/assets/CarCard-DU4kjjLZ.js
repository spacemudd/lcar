import{_ as n}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as r,e as o,F as c,a as t,t as a,h as l,x as i}from"./app-jrs2r3Kg.js";const d={props:["id","car","description","description2","price","year","engine"]},_={class:"border border-yellow-600 p-5 rounded bg-white text-black"},h={class:"text-xl text-black"},b=["href"],u={class:"text-xl text-black"},m={class:"text-xl text-black"},x={key:2,class:"mt-2 border-2 border-black w-full",src:"/not_available.svg",alt:""},f={class:"text-right"},g=t("hr",null,null,-1),k={class:"w-full"},v=t("td",null,"Year",-1),y={class:"text-right"},w=t("td",null,"Engine",-1),B={class:"text-right"},C={class:"mt-2 flex gap-2 text-center lg:text-left justify-between"},E=["href"],F=["href"];function N(s,S,e,V,j,p){return r(),o("div",_,[e.car.at_data?(r(),o(c,{key:0},[e.car.at_data.data?(r(),o(c,{key:0},[t("p",h,a(e.year),1),t("a",{href:s.route("cars.show",e.car.id)},[t("h2",u,[t("b",null,a(e.car.at_data.data.vehicle.make)+" "+a(e.car.at_data.data.vehicle.model),1)]),t("p",m,a(e.car.at_data.data.adverts.retailAdverts.attentionGrabber),1)],8,b)],64)):l("",!0)],64)):l("",!0),e.car.media?(r(),o("div",{key:1,class:"bg-cover bg-center py-1 block mt-5",style:i("height:300px;background-image: url("+s.route("media.show",e.car.media[0].id)+");")},null,4)):(r(),o("img",x)),t("p",f,a(e.price),1),g,t("table",k,[t("tbody",null,[t("tr",null,[v,t("td",y,a(e.year),1)]),t("tr",null,[w,t("td",B,a(e.engine),1)])])]),t("div",C,[t("a",{class:"border px-2 hover:bg-black hover:text-white border-black font-bold transition duration-300",href:s.route("cars.show",e.car.id)}," More Information ",8,E),t("a",{class:"border px-2 hover:bg-black hover:text-white border-black font-bold transition duration-300",href:s.route("appointments.create",{car_id:e.car.id})}," Book an appointment ",8,F)])])}const D=n(d,[["render",N]]);export{D as C};
