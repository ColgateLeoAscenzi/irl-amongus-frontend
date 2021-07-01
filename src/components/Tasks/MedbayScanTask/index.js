import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const MedbayScanTask = ({ classes }) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 100 : prevProgress + 10,
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Medbay Scan</Typography>
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
                <Box minWidth={35}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                    >{`${Math.round(progress)}%`}</Typography>
                </Box>
            </Box>
        </div>
    );
};

MedbayScanTask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MedbayScanTask);
