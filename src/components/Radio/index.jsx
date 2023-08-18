import React, { useState } from 'react'
import styles from './styles.module.css'


export  default function Radio({id, ...props}) {
    const [radio, setRadio] = useState(false)

    return (
        <>
            <input
                className={styles.input}
                id={id}
                type="radio"
                onClick={() => setRadio(!radio)} 
                {...props}   
            />
            
        </>
    )
}