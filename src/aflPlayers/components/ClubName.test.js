import React from 'react'
import { shallow, mount } from 'enzyme'
import ClubName from './ClubName'

it('should render ClubName with name', () => {
    const name = 'a'
    const props = {
        name
    }

    const enzymeWrapper = shallow(<ClubName {...props} />);
    expect(enzymeWrapper.text().indexOf(name) >= 0).toEqual(true);
})
