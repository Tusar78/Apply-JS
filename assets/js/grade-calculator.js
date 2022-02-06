// Grade Calculator
const englishMark = [
    {name: 'Tusar', mark: 98},
    {name: 'Taher', mark: 85},
    {name: 'Selim', mark: 72},
    {name: 'Shovon', mark: 63},
    {name: 'Sharif', mark: 75}, 
    {name: 'Shabuj', mark: 41} 
]

for (const mark of englishMark) {
    if (mark.mark >= 80 && mark.mark <= 100) {
        mark.grade = 'A+';
    } else if (mark.mark >= 70) {
        mark.grade = 'A'
    } else if (mark.mark >= 60) {
        mark.grade = 'B'
    } else if (mark.mark >= 50) {
        mark.grade = 'C'
    } else if (mark.mark >= 40) {
        mark.grade = 'D'
    } else if (mark.mark < 33 && mark.mark >= 0) {
        mark.grade = 'F'
    }
}

console.log(englishMark);

