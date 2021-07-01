import React from 'react';
import styles from './styles';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const WinnerScreen = ({ classes, winner }) => {
    return (
        <div className={classes.titleWrapper}>
            <Typography className={classes.title}>{winner}</Typography>
        </div>
    );
};

WinnerScreen.propTypes = {
    classes: PropTypes.object.isRequired,
    winner: PropTypes.string,
};

WinnerScreen.defaultProps = {
    winner: 'WINNER',
};

export default withStyles(styles)(WinnerScreen);
