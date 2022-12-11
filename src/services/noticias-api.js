const LANG = 'es';
const API_KEY = '30ad71315c9d4cb3bd514a6c2701c648';
const OMDB_API = 'https://newsapi.org/v2/everything';
const NOTICIAS_POR_PAGINA = 10;

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}?q=${criterioBusqueda}&apiKey=${API_KEY}&language=${LANG}&page=${paginaActual}&sortBy=publishedAt&pageSize=${NOTICIAS_POR_PAGINA}`);
    const noticias = await respuesta.json();
/*
    console.log('servicio .json')
    console.log(noticias)
 */    
    return noticias;
}

