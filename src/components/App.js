import React, {useState} from "react";

import TitleArea from "./TitleArea";
import NavArea from "./NavArea";
import FeatureArea from "./FeatureArea";
import TileArea from "./TileArea";

import hogs from "../porkers_data";

function App() {
	const [greasedFilter, setGreasedFilter]= useState(false)
	const [sortBy, setSortBy]= useState("")
	const [featured, setFeatured]= useState({name: ""})
		
	let sortedPigs 
	switch (sortBy) {
		case "name":
			sortedPigs = [...hogs].sort((a, b) => (a.name < b.name ? -1 : 1 ) )   // array.sort() method to sort alphabetically by x.name 
			break;
		case "weight":
			sortedPigs = [...hogs].sort((a, b) => (a.weight - b.weight))   // array.sort() method to sort by x.weight
			break;
		default: sortedPigs = [...hogs]
	}

	let filteredSortedPigs = [...sortedPigs]
	if (greasedFilter) {  filteredSortedPigs = [...sortedPigs].filter(x => x.greased)  } 

	return (
		<div className="App">
			<TitleArea/>
			<NavArea 
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