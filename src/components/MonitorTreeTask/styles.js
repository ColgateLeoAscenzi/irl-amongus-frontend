export default (theme) => ({
    root: {
        padding: '3%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: 400,
    },
    slider: {
        height: '100%',
        root: {
            color: '#6f8eff',
            height: 3,
            padding: '13px 0',
        },
        track: {
            height: 4,
            borderRadius: 2,
        },
        thumb: {
            height: 20,
            width: 20,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            marginTop: -9,
            marginLeft: -11,
            boxShadow: '#ebebeb 0 2px 2px',
            '&:focus, &:hover, &$active': {
                boxShadow: '#ccc 0 2px 3px 1px',
            },
            color: '#fff',
        },
    },
    title: {
        fontSize: 23,
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(4),
    },
});
