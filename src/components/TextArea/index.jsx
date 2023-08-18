import styles from './styles.module.css'

export default function TextArea({ id, placeholder, children }) {
    return (
        <>
            <textarea
                className={styles.textarea}
                id={id}
                placeholder={placeholder}
            />
            
        </>
    )
}