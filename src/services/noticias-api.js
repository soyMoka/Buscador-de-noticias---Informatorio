const LANG = 'es'
const API_KEY = '30ad71315c9d4cb3bd514a6c2701c648'
const OMDB_API = 'https://newsapi.org/v2/everything';

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}?q=${criterioBusqueda}&apiKey=${API_KEY}&language=${LANG}&page=${paginaActual}&sortBy=publishedAt`);
    const noticias = await respuesta.json();
    
    console.log('servicio .json')
    console.log(noticias)
    
    return noticias;
}

export const getNoticia = async idNoticia => {
    const respuesta = await fetch(`${OMDB_API}?apikey=${API_KEY}&i=${idNoticia}`);
    const noticia = await respuesta.json();
    return noticia;
}
