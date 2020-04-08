import React from 'react';

function Home(){
    return (

        <section className="home bg-light vh-100" id="home">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-12 ">
                            <div className="social-home">
                                <ul className="list-inline">
                                    <li><a href="#" className="text-dark"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="text-dark"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="text-dark"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" className="text-dark"><i className="fab fa-dribbble"></i></a></li>
                                    <li><a href="#" className="text-dark"><i className="fab fa-behance"></i></a></li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-center vh-100">
                                <div className="full-width">
                                    <div className="banner">
                                        <h6 className="text-dark">Hi There,</h6>
                                        <h1 className="cd-headline clip text-dark">I Am a
                                            <span className="cd-words-wrapper">
                                        <b className="is-visible"> Developer</b>
                                    </span>
                                        </h1>

                                        <p className="max-width-450 text-dark mt-20 mb-30">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing pretium lacus.
                                        </p>

                                        <a href="#about" className="btn-custom">
                                            <span><i className="fas fa-user"></i></span>
                                            <span> More About Me</span>
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

    )
}

export default Home;
