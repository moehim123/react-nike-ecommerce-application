import React from "react";
import { Flex, Image, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "../Images/Home-Icon.svg";
import ArrowIcon from "../Images/Arrow-icon.svg";

const NavBar = ({ category }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(part => part !== '');

    return (
        <Flex
            align="center"
            width="100%"
            padding={{ base: "16px 24px", md: "24px 54px" }}  // Adjust padding based on screen size
            paddingTop={{ base: "14px", md: "24px" }}  // Increase padding top on smaller screens
            marginLeft={{ base: "0px", md: "250px" }}  // Adjust marginLeft for smaller screens
            position="fixed"
            zIndex="999"
            backgroundColor="#FAFAFA"
            marginTop={{ base: "154px", md: "124px" }}  // Adjust marginLeft for smaller screens
            flexWrap="wrap"  // Allow content to wrap on smaller screens
        >
            <Link to="/">
                <Flex align="center">
                    <Image src={HomeIcon} alt="Home-icon" boxSize={{ base: "16px", md: "20px" }} />
                    <Text ml="8px" fontSize={{ base: "sm", md: "md" }} fontWeight="normal">Home</Text>
                </Flex>
            </Link>

            {category && (
                <Flex align="center">
                    <Image src={ArrowIcon} alt="Arrow-icon" boxSize={{ base: "10px", md: "12px" }} ml="8px" />
                    <Text ml="8px" fontSize={{ base: "sm", md: "md" }} fontWeight="normal">Category</Text>
                </Flex>
            )}

            {pathParts.map((part, index) => (
                <Flex align="center" key={index}>
                    <Image src={ArrowIcon} alt="Arrow-icon" boxSize={{ base: "10px", md: "12px" }} ml="8px" />
                    <Text ml="8px" fontSize={{ base: "sm", md: "md" }} fontWeight={index === pathParts.length - 1 ? "bold" : "normal"}>
                        {part.charAt(0).toUpperCase() + part.slice(1)}
                    </Text>
                </Flex>
            ))}
        </Flex>
    );
}

export default NavBar;
