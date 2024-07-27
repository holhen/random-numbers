import { getRandomNumber } from "../utils";

describe('Utility functions', () => {
    test('getRandomNumber', () => {
        const start = 1;
        const end = 99;
        const floor = 0;
        Math.floor = jest.fn().mockReturnValue(floor);
        const randomNumber = getRandomNumber(start, end);
        expect(randomNumber).toEqual(1);
    })
})