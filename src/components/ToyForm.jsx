import React from "react";

function ToyForm({ onAddToy }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget || (event.target && event.target.closest && event.target.closest("form"));

    const nameInput = form.querySelector('input[name="name"]');
    const imageInput = form.querySelector('input[name="image"]');

    const newToy = {
      name: nameInput ? nameInput.value : "",
      image: imageInput ? imageInput.value : "",
      likes: 0,
    };

    onAddToy(newToy);
    if (form && form.reset) form.reset();
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
        />

        <br />

        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
  );SS
}

export default ToyForm;