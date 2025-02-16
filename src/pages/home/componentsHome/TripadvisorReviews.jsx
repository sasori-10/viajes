import React, { useState, useEffect } from 'react';
import styles from './TripadvisorReviews.module.css';
import { FaChevronLeft, FaCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BiLogoTripAdvisor } from 'react-icons/bi';
//implementando las traducciones
import { useTranslation } from 'react-i18next';

const TripadvisorReviews = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedReview, setExpandedReview] = useState(null);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    const reviews = [
        {
            UserName: "Marissa Sarmiento",
            UserAvatar: "https://media-cdn.tripadvisor.com/media/photo-o/2e/70/59/9c/caption.jpg",
            UserLocation: "Turín, Italia",
            Rating: 5,
            RatingText: t('Cards.reviewTrip.review1.RatingText'),
            ReviewTitle: t('Cards.reviewTrip.review1.ReviewTitle'),
            ReviewText: t('Cards.reviewTrip.review1.ReviewText'),
            PublishedDate: t('Cards.reviewTrip.review1.PublishedDate')
        },
        {
            UserName: "Cristine B",
            UserAvatar: "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/f1/79/default-avatar-2020-21.jpg",
            UserLocation: null,
            Rating: 5,
            RatingText: t('Cards.reviewTrip.review2.RatingText'),
            ReviewTitle: t('Cards.reviewTrip.review2.ReviewTitle'),
            ReviewText: t('Cards.reviewTrip.review2.ReviewText'),
            PublishedDate: t('Cards.reviewTrip.review2.PublishedDate')
        },
        {
            UserName: "Antonio Lévano E.",
            UserAvatar: "https://media-cdn.tripadvisor.com/media/photo-o/2e/21/61/a0/caption.jpg",
            UserLocation: "Lima, Perú",
            Rating: 5,
            RatingText: t('Cards.reviewTrip.review3.RatingText'),
            ReviewTitle: t('Cards.reviewTrip.review3.ReviewTitle'),
            ReviewText: t('Cards.reviewTrip.review3.ReviewText'),
            PublishedDate: t('Cards.reviewTrip.review3.PublishedDate')
        },
        {
            UserName: "Karelia R",
            UserAvatar: "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/de/0a/default-avatar-2020-35.jpg",
            UserLocation: null,
            Rating: 5,
            RatingText: t('Cards.reviewTrip.review4.RatingText'),
            ReviewTitle: t('Cards.reviewTrip.review4.ReviewTitle'),
            ReviewText: t('Cards.reviewTrip.review4.ReviewText'),
            PublishedDate: t('Cards.reviewTrip.review4.PublishedDate')
        },
        {
            UserName: "Marolyn D",
            UserAvatar: "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/de/5a/default-avatar-2020-36.jpg",
            UserLocation: null,
            Rating: 5,
            RatingText: t('Cards.reviewTrip.review6.RatingText'),
            ReviewTitle: t('Cards.reviewTrip.review6.ReviewTitle'),
            ReviewText: t('Cards.reviewTrip.review6.ReviewText'),
            PublishedDate: t('Cards.reviewTrip.review6.PublishedDate')
        },
        {
            UserName: "Adriana",
            UserAvatar: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/cb/bb/51/caption.jpg",
            UserLocation: "Caracas, Venezuela",
            Rating: 5,
            RatingText: t('Cards.reviewTrip.review7.RatingText'),
            ReviewTitle: t('Cards.reviewTrip.review7.ReviewTitle'),
            ReviewText: t('Cards.reviewTrip.review7.ReviewText'),
            PublishedDate: t('Cards.reviewTrip.review7.PublishedDate')
        },
        {
            UserName: "Yendy A",
            UserAvatar: "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/e8/24/default-avatar-2020-60.jpg",
            UserLocation: null,
            Rating: 5,
            RatingText: t('Cards.reviewTrip.review8.RatingText'),
            ReviewTitle: t('Cards.reviewTrip.review8.ReviewTitle'),
            ReviewText: t('Cards.reviewTrip.review8.ReviewText'),
            PublishedDate: t('Cards.reviewTrip.review8.PublishedDate')
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
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % reviews.length
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + reviews.length) % reviews.length
        );
    };

    const toggleExpand = (index) => {
        setExpandedReview(expandedReview === index ? null : index);
    };

    const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerSlide);
    if (visibleReviews.length < itemsPerSlide) {
        visibleReviews.push(...reviews.slice(0, itemsPerSlide - visibleReviews.length));
    }
    return (
        <div className={styles.googleContainer}>
            <div className={styles.contenedorText}>
                <BiLogoTripAdvisor className={styles.icon} />
                <h2 className={styles.titulo}>{t('Cards.reviewTrip.name')}</h2>
            </div>
            <div className={styles.carousel}>
                <button className={styles.prev} onClick={handlePrev}>
                    <FaChevronLeft className={styles.ControlIcons} />
                </button>

                <div className={styles.reviews}>
                    {visibleReviews.map((review, index) => (
                        <div
                            key={index}
                            className={`${styles.review} ${expandedReview === index ? styles.expanded : ""
                                }`}
                        >
                            <div className={styles.header}>
                                <img
                                    src={review.UserAvatar}
                                    alt="User Avatar"
                                    className={styles.googleIcon}
                                    loading="lazy"
                                    width="45"
                                    height="45"
                                    style={{ borderRadius: '50%' }}
                                />
                                <div className={styles.headerTitulo}>
                                    <h3>{review.UserName}</h3>
                                    <p>{review.RatingText}</p>
                                </div>
                            </div>
                            <div className={styles.rating}>
                                {Array.from({ length: Number(review.Rating) }, (_, i) => (
                                    <FaCircle key={i} className={styles.star} />
                                ))}
                            </div>
                            <p className={styles.text}>
                                {expandedReview === index
                                    ? <>{review.ReviewText}<p>{review.PublishedDate}</p></>
                                    : `${review.ReviewText.slice(0, 300)}...`}
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

export default TripadvisorReviews;