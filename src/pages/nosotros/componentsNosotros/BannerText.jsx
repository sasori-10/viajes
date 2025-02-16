import styles from "./BannerText.module.css";
import PropTypes from "prop-types";


export const BannerText = ({ src, alt, titulo, subtitulo}) => {
    return (
        <div className={styles.imageContainer}>
            <img src={src} alt={alt} className={styles.image} />
            <div className={styles.textOverlay}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>{titulo}</h1>
                    <p className={styles.subtitulo}>{subtitulo}</p>
                </div>
            </div>
        </div>
    );
};

BannerText.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
};