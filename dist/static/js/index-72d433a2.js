import{F as A,e as x,G as D,H as $,I as E,d as L,J as S,u as M,g as B,h as R,i as N,j as U,c as n,k as s,b as o,m as c,t as m,l as u}from"./index-f56c040e.js";const y=A.create();let f=null,h="",w=!0;const q=()=>{w=!1,E.confirm("请重新登录",{confirmButtonText:"重新登录",closeOnClickModal:!1,showCancelButton:!1,showClose:!1,type:"warning"}).then(()=>{x().resetStateAndToLogin(),w=!0})};y.interceptors.request.use(t=>{var d;const{token:i,axiosPromiseArr:p}=x();return t.cancelToken=new A.CancelToken(k=>{h=t.url,p.push({url:t.url,cancel:k})}),i&&(t.headers.Authorization=i),"get".includes((d=t.method)==null?void 0:d.toLowerCase())&&!t.params&&(t.params=t.data),(t.reqLoading??!0)&&(f=D.service({lock:!0,fullscreen:!0,text:"数据载入中...",background:"rgba(0, 0, 0, 0.1)"})),t},t=>{Promise.reject(t)});y.interceptors.response.use(t=>{var C,_,g;if(x().remotePromiseArrByReqUrl(h),f&&f&&f.close(),(_=(C=t.data)==null?void 0:C.type)!=null&&_.includes("sheet"))return t;const{code:i,msg:p}=t.data,d=[0,200,2e4],k=[401,403];if(d.includes(i))return t.data;if(w)if(k.includes(i))q();else{if(!((g=t.config)!=null&&g.isNotTipErrorMsg))$.error({message:p,duration:2*1e3});else return t;return Promise.reject(p)}},t=>(x().remotePromiseArrByReqUrl(h),f&&f&&f.close(),$.error({message:t,duration:2*1e3}),Promise.reject(t)));function V(t){return y({baseURL:"",timeout:8e3,...t})}const F={class:"scroll-y"},G=u("div",{class:"mt-10px mb-10px font-bold"},"switch theme",-1),I=u("div",{class:"mt-10px mb-10px font-bold"},"switch size",-1),O=u("div",{class:"mt-10px mb-10px font-bold"},"switch language",-1),H=u("div",{class:"mb-10px font-bold mt-20px"},"Button Group",-1),J=u("div",{class:"mt-30px font-bold mb-10px"},"unocss using",-1),K={class:"mb-40px w-900px h-10px text-16px"},Q=u("div",{class:"mt-30px font-bold mb-10px"},"global var",-1),W={class:"mt-20px"},X=L({}),Z=L({...X,__name:"index",setup(t){const{setTheme:i,theme:p,setSize:d,size:k,setLanguage:C}=S(),_=M(),g=v=>{var e;C(v,(e=_.meta)==null?void 0:e.title)},r=B(0),P=B({test:"i am global var from vite.config.js define"}),T=()=>{V({url:"/integration-front/errorCollection/selectPage",method:"get",reqLoading:!1})},{axiosPromiseArr:b}=x(),j=()=>{b.length&&b.forEach((v,e)=>{v.cancel(),b.splice(e,1)})};return(v,e)=>{const l=R("el-button"),z=R("el-link");return N(),U("div",F,[G,n(l,{onClick:e[0]||(e[0]=a=>c(i)("base-theme"))},{default:s(()=>[o("base-theme(default)")]),_:1}),n(l,{onClick:e[1]||(e[1]=a=>c(i)("lighting-theme"))},{default:s(()=>[o("lighting-theme")]),_:1}),n(l,{onClick:e[2]||(e[2]=a=>c(i)("china-red"))},{default:s(()=>[o("china-red(default)")]),_:1}),n(l,{onClick:e[3]||(e[3]=a=>c(i)("dark"))},{default:s(()=>[o("dark-theme")]),_:1}),I,n(l,{onClick:e[4]||(e[4]=a=>c(d)("large"))},{default:s(()=>[o("large")]),_:1}),n(l,{onClick:e[5]||(e[5]=a=>c(d)("default"))},{default:s(()=>[o("default")]),_:1}),n(l,{onClick:e[6]||(e[6]=a=>c(d)("small"))},{default:s(()=>[o("small")]),_:1}),O,n(l,{onClick:e[7]||(e[7]=a=>g("en"))},{default:s(()=>[o("en")]),_:1}),n(l,{onClick:e[8]||(e[8]=a=>g("zh"))},{default:s(()=>[o("zh")]),_:1}),H,n(l,{type:"primary",onClick:e[9]||(e[9]=a=>r.value++)},{default:s(()=>[o("count is: "+m(r.value),1)]),_:1}),n(l,{type:"success",onClick:e[10]||(e[10]=a=>r.value++)},{default:s(()=>[o("count is: "+m(r.value),1)]),_:1}),n(l,{type:"warning",onClick:e[11]||(e[11]=a=>r.value++)},{default:s(()=>[o("count is: "+m(r.value),1)]),_:1}),n(l,{type:"danger",onClick:e[12]||(e[12]=a=>r.value++)},{default:s(()=>[o("count is: "+m(r.value),1)]),_:1}),n(l,{type:"info",onClick:e[13]||(e[13]=a=>r.value++)},{default:s(()=>[o("count is: "+m(r.value),1)]),_:1}),J,u("div",K,[u("div",null,[o(" you can look "),n(z,{class:"text-red",href:"https://uno.antfu.me/",target:"_blank"},{default:s(()=>[o("https://uno.antfu.me/")]),_:1}),o(' to search you need such as "margin-left:10px" and then get the sortcut(ml-10px) ')])]),Q,o(" "+m(P.value)+" ",1),u("div",W,[n(l,{onClick:T},{default:s(()=>[o("发送请求测试(network->slow 3g)")]),_:1}),n(l,{onClick:j},{default:s(()=>[o("cancelReq")]),_:1})])])}}});export{Z as default};
