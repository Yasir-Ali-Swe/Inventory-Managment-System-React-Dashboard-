import React, { useState } from 'react'
import { Product, EditProduct, AddProduct } from '../components/index.jsx';

const Products = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log('Products component render - isEditing:', isEditing, 'isAdding:', isAdding, 'selectedProduct:', selectedProduct);

  const handleEditProduct = (product) => {
    console.log('handleEditProduct called with product:', product);
    setSelectedProduct(product);
    setIsEditing(true);
    setIsAdding(false);
    console.log('State updated - isEditing:', true, 'selectedProduct:', product);
  };

  const handleAddProduct = () => {
    console.log('handleAddProduct called');
    setIsAdding(true);
    setIsEditing(false);
    setSelectedProduct(null);
    console.log('State updated - isAdding:', true);
  };

  const handleBackToProducts = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelectedProduct(null);
    console.log('State reset - back to products list');
  };

  return (
    <>
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
    </>
  )
}

export default Products;
