import React, { useState, useContext } from "react";
import { PriceContext } from "../context/priceContext";
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Button,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import logo from "../Images/Nike-logo.svg";
import arrowUp from "../Images/arrowUpFilter.svg";
import arrowDown from "../Images/arrowDownFilter.svg";

const Sidebar = ({ categorySelected }) => {
  const [isPriceFilterOpen, setisPriceFilterOpen] = useState(false);
  const { chosenPrice, setChosenPrice } = useContext(PriceContext);

  const categoriesList = [
    "Nike Golf",
    "Nike Blazers",
    "Air Force",
    "Air Max",
    "Air Dunk",
    "Air Jordan",
  ];
  const pricesOffered = ["$200", "$250", "$350", "$402", "$502"];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handlePriceToggle = () => setisPriceFilterOpen(!isPriceFilterOpen);
  const handleChosenPrice = (price) => () =>
    setChosenPrice((prevPrice) => (prevPrice === price ? null : price));

  const handleSelectedCategory = (category) => {
    categorySelected(category);
  };

  // Responsive styles
  const sidebarWidth = useBreakpointValue({ base: "100%", md: "250px" });
  const fontSize = useBreakpointValue({ base: "14px", md: "16px" });

  // Disclosure for Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Hamburger Icon for Small Screens */}
      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        top="20px"
        left="20px"
        zIndex="1100"
      >
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          backgroundColor="transparent"
          _hover={{ backgroundColor: "gray.100" }}
        />
      </Box>

      {/* Sidebar for Medium and Larger Screens */}
      <Box
        width={sidebarWidth}
        padding="20px"
        backgroundColor="#171616"
        borderRight="2px solid #ffffff"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        height="150vh"
        position="fixed"
        top="0px"
        bottom="0"
        overflowY="auto"
        zIndex="1000"
      >
        <Box mb="8px">
          <Image src={logo} alt="logo-image" width="121.275px" height="83.68px" />
        </Box>
        <Box height="54px"></Box>

        <Heading size="md" color="#ffffff" fontSize={fontSize}>
          Categories
        </Heading>
        <Box height="8px" />

        <VStack spacing={2} alignItems="left">
          {categoriesList.map((category, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleSelectedCategory(category)}
              style={{
                color: "#AEA6A6",
                fontSize: fontSize,
                marginLeft: "20px",
              }}
            >
              {category}
            </a>
          ))}
        </VStack>
        <Box height="24px" />
        <Heading size="md" color="#ffffff" fontSize={fontSize}>
          Filter by:
        </Heading>
        <Box height="8px" />
        <Button
          width="100%"
          padding="8px"
          borderRadius="8px"
          backgroundColor="#D7FBD3"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={handlePriceToggle}
          _hover={{ backgroundColor: "#D7FBD3" }}
        >
          <Text fontSize={fontSize}>Price</Text>
          <Image
            src={isPriceFilterOpen ? arrowUp : arrowDown}
            alt="arrow-icon"
            boxSize="18px"
          />
        </Button>
        {isPriceFilterOpen && (
          <Box mt="4px" padding="8px">
            {pricesOffered.map((price, index) => (
              <Flex key={index} alignItems="center" size="4px" gap="8px">
                <Box
                  width="14px"
                  height="14px"
                  borderRadius="2px"
                  border="1px solid #ffffff"
                  backgroundColor={chosenPrice === price ? "#D7FBD3" : "transparent"}
                  onClick={handleChosenPrice(price)}
                  cursor="pointer"
                ></Box>
                <Text color="#AEA6A6" fontSize={fontSize}>
                  {price}
                </Text>
              </Flex>
            ))}
          </Box>
        )}
      </Box>

      {/* Drawer for Small Screens */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="full" // Make the drawer full screen
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#171616">
          <DrawerCloseButton color="white" />
          <DrawerHeader>
            <Image src={logo} alt="logo-image" width="121.275px" height="83.68px" />
          </DrawerHeader>

          <DrawerBody>
            <Heading size="md" color="#ffffff" fontSize={fontSize}>
              Categories
            </Heading>
            <Box height="8px" />

            <VStack spacing={2} alignItems="left">
              {categoriesList.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => handleSelectedCategory(category)}
                  style={{
                    color: "#AEA6A6",
                    fontSize: fontSize,
                    marginLeft: "20px",
                  }}
                >
                  {category}
                </a>
              ))}
            </VStack>
            <Box height="24px" />
            <Heading size="md" color="#ffffff" fontSize={fontSize}>
              Filter by:
            </Heading>
            <Box height="8px" />
            <Button
              width="100%"
              padding="8px"
              borderRadius="8px"
              backgroundColor="#D7FBD3"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={handlePriceToggle}
              _hover={{ backgroundColor: "#D7FBD3" }}
            >
              <Text fontSize={fontSize}>Price</Text>
              <Image
                src={isPriceFilterOpen ? arrowUp : arrowDown}
                alt="arrow-icon"
                boxSize="18px"
              />
            </Button>
            {isPriceFilterOpen && (
              <Box mt="4px" padding="8px">
                {pricesOffered.map((price, index) => (
                  <Flex key={index} alignItems="center" size="4px" gap="8px">
                    <Box
                      width="14px"
                      height="14px"
                      borderRadius="2px"
                      border="1px solid #ffffff"
                      backgroundColor={chosenPrice === price ? "#D7FBD3" : "transparent"}
                      onClick={handleChosenPrice(price)}
                      cursor="pointer"
                    ></Box>
                    <Text color="#AEA6A6" fontSize={fontSize}>
                      {price}
                    </Text>
                  </Flex>
                ))}
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
