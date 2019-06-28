import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DATE_OPTIONS } from '../config';

export default function PortfolioExperiences(props) {

    const {
        experiences
    } = props;

    return(
        <section className="section experiences">
            <div className="container">
                <div className="content">
                    <h2 className="title is-2 has-text-centered">Expériences/Diplômes</h2>
                </div>

                <div className="timeline is-centered">
                    {experiences.map(experiences => (
                        <div className="timeline-item" key={experiences.id}>
                            <div className="timeline-marker is-primary"></div>
                            <div className="timeline-content">
                                <p className="heading" ><strong>{(new Date(experiences.DateDebut).toLocaleDateString('fr', DATE_OPTIONS))}-{(new Date(experiences.DateFin).toLocaleDateString('fr', DATE_OPTIONS))}</strong></p>
                                <p>{experiences.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="is-divider"></div>
            </div>
        </section>
    )
}