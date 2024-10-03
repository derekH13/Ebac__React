

import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {

  const peso = useRef(0)
  const altura = useRef(0)
  const [result, setResult] = useState()

  function calcularIMC(e){

      e.preventDefault()

      posicaoTable(peso.current / altura.current)
  }


  function posicaoTable(IMC){
    if(IMC < 18.5){
      setResult(`${IMC}, você esta abaixo do peso`)

    }else if(IMC > 18.5 && IMC < 24.9){
      setResult(`${IMC}, Peso adequado`)

    }else if(IMC > 25.0 && IMC < 29.9){
      setResult(`${IMC}, Sobrepeso`)

    }else if(IMC > 30.0 && IMC < 34.9){
      setResult(`${IMC}, Obesidade grau I`)

    }else if(IMC > 35.0 && IMC <  39.9){
      setResult(`${IMC}, Obesidade grau II`)

    }else if(IMC > 40.0){
      setResult(`${IMC}, Obesidade grau III ou mórbida`)

    }




  }

  console.log(result);
  



  return (
    <>
      <form
      onSubmit={(e) => calcularIMC(e)}
      action="">

        <label htmlFor="peso">Peso</label>
        <input
        onChange={(e) => peso.current = e.target.value}
        type="number" id='peso'/>

        
        <label htmlFor="Altura">Altura</label>
        <input
        onChange={(e) => altura.current = e.target.value}
        type="number" id='Altura'/>


        {
          result && (
            <p>resultado do seu IMC: {result} <br />
            
            </p>
          )
        }


        <button type="submit">Calcular</button>

      </form>
    </>
  )
}

export default App
