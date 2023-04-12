import { useContext } from "react";
import GlobalContext from "../routing/Context";

import Button from "react-bootstrap/esm/Button";

export default () => {
    const { logout, auth } = useContext(GlobalContext)

    return <>
        <Button style={{margin: "10px"}} variant="secondary" onClick={() => { logout() } }>Logout</Button>
    </>
}
