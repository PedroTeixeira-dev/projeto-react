import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"

function App() {

  const nome = "Pedro"

  function retornaNome(){
    return nome
  }

  const pessoa = {
    nome: "Maria", 
    idade: 25
  }

  let estaDeDia = true

  return (
    <>
    <Perfil nome='Pedro' endereco='https://github.com/PedroTeixeira-dev.png' />
    <Formulario />
    <h1>Ola, {pessoa.nome}</h1>
    <h2>{pessoa.idade}</h2>
    {estaDeDia && "Bom dia"}
    </>
  )
}

export default App
