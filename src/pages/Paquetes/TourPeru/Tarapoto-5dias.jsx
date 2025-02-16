import { MenuInfo } from "../PaquetesComponentes/menuInfo";
//componentes de la barra de informacion
import Extra from "../PaquetesComponentes/componentsMenuInfo/Extra";
import Importante from "../PaquetesComponentes/componentsMenuInfo/Importante";
import { ItinerarioCompleto } from "../PaquetesComponentes/componentsMenuInfo/ItinerarioCompleto";
import QueLlevar from "../PaquetesComponentes/componentsMenuInfo/QueLlevar";
import { HomeInstituciones } from "../../../components/layouts/HomeInstituciones";
import { Descripcion } from "../PaquetesComponentes/Descripcion";
//importando iconos necesarios
import { FaRoute } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { BsBackpack3Fill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
//importando imagenes 
import imagen1 from "../TourPeru/imageTarapoto5dias/imagen_ (1).webp"
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
import { getSchemaTarapoto5dias } from "../../../seo/schema/peruTours"

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`Tarapoto5dias.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`Tarapoto5dias.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const Tarapoto5dias = () => {
    const { t, i18n } = useTranslation('peruTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: 'Tarapoto' },
    ];
    const puntosClave = t('Tarapoto5dias.puntosClave', { returnObjects: true });
    const descripcion = t('Tarapoto5dias.descripcion', { returnObjects: true });
    const itinerarioNew = t('Tarapoto5dias.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('Tarapoto5dias.incluye', { returnObjects: true });
    const noIncluye = t('Tarapoto5dias.noIncluye', { returnObjects: true });
    const extras = t('Tarapoto5dias.extras', { returnObjects: true });
    const queLlevar = t('Tarapoto5dias.queLlevar', { returnObjects: true });
    const importante = t('Tarapoto5dias.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'peru', id: [3, 5] },
        { category: 'international', id: [2, 4] },
        { category: 'fullDays', id: [2] },
        { category: 'machuPicchu', id: [3] },
    ];
    const seoData = t("Tarapoto5dias.seo", { returnObjects: true });
    const schemaData = getSchemaTarapoto5dias(i18n.language);
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
            <BannerCarrucel titulo={t('Tarapoto5dias.title')} dias={t('Tarapoto5dias.day')} items={images} precio={"370.00"} puntosClave={puntosClave} duracion={t('Tarapoto5dias.details.duracion')} altitud={"850 m / 2,788 ft"} dificultad={t('Tarapoto5dias.details.nivel')} grupo={t('Tarapoto5dias.details.grupo')} wetravel={"https://www.wetravel.com/trips/montana-de-colores-full-day-machupicchu-by-world-37694807"} />
            <Descripcion lugares={t('Tarapoto5dias.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
