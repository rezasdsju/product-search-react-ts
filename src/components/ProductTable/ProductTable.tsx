
import ProductRow from "./ProductRow/ProductRow";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import type { ReactNode } from "react";
import type { ProductTableTypes } from "../../type";
export default function ProductTable({ products, checked, searchedItem }: ProductTableTypes) {

    const rows: ReactNode[] = [];
    let lastCategory: string | null = null;
    let count = 0
    products.forEach((product) => {
        if (product.name.toLocaleLowerCase().indexOf(searchedItem.toLocaleLowerCase()) === -1) {
            return
        }
        if (checked && !product.stocked) {
            return;
        }
        if (lastCategory !== product.category) {
            rows.push(
                <ProductCategoryRow category={product.category}></ProductCategoryRow>
            )
        }


        rows.push(
            <ProductRow name={product.name} price={product.price}></ProductRow>
        )
        count++


        lastCategory = product.category
    })
    // searchedItemCount = count
    // setSearchedItemCount(searchedItemCount)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}