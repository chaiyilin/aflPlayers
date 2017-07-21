import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Row from './Row'
import HeaderHoc from './Header'
import PlayerHoc from './Player'

const Header = HeaderHoc(Row)
const Player = PlayerHoc(Row)

const Div = styled.div`
    margin: auto;
    height: 100%;
    width:60%;
    padding: 0;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    `;

function App(props) {
    return (
        <Div>
            <Header/>
            {
                props.players.map((player,index) => (
                    <Player player={player} key={index} id={index}/>
                ))
            }
        </Div>

    )
}

const mapStateToProps = state => {
    const players = state.playerRatings;
    return {
        players
    }
};
export default connect(mapStateToProps)(App);