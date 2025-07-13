import React, { useState } from 'react'
import { DummyProductData } from "../pages/DummyData.js";

const Invoice = ({ onGenerateInvoice }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    contact: ''
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = DummyProductData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = (product) => {
    const existingProduct = selectedProducts.find(p => p.name === product.name);
    
    if (existingProduct) {
      setSelectedProducts(prev => prev.map(p => 
        p.name === product.name 
          ? { ...p, quantity: p.quantity + 1, total: (p.quantity + 1) * p.salesPrice }
          : p
      ));
    } else {
      setSelectedProducts(prev => [...prev, {
        ...product,
        quantity: 1,
        total: product.salesPrice
      }]);
    }
  };

  const handleQuantityChange = (productName, newQuantity) => {
    if (newQuantity <= 0) {
      setSelectedProducts(prev => prev.filter(p => p.name !== productName));
    } else {
      setSelectedProducts(prev => prev.map(p => 
        p.name === productName 
          ? { ...p, quantity: newQuantity, total: newQuantity * p.salesPrice }
          : p
      ));
    }
  };

  const calculateSubtotal = () => {
    return selectedProducts.reduce((sum, product) => sum + product.total, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.15; // 15% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleGenerateInvoice = () => {
    if (!customerInfo.name || !customerInfo.contact || selectedProducts.length === 0) {
      alert('Please fill customer details and add at least one product');
      return;
    }

    const invoiceData = {
      customerInfo,
      products: selectedProducts,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      total: calculateTotal(),
      invoiceNumber: `INV-${Date.now()}`,
      date: new Date().toLocaleDateString()
    };

    console.log('Invoice Data:', invoiceData);
    onGenerateInvoice(invoiceData);
  };

  return (
    <div className='h-full w-full px-2'>
      <div className='InvoiceHeader py-11 bg-secondary'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Generate Invoice</h1>
      </div>
      
      <div className='my-2 mx-3 h-[calc(100vh-180px)] overflow-y-auto'>
        <div className="invoice-container border border-textColor p-3 rounded-md bg-secondary min-h-fit">
          {/* Customer Information */}
          <div className='mb-4'>
            <h2 className='text-lg text-textColor font-bold mb-3'>Customer Information</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Customer Name *</label>
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleCustomerInfoChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className='block text-textColor text-sm font-bold mb-1'>Contact Number *</label>
                <input
                  type="tel"
                  name="contact"
                  value={customerInfo.contact}
                  onChange={handleCustomerInfoChange}
                  className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                  required
                  placeholder="Enter contact number"
                />
              </div>
            </div>
          </div>

          {/* Product Selection */}
          <div className='mb-3'>
            <h2 className='text-lg text-textColor font-bold mb-2'>Select Products</h2>
            <div className='mb-2'>
              <input
                type="text"
                placeholder="Search products by name or category"
                className='w-full py-2 px-3 text-textColor rounded-lg focus:outline-none focus:ring-2 focus:ring-textColor border-2 border-textColor bg-primary'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-32 overflow-y-auto">
              {filteredProducts.map((product, index) => (
                <div key={index} className='bg-primary p-3 rounded-lg border border-textColor'>
                  <h3 className='text-textColor font-bold text-sm'>{product.name}</h3>
                  <p className='text-textColor text-xs'>Category: {product.category}</p>
                  <p className='text-textColor text-xs'>Price: ${product.salesPrice}</p>
                  <p className='text-textColor text-xs'>Available: {product.availableUnits}</p>
                  <button
                    onClick={() => handleAddProduct(product)}
                    className='bg-green py-1 px-2 text-xs text-textColor rounded mt-2 hover:bg-opacity-80 transition-all'
                  >
                    Add to Invoice
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Products */}
          {selectedProducts.length > 0 && (
            <div className='mb-4'>
              <h2 className='text-lg text-textColor font-bold mb-3'>Invoice Items</h2>
              <div className="selected-products space-y-2 max-h-24">
                {selectedProducts.map((product, index) => (
                  <div key={index} className='bg-primary p-3 rounded-lg border border-textColor flex justify-between items-center'>
                    <div className='flex-1'>
                      <h3 className='text-textColor font-bold text-sm'>{product.name}</h3>
                      <p className='text-textColor text-xs'>${product.salesPrice} each</p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center gap-2'>
                        <label className='text-textColor text-xs'>Qty:</label>
                        <input
                          type="number"
                          min="1"
                          max={product.availableUnits}
                          value={product.quantity}
                          onChange={(e) => handleQuantityChange(product.name, parseInt(e.target.value) || 0)}
                          className='w-16 py-1 px-2 text-textColor rounded border border-textColor bg-secondary text-xs'
                        />
                      </div>
                      <div className='text-textColor font-bold text-sm'>
                        ${product.total.toFixed(2)}
                      </div>
                      <button
                        onClick={() => handleQuantityChange(product.name, 0)}
                        className='bg-red py-1 px-2 text-xs text-textColor rounded hover:bg-opacity-80 transition-all'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bill Summary */}
          {selectedProducts.length > 0 && (
            <div className='mb-4'>
              <h2 className='text-lg text-textColor font-bold mb-3'>Bill Summary</h2>
                              <div className='bg-primary p-3 rounded-lg border border-textColor'>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-textColor'>Subtotal:</span>
                    <span className='text-textColor'>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-textColor'>Tax (15%):</span>
                    <span className='text-textColor'>${calculateTax().toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between border-t border-textColor pt-2'>
                    <span className='text-textColor font-bold text-lg'>Total:</span>
                    <span className='text-textColor font-bold text-lg'>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Generate Invoice Button */}
          <div className='flex justify-center mt-3 pb-2'>
            <button
              onClick={handleGenerateInvoice}
              className='bg-green py-2 px-6 text-base text-textColor rounded-lg hover:bg-opacity-80 transition-all font-bold'
            >
              Generate Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice; 