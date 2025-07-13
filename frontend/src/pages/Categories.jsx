import React, { useState } from 'react'
import { Category, EditCategory, AddCategory } from '../components/index.jsx';

const CategoriesPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log('CategoriesPage component render - isEditing:', isEditing, 'isAdding:', isAdding, 'selectedCategory:', selectedCategory);

  const handleEditCategory = (category) => {
    console.log('handleEditCategory called with category:', category);
    setSelectedCategory(category);
    setIsEditing(true);
    setIsAdding(false);
    console.log('State updated - isEditing:', true, 'selectedCategory:', category);
  };

  const handleAddCategory = () => {
    console.log('handleAddCategory called');
    setIsAdding(true);
    setIsEditing(false);
    setSelectedCategory(null);
    console.log('State updated - isAdding:', true);
  };

  const handleBackToCategories = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelectedCategory(null);
    console.log('State reset - back to categories list');
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

export default CategoriesPage;
