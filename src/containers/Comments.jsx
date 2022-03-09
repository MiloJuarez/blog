import React from "react";
import "@styles/Comments.scss";
import Comment from "../components/Comment";

const Comments = () => {
    return (
        <div className='Comments'>
            <div className='Comments__divider'>
                <p>Comments</p>
            </div>
            <div className='Comments__form'>
                <form action='comment/' method='POST'>
                    <div className='Form__flexinput'>
                        <div className='Form__control'>
                            <input
                                type='text'
                                name='username'
                                placeholder='* Name'
                                required
                            />
                        </div>
                        <div className='Form__control'>
                            <input
                                type='email'
                                name='email'
                                placeholder='* Email'
                                required
                            />
                        </div>
                    </div>
                    <div className='Form__flexinput--row'>
                        <textarea
                            name='comment'
                            id='comment'
                            cols='30'
                            rows='10'
                            placeholder='* White your comment'
                            required></textarea>
                        <button type='submit' className='Form__submit'>
                            POST COMMENT
                        </button>
                    </div>
                </form>
            </div>
            <div className='Comments__container'>
                <Comment
                    comment={{
                        id: 1,
                        parent_id: null,
                        author: "milo juarez gordillo",
                        date: "12 de feb de 2021 12:23pm",
                        votes: 1,
                        content:
                            "Illas semine campoque declivia oppida corpora nam inter fuit discordia tellus solidumque iunctarum erat: quae terrenae ubi rerum recessit iudicis aestu fixo.Illas semine campoque declivia oppida corpora nam inter fuit discordia tellus solidumque iunctarum erat: quae terrenae ubi rerum recessit iudicis aestu fixo Illas semine campoque declivia oppida corpora nam inter fuit discordia tellus solidumque iunctarum erat: quae terrenae ubi",
                        comment_replies: [],
                    }}
                    key={`comment-1`}
                />
                <Comment
                    comment={{
                        id: 2,
                        parent_id: null,
                        author: "fernando aguirre",
                        date: "12 de feb de 2021 12:23pm",
                        votes: 2,
                        content:
                            "recessit iudicis aestu fixo Illas semine campoque declivia oppida corpora nam inter fuit discordia tellus solidumque iunctarum erat: quae terrenae ubi",
                        comment_replies: [
                            {
                                id: 3,
                                parent_id: 2,
                                author: "manuel sanchez",
                                date: "12 de feb de 2021 12:23pm",
                                votes: 4,
                                content:
                                    "recessit iudicis aestu fixo Illas semine campoque declivia oppida corpora nam inter fuit discordia tellus solidumque iunctarum erat: quae terrenae ubi",
                                comment_replies: [],
                            },
                        ],
                    }}
                    key={`comment-2`}
                />
            </div>
        </div>
    );
};

export default Comments;
