import React from "react";
import { userContext } from "./createContext";
import {  ApiUserLoginInfo } from "../API/Api";
import { useState , useEffect } from "react";

function UserContextProvider({children}) {
    const [user , setUser] = useState({});
    const [isLogin , setisLogin] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
              const response = await ApiUserLoginInfo();
              if(response?.data){
                setUser(response?.data?.user);
                setisLogin(true);
              }
              else{
                setUser(null);
                setisLogin(false);
              }
              
        }
        fetchData();
    } , []);

    return ( 
        <userContext.Provider value = {{user , isLogin , setUser , setisLogin}}>
            {children}
        </userContext.Provider>
     );
}

export default UserContextProvider;