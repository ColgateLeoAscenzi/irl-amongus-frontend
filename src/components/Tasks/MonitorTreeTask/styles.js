export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '3%',
        color: theme.palette.primary.contrastText,
        height: '75vh',
    },
    title: {
        fontSize: 23,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2),
    },
    sliderContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.monitorSlider.background,
        border: `8px solid gray`,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(6),
    },
});
