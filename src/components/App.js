import React, {useState} from "react";
import hogs from "../porkers_data";

import TitleArea from "./TitleArea";
import NavArea from "./NavArea";
import FeatureArea from "./FeatureArea";
import TileArea from "./TileArea";

function App() {
	const [greasedFilter, setGreasedFilter]= useState(false)
	const [sort, setSort]= useState("")
	const [featured, SetFeatured]= useState({name: ""})
	const [pigs, SetPigs]= useState(hogs)

	console.log("Greased?: ", greasedFilter)
	console.log("Sort by?: ",  sort)

	function sortPigs() { 
		console.log("Sort within function:", sort)
		if (sort === "name") {
			SetPigs([...pigs.sort( (a, b) => (a.name < b.name ? -1 : 1 ) ) ] )
			
			/// ------- sort is one step behind in this function  --------
		} else if (sort === "weight") { 
			SetPigs([...pigs.sort((a, b) => (a.weight - b.weight))  ])
			
		} 

	}

	let filteredPigs
	if (greasedFilter) {
		filteredPigs = pigs.filter(x => x.greased)
	} else {
		filteredPigs = pigs
	}

	return (
		<div className="App">
			<TitleArea/>
			<NavArea 
				setGreasedFilter={ () => { setGreasedFilter((greasedFilter) => (!greasedFilter)); } } 
				setSort={ (e)=> { setSort(e.target.value); sortPigs() } }   
			/>
			{ featured.name === "" ?  '' : <FeatureArea featured={featured} imageClick={ () => SetFeatured({name: ""}) }/>  }
			<br/>
			<TileArea filteredPigs={filteredPigs} tileClick={ (pig) => SetFeatured(pig) }/>
		</div>
	);
}

export default App;