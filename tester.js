
let RolaDadoInteiros = (numMinimo, numMaximo) => {
    numMinimo = Math.ceil(numMinimo);
    numMaximo = Math.floor(numMaximo);
    return Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo;
}
let RolaDadoFloat = (numMinimo, numMaximo) => {
    return Math.random() * (numMaximo - numMinimo) + numMinimo
}

let RolaDado = (numMinimo, numMáximo, tipoDoNumero) => {
    if (tipoDoNumero == "int") {
        return RolaDadoInteiros(numMinimo, numMáximo)
    }
    if (tipoDoNumero == "float") {
        return RolaDadoFloat(numMinimo, numMáximo)
    }
};

console.debug(RolaDado(1, 6 , "float"))