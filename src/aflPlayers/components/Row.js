import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes';

import { mapSizesToProps } from '../utils/responsive'
import { BaseDiv } from './Div'

const Background = {
    COLOR: 'color',
    GRADIENT: 'gradient',
};

export function getBackground(background) {
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
  width:100%;
  display: flex;
  ${props => props.isMobile ? 'height:8em;' : 'height:2em;'};
  ${props => props.isMobile ? '  flex-flow: column nowrap;' : 'flex-flow: row nowrap;'};
  ${props => getBackground(props.background)}
`;
const ResRow = withSizes(mapSizesToProps)(FlexRow)

const ColSmall = BaseDiv.extend`
${props => props.isMobile ? '' : 'flex: 2 0 0;'};
justify-content: center;
`;
const ResColSmall = withSizes(mapSizesToProps)(ColSmall)

const ColBig = BaseDiv.extend`
${props => props.isMobile ? '' : 'flex: 5 0 0;'};
`;
const ResColBig = withSizes(mapSizesToProps)(ColBig)

function Row(props) {

    return (
        <ResRow background={props.background} isMobile={props.isMobile}>
            <ResColSmall>
                {props.col1}
            </ResColSmall>

            <ResColBig>
                {props.col2}
            </ResColBig>

            <ResColBig>
                {props.col3}
            </ResColBig>

            <ResColBig>
                {props.col4}
            </ResColBig>
        </ResRow>
    )
}

const types = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
])
Row.propTypes = {
    col1: types,
    col2: types,
    col3: types,
    col4: types,
    background: PropTypes.string
};
export default Row;
