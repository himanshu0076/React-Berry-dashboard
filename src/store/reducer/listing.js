// ==============================|| Handle Response REDUCER ||============================== //

const initialState = {
    total: 0,
    currentPage: 1,
    recordPerPage: 15,
    searchStr: '',
    order: 'DESC',
    orderBy: 'id',
    listingData: [],
    currentData: undefined
};

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LISTING': {
            return {
                ...state,
                listingData: action.payload.listingData,
                currentpage: action.payload.currentpage
                // total: action.payload.total
            };
        }

        case 'UPDATE_LISTING': {
            return {
                ...state,
                listingData: action.payload.listingData
            };
        }

        case 'SET_ORDER': {
            return {
                ...state,
                order: action.payload.order,
                orderBy: action.payload.orderBy
            };
        }

        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.payload.currentPage
            };
        }
        case 'SET_SEARCH_STR': {
            return {
                ...state,
                searchStr: action.payload.searchStr
            };
        }
        case 'SET_CURRENT_DATA': {
            return {
                ...state,
                currentData: action.payload.currentData
            };
        }
        case 'RESET_LISTING': {
            return {
                ...state,
                listingData: []
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default listingReducer;
