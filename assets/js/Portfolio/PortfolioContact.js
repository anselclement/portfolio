import React, { Component } from "react";
import Collapsible from 'react-collapsible';

export default class PortfolioContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            mail: "",
            message: ""
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event){
        event.preventDefault();
        const { onNewMail } = this.props;

        const data = onNewMail(
            this.state.nom = event.target.elements.namedItem('nom').value,
            this.state.prenom = event.target.elements.namedItem('prenom').value,
            this.state.mail = event.target.elements.namedItem('mail').value,
            this.state.message =event.target.elements.namedItem('message').value
        );
    }

    handleSubmit(event){
        alert('Le mail à bien été envoyé !');
        event.preventDefault();
    }

    render(){
        return (
            <section id="ancreContact" className="section contact">
                <Collapsible trigger="Contact" triggerOpenedClassName ="title is-2 has-text-centered box" triggerClassName="title is-2 has-text-centered box">
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
                                    <input className="input" id="prenom" name="prenom" type="text" placeholder="Votre Prénom"></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Mail</label>
                                <div className="control">
                                    <input className="input" id="mail" name="mail" type="email" placeholder="Votre Mail"></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea className="textarea" id="message" name="message" placeholder="Votre Message"></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-link" type="submit">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Collapsible>
            </section>
        );
    }
}