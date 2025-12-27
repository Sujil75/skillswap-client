const FilterBar = ({ setCategory, setLevel }) => {
  return (
    <div className="flex gap-3 mt-3">

      <input 
        placeholder="Category"
        className="border p-2 rounded"
        onChange={(e)=> setCategory(e.target.value)}
      />

      <input 
        placeholder="Level"
        className="border p-2 rounded"
        onChange={(e)=> setLevel(e.target.value)}
      />
    </div>
  )
}

export default FilterBar