const num1 = ['rubel', 'rana','hasan', 'jahid'];

console.log (num1[2]);
num1[2] = 'robiul';
num1.push('raiyan');
console.log(num1);
for(i= 0; i< 10; i++){
    console.log(i);
    // console.log('allah sorbosoktiman..');
}
let age = 25;

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 188;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 72;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);