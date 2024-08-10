import React, {useState} from "react";  

import {Box, Text, Heading, Button, Image, VStack, HStack} from "@chakra-ui/react";   

import cart from "../Images/addToCart.svg"; 

import HeartFilled from "../Images/Heart-filled.svg"; 

import HeartStroke from "../Images/Heart-stroke.svg"; 

import PlusSign  from "../Images/Plus-Sign.svg"; 

import NegativeSign from "../Images/Negative-Sign.svg"; 

import BlackCartIcon from "../Images/Black-Cart-Icon.svg"; 


const Card = ({shoesImage, shoesPrice, shoesName, isInWishList, toggleWishList, inCart, updateCartCount}) => {   

    const cartItems = inCart || []; 

    const findInCartProduct = cartItems.find((item) => item.shoesName === shoesName); 

    const cartProductCount = findInCartProduct ? findInCartProduct.cartProductCount : 0; 

    const [onHover, setOnHover] = useState(false); 

   
    const handleaddToCart = () => { 
        updateCartCount(shoesName, 1); 

    } 

    const handleIncrease = () => { 

        updateCartCount(shoesName, cartProductCount + 1); 
         
    }  


    const handleDecrease = () => {  
        
        updateCartCount(shoesName, cartProductCount - 1);  
        
        
        
        
    } 
    

    return ( 
        <Box 
        width = "295px" 
        borderRadius = "35.4px"  
        border = "1px solid #E2E8F0"   
        display = "flex" 
        paddingBottom = "14px"  
        paddingLeft = "14px"  
        paddingRight = "14px"  
        flexDirection = "row"  
        position = "relative"  
        marginLeft = "24px"
        
        
        > 
            <VStack spacing ={8} alignItems = "flex-start" > 

                <Box 
                    width="100%" 
                    height = "200px"
                    borderBottom="1px solid #E2E8F0" 
                    overflow="hidden"
                    display="flex"
                    alignItems="center"
                    justifyContent="center" 
                    position = "relative" 
 
                >

                <Image src = {shoesImage} alt = "shoes-image" width = "50%" height = "50%" objectFit = "cover" boxSize = "50%"  />    
                
                </Box>   

                <Box 
                overflow="hidden"
                display="flex"> 
                <Image 
                src = {isInWishList? HeartFilled: HeartStroke}  
                alt = "Heart-filled-icon" 
                boxSize = "20px" 
                position = "absolute" 
                top = "25px"  
                right = "25px" 
                cursor = "pointer" 
                zIndex = "888" 
                onClick = {toggleWishList}    
                /> 
                </Box> 

                <Heading size = "lg" fontSize = "24px" fontStyle = "normal" fontWeight = "500" > {shoesName}</Heading>   
                <HStack spacing = {14} >   
                    <VStack spacing = {2} alignItems="flex-start"> 
                        <Text fontSize = "14px" color = "#AEA6A6"> Price</Text> 
                        <Text fontSize = "px" color = "#000000"> ${shoesPrice} </Text>  
                    </VStack> 
                    <Box width ="24px"/> 
                    <VStack spacing = {2}> 
                        {cartProductCount === 0 ? ( 
                            <>                         
                                <Text fontSize = "14px" color = "#AEA6A6" whiteSpace="nowrap"  overflow="hidden" textOverflow="ellipsis"> add to cart</Text> 
                                <Button            
                                width = "40px" 
                                height = "40px"  
                                padding = "11.8"  
                                borderRadius = "50%" 
                                backgroundColor = "#000000"  
                                alignItems = "center" 
                                boxShadow = " 0px 0px 3.652px 0px #000000"  
                                onClick = {handleaddToCart}  
                                onMouseEnter = {() => setOnHover(true)} 
                                onMouseLeave = {() => setOnHover(false)} 
                                _hover={{ backgroundColor: 'transparent'}}   
                                > 
                                <Image src = {onHover ? BlackCartIcon : cart} alt = "cart-icon" boxSize = "20px" /> 
                

                                </Button> 
                               
                            </>

                        ):(
                            <> 
                                <HStack width="40px" justifyContent="center" alignItems = "center" marginTop = "20px" > 
                                    <Button onClick = {handleDecrease} backgroundColor = "#FAFAFA" width="20px" height="20px" padding="0"  _hover={{ backgroundColor: 'transparent'}} > 
                                        <Image src = {NegativeSign} alt = "negative-symbol-icon" boxSize = "20px"  />    
                                    </Button> 
                                    <Text fontSize="14px" color="#AEA6A6" width="10px" textAlign="center"> {cartProductCount} </Text>
                                    <Button onClick = {handleIncrease} backgroundColor = "#FAFAFA" width="20px" height="20px" padding="0" _hover={{ backgroundColor: 'transparent'}} >  
                                        <Image src = {PlusSign} alt = "plus-symbol-icon"  boxSize = "20px" /> 
                                    </Button> 
                                </HStack> 
                            </> 
                    )} 
                    </VStack> 


                </HStack> 
            </VStack> 
        

        </Box>
    ) 
} 


export default Card; 



