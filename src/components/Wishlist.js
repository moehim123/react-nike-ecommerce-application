import React from 'react';
import { Box } from '@chakra-ui/react';
import Card from './Card';

const Wishlist = ({ inWishList, toggleWishList }) => {
  console.log('Wishlist component props:', inWishList);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      gap="16px"
      padding="24px"
      backgroundColor="#FAFAFA"
      marginLeft={{ base: "0px", md: "250px" }}
      marginTop={{ base: "184px", md: "184px" }}
      justifyContent={{ base: "center", md: "flex-start" }}  // Center cards on smaller screens
      alignItems={{ base: "center", md: "flex-start" }}      // Align items in the center on smaller screens
    >
      {inWishList.length === 0 ? (
        <Box>No items in wishlist</Box>
      ) : (
        inWishList.map((wishProduct, index) => (
          <Card
            key={index}
            shoesImage={wishProduct.shoesImage}
            shoesName={wishProduct.shoesName}
            shoesPrice={wishProduct.price}
            isInWishList={true}
            toggleWishList={() => toggleWishList(wishProduct)}
          />
        ))
      )}
    </Box>
  );
};

export default Wishlist;
