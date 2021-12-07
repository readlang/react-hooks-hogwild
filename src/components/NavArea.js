import React from "react";

const NavArea = ({setGreasedFilter, setSort} ) => {
	return (
		<div className="navWrapper" style={{border: "1px gray solid"}}  >
			<br/>
			<div>
				<label> Show Greased Only </label>
				<input type="checkbox" id="greased" name="greased" onClick={setGreasedFilter} />
			</div>
			<label>Sort By:  </label>
			<select name="sort by" onChange={ setSort }> 
				<option value="select" > Select...  </option>
				<option value="name" > Name </option>
				<option value="weight" > Weight </option>
			</select>
			<br/>
		</div>
	);
};

export default NavArea;