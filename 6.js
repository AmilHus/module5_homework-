let arr = [3,3,3,3];
let x = arr.length;
for (let i = 0; i < x;i++){
    if (arr[0] === arr[1]){
        arr.shift();
    }
}
if(arr.length === 1 ){
    console.log("true");
}
else {
    console.log("false")
}