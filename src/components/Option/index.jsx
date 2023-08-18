import styles from './styles.module.css'

export default function Option({id, children, ...props}) {
    return (
        <>
            <option className={styles.option} id={id} {...props}>{children}</option>
        </>
    )
}