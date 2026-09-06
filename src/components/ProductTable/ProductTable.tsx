import type { Product } from "../../type";
import ProductRow from "./ProductRow/ProductRow";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
export default function ProductTable({products}:{products:Product[]}){

    const rows:any = [];
    const lastCategory: string|null = null;

    products.forEach((product)=>{
        if (lastCategory===product.category){
            rows.push (
                <ProductCategoryRow category={product.category}></ProductCategoryRow>
            )
        }
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
                {
                    products.map((product:Product)=> <ProductRow product={product}></ProductRow>)
                }
            </tbody>
        </table>
    )
}