import { LOAD_FETCH_DATA, LOADED_FETCH_DATA, ERROR_FETCH_DATA } from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    data: [],
    error: false
};

const reducer = (state = INITIAL_STATE, action) => {
    console.log('ACTION: ', action);
    switch(action.type) {
         case LOAD_FETCH_DATA: 
         
            return {
                ...state,
                loading: true
            };

        case LOADED_FETCH_DATA: 
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case ERROR_FETCH_DATA: 
            return {
                ...state,
                loading: false,
                data: [],
                error: true
            };

        default: 
            return state;
    }
};

export default reducer;