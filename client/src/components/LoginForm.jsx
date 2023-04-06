import { useState } from 'react';
import {useStates, useFetch} from 'react-easier'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default ()=> {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [userdata, setUserdata ] = useState(null)
    
    const users = useStates('users')

    users.map( user => console.log(user) )

    // const test = useFetch('http://localhost/api/users', {
    // postProcess: result => console.log(result.data)
    // })

    // async function testConn() {
    //     const response = await fetch("http://localhost/api/users");
    //     const result = await response.json();
    //     setUserdata(result);
    //   }
      
    
    // if( userdata === null){
    //     testConn()
    // }else { 
    //     userdata.map((data)=>{
    //         console.log(data.username)
    //     })
    // }


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(email, password)
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


