/*** Variables ***/

let input = document.getElementById("input_number");
const convertBtn = document.getElementById("convert-btn");
let numberDisplay = document.getElementById('')
let baseValue = input.value;





/*** Functions  ***/

//click event 
// input value
//teplate literal 



/* meters to feet 

baseValue / 3.28084

let number = Math.floor(baseValue/3.28084);
numberConvertd.toFixed(3);
*/

//run funct handles math

function conversions() {
    const meterToFeet =  3.281;
}



convertBtn.addEventListener('click', function() {
    let baseValue = input.value;
    let convertedFeet = baseValue / 3.28084;

     let convertedDisplay = `<span>${baseValue} feet = ${convertedFeet * meterToFeet } meters;
     </span>`
})

convertedDisplay.innerHTML;