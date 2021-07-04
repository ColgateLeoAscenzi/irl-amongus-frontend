import React from "react";
import io from "socket.io-client";
const SERVER = process.env.REACT_APP_API_URL;
export const socket = io(SERVER);
const SocketContext2 = React.createContext(socket);

export default SocketContext2;