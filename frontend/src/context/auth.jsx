/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ childern }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
    
    return (
        <AuthContext.Provider value ={[auth,setAuth]}>
            {childern}
        </AuthContext.Provider>
    )
};


// custom hook

const useAuth = () => useContext(AuthContext)

// eslint-disable-next-line react-refresh/only-export-components
export {useAuth,AuthProvider}