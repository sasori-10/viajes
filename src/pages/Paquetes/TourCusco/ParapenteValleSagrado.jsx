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
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
import TourCarousel from "../PaquetesComponentes/Card";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
//importando imagenes 
import imagen1 from "../TourCusco/imageParapenteValleSagrado/imagen_ (1).webp"
import imagen2 from "../TourCusco/imageParapenteValleSagrado/imagen_ (2).webp"
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaParapente } from "../../../seo/schema/cuscoTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`Parapente.itinerario.${index}.titulo`),
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`Parapente.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};
export const ParapenteValleSagrado = () => {
    const { t, i18n } = useTranslation('cuscoFullDay');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const images = [
        { src: imagen1, alt: t('Parapente.images.alt1') },
        { src: imagen2, alt: t('Parapente.images.alt2') },
    ];
    const descripcion = t('Parapente.descripcion');
    const puntosClave = t('Parapente.puntosClave', { returnObjects: true });
    const itinerarioNew = t('Parapente.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('Parapente.incluye', { returnObjects: true });
    const noIncluye = t('Parapente.noIncluye', { returnObjects: true });
    const extras = t('Parapente.extras', { returnObjects: true });
    const queLlevar = t('Parapente.queLlevar', { returnObjects: true });
    const importante = t('Parapente.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'machuPicchu', id: [1] },
        { category: 'trekking', id: [1, 4] },
        { category: 'fullDays', id: [9] },
        { category: 'cusco', id: [1, 6] },
    ];
    const seoData = t("Parapente.seo", { returnObjects: true });
    const schemaData = getSchemaParapente(i18n.language);
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
            <BannerCarrucel titulo={t('Parapente.title')} dias={t('Parapente.day')} items={images} precio={"120.00"} puntosClave={puntosClave} duracion={t('Parapente.details.duracion')} altitud={"3,500 m / 11,482 ft"} dificultad={t('Parapente.details.nivel')} grupo={t('Parapente.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('Parapente.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}




