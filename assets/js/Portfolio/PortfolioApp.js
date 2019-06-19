import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioAPropos from './PortfolioAPropos';
import PortfolioCompetences from './PortfolioCompetences';
import PortfolioExperiences from './PortfolioExpérience';
import PortfolioContact from './PortfolioContact';
import { getAPropos, getHobbies, getCompetences, getExperiences } from '../api/portfolio_api';




export default class PortfolioApp extends Component {


    constructor(props) {
        super(props);

        this.state = {
            aPropos: [],
            hobbies: [],
            competences: [],
            experiences: []
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
        getCompetences()
        .then((competences) => {
            this.setState({
                competences:competences
            })
        });
        getExperiences()
        .then((experiences) => {
            this.setState({
                experiences:experiences
            })
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <PortfolioAPropos
                    {...this.props}
                    {...this.state}
                />
                <PortfolioCompetences
                    {...this.props}
                    {...this.state}
                />
                <PortfolioExperiences
                    {...this.props}
                    {...this.state}
                />
                <PortfolioContact/>
            </React.Fragment>
        )
    }

}