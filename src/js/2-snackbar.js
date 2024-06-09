import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputElem = document.querySelector(".form")

inputElem.addEventListener("submit", (event)=>{
  event.preventDefault();
  const delay = event.target.delay.value;
  const state = event.target.state.value;
  const promise = new Promise((resolve, reject) =>
  setTimeout(()=> {
    if(state==="fulfilled") {
      resolve(delay) 
    } 
    else {
      reject(delay)
    }
  }, delay)
  );

  promise
  .then(delay=>{
    iziToast.success({
    message: `Fulfilled promise in ${delay}ms`,
    messageColor: '#FFFFFF',
    messageSize: '16',
    backgroundColor: '#59A10D',
    position: 'topRight',
    close: true,
    closeOnEscape: true,
    closeOnClick: true,
    progressBar: true,
    progressBarColor: '#326101',
  })
  }).catch(delay=>{
    iziToast.error({
    message: `Rejected promise in ${delay}ms`,
    messageColor: '#FFFFFF',
    messageSize: '16',
    backgroundColor: '#EF4040',
    position: 'topRight',
    close: true,
    closeOnEscape: true,
    closeOnClick: true,
    progressBar: true,
    progressBarColor: '#326101',
  })
})
})