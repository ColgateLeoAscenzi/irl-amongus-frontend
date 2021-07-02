export default (theme) => ({
    title: {
        fontSize: 23,
        fontFamily: theme.typography.pixelFont,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    actionBarWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    actionsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dangerButton: {
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.danger.main,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.danger.main}CC`,
        },
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        marginRight: theme.spacing(1),
    },
    taskBarWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emergency: {
        color: theme.palette.danger.main,
    },
});
