export default (theme) => ({
    title: {
        fontSize: 23,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2),
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    voteButton: {
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.taskBarGreen,
        '&:hover, &:active, &visited': {
            backgroundColor: `${theme.palette.taskBarGreen}CC`,
        },
    },
});
