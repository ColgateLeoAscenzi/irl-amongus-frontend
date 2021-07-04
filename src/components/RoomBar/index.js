import React, { useState } from 'react';
import styles from './styles';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SocketContext2 from "../../socket";

const RoomBar = ({ classes, roomCode, roomInfo, gameInfo }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const {socket} = React.useContext(SocketContext2);
    const handleDropdown = () => {
        setDropDownOpen(!dropDownOpen);
        socket && socket.emit('fetch-admin-data');
    };

    const deleteRoom = (roomCode) => {
        socket && socket.emit('reset-room', { roomCode: roomCode });
        socket && socket.emit('fetch-admin-data');
    };

    return (
        <div className={clsx(classes.root, dropDownOpen && classes.rootOpen)}>
            <div className={classes.roomCodeTitleContainer}>
                <Typography
                    className={classes.roomCodeTitle}
                    onClick={handleDropdown}
                >
                    Room: {roomCode}
                </Typography>
                <Typography
                    className={classes.deleteRoomTitle}
                    onClick={() => deleteRoom(roomCode)}
                >
                    DELETE
                </Typography>
            </div>
            {dropDownOpen && (
                <div className={classes.dataContainer}>
                    <div className={classes.itemContainer}>
                        <div className={classes.playerDataContainer}>
                            <Typography className={classes.playerDataTitle}>
                                Player Data
                            </Typography>
                            <div>
                                {Object.keys(roomInfo.playerData).map(
                                    (name, i) => {
                                        const playerObj =
                                            roomInfo.playerData[name];
                                        return (
                                            <div key={i}>
                                                <Typography
                                                    className={
                                                        classes.playerTitle
                                                    }
                                                >
                                                    Player: {name}
                                                </Typography>
                                                <Typography
                                                    className={
                                                        classes.smallTitle
                                                    }
                                                >
                                                    Role: {playerObj?.role}
                                                </Typography>
                                                <Typography
                                                    className={
                                                        classes.smallTitle
                                                    }
                                                >
                                                    isDead:{' '}
                                                    {String(playerObj?.isDead)}
                                                </Typography>
                                                <Typography
                                                    className={
                                                        classes.smallTitle
                                                    }
                                                >
                                                    doingTask:{' '}
                                                    {String(
                                                        playerObj?.doingTask,
                                                    )}
                                                </Typography>
                                                <Typography
                                                    className={
                                                        classes.smallTitle
                                                    }
                                                >
                                                    currentTask:{' '}
                                                    {String(
                                                        playerObj?.currentTask,
                                                    )}
                                                </Typography>
                                                <Typography
                                                    className={
                                                        classes.smallTitle
                                                    }
                                                >
                                                    taskList:{' '}
                                                    {`[ ${playerObj?.taskList.map(
                                                        (task) => `${task}, `,
                                                    )} ]`}
                                                </Typography>
                                            </div>
                                        );
                                    },
                                )}
                            </div>
                        </div>

                        <div className={classes.gameDataContainer}>
                            <Typography className={classes.gameDataTitle}>
                                Game Data
                            </Typography>
                            <div>
                                <Typography className={classes.smallTitle}>
                                    inProgress: {String(gameInfo?.inProgress)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    inMeeting: {String(gameInfo?.inMeeting)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    tasks: {String(gameInfo?.tasks)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    totalTasks: {String(gameInfo?.totalTasks)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    tasksComplete:{' '}
                                    {String(gameInfo?.tasksComplete)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    impostersAlive:{' '}
                                    {String(gameInfo?.impostersAlive)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    crewAlive: {String(gameInfo?.crewAlive)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    gameOver: {String(gameInfo?.gameOver)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    crewWin: {String(gameInfo?.crewWin)}
                                </Typography>
                                <Typography className={classes.smallTitle}>
                                    imposterWin: {String(gameInfo?.imposterWin)}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

RoomBar.propTypes = {
    classes: PropTypes.object.isRequired,
    roomInfo: PropTypes.object,
    gameInfo: PropTypes.object,
    roomCode: PropTypes.string.isRequired,
};

RoomBar.defaultProps = {
    roomInfo: {},
    gameInfo: {},
};

export default withStyles(styles)(RoomBar);
