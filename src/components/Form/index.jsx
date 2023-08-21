import styles from './styles.module.css';

export default function Form({ children }) {

    return (
        <>
            <div className={styles.forme}>
                <div className={styles.container}>
                    <h1>Inscrição</h1>
                </div>
                {children}
            </div>
        </>
    )

}
