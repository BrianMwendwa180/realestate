import { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://your-backend.com/api/properties", {
        title,
        price,
      });
      console.log("Property added:", response.data);
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;
