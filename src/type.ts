export interface Product {
  category: string,
  price: string,
  stocked: boolean,
  name: string
}

export interface SearchBarTypes {
    setChecked:React.Dispatch<React.SetStateAction<boolean>>,
    searchedItem:string,
    setSearchedItem:React.Dispatch<React.SetStateAction<string>>
}

export interface ProductTableTypes { 
    products: Product[], 
    checked: boolean,
    searchedItem:string 
}