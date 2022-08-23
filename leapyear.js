//Find whether the given year is a leap year

//input
let year=2100;

//logging output
console.log(isLeapYear(year));

//function to find the leap year
function isLeapYear(year){
    if(year%4===0 ){
        if(year%100===0 ){
            if(year%400===0 ){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else{
        return false;
    }
}