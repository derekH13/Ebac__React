import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [result, setResult] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    const pesoValue = parseFloat(peso);
    const alturaValue = parseFloat(altura);

    if (isNaN(pesoValue) || isNaN(alturaValue) || alturaValue <= 0 || pesoValue <= 0) {
      setResult('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const imc = pesoValue / (alturaValue * alturaValue);
    posicaoTable(imc);
  };

  const posicaoTable = (imc) => {
    if (imc < 18.5) {
      setResult(`${imc.toFixed(2)}, você está abaixo do peso`);
    } else if (imc < 24.9) {
      setResult(`${imc.toFixed(2)}, peso adequado`);
    } else if (imc < 29.9) {
      setResult(`${imc.toFixed(2)}, sobrepeso`);
    } else if (imc < 34.9) {
      setResult(`${imc.toFixed(2)}, obesidade grau I`);
    } else if (imc < 39.9) {
      setResult(`${imc.toFixed(2)}, obesidade grau II`);
    } else {
      setResult(`${imc.toFixed(2)}, obesidade grau III ou mórbida`);
    }
  };

  return (
    <>
      {result && (
        <p>Resultado do seu IMC: {result}</p>
      )}
      <form onSubmit={calcularIMC}>
        <h1>CALCULADORA IMC</h1>

        <label htmlFor="peso">Peso (kg)</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          id="peso"
          placeholder="Peso"
          required
        />

        <label htmlFor="altura">Altura (m)</label>
        <input
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          id="altura"
          placeholder="Altura"
          required
        />

        <button type="submit">Calcular</button>
      </form>
    </>
  );
}

export default App;
