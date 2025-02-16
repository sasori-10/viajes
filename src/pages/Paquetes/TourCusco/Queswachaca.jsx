import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando iconos necesarios
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes del resumen
import imagen1 from "../TourCusco/imageQueswachaca/imagen_ (1).webp"
import imagen2 from "../TourCusco/imageQueswachaca/imagen_ (2).webp"
import imagen3 from "../TourCusco/imageQueswachaca/imagen_ (3).webp"
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
import { getSchemaQueswachaca } from "../../../seo/schema/cuscoTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`Queswachaca.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`Queswachaca.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};
export const Queswachaca = () => {
    const { t, i18n } = useTranslation('cuscoFullDay');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('Queswachaca.images.alt1') },
        { src: imagen2, alt: t('Queswachaca.images.alt2') },
        { src: imagen3, alt: t('Queswachaca.images.alt3') },
    ];
    const descripcion = t('Queswachaca.descripcion', { returnObjects: true });
    const puntosClave = t('Queswachaca.puntosClave', { returnObjects: true });
    const itinerarioNew = t('Queswachaca.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('Queswachaca.incluye', { returnObjects: true });
    const noIncluye = t('Queswachaca.noIncluye', { returnObjects: true });
    const extras = t('Queswachaca.extras', { returnObjects: true });
    const queLlevar = t('Queswachaca.queLlevar', { returnObjects: true });
    const importante = t('Queswachaca.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'machuPicchu', id: [3] },
        { category: 'trekking', id: [1, 4] },
        { category: 'fullDays', id: [10] },
        { category: 'cusco', id: [3, 6] },
    ];
    const seoData = t("Queswachaca.seo", { returnObjects: true });
    const schemaData = getSchemaQueswachaca(i18n.language);
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
            <BannerCarrucel titulo={t('Queswachaca.title')} dias={t('Queswachaca.day')} items={images} precio={"40.00"} puntosClave={puntosClave} duracion={t('Queswachaca.details.duracion')} altitud={"3,600 m / 11,811 ft"} dificultad={t('Queswachaca.details.nivel')} grupo={t('Queswachaca.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('Queswachaca.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}




