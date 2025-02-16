import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { Resumen } from "../PaquetesComponentes/componentsMenuInfo/Resumen";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
import TourCarousel from "../PaquetesComponentes/Card";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando iconos necesarios
import { FaBookOpen } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes del resumen
import Paisaje1 from '../TourCusco/imageCuscoExplendor/resumen1.webp';
import Paisaje2 from '../TourCusco/imageCuscoExplendor/resumen2.webp';
import Paisaje3 from '../TourCusco/imageCuscoExplendor/resumen3.webp';
//importando imagenes
import imagen1 from "../TourCusco/imageCuscoExplendor/imagen_ (1).webp"
import imagen2 from "../TourCusco/imageCuscoExplendor/imagen_ (2).webp"
import imagen3 from "../TourCusco/imageCuscoExplendor/imagen_ (3).webp"
import imagen4 from "../TourCusco/imageCuscoExplendor/imagen_ (4).webp"
import imagen5 from "../TourCusco/imageCuscoExplendor/imagen_ (5).webp"
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaCuscoEsplendor } from "../../../seo/schema/cuscoTours";

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`CuscoExplendor.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`CuscoExplendor.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const CuscoExplendor = () => {
    const { t, i18n } = useTranslation('cuscoTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('CuscoExplendor.images.alt1') },
        { src: imagen2, alt: t('CuscoExplendor.images.alt2') },
        { src: imagen3, alt: t('CuscoExplendor.images.alt3') },
        { src: imagen4, alt: t('CuscoExplendor.images.alt4') },
        { src: imagen5, alt: t('CuscoExplendor.images.alt5') },
    ];
    const puntosClave = t('CuscoExplendor.puntosClave', { returnObjects: true });
    const dias = [
        {
            dia: "1",
            titulo: t('CuscoExplendor.resumen.dia1.titulo'),
            descripcion: t('CuscoExplendor.resumen.dia1.descripcion'),
            imagenes: [Paisaje1]
        },
        {
            dia: "2",
            titulo: t('CuscoExplendor.resumen.dia2.titulo'),
            descripcion: t('CuscoExplendor.resumen.dia2.descripcion'),
            imagenes: [Paisaje2]
        },
        {
            dia: "3",
            titulo: t('CuscoExplendor.resumen.dia3.titulo'),
            descripcion: t('CuscoExplendor.resumen.dia3.descripcion'),
            imagenes: [Paisaje3]
        }
    ];

    const descripcion = t('CuscoExplendor.descripcion', { returnObjects: true });
    const itinerarioNew = t('CuscoExplendor.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('CuscoExplendor.incluye', { returnObjects: true });
    const noIncluye = t('CuscoExplendor.noIncluye', { returnObjects: true });
    const extras = t('CuscoExplendor.extras', { returnObjects: true });
    const queLlevar = t('CuscoExplendor.queLlevar', { returnObjects: true });
    const importante = t('CuscoExplendor.importante', { returnObjects: true });
    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'machuPicchu', id: [3] },
        { category: 'trekking', id: [2] },
        { category: 'cusco', id: [5, 6] },
        { category: 'fullDays', id: [7, 8] },
    ];
    const seoData = t("CuscoExplendor.seo", { returnObjects: true });
    const schemaData = getSchemaCuscoEsplendor(i18n.language);
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
            <BannerCarrucel titulo={t('CuscoExplendor.title')} dias={t('CuscoExplendor.day')} items={images} precio={"380.00"} puntosClave={puntosClave} duracion={t('CuscoExplendor.details.duracion')} altitud={"2,430 m / 7,972 ft"} dificultad={t('CuscoExplendor.details.nivel')} grupo={t('CuscoExplendor.details.grupo')} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <Descripcion lugares={t('CuscoExplendor.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
