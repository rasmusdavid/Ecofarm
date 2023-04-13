import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import GlobalContext from "../routing/Context"


export default ()=> {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const { users, auth, submitSignup } = useContext(GlobalContext)

    const handleSubmit = e=>{
        e.preventDefault()

        if( username === "" ) setMessage(<Alert variant="danger">"You have to fill in a username."</Alert>)
        else if( email === "" ) setMessage(<Alert variant="danger">"You have to fill in an email."</Alert>)
        else if( password === "" ) setMessage(<Alert variant="danger">"You have to fill in an password."</Alert>)
        else if( users.some( (u) => u.email === email ) ) setMessage(<Alert variant="danger">"That email is taken."</Alert>)
        else{ submitSignup(username, email, password)}}

    return <Form>
                <Form.Text><h1>Sign up.</h1></Form.Text><br />
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" onChange={e => {setUsername(e.target.value); setMessage("")}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => {setEmail(e.target.value); setMessage("")}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={e => {setPassword(e.target.value); setMessage("")}}/>
                </Form.Group>

                <Button variant="success" type="submit" onClick={ handleSubmit }>
                    Submit
                </Button>

                <Form.Text className="text-muted">
                <br />Have an account? <NavLink to="/">Login here.</NavLink>
                </Form.Text>
                { message }
            </Form>}

