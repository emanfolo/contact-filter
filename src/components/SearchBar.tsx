import { SearchBarProps } from "../types/interfaces"

const SearchBar = (props: SearchBarProps) => {
  const { filterParams, setFilterParams } = props

  return (<>
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
      <div className="talentPicker">
        <h3>
          Select JSON Data to filter
        </h3>
        <div>
          <div>
            Example
            <input type="radio" id="html" name="example" value="Example"></input>
          </div>
          <div>
            Models
          <input type="radio" id="html" name="example" value="Example"></input>
          </div>
          <div>
            Photographers
            <input type="radio" id="html" name="example" value="Example"></input>
          </div>
          <div>
            MUA
            <input type="radio" id="html" name="example" value="Example"></input>
          </div>
        </div>
        

      </div>
  
  </>)
}

export default SearchBar