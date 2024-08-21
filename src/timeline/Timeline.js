import React, { useState } from "react";
import "./Time.css";
import Suggesstions from "./Suggesstion";
import Post from "./post/Post";

function Timeline() {
  const [post, setPost] = useState([
    {
      user: "kumar",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s",
      likes: 12,
      timepamp: "2d",
    },

    {
      user: "suresh",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s",
      likes: 23,
      timepamp: "1d",
    },

    {
      user: "Ganesh",
      postImage: "https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fwww.eso.org%2Fpublic%2Farchives%2Fimages%2Fthumb300y%2Feso2008a.jpg&imgrefurl=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&docid=zz9fuPcvMCFWiM&tbnid=Z0uJNYHl2bq3IM&vet=12ahUKEwjYl4qlz4aIAxWc1jgGHSZFD6AQM3oFCIcBEAA..i&w=300&h=300&hcb=2&ved=2ahUKEwjYl4qlz4aIAxWc1jgGHSZFD6AQM3oFCIcBEAA",
      likes: 30,
      timepamp: "2d",
    },
    {
      user: "Ram",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&s",
      likes: 34,
      timepamp: "2d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline_posts">
         {post.map(post => (
          <Post 
          user={post.user} 
          postImage={post.postImage} 
          likes= {post.likes} 
          timepamp = {post.timepamp}/>
         ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggesstions />
      </div>
    </div>
  );
}

export default Timeline;
