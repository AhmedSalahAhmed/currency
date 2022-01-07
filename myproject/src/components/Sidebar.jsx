import React from 'react'
import styled from 'styled-components'
import Badge from './Badge'
import AvatarImage from '../assets/bok.webp';
import {RiHomeLine, RiFileCopyLine } from 'react-icons/ri';
import {FaWallet} from 'react-icons/fa';
import {AiOutlinePieChart} from 'react-icons/ai';
import { darkThemeColor } from '../utils';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <Container>
            <ProfileContainer>
                <Avatar src = {AvatarImage}/>
                <Name>بنك الخرطـوم</Name>
                <Badge content="Bank Of Khartoum"/>
            </ProfileContainer>
            <LinksContainer>
                <Links>
                    <Link to={"/exchange"}>
                        <Mylink >
                            <RiHomeLine/>
                            <h3>أسعار الصرف </h3>
                        </Mylink>
                    
                    </Link>
                    <Link to={"/"}>
                        
                    <Mylink> 
                    <AiOutlinePieChart/>
                    <h3>الإحصائيات </h3>
                    </Mylink>
                    </Link>
                    <Mylink>
                    <FaWallet/>
                    <h3>تبديل عملة </h3>
                    </Mylink>
                    <Mylink>
                    <RiFileCopyLine/>
                    <h3>التقارير </h3>
                    </Mylink>
                </Links>
                <CantactConainer>
                <span>لديك مشكلة؟</span>
                <a href='#'>تواصل معنا</a>
            </CantactConainer>
            </LinksContainer>
            
        </Container>
    )
}
const Container = styled.div`
    
    width: 18%;
    height: 100% !important;
    
    position: fixed;
    right: 0;
    border-radius: 2rem;
    background-color: #091322;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    
`;
const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;
const Avatar = styled.img`
    height: 7rem;
    border-radius: 6rem;
    margin-top: 20%;

`;
const Name = styled.h1`
color: white;
font: 1.5rem;
font-weight: 300;
margin: 0.8rem 0 0.5rem 0;
    
`;
const LinksContainer = styled.div`
    aligh-items: right;
    text-align: right;
    background-color: ${darkThemeColor};
    height: 100%;
    width: 100%;
    border-radius: 2rem;
`;
const Links = styled.ul`
    
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    height: 60%;
`;
const Mylink = styled.li`
    text-align: right;
    align-items: right;
    
    margin-left: 25%;
    margin-buttom: 1rem;
    padding: .8rem;
    display: flex;
    gap: 1rem;
    color: #e4e4e4;
    cursor: pointer;

h3{
    font-weight: 300;

}
svg{
    font-size: 1.1rem;
    margin-top: 3%;
}

`;
const CantactConainer = styled.div`
    width: 60%;
    background-color: #091322;
    color: #c4c4c4;
    height: 15%;
    margin: auto auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    a{
        color: white;
        text-decoration:none;
    }
`;
export default Sidebar
