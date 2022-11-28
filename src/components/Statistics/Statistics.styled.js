import styled from 'styled-components';

export const StatSection = styled.section`
padding-top: 20px;
margin: 20px auto;
max-width: 400px;
background-color: white;
`
export const StatTitle = styled.h2`
text-align: center;
color: gray;
margin: 0 0 20px 0;

text-transform: uppercase;
font-family: Oxygen;
font-size: 15px; 
`

export const StatListUl = styled.ul`
  display: flex;
  background-color: #F3F6F9;
  padding: 0;
  margin: auto;
  list-style: none;
  justify-content: center;
  `
  
  export const StatItemLi = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid #E2E8EF;
    text-align: center;
    flex: 0 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: gray;
`

export const UserLabel = styled.span`
color: #aeb5bc;
margin-bottom: 8px;
color: white;
`
export const UsePpercentage = styled.span`
display: block;
font-weight: 700;
color: white;
`