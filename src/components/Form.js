import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!desc) return;

    const newItem = { desc, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    handleAddItems(newItem);
    // initialquantity.push(newItem);
    setDesc("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your ✈️ trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          // console.log(e.target.value);
          setQuantity(e.target.value);
        }}
      >
        {/* <option value={1}>1</option><option value={1}>2</option><option value={1}>3</option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => {
          // console.log(e.target.value);
          setDesc(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
