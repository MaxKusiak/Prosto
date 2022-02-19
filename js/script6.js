chislo: for(let x = 0; x <= 100; ){
    x = prompt("Введите число больше 100");
    
    if(x > 100 || x == null){
        break
    }else{
        continue chislo;
    }
}