export default function PageHeader({ title }) {
  return (
    <div id="header" className="page-header">
      <img
        src="/src/assets/investment-calculator-logo.png"
        alt="Logo"
        className="logo"
      />
      <h1>{title}</h1>
    </div>
  );
}
