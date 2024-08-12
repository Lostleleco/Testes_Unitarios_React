import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);  
  const [tarefaTemp, setTarefaTemp] = useState('');

  function CadastrarTarefa() {
    setTarefas([...tarefas, tarefaTemp]);  
    setTarefaTemp(''); 
  }

  return (
    <div className="App">
      <input
        type="text"
        value={tarefaTemp}
        onChange={evento => setTarefaTemp(evento.target.value)}
      />
      <button onClick={CadastrarTarefa} type="button">
        Cadastrar
      </button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>  
        ))}
      </ul>
    </div>
  );
}

export default App;
