import { useEffect, useState } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/properties");
        setProperties(response.data);
      } catch (err) {
        setError("Failed to fetch properties");
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>{error}</div>;
  if (properties.length === 0) return <div>No properties found</div>;

  return (
    <div>
      <h2>Real Estate Listings</h2>
      {properties.map(property => (
        <div key={property.id}>
          <h3>{property.title}</h3>
          <p>Price: ${property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
