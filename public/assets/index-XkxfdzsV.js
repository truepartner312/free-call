import{r as l,j as e}from"./index-ZFG7eosR.js";import{G as x}from"./GoBack-IlI3GHoF.js";const r=["bt-0","bt-10","bt-20","bt-40","bt-60","bt-80","bt-100"],m=()=>{const[i,s]=l.useState(0),[c,n]=l.useState(0);l.useEffect(()=>{"getBattery"in navigator?navigator.getBattery().then(t=>{a(t.level*100),t.addEventListener("levelchange",function(){a(t.level*100)})}):console.log("Battery Status API is not supported in this browser.")},[]);const a=t=>{n(t),t>=85?s(6):t>=60?s(5):t>=50?s(4):t>=35?s(3):t>=20?s(2):t>=10?s(1):s(0)};return e.jsxs("div",{className:"container-primary",children:[e.jsx("div",{className:"p-2 flex justify-end",children:e.jsx(x,{})}),e.jsxs("div",{className:"flex flex-col justify-center p-8 h-full overflow-auto items-center",children:[e.jsx("div",{className:"text-4xl ",children:"充電残量"}),e.jsxs("div",{className:"text-3xl my-2",children:[c,"%"]}),e.jsx("div",{className:"h-full flex flex-col items-center justify-center",children:e.jsx("div",{className:`${r[i]}`})}),e.jsx("div",{className:"text-2xl my-1",children:"当社のメールアドレスです"}),e.jsx("div",{className:"text-2xl my-1",children:"jo-ene.123@jacos.co.jp"}),e.jsx("div",{className:"text-2xl text-center my-1",children:"ご意見、ご要望はお気軽におよせ下さい"}),e.jsx("button",{className:"px-4 py-2 bg-gray-400 rounded-md text-2xl text-white",children:"問い合わせ"}),e.jsx("div",{className:"text-2xl my-1",children:"上記ボタンからメールが送れます"})]})]})};export{m as default};
