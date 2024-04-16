export function problem (lines) {
    const distanciaTotalPercorrida = parseInt(lines.shift())
    const totalGastoLitros = parseFloat(lines.shift())

    let consumoMedio = distanciaTotalPercorrida / totalGastoLitros;
    console.log(`${consumoMedio.toFixed(3)} km/l`)
}