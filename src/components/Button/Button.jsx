import React from 'react'
import { Button } from './Styles'
const Buttons = ({ Text, onClick, Type = 'button' }) => {
    return (
        <Button type={Type} onClick={onClick}>
            {Text}
        </Button>
    )
}

export default Buttons