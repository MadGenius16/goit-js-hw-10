import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as b,i as g}from"./assets/vendor-77e16229.js";const i=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),p=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");e.setAttribute("disabled","");let a,s=0,y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],a<new Date?(e.setAttribute("disabled",""),e.classList.remove("right-date"),g.error({message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",messageSize:"26",imageWidth:302,close:!0,closeOnEscape:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"flipInX",transitionOut:"flipOutX"})):(e.removeAttribute("disabled",""),e.classList.add("right-date")),console.log(a)}};e.addEventListener("click",()=>{s&&clearInterval(s),e.setAttribute("disabled",""),e.classList.remove("right-date"),i.setAttribute("disabled",""),l(),s=setInterval(l,1e3)});function l(t){if(t=a.getTime()-Date.now(),t<0){clearInterval(s),i.removeAttribute("disabled","");return}const c=1e3,n=c*60,o=n*60,r=o*24,d=Math.floor(t/r),u=Math.floor(t%r/o),m=Math.floor(t%r%o/n),f=Math.floor(t%r%o%n/c);p.textContent=String(d).padStart(2,"0"),h.textContent=String(u).padStart(2,"0"),S.textContent=String(m).padStart(2,"0"),v.textContent=String(f).padStart(2,"0")}b(i,y);
//# sourceMappingURL=commonHelpers.js.map