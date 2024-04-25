import './App.css';
import CryptocurrencyPieChart from './components/CryptocurrencyPieChart';




const cryptocurrencyData = [
  { label: 'Bitcoin', value: 40 },
  { label: 'Ethereum', value: 30 },
  { label: 'Litecoin', value: 20 },
  { label: 'Ripple', value: 10 }
];

function App() {
  return (
    <div className="App">
<CryptocurrencyPieChart data={cryptocurrencyData} />
    </div>
  );
}

export default App;
