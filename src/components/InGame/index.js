import React from 'react';
import styles from './styles';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const InGame = ({ classes }) => {
    return <Typography className={classes.root}>In Game!</Typography>;
};

InGame.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InGame);
