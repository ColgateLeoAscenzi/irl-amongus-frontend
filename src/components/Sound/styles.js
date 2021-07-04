export default (theme) => ({
    root: {
        padding: '3%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    stat: {
        color: theme.palette.primary.contrastText,
    },
    emergency: {
        color: theme.palette.danger.main,
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '3%',
    },
    label: {
        color: theme.palette.primary.contrastText,
        fontSize: 16,
        paddingBottom: theme.spacing(1),
    },
    inputContainer: {
        paddingBottom: theme.spacing(2),
    },
    input: {
        '& .MuiOutlinedInput-root': {
            color: theme.palette.primary.contrastText,
            border: 'solid',
            borderColor: theme.palette.primary.contrastText,
            borderWidth: 3,
            borderRadius: 10,
            fontSize: 16,
            '&:hover': {
                borderColor: theme.palette.green,
            },
        },
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
