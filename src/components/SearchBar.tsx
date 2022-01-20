import { SearchBarProps } from "../types/interfaces"

const SearchBar = (props: SearchBarProps) => {
  const { filterParams, setFilterParams } = props
  
  return (<>
  <div className="searchBar">
        <input
          type="text"
          placeholder="Search Flitter"
          onChange={(e) => {
            setFilterParams(e.target.value);
          }}
          // onKeyPress={(e) => {
          //   handleKeyPress(e);
          // }}
        />
      </div>
  
  </>)
}

export default SearchBar