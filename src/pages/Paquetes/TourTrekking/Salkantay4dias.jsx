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
import imagen1 from "../TourTrekking/imageSalkantay/imagen_ (1).webp"
import imagen2 from "../TourTrekking/imageSalkantay/imagen_ (2).webp"
import imagen3 from "../TourTrekking/imageSalkantay/imagen_ (3).webp"
import imagen4 from "../TourTrekking/imageSalkantay/imagen_ (4).webp"
import imagen5 from "../TourTrekking/imageSalkantay/imagen_ (5).webp"
//imagenes de resumen
import resumen1 from '../TourTrekking/imageSalkantay/resumen1.webp';
import resumen2 from '../TourTrekking/imageSalkantay/resumen2.webp';
import resumen3 from '../TourTrekking/imageSalkantay/resumen3.webp';
import resumen4 from '../TourTrekking/imageSalkantay/resumen4.webp';
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
import TourCarousel from "../PaquetesComponentes/Card";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaSalkantay4Dias } from "../../../seo/schema/trekkingTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`Salkantay4dias.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`Salkantay4dias.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const Salkantay4dias = () => {
    const { t, i18n } = useTranslation('trekking');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('Salkantay4dias.images.alt1') },
        { src: imagen2, alt: t('Salkantay4dias.images.alt2') },
        { src: imagen3, alt: t('Salkantay4dias.images.alt3') },
        { src: imagen4, alt: t('Salkantay4dias.images.alt4') },
        { src: imagen5, alt: t('Salkantay4dias.images.alt5') },
    ];
    const dias = [
        {
            dia: "1",
            titulo: t('Salkantay4dias.resumen.dia1.titulo'),
            descripcion: t('Salkantay4dias.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('Salkantay4dias.resumen.dia2.titulo'),
            descripcion: t('Salkantay4dias.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            dia: "3",
            titulo: t('Salkantay4dias.resumen.dia3.titulo'),
            descripcion: t('Salkantay4dias.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('Salkantay4dias.resumen.dia4.titulo'),
            descripcion: t('Salkantay4dias.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        }
    ];
    const puntosClave = t('Salkantay4dias.puntosClave', { returnObjects: true });
    const descripcion = t('Salkantay4dias.descripcion', { returnObjects: true });
    const itinerarioNew = t('Salkantay4dias.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('Salkantay4dias.incluye', { returnObjects: true });
    const noIncluye = t('Salkantay4dias.noIncluye', { returnObjects: true });
    const queLlevar = t('Salkantay4dias.queLlevar', { returnObjects: true });
    const importante = t('Salkantay4dias.importante', { returnObjects: true });
    const categories = [
        { category: 'trekking', id: [2] },
        { category: 'machuPicchu', id: [1, 2] },
        { category: 'fullDays', id: [1] },
        { category: 'cusco', id: [1, 3] },
    ];

    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("Salkantay4dias.seo", { returnObjects: true });
    const schemaData = getSchemaSalkantay4Dias(i18n.language);
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
            <BannerCarrucel titulo={t('Salkantay4dias.title')} dias={t('Salkantay4dias.day')} items={images} precio={"420.00"} puntosClave={puntosClave} duracion={t('Salkantay4dias.details.duracion')} dificultad={t('Salkantay4dias.details.nivel')} grupo={t('Salkantay4dias.details.grupo')} altitud={"4,600 m / 15,090 ft"} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('Salkantay4dias.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}