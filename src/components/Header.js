import React from "react"; 
import {Box, Flex, Input, Button, Spacer, InputGroup, InputLeftElement, Image, useBreakpointValue} from '@chakra-ui/react'; 

import { Link } from 'react-router-dom'; 
 
import cart from "../Images/cart.svg";  
import searchIcon from "../Images/searchIcon.svg";   
import favourites from "../Images/favourites.svg";  




 

const Header = ({wishListQuantity, cartProductCount, onSearch}) => {  

    const inputWidth = useBreakpointValue({ base: "100%", md: "350px" }); 
    const buttonSize = useBreakpointValue({ base: "sm", md: "md" }); 
    const flexDirection = useBreakpointValue({ base: "column", md: "row" }); 

    const handleSearch = (e) => { 
        onSearch(e.target.value);  
    } 

    return ( 
        <Box 
        width = "100vw" 
        padding = "20px 20px 20px 20px"    
        marginTop= "24px" 
        position="fixed" 
        top="0px"           
        left="250px"          
        right="100px"        
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"  
        backgroundColor = "#FAFAFA" 
        
        
        > 
        <Flex 
        alignItem = "center" 
        flexDirection = {flexDirection} 
        gap = {{ base: "10px", md: "0" }} 

        > 
        
        <InputGroup width = {inputWidth} marginRight = "20px" >               
            <InputLeftElement pointerEvents = "none" height = "100%"  > 
                <Image src = {searchIcon} alt = "search-icon" boxSize="20px" marginLeft="8px" /> 
            </InputLeftElement>
            <Input  

            placeholder = "Search for your favourite Nike shoes " 
            paddingLeft = "40px" 
            borderRadius = "24px" 
            backgroundColor = "#EEF4ED" 
            onChange = {handleSearch} 
            
            > 
            </Input> 
        
        </InputGroup> 

        <Box width = "35%" /> 

        <Link to = "/Cart"> 
            <Button
            
            padding = "8px 8px" 
            borderRadius = "8px"  
            backgroundColor = "#D7FBD3" 
            alignItems = "center" 
            gap = "10px"  
            size ={buttonSize} 
            display = "flex" 
            _hover={{ backgroundColor: 'transparent'}}      
            > 
                <Image src ={cart} alt ="cart-icon" /> 
                Your cart 
                {cartProductCount> 0 && (  
                <Box
                width="20px"
                height="20px"
                borderRadius="50%" 
                backgroundColor="black" 
                color="white" 
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="12px"
                position="absolute"
                top="-7px"
                right="-7px" 
                zIndex = "999"   
            > 
                {cartProductCount}   

            </Box> 
            )}  

            </Button> 
        </ Link> 

        <Box width = "10px" />  

        <Link to="/Wishlist">

            <Button 
            
            padding = "8px 8px" 
            borderRadius = "8px"  
            backgroundColor = "#D7FBD3" 
            alignItems = "center" 
            gap = "10px"  
            size = {buttonSize} 
            display = "flex" 
            position = "relative"  
            _hover={{ backgroundColor: 'transparent'}}     
            
            > 
                <Image src ={favourites} alt ="cart-icon" /> 
                Favourites  
                    {wishListQuantity > 0 && (
                <Box
                width="20px"
                height="20px"
                borderRadius="50%" 
                backgroundColor="black" 
                color="white" 
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="12px"
                position="absolute"
                top="-7px"
                right="-7px" 
                zIndex = "999"  
                
            > 
                {wishListQuantity}  

            </Box>
            )} 
            </Button> 
        </Link> 


        </Flex> 
        
        
        </Box>

    )
}

export default Header; 