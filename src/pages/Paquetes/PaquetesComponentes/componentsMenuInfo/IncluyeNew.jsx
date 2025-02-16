import PropTypes from 'prop-types';
import styles from './Incluye.module.css'; // Archivo CSS para estilos
import { FaCheckCircle } from "react-icons/fa"; // Ícono para "incluye"
import { IoMdCloseCircle } from "react-icons/io"; // Ícono para "no incluye"
//importando la traduccion
import { useTranslation } from 'react-i18next';

const IncluyeNew = ({ incluye = [], noIncluye = [] }) => {
    const { t, i18n } = useTranslation('fixed');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={styles.contenedor}>
            {/* INCLUYE */}
            <div className={styles.item}>
                <h3 className={styles.titulo}>{/* NUESTROS SERVICIOS INCLUYEN */}{t('menuInfo.incluye')}</h3>
                <ul className={styles.lista}>
                    {incluye.length > 0 ? (
                        incluye.map((item, index) => (
                            <li key={`incluye-${index}`} className={styles.itemIncluye}>
                                <FaCheckCircle className={styles.icono} />
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className={styles.itemIncluye}>No hay elementos incluidos</li>
                    )}
                </ul>
            </div>

            {/* NO INCLUYE */}
            <div className={styles.item}>
                <h3 className={styles.titulo}>{t('menuInfo.noIncluye')}</h3>
                <ul className={styles.lista}>
                    {noIncluye.length > 0 ? (
                        noIncluye.map((item, index) => (
                            <li key={`noIncluye-${index}`} className={styles.itemNoIncluye}>
                                <IoMdCloseCircle className={styles.iconoNoIncluye} />
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className={styles.itemNoIncluye}>No hay elementos excluidos</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

IncluyeNew.propTypes = {
    incluye: PropTypes.arrayOf(PropTypes.string).isRequired,
    noIncluye: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IncluyeNew;
