import React from 'react'
import { shallow, mount } from 'enzyme'

import ratings from '../ratings.json'
import { App, mapStateToProps } from './App'
import HeaderHoc from './Header'
import PlayerHoc from './Player'
import Row from './Row'

const players = ratings.playerRatings

it('should render App when big screen', () => {
    const props = {
        players,
        isMobile: false
    }

    const enzymeWrapper = mount(<App {...props} />);
    expect(enzymeWrapper.find(Row)).toHaveLength(6);
})

it('should render App when small screen', () => {
    const props = {
        players,
        isMobile: true
    }

    const enzymeWrapper = mount(<App {...props} />);
    expect(enzymeWrapper.find(Row)).toHaveLength(5);
})

it('should mapStateToProps', () => {
    expect(mapStateToProps(ratings).players).toEqual(ratings.playerRatings);
})