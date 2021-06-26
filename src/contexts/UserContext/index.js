import { createContext } from 'react';
import { userInitialState } from './reducer';

const UserContext = createContext(userInitialState);

export default UserContext;
