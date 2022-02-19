let styles = ['Джазз', 'Блюз'];
styles.push('Рок-н-рол');
// console.log(styles);
styles.find(function fin(){
    let x = Math.floor(styles.length / 2);
    styles.splice(x, 1, 'Класика');
})
let delet = styles.shift();
console.log(delet);
styles.unshift('Реп', 'Реггі');
console.log(styles);