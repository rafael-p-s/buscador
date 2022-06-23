import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import axios from "axios";

import api from './services/api';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch(){

    if(input === ''){
      alert("Preencha algum cep!")
      return;

    }

    try{
      // // const response = await api.get(input+"/json");
      // const response = await api.get(`${input}/json`);
      // console.log(response)

        axios.get(`https://viacep.com.br/ws/${input}/json/`).then(res => {
       console.log(res.data)
      })

    }catch{
      alert("Ops erro ao buscar");
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

          <h2>Cep: 19020360</h2>

          <span>Rua: Teste alguma</span>
          <span>Complemente: Algum complemento</span>
          <span>Vila Rosa</span>
          <span>Presidente Prudente - SP</span>

        </main>

    </div>
  );
}

export default App;
