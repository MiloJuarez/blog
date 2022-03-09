import React from "react";
import "@styles/CommentReply.scss";

const CommentReply = ({ commentReply }) => {
    return (
        <div className='CommentReply'>
            <div className='CommentReply__info'>
                <button type='button' className='CommentReply__vote'>
                    {commentReply.votes}
                </button>
                <p className='CommentReply__author'>{commentReply.author}</p>
                <p className='CommentReply__date'>{commentReply.date}</p>
            </div>
            <div className='CommentReply__container'>
                <div className='CommentReply__content'>
                    {commentReply.content}
                </div>
            </div>
        </div>
    );
};

export default CommentReply;
