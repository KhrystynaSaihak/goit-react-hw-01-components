import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactionData }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionData.map(({ type, amount, currency, id }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  StatData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
