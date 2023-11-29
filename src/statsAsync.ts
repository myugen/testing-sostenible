import * as stats from './stats'

export function sum(numbers: number[]): Promise<number> {
    return Promise.resolve(stats.sum(numbers))
}

export function average(numbers: number[]): Promise<number> {
    return Promise.resolve(stats.average(numbers))
}