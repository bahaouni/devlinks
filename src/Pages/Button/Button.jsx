import { ReactNode } from 'react';
import styles from './Button.module.css';

export default function Button({
    children,
    alt,
    disabled,
    ...props
}) {
    return (
        <button
            className={alt ? styles.alt_btn : styles.btn}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
