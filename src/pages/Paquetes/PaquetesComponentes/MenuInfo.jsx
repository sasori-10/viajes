import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./menuInfo.module.css";
import DropdownComponent from "./MenusLinks";

export const MenuInfo = ({ sections }) => {
    const [visibleSection, setVisibleSection] = useState(0);

    return (
        <div className={styles.MenuPrincipal}>
            <div className={styles.MenuMedia}>
                <div className={styles.menuContainer}>
                    {/* Contenedor de botones del menú */}
                    <div className={styles.menuButtons}>
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                className={`${styles.menuButton} ${visibleSection === index ? styles.activeButton : ""
                                    }`}
                                onClick={() => setVisibleSection(index)}
                            >
                                {/* Mostrar icono junto al label */}
                                <span className={styles.icon}>{section.icon}</span>
                                {section.label}
                            </button>
                        ))}
                    </div>

                    {/* Contenedor del contenido visible */}
                    <div className={styles.contentContainer}>
                        {sections[visibleSection] && (
                            (() => {
                                const ComponentToRender = sections[visibleSection].component;
                                return <ComponentToRender {...sections[visibleSection].props} />;
                            })()
                        )}
                    </div>
                </div>
                <div className={styles.MenuAside}>
                    <DropdownComponent />
                </div>
            </div>
        </div>
    );
};

MenuInfo.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired, // Propiedad para el icono
            component: PropTypes.elementType.isRequired, // Tipo del componente
            props: PropTypes.object, // Props adicionales para el componente
        })
    ).isRequired,
};
