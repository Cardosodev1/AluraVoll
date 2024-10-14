import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfissional";
import styled from "styled-components";

const Container = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #FFFFFF;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`

const Lista = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`

const ItemLista = styled.li`
    list-style-type: none;
`

const ItemListaInformacoes = styled(ItemLista)`
    flex-grow: 1;
`

const Imagem = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 100%;
    object-fit: cover;
    border: 2px solid var(--azul-claro);
    margin-right: 1em;
`

const ParagrafoNome = styled.p`
    font-weight: 700;
`

const Paragrafo = styled.p`
    font-size: 14px;
`

export default function Card({ profissional }: { profissional: IProfissional }) {
    return (
        <Container>
            <Lista>
                <ItemLista>
                    <Imagem src={profissional.imagem} alt={`Foto de perfil do profissional ${profissional.nome}`} />
                </ItemLista>
                <ItemListaInformacoes>
                    <ParagrafoNome>{profissional.nome}</ParagrafoNome>
                    <Paragrafo>{profissional.especialidade}</Paragrafo>
                </ItemListaInformacoes>
                <ItemLista>
                    <Rating 
                        name="simple-controlled"
                        value={profissional.nota}
                        readOnly={true}/>
                </ItemLista>
            </Lista>
        </Container>
    )
}