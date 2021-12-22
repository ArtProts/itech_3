let min = 5;// минимуим студентов в группе
let max = 30;// максимум студентов в группе
let five = 0;// количество студентов n-ных груп
let four = 0;
let three = 0;
let two = 0;
//класс студент
class student {
    constructor(names) {
        this.name = names[generateNumber(0,listNames.length -1)];
        this.progress = 5;
        this.marks = [];
        for (let i = 0; i < 5; i++) {
            this.marks.push(generateNumber(2,6));
            if(this.marks[i] < this.progress ) {
                this.progress = this.marks[i];
            }
        }
    }
}
// функция генерации случайного числа в диапозоне от min до max
function generateNumber(min,max){
    return (Math.random() * (max - min) + min).toFixed(0);
}
//функция создания и добавления студента в массив студентов
function createStudent(students,min, max){
    let stdAmount = generateNumber(min,max);
    for (let i = 0; i < stdAmount; i++) {
        let newStudent = new student(listNames);
        students.push(newStudent);
    }

}
// Список случайных фамилий
let listNames = ["Проценко","Тимофеев","Пушкаревский","Лобанов","Мирошник","Верхоломов","Жидков","Курьянов","Добровольский","Федоренко","Кириленко","Мишутин","Пономаренко","Цесаренко","Кривич","Аралин","Федченко","Басараб"];
let listStudents = [];// массив студентов
//функция генерации списка успеваемости
function generateList(students){
    let html = ""; // html списка студентов
    createStudent(students,min,max);
    students.sort(function (a, b){ // сортировка студентов по убыванию
        return b.progress - a.progress;
    });
    for (let i = 0; i < students.length; i++) {
        html+="<p>" + students[i].name + " - ";
            switch (+students[i].progress) {// определение группы студента
            case 5: html+= "отличник";
                ++five; break;
            case 4: html+= "хорошист";
                ++four; break;
            case 3: html+= "средний";
                ++three; break;
            case 2: html+= "неуспевающий";
                ++two; break;
                default: alert( 'd' ); break;
        }
        html+="</p>";
    }
    html+="<p>Отличники: "+five+" Хорошисты: "+four+" Средние: "+three+" Неуспивающие: "+two+"</p>";
    document.querySelector("#studentsList").innerHTML = html;
}
generateList(listStudents);



