import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';
import { useNavigate } from 'react-router-dom';


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
            alt={noticia.Title}
          />
          <CardContent>
            <Typography variant="body3" color="text.secondary">
                From: {noticia.source.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {noticia.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {noticia.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {noticia.author}
            </Typography>
            <Typography variant="body3" color="text.primary">
                {noticia.publishedAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export const ListaNoticias = ({ noticias }) => {
    const navigate = useNavigate();
    const onNoticiaClick = ({ imdbID }) => {
      navigate(`/noticias/${imdbID}`);
    }
    console.log(noticias)
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
