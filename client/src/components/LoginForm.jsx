import { useState, useContext } from 'react';
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

    const temp = "test"

    const handleError = ( msg, msgVariant )=>{ 
        return <Alert variant={msgVariant} onClose={( () => { setError("")})} dismissible>
                <Alert.Heading>{msg}</Alert.Heading>
            </Alert> }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if ( email === "" ){
            setError(handleError("You have to fill in your email!", "danger"))}
        else if(  password === "" ){
            setError(handleError("You have to fill in your password!", "danger"))}
        else{
            users.map( user => {
                if( email === user.email && password !== user.password){
                    setError(handleError("Wrong password!", "danger"))}
                else if( email !== user.email && password === user.password ){
                    setError(handleError("E-mail dont match any user!", "danger"))}
                else{ setError(handleError("Success!", "success")) 
                      console.log(user)
                      submitLogin(email, password) } })
                      console.log(error)
        }
    }

    return <>
        <Form>{ String(temp) }
            <Form.Text><h1>LOGIN{ String(temp) }</h1></Form.Text><br />
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
            <br />Not registered? <a href="#" onClick={ () => {console.log("You pressed the sign up button.")} }> Sign up here.</a>
            </Form.Text>
        </Form>
        { error }</>
}


