
import ProductRow from "./ProductRow/ProductRow";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import type { ReactNode } from "react";
import type { ProductTableTypes } from "../../type";
export default function ProductTable({ products, checked,searchedItem }: ProductTableTypes) {

    const rows: ReactNode[] = [];
    let lastCategory: string | null = null;

    products.forEach((product) => {
        if (product.name.toLocaleLowerCase().indexOf(searchedItem.toLocaleLowerCase())===-1){
            return
        }
        if (lastCategory !== product.category) {
            rows.push(
                <ProductCategoryRow category={product.category}></ProductCategoryRow>
            )
        }
        if (checked && product.stocked) {
            rows.push(
                <ProductRow name={product.name} price={product.price}></ProductRow>
            )
        }
        if (!checked) {
            rows.push(
                <ProductRow name={product.name} price={product.price}></ProductRow>
            )
        }
        lastCategory = product.category
    })

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