import React from 'react';
import PropTypes from 'prop-types';

export default function PortfolioAPropos(props) {

    const avatar = require('../../images/myAvatar.png');

    return (
        <section className="section propos">
            <div className="container">
                <h2 className="title is-2 has-text-centered">A Propos</h2>
            </div>
            <div className="container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="container">
                <div className="columns">
                    <div className="column is-2">
                        <figure className="image is-128x128" id="avatar">
                            <img src={require('../../images/myAvatar.png')} alt="avatar"/>
                        </figure>
                    </div>
                    <div className="column is-5">
                        <div className="columns is-mobile">
                            <div className="column" id="mail">clement.ansel14@gmail.com</div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column is-2 has-text-centered"><button className="button is-rounded is-info"><i className="fab fa-linkedin"></i></button></div>
                            <div className="column is-2 has-text-centered"><button className="button is-rounded is-info"><i className="fab fa-github-square"></i></button></div>
                            <div className="column is-2 has-text-centered"><button className="button is-rounded is-info"><i className="fas fa-file-pdf"></i></button></div>
                        </div>
                        <div className="columns">
                            <div className="column is-2 has-text-centered"><button className="button is-rounded is-info">Contacter</button></div>
                        </div>
                    </div>
                    <div className="column is-5 ">
                        <div className="columns">
                            <div className="column has-text-centered">
                                <h3 className="title is-5">Loisirs et centres d'intérêt</h3>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column is-2">
                                <i className="fas fa-film fa-2x"></i>
                            </div>
                            <div className="column is-2">
                                <i className="fas fa-gamepad fa-2x"></i>
                            </div>
                            <div className="column is-2">
                                <i className="fas fa-book fa-2x"></i>
                            </div>
                            <div className="column is-2">
                                <i className="fas fa-utensils fa-2x"></i>
                            </div>
                            <div className="column is-2">
                                <i className="fas fa-mobile-alt fa-2x"></i>
                            </div>
                            <div className="column is-2">
                                <i className="fas fa-bicycle fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}