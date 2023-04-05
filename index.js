const form = document.querySelector('.form');
const dayTitle = document.querySelector('.dayText');
const daysInput = document.querySelector('.day');
const errorDay = document.querySelector('.errorDay');
const monthTitle = document.querySelector('.monthText');
const monthsInput = document.querySelector('.month');
const errorMonth = document.querySelector('.errorMonth');
const yearTitle = document.querySelector('.yearText');
const yearsInput = document.querySelector('.year');
const errroYear = document.querySelector('.errorYear');
const formBtn = document.querySelector(".formBtn")

daysInput.addEventListener('input', function () {
  if (value.length > 2) {
    value = value.slice(0, 2);
  }
});

monthsInput.addEventListener('input', function () {
  if (value.lentgh > 2) {
    value = value.slice(0, 2);
  }
});

monthsInput.addEventListener("input", function(){
    if (value > 4){
        value = value.slice(0, 4)

    }
})

formBtn.addEventListener("click", ()=> {
    let setDay = daysInput.value
})