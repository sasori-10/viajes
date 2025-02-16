import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css'; // Importa los estilos

const Carousel = ({ images, slideSpeed = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, slideSpeed);

        return () => clearInterval(interval);
    }, [images.length, slideSpeed]);

    return (
        <div className={styles.carouselContainer}>
            <div
                className={styles.carouselInner}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((img, index) => (
                    <div key={index} className={styles.carouselItem}>
                        <img src={img} alt={`Imagen ${index}`} className={styles.carouselImage} />
                    </div>
                ))}
            </div>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    slideSpeed: PropTypes.number,
};

export default Carousel;
