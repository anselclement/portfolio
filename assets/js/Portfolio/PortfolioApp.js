import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioAPropos from './PortfolioAPropos';
import { getAPropos, getHobbies } from '../api/portfolio_api';


export default class PortfolioApp extends Component {


    constructor(props) {
        super(props);

        this.state = {
            aPropos: [],
            hobbies: []
        };
    }

    componentDidMount() {
        getAPropos()
            .then((data) => {
                this.setState({
                    aPropos:data
                })
            });
        getHobbies()
        .then((icon) => {
            this.setState({
                hobbies:icon
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