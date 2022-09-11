import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
const parse = require('html-react-parser');

export default function HomePage() {

    const [posts, setPosts] = useState([])
    
    const getPosts = () => {
        fetch(`${process.env.REACT_APP_API_URL}/posts`)
        .then(res => res.json())
        .then(data => {
            console.log(data.posts)
            setPosts(data.posts)
        })
    }
    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div>

        {posts && posts.map((post) => {
            return(
                <div key={post.ID}>
                    <h2>{parse(post.title)}</h2>
                    <Link to={`/posts/${post.ID}`}>Read more...</Link>
                    <hr></hr>

                 </div>
            )
        })}
        
    </div>
  )
}
