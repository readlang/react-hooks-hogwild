import React from "react";

function TileArea({filteredPigs, tileClick}) {
    return(
        <div className="ui grid container" >
            {filteredPigs.map((pig)=> ( <div key={pig.name} onClick={() => tileClick(pig)} className="ui four wide column borderClass ">
                <div className="image"> 
                    <img src={pig.image} alt={pig.name} width="200" height="150" overflow="hidden" /> {/*This is not displaying correctly */}
                    <h3>{pig.name}</h3>
                    <p>{pig.weight}</p>
                </div>
            </div>  ) ) }
        </div>
    )
}

export default TileArea;