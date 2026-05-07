const length = Math.round(Math.random() * 100)
const width = Math.round(Math.random() * 100)
console.log(`length: ${length}`)
console.log(`width: ${width}`)
// arrow function
const squareArea = (length, width) => {
    const area1 = length * width
    return area1
}
console.log("arrow function: ", squareArea(length, width))



// function declaration
function squareArea2(length, width) {
    const area2 = length * width
    return area2
}
console.log("function declaration: ", squareArea2(length, width))




// function expression
const squareArea3 = function (length, width) {
    const area3 = length * width
    return area3
}
console.log("function expression: ", squareArea3(length, width))