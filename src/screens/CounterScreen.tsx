import React from 'react'
import styled from 'styled-components/native'
import { font } from "../styles"
import Counter from "../components/Counter"
import Button from '../components/Button'

export default function CounterScreen() {
    return (
        <Container>
            <Header>
                <PageTitle>Contador</PageTitle>
            </Header>
            <CounterWrapper>
                <Counter value={3} />

                <ResetButton>Resetar</ResetButton>
            </CounterWrapper>

            <Footer>
                <Button type="primary">Adicionar</Button>
            </Footer>
        </Container>
    )
}

const Container = styled.View`
    padding: 20px;
`;

const Header = styled.View`
    margin-top: 50px;
`;

const PageTitle = styled.Text`
    font-size: 24px;
    color: #f25652;
    font-family: ${font.title};
`;

const CounterWrapper = styled.View`
    font-size: 24px;
    color: #f25652;
`;

const ResetButton = styled.Text`
    font-size: 24px;
    color: #f25652;
    font-family: ${font.title};
`;

const Footer = styled.View`
    width: 100%;
`;