import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { FileTreeRecursive } from "./FileTreeRecursive";

export const FileTree = () => {

    const dispatch = useDispatch();
    const {
        loading: isDataLoading,
        data: filesData
    } = useSelector(state => state.filesData);

    useEffect(() => {
        dispatch(actions.getFilesData(null));
    }, [dispatch]);

    return (
        <div>
            { isDataLoading && <p>Loading...</p> }
            { !!filesData.length && <FileTreeRecursive files={ filesData }/> }
        </div>
    )
}