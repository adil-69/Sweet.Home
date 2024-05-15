import{v,u as y}from"./links.BdfvOpfI.js";import{_ as S}from"./MiIntro.BjnsHTPt.js";import{S as k}from"./External.Bfg4674G.js";import{x as p,c as r,a as n,C as h,H as d,F as a,D as o,t as e,d as l,l as _,m,o as i}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as M}from"./_plugin-vue_export-helper.BN1snXvA.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.pkmhnyB1.js";import"./Card.CacAhFkZ.js";import"./Tooltip.Jp05nfCy.js";import"./Caret.iRBf3wcH.js";import"./index.BQgiQQKQ.js";import"./Slide.CRIn0kdn.js";import"./LogoGear.BF23BIEd.js";import"./em.2x6etyqr.js";const x={setup(){return{pluginsStore:v(),rootStore:y()}},components:{CoreMiIntro:S,SvgExternal:k},data(){return{installingPlugin:!1,justInstalled:!1,strings:{miLink:this.$t.sprintf("<strong>%1$s</strong>",this.$t.__("Click here",this.$td)),installMi:this.$t.sprintf(this.$t.__("Install %1$s",this.$td),"MonsterInsights"),activateMi:this.$t.sprintf(this.$t.__("Activate %1$s",this.$td),"MonsterInsights"),activateEm:this.$t.sprintf(this.$t.__("Activate %1$s",this.$td),"ExactMetrics"),miInstalled:this.$t.sprintf(this.$t.__("%1$s is Installed & Active",this.$td),"MonsterInsights"),emInstalled:this.$t.sprintf(this.$t.__("%1$s is Installed & Active",this.$td),"ExactMetrics"),setupGA:this.$t.__("Launch Setup Wizard",this.$td),emInstallH:this.$t.sprintf(this.$t.__("Activate %1$s",this.$td),"ExactMetrics"),emInstallP:this.$t.sprintf(this.$t.__("%1$s shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.",this.$td),"ExactMetrics"),miemInstallH:this.$t.__("Install",this.$td),miInstallH:this.$t.sprintf(this.$t.__("Activate %1$s",this.$td),"MonsterInsights"),miInstallP:this.$t.sprintf(this.$t.__("%1$s shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.",this.$td),"MonsterInsights"),emWizardH:this.$t.sprintf(this.$t.__("Setup %1$s",this.$td),"ExactMetrics"),miWizardH:this.$t.sprintf(this.$t.__("Setup %1$s",this.$td),"MonsterInsights"),emWizardP:this.$t.sprintf(this.$t.__("%1$s has an intuitive setup wizard to guide you through the setup process.",this.$td),"ExactMetrics"),miWizardP:this.$t.sprintf(this.$t.__("%1$s has an intuitive setup wizard to guide you through the setup process.",this.$td),"MonsterInsights")}}},computed:{gaActivated(){return this.pluginsStore.plugins.miLite.activated||this.pluginsStore.plugins.emLite.activated||this.pluginsStore.plugins.miPro.activated||this.pluginsStore.plugins.emPro.activated},gaInstalled(){return this.pluginsStore.plugins.miLite.installed||this.pluginsStore.plugins.emLite.installed||this.pluginsStore.plugins.miPro.installed||this.pluginsStore.plugins.emPro.installed},miOnboardingUrl(){return this.prefersEm?`${this.rootStore.aioseo.urls.home}/wp-admin/admin.php?page=exactmetrics-onboarding`:`${this.rootStore.aioseo.urls.home}/wp-admin/admin.php?page=monsterinsights-onboarding`},prefersEm(){return(this.pluginsStore.plugins.emLite.installed||this.pluginsStore.plugins.emPro.installed)&&!this.pluginsStore.plugins.miLite.installed&&!this.pluginsStore.plugins.miPro.installed}},methods:{installMi(){this.installingPlugin=!0,this.pluginsStore.installPlugins([{plugin:this.prefersEm?"emLite":"miLite",type:"plugin"}]).then(()=>{this.installingPlugin=!1,this.justInstalled=!0,this.pluginsStore.plugins.miLite.activated=!0}).catch(g=>{console.error(g)})}}},E={class:"aioseo-analytics"},P={id:"aioseo-analytics",class:"aioseo-wrap aioseo-plugin-landing"},A=n("div",{class:"step-count"},[n("span",{class:"step-count__num"},"1")],-1),z={class:"content"},b={class:"step-title"},L={key:0},$={key:1},j={key:2},w={key:3},H={key:4},C=n("div",{class:"step-count"},[n("span",{class:"step-count__num"},"2")],-1),W={class:"content"},B={class:"step-title"},N={class:"step-body"},V={class:"step-title"},U={class:"step-body"};function D(g,F,G,c,t,s){const f=p("core-mi-intro"),I=p("svg-external"),u=p("base-button");return i(),r("div",E,[n("div",P,[h(f,{"prefers-em":s.prefersEm},null,8,["prefers-em"]),n("section",{class:d(t.justInstalled||s.gaActivated?"aioseo-card step step--completed":"aioseo-card step step--current")},[A,n("div",z,[n("h2",b,[s.gaInstalled?l("",!0):(i(),r(a,{key:0},[o(e(t.strings.miemInstallH)+" & ",1)],64)),s.prefersEm?(i(),r(a,{key:1},[o(e(t.strings.emInstallH),1)],64)):(i(),r(a,{key:2},[o(e(t.strings.miInstallH),1)],64))]),n("p",null,[s.prefersEm?(i(),r(a,{key:0},[o(e(t.strings.emInstallP),1)],64)):(i(),r(a,{key:1},[o(e(t.strings.miInstallP),1)],64))]),c.pluginsStore.plugins.miLite.canInstall?l("",!0):(i(),_(u,{key:0,type:"blue",size:"medium",tag:"a",target:"_blank",href:c.pluginsStore.plugins.miLite.wpLink},{default:m(()=>[h(I),o(" "+e(t.strings.installMi),1)]),_:1},8,["href"])),c.pluginsStore.plugins.miLite.canInstall?(i(),_(u,{key:1,loading:t.installingPlugin,type:t.justInstalled||s.gaActivated?"disabled":"blue",size:"medium",onClick:s.installMi},{default:m(()=>[!t.justInstalled&&!s.gaInstalled?(i(),r("span",L,e(t.strings.installMi),1)):l("",!0),(t.justInstalled||s.gaActivated)&&!s.prefersEm?(i(),r("span",$,e(t.strings.miInstalled),1)):l("",!0),(t.justInstalled||s.gaActivated)&&s.prefersEm?(i(),r("span",j,e(t.strings.emInstalled),1)):l("",!0),!t.justInstalled&&s.gaInstalled&&!s.gaActivated&&!s.prefersEm?(i(),r("span",w,e(t.strings.activateMi),1)):l("",!0),!t.justInstalled&&s.gaInstalled&&!s.gaActivated&&s.prefersEm?(i(),r("span",H,e(t.strings.activateEm),1)):l("",!0)]),_:1},8,["loading","type","onClick"])):l("",!0)])],2),n("section",{class:d(t.justInstalled||s.gaActivated?"aioseo-card step step--current":"aioseo-card step step--pending")},[C,n("div",W,[s.prefersEm?(i(),r(a,{key:0},[n("h2",B,e(t.strings.emWizardH),1),n("p",N,e(t.strings.emWizardP),1)],64)):(i(),r(a,{key:1},[n("h2",V,e(t.strings.miWizardH),1),n("p",U,e(t.strings.miWizardP),1)],64)),h(u,{disabled:!t.justInstalled&&!s.gaActivated,type:"blue",size:"medium",tag:"a",href:s.miOnboardingUrl},{default:m(()=>[o(e(t.strings.setupGA),1)]),_:1},8,["disabled","href"])])],2)])])}const nt=M(x,[["render",D]]);export{nt as default};
