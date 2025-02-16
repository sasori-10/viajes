import { Footer } from "./components/layouts/Footer"
import { Header } from "./components/layouts/Header"
import { Nav } from "./components/layouts/Nav"
import { Outlet } from "react-router-dom"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './MainLayout.module.css'
export const MainLayout = () => {
    return (
        <>
            <Header />
            <Nav />
            <main className={styles.mainContent}>
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={window.location.pathname} // Cambiar con cada ruta
                        timeout={600} // Duración de la animación
                        classNames="page-transition" // Clases para las animaciones
                    >
                        <div>
                            <Outlet /> {/* Este es el lugar donde se renderizan las rutas hijas */}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </main>
            <Footer />
        </>
    )
}
