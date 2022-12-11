import './CuantasNoticias.css'

const CuantasNoticias = (props)=>{
    
    return (
        <p className='cuantas-noticias' id='cuantas-noticias'>Estas viendo 10 noticias de {props.CuantasNoticiasHay} </p>
    )
}
export default CuantasNoticias;