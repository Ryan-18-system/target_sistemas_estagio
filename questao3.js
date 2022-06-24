const dado = require('./dados.json')
const faturamentoCorrigido = dado.filter(valor => valor.valor > 0)
const mediaMensal = faturamentoCorrigido.reduce((contador,valor) => contador+ valor.valor,0)/faturamentoCorrigido.length
const diasSuperiorAnual = faturamentoCorrigido.filter((contador)=> contador.valor > mediaMensal).length

const maiorValorMensal= (faturamentoCorrigido)=>{
    const valores = []
    for(let i = 0; i < faturamentoCorrigido.length; i++){
        valores.push(faturamentoCorrigido[i].valor)
    }
    return Math.max(...valores)
}
const menorValorMensal = (faturamentoCorrigido)=>{
    const valores = []
    for(let i = 0; i < faturamentoCorrigido.length; i++){
        valores.push(faturamentoCorrigido[i].valor)
    }
    return Math.min(...valores)
}

console.log(faturamentoCorrigido)
console.log(menorValorMensal(faturamentoCorrigido).toFixed(3))
console.log(maiorValorMensal(faturamentoCorrigido).toFixed(3))
console.log(diasSuperiorAnual)
