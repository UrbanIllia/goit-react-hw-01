import st from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={st.table}>
      <thead>
        <tr>
          <th className={st.tableHead}>Type</th>
          <th className={st.tableHead}>Amount</th>
          <th className={st.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={st.tableBody}>{type}</td>
            <td className={st.tableBody}>{amount}</td>
            <td className={st.tableBody}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
