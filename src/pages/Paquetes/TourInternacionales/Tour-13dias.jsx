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
import imagen1 from "../TourInternacionales/imageTour13dias/imagen_(1).webp"
import imagen2 from "../TourInternacionales/imageTour13dias/imagen_(2).webp"
import imagen3 from "../TourInternacionales/imageTour13dias/imagen_(3).webp"
import imagen4 from "../TourInternacionales/imageTour13dias/imagen_(4).webp"
import imagen5 from "../TourInternacionales/imageTour13dias/imagen_(5).webp"
import imagen6 from "../TourInternacionales/imageTour13dias/imagen_(6).webp"
import imagen7 from "../TourInternacionales/imageTour13dias/imagen_(7).webp"
import imagen8 from "../TourInternacionales/imageTour13dias/imagen_(8).webp"
import imagen9 from "../TourInternacionales/imageTour13dias/imagen_(9).webp"
import imagen10 from "../TourInternacionales/imageTour13dias/imagen_(10).webp"
import imagen11 from "../TourInternacionales/imageTour13dias/imagen_(11).webp"
import imagen12 from "../TourInternacionales/imageTour13dias/imagen_(12).webp"
import imagen13 from "../TourInternacionales/imageTour13dias/imagen_(13).webp"
//Importando imagenes del carrucel
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
import { getSchema13Dias } from "../../../seo/schema/interTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`13dias.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion ? item.descripcion.map((desc, descIndex) =>
            t(`13dias.itinerario.${index}.descripcion.${descIndex}`)
        ) : [],
        incluye: item.incluye ? item.incluye.map((incl, inclIndex) =>
            t(`13dias.itinerario.${index}.incluye.${inclIndex}`)
        ) : [],
        noIncluye: item.noIncluye ? item.noIncluye.map((noIncl, noInclIndex) =>
            t(`13dias.itinerario.${index}.noIncluye.${noInclIndex}`)
        ) : []
    }));
};

export const Tour13dias = () => {
    const { t, i18n } = useTranslation('interTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('13dias.images.alt1') },
        { src: imagen2, alt: t('13dias.images.alt2') },
        { src: imagen3, alt: t('13dias.images.alt3') },
        { src: imagen4, alt: t('13dias.images.alt4') },
        { src: imagen5, alt: t('13dias.images.alt5') },
        { src: imagen6, alt: t('13dias.images.alt6') },
        { src: imagen7, alt: t('13dias.images.alt7') },
        { src: imagen8, alt: t('13dias.images.alt8') },
        { src: imagen9, alt: t('13dias.images.alt9') },
        { src: imagen10, alt: t('13dias.images.alt10') },
        { src: imagen11, alt: t('13dias.images.alt11') },
        { src: imagen12, alt: t('13dias.images.alt12') },
        { src: imagen13, alt: t('13dias.images.alt13') }
    ];
    const puntosClave = t('13dias.puntosClave', { returnObjects: true });
    const descripcion = t('13dias.descripcion', { returnObjects: true });
    const itinerarioNew = t('13dias.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('13dias.incluye', { returnObjects: true });
    const noIncluye = t('13dias.noIncluye', { returnObjects: true });
    const extras = t('13dias.extras', { returnObjects: true });
    const queLlevar = t('13dias.queLlevar', { returnObjects: true });
    const importante = t('13dias.importante', { returnObjects: true });
    const categories = [
        { category: 'international', id: [1, 2] },
        { category: 'trekking', id: [2, 4] },
        { category: 'machuPicchu', id: [1, 3] },
    ];

    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("13dias.seo", { returnObjects: true });
    const schemaData = getSchema13Dias(i18n.language);
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
            <BannerCarrucel titulo={t('13dias.title')} dias={t('13dias.day')} items={images} precio={"1350.00"} puntosClave={puntosClave} duracion={t('13dias.details.duracion')} dificultad={t('13dias.details.nivel')} grupo={t('13dias.details.grupo')} altitud={"5,036 m / 16,520 ft"} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('13dias.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
