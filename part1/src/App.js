import './App.css';
import Descripcion from './Descripcion.js'


/** 
 * ? Se crea el componente App utilizando la sintaxis function Nombre()
 * ? Se crea el componente Mensaje utilizando la sintaxis const Nombre = () =>
 * ! Ambas opciones de sintaxis son válidas al igual que en las funciones
 * ! Se recomienda crear componentes dentro de otros componentes
 * ! Los nombre de los módulos siempre deben comenzar con mayúscula, sino pueden haber problemas al uzar JSX y e incluir sus nombres dentro de <>
 * 
 * ? Se importa el módulo Descripcion desde otro archivo separado
 * 
 * TODO: Las etiquetas en JSX siempre deben cerrarse (incluso br, img, etc). Esto puede hacerse
 * TODO: utilizando etiqueta de cierre <br></br> o con un / al final de la etiqueta de apertura
 * TODO: <br/>
*/

const Mensaje = () => {
  return <h1>Vamos a aprender creando diferentes modulos</h1>
}

function App() {
  const mensaje = 'Hola Mundo'
  const a = 2
  const b = 3

  return (
    <div className="App">
      {mensaje + ' esto es JSX'}
      <br /> {/*Esta es la forma de comentar en JSX*/}
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {a + b}
      </div>
      {+new Date()}
      <Mensaje />
      <Descripcion color='blue' message='Estamos trabajando en un curso de React'></Descripcion> {/*Este es un ejemplo de como se mandan props a un módulo*/}
      <Descripcion color='green' message='Este curso nos ayudará mucho pero siempre se debe profundizar mas'></Descripcion>
    </div>
  );
}

export default App;
