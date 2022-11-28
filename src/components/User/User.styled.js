import styled from 'styled-components';

export const UserProfile = styled.div`
margin: auto;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
max-width: 400px;`


  export const UserDescription = styled.div`
  background-color: white;
  margin: auto;
  padding: 20px 30px;
  text-align: center;`

  export const UserStats = styled.ul`
  display: flex;
  background-color: #F3F6F9;
  padding: 0;
  margin: auto;
  list-style: none;
  justify-content: center;
  
  li{
    display: flex;
    flex-direction: column;
    border: 1px solid #E2E8EF;
    text-align: center;
    flex: 0 200px;
    padding-top: 20px;
    padding-bottom: 20px;
  }`

export const UserAvatar = styled.img`
  border-radius: 50%;
  border: 2px solid #E2E8EF;
  width: 100px;
`

export const UserName = styled.p`
font-weight: 700;
`

export const UserTag = styled.p`
color: #aeb5bc;
`

export const UserLocation = styled.p`
color: #aeb5bc;
`
export const UserLabel = styled.span`
color: #aeb5bc;
margin-bottom: 8px;
`
export const UserQuantity = styled.span`
font-weight: 700;
`