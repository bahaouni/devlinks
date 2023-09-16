import {  useEffect, useState } from "react";
import styles from './Toast.module.css';

export default function Toast({
    children,
    isVisible
}) {
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        if (true) {
            setDisplay('');

            setTimeout(() => {
                setDisplay('none');
            }, 3400);
        }
    }, [isVisible]);

    return (
        <div
            className={styles.toast}
            style={{
                display
            }}
        >
            {children}
        </div>
    );
}
