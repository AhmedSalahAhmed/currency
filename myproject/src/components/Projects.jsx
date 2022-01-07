import React from 'react'
import styled from 'styled-components'
import AvatarImage from '../assets/bok.webp';

import {cardShadow, hoverEffect , themeColor} from '../utils'

function Projects() {
    return (
      <YourProjects>
          <Project>
              <Avatar>
                  <img src={AvatarImage}/>
              </Avatar>
              <Detail>
                  <Title>Logo design for bakery</Title>
                  <SubTitle>1 Day remaining</SubTitle>
              </Detail>
          </Project>
          <Project>
              <Avatar>
                  <img src={AvatarImage}/>
              </Avatar>
              <Detail>
                  <Title>Logo design for bakery</Title>
                  <SubTitle>1 Day remaining</SubTitle>
              </Detail>
          </Project>
          <AllProjects>See All Projects</AllProjects>
      </YourProjects>
    )
}
const YourProjects = styled.div`
    height: 77%;
    background-color: white;
    margin: 0;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: ${cardShadow};
    transition: 0.5s ease-in-out;
    &:hover{
        box-shadow: ${hoverEffect};
    }
    cursor: pointer;

`;
const Project = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;

`;
const Avatar = styled.div`
img{
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
}

`;
const Detail = styled.div`
    margin-left: 1rem;
`;
const Title = styled.h3`
    font-weight: 500;

`;
const SubTitle = styled.h5`
    font-weight: 300;

`;
const AllProjects = styled.h5`
    text-align: end;
    color: ${themeColor};
    cursor: pointer;
`;
export default Projects
