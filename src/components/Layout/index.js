import React from 'react';
import styles from './styles.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import InfoBar from '../InfoBar';

const Layout = ({ children, classes }) => {
    return (
        <div className={classes.root}>
            <div>
                <InfoBar />
            </div>
            <div className={classes.mainContainer}>{children}</div>
        </div>
    );
};

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
};

Layout.defaultProps = {
    children: null,
};

export default withStyles(styles)(Layout);
