import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioAPropos from './PortfolioAPropos';


export default class PortfolioApp extends Component {


    constructor(props) {
        super(props);
    }

    render() {

        return (
            <PortfolioAPropos
                {...this.props}
            />
        )
    }

}