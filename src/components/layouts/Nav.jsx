import { useState, useCallback, memo, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import styles from './Nav.module.css';
import { TourMachu } from "./navContents/MachuPicchuContent";
import { CuscoContent } from "./navContents/CuscoContent";
import { PeruContent } from "./navContents/PeruContent";
import { InternacionalContent } from "./navContents/InternacionalContent";
import { NosotrosContent } from "./navContents/NosotrosContent";
import { TrekkingContent } from "./navContents/Trekking";
import { useTranslation } from 'react-i18next';

const NavItem = memo(({ title, children, customClass = "", activeMenu, setActiveMenu, isMobile }) => {
    const handleMouseEnter = useCallback(() => !isMobile && setActiveMenu(title), [setActiveMenu, title, isMobile]);
    const handleMouseLeave = useCallback(() => !isMobile && setActiveMenu(null), [setActiveMenu, isMobile]);
    const handleTouchStart = useCallback(() => isMobile && setActiveMenu(activeMenu === title ? null : title), [activeMenu, title, isMobile]);

    return (
        <li
            className={classNames(styles.navItemContainer, { [styles.active]: activeMenu === title })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            aria-haspopup="true"
            aria-expanded={activeMenu === title}
        >
            <div className={styles.navItem}>
                <div className={styles.navTitulo}>
                    {title}
                    <FaAngleDown className={styles.navIcon} />
                </div>
            </div>
            {activeMenu === title && (
                <div className={classNames(styles.dropdownMenu, customClass)}>
                    {children}
                </div>
            )}
        </li>
    );
});

NavItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    customClass: PropTypes.string,
    activeMenu: PropTypes.string,
    setActiveMenu: PropTypes.func,
    isMobile: PropTypes.bool,
};

export const Nav = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [activeMenu, setActiveMenu] = useState(null);
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        {
            title: t("navBar.MachuPicchuTitle.title"),
            content: <TourMachu />,
            customClass: styles.tourMachu,
        },
        {
            title: t("navBar.CuscoTours.title"),
            content: <CuscoContent />,
            customClass: styles.CuscoContent,
        },
        {
            title: t("navBar.PeruTitle.title"),
            content: <PeruContent />,
            customClass: styles.PeruContent,
        },
        {
            title: t("navBar.InternationalTitle.title"),
            content: <InternacionalContent />,
            customClass: styles.InternacionalContent,
        },
        {
            title: t("navBar.TrekkingTitle.title"),
            content: <TrekkingContent />,
            customClass: styles.TrekkingContent,
        },
        {
            title: t("navBar.NosotrosTitle.title"),
            content: <NosotrosContent />
        },
    ];

    useEffect(() => {
        setActiveMenu(null);
    }, [location]);

    return (
        <nav className={styles.navMenu}>
            <ul className={styles.navLista}>
                {menuItems.map(({ title, content, customClass }, index) => (
                    <NavItem
                        key={index}
                        title={title}
                        customClass={customClass}
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                        isMobile={isMobile}
                    >
                        {content}
                    </NavItem>
                ))}
            </ul>
        </nav>
    );
};