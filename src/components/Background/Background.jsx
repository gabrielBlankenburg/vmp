/* Packages */
import React from 'react';

/* Component */
const Background = (props) => {
    const { children } = props;

    return (
        <div className="background">
            {children}
        </div>
    );
};

/* Exporting */
export default Background;
