import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
//Animation
import AnimatedProgressProvider from './AnimatedProgressProvider';

export default function PortfolioCompetences(props) {

    const {
        competences
    } = props;

    return(
        <section className="section competences">
            <div className="container">
                <div className="content">
                    <h2 className="title is-2 has-text-centered">Compétences</h2>
                </div>

                <div className="columns is-multiline is-mobile is-centered">
                    {competences.map(competences => (
                        <div className="column is-6-mobile is-3-tablet is-2-desktop">
                            <div className="box">
                            <AnimatedProgressProvider
                                valueStart={0}
                                valueEnd={competences.percentage}
                                duration={1.4}
                            >
                                {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        styles={buildStyles({
                                        textColor: "black",
                                        pathColor: `${competences.color}`,
                                        trailColor: "lightgrey",
                                        textSize: "14px"
                                        })}
                                    />
                                );
                                    }}
                                </AnimatedProgressProvider>
                                <div className="title is-4 has-text-centered">{competences.language}</div>
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


