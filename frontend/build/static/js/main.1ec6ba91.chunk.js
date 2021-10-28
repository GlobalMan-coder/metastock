(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{125:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n(15),i=n.n(s),o=(n(125),n(26)),l=n(11),d=n(6),u=n(14),j=n.n(u),b=n(24),p=n(21),h=n.n(p),f="USER_REGISTER_REQUEST",O="USER_REGISTER_SUCCESS",x="USER_REGISTER_FAIL",m="USER_SIGNIN_REQUEST",v="USER_SIGNIN_SUCCESS",g="USER_SIGNIN_FAIL",E="USER_SIGGNOUT",y="USER_DETAIL_REQUEST",S="USER_DETAIL_SUCCESS",I="USER_DETAIL_FAIL",w="USER_DETAIL_RESET",_="USER_UPDATE_PROFILE_REQUEST",N="USER_UPDATE_PROFILE_SUCCESS",C="USER_UPDATE_PROFILE_FAIL",F="USER_UPDATE_PROFILE_RESET",L=n(1);function U(){return Object(L.jsxs)("div",{className:"loading",children:[Object(L.jsx)("i",{className:"fa fa-spiner fa-spin"})," Loading..."]})}function D(e){return Object(L.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}function T(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),l=Object(d.a)(i,2),u=l[0],p=l[1],f=e.location.search?e.location.search.split("=")[1]:"/",O=Object(c.c)((function(e){return e.userSignin})),x=O.userInfo,E=O.loading,y=O.error,S=Object(c.b)();return Object(a.useEffect)((function(){x&&e.history.push(f)}),[e.history,f,x]),Object(L.jsx)("div",{children:Object(L.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),S(function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(a){var r,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:m,payload:{email:e,password:t}}),n.prev=1,n.next=4,h.a.post("/api/users/signin",{email:e,password:t});case 4:r=n.sent,c=r.data,a({type:v,payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),a({type:g,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}(r,u))},children:[Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:"Sign In"})}),E&&Object(L.jsx)(U,{}),y&&Object(L.jsx)(D,{variant:"danger",children:y}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(L.jsx)("input",{type:"text",id:"email",placeholder:"Enter email",required:!0,onChange:function(e){return s(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",{type:"password",id:"password",placeholder:"Enter password",required:!0,onChange:function(e){return p(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{}),Object(L.jsx)("button",{className:"primary",type:"submit",children:"Sign In"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{}),Object(L.jsxs)("div",{children:["New User? ",Object(L.jsx)(o.b,{to:"/register?redirect=$",children:"Create New Account"})]})]})]})})}var k=n(5),A="LICENSE_LIST_REQUEST",R="LICENSE_LIST_SUCCESS",P="LICENSE_LIST_FAIL",B="LICENSE_UPDATE_REQUEST",G="LICENSE_UPDATE_SUCCESS",Q="LICENSE_LIST_FAIL",z="LICENSE_DELETE_REQUEST",M="LICENSE_DELETE_SUCCESS",q="LICENSE_DELETE_FAIL",Y=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t,n){var a,r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:A}),a=n(),r=a.userSignin.userInfo,e.prev=2,e.next=5,h.a.get("/api/license",{headers:{Authorization:"Bearer ".concat(null===r||void 0===r?void 0:r.token)}});case 5:c=e.sent,s=c.data,t({type:R,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:P,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()},J=n(52),H=n.n(J),X=n(263),K=n(261),V=n(262),$=n(264),W=n(53),Z=n.n(W),ee=n(37),te=n.n(ee),ne=n(103),ae=n.n(ne);function re(e){return ae()(e).format("YYYY-MM-DD")}function ce(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.licenseList})),n=t.loading,r=t.error,s=t.licenses;Object(a.useEffect)((function(){e(Y())}),[e]);var i=Object(a.useState)(!1),o=Object(d.a)(i,2),l=o[0],u=o[1],p=Object(a.useState)(!1),f=Object(d.a)(p,2),O=f[0],x=f[1],m=Object(a.useState)({}),v=Object(d.a)(m,2),g=v[0],E=v[1],y=Object(a.useState)(Date),S=Object(d.a)(y,2),I=S[0],w=S[1],_=Object(a.useState)(0),N=Object(d.a)(_,2),C=N[0],F=N[1],T=Object(a.useState)(0),A=Object(d.a)(T,2),R=A[0],P=A[1],J=Object(a.useState)(0),W=Object(d.a)(J,2),ne=W[0],ae=W[1],ce=Object(a.useState)(""),se=Object(d.a)(ce,2),ie=se[0],oe=se[1],le=Object(a.useState)(!1),de=Object(d.a)(le,2),ue=de[0],je=de[1],be=Object(c.c)((function(e){return e.licenseUpdate})).updated;Object(a.useEffect)((function(){be&&(u(!1),e(Y()))}),[be,e]);var pe=Object(c.c)((function(e){return e.licenseDelete})).deleted;Object(a.useEffect)((function(){pe&&(x(!1),e(Y()))}),[pe,e]),Object(a.useEffect)((function(){var e=ue?new Date(Date.now()):new Date(g.date);C&&e.setFullYear(e.getFullYear()+parseInt(C)),R&&e.setMonth(e.getMonth()+parseInt(R)),ne&&e.setDate(e.getDate()+parseInt(ne)),w(e)}),[ne,R,C,g,ue]);var he=[{dataField:"#",text:"No",formatter:function(e,t,n){return Object(L.jsx)("span",{children:n+1})}},{dataField:"deviceId",text:"DeviceId",sort:!0},{dataField:"date",text:"License Date",formatter:re,sort:!0},{dataField:"createdAt",text:"Created Date",formatter:re,sort:!0},{dataField:"updatedAt",text:"Updated Date",formatter:re,sort:!0},{dataField:"",text:"Modified By"},{dataField:"edit",text:"Action",sort:!1,formatter:function(e,t,n,a){return Object(L.jsxs)("div",{style:{textAlign:"center",cursor:"pointer",lineHeight:"normal"},children:[Object(L.jsx)("span",{onClick:function(){return Oe(t)},children:Object(L.jsx)("i",{className:"fa fa fa-pencil-square-o"})})," ",Object(L.jsx)("span",{onClick:function(){return e=t,x(!0),void E(e);var e},children:Object(L.jsx)("i",{className:"fa fa-trash-o"})})]})},headerAttrs:{width:100},attrs:{width:100,class:"EditRow"}}],fe=ee.Search.SearchBar;function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(w(e.date),E(e),je(!1)):(w(Date.now()),E({}),je(!0)),ae(0),P(0),F(0),u(!0)}function xe(){var t;e((t={_id:g._id,deviceId:ie,date:I},function(){var e=Object(b.a)(j.a.mark((function e(n,a){var r,c,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n({type:B}),r=a(),c=r.userSignin.userInfo,e.prev=2,!t._id){e.next=9;break}return e.next=6,h.a.put("/api/license/"+t._id,t,{headers:{Authorization:"Bearer ".concat(null===c||void 0===c?void 0:c.token)}});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,h.a.post("/api/license",t,{headers:{Authorization:"Bearer ".concat(null===c||void 0===c?void 0:c.token)}});case 11:e.t0=e.sent;case 12:s=e.t0,i=s.res,n({type:G,payload:i}),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(2),n({type:Q,payload:e.t1.message});case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n){return e.apply(this,arguments)}}()))}function me(){var t;e((t={id:g._id},function(){var e=Object(b.a)(j.a.mark((function e(n,a){var r,c,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:z}),r=a(),c=r.userSignin.userInfo,e.prev=2,e.next=5,h.a.delete("/api/license/"+t.id,{headers:{Authorization:"Bearer ".concat(null===c||void 0===c?void 0:c.token)}});case 5:s=e.sent,i=s.res,n({type:M,payload:i}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n({type:q,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()))}return Object(L.jsx)("div",{children:n?Object(L.jsx)(U,{}):r?Object(L.jsx)(D,{variant:"danger",children:r}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(X.a,{show:l,children:Object(L.jsx)(X.a.Body,{children:Object(L.jsxs)(K.a,{children:[Object(L.jsx)(X.a.Title,{children:ue?Object(L.jsx)(L.Fragment,{children:"New Device"}):Object(L.jsxs)(L.Fragment,{children:['Update Device "',g.deviceId,'" ']})}),ue?Object(L.jsxs)("div",{className:"formgroup mt-2",children:[Object(L.jsx)("label",{children:"DeviceId:"}),Object(L.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return oe(e.target.value)}})]}):Object(L.jsxs)("div",{className:"mt-4",children:[Object(L.jsx)("label",{children:"Current License Date:"})," ",re(g.date)]}),Object(L.jsxs)("div",{className:"mt-4",children:[Object(L.jsx)("label",{children:"Target License Date:"})," ",re(I)]}),Object(L.jsxs)(V.a,{className:"mt-4",children:[Object(L.jsxs)("div",{className:"formgroup col-4",children:[Object(L.jsx)("label",{children:"Year:"}),Object(L.jsx)("input",{type:"number",min:"0",step:"1",className:"form-control",onChange:function(e){return F(e.target.value)}})]}),Object(L.jsxs)("div",{className:"formgroup col-4",children:[Object(L.jsx)("label",{children:"Month:"}),Object(L.jsx)("input",{type:"number",min:"0",step:"1",className:"form-control",onChange:function(e){return P(e.target.value)}})]}),Object(L.jsxs)("div",{className:"formgroup col-4",children:[Object(L.jsx)("label",{children:"Date:"}),Object(L.jsx)("input",{type:"number",min:"0",step:"1",className:"form-control",onChange:function(e){return ae(e.target.value)}})]})]}),Object(L.jsxs)("div",{className:"flex mt-2",children:[Object(L.jsx)($.a,{className:"m-2 float-end btn btn-danger",onClick:function(){return u(!1)},children:"Cancel"}),Object(L.jsx)($.a,{className:"m-2 float-end btn btn-primary",onClick:function(){return xe()},children:"Update"})]})]})})}),Object(L.jsx)(X.a,{show:O,children:Object(L.jsx)(X.a.Body,{children:Object(L.jsxs)(K.a,{children:[Object(L.jsx)(X.a.Title,{className:"m-1",children:"Delete Device"}),Object(L.jsxs)("p",{children:['Do you want really Device "',g.deviceId,'"']}),Object(L.jsxs)("div",{className:"flex mt-2",children:[Object(L.jsx)($.a,{className:"m-2 float-end btn btn-danger",onClick:function(){return x(!1)},children:"Cancel"}),Object(L.jsx)($.a,{className:"m-2 float-end btn btn-primary",onClick:function(){return me()},children:"Delete"})]})]})})}),Object(L.jsx)(te.a,{keyField:"_id",data:s,columns:he,search:{searchFormatted:!0},children:function(e){return Object(L.jsxs)("div",{className:"flex",children:[Object(L.jsx)(fe,Object(k.a)(Object(k.a)({},e.searchProps),{},{className:"m-2"})),Object(L.jsx)($.a,{className:"float-end",onClick:function(){return Oe()},children:"New Device"}),Object(L.jsx)(H.a,Object(k.a)(Object(k.a)({},e.baseProps),{},{pagination:Z()()}))]})}})]})})}function se(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),l=Object(d.a)(i,2),u=l[0],p=l[1],m=Object(a.useState)(""),g=Object(d.a)(m,2),E=g[0],y=g[1],S=Object(a.useState)(""),I=Object(d.a)(S,2),w=I[0],_=I[1],N=e.location.search?e.location.search.split("=")[1]:"/",C=Object(c.c)((function(e){return e.userRegister})),F=C.userInfo,T=C.loading,k=C.error,A=Object(c.b)();return Object(a.useEffect)((function(){F&&e.history.push(N)}),[e.history,N,F]),Object(L.jsx)("div",{children:Object(L.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),E!==w?alert("Password and confirm password are not match"):A(function(e,t,n){return function(){var a=Object(b.a)(j.a.mark((function a(r){var c,s;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:f,payload:{email:t,password:n}}),a.prev=1,a.next=4,h.a.post("/api/users/register",{name:e,email:t,password:n});case 4:c=a.sent,s=c.data,r({type:O,payload:s}),r({type:v,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),r({type:x,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()}(r,u,E))},children:[Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:"Register"})}),T&&Object(L.jsx)(U,{}),k&&Object(L.jsx)(D,{variant:"error",children:k}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"email",children:"Name"}),Object(L.jsx)("input",{type:"text",id:"name",placeholder:"Enter name",required:!0,onChange:function(e){return s(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(L.jsx)("input",{type:"email",id:"email",placeholder:"Enter email",required:!0,onChange:function(e){return p(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",{type:"password",id:"password",placeholder:"Enter password",required:!0,onChange:function(e){return y(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(L.jsx)("input",{type:"password",id:"confirmPassword",placeholder:"Enter confirm password",required:!0,onChange:function(e){return _(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{}),Object(L.jsx)("button",{className:"primary",type:"submit",children:"Register"})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{}),Object(L.jsxs)("div",{children:["Already have an account? ",Object(L.jsx)(o.b,{to:"/sinin",children:"Sign In"})]})]})]})})}function ie(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)(""),p=Object(d.a)(u,2),f=p[0],O=p[1],x=Object(a.useState)(""),m=Object(d.a)(x,2),g=m[0],E=m[1],w=Object(c.c)((function(e){return e.userSignin})).userInfo,T=Object(c.c)((function(e){return e.userDetails})),k=T.loading,A=T.error,R=T.user,P=Object(c.c)((function(e){return e.userUpdateProfile})),B=P.success,G=P.error,Q=P.loading,z=Object(c.b)();Object(a.useEffect)((function(){var e;console.log(R),R?(r(R.name),l(R.email)):(z({type:F}),z((e=w._id,function(){var t=Object(b.a)(j.a.mark((function t(n,a){var r,c,s,i,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:y,payload:e}),r=a(),c=r.userSignin.userInfo,t.prev=2,t.next=5,h.a.get("/api/users/".concat(e),{headers:{Authorization:"Bearer ".concat(null===c||void 0===c?void 0:c.token)}});case 5:s=t.sent,i=s.data,n({type:S,payload:i}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),o=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:I,payload:o});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}())))}),[z,w._id,R]);return Object(L.jsx)("div",{children:Object(L.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),f!==g?alert("Password and Confirm Password Are Not Matched"):z(function(e){return function(t,n){t({type:_,payload:e});var a=n().userSignin.userInfo;try{var r=h.a.put("/api/users/profile",e,{headers:{Authorization:"Bearer ".concat(a.token)}}).data;t({type:N,payload:r}),t({type:v,payload:r}),localStorage.setItem("userInfo",JSON.stringify(r))}catch(A){var c=A.response&&A.response.data.message?A.response.data.message:A.message;t({type:C,payload:c})}}}({userId:R._id,name:n,email:o,password:f}))},children:[Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:"Uer Profile"})}),k?Object(L.jsx)(U,{}):A?Object(L.jsx)(D,{variant:"danger",children:A}):Object(L.jsxs)(L.Fragment,{children:[Q&&Object(L.jsx)(U,{}),G&&Object(L.jsx)(D,{variant:"danger",children:G}),B&&Object(L.jsx)(D,{variant:"success",children:"Profile Updated"}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"name",children:"Name"}),Object(L.jsx)("input",{id:"name",type:"text",placeholder:"Enter name",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"email",children:"Email"}),Object(L.jsx)("input",{id:"email",type:"email",placeholder:"Enter email",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",{id:"password",type:"password",placeholder:"Enter password",onChange:function(e){return O(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{htmlFor:"confirmPassword",children:"confirmPassword"}),Object(L.jsx)("input",{id:"confirmPassword",type:"password",placeholder:"Enter confirm password",onChange:function(e){return E(e.target.value)}})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{}),Object(L.jsx)("button",{className:"primary",type:"submit",children:"Update"})]})]})]})})}var oe=n(12),le=["component"];function de(e){var t=e.component,n=Object(oe.a)(e,le),a=Object(c.c)((function(e){return e.userSignin})).userInfo;return Object(L.jsx)(l.b,Object(k.a)(Object(k.a)({},n),{},{render:function(e){return a?Object(L.jsx)(t,Object(k.a)({},e)):Object(L.jsx)(l.a,{to:"/signin"})}}))}var ue="FILE_LIST_REQUEST",je="FILE_LIST_SUCCESS",be="FILE_LIST_FAIL",pe="FILE_UPLOAD_REQUEST",he="FILE_UPLOAD_SUCCESS",fe="FILE_UPLOAD_FAIL",Oe="FILE_DELETE_REQUEST",xe="FILE_DELETE_SUCCESS",me="FILE_DELETE_FAIL",ve=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t,n){var a,r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:ue}),a=n(),r=a.userSignin.userInfo,e.prev=2,e.next=5,h.a.get("/api/file",{headers:{Authorization:"Bearer ".concat(null===r||void 0===r?void 0:r.token)}});case 5:c=e.sent,s=c.data,t({type:je,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:be,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()},ge=n(107),Ee=n.n(ge);n(208);function ye(){var e=ee.Search.SearchBar,t=Object(c.b)(),n=Object(c.c)((function(e){return e.fileList})),r=n.loading,s=n.error,i=n.files;Object(a.useEffect)((function(){t(ve())}),[t]);var o=Object(a.useState)(!1),l=Object(d.a)(o,2),u=l[0],p=l[1];Object(a.useEffect)((function(){u&&m(null)}),[u]);var f=Object(a.useState)(null),O=Object(d.a)(f,2),x=O[0],m=O[1],v=Object(a.useState)(new Date),g=Object(d.a)(v,2),E=g[0],y=g[1],S=Object(a.useState)(!1),I=Object(d.a)(S,2),w=I[0],_=I[1],N=Object(a.useState)(""),C=Object(d.a)(N,2),F=C[0],T=C[1];Object(a.useEffect)((function(){_(!0)}),[F]);var A=Object(c.c)((function(e){return e.fileUpload})).uploaded;Object(a.useEffect)((function(){A&&(p(!1),t(ve()))}),[A,t]);var R=Object(c.c)((function(e){return e.fileDelete})).deleted;Object(a.useEffect)((function(){R&&(_(!1),t(ve()))}),[R,t]);var P=[{dataField:"#",text:"No",formatter:function(e,t,n){return Object(L.jsx)("span",{children:n+1})}},{dataField:"name",text:"Name",sort:!0,formatter:function(e,n){return Object(L.jsx)("span",{onClick:function(){var e;t((e=n._id,function(){var t=Object(b.a)(j.a.mark((function t(n,a){var r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"FILE_GET_REQUEST"}),r=a(),c=r.userSignin.userInfo,t.prev=2,t.next=5,h.a.get("/api/file/"+e,{headers:{Authorization:"Bearer ".concat(null===c||void 0===c?void 0:c.token)}});case 5:n({type:"FILE_GET_SUCCESS"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),n({type:"FILE_GET_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,n){return t.apply(this,arguments)}}()))},children:e})}},{dataField:"date",text:"Date",formatter:re,sort:!0},{dataField:"createdAt",text:"Uploaded Date",formatter:re,sort:!0},{dataField:"",text:"Uploaded By"},{dataField:"edit",text:"Action",sort:!1,formatter:function(e,t){return Object(L.jsx)("div",{style:{textAlign:"center",cursor:"pointer",lineHeight:"normal"},children:Object(L.jsx)("span",{onClick:function(){return T(t)},children:Object(L.jsx)("i",{className:"fa fa-trash-o"})})})},headerAttrs:{width:100},attrs:{width:100,class:"EditRow"}}];return Object(L.jsx)("div",{children:r?Object(L.jsx)(U,{}):s?Object(L.jsx)(D,{variant:"danger",children:s}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(X.a,{show:u,children:Object(L.jsx)(X.a.Body,{children:Object(L.jsxs)(K.a,{children:[Object(L.jsx)(X.a.Title,{children:"Upload File"}),Object(L.jsx)("input",{type:"file",className:"form-control mt-4",multiple:!0,accept:".csv",onChange:function(e){return m(e.target.files)}}),Object(L.jsxs)("div",{className:"formgroup mt-4",children:[Object(L.jsx)("label",{children:"Date"}),Object(L.jsx)(Ee.a,{className:"form-control",selected:E,onChange:function(e){return y(e)}})]}),Object(L.jsxs)("div",{className:"flex mt-2",children:[Object(L.jsx)($.a,{className:"m-2 float-end btn btn-danger",onClick:function(){return p(!1)},children:"Cancel"}),Object(L.jsx)($.a,{className:"m-2 float-end btn btn-primary",onClick:function(e){e.preventDefault();var n,a=new FormData;Array.from(x).forEach((function(e){a.append("file",e)})),E&&a.append("date",E),t((n=a,function(){var e=Object(b.a)(j.a.mark((function e(t,a){var r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:pe}),r=a(),c=r.userSignin.userInfo,console.log("data",n),e.prev=3,e.next=6,h.a.post("/api/file/upload",n,{headers:{Authorization:"Bearer ".concat(null===c||void 0===c?void 0:c.token),"Content-Type":"multipart/form-data"}});case 6:s=e.sent,t({type:he,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:fe,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:"OK"})]})]})})}),Object(L.jsx)(X.a,{show:w,children:Object(L.jsx)(X.a.Body,{children:Object(L.jsxs)(K.a,{children:[Object(L.jsx)(X.a.Title,{className:"m-1",children:"Delete File"}),Object(L.jsxs)("p",{children:["Do you want really delete ",F.name," file?"]}),Object(L.jsxs)("div",{className:"flex mt-2",children:[Object(L.jsx)($.a,{className:"m-2 float-end btn btn-danger",onClick:function(){return _(!1)},children:"Cancel"}),Object(L.jsx)($.a,{className:"m-2 float-end btn btn-primary",onClick:function(){var e;t((e=F._id,function(){var t=Object(b.a)(j.a.mark((function t(n,a){var r,c,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:Oe}),r=a(),c=r.userSignin.userInfo,t.prev=2,t.next=5,h.a.delete("/api/file/"+e,{headers:{Authorization:"Bearer ".concat(null===c||void 0===c?void 0:c.token)}});case 5:s=t.sent,i=s.res,n({type:xe,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n({type:me,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()))},children:"Delete"})]})]})})}),Object(L.jsx)(te.a,{keyField:"_id",data:i,columns:P,search:{searchFormatted:!0},children:function(t){return Object(L.jsxs)("div",{className:"flex",children:[Object(L.jsx)(e,Object(k.a)(Object(k.a)({},t.searchProps),{},{className:"m-2"})),Object(L.jsx)($.a,{className:"float-end",onClick:function(){return p(!0)},children:"Upload Excel"}),Object(L.jsx)(H.a,Object(k.a)(Object(k.a)({},t.baseProps),{},{pagination:Z()()}))]})}})]})})}var Se=function(){var e=Object(c.c)((function(e){return e.userSignin})).userInfo,t=Object(c.b)();return Object(L.jsx)(o.a,{children:Object(L.jsxs)("div",{className:"grid-container",children:[Object(L.jsxs)("header",{className:"ms-row",children:[Object(L.jsx)("div",{children:Object(L.jsx)(o.b,{className:"brand",to:"/license",children:"Metastock"})}),Object(L.jsx)("div",{children:e?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(o.b,{to:"/upload",children:"Upload"}),Object(L.jsxs)("div",{className:"dropdown",children:[Object(L.jsxs)(o.b,{to:"/#",children:[e.name," ",Object(L.jsx)("i",{className:"fa fa-caret-down"})]}),Object(L.jsxs)("ul",{className:"dropdown-content",children:[Object(L.jsx)("li",{children:Object(L.jsx)(o.b,{to:"#signout",onClick:function(){t((function(e){localStorage.removeItem("userInfo"),e({type:E}),document.location.href="/signin"}))},children:"Sign Out"})}),Object(L.jsx)("li",{children:Object(L.jsx)(o.b,{to:"/profile",children:"User Profile"})})]})]})]}):Object(L.jsx)(o.b,{to:"/signin",children:"Sign In"})})]}),Object(L.jsxs)("main",{children:[Object(L.jsx)(de,{path:"/license",component:ce,exat:!0}),Object(L.jsx)(de,{path:"/upload",component:ye,exat:!0}),Object(L.jsx)(l.b,{path:"/signin",component:T,exat:!0}),Object(L.jsx)(l.b,{path:"/register",component:se,exat:!0}),Object(L.jsx)(de,{path:"/profile",component:ie}),Object(L.jsx)(l.b,{exact:!0,path:"/",children:Object(L.jsx)(l.a,{to:"/license"})})]}),Object(L.jsx)("footer",{className:"ms-row center",children:"All right reserved"})]})})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,265)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},we=n(46),_e=n(110),Ne=Object(we.b)({userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case O:return{loading:!1,userInfo:t.payload};case x:return{loading:!1,error:t.payload};default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0};case v:return{loading:!1,userInfo:t.payload};case g:return{loading:!1,error:t.payload};case E:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:case w:return{loading:!0};case S:return{loading:!1,user:t.payload};case I:return{loading:!1,error:t.payload};default:return e}},licenseList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,licenses:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case R:return{loading:!1,licenses:t.payload};case P:return{loading:!1,error:t.payload};default:return e}},licenseUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{updated:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return{updated:!1};case G:return{updated:!0};case Q:return{updated:!0,error:t.payload};default:return e}},licenseDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deleted:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{deleted:!1};case M:return{deleted:!0};case q:return{deleted:!0,error:t.payload};default:return e}},fileList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,files:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return{loading:!0};case je:return{loading:!1,files:t.payload};case be:return{loading:!1,error:t.payload};default:return e}},fileUpload:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{updated:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return{uploaded:!1};case he:return{uploaded:!0};case fe:return{uploaded:!0,error:t.payload};default:return e}},fileDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{deleted:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return{deleted:!1};case xe:return{deleted:!0};case me:return{deleted:!0,error:t.payload};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case N:return{loading:!1,success:!0};case C:return{loading:!1,error:t.payload};case F:return{};default:return e}}}),Ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.c,Fe=Object(we.d)(Ne,{},Ce(Object(we.a)(_e.a)));n(250);i.a.render(Object(L.jsx)(c.a,{store:Fe,children:Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(Se,{})})}),document.getElementById("root")),Ie()}},[[252,1,2]]]);
//# sourceMappingURL=main.1ec6ba91.chunk.js.map