export default (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#5C5C5C',
    },
    buttonClass: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
});
