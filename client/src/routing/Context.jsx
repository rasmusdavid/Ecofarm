import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {

  const [auth, setAuth] = useState({loggedIn:false})
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    void checkAuth()
    void loadUsers()
  }, []);

  const checkAuth = async () => {
    setIsLoading(true)
    const response = await fetch("/api/login")
    const result = await response.json()
    setAuth(result)
    setIsLoading(false)
  }

  const submitSignup = async (email, password) => {
    setIsLoading(true)
    const response = await fetch("/api/users", {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    })
    const result = await response.json()
    setIsLoading(false)
  }

  const submitLogin = async (email, password, user) => {
    setIsLoading(true)
    const response = await fetch("/api/login", {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    })
    const result = await response.json()
    setIsLoading(false)
    setLogged(user)
    void checkAuth()
  }

  const logout = async () => {
    setIsLoading(true)
    const response = await fetch("/api/login", {
        method: "delete"
    })
    const result = await response.json()
    setIsLoading(false)
    setAuth({LoggedIn:false})
  }

  const loadUsers = async () => {
    setIsLoading(true)
    const response = await fetch("/api/users")
    const result = await response.json()
    setUsers(result)
    setIsLoading(false)
  }

  return (
    <GlobalContext.Provider
      value={{
        auth,
        users,
        logged,
        isLoading,
        submitSignup,
        submitLogin,
        logout,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;