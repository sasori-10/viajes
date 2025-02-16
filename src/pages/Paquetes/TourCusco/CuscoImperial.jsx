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
//importando imagenes del resumen
//importando imagenes
import imagen1 from "../TourCusco/imageTourCuscoImperial/imagen_ (1).webp"
import imagen2 from "../TourCusco/imageTourCuscoImperial/imagen_ (2).webp"
import imagen3 from "../TourCusco/imageTourCuscoImperial/imagen_ (3).webp"
import imagen4 from "../TourCusco/imageTourCuscoImperial/imagen_ (4).webp"
import imagen5 from "../TourCusco/imageTourCuscoImperial/imagen_ (5).webp"
import imagen6 from "../TourCusco/imageTourCuscoImperial/imagen_ (6).webp"
import imagen7 from "../TourCusco/imageTourCuscoImperial/imagen_ (7).webp"
//imagenes de resumen
import resumen1 from '../TourCusco/imageTourCuscoImperial/resumen1.webp';
import resumen2 from '../TourCusco/imageTourCuscoImperial/resumen2.webp';
import resumen3 from '../TourCusco/imageTourCuscoImperial/resumen3.webp';
import resumen4 from '../TourCusco/imageTourCuscoImperial/resumen4.webp';
import resumen5 from '../TourCusco/imageTourCuscoImperial/resumen5.webp';
import resumen6 from '../TourCusco/imageTourCuscoImperial/resumen6.webp';
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
import { getSchemaCuscoImperial } from "../../../seo/schema/cuscoTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`CuscoImperial.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`CuscoImperial.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const CuscoImperial = () => {
    const { t, i18n } = useTranslation('cuscoTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('CuscoImperial.images.alt1') },
        { src: imagen2, alt: t('CuscoImperial.images.alt2') },
        { src: imagen3, alt: t('CuscoImperial.images.alt3') },
        { src: imagen4, alt: t('CuscoImperial.images.alt4') },
        { src: imagen5, alt: t('CuscoImperial.images.alt5') },
        { src: imagen6, alt: t('CuscoImperial.images.alt6') },
        { src: imagen7, alt: t('CuscoImperial.images.alt7') },
    ];
    const puntosClave = t('CuscoImperial.puntosClave', { returnObjects: true });
    const dias = [
        {
            dia: "1",
            titulo: t('CuscoImperial.resumen.dia1.titulo'),
            descripcion: t('CuscoImperial.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('CuscoImperial.resumen.dia2.titulo'),
            descripcion: t('CuscoImperial.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            dia: "3",
            titulo: t('CuscoImperial.resumen.dia3.titulo'),
            descripcion: t('CuscoImperial.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('CuscoImperial.resumen.dia4.titulo'),
            descripcion: t('CuscoImperial.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        },
        {
            dia: "5",
            titulo: t('CuscoImperial.resumen.dia5.titulo'),
            descripcion: t('CuscoImperial.resumen.dia5.descripcion'),
            imagenes: [resumen5]
        },
        {
            dia: "6",
            titulo: t('CuscoImperial.resumen.dia6.titulo'),
            descripcion: t('CuscoImperial.resumen.dia6.descripcion'),
            imagenes: [resumen6]
        }
    ];
    const descripcion = t('CuscoImperial.descripcion', { returnObjects: true });
    const itinerarioNew = t('CuscoImperial.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('CuscoImperial.incluye', { returnObjects: true });
    const noIncluye = t('CuscoImperial.noIncluye', { returnObjects: true });
    const queLlevar = t('CuscoImperial.queLlevar', { returnObjects: true });
    const importante = t('CuscoImperial.importante', { returnObjects: true });
    const categories = [
        { category: 'machuPicchu', id: [1] },
        { category: 'trekking', id: [5] },
        { category: 'cusco', id: [1, 2] },
        { category: 'international', id: [1, 2] },
    ];
    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("CuscoImperial.seo", { returnObjects: true });
    const schemaData = getSchemaCuscoImperial(i18n.language);
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
            <BannerCarrucel titulo={t('CuscoImperial.title')} dias={t('CuscoImperial.day')} items={images} precio={"520.00"} puntosClave={puntosClave} duracion={t('CuscoImperial.details.duracion')} altitud={"5,036 m / 16,520 ft"} dificultad={t('CuscoImperial.details.nivel')} grupo={t('CuscoImperial.details.grupo')} wetravel={"https://www.wetravel.com/trips/cusco-imperial-machupicchu-by-world-17200341"} />
            <Descripcion lugares={t('CuscoImperial.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-imperial-machupicchu-by-world-17200341"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}