import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);
  function deleteAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleCheckedItems(id, item) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        handleCheckedItems={handleCheckedItems}
        handleDeleteItem={handleDeleteItem}
        items={items}
        deleteAll={deleteAll}
      />
      <Stats items={items} />
    </>
  );
}
