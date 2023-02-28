import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDonate, updateLikes}) {

  const oneToy = toys.map((toy) => {
    return <ToyCard 
    key={toy.id} 
    toy={toy} 
    onDonate={onDonate} 
    updateLikes={updateLikes}/>
  })
  return (
    <div id="toy-collection">
    {oneToy}
    </div>
  );
}

export default ToyContainer;
