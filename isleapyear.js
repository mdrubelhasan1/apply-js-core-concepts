function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
        }
        else{
            return false;
        }
}
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
        }
        return false;
     
}
const myYear = isLeapYear(2023);
console.log(myYear);