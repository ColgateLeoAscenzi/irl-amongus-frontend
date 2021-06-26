import { createContext } from 'react';
import { socketInitialState } from './reducer';

const SocketContext = createContext(socketInitialState);

export default SocketContext;
