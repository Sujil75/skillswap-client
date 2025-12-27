const SearchBar = ({ setQuery }) => {
  return (
    <input
      placeholder="Search skills..."
      className="border p-2 w-full rounded"
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export default SearchBar