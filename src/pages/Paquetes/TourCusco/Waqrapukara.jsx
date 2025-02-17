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
//importando imagenes del resumen
import imagen1 from "../TourCusco/imageWaqrapukara/imagen_(1).webp"
import imagen2 from "../TourCusco/imageWaqrapukara/imagen_(2).webp"
//importando fotos al slide
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
import { getSchemaWaqrapukara } from "../../../seo/schema/cuscoTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`Waqrapukara.itinerario.${index}.titulo`),
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`Waqrapukara.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const Waqrapukara = () => {
    const { t, i18n } = useTranslation('cuscoFullDay');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('Waqrapukara.images.alt1') },
        { src: imagen2, alt: t('Waqrapukara.images.alt2') },
    ];
    const descripcion = t('Waqrapukara.descripcion', { returnObjects: true });
    const puntosClave = t('Waqrapukara.puntosClave', { returnObjects: true });
    const itinerarioNew = t('Waqrapukara.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('Waqrapukara.incluye', { returnObjects: true });
    const noIncluye = t('Waqrapukara.noIncluye', { returnObjects: true });
    const extras = t('Waqrapukara.extras', { returnObjects: true });
    const queLlevar = t('Waqrapukara.queLlevar', { returnObjects: true });
    const importante = t('Waqrapukara.importante', { returnObjects: true });
    const categories = [
        { category: 'peru', id: [1, 3] },
        { category: 'fullDays', id: [1] },
        { category: 'cusco', id: [1, 3, 6] },
    ];
    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("Waqrapukara.seo", { returnObjects: true });
    const schemaData = getSchemaWaqrapukara(i18n.language);
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
            <BannerCarrucel titulo={t('Waqrapukara.title')} dias={t('Waqrapukara.day')} items={images} precio={"40.00"} puntosClave={puntosClave} duracion={t('Waqrapukara.details.duracion')} altitud={"4,330 m / 14,138 ft"} dificultad={t('Waqrapukara.details.nivel')} grupo={t('Waqrapukara.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('Waqrapukara.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/ montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}




