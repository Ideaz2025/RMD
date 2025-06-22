// PDFViewer.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PDFViewer = () => {
  const { filename } = useParams();
  const pdfUrl = `/${filename}`; // Assumes PDF in /public folder

  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src={pdfUrl}
        title={filename}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default PDFViewer;
