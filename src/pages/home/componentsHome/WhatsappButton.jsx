import { FaWhatsapp } from 'react-icons/fa';
import styles from "./WhatsappButton.module.css"

export const WhatsappButton = () => {
    const handleClick = () => {
        window.open("https://wa.me/51940842722", "_blank");
    };
    return (
        <button className={styles.floatingButton} onClick={handleClick}>
            <FaWhatsapp className={styles.IconoWhatsapp} />
        </button>
    );
};

