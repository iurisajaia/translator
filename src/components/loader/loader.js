import React from 'react';

const Loader = props =>{

    const { isLoading , children } = props;

    return (
        <>
            {isLoading ? (
               <div className="loader-wrapper">
                <div className="spinner-box">
                    <div className="configure-border-1">
                        <div className="configure-core"></div>
                    </div>
                    <div className="configure-border-2">
                        <div className="configure-core"></div>
                    </div>
                </div>
               </div>
            ) : children}
        </>
    )
};

export default Loader;
