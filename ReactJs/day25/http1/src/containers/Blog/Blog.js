import React, { Component } from 'react';
import {Route, Routes, Link } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'


class Blog extends Component {
    render() {
       
        return (
            <div className='Blog'>
            <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={
                                {
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }
                            }>New Post</Link></li>
                        </ul>
                </nav>
            </header>
               <Routes>
               <Route path="/" element={<Posts/>}/>
               <Route path="/new-post" element={<NewPost/>}/>
                </Routes>
            </div>
        );
    }
}

export default Blog;