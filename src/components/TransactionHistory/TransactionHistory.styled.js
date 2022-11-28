import styled from 'styled-components';

export const TransactionHistoryTab = styled.table`
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 100%;
text-align: center;



td{
  border: 1px solid #ddd;
  padding: 8px;
  color: gray;
}

th{
  border: 1px solid #ddd;
  padding: 8px;

  
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #00BCD5;
  color: white;
}

tr:nth-child(even){background-color: #f2f2f2;}
`

export const TableType = styled.td`
text-transform: capitalize; 
`