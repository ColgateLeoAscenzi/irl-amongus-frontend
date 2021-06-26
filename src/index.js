import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import { createBrowserHistory } from 'history';
import App from './components/App';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <App history={history} />
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
