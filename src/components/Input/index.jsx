import styles from './styles.module.css'


export default function Input({ id, tipo, placeholder, children }) {
    return (
        <>
            <input
                className={styles.input}
                id={id}
                type={tipo}
                placeholder={placeholder}
            />
            
        </>
    )
}