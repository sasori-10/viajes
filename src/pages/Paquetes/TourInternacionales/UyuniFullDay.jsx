import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
import { Descripcion } from "../PaquetesComponentes/Descripcion";
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
import TourCarousel from "../PaquetesComponentes/Card";
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
//importando iconos necesarios
import { FaPlusCircle } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes
import imagen1 from "../TourInternacionales/imageUyuni/imagen_(1).webp"
import imagen2 from "../TourInternacionales/imageUyuni/imagen_(2).webp"
import imagen3 from "../TourInternacionales/imageUyuni/imagen_(3).webp"
import imagen4 from "../TourInternacionales/imageUyuni/imagen_(4).webp"
import imagen5 from "../TourInternacionales/imageUyuni/imagen_(5).webp"
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaUyuni } from "../../../seo/schema/interTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`Uyuni.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`Uyuni.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const SalarDeUyuni = () => {
    const { t, i18n } = useTranslation('interTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('Uyuni.images.alt1') },
        { src: imagen2, alt: t('Uyuni.images.alt2') },
        { src: imagen3, alt: t('Uyuni.images.alt3') },
        { src: imagen4, alt: t('Uyuni.images.alt4') },
        { src: imagen5, alt: t('Uyuni.images.alt5') },
    ];
    const puntosClave = t('Uyuni.puntosClave', { returnObjects: true });
    const descripcion = t('Uyuni.descripcion', { returnObjects: true });
    const itinerarioNew = t('Uyuni.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('Uyuni.incluye', { returnObjects: true });
    const noIncluye = t('Uyuni.noIncluye', { returnObjects: true });
    const extras = t('Uyuni.extras', { returnObjects: true });
    const queLlevar = t('Uyuni.queLlevar', { returnObjects: true });
    const importante = t('Uyuni.importante', { returnObjects: true });
    const categories = [
        { category: 'peru', id: [2] },
        { category: 'international', id: [4] },
        { category: 'trekking', id: [1, 3] },
        { category: 'machuPicchu', id: [2, 3] },
    ];
    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("Uyuni.seo", { returnObjects: true });
    const schemaData = getSchemaUyuni(i18n.language);
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
            <BannerCarrucel titulo={t('Uyuni.title')} dias={t('Uyuni.day')} items={images} precio={"50.00"} puntosClave={puntosClave} duracion={t('Uyuni.details.duracion')} dificultad={t('Uyuni.details.nivel')} grupo={t('Uyuni.details.grupo')} altitud={"3,656 m / 11,995 ft"} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('Uyuni.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
