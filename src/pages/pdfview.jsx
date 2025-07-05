// PDFViewer.js
import React from 'react';
import Pdfurl from './pdfs/11.pdf'; // Adjust the path as necessary
const PDFViewer = () => {

    const filename = Pdfurl.split('/').pop(); // Extract the filename from the URL
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src={Pdfurl}
        title={filename}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default PDFViewer;
