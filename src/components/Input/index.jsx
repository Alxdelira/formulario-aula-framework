import styles from './styles.module.css';

export default function Input({ id, tipo, value, onChange, placeholder }) {
  return (
    <input
      className={styles.input}
      id={id}
      type={tipo}
      value={value}         
      onChange={onChange}    
      placeholder={placeholder}
    />
  );
}
