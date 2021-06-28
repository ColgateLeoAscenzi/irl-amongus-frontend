export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    rootOpen: {
        border: `1.5px solid ${theme.palette.primary.contrastText}`,
        marginBottom: theme.spacing(3),
    },
    roomCodeTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        spacing: 'space-between',
        borderBottom: `1.5px solid ${theme.palette.primary.contrastText}`,
        marginBottom: theme.spacing(2),
    },
    roomCodeTitle: {
        fontSize: 18,
        color: theme.palette.primary.contrastText,
    },
    deleteRoomTitle: {
        paddingLeft: theme.spacing(2),
        fontSize: 12,
        color: theme.palette.danger.main,
    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    itemContainer: {
        paddingBottom: theme.spacing(1),
    },
    playerDataContainer: {
        paddingBottom: theme.spacing(2),
    },
    playerDataTitle: {
        fontSize: 18,
        borderBottom: `1px solid ${theme.palette.green}`,
        marginBottom: theme.spacing(1),
        color: theme.palette.green,
    },
    playerTitle: {
        fontSize: 16,
        borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
    },
    smallTitle: {
        fontSize: 16,
        paddingLeft: theme.spacing(2),
    },
    gameDataContainer: {
        color: theme.palette.white,
    },
    gameDataTitle: {
        fontSize: 18,
        borderBottom: `1px solid ${theme.palette.votingBlue}`,
        marginBottom: theme.spacing(1),
        color: theme.palette.votingBlue,
    },
});
