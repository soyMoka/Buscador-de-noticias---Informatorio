import './Header.css'
const varLogo = './images/logo-prueba.png'

const Header = ()=>{
    return(
        <header className="header-container bg-color1">
            <a href='/'>
                <img src={varLogo} alt="Logo" width='80' className=' al-center p-1' />
            </a>
            <p className='text-color-light f-2 fw-4 al-center p-1'>Buscador de noticias</p>
            
        </header>
    )
}
export default Header;
