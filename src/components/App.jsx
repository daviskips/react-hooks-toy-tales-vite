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
      .then(setToys);
  }, []);

  function addToy(toy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((toy) => setToys((toys) => [...toys, toy]));
  }

  function likeToy(id) {
    const toy = toys.find((toy) => toy.id === id);
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 10 }),
    })
      .then((res) => res.json())
      .then((updated) =>
        setToys((toys) =>
          toys.map((toy) => (toy.id === updated.id ? updated : toy))
        )
      );
  }

  function deleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() =>
      setToys((toys) => toys.filter((toy) => toy.id !== id))
    );
  }

  return (
    <>
      <Header />
      {showForm && <ToyForm onAddToy={addToy} />}
      <button onClick={() => setShowForm(!showForm)}>Add a Toy</button>
      <ToyContainer toys={toys} onLike={likeToy} onDelete={deleteToy} />
    </>
  );
}

export default App;