// simple way to create a calculater 
/*
function calculate(a,b,type){
    if(type == "sum"){
return a + b;
    }
    if(type == "Sub"){
        return a - b;
            }
}

const value = calculate(2,4,"sum")
console.log(value)

*/


// A bit complex meathod 

function calculater(a,b,type){
    if (type=="sum"){
        const value = sum(a,b);
        return value;
    }
    if (type=="sub"){
        const value = sub(a,b);
        return value;
    }
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value = calculater(2,5,"sub");
console.log(value);

