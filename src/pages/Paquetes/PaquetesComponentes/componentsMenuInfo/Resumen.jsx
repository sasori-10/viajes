import styles from './Resumen.module.css';
import PropTypes from 'prop-types';
//importando la traduccion
import { useTranslation } from 'react-i18next';

const Resumen = ({ dias }) => {
    const { t, i18n } = useTranslation('fixed');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    if (!dias || dias.length === 0) {
        return <p>No hay información disponible sobre los días del tour.</p>;
    }

    return (
        <div className={styles.ResumenPrincipal}>
            <h2 className={styles.ResumenTitulo}>{t('menuInfo.resumen.name')}</h2>
            {dias.map(({ dia, titulo, descripcion, imagenes }, index) => (
                <div className={styles.ResumenContent} key={index}>
                    {/* Imagen */}
                    <div className={styles.ResumenImage}>
                        <h3>{t('menuInfo.resumen.day')} {dia}</h3>
                        {imagenes.map((img, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={img}
                                alt={`Imagen del día ${index + 1}`}
                                className={styles.Image} // Añadido para personalización
                            />
                        ))}
                    </div>
                    <div className={styles.ResumenSeparador}></div>
                    {/* Texto */}
                    <div className={styles.ResumenText}>
                        <h3>{titulo}</h3>
                        <p>{descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

Resumen.propTypes = {
    dias: PropTypes.arrayOf(
        PropTypes.shape({
            titulo: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
            imagenes: PropTypes.arrayOf(PropTypes.string).isRequired, // Asegura un array de strings
        })
    ).isRequired,
};

export { Resumen };
