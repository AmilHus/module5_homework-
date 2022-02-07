let x = prompt();
x = +x;

console.log(x);
if (typeof (x) == "number"){
    if (isNaN(x)){
        console.log("Упс, кажется, вы ошиблись");
    }

    else if (x % 2 == 0){
        console.log("четное");
    }
    else{
        console.log("нечетное");
    }
}
else{
    console.log("Упс, кажется, вы ошиблись");
}


