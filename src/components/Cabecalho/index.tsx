import styled from 'styled-components'
import Logo from './assets/logo.png'
import Perfil from './assets/perfil.png'

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 0.1;
`

const Link = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
    text-decoration: none;
`

export default function Cabecalho() {
    return(
        <Header>
            <img src={Logo} alt="logo da empresa Voll" />
            <Div>
                <img src={Perfil} alt="imagem de perfil do usuário" />
                <Link href="#">Sair</Link>
            </Div>
        </Header>
    )
}