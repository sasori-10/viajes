import { useState } from 'react';
import styles from "./CarrucelCards.module.css";
//iconos de las tarjetas
import { IoAirplane } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { FaPersonHiking } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { TbSailboat } from "react-icons/tb";
import { MdOutlineParagliding } from "react-icons/md";
import { MdRowing } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbCarSuv } from "react-icons/tb";
//iconos de detalles
import { GrGroup } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
//Importando las imagenes  para las cards
import MpTren from "../PaquetesCards/ToursMachuPicchu/Machu Picchu en Tren - FULL DAY.png"
import MpBus from "../PaquetesCards/ToursMachuPicchu/Machu Picchu en Bus - 2 Dias 1 Noches.png"
import CaminoInca2dias from "../PaquetesCards/ToursMachuPicchu/Camino Inca Corto - 2 Dias 1 Noches.png"
//importando las imagenes de los tours cusco
import Cexplendor from "../PaquetesCards/ToursCusco/Cusco Explendor.png"
import Cclasico4dias from "../PaquetesCards/ToursCusco/Cusco Clasico.png"
import Caventurero from "../PaquetesCards/ToursCusco/Cusco Aventurero.png"
import CaventureroVinicunca from "../PaquetesCards/ToursCusco/Cusco Aventurero y Vinicunca.png"
import Cimperial from "../PaquetesCards/ToursCusco/Cusco Imperial - 6 Dias _ 5 noches.png"
import Cincaico from "../PaquetesCards/ToursCusco/Cusco Incaico.png"
import CincaicoPuno from "../PaquetesCards/ToursCusco/Cusco Incaico y Puno.png"
//importando las imagenes de los tours full day
import FdMontanaColores from "../PaquetesCards/TourFullDay/Montana de Colores.png"
import FdHumantay from "../PaquetesCards/TourFullDay/Laguna Humantay.png"
import FdAusangate from "../PaquetesCards/TourFullDay/Lagunas de Ausangate.png"
import FdPalcoyo from "../PaquetesCards/TourFullDay/Palcoyoc.png"
import FdCuatrimotos from "../PaquetesCards/TourFullDay/Cuatrimotos.png"
import FdZipline from "../PaquetesCards/TourFullDay/Chinchero.png"
import FdParapente from "../PaquetesCards/TourFullDay/Parapente.png"
import FdCanotaje from "../PaquetesCards/TourFullDay/Canotaje.png"
import FdQeswachaka from "../PaquetesCards/TourFullDay/Qeswachaka.png"
import FdWaqrapukara from "../PaquetesCards/TourFullDay/Waqrapukara.png"
//importando las imagenes de los tours Peru
import Ptarapoto from "../PaquetesCards/TourPeru/Tarapoto Clasico.png"
import Ptarapoto5dias from "../PaquetesCards/TourPeru/Tarapoto - 5 Dias _ 4 Noches.png"
import Parequipa from "../PaquetesCards/TourPeru/Arequipa - 5 Dias _ 4 Noches.png"
import Parequipa6dias from "../PaquetesCards/TourPeru/Arequipa - 6 Dias _ 5 Noches.png"
import Ppuno from "../PaquetesCards/TourPeru/Puno Magico.png"
import Ppuno5dias from "../PaquetesCards/TourPeru/Puno - 5 Dias _ 4 Noches.png"
//importando las imagenes de tours internacionales
import Ti13dias from "../PaquetesCards/TourInternacionales/13dias.png"
import TiCartagena from "../PaquetesCards/TourInternacionales/Cartagena - 4 Días _ 3 Noches.png"
import TiMedellin from "../PaquetesCards/TourInternacionales/Medellin - 5 Dias _4 Noches.png"
import TiUyuni from "../PaquetesCards/TourInternacionales/Salar de Uyuni - FULL DAY.png"
//importando las imagenes para las cards trekking
import Tsalkantay4dias from "../PaquetesCards/Trekking/Salkantay Trek (4 Dias _ 3 Noches).png"
import Tsalkantay5dias from "../PaquetesCards/Trekking/Salkantay Trek (5 Dias _ 4 Noches).png"
import Tinkatrail2dias from "../PaquetesCards/Trekking/Camino Inca Corto (2 Dias - 1 Noches).png"
import Tinkatrail4dias from "../PaquetesCards/Trekking/Camino Inca Clásico (4 Días - 3 Noches).png"
import Tinkajungle from "../PaquetesCards/Trekking/Inca Jungle + Machu Picchu (4 Dias_3 Noches).png"
//implementando las traducciones
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const iconList = [
    { id: 1, icon: <IoAirplane />, label: "avion" },
    { id: 2, icon: <IoMdTrain />, label: "tren" },
    { id: 3, icon: <GrUserWorker />, label: "guia" },
    { id: 4, icon: <FaPersonHiking />, label: "trekking" },
    { id: 5, icon: <FaBus />, label: "bus" },
    { id: 6, icon: <FaHotel />, label: "hotel" },
    { id: 7, icon: <TbSailboat />, label: "bote" },
    { id: 8, icon: <MdOutlineParagliding />, label: "parapente" },
    { id: 9, icon: <MdRowing />, label: "remo" },
    { id: 10, icon: <GiForkKnifeSpoon />, label: "comida" },
    { id: 11, icon: <TbCarSuv />, label: "car" },
]


