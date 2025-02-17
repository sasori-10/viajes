import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
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
import { FaPlusCircle } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes del resumen
import imagen1 from "../TourCusco/imageTourCuscoAventurero/imagen_(1).webp"
import imagen2 from "../TourCusco/imageTourCuscoAventurero/imagen_(2).webp"
import imagen3 from "../TourCusco/imageTourCuscoAventurero/imagen_(3).webp"
import imagen4 from "../TourCusco/imageTourCuscoAventurero/imagen_(4).webp"
import imagen5 from "../TourCusco/imageTourCuscoAventurero/imagen_(5).webp"
//importando imagenes
//imagenes de resumen
import resumen1 from '../TourCusco/imageTourCuscoAventurero/resumen1.webp';
import resumen2 from '../TourCusco/imageTourCuscoAventurero/resumen2.webp';
import resumen3 from '../TourCusco/imageTourCuscoAventurero/resumen3.webp';
import resumen4 from '../TourCusco/imageTourCuscoAventurero/resumen4.webp';
import resumen5 from '../TourCusco/imageTourCuscoAventurero/resumen5.webp';
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
import { getSchemaCuscoAventurero } from "../../../seo/schema/cuscoTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`CuscoAventurero.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`CuscoAventurero.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const CuscoAventurero = () => {
    const { t, i18n } = useTranslation('cuscoTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('CuscoAventurero.images.alt1') },
        { src: imagen2, alt: t('CuscoAventurero.images.alt2') },
        { src: imagen3, alt: t('CuscoAventurero.images.alt3') },
        { src: imagen4, alt: t('CuscoAventurero.images.alt4') },
        { src: imagen5, alt: t('CuscoAventurero.images.alt5') },
    ];
    const puntosClave = t('CuscoAventurero.puntosClave', { returnObjects: true });
    const dias = [
        {
            dia: "1",
            titulo: t('CuscoAventurero.resumen.dia1.titulo'),
            descripcion: t('CuscoAventurero.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('CuscoAventurero.resumen.dia2.titulo'),
            descripcion: t('CuscoAventurero.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            dia: "3",
            titulo: t('CuscoAventurero.resumen.dia3.titulo'),
            descripcion: t('CuscoAventurero.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('CuscoAventurero.resumen.dia4.titulo'),
            descripcion: t('CuscoAventurero.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        },
        {
            dia: "5",
            titulo: t('CuscoAventurero.resumen.dia5.titulo'),
            descripcion: t('CuscoAventurero.resumen.dia5.descripcion'),
            imagenes: [resumen5]
        }
    ];
    const descripcion = t('CuscoAventurero.descripcion', { returnObjects: true });
    const itinerarioNew = t('CuscoAventurero.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('CuscoAventurero.incluye', { returnObjects: true });
    const noIncluye = t('CuscoAventurero.noIncluye', { returnObjects: true });
    const extras = t('CuscoAventurero.extras', { returnObjects: true });
    const queLlevar = t('CuscoAventurero.queLlevar', { returnObjects: true });
    const importante = t('CuscoAventurero.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];

    const categories = [
        { category: 'peru', id: [3, 4] },
        { category: 'trekking', id: [4, 5] },
        { category: 'fullDays', id: [3] },
        { category: 'international', id: [3] },
    ];
    const seoData = t("CuscoAventurero.seo", { returnObjects: true });
    const schemaData = getSchemaCuscoAventurero(i18n.language);
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
            <BannerCarrucel titulo={t('CuscoAventurero.title')} dias={t('CuscoAventurero.day')} items={images} precio={"430.00"} puntosClave={puntosClave} duracion={t('CuscoAventurero.details.duracion')} altitud={"2,430 m / 7,972 ft"} dificultad={t('CuscoAventurero.details.nivel')} grupo={t('CuscoAventurero.details.grupo')} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <Descripcion lugares={t('CuscoAventurero.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}