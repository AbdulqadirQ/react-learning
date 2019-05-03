import React from 'react';

/**
 * this HoC wrapper class is responsible for adding a div with a given css class
 */
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;