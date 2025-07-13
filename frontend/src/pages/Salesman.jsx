import React, { useState } from 'react'
import { Salesman, EditSalesman, AddSalesman } from '../components/index.jsx';

const SalesmanPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSalesman, setSelectedSalesman] = useState(null);

  console.log('SalesmanPage component render - isEditing:', isEditing, 'isAdding:', isAdding, 'selectedSalesman:', selectedSalesman);

  const handleEditSalesman = (salesman) => {
    console.log('handleEditSalesman called with salesman:', salesman);
    setSelectedSalesman(salesman);
    setIsEditing(true);
    setIsAdding(false);
    console.log('State updated - isEditing:', true, 'selectedSalesman:', salesman);
  };

  const handleAddSalesman = () => {
    console.log('handleAddSalesman called');
    setIsAdding(true);
    setIsEditing(false);
    setSelectedSalesman(null);
    console.log('State updated - isAdding:', true);
  };

  const handleBackToSalesmen = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelectedSalesman(null);
    console.log('State reset - back to salesmen list');
  };

  return (
    <>
      {!isEditing && !isAdding ? (
        <Salesman onEditSalesman={handleEditSalesman} onAddSalesman={handleAddSalesman} />
      ) : isEditing ? (
        <EditSalesman 
          salesman={selectedSalesman} 
          onBackToSalesmen={handleBackToSalesmen} 
        />
      ) : (
        <AddSalesman onBackToSalesmen={handleBackToSalesmen} />
      )}
    </>
  )
}

export default SalesmanPage;
