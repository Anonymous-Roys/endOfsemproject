import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
        console.log("first")
      try {
        const response = await axios.get(`http://localhost:3000/prod?p=${page}`);
        setProducts(response.data);
        console.log(response)
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [page]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={page === 0}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default ProductList;
