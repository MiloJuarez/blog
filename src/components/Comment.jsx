import React from "react";

const Comment = ({ comment }) => {
    return (
        <div className='Comment'>
            <button type='button'>1</button>
            <div className='Commment__info'>
                <p className='Comment__author'>milo juarez gordillo</p>
                <p className='Comment__date'>12 de feb de 2021 12:23pm</p>
            </div>
            <div className='Comment__content'>
                Illas semine campoque declivia oppida corpora nam inter fuit
                discordia tellus solidumque iunctarum erat: quae terrenae ubi
                rerum recessit iudicis aestu fixo.Illas semine campoque declivia
                oppida corpora nam inter fuit discordia tellus solidumque
                iunctarum erat: quae terrenae ubi rerum recessit iudicis aestu
                fixo Illas semine campoque declivia oppida corpora nam inter
                fuit discordia tellus solidumque iunctarum erat: quae terrenae
                ubi
            </div>
        </div>
    );
};

export default Comment;
