import { useContext, useState } from 'react'
import GlobalContext from '../routing/Context'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default ()=> {
    const [ username, setUsername ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ edit, setEdit ] = useState(true)
    const { auth, users, submitChange } = useContext(GlobalContext)

    const temp = []
    users.map( item => {if( item.email === auth.email) temp.push(item) })
    const user = temp[0]

    const handleSave = (e)=>{
        e.preventDefault()
        submitChange(user._id, username, email, password)
        setEdit(true)}

    return <Form style={{margin: "20px"}} variant="success">
                <Form.Text><h1>Account</h1></Form.Text>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder={user.username} disabled={edit} md="fluid" onChange={ e => setUsername(e.target.value)} />
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder={user.email} disabled={edit} onChange={ e => setEmail(e.target.value)}/>
                <Form.Label>Password:</Form.Label>{console.log(user.username)}
                <Form.Control type="password" placeholder={user.password} disabled={edit} onChange={ e => setPassword(e.target.value)} />
                { edit ? 
                        <Button variant="success" onClick={ ()=> setEdit(false) }>Change info</Button>
                        :
                        <Button variant="success" onClick={ handleSave }>Save changes</Button>}
                <Button style={{margin: "10px"}} variant="danger">Delete account</Button>
            </Form>
}