import React, { Component } from "react";
import Collapsible from 'react-collapsible';
import PortfolioAPropos from "./PortfolioAPropos";
import PortfolioCompetences from "./PortfolioCompetences";
import PortfolioExperiences from "./PortfolioExperiences";
import PortfolioContact from "./PortfolioContact";
import PortfolioSite from "./PortfolioSite";
import { getAPropos, getHobbies, getCompetences, getExperiences, createMail, getPortfolio } from "../api/portfolio_api";
import bulmaQuickview from "../../../node_modules/bulma-extensions/bulma-quickview/dist/js/bulma-quickview";

export default class PortfolioApp extends Component {


    constructor(props) {
        super(props);

        this.state = {
            aPropos: [],
            hobbies: [],
            competences: [],
            experiences: [],
            Mail: [],
            portfolio: [],
            hasIntersected: false,
            open: false
        };

        this.handleNewMail = this.handleNewMail.bind(this);
        this.togglePanel = this.togglePanel.bind(this);
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
            });
            var quickviews = bulmaQuickview.attach();
        });
    }

    componentWillUnMount(){
        
    }

    handleNewMail(nom, prenom, mail, message) {

        const newMail = {
            nom: nom,
            prenom: prenom,
            mail: mail,
            message: message
        };

        this.setState({
            isSavingNewMail: true
        });

        const newState = {
            isSavingNewMail: false
        };

        createMail(newMail)
            .then(mail => {
                this.setState((prevState) => {
                    const newMailSend = [...prevState.Mail, mail];
                    return {
                        ...newState,
                        Mail: newMailSend
                    }
                });
            });
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }
    
    render() {
        return (
            <React.Fragment>
                <PortfolioAPropos
                    {...this.props}
                    {...this.state}
                    onTogglePanel={this.togglePanel}
                />
                <PortfolioCompetences
                    {...this.props}
                    {...this.state}
                    onTogglePanel={this.togglePanel}
                />
                <PortfolioExperiences
                    {...this.props}
                    {...this.state}
                    onTogglePanel={this.togglePanel}
                />
                <PortfolioSite
                    {...this.props}
                    {...this.state}
                    onTogglePanel={this.togglePanel}
                />

                <PortfolioContact
                    {...this.props}
                    {...this.state}
                    onNewMail={this.handleNewMail}
                    onTogglePanel={this.togglePanel}
                />              
            </React.Fragment>
        );
    }

}