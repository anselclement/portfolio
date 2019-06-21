import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                                <p className="heading" ><strong>{experiences.DateDebut}-{experiences.DateFin}</strong></p>
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