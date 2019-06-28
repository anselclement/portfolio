import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';




export default class PortfolioContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            mail: '',
            message: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event){
        event.preventDefault();
        const { onNewMail } = this.props;

        const data = onNewMail(
            this.state.nom = event.target.elements.namedItem('nom').value,
            this.state.prenom,
            this.state.mail,
            this.state.message
        );

        console.log(this.state.nom);

    }

    render(){
        return (
            <section className="section contact">
                <div className="container">
                    <div className="content">
                        <h2 className="title is-2 has-text-centered">Contact</h2>
                    </div>
                </div>

                <div className="container">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="field">
                            <label className="label">Nom</label>
                            <div className="control">
                                <input className="input" id="nom" name="nom" type="text" placeholder="Votre Nom"></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Prénom</label>
                            <div className="control">
                                <input className="input" id="prenom" name="prenom" type="text" placeholder="Votre Prénom" value={this.state.prenom}
                                    onChange={e => this.setState({ prenom: e.target.value })}></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Mail</label>
                            <div className="control">
                                <input className="input" id="mail" name="mail" type="email" placeholder="Votre Mail" value={this.state.mail}
                                    onChange={e => this.setState({ mail: e.target.value })}></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" id="message" name="message" placeholder="Votre Message" value={this.state.message}
                                    onChange={e => this.setState({ message: e.target.value })}></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="button is-link" type="submit">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
        );
    }

}