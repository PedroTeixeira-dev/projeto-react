import { useEffect, useState } from "react";

import './ReposList.modules.css';


const RepoList = () => {

    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const API = 'https://api.github.com/users/PedroTeixeira-dev/repos'

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(API)
            const data = await response.json()

            setTimeout(()=> {
                setRepos(data)
                setEstaCarregando(false)
            }, 3000)
        }
        fetchData()
    }, [])

    return (
        
        <div className="container">

        {estaCarregando && (
            <h1>Carregando ....</h1>
        )}
        
        <ul className='list'>
            {/*repos.map(repositorio => ( */}
            {repos.map(({id, name, language, html_url}) => (
                <li className='listItem' key={id}>
                    <div className='listName'>
                        <b> Nome:</b> {name} <br/>
                    </div>
                    <div className="itemLanguage">
                    <b> Linguagem:</b> {language} <br/>
                    </div>
                    <a className="itemLink" target="_blank" href={html_url}>Visitar no github</a>
                </li>
            ))}
        </ul>
        </div>
        
    )
}

export default RepoList