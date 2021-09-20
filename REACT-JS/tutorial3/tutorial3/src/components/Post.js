import React from 'react'
import {ListGroup} from 'react-bootstrap'
import { FaBicycle, FaBtc,FaEthereum } from "react-icons/fa";
import radioData from '../radios.json'
function Post({singlepost}) {
    return (
        <div>
        <ListGroup.Item as="li">{singlepost.title}</ListGroup.Item>
        <FaBtc/>
        <FaEthereum/>
        <FaBicycle/>
        </div>
    )
}

export default Post 