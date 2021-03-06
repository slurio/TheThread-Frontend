import React from 'react';
import styled from 'styled-components';

function CareInstruction(props) {
    return(      
        <StyledView>
            <Instructions>
                <Fiber>{props.fiber.name.toUpperCase()} Care:</Fiber> {props.fiber.care_instructions}
            </Instructions>
        </StyledView> 
    )
}

export default CareInstruction;

const StyledView = styled.View`
    margin-top: 8px;
`

const Fiber = styled.Text`
    font-size: 20px;
    font-family: Raleway_600SemiBold;
`

const Instructions = styled.Text`
    font-size: 18px;
    margin-top: 5px;
    font-family: Raleway_400Regular_Italic;
`