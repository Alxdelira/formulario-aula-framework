import styles from './styles.module.css';

export default function Container({ children, ...props }) {
    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
}