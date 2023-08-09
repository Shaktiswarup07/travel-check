import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  deleteAll,
  handleCheckedItems,
  handleDeleteItem,
  items,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  } else if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);
  } else {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            handleCheckedItems={handleCheckedItems}
            handleDeleteItem={handleDeleteItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          className="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="quantity">Sort by quantity</option>
        </select>
        <button className="clear-btn" onClick={deleteAll}>
          Clear List
        </button>
      </div>
    </div>
  );
}
