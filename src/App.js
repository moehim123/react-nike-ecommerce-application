import React, {useContext, useState} from 'react';
import { ChakraProvider, Box, Flex, Heading } from '@chakra-ui/react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Sidebar from './components/Sidebar';  
import "./App.css"; 
import Header from './components/Header'; 

import Products from './components/Products'; 

import ProductsData from "./components/ProductsData"; 

import { PriceContext } from './context/priceContext';   



import Wishlist from './components/Wishlist'; 
import Cart from "./components/Cart"; 

import NavBar from './components/NavBar'; 




function App() { 

  const {chosenPrice} = useContext(PriceContext);  
  const [inWishList, setIsInWishList] = useState([]);   
  const [inCart, setIsInCart] = useState([]); 
  const [category, setCategory] = useState(null);   
  const [onSearchQuery, setOnSearchQuery] = useState(""); 


  const handleSearchQueryChange = (search) => { 
      setOnSearchQuery(search); 
  }
  

  const handleCategorySelection = (category) => {
    setCategory(category) 
    
  }

  const toggleWishList = (ProductsData) => { 
    setIsInWishList((prevIsInWishList) => {
      if (prevIsInWishList.some((item) => item.shoesName === ProductsData.shoesName)){ 
        return  prevIsInWishList.filter((item) => item.shoesName !== ProductsData.shoesName); 
      } 
      else{  
         return [...prevIsInWishList, ProductsData];  
      } 
    });   
  
  };    

  const updateCartCount = (shoesName, cartProductCount) => { 
    setIsInCart((prevIsInCart) => { 
      if (cartProductCount == 0 ) {
        return prevIsInCart.filter((item) => item.shoesName != shoesName); 
      } 
      else{
        const productPresent = prevIsInCart.find((item) => item.shoesName == shoesName); 
        if (productPresent) {
          return prevIsInCart.map((item) => item.shoesName == shoesName ? {...item, cartProductCount}: item); 
        } 
        else{
          const product = ProductsData.find((item) => item.shoesName == shoesName); 
          return  [...prevIsInCart, {...product, cartProductCount}] 
        }
      }
    }) 
  }

  const wishListQuantity = inWishList.length; 
  const cartQuantity = inCart.reduce((total, item) => total + item.cartProductCount, 0); 
  

  

  
       
 


  return ( 
    <ChakraProvider >  
      <Router> 
        <Flex  >        
          <Sidebar categorySelected = {handleCategorySelection} />   
          <Box flex = "1"  backgroundColor = "#FAFAFA" > 
            <Header wishListQuantity = {wishListQuantity} cartProductCount = {cartQuantity} onSearch = {handleSearchQueryChange} />     
            <NavBar category = {category} /> 
            <Routes> 
              <Route 

                path = "/" 
                element = { 
                    <Products 
                    selectedCategory={category} 
                    chosenPrice = {chosenPrice} 
                    toggleWishList={toggleWishList}
                    inCart={inCart}
                    updateCartCount={updateCartCount} 
                    inWishList = {inWishList} 
                    onSearchQuery = {onSearchQuery} 
                  />
                } 
                /> 

              <Route 
                path = "/Favourites"  
                element = {<Wishlist  inWishList = {inWishList} toggleWishList={toggleWishList} /> } 
              />  
              <Route 
                path = "/Cart" 
                element = {<Cart inCart= {inCart} updateCartCount = {updateCartCount} /> }  
              /> 
          </Routes> 

          </Box> 
        </Flex> 
      </Router> 

    </ChakraProvider>  
  );
}

export default App; 



