export default function Item({
  handleCheckedItems,
  handleDeleteItem,
  items,
  item,
}) {
  // console.log(props);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleCheckedItems(item.id, item)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.desc}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
