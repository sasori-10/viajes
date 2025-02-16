//importando estilos
import styles from "./HomePrincipal.module.css"
//importando componentes
import CounterNumber from "./componentsHome/CountNumber"
//importando imagenes
import Tripadvisor from '../../assets/images/travel-choice-2024.webp';
import Miradas from '../../assets/images/miradas-awards.webp';
import Visa from '../../assets/images/Metodos-pago-visa.webp';
import Izipay from '../../assets/images/logo-izipay.webp';
import western from '../../assets/images/Western-Union-Logo.webp';
import YapePlin from '../../assets/images/yape-y-plin-logo.webp';
import Wetravel from '../../assets/images/wetravel.webp';
//importando iconos
import { VideoHero } from "./componentsHome/VideoHero";
import { HomeRazon } from "../../components/layouts/HomeRazon";
import { HomeInstituciones } from "../../components/layouts/HomeInstituciones";
import { Link } from "react-router-dom";
//importando imagenes 
import GoogleReviews from "./componentsHome/GoogleReviews";
import TripadvisorReviews from "./componentsHome/TripadvisorReviews";
import { FaRegCompass } from "react-icons/fa";
//importando iconos para las cards
import IconoMontana from '../home/iconTour/mountain.svg';
import IconoMachuPicchu from '../home/iconTour/machu-picchu.jpg';
import CarrucelCard from "../Paquetes/PaquetesComponentes/CarrucelCards";
//implementando las traducciones
import { useTranslation } from 'react-i18next';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getHomeSchema } from "../../../src/seo/schema/machupicchuTours";

export const HomePrincipal = () => {
    const categoriesMachuPicchu = [
        { category: 'machuPicchu', id: [1] },
        { category: 'cusco', id: [4] },
        { category: 'fullDays', id: [2] },
        { category: 'trekking', id: [2] },
        { category: 'peru', id: [5] },
        { category: 'fullDays', id: [5] },
    ];
    const categoriesPeru = [
        { category: 'cusco', id: [2] },
        { category: 'machuPicchu', id: [2] },
        { category: 'fullDays', id: [1] },
        { category: 'trekking', id: [3] },
        { category: 'peru', id: [3] },
        { category: 'fullDays', id: [9] },
    ];
    const categoriesAventura = [
        { category: 'trekking', id: [5] },
        { category: 'fullDays', id: [6] },
        { category: 'international', id: [3] },
        { category: 'cusco', id: [6] },
        { category: 'fullDays', id: [3] },
        { category: 'fullDays', id: [4] },
    ];
    const { t, i18n } = useTranslation('home');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const seoData = t("seo", { returnObjects: true });
    const schemaData = getHomeSchema(i18n.language);
    return (
        <>
            {/* importando los metadatos del helmet */}
            <Helmet>
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.meta_description} />
                <meta name="keywords" content={seoData.keywords.join(", ")} />
                <link rel="canonical" href={seoData.canonical_url} />

                {/* Open Graph */}
                <meta property="og:title" content={seoData.open_graph.title} />
                <meta property="og:description" content={seoData.open_graph.description} />
                <meta property="og:image" content={seoData.open_graph.image} />
                <meta property="og:url" content={seoData.open_graph.url} />
                <meta property="og:type" content={seoData.open_graph.type} />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            <VideoHero />
            <div className={styles.homeDescripcion}>
                <div className={styles.homeText}>
                    <h2 className={styles.homeTitulo}>{t('homeDescripcion.title1')} <span className={styles.homeTituloResaltado}> MachuPicchu By World</span> {t('homeDescripcion.title2')}</h2>
                    <p className={styles.homeOracion}>{t('homeDescripcion.paragraph')} </p>
                </div>
                <Link to="/about-us" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <button className={styles.buttonHome}>{t('homeDescripcion.moreInfo')}</button>
                </Link>
            </div>
            <div className={styles.homeContainer}>
                <div className={styles.CounterNumber}>
                    <CounterNumber label={t('CounterNumber.completedTours')} endValue={1000} />
                    <CounterNumber label={t('CounterNumber.happyTravelers')} endValue={500} />
                    <CounterNumber label={t('CounterNumber.yearsOfExperience')} endValue={6} />
                </div>
                <div className={styles.homeReconocimientos}>
                    <div className={styles.homeReconocimientosImage}>
                        <img
                            className={styles.Tripadvisor}
                            src={Tripadvisor}
                            alt="Tripadvisor Award"
                        />
                        <img
                            className={styles.Miradas}
                            src={Miradas}
                            alt="Miradas Award"
                        />
                    </div>
                    <h2>{t('CounterNumber.ourRecognitions')}</h2>
                </div>
            </div>
            <div className={styles.RazonContainer}>
                <HomeRazon />
            </div>
            <div className={styles.ScrollContent}>
                <div className={styles.TextContainer}>
                    <img className={styles.MachuPicchuIcon} src={IconoMachuPicchu} alt="Icono Montana" width="80" height="80" />
                    <h2 className={styles.TextoScroll}>{t('AventuraCards.title1')} <span className={styles.TextoScrollGreen}>Machu Picchu</span></h2>
                    <p className={styles.TextoScrollSubtitulo}>{t('AventuraCards.subtitle')}</p>
                    <CarrucelCard categories={categoriesMachuPicchu} />
                </div>
            </div>
            <div className={styles.ScrollContent}>
                <img className={styles.MontanaIcon} src={IconoMontana} alt="Icono Montana" width="70" height="70" />
                <h2 className={styles.TextoScroll}><span className={styles.TextoScrollGreen}>{t('TesorosCards.title1')}</span> {t('TesorosCards.title2')}</h2>
                <p className={styles.TextoScrollSubtitulo}>{t('TesorosCards.subtitle')}</p>
                <CarrucelCard categories={categoriesPeru} />
            </div>
            <div className={styles.ScrollContent}>
                <FaRegCompass className={styles.CompasIcon} />
                <h2 className={styles.TextoScroll}><span className={styles.TextoScrollGreen}>{t('ExtremosCards.title1')}</span> {t('ExtremosCards.title2')}</h2>
                <p className={styles.TextoScrollSubtitulo}>{t('ExtremosCards.subtitle')}</p>
                <CarrucelCard categories={categoriesAventura} />
            </div>
            <div className={styles.homeReview}>
                <TripadvisorReviews />
                <GoogleReviews />
            </div>
            <HomeInstituciones />
            <div className={styles.homeMethodPay}>
                <h2>{t('metodosPago.title')}</h2>
                <p>{t('metodosPago.subtitle')}</p>
                <div className={styles.homeMethodPayImage}>
                    <img className={styles.ImageVisa} src={Visa} />
                    <img className={styles.ImageIzipay} src={Izipay} />
                    <img className={styles.ImageWestern} src={western} />
                    <img className={styles.ImageYape} src={YapePlin} />
                    <img className={styles.ImageWetravel} src={Wetravel} />
                </div>
            </div>
        </>
    )
} 
