import React from 'react'
import { shallow, mount } from 'enzyme'
import Position from './Position'

it('should render Position', () => {
    const name = 'a'
    const props = {
        name
    }

    const enzymeWrapper = shallow(<Position {...props} />);
    expect(enzymeWrapper.text().indexOf(name) >= 0).toEqual(true);
})
