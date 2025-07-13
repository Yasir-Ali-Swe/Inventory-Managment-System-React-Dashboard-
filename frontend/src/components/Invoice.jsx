import React, { useState } from 'react'

const Invoice = ({ onGenerateInvoice }) => {
  const [invoiceData, setInvoiceData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    items: [
      { name: '', quantity: 1, price: 0 }
    ]
  });

  const handleInputChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...invoiceData.items];
    newItems[index] = {
      ...newItems[index],
      [field]: field === 'quantity' || field === 'price' ? parseFloat(value) || 0 : value
    };
    setInvoiceData(prev => ({
      ...prev,
      items: newItems
    }));
  };

  const addItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, { name: '', quantity: 1, price: 0 }]
    }));
  };

  const removeItem = (index) => {
    if (invoiceData.items.length > 1) {
      const newItems = invoiceData.items.filter((_, i) => i !== index);
      setInvoiceData(prev => ({
        ...prev,
        items: newItems
      }));
    }
  };

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => {
      return total + (item.quantity * item.price);
    }, 0);
  };

  const handleGenerateInvoice = () => {
    const total = calculateTotal();
    const finalInvoiceData = {
      ...invoiceData,
      total,
      invoiceNumber: `INV-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    onGenerateInvoice(finalInvoiceData);
  };

  return (
    <div className='min-h-screen w-full p-2 lg:p-4'>
      <div className='InvoiceHeader py-6 lg:py-8 rounded-lg mb-4'>
        <h1 className='text-xl lg:text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer px-4 lg:px-0 text-center'>Generate Invoice</h1>
      </div>
      
      <div className='flex justify-center'>
        <div className='w-full max-w-4xl'>
          <div className='bg-secondary rounded-lg p-6 lg:p-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
              <div>
                <h3 className='text-lg text-textColor font-bold mb-4'>Customer Information</h3>
                <div className='space-y-4'>
                  <div>
                    <label className='block text-textColor text-sm mb-1'>Customer Name</label>
                    <input
                      type="text"
                      value={invoiceData.customerName}
                      onChange={(e) => handleInputChange('customerName', e.target.value)}
                      className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                      placeholder="Enter customer name"
                    />
                  </div>
                  <div>
                    <label className='block text-textColor text-sm mb-1'>Email</label>
                    <input
                      type="email"
                      value={invoiceData.customerEmail}
                      onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                      className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className='block text-textColor text-sm mb-1'>Phone</label>
                    <input
                      type="tel"
                      value={invoiceData.customerPhone}
                      onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                      className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className='text-lg text-textColor font-bold mb-4'>Invoice Summary</h3>
                <div className='bg-primary rounded-lg p-4'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-textColor'>Total Items:</span>
                    <span className='text-textColor font-bold'>{invoiceData.items.length}</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-textColor'>Total Amount:</span>
                    <span className='text-textColor font-bold text-lg'>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='mb-6'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-lg text-textColor font-bold'>Invoice Items</h3>
                <button
                  onClick={addItem}
                  className='bg-green px-4 py-2 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                >
                  Add Item
                </button>
              </div>
              
              <div className='space-y-4'>
                {invoiceData.items.map((item, index) => (
                  <div key={index} className='grid grid-cols-1 lg:grid-cols-4 gap-4 items-end'>
                    <div>
                      <label className='block text-textColor text-sm mb-1'>Item Name</label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                        className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                        placeholder="Enter item name"
                      />
                    </div>
                    <div>
                      <label className='block text-textColor text-sm mb-1'>Quantity</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                        className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                      />
                    </div>
                    <div>
                      <label className='block text-textColor text-sm mb-1'>Price</label>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.price}
                        onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                        className='w-full p-3 bg-primary text-textColor rounded-lg border border-textColor focus:outline-none focus:ring-2 focus:ring-tertiary'
                      />
                    </div>
                    <div className='flex gap-2'>
                      <div className='flex-1'>
                        <label className='block text-textColor text-sm mb-1'>Subtotal</label>
                        <div className='p-3 bg-primary text-textColor rounded-lg border border-textColor'>
                          ${(item.quantity * item.price).toFixed(2)}
                        </div>
                      </div>
                      {invoiceData.items.length > 1 && (
                        <button
                          onClick={() => removeItem(index)}
                          className='bg-red px-3 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors'
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className='flex justify-center'>
              <button
                onClick={handleGenerateInvoice}
                className='bg-tertiary px-8 py-3 text-textColor rounded-lg hover:bg-opacity-80 transition-colors text-lg font-semibold'
              >
                Generate Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice; 