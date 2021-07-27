import React from "react";

function About() {
    return (
        <section className="section about">
            <div className="container">
                <div className="columns">
                    <div className="column is-7">
                        <img
                            className=""
                            src="http://placehold.it/500x400"
                            alt=""
                        />
                    </div>
                    <div className="column is-5">
                        <div className="content">
                            <h1>About</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
