export default (theme) => ({
    root: {
        padding: '3%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    progressBar: {
        color: theme.palette.white,
        width: '100%',
    },
    title: {
        fontSize: 23,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(4),
    },
});
