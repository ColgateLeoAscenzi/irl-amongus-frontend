import React, { useEffect, useState } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import RoomBar from '../RoomBar';
import clsx from 'clsx';
import SocketContext2 from "../../socket";

const Admin = ({ classes }) => {
    const {socket} = React.useContext(SocketContext2);
    const [status, setStatus] = useState('Checking Server Status...');

    const [roomsInfo, setRoomsInfo] = useState({});
    const [gameDataInfo, setGameDataInfo] = useState({});

    const clickHandler = () => {
        socket && socket.emit('reset-all-rooms');
        socket && socket.emit('fetch-admin-data');
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

    const roomHandler = () => {
        socket && socket.emit('fetch-admin-data');
    };

    socket &&
        socket.on('admin-data', ({ rooms, gameData }) => {
            setRoomsInfo(rooms);
            setGameDataInfo(gameData);
        });

    return (
        <div className={classes.root}>
            <div
                className={clsx(
                    classes.statusBar,
                    status === 'Server is Down' && classes.statusBarDown,
                    status === 'Server is Up' && classes.statusBarUp,
                )}
            >
                Status: {status}
            </div>
            <div className={classes.buttonContainer}>
                <Button className={classes.dangerButton} onClick={clickHandler}>
                    Reset Rooms
                </Button>
                <Button
                    className={classes.statusButton}
                    onClick={statusHandler}
                >
                    Check Status
                </Button>
                <Button
                    className={classes.roomDataButton}
                    onClick={roomHandler}
                >
                    Refresh Room Data
                </Button>
            </div>
            <div className={classes.infoContainer}>
                <div className={classes.roomInfoContainer}>
                    <Typography className={classes.subtitle}>Rooms</Typography>
                    {roomsInfo && Object.keys(roomsInfo).length === 0 ? (
                        <div>No Games or Refresh Needed</div>
                    ) : (
                        <div>
                            {Object.keys(roomsInfo).map((roomCode, i) => {
                                return (
                                    <RoomBar
                                        key={i}
                                        roomCode={roomCode}
                                        roomInfo={roomsInfo[roomCode]}
                                        gameInfo={gameDataInfo[roomCode]}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);
