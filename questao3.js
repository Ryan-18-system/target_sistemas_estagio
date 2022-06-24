const dado = require('./dados.json')
const faturamentoCorrigido = dado.filter(valor => valor.valor > 0) // faturamento sem os dias que foram 0 no faturamento
const mediaMensal = faturamentoCorrigido.reduce((contador,valor) => contador+ valor.valor,0)/faturamentoCorrigido.length
const diasSuperiorMensal = faturamentoCorrigido.filter((contador)=> contador.valor > mediaMensal).length

const maiorValorMensal= (faturamentoCorrigido)=>{
    const valores = []
    for(let i = 0; i < faturamentoCorrigido.length; i++){
        valores.push(faturamentoCorrigido[i].valor)
    }
    return `Maior valor Mensal foi de ${Math.max(...valores).toFixed(3)}`
}
const menorValorMensal = (faturamentoCorrigido)=>{
    const valores = []
    for(let i = 0; i < faturamentoCorrigido.length; i++){
        valores.push(faturamentoCorrigido[i].valor)
    }
    return `Menor valor Mensal foi de ${Math.min(...valores).toFixed(3)}`
}

console.log(faturamentoCorrigido)
console.log(menorValorMensal(faturamentoCorrigido))
console.log(maiorValorMensal(faturamentoCorrigido))
console.log(`A quantidade de  dias superior a media Mensal foi de ${diasSuperiorMensal}`)
