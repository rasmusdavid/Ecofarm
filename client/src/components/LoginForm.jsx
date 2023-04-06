import { useState } from 'react';
import {useStates, useFetch} from 'react-easier'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

export default ()=> {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [userdata, setUserdata ] = useState(null)

    const auth = useStates('auth')
    
    //const users = useStates('users')

    //users.map( user => console.log(user) )

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


    async function handleSubmit (e){
        e.preventDefault()

        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('Loggat in');
            auth.LoggedIn = response.data.LoggedIn
          } catch (error) {
            console.log('Fel inloggning')
          } 


        // let result = users.filter( item => item.email === email )
        // console.log( result, users )

        // const s = useStates('main', {
        //     email: useFetch('get/api/users'), // json
        //   });
        //   console.log(s)

        // const test = useFetch('/api/users')
        // console.log("Hjsan")
        // test.map(users.email)

        // if (email === user.email){
        //     console.log("Hejhej")
        // }

        //fetch get login

        // async function login() {
        //     const data = { email: "user@example.com", password: "mypassword" };
        //     const options = {
        //       method: 'POST',
        //       headers: { 'Content-Type': 'application/json' },
        //       body: JSON.stringify(data),
        //     };
          
        //     try {
        //       const response = await fetch('/api/login', options);
        //       const data = await response.json();
        //       console.log(data);
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   }
          
        //   login();
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


