const valorEstado = [{estado: 'SP',valor:67.83643},{estado:'RJ', valor:36.67866},{estado:'ES', valor:27.16548},{estado:'MG', valor: 29.22988},{estado:'Outros', valor:19.84953}]
function calculaPercentual(estado){
    const percenturalTotal = valorEstado.reduce((contador,valor)=> contador+valor.valor,0 ) 
    const uf = estado.toUpperCase();
    let percentualDoEstado = 0
    for(let i = 0; i < valorEstado.length; i++){
        if(uf === valorEstado[i].estado){
            percentualDoEstado = (valorEstado[i].valor * 100) / percenturalTotal
        }
    }
    return `Percentural de ${uf} => ${percentualDoEstado.toFixed(1)}%`
} 

console.log(calculaPercentual('es'))