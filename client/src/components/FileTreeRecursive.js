import React from "react";
import { Folder } from './Folder';
import { File } from './File';

export const FileTreeRecursive = ({ files }) => {
    console.log('FileTreeRecursive', files)
    return (
        <div>
            { !!files.length && (
                <div> {
                    files.map(file => {
                        if (file.type === 'folder') {
                            return (
                                <Folder name={file.name} >
                                    <FileTreeRecursive files={ file.children } />
                                </Folder>
                            )
                        } else {
                            return <File name={file.name} />
                        }
                    })    
                }</div>
            )}
        </div>
    )
};