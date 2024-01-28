// ==============================|| Handle Response REDUCER ||============================== //

const initialState = {
    validationErrors: [],
    action: false,
    open: false,
    message: 'Note archived',
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
    },
    variant: 'default',
    alert: {
        color: 'primary',
        variant: 'filled'
    },
    transition: 'Fade',
    close: true,
    actionButton: false
};

const validationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SNACKBAR': {
            return {
                ...state,
                message: action.payload.message,
                alert: {
                    color: action.payload.alert.color,
                    variant: 'filled'
                },
                variant: action.payload.variant,
                open: true,
                close: true
            };
        }
        case 'CLOSE_SNACKBAR': {
            return {
                ...state,
                open: false
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default validationReducer;
