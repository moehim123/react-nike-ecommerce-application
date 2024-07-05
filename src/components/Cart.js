import React, {useState} from "react";  

import {Box, Image, Heading, Text, Flex, Button, VStack, HStack} from '@chakra-ui/react'; 


import DeleteIcon from "../Images/Delete-Icon.svg"; 

import PlusSign  from "../Images/Plus-Sign.svg"; 

import NegativeSign from "../Images/Negative-Sign.svg"; 

const Cart = ({inCart, updateCartCount}) => {  

    const handleIncrease = (shoesName, currentCount) => {
        updateCartCount(shoesName, currentCount + 1);
    };

    const handleDecrease = (shoesName, currentCount) => {
        updateCartCount(shoesName, currentCount - 1);
    };

    const handleDelete= (shoesName) => {
        updateCartCount(shoesName, 0); 
    };


    return(
        <Box  flex="1" display="flex" flexWrap="wrap" gap="16px" 
        padding="24px" backgroundColor="#FAFAFA"  marginLeft = "250px" marginTop = "145px" >    
            {inCart.map((inCartProduct, index) => (
              <VStack key = {index} 
              alignItems = "flex-start" 
              flex = "1" 
              display="flex" 
              flexWrap="wrap" 
              gap="16px" 
              padding="24px" 
              backgroundColor = "#ffffff" 
              borderRadius = "35.4px" 
              flexDirection = "row"  
              position = "relative" > 

                <VStack spacing = {4} alignItems = "flex-start"  >  
                <Image src = {inCartProduct.shoesImage} width = "50%" height = "70%" objectFit = "cover" boxSize = "85px"/>  
                
                <Heading size = "md" > 
                    {inCartProduct.shoesName} 
                </Heading> 
                </VStack> 
                <VStack height = "40px" /> 
                <HStack spacing = {14}>  
                    <HStack>             
                    <Text fontWeight = "bold"> Price:  </Text>
                    <Text> ${inCartProduct.price} </Text> 
                    </HStack>    
                    <HStack>                     
                    <Text fontWeight = "bold" > Quantity:  </Text>  
                    <Text> {inCartProduct.cartProductCount}</Text> 
                    </HStack>
                    <HStack> 
                    <Text fontWeight = "bold"> Total Price:  </Text> 
                    <Text> ${(inCartProduct.price) * inCartProduct.cartProductCount} </Text> å
                    </HStack>  
                    <Box width = "40 px" /> 
                    <HStack 
                        width="40px" justifyContent="center"> 
                            <Button 
                            onClick = {() => handleDecrease(inCartProduct.shoesName,inCartProduct.cartProductCount)} 
                            backgroundColor = "#FAFAFA" width="20px" height="20px" padding="0"> 
                                <Image src = {NegativeSign} alt = "negative-symbol-icon" boxSize = "20px"  />    
                            </Button> 
                            <Text 
                            fontSize="14px" 
                            color="#AEA6A6" 
                            textAlign="center" 
                            whiteSpace="nowrap"  
                            textOverflow="ellipsis"> 
                            {inCartProduct.cartProductCount} </Text>
                            <Button onClick = {() => handleIncrease(inCartProduct.shoesName,inCartProduct.cartProductCount)} backgroundColor = "#FAFAFA" width="20px" height="20px" padding="0" >  
                                <Image src = {PlusSign} alt = "plus-symbol-icon"  boxSize = "20px" /> 
                            </Button> 
                            <Button 
                            onClick = {() => handleDelete(inCartProduct.shoesName)} 
                            padding = "0" 
                            backgroundColor = "#E8FFE6" 
                            > 
                                <Image src = {DeleteIcon} alt = "Delete-Icon" boxSize = "20px" /> 

                            </Button> 
                    </HStack> 
                </HStack> 
                
              </VStack>  
            ))} 
        </Box> 
    ) 
} 


export default Cart; 