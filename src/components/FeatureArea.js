import React from "react";

function FeatureArea( {featured, setFeatured} ) {
        
    return(
        <div onClick={() => setFeatured({name: ""}) }  style={{border: "1px gray solid", borderRadius: "5px"}} >
            <h1>Featured Pig</h1>
            <img src={featured.image} alt={featured.name} />
            <h4> Name: {featured.name} </h4>
            Specialty: {featured.specialty} | Weight: {featured.weight} | Greased: {featured.greased ? "Yes" : "No"} | Award: {featured["highest medal achieved"] }   
            <div style={{ height: "20px"}} />

        </div>
    )
}

export default FeatureArea;