import React from "react";
import "@styles/Comments.scss";

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
        </div>
    );
};

export default Comments;
