
import type { SearchBarTypes } from "../../type"
export default function SearchBar({setChecked, setSearchedItem,searchedItem, searchedItemCount, products}:SearchBarTypes){

    
    return (
        <form action="">
            <input type="text" value={searchedItem} onChange={(e)=>setSearchedItem(e.target.value)}/> 
            <input type="checkbox" onChange={(e)=>setChecked(e.target.checked)} />
            <label htmlFor="">Only show Products in Stock</label>
            <p>{searchedItemCount} of {products.length}</p>
            <p>{searchedItem.length}</p>
        </form>
    )
}