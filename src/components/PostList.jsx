import React from "react";
import "@styles/PostList.scss";

const PostList = ({ children }) => {
    return (
        <div className='PostList collapsible'>
            <ul>
                {children.map((child) => (
                    <li
                        className={`Post ${child.active ? "Post--active" : ""}`}
                        key={`postItem-${child.id}`}>
                        <a href='/'>{child.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
