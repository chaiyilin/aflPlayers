import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { join, values } from 'lodash'

function Header(Row) {
    return function () {
        return (
            <Row
                col1="Rating"
                col2="Player"
                col3="Club"
                col4="Position"
                background="color"
            />
        )
    }
}

export default Header;
