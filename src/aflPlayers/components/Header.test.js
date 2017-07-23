import React from 'react'
import { shallow, mount } from 'enzyme'

import ratings from '../ratings.json'
import HeaderHoc from './Header'
import Row from './Row'

const Header = HeaderHoc(Row)

it('should render Header', () => {
    const enzymeWrapper = mount(<Header />);
    expect(enzymeWrapper.text().indexOf('Rating') >= 0).toEqual(true);
    expect(enzymeWrapper.text().indexOf('Player') >= 0).toEqual(true);
    expect(enzymeWrapper.text().indexOf('Club') >= 0).toEqual(true);
    expect(enzymeWrapper.text().indexOf('Position') >= 0).toEqual(true);
})
