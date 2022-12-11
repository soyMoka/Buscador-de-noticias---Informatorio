import './CuantasNoticias.css'

const CuantasNoticias = (props)=>{
    
    return (
        <p className='cuantas-noticias' id='cuantas-noticias'>Estas viendo {Math.min(10, props.CuantasNoticiasHay )} noticias de {props.CuantasNoticiasHay} </p>
    )
}
export default CuantasNoticias;