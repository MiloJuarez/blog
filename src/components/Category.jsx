import React from "react";
import PostList from "./PostList";
import "@styles/Category.scss";

const Category = ({ category }) => {
    return (
        <div className='Category'>
            <div className='Category__title'># Categoria 1</div>
            <PostList children={null} />
        </div>
    );
};

export default Category;
