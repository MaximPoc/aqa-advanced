let age 
age = Math.round(Math.random() * 100)
console.log(`Age: ${age}`)
function isAdult(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
console.log('Is adult:', isAdult(age))