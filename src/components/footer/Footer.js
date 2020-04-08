import React from 'react';

function Footer(){
    return (
        <>
            <footer className="pt-30 pb-30 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-dark text-center mb-0">© 2020 Mariam Wallas , Are Right All
                                Resereved.</p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="social-footer">
                <ul className="list-inline">
                    <li><a href="#"><i className="fab fa-facebook-f text-dark"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter text-dark"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram text-dark"></i></a></li>
                    <li><a href="#"><i className="fab fa-dribbble text-dark"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance text-dark"></i></a></li>
                </ul>
            </div>

        </>
    )
}

export default Footer;
