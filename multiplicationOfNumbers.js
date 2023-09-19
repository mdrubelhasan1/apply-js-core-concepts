// find value of 1*2*3*4*5*6*7 = ?

// factorial 
// 3! = 3*2*1
// 4! = 4*3*2*1


function factorial(number){
    let result = 1;
    for(let i = 1; i<= number; i++){
        result = result * i;
    }
    return result;
}
const result = factorial(9);
console.log(result);