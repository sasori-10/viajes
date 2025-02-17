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
//imagenes de resumen
import Paisaje1 from './imageToursMachuPicchu/caminoInca/Chachabamba.webp';
import Paisaje2 from './imageToursMachuPicchu/caminoInca/machu_picchu.webp';
//imagenes de carrucel
import TourCarousel from "../PaquetesComponentes/Card";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
//importando imagenes
import imagen1 from "./imageToursMachuPicchu/caminoinca/imagen_(1).webp"
import imagen2 from "./imageToursMachuPicchu/caminoinca/imagen_(2).webp"
import imagen3 from "./imageToursMachuPicchu/caminoinca/imagen_(3).webp"
import imagen4 from "./imageToursMachuPicchu/caminoinca/imagen_(4).webp"
import imagen5 from "./imageToursMachuPicchu/caminoinca/imagen_(5).webp"
import imagen6 from "./imageToursMachuPicchu/caminoinca/imagen_(6).webp"
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaCaminoInca } from "../../../seo/schema/machupicchuTours";

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`CaminoInca.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`CaminoInca.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const CaminoInca = () => {
    const { t, i18n } = useTranslation('machuPicchuTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('CaminoInca.images.alt1') },
        { src: imagen2, alt: t('CaminoInca.images.alt2') },
        { src: imagen3, alt: t('CaminoInca.images.alt3') },
        { src: imagen4, alt: t('CaminoInca.images.alt4') },
        { src: imagen5, alt: t('CaminoInca.images.alt5') },
        { src: imagen6, alt: t('CaminoInca.images.alt6') }
    ];
    const puntosClave = t('CaminoInca.puntosClave', { returnObjects: true });

    const dias = [
        {
            dia: "1",
            titulo: t('CaminoInca.resumen.dia1.titulo'),
            descripcion: t('CaminoInca.resumen.dia1.descripcion'),
            imagenes: [Paisaje1]
        },
        {
            dia: "2",
            titulo: t('CaminoInca.resumen.dia2.titulo'),
            descripcion: t('CaminoInca.resumen.dia2.descripcion'),
            imagenes: [Paisaje2]
        }
    ];
    const descripcion = t('CaminoInca.descripcion', { returnObjects: true });
    const itinerarioNew = t('CaminoInca.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('CaminoInca.incluye', { returnObjects: true });
    const noIncluye = t('CaminoInca.noIncluye', { returnObjects: true });
    const extras = t('CaminoInca.extras', { returnObjects: true });
    const queLlevar = t('CaminoInca.queLlevar', { returnObjects: true });
    const importante = t('CaminoInca.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'machuPicchu', id: [2] },
        { category: 'trekking', id: [1] },
        { category: 'cusco', id: [3, 4] },
        { category: 'fullDays', id: [5, 6] },
    ];
    const seoData = t("CaminoInca.seo", { returnObjects: true });
    const schemaData = getSchemaCaminoInca(i18n.language);
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
            <BannerCarrucel titulo={t('CaminoInca.title')} dias={t('CaminoInca.day')} items={images} precio={"490.00"} puntosClave={puntosClave} duracion={t('CaminoInca.details.duracion')} dificultad={t('CaminoInca.details.nivel')} grupo={t('CaminoInca.details.grupo')} altitud={"2,730 m / 8,957 ft"} wetravel={"https://www.wetravel.com/trips/machupicchu-full-day-machupicchu-by-world-43590972"} />
            <Descripcion lugares={t('CaminoInca.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/machupicchu-full-day-machupicchu-by-world-43590972"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
