jest.mock('@fortawesome/react-fontawesome')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mount } from 'enzyme'
import React from 'react'
import Icon, { isV4 } from '../src'

(FontAwesomeIcon as jest.Mock).mockImplementation(() => <svg />)

describe('wrapper component should work', () => {
  it('should detect icon version with simple props', () => {
    expect(isV4({})).toBe(false)

    expect(isV4({ name: 'github' })).toBe(true)
    expect(isV4({ icon: 'github' })).toBe(true)

    expect(isV4({ icon: 'github', tag: 'span' })).toBe(true)
    expect(isV4({ name: 'github', tag: 'span' })).toBe(true)
    expect(isV4({ icon: 'github', fa: true })).toBe(true)
    expect(isV4({ name: 'github', fa: true })).toBe(true)

    expect(isV4({ name: 'github', fas: true })).toBe(false)
    expect(isV4({ name: 'github', far: true })).toBe(false)
    expect(isV4({ name: 'github', fal: true })).toBe(false)
    expect(isV4({ name: 'github', fab: true })).toBe(false)
    expect(isV4({ icon: 'github', fas: true })).toBe(false)
    expect(isV4({ icon: 'github', far: true })).toBe(false)
    expect(isV4({ icon: 'github', fal: true })).toBe(false)
    expect(isV4({ icon: 'github', fab: true })).toBe(false)

    expect(isV4({ icon: ['fab', 'github'] })).toBe(false)
  })
})
