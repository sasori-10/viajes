import PropTypes from 'prop-types';
import styles from './CarrucelPaquetes.module.css';
import { IoCameraOutline } from "react-icons/io5";

const CarouselWrapper = ({ images }) => {
    return (
        <div className={styles.CarruselPaquetes}>
            <div className={styles.ScrollContent}>
                <IoCameraOutline className={styles.iconScroll} />
                <h2 className={styles.TextoScroll}>FOTOS DEL TOUR</h2>
            </div>
            <div className={styles.CarruselContenedor}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Foto del tour ${index + 1}`}
                        className={styles.CarruselImagen}
                    />
                ))}
            </div>
        </div>
    );
};

CarouselWrapper.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CarouselWrapper;
