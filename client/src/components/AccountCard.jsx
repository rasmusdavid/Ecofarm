import { useContext, useState } from 'react'
import GlobalContext from '../routing/Context'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default ()=> {
    const [ edit, setEdit ] = useState(true)
    const { auth } = useContext(GlobalContext)


    return <Form variant="success">
                <Form.Text><h1>Account</h1></Form.Text>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder={auth.username} disabled={edit} />
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder={auth.email} disabled={edit} />
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder={auth.password} disabled={edit} />
                { edit ? 
                        <Button variant="success" onClick={ ()=> setEdit(false) }>Change info {String(edit)}</Button>
                        :
                        <Button variant="success" onClick={ ()=> setEdit(true) }>Save changes {String(edit)}</Button>}
            </Form>
}