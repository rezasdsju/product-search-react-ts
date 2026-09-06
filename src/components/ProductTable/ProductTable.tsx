import type { Product } from "../../type";
import ProductRow from "./ProductRow/ProductRow";

export default function ProductTable({products}:{products:Product[]}){
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product:Product)=> <ProductRow product={product}></ProductRow>)
                }
            </tbody>
        </table>
    )
}