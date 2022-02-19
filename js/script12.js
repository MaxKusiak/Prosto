// let headingElement = document.getElementById('main-heading').innerHTML; // найди элемент с айди main-heading в html
// let headingElement = document.querySelectorAll('')          // это в цсс
// let headingElement = document.getElementsByTagName(name)
// let headingElement = document.getElementsByClassName(name)
let x = document.getElementsByTagName("li");
// console.log(x);
for(let i = 0; i < x.length; i++){
    x[i].innerHTML = "ВСЕ";
}