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
//importando imagenes del resumen
//importando imagenes
import imagen1 from "../TourCusco/imageTourCuscoIncaico/imagen_(1).webp"
import imagen2 from "../TourCusco/imageTourCuscoIncaico/imagen_(2).webp"
import imagen3 from "../TourCusco/imageTourCuscoIncaico/imagen_(3).webp"
import imagen4 from "../TourCusco/imageTourCuscoIncaico/imagen_(4).webp"
import imagen5 from "../TourCusco/imageTourCuscoIncaico/imagen_(5).webp"
import imagen6 from "../TourCusco/imageTourCuscoIncaico/imagen_(6).webp"
import imagen7 from "../TourCusco/imageTourCuscoIncaico/imagen_(7).webp"
//imagenes de resumen
import resumen1 from '../TourCusco/imageTourCuscoIncaico/resumen1.webp';
import resumen2 from '../TourCusco/imageTourCuscoIncaico/resumen2.webp';
import resumen3 from '../TourCusco/imageTourCuscoIncaico/resumen3.webp';
import resumen4 from '../TourCusco/imageTourCuscoIncaico/resumen4.webp';
import resumen5 from '../TourCusco/imageTourCuscoIncaico/resumen5.webp';
import resumen6 from '../TourCusco/imageTourCuscoIncaico/resumen6.webp';
import resumen7 from '../TourCusco/imageTourCuscoIncaico/resumen7.webp';
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
import { getSchemaIncaCusco } from "../../../seo/schema/cuscoTours";

const getTranslatedItinerary = (t, itineraryData) => {
    return itineraryData.map((item, index) => ({
        dia: item.dia,
        titulo: t(`CuscoIncaico.itinerario.${index}.titulo`), // Traducción dinámica del título
        descripcion: item.descripcion.map((desc, descIndex) =>
            t(`CuscoIncaico.itinerario.${index}.descripcion.${descIndex}`)
        ),
    }));
};

export const CuscoIncaico = () => {
    const { t, i18n } = useTranslation('cuscoTours');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const images = [
        { src: imagen1, alt: t('CuscoIncaico.images.alt1') },
        { src: imagen2, alt: t('CuscoIncaico.images.alt2') },
        { src: imagen3, alt: t('CuscoIncaico.images.alt3') },
        { src: imagen4, alt: t('CuscoIncaico.images.alt4') },
        { src: imagen5, alt: t('CuscoIncaico.images.alt5') },
        { src: imagen6, alt: t('CuscoIncaico.images.alt6') },
        { src: imagen7, alt: t('CuscoIncaico.images.alt7') }
    ];
    const puntosClave = t('CuscoIncaico.puntosClave', { returnObjects: true });
    const dias = [
        {
            dia: "1",
            titulo: t('CuscoIncaico.resumen.dia1.titulo'),
            descripcion: t('CuscoIncaico.resumen.dia1.descripcion'),
            imagenes: [resumen1]
        },
        {
            dia: "2",
            titulo: t('CuscoIncaico.resumen.dia2.titulo'),
            descripcion: t('CuscoIncaico.resumen.dia2.descripcion'),
            imagenes: [resumen2]
        },
        {
            ia: "3",
            titulo: t('CuscoIncaico.resumen.dia3.titulo'),
            descripcion: t('CuscoIncaico.resumen.dia3.descripcion'),
            imagenes: [resumen3]
        },
        {
            dia: "4",
            titulo: t('CuscoIncaico.resumen.dia4.titulo'),
            descripcion: t('CuscoIncaico.resumen.dia4.descripcion'),
            imagenes: [resumen4]
        },
        {
            dia: "5",
            titulo: t('CuscoIncaico.resumen.dia5.titulo'),
            descripcion: t('CuscoIncaico.resumen.dia5.descripcion'),
            imagenes: [resumen5]
        },
        {
            dia: "6",
            titulo: t('CuscoIncaico.resumen.dia6.titulo'),
            descripcion: t('CuscoIncaico.resumen.dia6.descripcion'),
            imagenes: [resumen6]
        },
        {
            dia: "7",
            titulo: t('CuscoIncaico.resumen.dia7.titulo'),
            descripcion: t('CuscoIncaico.resumen.dia7.descripcion'),
            imagenes: [resumen7]
        }
    ];
    const descripcion = t('CuscoIncaico.descripcion', { returnObjects: true });
    const itinerarioNew = t('CuscoIncaico.itinerario', { returnObjects: true });
    const itinerario = getTranslatedItinerary(t, itinerarioNew);
    const incluye = t('CuscoIncaico.incluye', { returnObjects: true });
    const noIncluye = t('CuscoIncaico.noIncluye', { returnObjects: true });
    const extras = t('CuscoIncaico.extras', { returnObjects: true });
    const queLlevar = t('CuscoIncaico.queLlevar', { returnObjects: true });
    const importante = t('CuscoIncaico.importante', { returnObjects: true });
    const categories = [
        { category: 'peru', id: [2, 3] },
        { category: 'trekking', id: [3] },
        { category: 'cusco', id: [1, 2] },
        { category: 'international', id: [4] },
    ];
    const sections = [
        { label: t('labelMenu.resumen'), icon: <FaBookOpen />, component: Resumen, props: { dias } },
        { label: t('labelMenu.itinerario'), icon: <FaRoute />, component: ItinerarioCompleto, props: { itinerario } },
        { label: t('labelMenu.incluye'), icon: <FaCheck />, component: IncluyeNew, props: { incluye, noIncluye } },
        { label: t('labelMenu.extras'), icon: <FaPlusCircle />, component: Extra, props: { lista: extras } },
        { label: t('labelMenu.queLlevar'), icon: <BsBackpack3Fill />, component: QueLlevar, props: { lista: queLlevar } },
        { label: t('labelMenu.importante'), icon: <IoMdInformationCircleOutline />, component: Importante, props: { lista: importante } },
    ];
    const seoData = t("CuscoIncaico.seo", { returnObjects: true });
    const schemaData = getSchemaIncaCusco(i18n.language);
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
            <BannerCarrucel titulo={t('CuscoIncaico.title')} dias={t('CuscoIncaico.day')} items={images} precio={"640.00"} puntosClave={puntosClave} duracion={t('CuscoIncaico.details.duracion')} altitud={"5036 m / 16,520 ft"} dificultad={t('CuscoIncaico.details.nivel')} grupo={t('CuscoIncaico.details.grupo')} wetravel={"https://www.wetravel.com/trips/cusco-incaico-machupicchu-by-world-97880474"} />
            <Descripcion lugares={t('CuscoIncaico.lugares')} descripcion={<ReactMarkdown children={descripcion} rehypePlugins={[rehypeRaw]} />} wetravel={"https://www.wetravel.com/trips/cusco-incaico-machupicchu-by-world-97880474"} />
            <MenuInfo sections={sections} />
            <TourCarousel categories={categories} />
            <TripadvisorReviews />
            <GoogleReviews />
            <HomeInstituciones />
        </>
    );
}