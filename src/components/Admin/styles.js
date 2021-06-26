export default (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.lightGray,
    },
    dangerButton: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.danger,
    },
});
