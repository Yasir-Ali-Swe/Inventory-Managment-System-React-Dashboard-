import React, { useState } from 'react'
import { Invoice as InvoiceComponent, InvoicePreview } from '../components/index.jsx';

const Invoice = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);

  const handleGenerateInvoice = (data) => {
    setInvoiceData(data);
    setIsPreview(true);
  };

  const handleBackToInvoice = () => {
    setIsPreview(false);
    setInvoiceData(null);
  };

  return (
    <>
      {!isPreview ? (
        <InvoiceComponent onGenerateInvoice={handleGenerateInvoice} />
      ) : (
        <InvoicePreview 
          invoiceData={invoiceData} 
          onBackToInvoice={handleBackToInvoice} 
        />
      )}
    </>
  )
}

export default Invoice;