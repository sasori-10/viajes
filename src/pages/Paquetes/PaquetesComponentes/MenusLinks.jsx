import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom
import styles from './MenuLinks.module.css'; // Importar los estilos como un módulo
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import imagenAside from "../PaquetesAside/Aside.png"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//implementando las traducciones
import { useTranslation } from 'react-i18next';

// Componente para un solo Dropdown
const Dropdown = ({ title, options, isOpen, toggleDropdown }) => (
    <div className={styles.dropdown}>
        <div className={styles.dropdownHeader} onClick={toggleDropdown}>
            <span className={styles.title}>{title}</span> {/* Aplicar estilo al título */}
            <span className={`${styles.arrow} ${isOpen ? styles.up : ''}`}>
                {isOpen ? <FaAngleUp style={{ color: '#FDC318', fontSize: '1.4rem' }} /> : <FaAngleDown style={{ color: '#FDC318', fontSize: '1.2rem' }} />}
            </span>
        </div>
        {isOpen && (
            <div className={styles.dropdownOptions}>
                {options.map((option, index) => (
                    <div key={index} className={styles.dropdownOption}>
                        <Link to={option.url} onClick={() => window.scrollTo(0, 0)}>{option.text}</Link>
                    </div>
                ))}
            </div>
        )}
    </div>
);

// Componente principal
const DropdownComponent = () => {
    const { t, i18n } = useTranslation('fixed');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Alternar entre abierto y cerrado
    };

    const dropdownData = [
        {
            title: t('aside.menu1.title'),
            options: [
                { text: t('aside.menu1.tour1'), url: '/machu-picchu-tren' },
                { text: t('aside.menu1.tour2'), url: '/machu-picchu-bus' },
                { text: t('aside.menu1.tour3'), url: '/camino-inca' },
            ]
        },
        {
            title: t('aside.menu2.title'),
            options: [
                { text: t('aside.menu2.tour1'), url: '/cusco-explendor' },
                { text: t('aside.menu2.tour2'), url: '/cusco-clasico' },
                { text: t('aside.menu2.tour3'), url: '/cusco-aventurero' },
                { text: t('aside.menu2.tour4'), url: '/cusco-aventurero-vinicunca' },
                { text: t('aside.menu2.tour5'), url: '/cusco-imperial' },
                { text: t('aside.menu2.tour6'), url: '/cusco-incaico' },
                { text: t('aside.menu2.tour7'), url: '/cusco-incaico-puno' },
                { text: t('aside.menu2.tour8'), url: '/montana-colores' },
                { text: t('aside.menu2.tour9'), url: '/laguna-humantay' },
                { text: t('aside.menu2.tour10'), url: '/7-lagunas-ausangate' },
                { text: t('aside.menu2.tour11'), url: '/palcoyoc' },
                { text: t('aside.menu2.tour12'), url: '/tour-cuatrimotos-valle-sagrado' },
                { text: t('aside.menu2.tour13'), url: '/zip-line-chincheros' },
                { text: t('aside.menu2.tour14'), url: '/parapente-valle-sagrado' },
                { text: t('aside.menu2.tour15'), url: '/canotaje-vilcanota' },
                { text: t('aside.menu2.tour16'), url: '/canotaje-vilcanota' },
                { text: t('aside.menu2.tour17'), url: '/waqrapukara' },
            ]
        },
        {
            title: t('aside.menu3.title'),
            options: [
                { text: t('aside.menu3.tour1'), url: '/tarapoto-4d-3n' },
                { text: t('aside.menu3.tour2'), url: '/tarapoto-5d-4n' },
                { text: t('aside.menu3.tour3'), url: '/arequipa-5d-4n' },
                { text: t('aside.menu3.tour4'), url: '/arequipa-6d-5n' },
                { text: t('aside.menu3.tour5'), url: '/puno-4d-3n' },
                { text: t('aside.menu3.tour6'), url: '/puno-5d-4n' },
            ]
        },
        {
            title: t('aside.menu4.title'),
            options: [
                { text: t('aside.menu4.tour1'), url: '/medellin-5d-4n' },
                { text: t('aside.menu4.tour2'), url: '/cartagena-4d-3n' },
                { text: t('aside.menu4.tour3'), url: '/salar-de-uyuni-full-day' },
                { text: t('aside.menu4.tour4'), url: '/ica-nazca-cusco-puno-bolivia-la-paz-salar-de-uyuni-13d-12n' },
            ]
        },
        {
            title: t('aside.menu5.title'),
            options: [
                { text: t('aside.menu5.tour1'), url: '/salkantay-4d-3n' },
                { text: t('aside.menu5.tour2'), url: '/salkantay-5d-4n' },
                { text: t('aside.menu5.tour3'), url: '/inka-trail-2d-1n' },
                { text: t('aside.menu5.tour4'), url: '/inka-trail-4d-3n' },
                { text: t('aside.menu5.tour5'), url: '/inka-jungle-4d-3n' },
            ]
        }
    ];

    return (
        <>
            <div className={styles.MenuAside}>
                <div className={styles.dropdownContainer}>
                    <h3 className={styles.dropdownContainerTitulo}>{t('aside.title')}</h3>
                    {dropdownData.map((dropdown, index) => (
                        <Dropdown
                            key={index}
                            title={dropdown.title}
                            options={dropdown.options}
                            isOpen={openIndex === index}
                            toggleDropdown={() => toggleDropdown(index)}
                        />
                    ))}
                </div>
                <div className={styles.container}>
                    <img src={imagenAside} className={styles.image} alt="Aside" />
                    <div className={styles.overlay}>
                        <h2 className={styles.heading}>{t('aside.card.title')}</h2>
                        <h3 className={styles.headingContact}>{t('aside.card.subtitle')}</h3>
                        <div className={styles.contactInfo}>
                            <a href="tel:+51940842722" className={styles.contactLink}>
                                <div className={styles.contactPhone}>
                                    <FaPhoneAlt className={styles.contactIcon} />
                                    <p>+51 940 842 722</p>
                                </div>
                            </a>
                            <a href="mailto:reservasmapibyworld@gmail.com" className={styles.contactLink}>
                                <div className={styles.contactEmail}>
                                    <MdEmail className={styles.contactIcon} />
                                    <p>reservasmapibyworld@gmail.com</p>
                                </div>
                            </a>
                        </div>
                        <h3>{t('aside.card.end')}</h3>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DropdownComponent;