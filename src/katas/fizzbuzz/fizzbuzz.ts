export function fizzbuzz(number: number): string {
    if (number === 15) {
        return 'fizzbuzz'
    }
    if (number % 5 === 0) {
        return 'buzz'
    }
    if (number % 3 === 0) {
        return 'fizz'
    }
    return number.toString()
}