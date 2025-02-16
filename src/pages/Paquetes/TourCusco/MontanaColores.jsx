import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
/* import  Resumen  from "../PaquetesComponentes/componentsMenuInfo/Resumen" */
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando iconos necesarios
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes
import imagen1 from "../TourCusco/imageMontanaColores/imagen_ (1).webp"
import imagen2 from "../TourCusco/imageMontanaColores/imagen_ (2).webp"
import imagen3 from "../TourCusco/imageMontanaColores/imagen_ (3).webp"
import imagen4 from "../TourCusco/imageMontanaColores/imagen_ (4).webp"
import imagen5 from "../TourCusco/imageMontanaColores/imagen_ (5).webp"
//imagenes de resumen
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
import { getSchemaRainbowMountain } from "../../../seo/schema/cuscoTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`MontanaColores.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`MontanaColores.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const MontanaColores = () => {
    const { t, i18n } = useTranslation('cuscoTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('MontanaColores.images.alt1') },
        { src: imagen2, alt: t('MontanaColores.images.alt2') },
        { src: imagen3, alt: t('MontanaColores.images.alt3') },
        { src: imagen4, alt: t('MontanaColores.images.alt4') },
        { src: imagen5, alt: t('MontanaColores.images.alt5') },
    ];
    const descripcion = t('MontanaColores.descripcion', { returnObjects: true });
    const puntosClave = t('MontanaColores.puntosClave', { returnObjects: true });
    const itinerarioNew = t('MontanaColores.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('MontanaColores.incluye', { returnObjects: true });
    const noIncluye = t('MontanaColores.noIncluye', { returnObjects: true });
    const queLlevar = t('MontanaColores.queLlevar', { returnObjects: true });
    const importante = t('MontanaColores.importante', { returnObjects: true });
    const categories = [
        { category: 'peru', id: [1, 5] },
        { category: 'fullDays', id: [3] },
        { category: 'cusco', id: [1, 2] },
        { category: 'international', id: [1] },
    ];

    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("MontanaColores.seo", { returnObjects: true });
    const schemaData = getSchemaRainbowMountain(i18n.language);
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
            <BannerCarrucel titulo={t('MontanaColores.title')} dias={t('MontanaColores.day')} items={images} precio={"35.00"} puntosClave={puntosClave} duracion={t('MontanaColores.details.duracion')} altitud={"5,036 m / 16,520 ft"} dificultad={t('MontanaColores.details.nivel')} grupo={t('MontanaColores.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('MontanaColores.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
