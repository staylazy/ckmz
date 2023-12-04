import React, { useState, useEffect } from 'react';
import '../css/Dropzone.css';

const Dropzone = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch('http://localhost:8000/api/get_uploaded_files/'); // Replace with your backend API endpoint
        const data = await response.json();
        console.log(data)
        setFileList(data.files || []);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    }
    fetchFiles();
  }, []);

  const renderFiles = (files) => {
    if (files.length === 0) {
      return <p>No files available</p>;
    }

    return (
      <ul >
        {files.map((file, index) => (
          <li className='test' key={index}><a href='http://localhost:8000/test'>{file}</a></li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2 className='test'>File System</h2>
      {renderFiles(fileList)}
    </div>
  );
};

export default Dropzone;
