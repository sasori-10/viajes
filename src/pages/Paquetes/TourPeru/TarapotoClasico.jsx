import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
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
import { FaPlusCircle } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes
import imagen1 from "../TourPeru/imageTarapotoClasico/imagen_(1).webp"
//imagenes de resumen
import resumen1 from '../TourPeru/imageTarapotoClasico/resumen1.webp';
import resumen2 from '../TourPeru/imageTarapotoClasico/resumen2.webp';
import resumen3 from '../TourPeru/imageTarapotoClasico/resumen3.webp';
import resumen4 from '../TourPeru/imageTarapotoClasico/resumen4.webp';
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
import { getSchemaTarapotoClasico } from "../../../seo/schema/peruTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`TarapotoClasico.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`TarapotoClasico.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const TarapotoClasico = () => {
    const { t, i18n } = useTranslation('peruTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: 'Tarapoto' },
    ];
    const puntosClave = t('TarapotoClasico.puntosClave', { returnObjects: true });

    const dias = [
        {
            dia: "1",
            titulo: t('TarapotoClasico.resumen.dia1.titulo'),
            descripcion: t('TarapotoClasico.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('TarapotoClasico.resumen.dia2.titulo'),
            descripcion: t('TarapotoClasico.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            dia: "3",
            titulo: t('TarapotoClasico.resumen.dia3.titulo'),
            descripcion: t('TarapotoClasico.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('TarapotoClasico.resumen.dia4.titulo'),
            descripcion: t('TarapotoClasico.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        }
    ];
    const descripcion = t('TarapotoClasico.descripcion', { returnObjects: true });
    const itinerarioNew = t('TarapotoClasico.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('TarapotoClasico.incluye', { returnObjects: true });
    const noIncluye = t('TarapotoClasico.noIncluye', { returnObjects: true });
    const extras = t('TarapotoClasico.extras', { returnObjects: true });
    const queLlevar = t('TarapotoClasico.queLlevar', { returnObjects: true });
    const importante = t('TarapotoClasico.importante', { returnObjects: true });
    const categories = [
        { category: 'peru', id: [2, 4] },
        { category: 'international', id: [1, 3] },
        { category: 'fullDays', id: [1] },
        { category: 'cusco', id: [6] },
    ];
    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("TarapotoClasico.seo", { returnObjects: true });
    const schemaData = getSchemaTarapotoClasico(i18n.language);
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
            <BannerCarrucel titulo={t('TarapotoClasico.title')} dias={t('TarapotoClasico.day')} items={images} precio={"340.00"} puntosClave={puntosClave} duracion={t('TarapotoClasico.details.duracion')} altitud={"850 m / 2,788 ft"} dificultad={t('TarapotoClasico.details.nivel')} grupo={t('TarapotoClasico.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('TarapotoClasico.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
