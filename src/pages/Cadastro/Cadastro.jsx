import { React, useState } from 'react'
import Inputs from '../../components/Input/Input'
import Buttons from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import UseAuth from '../../Hooks/UseAuth'

import * as S from './Styles'

const Cadastro = () => {

    const { signup } = UseAuth();
    const navigate = useNavigate();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos.")
            return;
        }
        else if(email !== emailConf){
            setError("Os e-mails não são iguais.")
            return;
        }

        const res = signup(email, senha)

        if (res) {
            setError(res)
            return;
        }
        alert("Usuário cadastrado com sucesso")
        navigate('/home')
    }

    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")
    return (
        <S.Container>
            <S.Label>Cadastro</S.Label>
            <S.Content>
                <Inputs
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Inputs
                    type="email"
                    placeholder="Confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <Inputs
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <S.LabelError>{error}</S.LabelError>
                <Buttons Text="Entrar" onClick={handleSignup} />

                <S.LabelSignup>
                    Já tem uma conta?
                    <S.Strong>
                        <Link to='/login'>&nbsp;Entre</Link>
                    </S.Strong>
                </S.LabelSignup>
            </S.Content>
        </S.Container>
    )
}

export default Cadastro