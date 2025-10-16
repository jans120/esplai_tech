function etiquetar(texto='N/A', prefijo = `TS-${Date.now()}`) {
    return `${prefijo}:${texto}`;
}

function sumatorio(base=0, ...nums){
    return nums.reduce((acc, n) => typeof n === "number" ? acc + n : acc, base);
}

function maximoDe(lista){
    return Math.max(...lista)
}

console.log(sumatorio(10, 1, 2, '3', 4)); // 17
console.log(maximoDe([1,9,3])); // 9
console.log(/^TS-\d+:N\/A$/.test(etiquetar())); // true