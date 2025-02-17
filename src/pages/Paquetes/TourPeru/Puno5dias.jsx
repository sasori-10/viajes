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
import imagen1 from "../TourPeru/imagePuno5dias/imagen_(1).webp"
import imagen2 from "../TourPeru/imagePuno5dias/imagen_(2).webp"
import imagen3 from "../TourPeru/imagePuno5dias/imagen_(3).webp"
import imagen4 from "../TourPeru/imagePuno5dias/imagen_(4).webp"
import imagen5 from "../TourPeru/imagePuno5dias/imagen_(5).webp"
//imagenes de resumen
import resumen1 from '../TourPeru/imagePuno5dias/resumen1.webp';
import resumen2 from '../TourPeru/imagePuno5dias/resumen2.webp';
import resumen3 from '../TourPeru/imagePuno5dias/resumen3.webp';
import resumen4 from '../TourPeru/imagePuno5dias/resumen4.webp';
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
import { getSchemaPuno5Dias } from "../../../seo/schema/peruTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`Puno5dias.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`Puno5dias.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const Puno5dias = () => {
    const { t, i18n } = useTranslation('peruTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('Puno5dias.images.alt1') },
        { src: imagen2, alt: t('Puno5dias.images.alt2') },
        { src: imagen3, alt: t('Puno5dias.images.alt3') },
        { src: imagen4, alt: t('Puno5dias.images.alt4') },
        { src: imagen5, alt: t('Puno5dias.images.alt5') },
    ];
    const puntosClave = t('Puno5dias.puntosClave', { returnObjects: true });
    const dias = [
        {
            dia: "1",
            titulo: t('Puno5dias.resumen.dia1.titulo'),
            descripcion: t('Puno5dias.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('Puno5dias.resumen.dia2.titulo'),
            descripcion: t('Puno5dias.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            dia: "3",
            titulo: t('Puno5dias.resumen.dia3.titulo'),
            descripcion: t('Puno5dias.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('Puno5dias.resumen.dia4.titulo'),
            descripcion: t('Puno5dias.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        },
        {
            dia: "5",
            titulo: t('Puno5dias.resumen.dia5.titulo'),
            descripcion: t('Puno5dias.resumen.dia5.descripcion'),
            imagenes: [resumen4]
        }
    ];
    const descripcion = t('Puno5dias.descripcion', { returnObjects: true });
    const itinerarioNew = t('Puno5dias.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('Puno5dias.incluye', { returnObjects: true });
    const noIncluye = t('Puno5dias.noIncluye', { returnObjects: true });
    const extras = t('Puno5dias.extras', { returnObjects: true });
    const queLlevar = t('Puno5dias.queLlevar', { returnObjects: true });
    const importante = t('Puno5dias.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'peru', id: [1, 2] },
        { category: 'fullDays', id: [2] },
        { category: 'machuPicchu', id: [3] },
        { category: 'cusco', id: [3, 4] },
    ];
    const seoData = t("Puno5dias.seo", { returnObjects: true });
    const schemaData = getSchemaPuno5Dias(i18n.language);
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
            <BannerCarrucel titulo={t('Puno5dias.title')} dias={t('Puno5dias.day')} items={images} precio={"290.00"} puntosClave={puntosClave} duracion={t('Puno5dias.details.duracion')} altitud={"3,950 m / 12,959 ft"} dificultad={t('Puno5dias.details.nivel')} grupo={t('Puno5dias.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('Puno5dias.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
