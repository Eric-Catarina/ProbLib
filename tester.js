
let RolaDadoInteiros = (tipoDoDado) => {
    numMinimo = Math.ceil(tipoDoDado.numMinimo);
    numMaximo = Math.floor(tipoDoDado.numMaximo);
    return Math.floor(Math.random() * (tipoDoDado.numMaximo - tipoDoDado.numMinimo + 1)) + tipoDoDado.numMinimo;
}
let RolaDado = (tipoDoDado) => {
    return RolaDadoInteiros(tipoDoDado)
}
let AdicionaValorAoVetor = (valor, vetor) => {
    vetor.push(valor)
}
let RolaDadoVariasVezes = (tipoDoDado, quantidadeDeRoladas) => {
    let vetorValoresRolados = []
    for (let i = 0; i < quantidadeDeRoladas; i++) {
        AdicionaValorAoVetor(RolaDado(tipoDoDado), vetorValoresRolados)
    }
    return vetorValoresRolados
}
let CriaVetorComOsValoresPossiveis = (tipoDoDado) => {
    vetorValoresPossiveis = []
    for(let i = tipoDoDado.numMinimo; i <= tipoDoDado.numMaximo; i ++){
        AdicionaValorAoVetor(i, vetorValoresPossiveis)
    }
    return vetorValoresPossiveis
}
let InicializaVetorComValoresPossiveis = (vetor, tamanhoVetor) =>{
    for (let i = 0; i < tamanhoVetor; i++){
        vetor.push(i + 1)
    }
    
}
let PercorreVetorEJuntaValoresIguais = (vetorTodosNumRolados) =>{
    let vetorValoresPossiveis = CriaVetorComOsValoresPossiveis(tipoDoDado)
    let vetorValoresOrdenados = []
    InicializaVetorComValoresPossiveis(vetorValoresOrdenados, tipoDoDado.numMaximo)
    for (let contadorDoTotal = 0; contadorDoTotal < vetorTodosNumRolados.length; contadorDoTotal++){
        for (let valorPossivelAtual = 0; valorPossivelAtual < vetorValoresPossiveis.length; valorPossivelAtual++){
            if (vetorTodosNumRolados[contadorDoTotal] == vetorValoresPossiveis[valorPossivelAtual]){
                vetorValoresOrdenados.splice(vetorValoresOrdenados.lastIndexOf(valorPossivelAtual + 1), 0, vetorTodosNumRolados[contadorDoTotal])
            }
        }
    }
    return vetorValoresOrdenados
}

let vetorValoresTeste = [1,5,2,3,4,1,2,6,3,2,4,5,6]
const tipoDoDado = {
    numMinimo: 1,
    numMaximo: 6
}

console.debug(PercorreVetorEJuntaValoresIguais(vetorValoresTeste))


