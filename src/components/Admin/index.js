import React, { useContext, useEffect, useState } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SocketContext from '../../contexts/SocketContext';

const Admin = ({ classes }) => {
    const { socket } = useContext(SocketContext);

    const [status, setStatus] = useState('Checking Server Status...');

    const clickHandler = () => {
        socket && socket.emit('reset-rooms');
    };

    const statusHandler = async () => {
        try {
            const resp = await fetch(process.env.REACT_APP_API_URL);
            const msg = await resp.json();
            setStatus(`Server is ${msg.status}`);
        } catch (e) {
            setStatus('Server is Down');
        }
    };

    useEffect(() => {
        statusHandler().then(() => {});
    });

    return (
        <div className={classes.root}>
            <div>Status: {status}</div>
            <Button className={classes.dangerButton} onClick={clickHandler}>
                Reset Rooms
            </Button>
            <Button className={classes.statusButton} onClick={statusHandler}>
                Check Status
            </Button>
        </div>
    );
};

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);
