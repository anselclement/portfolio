import React, { Component } from "react";
import { Message, Form } from "semantic-ui-react";

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
                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Input required label="Nom"  id="nom" name="nom" type="text" placeholder="Votre Nom"></Form.Input>

                            <Form.Input required label="Prénom"  id="prenom" name="prenom" type="text" placeholder="Votre Prénom"></Form.Input>

                            <Form.Input required label="Mail"  id="mail" name="mail" type="email" placeholder="Votre Mail"></Form.Input>

                            <Form.TextArea required label="Message"  id="message" name="message" placeholder="Votre Message"></Form.TextArea>

                            <Form.Button fluid  type="submit">Envoyer</Form.Button>

                            {!this.state.formError ? (
                                <Message
                                    positive
                                    header="Votre mail a bien été envoyé !"
                                />
                            ) : (
                                <Message
                                    negative
                                    header="Tout les champs ne sont pas remplis !"
                                />
                            )}
                        </Form>
                    </div>
            </section>
        );
    }
}