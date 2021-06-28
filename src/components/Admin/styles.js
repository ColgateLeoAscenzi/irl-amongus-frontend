export default (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    dangerButton: {
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.danger.main,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.danger.main}CC`,
        },
    },
    statusButton: {
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.green,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.green}CC`,
        },
    },
    roomDataButton: {
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.votingBlue,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.votingBlue}CC`,
        },
    },
    statusBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: '5vh',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '3px solid white',
    },
    statusBarDown: {
        color: theme.palette.danger.main,
    },
    statusBarUp: {
        color: theme.palette.green,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '3%',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '3%',
    },
    roomInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '3%',
    },
    subtitle: {
        fontSize: 28,
    },
});
