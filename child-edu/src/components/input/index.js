import React, { useEffect } from 'react'
import styles from './index.module.css'
import propTypes from 'prop-types'
export default function Input(props) {
    let { value, name, onChange, placeholder } = props.model
    return (
        <>
            <input className={styles.top_ipt} value={value} name={name} onChange={onChange} placeholder={placeholder} />
        </>
    )
}
// Input.defaultProps={
//     props:{}
// }
// Input.propTypes = {
//     props: propTypes.shape({
//         model: propTypes.shape({
//             value: propTypes.string.isRequired,
//             name: propTypes.string.isRequired,
//             onChange: propTypes.func.isRequired,
//             placeholder: propTypes.string
//         })
//     })
// }
