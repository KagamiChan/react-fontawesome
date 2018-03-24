import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mount } from 'enzyme'
import React from 'react'
import FA from 'react-fontawesome'

import '@fortawesome/fontawesome-free-brands'
import '@fortawesome/fontawesome-free-solid'
import '../src/inject'

describe('inject should work', () => {
  it('should render a svg', () => {
    const wrapper = mount(<FA name="address-book" />)
    expect(wrapper).toBeDefined()
    expect(wrapper.contains(<FontAwesomeIcon icon={['address-book']} />)).toBe(
      false,
    )
    expect(
      wrapper.contains(<FontAwesomeIcon icon={['fas', 'address-book']} />),
    ).toBe(true)
    expect(wrapper.find('span').length).toBe(0)
    expect(wrapper.find('svg').length).toBe(1)
  })

  it('shimming for injection should work', () => {
    const wrapper = mount(<FA name="google-plus" />)
    expect(
      wrapper.contains(<FontAwesomeIcon icon={['fab', 'google-plus-g']} />),
    ).toBe(true)
  })

  it('other props should be passed through', () => {
    const wrapper = mount(
      <FA
        name="google-plus"
        border
        fixedWidth
        flip="horizontal"
        inverse
        rotate={90}
        size="2x"
        stack="1x"
        pulse
        spin
      />,
    )

    expect(
      wrapper.contains(
        <FontAwesomeIcon
          icon={['fab', 'google-plus-g']}
          border
          fixedWidth
          flip="horizontal"
          inverse
          rotation={90}
          size="2x"
          pulse
          spin
        />,
      ),
    ).toBe(true)
  })
})
