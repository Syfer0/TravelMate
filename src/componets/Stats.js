import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 📃</em>
      </p>
    );
  const numItems = items.length;
  const numpacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numpacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? " You got everything! ready to go ✈️"
          : `🎒you have ${numItems} item on the list and you already packed
        ${numpacked} (${percentage}) %`}
      </em>
    </footer>
  );
}
