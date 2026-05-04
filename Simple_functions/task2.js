let age 
age = Math.round(Math.random() * 100)
console.log(`Age: ${age}`)
function isAdult(age) {
    return age >= 18
}
console.log('Is adult:', isAdult(age))