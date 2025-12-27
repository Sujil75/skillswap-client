const SortBar = ({ setSort }) => {
  return (
    <select 
      className="border p-2 rounded mt-3"
      onChange={(e)=> setSort(e.target.value)}
    >
      <option value="">Sort By</option>
      <option value="rating">Rating</option>
      <option value="date">Newest</option>
    </select>
  )
}

export default SortBar