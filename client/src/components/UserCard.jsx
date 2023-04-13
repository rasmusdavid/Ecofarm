import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap";
import LogoutButton from "./LogoutButton";
import AccountCard from "./AccountCard";
import OrderHistoria from "./OrderHistoria";

import { useState, useContext } from "react";
import GlobalContext from "../routing/Context";
import UserCartPage from "../pages/UserCartPage";
import UserProductList from "./UserProductList";
import AddProduct from "./AddProduct";
import MessagePage from "../pages/MessagePage";

export default () => {
  const [content, setContent] = useState("Make your choice with the buttons.");
  const { auth } = useContext(GlobalContext);

  return (
    <Card className="d-grid gap-2 d-md-block">
      <Card.Header>
        <h1>Welcome {auth.username}</h1>
      </Card.Header>
      <Card.Body style={{}}>
        <Col className="d-grid gap-2 d-md-block">
          <Button
            variant="success"
            style={{ minWidth: "100px" }}
            onClick={() =>
              setContent(auth.admin ? <AddProduct /> : <UserProductList />)
            }
          >
            {auth.admin ? "Manage" : "Go Shop"}
          </Button>
          <Button
            variant="success"
            style={{ minWidth: "100px" }}
            onClick={() => setContent(<OrderHistoria />)}
          >
            {" "}
            Orders{" "}
          </Button>
          <Button
            variant="success"
            style={{ minWidth: "100px" }}
            onClick={() => setContent(<UserCartPage />)}
          >
            Cart
          </Button>
          <Button
            variant="success"
            style={{ minWidth: "100px" }}
            onClick={() => setContent(<AccountCard />)}
          >
            Account
          </Button>
          <Button
            variant="success"
            style={{ minWidth: "100px" }}
            onClick={() => setContent(<MessagePage />)}
          >
            Messages
          </Button>
        </Col>
        <LogoutButton />
      </Card.Body>
      {content}
    </Card>
  );
};