const CarrucelCard = ({ categories }) => {
    const { t } = useTranslation();
    const tourData = [
        {
            title: 'TOURS EN MACHU PICCHU',
            category: 'machuPicchu',
            options: [
                { id: 1, text: t('Cards.machuPicchu.tour1.name'), grupo: t('Cards.machuPicchu.tour1.grupo'), nivel: t('Cards.machuPicchu.tour1.nivel'), precio: "250", url: '/machu-picchu-tren', icons: [2, 3, 5, 6], img: MpTren },
                { id: 2, text: t('Cards.machuPicchu.tour2.name'), grupo: t('Cards.machuPicchu.tour2.grupo'), nivel: t('Cards.machuPicchu.tour2.grupo'), precio: '190', url: '/machu-picchu-bus', icons: [2, 3, 5, 6], img: MpBus },
                { id: 3, text: t('Cards.machuPicchu.tour3.name'), grupo: t('Cards.machuPicchu.tour3.grupo'), nivel: t('Cards.machuPicchu.tour3.grupo'), precio: '490', url: '/camino-inca', icons: [2, 3, 4, 5, 6], img: CaminoInca2dias },
            ],
        },
        {
            title: 'TOURS EN CUSCO',
            category: 'cusco',
            options: [
                { id: 1, text: t('Cards.cusco.tour1.text'), grupo: t('Cards.cusco.tour1.grupo'), nivel: t('Cards.cusco.tour1.nivel'), precio: '380', url: '/cusco-explendor', icons: [1, 2, 3, 5, 6], img: Cexplendor },
                { id: 2, text: t('Cards.cusco.tour2.text'), grupo: t('Cards.cusco.tour2.grupo'), nivel: t('Cards.cusco.tour2.nivel'), precio: '400', url: '/cusco-clasico', icons: [1, 2, 3, 5, 6], img: Cclasico4dias },
                { id: 3, text: t('Cards.cusco.tour3.text'), grupo: t('Cards.cusco.tour3.grupo'), nivel: t('Cards.cusco.tour3.nivel'), precio: '430', url: '/cusco-aventurero', icons: [1, 2, 3, 5, 6], img: Caventurero },
                { id: 4, text: t('Cards.cusco.tour4.text'), grupo: t('Cards.cusco.tour4.grupo'), nivel: t('Cards.cusco.tour4.nivel'), precio: '450', url: '/cusco-aventurero-vinicunca', icons: [1, 2, 3, 4, 5, 6], img: CaventureroVinicunca },
                { id: 5, text: t('Cards.cusco.tour5.text'), grupo: t('Cards.cusco.tour5.grupo'), nivel: t('Cards.cusco.tour5.nivel'), precio: '520', url: '/cusco-imperial', icons: [1, 2, 3, 5, 6], img: Cimperial },
                { id: 6, text: t('Cards.cusco.tour6.text'), grupo: t('Cards.cusco.tour6.grupo'), nivel: t('Cards.cusco.tour6.nivel'), precio: '640', url: '/cusco-incaico', icons: [1, 2, 3, 5, 6], img: Cincaico },
                { id: 7, text: t('Cards.cusco.tour7.text'), grupo: t('Cards.cusco.tour7.grupo'), nivel: t('Cards.cusco.tour7.nivel'), precio: '720', url: '/cusco-incaico-puno', icons: [1, 2, 3, 5, 6, 7], img: CincaicoPuno },
            ],
        },
        {
            title: 'TOURS FULL DAYS',
            category: 'fullDays',
            options: [
                { id: 1, text: t('Cards.fullDay.tour1.text'), grupo: t('Cards.fullDay.tour1.grupo'), nivel: t('Cards.fullDay.tour1.nivel'), precio: "35", url: '/montana-colores', icons: [3, 4, 5], img: FdMontanaColores },
                { id: 2, text: t('Cards.fullDay.tour2.text'), grupo: t('Cards.fullDay.tour2.grupo'), nivel: t('Cards.fullDay.tour2.nivel'), precio: "32", url: '/laguna-humantay', icons: [3, 4, 5], img: FdHumantay },
                { id: 3, text: t('Cards.fullDay.tour3.text'), grupo: t('Cards.fullDay.tour3.grupo'), nivel: t('Cards.fullDay.tour3.nivel'), precio: "40", url: '/7-lagunas-ausangate', icons: [3, 4, 5], img: FdAusangate },
                { id: 4, text: t('Cards.fullDay.tour4.text'), grupo: t('Cards.fullDay.tour4.grupo'), nivel: t('Cards.fullDay.tour4.nivel'), precio: "40", url: '/palcoyo', icons: [1, 3, 4, 5], img: FdPalcoyo },
                { id: 5, text: t('Cards.fullDay.tour5.text'), grupo: t('Cards.fullDay.tour5.grupo'), nivel: t('Cards.fullDay.tour5.nivel'), precio: "50", url: '/tour-cuatrimotos-valle-sagrado', icons: [3, 5], img: FdCuatrimotos },
                { id: 6, text: t('Cards.fullDay.tour6.text'), grupo: t('Cards.fullDay.tour6.grupo'), nivel: t('Cards.fullDay.tour6.nivel'), precio: "60", url: '/zip-line-chincheros', icons: [3, 5], img: FdZipline },
                { id: 7, text: t('Cards.fullDay.tour7.text'), grupo: t('Cards.fullDay.tour7.grupo'), nivel: t('Cards.fullDay.tour7.nivel'), precio: "120", url: '/parapente-valle-sagrado', icons: [3, 5], img: FdParapente },
                { id: 8, text: t('Cards.fullDay.tour8.text'), grupo: t('Cards.fullDay.tour8.grupo'), nivel: t('Cards.fullDay.tour8.nivel'), precio: "120", url: '/canotaje-vilcanota', icons: [3, 5, 9], img: FdCanotaje },
                { id: 9, text: t('Cards.fullDay.tour9.text'), grupo: t('Cards.fullDay.tour9.grupo'), nivel: t('Cards.fullDay.tour9.nivel'), precio: "40", url: '/queswachaca-4lagunas', icons: [3, 5, 10], img: FdQeswachaka },
                { id: 10, text: t('Cards.fullDay.tour10.text'), grupo: t('Cards.fullDay.tour10.grupo'), nivel: t('Cards.fullDay.tour10.nivel'), precio: "40", url: '/waqrapukara', icons: [3, 4, 5], img: FdWaqrapukara },
            ],
        },
        {
            title: 'TOURS PERÚ',
            category: 'peru',
            options: [
                { id: 1, text: t('Cards.peru.tour1.text'), grupo: t('Cards.peru.tour1.grupo'), nivel: t('Cards.peru.tour1.nivel'), precio: "340", url: '/tarapoto-4d-3n', icons: [1, 3, 5, 6, 7], img: Ptarapoto },
                { id: 2, text: t('Cards.peru.tour2.text'), grupo: t('Cards.peru.tour2.grupo'), nivel: t('Cards.peru.tour2.nivel'), precio: "370", url: '/tarapoto-5d-4n', icons: [1, 3, 5, 6, 7], img: Ptarapoto5dias },
                { id: 3, text: t('Cards.peru.tour3.text'), grupo: t('Cards.peru.tour3.grupo'), nivel: t('Cards.peru.tour3.nivel'), precio: "370", url: '/arequipa-5d-4n', icons: [1, 3, 5, 6], img: Parequipa },
                { id: 4, text: t('Cards.peru.tour4.text'), grupo: t('Cards.peru.tour4.grupo'), nivel: t('Cards.peru.tour4.nivel'), precio: "370", url: '/arequipa-6d-5n', icons: [1, 3, 5, 6], img: Parequipa6dias },
                { id: 5, text: t('Cards.peru.tour5.text'), grupo: t('Cards.peru.tour5.grupo'), nivel: t('Cards.peru.tour5.nivel'), precio: "290", url: '/puno-4d-3n', icons: [1, 3, 5, 6, 7], img: Ppuno },
                { id: 6, text: t('Cards.peru.tour6.text'), grupo: t('Cards.peru.tour6.grupo'), nivel: t('Cards.peru.tour6.nivel'), precio: "290", url: '/puno-5d-4n', icons: [1, 3, 5, 6, 7], img: Ppuno5dias },
            ],
        },
        {
            title: 'TOURS INTERNACIONALES',
            category: 'international',
            options: [
                { id: 1, text: t('Cards.internacional.tour1.text'), grupo: t('Cards.internacional.tour1.grupo'), nivel: t('Cards.internacional.tour1.nivel'), precio: "480", url: '/medellin-5d-4n', icons: [1, 3, 5, 6], img: TiCartagena },
                { id: 2, text: t('Cards.internacional.tour2.text'), grupo: t('Cards.internacional.tour2.grupo'), nivel: t('Cards.internacional.tour2.nivel'), precio: "520", url: '/cartagena-4d-3n', icons: [1, 3, 5, 6], img: TiMedellin },
                { id: 3, text: t('Cards.internacional.tour3.text'), grupo: t('Cards.internacional.tour3.grupo'), nivel: t('Cards.internacional.tour3.nivel'), precio: "50", url: '/salar-de-uyuni-full-day', icons: [1, 3, 11, 6], img: TiUyuni },
                { id: 4, text: t('Cards.internacional.tour4.text'), grupo: t('Cards.internacional.tour4.grupo'), nivel: t('Cards.internacional.tour4.nivel'), precio: "1350", url: '/ica-nazca-cusco-puno-bolivia-la-paz-salar-de-uyuni-13d-12n', icons: [1, 3, 9, 6], img: Ti13dias },
            ],
        },
        {
            title: 'TREKKING',
            category: 'trekking',
            options: [
                { id: 1, text: t('Cards.trekking.tour1.text'), grupo: t('Cards.trekking.tour1.grupo'), nivel: t('Cards.trekking.tour1.nivel'), precio: "420", url: '/salkantay-4d-3n', icons: [1, 3, 4, 5], img: Tsalkantay4dias },
                { id: 2, text: t('Cards.trekking.tour2.text'), grupo: t('Cards.trekking.tour2.grupo'), nivel: t('Cards.trekking.tour2.nivel'), precio: "520", url: '/salkantay-5d-4n', icons: [1, 3, 4, 5], img: Tsalkantay5dias },
                { id: 3, text: t('Cards.trekking.tour3.text'), grupo: t('Cards.trekking.tour3.grupo'), nivel: t('Cards.trekking.tour3.nivel'), precio: "480", url: '/inka-trail-2d-1n', icons: [1, 3, 4, 5], img: Tinkatrail2dias },
                { id: 4, text: t('Cards.trekking.tour4.text'), grupo: t('Cards.trekking.tour4.grupo'), nivel: t('Cards.trekking.tour4.nivel'), precio: "790", url: '/inka-trail-4d-3n', icons: [1, 3, 4, 5], img: Tinkatrail4dias },
                { id: 5, text: t('Cards.trekking.tour5.text'), grupo: t('Cards.trekking.tour5.grupo'), nivel: t('Cards.trekking.tour5.nivel'), precio: "450", url: '/inka-jungle-4d-3n', icons: [1, 3, 4, 5], img: Tinkajungle },
            ],
        },
    ];

    const items = categories.flatMap(({ category, id }) => {
        const categoryData = tourData.find(
            (tourCategory) => tourCategory.category === category
        );
        if (!categoryData) return [];
        return categoryData.options.filter((tour) => id.includes(tour.id));
    });
    const shuffledItems = items;

    // Estado para controlar el índice actual del carrusel
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // Número de elementos por "página" del carrusel
    const [animationState, setAnimationState] = useState(""); // Controla la animación

    // Función para navegar hacia adelante
    const nextSlide = () => {
        setAnimationState(styles.fadeInRight); // Establecer animación hacia la derecha
        setCurrentIndex((prevIndex) => {
            if (prevIndex + itemsPerPage < shuffledItems.length) {
                return prevIndex + 1;
            } else {
                return 0; // Regresar al inicio si se llega al final
            }
        });
    };

    // Función para navegar hacia atrás
    const prevSlide = () => {
        setAnimationState(styles.fadeInLeft); // Establecer animación hacia la izquierda
        setCurrentIndex((prevIndex) => {
            if (prevIndex - 1 < 0) {
                return shuffledItems.length - itemsPerPage; // Regresar al final si se está al principio
            } else {
                return prevIndex - 1;
            }
        });
    };

    // Selección de las tarjetas para mostrar
    const visibleItems = shuffledItems.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className={styles.CaroucelCardContainer}>
            {/* Botón de navegación izquierdo */}
            <button onClick={prevSlide} className={styles.carouselButtonLeft}>
                <FaChevronLeft />
            </button>
            <div className={`${styles.cardContainer} ${animationState}`}>
                {/* Contenedor de las cards */}
                <div
                    className={styles.cardGrid}
                    onAnimationEnd={() => setAnimationState("")} // Resetea la animación al finalizar
                >
                    {visibleItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${index === 0 ? "active" : ""}`}
                        >
                            {/* Contenedor de la imagen */}
                            {item.img && (
                                <div className={styles.imageContainer}>
                                    <img
                                        src={item.img}
                                        alt={item.text}
                                        className={styles.cardImage}
                                    />
                                    <div className={styles.iconOverlay}>
                                        {item.icons?.map((iconId) => {
                                            const iconData = iconList.find(
                                                (icon) => icon.id === iconId
                                            );
                                            return iconData ? (
                                                <span key={iconId} className={styles.IconCard}>
                                                    {iconData.icon}
                                                </span>
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                            )}
                            <div className={styles.cardText}>
                                <div className={styles.cardTextContent}>
                                    <div className={styles.CardDetails}>
                                        <h4>{item.text}</h4>
                                        <div className={styles.CardDetailsFinal}>
                                            <p className={styles.CardDetailsLista}>
                                                <GiNetworkBars className={styles.CardDetailsIcon} />
                                                {item.nivel}
                                            </p>
                                            <p className={styles.CardDetailsLista}>
                                                <GrGroup className={styles.CardDetailsIcon} />
                                                {item.grupo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.endContent}>
                                    {/* Mostrar precio */}
                                    {item.precio && (
                                        <p className={styles.price}>{t('Cards.button.desde')} US$ {item.precio}</p>
                                    )}
                                    <button className={styles.cardButton}>
                                        {/* <a href={item.url}>{t('Cards.button.leer')}</a> */}
                                        <Link to={item.url} className={styles.cardLink} onClick={() => window.scrollTo(0, 0)}>
                                            {t('Cards.button.leer')}
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Botón de navegación derecho */}
            <button onClick={nextSlide} className={styles.carouselButtonRight}>
                <FaChevronRight />
            </button>
        </div>
    );
};

export default CarrucelCard;


