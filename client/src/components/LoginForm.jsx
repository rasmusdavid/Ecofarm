import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GlobalContext from '../routing/Context';
// import {useStates, useFetch} from 'react-easier'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

export default ()=> {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const { submitLogin, users } = useContext(GlobalContext)

    const handleError = ( msg, msgVariant )=>{ 
        return <Alert variant={msgVariant} onClose={( () => { setError("")})} dismissible>
                <Alert.Heading>{msg}</Alert.Heading>
            </Alert> }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const temp = [false, false]
        if ( email === "" ){
            setError(handleError("You have to fill in your email!", "danger"))}
        else if(  password === "" ){
            setError(handleError("You have to fill in your password!", "danger"))}
        else{
            users.map( user => {
                if( email === user.email){
                    temp[0] = true
                    if( password === user.password ){
                        temp[1] = true
                        setError(handleError("Success! Redirecting...", "success"))
                        submitLogin( email, password )}} }) 
            if(!temp[0]) setError(handleError("No matching email...", "danger"))
            if(temp[0] && !temp[1]) setError(handleError("Wrong password...", "danger"))}
    }

                    


                // setError(handleError("No matching email!", "danger"))
    

    return <>
        <Form>
            <Form.Text><h1>LOGIN</h1></Form.Text><br />
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => {setEmail(e.target.value); setError("")}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => {setPassword(e.target.value); setError("")}}/>
            </Form.Group>
            <Button variant="success" type="submit" onClick={ handleSubmit }>
                Submit
            </Button>
            <Form.Text className="text-muted">
            <br />Not registered? <NavLink to="signup">Sign up here.</NavLink>
            </Form.Text>
        </Form>
        { error }</>
}


