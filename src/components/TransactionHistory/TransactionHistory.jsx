import { TransactionHistoryTab, TableType } from './TransactionHistory.styled'


export const TransactionHistory = ({items}) => {
  return (
    <TransactionHistoryTab>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>

      {items.map(({id, type, amount, currency}) => 
      { return (<tr key={id}>
      <TableType>{type}</TableType>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)})}
    
      </tbody>
    </TransactionHistoryTab>
  )
}