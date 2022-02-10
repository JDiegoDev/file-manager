import React from 'react';
import { AiFillFolder } from 'react-icons/ai';
import '../Styles/Folder.scss';

export const Folder = ({ name }) => {
    return (
        <div className='folder'>
            <AiFillFolder />
            <span>{ name }</span>
        </div>
    );
}