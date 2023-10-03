/*// Get the required elements from the DOM
const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

// Add click event listener to the calculate button
calculateButton.addEventListener('click', calculateAge);

// Function to calculate the age
function calculateAge() {
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  
  // Calculate the age
  const ageInMilliseconds = today - birthdate;
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  
  // Display the result
  if(ageInYears >= 0) {
      resultElement.textContent = `Your are ${ageInYears} years old!`;
  }else{
    resultElement.textContent = 'Not valid input';
  }
}*/



var BirthDate = document.getElementById("birthdate");
var calculate = document.getElementById("calculate-btn");
var Result = document.getElementById("result");

calculate.addEventListener('click',calculateButton);

function calculateButton(){
    var birth=new Date(BirthDate.value);
    var today=new Date();
    var final=today-birth;
    var age=Math.floor(final / (1000 * 60 * 60 * 24 * 365.25));

    if(age>=0){
        Result.textContent=`You are ${age} years old!`;
    }/*else{
        Result.textContent='Not valid input';
    }*/
}