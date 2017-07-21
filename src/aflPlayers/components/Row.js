import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BaseDiv } from './Div'

const Background = {
    COLOR: 'color',
    GRADIENT: 'gradient',
};

function getBackground(background) {
    switch (background) {
        case Background.COLOR:
            return 'background-color:#E6E6E6'
        case Background.GRADIENT:
            return 'background:-webkit-gradient(linear, left bottom, left top, from(#E6E6E6), to(#fff))'
        default:
            return 'background-color:transparent'
    }
}

const FlexRow = styled.div`
  height:2em;
  width:100%;
  display: flex;
  flex-flow: row wrap;
  ${props => getBackground(props.background)}
`;

const ColSmall = BaseDiv.extend`
    flex: 2 0 0;
    justify-content: center;
`;

const ColBig = BaseDiv.extend`
    flex: 5 0 0;
`;

function Row(props) {

    return (
        <FlexRow background={props.background}>
            <ColSmall>
                {props.col1}
            </ColSmall>

            <ColBig>
                {props.col2}
            </ColBig>

            <ColBig>
                {props.col3}
            </ColBig>

            <ColBig>
                {props.col4}
            </ColBig>
        </FlexRow>
    )
}

Row.propTypes = {
    col1: PropTypes.element,
    col2: PropTypes.element,
    col3: PropTypes.element,
    col4: PropTypes.element,
    background: PropTypes.string
};
export default Row;
