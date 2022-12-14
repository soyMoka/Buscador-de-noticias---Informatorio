import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import Buscador from './components/Buscador/Buscador'

import Noticias from './components/Noticias/Noticias'




/* ####################| Buscador |################## */

test('Renderizar buscador', () => {
  // Arange
  render(<Buscador />);
  const textInput = screen.getByPlaceholderText('Buscar Noticia')
  // Assert  
  expect(textInput).toBeInTheDocument
});

test('boton buscar desactivado por defecto', ()=>{
  // Arange
  render(<Buscador />);
  // Assert
  expect(screen.getByRole('button')).toBeDisabled()
});

test('boton buscar activado al tercer caractér', ()=>{
  // Arange
  render(<Buscador />);
  // Act
  userEvent.click(screen.getByPlaceholderText('Buscar Noticia'))
  userEvent.keyboard('hol')
  // Assert
  expect(screen.getByRole('button').disabled).toBeFalsy()
});

test('boton desactivado con 2 caractéres', ()=>{
  // Arange
  render(<Buscador />);
  // Act
  userEvent.click(screen.getByPlaceholderText('Buscar Noticia'))
  userEvent.keyboard('ho')
  // Assert
  expect(screen.getByRole('button').disabled).toBeTruthy()
  
});


/* ###############| Noticias |############### */

const testNoticia = {
  "source":{"id":null,"name":"test-name"},
  "author":"test-author",
  "title":"test-title",
  "description":"test-description",
  "url":"test-url",
  "urlToImage":"test-img",
  "publishedAt":"1111-11-11T11:11:11Z",
  "content":"test-content"}

  

test('Renderizar noticia', ()=>{
  // Arange
  const noticia = testNoticia;
  render(<Noticias noticia={noticia}/>)
  // Act
  
  // Assert
  expect(screen.getByText('test-title')).toBeInTheDocument
  expect(screen.getByText('test-author')).toBeInTheDocument
  expect(screen.getByText('test-description')).toBeInTheDocument
  expect(screen.getByRole('img').src === 'test-img').toBeInTheDocument
  
  // noticia. publishedAt Title urlToImage source.name description author publishedAt
});


test('Renderizar lista de noticias', () => {
  
});

