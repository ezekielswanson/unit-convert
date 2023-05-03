/*** Variables ***/

let input = document.getElementById("input_number");
const convertBtn = document.getElementById("convert-btn");
let baseValue = input.value;
let numberDisplay = document.getElementById('convertedNumbDisplay');
let numberDisplayTwo = document.getElementById('convertedNumbDisplay-2');
let numberDisplayThree = document.getElementById('convertedNumbDisplay-3');





/*** Functions  ***/

//click event 
// input value
//teplate literal 



//Conversion Numbers 

//Feet & Meters 
const meterToFeet =  3.281;
const feetToMeters = 0.3048;


//Gallon & Liter
const literToGallon = 0.264172;
const gallonToLiter = 3.78541;


//Gallon & Liter
const kilosToPounds = 2.20462;
const poundsToKilos = 0.453592;


convertBtn.addEventListener("click", function() {
    let baseValue = input.value;
    
    numberDisplay.textContent = 
    `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue * feetToMeters).toFixed(3)} meters`;


    
    numberDisplayTwo.textContent = ` 
    ${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | 
    ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters
    `

    numberDisplayThree.textContent = `
    ${baseValue} kilos = ${(baseValue * kilosToPounds).toFixed(3)} pounds | 
    ${baseValue} pounds = ${(baseValue * poundsToKilos).toFixed(3)} kilos
    `
    
});

