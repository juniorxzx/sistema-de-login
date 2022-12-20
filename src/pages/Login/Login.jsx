import { React, useState } from 'react'
import Inputs from '../../components/Input/Input'
import Buttons from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import UseAuth from '../../Hooks/UseAuth'

import * as S from './Styles'
const Login = () => {
    const { signin } = UseAuth();
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos.")
            return;
        }

        const res = signin(email, senha)

        if (res) {
            setError(res)
            return;
        }
        navigate('/home')
    }
    return (
        <S.Container>
            <S.Label>Login</S.Label>
            <S.Content>
                <Inputs
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Inputs
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <S.LabelError>{error}</S.LabelError>
                <Buttons Text="Entrar" onClick={handleLogin} />

                <S.LabelSignup>
                    Não tem uma conta?
                    <S.Strong>
                        <Link to='/cadastro'>&nbsp;Registre-se</Link>
                    </S.Strong>
                </S.LabelSignup>
            </S.Content>
        </S.Container>
    )
}

export default Login