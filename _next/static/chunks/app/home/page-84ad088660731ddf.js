(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{8923:function(e,a,t){Promise.resolve().then(t.bind(t,7618))},7618:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return j}});var s=t(7437),l=t(2265),n=t(2111),r=t.n(n),i=t(2824),o=t(358),c=t(6712),d=t(2808),m=t(8472),u=t(9772),h=t(7138),g={src:"/_next/static/media/logodashboard.39b69d3d.svg",height:36,width:195,blurWidth:0,blurHeight:0},f=t(6648),p=t(2649);let x=u.z.object({firstName:u.z.string().min(1,"First Name is required"),studentSurname:u.z.string().min(1,"Surname is required"),gardianName:u.z.string().min(1,"Guardian Name is required"),selectedAward:u.z.string().min(1,"Award is required"),selectedClass:u.z.string().min(1,"Class is required")});var N=()=>{let[e,a]=(0,l.useState)(2),[t,n]=(0,l.useState)([]),[u,N]=(0,l.useState)([]),[j,v]=(0,l.useState)(""),[S,_]=(0,l.useState)(!1),[w,C]=(0,l.useState)([{id:"",firstName:"",studentSurname:"",gardianName:"",selectedAward:"",selectedClass:"",setAmount:2}]),[k,y]=(0,l.useState)({}),[A,Z]=(0,l.useState)("");console.log(w),(0,l.useEffect)(()=>{(async()=>{let e=localStorage.getItem("token");try{let a=await m.Z.get("https://edsidera-release-231650504fa8.herokuapp.com/api/school/get",{headers:{Authorization:"Bearer ".concat(e)}});n(a.data.data.schools||[])}catch(e){console.error("Error fetching schools:",e)}})()},[]),(0,l.useEffect)(()=>{(async()=>{if(!j){N([]);return}let e=localStorage.getItem("token");try{let a=await m.Z.get("https://edsidera-release-231650504fa8.herokuapp.com/api/award/all/".concat(j),{headers:{Authorization:"Bearer ".concat(e)}});N(a.data.data.Awards||[])}catch(e){console.error("Error fetching awards:",e)}})()},[j]);let b=async e=>{v(e.target.value),N([])};(0,l.useEffect)(()=>{C(e=>e.map(e=>({...e,selectedAward:u.some(a=>a.name===e.selectedAward)?e.selectedAward:"",selectedClass:t.some(a=>a.className===e.selectedClass)?e.selectedClass:""})))},[t,u]);let z=()=>{C([...w,{id:"",firstName:"",studentSurname:"",gardianName:"",selectedAward:"",selectedClass:"",setAmount:2}]),a(e+2)},E=t=>{C(w.filter((e,a)=>a!==t)),a(e-1)},O=()=>{let e=new Set;for(let a of w){let t="".concat(a.firstName,"-").concat(a.studentSurname,"-").concat(a.gardianName,"-").concat(a.selectedAward);if(e.has(t))return!0;e.add(t)}return!1},I=async()=>{let a="",t={};O()&&(a="Duplicate entries found. Please ensure each row is unique.");let s=w.map((e,a)=>{try{return x.parse(e),null}catch(e){return{index:a,errors:e.errors}}}).filter(Boolean);if(s.length&&s.forEach(e=>{t[e.index]=e.errors}),a||Object.keys(t).length){Z(a),y(t);return}Z(""),y({});let l={school_id:j,transactions:w.map((e,a)=>({award_id:e.selectedAward,class_id:e.selectedClass,first_name:e.firstName,last_name:e.studentSurname,guardian:e.gardianName,transaction_id:a+1,status:"processing",amount:2,currency:"AED",is_smm:S}))};localStorage.setItem("payload",JSON.stringify(l)),localStorage.setItem("schoolId",JSON.stringify(j));let n=localStorage.getItem("token");try{let a=await fetch("https://b8mbh7tf-3001.inc1.devtunnels.ms/create-checkout-session-zina",{method:"POST",headers:{accept:"application/json","content-type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({total_amount:e,currency:"AED",message:"Payment",success_url:"/confirmationpage",test:!0,cancel_url:"/error"})});if(a.ok){let e=await a.json(),t=e.data.data.redirect_url,s=e.data.data.id;localStorage.setItem("paymentId",JSON.stringify(s)),window.location.href=t}else console.error("Error in API response:",a.status,a.statusText)}catch(e){console.error("Error in fetch:",e)}},B=()=>{p.Z.remove("loggedin"),p.Z.remove("role"),p.Z.remove("token"),window.location="/"};return(0,s.jsx)(i.Z,{children:(0,s.jsxs)(o.Z,{className:"gx-2 gy-4 ".concat(r().cards_group),children:[(0,s.jsx)(c.Z,{lg:12,children:(0,s.jsxs)("div",{className:r().log0s,children:[(0,s.jsx)(f.default,{src:g,className:"img-fluid",alt:"log"}),(0,s.jsx)(h.default,{onClick:()=>B(),className:r().logout,href:"/",children:"Logout"})]})}),(0,s.jsxs)(c.Z,{lg:3,children:[(0,s.jsx)("h3",{children:"Select Schools"}),(0,s.jsxs)("select",{className:"form-select",value:j,onChange:b,children:[(0,s.jsx)("option",{value:"",children:"Select Schools"}),t.map(e=>(0,s.jsx)("option",{value:e.id,children:e.school_title},e.id))]})]}),A&&(0,s.jsx)(c.Z,{lg:12,children:(0,s.jsx)("p",{className:"text-danger",children:A})}),w.map((e,a)=>{var t,n,r,i,o,m,h,g,f,p;return(0,s.jsxs)(l.Fragment,{children:[(0,s.jsx)(c.Z,{lg:12,children:(0,s.jsx)("h3",{children:"Select Awards"})}),(0,s.jsxs)(c.Z,{lg:3,className:"mt-0",children:[(0,s.jsxs)("select",{className:"form-select",value:e.selectedAward,onChange:e=>handleStudentChange(a,"selectedAward",e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Select Awards"}),u.map(e=>(0,s.jsx)("option",{value:e.id,children:e.award_title},e.id))]}),(null===(n=k[a])||void 0===n?void 0:null===(t=n.find(e=>"selectedAward"===e.path[0]))||void 0===t?void 0:t.message)&&(0,s.jsx)("p",{className:"text-danger fontsize",children:k[a].find(e=>"selectedAward"===e.path[0]).message})]}),(0,s.jsxs)(c.Z,{lg:3,className:"mt-0",children:[(0,s.jsxs)("select",{className:"form-select",value:e.selectedClass,onChange:e=>handleStudentChange(a,"selectedClass",e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Select Class"}),u.filter(a=>a.id===parseInt(e.selectedAward)).flatMap(e=>e.Classes.map(e=>(0,s.jsx)("option",{value:e.id,children:e.class_title},e.id)))]}),(null===(i=k[a])||void 0===i?void 0:null===(r=i.find(e=>"selectedClass"===e.path[0]))||void 0===r?void 0:r.message)&&(0,s.jsx)("p",{className:"text-danger fontsize",children:k[a].find(e=>"selectedClass"===e.path[0]).message})]}),(0,s.jsxs)(c.Z,{lg:2,className:"inputBox mt-0",children:[(0,s.jsx)("input",{type:"text",placeholder:"First Name",className:"form-control",value:e.firstName,onChange:e=>handleStudentChange(a,"firstName",e.target.value)}),(null===(m=k[a])||void 0===m?void 0:null===(o=m.find(e=>"firstName"===e.path[0]))||void 0===o?void 0:o.message)&&(0,s.jsx)("p",{className:"text-danger fontsize",children:k[a].find(e=>"firstName"===e.path[0]).message})]}),(0,s.jsxs)(c.Z,{lg:2,className:"inputBox mt-0",children:[(0,s.jsx)("input",{type:"text",placeholder:"Surname",className:"form-control",value:e.studentSurname,onChange:e=>handleStudentChange(a,"studentSurname",e.target.value)}),(null===(g=k[a])||void 0===g?void 0:null===(h=g.find(e=>"studentSurname"===e.path[0]))||void 0===h?void 0:h.message)&&(0,s.jsx)("p",{className:"text-danger fontsize",children:k[a].find(e=>"studentSurname"===e.path[0]).message})]}),(0,s.jsxs)(c.Z,{lg:2,className:"inputBox mt-0",children:[(0,s.jsx)("input",{type:"text",placeholder:"Guardian Name",className:"form-control",value:e.gardianName,onChange:e=>handleStudentChange(a,"gardianName",e.target.value)}),(null===(p=k[a])||void 0===p?void 0:null===(f=p.find(e=>"gardianName"===e.path[0]))||void 0===f?void 0:f.message)&&(0,s.jsx)("p",{className:"text-danger fontsize",children:k[a].find(e=>"gardianName"===e.path[0]).message})]}),(0,s.jsxs)(c.Z,{lg:12,className:"addInputBtn d-flex mt-0 mb-3",children:[(0,s.jsx)(d.Z,{variant:"link",onClick:z,children:"Add More Student"}),w.length>1&&(0,s.jsx)(d.Z,{variant:"link",onClick:()=>E(a),children:"Remove Student"})]})]},a)}),(0,s.jsx)(c.Z,{lg:12,className:"labelsize mt-0",children:(0,s.jsxs)("div",{className:"form-check",children:[(0,s.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheckbox",checked:S,onChange:()=>_(!S)}),(0,s.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheckbox",children:"Allow Social Media Marketing"})]})}),(0,s.jsxs)(c.Z,{lg:12,className:"".concat(r().remoark," mt-5 d-flex"),children:[(0,s.jsx)(d.Z,{onClick:I,children:"Make Payment"}),(0,s.jsxs)("p",{children:["Total Cost:",(0,s.jsxs)("span",{className:r().valuepayment,children:["AED: ",e]})]})]})]})})};function j(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(N,{})})}},2111:function(e){e.exports={cards_group:"ListOfSchool_cards_group__ayCIw",addMoreBtn:"ListOfSchool_addMoreBtn__j3Kx4",remoark:"ListOfSchool_remoark__z6r5E",logout:"ListOfSchool_logout__QG2W2",valuepayment:"ListOfSchool_valuepayment__jqeFr",log0s:"ListOfSchool_log0s__WqyWf"}}},function(e){e.O(0,[679,138,236,584,971,23,744],function(){return e(e.s=8923)}),_N_E=e.O()}]);