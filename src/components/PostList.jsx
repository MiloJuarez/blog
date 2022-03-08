import React from "react";
import "@styles/PostList.scss";

const PostList = ({ children }) => {
    return (
        <div className='PostList'>
            <ul>
                <li className='Post Post--active'>
                    <a href='/'>Post 1</a>
                </li>
                <li className='Post'>
                    <a href='/'>Post 2</a>
                </li>
            </ul>
        </div>
    );
};

export default PostList;
