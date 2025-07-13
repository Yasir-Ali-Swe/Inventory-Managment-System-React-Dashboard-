import React, { useState } from 'react'
import { Category, EditCategory, AddCategory } from '../components/index.jsx';

const Categories = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setIsEditing(true);
    setIsAdding(false);
  };

  const handleAddCategory = () => {
    setIsAdding(true);
    setIsEditing(false);
    setSelectedCategory(null);
  };

  const handleBackToCategories = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelectedCategory(null);
  };

  return (
    <>
      {!isEditing && !isAdding ? (
        <Category onEditCategory={handleEditCategory} onAddCategory={handleAddCategory} />
      ) : isEditing ? (
        <EditCategory 
          category={selectedCategory} 
          onBackToCategories={handleBackToCategories} 
        />
      ) : (
        <AddCategory onBackToCategories={handleBackToCategories} />
      )}
    </>
  )
}

export default Categories;
