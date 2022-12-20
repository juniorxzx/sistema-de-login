import React from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../../components/Button/Button'
import Inputs from '../../components/Input/Input'
import UseAuth from '../../Hooks/UseAuth'
import * as S from './Styles'
const Home = () => {
    const { signout } = UseAuth()
    const navigate = useNavigate()

    return (
        <S.Container>
            <h1>Home</h1>
            <Buttons Text="Sair" onClick={() => [signout(), navigate("/")]}>
                Sair
            </Buttons>
        </S.Container>
    )
}

export default Home