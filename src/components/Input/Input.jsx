import React from 'react'
import { Input } from './Styles'
const Inputs = ({ type, placeholder, value, onChange }) => {
    return (
        <Input value={value} onChange={onChange} type={type} placeholder={placeholder}/>
    )
}

export default Inputs