export default function Stats({ items }) {
  if (!items.length) {
    return (
      <div className="stats">
        <p>Start adding some items to your packing list🚀</p>
        <small>Made with ❤️ by Shakti</small>
      </div>
    );
  }
  const numItems = items.length;
  const numPacked = items.reduce((acc, item) => {
    return item.packed === true ? acc + 1 : acc;
  }, 0);
  // console.log(numPacked);
  return (
    <footer className="stats">
      {numPacked !== numItems && (
        <em>
          🧳You have {numItems} quantity in your list, and you have packed{" "}
          {numPacked} (
          {numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100)}%)
        </em>
      )}
      {numPacked === numItems && <em>🧳You got everything! Ready to go✈️</em>}
    </footer>
  );
}
