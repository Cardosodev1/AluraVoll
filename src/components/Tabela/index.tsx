import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";
import Botao from "../Botao";

const Celula = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const Linha = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))

export default function Tabela({consultas}: {consultas : IConsulta[] | null}) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <Celula>Data</Celula>
                            <Celula>Horário</Celula>
                            <Celula>Profissional</Celula>
                            <Celula>Especialidade</Celula>
                            <Celula>Paciente</Celula>
                            <Celula>Modalidade</Celula>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                                <Linha>
                                    <Celula component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</Celula>
                                    <Celula>{linha.horario}</Celula>
                                    <Celula>{linha.profissional[0].nome}</Celula>
                                    <Celula>{linha.profissional[0].especialidade}</Celula>
                                    <Celula>{linha.paciente}</Celula>
                                    <Celula>{linha.modalidade}</Celula>
                                </Linha>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Botao>Ver mais</Botao>
        </>
    )
}