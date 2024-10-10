import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Coleguinha } from './components/coleguinha/Coleguinha.jsx'

function App() {
  // const [nome, setNome] = useState('Angelo ')
  


  const alunos = [
    {
      nome: 'Samuel',
      nome_completo: 'Samuel Silva'
    },
    {
      nome: 'Angelo',
      nome_completo: 'Angelo Lustosa',
    },
    {
      nome: 'Breno',
      nome_completo: 'Breno Aragão',
    },
    {
      nome: 'Rômulo',
      nome_completo: 'Rômulo Lustosa',
    },
  ]


  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Lista de Alunos da FS36</h1>
      {alunos.map(aluno => <Coleguinha nome= {aluno.nome}
       nome_completo={aluno.nome_completo} 
       />)}
      {/* <h3>{nome}</h3>
      <p>Angelo Lustosa</p> */}
      <div className="card">
        {/* <button onClick={() => setNome(`${nome} Lustosa`)}>
          Adicionar Sobrenome
        </button> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
