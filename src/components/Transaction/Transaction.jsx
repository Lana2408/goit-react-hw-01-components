import css from './Transaction.module.css'

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
  <thead className={css.thead}>
    <tr>
      <th className={css.theadEl}>Type</th>
      <th className={css.theadEl}>Amount</th>
      <th className={css.theadEl}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency}) => (
      <tr key={id}>
      <td className={css.rowEl}>{type}</td>
      <td className={css.rowEl}>{amount}</td>
      <td className={css.rowEl}>{currency}</td>
    </tr>

    ))}
  
  </tbody>
</table>
  );
};