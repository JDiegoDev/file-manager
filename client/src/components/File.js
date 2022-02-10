import React from 'react';
import { AiOutlineFile } from 'react-icons/ai';
import '../Styles/File.scss';

export const File = ({ name }) => {

    const extension = name.split('.')[1];

    return (
        <div className='file'>
            <AiOutlineFile />
            <span>{ name }</span>
        </div>
    );
}
