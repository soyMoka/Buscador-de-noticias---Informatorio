import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Paper from '@mui/material/Paper';








const Buscador = ({ onBuscar }) => {
  const [criterioBusqueda, setCriterioBusqueda] = useState('');

  return (
    <Paper
      component="div"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxMidth: 400, marginTop:10  }}
      
    >
      <InputBase
        sx={{ ml:1 , flex: 1 }}
        placeholder="Buscar Noticia"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={criterioBusqueda}
        onChange={(e) => { 
          setCriterioBusqueda(e.target.value)
        }}
        onKeyDown={(e)=>{
          if (criterioBusqueda.length > 2 && e.code === 'Enter')
            {
              console.log('funcò me parece chin chin')
              onBuscar(criterioBusqueda)
            }
        }}
      />
      <IconButton
        type="button"
        sx={{ p: '0.5em' }}
        aria-label="search"
        onClick={() => {
            
            if (criterioBusqueda.length > 2)
            {
              onBuscar(criterioBusqueda)
            }
          }
        }

      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Buscador