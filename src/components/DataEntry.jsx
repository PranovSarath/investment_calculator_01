export default function DataEntry({
  initialInvestment,
  annualInvestment,
  annualReturn,
  investmentPeriod,
  onInputChange,
}) {
  return (
    <div>
      <form
        id="user-input"
        className="data-entry"
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
        }}
      >
        <div className="input-group">
          <div>
            <label htmlFor="initialInvestment">Initial Investment:</label>
            <input
              type="number"
              id="initialInvestment"
              name="initialInvestment"
              value={initialInvestment}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label htmlFor="annualInvestment">Annual Investment:</label>
            <input
              type="number"
              id="annualInvestment"
              name="annualInvestment"
              value={annualInvestment}
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="input-group">
          <div>
            <label htmlFor="annualReturn">Expected Return (%):</label>
            <input
              type="number"
              id="annualReturn"
              name="annualReturn"
              value={annualReturn}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label htmlFor="investmentPeriod">Investment Period (years):</label>
            <input
              type="number"
              id="investmentPeriod"
              name="investmentPeriod"
              value={investmentPeriod}
              onChange={onInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
