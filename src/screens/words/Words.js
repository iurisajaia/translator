import React , { Component } from 'react';

class Words extends Component{
    render() {
        return (
            <section id="about" className="section about">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="categories-filter">
                            <div>
                                <input type="checkbox" id="animals" className="mr-3"/>
                                <label htmlFor="animals">Animals</label>
                            </div>
                            <div>
                                <input type="checkbox" id="colors" className="mr-3"/>
                                <label htmlFor="colors">Colors</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <div className="row mb-10">

                            <div className="col-lg-6 position-relative mb-30">
                                <div className="word-box"></div>
                                <div className="timeline">
                                    <div className="item">
                                        <div className="content">
                                            <h6 className="text-dark mb-0">How Are You?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="timeline">
                                    <div className="item">
                                        <div className="content">
                                            <h6 className="text-dark mb-0">როგორ ხარ?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-10">
                            <div className="col-lg-6 position-relative mb-30">
                                <div className="word-box"></div>
                                <div className="timeline">
                                    <div className="item">
                                        <div className="content">
                                            <h6 className="text-dark mb-0">How Are You?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="timeline">
                                    <div className="item">
                                        <div className="content">
                                            <h6 className="text-dark mb-0">როგორ ხარ?</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Words;
