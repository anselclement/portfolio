import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioAPropos from './PortfolioAPropos';
import { getAPropos, createAPropos } from '../api/portfolio_api';


export default class PortfolioApp extends Component {


    constructor(props) {
        super(props);

        this.state = {
            aPropos: []
        };
    }

    componentDidMount() {
        getAPropos()
            .then((data) => {
                this.setState({
                    aPropos:data
                })
            });
    }
    
    render() {
        return (
            <PortfolioAPropos
                {...this.props}
                {...this.state}
            />
        )
    }

}