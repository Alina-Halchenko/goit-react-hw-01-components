import styled from 'styled-components';

export const FriendListUl = styled.ul`
  background-color: #F3F6F9;
  padding: 20px;
  margin: auto;
  list-style: none;
`

export const FriendItem = styled.li`
display: flex;
padding: 5px 5px;
margin-bottom: 10px;
margin-right: auto;
margin-left: auto;
gap: 8px;
align-items: center;
min-width: 200px;
max-width: 400px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const FriendStatus = styled.span`
  height: 12px;
  width: 12px;
  background-color: ${prop => {
    if(prop.color === "true") {
      return `green`
    } else {
      return `red`
    }
  }};
  border-radius: 50%;
  display: inline-block;
`

export const FriendImage = styled.img`
display:blok;
border: 1px solid gray;
border-radius: 5%
`

export const FriendName = styled.p`
  font-weight: 500;
`