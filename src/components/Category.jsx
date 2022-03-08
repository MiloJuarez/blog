import React from "react";
import PostList from "./PostList";
import "@styles/Category.scss";

const Category = ({ category }) => {
    const handleCollapse = (e) => {
        e.target.classList.toggle("Category--active");
        let content = e.target.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

    return (
        <div className='Category'>
            <div className='Category__title' onClick={handleCollapse}>
                # Categoria 1
            </div>
            <PostList children={null} />
        </div>
    );
};

export default Category;
