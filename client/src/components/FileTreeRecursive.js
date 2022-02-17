import React from "react";
import { Folder } from './Folder';
import { File } from './File';

export const FileTreeRecursive = ({ files }) => {
    return (
      <div>
        { !!files.length && (
          <div> {
              files.map((file, index) => {
                  if (file.type === 'folder') {
                      return (
                        <Folder
                            name={file.name}
                            id={file.id}
                            parentId={file.parentId}
                            key={`${file.name}-${index}`}
                        >
                            <FileTreeRecursive files={ file.children } key={`${file.name}-${index}`} />
                        </Folder>
                      )
                  } else {
                      return <File name={file.name} key={`${file.name}-${index}`}/>
                  }
              })    
          }</div>
        )}
      </div>
    )
};