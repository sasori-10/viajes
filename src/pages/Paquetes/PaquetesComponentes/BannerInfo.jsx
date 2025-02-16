import styles from './Bannerinfo.module.css'
import { FaCalendarCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMountain } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import PropTypes from 'prop-types';

export const BannerInfo = ({ duracion, grupo, altitud, dificultad}) => {
    return (
        <div className={styles.barra}>
            <div className={styles.seccion}>
                <i className={styles.icono}><FaCalendarCheck /></i>
                <div className={styles.textoContainer}>
                    <p className={styles.tema}>Duración</p>
                    <p className={styles.descripcion}>{duracion}</p>
                </div>
            </div>
            <div className={styles.seccion}>
                <i className={styles.icono}><FaUsers /></i>
                <div className={styles.textoContainer}>
                    <p className={styles.tema}>Tamaño De Grupo</p>
                    <p className={styles.descripcion}>{grupo}</p>
                </div>
            </div>
            <div className={styles.seccion}>
                <i className={styles.icono}><FaMountain /></i>
                <div className={styles.textoContainer}>
                    <p className={styles.tema}>Altitud Max.</p>
                    <p className={styles.descripcion}>{altitud}</p>
                </div>
            </div>
            <div className={styles.seccion}>
                <i className={styles.icono}><GiNetworkBars /></i>
                <div className={styles.textoContainer}>
                    <p className={styles.tema}>Dificultad</p>
                    <p className={styles.descripcion}>{dificultad}</p>
                </div>
            </div>
        </div>
    )
}
BannerInfo.propTypes = {
    duracion: PropTypes.string.isRequired,
    grupo: PropTypes.string.isRequired,
    altitud: PropTypes.string.isRequired,
    dificultad: PropTypes.string.isRequired
};


