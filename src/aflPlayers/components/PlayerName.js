import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes';

import { mapSizesToProps } from '../utils/responsive'
import { BaseDiv, BaseDivWithBlueFont, ItemLeft, ItemRight } from './Div'

function PlayerName(props) {
    return (
        <BaseDivWithBlueFont isMobile={props.isMobile}>
            {props.name}
        </BaseDivWithBlueFont>
    )
}

PlayerName.propTypes = {
    name: PropTypes.string.isRequired
};

export default withSizes(mapSizesToProps)(PlayerName);
