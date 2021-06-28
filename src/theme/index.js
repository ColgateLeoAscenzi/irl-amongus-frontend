import { createMuiTheme } from '@material-ui/core/styles';

const white = '#ffffff';
const black = '#000000';
const green = '#50f078';
const gray = '#4d4d4d';
const votingBlue = '#a0bbd6';
const playerBoxGray = '#d8dfe5';
const fontFamily = 'mr-eaves, "Helvetica Neue", Helvetica, Arial, sans-serif';
const amongUsFont = '"Amatic SC", cursive';
const pixelFont = '"VT323", monospace';

const palette = {
    primary: {
        main: black,
        contrastText: white,
        dark: black,
        light: gray,
    },
    secondary: {
        main: '#black',
        contrastText: white,
        dark: black,
        light: gray,
    },
    background: {
        main: white,
        contrastText: '#CCCCCC',
    },
    foreground: {
        main: black,
        contrastText: white,
    },
    danger: {
        main: '#f44336',
        contrastText: white,
    },
    success: {
        main: '#4caf50',
        contrastText: black,
    },
    warn: {
        main: '#ff9800',
        contrastText: black,
    },
    info: {
        main: '#3293C9',
        contrastText: white,
    },
    disabled: {
        main: 'rgba(0, 0, 0, 0.38)',
    },
    shadow: {
        main: 'rgba(0,0,0,0.75)',
    },
    input: {
        label: white,
        border: white,
        text: white,
    },
    white,
    black,
    green,
    gray,
    votingBlue,
    playerBoxGray,
};

const breakpoints = {
    values: {
        xs: 0,
        largeMobile: 414,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
};

/**
 * Basic implementations of `theme.breakpoints.up` and `theme.breakpoints.down` from `@material-ui/core`.
 *
 * @see https://material-ui.com/customization/breakpoints/#api
 *
 * @type {{up: (function(*): string), down: (function(*): string)}}
 */
const breakpointsHelpers = {
    up: (key) => {
        const width =
            typeof breakpoints.values[key] === 'number'
                ? breakpoints.values[key]
                : key;
        return `@media (min-width: ${parseInt(width)}px)`;
    },
    down: (key) => {
        const width =
            typeof breakpoints.values[key] === 'number'
                ? breakpoints.values[key]
                : key;
        const calculatedWidth = Math.max(parseFloat(width) - 0.05, 0);
        return `@media (max-width: ${calculatedWidth.toFixed(2)}px)`;
    },
};

const typography = {
    fontFamily,
    amongUsFont,
    pixelFont,
    normal: {
        fontFamily,
        fontSize: '14px',
        lineHeight: '1.2',
    },
    h1: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 20,
        [breakpointsHelpers.up('lg')]: {
            fontSize: 32,
            letterSpacing: 3.2,
        },
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    h3: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 1.2,

        [breakpointsHelpers.up('lg')]: {
            fontSize: 14,
            letterSpacing: 1.4,
        },
    },
    subtitle1: {
        fontSize: 16,
        [breakpointsHelpers.up('lg')]: {
            fontSize: 20,
        },
    },
    subtitle2: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 1.2,
        fontWeight: 'bold',
    },
    body1: {
        fontSize: 16,
        [breakpointsHelpers.up('lg')]: {
            fontSize: 20,
        },
    },
    body2: {
        fontSize: 16,
    },
};

const common = {
    roundiness: 3,
    boxShadow: `0px 4px 10px -5px ${palette.shadow}`,
    disabledOpacity: 0.3,
    drawerWidth: 340,
};

const overrides = {
    MuiTypography: {
        colorTextSecondary: {
            color: white,
        },
        colorTextPrimary: {
            color: white,
        },
    },
    MuiToolbar: {
        root: {
            backgroundColor: black,
        },
    },
    MuiSlider: {
        thumb: {
            color: 'blue',
        },
        track: {
            color: 'red',
        },
        rail: {
            color: 'white',
        },
    },
};

export default createMuiTheme({
    themeName: 'IRL Among Us Theme  ',
    palette,
    typography,
    common,
    breakpoints: {
        ...breakpoints,
        ...breakpointsHelpers,
    },
    overrides,
});
