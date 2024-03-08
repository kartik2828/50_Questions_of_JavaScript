function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Sum of result is: " + data);
}

function displayResultPassive(data){
    console.log("Sum is: " + data);
}

const ans = sum(1,2, displayResult); // passing function as an argument
//call back