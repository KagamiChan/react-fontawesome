import shim from '../src/shim'

describe('font-awesome v4 icon name shimming', () => {
  it('an icon not renamed', () => {
    const result = shim('address-book')
    expect(result).toEqual(['fas', 'address-book'])
  })

  it('an icon that is moved to brands set', () => {
    const result = shim('deviantart')
    expect(result).toEqual(['fab', 'deviantart'])
  })

  it('an icon that is renamed', () => {
    const result = shim('rmb')
    expect(result).toEqual(['fas', 'yen-sign'])
  })

  it('an icon that is renamed and moved', () => {
    const result = shim('google-plus')
    expect(result).toEqual(['fab', 'google-plus-g'])
  })
})
