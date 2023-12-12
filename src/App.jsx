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
    <h1>Ola, {pessoa.nome}</h1>
    <h2>{pessoa.idade}</h2>
    {estaDeDia && "Bom dia"}
    </>
  )
}

export default App
