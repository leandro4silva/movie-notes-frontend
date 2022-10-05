import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { MovieItem } from "../../components/MovieItem";
import { Input } from "../../components/Input";

import { api } from "../../services/api";


import { Container, Content } from "./styles";

export function Home() {
    const [search, setSearch] = useState("")

    const [data, setData] = useState([])

    const navigate = useNavigate()

    function handleDetails(noteId){
        navigate(`/details/${noteId}`)
    }

    useEffect(()=> {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tag`)
            setData(response.data)
        } 
        
        fetchNotes()
    }, [search])

    return (
        <Container>
            <Header handleSearch={setSearch}></Header>
            <Content>
                <header>
                    <h2>Meus Filmes</h2>
                    <Link to="/new"><FiPlus /> Adicionar filme</Link>
                </header>
                <div className='search'>
                    <Input       
                        type="text" 
                        placeholder="Pesquisar pelo titulo"
                        onChange={e=> setSearch(e.target.value)}
                    ></Input>
                </div>

                <div className="movie-list">
                    {                  
                        data && data.map(note => {                      
                            return (
                                <MovieItem 
                                    key={note.id} 
                                    data={note}
                                    onClick={() => handleDetails(note.id)} 
                                />
                            )                
                        })                   
                    }
                </div>
            </Content>

        </Container>
    )
}