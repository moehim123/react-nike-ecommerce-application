import React, {useState, useContext} from "react";  
import { PriceContext } from "../context/priceContext"; 


import {
    Box,  
    Image,
    Heading,  
    Text, 
    Flex, 
    Button, 
    VStack 


  } from '@chakra-ui/react'; 

  import logo from "../Images/Nike-logo.svg"  

  import arrowUp from "../Images/arrowUpFilter.svg" 

  import arrowDown from "../Images/arrowDownFilter.svg" 



const Sidebar = ({categorySelected}) => {   

    const [isPriceFilterOpen, setisPriceFilterOpen] = useState(false); 
    const {chosenPrice, setChosenPrice} = useContext(PriceContext); 

    

    const categoriesList = [ "Nike Golf", "Nike Blazers", "Air Force", "Air Max", "Air Dunk", "Air Jordan" ];  
    const pricesOffered = ["$200", "$250", "$350", "$402", "$502"];   
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handlePriceToggle = () => setisPriceFilterOpen(!isPriceFilterOpen); 
    const handleChosenPrice = (price) => () =>  setChosenPrice((prevPrice) => (prevPrice === price ? null : price)); 
    
    const handleSelectedCategory = (category) => { 

        categorySelected(category); 
    } 
   
   
    return ( 
        <Box
        width="250px" 
        padding="20px" 
        backgroundColor = "#171616" 
        borderRight="2px solid #ffffff"  
        display="flex"
        flexDirection="column" 
        height="150vh"   
        position="fixed"  
        top="0px"        
        bottom="0"       
        overflowY="auto"  
        zIndex="1000" 
                
        > 
            <Box mb = "8px" > 
                <Image src = {logo} alt = "logo-image" width = "121.275px" height = "83.68px"    /> 
            </Box> 
            <Box height = "54px"> 
            </Box>  
            
            <Heading size = "md" color = "#ffffff"> Categories </Heading>  
            <Box height = "8px"/> 
           
            <VStack spacing = {2} alignItems = "left" > 
                {categoriesList.map((category, index) => ( 
                 <a key = {index} href = "#" onClick = {() => handleSelectedCategory(category)} style={{ color: '#AEA6A6', fontSize: '16px', marginLeft: "20px"}} > {category} </a> 
                ))} 
            </VStack>   
            <Box height = "24px" />  
            <Heading size = "md" color ="#ffffff"> Filter by: </Heading>  
            <Box height = "8px" />  
            <Button 
            width="100%"
            padding="8px"
            borderRadius="8px"
            backgroundColor = "#D7FBD3" 
            display="flex"
            justifyContent="space-between"  
            alignItems="center" 
            onClick={handlePriceToggle}  
            _hover={{ backgroundColor: '#D7FBD3'}}   
            > 
            <Text> Price </Text> 
            <Image src = {isPriceFilterOpen ? arrowUp : arrowDown} alt = "arrow-icon" boxSize = "18px" />   
            </Button> 
            { isPriceFilterOpen && (
            
                    <Box mt="4px" padding="8px"> 
                    
                        {pricesOffered.map((price, index) => ( 
                            <Flex key = {index} alignItems = "center" size = "4px" gap = "8px"  
                            >  
                                <Box 
                                width = "14px" 
                                height = "14px" 
                                borderRadius = "2px" 
                                border = "1px solid #ffffff" 
                                backgroundColor = {chosenPrice === price ? "#D7FBD3" : "transparent"} 
                                onClick = {handleChosenPrice(price)} 
                                cursor="pointer" 
                                

                                > 
                                
                                </Box>
                                <Text color = "#AEA6A6"> {price} </Text> 
                            </Flex> 
                        ))}   
                    </Box>
                    
            )} 


      </Box> 
    ); 
}; 


export default Sidebar;  

