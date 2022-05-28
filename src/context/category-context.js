import axios from 'axios'
import React,{useEffect} from 'react'
import { createContext, useContext , useReducer} from 'react';


export const CategoryContext = createContext();



export const CategoryProvider = ({children}) => {

    const reducerFunction = (state,action) => {
      switch(action.type){
          case 'FETCH_SUCCESS':
              return {...state, category: action.payload , error:''} 
               
          case 'FETCH_FAIL':
              return {...state, category:[] ,error:"Some Error Occurred"}  
              
          default: 
          return {state}    

      }
    }

    const [state , dispatch] = useReducer(reducerFunction ,{category:[],error:''});

    useEffect(()=>{
        axios.get("/api/categories").then((res)=>{
        dispatch({type:'FETCH_SUCCESS', payload:res.data.categories})
        }).catch((err)=> dispatch({type:'FETCH_FAIL'})
        )
    },[]);

    return (
        <CategoryContext.Provider value={{state,dispatch}}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => useContext(CategoryContext);


// const Categorypage = () => {

//     const categoryLoader = () => {

    
            // axios.get("/api/categories").then((res)=>{
            //     const categories = res.data.categories;
            //     console.log(categories);
            // }).catch(function (error) {
            //     console.log(error);
            //   });
        
        
//           console.log("click");
//     }

//   return (
//    <>
//    <div style={{margin:"2rem" , padding:"2rem"}}>
//    <button onClick={()=>categoryLoader()}>Click for category</button>
//    </div>
   
//    </>
//   )
// }

// export default Categorypage