import React, { useState } from 'react'
import { Product, EditProduct, AddProduct } from '../components/index.jsx';

const Products = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditing(true);
    setIsAdding(false);
  };

  const handleAddProduct = () => {
    setIsAdding(true);
    setIsEditing(false);
    setSelectedProduct(null);
  };

  const handleBackToProducts = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      {!isEditing && !isAdding ? (
        <Product onEditProduct={handleEditProduct} onAddProduct={handleAddProduct} />
      ) : isEditing ? (
        <EditProduct 
          product={selectedProduct} 
          onBackToProducts={handleBackToProducts} 
        />
      ) : (
        <AddProduct onBackToProducts={handleBackToProducts} />
      )}
    </div>
  )
}

export default Products;
