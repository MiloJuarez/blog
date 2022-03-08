import React from "react";
import "@styles/Categories.scss";

const Categories = ({ children }) => {
    return (
        <div className='Categories'>
            <div className='Categories__title'>Categorias</div>
            {children}
        </div>
    );
};

export default Categories;
