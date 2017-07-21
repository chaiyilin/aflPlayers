import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { BaseDivWithBlueFont } from './Div'

function PlayerName(props) {
    return (
        <BaseDivWithBlueFont>
            {props.name}
        </BaseDivWithBlueFont>
    )
}

function PlayerNameContainer(props) {
    return (
        <ContainerQuery query={query}>
            {(params) => (
                <PlayerName {...props} className={classnames(params)} />
            )}
        </ContainerQuery>
    );
}

PlayerName.propTypes = {
    name: PropTypes.string.isRequired
};

export default PlayerName;
