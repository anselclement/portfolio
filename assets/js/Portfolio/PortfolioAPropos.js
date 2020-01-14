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
                <div className="content">
                    <h2 id="ancreApropos" className="title is-2 has-text-centered">A Propos</h2>
                </div>
                    {aPropos.map((data) => (
                        <div className="content has-text-centered" key={data.id}>{data.content}</div>
                    ))}
                <div className="container">
                    <div className="columns">
                        <div className="column is-2">
                            <div className="columns is-mobile">
                                <figure className="image is-128x128" id="avatar">
                                {aPropos.map((data) => (
                                        <img src={root + data.filename} key={data.id}  alt="avatar"/>
                                    ))}
                                </figure>
                            </div>
                        </div>
                        <div className="column is-5">
                            <div className="columns is-mobile">
                            {aPropos.map( (data) => (
                                <div className="column" id="mail" key={data.id}>{data.mail}</div>
                            ))}
                            </div>
                            <div className="columns is-mobile">
                                <div className="column is-3 has-text-centered boutonMedia">
                                    <a target="_blank" href="https://www.linkedin.com/in/clement-ansel-376584142/">
                                        <button className="button is-rounded is-info">
                                            <i className="fab fa-linkedin"></i>
                                        </button>
                                    </a>
                                </div>
                                <div className="column is-3 has-text-centered boutonMedia">
                                    <a target="_blank" href="https://github.com/anselclement">
                                        <button className="button is-rounded is-info">
                                            <i className="fab fa-github-square"></i>
                                        </button>
                                    </a>
                                </div>
                                <div className="column is-3 has-text-centered boutonMedia">
                                    {aPropos.map( (data) => (
                                        <a target="_blank" href={root + data.cvfilename}>
                                            <button className="button is-rounded is-info">
                                                <i className="fas fa-file-pdf"></i>
                                            </button>
                                        </a>
                                    ))}
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
                                {hobbies.map((icon) => (
                                    <div className="column is-2 has-text-centered tooltip is-tooltip-bottom is-tooltip-info" data-tooltip={icon.name} key={icon.id}>
                                        <i className={fontAwesome + icon.iconName + zoomFontAwesome} key={icon.id}></i>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="is-divider"></div>
            </div>
        </section>
    );
}