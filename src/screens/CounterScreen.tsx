import React, { useState } from 'react'
import styled from 'styled-components/native'
import { color, font } from "../styles"
import Counter from "../components/Counter"
import Button from '../components/Button'

export default function CounterScreen() {
    const [counter, setCounter] = useState(0);
    
    return (
        <Container>
            <Header>
                <PageTitle>Contador</PageTitle>
            </Header>
            <CounterWrapper>
                <Counter value={counter} />

                <ResetButton onPress={() => setCounter(0)}>Resetar</ResetButton>
            </CounterWrapper>

            <Footer>
                <Button onPress={() => setCounter(counter + 1)} type="primary">Adicionar</Button>
            </Footer>
        </Container>
    )
}

const Container = styled.View`
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

const Header = styled.View`
    margin-top: 50px;
    width: 100%;
`;

const PageTitle = styled.Text`
    font-size: 24px;
    color: ${color.primary};
    font-family: ${font.title};
`;

const CounterWrapper = styled.View`

`;

const ResetButton = styled(Button)`
    background-color: transparent;
    margin-top: 20px;
`;

const Footer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;