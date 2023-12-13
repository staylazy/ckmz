import React, { useState, useEffect } from 'react';
import '../css/Dropzone.css';

const Dropzone = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch('http://localhost:8000/api/get_uploaded_files/');
        const data = await response.json();
        console.log(data);
        setFileList(data.files || []);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    }
    fetchFiles();
  }, []);

  return (
    <div className='main_div'>
      <p className='title'>Список литературы:</p>
      <ul>
        {fileList.map((file, index) => (
          <li className='literature_list' key={index}>
            <a href={`http://localhost:8000/api/download_file/${file}`} download>{file}</a>
          </li>
        ))}
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
        <li className='test_text'>Lorem</li>
      </ul>
      <p className='soon'>Скоро здесь будут новые файлы...</p>
    </div>
  );
};

export default Dropzone;
