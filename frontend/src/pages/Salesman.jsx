import React, { useState } from 'react'
import { Salesman as SalesmanComponent, EditSalesman, AddSalesman } from '../components/index.jsx';

const Salesman = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSalesman, setSelectedSalesman] = useState(null);

  const handleEditSalesman = (salesman) => {
    setSelectedSalesman(salesman);
    setIsEditing(true);
    setIsAdding(false);
  };

  const handleAddSalesman = () => {
    setIsAdding(true);
    setIsEditing(false);
    setSelectedSalesman(null);
  };

  const handleBackToSalesmen = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelectedSalesman(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      {!isEditing && !isAdding ? (
        <SalesmanComponent onEditSalesman={handleEditSalesman} onAddSalesman={handleAddSalesman} />
      ) : isEditing ? (
        <EditSalesman 
          salesman={selectedSalesman} 
          onBackToSalesmen={handleBackToSalesmen} 
        />
      ) : (
        <AddSalesman onBackToSalesmen={handleBackToSalesmen} />
      )}
    </div>
  )
}

export default Salesman;
