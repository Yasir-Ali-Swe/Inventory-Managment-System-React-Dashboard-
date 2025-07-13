import React from 'react'

const InvoicePreview = ({ invoiceData, onBackToInvoice }) => {
  if (!invoiceData) {
    return (
      <div className='h-full w-full px-2'>
        <div className='InvoiceHeader py-11 bg-secondary'>
          <h1 className='text-2xl text-textColor font-bold'>No Invoice Data</h1>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    onBackToInvoice();
  };

  return (
    <div className='h-full w-full px-2'>
      <div className='InvoiceHeader py-11 bg-secondary flex justify-between items-center'>
        <h1 className='text-2xl text-textColor font-bold hover:text-tertiary cursor-pointer'>Invoice Preview</h1>
        <div className='flex gap-4'>
          <button
            onClick={handlePrint}
            className='bg-blue py-2 px-6 text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-all'
          >
            Print Invoice
          </button>
          <button
            onClick={handleBack}
            className='bg-red py-2 px-6 text-lg text-textColor rounded-lg hover:bg-opacity-80 transition-all'
          >
            Back to Invoice
          </button>
        </div>
      </div>
      
      <div className='my-2 mx-3'>
        <div className="invoice-preview border border-textColor p-3 rounded-md bg-secondary">
          {/* Invoice Header */}
          <div className='text-center mb-4'>
            <h1 className='text-xl text-textColor font-bold mb-1'>INVOICE</h1>
            <p className='text-textColor text-xs'>Inventory Management System</p>
          </div>

          {/* Invoice Details */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
                              <h3 className='text-base text-textColor font-bold mb-2'>Invoice Details</h3>
                <div className='space-y-1'>
                  <p className='text-textColor text-sm'><span className='font-bold'>Invoice #:</span> {invoiceData.invoiceNumber}</p>
                  <p className='text-textColor text-sm'><span className='font-bold'>Date:</span> {invoiceData.date}</p>
                  <p className='text-textColor text-sm'><span className='font-bold'>Status:</span> <span className='text-green font-bold'>PAID</span></p>
                </div>
            </div>
                          <div>
                <h3 className='text-base text-textColor font-bold mb-2'>Customer Information</h3>
                <div className='space-y-1'>
                  <p className='text-textColor text-sm'><span className='font-bold'>Name:</span> {invoiceData.customerInfo.name}</p>
                  <p className='text-textColor text-sm'><span className='font-bold'>Contact:</span> {invoiceData.customerInfo.contact}</p>
                </div>
              </div>
          </div>

          {/* Products Table */}
          <div className='mb-4'>
            <h3 className='text-base text-textColor font-bold mb-2'>Items</h3>
            <div className='overflow-x-auto max-h-32'>
              <table className='w-full border border-textColor'>
                <thead className='bg-primary sticky top-0'>
                  <tr>
                    <th className='px-3 py-2 text-left text-textColor font-bold text-sm'>Item</th>
                    <th className='px-3 py-2 text-left text-textColor font-bold text-sm'>Category</th>
                    <th className='px-3 py-2 text-center text-textColor font-bold text-sm'>Quantity</th>
                    <th className='px-3 py-2 text-right text-textColor font-bold text-sm'>Unit Price</th>
                    <th className='px-3 py-2 text-right text-textColor font-bold text-sm'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.products.map((product, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}>
                      <td className='px-3 py-2 text-textColor text-sm'>{product.name}</td>
                      <td className='px-3 py-2 text-textColor text-sm'>{product.category}</td>
                      <td className='px-3 py-2 text-center text-textColor text-sm'>{product.quantity}</td>
                      <td className='px-3 py-2 text-right text-textColor text-sm'>${product.salesPrice.toFixed(2)}</td>
                      <td className='px-3 py-2 text-right text-textColor text-sm font-bold'>${product.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bill Summary */}
          <div className='flex justify-end'>
            <div className='bg-primary p-3 rounded-lg border border-textColor w-64'>
              <h3 className='text-sm text-textColor font-bold mb-2'>Bill Summary</h3>
                              <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-textColor text-sm'>Subtotal:</span>
                    <span className='text-textColor text-sm'>${invoiceData.subtotal.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-textColor text-sm'>Tax (15%):</span>
                    <span className='text-textColor text-sm'>${invoiceData.tax.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between border-t border-textColor pt-1'>
                    <span className='text-textColor font-bold text-base'>Total:</span>
                    <span className='text-textColor font-bold text-base'>${invoiceData.total.toFixed(2)}</span>
                  </div>
                </div>
            </div>
          </div>

          {/* Footer */}
          <div className='mt-4 pt-2 border-t border-textColor text-center'>
            <p className='text-textColor text-xs'>Thank you for your business!</p>
            <p className='text-textColor text-xs'>This is a computer generated invoice</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoicePreview; 