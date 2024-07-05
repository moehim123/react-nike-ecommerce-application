import React from "react"; 
import { ChakraProvider, Box, Flex, Image, Text, Heading } from '@chakra-ui/react'; 
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'; 

import HomeIcon from "../Images/Home-Icon.svg"; 

import ArrowIcon from "../Images/Arrow-icon.svg";  

const NavBar = ({category}) => {  

    const locate = useLocation(); 

    const currentPath = locate.pathname; 

    const pathParts = currentPath.split('/').filter(part => part !== ''); 

    return( 
    <Flex align = "center"  width = "100%" 
    padding = "0 24px" marginLeft ="250px" marginTop="124px" 
     position = "fixed"  > 
        
        <Link to="/" >  
        <Flex align = "center" >  
            <Image src ={HomeIcon} alt = "Home-icon" boxSize = "20px" /> 
            <Text ml = "8px" fontWeight = "normal">  Home </Text>  
        </Flex>  
        </ Link> 
       
        {category && (
            <Flex align = "center"> 
            <Image src ={ArrowIcon} alt = "Arrow-icon" boxSize = "12px" ml = "8px" /> 
            <Text ml = "8px" fontWeight = "normal"> Category </Text> 
            </Flex> 
        )} 
         {pathParts.map((part, index) => (
            <Flex align = "center" key = {index}>    
                <Image src ={ArrowIcon} alt = "Arrow-icon" boxSize = "12px" ml = "8px" /> 
                <Text ml = "8px" fontWeight = {index === pathParts.length -1 ? "bold": "normal"}>  {part} </Text>  
            </ Flex> 
        ))}  
        
       
    </Flex> 
    ) 
} 

export default NavBar; 