import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { join, values, startCase, camelCase } from 'lodash'

import Rating from './Rating'
import PlayerName from './PlayerName'
import ClubName from './ClubName'
import Position from './Position'

function Player(Row) {
    return function (props) {
        const rating = props.player.detailedRatings[0].ranking
        const playerName = join(values(props.player.player.playerName), ' ')
        const clubName = props.player.team.teamName
        const position = startCase(camelCase(props.player.position)).replace(' ', '/')
        return (
            <Row
                col1={<Rating rating={rating} />}
                col2={<PlayerName name={playerName} />}
                col3={<ClubName name={clubName} />}
                col4={<Position name={position} />}
                background={props.id % 2 > 0 ? 'gradient' : 'transparent'}
            />
        )
    }
}

/* Player.propTypes = {
    play: PropTypes.shape({
        position: PropTypes.string.isRequired,
        player: PropTypes.shape({
            playerName: PropTypes.shape({
                givenName: PropTypes.string.isRequired,
                surname: PropTypes.string.isRequired,
            })
        }),
        team: PropTypes.shape({
            teamName: PropTypes.string.isRequired
        }),
        detailedRatings: PropTypes.arrayOf(PropTypes.shape({
            ranking: PropTypes.number.isRequired
        }))
    })
}; */

export default Player;
