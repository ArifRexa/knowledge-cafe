import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as regulerBookMark } from '@fortawesome/free-regular-svg-icons';

import "./Blog.css"
const Blog = (props) => {
    const { cover_img, author_name, blog_title, author_img, reading_time, publish_date } = props.blog
    return (
        <div style={{ marginTop: "20px", marginBottom: "20px", borderRadius: "15px" }}>
            <div style={{ padding: "5px" }}>

                <img src={cover_img} alt="" height="450px" width="845px" style={{ borderRadius: "10px" }} className='blogImage'/> <br />
                <div className='auth-reading-time'>
                    <div className='author-details-publish-date'>

                        <img className='author-img' src={author_img} alt="" />
                        <div className=''>
                            <h5>{author_name}</h5>
                            <p className='publish-date-font' style={{ marginTop: "-10px" }}>{publish_date}</p>
                        </div>

                    </div>

                    <p className='mark-and-reading-time-font'>{reading_time} min read
                        <span onClick={() => props.handleBtn(props.blog)}>
                            <FontAwesomeIcon icon={regulerBookMark} style={{marginLeft:"10px"}}/>
                        </span>
                    </p>

                </div>
                <h2>{blog_title}</h2>
                <p className='mark-and-reading-time-font'>Mark as a read</p>
            </div>

        </div>
    );
};

export default Blog;




