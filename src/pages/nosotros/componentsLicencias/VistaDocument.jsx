import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import styles from './VistaDocument.module.css'; // Importa el módulo de estilos

const VistaDocument = ({ src, alt, titulo }) => {
    return (
        <PhotoProvider>
            <div className={styles.galleryContainer}>
                <div className={styles.imageWrapper}>
                    <PhotoView src={src}>
                        <img
                            src={src}
                            alt={alt}
                            className={styles.galleryImage}
                        />
                    </PhotoView>
                </div>
                <p className={styles.imageTitle}>{titulo}</p>
            </div>
        </PhotoProvider>
    );
};

export default VistaDocument;
