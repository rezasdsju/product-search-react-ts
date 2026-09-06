# Grocery Store Product Search

A simple Grocery Store product search application built with **React, TypeScript, and CSS**.

The application allows users to search for products by name and filter products based on their stock availability. The number of matching products is displayed based on the current search and stock filter.

## Live Project

[View Live Project](https://search-kuvgn4883-reza-babd.vercel.app)

## Features

* Search products by product name.
* See the number of products matching the search text.
* Filter products to show only products that are currently in stock.
* Search and stock filtering work together.
* Display the number of matching products out of the total number of products.
* Products are displayed in a table.
* Products are organized by category.

## Technologies Used

* React
* TypeScript
* CSS

## Project Structure

```text
src/
│
├── components/
│   │
│   ├── NavBar/
│   │   ├── NavBar.tsx
│   │   └── NavBar.css
│   │
│   ├── SearchBar/
│   │   ├── SearchBar.tsx
│   │   └── SearchBar.css
│   │
│   └── ProductTable/
│       ├── ProductTable.tsx
│       ├── ProductTable.css
│       │
│       ├── ProductRow/
│       │   └── ProductRow.tsx
│       │
│       └── ProductCategoryRow/
│           └── ProductCategoryRow.tsx
│
├── App.tsx
└── type.ts
```

## Component Structure

### NavBar

The `NavBar` component displays the Grocery Store title, a short description, and a Contact Us button.

### SearchBar

The `SearchBar` component contains:

* Product search input
* Stock filter checkbox
* Matching product count

When the user enters text in the search box, the application checks the product names and displays how many products match the search.

The stock checkbox can also be used to show only products that are in stock.

### ProductTable

The `ProductTable` component displays the filtered products in a table with:

* Product name
* Product price
* Product category

### ProductRow

The `ProductRow` component is responsible for displaying an individual product's name and price inside a table row.

### ProductCategoryRow

The `ProductCategoryRow` component is used to display the category of products in the product table.

## TypeScript

TypeScript is used throughout the project.

The project's TypeScript types are declared in:

```text
src/type.ts
```

These types are used for defining the structure of product data and component props.

## How It Works

The application maintains the search text and stock filter state in `App.tsx`.

```text
App
│
├── SearchBar
│   ├── Search input
│   ├── Stock checkbox
│   └── Matching product count
│
└── ProductTable
    ├── ProductCategoryRow
    └── ProductRow
```

When the search text changes, the product list is filtered according to the product name.

When the **Only show Products in Stock** checkbox is selected, products that are not in stock are excluded from the filtered result.

The matching product count is then displayed in the SearchBar.

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL provided by Vite.

## Author

**Rezaul Karim**
