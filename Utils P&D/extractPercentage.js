//Seu plano de saude vai aumentar R$450,00. Qual o percentual de aumento em relação ao valor pago atualmente (R$1000,00)?
export default function extractPercentage (total, valor) {
  return (valor / total ) * 100 //(450 / 1000) * 100 = 45% (450 equivale a 45% de 1000)
}



//Sua conta veio R$1000,00. Porem no mes seguinte terá aumento percentual de 75%. Qual o valor percentual de aumento?
export default function extractValue (total, percentual) {
  return (total * percentual) / 100 // (1000 * 75) / 100  = R$750,oo (75% equivale a 750 de 1000)
}



