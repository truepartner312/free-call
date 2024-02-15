import{r as t,j as e,a as d,S as i}from"./index-ZFG7eosR.js";import{G as x}from"./GoBack-IlI3GHoF.js";function m({title:s,titleId:r,...a},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":r},a),s?t.createElement("title",{id:r},s):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"}))}const v=t.forwardRef(m),p=v;function u({title:s,titleId:r,...a},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":r},a),s?t.createElement("title",{id:r},s):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const f=t.forwardRef(u),g=f,b=()=>{const[s,r]=t.useState("personal"),[a,n]=t.useState(""),[o,c]=t.useState(""),h=async()=>{try{if(!a.length||!o.length)throw Error("Input Field");await d.post("/contacts",{contacts:[{phone:o,name:a}],type:s}),i.fire({icon:"success",text:"Contack Create Successfully.",confirmButtonText:"はい"}),n(""),c("")}catch(l){i.fire({icon:"error",text:l instanceof Error?l.message:"Unknown Error.",confirmButtonText:"はい"})}};return e.jsxs("div",{className:"container-primary",children:[e.jsxs("div",{className:"p-2 bg-[#918283] text-white text-lg font-[hkgyokk] flex",children:[e.jsx("span",{children:"相手の名前と電話番号と【個人用】か【会社用】かを決めて下さい。"}),e.jsx(x,{})]}),e.jsxs("div",{className:"py-2 px-4 h-full bg-[#cbcbcb]",children:[e.jsx("div",{className:"text-lg mt-3",children:"相手氏名"}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"py-1 px-2 bg-[#e9ecef] rounded-l-md",children:e.jsx(g,{width:36})}),e.jsx("input",{value:a,onChange:l=>n(l.target.value),className:"w-full text-lg py-1 px-4 rounded-r-md"})]}),e.jsx("div",{className:"text-lg mt-3",children:"電話番号"}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"py-1 px-2 bg-[#e9ecef] rounded-l-md",children:e.jsx(p,{width:36})}),e.jsx("input",{value:o,onChange:l=>c(l.target.value),className:"w-full text-lg py-1 px-4 rounded-r-md"})]}),e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("div",{onClick:()=>r("personal"),className:`text-[#198754] py-3 px-3 rounded-l-md border border-[#198754] ${s==="personal"?"btn-green text-white":""} `,children:e.jsxs("label",{className:"flex  font-[hkgyokk] text-2xl items-center gap-2",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"}),e.jsx("path",{d:"M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})]})," 個人用"]})}),e.jsx("div",{onClick:()=>r("company"),className:`text-[#198754] py-3 px-3 rounded-r-md border border-l-0  border-[#198754]  ${s==="company"?"btn-green text-white":""} `,children:e.jsxs("label",{className:"flex  font-[hkgyokk] text-2xl items-center gap-2",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"}),e.jsx("path",{d:"M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"})]})," 会社用"]})})]}),e.jsx("div",{className:"w-full flex justify-center mt-4",children:e.jsx("button",{onClick:h,className:"btn-green font-[hkgyokk] rounded-md text-4xl text-white w-[80%] px-6 py-2",children:"登録"})})]})]})};export{b as default};
