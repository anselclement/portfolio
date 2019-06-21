import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioAPropos from './PortfolioAPropos';
import PortfolioCompetences from './PortfolioCompetences';
import PortfolioExperiences from './PortfolioExpérience';
import PortfolioContact from './PortfolioContact';
import PortfolioSite from './PortfolioSite';
import { getAPropos, getHobbies, getCompetences, getExperiences, createMail, getPortfolio } from '../api/portfolio_api';




export default class PortfolioApp extends Component {


    constructor(props) {
        super(props);

        this.state = {
            aPropos: [],
            hobbies: [],
            competences: [],
            experiences: [],
            Mail: [],
            portfolio: []
        };

        this.handleNewMail = this.handleNewMail.bind(this);
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
        getPortfolio()
        .then((portfolio) => {
            this.setState({
                portfolio:portfolio
            })
        });
    }

    handleNewMail(nom, prenom, mail, message) {
        const newMail = {
            nom: nom,
            prenom: prenom,
            mail: mail,
            message: message
        };

        createMail(newMail)
            .then(mail => {
                this.setState(prevState => {
                    const newMailSend = [...prevState.newMailSend, mail];
                    return {
                        ...newState,
                        Mail: newMailSend
                    }
                });
            })
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
                <PortfolioSite
                    {...this.props}
                    {...this.state}
                />
                <PortfolioContact
                    {...this.props}
                    {...this.state}
                    onNewMail={this.handleNewMail}
                />
            </React.Fragment>
        )
    }

}