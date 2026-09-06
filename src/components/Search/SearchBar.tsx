

export default function SearchBar({setChecked}:{setChecked:React.Dispatch<React.SetStateAction<boolean>>}){
    return (
        <form action="">
            <input type="text" /> <br />
            <input type="checkbox" onChange={(e)=>setChecked(e.target.checked)} />
            <label htmlFor="">Only show Products in Stock</label>
        </form>
    )
}