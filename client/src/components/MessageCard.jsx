import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import GlobalContext from "../routing/Context";



export default ()=>{
    const { users, auth } = useContext(GlobalContext)

    const user = []
    users.map( (item) => { if( item.email === auth.email ) user.push(item) })

    const logged = user[0]

    return <Form style={{margin: "20px"}} variant="success">
                {String(logged.messages)}
                <Form.Text><h1>Messages</h1></Form.Text>
                <Form.Label>Sender:</Form.Label>
                <Form.Control type="text" placeholder={logged.username} disabled={true} />
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder={logged.username} disabled={true} />
            </Form>
}