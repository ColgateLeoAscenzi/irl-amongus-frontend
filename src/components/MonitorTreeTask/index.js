import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const MonitorTreeTask = ({ classes }) => {
    const randomInts = [
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
        Math.floor(Math.random() * 101),
    ];

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Monitor Tree</Typography>
            <Slider
                orientation="vertical"
                defaultValue={0}
                valueLabelDisplay="on"
                marks={[{ value: randomInts[0], label: `${randomInts[0]}` }]}
                step={10}
                className={classes.slider}
            />
            <Slider
                orientation="vertical"
                defaultValue={50}
                valueLabelDisplay="on"
                marks={[{ value: randomInts[1], label: `${randomInts[1]}` }]}
                step={10}
                className={classes.slider}
            />
            <Slider
                orientation="vertical"
                defaultValue={0}
                valueLabelDisplay="on"
                marks={[{ value: randomInts[2], label: `${randomInts[2]}` }]}
                step={10}
                className={classes.slider}
            />
            <Slider
                orientation="vertical"
                defaultValue={75}
                valueLabelDisplay="on"
                marks={[{ value: randomInts[3], label: `${randomInts[3]}` }]}
                step={10}
                className={classes.slider}
            />
        </div>
    );
};

MonitorTreeTask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonitorTreeTask);
