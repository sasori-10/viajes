import styles from "./Banner.module.css";
import PropTypes from "prop-types";

export const Banner = ({ src, alt, titulo, dias, precio }) => {
    return (
        <div className={styles.imageContainer}>
            <img src={src} alt={alt} className={styles.image} />
            <div className={styles.textOverlay}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>{titulo}</h1>
                    <div className={styles.separadorHorizontal}></div>
                    <div className={styles.textDetalles}>
                        <p className={styles.dias}>{dias}</p>
                        <div className={styles.separador}></div>
                        <p className={styles.precio}>DESDE ${precio} USD POR PERSONA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    dias: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
};
