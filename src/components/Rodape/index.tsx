import styled from 'styled-components'
import Facebook from './assets/facebook.png'
import Google from './assets/google.png'
import Instagram from './assets/instagram.png'
import Whatsapp from './assets/whatsapp.png'

const Footer = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const Lista = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`

const ItemLista = styled.li`
    list-style-type: none;
`


export default function Rodape() {
    return (
        <Footer>
            <Lista>
                <ItemLista>
                    <a href="#">
                        <img src={Facebook} alt="logo do facebook" />
                    </a>
                </ItemLista>
                <ItemLista>
                    <a href="#">
                        <img src={Whatsapp} alt="logo do whatsapp" />
                    </a>
                </ItemLista>
                <ItemLista>
                    <a href="#">
                        <img src={Google} alt="logo do google" />
                    </a>
                </ItemLista>
                <ItemLista>
                    <a href="#">
                        <img src={Instagram} alt="logo do instagram" />
                    </a>
                </ItemLista>
            </Lista>
            <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </Footer>
    )
}