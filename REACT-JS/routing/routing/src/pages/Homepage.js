import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Homepage({data}) {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            setPosts(data)
        })
    }, []);
    return (
        <div>
            Homepage
            {data}
            <div>
                <div>
                    <div>
                        {
                            posts.map(post=>(
                                <Link to={`/${post.id}`}><p>{post.title}</p></Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
