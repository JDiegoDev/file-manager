import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { Folder } from './Folder';
import { File } from './File';

export const FileTree = () => {

    const dispatch = useDispatch();
    const {
        loading: isDataLoading,
        data: filesData
    } = useSelector(state => state.filesData);

    useEffect(() => {
        dispatch(actions.getFilesData([]));
    }, [dispatch]);

    return (
        <div>
            { isDataLoading && <p>Loading...</p> }
            { !!filesData.length && (
                <div> {
                    filesData.map(file => {
                        if (file.type === 'folder') {
                            return <Folder name={file.name} />
                        } else {
                            return <File name={file.name} />
                        }
                    })    
                }</div>
            )}
        </div>
    )
}