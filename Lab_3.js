let min = 10;// минимуим студентов в группе
let max = 40;// максимум студентов в группе
let great = 0;// количество студентов n-ных груп
let good = 0;
let middle = 0;
let bad = 0;
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
                ++great; break;
            case 4: html+= "хорошист";
                ++good; break;
            case 3: html+= "среднячок";
                ++middle; break;
            case 2: html+= "неуспевающий";
                ++bad; break;
                default: alert( 'd' ); break;
        }
        html+="</p>";
    }
    html+="<p>Отличники: "+great+" </p><p>Хорошисты: "+good+" </p><p>Среднячков: "+middle+" </p><p>Неуспевающие: "+bad+"</p>";
    document.querySelector("#studentsList").innerHTML = html;
}
generateList(listStudents);



