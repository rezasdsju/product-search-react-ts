import type { Product } from "../../type";
import ProductRow from "./ProductRow/ProductRow";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
export default function ProductTable({ products, checked }: { products: Product[], checked: boolean }) {

    const rows: any = [];
    let lastCategory: string | null = null;

    products.forEach((product) => {
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