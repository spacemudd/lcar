import{_ as c}from"./AppLayout-DeqkEeq-.js";import p from"./DeleteUserForm-BqP1mAOC.js";import l from"./LogoutOtherBrowserSessionsForm-ChEXSLac.js";import{S as s}from"./SectionBorder-MlbmB5UJ.js";import f from"./TwoFactorAuthenticationForm-BGXOklp3.js";import u from"./UpdatePasswordForm-B048JIvR.js";import _ from"./UpdateProfileInformationForm-4fu9ZLyk.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-CxjNrI_b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-DwtjY_0b.js";import"./SectionTitle-DlB2H_rs.js";import"./DangerButton-roKztUUi.js";import"./TextInput-BfnecD-w.js";import"./SecondaryButton-cy5H3ky0.js";import"./ActionMessage-DYDuszUR.js";import"./PrimaryButton-_QlTLCPe.js";import"./InputLabel-BBQFNhN_.js";import"./FormSection-B6a_BTtc.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};