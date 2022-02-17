import React, { useState } from 'react';
import { FaFolderOpen, FaFolder } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../actions";
import '../Styles/Folder.scss';

export const Folder = item => {

    const { name, children } = item;
    const dispatch = useDispatch();
    const [ isOpen, setIsOpen ] = useState(false);
    const { data: filesData } = useSelector(state => state.filesData);

    const handleOpen = () => {
        const nodeObj = {
            id: item.id,
            parentId: item.parentId
        };

        dispatch(actions.getFilesData(nodeObj, filesData));
        setIsOpen(!isOpen);
    };
    const classIsOpen = isOpen ? 'file__is-open' : '';

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