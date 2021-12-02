const SearchInput = ({ query, manageQueryState, manageQueryTypeState }) => {
  return (
    <div>
      <select onChange={(e) => manageQueryTypeState(e)}>
        <option value="movie">Movies</option>
        <option value="tv">TV Shows</option>
        <option value="person">People</option>
      </select>
      <input
        type="text"
        value={query}
        onChange={(e) => manageQueryState(e)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
