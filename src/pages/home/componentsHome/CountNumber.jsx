import { useState, useEffect, useRef } from 'react';
import styles from './CountNumber.module.css'; // Importamos el archivo de CSS Modules

const StatsCounter = ({ label, endValue }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hasCounted, setHasCounted] = useState(false); // Estado para controlar el conteo
    const counterRef = useRef(null);

    const startCounting = () => {
        let start = 0;
        const end = endValue;
        const duration = 2000; // Tiempo en milisegundos

        const increment = () => {
            const incrementValue = end / (duration / 50);
            start += incrementValue;
            if (start >= end) {
                setCurrentValue(end);
            } else {
                setCurrentValue(Math.floor(start));
                requestAnimationFrame(increment);
            }
        };

        increment();
    };

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasCounted) {
                    setHasCounted(true); // Marcar como contado
                    startCounting(); // Inicia el conteo
                }
            });
        };

        const observerOptions = {
            root: null, // Usa el viewport como área de observación
            threshold: 0.5, // Ejecuta cuando el 50% del componente es visible
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) observer.unobserve(counterRef.current);
        };
    }, [hasCounted, endValue]);

    return (
        <div ref={counterRef} className={styles.statsCounter}>
            <p>+{currentValue}</p>
            <h2>{label}</h2>
        </div>
    );
};

export default StatsCounter;
