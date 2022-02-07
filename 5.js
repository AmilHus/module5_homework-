let arr = [3,2,3,99];

console.log("Количество элементов:" + arr.length);

arr = arr.map(function(item,index,array){
    console.log(item);;
})