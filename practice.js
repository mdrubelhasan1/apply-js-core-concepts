
// LeapYear program:

function isLeapYear(years){
    let leapYear = [];
    for(let i = 0; i <= years.length; i++){
        let index = i;
        let element = years[index];
        if(element % 4 === 0){
            console.log(index, element);
            leapYear.push(element);
        }
    }
    return leapYear;

}

// let myYears = [2023, 2024, 2025, 2028, 2030];
// let leapYear = isLeapYear(myYears);
// console.log(leapYear);


// convert hours to minuites program:

function hoursToMinutes(hours){
    let minuite = hours * 60;
    return minuite; 
}
let myHours = 3;
let minuites = hoursToMinutes(myHours);
// console.log(minuites);

function isLeapYear(years){
    let leapYear = [];
    for( let i = 0; i <= years.length; i++){
        let index = i;
        let element = years[index];
        if(element % 4 ===0){
            console.log(index, element);
           leapYear.push(element);
        }
    }
    return leapYear;
}
let myYears = [2023, 2024, 2025, 2028, 2030];
let leapYear = isLeapYear(myYears);
console.log(leapYear);