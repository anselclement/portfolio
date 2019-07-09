import React from "react";

export default function PortfolioSite(props) {

    const root = "../uploads/";

    const {
        portfolio
    } = props;

        return (
            <section className="section site">
                <div className="container">
                    <div className="content">
                        <h2 id="ancrePortfolio" className="title is-2 has-text-centered">Portfolio</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="columns is-multiline is-mobile is-centered">
                        {portfolio.map((portfolio) => (
                            <div className="column is-12-mobile is-half-tablet is-one-third-desktop" key={portfolio.id}>
                                <div data-show="quickview" data-target={portfolio.id}>
                                    <figure className="image is-5by3">
                                        <img  src={root + portfolio.filename} />
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <React.Fragment>
                {portfolio.map((portfolio) => (
                    <div className="quickview" id={portfolio.id} key={portfolio.id}>                
                        
                        <header className="quickview-header">
                            <p className="title is-2">{portfolio.titre}</p>
                            <span className="delete" data-dismiss="quickview"></span>
                        </header>
                        
                        <div className="quickview-body">
                            <div className="quickview-block">
                                <section className="section">
                                    <a className="designUrl" href={portfolio.url}>Visiter le site !</a>
                                </section>
                                <section className="section">
                                    {portfolio.tags.map((tags) => (
                                    <span className="tag is-info" key={tags.id}>{tags.name}</span>
                                    ))}
                                </section>
                                <section className="section">
                                    <div className="content">{portfolio.description}</div>
                                </section>
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