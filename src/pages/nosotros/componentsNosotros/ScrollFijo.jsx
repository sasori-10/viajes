import PropTypes from 'prop-types';
import styles from './ScrollFijo.module.css';

const ScrollFijo = ({ imageUrl, children, height }) => {
    return (
        <div
            className={styles.ScrollFijo}
            style={{
                backgroundImage: `url(${imageUrl})`,
                height: height || '80vh', // Usa el valor pasado o el valor por defecto
            }}
        >
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

// Definimos las PropTypes para validar las propiedades
ScrollFijo.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    height: PropTypes.string,
};

export default ScrollFijo;
