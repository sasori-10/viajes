import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./MobileNavbar.module.css";

export default function MobileNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <button onClick={() => setOpen(!open)} className={styles.menuButton}>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {open && (
                <ul className={styles.menu}>
                    <li>Inicio</li>
                    <li>Servicios</li>
                    <li>Contacto</li>
                </ul>
            )}
        </nav>
    );
}
