import React, { Component } from "react";
import { DATE_OPTIONS } from "../config";

export default class PortfolioExperiences extends Component  {

    constructor(props) {
        super(props);
    }

    render(){
        const { experiences } = this.props;

        return(
            
            <section className="section experiences">
                <div className="container">
                    <div className="content">
                        <h2 id="ancreExperiences" className="title is-2 has-text-centered">Expériences/Diplômes</h2>
                    </div>

                    <div className="timeline is-centered">
                        {experiences.map((experiences) => experiences.DateFin === null ? (
                                <div className="timeline-item" key={experiences.id}>
                                <div className="timeline-marker is-primary"></div>
                                <div className="timeline-content">
                                    <p className="heading" ><strong>{(new Date(experiences.DateDebut).toLocaleDateString('fr', DATE_OPTIONS))} - En cours</strong></p>
                                    <p>{experiences.description}</p>
                                </div>
                            </div>
                            ) : (
                                <div className="timeline-item" key={experiences.id}>
                                <div className="timeline-marker is-primary"></div>
                                <div className="timeline-content">
                                    <p className="heading" ><strong>{(new Date(experiences.DateDebut).toLocaleDateString('fr', DATE_OPTIONS))} - 
                                     {(new Date(experiences.DateFin).toLocaleDateString('fr', DATE_OPTIONS))}</strong></p>
                                    <p>{experiences.description}</p>
                                </div>
                            </div>
                            )
                        )}
                    </div>
                </div>
                <div className="container">
                    <div className="is-divider"></div>
                </div>
            </section>
        )
    }
}