import { useState } from 'react';
import {useStates, useFetch} from 'react-easier'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default ()=> {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    const users = useStates('users')

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log( Object(users).map( user => console.log(user.target)) )
        const keys1 = Object.keys(users)
        const keys2 = Object(users.keys)
        console.log(users[0].username)
        users.forEach(user => {
            console.log(user.username)
        });
        // for (let i = 0; i < keys.length; i++) {
        //     console.log(keys[i]); // outputs "name" and "age"
        //   }
    }

    return <>
        <Form>
        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="success" type="submit" onClick={ handleSubmit }>
            Submit
        </Button>
        <Form.Text className="text-muted">
            <br />Not registered? <a href="#"> Sign up here.</a>
            </Form.Text>
        </Form></>
}


