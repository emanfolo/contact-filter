import { SearchBarProps } from "../types/interfaces";

const SearchBar = (props: SearchBarProps) => {
  const { setFilterParams } = props;

  return (
    <>
      <div className="searchBar">
        <h3> Location Filter</h3>
        <input
          type="text"
          placeholder="Enter a location..."
          onChange={(e) => {
            setFilterParams(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
