import React, { useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
function ContactForm() {
    const [contact,setContact] = useState({})
    const emailRef = useRef();
   // const user = useRef();
    // const pwd = useRef();

    

    const submitAction = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
        console.log(emailRef.current.name)
        let makeObj = {
            [emailRef.current.name]: emailRef.current.value
        }
       // console.log(makeObj)
       console.log(contact)
    }

    const inputHandler = (e)=>{
       // console.log(e.target.value)
        const {name,value} = e.target
     //   console.log(name,value)
        setContact({...contact,[name]:value})
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} onChange={inputHandler} name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name="password" onChange={inputHandler} placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text"  name="message" onChange={inputHandler} placeholder="message" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text"  name="username" onChange={inputHandler} placeholder="username" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={submitAction} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm