let ms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mss = ms[1];

let gg = ['vanilla', 'late', 'chocolate'];

alert(gg[1]);
gg[1] = 'true';  //замена элемента массива по индексу/ключу

alert(gg[1]);
alert(gg);
// индексы массива идут с 0, а подсчет с 1!!!
let ngg = gg.length;
alert(ngg);

//Math.floor округляет вниз
//Math.ceil округляет верх
//Mth.random() возвращает псевдослучайное число в интервале от 0 до 1
function bebe(){
    let words1 = ['24/7', 'Каждый день', 'Сегодня', 'Постоянно', 'Неприрывно'];
    let words2 = ['Мы', 'команда', 'компания', 'сотрудники', 'персонал'];
    let words3 = ['работаем не покладая рук', 'отдыхаем на работе', 'делаем чудеса'];

    let rand1 = Math.floor(Math.random() * words1.length);
    let rand1 = Math.floor(Math.random() * words2.length);
    let rand1 = Math.floor(Math.random() * words3.length);

    let phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
}
bebe();