import styles from './Descripcion.module.css'
import PropTypes from 'prop-types'
import { MdPlace } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
//importando la traduccion
import { useTranslation } from 'react-i18next';

export const Descripcion = ({ lugares, descripcion, wetravel }) => {
    const { t, i18n } = useTranslation('fixed');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <div className={styles.Descripcion}>
            <div className={styles.DescripcionContent}>
                <div className={styles.DescripcionText}>
                    <h3><MdPlace style={{ color: '#006d3b', fontSize: '1.8rem', paddingLeft: '0', flexShrink: '0' }} />{lugares}</h3>
                    <p>{descripcion}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <a className={styles.ButtonLink} href={wetravel} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className={styles.btnReservar}>{t('iconsInfo.buttonReservar')}</button>
                    </a>
                    <a className={styles.ButtonLink} href="https://wa.me/51940842722" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className={styles.btnWhatsapp}>
                            <IoLogoWhatsapp className={styles.whatsappIcon} />
                            <div className={styles.textContainer}>
                                <span>{t('iconsInfo.buttonWhatsapp')}</span>
                                <span className={styles.number}>+51 940 842 722</span>
                            </div>
                        </button>
                    </a>
                    <button className={styles.btnEmail} onClick={() => window.location.href = "mailto:reservasmapibyworld@gmail.com"}>
                        <TfiEmail className={styles.emailIcon} />
                        <div>
                            {t('iconsInfo.buttonEmail')}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
Descripcion.propTypes = {
    lugares: PropTypes.string.isRequired, // lugares debe ser una cadena y es requerido
    descripcion: PropTypes.string.isRequired, // descripcion debe ser una cadena y es requerido
    wetravel: PropTypes.string.isRequired, // wetravel debe ser una cadena y es requerido
};

