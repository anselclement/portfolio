import React from 'react';
import PropTypes from 'prop-types';

export default function PortfolioAPropos(props) {

    const root = '../uploads/';
    const fontAwesome = 'fas fa-';
    const zoomFontAwesome = ' fa-2x';
    
    const {
        aPropos,
        hobbies
    } = props;

    return (
        <section className="section propos">
            <div className="container">
                <h2 className="title is-2 has-text-centered">A Propos</h2>
            </div>
                {aPropos.map(data => (
                    <div className="container has-text-centered">{data.content}</div>
                ))}
            <div className="container">
                <div className="columns">
                    <div className="column is-2">
                        <figure className="image is-128x128" id="avatar">
                        {aPropos.map(data => (
                                <img src={root + data.filename}   alt="avatar"/>
                            ))}
                        </figure>
                    </div>
                    <div className="column is-5">
                        <div className="columns is-mobile">
                        {aPropos.map(data => (
                            <div className="column" id="mail">{data.mail}</div>
                        ))}
                        </div>
                        <div className="columns is-mobile">
                            <div className="column is-2 has-text-centered">
                                <a target="_blank" href="https://www.linkedin.com/in/cl%C3%A9ment-ansel-376584142/%7Bcountry%3Dus%2C+language%3Den%7D?trk=people-guest_profile-result-card_result-card_full-click">
                                    <button className="button is-rounded is-info">
                                        <i className="fab fa-linkedin"></i>
                                    </button>
                                </a>
                            </div>
                            <div className="column is-2 has-text-centered">
                                <a target="_blank" href="https://github.com/anselclement">
                                    <button className="button is-rounded is-info">
                                        <i className="fab fa-github-square"></i>
                                    </button>
                                </a>
                            </div>
                            <div className="column is-2 has-text-centered">
                                <button className="button is-rounded is-info">
                                    <i className="fas fa-file-pdf"></i>
                                </button>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-2 has-text-centered">
                                <button className="button is-rounded is-info">Contacter</button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 ">
                        <div className="columns">
                            <div className="column has-text-centered">
                                <h3 className="title is-5">Loisirs et centres d'intérêt</h3>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            {hobbies.map(icon => (
                                <div className="column is-2 has-text-centered tooltip">
                                    <i className={fontAwesome + icon.iconName + zoomFontAwesome}></i>
                                    <div className="tooltiptext ">{icon.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}