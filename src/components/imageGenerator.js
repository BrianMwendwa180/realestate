import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGenerator = () => {
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState('');

  const API_KEY = '49157076-379d2150948e55e788df44f40'; // Replace with your API key

  useEffect(() => {
    const fetchImages = async () => {
      if (keyword) {
        try {
          const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&per_page=10`);
          setImages(response.data.hits);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }
    };

    fetchImages();
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a keyword"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="image-container">
        {images.map((image) => (
          <img key={image.id} src={image.webformatURL} alt={image.tags} />
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;