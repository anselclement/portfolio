import React from 'react';
import PropTypes from 'prop-types';



export default function PortfolioSite(props) {

    const root = '../uploads/';

    const {
        portfolio
    } = props;

        

        return (
            <section className="section site">
                <div className="container">
                    <div className="content">
                        <h2 className="title is-2 has-text-centered">Portfolio</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="columns is-multiline is-mobile is-centered">
                        {portfolio.map(portfolio => (
                            <div className="column is-12-mobile is-half-tablet is-one-third-desktop" key={portfolio.id}>
                                <div data-show="quickview" data-target={portfolio.id}>
                                    <figure className="image is-3by2">
                                        <img  src={root + portfolio.filename} />
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <React.Fragment>
                {portfolio.map(portfolio => (
                <div className="test quickview" id={portfolio.id} key={portfolio.id}>                
                    
                            
                            <header className="quickview-header">
                                <p className="title">{portfolio.titre}</p>
                                <span className="delete" data-dismiss="quickview"></span>
                            </header>
                            
                            
                            <div className="quickview-body">
                                <div className="quickview-block">
                                    <a href={portfolio.url}>Visiter le site !</a>
                                    <div className="content">{portfolio.description}</div>
                                </div>
                            </div>    
               
                    
                </div>
                ))}
                </React.Fragment>
                

                <div className="container">
                    <div className="is-divider"></div>
                </div>

            </section>
        );
}