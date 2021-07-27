import React from "react";
import "./Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";

function Home() {
    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column has-text-centered">
                                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Front End Engineer</h1>
                                <h2 className="subtitle is-spaced is-size-5-desktop">HTML5/CSS3 | JavaScript/TypeScript | Angular | React | Web Accessibility</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-footer">
                    <div className="container">
                        <div className="columns is-gapless is-centered">
                            <div className="column is-three-quarters has-text-centered">
                                <img src="assets/code-vector-half.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section has-background-code is-medium">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters has-text-centered">
                            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">I'm Bryan Lopez</h1>
                            <h2 className="subtitle is-spaced is-size-5-desktop">
                                I am a front end engineer with a design background living and working in Denver, Colorado.
                                I have over <span>10 years of professional web experience</span> including <span>7 years of web application development</span>.
                                <br/>
                                <br/>
                                I am an advocate for <span>future maintainability, scalability, code quality and user experience</span>. I am comfortable working with Agile teams and several industry tools.
                                I have a mindfulness for and strong interest in learning about <span>new technologies, development processes and best practices.</span>
                            </h2>
                            <button className="button is-outlined is-rounded is-medium is-white">
                                <span className="icon"><FontAwesomeIcon icon={faFilePdf}/></span>
                                <span>Download My Resume</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="container content">
                    <div className="columns">
                        <div className="column is-half">
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet">Skills</h1>
                            <p>My main skill set and how long I have been working on sharpening them</p>
                            <div className="columns">
                                <div className="column is-half">
                                    <ul>
                                        <li>HTML5/CSS3<span className="tag is-rounded is-black">10+ years</span></li>
                                        <li>JavaScript (ES6+)<span className="tag is-rounded is-black">10+ years</span></li>
                                        <li>Angular/AngularJS<span className="tag is-rounded is-dark">7+ years</span></li>
                                        <li>TypeScript<span className="tag is-rounded is-light">4+ years</span></li>
                                    </ul>
                                </div>
                                <div className="column is-half">
                                    <ul>
                                        <li>NodeJS<span className="tag is-rounded is-light">2+ year</span></li>
                                        <li>React<span className="tag is-rounded is-light">1+ year</span></li>
                                        <li>Web Accessibility<span className="tag is-rounded is-light">1+ year</span></li>
                                        <li>Code Testing<span className="tag is-rounded is-light">1+ year</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column is-half">
                            <h1 className="title is-spaced is-size-2-desktop is-size-3-mobile">Tools</h1>
                            <p>A list of some tools I am currently interested in or using.</p>
                            <div className="columns">
                                <div className="column is-half">
                                    <ul>
                                        <li><a href="https://storybook.js.org/">Storybook</a></li>
                                        <li><a href="https://www.cypress.io/">Cypress.io</a></li>
                                        <li><a href="https://aws.amazon.com/lambda/">AWS Lambda</a></li>
                                        <li><a href="https://www.fullstory.com/">FullStory</a></li>
                                    </ul>
                                </div>
                                <div className="column is-half">
                                    <ul>
                                        <li><a href="https://www.gatsbyjs.com/">GatsbyJS</a></li>
                                        <li><a href="https://nextjs.org/">NextJS</a></li>
                                        <li><a href="https://www.figma.com/">Figma</a></li>
                                        <li><a href="https://airtable.com">Airtable</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="container">
                    <div className="columns is-centered">
                        <h1 className="title">More coming soon...</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
