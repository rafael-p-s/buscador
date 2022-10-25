//
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import axios from "axios";

import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState ({});

  async function handleSearch(){

    if(input === ''){
      alert("Preencha algum cep!")
      return;

    }

    try{
        await axios.get(`https://viacep.com.br/ws/${input}/json/`,
        ).then(res => {
       setCep(res.data)
       setInput("");
      })
      
    }catch{
      alert("Ops erro ao buscar");
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
    <div className="containerInput">
    
      <input type="text" placeholder="Digite seu cep..." value={input}
      onChange={(e) => setInput(e.target.value) }/>

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color='#FFF'/>
      </button>

    </div>

        <main className='main'>

          <h2>Cep: {cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}-{cep.uf}</span>

        </main>

    </div>
  );
}

export default App;
