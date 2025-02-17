//componentes de la barra de informacion
import { MenuInfo } from "../PaquetesComponentes/menuInfo";
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando los componentes de la parte inferior
import TourCarousel from "../PaquetesComponentes/Card";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
//importando iconos necesarios
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando imagenes
import imagen1 from "./imageToursMachuPicchu/machupicchuTren/imagen_(1).webp"
import imagen2 from "./imageToursMachuPicchu/machupicchuTren/imagen_(2).webp"
import imagen3 from "./imageToursMachuPicchu/machupicchuTren/imagen_(3).webp"
import imagen4 from "./imageToursMachuPicchu/machupicchuTren/imagen_(4).webp"
import imagen5 from "./imageToursMachuPicchu/machupicchuTren/imagen_(5).webp"
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaMachuPicchuTren } from "../../../seo/schema/machupicchuTours";

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`machuPicchuTren.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`machuPicchuTren.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const MachuPicchuTren = () => {
    const { t, i18n } = useTranslation('machuPicchuTours');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('machuPicchuTren.images.alt1') },
        { src: imagen2, alt: t('machuPicchuTren.images.alt2') },
        { src: imagen3, alt: t('machuPicchuTren.images.alt3') },
        { src: imagen4, alt: t('machuPicchuTren.images.alt4') },
        { src: imagen5, alt: t('machuPicchuTren.images.alt5') },
    ];
    const puntosClave = t('machuPicchuTren.puntosClave', { returnObjects: true });
    const itinerarioNew = t('machuPicchuTren.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const descripcion = t('machuPicchuTren.descripcion', { returnObjects: true });
    const incluye = t('machuPicchuTren.incluye', { returnObjects: true });
    const noIncluye = t('machuPicchuTren.noIncluye', { returnObjects: true });
    const extras = t('machuPicchuTren.extras', { returnObjects: true });
    const queLlevar = t('machuPicchuTren.queLlevar', { returnObjects: true });
    const importante = t('machuPicchuTren.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'machuPicchu', id: [2, 3] },
        { category: 'cusco', id: [1, 2] },
        { category: 'fullDays', id: [1, 2] },
    ];
    const seoData = t("machuPicchuTren.seo", { returnObjects: true });
    const schemaData = getSchemaMachuPicchuTren(i18n.language);
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
            <BannerCarrucel titulo={t('machuPicchuTren.title')} dias={t('machuPicchuTren.day')} items={images} precio={"250.00"} puntosClave={puntosClave} duracion={t('machuPicchuTren.details.duracion')} dificultad={t('machuPicchuTren.details.nivel')} grupo={t('machuPicchuTren.details.grupo')} altitud={"2,430 m / 7,972 ft"} wetravel={"https://www.wetravel.com/trips/machupicchu-full-day-machupicchu-by-world-43590972"} />
            <Descripcion lugares={t('machuPicchuTren.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/machupicchu-full-day-machupicchu-by-world-43590972"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}