import { getRandomNumber } from "../utils";

describe('Utility functions', () => {
    test('getRandomNumber', () => {
        const number = 0;
        Math.floor = jest.fn().mockReturnValue(number);
        const randomNumber = getRandomNumber();
        expect(randomNumber).toEqual(1);
    })
})