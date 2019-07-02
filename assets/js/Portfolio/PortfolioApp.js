import React, { Component, lazy, Suspense, IntersectionObserver } from 'react';
import PropTypes from 'prop-types';
import PortfolioAPropos from './PortfolioAPropos';
import PortfolioCompetences from './PortfolioCompetences';
import PortfolioExperiences from './PortfolioExperiences';
import PortfolioContact from './PortfolioContact';
import PortfolioSite from './PortfolioSite';
import { getAPropos, getHobbies, getCompetences, getExperiences, createMail, getPortfolio } from '../api/portfolio_api';
import bulmaQuickview from '../../../node_modules/bulma-extensions/bulma-quickview/dist/js/bulma-quickview';


//const PortfolioAPropos = lazy(() => import('./PortfolioAPropos'));
//const PortfolioCompetences = lazy(() => import('./PortfolioCompetences'));
//const PortfolioExperiences = lazy(() => import('./PortfolioExperiences'));
//const PortfolioContact = lazy(() => import('./PortfolioContact'));
//const PortfolioSite = lazy(() => import('./PortfolioSite'));

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
            hasIntersected: false
        };

        this.handleNewMail = this.handleNewMail.bind(this);
    }

    /*targetContainerRef = React.createRef();

    options = {
        root: this.props.root || null,
        rootMargin: this.props.margin || "0px",
        threshold: this.props.threshold || 0
    };

    observer;

    load = (entries) => {

        const { onIntersection, continueObserving } = this.props;

        if (!continueObserving && !this.state.hasIntersected){
            const entry = 
                entries.find(
                    entry => entry.target === this.targetContainerRef.current
                );

            if(entry && entry.isIntersecting) {
                this.setState({ hasIntersected: true });
                onIntersection && onIntersection(entries);
                this.observer.unobserve(this.targetContainerRef.current);
            }
        } else if (continueObserving && onIntersection) {
            onIntersection(entries);
        }
    };*/

    componentDidMount() {
        /*this.observer = new IntersectionObserver(this.shouldComponentUpdate, this.options);
        this.observer.observe(this.targetContainerRef.current);*/
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
        this.observer.unobserve(this.targetContainerRef.current);
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