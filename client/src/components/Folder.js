import React, { useState } from 'react';
import { FaFolderOpen, FaFolder } from 'react-icons/fa';
import '../Styles/Folder.scss';

export const Folder = ({ name, children }) => {

    const [ isOpen, setIsOpen ] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    const classIsOpen = isOpen ? 'file__is-open' : '';

    console.log('children', children);
    console.log('isopen', isOpen);

    return (
        <div className='folder'>
            <div className='folder__container' onClick={handleOpen}>
                { isOpen && <FaFolderOpen /> }
                { !isOpen && <FaFolder /> }
                <span>{ name }</span>
            </div>
            { isOpen && <div className={classIsOpen}>{ children }</div> }
        </div>
    );
}