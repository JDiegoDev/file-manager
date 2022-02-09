import React, { useEffect } from "react";
import axios from 'axios';

export const FileTree = () => {

    useEffect(() => {
        axios.get('/api/folder_manager')
            .then(res => {
                console.log('Response: ', res);
            })
    }, []);

    return <div>Tree</div>
}