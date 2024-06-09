import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const timeInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dayValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', '');

let userSelectedDate;
let interval = 0;

let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      startBtn.setAttribute('disabled', '');
      startBtn.classList.remove('right-date');
      
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        messageSize: '26',
        imageWidth: 302,
        close: true,
        closeOnEscape: true,
        progressBar: true,
        progressBarColor: '#b51b1b',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        });
        } else {
        startBtn.removeAttribute('disabled', '')
        startBtn.classList.add('right-date')
        }
        console.log(userSelectedDate);
  }
};

startBtn.addEventListener('click', () => {
  if (interval) clearInterval(interval);
  startBtn.setAttribute('disabled', '');
  startBtn.classList.remove('right-date');
  timeInput.setAttribute('disabled', '');
  convertMs();
  interval = setInterval(convertMs, 1000);
  })

let ms;

function convertMs(ms) {
  ms = userSelectedDate.getTime() - Date.now();

  if (ms < 0) {
    clearInterval(interval);
    timeInput.removeAttribute('disabled', '');
    return;
  };
           
        // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

        // Remaining days
      const days = Math.floor(ms / day);
        // Remaining hours
      const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
   
      dayValue.textContent = String(days).padStart(2, '0');
      hoursValue.textContent = String(hours).padStart(2, '0');
      minutesValue.textContent = String(minutes).padStart(2, '0');
      secondsValue.textContent = String(seconds).padStart(2, '0');
};

flatpickr(timeInput, options);