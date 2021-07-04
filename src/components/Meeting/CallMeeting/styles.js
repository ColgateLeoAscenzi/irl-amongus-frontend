export default (theme) => ({
    root: {
        padding: '3%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    statusButton: {
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.green,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.green}CC`,
        },
    },
});
