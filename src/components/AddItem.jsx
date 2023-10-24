import React, { useState } from "react";

export default function AddItem() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState(
    { 
        category: "", 
        amount: "" 
    });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleAddItem() {
    if (data.category && data.amount) {
      setItems([...items, data]);
     
      setData({ 
        category: "", 
        amount: "" });
    }
//    console.log(items)
  }
  function handleDeleteItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    // console.log(updatedItems)
  }

  return (
    <div className="list--item">
      <div>
        <input
          type="text"
          name="category"
          value={data.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          type="number"
          name="amount"
          value={data.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <button className="add-btn" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li className="category" key={index}>
            {item.category} - ₹ {item.amount}
            <button className="delete-btn" onClick={() => handleDeleteItem(index)}>
                Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
