import clsx from 'clsx';
import React from 'react';

const Container = ({children, className = "max-w-7xl"}) => {
    return (
        <div className={clsx(`mx-auto px-4 md:px-5 lg:px-0`, className)}>
            {children}
        </div>
    );
};

export default Container;