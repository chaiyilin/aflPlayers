import React from 'react'
import { shallow, mount } from 'enzyme'

import ratings from '../ratings.json'
import PlayerHoc from './Player'
import Row from './Row'

const Player = PlayerHoc(Row)
const playerObj = ratings.playerRatings[0]

it('should render Player with player object', () => {
    const name = 'a'
    const props = {
        player: playerObj
    }

    const enzymeWrapper = mount(<Player {...props} />);
    expect(enzymeWrapper.text().indexOf('1') >= 0).toEqual(true);
    expect(enzymeWrapper.text().indexOf('Patrick Dangerfield') >= 0).toEqual(true);
    expect(enzymeWrapper.text().indexOf('Geelong Cats') >= 0).toEqual(true);
    expect(enzymeWrapper.text().toUpperCase().indexOf('MIDFIELDER'.toUpperCase()) >= 0).toEqual(true);
})
