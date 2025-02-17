//componentes de la barra de informacion
import { MenuInfo } from "../PaquetesComponentes/menuInfo";
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
import imagen1 from "./imageToursMachuPicchu/machupicchuBus/imagen_(1).webp"
import imagen2 from "./imageToursMachuPicchu/machupicchuBus/imagen_(2).webp"
import imagen3 from "./imageToursMachuPicchu/machupicchuBus/imagen_(3).webp"
import imagen4 from "./imageToursMachuPicchu/machupicchuBus/imagen_(4).webp"
import imagen5 from "./imageToursMachuPicchu/machupicchuBus/imagen_(5).webp"
import imagen6 from "./imageToursMachuPicchu/machupicchuBus/imagen_(6).webp"
import imagen7 from "./imageToursMachuPicchu/machupicchuBus/imagen_(7).webp"
//imagenes de resumen
import Paisaje1 from './imageToursMachuPicchu/machupicchuBus/Plaza-de-Machupicchu-Pueblo.webp';
import Paisaje2 from './imageToursMachuPicchu/machupicchuBus/image00035.webp';
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
import TourCarousel from "../PaquetesComponentes/Card";
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaMachuPicchuBus } from "../../../seo/schema/machupicchuTours";

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`machuPicchuBus.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`machuPicchuBus.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const MachuPicchuBus = () => {
    const { t, i18n } = useTranslation('machuPicchuTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('machuPicchuBus.images.alt1') },
        { src: imagen2, alt: t('machuPicchuBus.images.alt2') },
        { src: imagen3, alt: t('machuPicchuBus.images.alt3') },
        { src: imagen4, alt: t('machuPicchuBus.images.alt4') },
        { src: imagen5, alt: t('machuPicchuBus.images.alt5') },
        { src: imagen6, alt: t('machuPicchuBus.images.alt6') },
        { src: imagen7, alt: t('machuPicchuBus.images.alt7') },
    ];
    const puntosClave = t('machuPicchuBus.puntosClave', { returnObjects: true });

    const dias = [
        {
            dia: "1",
            titulo: t('machuPicchuBus.resumen.dia1.titulo'),
            descripcion: t('machuPicchuBus.resumen.dia1.descripcion'),
            imagenes: [Paisaje1]
        },
        {
            dia: "2",
            titulo: t('machuPicchuBus.resumen.dia2.titulo'),
            descripcion: t('machuPicchuBus.resumen.dia2.descripcion'),
            imagenes: [Paisaje2]
        }
    ];

    const itinerarioNew = t('machuPicchuBus.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const descripcion = t('machuPicchuBus.descripcion', { returnObjects: true });
    const incluye = t('machuPicchuBus.incluye', { returnObjects: true });
    const noIncluye = t('machuPicchuBus.noIncluye', { returnObjects: true });
    const extras = t('machuPicchuBus.extras', { returnObjects: true });
    const queLlevar = t('machuPicchuBus.queLlevar', { returnObjects: true });
    const importante = t('machuPicchuBus.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'machuPicchu', id: [1, 3] },
        { category: 'cusco', id: [2, 3] },
        { category: 'fullDays', id: [3, 4] },
    ];
    const seoData = t("machuPicchuBus.seo", { returnObjects: true });
    const schemaData = getSchemaMachuPicchuBus(i18n.language);
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
            <BannerCarrucel titulo={t('machuPicchuBus.title')} dias={t('machuPicchuBus.day')} items={images} precio={"190.00"} puntosClave={puntosClave} duracion={t('machuPicchuBus.details.duracion')} dificultad={t('machuPicchuBus.details.nivel')} grupo={t('machuPicchuBus.details.grupo')} altitud={"2,430 m / 7,972 ft"} wetravel={"https://www.wetravel.com/trips/machupicchu-full-day-machupicchu-by-world-43590972"} />
            <Descripcion lugares={t('machuPicchuBus.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/machupicchu-full-day-machupicchu-by-world-43590972"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
