import React from "react";
import Category from "@components/Category";
import Categories from "@containers/Categories";
import "@styles/Home.scss";

const Home = () => {
    return (
        <div className='Home'>
            <Categories>
                <Category />
            </Categories>
        </div>
    );
};

export default Home;
