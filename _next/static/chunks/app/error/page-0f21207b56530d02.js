(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{1612:function(e,s,t){Promise.resolve().then(t.bind(t,5385))},5385:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var n=t(7437),o=t(3824),r=t.n(o),c=t(7138),a=t(2265);function i(){let[e,s]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=localStorage.getItem("token"),t=JSON.parse(localStorage.getItem("payload"));session_id&&fetch("https://edsidera-staging-7ab88110fccd.herokuapp.com/get-session/".concat(session_id),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{s(e)}).catch(e=>{console.error("There was a problem with the fetch operation:",e)})},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:r().success,children:(0,n.jsxs)("div",{className:r().successContainer,children:[(0,n.jsx)("h1",{children:"Failed!"}),(0,n.jsx)("p",{children:"Your operation was Failed"}),(0,n.jsx)("p",{children:"Please Try Again"}),(0,n.jsx)(c.default,{href:"/home",children:(0,n.jsx)("button",{className:r().homeButton,children:"Go to Home"})})]})})})}},3824:function(e){e.exports={successContainer:"page_successContainer__2c6IV",homeButton:"page_homeButton__d_MLn",success:"page_success__Ks1lW"}}},function(e){e.O(0,[660,138,971,23,744],function(){return e(e.s=1612)}),_N_E=e.O()}]);