import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { Resumen } from "../PaquetesComponentes/componentsMenuInfo/Resumen";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando iconos necesarios
import { FaBookOpen } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes
import imagen1 from "../TourInternacionales/imageMedellin/imagen_ (1).webp"
import imagen2 from "../TourInternacionales/imageMedellin/imagen_ (2).webp"
import imagen3 from "../TourInternacionales/imageMedellin/imagen_ (3).webp"
import imagen4 from "../TourInternacionales/imageMedellin/imagen_ (4).webp"
import imagen5 from "../TourInternacionales/imageMedellin/imagen_ (5).webp"
//imagenes de resumen
import resumen1 from '../TourInternacionales/imageMedellin/resumen1.webp';
import resumen2 from '../TourInternacionales/imageMedellin/resumen2.webp';
import resumen3 from '../TourInternacionales/imageMedellin/resumen3.webp';
import resumen4 from '../TourInternacionales/imageMedellin/resumen4.webp';
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
import { getSchemaMedellin } from "../../../seo/schema/interTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`Medellin.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`Medellin.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};


export const Medellin = () => {
    const { t, i18n } = useTranslation('interTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('Medellin.images.alt1') },
        { src: imagen2, alt: t('Medellin.images.alt2') },
        { src: imagen3, alt: t('Medellin.images.alt3') },
        { src: imagen4, alt: t('Medellin.images.alt4') },
        { src: imagen5, alt: t('Medellin.images.alt5') },
    ];
    const puntosClave = t('Medellin.puntosClave', { returnObjects: true });

    const dias = [
        {
            dia: "1",
            titulo: t('Medellin.resumen.dia1.titulo'),
            descripcion: t('Medellin.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('Medellin.resumen.dia2.titulo'),
            descripcion: t('Medellin.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            dia: "3",
            titulo: t('Medellin.resumen.dia3.titulo'),
            descripcion: t('Medellin.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('Medellin.resumen.dia4.titulo'),
            descripcion: t('Medellin.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        },
        {
            dia: "5",
            titulo: t('Medellin.resumen.dia5.titulo'),
            descripcion: t('Medellin.resumen.dia5.descripcion'),
            imagenes: [resumen4]
        }
    ];
    const descripcion = t('Medellin.descripcion', { returnObjects: true });
    const itinerarioNew = t('Medellin.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('Medellin.incluye', { returnObjects: true });
    const noIncluye = t('Medellin.noIncluye', { returnObjects: true });
    const queLlevar = t('Medellin.queLlevar', { returnObjects: true });
    const importante = t('Medellin.importante', { returnObjects: true });
    const categories = [
        { category: 'peru', id: [3, 6] },
        { category: 'international', id: [2, 4] },
        { category: 'cusco', id: [1, 2] },
    ];
    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("Medellin.seo", { returnObjects: true });
    const schemaData = getSchemaMedellin(i18n.language);
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
            <BannerCarrucel titulo={t('Medellin.title')} dias={t('Medellin.day')} items={images} precio={"480.00"} puntosClave={puntosClave} duracion={t('Medellin.details.duracion')} altitud={"2,135 m / 7,005 ft"} dificultad={t('Medellin.details.nivel')} grupo={t('Medellin.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('Medellin.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
