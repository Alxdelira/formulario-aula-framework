import styles from './styles.module.css';

export default function Checkbox({ children, ...props }) {
    return (
        <>
            <div className={styles.container}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    {...props}
                /><p>{children}</p>
            </div>
        </>
    );
}