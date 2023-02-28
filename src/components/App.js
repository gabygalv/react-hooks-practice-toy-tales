import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then(setToys)
  }, [setToys])

  console.log(toys)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onFormSubmit(toy) {
    setToys([...toys], toy )
  }

  function onDonate (deleteToy) {
    const updatedToys = toys.filter((toy) => toy.id !== deleteToy.id);
    setToys(updatedToys)
  }

  function updateLikes (likedToy) {
    const updatedToys = toys.map((toy) =>
    toy.id === likedToy.id ? likedToy : toy);
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={onFormSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={onDonate} updateLikes={updateLikes}/>
    </>
  );
}

export default App;
