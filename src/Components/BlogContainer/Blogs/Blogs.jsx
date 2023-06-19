import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import toast, { Toaster } from 'react-hot-toast';
import BookMark from '../BookMark/BookMark';
import "./Blog.css"

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [books, setBooks] = useState([])

    const notify = () => toast('Already Bookmarked !!! ');

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch('products.json');
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                } else {
                    throw new Error('Error fetching data');
                }
            } catch (error) {
                console.log(error);
            }
        };
        loadData();
    }, [blogs.id]);

    const handleBtn = (blogs) => {
        
        if (books.includes(blogs)) {
            notify()
        }
        else{
            let newBooks = [...books, blogs]
            setBooks(newBooks)
        }
    }

    
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }} className='blogsContainer'>
                <div>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} handleBtn={handleBtn}></Blog>)
                    }

                </div>

                <div>

                    <BookMark bookmark={books}></BookMark>
                    <Toaster />
                </div>

            </div>

        </div>
    );
};

export default Blogs;