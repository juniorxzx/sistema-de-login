import React from 'react'
import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/Cadastro/Cadastro'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import UseAuth from '../Hooks/UseAuth'


// Verificando se estiver logado, caso negativo redireciona para a tela de login
const Private = ({ Item }) => {
    const { signed } = UseAuth();
    return (
        signed > 0 ? <Item /> : <Login />
    )
}

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Login />} />
                    <Route exact path="/cadastro" element={<Cadastro />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RouteApp