console.log("Hello World")

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs["USD"]
    // retornamos el valor
    return parseFloat(valueInDollar.toFixed(2));
}

const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * oneEuroIs["JPY"]
    // retornamos el valor
    return parseFloat(valueInYen.toFixed(2));
}
const fromYenToPound = function(valueInYen) {
    // convertimos el valor a dolares
    let euro = valueInYen / oneEuroIs.JPY
    let valueInPound = euro * oneEuroIs.GBP
    //let valueInPound = valueInYen * oneEuroIs["GBP"]
    // retornamos el valor
    return parseFloat(valueInPound.toFixed(2));
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}
//const fromEuroToDollar = (euro) => {
// let resultado = euro * oneEuroIs.USD
// return resultado
//}
// just a console log for ourselves.

console.log(fromYenToPound(537.18))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {
    sum,
    fromEuroToDollar,

    fromDollarToYen,

    fromYenToPound
};