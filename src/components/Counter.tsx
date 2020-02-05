import React from 'react'
import styled from 'styled-components'
import { font } from '../styles';
import { color } from '../styles';

export default function Counter({ value }) {
    return (
        <Background>
            <CounterNumber>{value}</CounterNumber>
        </Background>
    );
}

const Background = styled.View`
    width: 200px;
    height: 200px;
    background-color: ${color.lightGray};
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`;

const CounterNumber = styled.Text`
    font-size: 120px;
    font-family: ${font.body};
    color: ${color.primary};
`;
