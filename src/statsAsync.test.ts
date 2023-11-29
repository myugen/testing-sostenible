import {average, sum} from "./statsAsync";

describe('Asynchronous stats should', () => {
    it('calculate the sum of all elements of the array', async () => {
        const result = await sum([1, 2, 3]);
        const expected = 6;

        expect(expected).toBe(result)
    })

    it('calculate the average of all elements of the array', async () => {
        const result = await average([1, 2, 3]);
        const expected = 2;

        expect(expected).toBe(result)
    })
})
