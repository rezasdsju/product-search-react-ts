
import './App.css'
import SearchBar from './components/Search/SearchBar'
import ProductTable from './components/ProductTable/ProductTable'

import type { Product } from './type'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
const products: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$2", stocked: true, name: "Banana" },
  { category: "Fruits", price: "$3", stocked: false, name: "Mango" },
  { category: "Fruits", price: "$2", stocked: true, name: "Orange" },
  { category: "Fruits", price: "$4", stocked: false, name: "Pineapple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Guava" },
  { category: "Fruits", price: "$5", stocked: true, name: "Grapes" },
  { category: "Fruits", price: "$3", stocked: false, name: "Papaya" },
  { category: "Fruits", price: "$2", stocked: true, name: "Watermelon" },
  { category: "Fruits", price: "$6", stocked: false, name: "Strawberry" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Vegetables", price: "$3", stocked: true, name: "Carrot" },
  { category: "Vegetables", price: "$2", stocked: false, name: "Potato" },
  { category: "Vegetables", price: "$3", stocked: true, name: "Tomato" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Onion" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Broccoli" },
  { category: "Vegetables", price: "$3", stocked: true, name: "Cucumber" },
  { category: "Vegetables", price: "$5", stocked: false, name: "Cauliflower" },
  { category: "Dairy", price: "$3", stocked: true, name: "Milk" },
  { category: "Dairy", price: "$5", stocked: true, name: "Cheese" },
  { category: "Dairy", price: "$4", stocked: false, name: "Butter" },
  { category: "Dairy", price: "$6", stocked: true, name: "Yogurt" },
  { category: "Dairy", price: "$7", stocked: false, name: "Cream" },
  { category: "Dairy", price: "$8", stocked: true, name: "Mozzarella" },
  { category: "Dairy", price: "$9", stocked: false, name: "Cheddar" },
  { category: "Dairy", price: "$4", stocked: true, name: "Cottage Cheese" },
  { category: "Bakery", price: "$2", stocked: true, name: "Bread" },
  { category: "Bakery", price: "$3", stocked: false, name: "Croissant" },
  { category: "Bakery", price: "$4", stocked: true, name: "Muffin" },
  { category: "Bakery", price: "$5", stocked: true, name: "Donut" },
  { category: "Bakery", price: "$6", stocked: false, name: "Cake" },
  { category: "Bakery", price: "$3", stocked: true, name: "Bagel" },
  { category: "Bakery", price: "$4", stocked: false, name: "Brownie" },
  { category: "Bakery", price: "$2", stocked: true, name: "Bun" },
  { category: "Beverages", price: "$2", stocked: true, name: "Water" },
  { category: "Beverages", price: "$3", stocked: true, name: "Orange Juice" },
  { category: "Beverages", price: "$4", stocked: false, name: "Apple Juice" },
  { category: "Beverages", price: "$5", stocked: true, name: "Coffee" },
  { category: "Beverages", price: "$3", stocked: false, name: "Tea" },
  { category: "Beverages", price: "$4", stocked: true, name: "Lemonade" },
  { category: "Beverages", price: "$6", stocked: false, name: "Mango Juice" },
  { category: "Beverages", price: "$5", stocked: true, name: "Green Tea" },
  { category: "Snacks", price: "$2", stocked: true, name: "Chips" },
  { category: "Snacks", price: "$3", stocked: false, name: "Popcorn" },
  { category: "Snacks", price: "$4", stocked: true, name: "Cookies" },
  { category: "Snacks", price: "$5", stocked: true, name: "Crackers" },
  { category: "Snacks", price: "$6", stocked: false, name: "Peanuts" },
  { category: "Snacks", price: "$3", stocked: true, name: "Biscuits" }
];

function App() {
  const [searchedItem, setSearchedItem] = useState<string>("")
  const [checked, setChecked] = useState<boolean>(false)
  // const [searchedItemCount, setSearchedItemCount] = useState<number>(0)
  return (
    <>
    <NavBar></NavBar>
    <SearchBar  checked={checked} products={products}   searchedItem={searchedItem} setChecked={setChecked} setSearchedItem={setSearchedItem}></SearchBar>
    <ProductTable  searchedItem={searchedItem} checked={checked} products={products}></ProductTable>
    
    </>
  )
}

export default App

