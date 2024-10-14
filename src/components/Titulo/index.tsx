import Avaliacao from './assets/avaliacao.png'
import Grafico from './assets/grafico.png'
import Consulta from './assets/consulta.png'
import styled from 'styled-components'

interface Props {
    imagem?: string
    children?: React.ReactNode
}

interface IImagens {
    avaliacao: string
    grafico: string
    consulta: string
}

const Span = styled.span<Props>`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
`

const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
`

export default function Titulo({imagem, children}: Props) {
    const imagens: IImagens = {
        avaliacao: Avaliacao,
        grafico: Grafico,
        consulta: Consulta
    }

    return (
        <Div>
            {imagem && <Span imagem={imagens[imagem as keyof IImagens]}/>}
            <TituloEstilizado>{children}</TituloEstilizado> 
        </Div>
    )
}