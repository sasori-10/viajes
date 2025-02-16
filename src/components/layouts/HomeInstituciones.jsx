import AgenciaRegistrada from '../../assets/images/agencia-registrada.webp'
import TripadvisorCertificacion from '../../assets/images/Certificate-of-Excellence-TripAdvisor.webp'
import TurismoResponsable from '../../assets/images/turismo-responsable.webp'
import Gercetur from '../../assets/images/gercetur.webp'
import Mincetur from '../../assets/images/mincetur_logo.webp'
import Trekking from '../../assets/images/trekking-certificacion.webp'
import miradas from '../../assets/images/miradas-awards.webp'
//importando estilos
import styles from './HomeInstituciones.module.css'
//implementando las traducciones
import { useTranslation } from 'react-i18next';

export const HomeInstituciones = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.homeBehindUs}>
            <h2>{t('homeInstitucion.name')}</h2>
            <div className={styles.homeBehindUsImage}>
                <img className={styles.Gercetur} src={Gercetur} alt={t('homeInstitucion.imagen1.alt')} />
                <img className={styles.TurismoResponsable} src={TurismoResponsable} alt={t('homeInstitucion.imagen2.alt')}/>
                <img className={styles.TripadvisorCertificacion} src={TripadvisorCertificacion} alt={t('homeInstitucion.imagen3.alt')} />
                <img className={styles.AgenciaRegistrada} src={AgenciaRegistrada} alt={t('homeInstitucion.imagen4.alt')} />
                <img className={styles.Calidad} src={miradas} alt={t('homeInstitucion.imagen5.alt')} />
                <img className={styles.Trekking} src={Trekking} alt={t('homeInstitucion.imagen6.alt')} />
                <img className={styles.Mincetur} src={Mincetur} alt={t('homeInstitucion.imagen7.alt')}/>
            </div>
        </div>
    )
}
