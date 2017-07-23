import React from 'react'
import { shallow, mount } from 'enzyme'
import Rating from './Rating'

it('should render Rating', () => {
    const rating = 1
    const props = {
        rating
    }

    const enzymeWrapper = mount(<Rating {...props} />);
    expect(enzymeWrapper.text().indexOf(rating.toString()) >= 0).toEqual(true);
})
