import React, {useState} from "react";

import TitleArea from "./TitleArea";
import FilterSortArea from "./FilterSortArea";
import FeatureArea from "./FeatureArea";
import TileArea from "./TileArea";

import hogs from "../porkers_data";

function App() {
	const [greasedFilter, setGreasedFilter]= useState(false)
	const [sortBy, setSortBy]= useState("")
	const [featured, setFeatured]= useState({name: ""})
	
	const filteredPigs = hogs.filter(pig => ( greasedFilter ? pig.greased : true ))

	const filteredSortedPigs = filteredPigs.sort((a, b) => {
		if (sortBy === "name") {
			return(a.name < b.name ? -1 : 1 )
		} else if (sortBy === "weight") {
			return( a.weight - b.weight )
		} else {
			return(a, b)
		}
	})

	return (
		<div className="App">
			<TitleArea/>
			<FilterSortArea 
				greasedFilter={greasedFilter}
				setGreasedFilter={setGreasedFilter} 
				setSortBy= {setSortBy}
			/>
			{ featured.name === "" ?  '' : 
				<FeatureArea featured={featured} setFeatured={setFeatured}/>  
			}
			<br/>
			<TileArea filteredSortedPigs={filteredSortedPigs} setFeatured={setFeatured}/>
		</div>
	);	
}

export default App;