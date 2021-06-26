export default (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.lightGray,
        display: 'flex',
        flexDirection: 'column',
    },
    gameInfo: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
        color: 'white',
    },
    buttonClass: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
});
