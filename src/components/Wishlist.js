import React, {useState} from "react";  

import {Box, Image, Heading, Text, Flex, Button, VStack} from '@chakra-ui/react'; 

import Card from "./Card"; 

const Wishlist = ({inWishList, toggleWishList}) => { 

    return(
        <Box flex = "1" display="flex" flexWrap="wrap" gap="16px" padding="24px" backgroundColor = "#FAFAFA" marginLeft = "250px" marginTop = "145px">  
            {inWishList.map((wishProduct, index) => (
              <Card 
                key = {index} 
                shoesImage = {wishProduct.shoesImage} 
                shoesName = {wishProduct.shoesName} 
                shoesPrice = {wishProduct.price} 
                isInWishList = {inWishList.some((item) => item.shoesName === wishProduct.shoesName)} 
                toggleWishList = {() => toggleWishList(wishProduct)}  
              /> 
            ))}
        </Box>
    ) 
} 


export default Wishlist; 