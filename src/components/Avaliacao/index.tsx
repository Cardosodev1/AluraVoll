import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./Card";
import Botao from "../Botao";

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

export default function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {
    return(
        <>
            <Section>
                {profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />    
                })}
            </Section>
            <Botao>Ver mais</Botao>
        </>
    )
}