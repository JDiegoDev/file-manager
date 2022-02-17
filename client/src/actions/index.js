import axios from "axios";
import { LOAD_FETCH_DATA ,LOADED_FETCH_DATA, SAVE_FILES_DATA } from "../actions/types";

export const getFilesData = (nodeObj, data) => async dispatch => {
    dispatch({ type: LOAD_FETCH_DATA, payload: []});
    const body = { node : nodeObj, tree: data };

    try {
        const response = await axios.post('/api/folder_manager', body);
        let newTree = null;

        if (response.data.oldData) {   
            newTree = getDesiredChildren(response.data.oldData, nodeObj, response.data.newData);
        }

        dispatch({ type: LOADED_FETCH_DATA, payload: !newTree ? response.data.newData : response.data.oldData  });
        
    } catch (error) {
        console.log('Error: ', error);
    }
};


const getDesiredChildren = (data, selectedNode, newData) => {
    const updatedData = data && data.map(node => {
        if (node.id === selectedNode.id) {
            node.children = newData;
        } else {
            getDesiredChildren(node.children, selectedNode, newData);
        }
    });

    return updatedData;
}; 