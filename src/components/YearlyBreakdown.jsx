import { formatter } from "../util/investment";

export default function YearlyBreakdown({ investmentResults }) {
  let totalInterest = 0;

  return (
    <div id="result">
      <table id="result">
        <thead id="result">
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody id="result">
          {investmentResults.map((result) => {
            totalInterest += result.interest;

            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>
                  {formatter.format(result.valueEndOfYear - totalInterest)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
