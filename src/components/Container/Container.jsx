import React from 'react';

const Container = ({children, className}) => {
    return (
        <div className={clsx("max-w-350 mx-auto px-4 md:px-5 lg:px-0", className)}>
            {children}
        </div>
    );
};

export default Container;