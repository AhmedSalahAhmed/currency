import React from 'react'
import styled from 'styled-components'
import {IoStatsChart} from 'react-icons/io5'
import {themeColor, hoverEffect} from '../utils'
function Earnings() {
    return (
        <EarningsCard>
            <CardContent>
                <Chart>
                    <IoStatsChart/>
                </Chart>
                <EarningsText>محصلة اليوم</EarningsText>
                <Earning>788,340$</Earning>
                <EarningsIncrease>زيادة بنسبة 19% عن الأمس </EarningsIncrease>
            </CardContent>

        </EarningsCard>
    )
}
const EarningsCard = styled.div`
    align-items: right;
    text-align: right;
    cursor: pointer;
    height: 100%;
    width: 14rem;
    background-color: ${themeColor};
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    transition: 0.5s ease-in-out;
    &:hover{
        box-shadow: ${hoverEffect};
    }
`;
const CardContent = styled.div`
    margin: 1rem;
`;  
const Chart = styled.div`
    display: flex;
    justify-content: center;
    svg {
        height: 4rem;
        width: 4rem;
    }
    `;
const EarningsText = styled.h3`
    text-align: center;
    font-weight: normal;    
    padding: 0.4rem 0;

`;
const Earning = styled.h2`
    text-align: center;

`;
const EarningsIncrease = styled.h5`
    text-align: center;
    font-weight: normal;
    background-color: rgba(0,0,0,.2);
    border-radius: 2rem;
`;
export default Earnings
