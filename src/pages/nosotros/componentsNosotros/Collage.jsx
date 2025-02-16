import Masonry from 'react-masonry-css';
import styles from './Collage.module.css'; // Importa el CSS Module

const Collage = ({ images }) => {
    return (
        <div className={styles.collageContainer}>
            <Masonry
                breakpointCols={3} // Número de columnas en el grid para pantallas grandes
                className={styles.myMasonryGrid} // Usa la clase del módulo
                columnClassName={styles.myMasonryGridColumn} // Usa la clase del módulo
            >
                {images.map((image, index) => (
                    <div key={index} className={styles.collageItem}>  {/* Usa la clase del módulo */}
                        <img src={image.src} alt={`Collage Image ${index + 1}`} />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default Collage;