import { useState } from "react";
import PageHeader from "./components/PageHeader";
import DataEntry from "./components/DataEntry";
import YearlyBreakdown from "./components/YearlyBreakdown";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_STATE = {
  initialInvestment: 0,
  annualInvestment: 0,
  annualReturn: 0,
  investmentPeriod: 0,
};

function App() {
  const [currentState, setCurrentState] = useState(INITIAL_STATE);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setCurrentState((previousState) => ({
      ...previousState,
      [name]: Number(value),
    }));
  }

  const investmentResults = calculateInvestmentResults({
    initialInvestment: currentState.initialInvestment,
    annualInvestment: currentState.annualInvestment,
    expectedReturn: currentState.annualReturn,
    duration: currentState.investmentPeriod,
  });

  return (
    <div className="app">
      <PageHeader title="Investment Calculator" />
      <DataEntry {...currentState} onInputChange={handleInputChange} />
      {investmentResults.length > 0 && (
        <YearlyBreakdown investmentResults={investmentResults} />
      )}
    </div>
  );
}

export default App;
