import React from 'react';
import { Box, Heading} from '@chakra-ui/react';
import Card from './Card'; 
import ProductsData from "./ProductsData"; 


const Products = ({selectedCategory, chosenPrice, toggleWishList, inWishList, inCart, updateCartCount, onSearchQuery }) => { 
    
    const filteredProducts =  ProductsData.filter((product) => {
        if (chosenPrice && selectedCategory) {
            return product.price === parseFloat(chosenPrice.replace('$', '')) && product.category === selectedCategory 

        }   
        else if (chosenPrice){
            return product.price === parseFloat(chosenPrice.replace('$', '')) 
        } 
            
        else if (selectedCategory) { 
            return product.category === selectedCategory 
        } 
        else if (onSearchQuery) {
            return product.shoesName.toLowerCase().includes(onSearchQuery.toLowerCase()); 
        } 
        else{
            return true 
        } 

    })   
  


    
    return (  
        <Box flex="1" display="flex" flexWrap="wrap" gap="16px" 
        paddingLeft = "14px" backgroundColor="#FAFAFA" 
        marginLeft={{ base: '0', md: '259px' }}  marginTop = "145px" position = "relative"  flexDirection = "row" >  
            <Box 
                width="100%" 
                
            > 

                <Heading 
                    paddingLeft="4px" 
                    size="lg" 
                    marginBottom="45px" 
                    marginTop = "45px" 
                >
                    {selectedCategory ? selectedCategory : "All Nike Products"}
                </Heading> 
            </Box> 
            {filteredProducts.map((product, index) => (   
                <Card
                key={index} 
                shoesImage={product.shoesImage}
                shoesName={product.shoesName}
                shoesPrice={product.price}
                isInWishList={inWishList.some(item => item.shoesName === product.shoesName)}
                toggleWishList={() => toggleWishList(product)}  
                inCart={inCart}  
                updateCartCount={updateCartCount}  
                />
            )) 
            } 
        </Box> 
    );
};

export default Products; 

