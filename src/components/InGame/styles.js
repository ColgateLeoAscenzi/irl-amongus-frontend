export default (theme) => ({
    root: {
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        marginLeft: '10%',
        marginBottom: theme.spacing(2),
        color: theme.palette.primary.contrastText,
    },
    noTaskError: {
        marginLeft: '10%',
        marginBottom: theme.spacing(2),
        color: `${theme.palette.danger.main} !important`,
    },
    input: {
        '& .MuiOutlinedInput-root': {
            marginLeft: '5%',
            width: '80%',
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
});
