import React from "react";
import "@styles/Comment.scss";
import CommentReply from "./CommentReply";

const Comment = ({ comment }) => {
    return (
        <div className='Comment'>
            <div className='Comment__info'>
                <button type='button' className='Comment__vote'>
                    {comment.votes}
                </button>
                <p className='Comment__author'>{comment.author}</p>
                <p className='Comment__date'>{comment.date}</p>
            </div>
            <div className='Comment__container'>
                <div className='Comment__block'></div>
                <div className='Comment__content'>
                    <div className='Comment__content--mb'>
                        {comment.content}
                    </div>
                    <div className='Comment_replies'>
                        {comment.comment_replies.map((reply) => (
                            <CommentReply
                                commentReply={reply}
                                key={`commentReply-${reply.id}`}
                            />
                        ))}
                    </div>
                    <button className='Comment__reply'>REPLY</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
