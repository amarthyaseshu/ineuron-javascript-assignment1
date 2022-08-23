//Convert temperatures

//Case-1:convert celsius to fahrenheit

//input
let temperatureInCelsius=60;

//logging output
console.log(convertCelsiusToFahrenheit(temperatureInCelsius));

//function to convert celsius to fahrenheit
function convertCelsiusToFahrenheit(temperatureInCelsius){
    return ((temperatureInCelsius*9)/5)+32;
}


//Case-2:convert fahrenheit to celsius 

//input
let temperatureInFahrenheit=45;

//logging output
console.log(convertFahrenheitToCelsius(temperatureInFahrenheit));

//function to convert fahrenheit to celsius
function convertFahrenheitToCelsius(temperatureInFahrenheit){
    return ((temperatureInFahrenheit-32)*5)/9;
}
