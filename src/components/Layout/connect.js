import React from 'react';
import Layout from './index';

export const withLayout = (ChildComponent) => {
    return function withMainLayoutHOC(props) {
        return (
            <Layout>
                <ChildComponent {...props} />
            </Layout>
        );
    };
};
