import styles from './styles.module.css';


export default function Select({ id, children }) {
    
        return (
            <>
                <select className={styles.sub_container} id="curso">
                    {children}
                </select>
            </>
        )
    
    }