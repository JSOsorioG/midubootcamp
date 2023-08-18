/**
 * TODO: Este módulo se usa como ejemplo para crear un módulo en un archivo aparte y
 * TODO: Además enviarle a este props para modificar su contenido
 * @returns
 */

const Descripcion = (props) => {
    return <p style={{color: props.color}}>{props.message}</p>
  }

  export default Descripcion