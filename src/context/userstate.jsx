import React,{createContext,useState} from 'react';

const userContext = createContext();
const userstate=(probs)=>{
    const [user,setuser]=(null)
    return (
        <userContext.Provider value={{user,setuser}}>
             {probs.children}
        </userContext.Provider>
    )
}
export default userstate