import React from "react";
import BlogList from './BlogList'
import './Blogs.css'
import { Typography } from "@mui/material";
export default function Blogs() {

    const Blogs = BlogList();
    return <div className="container">
        <Typography variant="h2" fontFamily="revert">Our Blogs</Typography>
        <div className="blog-container">
            {
                Blogs.map((blog) => {
                    return <div className="blog">
                        <div className="image-container">
                            <img src={blog.imgSrc} alt="blog-image" />
                        </div>
                        <div className="blog-detail-conainer">
                            <a href="#" style={{ color: 'orange' }}>{blog.category}</a>
                            <h3>{blog.heading}</h3>
                            <p>{blog.descriptionInEnglish.substring(0, 150)}<span><a href="">...View Blog</a></span></p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}