import { useState} from 'react'
import './App.css';

function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calImc (){

      const alt = altura / 100
      const imc = peso / (alt * alt)

      if(imc <= 18.6){
        setMensagem("vc esta abaixo do peso! seu imc: " + imc.toFixed(2))
      }else if(imc > 18.6 && imc < 24.9){
        setMensagem("peso ideal! seu Imc: " + imc.toFixed(2))
      }else if(imc >= 24.9 && imc < 34.9){
        setMensagem("voçë esta levemente acima do peso seu imc: "  + imc.toFixed(2))
      }else if(imc > 34.9){
        setMensagem("cuidado, obesidade! seu imc: " + imc.toFixed(2))
      }
  }

  return (
    <div className="app">
        <h1>Calculadora IMC</h1>
        <span>Digite logo abaixo seu peso(Kg) e altura(cm)</span>  
        <div className='area-input'>
          <input type="text" placeholder='Peso em (Kg), ex: 90Kg'
           value={peso} onChange={(e) => setPeso(e.target.value)}/>

          <input type="text" placeholder='Altura em (cm), ex: 184' 
          value={altura} onChange={(e) => setAltura(e.target.value)}/>

          <button onClick={calImc}>Calcular</button>
        </div>
        <h4>{mensagem}</h4>
    </div>
  );
}

export default App;
