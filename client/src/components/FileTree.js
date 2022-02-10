import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

export const FileTree = () => {

    const dispatch = useDispatch();
    const {
        loading: isDataLoading,
        data: filesData
    } = useSelector(state => state.filesData);

    useEffect(() => {
        dispatch(actions.getFilesData());
    }, [dispatch]);

    return (
        <div>
            { isDataLoading && <p>Loading...</p> }
            { !!filesData.length && (
                <div> Folders will go here !!!</div>
            )}
        </div>
    )
}