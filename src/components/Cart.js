import React from "react";
import { Box, Image, Heading, Text, Flex, Button, VStack, HStack } from "@chakra-ui/react";
import DeleteIcon from "../Images/Delete-Icon.svg";
import PlusSign from "../Images/Plus-Sign.svg";
import NegativeSign from "../Images/Negative-Sign.svg";

const Cart = ({ inCart, updateCartCount }) => {
    const handleIncrease = (shoesName, currentCount) => {
        updateCartCount(shoesName, currentCount + 1);
    };

    const handleDecrease = (shoesName, currentCount) => {
        updateCartCount(shoesName, currentCount - 1);
    };

    const handleDelete = (shoesName) => {
        updateCartCount(shoesName, 0);
    };

    return (
        <Box
            flex="1"
            display="flex"
            flexWrap="wrap"
            gap="16px"
            padding={{ base: "24px 24px 24px 24px", md: "24px 24px 24px 24px" }} // increased padding top on smaller screens
            paddingTop={{ base: "124px", md: "24px" }} // Adjust the paddingTop based on screen size
            backgroundColor="#FAFAFA"
            marginLeft={{ base: "0px", md: "250px" }}
            marginTop={{ base: "100px", md: "145px" }}
        >
            {inCart.map((inCartProduct, index) => (
                <VStack
                    key={index}
                    alignItems="flex-start"
                    flex="1"
                    display="flex"
                    flexWrap="wrap"
                    gap="16px"
                    padding="24px"
                    backgroundColor="#ffffff"
                    borderRadius="35.4px"
                    flexDirection={{ base: "column", md: "row" }}
                    position="relative"
                    width={{ base: "100%", md: "auto" }}
                >
                    <VStack spacing={4} alignItems="flex-start">
                        <Image
                            src={inCartProduct.shoesImage}
                            width={{ base: "100%", md: "50%" }}
                            height={{ base: "auto", md: "70%" }}
                            objectFit="cover"
                            boxSize="85px"
                        />
                        <Heading size="md">
                            {inCartProduct.shoesName}
                        </Heading>
                    </VStack>
                    <VStack height="40px" />
                    <HStack spacing={4} flexWrap="wrap">
                        <HStack>
                            <Text fontWeight="bold">Price:</Text>
                            <Text>${inCartProduct.price}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Quantity:</Text>
                            <Text>{inCartProduct.cartProductCount}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Total Price:</Text>
                            <Text>${inCartProduct.price * inCartProduct.cartProductCount}</Text>
                        </HStack>
                        <Box width="40px" />
                        <HStack width="auto" justifyContent="center">
                            <Button
                                onClick={() => handleDecrease(inCartProduct.shoesName, inCartProduct.cartProductCount)}
                                backgroundColor="#FAFAFA"
                                width="20px"
                                height="20px"
                                padding="0"
                            >
                                <Image src={NegativeSign} alt="negative-symbol-icon" boxSize="20px" />
                            </Button>
                            <Text
                                fontSize="14px"
                                color="#AEA6A6"
                                textAlign="center"
                                whiteSpace="nowrap"
                                textOverflow="ellipsis"
                            >
                                {inCartProduct.cartProductCount}
                            </Text>
                            <Button
                                onClick={() => handleIncrease(inCartProduct.shoesName, inCartProduct.cartProductCount)}
                                backgroundColor="#FAFAFA"
                                width="20px"
                                height="20px"
                                padding="0"
                            >
                                <Image src={PlusSign} alt="plus-symbol-icon" boxSize="20px" />
                            </Button>
                            <Button
                                onClick={() => handleDelete(inCartProduct.shoesName)}
                                padding="0"
                                backgroundColor="#E8FFE6"
                            >
                                <Image src={DeleteIcon} alt="Delete-Icon" boxSize="20px" />
                            </Button>
                        </HStack>
                    </HStack>
                </VStack>
            ))}
        </Box>
    );
};

export default Cart;
