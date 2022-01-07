import React from 'react'
import styled from 'styled-components'
import Badge from './Badge'
import {cardShadow, hoverEffect } from '../utils'
import AvatarImage from '../assets/bok.webp';



function Invoices() {
    return (
        <InvoicesContainer>
            <CardContent>
                <Invoice>
                    <Info>
                        <Avatar>
                            <img src={AvatarImage}/>
                        </Avatar>
                        <TextContainer>
                            <Title>احمد صلاح الدين</Title>
                            <SubTitle>موظف</SubTitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <Badge content="أيداع" paid/>
                        <Prize>$134,434</Prize>
                    </Container>
                </Invoice>
                <Invoice>
                    <Info>
                        <Avatar>
                            <img src={AvatarImage}/>
                        </Avatar>
                        <TextContainer>
                            <Title>صديق عبد الله </Title>
                            <SubTitle> موظف</SubTitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <Badge content="سحب" late/>
                        <Prize>$134,434</Prize>
                    </Container>
                </Invoice>
            </CardContent>
        </InvoicesContainer>
    )
}

const InvoicesContainer = styled.div`
    
    width: 35rem;
    border-radius: 1rem;
    margin-top:1rem;
    background-color: white;
    height: 140%;
    box-shadow: ${cardShadow};
    transition: 0.5s ease-in-out;
    &:hover{
        box-shadow: ${hoverEffect};
    }

`;
const CardContent = styled.div`

`;
const Invoice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.4rem;
    padding-top: 0.6rem;

`;
const Info = styled.div`
    display: flex;
    align-items: center;
    width: 50%;

`;
const Avatar = styled.div`
   img{height: 3rem;
    width: 3rem;
    border-radius: 3rem;

   } 
`;
const TextContainer = styled.div`

    margin-left: 1rem;


`;
const Title = styled.h4`

`;
const SubTitle = styled.h5`
    font-weight: 400;

`;
const Container = styled.div`
   display: flex;
   justify-content: space-between;
   width: 30%;
   align-items: center;

`;
const Prize = styled.div`

`;

export default Invoices
