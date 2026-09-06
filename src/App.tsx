
import './App.css'
import SearchBar from './components/Search/SearchBar'
import ProductTable from './components/ProductTable/ProductTable'

import type { Product } from './type'

const products: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {

  return (
    <>
    <SearchBar></SearchBar>
    <ProductTable products={products}></ProductTable>
    </>
  )
}

export default App

