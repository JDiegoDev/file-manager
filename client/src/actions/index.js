import axios from "axios";
import { LOAD_FETCH_DATA ,LOADED_FETCH_DATA } from "../actions/types";

export const getFilesData = (files) => async dispatch => {
    dispatch({ type: LOAD_FETCH_DATA, payload: []});

    try {
        const response = await axios.get('/api/folder_manager');
        dispatch({ type: LOADED_FETCH_DATA, payload: response.data })
    } catch (error) {
        console.log('error', error);
    }
}