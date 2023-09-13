import { createContext ,useState} from "react";



export const accountcontext = createContext(null)


const ContextProvider = ({children}) =>{


    const [account ,setaccount] = useState();

    return(
     
        <accountcontext.Provider value={{
            account,setaccount
        }}>
        
        {children}
        
        </accountcontext.Provider>
    )
}

export default ContextProvider