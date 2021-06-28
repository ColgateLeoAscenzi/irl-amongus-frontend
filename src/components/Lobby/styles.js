export default (theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '3%',
    },
    title: {
        fontSize: 26,
        color: theme.palette.primary.contrastText,
        borderBottom: '3px solid white',
        marginBottom: theme.spacing(4),
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    playerBox: {
        borderBottom: '1.5px solid white',
        marginBottom: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        textAlign: 'center',
        width: '50vw',
        color: theme.palette.primary.contrastText,
    },
    buttonClass: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        border: 'solid',
        borderColor: theme.palette.primary.contrastText,
        borderWidth: 3,
        borderRadius: 10,
        fontSize: 16,
        '&:hover': {
            borderColor: theme.palette.green,
        },
    },
});
