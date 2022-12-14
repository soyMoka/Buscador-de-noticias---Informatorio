import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';
import { DateTime } from 'luxon';

function ponerFecha(from, format) {

  return DateTime.fromISO(from).toLocaleString(format)
  
}

const Noticia = ({
  noticia,
  onChange
}) => {
    const onCardClick = () => {
      onChange && onChange(noticia);
    };
    return (
      <Card sx={{ width: 250, marginBottom: 5 }}>
        <CardActionArea onClick={onCardClick}>
          <CardMedia
            component="img"
            height="140"
            width={250}
            image={noticia.urlToImage  === NA ? DEFAULT_IMAGE : noticia.urlToImage}
            alt={noticia.title}
          />
          <CardContent>
            <Typography variant="body3" color="text.secondary" >
              From: {noticia.source.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" mt={2}>
              {noticia.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {noticia.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" align='right' mt={2}>
                {noticia.author}
            </Typography>
            <Typography variant="body3" color="text.primary" mt={2}>
                publicado el {ponerFecha(noticia.publishedAt, {})} a las {ponerFecha(noticia.publishedAt, {hour: '2-digit', minute: '2-digit', hourCycle: 'h23'})}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export const ListaNoticias = ({ noticias }) => {
    const openInNewTab = (url) => {
      window.open(url, '_blank', '');
    };
    const onNoticiaClick = ({url}) => {
      openInNewTab(url);
    }
    
    return (
      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '20px',
      }}>
        {
          noticias.map((noticia, i) => {
            return <Noticia key={i +'-'+noticia.publishedAt} noticia={noticia} onChange={onNoticiaClick}/>
        })
        }
      </section>
    )
}

export default Noticia;
