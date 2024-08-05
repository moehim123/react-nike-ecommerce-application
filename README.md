# Nike E-commerce Application


## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [State Management](#state-management)

## Project Overview

The Nike E-commerce Application is a full-featured web application that allows users to browse and purchase Nike products. Built with React and Chakra UI, it offers a modern, responsive design with features such as product filtering, a shopping cart, and a wishlist.

This project is a great example of using modern web development practices and libraries to create a scalable and maintainable e-commerce platform.

## Features

- **Responsive Design**: Works seamlessly across different screen sizes.
- **Product Browsing**: Explore a wide range of Nike products.
- **Category Filtering**: Filter products by category and price.
- **Shopping Cart**: Add products to the cart and update quantities.
- **Wishlist**: Save products for later in a personal wishlist.
- **Search Functionality**: Quickly find products using the search bar.
- **Collapsible Sidebar**: A sidebar with categories and filters that collapses into a hamburger menu on smaller screens.


## Installation

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **npm**: Node Package Manager comes with Node.js, or you can install it separately.

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/nike-ecommerce.git

2. **Navigate to the project directory:

```bash
cd nike-ecommerce

3. **Install the dependencies:

```bash
npm install

4.***Run the application:

```bash
npm start

Open your browser and go to http://localhost:3000 to see the application running.


##Usage

Browse Products: Navigate through the available products using the sidebar or the main product listing page.
Filter Products: Use the sidebar to filter products by category and price.
Search Products: Use the search bar at the top to find specific products.
Add to Cart: Click on a product and add it to your shopping cart.
Manage Wishlist: Add products to your wishlist to view them later.
Technologies Used
React: A JavaScript library for building user interfaces.
Chakra UI: A simple, modular, and accessible component library for React.
React Router: Declarative routing for React applications.
Context API: For state management across the application.
State Management
The Nike E-commerce Application uses React's useState and useContext hooks to manage state across the application. Here are some key areas where state management is implemented:

useState Hook
Sidebar: Manages the open/close state of the price filter and the selected category.


const [isPriceFilterOpen, setisPriceFilterOpen] = useState(false);
const [selectedCategory, setSelectedCategory] = useState(null);
Cart and Wishlist: Manages the items in the shopping cart and wishlist.

const [inWishList, setIsInWishList] = useState([]);
const [inCart, setIsInCart] = useState([]);
Search and Category Selection: Manages the search query and category selection for product filtering.


const [onSearchQuery, setOnSearchQuery] = useState("");
const [category, setCategory] = useState(null);
useContext Hook
Price Context: Provides a global state for managing price filters across different components.

const { chosenPrice, setChosenPrice } = useContext(PriceContext);
Cart and Wishlist Contexts: (Optional, if implemented) Manage shared state for cart and wishlist items across different components.
