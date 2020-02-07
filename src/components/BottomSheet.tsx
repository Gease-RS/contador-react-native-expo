import React, { useState } from 'react'
import styled from 'styled-components'
import { color } from '../styles';
import { TouchableNativeFeedback, Animated, PanResponder } from 'react-native';

export function BottomSheet(props) {
    let [cardHeight, setCardHeight] = useState(0);
    const bottom = new Animated.Value(0);
    
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => true,

        onPanResponderMove: (_, { dy }) => bottom.setValue(dy)
    })

    function animateOut() {
        Animated.timing(bottom, { toValue: cardHeight }).start();
    }

    return(
        <>
            <TouchableNativeFeedback onPress={() => animateOut()}>
                <AnimatedBackdrop style={{ 
                    opacity: bottom.interpolate({
                        inputRange: [0, cardHeight],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                    }) 
                }} />
            </TouchableNativeFeedback>

            <AnimatedCard 
                {...panResponder.panHandlers}
                onLayout={event => setCardHeight(event.nativeEvent.layout.height)}
                style={{
                    transform: [
                        { 
                            translateY: bottom.interpolate({
                                inputRange: [0, cardHeight],
                                outputRange: [0, cardHeight],
                                extrapolate: "clamp",
                            }) 
                        }
                    ]
                }}>

                <Indicador />
                {props.children}
            </AnimatedCard>
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

const AnimatedBackdrop = Animated.createAnimatedComponent(Backdrop);

const Card = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 24px 24px 50px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`;

const AnimatedCard = Animated.createAnimatedComponent(Card);

const Indicador = styled.View`
    height: 3px;
    width: 80px;
    background: ${color.gray};
    border-radius: 3px;
    margin: 0 auto 14px;
`;