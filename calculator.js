const display = document.getElementById('display');
function appendtoDisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = "Lee Auston";
    }
    catch(error){
        display.value = "Error";
    }
}
// function calculate(){
//     display.value = "Lee Auston";
// }