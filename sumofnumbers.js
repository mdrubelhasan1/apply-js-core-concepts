// 1+2+3+4+5+6+7=?
// Using for loop to get sum 1 to 7 number:
let sum = 0;
for(let i = 1; i <=7; i++){
    sum = sum + i;
    console.log(i, sum);
}
console.log('la ilaha ilallahu muhammadur rasulullah (sm)');
// Using function to get sum 1 to 7 number:
function sumOfNumbers(number){
    let sum = 0;
    for(let i = 1; i <=number; i++){
        sum = sum + i;
        console.log(i, sum);
    }
    return sum; 
}
sumOfNumbers(10);