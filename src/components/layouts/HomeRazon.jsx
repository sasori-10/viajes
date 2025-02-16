import { FcOk } from "react-icons/fc"
import Carousel from "../../pages/home/componentsHome/Carousel"
import styles from './HomeRazon.module.css'
import NuestroEquipo from '../../assets/images/NuestroEquipo/nuestro-equipo.webp'
import NuestroEquipo2 from '../../assets/images/NuestroEquipo/nuestro-equipo2.webp'
import NuestroEquipoPremiacion from '../../assets/images/NuestroEquipo/nuestro-equipo-premiacion.webp'
import { useTranslation } from 'react-i18next';

export const HomeRazon = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const destinations = [
        { region: t('homeRazon.destinations.cusco'), places: [t('homeRazon.destinations.machuPicchu'), t('homeRazon.destinations.valleSagrado'), t('homeRazon.destinations.montanaColores')] },
        { region: t('homeRazon.destinations.arequipa'), places: [t('homeRazon.destinations.valleColca'), t('homeRazon.destinations.rutaSillar')] },
        { region: t('homeRazon.destinations.tarapoto'), places: [t('homeRazon.destinations.amazonRichness')] },
        { region: t('homeRazon.destinations.puno'), places: [t('homeRazon.destinations.lagoTiticaca'), t('homeRazon.destinations.islasFlotantes')] },
        { region: t('homeRazon.destinations.icaNazca'), places: [t('homeRazon.destinations.dunaHuacachina'), t('homeRazon.destinations.lineasNazca')] },
        { region: t('homeRazon.destinations.international'), places: [t('homeRazon.destinations.colombia'), t('homeRazon.destinations.brazil'), t('homeRazon.destinations.bolivia')] }
    ];
    return (
        <div className={styles.homeRazon}>
            <h2>{t('homeRazon.title1')}<span className={styles.homeTituloResaltado}> MACHU PICCHU BY WORLD</span> {t('homeRazon.title2')}</h2>
            <div className={styles.homeRazonContent}>
                <div className={styles.homeRazonTexto}>
                    <p>
                        <span className={styles.homeTituloResaltado}><b>MACHU PICCHU BY WORLD</b></span> {t('homeRazon.description')}  {t('homeRazon.additionalInfo')}
                    </p>
                    <ul>
                        {destinations.map((destination, index) => (
                            <li key={index} className={styles.homeRazonTextoLista}>
                                <FcOk style={{ marginRight: "8px" }} />
                                <b>{destination.region}: </b>{destination.places.join(", ")}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.homeRazonCarrucel}>
                    <Carousel images={[NuestroEquipo, NuestroEquipoPremiacion, NuestroEquipo2]} slideSpeed={5000} />
                </div>
            </div>
        </div>
    )
}
