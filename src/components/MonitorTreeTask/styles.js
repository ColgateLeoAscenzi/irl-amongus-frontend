export default (theme) => ({
    root: {
        padding: '3%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    slider: {
        height: 300,
    },
    title: {
        fontSize: 23,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(4),
    },
});
