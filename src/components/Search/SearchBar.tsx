// import type { Product } from "../../type"
import type { SearchBarTypes } from "../../type"
export default function SearchBar({ setChecked, setSearchedItem, searchedItem, products, checked }: SearchBarTypes) {

    // const matchedProducts: Product[] = products.filter(product =>
    //     product.name.toLowerCase().includes(searchedItem.toLowerCase())
    // )
    // const stockedProduct:number = products.reduce((acc, elem) => {
    //     if (elem.stocked == checked) {
    //         return acc + 1
    //     }
    //     return acc
    // }, 0)
    // const stokedAndMatchedProducts = products.filter(prod=>prod.stocked && matchedProducts.includes(prod))
    // // console.log('matched: ', matchedProducts)

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchedItem.toLowerCase())
        &&
        (!checked || product.stocked)
    )
    return (
        <form action="">
            <input type="text" value={searchedItem} onChange={(e) => setSearchedItem(e.target.value)} />
            <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
            <label htmlFor="">Only show Products in Stock</label>
            {/* <p>{searchedItemCount} of {products.length}</p> */}
            {/* <p>{searchedItem.length}</p> */}
            <p>{filteredProducts.length} of {products.length}</p>

        </form>
    )
}

