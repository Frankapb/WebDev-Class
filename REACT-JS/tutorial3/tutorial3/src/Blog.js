import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import Post from './components/Post'
export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state={
            recentposts:[],
            currentpost:{}
        }
    }

    // https://jsonplaceholder.typicode.com/posts



    getBlogPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                // send data to recentpasts in state
                this.setState({
                    recentposts:data
                })
            })
    }




    componentDidMount() {
        console.log('hello world')
        this.getBlogPosts();
    }

    render() {
        return (
            <div>
                {console.log("state data",this.state)}
                <ListGroup as="ul">
                    {/* SINGLE POST ELEMENT HERE */}
                
                {
                    this.state.recentposts.map((post)=>(
                        // li react component
                        <ListGroup.Item as="li">{post.title}</ListGroup.Item>
                    ))
                }
                
                </ListGroup>
            </div>
        )
    }
}