import React, { useContext } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SocketContext from '../../contexts/SocketContext';

const Admin = ({ classes }) => {
    const { socket } = useContext(SocketContext);

    const clickHandler = () => {
        socket && socket.emit('reset-rooms');
    };

    return (
        <div className={classes.root}>
            <Button className={classes.dangerButton} onClick={clickHandler}>
                Reset Rooms
            </Button>
        </div>
    );
};

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);
