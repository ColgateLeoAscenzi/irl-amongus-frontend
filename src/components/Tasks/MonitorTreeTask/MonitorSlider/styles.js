export default (theme) => ({
    root: {
        color: '#6f8eff',
        height: 3,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        border: `3px solid ${theme.palette.monitorSlider.sliderBorder}`,
    },
    CO2Root: {
        color: theme.palette.monitorSlider.CO2,
    },
    NutriRoot: {
        color: theme.palette.monitorSlider.nutri,
    },
    RadRoot: {
        color: theme.palette.monitorSlider.rad,
    },
    WaterRoot: {
        color: theme.palette.monitorSlider.water,
    },
    track: {
        width: '42px !important',
        marginLeft: -20,
    },
    rail: {
        color: theme.palette.monitorSlider.background,
        width: '42px !important',
        marginLeft: -20,
    },
    thumb: {
        marginLeft: '-25px !important',
        marginBottom: '-12px !important',
        height: '24px !important',
        width: '52px !important',
        borderRadius: '0% !important',
        backgroundColor: `${theme.palette.monitorSlider.knob}AA`,
        border: `2px solid ${theme.palette.monitorSlider.sliderBorder}`,
    },
    mark: {
        backgroundColor: '#ffffff',
        height: 4,
        width: 42,
        marginLeft: -20,
    },
    label: {
        fontFamily: theme.typography.pixelFont,
        fontWeight: 600,
        letterSpacing: 2,
        marginTop: '2px',
        textAlign: 'center',
        color: theme.palette.monitorSlider.sliderBorder,
        border: `2px solid ${theme.palette.monitorSlider.sliderBorder}`,
    },
});
