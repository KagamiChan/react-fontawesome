jest.mock('@fortawesome/react-fontawesome')
import faGithub from '@fortawesome/free-brands-svg-icons/faGithub'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mount } from 'enzyme'
import { last } from 'lodash'
import React from 'react'
import Icon, { isV4 } from '../src'

(FontAwesomeIcon as jest.Mock).mockImplementation(() => <svg />)

describe('v4 icon detection should work', () => {
  it('should detect icon version with simple props', () => {
    expect(isV4({})).toBe(false)

    expect(isV4({ icon: 'github', v5: true })).toBe(false)
    expect(isV4({ name: 'github', v5: true })).toBe(false)

    expect(isV4({ icon: 'github', tag: 'span' })).toBe(true)
    expect(isV4({ name: 'github', tag: 'span' })).toBe(true)

    expect(isV4({ name: 'github', fas: true })).toBe(false)
    expect(isV4({ name: 'github', far: true })).toBe(false)
    expect(isV4({ name: 'github', fal: true })).toBe(false)
    expect(isV4({ name: 'github', fab: true })).toBe(false)
    expect(isV4({ icon: 'github', fas: true })).toBe(false)
    expect(isV4({ icon: 'github', far: true })).toBe(false)
    expect(isV4({ icon: 'github', fal: true })).toBe(false)
    expect(isV4({ icon: 'github', fab: true })).toBe(false)

    expect(isV4({ name: 'github' })).toBe(true)
    expect(isV4({ icon: 'github' })).toBe(true)

    expect(isV4({ icon: ['fab', 'github'] })).toBe(false)
  })

  it('should handle some complex conditions (not all covered)', () => {
    expect(isV4({ v5: true, tag: 'span' })).toBe(false)

    expect(isV4({ v5: true, fas: true })).toBe(false)
    expect(isV4({ v5: true, far: true })).toBe(false)
    expect(isV4({ v5: true, fal: true })).toBe(false)
    expect(isV4({ v5: true, fab: true })).toBe(false)

    expect(isV4({ tag: 'span', icon: 'github' })).toBe(true)

    expect(isV4({ fas: true, icon: 'github' })).toBe(false)
    expect(isV4({ far: true, icon: 'github' })).toBe(false)
    expect(isV4({ fal: true, icon: 'github' })).toBe(false)
    expect(isV4({ fab: true, icon: 'github' })).toBe(false)
  })
})

describe('wrapper should work', () => {
  it('should give correct display name', () => {
    expect(Icon.displayName).toBe('ReactFontawesome')
  })

  it('should mount', () => {
    mount(<Icon name="google" />)
    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)).toBeDefined()
    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)[0].icon).toEqual([
      'fab',
      'google',
    ])

    mount(<Icon icon={['fab', 'google']} />)
    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)).toBeDefined()
    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)[0].icon).toEqual([
      'fab',
      'google',
    ])

    mount(<Icon icon={['fas', 'google']} />)
    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)).toBeDefined()
    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)[0].icon).toEqual([
      'fas',
      'google',
    ])
  })

  it('should pass props', () => {
    mount(
      <Icon
        name="google"
        mask="google"
        className="foobar"
        spin
        pulse
        border
        fixedWidth
        inverse
        listItem
        flip="horizontal"
        size="2x"
        pull="left"
        rotation={90}
        transform="none"
        symbol={false}
      />,
    )
    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)[0]).toEqual({
      border: true,
      className: 'foobar',
      fixedWidth: true,
      flip: 'horizontal',
      icon: ['fab', 'google'],
      inverse: true,
      listItem: true,
      mask: ['fab', 'google'],
      pull: 'left',
      pulse: true,
      rotation: 90,
      size: '2x',
      spin: true,
      symbol: false,
      transform: 'none',
    })
  })

  it('should pass rotate as rotation', () => {
    mount(<Icon name="google" rotate={90} />)

    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)[0].rotation).toEqual(
      90,
    )
  })

  it('should work with icon object', () => {
    mount(<Icon icon={faGithub} />)

    expect(last((FontAwesomeIcon as jest.Mock).mock.calls)[0].icon).toEqual(
      faGithub,
    )
  })
})
