(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},n={app:0},i=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e97fb03c"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,a){o=n[e]=[t,a]}));t.push(o[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(p);var o=n[e];if(0!==o){if(o){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}n[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var m=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"033f":function(e,t,o){},"0878":function(e,t,o){e.exports=o.p+"img/home.ca4591e3.png"},"0d17":function(e,t,o){e.exports=o.p+"img/background_custom.6e52668b.png"},"11c3":function(e,t,o){e.exports=o.p+"img/panel.38a515fc.png"},"14d0":function(e,t,o){},"1afe":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"banner-home d-flex align-items-center",style:{backgroundImage:"url("+o("8451")+")"}},[a("div",{staticClass:"container"},[a("div",[a("div",{staticClass:"bor-top"}),a("div",{staticClass:"box-banner d-flex align-items-center justify-content-between"},[a("img",{attrs:{src:o("50dc"),alt:"code"}}),a("h2",[a("vue-typer",{attrs:{text:["front-end","back-end"],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":3e3,"erase-delay":250,"erase-style":"clear","erase-on-complete":!1,"caret-animation":"blink"}})],1)]),a("div",{staticClass:"bor-bottom"})])])])},n=[],i={name:"BannerHome"},r=i,s=(o("bf80"),o("2877")),c=Object(s["a"])(r,a,n,!1,null,null,null);t["a"]=c.exports},"229a":function(e,t,o){e.exports=o.p+"img/certificate.3031b539.png"},2612:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sec-contact",style:{backgroundImage:"url("+o("0d17")+")"},attrs:{id:"contact"}},[a("b-container",[a("h3",{staticClass:"text-center"},[e._v("Contacto")]),a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{md:"6"}},[a("div",{staticClass:"datas-contact"},[a("h4",{staticClass:"main-title"},[e._v("Datos de Contacto")]),a("p",[e._v("No dude en buscar soluciones a sus ideas de proyectos, contáctate conmigo y te respondere lo mas antes posible.")]),a("ul",{staticClass:"list-icon"},[a("li",[a("b-icon",{attrs:{icon:"phone"}}),e._v(" Celular:"),a("br"),a("a",{attrs:{href:"tel:+59161920576"}},[e._v("+591 61920576")])],1),a("li",[a("b-icon",{attrs:{icon:"envelope"}}),e._v(" Email:"),a("br"),a("a",{attrs:{href:"mailto:nos18de@gmail.com"}},[e._v("nos18de@gmail.com")])],1)])])]),a("b-col",{attrs:{md:"6"}},[e.show?a("b-form",{staticClass:"c-form",on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)},reset:e.onReset}},[a("b-form-group",{attrs:{"label-for":"name"}},[a("b-form-input",{attrs:{id:"user_name",name:"user_name",required:"",placeholder:"Nombre *"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("b-form-group",{attrs:{"label-for":"email"}},[a("b-form-input",{attrs:{id:"user_email",name:"user_email",type:"email",required:"",placeholder:"Email *"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{"label-for":"affair"}},[a("b-form-input",{attrs:{id:"affair",name:"affair",required:"",placeholder:"Asunto *"},model:{value:e.form.affair,callback:function(t){e.$set(e.form,"affair",t)},expression:"form.affair"}})],1),a("b-form-group",{attrs:{"label-for":"message"}},[a("b-form-textarea",{attrs:{id:"message",name:"message",placeholder:"Mensaje... *",rows:"3","max-rows":"6"},model:{value:e.form.msg,callback:function(t){e.$set(e.form,"msg",t)},expression:"form.msg"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Enviar mensaje")]),a("b-button",{attrs:{type:"reset",variant:"secundary"}},[e._v("Reestablecer datos")])],1):e._e()],1)],1)],1)],1)},n=[],i=(o("b0c0"),o("0f91")),r=o.n(i),s={name:"Contact",data:function(){return{form:{name:"",email:"",affair:"",msg:""},show:!0}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.name="",this.form.email="",this.form.affair="",this.form.msg="",this.show=!1,this.$nextTick((function(){t.show=!0}))},sendEmail:function(e){var t=this;r.a.sendForm("service_gmail","template_TAO5f4QE",e.target,"user_iW54EEB0C2K2tXK9iXh3o").then((function(o){console.log("SUCCESS!",o.status,o.text),t.form.name="",t.form.email="",t.form.affair="",t.form.msg="",t.show=!1,t.$nextTick((function(){t.show=!0})),t.$notify({group:"contact",type:"success",title:"ENVIADO!",text:"Mensaje enviado con éxito"}),e.preventDefault()}),(function(e){console.log("FAILED...",e),t.$notify({group:"contact",type:"error",title:"ERROR",text:"Error al enviar el mensaje"})}))}}},c=s,l=(o("31f4"),o("2877")),p=Object(l["a"])(c,a,n,!1,null,null,null);t["a"]=p.exports},2659:function(e,t,o){},"31f4":function(e,t,o){"use strict";var a=o("df59"),n=o.n(a);n.a},"36f2":function(e,t,o){e.exports=o.p+"img/caminovalley.1a89d2ac.png"},"3f9c":function(e,t,o){var a={"./caminovalley/caminovalley.png":"36f2","./caminovalley/caminovalley2.png":"e724","./caminovalley/caminovalley_mobile.png":"b4f8","./fivo/fivo.png":"7b85","./fivo/fivo_mobile.png":"f7d1","./frases/home.png":"75fa","./frases/image1.png":"8bb6","./frases/image2.png":"b84b","./furcios/home.png":"0878","./furcios/image1.png":"6cf6","./furcios/image2.png":"49aa","./mysite/cv.png":"c6c1","./mysite/cv2.png":"572b","./nexos/certificate.png":"229a","./nexos/contact.png":"666e","./nexos/homepage-nexos.png":"f02b","./ondeliver/home.png":"ea6d","./ondeliver/image1.png":"dfc9","./ondeliver/image2.png":"de97","./sisbegn/home.png":"5a49","./sisbegn/panel.png":"11c3","./tiendika/home.png":"b854","./tiendika/image1.png":"852d","./tiendika/image2.png":"bda3","./vikinger/vikinger.png":"d17f"};function n(e){var t=i(e);return o(t)}function i(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="3f9c"},"49aa":function(e,t,o){e.exports=o.p+"img/image2.454ec5aa.png"},"4b0f":function(e,t,o){"use strict";var a=o("14d0"),n=o.n(a);n.a},5053:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sec-portfolio",attrs:{id:"portfolio"}},[a("b-container",{staticClass:"bv-example-row"},[a("h3",{staticClass:"text-center mb-5"},[a("span",[e._v("Mi")]),e._v(" portafolio")]),a("b-row",{staticClass:"justify-content-center"},e._l(e.portfolio,(function(t,n){return a("b-col",{key:n,staticClass:"mb-5",attrs:{sm:"6",md:"4"}},[a("a",{staticClass:"website-pack-preview",attrs:{href:"javascript:;",variant:"primary"},on:{click:function(t){return e.showModal(n)}}},[a("span",[a("img",{attrs:{src:o("3f9c")("./"+t.imgFront)}})]),a("span",[a("img",{attrs:{src:o("3f9c")("./"+t.imgLeft)}})]),a("span",[a("img",{attrs:{src:o("3f9c")("./"+t.imgRight)}})])])])})),1)],1),a("b-modal",{ref:"my-modal",attrs:{"hide-footer":"",size:"lg",title:e.modalPortfolio.Mtitle}},[a("div",{staticClass:"c-modal"},[a("b-row",[a("b-col",{attrs:{sm:"6",lg:"8"}},[a("img",{attrs:{src:e.modalPortfolio.MimgFront}})]),a("b-col",{attrs:{sm:"6",lg:"4"}},[a("h6",[e._v("Acerca del Proyecto")]),a("p",[e._v(e._s(e.modalPortfolio.Mdescription))]),a("h6",[e._v("Sitio")]),a("a",{attrs:{href:e.modalPortfolio.MlinkSite,target:"blank"}},[e._v("Visitar sitio")]),a("h6",[e._v("Herramientas utilizadas")]),a("ul",e._l(e.modalPortfolio.Mtools,(function(t,o){return a("li",{key:o},[e._v(" "+e._s(t)+" ")])})),0)])],1)],1)])],1)},n=[],i=(o("a4d3"),o("e01a"),{name:"portfolio",data:function(){return{portfolio:[{title:"Furcios Drink",imgFront:"furcios/home.png",imgLeft:"furcios/image1.png",imgRight:"furcios/image2.png",description:"Como freelancer para la empresa StartWeb trabaje en un sistema delivery para un negocio (Furcios Drink), el cual consta de dos apps moviles y una panel de administración.",linkSite:"http://furciosdrinkmarket.com/",tools:["HTML5","Javascript","VueJs","Vuetify","Quasar","Cordova","PHP","mySQL","Laravel","Api-Rest","Google-maps","pusher"]},{title:"Ondeliver",imgFront:"ondeliver/home.png",imgLeft:"ondeliver/image1.png",imgRight:"ondeliver/image2.png",description:"Como freelancer para la empresa StartWeb trabaje en un sistema delivery para varios negocios (Ondeliver), el cual consta de dos apps moviles y una panel de administración.",linkSite:"https://app.ondeliver.com.bo/",tools:["HTML5","Javascript","VueJs","Vuetify","Quasar","Cordova","PHP","mySQL","Laravel","Api-Rest","Google-maps","socket.io"]},{title:"Tiendika",imgFront:"tiendika/home.png",imgLeft:"tiendika/image1.png",imgRight:"tiendika/image2.png",description:"Como freelancer para la empresa StartWeb trabaje en el sitio Tiendika, el cual es una plataforma para que los negocios puedan hacer conocer sus productos.",linkSite:"https://tiendika.com/",tools:["HTML5","Javascript","VueJs","Vuetify","PHP","mySQL","Laravel"]},{title:"frases de famosos - famous phrases",imgFront:"frases/image1.png",imgLeft:"frases/home.png",imgRight:"frases/image2.png",description:"Independientemente desarrolle la aplicación disponible en playStore de Frases Famosas.",linkSite:"https://play.google.com/store/apps/details?id=frases.famosos.app",tools:["HTML5","Javascript","VueJs","Quasar","Cordova","PHP","mySQL","Laravel","ApiRest"]},{title:"Sisbegn",imgFront:"sisbegn/home.png",imgLeft:"sisbegn/panel.png",imgRight:"sisbegn/panel.png",description:"Se trabajo en el sistema para la matriculación de estudiantes",linkSite:"https://sisbegn.herokuapp.com/login",tools:["HTML5","Javascript","jQuery","PHP","mySQL","Laravel"]},{title:"nexos LMS",imgFront:"nexos/homepage-nexos.png",imgLeft:"nexos/contact.png",imgRight:"nexos/certificate.png",description:"Sistemas de gestión de aprendizaje para la empresa NEXOS S.R.L. que apoya al sector de la educación a dicha empresa",linkSite:"#",tools:["HTML5","SASS","Javascript","jQuery","PHP","mySQL","Laravel"]},{title:"vikinger",imgFront:"vikinger/vikinger.png",imgLeft:"vikinger/vikinger.png",imgRight:"vikinger/vikinger.png",description:"A partir de una imagen se trabajo en sitio de prueba front-end",linkSite:"https://94tomas.github.io/vikinger/",tools:["HTML5","CSS3","jQuery"]},{title:"fivo",imgFront:"fivo/fivo.png",imgLeft:"fivo/fivo_mobile.png",imgRight:"fivo/fivo_mobile.png",description:"Sitio desarrollado en Wordpress en la empresa que trabaje SmartinCode de la ciudad de Cochabamba",linkSite:"http://fivo.io",tools:["HTML5","CSS3","Javascript","jQuery","PSD to WP","Wordpress"]},{title:"caminovalley",imgFront:"caminovalley/caminovalley.png",imgLeft:"caminovalley/caminovalley_mobile.png",imgRight:"caminovalley/caminovalley2.png",description:"Sitio desarrollado en Wordpress en la empresa que trabaje SmartinCode de la ciudad de Cochabamba",linkSite:"https://www.caminoasiliconvalley.com/",tools:["HTML5","CSS3","Javascript","jQuery","PSD to WP","Wordpress"]}],modalPortfolio:{Mtitle:"",MimgFront:"",Mdescription:"",MlinkSite:"",Mtools:[]}}},methods:{showModal:function(e){this.modalPortfolio.Mtitle=this.portfolio[e].title,this.modalPortfolio.MimgFront=o("3f9c")("./"+this.portfolio[e].imgFront),this.modalPortfolio.Mdescription=this.portfolio[e].description,this.modalPortfolio.MlinkSite=this.portfolio[e].linkSite,this.modalPortfolio.Mtools=this.portfolio[e].tools,this.$refs["my-modal"].show()}}}),r=i,s=(o("766d"),o("2877")),c=Object(s["a"])(r,a,n,!1,null,null,null);t["a"]=c.exports},"50dc":function(e,t,o){e.exports=o.p+"img/code.97a79f74.png"},"547b":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Navigation"),o("BannerHome"),o("Intro"),o("About"),o("Portfolio"),o("Contact"),o("Footer"),o("notifications",{staticClass:"c-notification",attrs:{group:"contact",position:"bottom left"}})],1)},i=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"c-nav"},[o("b-navbar",{staticClass:"p-0",attrs:{toggleable:"lg",type:"dark"}},[o("b-container",[o("b-navbar-brand",{staticClass:"p-0",attrs:{href:"#"}}),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},[o("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"javascript:;"}},[e._v("sobre mi")]),o("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{href:"javascript:;"}},[e._v("portafolio")]),o("b-nav-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"javascript:;"}},[e._v("contacto")])],1)],1)],1)],1)],1)},s=[],c={name:"Navigation"},l=c,p=(o("cbe1"),o("2877")),m=Object(p["a"])(l,r,s,!1,null,null,null),u=m.exports,f=o("1afe"),d=o("c214"),g=o("7a59"),v=o("5053"),b=o("2612"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer",style:{backgroundImage:"url("+o("c4b7")+")"}},[a("b-container",[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{sm:"8",md:"6"}},[a("small",[e._v("© Copyright 2020. Todos los derechos reservados - Por Edson")])]),a("b-col",{attrs:{sm:"4",md:"6"}},[a("ul",{staticClass:"list-circle text-right"},[a("li",[a("a",{attrs:{href:"https://www.facebook.com/edson.tomas.22",target:"blank",title:"Facebook"}},[a("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{href:"https://twitter.com/EdsonTomas1994",target:"blank",title:"Twitter"}},[a("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/edsondev/",target:"blank",title:"Linkedin"}},[a("i",{staticClass:"fa fa-linkedin"})])]),a("li",[a("a",{attrs:{href:"https://github.com/94tomas",target:"blank",title:"Github"}},[a("i",{staticClass:"fa fa-github"})])])])])],1)],1)],1)},y=[],_={name:"Footer"},x=_,k=(o("6948"),Object(p["a"])(x,h,y,!1,null,null,null)),S=k.exports,C={name:"Homepage",components:{Navigation:u,BannerHome:f["a"],Intro:d["a"],About:g["a"],Portfolio:v["a"],Contact:b["a"],Footer:S}},w=C,j=(o("5c0b"),Object(p["a"])(w,n,i,!1,null,null,null)),P=j.exports,L=o("9483");Object(L["a"])("".concat("/portfolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7");var M=o("8c4f");a["default"].use(M["a"]);var E=[{path:"/",name:"Home",component:function(){return o.e("about").then(o.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],O=new M["a"]({mode:"history",routes:E}),T=O,F=o("2f62");a["default"].use(F["a"]);var H=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=o("5f5b"),R=o("b1e0"),$=(o("f9e3"),o("2dd8"),o("f13c")),J=o.n($),Q=o("ee98"),N=o.n(Q),D=o("e956"),W=o.n(D);a["default"].use(A["a"]),a["default"].use(R["a"]),a["default"].use(J.a),a["default"].use(J.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),a["default"].use(N.a),a["default"].use(W.a),a["default"].config.productionTip=!1,new a["default"]({router:T,store:H,render:function(e){return e(P)}}).$mount("#app")},"572b":function(e,t,o){e.exports=o.p+"img/cv2.644e8437.png"},"5a49":function(e,t,o){e.exports=o.p+"img/home.8ee064ce.png"},"5c0b":function(e,t,o){"use strict";var a=o("9c0c"),n=o.n(a);n.a},"666e":function(e,t,o){e.exports=o.p+"img/contact.e87b5f4c.png"},6948:function(e,t,o){"use strict";var a=o("547b"),n=o.n(a);n.a},"6cf6":function(e,t,o){e.exports=o.p+"img/image1.8380b212.png"},"75fa":function(e,t,o){e.exports=o.p+"img/home.2e1d5c17.png"},"766d":function(e,t,o){"use strict";var a=o("7913"),n=o.n(a);n.a},7913:function(e,t,o){},7946:function(e,t,o){},"7a59":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"about"}},[e._m(0),a("div",{staticClass:"sec-skills"},[a("b-container",[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{md:"6"}},[a("p",[e._v("Sólidos conocimientos en "),a("strong",[e._v("HTML5, CSS3, SCSS")]),e._v(" junto a los lenguajes de programación "),a("strong",[e._v("PHP, SQL, Python, Javascript, dart.")]),e._v(" Trabajando con los siguientes tecnologias: "),a("strong",[e._v("Laravel, Lumen, Flutter, VueJS, Quasar, Vuetify, JQuery, Bootstrap, Materialize, wordpress, socket.io, google-maps, vps.")]),e._v(" con amplia experiencia en el desarrollo de "),a("strong",[e._v("Api-Rest")])]),a("p",[e._v("Experiencia con servidores "),a("strong",[e._v("google cloud, aws, heroku, digital ocean, site group, contabo")]),e._v(".")]),a("p",[e._v("Con experiencia en CMS "),a("strong",[e._v("Wordpress")]),e._v(" creando plantillas a medida o plugin personalizados, conociminetos en "),a("strong",[e._v("Child Themes, PSD a Wp, Sketch a Wp")])]),a("p",[e._v("Manejo de "),a("strong",[e._v("Photoshop, Sketch e Invision Studio.")])])]),a("b-col",{attrs:{md:"6"}},[a("img",{attrs:{src:o("87da")}})])],1)],1)],1)])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"sec-about"},[o("div",{staticClass:"container",attrs:{role:"tablist",title:"Edson Tomas Arando Puma"}},[o("p",{staticClass:"text-center"},[e._v("¡Hola! Mi nombre es Edson T. Arando Puma, desarrollador freelancer con conocimientos en frontend y backend especializado en programación web y móvil (desarrollo a medida).")]),o("p",{staticClass:"text-center mb-0"},[e._v("Te asesoramos sobre cualquier idea y te ayudaremos a encontrar un resultado justo para la solución de tus proyectos.")])])])}],i={name:"SecAbout"},r=i,s=(o("b49a"),o("2877")),c=Object(s["a"])(r,a,n,!1,null,null,null);t["a"]=c.exports},"7b85":function(e,t,o){e.exports=o.p+"img/fivo.b35955d1.png"},8451:function(e,t,o){e.exports=o.p+"img/code2.c1841c59.png"},"852d":function(e,t,o){e.exports=o.p+"img/image1.a3e2b29d.png"},"87da":function(e,t,o){e.exports=o.p+"img/laptop-nexos.b62df69c.png"},"8bb6":function(e,t,o){e.exports=o.p+"img/image1.36f7d69f.png"},"9c0c":function(e,t,o){},b49a:function(e,t,o){"use strict";var a=o("7946"),n=o.n(a);n.a},b4f8:function(e,t,o){e.exports=o.p+"img/caminovalley_mobile.46ec192b.png"},b84b:function(e,t,o){e.exports=o.p+"img/image2.9880d279.png"},b854:function(e,t,o){e.exports=o.p+"img/home.26908716.png"},bda3:function(e,t,o){e.exports=o.p+"img/image2.0a0a4cd3.png"},bf80:function(e,t,o){"use strict";var a=o("033f"),n=o.n(a);n.a},c214:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"sec-intro text-center container"},[e._m(0),o("p",[e._v("¡Hacemos tus proyecto realidad!")]),o("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"btn btn-secundary",attrs:{href:"javascript:;",role:"button"}},[e._v("Solicita informacion")])])},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",[e._v("programador"),o("span",[e._v(" web y móvil")])])}],i={name:"Intro"},r=i,s=(o("4b0f"),o("2877")),c=Object(s["a"])(r,a,n,!1,null,null,null);t["a"]=c.exports},c4b7:function(e,t,o){e.exports=o.p+"img/cool-background.c99ba0d1.png"},c6c1:function(e,t,o){e.exports=o.p+"img/cv.1552241c.png"},cbe1:function(e,t,o){"use strict";var a=o("2659"),n=o.n(a);n.a},d17f:function(e,t,o){e.exports=o.p+"img/vikinger.07d98ba6.png"},de97:function(e,t,o){e.exports=o.p+"img/image2.1a385086.png"},df59:function(e,t,o){},dfc9:function(e,t,o){e.exports=o.p+"img/image1.4791284b.png"},e724:function(e,t,o){e.exports=o.p+"img/caminovalley2.c964b38f.png"},ea6d:function(e,t,o){e.exports=o.p+"img/home.e76e7929.png"},f02b:function(e,t,o){e.exports=o.p+"img/homepage-nexos.6c8ec4bb.png"},f7d1:function(e,t,o){e.exports=o.p+"img/fivo_mobile.68930992.png"}});
//# sourceMappingURL=app.cc74eda9.js.map