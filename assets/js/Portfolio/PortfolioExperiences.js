import React, { Component } from "react";
import Collapsible from 'react-collapsible';
import { DATE_OPTIONS } from "../config";

export default class PortfolioExperiences extends Component  {

    constructor(props) {
        super(props);
    }

    render(){
        const { experiences } = this.props;

        return(
            <section className="section experiences">
                <Collapsible id="ancreExperiences" trigger="Expériences" triggerOpenedClassName ="title is-2 has-text-centered box" className="title is-2 has-text-centered box">
                    <div className="timeline is-centered">
                        {experiences.map((experiences) => experiences.DateFin === null ? (
                                <div className="timeline-item" key={experiences.id}>
                                <div className="timeline-marker is-danger"></div>
                                <div className="timeline-content dfg" id={experiences.id}>
                                    <p className="heading" ><strong>{(new Date(experiences.DateDebut).toLocaleDateString('fr', DATE_OPTIONS))} - En cours</strong></p>
                                    <p>{experiences.description}</p>
                                </div>
                            </div>
                            ) : (
                                <div className="timeline-item" key={experiences.id}>
                                <div className="timeline-marker is-primary"></div>
                                <div className="timeline-content" id={experiences.id}>
                                    <p className="heading" ><strong>{(new Date(experiences.DateDebut).toLocaleDateString('fr', DATE_OPTIONS))} - 
                                    {(new Date(experiences.DateFin).toLocaleDateString('fr', DATE_OPTIONS))}</strong></p>
                                    <p>{experiences.description}</p>
                                </div>
                            </div>
                            )
                        )}
                    </div>
                </Collapsible>
            </section>
        )
    }
}