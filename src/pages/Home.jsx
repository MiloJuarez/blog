import React from "react";
import Category from "@components/Category";
import Categories from "@containers/Categories";
import "@styles/Home.scss";
import PostContent from "@containers/PostContent";
import PostSections from "../containers/PostSections";

const Home = () => {
    return (
        <div className='Home'>
            <Categories>
                <Category
                    category={{
                        id: 1,
                        title: "Laravel",
                        active: false,
                        posts: [
                            {
                                id: 1,
                                id_category: 1,
                                title: "Custom pagination",
                                active: false,
                                tags: ["introduction", "example", "conclusion"],
                            },
                        ],
                    }}
                    key={"category-1"}
                />
                <Category
                    category={{
                        id: 2,
                        title: "Flutter",
                        active: true,
                        posts: [
                            {
                                id: 2,
                                id_category: 2,
                                title: "Snacbars",
                                active: true,
                                tags: ["introduction", "example", "conclusion"],
                            },
                            {
                                id: 3,
                                id_category: 2,
                                title: "Custom Appbar",
                                active: false,
                                tags: ["description", "example", "conclusion"],
                            },
                        ],
                    }}
                    key={"category-2"}
                />
                <Category
                    category={{
                        id: 3,
                        title: "Java",
                        active: false,
                        posts: [
                            {
                                id: 3,
                                id_category: 3,
                                title: "JPanel with multiple tabs",
                                active: false,
                                tags: ["introduction", "example", "conclusion"],
                            },
                        ],
                    }}
                    key={"category-3"}
                />
            </Categories>
            <PostContent />
            <PostSections />
        </div>
    );
};

export default Home;
