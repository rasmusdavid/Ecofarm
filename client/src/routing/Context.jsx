import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {

  const [auth, setAuth] = useState({ loggedIn: false });
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    void checkAuth();
    void loadUsers();
    void loadProducts();
    void loadOrders();
  }, []);

  const checkAuth = async () => {
    setIsLoading(true);
    const response = await fetch("/api/login");
    const result = await response.json();
    setAuth(result);
    setIsLoading(false);
  };

  const submitMessage = async ( id, message ) => {
    const response = await fetch('/api/msg/'+ id,{
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( message )})
      void loadUsers()
      void checkAuth()
    }
  
  const deleteMessage = async ( id, clues ) => {
    const response = await fetch('/api/msg/'+ id,{
      method: "delete",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( clues )})
      void loadUsers()
      void checkAuth()
    }

  const submitSignup = async (username, email, password) => {
    setIsLoading(true);
    const response = await fetch("/api/users", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
    const result = await response.json()
    setIsLoading(false)
    void loadUsers()
    void checkAuth()
  }

  const submitChange = async (id, username, email, password) => {
    setIsLoading(true)
    const response = await fetch("/api/users/" + String(id), {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "username": username, "email": email, "password": password })
    })
    const result = await response.json()
    setIsLoading(false)
    console.log("TEST", response.username)
    void loadUsers()
    void checkAuth()
  }

  const submitLogin = async (email, password) => {
    setIsLoading(true)
    const response = await fetch("/api/login", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      const result = await response.json()
       setIsLoading(false)
       console.log(result)
   void checkAuth()
  }

  const logout = async () => {
    setIsLoading(true);
    const response = await fetch("/api/login", {
      method: "delete"
    })
    const result = await response.json()
    setIsLoading(false)
    setAuth({ LoggedIn: false })
  }

  const loadUsers = async () => {
    setIsLoading(true);
    const response = await fetch("/api/users");
    const result = await response.json();
    setUsers(result);
    setIsLoading(false);
  };

  const loadProducts = async () => {
    setIsLoading(true);
    const response = await fetch("/api/products");
    const result = await response.json();
    setProducts(result);
    setIsLoading(false);
  };
  const loadOrders = async () => {
    setIsLoading(true);
    const response = await fetch("/api/orders");
    const result = await response.json();
    setOrderHistory(result);
    setIsLoading(false);
    void loadOrders();
  };

  const addProduct = async ( item, price, weight, category, subcat, description, image ) => {
    setIsLoading(true)
    const response = await fetch("/api/products", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item, price, weight, category, subcat, description, image })
    })
    setIsLoading(false)
    void loadProducts();
  }

  const removeProduct = async (id) => {
    const response = await fetch("/api/products/" + id, {
      method: "delete"
    })
    void loadProducts();
  }

  const sendOrders = async (items) => {
    const response = await fetch("/api/orders", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(items )
    })
    void loadOrders();
  }

  return (
    <GlobalContext.Provider
      value={{
        auth,
        users,
        products,
        orderHistory,
        isLoading,
        sendOrders,
        submitSignup,
        submitMessage,
        deleteMessage,
        submitChange,
        submitLogin,
        logout,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
