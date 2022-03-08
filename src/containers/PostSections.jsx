import React from "react";
import "@styles/PostSections.scss";

const PostSections = ({ sections }) => {
    return (
        <div className='PostSections'>
            <div className='PostSections__title'>Snacbars</div>
            <ul className='PostSections__items'>
                <li className='PostSections__item'>
                    <a href='#introduction'>Introduction</a>
                </li>
                <li className='PostSections__item'>
                    <a href='#example'>Example</a>
                </li>
                <li className='PostSections__item'>
                    <a href='#conclusion'>Conclusion</a>
                </li>
            </ul>
        </div>
    );
};

export default PostSections;
