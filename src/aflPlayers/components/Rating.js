import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseDiv } from './Div'

const Span = styled.span`
    display: block;
    background-color: #001F63;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    color: #FFFFFF;
    text-align: center;
    `;

const Div = BaseDiv.extend`
    justify-content: center;
    outline:0;
`
function Rating(props) {
    return (
        <Div>
            <Span>
                {props.rating}
            </Span>
        </Div>

    )
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired
};

export default Rating;
