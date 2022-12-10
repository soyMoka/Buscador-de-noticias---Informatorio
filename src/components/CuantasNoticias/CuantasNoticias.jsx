const CuantasNoticias = (props)=>{
    
    console.log(props.CuantasNoticiasHay);
    return (
        <p>Estas viendo 10 noticias de {props.CuantasNoticiasHay} </p>
    )
}
export default CuantasNoticias;