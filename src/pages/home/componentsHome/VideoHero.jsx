import video from '../../../assets/video/videoHero.mp4'
import styles from './VideoHero.module.css'
import VideoTripadvisor from '../../../assets/video/travel-choice-2024.webp'
import VideoRegistrada from '../../../assets/video/agencia-registrada.webp'
import VideoMiradas from '../../../assets/video/miradas-awards.webp'
import { useTranslation } from 'react-i18next';

export const VideoHero = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
        <section className={styles.Hero}>
            <div className={styles.HeroContent}>
                <h1>{t("VideoHero.title")}<br />{t("VideoHero.title2")}</h1>
                <p>{t("VideoHero.paragraph1")} <br /> {t("VideoHero.paragraph2")}</p>
            </div>
            <div className={styles.HeroImage}>
                <img src={VideoTripadvisor} alt="Imagen de certificación de TripAdvisor" />
                <img src={VideoRegistrada} alt="Imagen de certificación de agencia" />
                <img src={VideoMiradas} alt="Imagen de premio Miradas 2024" />
            </div>
            <div className={styles.HeroVideo}>
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
        </section>
    )
}