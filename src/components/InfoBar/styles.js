export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: '5vh',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '3px solid white',
    },
    nameContainer: {
        fontFamily: theme.typography.amongUsFont,
        letterSpacing: 2,
        paddingRight: '10%',
        paddingLeft: '2%',
        fontSize: 26,
    },
    roomContainer: {
        fontFamily: theme.typography.pixelFont,
        paddingLeft: '10%',
        paddingRight: '2%',
        fontSize: 26,
    },
});
