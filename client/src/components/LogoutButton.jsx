import { useContext } from "react";
import GlobalContext from "../routing/Context";

import Button from "react-bootstrap/esm/Button";

export default () => {
    const { logout, auth } = useContext(GlobalContext)
    const handleClick = () => { logout() } 

    return <>
        <Button variant="secondary" onClick={() => { logout() } }>Logout</Button>
    </>
}
