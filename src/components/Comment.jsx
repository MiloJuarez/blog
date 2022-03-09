import React from "react";
import "@styles/Comment.scss";

const Comment = ({ comment }) => {
    return (
        <div className='Comment'>
            <div className='Comment__info'>
                <button type='button' className='Comment__vote'>
                    1
                </button>
                <p className='Comment__author'>milo juarez gordillo</p>
                <p className='Comment__date'>12 de feb de 2021 12:23pm</p>
            </div>
            <div className='Comment__container'>
                <div className='Comment__block'></div>
                <div className='Comment__content'>
                    <div>
                        Illas semine campoque declivia oppida corpora nam inter
                        fuit discordia tellus solidumque iunctarum erat: quae
                        terrenae ubi rerum recessit iudicis aestu fixo.Illas
                        semine campoque declivia oppida corpora nam inter fuit
                        discordia tellus solidumque iunctarum erat: quae
                        terrenae ubi rerum recessit iudicis aestu fixo Illas
                        semine campoque declivia oppida corpora nam inter fuit
                        discordia tellus solidumque iunctarum erat: quae
                        terrenae ubi
                        <br />
                    </div>
                    <button className='Comment__reply'>REPLY</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
