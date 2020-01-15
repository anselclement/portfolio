import React from 'react';
import Collapsible from 'react-collapsible';

export default function PortfolioCompetences(props) {

    const root = '../uploads/';

    const {
        competences
    } = props;

    return(
        
        <section id="ancreCompetences" className="section competences">
            <Collapsible  trigger="Compétences" triggerOpenedClassName ="title is-2 has-text-centered box"   className="title is-2 has-text-centered box">      
                <div className="columns is-multiline is-mobile is-centered">
                    {competences.map((competences) => (
                        <div className="column is-6-mobile is-3-tablet is-2-desktop" key={competences.id}>
                            <div className="box">
                                <figure className="image is-4by3">
                                    <img src={root + competences.filename} alt="competence"/>
                                </figure>
                                <div className="title is-5 has-text-centered" key={competences.id}>{competences.language}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Collapsible>                      
        </section>
        
    );
}


