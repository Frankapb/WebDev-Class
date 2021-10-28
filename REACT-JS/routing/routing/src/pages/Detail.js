import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Detail() {

    let {id} = useParams()
    const [post,setPost] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setPost(data)
        })
    }, []);
    return (
        <div>
           <p> detail page</p>
           <p>ID is {id}</p>
           <h4>{post.title}</h4>
           <p>{post.body}</p>
        </div>
    )
}

export default Detail
