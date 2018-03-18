import shim from '../src/shim'

describe('font-awesome v4 icon name shimming', () => {
  it('an icon not renamed', () => {
    const result = shim('address-book')
    expect(result).toEqual(['fas', 'address-book'])
  })
})
