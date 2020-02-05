import React from 'react'
import styled from 'styled-components'
import { color } from '../styles';

export function BottomSheet(props) {
    return(
        <>
            <Backdrop />

            <Card>
                <Indicador />
                {props.children}
            </Card>
        </>
    )
}

const Backdrop = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
`;

const Card = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 24px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`;

const Text = styled.Text``;

const Indicador = styled.View`
    height: 3px;
    width: 80px;
    background: ${color.gray};
    border-radius: 3px;
    margin: 0 auto 14px;
`;