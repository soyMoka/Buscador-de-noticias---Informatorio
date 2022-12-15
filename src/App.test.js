import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import { unmountComponentAtNode } from 'react-dom';


import Buscador from './components/Buscador/Buscador'
import Noticias from './components/Noticias/Noticias'
import {ListaNoticias} from './components/Noticias/Noticias'
import { act } from 'react-dom/test-utils';


/* #####################| Contenedor |#################### */
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

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

const apiSimListaNoticias = [
    {
      "source":{"id":null,"name":"test-name-1"},
      "author":"test-author-1",
      "title":"test-title-1",
      "description":"test-description-1",
      "url":"test-url-1",
      "urlToImage":"test-img-1",
      "publishedAt":"1111-11-11T11:11:11Z",
      "content":"test-content-1"},
      {
        "source":{"id":null,"name":"test-name-2"},
        "author":"test-author-2",
        "title":"test-title-2",
        "description":"test-description-2",
        "url":"test-url-2",
        "urlToImage":"test-img-2",
        "publishedAt":"1111-11-12 T11:11:11Z",
        "content":"test-content-2"
      }
  ];
  

test('Renderizar noticia', ()=>{
  // Arange
  const apiSimNoticia = testNoticia;
  render(<Noticias noticia={apiSimNoticia}/>)
  // Act
  
  // Assert
  expect(screen.getByText('test-title')).toBeInTheDocument
  expect(screen.getByText('test-author')).toBeInTheDocument
  expect(screen.getByText('test-description')).toBeInTheDocument
  expect(screen.getByRole('img').src === 'test-img').toBeInTheDocument
  
  // noticia. publishedAt Title urlToImage source.name description author publishedAt
});


test('Renderizar lista de noticias', () => {
  render(<ListaNoticias noticias={apiSimListaNoticias} />)

  expect(screen.getByText('test-author-1')&&screen.getByText('test-author-2')).toBeInTheDocument
  
});

it('prueba de it y act (renderizar buscador)', () => {
  act(()=>{
    render(<Buscador />);
  })
expect(screen.getByRole('button')).toBeDisabled()
expect(container.querySelector('Buscar Noticia')).toBeInTheDocument

});
