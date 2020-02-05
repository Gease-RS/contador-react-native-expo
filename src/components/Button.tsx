import React, { Children } from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import { color, font } from '../styles'

export default function Button({ children, type, style, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <ButtonBackground style={style} type={type}>
                <ButtonText type={type}>{children}</ButtonText>
            </ButtonBackground>   
        </TouchableOpacity>     
    )
}

const buttonType = { 
    default: {
        backgroundColor: color.lightGray,
        textColor: color.black,
    },
    primary: {
        backgroundColor: color.primary,
        textColor: color.white
},
}
const ButtonBackground = styled.View.attrs(props => ({
    type: props.type || "default"
}))`
    background-color: ${props => buttonType[props.type].backgroundColor};
    padding: 14px 24px;
    border-radius: 16px;
    min-height: 54px;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.Text.attrs(props => ({
    type: props.type || "default"
}))`
    font-size: 16px;
    font-family: ${font.body};
    line-height: 20px;
    color: ${props => buttonType[props.type].textColor};
`;