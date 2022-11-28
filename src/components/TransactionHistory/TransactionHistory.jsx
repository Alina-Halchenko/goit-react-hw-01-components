import { TransactionHistoryTab, TableType } from './TransactionHistory.styled'
import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};