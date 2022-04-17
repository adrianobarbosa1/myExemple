import { useEffect } from "react";
import { Container } from "./styles";
import { api } from '../../services/api'

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Criação de jogo</td>
                        <td className="deposit">R$ 15.000</td>
                        <td>Jogos</td>
                        <td>16/04/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrow">- R$ 650</td>
                        <td>casa</td>
                        <td>16/04/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
