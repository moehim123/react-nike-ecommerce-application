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
      marginLeft="250px"
      marginTop="145px"
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
