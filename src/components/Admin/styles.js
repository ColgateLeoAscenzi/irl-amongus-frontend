export default (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    dangerButton: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.danger.main,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.danger.main}CC`,
        },
    },
    statusButton: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.green,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.green}CC`,
        },
    },
});
