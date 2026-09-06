
export default function ProductCategoryRow({category}:{category:string}){
    return (
        <tr>
            <td colSpan={2}>{category}</td>
        </tr>
    )
}