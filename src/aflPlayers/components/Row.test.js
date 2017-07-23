import React from 'react'
import { shallow, mount } from 'enzyme'
import Row, { getBackground } from './Row'
import Rating from './Rating'
import PlayerName from './PlayerName'
import ClubName from './ClubName'
import Position from './Position'

it('should render Row', () => {
    const col1 = <Rating rating={1} />
    const col2 = <PlayerName name="PlayerName1" />
    const col3 = <ClubName name="ClubName1" />
    const col4 = <Position name="Position1" />

    const props = {
        col1,
        col2,
        col3,
        col4,
        isMobile: true
    }

    const enzymeWrapper = mount(<Row {...props} />);
    expect(enzymeWrapper.find(Rating)).toHaveLength(1);
    expect(enzymeWrapper.find(PlayerName)).toHaveLength(1);
    expect(enzymeWrapper.find(ClubName)).toHaveLength(1);
    expect(enzymeWrapper.find(Position)).toHaveLength(1);

})
