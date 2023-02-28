import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ToyForm({onFormSubmit}) {
const [name, setName] = useState("")
const [image, setImage] = useState("")

const handleFormName = (e) => {
  setName(e.target.value)
}

const handleFormImage = (e) => {
  setImage(e.target.value)
}

const newToy = {
  id: uuid(),
  name,
  image,
  likes: 0,
}

const handleSubmit = (e) => {
  e.preventDefault();
  
  fetch("http://localhost:3001/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newToy),
    })
    .then((res) => res.json())
    .then(onFormSubmit)
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={handleFormName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={handleFormImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
