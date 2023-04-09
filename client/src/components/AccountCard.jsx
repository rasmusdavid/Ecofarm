import { useContext, useState } from 'react'
import GlobalContext from '../routing/Context'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default ()=> {
    const [ edit, setEdit ] = useState(true)
    const { auth, users } = useContext(GlobalContext)

    const temp = []
    users.map( item => {if( item.email === auth.email) temp.push(item) })

    const user = temp[0]

    return <Form style={{margin: "20px"}} variant="success">
                <Form.Text><h1>Account</h1></Form.Text>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder={user.username} disabled={edit} md="fluid"/>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder={user.email} disabled={edit} />
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder={user.password} disabled={edit} />
                { edit ? 
                        <Button variant="success" onClick={ ()=> setEdit(false) }>Change info</Button>
                        :
                        <Button variant="success" onClick={ ()=> setEdit(true) }>Save changes</Button>}
                <Button style={{margin: "10px"}} variant="danger">Delete account</Button>
            </Form>
}