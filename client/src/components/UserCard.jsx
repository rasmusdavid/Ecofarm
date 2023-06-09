import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import LogoutButton from "./LogoutButton";
import AccountCard from "./AccountCard";

import { useState, useContext } from "react";
import GlobalContext from "../routing/Context";
import MessagePage from "../pages/MessagePage";
import UserProductList from "./UserProductList";
import AddProduct from "./AddProduct";
import UserCart from "./UserCart";
import OrderCard from "./OrderCard";

export default () => {
  const [content, setContent] = useState("Make your choice with the buttons.");
  const { auth } = useContext(GlobalContext);
  

  return (
    <Card className="d-grid gap-2 d-md-block">
      <Card.Header>
        <h1>Welcome {auth.username}</h1>
      </Card.Header>
      <Card.Body style={{}}>
            <ButtonGroup>
              <Button variant="success" style={{ minWidth: "100px", margin: "2px" }} onClick={ ()=> setContent(auth.admin ? <AddProduct/> :  <UserProductList/>)}>{auth.admin ? "Manage" : "Go Shop"}</Button>
              <Button variant="success" style={{ minWidth: "100px", margin: "2px" }} onClick={ ()=> setContent(<OrderCard/>)}>Orders</Button>
              <Button variant="success" style={{ minWidth: "100px", margin: "2px" }} onClick={ () => setContent(<UserCart />)}>Cart</Button>
              <Button variant="success" style={{ minWidth: "100px", margin: "2px" }} onClick={ () => setContent(<AccountCard />)}>Account</Button>
              <Button variant="success" style={{ minWidth: "100px", margin: "2px" }} onClick={ () => setContent(<MessagePage />)}>Messages</Button>
              <LogoutButton />
            </ButtonGroup>
        </Card.Body>
        {content}
    </Card>
  );
};
