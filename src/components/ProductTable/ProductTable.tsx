import type { Product } from "../../type";


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
                    products.map((product:Product)=> <h4>{product.name}</h4>)
                }
            </tbody>
        </table>
    )
}