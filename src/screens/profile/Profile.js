import React from 'react';
import MyProfileImage from "../../assets/img/hero.jpg";
import {Link} from "react-router-dom";

function Profile(){
    return (
        <>
        <section id="about" className="section about">
            <div className="container">
                <div className="row mb-50 pt-30">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="text-dark mb-0">About me</h2>
                            <p className="text-muted mb-0">Main informations about me and what I love to do.</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-50">
                    <div className="col-lg-5">
                        <div className="hero">
                            <img src={MyProfileImage} alt="" />

                        </div>
                    </div>

                    <div className="col-lg-7 d-flex align-items-center">
                        <div className="details">
                            <h5>Hello ,I'm Mariam Wallas</h5>
                            <p className="text-dark mb-25">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla pretium
                                lacus, eu luctus neque ultricies a. Phasellus
                                faucibus orci a purus mattis tincidunt ut non nulla.
                                Donec ullamcorper sapien eget neque facilisis euismod.
                            </p>

                            <ul className="info mb-5 list-inline">
                                <li className="text-dark">
                                    <span className="font-w-600">Name :</span> Mariam Wallas
                                </li>
                                <li className="text-dark">
                                    <span className="font-w-600">Phone :</span> + 113-804-9098
                                </li>
                                <li className="text-dark">
                                    <span className="font-w-600">Date of birth :</span> 01-01-1993
                                </li>
                                <li className="text-dark">
                                    <span className="font-w-600">Email :</span>
                                    <a href="mailto:contact@mariam.com" className="text-dark">contact@mariam.com</a>
                                </li>
                                <li className="text-dark">
                                    <span className="font-w-600">Nationality :</span> United States
                                </li>
                                <li className="text-dark">
                                    <span className="font-w-600">Address :</span> 1000 Proctor St USA
                                </li>

                                <li className="text-dark">
                                    <span className="font-w-600">Work Status :</span> Web Designer
                                </li>
                                <li className="text-dark">
                                    <span className="font-w-600">Freelancer :</span> Available
                                </li>

                            </ul>

                            <a href="#about" className="btn-custom">
                            <span>
                                <i className="fas fa-cloud-download-alt"></i>
                            </span>
                                <span>Downland My CV</span>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="row features mb-20">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="item">
                            <div className="icon mb-10"><i className="fas fa-user text-dark"></i></div>
                            <p className="text-dark mb-0">2 Languages</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="item">
                            <div className="icon mb-10">
                                <i className="fas fa-coffee text-dark"></i>
                            </div>
                            <p className="text-dark mb-0">1480 Words</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="item">
                            <div className="icon mb-10">
                                <i className="fas fa-smile text-dark"></i>
                            </div>
                            <p className="text-dark mb-0">1400 Translate</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="item">
                            <div className="icon mb-10">
                                <i className="fas fa-medal text-dark"></i>
                            </div>
                            <p className="text-dark mb-0">5 Exam</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="services" className="section services">
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="text-dark mb-0">My Languages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-sm-6 col-lg-4">
                            <div className="item">
                                <Link to="/words/english/1">
                                    <div className="circle">
                                        <h2>01</h2>
                                    </div>
                                    <div className="content ">
                                        <h5 className="text-dark mt-15 mb-10">English</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="item">
                                <Link to="/words/english/1">
                                    <div className="circle">
                                        <h2>02</h2>
                                    </div>
                                    <div className="content">
                                        <h5 className="text-dark  mt-15 mb-10">German</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="item">
                                <Link to="/words/english/1">
                                    <div className="circle">
                                        <h2>03</h2>
                                    </div>
                                    <div className="content">
                                        <h5 className="text-dark  mt-15 mb-10">Russian</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Profile;
