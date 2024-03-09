// Valores informados
const valores = [
    70, 72, 76, 77, 81, 83, 84, 86, 88, 92,
    70, 74, 76, 79, 82, 83, 84, 87, 89, 92,
    71, 75, 76, 79, 82, 84, 85, 87, 89, 90,
    71, 75, 77, 80, 82, 84, 85, 87, 90
];

// Função para calcular a tabela de frequência
function calcularTabelaFrequencia(valores) {
    // Ordena os valores
    valores.sort((a, b) => a - b);

    // Objeto para armazenar a frequência de cada valor
    const frequencia = {};
    let frequencia_acumulada = 0

    let limite_inferior = valores[0]
    let limite_superior = valores[38]

    // Contador para o total de valores
    let totalValores = 0;

    // Calcular a frequência de cada valor
    valores.forEach(valor => {
        if (frequencia[valor]) {
            frequencia[valor]++;
        } else {
            frequencia[valor] = 1;
        }
        totalValores++;
    });

    

    // Gerar a tabela de frequência
    console.log('Tabela de Frequência:');
    console.log('Valor | Frequência | frequencia relativa | frequencia acumulada | frequencia relativa acumulada');
    console.log(limite_superior)
    console.log('-----------------');
    for (const valor in frequencia) {
        const porcentagem = (frequencia[valor] / totalValores) * 100;
        frequencia_acumulada += frequencia[valor];
        console.log(`${valor} | ${frequencia[valor]} | ${porcentagem.toFixed(2)}% | ${frequencia_acumulada}`);
    }

    // Retorna o total de valores
    return totalValores;
}

// Chama a função para calcular a tabela de frequência
const totalValores = calcularTabelaFrequencia(valores);

let limite_inferior = valores[0]
let limite_superior = valores[38]

let sturges = 1 + 3.322 * Math.log10(totalValores);
sturges =  (sturges % 1) >= 0.5 ? Math.ceil(sturges) : Math.floor(sturges);
let class_height = (limite_superior - limite_inferior) / 5;
class_height = (class_height % 1) >= 0.5 ? Math.ceil(class_height) : Math.floor(class_height);

// Exibe o total de valores
console.log('Total de Valores:', totalValores);
console.log(sturges);
console.log(class_height);

const intervalos = [];
for (let i = 0; i < sturges; i++) {
    const limiteInferior = limite_inferior + i * class_height;
    const limiteSuperior = limiteInferior + class_height;
    intervalos.push([limiteInferior, limiteSuperior]);
}

// Exibe os intervalos para cada classe
console.log('Intervalos para Cada Classe:');
intervalos.forEach((intervalo, indice) => {
    console.log(`Classe ${indice + 1}: [${intervalo[0]} - ${intervalo[1]})`);
});
