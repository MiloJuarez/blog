import React from "react";
import "@styles/PostContent.scss";

const PostContent = () => {
    return (
        <div className='PostContent'>
            <h2 className='PostContent__title'>SOME TITLE HERE</h2>
            <div className='PostContent__body'>
                <section>
                    <p id='introduction' className='PostContent__subtitle'>
                        Introduction
                    </p>
                    <div className='PostContent__text'>
                        Som text here which will be replaced with real data Som
                        text here which will be replaced with real dataSom text
                        here which will be replaced with real data Som text here
                        which will be replaced with real data Som text here
                        which will be replaced with real data Som text here
                        which will be replaced with real data. Som text here
                        which will be replaced with real data
                    </div>
                </section>
                <section>
                    <p id='example' className='PostContent__subtitle'>
                        Example
                    </p>
                    <div className='PostContent__text'>
                        Som text here which will be replaced with real data Som
                        text{" "}
                        <strong>
                            here which will be replaced with real dataSom text
                        </strong>
                        here which will be replaced with
                        <i> real data Som text here</i>
                        which will be replaced with real data Som text here
                        which will be replaced with real data Som text here
                        which will be replaced with real data. Som text here
                        which will be replaced with real <b>data</b>
                        <br />
                        which will be replaced with real data Som text here
                        which will be replaced with real data. Som text here
                        which will be replaced with real <b>data</b>
                    </div>
                </section>
                <section>
                    <p id='conclusion' className='PostContent__subtitle'>
                        Conclusion
                    </p>
                    <div className='PostContent__text'>
                        Som text here which will be replaced with real data
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PostContent;
