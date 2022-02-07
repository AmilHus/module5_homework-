let x = new Map([
    ["name","Amil"],
    ["surname","Huseynov"],
    ["age",18]
]);

for (let k of x.keys()){
    a = x.get(k);
    console.log(`Ключ — ${k}, значение — ${a}`);

}