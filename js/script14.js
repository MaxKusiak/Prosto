function bugagashenka(x, y){
    if(document.querySelectorAll(x)[0].style.display == 'none') {
        document.querySelectorAll(x)[0].style.display = 'block';
        document.querySelectorAll(y)[0].style.transform = 'rotate(225deg)';
    }else { 
        document.querySelectorAll(x)[0].style.display = 'none';
        document.querySelectorAll(y)[0].style.transform = 'rotate(45deg)'
    }
}