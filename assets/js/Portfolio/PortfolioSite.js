import React from "react";
import Collapsible from 'react-collapsible';

export default function PortfolioSite(props) {

    const root = "../uploads/";

    const {
        portfolio
    } = props;

        return (
            <section id="ancrePortfolio" className="section site">
                <Collapsible trigger="Portfolio" triggerOpenedClassName ="title is-2 has-text-centered box"  triggerClassName="title is-2 has-text-centered box">
                    <div className="container">
                        <div className="columns is-multiline is-mobile is-centered">
                            {portfolio.map((portfolio) => (
                                <div className="column is-12-mobile is-half-tablet is-one-third-desktop" key={portfolio.id}>
                                    <div>
                                        <figure className="image is-5by3">
                                            <a href={'#portfolio' + portfolio.id} rel="modal:open"><img  src={root + portfolio.filename} /></a>
                                        </figure>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {portfolio.map((portfolio) => (
                        <div id="fade" className="modal" id={'portfolio' + portfolio.id} key={portfolio.id}>                
                            <div className="container">
                                <p className="title is-3">{portfolio.titre}</p>
                                <a href="#" rel ="modal:close"></a>
                            </div>
                            <div className="container">
                                <div className="container">
                                    <section className="container popup">
                                        {portfolio.tags.map((tags) => (
                                        <span className="tag is-info" key={tags.id}>{tags.name}</span>
                                        ))}
                                    </section>
                                    <section className="section popup">
                                        <div className="box">{portfolio.description}</div>
                                    </section>
                                    <section className="section boutonSite">
                                        <button className="button is-rounded is-primary">
                                            <a target="_blank" className="designUrl" href={portfolio.url}>Visiter le site !</a>
                                            <span className="icon is-small">
                                                <i className="fas fa-arrow-circle-right"></i>
                                            </span>    
                                        </button>
                                    </section>
                                </div>
                            </div>    
                    
                        </div>
                    ))}
                    
                </Collapsible>                                
            </section>
        );
}