import styles from './styles.module.css'

export default function TextArea({ id, value, placeholder, onChange }) {
    return (
        <>
            <textarea
                className={styles.textarea}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            
        </>
    )
}