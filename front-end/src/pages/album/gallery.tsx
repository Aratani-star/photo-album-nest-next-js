import { useState, useEffect } from 'react';
import styles from '../../styles/Gallery.module.css';

const images = [
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 1' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 2' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 3' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 4' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 5' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 6' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 7' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 8' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 9' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 10' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 11' },
  { src: 'https://images.pexels.com/photos/12004890/pexels-photo-12004890.jpeg', name: 'Image 1', description: 'This is the description for Image 12' },
];

export default function Gallery() {
  const [modalData, setModalData] = useState(null);
  const [data, setData] = useState(null);

  const openModal = (image) => {
    setModalData(image);
  };

  const closeModal = () => {
    setModalData(null);
  };

  useEffect(() => {
    fetch('https://localhost:5000/images')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
      }).catch(err => {
        console.log(err)
      });
  }, []);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gallery</h1>
      <div className={styles.grid}>
        {
          images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={image.src}
                alt={image.name}
                className={styles.image}
                onClick={() => openModal(image)}
              />
              <div className={styles.imageName}>{image.name}</div>
            </div>
          ))
        }
      </div>

      {modalData && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalData.src} alt={modalData.name} className={styles.modalImage} />
            <p className={styles.modalDescription}>{modalData.description}</p>
            <button className={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}