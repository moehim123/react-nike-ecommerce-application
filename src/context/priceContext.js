import React, {useState, createContext} from "react"; 


export const PriceContext = createContext(); 


export const PriceProvider   = ({children}) => { 

    const [chosenPrice, setChosenPrice] = useState(null); 

    return( 
        <PriceContext.Provider value = {{chosenPrice, setChosenPrice}}>   
        {children} 

        </PriceContext.Provider> 

    ); 
}; 