import{_ as c}from"./AppLayout-Bx-PmbBQ.js";import p from"./DeleteUserForm-CNsyIzWe.js";import l from"./LogoutOtherBrowserSessionsForm-BX8kuGcf.js";import{S as s}from"./SectionBorder-CFICUgJ9.js";import f from"./TwoFactorAuthenticationForm-CZfs1-pQ.js";import u from"./UpdatePasswordForm-B-XkzNrA.js";import _ from"./UpdateProfileInformationForm-BcaJ7Tk0.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-Wq1jL2PW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-CITU0D3L.js";import"./SectionTitle--F0NEOco.js";import"./DangerButton-BUvREhIp.js";import"./TextInput-BJ7can8V.js";import"./SecondaryButton-BfihlzKZ.js";import"./ActionMessage-Cg5kFhOH.js";import"./PrimaryButton-DmP6nKsi.js";import"./InputLabel-7tzYmCrI.js";import"./FormSection-Lg4LogCD.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};