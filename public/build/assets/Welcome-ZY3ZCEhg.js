import{T as K,o as g,e as w,F as L,l as se,v as ae,a as t,k as G,f as j,i as D,j as z,c as M,w as H,g as Y,x as re,t as W,b as T,u as ie,Z as le}from"./app-DksRDbyr.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{N as oe}from"./Navbar-BHWAxHL0.js";import{C as ne}from"./CarCard-DoVxHu-c.js";import{g as F,c as Z,a as ce,S as de,b as ue,N as pe,P as me}from"./pagination-CcScHTX0.js";function fe(p){let{swiper:e,extendParams:s,on:a,emit:o,params:u}=p;e.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,c,i=u&&u.autoplay?u.autoplay.delay:3e3,n=u&&u.autoplay?u.autoplay.delay:3e3,d,m=new Date().getTime(),h,v,y,A,C,_,P;function B(r){!e||e.destroyed||!e.wrapperEl||r.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",B),!(P||r.detail&&r.detail.bySwiperTouchMove)&&b())}const I=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?h=!0:h&&(n=d,h=!1);const r=e.autoplay.paused?d:m+n-new Date().getTime();e.autoplay.timeLeft=r,o("autoplayTimeLeft",r,r/i),c=requestAnimationFrame(()=>{I()})},J=()=>{let r;return e.virtual&&e.params.virtual.enabled?r=e.slides.filter(f=>f.classList.contains("swiper-slide-active"))[0]:r=e.slides[e.activeIndex],r?parseInt(r.getAttribute("data-swiper-autoplay"),10):void 0},$=r=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(c),I();let x=typeof r>"u"?e.params.autoplay.delay:r;i=e.params.autoplay.delay,n=e.params.autoplay.delay;const f=J();!Number.isNaN(f)&&f>0&&typeof r>"u"&&(x=f,i=f,n=f),d=x;const E=e.params.speed,q=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(E,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,E,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(E,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,E,!0,!0),o("autoplay")),e.params.cssMode&&(m=new Date().getTime(),requestAnimationFrame(()=>{$()})))};return x>0?(clearTimeout(l),l=setTimeout(()=>{q()},x)):requestAnimationFrame(()=>{q()}),x},O=()=>{m=new Date().getTime(),e.autoplay.running=!0,$(),o("autoplayStart")},S=()=>{e.autoplay.running=!1,clearTimeout(l),cancelAnimationFrame(c),o("autoplayStop")},k=(r,x)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(l),r||(_=!0);const f=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",B):b()};if(e.autoplay.paused=!0,x){C&&(d=e.params.autoplay.delay),C=!1,f();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-m),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),f())},b=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(m=new Date().getTime(),_?(_=!1,$(d)):$(),e.autoplay.paused=!1,o("autoplayResume"))},R=()=>{if(e.destroyed||!e.autoplay.running)return;const r=F();r.visibilityState==="hidden"&&(_=!0,k(!0)),r.visibilityState==="visible"&&b()},U=r=>{r.pointerType==="mouse"&&(_=!0,P=!0,!(e.animating||e.autoplay.paused)&&k(!0))},V=r=>{r.pointerType==="mouse"&&(P=!1,e.autoplay.paused&&b())},Q=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",U),e.el.addEventListener("pointerleave",V))},X=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",U),e.el.removeEventListener("pointerleave",V))},ee=()=>{F().addEventListener("visibilitychange",R)},te=()=>{F().removeEventListener("visibilitychange",R)};a("init",()=>{e.params.autoplay.enabled&&(Q(),ee(),O())}),a("destroy",()=>{X(),te(),e.autoplay.running&&S()}),a("_freeModeStaticRelease",()=>{(y||_)&&b()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?S():k(!0,!0)}),a("beforeTransitionStart",(r,x,f)=>{e.destroyed||!e.autoplay.running||(f||!e.params.autoplay.disableOnInteraction?k(!0,!0):S())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){S();return}v=!0,y=!1,_=!1,A=setTimeout(()=>{_=!0,y=!0,k(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(A),clearTimeout(l),e.params.autoplay.disableOnInteraction){y=!1,v=!1;return}y&&e.params.cssMode&&b(),y=!1,v=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||(C=!0)}),Object.assign(e.autoplay,{start:O,stop:S,pause:k,resume:b})}function he(p){const{effect:e,swiper:s,on:a,setTranslate:o,setTransition:u,overwriteParams:l,perspective:c,recreateShadows:i,getEffectParams:n}=p;a("beforeInit",()=>{if(s.params.effect!==e)return;s.classNames.push(`${s.params.containerModifierClass}${e}`),c&&c()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const m=l?l():{};Object.assign(s.params,m),Object.assign(s.originalParams,m)}),a("setTranslate",()=>{s.params.effect===e&&o()}),a("setTransition",(m,h)=>{s.params.effect===e&&u(h)}),a("transitionEnd",()=>{if(s.params.effect===e&&i){if(!n||!n().slideShadows)return;s.slides.forEach(m=>{m.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),i()}});let d;a("virtualUpdate",()=>{s.params.effect===e&&(s.slides.length||(d=!0),requestAnimationFrame(()=>{d&&s.slides&&s.slides.length&&(o(),d=!1)}))})}function ge(p,e){const s=Z(e);return s!==e&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function ye(p){let{swiper:e,duration:s,transformElements:a,allSlides:o}=p;const{activeIndex:u}=e,l=c=>c.parentElement?c.parentElement:e.slides.filter(n=>n.shadowRoot&&n.shadowRoot===c.parentNode)[0];if(e.params.virtualTranslate&&s!==0){let c=!1,i;o?i=a:i=a.filter(n=>{const d=n.classList.contains("swiper-slide-transform")?l(n):n;return e.getSlideIndex(d)===u}),i.forEach(n=>{ce(n,()=>{if(c||!e||e.destroyed)return;c=!0,e.animating=!1;const d=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(d)})})}}function xe(p){let{swiper:e,extendParams:s,on:a}=p;s({fadeEffect:{crossFade:!1}}),he({effect:"fade",swiper:e,on:a,setTranslate:()=>{const{slides:l}=e,c=e.params.fadeEffect;for(let i=0;i<l.length;i+=1){const n=e.slides[i];let m=-n.swiperSlideOffset;e.params.virtualTranslate||(m-=e.translate);let h=0;e.isHorizontal()||(h=m,m=0);const v=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(n.progress),0):1+Math.min(Math.max(n.progress,-1),0),y=ge(c,n);y.style.opacity=v,y.style.transform=`translate3d(${m}px, ${h}px, 0px)`}},setTransition:l=>{const c=e.slides.map(i=>Z(i));c.forEach(i=>{i.style.transitionDuration=`${l}ms`}),ye({swiper:e,duration:l,transformElements:c,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const _e={data(){return{form:K({email:""}),completedSignup:!1}},mounted(){},methods:{signup(){this.form.post(route("newsletter.store"),{preserveScroll:!0,onSuccess:()=>{this.form.reset(),this.completedSignup=!0}})}}},be={key:0,class:"text-sm mt-2 text-white"},we=t("button",{type:"submit",class:"mt-2 bg-black text-white p-2 rounded border border-yellow-500 w-full hover:bg-yellow-500 hover:text-black transition"},"Sign up",-1),ve=t("span",{class:"text-sm mt-2 text-white"},"* We usually send an email once per month.",-1);function ke(p,e,s,a,o,u){return g(),w("form",{onSubmit:e[1]||(e[1]=G((...l)=>u.signup&&u.signup(...l),["prevent"])),class:"flex flex-col items-center justify-center"},[o.completedSignup?(g(),w("span",be,"Sign up completed. Welcome to our monthly newsletter.")):(g(),w(L,{key:1},[se(t("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=l=>o.form.email=l),name:"_replyto",placeholder:"Enter your email",class:"text-center p-2 rounded-lg border border-black text-black w-full",required:""},null,512),[[ae,o.form.email]]),we,ve],64))],32)}const Se=N(_e,[["render",ke]]),Ee={data(){return{form:new K({name:"",email:"",message:""})}},mounted(){},methods:{submitForm(){window.location.reload()}}},Te={class:"relative w-full bg-white py-10"},$e={class:"flex flex-col items-center justify-center text-black"},Le={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},Ce=t("h2",{class:"text-5xl mt-10 text-center lg:text-left"},"Contact Us",-1),Pe={class:"grid grid-cols-1 lg:grid-cols-2 gap-10"},je=D('<div class="mt-5"><label for="name" class="block">Name</label><input type="text" id="name" name="name" class="w-full p-2 border border-gray-300 rounded-lg"></div><div class="mt-5"><label for="email" class="block">Email</label><input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded-lg"></div><div class="mt-5"><label for="message" class="block">Message</label><textarea id="message" name="message" class="w-full p-2 border border-gray-300 rounded-lg"></textarea></div><div class="mt-5"><button type="submit" class="bg-black text-white p-2 rounded-lg">Send</button></div>',4),Fe=[je],Me=t("div",null,[t("p",{class:"mt-10",style:{"font-family":"'Times New Roman', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"}},[j(" Unit 5a Keer Park, Carnforth, Lancashire"),t("br"),j(" +44 1524 488800"),t("br"),j(" info@luxuria-auto.co.uk ")]),t("iframe",{class:"hidden lg:block",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d161.1832633315402!2d-2.7700579155145335!3d54.131742451529064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c9ca48a8140bd%3A0x6293c1df4c6e6bbd!2sKeer%20Park!5e0!3m2!1sen!2ssa!4v1728211474421!5m2!1sen!2ssa",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}),t("iframe",{class:"block lg:hidden",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d161.1832633315402!2d-2.7700579155145335!3d54.131742451529064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c9ca48a8140bd%3A0x6293c1df4c6e6bbd!2sKeer%20Park!5e0!3m2!1sen!2ssa!4v1728211474421!5m2!1sen!2ssa",width:"380",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1);function De(p,e,s,a,o,u){return g(),w("div",Te,[t("div",$e,[t("div",Le,[Ce,t("div",Pe,[t("div",null,[t("form",{onSubmit:e[0]||(e[0]=G((...l)=>u.submitForm&&u.submitForm(...l),["prevent"]))},Fe,32)]),Me])])])])}const Ne=N(Ee,[["render",De]]),Ae={props:["cars"],components:{Swiper:de,SwiperSlide:ue},setup(){return{modules:[xe,pe,me,fe]}}},Be=["href"],Ie={class:"m-10 font-bold text-white"},Oe={class:"text-5xl"},Re={class:"m-10 font-bold text-white"},Ue={class:"text-5xl"};function Ve(p,e,s,a,o,u){const l=z("swiper-slide"),c=z("swiper");return g(),M(c,{spaceBetween:30,effect:"fade",navigation:!0,height:500,"autoplay-delay":5e3,"autoplay-disable-on-interaction":!1,"autoplay-reverse-direction":!0,"space-between":30,loop:!0,"allow-touch-move":!1,"prevent-clicks":!1,pagination:{clickable:!0},modules:a.modules,class:"mySwiper"},{default:H(()=>[(g(!0),w(L,null,Y(s.cars,i=>(g(),M(l,null,{default:H(()=>[t("a",{href:p.route("cars.show",i.id)},[t("div",{class:"w-full bg-cover bg-center py-1 rounded-lg",style:re("height:500px;background-image: url("+p.route("media.show",i.media[0].id)+");")},[t("p",Ie,[t("span",Oe,W(i.at_data.data.adverts.retailAdverts.attentionGrabber),1)]),t("p",Re,[t("span",Ue,W(i.price_human),1)])],4)],8,Be)]),_:2},1024))),256))]),_:1},8,["modules"])}const qe=N(Ae,[["render",Ve]]),ze={class:"bg-black text-white/50"},He=t("img",{id:"background",class:"absolute -left-20 top-0 max-w-[877px]",src:"/bg-2.svg"},null,-1),We={class:"relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"},Ke={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},Ge={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},Ye=t("div",{class:"flex lg:justify-left lg:col-span-1"},[t("a",{href:"/"},[t("img",{id:"background",class:"max-w-[150px] lg:max-w-[200px]",src:"/whitelogocropped.png"})])],-1),Ze=D('<div class="flex gap-10 justify-center lg:justify-end"><a target="_blank" href="https://x.com/luxuria_auto1"><img src="/x.svg" class="w-10 border-2 border-white p-2" alt=""></a><a target="_blank" href="https://www.facebook.com/profile.php?id=61559406996757"><img src="/fb.svg" class="w-10" alt=""></a><a target="_blank" href="https://www.instagram.com/Luxuria_uk"><img src="/instagram.svg" class="w-10 border-2 border-white p-2" alt=""></a><a target="_blank" href="https://www.tiktok.com/Luxuria_uk"><img src="/tiktok.svg" class="w-10 border-2 border-white p-2" alt=""></a></div><div><p class="text-center lg:text-right text-white text-2xl mt-3"><a href="tel:+441524488800">+44 1524 488800</a></p><p class="text-center lg:text-right text-white text-2xl mt-3"><a href="mailto:info@luxuria-auto.co.uk">info@luxuria-auto.co.uk</a></p></div>',2),Je={class:"relative bg-black rounded-lg overflow-hidden mt-10"},Qe={class:"relative z-10 px-6 py-12 text-white"},Xe=t("h1",{class:"text-7xl font-bold opacity-100"},"Your gateway to luxury.",-1),et=t("p",{class:"ml-2 mt-10"}," Offering an exclusive selection of the finest brands, including Porsche, Mercedes, Lamborghini, Bentley, Ferrari, and Rolls-Royce, each representing the pinnacle of elegance and performance. ",-1),tt={class:"flex flex-col lg:flex-row gap-2 mt-10"},st=["href"],at=t("p",{class:"mt-10"},"* For more information on what we offer our clients contact us on: +44 1524 488800",-1),rt=t("p",null,"* For immediate requests, please reach us at info@luxuria-auto.co.uk",-1),it=t("div",{class:"absolute inset-0 bg-black bg-opacity-50"},null,-1),lt=t("video",{src:"/luxuria_1.mp4",autoplay:"",loop:"",muted:"",playsinline:"",class:"absolute inset-0 object-cover w-full h-full transition duration-300 opacity-50"},null,-1),ot=D('<div class="mt-20"><h2 class="text-5xl text-white font-bold text-center lg:text-left">Bespoke Services</h2><div class="grid sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-5 text-center"><div class="text-black bg-gray-200 p-5 rounded"><img width="30px" class="m-auto block" src="/vehicle.png" alt=""><h2 class="font-bold text-2xl">Vehicle Sales</h2><p>Offering an elite collection of luxury, sports and supercars, both modern and classic.</p></div><div class="text-black bg-gray-200 p-5 rounded"><img width="30px" class="m-auto block" src="/sourcing.png" alt=""><h2 class="font-bold text-2xl">Sourcing</h2><p>Expert service for sourcing rare and exclusive luxury cars globally.</p></div><div class="text-black bg-gray-200 p-5 rounded"><img width="30px" class="m-auto block" src="/concierge.png" alt=""><h2 class="font-bold text-2xl">Consignment services</h2><p>Professional service for sale or return of high-end luxury cars.</p></div><div class="text-black bg-gray-200 p-5 rounded"><img width="30px" class="m-auto block" src="/trailer.png"><h2 class="font-bold text-2xl">Collection &amp; Return</h2><p>Exclusive service for luxury car collection and return with precision.</p></div></div></div>',1),nt={class:"flex flex-col items-center justify-center px-6"},ct=t("h2",{class:"text-6xl mt-10 uppercase text-white"}," Sign up for our newsletter ",-1),dt=t("h3",{class:"text-4xl text-white mt-2"},"See our latest cars as they arrive",-1),ut={class:"mt-5"},pt={class:"relative w-full bg-white py-10 mt-20"},mt={class:"flex flex-col items-center justify-center text-black"},ft={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},ht=t("h2",{class:"text-5xl mt-10 text-center lg:text-left"},"Newly listed",-1),gt={class:"grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5"},yt={class:"relative w-full bg-white py-10"},xt={class:"flex flex-col items-center justify-center text-white py-10",style:{"background-image":"url('/car_images/corvette.jpg')","background-size":"cover","background-position":"center"}},_t={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},bt=t("h2",{class:"text-5xl mt-10 text-center lg:text-left"},"Take a forward step now.",-1),wt=t("p",{class:"mt-2 text-3xl text-center lg:text-left"},"Enjoy a carefully handpicked collection from the Luxuria World.",-1),vt={class:"flex justify-center lg:justify-start mt-5"},kt=["href"],St=t("div",{class:"mt-5 flex-row lg:flex gap-10 justify-center"},[t("div",{class:"relative bg-black rounded-lg overflow-hidden"},[t("video",{src:"/car_images/ghost.mp4",autoplay:"",loop:"",muted:"",playsinline:"",height:"300",class:""})])],-1),Et={class:"p-10 lg:p-20 text-xs text-white/70",style:{"font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"}},Tt={class:"flex gap-20 justify-center"},$t=t("h3",{class:"font-bold"},"Navigation",-1),Lt={class:"list-disc"},Ct={class:"ml-3 mt-1"},Pt=["href"],jt={class:"ml-3 mt-1"},Ft=["href"],Mt={class:"ml-3 mt-1"},Dt=["href"],Nt={class:"ml-3 mt-1"},At=["href"],Bt={class:"ml-3 mt-1"},It=["href"],Ot={class:"ml-3 mt-1"},Rt=["href"],Ut={class:"ml-3 mt-1"},Vt=["href"],qt=t("div",null,[t("h3",{class:"font-bold"},"Headquarter"),t("img",{src:"/luxuria_logo_text_white.png",class:"my-2",style:{"max-width":"100px"},alt:""}),t("p",null,"Unit 5a Keer Park, Carnforth, Lancashire"),t("p",null,"+44 1524 488800"),t("p",null,"info@luxuria-auto.co.uk")],-1),zt=t("p",{class:"mt-10 text-center"},"Copyright © Luxuria 2024.",-1),Zt={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},laravelVersion:{type:String,required:!0},phpVersion:{type:String,required:!0},cars:{type:Array,required:!1}},setup(p){return(e,s)=>(g(),w(L,null,[T(ie(le),{title:"Welcome"}),t("div",ze,[He,t("div",We,[t("div",Ke,[t("header",Ge,[Ye,T(oe)]),Ze,t("main",null,[T(qe,{class:"mt-5",cars:p.cars},null,8,["cars"]),t("div",Je,[t("div",Qe,[Xe,et,t("div",tt,[t("div",null,[t("a",{href:e.route("cars.index"),class:"hover:bg-yellow-800 hover:text-white bg-yellow-600 text-black px-2 rounded text-bold text-2xl"}," Browse latest collection ",8,st)])]),at,rt]),it,lt]),ot])])]),t("div",null,[t("div",nt,[ct,dt,t("div",ut,[T(Se)])])]),t("div",pt,[t("div",mt,[t("div",ft,[ht,t("div",gt,[(g(!0),w(L,null,Y(p.cars,a=>(g(),M(ne,{id:a.id,car:a,description:a.description,description2:a.description2,price:a.price_human,year:a.year,engine:a.engine_size},null,8,["id","car","description","description2","price","year","engine"]))),256))])])])]),t("div",yt,[t("div",xt,[t("div",_t,[bt,wt,t("div",vt,[t("a",{href:e.route("cars.index"),class:"hover:bg-yellow-800 hover:text-white bg-yellow-600 text-black px-2 rounded text-bold text-2xl"}," Browse latest collection ",8,kt)]),St])])]),T(Ne),t("footer",Et,[t("div",Tt,[t("div",null,[$t,t("ul",Lt,[t("li",Ct,[t("a",{href:e.route("home")},"Home",8,Pt)]),t("li",jt,[t("a",{href:e.route("cars.index")},"Cars",8,Ft)]),t("li",Mt,[t("a",{href:e.route("sell-your-car.index")},"Sell Your Car",8,Dt)]),t("li",Nt,[t("a",{href:e.route("about.index")},"About",8,At)]),t("li",Bt,[t("a",{href:e.route("testimonials.index")},"Testimonials",8,It)]),t("li",Ot,[t("a",{href:e.route("financing.index")},"Financing",8,Rt)]),t("li",Ut,[t("a",{href:e.route("appointments.create")},"Appointment",8,Vt)])])]),qt]),zt])])],64))}};export{Zt as default};
