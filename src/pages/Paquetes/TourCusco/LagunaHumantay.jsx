import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
/* import  Resumen  from "../PaquetesComponentes/componentsMenuInfo/Resumen" */
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando iconos necesarios
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes
import imagen1 from "../TourCusco/imageLagunaHumantay/imagen_(1).webp"
import imagen2 from "../TourCusco/imageLagunaHumantay/imagen_(2).webp"
import imagen3 from "../TourCusco/imageLagunaHumantay/imagen_(3).webp"
import imagen4 from "../TourCusco/imageLagunaHumantay/imagen_(4).webp"
import imagen5 from "../TourCusco/imageLagunaHumantay/imagen_(5).webp"
import imagen6 from "../TourCusco/imageLagunaHumantay/imagen_(6).webp"
//imagenes de carrucel
import TourCarousel from "../PaquetesComponentes/Card";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaLagunaHumantay } from "../../../seo/schema/cuscoTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`LagunaHumantay.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`LagunaHumantay.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const LagunaHumantay = () => {
    const { t, i18n } = useTranslation('cuscoTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('LagunaHumantay.images.alt1') },
        { src: imagen2, alt: t('LagunaHumantay.images.alt2') },
        { src: imagen3, alt: t('LagunaHumantay.images.alt3') },
        { src: imagen4, alt: t('LagunaHumantay.images.alt4') },
        { src: imagen5, alt: t('LagunaHumantay.images.alt5') },
        { src: imagen6, alt: t('LagunaHumantay.images.alt6') },
    ];
    const descripcion = t('LagunaHumantay.descripcion', { returnObjects: true });
    const puntosClave = t('LagunaHumantay.puntosClave', { returnObjects: true });
    const itinerarioNew = t('LagunaHumantay.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('LagunaHumantay.incluye', { returnObjects: true });
    const noIncluye = t('LagunaHumantay.noIncluye', { returnObjects: true });
    const extras = t('LagunaHumantay.extras', { returnObjects: true });
    const queLlevar = t('LagunaHumantay.queLlevar', { returnObjects: true });
    const importante = t('LagunaHumantay.importante', { returnObjects: true });
    const categories = [
        { category: 'peru', id: [2, 6] },
        { category: 'fullDays', id: [4] },
        { category: 'cusco', id: [3, 4] },
        { category: 'international', id: [2] },
    ];

    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("LagunaHumantay.seo", { returnObjects: true });
    const schemaData = getSchemaLagunaHumantay(i18n.language);
    return (
        <>
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
            <BannerCarrucel titulo={t('LagunaHumantay.title')} dias={t('LagunaHumantay.day')} items={images} precio={"32.00"} puntosClave={puntosClave} duracion={t('LagunaHumantay.details.duracion')} altitud={"4,200 m / 13,780 ft"} dificultad={t('LagunaHumantay.details.nivel')} grupo={t('LagunaHumantay.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('LagunaHumantay.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
