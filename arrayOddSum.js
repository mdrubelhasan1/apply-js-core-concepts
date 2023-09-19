function getOddNumbersOfAnArray(numbers){
    const oddnumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
            console.log(index, element);
            oddnumbers.push(element);
        }
    }
    return oddnumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddnumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddnumbers);
const oddnumberSum = getOddNumbersOfAnArray(oddnumbers);
console.log( 'odd numbers sum:', oddnumberSum);

