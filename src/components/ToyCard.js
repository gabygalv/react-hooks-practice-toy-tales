import React from "react";

function ToyCard({ toy, onDonate, updateLikes }) {
  const { name,image,likes } = toy;

  function handleDonate () {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {
      onDonate(toy)
    });
  }

  function handleLike () {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes +=1,
      })
    })
    .then((res) => res.json())
    .then(updateLikes(toy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}> Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
