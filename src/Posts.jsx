import React from "react";
import "./index.css";
import Post from './Post.jsx';

function Posts(props) {
    return (
    <div>
        <p><strong>{props.posts}</strong></p>
        <Post title = "Title" content = "Lorem ipsum"/>
        <Post title = "Title" content = "Lorem ipsum"/>
        <Post title = "Title" content = "Lorem ipsum"/>
    </div>
    )
}
export default Posts;