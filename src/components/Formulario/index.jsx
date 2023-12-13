import { useState } from "react"

const Formulario = () => {

    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, setNome] = useState('')

    const alteraNome = (evento) => {
        console.log(evento)
        setNome(evento.target.value)
    }

    const rederizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma/3

        if (media >= 7) {
            return (
                <p>Ola {nome}, voce foi aprovado</p>
            )
        } else {
            return (
                <p>Ola {nome}, voce foi reprovado</p>
            )
        }
    }

    return(
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number"  placeholder="Nota da Materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number"  placeholder="Nota da Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number"  placeholder="Nota da Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {rederizaResultado()}
        </form>
    )
}

export default Formulario