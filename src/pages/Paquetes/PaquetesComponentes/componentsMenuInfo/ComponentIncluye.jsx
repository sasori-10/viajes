import styles from './ComponentIncluye.module.css'
export const ComponentIncluye = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.itemIncluye}>
                <h3>INCLUYE</h3>
                <li>Descripción del primer item.</li>
            </div>
            <div className={styles.itemNoIncluye}>
                <h3>NO INCLUYE</h3>
                <li>Descripción del segundo item.</li>
            </div>
            <div className={styles.itemAdicionales}>
                <h3>COSTOS ADICIONALES:</h3>
                <li>Descripción del tercer item.</li>
            </div>
        </div>
    );
}
