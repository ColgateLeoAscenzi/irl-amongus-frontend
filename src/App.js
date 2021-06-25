import React, { useEffect, useState } from 'react';
import socketClient from 'socket.io-client';
import Game from './game';
const SERVER = 'http://127.0.0.1:8080';

const App = () => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(socketClient(SERVER));
        return () => {
            socket && socket.disconnect();
            setSocket(null);
        };
    }, [socket]);

    return <Game socket={socket} />;
};

export default App;
