import Button from "react-bootstrap/esm/Button"

export default () => {

    const handleSubmit = () => {
        
    }

    return <>
        <h1 className="text-center g-4">Account info</h1>

        <ul className="list-group list-group-flush g-4 justify-content-between">
            <li className="list-group-item">Username:</li>
            <li className="list-group-item">E-mail:</li>
        </ul>
        

        <Button variant="danger g-5 col-8 mx-auto" type="submit" onClick={ handleSubmit }>
            Delete account
        </Button>
    </>
}