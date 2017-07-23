import React from 'react'
import { shallow, mount } from 'enzyme'
import PlayerName from './PlayerName'

it('should render PlayerName with name', () => {
    const name = 'a'
    const props = {
        name
    }

    const enzymeWrapper = shallow(<PlayerName {...props} />);
    expect(enzymeWrapper.text().indexOf(name) >= 0).toEqual(true);
})
