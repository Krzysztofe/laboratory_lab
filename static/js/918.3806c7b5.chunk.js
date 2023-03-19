"use strict";(self.webpackChunklaboratory_lab=self.webpackChunklaboratory_lab||[]).push([[918],{5918:function(e,n,a){a.r(n),a.d(n,{default:function(){return S}});var t=a(4165),i=a(5861),s=a(1413),r=a(9439),c=a(2791),l=a(485),o={name:"",technics:"",alcaloids:"",selectMilimolles:"--Wybierz--",substract:"",selectReactionCondition:"--Wybierz--",solvents:[],startDate:"",finishDate:"",startTime:"",finishTime:"",isEdit:!0},u=function(e){var n=(0,c.useState)(0),a=(0,r.Z)(n,2),t=a[0],i=a[1];return{currentStepIdx:t,step:e[t],steps:e,isFirstStep:0===t,isLastStep:t===e.length-1,goTo:function(e){i(e)},next:function(){i((function(n){return n>=e.length-1?1:n+1}))},back:function(){i((function(e){return e<=0?1:e-1}))}}},h=a(184),d=function(e){return(0,h.jsxs)("div",{className:"radio__container",children:[(0,h.jsx)("input",{type:"radio",name:"",value:e.value,checked:e.value===e.checked,onChange:e.onChange,className:"radio",id:"id"}),(0,h.jsx)("label",{htmlFor:"id",children:e.value})]})},m=a(8816),f=["gramina","kofeina","nikotyna","sparteina"],p=function(e){var n=e.reaction,a=e.handleChange,t=function(e){return a({alcaloids:e.target.value})};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m.Z,{type:"text",name:"name",value:n.name,onChange:function(e){return a({name:e.target.value})},text:"Nazwa reakcji",placeholder:"Nazwa"}),(0,h.jsx)(m.Z,{type:"text",name:"technics",value:n.technics,onChange:function(e){return a({technics:e.target.value})},text:"Technika",placeholder:"Technika",classLabel:"",classInput:""}),(0,h.jsx)("p",{children:"Alkaloid"}),f.map((function(e){return(0,h.jsx)(d,{value:e,onChange:t,checked:n.alcaloids},e)}))]})},x=function(e){var n=(0,c.useState)(!1),a=(0,r.Z)(n,2),t=a[0],i=a[1],s=function(){i((function(e){return!e}))};return(0,h.jsxs)("div",{className:"select__container",children:[(0,h.jsx)("label",{className:"selec__label",children:e.label}),(0,h.jsxs)("div",{className:"select__options",children:[(0,h.jsxs)("div",{onClick:s,className:"select__top",style:{border:"1px solid black",width:"fix contemt"},children:[e.value,(0,h.jsx)("div",{className:t?"select__arrow--up":"select__arrow"})]}),t&&(0,h.jsx)(h.Fragment,{children:e.selectValues.map((function(n){return(0,h.jsx)("div",{onClick:function(){e.handleChange(n),s()},children:n},n)}))})]})]})},v=function(e){var n=e.handleChange,a=e.reaction;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{label:"Ilo\u015b\u0107 moli substratu",inputName:"selectMilimolles",selectValues:[1,2,3,4,5,6],value:a.selectMilimolles,handleChange:function(e){n({selectMilimolles:e})}}),(0,h.jsx)(m.Z,{type:"text",name:"substract",value:a.substract,onChange:function(e){n({substract:e.target.value})},text:"Substrat",placeholder:"Substrat"})]})},j=a(3433),g=function(e){return(0,h.jsx)("div",{children:(0,h.jsxs)("label",{className:e.classLabel,children:[(0,h.jsx)("input",{type:"checkbox",name:e.name,checked:e.checked,onChange:e.onChange,className:e.classInput}),(0,h.jsx)("div",{className:e.classStyledDiv,children:e.name})]})})},b=[{name:"CHCL3",key:0},{name:"CH3OH",key:1},{name:"DMF",key:2},{name:"DMSO",key:3},{name:"C2H5OH",key:4}],k=[!1,!1,!1,!1,!1],C=function(e){var n=e.reaction,a=e.handleChange,t=(0,c.useState)(k),i=(0,r.Z)(t,2),s=i[0],l=i[1];(0,c.useEffect)((function(){var e=(0,j.Z)(s);b.forEach((function(a,t){e[t]=n.solvents.includes(a.name)})),l(e)}),[n.solvents]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:"Rozpuszczalnik"}),b.map((function(e){var n=e.name,t=e.key;return(0,h.jsx)(g,{name:n,checked:s[t],onChange:function(){return function(e,n){var t=(0,j.Z)(s);t[e]=!t[e],l(t);var i=t.reduce((function(e,n,a){return n&&e.push(b[a].name),e}),[]);a({solvents:i})}(t)},classLabel:"",classInput:"",classStyledDiv:""},t)})),(0,h.jsx)(x,{label:"Warunki reakcji",inputName:"selectReactionCondition",selectValues:["mieszanie","ogrzewanie","mikrofala","ch\u0142odzenie"],value:n.selectReactionCondition,handleChange:function(e){a({selectReactionCondition:e})}})]})},z=function(e){var n=e.reaction,a=e.handleChange;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m.Z,{type:"date",name:"startDate",value:n.startDate,onChange:function(e){return a({startDate:e.target.value})},text:"Data rozpocz\u0119cia",placeholder:"",classLabel:"",classInput:""}),(0,h.jsx)(m.Z,{type:"date",name:"finishDate",value:n.finishDate,onChange:function(e){return a({finishDate:e.target.value})},text:"Data uko\u0144czenia",placeholder:"",classLabel:"",classInput:""}),(0,h.jsx)(m.Z,{type:"time",name:"startTime",value:n.startTime,onChange:function(e){return a({startTime:e.target.value})},text:"Godzina rozpocz\u0119cia",placeholder:"",classLabel:"",classInput:""}),(0,h.jsx)(m.Z,{type:"time",name:"finishTime",value:n.finishTime,onChange:function(e){return a({finishTime:e.target.value})},text:"Godzina zako\u0144czenia",placeholder:"",classLabel:"",classInput:""})]})},y=a(4942),Z=["Nazwa","Technika","Alkaloidy","Ilo\u015b\u0107 milimoli","Substrakt","Warunki reakcji","Rozpuszczalniki","Data rozpocz\u0119cia","Data zako\u0144czenia","Godzina rozpocz\u0119cia","Godzina zako\u0144czenia"],D=function(e){var n=e.reaction,a=Object.entries(n).map((function(e){var n=(0,r.Z)(e,2),a=n[0],t=n[1];return(0,y.Z)({},a,t)}));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:"Podsumowanie"}),(0,h.jsx)("ul",{children:a.map((function(e,n){var a=Object.values(e);return(0,h.jsxs)("li",{children:[Z[n],":\xa0",Array.isArray(a)?a.flat().join(", "):a]},crypto.randomUUID())}))})]})},S=function(){var e=(0,c.useState)(o),n=(0,r.Z)(e,2),a=n[0],d=n[1],m=function(e){d((function(n){return(0,s.Z)((0,s.Z)({},n),e)}))},f=u([(0,h.jsx)(p,{reaction:a,handleChange:m}),(0,h.jsx)(v,{reaction:a,handleChange:m}),(0,h.jsx)(C,{reaction:a,handleChange:m}),(0,h.jsx)(z,{reaction:a,handleChange:m}),(0,h.jsx)(D,{reaction:a,handleChange:m})]),x=f.steps,j=f.currentStepIdx,g=f.step,b=f.isFirstStep,k=f.isLastStep,y=f.back,Z=f.next;console.log("data",a);var S=(0,l.bY)(void 0),N=(S.data,S.error),_=S.isLoading,T=(S.refetch,(0,l.Os)()),w=(0,r.Z)(T,1)[0],I=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!k){e.next=6;break}return e.next=4,w(a);case 4:e.next=7;break;case 6:Z();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return _?(0,h.jsx)("div",{children:"Loading..."}):N&&"error"in N?(0,h.jsx)("div",{children:N.error}):(0,h.jsxs)("form",{onSubmit:I,style:{marginTop:150},children:[(0,h.jsxs)("p",{children:[j+1,"/",x.length]}),(0,h.jsx)(h.Fragment,{children:g}),(0,h.jsxs)("div",{className:"btns",children:[!b&&(0,h.jsx)("button",{type:"button",onClick:y,children:"Wr\xf3\u0107"}),(0,h.jsxs)("button",{type:"submit",children:[" ",k?"Wy\u015blij":"Dalej"]})]})]})}}}]);
//# sourceMappingURL=918.3806c7b5.chunk.js.map