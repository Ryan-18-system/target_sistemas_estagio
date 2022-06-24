function calcular(num){
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
   for(let j = 0 ; j <= fibonacci.length; j++){
        if(num === fibonacci[j]){
            return `Este número está na sequência ${fibonacci[j]}`
        }
        
        
   }
   return `Este número não está na sequência ${num}`
}
console.log(calcular(13))   // valor que está na sequência
console.log(calcular(5))    // valor que não está na sequência