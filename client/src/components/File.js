import React from 'react';
import { AiOutlineFile, AiOutlineFilePdf, AiOutlineHtml5, AiOutlineFileImage } from 'react-icons/ai';
import { DiJavascript1 } from 'react-icons/di';

import '../Styles/File.scss';

export const File = ({ name }) => {

    const extension = name.split('.')[1];
    let fileIcon = null;

    switch (extension) {
        case 'pdf': 
          fileIcon =  <AiOutlineFilePdf />;
          break;

        case 'html': 
          fileIcon =  <AiOutlineHtml5 />;
          break;

        case 'png': 
          fileIcon =  <AiOutlineFileImage />;
          break;

        case 'js': 
          fileIcon =  <DiJavascript1 />;
          break;

        default:
         fileIcon = <AiOutlineFile />;
    }
    console.log('extension', name);

    return (
        <div className='file' id={name}>
            { fileIcon }
            <span className='file__name'>{ name }</span>
        </div>
    );
}
