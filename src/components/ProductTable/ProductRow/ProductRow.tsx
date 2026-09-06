import type { Product } from "../../../type"

export default function ProductRow({product}:{product:Product}){
    return (
        <tr>
            <td> {product.name}</td>
            <td> {product.price}</td>
        </tr>
    )
}