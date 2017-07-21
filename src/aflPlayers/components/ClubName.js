import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import getClassName from '../utils/clubMappings'
import {BaseDivWithBlueFont} from './Div'

const Div = BaseDivWithBlueFont.extend`
    &::before {
        content: "";
        display:inline-block;
        height:1.5em;
        width:1.5em;
        background-size: 1.5em 1.5em;
        background-repeat: no-repeat;
        background-image: url(src/aflPlayers/style/${props => getClassName(props.name)}.svg);
        margin-right:0.5em
    }
    `;

function ClubName(props) {
    return (
            <Div name={props.name}>
                {props.name}
            </Div>
    )
}

ClubName.propTypes = {
    name: PropTypes.string.isRequired
};

export default ClubName;
