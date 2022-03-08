import React from "react";
import "@styles/PostList.scss";

const PostList = ({ children }) => {
    return (
        <div className='PostList collapsible'>
            <ul>
                <li className='Post Post--active'>
                    <a href='/'>Custom pagination</a>
                </li>
                <li className='Post'>
                    <a href='/'>Relationship</a>
                </li>
                <li className='Post'>
                    <a href='/'>Form with Laravel/Collective</a>
                </li>
                <li className='Post'>
                    <a href='/'>Custom Widget</a>
                </li>
                <li className='Post'>
                    <a href='/'>Snackbars</a>
                </li>
            </ul>
        </div>
    );
};

export default PostList;
