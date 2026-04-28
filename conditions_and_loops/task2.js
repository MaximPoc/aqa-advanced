const avarageGrade = Math.round(Math.random() * 100)
console.log(avarageGrade)
let grade
switch (true) {
    case avarageGrade > 100:
        grade = 'Ну ти вобще машина... це реально не можливо'
        break
    case avarageGrade >= 90:
        grade = 'Відмінно'
        break
    case avarageGrade >= 80:
        grade = 'Дуже добре'
        break
    case avarageGrade >= 70:
        grade = 'Добре'
        break
    case avarageGrade >= 60:
        grade = 'Задовільно'
        break
    case avarageGrade < 60:
        grade = 'Незадовільно'
        break
}
console.log(grade)