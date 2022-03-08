import React from "react";
import PostList from "./PostList";
import "@styles/Category.scss";

const Category = ({ category }) => {
    const handleCollapse = (e) => {
        if (e.target.classList.contains("Category--active")) {
            e.target.classList.remove("Category--active");
        } else {
            e.target.classList.add("Category--active");
        }
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
                {category.title}
            </div>
            <PostList children={category.posts} />
        </div>
    );
};

export default Category;
