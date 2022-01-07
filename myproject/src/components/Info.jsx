import React from 'react'
import styled from 'styled-components'
import Badge from './Badge'
import {cardShadow, hoverEffect , themeColor} from '../utils'
// import { CardContent } from '@material-ui/core'

function Info() {
    return (
        <InfoCard>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>989,234$</Digit>
                        <InfoContainer>
                            <Title>إيراد</Title>
                            <SubTitle></SubTitle>
                        </InfoContainer>
                    </Row>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Row>
                        <Digit2>200,894$</Digit2>
                        <InfoContainer>
                            <Title>سحب</Title>
                            <SubTitle></SubTitle>
                        </InfoContainer>
                    </Row>
                    <Row>
                        <Badge content=" علاج" glow/>
                        <Badge content="سياحة" glow/>
                        <Badge content="إستيراد" glow/>
                    </Row>
                </CardContent>
            </Card>
                
        </InfoCard>
    )
}
const InfoCard = styled.div`
    height: 100%;
    width: 14rem;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    box-shadow: ${cardShadow};
transition: 0.5s ease-in-out;
&:hover{
    box-shadow: ${hoverEffect};
}
cursor: pointer

`;
const Card = styled.div`
    background-color: rgba(183, 194, 243, 0.3) ;
    border-radius: 1rem;
    margin-bottom: 1rem;
`;
const CardContent = styled.div`
    padding: 0.7rem 1rem 0.3rem 1rem;

`;

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    ${({ justify})=>
        justify &&
        `
            justify-content:space-around;
            width: 90%;
        `
}
`;
const Digit = styled.div`
    background-color: green;
    padding: 0.8rem 1rem;
    font-size: 1.3rem;
    border-radius: 1rem;
  


`;
const Digit2 = styled.div`
    background-color: red;
    padding: 0.8rem 1rem;
    font-size: 1.3rem;
    border-radius: 1rem;


`;
const InfoContainer = styled.div`

    margin-left: 0.7rem;

`;
const Title = styled.h3`
    color: black;

`;
const SubTitle = styled.h5`

    color: #333333;
    font-weight: normal;

`;

export default Info
