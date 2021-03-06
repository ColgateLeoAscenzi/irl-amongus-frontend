export default (theme) => ({
    title: {
        fontSize: 23,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2),
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
