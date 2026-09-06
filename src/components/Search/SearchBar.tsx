

export default function SearchBar({setChecked, setSearchedItem,searchedItem}:{setChecked:React.Dispatch<React.SetStateAction<boolean>>,searchedItem:string,setSearchedItem:React.Dispatch<React.SetStateAction<string>>}){
    return (
        <form action="">
            <input type="text" value={searchedItem} onChange={(e)=>setSearchedItem(e.target.value)}/> <br />
            <input type="checkbox" onChange={(e)=>setChecked(e.target.checked)} />
            <label htmlFor="">Only show Products in Stock</label>
        </form>
    )
}