const avarageGrade = Math.round(Math.random() * 100)
console.log(avarageGrade)

if (avarageGrade >= 90) {
    console.log('Відмінно')
} else if (avarageGrade >= 80) {
    console.log('Дуже добре')
} else if (avarageGrade >= 70) {
    console.log('Добре')
} else if (avarageGrade >= 60) {
    console.log('Задовільно')
} else {
    console.log('Незадовільно')
}