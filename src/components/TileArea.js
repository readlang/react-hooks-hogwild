import React from "react";

function TileArea({filteredSortedPigs, setFeatured}) {
    return(
        <div className="ui grid container" >
            {filteredSortedPigs.map((pig)=> ( <div key={pig.name} onClick={()=>setFeatured(pig)} className="ui four wide column borderClass ">
                <div className="image"> 
                    <img src={pig.image} alt={pig.name} width="200" height="150" overflow="hidden" /> 
                    <h3>{pig.name}</h3>
                    <p>{pig.weight}</p>
                </div>
            </div>  ) ) }
        </div>
    )
}

export default TileArea;