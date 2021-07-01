export default (theme) => ({
    title: {
        fontSize: 23,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2),
    },
    actionBarWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    actionsWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    dangerButton: {
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.danger.main,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.danger.main}CC`,
        },
    },
});
