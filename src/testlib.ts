export function expect<T>(expected: T) {
    return {
        toBe(actual: T) {
            if (expected !== actual) {
                throw new Error(`❌ expected ${expected} but got ${actual}`)
            }
        }
    }
}

export async function test(name: string, callback: () => void | Promise<void>) {
    try {
        await callback()
        console.log(`✅ ${name}`)
    } catch (error) {
        console.error(`❌ ${name}`)
        console.error(error)
    }
}

export const it = test

export function describe(name: string, callback: () => void) {
    console.log(`📋 ${name}`)
    callback()
}
