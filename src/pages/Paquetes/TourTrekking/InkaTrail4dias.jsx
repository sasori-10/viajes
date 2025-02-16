import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { Resumen } from "../PaquetesComponentes/componentsMenuInfo/Resumen";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
/* import  Resumen  from "../PaquetesComponentes/componentsMenuInfo/Resumen" */
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando iconos necesarios
import { FaBookOpen, FaPlusCircle } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes
import imagen1 from "../TourTrekking/imageInkatrail4dias/imagen_ (1).webp"
import imagen2 from "../TourTrekking/imageInkatrail4dias/imagen_ (2).webp"
import imagen3 from "../TourTrekking/imageInkatrail4dias/imagen_ (3).webp"
import imagen4 from "../TourTrekking/imageInkatrail4dias/imagen_ (4).webp"
import imagen5 from "../TourTrekking/imageInkatrail4dias/imagen_ (5).webp"
//imagenes de resumen
import resumen1 from '../TourTrekking/imageInkaTrail4dias/resumen1.webp';
import resumen2 from '../TourTrekking/imageInkaTrail4dias/resumen2.webp';
import resumen3 from '../TourTrekking/imageInkaTrail4dias/resumen3.webp';
import resumen4 from '../TourTrekking/imageInkaTrail4dias/resumen4.webp';
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
import { getSchemaInkaTrail4Dias } from "../../../seo/schema/trekkingTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`InkaTrail4dias.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`InkaTrail4dias.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const InkaTrail4dias = () => {
    const { t, i18n } = useTranslation('trekking');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('InkaTrail4dias.images.alt1') },
        { src: imagen2, alt: t('InkaTrail4dias.images.alt2') },
        { src: imagen3, alt: t('InkaTrail4dias.images.alt3') },
        { src: imagen4, alt: t('InkaTrail4dias.images.alt4') },
        { src: imagen5, alt: t('InkaTrail4dias.images.alt5') },
    ];

    const dias = [
        {
            dia: "1",
            titulo: t('InkaTrail4dias.resumen.dia1.titulo'),
            descripcion: t('InkaTrail4dias.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('InkaTrail4dias.resumen.dia2.titulo'),
            descripcion: t('InkaTrail4dias.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            dia: "3",
            titulo: t('InkaTrail4dias.resumen.dia3.titulo'),
            descripcion: t('InkaTrail4dias.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('InkaTrail4dias.resumen.dia4.titulo'),
            descripcion: t('InkaTrail4dias.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        },
    ];
    const puntosClave = t('InkaTrail4dias.puntosClave', { returnObjects: true });
    const descripcion = t('InkaTrail4dias.descripcion', { returnObjects: true });
    const itinerarioNew = t('InkaTrail4dias.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('InkaTrail4dias.incluye', { returnObjects: true });
    const noIncluye = t('InkaTrail4dias.noIncluye', { returnObjects: true });
    const extras = t('InkaTrail4dias.extras', { returnObjects: true });
    const queLlevar = t('InkaTrail4dias.queLlevar', { returnObjects: true });
    const importante = t('InkaTrail4dias.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'trekking', id: [1, 5] },
        { category: 'fullDays', id: [6, 7] },
        { category: 'cusco', id: [4] },
        { category: 'peru', id: [1] },
    ];
    const seoData = t("InkaTrail4dias.seo", { returnObjects: true });
    const schemaData = getSchemaInkaTrail4Dias(i18n.language)
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
            <BannerCarrucel titulo={t('InkaTrail4dias.title')} dias={t('InkaTrail4dias.day')} items={images} precio={"790.00"} puntosClave={puntosClave} duracion={t('InkaTrail4dias.details.duracion')} dificultad={t('InkaTrail4dias.details.nivel')} grupo={t('InkaTrail4dias.details.grupo')} altitud={"4,200 m / 13,780 ft"} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('InkaTrail4dias.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}