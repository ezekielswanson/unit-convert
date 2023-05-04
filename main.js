/*** Variables ***/

let input = document.getElementById("input_number");
const convertBtn = document.getElementById("convert-btn");
let baseValue = input.value;
let numberDisplay = document.getElementById('convertedNumbDisplay');
let numberDisplayTwo = document.getElementById('convertedNumbDisplay-2');
let numberDisplayThree = document.getElementById('convertedNumbDisplay-3');





//Storing converstion #'s in object

let conversion = {
    meterToFeet:  3.281,
    feetToMeters: 0.3048,
    literToGallon : 0.264172,
    gallonToLiter: 3.78541,
    kilosToPounds:  2.20462,
    poundsToKilos: 0.453592
}



//Function handle convserions 

function convertNumber(baseValue,conversionRate) {
    return (baseValue * conversionRate).toFixed(3);

}

convertBtn.addEventListener("click", function() {
    let baseValue = input.value;
    

    numberDisplay.textContent =
    //Pasing in the values we want to compute? - why is function inside of template literal
    //confused b/c the function is not a varialbe persay
    `${baseValue} meters =  ${convertNumber(baseValue,conversion.meterToFeet)} feet | 
    ${baseValue} feet = ${convertNumber(baseValue,conversion.feetToMeters)} meters
    `

    numberDisplayTwo.textContent = 
    `${baseValue} liters =  ${convertNumber(baseValue,conversion.literToGallon)} gallons | 
    ${baseValue} gallons = ${convertNumber(baseValue,conversion.gallonToLiter)} liters
    `


    numberDisplayThree.textContent = 
    `${baseValue} kilos  =  ${convertNumber(baseValue,conversion.kilosToPounds)} gallons | 
    ${baseValue} pounds = ${convertNumber(baseValue,conversion.poundsToKilos)} kilos
    `
    
});

