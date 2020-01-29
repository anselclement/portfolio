import React, { Component } from "react";
import { Message, Form, Input, TextArea, Button, FormInput } from "semantic-ui-react";

export default class PortfolioContact extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            mail: "",
            message: "",
            formError: false
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



    render(){
        return (
            <section id="ancreContact" className="section contact">
                <h2 className="title is-2 has-text-centered box">Contact</h2>
                    
                    <div className="container widthContact">
                        <div className="notification is-success is-light">
                            <button className="delete"></button>
                            Votre mail a bien été envoyé !
                        </div>
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="field">
                                <label className="label">Nom</label>
                                <div className="control has-icons-left">
                                    <input required className="input" id="nom" name="nom" type="text" placeholder="Votre Nom"></input>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Prénom</label>
                                <div className="control has-icons-left">
                                    <input required className="input" id="prenom" name="prenom" type="text" placeholder="Votre Prénom"></input>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Mail</label>
                                <div className="control has-icons-left">
                                    <input required className="input" id="mail" name="mail" type="email" placeholder="Votre Mail"></input>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea required className="textarea" id="message" name="message" placeholder="Votre Message"></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-link declenchement" type="submit">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </section>
            
        );
    }
}