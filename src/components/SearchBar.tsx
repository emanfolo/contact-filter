import { SearchBarProps } from "../types/interfaces"

const SearchBar = (props: SearchBarProps) => {
  const { filterParams, setFilterParams } = props

  return (<>
    <div> Location Filter</div>
     <div className="searchBar">
        <input
          type="text"
          placeholder="Enter a location..."
          onChange={(e) => {
            setFilterParams(e.target.value);
          }}
        />
      </div>
      <div className="talentPicker">
        Select a field 
      </div>
  
  </>)
}

export default SearchBar