import { Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import { ListaNoticias } from "../components/Noticias/Noticias";
import { getListadoNoticias } from "../services/noticias-api";
import SinResultados from "../components/Errores/SinResultados";
import CuantasNoticias from '../components/CuantasNoticias/CuantasNoticias' 

import { useSearchParams } from "react-router-dom";

import './pagina.css'

const PaginaBuscador = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(searchParams.get('query')) {
            buscarNoticia(pagina)
        }
    },[searchParams, pagina]);

    const buscarNoticia = async () => {
        setIsLoading(true);
        const { articles: news, totalResults } = await getListadoNoticias(searchParams.get('query'), pagina);
        
       

        setNoticias(news);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setTotalNoticias(totalResults)
        setIsLoading(false);
    }

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda});
    };
    
    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    };
    
    return (
        <Container maxWidth='md' >
            <Buscador onBuscar={onBuscar}/>
            { isLoading && <Loading /> } 
            { noticias && noticias.length !== 0 && <CuantasNoticias CuantasNoticiasHay={totalNoticias}/> }
            { noticias && noticias.length === 0 && <SinResultados />}
            { noticias && noticias.length !== 0 && <ListaNoticias noticias={noticias}/> }
            { noticias && noticias.length !== 0 && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }  
        </Container>
        )
}

export default PaginaBuscador;