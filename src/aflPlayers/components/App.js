import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import withSizes from 'react-sizes';

import { mapSizesToProps } from '../utils/responsive'
import Row from './Row'
import HeaderHoc from './Header'
import PlayerHoc from './Player'

const Header = HeaderHoc(Row)
const Player = PlayerHoc(Row)

const Div = styled.div`
    margin: auto;
    margin-top:2em;
    border-top: 3px solid black;
    ${props => props.isMobile ? '' : 'width:700px;'};
    padding: 0;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    `;

export function App(props) {
    return (
        <Div isMobile={props.isMobile}>
            {!props.isMobile && <Header />}
            {
                props.players.map((player, index) => (
                    <Player player={player} key={index} id={index} />
                ))
            }
        </Div>

    )
}

export const mapStateToProps = state => {
    const players = state.playerRatings;
    return {
        players
    }
};

export default withSizes(mapSizesToProps)(connect(mapStateToProps)(App));