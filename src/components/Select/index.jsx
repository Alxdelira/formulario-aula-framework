import styles from './styles.module.css';


export default function Select({ id, onChange, value, children }) {

    return (
        <>
            <select
                className={styles.sub_container}
                id={id}
                onChange={onChange}
                value={value}
            >
                {children}
            </select>
        </>
    )

}