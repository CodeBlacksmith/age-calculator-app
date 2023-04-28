// Select the form and add event
const form = document.querySelector('#formageApp');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // previene la acción por defecto del formulario

  // Select fields input date
const dayInput = document.querySelector('#txt-day');
const monthInput = document.querySelector('#txt-month');
const yearInput = document.querySelector('#txt-year');

  // Create msg Error
const dayError = document.querySelector('#error-day');
const monthError = document.querySelector('#error-month');
const yearError = document.querySelector('#error-year');

  
  dayError.textContent = '';
  monthError.textContent = '';
  yearError.textContent = '';

  // Get input value
const day = parseInt(dayInput.value);
const month = parseInt(monthInput.value);
const year = parseInt(yearInput.value);

  // validate inputs

  if(isNaN(day) || isNaN(month) || isNaN(year)){
    dayError.textContent = 'Ths field is required';
    monthError.textContent = 'This field is required';
    yearError.textContent = 'This field is required';
    
    msgError();
   
  }
    
  if (day < 1 || day > 31) {
    dayError.textContent = 'Must be a valid day';
    msgError();
  }
  if ( month < 1 || month > 12) {
  
    monthError.textContent = 'Must be a valid month';
    msgError();
  }
  if (year < 0 || year > new Date().getFullYear()) {
    yearError.textContent = 'Must be in the past';
    msgError();
   
  }
  if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    const date = new Date(year, month - 1, day);
    if (date.getMonth() !== month - 1 || date.getDate() !== day) {
      dayError.textContent = 'Must be a valid date';
      msgError();
    } else if (date > new Date()) {
      yearError.textContent = 'Must be in the past';
      msgError();
     
    }else {
      outputDate(year, month, day);
      restoreStyle();
      
    }
    
  }
  
});
// Function manage the errors

function msgError() {

  const lblRed = document.getElementsByClassName('lbl-label');
  const textRed = document.getElementsByClassName('txt-text');
   
  for(let i = 0; i < lblRed.length; i++){
    lblRed[i].style.color = "hsl(0, 100%, 67%)";
  }
  
  for(let i = 0; i < textRed.length; i++){
    textRed[i].style.borderColor = "hsl(0, 100%, 67%)";
  }

  reseter();
  
}
//functions reset

function restoreStyle() {

  const lblRed = document.getElementsByClassName('lbl-label');
  const textRed = document.getElementsByClassName('txt-text');
   
  for(let i = 0; i < lblRed.length; i++){
    lblRed[i].style.color = "hsl(0, 1%, 44%)";
  }
  
  for(let i = 0; i < textRed.length; i++){
    textRed[i].style.borderColor = "hsl(0, 0%, 8%)";
  }
  
}

function reseter(){
  const resetDay = document.querySelector('#state-day');
  const resetMonth = document.querySelector('#state-month');
  const resetYear= document.querySelector('#state-years');

    resetDay.textContent = '--';
    resetMonth.textContent = '--';
    resetYear.textContent = '--';

}

// function output date

function outputDate(years, months, days){
  
  const dayOutput = document.querySelector('#state-day');
  const monthOutput = document.querySelector('#state-month');
  const yearOutput = document.querySelector('#state-years');

  const date = new Date(years, months, days);
  const currentDate = new Date();

  const timeAge = currentDate.getTime() - date.getTime();

  const ageMiliseconds = new Date(timeAge);

  const age = Math.abs(ageMiliseconds.getUTCFullYear() - 1970);
  const monthy = ageMiliseconds.getUTCMonth() + 1;
  let nDays = currentDate.getDate() - date.getDate();

// Si el número de días es negativo, restamos un mes y lo sumamos al número de días
  if (nDays < 0) {
    monthy--;
    nDays += new Date(currentDate.getFullYear(), date.getMonth(), 0).getDate();
  }

  dayOutput.textContent = `${nDays}`;
  monthOutput.textContent = `${monthy}`;
  yearOutput.textContent = `${age}`;
  
}

