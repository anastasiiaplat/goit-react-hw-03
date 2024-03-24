

const SearchBox = (filter, onChangeFilter) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(event) => onChangeFilter(event)}
      ></input>
    </div>
  )
}

export default SearchBox