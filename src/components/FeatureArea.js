import React from "react";

function FeatureArea( {featured, imageClick} ) {
    console.log(featured)
    
    return(
        <div onClick={imageClick}>
            <h1>Featured Pig</h1>
            <img src={featured.image} alt={featured.name} />
            <h4> Name: {featured.name} </h4>
            Specialty: {featured.specialty} | Weight: {featured.weight} | Greased: {featured.greased ? "Yes" : "No"} | Award: {featured["highest medal achieved"] }   
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default FeatureArea;