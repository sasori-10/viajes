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
import { IoMdInformationCircleOutline } from "react-icons/io"
//imagenes de resumen
import Paisaje1 from '../TourCusco/imageTourCuscoClasico/RSacsayhuaman-min.webp';
import Paisaje2 from '../TourCusco/imageTourCuscoClasico/RMoray-min.webp';
import Paisaje3 from '../TourCusco/imageTourCuscoClasico/Rmachu_picchu.webp';
import Paisaje4 from '../TourCusco/imageTourCuscoClasico/RPileta-PLaza-de-Armas-Cusco-min.webp';
//imagenes de carrucel
import BannerCarrucel from "../PaquetesComponentes/BannerCarrucel";
import TripadvisorReviews from "../../home/componentsHome/TripadvisorReviews";
import GoogleReviews from "../../home/componentsHome/GoogleReviews";
import TourCarousel from "../PaquetesComponentes/Card";
//importando imagenes
import imagen1 from "../TourCusco/imageTourCuscoClasico/imagen_ (1).webp"
import imagen2 from "../TourCusco/imageTourCuscoClasico/imagen_ (2).webp"
import imagen3 from "../TourCusco/imageTourCuscoClasico/imagen_ (3).webp"
import imagen4 from "../TourCusco/imageTourCuscoClasico/imagen_ (4).webp"
import imagen5 from "../TourCusco/imageTourCuscoClasico/imagen_ (5).webp"
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import IncluyeNew from "../PaquetesComponentes/componentsMenuInfo/IncluyeNew";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
//importando el seo dinamico
import { Helmet } from "react-helmet-async";
import { getSchemaCuscoClasico } from "../../../seo/schema/cuscoTours";

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`CuscoClasico.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`CuscoClasico.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const CuscoClasico = () => {
    const { t, i18n } = useTranslation('cuscoTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('CuscoClasico.images.alt1') },
        { src: imagen2, alt: t('CuscoClasico.images.alt2') },
        { src: imagen3, alt: t('CuscoClasico.images.alt3') },
        { src: imagen4, alt: t('CuscoClasico.images.alt4') },
        { src: imagen5, alt: t('CuscoClasico.images.alt5') },
    ];
    const puntosClave = t('CuscoClasico.puntosClave', { returnObjects: true });
    const dias = [
        {
            dia: "1",
            titulo: t('CuscoClasico.resumen.dia1.titulo'),
            descripcion: t('CuscoClasico.resumen.dia1.descripcion'),
            imagenes: [Paisaje1]
        },
        {
            dia: "2",
            titulo: t('CuscoClasico.resumen.dia2.titulo'),
            descripcion: t('CuscoClasico.resumen.dia2.descripcion'),
            imagenes: [Paisaje2]
        },
        {
            dia: "3",
            titulo: t('CuscoClasico.resumen.dia3.titulo'),
            descripcion: t('CuscoClasico.resumen.dia3.descripcion'),
            imagenes: [Paisaje3]
        },
        {
            dia: "4",
            titulo: t('CuscoClasico.resumen.dia4.titulo'),
            descripcion: t('CuscoClasico.resumen.dia4.descripcion'),
            imagenes: [Paisaje4]
        }
    ];
    const descripcion = t('CuscoClasico.descripcion', { returnObjects: true });
    const itinerarioNew = t('CuscoClasico.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('CuscoClasico.incluye', { returnObjects: true });
    const noIncluye = t('CuscoClasico.noIncluye', { returnObjects: true });
    const extras = t('CuscoClasico.extras', { returnObjects: true });
    const queLlevar = t('CuscoClasico.queLlevar', { returnObjects: true });
    const importante = t('CuscoClasico.importante', { returnObjects: true });

    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const categories = [
        { category: 'peru', id: [1] },
        { category: 'trekking', id: [3] },
        { category: 'cusco', id: [6, 7] },
        { category: 'fullDays', id: [9, 10] },
    ];
    const seoData = t("CuscoClasico.seo", { returnObjects: true });
    const schemaData = getSchemaCuscoClasico(i18n.language);
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
            <BannerCarrucel titulo={t('CuscoClasico.title')} dias={t('CuscoClasico.day')} items={images} precio={"400.00"} puntosClave={puntosClave} duracion={t('CuscoClasico.details.duracion')} altitud={"2,430 m / 7,972 ft"} dificultad={t('CuscoClasico.details.nivel')} grupo={t('CuscoClasico.details.grupo')} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <Descripcion lugares={t('CuscoClasico.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-magico-machupicchu-by-world-13957184"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}
