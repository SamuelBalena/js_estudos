const peso1 = 1.0
const peso2 = Number("2.0")

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = peso1 * avaliacao1 + peso2 * avaliacao2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))