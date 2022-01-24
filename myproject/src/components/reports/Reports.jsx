import React from 'react';
import styled from 'styled-components';
import Earnings from '../Earnings';
import Info from '../Info';
import Chart from '../chart/Chart';
import Projects from '../Projects';
import Invoices from '../Invoices';


function MainContent() {
    return (
        <Container>
            <button>اصدار تقرير</button>

            <SubContainer>
                <SectionOne>
                    <ColumnOne1>
                        <Earnings/>
                        <Info/>
                    </ColumnOne1>
                    <ColumnTwo1>
                        <TitleText>إشعارات</TitleText>
                        <Projects/>
                    </ColumnTwo1>
                </SectionOne>
                <SectionTwo>
                    <ColumnOne2>
                        <InvoiceContainer>
                            <TitleText>آخر المعاملات</TitleText>
                            <Invoices/>
                        </InvoiceContainer>
                    </ColumnOne2>
                    <ColumnTwo2>

                    </ColumnTwo2>
                </SectionTwo>
                <SectionThree>
                <Chart />

                </SectionThree>

            </SubContainer>
        </Container>
    )
}
const Container = styled.div`

display: flex;
flex-direction: column;
    width: 77%;

    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    margin: 0 8rem 1rem 4rem;
    padding-top: 4rem;
    
`;
const SubContainer = styled.div`
    margin: .5rem 0;
    width 100%;
    height 80%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;
const TitleText = styled.h3`
    height: 20%;
    text-align: right;
`;
const SectionOne = styled.div`
    display: flex;
    justify-conent: space-between;
    height: 40%;
    width: 100%;

    gap: 2rem;
`;
const SectionTwo = styled.div`
    display:flex;
    gap:2rem;
    height:26vh;

`;
const SectionThree = styled.div`
    display:flex;
    gap:2rem;
    height:26vh;

`;
const ColumnOne1 = styled.div`
    display:flex;
    gap:3rem;
`;
const ColumnOne2 = styled.div`

`;
const InvoiceContainer = styled.div`
    height: 60%;
`;
const ColumnTwo1 = styled.div`
    display:flex;
    flex-direction:column;
    height:115%;
    width:100%;
`;
const ColumnTwo2 = styled.div``;
export default MainContent