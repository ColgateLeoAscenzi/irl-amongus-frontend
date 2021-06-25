export default (theme) => ({
    '#root': {
        minHeight: '100%',

        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    a: {
        color: theme.palette.primary.main,
        '&:visited': {
            color: theme.palette.disabled.main,
        },
        '&:hover, &:active': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
    },
});
