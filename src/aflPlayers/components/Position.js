import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function Position(props) {

    return (
        <div>
            {props.name}
        </div>
    )
}

Position.propTypes = {
    name: PropTypes.string.isRequired
};


export default Position;
