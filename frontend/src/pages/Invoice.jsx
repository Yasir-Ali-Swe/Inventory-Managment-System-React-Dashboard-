import React, { useState } from 'react'
import { Invoice as InvoiceComponent, InvoicePreview } from '../components/index.jsx';

const InvoicePage = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);

  console.log('InvoicePage component render - isPreview:', isPreview, 'invoiceData:', invoiceData);

  const handleGenerateInvoice = (data) => {
    console.log('handleGenerateInvoice called with data:', data);
    setInvoiceData(data);
    setIsPreview(true);
    console.log('State updated - isPreview:', true, 'invoiceData:', data);
  };

  const handleBackToInvoice = () => {
    setIsPreview(false);
    setInvoiceData(null);
    console.log('State reset - back to invoice form');
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

export default InvoicePage;