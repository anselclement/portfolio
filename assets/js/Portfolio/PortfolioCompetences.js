import React from 'react';

export default function PortfolioCompetences(props) {

    const root = '../uploads/';

    const {
        competences
    } = props;

    return(
        
        <section id="ancreCompetences" className="section competences">
            <h2 className="title is-2 has-text-centered box">Compétences</h2>     
                <div className="columns is-multiline is-mobile is-centered">
                    {competences.map((competences) => (
                        <div className="column is-6-mobile is-3-tablet is-2-desktop" key={competences.id} id={"competence" + competences.id}>
                            <div className="box">
                                <figure className="image is-4by3">
                                    <img src={root + competences.filename} alt="competence"/>
                                </figure>
                                <div className="title is-5 has-text-centered" key={competences.id}>{competences.language}</div>
                            </div>
                        </div>
                    ))}
                </div>                   
        </section>
        
    );
}


