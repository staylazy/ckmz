import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import '../css/Dropzone.css';

export function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        console.log('Имя файла:', file.name);
        console.log('Содержимое файла:', reader.result); // временно
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} />
      <p className='uploadClass'>Загрузить файл</p>
    </div>
  );
}
