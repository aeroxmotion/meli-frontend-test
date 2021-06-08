const FRACTION_DIGITS = 2
const FORMAT_REGEX = /\d(?=(\d{3})+,)/g

// Seems the better solution: https://stackoverflow.com/a/14428340/11992125
export function formatItemPrice(amount: number) {
  return `$ ${amount
    .toFixed(2)
    .replace('.', ',')
    .replace(FORMAT_REGEX, '$&.')
    .replace(`,${'0'.repeat(FRACTION_DIGITS)}`, '')}`
}

export function formatItemPriceDecimals(decimals: number) {
  return `0${decimals}`.slice(-2)
}
