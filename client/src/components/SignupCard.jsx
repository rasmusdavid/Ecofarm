import { useContext, useState } from "react"
import Form  from "react-bootstrap"
import Button from "react-bootstrap"
import GlobalContext from "../routing/Context"






export default (prop)=> {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const { users, auth } = useContext(GlobalContext)

    const handleSubmit = (e)=>{
        e.preventDefault()

        const temp = [false, false]

        if( username === "" ) setMessage("You have to fill in a username.")
        else if( email === "" ) setMessage("You have to fill in an email.")
        else if( password === "" ) setMessage("You have to fill in an password.")
        else if( users.map( e => e.email === email )) setMessage("That email is taken.")
        else{

        }
        
        // if ( email === "" ){
        //     setError(handleError("You have to fill in your email!", "danger"))}
        // else if(  password === "" ){
        //     setError(handleError("You have to fill in your password!", "danger"))}
        // else{
        //     users.map( user => {
        //         if( email === user.email){
        //             temp[0] = true
        //             if( password === user.password ){
        //                 temp[1] = true
        //                 setError(handleError("Success! Redirecting...", "success"))
        //                 submitLogin( email, password )}} }) 
        //     if(!temp[0]) setError(handleError("No matching email...", "danger"))
        //     if(temp[0] && !temp[1]) setError(handleError("Wrong password...", "danger"))}
    }

    return <>
            <Form>
                <Form.Text><h1>Sign up.</h1></Form.Text><br />
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
                <br />Have an account? <a href="#" onClick={ prop.member = true } > Login here.</a>
                </Form.Text>
            </Form>
            { error }</>

}

