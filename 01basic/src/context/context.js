import React, { createContext, useContext } from "react";

export const userContext = createContext();

export const ContextProvider = userContext.Provider;

export default function useUserContext(){
    return useContext(userContext);
} 