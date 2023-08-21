import React from 'react';
import styles from './styles.module.css';

export default function Radio({ id, value, checked, children, onChange }) {
  return (
    <div>
      <input
        className={styles.input}
        id={id}
        type="radio"
        value={value}         
        checked={checked}     
        onChange={onChange}   
      />
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </div>
  );
}
