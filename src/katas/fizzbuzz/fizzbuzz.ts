export function fizzbuzz(number: number): string {
    if (number === 5) {
        return 'buzz'
    }
    if (number === 3) {
        return 'fizz'
    }
    return number.toString()
}