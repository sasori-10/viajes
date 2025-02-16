import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel'; // Importar el nuevo Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importar los estilos de carousel
import styles from './BannerCarrucel.module.css'; // Estilos propios
import { FaCalendarCheck, FaMountain, FaUsers } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { GiCheckMark } from "react-icons/gi";
//importando la traduccion
import { useTranslation } from 'react-i18next';

function BannerCarrucel({ titulo, dias, precio, items, duracion, grupo, altitud, dificultad, wetravel, puntosClave }) {
    const { t, i18n } = useTranslation('fixed');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const [activeIndex, setActiveIndex] = useState(0);

    // Función para manejar el cambio de imagen principal en el carrusel
    const handleSelect = (selectedIndex) => setActiveIndex(selectedIndex);
    const showThumbs = items.length <= 10;
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerTitulo}>
                <h1 className={styles.titulo}>{titulo}</h1>
                <p className={styles.dias}>{dias}</p>
            </div>
            <div className={styles.ContainerMedia}>
                <div className={styles.CarrucelContainer}>
                    <Carousel
                        selectedItem={activeIndex}
                        onChange={handleSelect}
                        showArrows={true}
                        showThumbs={showThumbs}
                        infiniteLoop={true} // Habilitar transición continua
                        dynamicHeight={false}
                        showStatus={false}
                        showIndicators={false}
                        autoPlay={true} // Habilitar autoplay
                        stopOnHover={false} // No detener autoplay al pasar el mouse
                        interval={2000} // Tiempo en milisegundos entre cada transición 
                        transitionTime={300} // Tiempo de transición más largo para suavizar el efecto
                        emulateTouch={true} // Habilitar el efecto de deslizamiento
                    >
                        {items.map((item, index) => (
                            <div key={index}>
                                <img
                                    className="d-block w-100"
                                    src={item.src}
                                    alt={item.alt}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className={styles.barraContainer}>
                    <p className={styles.barraPrecio}>{t('price.title1')} <span className={styles.barraPrecioDetail}>US$ {precio}</span> {t('price.title2')}</p>
                    {/* quiero que la lista de puntosClave se despliegue aqui */}
                    <div className={styles.listaPuntos}>
                        {puntosClave.map((punto, index) => (
                            <p key={index} className={styles.punto}><GiCheckMark style={{ marginRight: "10px", fontSize: "1rem", color: "#FDC318" }} />{punto}</p>
                        ))}
                    </div>
                    <div className={styles.barra}>
                        <div className={styles.seccion}>
                            <i className={styles.icono}><FaCalendarCheck /></i>
                            <div className={styles.textoContainer}>
                                <p className={styles.tema}>{t('iconsInfo.duracion')}</p>
                                <p className={styles.descripcion}>{duracion}</p>
                            </div>
                        </div>
                        {altitud && (
                            <div className={styles.seccion}>
                                <i className={styles.icono}><FaMountain /></i>
                                <div className={styles.textoContainer}>
                                    <p className={styles.tema}>{t('iconsInfo.altitud')}</p>
                                    <p className={styles.descripcion}>{altitud}</p>
                                </div>
                            </div>
                        )}
                        <div className={styles.seccion}>
                            <i className={styles.icono}><FaUsers /></i>
                            <div className={styles.textoContainer}>
                                <p className={styles.tema}>{t('iconsInfo.group')}</p>
                                <p className={styles.descripcion}>{grupo}</p>
                            </div>
                        </div>
                        <div className={styles.seccion}>
                            <i className={styles.icono}><GiNetworkBars /></i>
                            <div className={styles.textoContainer}>
                                <p className={styles.tema}>{t('iconsInfo.difficult')}</p>
                                <p className={styles.descripcion}>{dificultad}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilo encapsulado con JSX */}
            <style jsx>{`
                .carousel .control-arrow {
                    width: 60px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: none;
                    border-radius: 0px;
                }

                .carousel .control-arrow:hover {
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                }

                .carousel .control-arrow:before {
                    font-size: 20px;
                }

                /* Prevenir la selección de imágenes */
                .carousel .slide img {
                    user-select: none; /* Prevenir la selección de la imagen */
                    -webkit-user-drag: none; /* Desactivar el arrastre en Safari */
                    -moz-user-select: none; /* Prevenir selección en Firefox */
                }

                /* Prevenir el enfoque en la imagen */
                .carousel .slide img:focus {
                    outline: none; /* Eliminar el contorno azul de enfoque */
                }
            `}</style>
        </div>
    );
}

export default BannerCarrucel;
