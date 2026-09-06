import './ProductCategoryRow.css'
export default function ProductCategoryRow({ category }: { category: string }) {
    return (
        <tr className="category-row">
            <td colSpan={2}>{category}</td>
        </tr>
    )
}