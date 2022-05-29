import axios from "axios";
import { createContext,useContext,useReducer,useEffect } from "react";


export const ProductContext = createContext();



export const ProductProvider = ({children}) => {

    const reducerFunction = (state,action) => {
        switch(action.type) {
            case "FETCH_SUCCESS": 
            return {...state, product: action.payload, error:''}

            case "FETCH_FAIL":
                return {...state, error:'Error occured'}

            default:
                return state

        }
    }

    const [state,dispatch] = useReducer(reducerFunction,{ product:[], error:''});

    useEffect(()=>{

        axios.get("/api/products").then((res)=>{
         dispatch({type:"FETCH_SUCCESS", payload: res.data.products})
        }).catch((error)=>{
dispatch({type:"FETCH_FAIL"})
        })

    },[]);

    return(
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext);
