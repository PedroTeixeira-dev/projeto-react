import { useEffect, useState } from "react"

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log("o componente iniciou")

        return () => {
            console.log("o componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("o estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log("vc mudou a nota. nota A:" + materiaA)
    }, [materiaA, materiaB, materiaC])

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

            <ul>
                {[1,2,3,4,5].map(item => <li key={item} > {item} </li>)}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number"  placeholder="Nota da Materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number"  placeholder="Nota da Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number"  placeholder="Nota da Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {rederizaResultado()}
        </form>
    )
}

export default Formulario