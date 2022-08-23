// Factorial of a number

//input
let numberToFindFactorial=15;

//logging output
console.log(findFactorial(numberToFindFactorial));

//function to find the factorial
function findFactorial(num){
        if(num===0 || num===1){
        return 1;
    }else{
        let factorial=num;
       while(num>1){
        factorial=factorial*(num-1);
        num--;
       }
       return factorial;
    }


};
