(function(){var e={9398:function(e,t,n){"use strict";var o,r,a=n(6369),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.isShowLayout?t("div",{class:e.isShowSide?"show-side":""},[t("MySider"),t("div",{staticClass:"main"},[t("MyHeader"),t("div",{staticClass:"main-container"},[t("RouterView")],1)],1)],1):t("div",[t("RouterView")],1)])},s=[],c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"myside-box"},[t("div",{staticClass:"logo"},[e._v(" LOGO ")]),t("SideBar")],1)},l=[],u=function(){var e=this,t=e._self._c;return t("div",[t("ElMenu",{attrs:{"default-active":e.activeMenu,"background-color":e.variables.menuBg,"text-color":e.variables.menuText,"unique-opened":!1,"active-text-color":e.variables.menuActiveText,"collapse-transition":!1,mode:"vertical"}},e._l(e.permission_routes,(function(e){return t("SidebarItem",{key:e.path,attrs:{item:e,"base-path":e.path}})})),1)],1)},d=[],m=n(3822),p=function(){var e=this,t=e._self._c;return e.item.hidden?e._e():t("div",{staticClass:"menu-wrapper"},[!e.hasOneShowingChild(e.item.children,e.item)||e.onlyOneChild.children&&!e.onlyOneChild.noShowingChildren||e.item.alwaysShow?t("ElSubmenu",{ref:"subMenu",attrs:{index:e.resolvePath(e.item.path),"popper-append-to-body":""},scopedSlots:e._u([{key:"title",fn:function(){return[e.item.meta?t("Item",{attrs:{icon:e.item.meta&&e.item.meta.icon,title:e.item.meta.title}}):e._e()]},proxy:!0}],null,!1,3231430040)},e._l(e.item.children,(function(n){return t("SidebarItem",{key:n.path,staticClass:"nest-menu",attrs:{"is-nest":!0,item:n,"base-path":e.resolvePath(n.path)}})})),1):[e.onlyOneChild.meta?t("RouterLink",{attrs:{to:e.resolvePath(e.onlyOneChild.path)}},[t("ElMenuItem",{class:{"submenu-title-noDropdown":!e.isNest},attrs:{index:e.resolvePath(e.onlyOneChild.path)}},[t("Item",{attrs:{icon:e.onlyOneChild.meta.icon||e.item.meta&&e.item.meta.icon,title:e.onlyOneChild.meta.title}})],1)],1):e._e()]],2)},h=[],f=n(6554),g=n.n(f),v={name:"MenuItem",functional:!0,props:{icon:{type:String,default:""},title:{type:String,default:""}},render(e,t){const{icon:n,title:o}=t.props,r=[];return n&&r.push(e("svg-icon",{attrs:{"icon-class":n}})),o&&r.push(e("span",{slot:"title"},[o])),r}},b=v,_=n(1001),y=(0,_.Z)(b,o,r,!1,null,null,null),w=y.exports,S={name:"SidebarItem",components:{Item:w},props:{item:{type:Object,required:!0},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},data(){return this.onlyOneChild=null,{}},methods:{hasOneShowingChild(e=[],t){const n=e.filter((e=>!e.hidden&&(this.onlyOneChild=e,!0)));return 1===n.length||0===n.length&&(this.onlyOneChild={...t,path:"",noShowingChildren:!0},!0)},resolvePath(e){return g().resolve(this.basePath,e)}}},k=S,x=(0,_.Z)(k,p,h,!1,null,null,null),E=x.exports,C={name:"sidBar",components:{SidebarItem:E},data(){return{}},props:{},computed:{...(0,m.Se)(["permission_routes"]),activeMenu(){const e=this.$route,{meta:t,path:n}=e;return t.activeMenu?t.activeMenu:n},variables(){return{menuText:"#bfcbd9",menuActiveText:"teal",menuBg:"#304156"}}},methods:{},watch:{},created(){},mounted(){},destroyed(){}},O=C,D=(0,_.Z)(O,u,d,!1,null,"6d5b8393",null),T=D.exports,A={name:"mySider",components:{SideBar:T},data(){return{}},props:{},computed:{},methods:{},watch:{},created(){},mounted(){},destroyed(){}},P=A,N=(0,_.Z)(P,c,l,!1,null,"668c9ad4",null),$=N.exports,I=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-box clearfix"},[t("div",{staticClass:"right-info"},[t("span",{staticClass:"default-img",style:{background:e.randomColor}}),t("div",{staticClass:"name"},[e._v(e._s(e.user.token))]),t("ElButton",{staticClass:"logout ml20 pointer",attrs:{type:"text"},on:{click:e.logout}},[e._v("退出")])],1)])},M=[],j=n(9061),B={name:"myHeader",components:{},data(){return{}},props:{},computed:{...(0,m.rn)(["user"])},methods:{logout(){localStorage.removeItem("token"),this.$router.push({path:"/"})}},watch:{},created(){this.randomColor=j.Z.randomColor()},mounted(){},destroyed(){}},U=B,R=(0,_.Z)(U,I,M,!1,null,"a9f057b8",null),L=R.exports,F={name:"app",components:{MySider:$,MyHeader:L},computed:{isShowLayout:function(){let e=!1;return this.$route.meta&&(e=!this.$route.meta.isHideLayout),e},...(0,m.Se)(["isShowSide"])},created(){this.$store.dispatch("user/login",{username:this.username||"admin"}).then((()=>{this.$router.push({path:this.$route.query.redirect||"/chart"})})).catch((e=>{clog(e)}))}},V=F,Z=(0,_.Z)(V,i,s,!1,null,"a6b4bab6",null),H=Z.exports,q=n(2631);a["default"].use(q.Z);const K=[{path:"/login",name:"login",component:()=>n.e(562).then(n.bind(n,8562)),hidden:!0,meta:{isHideLayout:!0}},{hidden:!0,path:"/",name:"home",component:()=>n.e(177).then(n.bind(n,8844)),meta:{isHideLayout:!0}}],G=[{name:"msg",path:"/msg",component:()=>n.e(300).then(n.bind(n,6798)),meta:{icon:"com",title:"自定义弹窗插件",roles:["admin","editor"]}},{name:"map",path:"/map",component:()=>n.e(842).then(n.bind(n,4865)),meta:{icon:"slot",title:"地图",roles:["admin","editor"]}},{name:"form",path:"/form",component:()=>n.e(993).then(n.bind(n,3370)),meta:{icon:"form",title:"自定义form",roles:["admin","editor"]}},{name:"fileUpload",path:"/fileUpload",component:()=>n.e(936).then(n.bind(n,7577))},{name:"chart",path:"/chart",component:()=>n.e(164).then(n.bind(n,1800)),meta:{icon:"chart",title:"图表",roles:["admin","editor"]}},{name:"table",path:"/table",component:()=>n.e(986).then(n.bind(n,7739)),meta:{icon:"table",title:"table封装",roles:["admin","editor"]}},{name:"control",path:"/control",component:()=>n.e(405).then(n.bind(n,6989)),meta:{icon:"permission",title:"权限控制",roles:["admin","editor"]}},{path:"/jestDemo",name:"jestDemo",component:()=>n.e(438).then(n.bind(n,9183)),meta:{title:"Jest测试",icon:"slot",roles:["admin"]}},{path:"/user",name:"user",component:()=>n.e(378).then(n.bind(n,711)),redirect:"/user/info",meta:{icon:"user",title:"用户中心",roles:["admin"]},children:[{path:"slotDemo",name:"slotDemo",component:()=>n.e(738).then(n.bind(n,4330)),meta:{title:" 插槽",icon:"slot",roles:["admin"]}},{path:"vuexDemo",name:"vuexDemo",component:()=>n.e(622).then(n.bind(n,4957)),meta:{title:"vuex",icon:"vuex",roles:["admin"]}}]},{path:"/banner",name:"banner",component:()=>n.e(392).then(n.bind(n,9903)),meta:{title:"banner",icon:"banner",roles:["admin"]}}];var J=new q.Z({base:"/",routes:K});const X={count:0,count2:localStorage.getItem("count")},Y={increment(e,t){e.count+=t||1},incrementSave(e,t){e.count2+=t||1,localStorage.setItem("count",e.count2)}},z={asyncIncrement({getters:e,commit:t},n){return new Promise(((e,o)=>{setTimeout((()=>{t("increment",n),e()}),1e3)}))},asyncIncrementSave({getters:e,commit:t},n){return new Promise(((e,o)=>{setTimeout((()=>{t("incrementSave",n),e()}),1e3)}))}};var Q={namespaced:!0,state:X,mutations:Y,actions:z};const W={token:localStorage.getItem("token"),roles:[]},ee={SET_TOKEN:(e,t)=>{e.token=t},SET_ROLES:(e,t)=>{e.roles=t}},te={login({commit:e},t){const{username:n}=t;return new Promise(((t,o)=>{a["default"].axios.post("/user/login",{username:n}).then((r=>{"admin"===r.username||"editor"===r.username?(e("SET_TOKEN",n),localStorage.setItem("token",n),t()):o("用户名密码错误")}))}))},getInfo({commit:e,state:t}){return new Promise((t=>{a["default"].axios.get("/user/info").then((n=>{const o=n.roles;e("SET_ROLES",o),t(o)}))}))}};var ne={namespaced:!0,state:W,mutations:ee,actions:te};const oe={isShowSide:!0},re={SET_SIDE:(e,t)=>{e.isShowSide=t}},ae={toggleSide({commit:e},t){e("SET_TOKEN",t)}};var ie={namespaced:!0,state:oe,mutations:re,actions:ae};n(6699);const se={routes:[],addRoutes:[]},ce={SET_ROUTES:(e,t)=>{e.addRoutes=t,e.routes=K.concat(t)}},le={async generateRoutes({commit:e},t){return new Promise((n=>{const o=ue(G,t);return e("SET_ROUTES",o),n(o),o}))}};function ue(e,t){const n=[];return e.forEach((e=>{const o={...e};de(t,o)&&(o.children&&(o.children=ue(o.children,t)),n.push(o))})),n}function de(e,t){return!t.meta||!t.meta.roles||e.some((e=>t.meta.roles.includes(e)))}var me={namespaced:!0,state:se,mutations:ce,actions:le};a["default"].use(m.ZP);var pe=new m.ZP.Store({modules:{count:Q,user:ne,permission:me,side:ie},getters:{roles:e=>e.user.roles,permission_routes:e=>e.permission.routes,isShowSide:e=>e.side.isShowSide}});class he{constructor(){this.callBacks={}}$on(e,t){this.callBacks[e]=this.callBacks[e]||[],this.callBacks[e].push(t)}$emit(e,t){this.callBacks[e]&&this.callBacks[e].forEach((e=>e(t)))}}var fe=n(5038);const ge=["/login","/"];J.beforeEach((async(e,t,n)=>{const o=localStorage.getItem("token");if(o)if("/login"===e.path||"/"===e.path)n({path:"/chart"});else{const t=pe.getters&&pe.getters.roles&&pe.getters.roles.length>0;if(t)n();else try{const t=await pe.dispatch("user/getInfo");clog("roles:",t);const o=await pe.dispatch("permission/generateRoutes",t);clog("accessRoutes",o),J.addRoutes(o),n({...e,replace:!0})}catch(r){await pe.dispatch("user/resetToken"),n(`login?redirect=${e.path}`),alert(r||"未知错误")}}else-1!==ge.indexOf(e.path)?n():n(`/login?redirect=${e.path}`)}));n(1703);const ve={inserted(e,t){const{value:n}=t,o=pe.getters&&pe.getters.roles;if(!(n&&n instanceof Array&&n.length>0))throw new Error('需要指定按钮要求角色数组，如v-permission=["admin"]');{const t=o.some((e=>n.includes(e)));t||e.parentNode&&e.parentNode.removeChild(e)}}};var be=ve,_e=function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-box"},[t("svg",e._g({class:e.svgClass,attrs:{"aria-hidden":"true"}},e.$listeners),[t("use",{attrs:{"xlink:href":e.iconName}})])])},ye=[],we={name:"SvgIcon",components:{},data(){return{}},props:{iconClass:{type:String,require:!0},className:{type:String,default:""}},computed:{iconName(){return`#icon-${this.iconClass}`},svgClass(){return this.className?"svg-icon"+this.className:"svg-icon"}},methods:{},watch:{},created(){},mounted(){},destroyed(){}},Se=we,ke=(0,_.Z)(Se,_e,ye,!1,null,"9072b086",null),xe=ke.exports;const Ee=n(7886);Ee.keys().map(Ee),a["default"].component("SvgIcon",xe);n(9307);var Ce=n(8499),Oe=n.n(Ce);a["default"].use(Oe());var De=n(5941);De.log("process.env.NODE_ENV","production"),n(9319),window.clog=()=>{},a["default"].prototype.$bus=new he,a["default"].prototype.$create=fe.U,a["default"].config.productionTip=!1,a["default"].directive("permission",be),new a["default"]({router:J,store:pe,render:e=>e(H)}).$mount("#app")},9319:function(e,t,n){"use strict";n.r(t);var o=n(7634),r=n.n(o),a={loginAdmin:{header:{code:0,msg:""},body:{username:"admin",roles:["admin"]}},loginEdit:{header:{code:0,msg:""},body:{username:"editor",roles:["editor"]}},userAdmin:{header:{code:0,msg:""},body:{username:"admin",roles:["admin"]}}},i={chart:{header:{code:0,msg:""},body:{pie:[{name:"2020-01-01",value:"20"},{name:"2020-01-02",value:"10"},{name:"2020-01-03",value:"30"},{name:"2020-01-04",value:"20"},{name:"2020-01-05",value:"10"},{name:"2020-01-06",value:"30"},{name:"2020-01-07",value:"20"},{name:"2020-01-08",value:"10"},{name:"2020-01-09",value:"30"},{name:"2020-01-10",value:"20"}],line:[{date:"2020-01-01",new:20,current:230,all:370},{date:"2020-01-02",new:12,current:240,all:400},{date:"2020-01-03",new:12,current:240,all:400},{date:"2020-01-04",new:20,current:230,all:370},{date:"2020-01-05",new:12,current:240,all:400},{date:"2020-01-06",new:12,current:240,all:400},{date:"2020-01-07",new:20,current:130,all:370},{date:"2020-01-08",new:12,current:240,all:400},{date:"2020-01-09",new:12,current:240,all:400}],scatter:[{id:1,img:"https://www.baidu.com/favicon.ico",xData:19,yData:10},{id:2,img:"https://www.baidu.com/favicon.ico",xData:6,yData:10},{id:3,img:"https://www.baidu.com/favicon.ico",xData:16,yData:20},{id:4,img:"https://www.baidu.com/favicon.ico",xData:36,yData:30}]}}},s={table:{header:{code:0,msg:""},body:{total:31,list:[{id:1,date:"2016-05-02",name:"王小虎",status:"online",address:"上海市普陀区金沙江路 1518 弄"},{id:2,date:"2016-05-04",name:"王小虎",status:"offline",address:"上海市普陀区金沙江路 1517 弄"},{id:3,date:"2016-05-01",name:"王小虎",status:"offline",address:"上海市普陀区金沙江路 1519 弄"},{id:4,date:"2016-05-03",name:"王小虎",status:"online",address:"上海市普陀区金沙江路 1516 弄"}]}},name:{header:{code:0,msg:""},body:{list:["tom","jerry"]}},updateAddress:{header:{code:0,msg:""},body:{address:"new Address"}},downloadTable:{header:{code:0,msg:""},body:{list:["tom","jerry"]}}},c={track:{header:{msg:"success",code:0},body:[{track:{id:1,device_id:"device_id_1",total_duration:19,effective_duration:17,parking_duration:2,average_speed:6.6720868110656735,max_speed:8.27415943145752,collector_name:"collector_name_1",project_name:"project_name_1",start_location:"北京市海淀区海淀区马连洼铲铲香宜宾菜",end_location:"北京市海淀区海淀区百望山红山口甲3号院北区东50米"},points:[{latitude:40.020618489583335,gps_time:1589437141e3,point_type:"normal",id:182,longitude:116.26861355251737},{latitude:40.0206201171875,gps_time:1589437142e3,point_type:"normal",id:183,longitude:116.26852674696181},{latitude:40.020611707899306,gps_time:1589437143e3,point_type:"normal",id:184,longitude:116.26843858506945},{latitude:40.020610080295135,gps_time:1589437144e3,point_type:"over_speed",id:185,longitude:116.26834662543403},{latitude:40.02060682508681,gps_time:1589437145e3,point_type:"over_speed",id:186,longitude:116.26826985677083},{latitude:40.020611707899306,gps_time:1589437146e3,point_type:"over_speed",id:187,longitude:116.26819146050347},{latitude:40.02059977213542,gps_time:1589437147e3,point_type:"normal",id:188,longitude:116.2681165907118},{latitude:40.02059136284722,gps_time:1589437148e3,point_type:"normal",id:189,longitude:116.2680482313368},{latitude:40.02058648003472,gps_time:1589437149e3,point_type:"normal",id:190,longitude:116.2679847547743},{latitude:40.02059136284722,gps_time:158943715e4,point_type:"over_speed",id:191,longitude:116.26791476779513},{latitude:40.02058322482639,gps_time:1589437151e3,point_type:"fatigue",id:192,longitude:116.26783989800347},{latitude:40.02058485243055,gps_time:1589437152e3,point_type:"fatigue",id:193,longitude:116.26775146484376},{latitude:40.02058322482639,gps_time:1589437153e3,point_type:"fatigue",id:194,longitude:116.26765652126736},{latitude:40.0205712890625,gps_time:1589437154e3,point_type:"fatigue",id:195,longitude:116.2675732421875},{latitude:40.02056125217014,gps_time:1589437155e3,point_type:"fatigue",id:196,longitude:116.26749131944445},{latitude:40.02056613498264,gps_time:1589437156e3,point_type:"sleep",id:197,longitude:116.26740125868055},{latitude:40.0205628797743,gps_time:1589437157e3,point_type:"sleep",id:198,longitude:116.26731960720485},{latitude:40.02056125217014,gps_time:1589437158e3,point_type:"sleep",id:199,longitude:116.26723958333334},{latitude:40.020557996961806,gps_time:1589437159e3,point_type:"sleep",id:200,longitude:116.26716634114584},{latitude:40.02055121527778,gps_time:158943716e4,point_type:"sleep",id:201,longitude:116.2671044921875}],alarm_points:[{id:1,track_id:1,alarm_type:"sudden_deceleration_point",duration:0,latitude:40.02058648003472,longitude:116.2679847547743,gps_time:1589437149e3,img_url:"",can_comment:!0},{id:2,track_id:1,alarm_type:"stop_point",duration:4,latitude:40.0205628797743,longitude:116.2671044921875,gps_time:158943716e4,img_url:"",can_comment:!0},{id:3,track_id:1,alarm_type:"stop_point",duration:4,latitude:40.020618489583335,longitude:116.26861355251737,gps_time:158943716e4,img_url:"",can_comment:!0}]}],error_msg:{},page_msg:{}},channel:{header:{msg:"success",code:0},body:[{id:1,create_time:1588608e3,name:"channel1"},{id:2,create_time:1588608e3,name:"channel2"}]}},l=n(5941);l.log("================"),r().mock("/user/login","post",(function(e){const t=JSON.parse(e.body);return"admin"===t.username?a.loginAdmin:a.loginEdit})),r().mock("/user/info","get",(function(e){const t=localStorage.getItem("token");return"admin"===t?a.loginAdmin:a.loginEdit})),r().mock("/getLineData",i.chart),r().mock("/getTableData",s.table),r().mock("/sugName",s.name),r().mock("/address/update",s.updateAddress),r().mock("/download/table","get",s.downloadTable),r().mock("/device/track_detail",c.track),r().mock("/channel/channels",c.channel)},9307:function(e,t,n){"use strict";var o=n(6369),r=n(6265),a=n.n(r),i=n(8499);const s={baseURL:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_BASE_API},c=a().create(s);c.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization="aha "+t),e}),(e=>Promise.reject(e))),c.interceptors.response.use((e=>{const t=e.request.match;let n={};if("post"===e.config.method?n="string"===typeof e.config.data?JSON.parse(e.config.data):e.config.data:(e.config.params,n=e.config.params),t&&window.clog(`%cMock%c ${e.config.url}`,"background:#666;color:#fff;padding:3px 5px; border-radius:5px;","color: #09f;",n,e.data),"application/octet-stream"===e.headers["content-type"])return e.data;if("video/mp4"===e.data.type)return e.data;if(0!==e.data.header.code){if(4040===e.data.header.code){let e;""===window.location.port?e={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_CAS_PROD:"7777"===window.location.port||"8888"===window.location.port?e={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_CAS_DEV:"6666"===window.location.port?e={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_CAS_TEST:"9999"===window.location.port&&(e={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_CAS_SHAHE);const t=e+"/cas/login?service="+window.location.href;i.MessageBox.alert("页面已失效，请刷新","",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{window.location.href=t})).catch((()=>{}))}else 6e3===e.data.header.code?(0,i.Message)({type:"error",showClose:!0,duration:3e3,message:"模版不存在"}):(0,i.Message)({type:"error",showClose:!0,duration:3e3,message:`${e.config.url}, ${e.data.header.code}, ${e.data.header.msg}`});return Promise.reject(e)}return e.data.body}),(e=>((0,i.Message)({type:"error",message:`${e.config.url}, ${e.response.status},`}),Promise.reject(e)))),Plugin.install=function(e,t){e.axios=c,window.axios=c,Object.defineProperties(e.prototype,{axios:{get(){return c}},$axios:{get(){return c}}})},o["default"].use(Plugin),t["Z"]=c},5038:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var o=n(6369);function r(e,t){const n=o["default"].extend(e),r=new n({propsData:t}),a=r.$mount();return document.body.appendChild(a.$el),clog("ctor----",r),r.remove=()=>{document.body.removeChild(a.$el),a.$destroy()},r}},9061:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=(e,t,n={})=>{let o,r,a;const i=location.hostname;if("number"===typeof n){const e=n;a=new Date(Date.now()+24*e*60*60*1e3).toGMTString(),n={}}else if(n.expires){const e=(new Date).getTime()+n.expires;a=new Date(e).toGMTString()}else a="";e=encodeURIComponent(e),t=encodeURIComponent(t),r=i.split("."),1===r.length?o=i:r.length>2&&/^[a-z]+$/i.test(r[r.length-1])?(r=r.slice(-2),o="."+r.join(".")):o=r.join(".");const s=n.path||"";document.cookie=`${e}=${t}; expires=${a}; path=${s}; domain=${o}`},r=e=>{const t=encodeURIComponent(e)+"=",n=document.cookie.split(";");for(let o=0;o<n.length;o++){let e=n[o];while(" "===e.charAt(0))e=e.substring(1,e.length);if(0===e.indexOf(t))return decodeURIComponent(e.substring(t.length,e.length))}return null};function a(){const e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),n=Math.floor(255*Math.random());return"rgba("+e+","+t+","+n+",0.8)"}var i=a;function s(e,t="date"){const n=new Date(parseInt(e));let o="";const r=n.getFullYear();let a=n.getMonth()+1,i=n.getDate(),s=n.getHours(),c=n.getMinutes(),l=n.getSeconds();switch(a<10&&(a="0"+a),i<10&&(i="0"+i),s<10&&(s="0"+s),c<10&&(c="0"+c),l<10&&(l="0"+l),t){case"dateTime":o=r+"-"+a+"-"+i+" "+s+":"+c+":"+l;break;case"dateStr":o=r+""+a+i+s+c;break;case"time":o=s+":"+c+":"+l;break;default:o=`${r}-${a}-${i}`}return o}var c=n(7421);const l={formatNum(e){const t=e.toString(),n=t.length-1;let o="";for(let r=0;r<n;r++)o+="0";return t[0]+o+"+"},transNum(e){let t="";if(e>=1e6)switch(t=parseInt(e/1e6)+"",t.length){case 1:t=t[0]+"m+";break;case 2:t=t[0]+"0m+";break;case 3:t=t[0]+"00m+";break}else if(e>=1e3)switch(t=parseInt(e/1e3)+"",t.length){case 1:t=t[0]+"k+";break;case 2:t=t[0]+"0k+";break;case 3:t=t[0]+"00k+";break}return t},transNum2(e,t,n){let o="";return o="en"===t?e>=1e9?(e/1e9).toFixed(0)+" billion":e>=1e6?(e/1e6).toFixed(0)+" million":e>=1e3?parseInt(e/1e3).toFixed(0)+" thousand":e:e>=1e8?(e/1e8).toFixed(0)+"亿":e>=1e4?(e/1e4).toFixed(0)+"万":e,o},avg(e){const t=e.length;if(t>0){let n=0;for(let o=0;o<t;o++)n+=e[o];return n/t}return 0},lineYaxis(e,t,n,o){const r={},a={};r[n]={},t.length>0&&t.forEach(((e,t)=>{const a=parseFloat(e[n])||0;r[n][e[o]]=a}));for(const i in r)a[i]=[],e.forEach((e=>{const t=r[i][e]?r[i][e]:0;a[i].push(t)}));return a},sortByKey(e,t,n){return e.sort(((e,o)=>{const r=e[t],a=o[t];return"ascending"===n?r-a:a-r}))},randomChar(e){const t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];let n="";for(let o=0;o<e;o++){const e=Math.ceil(35*Math.random());n+=t[e]}return n},autoCreate(e){const t=(new Date).getTime();return e+"_"+this.transDate(t,"dateStr")+"_"+this.randomChar(10)},transToUrlParam(e){const t=[];for(const n in e)t.push(n+"="+e[n]);return t.join("&")},getDayArray(e,t){const n=[],o=new Date(e).getTime(),r=new Date(t).getTime();let a=o;while(a<=r)n.push(s(a)),a+=864e5;return n},getMonthStr(e,t){let n=e;const o=[];switch(t){case"1":o.length=30;break;case"3":o.length=91;break;case"6":o.length=183;break;case"12":o.length=365;break}for(let r=o.length-1;r>=0;r--)o[r]=this.transDate(n),n-=864e5;return o},getByteLen(e,t,n){if(!e)return;let o=0,r="";const a=e.trim();for(let i=0;i<a.length;i++)null!=a[i].match(/[\u4e00-\u9fa5]/gi)?o+=2:null!=a[i].match(/[\u3130-\u318F]/gi)?o+=1:null!=a[i].match(/[\uAC00-\uD7A3]/gi)||null!=a[i].match(/[\u1100-\u11FF]/gi)||null!=a[i].match(/[\u3040-\u312f]/gi)||null!=a[i].match(/[\u31f0-\u31ff]/gi)||null!=a[i].match(/[\uff00-\uffef]/gi)?o+=2:o+=1,o<=t&&(r+=a[i]);return n?r:o},matchPrice(e){let t=!1;if(0===e)t=!0;else{const n=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;t=!n.test(e)}return t}};l.setCookie=o,l.getCookie=r,l.randomColor=i,l.filterNullParams=c.X;var u=l},7421:function(e,t,n){"use strict";function o(e){const t={};for(const n in e)null!==e[n]&&(a(e[n])&&e[n].length>0||r(e[n])||i(e[n])||s(e[n])&&e[n].length>0?t[n]=e[n]:c(e[n])&&o());return t}function r(e){return"number"===typeof e&&e.constructor===Number}function a(e){return"string"===typeof e&&e.constructor===String}function i(e){return"boolean"===typeof e&&e.constructor===Boolean}function s(e){return"object"===typeof e&&e.constructor===Array}function c(e){return"object"===typeof e&&e.constructor===Object}n.d(t,{X:function(){return o}})},7886:function(e,t,n){var o={"./chart.svg":2106,"./com.svg":1245,"./form.svg":2962,"./jest.svg":3056,"./permission.svg":1854,"./slot.svg":5182,"./table.svg":266,"./user.svg":7798,"./vuex.svg":8556};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=7886},2106:function(e,t,n){"use strict";e.exports=n.p+"img/chart.44f15ed4.svg"},1245:function(e,t,n){"use strict";e.exports=n.p+"img/com.b44b9f20.svg"},2962:function(e,t,n){"use strict";e.exports=n.p+"img/form.ee27ff05.svg"},3056:function(e,t,n){"use strict";e.exports=n.p+"img/jest.689c7fe0.svg"},1854:function(e,t,n){"use strict";e.exports=n.p+"img/permission.fbeb46c8.svg"},5182:function(e,t,n){"use strict";e.exports=n.p+"img/slot.6dcadcd0.svg"},266:function(e,t,n){"use strict";e.exports=n.p+"img/table.3324ffc6.svg"},7798:function(e,t,n){"use strict";e.exports=n.p+"img/user.d943f091.svg"},8556:function(e,t,n){"use strict";e.exports=n.p+"img/vuex.e64656e4.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({164:"chart",177:"home",300:"msg",378:"user",392:"banner",405:"control",438:"jestDemo",622:"vuexDemo",738:"slotDemo",842:"map",936:"fileUpload",986:"table",993:"formIndex"}[e]||e)+"."+{164:"8096e227",177:"1aff2fc2",300:"f70ba3d3",378:"1547bbaa",392:"7eaed88e",405:"c7e56973",438:"e8864ef0",562:"2e9f5fee",622:"5d97a3c5",738:"c9364072",842:"c8d1d1c6",936:"f761b932",986:"50d59885",993:"a13f23e0"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({164:"chart",177:"home",300:"msg",392:"banner",405:"control",738:"slotDemo",842:"map",936:"fileUpload",993:"formIndex"}[e]||e)+"."+{164:"4013ca28",177:"08d20a10",300:"c3e13b10",392:"aef40d3b",405:"f5b9e1cf",562:"3e43ef40",738:"e41f2237",842:"d39219d4",936:"babec99f",993:"a5986fdc"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-blog:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={164:1,177:1,300:1,392:1,405:1,562:1,738:1,842:1,936:1,993:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkmy_blog"]=self["webpackChunkmy_blog"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9398)}));o=n.O(o)})();