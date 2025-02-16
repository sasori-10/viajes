import React, { useState, useEffect } from 'react';
import styles from './GoogleReviews.module.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from 'react-icons/fa6';
//implementando las traducciones
import { useTranslation } from 'react-i18next';

const GoogleReviews = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedReview, setExpandedReview] = useState(null);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    const reviews = [
        {
            "id": 1,
            "name": "Marolyn Diaz",
            "time": t('Cards.reviewGoogle.review1.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review1.review')
        },
        {
            "id": 2,
            "name": "Johan Stiven Martinez Serna",
            "time": t('Cards.reviewGoogle.review2.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review2.review')
        },
        {
            "id": 3,
            "name": "Yendy Arteaga",
            "time": t('Cards.reviewGoogle.review3.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review3.review')
        },
        {
            "id": 4,
            "name": "Dyca Trejo",
            "time": t('Cards.reviewGoogle.review4.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review4.review')
        },
        {
            "id": 5,
            "name": "Katherine Zayurika",
            "time": t('Cards.reviewGoogle.review5.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review5.review')
        },
        {
            "id": 6,
            "name": "Carlinha Oliveira",
            "time": t('Cards.reviewGoogle.review6.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review6.review')
        },
        {
            "id": 7,
            "name": "Ruben Ramos Prado",
            "time": t('Cards.reviewGoogle.review7.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review7.review')
        },
        {
            "id": 8,
            "name": "Aliana Herrera",
            "time": t('Cards.reviewGoogle.review8.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review8.review')
        },
        {
            "id": 9,
            "name": "Jose Carlos Valencia",
            "time": t('Cards.reviewGoogle.review9.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review9.review')
        },
        {
            "id": 10,
            "name": "Jakelyn Nair Rojas Torres",
            "time": t('Cards.reviewGoogle.review10.time'),
            "rating": "5",
            "review": t('Cards.reviewGoogle.review10.review')
        }
    ];


    /* const itemsPerSlide = 4; */
    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth <= 1024) {
                setItemsPerSlide(3); // Menos de 768px -> 1 item por slide
            } else {
                setItemsPerSlide(4); // Pantallas grandes -> 4 items por slide
            }
        };

        // Inicializa el valor de itemsPerSlide
        updateItemsPerSlide();

        // Añadir un listener para el cambio de tamaño de la ventana
        window.addEventListener('resize', updateItemsPerSlide);

        // Limpiar el listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', updateItemsPerSlide);
        };
    }, []);
    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            if (prevIndex + 1 >= reviews.length - itemsPerSlide) {
                return 0; // Regresar al principio si estamos al final
            }
            return prevIndex + 1;
        });
    };

    // Función para mostrar la tarjeta anterior
    const handlePrev = () => {
        setCurrentIndex(prevIndex => {
            if (prevIndex - 1 < 0) {
                return reviews.length - itemsPerSlide; // Regresar al final si estamos al principio
            }
            return prevIndex - 1;
        });
    };

    // Lógica para expandir o colapsar una reseña
    const toggleExpand = (index) => {
        setExpandedReview(expandedReview === index ? null : index);
    };

    // Mostrar las 4 reseñas visibles basadas en el índice actual
    const visibleReviews = [
        ...reviews.slice(currentIndex, currentIndex + itemsPerSlide),
        ...reviews.slice(0, currentIndex + itemsPerSlide - reviews.length)
    ];

    return (
        <div className={styles.googleContainer}>
            <div className={styles.googleTitulo}>
                <FcGoogle className={styles.googletituloIcon} />
                <h2 className={styles.googleTituloTexto}>{t('Cards.reviewGoogle.name')}</h2>
            </div>
            <div className={styles.carousel}>
                <button className={styles.prev} onClick={handlePrev}>
                    <FaChevronLeft className={styles.ControlIcons} />
                </button>

                <div className={styles.reviews}>
                    {reviews.slice(currentIndex, currentIndex + 4).map((review, index) => (
                        <div
                            key={index}
                            className={`${styles.review} ${expandedReview === index ? styles.expanded : ""
                                }`}
                        >
                            <div className={styles.header}>
                                <FcGoogle className={styles.googleIcon} />
                                <div className={styles.headerTitulo}>
                                    <h3>{review.name}</h3>
                                    <p>{review.time}</p>
                                </div>
                            </div>
                            <div className={styles.rating}>
                                {Array.from({ length: Number(review.rating) }, (_, i) => (
                                    <FaStar key={i} className={styles.star} />
                                ))}
                            </div>
                            <p className={styles.text}>
                                {expandedReview === index
                                    ? review.review
                                    : `${review.review.slice(0, 300)}...`}
                            </p>
                            <a
                                className={styles.expandButton}
                                onClick={() => toggleExpand(index)}
                            >
                                {expandedReview === index ? "Ver menos" : "Ver más"}
                            </a>
                        </div>
                    ))}
                </div>

                <button className={styles.next} onClick={handleNext}>
                    <FaChevronRight className={styles.ControlIcons} />
                </button>
            </div>
        </div>
    );
};

export default GoogleReviews;
