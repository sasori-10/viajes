import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { Resumen } from "../PaquetesComponentes/componentsMenuInfo/Resumen";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
/* import  Resumen  from "../PaquetesComponentes/componentsMenuInfo/Resumen" */
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando iconos necesarios
import { FaBookOpen } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes
import imagen1 from "../TourTrekking/imageInkajungle/imagen_(1).webp"
import imagen2 from "../TourTrekking/imageInkajungle/imagen_(2).webp"
import imagen3 from "../TourTrekking/imageInkajungle/imagen_(3).webp"
import imagen4 from "../TourTrekking/imageInkajungle/imagen_(4).webp"
import imagen5 from "../TourTrekking/imageInkajungle/imagen_(5).webp"
//imagenes de resumen
import resumen1 from '../TourTrekking/imageInkaJungle/resumen1.webp';
import resumen2 from '../TourTrekking/imageInkaJungle/resumen2.webp';
import resumen3 from '../TourTrekking/imageInkaJungle/resumen3.webp';
import resumen4 from '../TourTrekking/imageInkaJungle/resumen4.webp';
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
import { getSchemaIncaJungle } from "../../../seo/schema/trekkingTours"


const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`InkaJungle.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`InkaJungle.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const InkaJungle = () => {
    const { t, i18n } = useTranslation('trekking');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('InkaJungle.images.alt1') },
        { src: imagen2, alt: t('InkaJungle.images.alt2') },
        { src: imagen3, alt: t('InkaJungle.images.alt3') },
        { src: imagen4, alt: t('InkaJungle.images.alt4') },
        { src: imagen5, alt: t('InkaJungle.images.alt5') },
    ];
    const dias = [
        {
            dia: "1",
            titulo: t('InkaJungle.resumen.dia1.titulo'),
            descripcion: t('InkaJungle.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('InkaJungle.resumen.dia2.titulo'),
            descripcion: t('InkaJungle.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            dia: "3",
            titulo: t('InkaJungle.resumen.dia3.titulo'),
            descripcion: t('InkaJungle.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('InkaJungle.resumen.dia4.titulo'),
            descripcion: t('InkaJungle.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        },
    ];
    const puntosClave = t('InkaJungle.puntosClave', { returnObjects: true });
    const descripcion = t('InkaJungle.descripcion', { returnObjects: true });
    const itinerarioNew = t('InkaJungle.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('InkaJungle.incluye', { returnObjects: true });
    const noIncluye = t('InkaJungle.noIncluye', { returnObjects: true });
    const queLlevar = t('InkaJungle.queLlevar', { returnObjects: true });
    const importante = t('InkaJungle.importante', { returnObjects: true });
    const categories = [
        { category: 'trekking', id: [2] },
        { category: 'fullDays', id: [8] },
        { category: 'cusco', id: [5] },
        { category: 'peru', id: [2, 3, 5] },
    ];
    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("InkaJungle.seo", { returnObjects: true });
    const schemaData = getSchemaIncaJungle(i18n.language)
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
            <BannerCarrucel titulo={t('InkaJungle.title')} dias={t('InkaJungle.day')} items={images} precio={"450.00"} puntosClave={puntosClave} duracion={t('InkaJungle.details.duracion')} dificultad={t('InkaJungle.details.nivel')} grupo={t('InkaJungle.details.grupo')} altitud={"4,600 m / 15,090 ft"} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('InkaJungle.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}