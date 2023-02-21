const { getWords } = require('../getWords')

test('Should throw an error if it is not a string', () => {
    expect(() => getWords(100)).toThrow()
    expect(() => getWords(true)).toThrow()
    expect(() => getWords(false)).toThrow()
    expect(() => getWords()).toThrow()
    expect(() => getWords(null)).toThrow()
    expect(() => getWords(['words'])).toThrow()
    expect(() => getWords({ name: 'words' })).toThrow()
})

test('Should return the same string fi the argument is a word', () => {
    expect(getWords('Person')).toBe('Person')
    expect(getWords('Person')).toBe('Person')
    expect(getWords('JavaScript')).toBe('JavaScript')
})

test('Should return the array of string', () => {
    const words = getWords('Naim Uddin')
    expect(words).toHaveLength(2)
    expect(words).toContain('Naim')

    const words2 = getWords('Test Driven Development')
    expect(words2).toHaveLength(3)
    expect(words2).toContain('Driven')
})