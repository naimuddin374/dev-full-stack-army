const { add, isEven } = require('../app')

test('Should return correct addition value', () => {
    expect(add(2, 3)).toEqual(5)
    expect(add(13, 3)).toEqual(16)
    expect(add(7, 4)).toEqual(11)
})

test('5+8 should not return anything that is not 13', () => {
    expect(add(5, 8)).not.toEqual(24)
    expect(add(9, 2)).not.toEqual(12)
})

test('should throw an error if arguments are not number', () => {
    expect(() => add('a', 10)).toThrow();
})

test('isEven() should return true', () => {
    expect(isEven(10)).toBe(true)
    expect(isEven(22)).toBe(true)
    expect(isEven(9)).toBe(false)
})


test('isEven() should return false', () => {
    expect(isEven(11)).toBe(false)
    expect(isEven(22)).toBe(true)
    expect(isEven(9)).toBe(false)
})


test('isEven() should throw error', () => {
    expect(() => isEven('5')).toThrow()
    expect(() => isEven(undefined)).toThrow()
    expect(() => isEven('a')).toThrow()
    expect(() => isEven('')).toThrow()
    expect(() => isEven(true)).toThrow()
    expect(() => isEven(false)).toThrow()
})