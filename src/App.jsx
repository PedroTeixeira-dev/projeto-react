import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import RepoList from "./components/RepoList"


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

  const [formularioEstaVisivel, setFormularioEstaVisivel ] =useState(true)

  return (
    <>
    <Perfil nomeUsuario="PedroTeixeira-dev" />
    <RepoList />
    {formularioEstaVisivel && (
      <Formulario />
    )}


    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    <h1>Ola, {pessoa.nome}</h1>
    <h2>{pessoa.idade}</h2>
    {estaDeDia && "Bom dia"}
    </>
  )
}

export default App
