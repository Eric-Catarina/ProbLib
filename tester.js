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
let InicializaVetorComZero = (vetor, tamanhoVetor) => {
    for (let i = 0; i < tamanhoVetor; i++){
        vetor.push(0)
    }
    return vetor
}
let PercorreVetorEJuntaValoresIguais = (vetorTodosNumRolados) =>{
    let vetorValoresPossiveis = CriaVetorComOsValoresPossiveis(tipoDoDado)
    let vetorValoresOrdenados = []
    let numVezesCadaNumeroCaiu = []
    numVezesCadaNumeroCaiu = InicializaVetorComZero(numVezesCadaNumeroCaiu, tipoDoDado.numMaximo)
    InicializaVetorComValoresPossiveis(vetorValoresOrdenados, tipoDoDado.numMaximo)
    for (let contadorDoTotal = 0; contadorDoTotal < vetorTodosNumRolados.length; contadorDoTotal++){
        for (let valorPossivelAtual = 0; valorPossivelAtual < vetorValoresPossiveis.length; valorPossivelAtual++){
            if (vetorTodosNumRolados[contadorDoTotal] == vetorValoresPossiveis[valorPossivelAtual]){
                vetorValoresOrdenados.splice(vetorValoresOrdenados.lastIndexOf(valorPossivelAtual + 1), 0, vetorTodosNumRolados[contadorDoTotal])
                numVezesCadaNumeroCaiu[valorPossivelAtual]  = numVezesCadaNumeroCaiu[valorPossivelAtual] +1
            }
        }
    }
    return { vetorValoresOrdenados, numVezesCadaNumeroCaiu} 
}

let vetorValoresTeste = [1,5,2,3,4,1,2,6,3,2,4,5,6]
const tipoDoDado = {
    numMinimo: 1,
    numMaximo: 6
}
let vetorTeste = RolaDadoVariasVezes(tipoDoDado, 4)
console.debug(PercorreVetorEJuntaValoresIguais(vetorTeste))